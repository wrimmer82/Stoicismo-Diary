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

function showTrialExpiredOverlay(trialInfo) {
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
            <h2 style="font-size: 2.5rem; color: #5d4037; margin: 0 0 24px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">⏳ Trial Terminato</h2>
            
            <p style="font-size: 1.125rem; color: #4e342e; line-height: 1.8; margin: 0 0 16px; font-weight: 500;">
                Hai completato i <strong>30 giorni di prova gratuita</strong>.<br>
                Per continuare il tuo cammino stoico, passa al piano <strong>PRO</strong>.
            </p>

            ${dataScadenza ? `<p style="font-size: 0.95rem; color: #6d4c41; margin: 0 0 32px; font-style: italic;">Scaduto il ${dataScadenza}</p>` : ''}

            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                <button id="btnPassaPRO" style="
                    background: linear-gradient(135deg, #d84315 0%, #bf360c 100%); color: white;
                    border: none; border-radius: 12px; padding: 16px 32px; font-size: 1.125rem; font-weight: bold;
                    cursor: pointer; box-shadow: 0 6px 20px rgba(216,67,21,0.4); transition: all 0.3s;
                ">💎 Passa a PRO</button>
                
                <button id="btnEsci" style="
                    background: #757575; color: white; border: none; border-radius: 12px;
                    padding: 16px 32px; font-size: 1.125rem; font-weight: 600; cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2); transition: all 0.3s;
                ">Esci</button>
            </div>

            <style>
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            </style>
        </div>
    `;

    document.body.appendChild(overlay);

  document.getElementById('btnPassaPRO').onclick = () => { window.location.href = 'pricing-modal.html'; };
    document.getElementById('btnEsci').onclick = async () => {
        await sbClient.auth.signOut();
        window.location.href = 'index.html';
    };
}

async function loadDailyContent() {
    // ✅ FIX: Verifica session prima di caricare
    const session = await getSessionRobusta();
    if (!session) {
        console.error('❌ Nessuna session attiva - redirect a login');
        window.location.href = 'accedi.html';
        return;
    }

    const dayOfYear = getDayOfYear();
    const dayRoman = arabicToRoman(dayOfYear);
    document.getElementById('dayOfYear').textContent = dayRoman;

    console.log('📖 Carico sfida per giorno:', dayOfYear);

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
        
        // ✅ FIX: Nascondi badge difficoltà nel fallback
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

        if (trialStatus.isExpired) {
            console.warn('🚫 Trial scaduto → mostro overlay, non carico contenuti');
            showTrialExpiredOverlay(trialStatus);
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
    } catch (err) {
        console.error('💥 Errore init dashboard:', err);
        window.location.href = 'accedi.html';
    }
});  // <-- Fine DOMContentLoaded

// ========== ✅ STRIPE CUSTOMER PORTAL ==========
// --- GESTIONE PORTALE ABBONAMENTI STRIPE ---

async function openCustomerPortal() {
  try {
    showLoadingPortal('Apertura pannello gestione...');
    
    // Recupera l'utente corrente usando l'istanza supabase già definita in common.js
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      alert('Devi effettuare il login');
      window.location.href = 'login.html';
      return;
    }

    // Effettua la chiamata alla Edge Function di Supabase
    // supabaseAnonKey è già disponibile globalmente grazie a common.js
    const response = await fetch(
      'https://fayuadwpchhxafbdntw.supabase.co/functions/v1/create-portal-session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`
        },
        body: JSON.stringify({ userId: user.id })
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Errore apertura portal');
    }

    // Redirect al portale Stripe
    window.location.href = data.url;

  } catch (error) {
    console.error('Errore portal:', error);
    alert('Impossibile aprire il pannello di gestione. Riprova più tardi.');
  } finally {
    hideLoadingPortal();
  }
}

// Funzioni Helper per il caricamento
function showLoadingPortal(msg) {
  const overlay = document.createElement('div');
  overlay.id = 'loading-overlay-portal';
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(5px);';
  overlay.innerHTML = `
    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mb-4"></div>
    <div style="color:#fbbf24;font-family:'Cinzel',serif;font-size:18px;letter-spacing:1px;">${msg}</div>
  `;
  document.body.appendChild(overlay);
}

function hideLoadingPortal() {
  const overlay = document.getElementById('loading-overlay-portal');
  if (overlay) overlay.remove();
}

// Collega il listener al bottone appena caricato
// Questo si aggiunge ai listener già presenti nel file
document.addEventListener('click', function(e) {
  if (e.target && (e.target.id === 'manage-subscription-btn' || e.target.closest('#manage-subscription-btn'))) {
    openCustomerPortal();
  }
});
