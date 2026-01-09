'use strict';

const dailyContents = {
    tipo1: {
        quote: "Non sono gli eventi che turbano gli uomini, ma le loro opinioni sugli eventi.",
        author: "Epitteto, Enchiridion",
        interpretation: "Il tuo disagio non viene dai fatti, ma da come li giudichi. Puoi sempre cambiare la tua prospettiva.",
        challenge: "Identifica una situazione stressante oggi. Scrivi il fatto oggettivo separato dalla tua interpretazione. Quale è realmente vera?"
    },
    tipo2: {
        quote: "L'impedimento all'azione fa avanzare l'azione. Ciò che sta sulla via diventa la via.",
        author: "Marco Aurelio, Meditazioni V.20",
        interpretation: "Gli ostacoli non sono nemici da evitare, ma maestri che trasformano il tuo percorso.",
        challenge: "Pensa a un ostacolo attuale. Come potrebbe questo impedimento renderti più forte o saggio? Trova un lato positivo inaspettato."
    },
    tipo3: {
        quote: "Chi non prevede eventi lontani, si espone alle disgrazie vicine.",
        author: "Seneca, Lettere a Lucilio",
        interpretation: "Immaginare il peggio non è pessimismo, ma preparazione mentale che disattiva l'ansia.",
        challenge: "Visualizza la tua paura più grande oggi. Cosa accadrebbe realmente? Sopravviveresti? Come? Scrivi un piano concreto."
    },
    tipo4: {
        quote: "Potresti lasciare la vita proprio ora. Lascia che questo determini ciò che fai, dici e pensi.",
        author: "Marco Aurelio, Meditazioni II.11",
        interpretation: "La consapevolezza della mortalità non paralizza, ma libera energia per ciò che conta davvero.",
        challenge: "Se oggi fosse l'ultimo giorno, quali tre cose faresti diversamente? Quale di queste puoi iniziare ora?"
    }
};

function getDailyContentType() {
    const dayNum = getDayOfYear();
    const cycle = (dayNum % 4) + 1;
    return `tipo${cycle}`;
}

function checkTrialStatus(profile) {
    if (!profile) {
        console.warn('⚠️ Nessun profilo, accesso libero debug');
        return { isExpired: false, isInTrial: false, reason: 'NO_PROFILE', trialEnd: null };
    }

    const role = profile.role?.toLowerCase() || '';

    if (role === 'pro' || role === 'master') {
        return { isExpired: false, isInTrial: false, reason: 'PRO_MASTER', trialEnd: null };
    }

    if (!profile.trial_ends_at) {
        return { isExpired: false, isInTrial: false, reason: 'VIP_ILLIMITATO', trialEnd: null };
    }

    const trialEnd = new Date(profile.trial_ends_at);
    trialEnd.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (profile.is_trial_expired === true || trialEnd < today) {
        return {
            isExpired: true,
            isInTrial: false,
            reason: 'TRIAL_SCADUTO',
            trialEnd: trialEnd
        };
    }

    return {
        isExpired: false,
        isInTrial: true,
        reason: 'TRIAL_ATTIVO',
        trialEnd: trialEnd
    };
}

