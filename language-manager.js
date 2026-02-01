/**
 * LANGUAGE MANAGER GLOBALE - The Stoic Journey
 * Gestisce traduzioni e language switcher per tutte le pagine
 * Version: 1.0
 */

(function() {
    'use strict';
    
    console.log('🌍 Language Manager: Inizializzazione...');
    
    // ============================================
    // DATABASE TRADUZIONI GLOBALE
    // ============================================
    
    const TRANSLATIONS = {
        it: {
            nav: {
                whatIsStoicism: "Cos'è lo Stoicismo",
                login: "Accedi",
                home: "Home",
                dashboard: "Dashboard",
                settings: "Impostazioni"
            },
            common: {
                loading: "Caricamento...",
                error: "Errore",
                success: "Successo",
                cancel: "Annulla",
                confirm: "Conferma",
                save: "Salva",
                delete: "Elimina",
                edit: "Modifica",
                close: "Chiudi"
            },
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
                    step1: { title: "Scrivi riflessione", description: "Dedica pochi minuti al giorno per scrivere pensieri e sfide nel tuo diario stoico personale." },
                    step2: { title: "Sfida personalizzata", description: "L'AI genera una micro-sfida stoica su misura basata su Marco Aurelio, Epitteto e Seneca." },
                    step3: { title: "Traccia progresso", description: "Monitora la tua evoluzione attraverso dashboard intuitive e visualizza i tuoi pattern." }
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
            auth: {
                login: {
                    title: "Accedi",
                    email: "Email",
                    password: "Password",
                    forgotPassword: "Password dimenticata?",
                    submit: "Accedi",
                    noAccount: "Non hai un account?",
                    signUp: "Registrati"
                },
                register: {
                    title: "Registrati",
                    name: "Nome",
                    email: "Email",
                    password: "Password",
                    confirmPassword: "Conferma Password",
                    submit: "Registrati",
                    hasAccount: "Hai già un account?",
                    login: "Accedi"
                }
            },
            dashboard: {
                welcome: "Benvenuto",
                reflections: "Riflessioni",
                challenges: "Sfide",
                progress: "Progresso",
                settings: "Impostazioni"
            },
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
        en: {
            nav: {
                whatIsStoicism: "What is Stoicism",
                login: "Login",
                home: "Home",
                dashboard: "Dashboard",
                settings: "Settings"
            },
            common: {
                loading: "Loading...",
                error: "Error",
                success: "Success",
                cancel: "Cancel",
                confirm: "Confirm",
                save: "Save",
                delete: "Delete",
                edit: "Edit",
                close: "Close"
            },
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
                    step1: { title: "Write reflection", description: "Dedicate a few minutes each day to write thoughts and challenges in your personal stoic journal." },
                    step2: { title: "Personalized challenge", description: "AI generates a custom stoic micro-challenge based on Marcus Aurelius, Epictetus, and Seneca." },
                    step3: { title: "Track progress", description: "Monitor your evolution through intuitive dashboards and visualize your patterns." }
                },
                philosophers: {
                    title: "The Three Pillars of Stoic Wisdom",
                    marcus: {
                        name: "Marcus Aurelius",
                        principle: "Impedimentum Via Est",
                        principleTranslation: "The path through obstacles",
                        quote: "«Quod obstat viae, via fit.»",
                        quoteTranslation: '"What stands in the way becomes the way. And what lies on the path, this is the path."',
                        description: "Obstacles do not block our progress, but become the way themselves. The rational mind can transform every impediment into an opportunity for growth, adapting its purposes to the obstacle rather than fleeing it.",
                        ai: "For each principle, artificial intelligence will generate personalized micro-challenges based on your real daily problems."
                    },
                    epictetus: {
                        name: "Epictetus",
                        principle: "In Nostra Potestate",
                        principleTranslation: "The dichotomy of control",
                        quote: "«En tois eph' hemin kai en tois ouk eph' hemin»",
                        quoteTranslation: "The Dichotomy of Control distinguishes between what is in our power and what is not. In our power are opinions, desires, judgments, actions. Not in our power are external events, others' opinions, outcomes.",
                        description: "We free mental energy when we stop fighting what doesn't depend on us and invest it in what we can truly direct: our character, our choices, our way of responding to what happens.",
                        ai: "AI analyzes your daily reflections and guides you in distinguishing what you can control from what you cannot, refocusing attention where your will is truly effective."
                    },
                    seneca: {
                        name: "Seneca",
                        principle: "Praemeditatio Malorum",
                        principleTranslation: "Preparing for the worst to live better",
                        quote: "«Qui omnia timet, nihil cogitat»",
                        quoteTranslation: "Praemeditatio malorum is the exercise of imagining in advance what could go wrong: losses, failures, sudden changes. Not to live in fear, but to train the mind not to be surprised or broken by events.",
                        description: "When we have already contemplated the worst internally, every real difficulty loses part of its power. Mental preparation makes the trial lighter, strengthens character, and deepens gratitude for what we have now.",
                        ai: "AI will guide you in structured visualizations of your recurring fears, transforming them into concrete scenarios to face with clarity, instead of undefined shadows that silently consume you."
                    }
                },
                mementoMori: {
                    title: "MEMENTO MORI",
                    subtitle: '"Remember you must die"',
                    text1: "Awareness of mortality is not a burden, but a liberation. Every day is precious. Every choice matters. Every moment counts.",
                    text2: "The Stoics contemplated death not to live in fear, but to live with intensity, gratitude, and wisdom. The inevitable end reminds us not to postpone what truly matters."
                },
                faq: {
                    title: "Questions & Contacts",
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
                    namePlaceholder: "Your name",
                    email: "Email",
                    emailPlaceholder: "youremail@example.com",
                    message: "Message",
                    messagePlaceholder: "How can we help you?",
                    send: "Send Message",
                    note: "We will respond within 24 hours"
                }
            },
            auth: {
                login: {
                    title: "Login",
                    email: "Email",
                    password: "Password",
                    forgotPassword: "Forgot password?",
                    submit: "Login",
                    noAccount: "Don't have an account?",
                    signUp: "Sign Up"
                },
                register: {
                    title: "Sign Up",
                    name: "Name",
                    email: "Email",
                    password: "Password",
                    confirmPassword: "Confirm Password",
                    submit: "Sign Up",
                    hasAccount: "Already have an account?",
                    login: "Login"
                }
            },
            dashboard: {
                welcome: "Welcome",
                reflections: "Reflections",
                challenges: "Challenges",
                progress: "Progress",
                settings: "Settings"
            },
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
    
    // ============================================
    // FUNZIONI HELPER
    // ============================================
    
    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((curr, key) => curr?.[key], obj);
    }
    
    function applyTranslations(lang) {
        const t = TRANSLATIONS[lang];
        if (!t) {
            console.error('❌ Lingua non supportata:', lang);
            return;
        }
        
        console.log('🌍 Applicazione traduzioni:', lang);
        
        // Traduci elementi con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedTranslation(t, key);
            
            if (value) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.placeholder = value;
                    }
                } else {
                    el.textContent = value;
                }
            }
        });
        
        // Traduci placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const value = getNestedTranslation(t, key);
            if (value) {
                el.placeholder = value;
            }
        });
        
        // Aggiorna attributo lang
        document.documentElement.lang = lang;
        
        // Salva preferenza
        localStorage.setItem('preferredLanguage', lang);
        
        console.log('✅ Traduzioni applicate');
    }
    
    // ============================================
    // LANGUAGE SWITCHER UI
    // ============================================
    
    function initLanguageSwitcher() {
        const switcher = document.querySelector('[data-language-switcher]');
        if (!switcher) {
            console.warn('⚠️ Language switcher non trovato');
            return;
        }
        
        const dropdown = switcher.querySelector('[data-language-dropdown]');
        const currentLangEl = switcher.querySelector('[data-current-lang]');
        
        if (!dropdown || !currentLangEl) {
            console.warn('⚠️ Elementi switcher incompleti');
            return;
        }
        
        console.log('🎯 Language switcher trovato');
        
        // Toggle dropdown
        switcher.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });
        
        // Chiudi dropdown al click fuori
        document.addEventListener('click', function() {
            dropdown.classList.add('hidden');
        });
        
        // Gestione cambio lingua
        const langOptions = dropdown.querySelectorAll('[data-lang]');
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                
                // Applica traduzioni
                applyTranslations(lang);
                
                // Aggiorna UI
                currentLangEl.textContent = lang.toUpperCase();
                
                // Aggiorna check marks
                langOptions.forEach(opt => {
                    const isActive = opt.getAttribute('data-lang') === lang;
                    opt.classList.toggle('active', isActive);
                    const check = opt.querySelector('.check');
                    if (check) {
                        check.classList.toggle('hidden', !isActive);
                    }
                });
                
                // Chiudi dropdown
                dropdown.classList.add('hidden');
                
                console.log('✅ Lingua cambiata:', lang.toUpperCase());
            });
        });
        
        // Carica lingua salvata
        const savedLang = localStorage.getItem('preferredLanguage') || 'it';
        applyTranslations(savedLang);
        currentLangEl.textContent = savedLang.toUpperCase();
        
        // Imposta stato iniziale dropdown
        langOptions.forEach(option => {
            const isActive = option.getAttribute('data-lang') === savedLang;
            option.classList.toggle('active', isActive);
            const check = option.querySelector('.check');
            if (check) {
                check.classList.toggle('hidden', !isActive);
            }
        });
        
        console.log('✅ Language switcher attivo');
    }
    
    // ============================================
    // AUTO-INIT
    // ============================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Applica lingua salvata
            const savedLang = localStorage.getItem('preferredLanguage') || 'it';
            applyTranslations(savedLang);
            
            // Inizializza switcher
            initLanguageSwitcher();
        });
    } else {
        const savedLang = localStorage.getItem('preferredLanguage') || 'it';
        applyTranslations(savedLang);
        initLanguageSwitcher();
    }
    
    console.log('✅ Language Manager caricato');
    
})();
