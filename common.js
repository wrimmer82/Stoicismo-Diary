// common.js - Estratto chirurgicamente dall'originale

'use strict';

const SUPABASE_URL = 'https://fayuadwpchhrxafbdntw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheXVhZHdwY2hocnhhZmJkbnR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMTY3NDksImV4cCI6MjA4MDY5Mjc0OX0._D_c4Q0NFFSRfwiMKbrbqcrSbGDYfUSQ6BqjKjhauRE';
const sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUserRole = null;
let currentUserProfile = null;

async function getSessionRobusta() {
    const hash = window.location.hash?.startsWith('#') ? window.location.hash.slice(1) : '';
    const params = new URLSearchParams(hash);
    const access_token = params.get('access_token');
    const refresh_token = params.get('refresh_token');

    if (access_token && refresh_token) {
        const { data, error } = await sbClient.auth.setSession({
            access_token,
            refresh_token
        });
        if (!error && data?.session) {
            history.replaceState({}, document.title, window.location.pathname);
            return data.session;
        }
    }

    const { data } = await sbClient.auth.getSession();
    return data?.session ?? null;
}

async function loadUserData(user) {
    try {
        const { data: profile, error } = await sbClient
            .from('profiles')
            .select('name, role, trial_ends_at, is_trial_expired')
            .eq('id', user.id)
            .single();

        if (error) {
            console.error('❌ Errore caricamento profilo:', error);
            const fallback = user.email?.split('@')[0] || 'Stoico';
            document.getElementById('userName').textContent = fallback;
            return;
        }

        currentUserProfile = profile;
        currentUserRole = profile?.role || 'vip';

        const displayName = profile?.name || 
                           user.user_metadata?.full_name || 
                           user.user_metadata?.name || 
                           user.email?.split('@')[0] || 
                           'Stoico';

        console.log('✅ Profilo caricato:', { 
            name: displayName, 
            role: currentUserRole,
            trial_ends_at: profile?.trial_ends_at,
            is_trial_expired: profile?.is_trial_expired
        });

        document.getElementById('userName').textContent = displayName;
        updateRoleBadge(currentUserRole, profile);

    } catch (err) {
        console.error('⚠️ Errore generale caricamento utente:', err);
        const fallback = user.email?.split('@')[0] || 'Stoico';
        document.getElementById('userName').textContent = fallback;
    }
}

function updateRoleBadge(role, profile) {
    const badgeContainer = document.getElementById('roleBadge');
    const roleIcon = document.getElementById('roleIcon');
    const roleText = document.getElementById('roleText');

    if (!role) {
        badgeContainer.classList.add('hidden');
        return;
    }

    badgeContainer.classList.remove('master', 'pro', 'vip', 'vip-expired');

    if (role === 'master') {
        badgeContainer.classList.add('master');
        roleIcon.textContent = '♛';
        roleText.textContent = 'MASTER';
    } else if (role === 'pro') {
        badgeContainer.classList.add('pro');
        roleIcon.textContent = '💎';
        roleText.textContent = 'PRO';
    } else if (role === 'vip') {
        if (profile?.is_trial_expired === true) {
            badgeContainer.classList.add('vip-expired');
            roleIcon.textContent = '⌛';
            roleText.textContent = 'TRIAL SCADUTO';
        } else {
            badgeContainer.classList.add('vip');
            roleIcon.textContent = '★';
            roleText.textContent = 'VIP';
        }
    }

    badgeContainer.classList.remove('hidden');
}

function arabicToRoman(num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let roman = '';
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            roman += syms[i];
            num -= val[i];
        }
    }
    return roman;
}

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function calculateStreak(reflections) {
    if (!reflections || reflections.length === 0) return 0;

    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    const uniqueDates = [...new Set(reflections.map(r => r.date))].sort().reverse();

    if (uniqueDates[0] !== today && uniqueDates[0] !== yesterday) {
        return 0;
    }

    let streak = 0;
    let currentDate = uniqueDates[0] === today ? new Date() : new Date(Date.now() - 86400000);

    for (const dateStr of uniqueDates) {
        const refDate = new Date(dateStr);
        const expectedDate = new Date(currentDate);
        
        expectedDate.setHours(0, 0, 0, 0);
        refDate.setHours(0, 0, 0, 0);

        if (refDate.getTime() === expectedDate.getTime()) {
            streak++;
            currentDate = new Date(currentDate.getTime() - 86400000);
        } else {
            break;
        }
    }

    return streak;
}

async function loadProgressData(userId) {
    console.log('📊 Carico progresso per user:', userId);
    
    try {
        const { data: reflections, error: reflError } = await sbClient
            .from('reflections')
            .select('date, created_at')
            .eq('user_id', userId)
            .order('date', { ascending: false });

        if (reflError) {
            console.error('❌ Errore caricamento riflessioni:', reflError);
            updateProgressUI({
                streak: 0,
                totalReflections: 0,
                completedChallenges: 0,
                totalChallenges: 365
            });
            return;
        }

        console.log('✅ Riflessioni caricate:', reflections?.length || 0);

        const streak = calculateStreak(reflections);
        const totalReflections = reflections?.length || 0;

        updateProgressUI({
            streak,
            totalReflections,
            completedChallenges: totalReflections,
            totalChallenges: 365
        });

    } catch (error) {
        console.error('❌ Errore generale:', error);
        updateProgressUI({
            streak: 0,
            totalReflections: 0,
            completedChallenges: 0,
            totalChallenges: 365
        });
    }
}