function showTrialExpiredOverlay(trialInfo, userEmail) {
    if (document.getElementById('trialOverlay')) return;

    const dataScadenza = trialInfo.trialEnd
        ? trialInfo.trialEnd.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
        : '';

    const overlay = document.createElement('div');
    overlay.id = 'trialOverlay';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
        display: flex; justify-content: center; align-items: center; z-index: 9999;
        animation: fadeIn 0.3s ease;
    `;

    overlay.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #f4e4c1 0%, #e8d5b5 100%);
            border: 8px solid #8b4513; border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            max-width: 720px; width: 90%; padding: 48px 32px; text-align: center;
            animation: scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            font-family: 'Cinzel', serif;
        ">
            <h2 style="font-size: 2.5rem; color: #5d4037; margin: 0 0 24px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">⏰ Trial Terminato</h2>
            
            <p style="font-size: 1.125rem; color: #4e342e; line-height: 1.8; margin: 0 0 16px; font-weight: 500;">
                Hai completato i <strong>30 giorni di prova gratuita</strong>.<br>
                Per continuare il tuo cammino stoico, scegli il piano <strong>PRO</strong>.
            </p>

            ${dataScadenza ? `<p style="font-size: 0.95rem; color: #6d4c41; margin: 0 0 32px; font-style: italic;">Scaduto il ${dataScadenza}</p>` : ''}

            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px;">
                <button id="btnMensile" style="
                    background: linear-gradient(135deg, #d84315 0%, #bf360c 100%); color: white;
                    border: none; border-radius: 12px; padding: 20px 28px; font-size: 1rem; font-weight: bold;
                    cursor: pointer; box-shadow: 0 6px 20px rgba(216,67,21,0.4); transition: all 0.3s;
                    flex: 1; min-width: 200px; max-width: 280px;
                ">
                    💳 <strong>Mensile</strong><br>
                    <span style="font-size: 2rem; display: block; margin: 8px 0;">€4,99</span>
                    <span style="font-size: 0.85rem; opacity: 0.9;">al mese</span>
                </button>
                
                <button id="btnAnnuale" style="
                    background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%); color: white;
                    border: none; border-radius: 12px; padding: 20px 28px; font-size: 1rem; font-weight: bold;
                    cursor: pointer; box-shadow: 0 6px 20px rgba(46,125,50,0.4); transition: all 0.3s;
                    position: relative; flex: 1; min-width: 200px; max-width: 280px;
                ">
                    <span style="position: absolute; top: -10px; right: -10px; background: #ffc107; color: #000; 
                          padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; 
                          box-shadow: 0 2px 8px rgba(0,0,0,0.3);">-17%</span>
                    🎁 <strong>Annuale</strong><br>
                    <span style="font-size: 2rem; display: block; margin: 8px 0;">€49,99</span>
                    <span style="font-size: 0.85rem; opacity: 0.9;">all'anno</span>
                </button>
            </div>

            <button id="btnEsci" style="
                background: #757575; color: white; border: none; border-radius: 12px;
                padding: 12px 28px; font-size: 0.95rem; font-weight: 600; cursor: pointer;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2); transition: all 0.3s;
            ">Esci</button>

            <style>
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                #btnMensile:hover, #btnAnnuale:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.3); }
            </style>
        </div>
    `;

    document.body.appendChild(overlay);

    // ✅ Funzione per aprire Stripe Checkout con parametri CORRETTI
    async function openCheckout(planType, planName) {
        try {
            const { data: { user } } = await sbClient.auth.getUser();
            if (!user) {
                window.location.href = 'accedi.html';
                return;
            }

            console.log(`🔵 Click ${planName}`);
            console.log('📦 Parametri:', { userId: user.id, planType, userEmail });
            
            // Disabilita bottoni
            const btnMensile = document.getElementById('btnMensile');
            const btnAnnuale = document.getElementById('btnAnnuale');
            if (btnMensile) {
                btnMensile.innerHTML = '⏳ Caricamento...';
                btnMensile.disabled = true;
            }
            if (btnAnnuale) {
                btnAnnuale.innerHTML = '⏳ Caricamento...';
                btnAnnuale.disabled = true;
            }

            // ✅ PARAMETRI CORRETTI: planType, userId, userEmail
            const response = await fetch('https://fayuadwpchhrxafbdntw.supabase.co/functions/v1/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    planType: planType,      // 'monthly' o 'annual'
                    userId: user.id,
                    userEmail: userEmail     // ✅ AGGIUNTO!
                })
            });

            const data = await response.json();
            
            if (!response.ok) {
                console.error('❌ Errore checkout:', data);
                throw new Error(data.error || 'Errore apertura checkout');
            }

            console.log('✅ Checkout URL ricevuto:', data.url);
            window.location.href = data.url;

        } catch (error) {
            console.error('❌ Errore completo:', error);
            showToast('❌ Errore apertura checkout. Riprova.');
            
            // Reset bottoni
            const btnMensile = document.getElementById('btnMensile');
            const btnAnnuale = document.getElementById('btnAnnuale');
            if (btnMensile) {
                btnMensile.innerHTML = '💳 <strong>Mensile</strong><br><span style="font-size: 2rem; display: block; margin: 8px 0;">€4,99</span><span style="font-size: 0.85rem; opacity: 0.9;">al mese</span>';
                btnMensile.disabled = false;
            }
            if (btnAnnuale) {
                btnAnnuale.innerHTML = '<span style="position: absolute; top: -10px; right: -10px; background: #ffc107; color: #000; padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">-17%</span>🎁 <strong>Annuale</strong><br><span style="font-size: 2rem; display: block; margin: 8px 0;">€49,99</span><span style="font-size: 0.85rem; opacity: 0.9;">all\'anno</span>';
                btnAnnuale.disabled = false;
            }
        }
    }

    // Listener bottone Mensile
    document.getElementById('btnMensile').onclick = () => {
        openCheckout('monthly', 'Piano MENSILE');
    };

    // Listener bottone Annuale
    document.getElementById('btnAnnuale').onclick = () => {
        openCheckout('annual', 'Piano ANNUALE');
    };

    // Listener bottone Esci
    document.getElementById('btnEsci').onclick = async () => {
        await sbClient.auth.signOut();
        window.location.href = 'index.html';
    };
}

