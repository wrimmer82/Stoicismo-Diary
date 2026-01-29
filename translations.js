// translations.js - Sistema multilingua The Stoic Journey

const translations = {
  // ============================================
  // ITALIANO (IT)
  // ============================================
  it: {
    // NAVIGATION
    nav: {
      siteName: "The Stoic Journey",
      whatIsStoicism: "Cos'è lo Stoicismo",
      home: "Home",
      today: "Oggi",
      archive: "Archivio",
      settings: "Impostazioni",
      goToPro: "Passa a PRO",
      logout: "Esci",
      login: "Accedi",
      signup: "Registrati"
    },

    // HOMEPAGE
    home: {
      cta: "Entra Nel Viaggio Stoico",
      ctaShort: "Entra",
      
      hero: {
        title: "Trasforma la tua vita quotidiana con i principi degli antichi filosofi.",
        subtitle: "Riflessioni per costruire consapevolezza e serenità,",
        ai: "con approfondimenti analitici potenziati dall'AI.",
        startNow: "Inizia Ora"
      },

      howItWorks: {
        title: "Come Funziona",
        subtitle: "Il tuo percorso di crescita stoica in tre semplici passi",
        step1: {
          title: "Scrivi riflessione",
          description: "Dedica pochi minuti al giorno per scrivere pensieri e sfide nel tuo diario stoico personale."
        },
        step2: {
          title: "Sfida personalizzata",
          description: "L'AI genera una micro-sfida stoica su misura basata su Marco Aurelio, Epitteto e Seneca."
        },
        step3: {
          title: "Traccia progresso",
          description: "Monitora la tua evoluzione attraverso dashboard intuitive e visualizza i tuoi pattern."
        }
      },

      philosophers: {
        title: "I Tre Pilastri della Saggezza Stoica",
        subtitle: "Maestri senza tempo che guidano il tuo percorso quotidiano",
        marcus: {
          name: "Marco Aurelio",
          role: "121-180 d.C. • Imperatore e Filosofo",
          principle: "Impedimentum Via Est",
          principleTranslation: "Il cammino attraverso gli ostacoli",
          quote: "«Quod obstat viae, via fit.»",
          quoteTranslation: '"Ciò che ostacola l\'azione fa avanzare l\'azione. E ciò che sta sulla via, questo è la via."',
          description: "Gli ostacoli non bloccano il nostro progresso, ma diventano essi stessi la via. La mente razionale può trasformare ogni impedimento in opportunità di crescita, adattando i propri scopi all'ostacolo anziché fuggirlo.",
          ai: "Per ogni principio, l'intelligenza artificiale genererà micro-sfide personalizzate basate sui tuoi problemi quotidiani reali."
        },
        epictetus: {
          name: "Epitteto",
          role: "55-135 d.C. • Ex Schiavo e Maestro",
          principle: "In Nostra Potestate",
          principleTranslation: "La dicotomia del controllo",
          quote: "«En tois eph' hemin kai en tois ouk eph' hemin»",
          quoteTranslation: "La Dicotomia del Controllo distingue tra ciò che è in nostro potere e ciò che non lo è. In nostro potere sono le opinioni, i desideri, i giudizi, le azioni. Non sono in nostro potere gli eventi esterni, le opinioni altrui, i risultati.",
          description: "Liberiamo energia mentale quando smettiamo di combattere ciò che non dipende da noi e la investiamo in ciò che possiamo realmente orientare: il nostro carattere, le nostre scelte, il nostro modo di rispondere a ciò che accade.",
          ai: "L'AI analizza le tue riflessioni quotidiane e ti guida nel distinguere ciò che puoi controllare da ciò che non puoi, riportando l'attenzione dove la tua volontà è davvero efficace."
        },
        seneca: {
          name: "Seneca",
          role: "4 a.C.-65 d.C. • Filosofo e Consigliere",
          principle: "Praemeditatio Malorum",
          principleTranslation: "Prepararsi al peggio per vivere meglio",
          quote: "«Qui omnia timet, nihil cogitat»",
          quoteTranslation: "La praemeditatio malorum è l'esercizio di immaginare in anticipo ciò che potrebbe andare storto: perdite, fallimenti, cambiamenti improvvisi. Non per vivere nella paura, ma per allenare la mente a non essere sorpresa né spezzata dagli eventi.",
          description: "Quando abbiamo già contemplato interiormente il peggio, ogni difficoltà reale perde parte del suo potere. Prepararsi mentalmente rende più leggera la prova, rafforza il carattere e rende più profonda la gratitudine per ciò che abbiamo ora.",
          ai: "L'AI ti guiderà in visualizzazioni strutturate delle tue paure ricorrenti, trasformandole in scenari concreti da affrontare con lucidità, invece che in ombre indefinite che ti consumano in silenzio."
        }
      },

      mementoMori: {
        title: "MEMENTO MORI",
        subtitle: '"Ricordati che devi morire"',
        text1: "La consapevolezza della mortalità non è un peso, ma una liberazione. Ogni giorno è prezioso. Ogni scelta è importante. Ogni momento conta.",
        text2: "Gli stoici contemplavano la morte non per vivere nella paura, ma per vivere con intensità, gratitudine e saggezza. La fine inevitabile ci ricorda di non rimandare ciò che conta davvero."
      },

      faq: {
        title: "Domande & Contatti",
        subtitle: "Trova risposte o scrivici direttamente",
        q1: "Devo conoscere la filosofia stoica per iniziare?",
        a1: "No, ti guidiamo passo dopo passo. L'AI introduce i concetti stoici attraverso esercizi pratici applicati alla tua vita quotidiana.",
        q2: "Quanto tempo devo dedicare ogni giorno?",
        a2: "Bastano 5-10 minuti. Scrivi una riflessione e l'AI genera immediatamente la tua sfida personalizzata da applicare durante la giornata.",
        q3: "I miei dati personali sono al sicuro?",
        a3: "Assolutamente sì. Le tue riflessioni sono criptate end-to-end e mai condivise. L'AI elabora i contenuti in modo anonimo (GDPR compliant).",
        q4: "Posso provare gratuitamente prima di abbonarmi?",
        a4: "Sì, 30 giorni di prova gratuita con accesso completo. Nessuna carta richiesta per iniziare. Dopo la prova, passa a PRO per mantenere i tuoi dati; altrimenti verranno eliminati dopo 60 giorni di inattività."
      },

      contact: {
        title: "CONTATTACI",
        subtitle: "Hai bisogno di aiuto? Scrivici!",
        name: "Nome",
        email: "Email",
        message: "Messaggio",
        namePlaceholder: "Il tuo nome",
        emailPlaceholder: "tuaemail@example.com",
        messagePlaceholder: "Come possiamo aiutarti?",
        send: "Invia Messaggio",
        sending: "Invio...",
        success: "✅ Messaggio inviato! Ti risponderemo presto.",
        error: "❌ Errore nell'invio. Riprova o scrivici a support@thestoicjourney.app",
        note: "Risponderemo entro 24 ore"
      }
    },

    // DASHBOARD
    dashboard: {
      welcome: "Benvenuto nella tua pratica stoica quotidiana",
      day: "Giorno",
      progress: "I Tuoi Progressi",
      streak: "Serie Giorni",
      totalReflections: "Riflessioni Totali",
      challengesCompleted: "Sfide Completate",
      save: "Salva Riflessione",
      copy: "Copia Testo",
      placeholder: "Scrivi qui la tua riflessione quotidiana...",
      charCount: "caratteri",
      manageSubscription: "Gestione PRO",
      trialExpired: {
        title: "⏰ Trial Terminato",
        text: "Hai completato i 30 giorni di prova gratuita. Per continuare il tuo cammino stoico, scegli il piano PRO.",
        monthly: "Mensile",
        annual: "Annuale",
        perMonth: "al mese",
        perYear: "all'anno",
        exit: "Esci"
      }
    },

    // SETTINGS
    settings: {
      title: "Impostazioni",
      profileTitle: "Profilo Utente",
      name: "Nome Visualizzato",
      namePlaceholder: "Es: Marco Aurelio o Emanuel82",
      nameHint: "Minimo 2 caratteri, massimo 30. Puoi usare lettere, numeri, spazi, apostrofi e trattini",
      email: "Email",
      emailNote: "L'email non può essere modificata direttamente",
      saveProfile: "💾 Salva Profilo",
      securityTitle: "Sicurezza",
      securityText: "Riceverai un'email con un link sicuro per reimpostare la tua password.",
      resetPassword: "📧 Invia Email per Cambio Password",
      subscriptionTitle: "Gestione Abbonamento",
      subscriptionText: "Gestisci il tuo abbonamento PRO tramite il portale sicuro Stripe.",
      manageSubscription: "🔧 Apri Portale Stripe"
    },

    // ARCHIVE
    archive: {
      title: "Archivio Riflessioni",
      subtitle: "Tutte le tue riflessioni stoiche in un unico posto",
      empty: "Nessuna riflessione trovata",
      emptyText: "Inizia a scrivere le tue riflessioni quotidiane per vederle qui.",
      filter: "Filtra per data",
      showAll: "Mostra tutte"
    },

    // LOGIN
    login: {
      title: "Bentornato, Stoico",
      subtitle: "Accedi al tuo percorso di crescita personale",
      email: "Email",
      password: "Password",
      forgotPassword: "Password dimenticata?",
      button: "Accedi",
      loading: "Accesso in corso...",
      google: "Continua con Google",
      or: "oppure con email",
      noAccount: "Non hai un account?",
      signupLink: "Registrati qui"
    },

    // SIGNUP
    signup: {
      title: "Inizia il Tuo Viaggio",
      subtitle: "Unisciti a migliaia di praticanti moderni dello stoicismo",
      name: "Nome completo",
      nameOptional: "(opzionale)",
      namePlaceholder: "es. Marco Aurelio",
      nameHint: "Ti chiameremo così nelle email",
      email: "Email",
      emailPlaceholder: "stoico@esempio.com",
      password: "Password",
      passwordPlaceholder: "Minimo 8 caratteri",
      passwordStrength: "Forza password:",
      passwordWeak: "Debole",
      passwordMedium: "Media",
      passwordStrong: "Forte",
      button: "Crea Account",
      loading: "Creazione account...",
      google: "Continua con Google",
      or: "oppure con email",
      haveAccount: "Hai già un account?",
      loginLink: "Accedi qui",
      terms: "Registrandoti accetti i nostri",
      termsLink: "Termini di Servizio",
      and: "e la",
      privacyLink: "Privacy Policy"
    },

    // FOOTER
    footer: {
      tagline: "La tua guida quotidiana alla saggezza stoica.",
      resources: "Risorse",
      whatIsStoicism: "Cos'è lo Stoicismo",
      blog: "Blog",
      community: "Community",
      legal: "Legale",
      privacy: "Privacy Policy",
      terms: "Termini di Servizio",
      cookies: "Cookie Policy",
      copyright: "© 2025 The Stoic Journey. Tutti i diritti riservati."
    },

    // COMMON
    common: {
      days: "giorni",
      close: "Chiudi",
      cancel: "Annulla",
      confirm: "Conferma",
      save: "Salva",
      delete: "Elimina",
      edit: "Modifica",
      loading: "⏳ Caricamento...",
      saved: "✅ Salvato!",
      copied: "📋 Copiato!",
      error: "❌ Errore. Riprova."
    },

    // ROLES
    roles: {
      master: "MASTER",
      pro: "PRO",
      vip: "VIP",
      vipExpired: "TRIAL SCADUTO"
    }
  },

  // ============================================
  // ENGLISH (EN)
  // ============================================
  en: {
    // NAVIGATION
    nav: {
      siteName: "The Stoic Journey",
      whatIsStoicism: "What is Stoicism",
      home: "Home",
      today: "Today",
      archive: "Archive",
      settings: "Settings",
      goToPro: "Upgrade to PRO",
      logout: "Logout",
      login: "Login",
      signup: "Sign Up"
    },

    // HOMEPAGE
    home: {
      cta: "Start Your Stoic Journey",
      ctaShort: "Enter",
      
      hero: {
        title: "Transform your daily life with principles from ancient philosophers.",
        subtitle: "Reflections to build awareness and serenity,",
        ai: "with AI-powered analytical insights.",
        startNow: "Start Now"
      },

      howItWorks: {
        title: "How It Works",
        subtitle: "Your stoic growth journey in three simple steps",
        step1: {
          title: "Write reflection",
          description: "Dedicate a few minutes each day to write thoughts and challenges in your personal stoic journal."
        },
        step2: {
          title: "Personalized challenge",
          description: "AI generates a tailored micro stoic challenge based on Marcus Aurelius, Epictetus, and Seneca."
        },
        step3: {
          title: "Track progress",
          description: "Monitor your evolution through intuitive dashboards and visualize your patterns."
        }
      },

      philosophers: {
        title: "The Three Pillars of Stoic Wisdom",
        subtitle: "Timeless masters guiding your daily path",
        marcus: {
          name: "Marcus Aurelius",
          role: "121-180 AD • Emperor and Philosopher",
          principle: "Impedimentum Via Est",
          principleTranslation: "The obstacle is the way",
          quote: "«Quod obstat viae, via fit.»",
          quoteTranslation: '"The obstacle to action advances action. What stands in the way becomes the way."',
          description: "Obstacles don\'t block our progress, they become the way itself. The rational mind can transform every impediment into an opportunity for growth, adapting our purposes to the obstacle rather than fleeing from it.",
          ai: "For each principle, artificial intelligence will generate personalized micro-challenges based on your real daily problems."
        },
        epictetus: {
          name: "Epictetus",
          role: "55-135 AD • Former Slave and Teacher",
          principle: "In Nostra Potestate",
          principleTranslation: "The dichotomy of control",
          quote: "«En tois eph' hemin kai en tois ouk eph' hemin»",
          quoteTranslation: "The Dichotomy of Control distinguishes between what is in our power and what is not. In our power are opinions, desires, judgments, actions. Not in our power are external events, others' opinions, results.",
          description: "We free mental energy when we stop fighting what doesn't depend on us and invest it in what we can truly direct: our character, our choices, our way of responding to what happens.",
          ai: "AI analyzes your daily reflections and guides you in distinguishing what you can control from what you cannot, bringing attention back to where your will is truly effective."
        },
        seneca: {
          name: "Seneca",
          role: "4 BC-65 AD • Philosopher and Advisor",
          principle: "Praemeditatio Malorum",
          principleTranslation: "Preparing for the worst to live better",
          quote: "«Qui omnia timet, nihil cogitat»",
          quoteTranslation: "Praemeditatio malorum is the exercise of imagining in advance what could go wrong: losses, failures, sudden changes. Not to live in fear, but to train the mind not to be surprised or broken by events.",
          description: "When we have already contemplated the worst inwardly, every real difficulty loses part of its power. Mental preparation makes the trial lighter, strengthens character, and deepens gratitude for what we have now.",
          ai: "AI will guide you in structured visualizations of your recurring fears, transforming them into concrete scenarios to face with clarity, instead of undefined shadows that silently consume you."
        }
      },

      mementoMori: {
        title: "MEMENTO MORI",
        subtitle: '"Remember you are mortal"',
        text1: "Awareness of mortality is not a burden, but a liberation. Every day is precious. Every choice matters. Every moment counts.",
        text2: "Stoics contemplated death not to live in fear, but to live with intensity, gratitude, and wisdom. The inevitable end reminds us not to postpone what truly matters."
      },

      faq: {
        title: "Questions & Contact",
        subtitle: "Find answers or write to us directly",
        q1: "Do I need to know stoic philosophy to start?",
        a1: "No, we guide you step by step. AI introduces stoic concepts through practical exercises applied to your daily life.",
        q2: "How much time should I dedicate each day?",
        a2: "Just 5-10 minutes. Write a reflection and AI immediately generates your personalized challenge to apply during the day.",
        q3: "Are my personal data safe?",
        a3: "Absolutely yes. Your reflections are end-to-end encrypted and never shared. AI processes content anonymously (GDPR compliant).",
        q4: "Can I try for free before subscribing?",
        a4: "Yes, 30 days free trial with full access. No card required to start. After the trial, upgrade to PRO to keep your data; otherwise they will be deleted after 60 days of inactivity."
      },

      contact: {
        title: "CONTACT US",
        subtitle: "Need help? Write to us!",
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "youremail@example.com",
        messagePlaceholder: "How can we help you?",
        send: "Send Message",
        sending: "Sending...",
        success: "✅ Message sent! We'll reply soon.",
        error: "❌ Error sending. Try again or write to support@thestoicjourney.app",
        note: "We'll respond within 24 hours"
      }
    },

    // DASHBOARD
    dashboard: {
      welcome: "Welcome to your daily stoic practice",
      day: "Day",
      progress: "Your Progress",
      streak: "Days Streak",
      totalReflections: "Total Reflections",
      challengesCompleted: "Challenges Completed",
      save: "Save Reflection",
      copy: "Copy Text",
      placeholder: "Write your daily reflection here...",
      charCount: "characters",
      manageSubscription: "Manage PRO",
      trialExpired: {
        title: "⏰ Trial Ended",
        text: "You've completed the 30-day free trial. To continue your stoic path, choose the PRO plan.",
        monthly: "Monthly",
        annual: "Annual",
        perMonth: "per month",
        perYear: "per year",
        exit: "Exit"
      }
    },

    // SETTINGS
    settings: {
      title: "Settings",
      profileTitle: "User Profile",
      name: "Display Name",
      namePlaceholder: "e.g., Marcus Aurelius or Emanuel82",
      nameHint: "Minimum 2 characters, maximum 30. You can use letters, numbers, spaces, apostrophes and hyphens",
      email: "Email",
      emailNote: "Email cannot be changed directly",
      saveProfile: "💾 Save Profile",
      securityTitle: "Security",
      securityText: "You will receive an email with a secure link to reset your password.",
      resetPassword: "📧 Send Password Reset Email",
      subscriptionTitle: "Subscription Management",
      subscriptionText: "Manage your PRO subscription through the secure Stripe portal.",
      manageSubscription: "🔧 Open Stripe Portal"
    },

    // ARCHIVE
    archive: {
      title: "Reflections Archive",
      subtitle: "All your stoic reflections in one place",
      empty: "No reflections found",
      emptyText: "Start writing your daily reflections to see them here.",
      filter: "Filter by date",
      showAll: "Show all"
    },

    // LOGIN
    login: {
      title: "Welcome Back, Stoic",
      subtitle: "Access your personal growth journey",
      email: "Email",
      password: "Password",
      forgotPassword: "Forgot password?",
      button: "Login",
      loading: "Logging in...",
      google: "Continue with Google",
      or: "or with email",
      noAccount: "Don't have an account?",
      signupLink: "Sign up here"
    },

    // SIGNUP
    signup: {
      title: "Start Your Journey",
      subtitle: "Join thousands of modern stoicism practitioners",
      name: "Full name",
      nameOptional: "(optional)",
      namePlaceholder: "e.g., Marcus Aurelius",
      nameHint: "We'll call you this in emails",
      email: "Email",
      emailPlaceholder: "stoic@example.com",
      password: "Password",
      passwordPlaceholder: "Minimum 8 characters",
      passwordStrength: "Password strength:",
      passwordWeak: "Weak",
      passwordMedium: "Medium",
      passwordStrong: "Strong",
      button: "Create Account",
      loading: "Creating account...",
      google: "Continue with Google",
      or: "or with email",
      haveAccount: "Already have an account?",
      loginLink: "Login here",
      terms: "By signing up you accept our",
      termsLink: "Terms of Service",
      and: "and",
      privacyLink: "Privacy Policy"
    },

    // FOOTER
    footer: {
      tagline: "Your daily guide to stoic wisdom.",
      resources: "Resources",
      whatIsStoicism: "What is Stoicism",
      blog: "Blog",
      community: "Community",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      copyright: "© 2025 The Stoic Journey. All rights reserved."
    },

    // COMMON
    common: {
      days: "days",
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      loading: "⏳ Loading...",
      saved: "✅ Saved!",
      copied: "📋 Copied!",
      error: "❌ Error. Try again."
    },

    // ROLES
    roles: {
      master: "MASTER",
      pro: "PRO",
      vip: "VIP",
      vipExpired: "TRIAL EXPIRED"
    }
  }
};