function updateProgressUI(data) {
    const percentage = Math.round((data.completedChallenges / data.totalChallenges) * 100);

    document.getElementById('headerStreak').textContent = data.streak;
    document.getElementById('mobileStreak').textContent = data.streak;
    document.getElementById('progressStreak').textContent = data.streak;
    document.getElementById('progressReflections').textContent = data.totalReflections;
    document.getElementById('progressChallenges').textContent = `${data.completedChallenges}/${data.totalChallenges}`;
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressPercentage').textContent = `${percentage}%`;

    document.getElementById('progressStreakDesktop').textContent = data.streak;
    document.getElementById('progressReflectionsDesktop').textContent = data.totalReflections;
    document.getElementById('progressChallengesDesktop').textContent = `${data.completedChallenges}/${data.totalChallenges}`;
    document.getElementById('progressBarDesktop').style.width = `${percentage}%`;
    document.getElementById('progressPercentageDesktop').textContent = `${percentage}%`;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        background: #1e293b;
        border: 1px solid #fbbf24;
        color: #fbbf24;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        transform: translateY(0);
        transition: transform 0.3s ease;
        z-index: 9999;
        max-width: 20rem;
        font-size: 0.875rem;
        font-weight: 500;
    `;
    
    setTimeout(() => {
        toast.style.transform = 'translateY(8rem)';
    }, 3000);
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileSidebar = document.getElementById('mobileSidebar');

    if (mobileMenuBtn && mobileSidebar && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileSidebar.classList.add('active');
            mobileMenuOverlay.classList.add('active');
        });
    }

    function closeMobileMenuFunc() {
        if (mobileSidebar && mobileMenuOverlay) {
            mobileSidebar.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
        }
    }

    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenuFunc);
    }
}

async function handleLogout() {
    console.log('👋 Logout...');
    await sbClient.auth.signOut();
    window.location.href = 'index.html';
}

// ===== NUOVA IMPLEMENTAZIONE: CONTROLLO SUBSCRIPTION STATUS =====
async function checkSubscriptionStatus() {
    try {
        const { data: { user } } = await sbClient.auth.getUser();
        if (!user) return;

        const { data: profile, error: profileError } = await sbClient
            .from('profiles')
            .select('role, subscription_status')
            .eq('id', user.id)
            .single();

        if (profileError || !profile) {
            console.error('❌ Errore caricamento profilo subscription:', profileError);
            return;
        }

        if (profile.role !== 'pro') {
            return;
        }

        console.log('🔍 Controllo subscription:', profile.subscription_status);

        // BLOCCO IMMEDIATO SE PAST_DUE
        if (profile.subscription_status === 'past_due') {
            console.error('❌ BLOCCO: Subscription in stato past_due');
            showPaymentBlockedOverlay();
            return;
        }

        // NOTICE SE CANCELED (ma ancora valido)
        if (profile.subscription_status === 'canceled') {
            const { data: subscription } = await sbClient
                .from('subscriptions')
                .select('current_period_end')
                .eq('user_id', user.id)
                .single();

            if (subscription) {
                const endDate = new Date(subscription.current_period_end);
                const now = new Date();

                if (endDate > now) {
                    const daysLeft = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));
                    console.log('🔔 Subscription cancellata, valida per', daysLeft, 'giorni');
                    showCancellationNoticeBanner(endDate, daysLeft);
                } else {
                    console.error('❌ Subscription scaduta - Redirect a pricing');
                    window.location.href = '/pricing.html';
                }
            }
        }

    } catch (error) {
        console.error('❌ Errore checkSubscriptionStatus:', error);
    }
}

// OVERLAY BLOCCO PAGAMENTO FALLITO
function showPaymentBlockedOverlay() {
    const existing = document.getElementById('payment-blocked-overlay');
    if (existing) return;

    console.log('🚨 Mostra overlay blocco pagamento');

    const overlay = document.createElement('div');
    overlay.id = 'payment-blocked-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    overlay.innerHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 450px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            animation: slideUp 0.4s ease;
        ">
            <div style="
                font-size: 80px; 
                margin-bottom: 20px;
                line-height: 1;
            ">⚠️</div>
            
            <h2 style="
                font-size: 24px;
                color: #1f2937;
                margin-bottom: 12px;
                font-weight: 700;
                font-family: 'Inter', -apple-system, sans-serif;
            ">Pagamento Non Riuscito</h2>
            
            <p style="
                font-size: 15px;
                color: #6b7280;
                margin-bottom: 28px;
                line-height: 1.5;
                font-family: 'Inter', -apple-system, sans-serif;
            ">
                Il rinnovo del tuo abbonamento è fallito.<br>
                Aggiorna il metodo di pagamento per continuare.
            </p>

            <button onclick="redirectToCustomerPortal()" style="
                background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                color: white;
                border: none;
                padding: 16px 40px;
                font-size: 16px;
                font-weight: 700;
                border-radius: 10px;
                cursor: pointer;
                width: 100%;
                margin-bottom: 16px;
                transition: all 0.2s;
                font-family: 'Inter', -apple-system, sans-serif;
                box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
            " 
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(220, 38, 38, 0.4)'" 
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(220, 38, 38, 0.3)'">
                🔧 Aggiorna Metodo di Pagamento
            </button>

            <a href="mailto:support@thestoicjourney.app" style="
                display: block;
                color: #9ca3af;
                font-size: 13px;
                text-decoration: none;
                margin-top: 12px;
                font-family: 'Inter', -apple-system, sans-serif;
                transition: color 0.2s;
            " onmouseover="this.style.color='#6b7280'" onmouseout="this.style.color='#9ca3af'">
                Hai bisogno di aiuto? Contatta il supporto
            </a>
        </div>

        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { 
                    transform: translateY(30px); 
                    opacity: 0; 
                }
                to { 
                    transform: translateY(0); 
                    opacity: 1; 
                }
            }
        </style>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
}

// BANNER CANCELLAZIONE (solo informativo)
function showCancellationNoticeBanner(endDate, daysLeft) {
    const existing = document.getElementById('cancellation-notice');
    if (existing) return;

    const endDateStr = endDate.toLocaleDateString('it-IT');
    console.log('🔔 Mostra banner cancellazione -', daysLeft, 'giorni rimasti');

    const notice = document.createElement('div');
    notice.id = 'cancellation-notice';
    notice.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        color: white;
        padding: 14px;
        text-align: center;
        z-index: 99999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideDown 0.4s ease;
    `;

    notice.innerHTML = `
        <div style="
            max-width: 1200px; 
            margin: 0 auto; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 12px; 
            flex-wrap: wrap;
            font-family: 'Inter', -apple-system, sans-serif;
        ">
            <span style="font-size: 20px;">🔔</span>
            <span style="font-size: 15px; font-weight: 600;">
                Abbonamento cancellato. Accesso fino al <strong>${endDateStr}</strong> (${daysLeft} ${daysLeft === 1 ? 'giorno' : 'giorni'})
            </span>
            <button onclick="window.location.href='/pricing.html'" style="
                background: white;
                color: #3b82f6;
                border: none;
                padding: 8px 20px;
                border-radius: 8px;
                font-weight: 700;
                cursor: pointer;
                font-size: 14px;
                transition: transform 0.2s;
                font-family: 'Inter', -apple-system, sans-serif;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                Riattiva
            </button>
        </div>
        <style>
            @keyframes slideDown {
                from { transform: translateY(-100%); }
                to { transform: translateY(0); }
            }
        </style>
    `;

    document.body.prepend(notice);
    
    const bodyPadding = parseInt(window.getComputedStyle(document.body).paddingTop) || 0;
    document.body.style.paddingTop = (bodyPadding + 65) + 'px';
}