async function loadDailyContent() {
    const session = await getSessionRobusta();
    if (!session) {
        console.error('❌ Nessuna session attiva - redirect a login');
        window.location.href = 'accedi.html';
        return;
    }

    const dayOfYear = getDayOfYear();
    const dayRoman = arabicToRoman(dayOfYear);
    document.getElementById('dayOfYear').textContent = dayRoman;

    console.log('📅 Carico sfida per giorno:', dayOfYear);

    try {
        const { data, error } = await sbClient
            .from('sfide_quotidiane')
            .select('*')
            .eq('giorno', dayOfYear)
            .single();

        if (error) {
            console.error('❌ Errore caricamento sfida:', error);
            useFallbackContent();
            return;
        }

        if (data) {
            console.log('✅ Sfida caricata da Supabase:', data);
            setTimeout(() => {
                document.getElementById('contentSkeleton').classList.add('hidden');
                document.getElementById('dailyContent').classList.remove('hidden');

                document.getElementById('citazione-testo').textContent = data.citazione;
                document.getElementById('citazione-autore').textContent = `— ${data.autore}, ${data.opera}`;
                document.getElementById('tema-badge').textContent = data.tema;
                document.getElementById('interpretazione-testo').textContent = data.interpretazione;
                document.getElementById('micro-sfida-testo').textContent = data.micro_sfida;

                if (data.difficolta) {
                    document.getElementById('difficolta-badge').textContent = data.difficolta;
                    document.getElementById('difficolta-badge').style.display = 'inline-block';
                }
            }, 800);
        }
    } catch (err) {
        console.error('❌ Errore imprevisto:', err);
        useFallbackContent();
    }
}

function useFallbackContent() {
    const contentType = getDailyContentType();
    const content = dailyContents[contentType];

    setTimeout(() => {
        document.getElementById('contentSkeleton').classList.add('hidden');
        document.getElementById('dailyContent').classList.remove('hidden');

        document.getElementById('citazione-testo').textContent = content.quote;
        document.getElementById('citazione-autore').textContent = `— ${content.author}`;
        document.getElementById('interpretazione-testo').textContent = content.interpretation;
        document.getElementById('micro-sfida-testo').textContent = content.challenge;
        document.getElementById('tema-badge').textContent = 'Stoicismo';
        document.getElementById('difficolta-badge').style.display = 'none';
    }, 800);
}

function setupReflectionHandlers() {
    const textarea = document.getElementById('reflectionTextarea');
    const charCount = document.getElementById('charCount');
    const saveBtn = document.getElementById('saveBtn');
    const copyBtn = document.getElementById('copyBtn');

    textarea.addEventListener('input', () => {
        charCount.textContent = textarea.value.length;
    });

    saveBtn.addEventListener('click', async () => {
        const text = textarea.value.trim();
        if (!text) {
            showToast('✍️ Scrivi prima una riflessione!');
            return;
        }

        console.log('💾 Salvataggio riflessione...');

        const { data: session } = await sbClient.auth.getSession();
        if (!session?.session) {
            showToast('❌ Errore: non autenticato');
            window.location.href = 'accedi.html';
            return;
        }

        const { data, error } = await sbClient.from('reflections').insert({
            user_id: session.session.user.id,
            content: text,
            date: new Date().toISOString().split('T')[0],
            content_type: getDailyContentType()
        });

        if (error) {
            console.error('❌ Errore salvataggio:', error);
            showToast(`❌ Errore nel salvare: ${error.message}`);
        } else {
            console.log('✅ Riflessione salvata!');
            showToast('✅ Riflessione salvata!');
            textarea.value = '';
            charCount.textContent = '0';
            await loadProgressData(session.session.user.id);
        }
    });

    copyBtn.addEventListener('click', () => {
        const text = textarea.value;
        if (!text) {
            return showToast('⚠️ Niente da copiare!');
        }
        navigator.clipboard.writeText(text).then(() => {
            showToast('📋 Copiato!');
        });
    });
}

