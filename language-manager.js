// ============================================
// 🌍 GLOBAL LANGUAGE MANAGER
// File: language-manager.js
// Versione: 3.2.1 - Fixed All Italian Apostrophes
// ============================================

(function() {
    'use strict';
    
    console.log('🌍 GLOBAL Language Manager: Loading...');
    
    // ============================================
    // PARTE 1: TRANSLATIONS DATABASE
    // ============================================
    
    const TRANSLATIONS = {
        it: {
            nav: {
                whatIsStoicism: "Cos'è lo Stoicismo",
                login: "Accedi",
                origins: "Origini",
                philosophers: "Filosofi",
                principles: "Principi",
                today: "Oggi"
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
                        quoteTranslation: "\"Ciò che ostacola l'azione fa avanzare l'azione. E ciò che sta sulla via, questo è la via.\"",
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
                    subtitle: "\"Ricordati che devi morire\"",
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
            stoicism: {
                hero: {
                    title: "Cos'è lo Stoicismo: Guida Completa alla Filosofia Stoica",
                    subtitle: "Una filosofia di 2300 anni più attuale che mai"
                },
                intro: {
                    p1: "Lo stoicismo è una filosofia pratica fondata ad Atene intorno al 300 a.C. da <strong>Zenone di Cizio</strong>. Non è una teoria astratta, ma un sistema di vita che ha aiutato imperatori, schiavi, scrittori e persone comuni ad affrontare le sfide dell'esistenza con lucidità e serenità.",
                    p2: "Oggi, oltre 2000 anni dopo, lo stoicismo sta vivendo una straordinaria rinascita perché offre strumenti concreti per gestire ansia, stress e incertezza nella vita moderna."
                },
                origins: {
                    title: "Dalle Origini Greche alla Roma Imperiale",
                    timeline: {
                        title: "Il Viaggio attraverso i Secoli",
                        period1: {
                            date: "300 a.C. - Atene",
                            text: "<strong class='text-amber-300'>Zenone di Cizio</strong> fonda la scuola nel Portico Dipinto (Stoà Poikilé), da cui il nome \"stoicismo\". Dopo un naufragio che lo porta ad Atene, studia con cinici e megarici, sviluppando una filosofia che unisce rigore logico e pratica quotidiana."
                        },
                        period2: {
                            date: "280-206 a.C.",
                            text: "<strong class='text-amber-300'>Crisippo di Soli</strong> sistematizza la dottrina scrivendo oltre 700 opere. \"Senza Crisippo non ci sarebbe la Stoà\" - dice un antico proverbio. Sviluppa la logica proposizionale e definisce le basi teoriche del pensiero stoico."
                        },
                        period3: {
                            date: "I-II sec. d.C. - Roma",
                            text: "Lo stoicismo raggiunge il suo apice nella Roma imperiale con tre figure straordinarie: <strong class='text-amber-300'>Seneca</strong> (filosofo e consigliere), <strong class='text-amber-300'>Epitteto</strong> (ex schiavo divenuto maestro) e <strong class='text-amber-300'>Marco Aurelio</strong> (imperatore filosofo)."
                        }
                    },
                    why: {
                        title: "Perché Nacque lo Stoicismo",
                        p1: "Lo stoicismo emerge nell'<strong class='text-amber-300'>età ellenistica</strong>, dopo la morte di Alessandro Magno (323 a.C.). Il mondo greco vive una crisi profonda: le città-stato perdono indipendenza, l'incertezza politica è costante, gli individui si sentono impotenti davanti a forze più grandi.",
                        p2: "In questo contesto di crisi, le persone non cercavano speculazioni astratte, ma <strong class='text-amber-300'>guide pratiche per vivere bene</strong> nonostante le avversità. Lo stoicismo risponde offrendo strumenti concreti per trovare serenità interiore indipendentemente dalle circostanze esterne.",
                        quote: "\"Gli individui cercavano nella filosofia non teorie, ma una terapia per l'anima: tecniche concrete per affrontare la paura, gestire il dolore e costruire una vita degna di essere vissuta.\""
                    }
                },
                philosophers: {
                    title: "I Tre Maestri dello Stoicismo Romano",
                    subtitle: "Tre vite diverse, una stessa saggezza",
                    seneca: {
                        name: "Seneca",
                        dates: "4 a.C. - 65 d.C.",
                        bio: "Filosofo, drammaturgo e consigliere dell'imperatore Nerone. Le sue <strong class='text-amber-300'>Lettere a Lucilio</strong> sono una guida spirituale progressiva che accompagna il lettore verso la saggezza.",
                        quote: "\"Non riceviamo una vita breve, la rendiamo tale. Non siamo poveri di tempo, ma prodighi.\""
                    },
                    epictetus: {
                        name: "Epitteto",
                        dates: "50 - 138 d.C.",
                        bio: "Nato schiavo, diventa uno dei più grandi maestri stoici. Il suo <strong class='text-amber-300'>Manuale</strong> è un vademecum tascabile di saggezza pratica. Insegna la distinzione tra ciò che dipende da noi e ciò che non dipende.",
                        quote: "\"Alcune cose dipendono da noi, altre no. Distinguile, e sarai invincibile.\""
                    },
                    marcus: {
                        name: "Marco Aurelio",
                        dates: "121 - 180 d.C.",
                        bio: "Imperatore di Roma, l'uomo più potente del mondo che medita sulla vanità del potere. I suoi <strong class='text-amber-300'>Colloqui con sé stesso</strong> sono un diario filosofico scritto durante le campagne militari.",
                        quote: "\"Hai potere sulla tua mente, non sugli eventi esterni. Realizza questo, e troverai forza.\""
                    }
                },
                cta1: {
                    text: "Vuoi riflettere ogni giorno come Marco Aurelio?",
                    button: "Prova Gratis The Stoic Journey"
                },
                principles: {
                    title: "I Principi che Cambiano la Vita",
                    dichotomy: {
                        title: "La Dicotomia del Controllo",
                        description: "Il principio fondamentale insegnato da Epitteto: distinguere con lucidità ciò che dipende da noi dalle cose che non possiamo controllare.",
                        dependsOnYou: "Dipende da te",
                        notDependsOnYou: "Non dipende da te",
                        list1: {
                            item1: "• Le tue opinioni e giudizi",
                            item2: "• I tuoi desideri e avversioni",
                            item3: "• Le tue scelte e azioni",
                            item4: "• Il tuo atteggiamento"
                        },
                        list2: {
                            item1: "• Gli eventi esterni",
                            item2: "• Le opinioni altrui",
                            item3: "• I risultati finali",
                            item4: "• Il corpo e la salute"
                        },
                        application: "Applicazione oggi: Invece di stressarti per il traffico (non controlli), concentrati su come reagisci (controlli). Questa distinzione libera energia mentale enorme.",
                        ctaText: "Metti in pratica questi principi ogni giorno",
                        ctaButton: "Scopri The Stoic Journey PRO"
                    },
                    virtues: {
                        title: "Le Quattro Virtù Cardinali",
                        description: "Per gli stoici, la felicità autentica deriva dalla virtù, non dalle circostanze esterne. Queste quattro qualità sono il fondamento della vita degna di essere vissuta.",
                        wisdom: {
                            title: "Saggezza",
                            text: "Giudizio corretto, capacità di discernere il bene dal male, comprensione della realtà così com'è."
                        },
                        courage: {
                            title: "Coraggio",
                            text: "Resistenza fisica e morale, perseveranza nelle difficoltà, agire rettamente nonostante la paura."
                        },
                        justice: {
                            title: "Giustizia",
                            text: "Rispetto dei doveri verso gli altri, equità, riconoscimento della comune umanità, cittadinanza cosmica."
                        },
                        temperance: {
                            title: "Temperanza",
                            text: "Autocontrollo, moderazione, ordine interiore, libertà dagli impulsi distruttivi."
                        }
                    },
                    nature: {
                        title: "Vivere Secondo Natura",
                        description: "Il fine ultimo dello stoicismo è <em>\"vivere in accordo con la natura\"</em> - che significa vivere secondo ragione, perché la natura umana è fondamentalmente razionale.",
                        p1: "Non si tratta di \"tornare alla natura selvaggia\", ma di seguire la nostra natura razionale. Gli stoici credevano che l'universo fosse governato da un <strong class='text-amber-300'>Logos</strong> (ragione universale), e che la ragione umana ne fosse parte.",
                        p2: "Vivere secondo natura significa allineare i propri giudizi e azioni con questo ordine razionale, accettando con serenità ciò che accade e agendo virtuosamente in ciò che dipende da noi."
                    }
                },
                today: {
                    title: "Perché lo Stoicismo è Così Attuale Oggi",
                    subtitle: "2300 anni dopo, più rilevante che mai",
                    anxiety: {
                        title: "Gestione di Ansia e Stress",
                        p1: "La <strong class='text-amber-200'>Terapia Cognitivo-Comportamentale</strong> (CBT), uno dei trattamenti più efficaci per ansia e depressione, deriva direttamente dallo stoicismo. Il suo fondatore, Albert Ellis, citava esplicitamente Epitteto.",
                        p2: "<strong class='text-amber-300'>Principio chiave:</strong> Non sono gli eventi che ci turbano, ma i nostri giudizi sugli eventi. Cambiando i pensieri automatici negativi, trasformiamo le emozioni."
                    },
                    performance: {
                        title: "Performance e Resilienza",
                        p1: "Atleti olimpici, imprenditori della Silicon Valley, militari d'élite utilizzano tecniche stoiche per mantenere lucidità sotto pressione e trasformare ostacoli in opportunità.",
                        p2: "<strong class='text-amber-300'>Applicazione moderna:</strong> La premeditazione delle avversità (premeditatio malorum) prepara mentalmente a scenari peggiori, riducendo ansia e aumentando preparazione."
                    },
                    wisdom: {
                        title: "La Saggezza Antica per la Vita Moderna",
                        intro: "In un'epoca di <strong class='text-amber-300'>sovraccarico informativo</strong>, <strong class='text-amber-300'>confronto sociale continuo</strong> (social media) e <strong class='text-amber-300'>incertezza economica</strong>, lo stoicismo offre:",
                        item1: "<strong class='text-amber-300'>Chiarezza mentale</strong> su cosa conta davvero",
                        item2: "<strong class='text-amber-300'>Strumenti pratici</strong> per decisioni difficili",
                        item3: "<strong class='text-amber-300'>Resilienza emotiva</strong> nei momenti di crisi",
                        item4: "<strong class='text-amber-300'>Libertà interiore</strong> dalle pressioni esterne"
                    },
                    practice: {
                        title: "Come Praticare lo Stoicismo Oggi",
                        readings: {
                            title: "Letture Fondamentali",
                            item1: "• <strong class='text-amber-200'>Manuale</strong> di Epitteto",
                            item2: "• <strong class='text-amber-200'>Colloqui</strong> di Marco Aurelio",
                            item3: "• <strong class='text-amber-200'>Lettere a Lucilio</strong> di Seneca",
                            item4: "• <strong class='text-amber-200'>De Brevitate Vitae</strong> di Seneca"
                        },
                        journal: {
                            title: "Diario Stoico",
                            intro: "Marco Aurelio teneva un diario filosofico. Anche tu puoi:",
                            item1: "• Esame mattutino delle sfide",
                            item2: "• Riflessioni durante il giorno",
                            item3: "• Revisione serale delle azioni"
                        },
                        daily: {
                            title: "Pratiche Quotidiane",
                            item1: "• Meditazione sulla mortalità",
                            item2: "• Premeditazione avversità",
                            item3: "• Esercizio del distanziamento",
                            item4: "• Visualizzazione della giornata"
                        },
                        note: {
                            title: "Il diario cartaceo è fondamentale",
                            text: "Scrivere a mano rallenta il pensiero, favorisce riflessione profonda e consolida l'apprendimento. Marco Aurelio scriveva i suoi <em>Colloqui</em> durante le campagne militari, in condizioni estreme. Il diario è il tuo campo di allenamento filosofico quotidiano."
                        }
                    }
                },
                ctaFinal: {
                    title: "Inizia il Tuo Viaggio Stoico",
                    text: "The Stoic Journey ti accompagna con sfide quotidiane personalizzate, riflessioni guidate dall'AI e una community di praticanti moderni.",
                    button1: "Inizia Gratis Oggi",
                    button2: "Torna alla Home"
                }
            },
            registration: {
                loading: "Creazione account...",
                title: "Inizia il Tuo Viaggio",
                subtitle: "Unisciti a migliaia di praticanti moderni dello stoicismo",
                googleBtn: "Continua con Google",
                googleRedirecting: "Reindirizzamento...",
                divider: "oppure con email",
                form: {
                    nameLabel: "Nome completo",
                    optional: "(opzionale)",
                    namePlaceholder: "es. Marco Aurelio",
                    nameHint: "Ti chiameremo così nelle email",
                    emailLabel: "Email *",
                    emailPlaceholder: "stoico@esempio.com",
                    emailSuccess: "✓ Email valida",
                    passwordLabel: "Password *",
                    passwordPlaceholder: "Minimo 8 caratteri",
                    passwordReq: {
                        title: "La password deve contenere:",
                        length: "Almeno 8 caratteri",
                        uppercase: "Una lettera maiuscola",
                        lowercase: "Una lettera minuscola",
                        number: "Un numero"
                    },
                    confirmPasswordLabel: "Conferma password *",
                    confirmPasswordPlaceholder: "Ripeti la password",
                    confirmPasswordSuccess: "✓ Le password coincidono",
                    privacyText1: "Accetto i",
                    terms: "Termini di Servizio",
                    privacyText2: "e la",
                    privacy: "Privacy Policy",
                    newsletter: "Voglio ricevere riflessioni stoiche settimanali via email",
                    submitBtn: "Accetta la Sfida"
                },
                loginText: "Hai già un account?",
                loginLink: "Accedi qui",
                badges: {
                    free: "Gratis per sempre",
                    noCard: "Nessuna carta richiesta",
                    cancel: "Cancellazione istantanea",
                    secure: "I tuoi dati sono protetti e crittografati"
                },
                validation: {
                    emailRequired: "L'email è obbligatoria",
                    emailInvalid: "Anche Epitteto avrebbe verificato questa email",
                    confirmRequired: "Conferma la password",
                    passwordMismatch: "Le password non coincidono"
                },
                strength: {
                    weak: "Schiavo delle password deboli",
                    medium: "Sulla via della sicurezza",
                    strong: "Imperatore della sicurezza"
                },
                errors: {
                    formErrors: "Correggi gli errori nel form prima di continuare",
                    privacyRequired: "Devi accettare i Termini di Servizio e la Privacy Policy",
                    googleOAuth: "Errore durante l'autenticazione con Google. Riprova.",
                    generic: "Si è verificato un errore. Riprova.",
                    emailExists: "Questa email è già registrata. Prova ad accedere.",
                    weakPassword: "La password non rispetta i requisiti minimi di sicurezza"
                },
                success: "✅ Account creato! Controlla la tua email per confermare."
            },
            login: {
                loading: "Accesso in corso...",
                quote: "\"La mente che non trova riposo in se stessa, cerca invano la felicità all\'esterno\"",
                author: "— Epitteto",
                title: "Bentornato",
                subtitle: "Accedi al tuo diario stoico personale",
                googleBtn: "Continua con Google",
                googleRedirecting: "Reindirizzamento...",
                divider: "oppure con email",
                form: {
                    emailLabel: "Email",
                    emailPlaceholder: "stoico@esempio.com",
                    passwordLabel: "Password",
                    passwordPlaceholder: "La tua password",
                    rememberMe: "Ricordami",
                    forgotPassword: "Password dimenticata?",
                    submitBtn: "Entra"
                },
                registerText: "Non hai ancora un account?",
                registerLink: "Registrati qui",
                badge: "Connessione sicura e crittografata",
                validation: {
                    emailRequired: "L'email è obbligatoria",
                    emailInvalid: "Inserisci un'email valida",
                    passwordRequired: "La password è obbligatoria"
                },
                errors: {
                    fillFields: "Compila tutti i campi richiesti",
                    invalidCredentials: "Email o password errate. Riprova.",
                    emailNotConfirmed: "Conferma la tua email prima di accedere. Controlla la casella di posta.",
                    googleOAuth: "Errore durante l'autenticazione con Google. Riprova.",
                    generic: "Si è verificato un errore. Riprova."
                },
                success: "✅ Accesso effettuato! Reindirizzamento..."
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
                origins: "Origins",
                philosophers: "Philosophers",
                principles: "Principles",
                today: "Today"
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
                    step1: {
                        title: "Write reflection",
                        description: "Dedicate a few minutes each day to write thoughts and challenges in your personal stoic journal."
                    },
                    step2: {
                        title: "Personalized challenge",
                        description: "AI generates a custom stoic micro-challenge based on Marcus Aurelius, Epictetus, and Seneca."
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
                        quoteTranslation: "\"What stands in the way becomes the way. And what lies on the path, this is the path.\"",
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
                    subtitle: "\"Remember you must die\"",
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
            stoicism: {
                hero: {
                    title: "What is Stoicism: Complete Guide to Stoic Philosophy",
                    subtitle: "A 2300-year-old philosophy more relevant than ever"
                },
                intro: {
                    p1: "Stoicism is a practical philosophy founded in Athens around 300 BC by <strong>Zeno of Citium</strong>. It is not an abstract theory, but a life system that has helped emperors, slaves, writers, and ordinary people face the challenges of existence with clarity and serenity.",
                    p2: "Today, over 2000 years later, Stoicism is experiencing an extraordinary renaissance because it offers concrete tools to manage anxiety, stress, and uncertainty in modern life."
                },
                origins: {
                    title: "From Greek Origins to Imperial Rome",
                    timeline: {
                        title: "The Journey Through the Centuries",
                        period1: {
                            date: "300 BC - Athens",
                            text: "<strong class='text-amber-300'>Zeno of Citium</strong> founded the school in the Painted Porch (Stoà Poikilé), from which the name \"Stoicism\" derives. After a shipwreck that brought him to Athens, he studied with Cynics and Megarians, developing a philosophy that combines logical rigor and daily practice."
                        },
                        period2: {
                            date: "280-206 BC",
                            text: "<strong class='text-amber-300'>Chrysippus of Soli</strong> systematized the doctrine by writing over 700 works. \"Without Chrysippus there would be no Stoa\" - says an ancient proverb. He developed propositional logic and defined the theoretical foundations of Stoic thought."
                        },
                        period3: {
                            date: "1st-2nd century AD - Rome",
                            text: "Stoicism reached its peak in Imperial Rome with three extraordinary figures: <strong class='text-amber-300'>Seneca</strong> (philosopher and advisor), <strong class='text-amber-300'>Epictetus</strong> (former slave turned teacher), and <strong class='text-amber-300'>Marcus Aurelius</strong> (philosopher emperor)."
                        }
                    },
                    why: {
                        title: "Why Stoicism Was Born",
                        p1: "Stoicism emerged in the <strong class='text-amber-300'>Hellenistic age</strong>, after the death of Alexander the Great (323 BC). The Greek world experienced a profound crisis: city-states lost independence, political uncertainty was constant, individuals felt powerless before greater forces.",
                        p2: "In this context of crisis, people were not looking for abstract speculations, but <strong class='text-amber-300'>practical guides to live well</strong> despite adversity. Stoicism responds by offering concrete tools to find inner serenity regardless of external circumstances.",
                        quote: "\"Individuals sought in philosophy not theories, but therapy for the soul: concrete techniques to face fear, manage pain, and build a life worth living.\""
                    }
                },
                philosophers: {
                    title: "The Three Masters of Roman Stoicism",
                    subtitle: "Three different lives, one same wisdom",
                    seneca: {
                        name: "Seneca",
                        dates: "4 BC - 65 AD",
                        bio: "Philosopher, playwright, and advisor to Emperor Nero. His <strong class='text-amber-300'>Letters to Lucilius</strong> are a progressive spiritual guide that accompanies the reader toward wisdom.",
                        quote: "\"We do not receive a short life, we make it so. We are not poor in time, but wasteful.\""
                    },
                    epictetus: {
                        name: "Epictetus",
                        dates: "50 - 138 AD",
                        bio: "Born a slave, he became one of the greatest Stoic masters. His <strong class='text-amber-300'>Handbook</strong> is a pocket guide of practical wisdom. He teaches the distinction between what depends on us and what does not.",
                        quote: "\"Some things depend on us, others do not. Distinguish them, and you will be invincible.\""
                    },
                    marcus: {
                        name: "Marcus Aurelius",
                        dates: "121 - 180 AD",
                        bio: "Emperor of Rome, the most powerful man in the world who meditates on the vanity of power. His <strong class='text-amber-300'>Meditations</strong> are a philosophical diary written during military campaigns.",
                        quote: "\"You have power over your mind, not external events. Realize this, and you will find strength.\""
                    }
                },
                cta1: {
                    text: "Want to reflect every day like Marcus Aurelius?",
                    button: "Try The Stoic Journey for Free"
                },
                principles: {
                    title: "The Principles That Change Your Life",
                    dichotomy: {
                        title: "The Dichotomy of Control",
                        description: "The fundamental principle taught by Epictetus: clearly distinguish what depends on us from things we cannot control.",
                        dependsOnYou: "Depends on you",
                        notDependsOnYou: "Does not depend on you",
                        list1: {
                            item1: "• Your opinions and judgments",
                            item2: "• Your desires and aversions",
                            item3: "• Your choices and actions",
                            item4: "• Your attitude"
                        },
                        list2: {
                            item1: "• External events",
                            item2: "• Others' opinions",
                            item3: "• Final results",
                            item4: "• Body and health"
                        },
                        application: "Application today: Instead of stressing about traffic (don't control), focus on how you react (control). This distinction frees enormous mental energy.",
                        ctaText: "Put these principles into practice every day",
                        ctaButton: "Discover The Stoic Journey PRO"
                    },
                    virtues: {
                        title: "The Four Cardinal Virtues",
                        description: "For the Stoics, authentic happiness derives from virtue, not from external circumstances. These four qualities are the foundation of a life worth living.",
                        wisdom: {
                            title: "Wisdom",
                            text: "Correct judgment, ability to discern good from evil, understanding reality as it is."
                        },
                        courage: {
                            title: "Courage",
                            text: "Physical and moral resistance, perseverance in difficulties, acting righteously despite fear."
                        },
                        justice: {
                            title: "Justice",
                            text: "Respect for duties toward others, fairness, recognition of common humanity, cosmic citizenship."
                        },
                        temperance: {
                            title: "Temperance",
                            text: "Self-control, moderation, inner order, freedom from destructive impulses."
                        }
                    },
                    nature: {
                        title: "Living According to Nature",
                        description: "The ultimate goal of Stoicism is <em>\"to live in accordance with nature\"</em> - which means living according to reason, because human nature is fundamentally rational.",
                        p1: "It's not about \"returning to wild nature\", but following our rational nature. The Stoics believed that the universe was governed by a <strong class='text-amber-300'>Logos</strong> (universal reason), and that human reason was part of it.",
                        p2: "Living according to nature means aligning one's judgments and actions with this rational order, serenely accepting what happens and acting virtuously in what depends on us."
                    }
                },
                today: {
                    title: "Why Stoicism is So Relevant Today",
                    subtitle: "2300 years later, more relevant than ever",
                    anxiety: {
                        title: "Managing Anxiety and Stress",
                        p1: "<strong class='text-amber-200'>Cognitive Behavioral Therapy</strong> (CBT), one of the most effective treatments for anxiety and depression, derives directly from Stoicism. Its founder, Albert Ellis, explicitly cited Epictetus.",
                        p2: "<strong class='text-amber-300'>Key principle:</strong> It is not events that disturb us, but our judgments about events. By changing negative automatic thoughts, we transform emotions."
                    },
                    performance: {
                        title: "Performance and Resilience",
                        p1: "Olympic athletes, Silicon Valley entrepreneurs, elite military use Stoic techniques to maintain clarity under pressure and transform obstacles into opportunities.",
                        p2: "<strong class='text-amber-300'>Modern application:</strong> Premeditation of adversities (premeditatio malorum) mentally prepares for worst-case scenarios, reducing anxiety and increasing preparation."
                    },
                    wisdom: {
                        title: "Ancient Wisdom for Modern Life",
                        intro: "In an era of <strong class='text-amber-300'>information overload</strong>, <strong class='text-amber-300'>continuous social comparison</strong> (social media), and <strong class='text-amber-300'>economic uncertainty</strong>, Stoicism offers:",
                        item1: "<strong class='text-amber-300'>Mental clarity</strong> about what truly matters",
                        item2: "<strong class='text-amber-300'>Practical tools</strong> for difficult decisions",
                        item3: "<strong class='text-amber-300'>Emotional resilience</strong> in moments of crisis",
                        item4: "<strong class='text-amber-300'>Inner freedom</strong> from external pressures"
                    },
                    practice: {
                        title: "How to Practice Stoicism Today",
                        readings: {
                            title: "Essential Readings",
                            item1: "• <strong class='text-amber-200'>Handbook</strong> by Epictetus",
                            item2: "• <strong class='text-amber-200'>Meditations</strong> by Marcus Aurelius",
                            item3: "• <strong class='text-amber-200'>Letters to Lucilius</strong> by Seneca",
                            item4: "• <strong class='text-amber-200'>On the Shortness of Life</strong> by Seneca"
                        },
                        journal: {
                            title: "Stoic Journal",
                            intro: "Marcus Aurelius kept a philosophical journal. You can too:",
                            item1: "• Morning examination of challenges",
                            item2: "• Reflections during the day",
                            item3: "• Evening review of actions"
                        },
                        daily: {
                            title: "Daily Practices",
                            item1: "• Meditation on mortality",
                            item2: "• Premeditation of adversities",
                            item3: "• Distancing exercise",
                            item4: "• Day visualization"
                        },
                        note: {
                            title: "The paper journal is essential",
                            text: "Writing by hand slows down thinking, promotes deep reflection, and consolidates learning. Marcus Aurelius wrote his <em>Meditations</em> during military campaigns, in extreme conditions. The journal is your daily philosophical training ground."
                        }
                    }
                },
                ctaFinal: {
                    title: "Start Your Stoic Journey",
                    text: "The Stoic Journey accompanies you with personalized daily challenges, AI-guided reflections, and a community of modern practitioners.",
                    button1: "Start Free Today",
                    button2: "Back to Home"
                }
            },
            registration: {
                loading: "Creating account...",
                title: "Start Your Journey",
                subtitle: "Join thousands of modern stoicism practitioners",
                googleBtn: "Continue with Google",
                googleRedirecting: "Redirecting...",
                divider: "or with email",
                form: {
                    nameLabel: "Full name",
                    optional: "(optional)",
                    namePlaceholder: "e.g. Marcus Aurelius",
                    nameHint: "We'll call you this in emails",
                    emailLabel: "Email *",
                    emailPlaceholder: "stoic@example.com",
                    emailSuccess: "✓ Valid email",
                    passwordLabel: "Password *",
                    passwordPlaceholder: "Minimum 8 characters",
                    passwordReq: {
                        title: "Password must contain:",
                        length: "At least 8 characters",
                        uppercase: "One uppercase letter",
                        lowercase: "One lowercase letter",
                        number: "One number"
                    },
                    confirmPasswordLabel: "Confirm password *",
                    confirmPasswordPlaceholder: "Repeat password",
                    confirmPasswordSuccess: "✓ Passwords match",
                    privacyText1: "I accept the",
                    terms: "Terms of Service",
                    privacyText2: "and the",
                    privacy: "Privacy Policy",
                    newsletter: "I want to receive weekly stoic reflections via email",
                    submitBtn: "Accept the Challenge"
                },
                loginText: "Already have an account?",
                loginLink: "Login here",
                badges: {
                    free: "Free forever",
                    noCard: "No card required",
                    cancel: "Instant cancellation",
                    secure: "Your data is protected and encrypted"
                },
                validation: {
                    emailRequired: "Email is required",
                    emailInvalid: "Even Epictetus would verify this email",
                    confirmRequired: "Confirm password",
                    passwordMismatch: "Passwords do not match"
                },
                strength: {
                    weak: "Slave to weak passwords",
                    medium: "On the path to security",
                    strong: "Emperor of security"
                },
                errors: {
                    formErrors: "Fix form errors before continuing",
                    privacyRequired: "You must accept the Terms of Service and Privacy Policy",
                    googleOAuth: "Error during Google authentication. Try again.",
                    generic: "An error occurred. Try again.",
                    emailExists: "This email is already registered. Try logging in.",
                    weakPassword: "Password does not meet minimum security requirements"
                },
                success: "✅ Account created! Check your email to confirm."
            },
            login: {
                loading: "Signing in...",
                quote: "The mind that finds no rest in itself seeks happiness in vain from outside",
                author: "— Epictetus",
                title: "Welcome Back",
                subtitle: "Access your personal stoic journal",
                googleBtn: "Continue with Google",
                googleRedirecting: "Redirecting...",
                divider: "or with email",
                form: {
                    emailLabel: "Email",
                    emailPlaceholder: "stoic@example.com",
                    passwordLabel: "Password",
                    passwordPlaceholder: "Your password",
                    rememberMe: "Remember me",

Dalla console:


        en: {
            nav: {
                whatIsStoicism: "What is Stoicism",
                login: "Login",
                origins: "Origins",
                philosophers: "Philosophers",
                principles: "Principles",
                today: "Today"
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
                    step1: {
                        title: "Write reflection",
                        description: "Dedicate a few minutes each day to write thoughts and challenges in your personal stoic journal."
                    },
                    step2: {
                        title: "Personalized challenge",
                        description: "AI generates a custom stoic micro-challenge based on Marcus Aurelius, Epictetus, and Seneca."
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
                    subtitle: "\"Remember you must die\"",
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
            stoicism: {
                hero: {
                    title: "What is Stoicism: Complete Guide to Stoic Philosophy",
                    subtitle: "A 2300-year-old philosophy more relevant than ever"
                },
                intro: {
                    p1: "Stoicism is a practical philosophy founded in Athens around 300 BC by <strong>Zeno of Citium</strong>. It is not an abstract theory, but a life system that has helped emperors, slaves, writers, and ordinary people face the challenges of existence with clarity and serenity.",
                    p2: "Today, over 2000 years later, Stoicism is experiencing an extraordinary renaissance because it offers concrete tools to manage anxiety, stress, and uncertainty in modern life."
                },
                origins: {
                    title: "From Greek Origins to Imperial Rome",
                    timeline: {
                        title: "The Journey Through the Centuries",
                        period1: {
                            date: "300 BC - Athens",
                            text: "<strong class='text-amber-300'>Zeno of Citium</strong> founded the school in the Painted Porch (Stoà Poikilé), from which the name \"Stoicism\" derives. After a shipwreck that brought him to Athens, he studied with Cynics and Megarians, developing a philosophy that combines logical rigor and daily practice."
                        },
                        period2: {
                            date: "280-206 BC",
                            text: "<strong class='text-amber-300'>Chrysippus of Soli</strong> systematized the doctrine by writing over 700 works. \"Without Chrysippus there would be no Stoa\" - says an ancient proverb. He developed propositional logic and defined the theoretical foundations of Stoic thought."
                        },
                        period3: {
                            date: "1st-2nd century AD - Rome",
                            text: "Stoicism reached its peak in Imperial Rome with three extraordinary figures: <strong class='text-amber-300'>Seneca</strong> (philosopher and advisor), <strong class='text-amber-300'>Epictetus</strong> (former slave turned teacher), and <strong class='text-amber-300'>Marcus Aurelius</strong> (philosopher emperor)."
                        }
                    },
                    why: {
                        title: "Why Stoicism Was Born",
                        p1: "Stoicism emerged in the <strong class='text-amber-300'>Hellenistic age</strong>, after the death of Alexander the Great (323 BC). The Greek world experienced a profound crisis: city-states lost independence, political uncertainty was constant, individuals felt powerless before greater forces.",
                        p2: "In this context of crisis, people were not looking for abstract speculations, but <strong class='text-amber-300'>practical guides to live well</strong> despite adversity. Stoicism responds by offering concrete tools to find inner serenity regardless of external circumstances.",
                        quote: "\"Individuals sought in philosophy not theories, but therapy for the soul: concrete techniques to face fear, manage pain, and build a life worth living.\""
                    }
                },
                philosophers: {
                    title: "The Three Masters of Roman Stoicism",
                    subtitle: "Three different lives, one same wisdom",
                    seneca: {
                        name: "Seneca",
                        dates: "4 BC - 65 AD",
                        bio: "Philosopher, playwright, and advisor to Emperor Nero. His <strong class='text-amber-300'>Letters to Lucilius</strong> are a progressive spiritual guide that accompanies the reader toward wisdom.",
                        quote: "\"We do not receive a short life, we make it so. We are not poor in time, but wasteful.\""
                    },
                    epictetus: {
                        name: "Epictetus",
                        dates: "50 - 138 AD",
                        bio: "Born a slave, he became one of the greatest Stoic masters. His <strong class='text-amber-300'>Handbook</strong> is a pocket guide of practical wisdom. He teaches the distinction between what depends on us and what does not.",
                        quote: "\"Some things depend on us, others do not. Distinguish them, and you will be invincible.\""
                    },
                    marcus: {
                        name: "Marcus Aurelius",
                        dates: "121 - 180 AD",
                        bio: "Emperor of Rome, the most powerful man in the world who meditates on the vanity of power. His <strong class='text-amber-300'>Meditations</strong> are a philosophical diary written during military campaigns.",
                        quote: "\"You have power over your mind, not external events. Realize this, and you will find strength.\""
                    }
                },
                cta1: {
                    text: "Want to reflect every day like Marcus Aurelius?",
                    button: "Try The Stoic Journey for Free"
                },
                principles: {
                    title: "The Principles That Change Your Life",
                    dichotomy: {
                        title: "The Dichotomy of Control",
                        description: "The fundamental principle taught by Epictetus: clearly distinguish what depends on us from things we cannot control.",
                        dependsOnYou: "Depends on you",
                        notDependsOnYou: "Does not depend on you",
                        list1: {
                            item1: "• Your opinions and judgments",
                            item2: "• Your desires and aversions",
                            item3: "• Your choices and actions",
                            item4: "• Your attitude"
                        },
                        list2: {
                            item1: "• External events",
                            item2: "• Others' opinions",
                            item3: "• Final results",
                            item4: "• Body and health"
                        },
                        application: "Application today: Instead of stressing about traffic (don't control), focus on how you react (control). This distinction frees enormous mental energy.",
                        ctaText: "Put these principles into practice every day",
                        ctaButton: "Discover The Stoic Journey PRO"
                    },
                    virtues: {
                        title: "The Four Cardinal Virtues",
                        description: "For the Stoics, authentic happiness derives from virtue, not from external circumstances. These four qualities are the foundation of a life worth living.",
                        wisdom: {
                            title: "Wisdom",
                            text: "Correct judgment, ability to discern good from evil, understanding reality as it is."
                        },
                        courage: {
                            title: "Courage",
                            text: "Physical and moral resistance, perseverance in difficulties, acting righteously despite fear."
                        },
                        justice: {
                            title: "Justice",
                            text: "Respect for duties toward others, fairness, recognition of common humanity, cosmic citizenship."
                        },
                        temperance: {
                            title: "Temperance",
                            text: "Self-control, moderation, inner order, freedom from destructive impulses."
                        }
                    },
                    nature: {
                        title: "Living According to Nature",
                        description: "The ultimate goal of Stoicism is <em>\"to live in accordance with nature\"</em> - which means living according to reason, because human nature is fundamentally rational.",
                        p1: "It's not about \"returning to wild nature\", but following our rational nature. The Stoics believed that the universe was governed by a <strong class='text-amber-300'>Logos</strong> (universal reason), and that human reason was part of it.",
                        p2: "Living according to nature means aligning one's judgments and actions with this rational order, serenely accepting what happens and acting virtuously in what depends on us."
                    }
                },
                today: {
                    title: "Why Stoicism is So Relevant Today",
                    subtitle: "2300 years later, more relevant than ever",
                    anxiety: {
                        title: "Managing Anxiety and Stress",
                        p1: "<strong class='text-amber-200'>Cognitive Behavioral Therapy</strong> (CBT), one of the most effective treatments for anxiety and depression, derives directly from Stoicism. Its founder, Albert Ellis, explicitly cited Epictetus.",
                        p2: "<strong class='text-amber-300'>Key principle:</strong> It is not events that disturb us, but our judgments about events. By changing negative automatic thoughts, we transform emotions."
                    },
                    performance: {
                        title: "Performance and Resilience",
                        p1: "Olympic athletes, Silicon Valley entrepreneurs, elite military use Stoic techniques to maintain clarity under pressure and transform obstacles into opportunities.",
                        p2: "<strong class='text-amber-300'>Modern application:</strong> Premeditation of adversities (premeditatio malorum) mentally prepares for worst-case scenarios, reducing anxiety and increasing preparation."
                    },
                    wisdom: {
                        title: "Ancient Wisdom for Modern Life",
                        intro: "In an era of <strong class='text-amber-300'>information overload</strong>, <strong class='text-amber-300'>continuous social comparison</strong> (social media), and <strong class='text-amber-300'>economic uncertainty</strong>, Stoicism offers:",
                        item1: "<strong class='text-amber-300'>Mental clarity</strong> about what truly matters",
                        item2: "<strong class='text-amber-300'>Practical tools</strong> for difficult decisions",
                        item3: "<strong class='text-amber-300'>Emotional resilience</strong> in moments of crisis",
                        item4: "<strong class='text-amber-300'>Inner freedom</strong> from external pressures"
                    },
                    practice: {
                        title: "How to Practice Stoicism Today",
                        readings: {
                            title: "Essential Readings",
                            item1: "• <strong class='text-amber-200'>Handbook</strong> by Epictetus",
                            item2: "• <strong class='text-amber-200'>Meditations</strong> by Marcus Aurelius",
                            item3: "• <strong class='text-amber-200'>Letters to Lucilius</strong> by Seneca",
                            item4: "• <strong class='text-amber-200'>On the Shortness of Life</strong> by Seneca"
                        },
                        journal: {
                            title: "Stoic Journal",
                            intro: "Marcus Aurelius kept a philosophical journal. You can too:",
                            item1: "• Morning examination of challenges",
                            item2: "• Reflections during the day",
                            item3: "• Evening review of actions"
                        },
                        daily: {
                            title: "Daily Practices",
                            item1: "• Meditation on mortality",
                            item2: "• Premeditation of adversities",
                            item3: "• Distancing exercise",
                            item4: "• Day visualization"
                        },
                        note: {
                            title: "The paper journal is essential",
                            text: "Writing by hand slows down thinking, promotes deep reflection, and consolidates learning. Marcus Aurelius wrote his <em>Meditations</em> during military campaigns, in extreme conditions. The journal is your daily philosophical training ground."
                        }
                    }
                },
                ctaFinal: {
                    title: "Start Your Stoic Journey",
                    text: "The Stoic Journey accompanies you with personalized daily challenges, AI-guided reflections, and a community of modern practitioners.",
                    button1: "Start Free Today",
                    button2: "Back to Home"
                }
            },
            registration: {
                loading: "Creating account...",
                title: "Start Your Journey",
                subtitle: "Join thousands of modern stoicism practitioners",
                googleBtn: "Continue with Google",
                googleRedirecting: "Redirecting...",
                divider: "or with email",
                form: {
                    nameLabel: "Full name",
                    optional: "(optional)",
                    namePlaceholder: "e.g. Marcus Aurelius",
                    nameHint: "We'll call you this in emails",
                    emailLabel: "Email *",
                    emailPlaceholder: "stoic@example.com",
                    emailSuccess: "✓ Valid email",
                    passwordLabel: "Password *",
                    passwordPlaceholder: "Minimum 8 characters",
                    passwordReq: {
                        title: "Password must contain:",
                        length: "At least 8 characters",
                        uppercase: "One uppercase letter",
                        lowercase: "One lowercase letter",
                        number: "One number"
                    },
                    confirmPasswordLabel: "Confirm password *",
                    confirmPasswordPlaceholder: "Repeat password",
                    confirmPasswordSuccess: "✓ Passwords match",
                    privacyText1: "I accept the",
                    terms: "Terms of Service",
                    privacyText2: "and the",
                    privacy: "Privacy Policy",
                    newsletter: "I want to receive weekly stoic reflections via email",
                    submitBtn: "Accept the Challenge"
                },
                loginText: "Already have an account?",
                loginLink: "Login here",
                badges: {
                    free: "Free forever",
                    noCard: "No card required",
                    cancel: "Instant cancellation",
                    secure: "Your data is protected and encrypted"
                },
                validation: {
                    emailRequired: "Email is required",
                    emailInvalid: "Even Epictetus would verify this email",
                    confirmRequired: "Confirm password",
                    passwordMismatch: "Passwords do not match"
                },
                strength: {
                    weak: "Slave to weak passwords",
                    medium: "On the path to security",
                    strong: "Emperor of security"
                },
                errors: {
                    formErrors: "Fix form errors before continuing",
                    privacyRequired: "You must accept the Terms of Service and Privacy Policy",
                    googleOAuth: "Error during Google authentication. Try again.",
                    generic: "An error occurred. Try again.",
                    emailExists: "This email is already registered. Try logging in.",
                    weakPassword: "Password does not meet minimum security requirements"
                },
                success: "✅ Account created! Check your email to confirm."
            },
            login: {
                loading: "Signing in...",
                quote: ""The mind that finds no rest in itself seeks happiness in vain from outside"",
                author: "— Epictetus",
                title: "Welcome Back",
                subtitle: "Access your personal stoic journal",
                googleBtn: "Continue with Google",
                googleRedirecting: "Redirecting...",
                divider: "or with email",
                form: {
                    emailLabel: "Email",
                    emailPlaceholder: "stoic@example.com",
                    passwordLabel: "Password",
                    passwordPlaceholder: "Your password",
                    rememberMe: "Remember me",
                    forgotPassword: "Forgot password?",
                    submitBtn: "Enter"
                },
                registerText: "Don't have an account yet?",
                registerLink: "Register here",
                badge: "Secure and encrypted connection",
                validation: {
                    emailRequired: "Email is required",
                    emailInvalid: "Enter a valid email",
                    passwordRequired: "Password is required"
                },
                errors: {
                    fillFields: "Fill in all required fields",
                    invalidCredentials: "Incorrect email or password. Try again.",
                    emailNotConfirmed: "Confirm your email before logging in. Check your inbox.",
                    googleOAuth: "Error during Google authentication. Try again.",
                    generic: "An error occurred. Try again."
                },
                success: "✅ Login successful! Redirecting..."
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
    
    // Esponi TRANSLATIONS globalmente per accesso da JavaScript
    window.TRANSLATIONS = TRANSLATIONS;
    
    // ============================================
    // PARTE 2: FUNZIONI HELPER
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
        
        // Traduci data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedTranslation(t, key);
            
            if (value) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.placeholder = value;
                    }
                } else {
                    el.innerHTML = value;
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
        
        // Aggiorna HTML lang
        document.documentElement.lang = lang;
        
        // Salva preferenza
        localStorage.setItem('preferredLanguage', lang);
        
        console.log('✅ Traduzioni applicate');
    }
    
    // ============================================
    // PARTE 3: INIZIALIZZAZIONE LANGUAGE SWITCHER (FIXED)
    // ============================================
    
    function initLanguageSwitcher() {
        // Cerca switcher nella home
        let switcher = document.getElementById('languageSwitcherHome');
        let dropdown = document.getElementById('languageDropdownHome');
        let currentLangEl = document.getElementById('currentLangHome');
        
        // Se non trovati, cerca switcher generici (altre pagine)
        if (!switcher) {
            switcher = document.getElementById('languageSwitcher');
            dropdown = document.getElementById('languageDropdown');
            currentLangEl = document.getElementById('currentLang');
        }
        
        // Se NON ci sono switcher (es. registrazione, login), applica solo traduzioni
        if (!switcher || !dropdown || !currentLangEl) {
            console.log('⚠️ Nessun language switcher trovato - Pagina senza switcher (Registrazione/Login)');
            
            // Carica lingua salvata e applica traduzioni
            const savedLang = localStorage.getItem('preferredLanguage') || 'it';
            applyTranslations(savedLang);
            
            console.log('✅ GLOBAL Language Manager: Traduzioni applicate senza switcher - Lingua:', savedLang.toUpperCase());
            return; // ESCI - niente switcher da inizializzare
        }
        
        console.log('🎯 Language switcher trovato - inizializzazione...');
        
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
        const langOptions = dropdown.querySelectorAll('.lang-option');
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
                    opt.querySelector('.check').classList.toggle('hidden', !isActive);
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
            option.querySelector('.check').classList.toggle('hidden', !isActive);
        });
        
        console.log('✅ GLOBAL Language Manager: Attivo con switcher!');
    }
    
    // ============================================
    // PARTE 4: AVVIO AUTOMATICO
    // ============================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
    } else {
        initLanguageSwitcher();
    }
    
    console.log('✅ GLOBAL Language Manager: Script caricato - waiting for DOM');
    
})();
