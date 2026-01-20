document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION DATA ---
    const translations = {
        en: {
            slogan: "Türkiye's Best Media Agency",
            disclaimer: "(According to Board Decision",
            headline: "The Art of the Scroll.",
            subHeadline: "I watch the chaos so you don't have to.<br>A strictly curated weekly digest of the internet's most amusing ephemeral cinema.",
            p1Title: "01. No Algorithms",
            p1Text: "Curated by a human with impeccable, albeit specific, taste. No AI, no engagement traps.",
            p2Title: "02. Zero Noise",
            p2Text: "I filter through thousands of clips. Only the ones that elicit a genuine laugh make the cut.",
            p3Title: "03. Sunday Drop",
            p3Text: "Arrives in your inbox every Sunday. The perfect end to your week.",
            emailPlaceholder: "YOUR EMAIL ADDRESS",
            subscribeBtn: "SUBSCRIBE",
            comingSoon: "Going Public Soon",
            recentIssues: "RECENT ISSUES",
            issue1: '"The Cat That Defied Physics"',
            issue2: '"Corporate Zoom Fails: Vol. 4"',
            issue3: '"New Year, Same Chaos"',
            successMsg: "You are on the list, <strong>{email}</strong>.<br>Watch your inbox this Sunday.",
            errorMsg: "Something went wrong. Please try again."
        },
        tr: {
            slogan: "Türkiye'nin En İyi Medya Ajansı",
            disclaimer: "(Yönetim Kurulu Kararıyla",
            headline: "Kaydırma Sanatı.",
            subHeadline: "Kaosu ben izliyorum, siz yorulmayın.<br>İnternetin en eğlenceli geçici sinemasının titizlikle hazırlanmış haftalık özeti.",
            p1Title: "01. Algoritma Yok",
            p1Text: "Kusursuz ama kendine has bir zevke sahip bir insan tarafından seçildi. Yapay zeka yok, etkileşim tuzağı yok.",
            p2Title: "02. Gürültü Yok",
            p2Text: "Binlerce videoyu eliyorum. Sadece gerçekten güldürenler seçimi geçer.",
            p3Title: "03. Pazar Bülteni",
            p3Text: "Her Pazar gelen kutunuzda. Haftayı bitirmenin mükemmel yolu.",
            emailPlaceholder: "E-POSTA ADRESİNİZ",
            subscribeBtn: "ABONE OL",
            comingSoon: "Yakında Yayındayız",
            recentIssues: "SON SAYILAR",
            issue1: '"Fiziğe Meydan Okuyan Kedi"',
            issue2: '"Kurumsal Zoom Hataları: Cilt 4"',
            issue3: '"Yeni Yıl, Aynı Kaos"',
            successMsg: "Listeye eklendiniz, <strong>{email}</strong>.<br>Pazar günü gelen kutunuzu kontrol edin.",
            errorMsg: "Bir şeyler ters gitti. Lütfen tekrar deneyin."
        },
        ar: {
            slogan: "أفضل وكالة إعلامية في تركيا",
            disclaimer: "(وفقاً لقرار مجلس الإدارة",
            headline: "فن التمرير.",
            subHeadline: "أشاهد الفوضى حتى لا تضطر لذلك.<br>ملخص أسبوعي منسق بدقة لأكثر المقاطع تسلية على الإنترنت.",
            p1Title: "01. لا خوارزميات",
            p1Text: "منسقة من قبل إنسان ذو ذوق رفيع، وإن كان محدداً. لا ذكاء اصطناعي، لا مصائد تفاعل.",
            p2Title: "02. بلا ضجيج",
            p2Text: "أقوم بتصفية آلاف المقاطع. فقط تلك التي تثير ضحكة حقيقية هي التي تنجح.",
            p3Title: "03. نشرة الأحد",
            p3Text: "تصل إلى صندوق بريدك كل أحد. النهاية المثالية لأسبوعك.",
            emailPlaceholder: "عنوان بريدك الإلكتروني",
            subscribeBtn: "اشترك",
            comingSoon: "سينطلق قريباً",
            recentIssues: "الإصدارات الأخيرة",
            issue1: '"القطة التي تحدت الفيزياء"',
            issue2: '"إخفاقات زووم للشركات: المجلد 4"',
            issue3: '"عام جديد، نفس الفوضى"',
            successMsg: "أنت الآن في القائمة، <strong>{email}</strong>.<br>راقب بريدك الوارد هذا الأحد.",
            errorMsg: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
        },
        az: {
            slogan: "Türkiyənin Ən Yaxşı Media Agentliyi",
            disclaimer: "(İdarə Heyətinin Qərarına Əsasən",
            headline: "Sürüşdürmə Sənəti.",
            subHeadline: "Xaosu mən izləyirəm, siz yorulmayın.<br>İnternetin ən əyləncəli videolarının həftəlik xüsusi seçimi.",
            p1Title: "01. Alqoritm Yoxdur",
            p1Text: "Qüsursuz, lakin özünəməxsus zövqü olan bir insan tərəfindən seçilib. Sünii intellekt yoxdur.",
            p2Title: "02. Səs-küy Yoxdur",
            p2Text: "Minlərlə videonu ələkdən keçirirəm. Yalnız həqiqətən güldürənlər seçilir.",
            p3Title: "03. Bazar Buraxılışı",
            p3Text: "Hər bazar elektron poçtunuzda. Həftəni bitirmək üçün mükəmməl yol.",
            emailPlaceholder: "E-POÇT ÜNVANINIZ",
            subscribeBtn: "ABUNƏ OL",
            comingSoon: "Tezliklə Xidmətinizdə",
            recentIssues: "SON SAYLAR",
            issue1: '"Fizikaya Meydan Oxuyan Pişik"',
            issue2: '"Korporativ Zoom Səhvləri: Cild 4"',
            issue3: '"Yeni İl, Eyni Xaos"',
            successMsg: "Siyahıdasınız, <strong>{email}</strong>.<br>Bazar günü gələnlər qutusunu yoxlayın.",
            errorMsg: "Nəsə səhv getdi. Zəhmət olmasa yenidən cəhd edin."
        }
    };

    let currentLang = 'en';

    // --- LANGUAGE SWITCHER LOGIC ---
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    function setLanguage(lang) {
        currentLang = lang;
        
        // Update Buttons
        langBtns.forEach(b => b.classList.remove('active'));
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.lang = 'ar';
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.lang = lang;
        }

        // Update Text
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (key === 'subHeadline') {
                     el.innerHTML = translations[lang][key]; // Allow HTML for line breaks
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Update Placeholders
        const placeholders = document.querySelectorAll('[data-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update Logo Source
        // Assumes file naming: logo/logoEN.png, logo/logoTR.png, etc.
        const logos = document.querySelectorAll('.logo-img');
        logos.forEach(img => {
            // Reset fallback if previously triggered
            img.style.display = '';
            const fallback = img.nextElementSibling;
            if (fallback && fallback.classList.contains('logo-placeholder-fallback')) {
                fallback.style.display = 'none';
            }
            
            // Set new source
            // Convert 'en' to 'EN', 'tr' to 'TR' for filename matching
            const langUpper = lang.toUpperCase(); 
            img.src = `logo/logo${langUpper}.png`;
        });
    }
});