function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = e.currentTarget.dataset.view;

            if (view === 'archivio') {
                window.location.href = 'archivio.html';
                return;
            }
            if (view === 'impostazioni') {
                window.location.href = 'impostazioni.html';
                return;
            }
            if (view === 'pro') {
                showToast('✨ Funzionalità PRO in arrivo');
                return;
            }

            switchView(view);
            
            document.querySelectorAll('.nav-link').forEach(l => {
                l.classList.remove('bg-amber-500/20', 'text-amber-400');
            });
            e.currentTarget.classList.add('bg-amber-500/20', 'text-amber-400');
        });
    });
}

function switchView(viewName) {
    document.querySelectorAll('.view-container').forEach(v => v.classList.add('hidden'));
    document.getElementById(`view${viewName.charAt(0).toUpperCase() + viewName.slice(1)}`).classList.remove('hidden');
}

function setupBaseListeners() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    setupMobileMenu();
    console.log('✅ Base listeners attivati (modalità trial scaduto)');
}

// ✅ GESTIONE BOTTONE "Gestione PRO"
function setupManageSubscriptionButton(profile) {
    const manageBtnDesktop = document.getElementById('manageSubscriptionBtn');
    const manageBtnMobile = document.getElementById('manageSubscriptionBtnMobile');
    
    const role = profile?.role?.toLowerCase() || 'vip';

    // ✅ Se NON è PRO, mostra tooltip informativo
    if (role !== 'pro') {
        [manageBtnDesktop, manageBtnMobile].forEach(btn => {
            if (btn) {
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
                btn.title = 'Disponibile solo per utenti PRO';
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showToast('✨ Funzione disponibile solo per utenti PRO');
                });
            }
        });
        return;
    }

    // ✅ Se è PRO, apre Customer Portal
    async function openCustomerPortal() {
        try {
            console.log('🔵 Apertura Customer Portal Stripe...');
            
            const { data: { user }, error: authError } = await sbClient.auth.getUser();
            
            if (authError || !user) {
                console.error('❌ Errore autenticazione:', authError);
                showToast('Devi effettuare il login');
                return;
            }

            console.log('✅ User ID:', user.id);

            const response = await fetch('https://fayuadwpchhrxafbdntw.supabase.co/functions/v1/create-portal-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({ userId: user.id })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Errore apertura portal');
            }

            console.log('✅ Portal URL ricevuto:', data.url);
            window.location.href = data.url;

        } catch (error) {
            console.error('❌ Errore portal:', error);
            showToast('Impossibile aprire il pannello di gestione. Riprova.');
        }
    }

    if (manageBtnDesktop) {
        manageBtnDesktop.addEventListener('click', openCustomerPortal);
        console.log('✅ Listener Desktop "Gestione PRO" attivato');
    }

    if (manageBtnMobile) {
        manageBtnMobile.addEventListener('click', openCustomerPortal);
        console.log('✅ Listener Mobile "Gestione PRO" attivato');
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Inizializzazione dashboard con TRIAL...');

    try {
        const session = await getSessionRobusta();
        if (!session) {
            window.location.href = 'accedi.html';
            return;
        }

        const user = session.user;
        await loadUserData(user);

        const trialStatus = checkTrialStatus(currentUserProfile);
        console.log('🔍 Trial status:', trialStatus);

        // ✅ Setup bottone "Gestione PRO"
        setupManageSubscriptionButton(currentUserProfile);

        if (trialStatus.isExpired) {
            console.warn('🚫 Trial scaduto → mostro overlay, non carico contenuti');
            showTrialExpiredOverlay(trialStatus, user.email);
            setupBaseListeners();
            return;
        }

        await loadDailyContent();
        await loadProgressData(user.id);

        setupMobileMenu();
        setupReflectionHandlers();
        setupNavigation();

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }

        console.log('✅ Dashboard caricata con successo!');

    } catch (err) {
        console.error('💥 Errore init dashboard:', err);
        window.location.href = 'accedi.html';
    }
});