// ===== REDIRECT A STRIPE CUSTOMER PORTAL =====
async function redirectToCustomerPortal() {
    try {
        console.log('🔧 Redirect a Customer Portal...');

        const { data: { user } } = await sbClient.auth.getUser();
        if (!user) {
            console.error('❌ Utente non loggato');
            return;
        }

        const { data: profile } = await sbClient
            .from('profiles')
            .select('stripe_customer_id')
            .eq('id', user.id)
            .single();

        if (!profile?.stripe_customer_id) {
            console.error('❌ Nessun stripe_customer_id trovato');
            return;
        }

        console.log('✅ Customer ID:', profile.stripe_customer_id);

        // Chiama Edge Function create-portal-session
        const { data, error } = await sbClient.functions.invoke('create-portal-session', {
            body: { 
                customerId: profile.stripe_customer_id,
                returnUrl: window.location.origin + '/dashboard.html'
            }
        });

        if (error) {
            console.error('❌ Errore portal session:', error);
            return;
        }

        if (data?.url) {
            console.log('✅ Redirect a Stripe Portal:', data.url);
            window.location.href = data.url;
        }

    } catch (err) {
        console.error('❌ Errore redirectToCustomerPortal:', err);
    }
}

// ===== INIZIALIZZAZIONE ALLA FINE DEL FILE =====
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Inizializzazione dashboard...');
    
    const session = await getSessionRobusta();
    
    if (!session || !session.user) {
        console.log('❌ Nessuna sessione, redirect a login');
        window.location.href = 'login.html';
        return;
    }

    console.log('✅ Sessione valida:', session.user.email);

    await loadUserData(session.user);
    await loadProgressData(session.user.id);
    await checkSubscriptionStatus(); // ✅ CONTROLLO SUBSCRIPTION
    
    setupMobileMenu();
    
    const logoutBtn = document.getElementById('logoutBtn');
    const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    if (mobileLogoutBtn) {
        mobileLogoutBtn.addEventListener('click', handleLogout);
    }
    
    console.log('✅ Dashboard inizializzata con successo');
});
