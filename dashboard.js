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
