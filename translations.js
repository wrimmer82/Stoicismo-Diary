// translations.js - Sistema multilingua The Stoic Journey
// Versione: 2.0 - Gennaio 2026 (FIXED per index.html)

const translations = {
  // ============================================
  // ITALIANO (IT)
  // ============================================
  it: {
    // NAVIGATION
    nav: {
      whatIsStoicism: "Cos'è lo Stoicismo",
      login: "Accedi"
    },
    
    // HOMEPAGE
    home: {
      ctaShort: "Entra",
      cta: "Entra Nel Viaggio Stoico",
      
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
        marcus: {
          name: "Marco Aurelio",
          principle: "Impedimentum Via Est",
          principleTranslation: "Il cammino attraverso gli ostacoli",
          quote: "«Quod obstat viae, via fit.»",
          quoteTranslation: '"Ciò che ostacola l\'azione fa avanzare l\'azione. E ciò che sta sulla via, questo è la via."',
          description: "Gli ostacoli non bloccano il nostro progresso, ma diventano essi stessi la via. La mente razionale può trasformare ogni impedimento in opportunità di crescita, adattando i propri scopi all'ostacolo anziché fuggirlo.",
          ai: "Per ogni principio, l'intelligenza artificiale genererà micro-sfide personalizzate basate sui tuoi problemi quotidiani reali."
        },
        epictetus: {
          name: "Epitteto",
          principle: "In Nostra Potestate",
          principleTranslation: "La dicotomia del controllo",
          quote: "«En tois eph' hemin kai en tois ouk eph' hemin»",
          quoteTranslation: "La Dicotomia del Controllo distingue tra ciò che è in nostro potere e ciò che non lo è. In nostro potere sono le opinioni, i desideri, i giudizi, le azioni. Non sono in nostro potere gli eventi esterni, le opinioni altrui, i risultati.",
          description: "Liberiamo energia mentale quando smettiamo di combattere ciò che non dipende da noi e la investiamo in ciò che possiamo realmente orientare: il nostro carattere, le nostre scelte, il nostro modo di rispondere a ciò che accade.",
          ai: "L'AI analizza le tue riflessioni quotidiane e ti guida nel distinguere ciò che puoi controllare da ciò che non puoi, riportando l'attenzione dove la tua volontà è davvero efficace."
        },
        seneca: {
          name: "Seneca",
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
        namePlaceholder: "Il tuo nome",
        email: "Email",
        emailPlaceholder: "tuaemail@example.com",
        message: "Messaggio",
        messagePlaceholder: "Come possiamo aiutarti?",
        send: "Invia Messaggio",
        note: "Risponderemo entro 24 ore"
      }
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
    }
  },
  
  // ============================================
  // ENGLISH (EN)
  // ============================================
  en: {
    // NAVIGATION
    nav: {
      whatIsStoicism: "What is Stoicism",
      login: "Login"
    },
    
    // HOMEPAGE
    home: {
      ctaShort: "Enter",
      cta: "Start Your Stoic Journey",
      
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
        marcus: {
          name: "Marcus Aurelius",
          principle: "Impedimentum Via Est",
          principleTranslation: "The path through obstacles",
          quote: "«Quod obstat viae, via fit.»",
          quoteTranslation: '"What stands in the way becomes the way."',
          description: "Obstacles don\'t block our progress, they become the way itself. The rational mind can transform every impediment into an opportunity for growth, adapting its purposes to the obstacle rather than fleeing from it.",
          ai: "For each principle, artificial intelligence will generate personalized micro-challenges based on your real daily problems."
        },
        epictetus: {
          name: "Epictetus",
          principle: "In Nostra Potestate",
          principleTranslation: "The dichotomy of control",
          quote: "«En tois eph' hemin kai en tois ouk eph' hemin»",
          quoteTranslation: "The Dichotomy of Control distinguishes between what is in our power and what is not. In our power are opinions, desires, judgments, actions. Not in our power are external events, others' opinions, outcomes.",
          description: "We free mental energy when we stop fighting what doesn't depend on us and invest it in what we can truly direct: our character, our choices, our way of responding to what happens.",
          ai: "The AI analyzes your daily reflections and guides you in distinguishing what you can control from what you cannot, bringing attention back where your will is truly effective."
        },
        seneca: {
          name: "Seneca",
          principle: "Praemeditatio Malorum",
          principleTranslation: "Preparing for the worst to live better",
          quote: "«Qui omnia timet, nihil cogitat»",
          quoteTranslation: "Praemeditatio malorum is the exercise of imagining in advance what could go wrong: losses, failures, sudden changes. Not to live in fear, but to train the mind not to be surprised or broken by events.",
          description: "When we have already contemplated the worst internally, every real difficulty loses part of its power. Mental preparation makes the test lighter, strengthens character and deepens gratitude for what we have now.",
          ai: "The AI will guide you through structured visualizations of your recurring fears, transforming them into concrete scenarios to face with clarity, instead of undefined shadows that silently consume you."
        }
      },
      
      mementoMori: {
        title: "MEMENTO MORI",
        subtitle: '"Remember you are mortal"',
        text1: "Awareness of mortality is not a burden, but a liberation. Every day is precious. Every choice matters. Every moment counts.",
        text2: "Stoics contemplated death not to live in fear, but to live with intensity, gratitude and wisdom. The inevitable end reminds us not to postpone what truly matters."
      },
      
      faq: {
        title: "Questions & Contact",
        subtitle: "Find answers or write to us directly",
        q1: "Do I need to know stoic philosophy to start?",
        a1: "No, we guide you step by step. The AI introduces stoic concepts through practical exercises applied to your daily life.",
        q2: "How much time should I dedicate each day?",
        a2: "5-10 minutes are enough. Write a reflection and the AI immediately generates your personalized challenge to apply during the day.",
        q3: "Are my personal data safe?",
        a3: "Absolutely yes. Your reflections are end-to-end encrypted and never shared. The AI processes content anonymously (GDPR compliant).",
        q4: "Can I try it for free before subscribing?",
        a4: "Yes, 30 days of free trial with full access. No card required to start. After the trial, upgrade to PRO to keep your data; otherwise they will be deleted after 60 days of inactivity."
      },
      
      contact: {
        title: "CONTACT US",
        subtitle: "Need help? Write to us!",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "youremail@example.com",
        message: "Message",
        messagePlaceholder: "How can we help you?",
        send: "Send Message",
        note: "We'll respond within 24 hours"
      }
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
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}

// Make available globally
window.translations = translations;
