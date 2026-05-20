// ============================================
// 🌍 GLOBAL LANGUAGE MANAGER
// File: language-manager.js
// Versione: 5.0 - Added ES (Spanish) + btnLangES support
// ============================================

(function() {
    "use strict";

    console.log("🌍 GLOBAL Language Manager v5.0: Loading...");

    // ============================================
    // PARTE 1: TRANSLATIONS DATABASE
    // ============================================

    const TRANSLATIONS = {
        it: {
            // ---- DASHBOARD ----
            dashboard: {
                headerDays: "giorni",
                greeting: "Ciao,",
                logout: "Esci",
                navToday: "Oggi",
                navArchive: "Archivio",
                navSettings: "Impostazioni",
                navManagePro: "Gestione PRO",
                dailyTitle: "Contenuto Quotidiano",
                dayLabel: "dell'anno",
                reflectionTitle: "Le tue riflessioni di oggi",
                reflectionPlaceholder: "Cosa pensi della sfida di oggi?\nCome la applicherai?\nQuali ostacoli prevedi?",
                charCount: "caratteri",
                copyBtn: "Copia",
                saveBtn: "Salva",
                progressTitle: "Il tuo progresso",
                streakLabel: "giorni di streak",
                reflectionsLabel: "riflessioni scritte",
                challengesLabel: "Sfide completate",
                completedLabel: "completato",
                toastWriteFirst: "✍️ Scrivi prima una riflessione!",
                toastNotAuthenticated: "❌ Errore: non autenticato",
                toastSaved: "✅ Riflessione salvata!",
                toastSaveError: "❌ Errore nel salvare: ",
                toastNothingToCopy: "⚠️ Niente da copiare!",
                toastCopied: "📋 Copiato!",
                toastProComing: "✨ Funzionalità PRO in arrivo",
                archiveTitle: "Archivio Riflessioni",
                archiveWip: "Funzionalità in sviluppo",
                settingsTitle: "Impostazioni",
                settingsWip: "Funzionalità in sviluppo",
                proTitle: "Passa a PRO",
                proWip: "Sblocca funzionalità premium",
                interpretationTitle: "Interpretazione",
                challengeTitle: "Micro-Sfida di Oggi"
            },
            archive: {
                filtersTitle: "Filtri e Ricerca",
                filtersBtn: "Filtri",
                searchPlaceholder: "Cerca nelle riflessioni...",
                allTypes: "Tutti i tipi",
                applyFilters: "Applica Filtri",
                statsTitle: "Statistiche",
                totalReflections: "Riflessioni Totali",
                period: "Periodo",
                prevPage: "← Precedente",
                nextPage: "Successiva →",
                editTitle: "Modifica Riflessione",
                editPlaceholder: "Modifica il testo della tua riflessione...",
                saveEdit: "Salva Modifiche",
                cancel: "Annulla",
                errorLoad: "Errore caricamento riflessioni"
            },
            settings: {
                title: "⚙️ Impostazioni",
                subtitle: "Gestisci il tuo profilo, sicurezza e preferenze",
                adminTitle: "Pannello Admin",
                adminSubtitle: "Gestisci utenti e ruoli",
                registeredUsers: "Utenti Registrati",
                loadingUsers: "Caricamento utenti...",
                profileTitle: "Profilo Utente",
                displayName: "Nome Visualizzato",
                namePlaceholder: "Es: Marco Aurelio o Emanuel82",
                nameHint: "Minimo 2 caratteri, massimo 30. Puoi usare lettere, numeri, spazi, apostrofi e trattini",
                email: "Email",
                emailNote: "L'email non può essere modificata direttamente",
                saveProfile: "💾 Salva Profilo",
                securityTitle: "Sicurezza",
                securityDesc: "Riceverai un'email con un link sicuro per reimpostare la tua password.",
                resetEmailLabel: "Email per Reset Password",
                resetBtn: "📧 Invia Email per Cambio Password",
                privacyTitle: "Privacy & Gestione Dati",
                privacyData: "📋 Dati Memorizzati:",
                privacyDataDesc: "Raccogliamo e conserviamo: nome utente, email, riflessioni quotidiane e data di registrazione, utilizzati esclusivamente per il funzionamento dell'app.",
                privacyLegal: "🔒 Base Giuridica (GDPR):",
                privacyLegalDesc: "Il trattamento si basa sull'esecuzione del contratto (Art. 6.1.b GDPR) e sul consenso esplicito (Art. 6.1.a) fornito durante la registrazione.",
                privacyRights: "⚖️ I Tuoi Diritti:",
                privacyRightsDesc: "Ai sensi degli articoli 15-22 del GDPR, hai diritto di accedere, rettificare, cancellare, limitare, opporti al trattamento e richiedere la portabilità dei tuoi dati.",
                privacyStorage: "🗄️ Conservazione:",
                privacyStorageDesc: "I dati sono conservati per tutta la durata dell'account attivo. Alla cancellazione vengono eliminati entro 30 giorni (Art. 17.3 GDPR).",
                deleteWarning: "⚠️ La cancellazione dell'account è un'azione permanente e irreversibile.",
                deleteBtn: "🗑️ Elimina Account"
            },
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
                        quoteTranslation: "\"Ciò che ostacola l'azione fa avanzare l'azione. E ciò che sta sulla via, questo è la via.\"",
                        description: "Gli ostacoli non bloccano il nostro progresso, ma diventano essi stessi la via.",
                        ai: "Per ogni principio, l'intelligenza artificiale genererà micro-sfide personalizzate basate sui tuoi problemi quotidiani reali."
                    },
                    epictetus: {
                        name: "Epitteto",
                        principle: "In Nostra Potestate",
                        principleTranslation: "La dicotomia del controllo",
                        quote: "«En tois eph' hemin kai en tois ouk eph' hemin»",
                        quoteTranslation: "La Dicotomia del Controllo distingue tra ciò che è in nostro potere e ciò che non lo è.",
                        description: "Liberiamo energia mentale quando smettiamo di combattere ciò che non dipende da noi.",
                        ai: "L'AI analizza le tue riflessioni quotidiane e ti guida nel distinguere ciò che puoi controllare da ciò che non puoi."
                    },
                    seneca: {
                        name: "Seneca",
                        principle: "Praemeditatio Malorum",
                        principleTranslation: "Prepararsi al peggio per vivere meglio",
                        quote: "«Qui omnia timet, nihil cogitat»",
                        quoteTranslation: "La praemeditatio malorum è l'esercizio di immaginare in anticipo ciò che potrebbe andare storto.",
                        description: "Quando abbiamo già contemplato interiormente il peggio, ogni difficoltà reale perde parte del suo potere.",
                        ai: "L'AI ti guiderà in visualizzazioni strutturate delle tue paure ricorrenti."
                    }
                },
                mementoMori: {
                    title: "MEMENTO MORI",
                    subtitle: "\"Ricordati che devi morire\"",
                    text1: "La consapevolezza della mortalità non è un peso, ma una liberazione.",
                    text2: "Gli stoici contemplavano la morte non per vivere nella paura, ma per vivere con intensità."
                },
                faq: {
                    title: "Domande & Contatti",
                    subtitle: "Trova risposte o scrivici direttamente",
                    q1: "Devo conoscere la filosofia stoica per iniziare?",
                    a1: "No, ti guidiamo passo dopo passo.",
                    q2: "Quanto tempo devo dedicare ogni giorno?",
                    a2: "Bastano 5-10 minuti.",
                    q3: "I miei dati personali sono al sicuro?",
                    a3: "Assolutamente sì. Le tue riflessioni sono criptate end-to-end.",
                    q4: "Posso provare gratuitamente prima di abbonarmi?",
                    a4: "Sì, 30 giorni di prova gratuita con accesso completo."
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
                success: "✅ Account creato! Controlla la tua email per confermare.",
                validation: {
                    emailRequired: "L'email è obbligatoria",
                    emailInvalid: "Inserisci un'email valida",
                    confirmRequired: "Conferma la password",
                    passwordMismatch: "Le password non coincidono"
                },
                strength: {
                    weak: "Debole",
                    medium: "Media",
                    strong: "Forte"
                },
                errors: {
                    formErrors: "Correggi gli errori nel modulo",
                    privacyRequired: "Devi accettare i termini per continuare",
                    generic: "Si è verificato un errore",
                    emailExists: "Questa email è già registrata",
                    weakPassword: "Password troppo debole",
                    googleOAuth: "Errore durante il login con Google"
                },
                badges: {
                    free: "Gratis per sempre",
                    noCard: "Nessuna carta richiesta",
                    cancel: "Cancellazione istantanea",
                    secure: "I tuoi dati sono protetti e crittografati"
                },
                form: {
                    passwordReq: {
                        title: "La password deve contenere:",
                        length: "Almeno 8 caratteri",
                        uppercase: "Una lettera maiuscola",
                        lowercase: "Una lettera minuscola",
                        number: "Un numero"
                    }
                }
            },
            login: {
                loading: "Accesso in corso...",
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
                copyright: "© 2026 The Stoic Journey. Tutti i diritti riservati."
            }
        },

        // ============================================
        // 🇬🇧 ENGLISH
        // ============================================
        en: {
            dashboard: {
                headerDays: "days",
                greeting: "Hi,",
                logout: "Sign Out",
                navToday: "Today",
                navArchive: "Archive",
                navSettings: "Settings",
                navManagePro: "Manage PRO",
                dailyTitle: "Daily Content",
                dayLabel: "of the year",
                reflectionTitle: "Your reflections today",
                reflectionPlaceholder: "What do you think of today's challenge?\nHow will you apply it?\nWhat obstacles do you foresee?",
                charCount: "characters",
                copyBtn: "Copy",
                saveBtn: "Save",
                progressTitle: "Your progress",
                streakLabel: "days streak",
                reflectionsLabel: "reflections written",
                challengesLabel: "Challenges completed",
                completedLabel: "completed",
                toastWriteFirst: "✍️ Write a reflection first!",
                toastNotAuthenticated: "❌ Error: not authenticated",
                toastSaved: "✅ Reflection saved!",
                toastSaveError: "❌ Error saving: ",
                toastNothingToCopy: "⚠️ Nothing to copy!",
                toastCopied: "📋 Copied!",
                toastProComing: "✨ PRO feature coming soon",
                archiveTitle: "Reflection Archive",
                archiveWip: "Feature in development",
                settingsTitle: "Settings",
                settingsWip: "Feature in development",
                proTitle: "Upgrade to PRO",
                proWip: "Unlock premium features",
                interpretationTitle: "Interpretation",
                challengeTitle: "Today's Micro-Challenge"
            },
            archive: {
                filtersTitle: "Filters & Search",
                filtersBtn: "Filters",
                searchPlaceholder: "Search reflections...",
                allTypes: "All types",
                applyFilters: "Apply Filters",
                statsTitle: "Statistics",
                totalReflections: "Total Reflections",
                period: "Period",
                prevPage: "← Previous",
                nextPage: "Next →",
                editTitle: "Edit Reflection",
                editPlaceholder: "Edit the text of your reflection...",
                saveEdit: "Save Changes",
                cancel: "Cancel",
                errorLoad: "Error loading reflections"
            },
            settings: {
                title: "⚙️ Settings",
                subtitle: "Manage your profile, security and preferences",
                adminTitle: "Admin Panel",
                adminSubtitle: "Manage users and roles",
                registeredUsers: "Registered Users",
                loadingUsers: "Loading users...",
                profileTitle: "User Profile",
                displayName: "Display Name",
                namePlaceholder: "e.g. Marcus Aurelius or Emanuel82",
                nameHint: "Min 2 chars, max 30. Letters, numbers, spaces, apostrophes and hyphens.",
                email: "Email",
                emailNote: "Email cannot be changed directly",
                saveProfile: "💾 Save Profile",
                securityTitle: "Security",
                securityDesc: "You will receive an email with a secure link to reset your password.",
                resetEmailLabel: "Email for Password Reset",
                resetBtn: "📧 Send Password Reset Email",
                privacyTitle: "Privacy & Data Management",
                privacyData: "📋 Stored Data:",
                privacyDataDesc: "We collect: username, email, daily reflections and registration date, used solely for the app.",
                privacyLegal: "🔒 Legal Basis (GDPR):",
                privacyLegalDesc: "Processing is based on contract execution (Art. 6.1.b GDPR) and explicit consent (Art. 6.1.a).",
                privacyRights: "⚖️ Your Rights:",
                privacyRightsDesc: "Under GDPR arts. 15-22: access, rectify, erase, restrict, object and request portability of your data.",
                privacyStorage: "🗄️ Retention:",
                privacyStorageDesc: "Data retained for active account duration. Upon deletion, erased within 30 days (Art. 17.3 GDPR).",
                deleteWarning: "⚠️ Account deletion is permanent and irreversible.",
                deleteBtn: "🗑️ Delete Account"
            },
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
                        quoteTranslation: "\"What stands in the way becomes the way.\"",
                        description: "Obstacles do not block our progress, but become the way themselves.",
                        ai: "For each principle, AI will generate personalized micro-challenges based on your real daily problems."
                    },
                    epictetus: {
                        name: "Epictetus",
                        principle: "In Nostra Potestate",
                        principleTranslation: "The dichotomy of control",
                        quote: "«En tois eph' hemin kai en tois ouk eph' hemin»",
                        quoteTranslation: "The Dichotomy of Control distinguishes between what is in our power and what is not.",
                        description: "We free mental energy when we stop fighting what doesn't depend on us.",
                        ai: "AI analyzes your daily reflections and guides you in distinguishing what you can control from what you cannot."
                    },
                    seneca: {
                        name: "Seneca",
                        principle: "Praemeditatio Malorum",
                        principleTranslation: "Preparing for the worst to live better",
                        quote: "«Qui omnia timet, nihil cogitat»",
                        quoteTranslation: "Praemeditatio malorum is the exercise of imagining in advance what could go wrong.",
                        description: "When we have already contemplated the worst internally, every real difficulty loses part of its power.",
                        ai: "AI will guide you in structured visualizations of your recurring fears."
                    }
                },
                mementoMori: {
                    title: "MEMENTO MORI",
                    subtitle: "\"Remember you must die\"",
                    text1: "Awareness of mortality is not a burden, but a liberation.",
                    text2: "The Stoics contemplated death not to live in fear, but to live with intensity."
                },
                faq: {
                    title: "Questions & Contacts",
                    subtitle: "Find answers or write to us directly",
                    q1: "Do I need to know stoic philosophy to start?",
                    a1: "No, we guide you step by step.",
                    q2: "How much time should I dedicate each day?",
                    a2: "Just 5-10 minutes.",
                    q3: "Are my personal data safe?",
                    a3: "Absolutely yes. Your reflections are end-to-end encrypted.",
                    q4: "Can I try for free before subscribing?",
                    a4: "Yes, 30 days free trial with full access."
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
                    confirmPasswordLabel: "Confirm password *",
                    confirmPasswordPlaceholder: "Repeat password",
                    confirmPasswordSuccess: "✓ Passwords match",
                    privacyText1: "I accept the",
                    terms: "Terms of Service",
                    privacyText2: "and the",
                    privacy: "Privacy Policy",
                    newsletter: "I want to receive weekly stoic reflections via email",
                    submitBtn: "Accept the Challenge",
                    passwordReq: {
                        title: "Password must contain:",
                        length: "At least 8 characters",
                        uppercase: "One uppercase letter",
                        lowercase: "One lowercase letter",
                        number: "One number"
                    }
                },
                loginText: "Already have an account?",
                loginLink: "Login here",
                success: "✅ Account created! Check your email to confirm.",
                validation: {
                    emailRequired: "Email is required",
                    emailInvalid: "Please enter a valid email",
                    confirmRequired: "Please confirm your password",
                    passwordMismatch: "Passwords do not match"
                },
                strength: {
                    weak: "Weak",
                    medium: "Medium",
                    strong: "Strong"
                },
                errors: {
                    formErrors: "Please fix the errors in the form",
                    privacyRequired: "You must accept the terms to continue",
                    generic: "An error occurred",
                    emailExists: "This email is already registered",
                    weakPassword: "Password too weak",
                    googleOAuth: "Error signing in with Google"
                },
                badges: {
                    free: "Free forever",
                    noCard: "No card required",
                    cancel: "Instant cancellation",
                    secure: "Your data is protected and encrypted"
                }
            },
            login: {
                loading: "Signing in...",
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
                copyright: "© 2026 The Stoic Journey. All rights reserved."
            }
        },

        // ============================================
        // 🇪🇸 ESPAÑOL — NEW in v5.0
        // ============================================
        es: {
            dashboard: {
                headerDays: "días",
                greeting: "Hola,",
                logout: "Salir",
                navToday: "Hoy",
                navArchive: "Archivo",
                navSettings: "Configuración",
                navManagePro: "Gestión PRO",
                dailyTitle: "Contenido Diario",
                dayLabel: "del año",
                reflectionTitle: "Tus reflexiones de hoy",
                reflectionPlaceholder: "¿Qué piensas del desafío de hoy?\n¿Cómo lo aplicarás?\n¿Qué obstáculos prevés?",
                charCount: "caracteres",
                copyBtn: "Copiar",
                saveBtn: "Guardar",
                progressTitle: "Tu progreso",
                streakLabel: "días de racha",
                reflectionsLabel: "reflexiones escritas",
                challengesLabel: "Desafíos completados",
                completedLabel: "completado",
                toastWriteFirst: "✍️ ¡Escribe primero una reflexión!",
                toastNotAuthenticated: "❌ Error: no autenticado",
                toastSaved: "✅ ¡Reflexión guardada!",
                toastSaveError: "❌ Error al guardar: ",
                toastNothingToCopy: "⚠️ ¡Nada que copiar!",
                toastCopied: "📋 ¡Copiado!",
                toastProComing: "✨ Función PRO próximamente",
                archiveTitle: "Archivo de Reflexiones",
                archiveWip: "Función en desarrollo",
                settingsTitle: "Configuración",
                settingsWip: "Función en desarrollo",
                proTitle: "Actualizar a PRO",
                proWip: "Desbloquea funciones premium",
                interpretationTitle: "Interpretación",
                challengeTitle: "Micro-Desafío de Hoy"
            },
            archive: {
                filtersTitle: "Filtros y Búsqueda",
                filtersBtn: "Filtros",
                searchPlaceholder: "Buscar en reflexiones...",
                allTypes: "Todos los tipos",
                applyFilters: "Aplicar Filtros",
                statsTitle: "Estadísticas",
                totalReflections: "Reflexiones Totales",
                period: "Período",
                prevPage: "← Anterior",
                nextPage: "Siguiente →",
                editTitle: "Editar Reflexión",
                editPlaceholder: "Edita el texto de tu reflexión...",
                saveEdit: "Guardar Cambios",
                cancel: "Cancelar",
                errorLoad: "Error al cargar reflexiones"
            },
            settings: {
                title: "⚙️ Configuración",
                subtitle: "Gestiona tu perfil, seguridad y preferencias",
                adminTitle: "Panel de Administración",
                adminSubtitle: "Gestiona usuarios y roles",
                registeredUsers: "Usuarios Registrados",
                loadingUsers: "Cargando usuarios...",
                profileTitle: "Perfil de Usuario",
                displayName: "Nombre Mostrado",
                namePlaceholder: "Ej: Marco Aurelio o Emanuel82",
                nameHint: "Mínimo 2 caracteres, máximo 30. Letras, números, espacios, apóstrofes y guiones.",
                email: "Correo electrónico",
                emailNote: "El correo no puede modificarse directamente",
                saveProfile: "💾 Guardar Perfil",
                securityTitle: "Seguridad",
                securityDesc: "Recibirás un correo con un enlace seguro para restablecer tu contraseña.",
                resetEmailLabel: "Correo para Restablecer Contraseña",
                resetBtn: "📧 Enviar Correo de Cambio de Contraseña",
                privacyTitle: "Privacidad y Gestión de Datos",
                privacyData: "📋 Datos Almacenados:",
                privacyDataDesc: "Recopilamos: nombre de usuario, correo, reflexiones diarias y fecha de registro, usados exclusivamente para el funcionamiento de la app.",
                privacyLegal: "🔒 Base Legal (GDPR):",
                privacyLegalDesc: "El tratamiento se basa en la ejecución del contrato (Art. 6.1.b GDPR) y el consentimiento explícito (Art. 6.1.a).",
                privacyRights: "⚖️ Tus Derechos:",
                privacyRightsDesc: "Según los artículos 15-22 del GDPR, tienes derecho a acceder, rectificar, eliminar, limitar, oponerte y solicitar la portabilidad de tus datos.",
                privacyStorage: "🗄️ Conservación:",
                privacyStorageDesc: "Los datos se conservan durante la vida del account activo. Al eliminar la cuenta se borran en 30 días (Art. 17.3 GDPR).",
                deleteWarning: "⚠️ La eliminación de la cuenta es permanente e irreversible.",
                deleteBtn: "🗑️ Eliminar Cuenta"
            },
            nav: {
                whatIsStoicism: "¿Qué es el Estoicismo?",
                login: "Iniciar sesión",
                origins: "Orígenes",
                philosophers: "Filósofos",
                principles: "Principios",
                today: "Hoy"
            },
            home: {
                ctaShort: "Entrar",
                cta: "Entra en el Viaje Estoico",
                hero: {
                    title: "Transforma tu vida cotidiana con los principios de los filósofos antiguos.",
                    subtitle: "Reflexiones para construir conciencia y serenidad,",
                    ai: "con perspectivas analíticas potenciadas por IA.",
                    startNow: "Empezar Ahora"
                },
                howItWorks: {
                    title: "Cómo Funciona",
                    subtitle: "Tu camino de crecimiento estoico en tres sencillos pasos",
                    step1: { title: "Escribe tu reflexión", description: "Dedica unos minutos al día para escribir pensamientos y desafíos en tu diario estoico personal." },
                    step2: { title: "Desafío personalizado", description: "La IA genera un micro-desafío estoico a medida basado en Marco Aurelio, Epicteto y Séneca." },
                    step3: { title: "Rastrea el progreso", description: "Monitorea tu evolución a través de dashboards intuitivos y visualiza tus patrones." }
                },
                philosophers: {
                    title: "Los Tres Pilares de la Sabiduría Estoica",
                    marcus: {
                        name: "Marco Aurelio",
                        principle: "Impedimentum Via Est",
                        principleTranslation: "El camino a través de los obstáculos",
                        quote: "«Quod obstat viae, via fit.»",
                        quoteTranslation: "\"Lo que obstaculiza la acción, hace avanzar la acción. Y lo que está en el camino, es el camino.\"",
                        description: "Los obstáculos no bloquean nuestro progreso, sino que se convierten ellos mismos en el camino.",
                        ai: "Para cada principio, la IA generará micro-desafíos personalizados basados en tus problemas cotidianos reales."
                    },
                    epictetus: {
                        name: "Epicteto",
                        principle: "In Nostra Potestate",
                        principleTranslation: "La dicotomía del control",
                        quote: "«En tois eph' hemin kai en tois ouk eph' hemin»",
                        quoteTranslation: "La Dicotomía del Control distingue entre lo que está en nuestro poder y lo que no.",
                        description: "Liberamos energía mental cuando dejamos de luchar contra lo que no depende de nosotros.",
                        ai: "La IA analiza tus reflexiones diarias y te guía para distinguir lo que puedes controlar de lo que no."
                    },
                    seneca: {
                        name: "Séneca",
                        principle: "Praemeditatio Malorum",
                        principleTranslation: "Prepararse para lo peor para vivir mejor",
                        quote: "«Qui omnia timet, nihil cogitat»",
                        quoteTranslation: "La praemeditatio malorum es el ejercicio de imaginar de antemano lo que podría salir mal.",
                        description: "Cuando ya hemos contemplado interiormente lo peor, cada dificultad real pierde parte de su poder.",
                        ai: "La IA te guiará en visualizaciones estructuradas de tus miedos recurrentes."
                    }
                },
                mementoMori: {
                    title: "MEMENTO MORI",
                    subtitle: "\"Recuerda que debes morir\"",
                    text1: "La conciencia de la mortalidad no es una carga, sino una liberación.",
                    text2: "Los estoicos contemplaban la muerte no para vivir con miedo, sino para vivir con intensidad."
                },
                faq: {
                    title: "Preguntas y Contacto",
                    subtitle: "Encuentra respuestas o escríbenos directamente",
                    q1: "¿Necesito conocer la filosofía estoica para empezar?",
                    a1: "No, te guiamos paso a paso.",
                    q2: "¿Cuánto tiempo debo dedicar cada día?",
                    a2: "Bastan 5-10 minutos.",
                    q3: "¿Mis datos personales están seguros?",
                    a3: "Absolutamente sí. Tus reflexiones están cifradas de extremo a extremo.",
                    q4: "¿Puedo probarlo gratis antes de suscribirme?",
                    a4: "Sí, 30 días de prueba gratuita con acceso completo."
                },
                contact: {
                    title: "CONTÁCTANOS",
                    subtitle: "¿Necesitas ayuda? ¡Escríbenos!",
                    name: "Nombre",
                    namePlaceholder: "Tu nombre",
                    email: "Correo electrónico",
                    emailPlaceholder: "tucorreo@ejemplo.com",
                    message: "Mensaje",
                    messagePlaceholder: "¿Cómo podemos ayudarte?",
                    send: "Enviar Mensaje",
                    note: "Responderemos en 24 horas"
                }
            },
            registration: {
                loading: "Creando cuenta...",
                title: "Comienza Tu Viaje",
                subtitle: "Únete a miles de practicantes modernos del estoicismo",
                googleBtn: "Continuar con Google",
                googleRedirecting: "Redirigiendo...",
                divider: "o con correo electrónico",
                form: {
                    nameLabel: "Nombre completo",
                    optional: "(opcional)",
                    namePlaceholder: "ej. Marco Aurelio",
                    nameHint: "Así te llamaremos en los correos",
                    emailLabel: "Correo electrónico *",
                    emailPlaceholder: "estoico@ejemplo.com",
                    emailSuccess: "✓ Correo válido",
                    passwordLabel: "Contraseña *",
                    passwordPlaceholder: "Mínimo 8 caracteres",
                    confirmPasswordLabel: "Confirmar contraseña *",
                    confirmPasswordPlaceholder: "Repite la contraseña",
                    confirmPasswordSuccess: "✓ Las contraseñas coinciden",
                    privacyText1: "Acepto los",
                    terms: "Términos de Servicio",
                    privacyText2: "y la",
                    privacy: "Política de Privacidad",
                    newsletter: "Quiero recibir reflexiones estoicas semanales por correo",
                    submitBtn: "Acepta el Desafío",
                    passwordReq: {
                        title: "La contraseña debe contener:",
                        length: "Al menos 8 caracteres",
                        uppercase: "Una letra mayúscula",
                        lowercase: "Una letra minúscula",
                        number: "Un número"
                    }
                },
                loginText: "¿Ya tienes una cuenta?",
                loginLink: "Inicia sesión aquí",
                success: "✅ ¡Cuenta creada! Revisa tu correo para confirmar.",
                validation: {
                    emailRequired: "El correo es obligatorio",
                    emailInvalid: "Introduce un correo válido",
                    confirmRequired: "Confirma la contraseña",
                    passwordMismatch: "Las contraseñas no coinciden"
                },
                strength: {
                    weak: "Débil",
                    medium: "Media",
                    strong: "Fuerte"
                },
                errors: {
                    formErrors: "Corrige los errores del formulario",
                    privacyRequired: "Debes aceptar los términos para continuar",
                    generic: "Se ha producido un error",
                    emailExists: "Este correo ya está registrado",
                    weakPassword: "Contraseña demasiado débil",
                    googleOAuth: "Error al iniciar sesión con Google"
                },
                badges: {
                    free: "Gratis para siempre",
                    noCard: "Sin tarjeta requerida",
                    cancel: "Cancelación instantánea",
                    secure: "Tus datos están protegidos y cifrados"
                }
            },
            login: {
                loading: "Iniciando sesión...",
                title: "Bienvenido de nuevo",
                subtitle: "Accede a tu diario estoico personal",
                googleBtn: "Continuar con Google",
                googleRedirecting: "Redirigiendo...",
                divider: "o con correo electrónico",
                form: {
                    emailLabel: "Correo electrónico",
                    emailPlaceholder: "estoico@ejemplo.com",
                    passwordLabel: "Contraseña",
                    passwordPlaceholder: "Tu contraseña",
                    rememberMe: "Recuérdame en este dispositivo",
                    forgotPassword: "¿Olvidaste tu contraseña?",
                    submitBtn: "Entrar"
                },
                registerText: "¿Aún no tienes cuenta?",
                registerLink: "Regístrate aquí",
                success: "✅ ¡Sesión iniciada! Redirigiendo..."
            },
            footer: {
                tagline: "Tu guía diaria para la sabiduría estoica.",
                resources: "Recursos",
                whatIsStoicism: "¿Qué es el Estoicismo?",
                blog: "Blog",
                community: "Comunidad",
                legal: "Legal",
                privacy: "Política de Privacidad",
                terms: "Términos de Servicio",
                cookies: "Política de Cookies",
                copyright: "© 2026 The Stoic Journey. Todos los derechos reservados."
            }
        }
    };

    // Esponi globalmente
    window.TRANSLATIONS = TRANSLATIONS;

    // ============================================
    // PARTE 2: FUNZIONI HELPER
    // ============================================

    function getNestedTranslation(obj, path) {
        return path.split(".").reduce((curr, key) => curr?.[key], obj);
    }

    function applyTranslations(lang) {
        const t = TRANSLATIONS[lang];
        if (!t) {
            console.error("❌ Lingua non supportata:", lang);
            return;
        }

        console.log("🌍 Applicazione traduzioni:", lang);

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            const value = getNestedTranslation(t, key);
            if (value !== undefined && value !== null) {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    if (el.hasAttribute("placeholder")) el.placeholder = value;
                } else {
                    el.innerHTML = value;
                }
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            const value = getNestedTranslation(t, key);
            if (value) el.placeholder = value;
        });

        // Aggiorna aria-label per accessibilità
        document.querySelectorAll("[data-i18n-aria]").forEach(el => {
            const key = el.getAttribute("data-i18n-aria");
            const value = getNestedTranslation(t, key);
            if (value) el.setAttribute("aria-label", value);
        });

        document.documentElement.lang = lang;
        localStorage.setItem("preferredLanguage", lang);

        console.log("✅ Traduzioni applicate:", lang.toUpperCase());
    }

    window.applyTranslations = applyTranslations;

    // ============================================
    // PARTE 3: INIZIALIZZAZIONE LANGUAGE SWITCHER
    // Supporta: bottoni IT/EN/ES, dropdown home
    // ============================================

    function initLanguageSwitcher() {
        const savedLang = localStorage.getItem("preferredLanguage") || "it";

        // Cerca switcher dropdown (home page)
        let switcher = document.getElementById("languageSwitcherHome") || document.getElementById("languageSwitcher");
        let dropdown = document.getElementById("languageDropdownHome") || document.getElementById("languageDropdown");
        let currentLangEl = document.getElementById("currentLangHome") || document.getElementById("currentLang");

        // Gestione bottoni IT / EN / ES (dashboard, accedi, registrazione)
        const btnIds = {
            it: ["btnLangIT", "btnLangIT_mobile"],
            en: ["btnLangEN", "btnLangEN_mobile"],
            es: ["btnLangES", "btnLangES_mobile"]
        };

        function activateLangButtons(lang) {
            Object.entries(btnIds).forEach(([code, ids]) => {
                ids.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.classList.toggle("active", lang === code);
                });
            });
        }

        function bindButtonLang(ids, lang) {
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener("click", () => {
                    applyTranslations(lang);
                    activateLangButtons(lang);
                });
            });
        }

        if (!switcher || !dropdown || !currentLangEl) {
            console.log("ℹ️ Nessun dropdown switcher — applico traduzioni + bottoni IT/EN/ES");
            applyTranslations(savedLang);
            activateLangButtons(savedLang);

            Object.entries(btnIds).forEach(([lang, ids]) => bindButtonLang(ids, lang));

            console.log("✅ Language Manager: attivo (modalità bottoni) — lingua:", savedLang.toUpperCase());
            return;
        }

        // Modalità dropdown
        console.log("🎯 Language switcher dropdown trovato");

        switcher.addEventListener("click", function(e) {
            e.stopPropagation();
            dropdown.classList.toggle("hidden");
        });

        document.addEventListener("click", function() {
            dropdown.classList.add("hidden");
        });

        const langOptions = dropdown.querySelectorAll(".lang-option");
        langOptions.forEach(option => {
            option.addEventListener("click", function(e) {
                e.stopPropagation();
                const lang = this.getAttribute("data-lang");
                applyTranslations(lang);
                currentLangEl.textContent = lang.toUpperCase();
                langOptions.forEach(opt => {
                    const isActive = opt.getAttribute("data-lang") === lang;
                    opt.classList.toggle("active", isActive);
                    const check = opt.querySelector(".check");
                    if (check) check.classList.toggle("hidden", !isActive);
                });
                dropdown.classList.add("hidden");
            });
        });

        applyTranslations(savedLang);
        currentLangEl.textContent = savedLang.toUpperCase();

        langOptions.forEach(option => {
            const isActive = option.getAttribute("data-lang") === savedLang;
            option.classList.toggle("active", isActive);
            const check = option.querySelector(".check");
            if (check) check.classList.toggle("hidden", !isActive);
        });

        console.log("✅ GLOBAL Language Manager v5.0: Dropdown attivo — lingua:", savedLang.toUpperCase());
    }

    // ============================================
    // PARTE 4: AVVIO
    // ============================================

    function runAfterAllScripts() {
        initLanguageSwitcher();

        setTimeout(() => {
            const savedLang = localStorage.getItem("preferredLanguage") || "it";
            if (savedLang !== "it") {
                applyTranslations(savedLang);
                console.log("🔄 Re-apply dopo script sincroni:", savedLang.toUpperCase());
            }
        }, 0);

        setTimeout(() => {
            const savedLang = localStorage.getItem("preferredLanguage") || "it";
            if (savedLang !== "it") {
                applyTranslations(savedLang);
                console.log("🔄 Re-apply dopo async Supabase:", savedLang.toUpperCase());
            }
        }, 1500);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runAfterAllScripts);
    } else {
        runAfterAllScripts();
    }

    console.log("✅ GLOBAL Language Manager v5.0: Script caricato — IT / EN / 🇪🇸 ES");

})();
