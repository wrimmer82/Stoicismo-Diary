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
            console.error('âŒ Errore caricamento profilo:', error);
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

        console.log('âœ… Profilo caricato:', { 
            name: displayName, 
            role: currentUserRole,
            trial_ends_at: profile?.trial_ends_at,
            is_trial_expired: profile?.is_trial_expired
        });

        document.getElementById('userName').textContent = displayName;
        updateRoleBadge(currentUserRole, profile);

    } catch (err) {
        console.error('âš ï¸ Errore generale caricamento utente:', err);
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
        roleIcon.textContent = 'â™›';
        roleText.textContent = 'MASTER';
    } else if (role === 'pro') {
        badgeContainer.classList.add('pro');
        roleIcon.textContent = 'ðŸ’Ž';
        roleText.textContent = 'PRO';
    } else if (role === 'vip') {
        if (profile?.is_trial_expired === true) {
            badgeContainer.classList.add('vip-expired');
            roleIcon.textContent = 'âŒ›';
            roleText.textContent = 'TRIAL SCADUTO';
        } else {
            badgeContainer.classList.add('vip');
            roleIcon.textContent = 'â˜…';
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
    console.log('ðŸ“Š Carico progresso per user:', userId);
    
    try {
        const { data: reflections, error: reflError } = await sbClient
            .from('reflections')
            .select('date, created_at')
            .eq('user_id', userId)
            .order('date', { ascending: false });

        if (reflError) {
            console.error('âŒ Errore caricamento riflessioni:', reflError);
            updateProgressUI({
                streak: 0,
                totalReflections: 0,
                completedChallenges: 0,
                totalChallenges: 365
            });
            return;
        }

        console.log('âœ… Riflessioni caricate:', reflections?.length || 0);

        const streak = calculateStreak(reflections);
        const totalReflections = reflections?.length || 0;

        updateProgressUI({
            streak,
            totalReflections,
            completedChallenges: totalReflections,
            totalChallenges: 365
        });

    } catch (error) {
        console.error('âŒ Errore generale:', error);
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
    console.log('ðŸ‘‹ Logout...');
    await sbClient.auth.signOut();
    window.location.href = 'index.html';
}
