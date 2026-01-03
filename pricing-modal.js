// pricing-modal.js - Modal scelta piano PRO
'use strict';

const SUPABASE_URL = 'https://fayuadwpchhrxafbdntw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheXVhZHdwY2hocnhhZmJkbnR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMTY3NDksImV4cCI6MjA4MDY5Mjc0OX0.Dc4Q0NFFSRfwiMKbrbqcrSbGDYfUSQ6BqjKjhauRE';

const sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Price IDs da Stripe (i tuoi veri IDs)
const PRICE_IDS = {
  monthly: 'price_1SI7hLb0i4d13wEkWYCP2w',    // €4.99/mese
  annual: 'price_1SI7hLb0i4d13wEkX9c2z1Y'      // €49.99/anno
};

const MONTHLY_PRICE = 4.99;
const ANNUAL_PRICE = 49.99;
const MONTHLY_DISCOUNT = 0;   // 0% sconto mensile
const ANNUAL_DISCOUNT = 17;   // 17% sconto annuale (2 mesi gratis)

let currentUser = null;

// Inizializzazione
document.addEventListener('DOMContentLoaded', async () => {
  console.log('Pricing Modal inizializzato');
  await checkAuth();
  setupEventListeners();
  updatePricingCards();
});

async function checkAuth() {
  const { data: { session } } = await sbClient.auth.getSession();
  if (!session) {
    console.warn('Nessun utente loggato - redirect login');
    window.location.href = 'accedi.html';
    return;
  }
  currentUser = session.user;
  console.log('Utente:', currentUser.id);
}

// Event Listeners
function setupEventListeners() {
  // Bottone Mensile
  document.getElementById('buyMonthly').addEventListener('click', () => createCheckout('monthly'));
  // Bottone Annuale  
  document.getElementById('buyAnnual').addEventListener('click', () => createCheckout('annual'));
  
  // Chiudi modal
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.querySelector('.modal-overlay').addEventListener('click', closeModal);
}

// Aggiorna card prezzi con sconti dinamici
function updatePricingCards() {
  const monthlyPrice = document.getElementById('monthlyPrice');
  const annualPrice = document.getElementById('annualPrice');
  const annualSavings = document.getElementById('annualSavings');
  
  monthlyPrice.textContent = `€${MONTHLY_PRICE.toFixed(2)}`;
  annualPrice.textContent = `€${ANNUAL_PRICE.toFixed(2)}`;
  
  const annualMonthlyEquivalent = (ANNUAL_PRICE / 12).toFixed(2);
  const savings = (MONTHLY_PRICE - annualMonthlyEquivalent).toFixed(2);
  annualSavings.textContent = `Risparmi €${savings}/mese`;
}

// Crea sessione Stripe Checkout
async function createCheckout(plan) {
  const priceId = PRICE_IDS[plan];
  const userId = currentUser.id;
  const userEmail = currentUser.email;
  
  // Mostra loading
  const btn = plan === 'monthly' ? document.getElementById('buyMonthly') : document.getElementById('buyAnnual');
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Reindirizzamento...';
  
  try {
    console.log(`Creazione checkout ${plan} per ${userId}`);
    
    const response = await fetch('/functions/v1/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({
        plan: plan,
        userId: userId,
        userEmail: userEmail
      })
    });
    
    const data = await response.json();
    
    if (data.url) {
      // Redirect a Stripe Checkout
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Errore creazione sessione');
    }
    
  } catch (error) {
    console.error('Errore checkout:', error);
    btn.innerHTML = originalText;
    btn.disabled = false;
    showToast(`Errore: ${error.message}`, 'error');
  }
}

// Chiudi modal
function closeModal() {
  window.history.back(); // Torna alla pagina precedente
  // Oppure: window.location.href = 'dashboard.html';
}

// Toast notifiche
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed top-6 right-6 p-4 rounded-xl shadow-2xl z-50 transform transition-all duration-300 ${
    type === 'success' 
      ? 'bg-emerald-500 text-white' 
      : 'bg-red-500 text-white'
  }`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  toast.style.transform = 'translateX(0)';
  
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}

// Spinner CSS inline
const style = document.createElement('style');
style.textContent = `
  .spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Export globale per uso da altre pagine
window.PricingModal = {
  show: () => document.getElementById('pricingModal').classList.remove('hidden'),
  hide: closeModal,
  createCheckout: createCheckout
};
