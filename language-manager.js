// ============================================
// 🌍 GLOBAL LANGUAGE MANAGER
// File: language-manager.js
// Versione: 2.0 
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
                login: "Accedi"
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
                nav: {
                    origins: "Origini",
                    philosophers: "Filosofi",
                    principles: "Principi",
                    today: "Oggi"
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
                        bio: "Nato schiavo, diventa uno dei più grandi maestri stoici. Il suo <strong class='text-amber-300'>Manuale (Enchiridion)</strong> condensa la saggezza stoica in precetti pratici immediatamente applicabili.",
                        quote: "\"Non sono gli eventi a turbarci, ma il giudizio che diamo di essi.\""
                    },
                    marcus: {
                        name: "Marco Aurelio",
                        dates: "121 - 180 d.C.",
                        bio: "Imperatore romano e filosofo. Le sue <strong class='text-amber-300'>Meditazioni</strong> (Τὰ εἰς ἑαυτόν) sono appunti personali mai destinati alla pubblicazione: un dialogo intimo con se stesso sulla condotta morale.",
                        quote: "\"Hai potere sulla tua mente, non sugli eventi esterni. Realizza questo, e troverai forza.\""
                    }
                },
                principles: {
                    title: "I Principi Fondamentali dello Stoicismo",
                    subtitle: "Le idee chiave che hanno attraversato i millenni",
                    dichotomy: {
                        title: "La Dicotomia del Controllo",
                        text: "Il principio cardine: distinguere tra <strong class='text-amber-600'>ciò che dipende da noi</strong> (opinioni, desideri, giudizi, azioni) e <strong class='text-amber-600'>ciò che non dipende da noi</strong> (eventi esterni, opinioni altrui, corpo, morte).",
                        practice: "<strong>Applicazione pratica:</strong> Smetti di sprecare energia su ciò che non puoi controllare. Concentrati solo su ciò che è in tuo potere: i tuoi pensieri e le tue azioni."
                    },
                    nature: {
                        title: "Vivere secondo Natura",
                        text: "Seguire la <strong class='text-green-600'>natura razionale</strong> dell'essere umano. Significa usare la ragione per comprendere l'ordine del mondo e agire virtuosamente, accettando che tutto ciò che accade fa parte di un disegno più ampio.",
                        practice: "<strong>Applicazione pratica:</strong> Accetta che le difficoltà sono parte naturale della vita. Non lottare contro ciò che non puoi cambiare; adattati con saggezza."
                    },
                    virtues: {
                        title: "Le Quattro Virtù Cardinali",
                        wisdom: "<strong class='text-blue-600'>Saggezza (Sophia):</strong> Conoscere ciò che è bene e male, distinguere ciò che ha valore",
                        courage: "<strong class='text-blue-600'>Coraggio (Andreia):</strong> Resistere alle paure e affrontare le difficoltà",
                        justice: "<strong class='text-blue-600'>Giustizia (Dikaiosyne):</strong> Trattare gli altri con equità e contribuire al bene comune",
                        temperance: "<strong class='text-blue-600'>Temperanza (Sophrosyne):</strong> Controllo dei desideri e moderazione",
                        practice: "<strong>Applicazione pratica:</strong> Le virtù non sono astratte. Si praticano quotidianamente nelle piccole scelte: essere onesti anche quando nessuno ti guarda, resistere alle tentazioni, aiutare chi è in difficoltà."
                    },
                    amorFati: {
                        title: "Amor Fati",
                        text: "<strong class='text-purple-600'>\"Amore del destino\"</strong> - non solo accettare ciò che accade, ma abbracciarlo con gioia. Ogni evento, anche doloroso, è un'opportunità di crescita e fa parte del percorso necessario per diventare chi siamo.",
                        practice: "<strong>Applicazione pratica:</strong> Quando accade qualcosa di negativo, chiediti: \"Come posso usare questo evento per crescere?\". Trasforma gli ostacoli in carburante per il tuo sviluppo personale."
                    }
                },
                today: {
                    title: "Lo Stoicismo nel XXI Secolo",
                    why: {
                        title: "Perché è più attuale che mai",
                        anxiety: "<strong class='text-amber-300'>Gestione dell'ansia:</strong> Lo stoicismo insegna a distinguere preoccupazioni reali da quelle inutili",
                        focus: "<strong class='text-amber-300'>Focus e produttività:</strong> Concentrarsi solo su ciò che dipende da noi elimina distrazioni",
                        resilience: "<strong class='text-amber-300'>Resilienza emotiva:</strong> Le tecniche stoiche prevengono il burnout e rafforzano la mente",
                        relationships: "<strong class='text-amber-300'>Relazioni migliori:</strong> Accettare che non possiamo controllare gli altri riduce conflitti"
                    },
                    who: {
                        title: "Chi lo pratica oggi",
                        intro: "Lo stoicismo è diventato una filosofia di riferimento per:",
                        entrepreneurs: "<strong>Imprenditori e CEO</strong> - per decisioni lucide sotto pressione",
                        athletes: "<strong>Atleti professionisti</strong> - per controllo mentale e gestione fallimenti",
                        therapists: "<strong>Psicologi e terapeuti</strong> - come base della terapia cognitivo-comportamentale",
                        people: "<strong>Persone comuni</strong> - che cercano serenità nella vita quotidiana"
                    },
                    cta: {
                        title: "Inizia il Tuo Viaggio Stoico",
                        text: "Trasforma i principi antichi in strumenti pratici per la vita moderna. Unisciti a migliaia di persone che stanno costruendo resilienza, serenità e saggezza.",
                        button: "Inizia Gratis per 30 Giorni"
                    }
                }
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
                login: "Login"
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
                nav: {
                    origins: "Origins",
                    philosophers: "Philosophers",
                    principles: "Principles",
                    today: "Today"
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
                        bio: "Born a slave, he became one of the greatest Stoic masters. His <strong class='text-amber-300'>Handbook (Enchiridion)</strong> condenses Stoic wisdom into practical precepts immediately applicable.",
                        quote: "\"It is not events that disturb us, but the judgment we give them.\""
                    },
                    marcus: {
                        name: "Marcus Aurelius",
                        dates: "121 - 180 AD",
                        bio: "Roman emperor and philosopher. His <strong class='text-amber-300'>Meditations</strong> (Τὰ εἰς ἑαυτόν) are personal notes never intended for publication: an intimate dialogue with himself on moral conduct.",
                        quote: "\"You have power over your mind, not external events. Realize this, and you will find strength.\""
                    }
                },
                principles: {
                    title: "The Fundamental Principles of Stoicism",
                    subtitle: "The key ideas that have crossed millennia",
                    dichotomy: {
                        title: "The Dichotomy of Control",
                        text: "The cardinal principle: distinguish between <strong class='text-amber-600'>what depends on us</strong> (opinions, desires, judgments, actions) and <strong class='text-amber-600'>what does not depend on us</strong> (external events, others' opinions, body, death).",
                        practice: "<strong>Practical application:</strong> Stop wasting energy on what you cannot control. Focus only on what is in your power: your thoughts and actions."
                    },
                    nature: {
                        title: "Living According to Nature",
                        text: "Following the <strong class='text-green-600'>rational nature</strong> of the human being. It means using reason to understand the order of the world and act virtuously, accepting that everything that happens is part of a larger design.",
                        practice: "<strong>Practical application:</strong> Accept that difficulties are a natural part of life. Don't fight what you cannot change; adapt wisely."
                    },
                    virtues: {
                        title: "The Four Cardinal Virtues",
                        wisdom: "<strong class='text-blue-600'>Wisdom (Sophia):</strong> Knowing what is good and evil, distinguishing what has value",
                        courage: "<strong class='text-blue-600'>Courage (Andreia):</strong> Resisting fears and facing difficulties",
                        justice: "<strong class='text-blue-600'>Justice (Dikaiosyne):</strong> Treating others fairly and contributing to the common good",
                        temperance: "<strong class='text-blue-600'>Temperance (Sophrosyne):</strong> Control of desires and moderation",
                        practice: "<strong>Practical application:</strong> Virtues are not abstract. They are practiced daily in small choices: being honest even when no one is watching, resisting temptations, helping those in difficulty."
                    },
                    amorFati: {
                        title: "Amor Fati",
                        text: "<strong class='text-purple-600'>\"Love of fate\"</strong> - not just accepting what happens, but embracing it with joy. Every event, even painful, is an opportunity for growth and part of the necessary path to become who we are.",
                        practice: "<strong>Practical application:</strong> When something negative happens, ask yourself: \"How can I use this event to grow?\". Transform obstacles into fuel for your personal development."
                    }
                },
                today: {
                    title: "Stoicism in the 21st Century",
                    why: {
                        title: "Why it is more relevant than ever",
                        anxiety: "<strong class='text-amber-300'>Anxiety management:</strong> Stoicism teaches to distinguish real worries from useless ones",
                        focus: "<strong class='text-amber-300'>Focus and productivity:</strong> Concentrating only on what depends on us eliminates distractions",
                        resilience: "<strong class='text-amber-300'>Emotional resilience:</strong> Stoic techniques prevent burnout and strengthen the mind",
                        relationships: "<strong class='text-amber-300'>Better relationships:</strong> Accepting that we cannot control others reduces conflicts"
                    },
                    who: {
                        title: "Who practices it today",
                        intro: "Stoicism has become a reference philosophy for:",
                        entrepreneurs: "<strong>Entrepreneurs and CEOs</strong> - for clear decisions under pressure",
                        athletes: "<strong>Professional athletes</strong> - for mental control and failure management",
                        therapists: "<strong>Psychologists and therapists</strong> - as the basis of cognitive-behavioral therapy",
                        people: "<strong>Ordinary people</strong> - seeking serenity in daily life"
                    },
                    cta: {
                        title: "Start Your Stoic Journey",
                        text: "Transform ancient principles into practical tools for modern life. Join thousands of people building resilience, serenity, and wisdom.",
                        button: "Start Free for 30 Days"
                    }
                }
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
    // PARTE 3: INIZIALIZZAZIONE LANGUAGE SWITCHER
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
        
        if (!switcher || !dropdown || !currentLangEl) {
            console.warn('⚠️ Elementi language switcher non trovati - retry in 100ms');
            setTimeout(initLanguageSwitcher, 100);
            return;
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
        
        console.log('✅ GLOBAL Language Manager: Attivo!');
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
