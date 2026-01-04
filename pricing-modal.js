// ========================================
// PRICING MODAL - STRIPE CHECKOUT
// ========================================
'use strict';

const SUPABASE_URL = 'https://fayuadwpchhrxafbdntw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheXVhZHdwY2hocnhhZmJkbnR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4NTMzMTQsImV4cCI6MjA1MTQyOTMxNH0.B7fTOHVHgR0gzs9uOApxlKH_x5WLzY_FWGz-yZ9RJWU';

// Inizializza Supabase Client
const sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Price IDs Stripe (tuoi veri ID prodotto)
const PRICE_IDS = {
  monthly: 'price_1SI7hLb0i4d13wEkWYCP2w',
  annual: 'price_1SI7hLb0i4d13wEkX9c2z1Y'
};

const MONTHLY_PRICE = 4.99;
const ANNUAL_PRICE = 49.99;

let currentUser = null;

// ========================================
// INIZIALIZZAZIONE
// ========================================
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🎯 Pricing Modal inizializzato');
  
  await checkAuth();
  setupEventListeners();
  updatePricingCards();
});

// ========================================
// VERIFICA AUTENTICAZIONE
// ========================================
async function checkAuth() {
  const { data: { session } } = await sbClient.auth.getSession();
  
  if (!session) {
    console.warn('❌ Utente non autenticato - redirect login');
    window.location.href = 'accedi.html';
    return;
  }
  
  currentUser = session.user;
  console.log('✅ Utente autenticato:', currentUser.email);
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
  // Bottone Piano Mensile
  const btnMonthly = document.getElementById('buyMonthly');
  if (btnMonthly) {
    btnMonthly.addEventListener('click', () => createCheckout('monthly'));
  }
  
  // Bottone Piano Annuale
  const btnAnnual = document.getElementById('buyAnnual');
  if (btnAnnual) {
    btnAnnual.addEventListener('click', () => createCheckout('annual'));
  }
  
  // Bottone Chiudi Modal
  const btnClose = document.getElementById('closeModal');
  if (btnClose) {
    btnClose.addEventListener('click', closeModal);
  }
  
  console.log('✅ Event listeners configurati');
}

// ========================================
// AGGIORNA CARD PREZZI
// ========================================
function updatePricingCards() {
  const monthlyPrice = document.getElementById('monthlyPrice');
  const annualPrice = document.getElementById('annualPrice');
  const annualSavings = document.getElementById('annualSavings');
  
  if (monthlyPrice) monthlyPrice.textContent = `€${MONTHLY_PRICE.toFixed(2)}`;
  if (annualPrice) annualPrice.textContent = `€${ANNUAL_PRICE.toFixed(2)}`;
  
  if (annualSavings) {
    const monthlyEquivalent = (ANNUAL_PRICE / 12).toFixed(2);
    const savings = (MONTHLY_PRICE - monthlyEquivalent).toFixed(2);
    annualSavings.textContent = `Risparmi €${savings}/mese`;
  }
}

// ========================================
// CREA SESSIONE STRIPE CHECKOUT
// ========================================
async function createCheckout(planType) {
  if (!currentUser) {
    showToast('Errore: utente non autenticato', 'error');
    return;
  }
  
  const btn = planType === 'monthly' 
    ? document.getElementById('buyMonthly') 
    : document.getElementById('buyAnnual');
  
  const originalHTML = btn.innerHTML;
  
  try {
    // Mostra loading
    btn.disabled = true;
    btn.classList.add('btn-loading');
    btn.innerHTML = '<span class="spinner-inline"></span> Caricamento...';
    
    console.log(`🔄 Creazione checkout ${planType} per utente ${currentUser.id}`);
    
    // ✅ CHIAMATA CORRETTA EDGE FUNCTION CON SDK
    const { data, error } = await sbClient.functions.invoke('create-checkout-session', {
      body: {
        planType: planType,
        userId: currentUser.id,
        userEmail: currentUser.email
      }
    });
    
    if (error) throw error;
    
    if (!data || !data.url) {
      throw new Error('URL checkout non ricevuto');
    }
    
    console.log('✅ Sessione Stripe creata, redirect...');
    
    // Redirect a Stripe Checkout
    window.location.href = data.url;
    
  } catch (error) {
    console.error('❌ Errore checkout:', error);
    
    // Ripristina bottone
    btn.innerHTML = originalHTML;
    btn.disabled = false;
    btn.classList.remove('btn-loading');
    
    // Mostra errore user-friendly
    const errorMsg = error.message || 'Errore sconosciuto';
    showToast(`Errore: ${errorMsg}`, 'error');
  }
}

// ========================================
// CHIUDI MODAL
// ========================================
function closeModal() {
  window.location.href = 'dashboard.html';
}

// ========================================
// TOAST NOTIFICHE
// ========================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-emerald-500' : 'bg-red-500';
  
  toast.className = `fixed top-6 right-6 p-4 rounded-xl shadow-2xl z-50 ${bgColor} text-white font-bold transform transition-all duration-300`;
  toast.textContent = message;
  toast.style.transform = 'translateX(400px)';
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(400px)';
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3500);
}

// ========================================
// SPINNER CSS INLINE
// ========================================
const style = document.createElement('style');
style.textContent = `
  .spinner-inline {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin-inline 0.8s linear infinite;
  }
  
  @keyframes spin-inline {
    to { transform: rotate(360deg); }
  }
  
  .btn-loading {
    position: relative;
    opacity: 0.7;
    pointer-events: none;
  }
`;
document.head.appendChild(style);

// ========================================
// GESTIONE URL PARAMS (Success/Cancel)
// ========================================
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('success') === 'true') {
  console.log('✅ Pagamento completato!');
  showToast('🎉 Benvenuto in PRO!', 'success');
  
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 2000);
}

if (urlParams.get('canceled') === 'true') {
  console.log('⚠️ Pagamento annullato');
  showToast('Pagamento annullato', 'error');
}

console.log('✅ pricing-modal.js caricato completamente');