// ============================================
// FUNZIONI DI GESTIONE LINGUA
// ============================================

// Ottieni lingua corrente
function getCurrentLanguage() {
  const saved = localStorage.getItem('preferredLanguage');
  if (saved && (saved === 'it' || saved === 'en')) {
    return saved;
  }
  
  // Rileva lingua browser
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('it')) {
    return 'it';
  }
  return 'en'; // Default inglese
}

// Salva lingua
function saveLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
}

// Cambia lingua
function changeLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Lingua "${lang}" non supportata`);
    return;
  }
  
  saveLanguage(lang);
  applyTranslations(lang);
  
  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);
}

// Applica traduzioni a tutti gli elementi con data-i18n
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedTranslation(translations[lang], key);
    
    if (translation) {
      // Per input e textarea, aggiorna il placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translation);
        }
      } else {
        // Per altri elementi, aggiorna textContent
        element.textContent = translation;
      }
    } else {
      console.warn(`Traduzione non trovata per: ${key}`);
    }
  });
}

// Helper per accedere a oggetti nested tramite stringa (es: "home.hero.title")
function getNestedTranslation(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Inizializza sistema lingua
function initLanguageSystem() {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);
}

// Esporta per uso in altri file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, getCurrentLanguage, changeLanguage, initLanguageSystem };
}

// Auto-init quando il DOM è pronto
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSystem);
  } else {
    initLanguageSystem();
  }
}
