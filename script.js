document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION DATA ---
    const translations = {
        en: {
            slogan: "Türkiye's Best Media Agency",
            disclaimer: "(According to Board Decision",
            headline: "The Art of the Scroll.",
            subHeadline: "Don't get tired, we'll watch.<br>The only address you can trust for Reels.",
            p1Title: "01. From Human, To Human",
            p1Text: "Curated by a human with impeccable, albeit specific, taste. No AI, no engagement traps.",
            p2Title: "02. \"Real\" Reels",
            p2Text: "Only \"real\" videos from countless clips.",
            p3Title: "03. At Unexpected Moments",
            p3Text: "It could be in your inbox at any moment. Maybe it makes your worst day your best.",
            emailPlaceholder: "YOUR EMAIL ADDRESS",
            subscribeBtn: "JOIN THE LIST",
            comingSoon: "Going Public Soon",
            recentIssues: "RECENT ISSUES",
            issue1: "The beginning of a story...",
            issue2: '"-"',
            issue3: '"-"',
            date1: "JAN 17",
            hofTitle: "The Hall of Fame",
            successMsg: "You've been added to the list, <strong>{email}</strong>.<br> Check your inbox every now and then.",
            errorMsg: "Something went wrong. Please try again."
        },
        tr: {
            slogan: "Türkiye'nin En İyi Medya Ajansı",
            disclaimer: "(Yönetim Kurulu Kararıyla",
            headline: "Kaydırma Sanatı.",
            subHeadline: "Siz yorulmayın, biz izleriz.<br>Reels konusunda güvenebilecğiniz tek adres.",
            p1Title: "01. İnsandan, İnsana",
            p1Text: "Kusursuz ama kendine has bir zevke sahip bir insan tarafından seçildi. Yapay zeka yok, etkileşim tuzağı yok.",
            p2Title: "02. \"Harbi\" Reelslar",
            p2Text: "Sayısız video arasından sadece \"harbi\" videolar.",
            p3Title: "03. Beklenmedik Anlarda",
            p3Text: "Her an posta kutunuzda olabilir. Belki de en kötü gününüzü en iyi yapar.",
            emailPlaceholder: "E-POSTA ADRESİNİZ",
            subscribeBtn: "LİSTEYE GİR",
            comingSoon: "Yakında Yayındayız",
            recentIssues: "SON SAYILAR",
            issue1: '"Bir hikayenin başlangıcı..."',
            issue2: '"-"',
            issue3: '"-"',
            date1: "17 OCAK",
            hofTitle: "Şöhretler Geçidi",
            successMsg: "Listeye eklendiniz, <strong>{email}</strong>.<br> Arada bi' gelen kutunuza bakın.",
            errorMsg: "Bir şeyler ters gitti. Lütfen tekrar deneyin."
        },
        ar: {
            slogan: "أفضل وكالة إعلامية في تركيا",
            disclaimer: "(وفقاً لقرار مجلس الإدارة",
            headline: "فن التمرير.",
            subHeadline: "لا تتعب، نحن سنشاهد.<br>العنوان الوحيد الذي يمكنك الوثوق به للمقاطع (Reels).",
            p1Title: "01. من إنسان، إلى إنسان",
            p1Text: "منسقة من قبل إنسان ذو ذوق رفيع، وإن كان محدداً. لا ذكاء اصطناعي، لا مصائد تفاعل.",
            p2Title: "02. مقاطع \"حقيقية\"",
            p2Text: "فقط الفيديوهات \"الحقيقية\" من بين عدد لا يحصى من المقاطع.",
            p3Title: "03. في لحظات غير متوقعة",
            p3Text: "قد تكون في صندوق بريدك في أي لحظة. ربما تجعل أسوأ يوم لك هو الأفضل.",
            emailPlaceholder: "عنوان بريدك الإلكتروني",
            subscribeBtn: "انضم إلى القائمة",
            comingSoon: "سينطلق قريباً",
            recentIssues: "الإصدارات الأخيرة",
            issue1: "بداية قصة...",
            issue2: '"-"',
            issue3: '"-"',
            date1: "17 يناير",
            hofTitle: "قاعة المشاهير",
            successMsg: "تمت إضافتك إلى القائمة، <strong>{email}</strong>.<br> تحقق من بريدك الوارد من حين لآخر.",
            errorMsg: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
        },
        az: {
            slogan: "Türkiyənin Ən Yaxşı Media Agentliyi",
            disclaimer: "(İdarə Heyətinin Qərarına Əsasən",
            headline: "Sürüşdürmə Sənəti.",
            subHeadline: "Siz yorulmayın, biz izləyərik.<br>Reels mövzusunda etibar edə biləcəyiniz tək ünvan.",
            p1Title: "01. İnsandan, İnsana",
            p1Text: "Qüsursuz, lakin özünəməxsus zövqü olan bir insan tərəfindən seçilib. Sünii intellekt yoxdur.",
            p2Title: "02. \"Əsl\" Reels-lər",
            p2Text: "Sayısız video arasından yalnız \"əsl\" videolar.",
            p3Title: "03. Gözlənilməz Anlarda",
            p3Text: "Hər an poçt qutunuzda ola bilər. Bəlkə də ən pis gününüzü ən yaxşı edər.",
            emailPlaceholder: "E-POÇT ÜNVANINIZ",
            subscribeBtn: "SİYAHIYA QOŞUL",
            comingSoon: "Tezliklə Xidmətinizdə",
            recentIssues: "SON SAYLAR",
            issue1: "Bir hekayənin başlanğıcı...",
            issue2: '"-"',
            issue3: '"-"',
            date1: "17 YAN",
            hofTitle: "Şöhrət Zalı",
            successMsg: "Siyahıya əlavə olundunuz, <strong>{email}</strong>.<br> Arada bir gələn qutunuza baxın.",
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

    // --- THEME TOGGLE LOGIC ---
    const themeBtn = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

