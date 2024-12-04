const questions = [
    {
        question: "Apa yang dimaksud dengan الْإِعْرَاب dalam Ilmu Nahwu?",
        answers: [
            "Perubahan harakat di awal kata",
            "Perubahan harakat di akhir kata karena perbedaan عَامِل",
            "Perubahan huruf di tengah kata",
            "Perubahan makna tanpa perubahan harakat"
        ],
        correct: 1,
        difficulty: 1
    },
    {
        question: "Manakah yang termasuk عَلَامَاتُ الرَّفْعِ (tanda-tanda rafa')?",
        answers: [
            "الْفَتْحَة",
            "الضَّمَّة",
            "الْكَسْرَة",
            "السُّكُوْن"
        ],
        correct: 1,
        difficulty: 1
    },
    {
        question: "Dalam kalimat مُحَمَّدٌ طَالِبٌ, kata مُحَمَّدٌ adalah:",
        answers: [
            "مُبْتَدَأ",
            "خَبَر",
            "فَاعِل",
            "مَفْعُول بِه"
        ],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Apa yang dimaksud dengan الْجُمْلَة الْفِعْلِيَّة?",
        answers: [
            "Kalimat yang diawali dengan فِعْل",
            "Kalimat yang diawali dengan اِسْم",
            "Kalimat yang berisi حَرْف",
            "Kalimat yang tidak memiliki فِعْل"
        ],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Dalam kalimat ذَهَبَ الطَّالِبُ, kata الطَّالِبُ adalah:",
        answers: [
            "مَفْعُول بِه",
            "فَاعِل",
            "مُبْتَدَأ",
            "خَبَر"
        ],
        correct: 1,
        difficulty: 2
    },
    {
        question: "Manakah isim yang termasuk dalam kategori 'مرفوع' pada kalimat: أَكَلَ الوَلَدُ التُّفَّاحَةَ",
        answers: [
            "أَكَلَ",
            "الوَلَدُ",
            "التُّفَّاحَةَ",
            "لا شيء"
        ],
        correct: 1,
        difficulty: 2
    },
    {
        question: "Apa fungsi kata 'الكتب' dalam kalimat: وَضَعْتُ الكُتُبَ على المَكْتَبِ",
        answers: [
            "فاعل",
            "مفعول به",
            "مضاف إليه",
            "مبتدأ"
        ],
        correct: 1,
        difficulty: 2
    },
    {
        question: "Dalam kalimat: كَتَبَ الطَّالِبُ دَرْسَهُ بِقَلَمٍ, Kata 'بِقَلَمٍ' adalah:",
        answers: [
            "جار ومجرور",
            "مضاف ومضاف إليه",
            "حال",
            "بدل"
        ],
        correct: 0,
        difficulty: 3
    },
    {
        question: "Apa bentuk tarkib dari 'باب المدرسةِ':",
        answers: [
            "نعت ومنعوت",
            "مضاف ومضاف إليه",
            "بدل",
            "تمييز"
        ],
        correct: 1,
        difficulty: 2
    },
    {
        question: "Manakah contoh isim manshub dalam kalimat berikut? رَأَيْتُ الطُّلَّابَ يَكْتُبُونَ دُرُوسَهُمْ",
        answers: [
            "الطُّلَّابَ",
            "يَكْتُبُونَ",
            "دُرُوسَهُمْ",
            "رَأَيْتُ"
        ],
        correct: 0,
        difficulty: 3
    },
    {
        question: "Pada kalimat 'إنَّ اللهَ غَفُورٌ رَحِيمٌ', fungsi kata 'اللهَ' adalah:",
        answers: [
            "اسم إنّ",
            "خبر إنّ",
            "مبتدأ",
            "مضاف إليه"
        ],
        correct: 0,
        difficulty: 3
    },
    {
        question: "Dalam kalimat: الْمُسْلِمُ صَادِقٌ دَائِماً, kata 'دَائِماً' adalah:",
        answers: [
            "حال",
            "مفعول مطلق",
            "مفعول فيه",
            "خبر"
        ],
        correct: 2,
        difficulty: 3
    },
    {
        question: "Dalam kalimat 'وَصَلَ الأَسْتَاذُ مُبَكِّراً', kata 'مُبَكِّراً' adalah:",
        answers: [
            "مفعول به",
            "حال",
            "خبر",
            "صفة"
        ],
        correct: 1,
        difficulty: 3
    },
    {
        question: "Pada kalimat 'هَذَا كِتَابُ الطُّلَّابِ', kata 'كِتَابُ' adalah:",
        answers: [
            "مضاف",
            "مضاف إليه",
            "مبتدأ",
            "بدل"
        ],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Pada kalimat 'أَرَاكَ غَداً', kata 'غَداً' adalah:",
        answers: [
            "مفعول به",
            "مفعول فيه",
            "حال",
            "تمييز"
        ],
        correct: 1,
        difficulty: 2
    },
    {
        question: "Dalam kalimat 'اللَّهُ غَفُورٌ', kata 'اللَّهُ' adalah:",
        answers: [
            "مبتدأ",
            "خبر",
            "مفعول به",
            "بدل"
        ],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Pada kalimat 'كُتِبَ الدَّرْسُ', kata 'كُتِبَ' adalah:",
        answers: [
            "فعل ماضٍ مبني للمعلوم",
            "فعل ماضٍ مبني للمجهول",
            "فعل مضارع",
            "فعل أمر"
        ],
        correct: 1,
        difficulty: 3
    },
    {
        question: "Dalam kalimat 'يَحْتَرِمُ المُعَلِّمُ الطُّلَّابَ', kata 'يَحْتَرِمُ' adalah:",
        answers: [
            "فعل ماضٍ",
            "فعل مضارع",
            "فعل أمر",
            "اسم فاعل"
        ],
        correct: 1,
        difficulty: 2
    },
    {
        question: "Dalam kalimat 'إِنَّ الصِّدْقَ أَمَانَةٌ', kata 'أَمَانَةٌ' adalah:",
        answers: [
            "اسم إنّ",
            "خبر إنّ",
            "مضاف إليه",
            "حال"
        ],
        correct: 1,
        difficulty: 3
    },
    {
        question: "Pada kalimat 'العِلْمُ نُورٌ', kata 'نُورٌ' adalah:",
        answers: [
            "مبتدأ",
            "خبر",
            "بدل",
            "حال"
        ],
        correct: 1,
        difficulty: 2
    },
    {
        question: "Dalam kalimat 'فَتَحَ الطُّلَّابُ الأَبْوَابَ', kata 'الأَبْوَابَ' adalah:",
        answers: [
            "فاعل",
            "مفعول به",
            "بدل",
            "خبر"
        ],
        correct: 1,
        difficulty: 2
    },
    {
        question: "Pada kalimat 'الطِّفْلُ يَبْكِي خَوْفًا', kata 'خَوْفًا' adalah:",
        answers: [
            "حال",
            "مفعول مطلق",
            "مفعول فيه",
            "تمييز"
        ],
        correct: 1,
        difficulty: 3
    },
    {
        question: "Dalam kalimat 'مَرَرْتُ بِالْمَدِينَةِ', kata 'بِالْمَدِينَةِ' adalah:",
        answers: [
            "جار ومجرور",
            "حال",
            "مفعول فيه",
            "بدل"
        ],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Dalam kalimat 'هَذِهِ طَالِبَةٌ جَدِيدَةٌ', kata 'جَدِيدَةٌ' adalah:",
        answers: [
            "بدل",
            "حال",
            "نعت",
            "خبر"
        ],
        correct: 2,
        difficulty: 2
    },
    {
        question: "Pada kalimat 'رَأَيْتُ طِفْلًا نَائِمًا', kata 'نَائِمًا' adalah:",
        answers: [
            "مفعول به",
            "حال",
            "نعت",
            "مضاف إليه"
        ],
        correct: 1,
        difficulty: 3
    },
    {
        question: "Dalam kalimat 'قَالَ إِنِّي أَنَا اللَّهُ', apa fungsi 'إِنِّي':",
        answers: [
            "اسم إشارة",
            "جملة اعتراضية",
            "اسم إن وخبرها",
            "جار ومجرور"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "Pada kalimat 'الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ', fungsi kata 'عَمِلُوا' adalah:",
        answers: [
            "فعل ماضٍ ناقص",
            "فعل مضارع مرفوع",
            "فعل ماضٍ تام",
            "فعل أمر"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "Dalam kalimat 'كَيْفَ نُصَلِّي الصَّلَاةَ الصَّحِيحَةَ؟', kata 'كَيْفَ' adalah:",
        answers: [
            "اسم استفهام في محل مفعول مطلق",
            "اسم استفهام في محل مفعول به",
            "اسم استفهام في محل حال",
            "اسم استفهام في محل مضاف إليه"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "Dalam kalimat 'مَا أَجْمَلَ اللَّيْلَةَ!', kata 'اللَّيْلَةَ' adalah:",
        answers: [
            "مفعول به",
            "مفعول مطلق",
            "مبتدأ",
            "حال"
        ],
        correct: 0,
        difficulty: 4
    },
    {
        question: "Dalam kalimat 'أَحْضِرْ لِي كِتَابًا لِطَالِبٍ مُجْتَهِدٍ', fungsi 'مُجْتَهِدٍ' adalah:",
        answers: [
            "بدل",
            "صفة",
            "حال",
            "مضاف إليه"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "Dalam kalimat 'رُبَّ كِتَابٍ قَرَأْتُهُ أَفَادَنِي كَثِيرًا', kata 'رُبَّ' adalah:",
        answers: [
            "حرف نفي",
            "حرف جر",
            "اسم موصول",
            "حرف شرط"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "Pada kalimat 'لَعَلَّ الرَّجُلَ صَادِقٌ', kata 'صَادِقٌ' adalah:",
        answers: [
            "حال",
            "بدل",
            "خبر لعل",
            "اسم لعل"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "Dalam kalimat 'لا تَكْتُبْ بِدُونِ قَلَمٍ', fungsi 'بِدُونِ' adalah:",
        answers: [
            "اسم موصول",
            "جار ومجرور",
            "مفعول به",
            "ظرف زمان"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "Pada kalimat 'لَا نَافِيَةُ الْجِنْسِ تَعْمَلُ بِشَرْطٍ', kata 'شَرْطٍ' adalah:",
        answers: [
            "بدل",
            "حال",
            "مضاف إليه",
            "خبر"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "Dalam kalimat 'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا', fungsi 'وَسَطًا' adalah:",
        answers: [
            "بدل",
            "حال",
            "مفعول به ثاني",
            "صفة"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "مَنْ يَسْتَغْفِرِ اللَّهَ يُغْفَرْ لَهُ", 
        questionText: "Manakah adawat syarat dalam kalimat:",
        answers: [
            "يَسْتَغْفِرِ",
            "اللَّهَ",
            "يُغْفَرْ",
            "مَنْ"
        ],
        correct: 3,
        difficulty: 4
    },
    {
        question: "قَالَ رَبِّي زِدْنِي عِلْمًا",
        questionText: "Dalam kalimat berikut, kata \"عِلْمًا\" adalah:",
        answers: [
            "حال",
            "مفعول مطلق",
            "تمييز",
            "مضاف إليه"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "لَدَيَّ عَشَرَةُ كُتُبٍ",
        questionText: "Apa hubungan antara \"عَشَرَةٌ\" dan \"كُتُبٍ\" dalam kalimat:",
        answers: [
            "بدل",
            "تمييز",
            "عدد ومعدود",
            "خبر"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "كَانَ الطَّالِبُ نَشِيطًا",
        questionText: "Dalam kalimat berikut, kata \"كَانَ\" adalah:",
        answers: [
            "فعل ناقص",
            "فعل تام",
            "اسم كان",
            "خبر كان"
        ],
        correct: 0,
        difficulty: 4
    },
    {
        question: "سَارَ الوَلَدُ",
        questionText: "Dalam kalimat berikut, kata \"سَارَ\" adalah fi'il:",
        answers: [
            "لازم",
            "متعدٍّ",
            "ناقص",
            "مفعول"
        ],
        correct: 0,
        difficulty: 4
    },
    {
        question: "كَتَبَ المُعَلِّمُ الدَّرْسَ",
        questionText: "Dalam kalimat berikut, kata \"كَتَبَ\" adalah fi'il:",
        answers: [
            "لازم",
            "متعدٍّ",
            "ناقص",
            "حال"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "لَيْسَ الحَقُّ ضَائِعًا",
        questionText: "Dalam kalimat berikut, kata \"لَيْسَ\" adalah:",
        answers: [
            "اسم ليس",
            "خبر ليس",
            "فعل ناقص",
            "حال"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "عِنْدِي خَمْسَةُ أَقْلَامٍ",
        questionText: "Dalam kalimat berikut, tanda i'rab pada \"أَقْلَامٍ\" adalah:",
        answers: [
            "الضمة",
            "الفتحة",
            "الكسرة",
            "السكون"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "هَلْ هَذَا الطِّفْلُ ذَكِيٌّ؟",
        questionText: "Dalam kalimat berikut, kata \"هَلْ\" adalah:",
        answers: [
            "اسم شرط",
            "حرف استفهام",
            "مفعول فيه",
            "بدل"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "مَا أَحْسَنَ الوَرْدَ!",
        questionText: "Dalam kalimat berikut, kata \"الوَرْدَ\" adalah:",
        answers: [
            "مفعول مطلق",
            "مفعول به",
            "مبتدأ",
            "حال"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ",
        questionText: "Dalam kalimat berikut, kata \"قَدْ\" adalah:",
        answers: [
            "حرف نصب",
            "حرف تحقيق",
            "حرف جزم",
            "حرف استفهام"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "ذَهَبَ الرَّجُلُ إِلَى السُّوقِ",
        questionText: "Apa fungsi kata \"إِلَى\" dalam kalimat:",
        answers: [
            "اسم",
            "ظرف",
            "حرف جر",
            "حال"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "جَلَسَ زَيْدٌ خَلْفَ الكِتَابِ",
        questionText: "Dalam kalimat berikut, kata \"خَلْفَ\" adalah:",
        answers: [
            "اسم شرط",
            "ظرف مكان",
            "مفعول به",
            "بدل"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "هَذَا وَلَدٌ كَرِيمٌ",
        questionText: "Dalam kalimat berikut, kata \"كَرِيمٌ\" adalah:",
        answers: [
            "حال",
            "بدل",
            "نعت",
            "مضاف"
        ],
        correct: 2,
        difficulty: 4
    },
    {
        question: "مَا زَالَ الطَّالِبُ يَجْتَهِدُ",
        questionText: "Dalam kalimat berikut, kata \"مَا زَالَ\" adalah salah satu dari:",
        answers: [
            "أفعال المقاربة",
            "أفعال الاستمرار",
            "أفعال التمني",
            "أفعال المدح"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "الرَّجُلُ الْأَمِينُ يُحِبُّهُ النَّاسُ",
        questionText: "Apa hubungan antara \"الرَّجُلُ\" dan \"الْأَمِينُ\" dalam kalimat:",
        answers: [
            "بدل",
            "نعت ومنعوت",
            "مبتدأ وخبر",
            "مضاف ومضاف إليه"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "لَعَلَّكَ تَنْجَحُ",
        questionText: "Dalam kalimat berikut, kata \"لَعَلَّ\" adalah:",
        answers: [
            "حرف نفي",
            "حرف مشبه بالفعل",
            "فعل مضارع",
            "اسم"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "قَامَ المُدَرِّسُ قِيَامًا",
        questionText: "Dalam kalimat berikut, kata \"قِيَامًا\" adalah:",
        answers: [
            "حال",
            "مفعول مطلق",
            "بدل",
            "ظرف"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "يَفْهَمُ الطِّفْلُ فِي المَدْرَسَةِ",
        questionText: "Dalam kalimat berikut, kata \"فِي\" adalah:",
        answers: [
            "اسم",
            "حرف جر",
            "مفعول فيه",
            "بدل"
        ],
        correct: 1,
        difficulty: 4
    },
    {
        question: "إِنَّ المُسْلِمِينَ إِخْوَةٌ",
        questionText: "Apa tanda i'rab pada \"المُسْلِمِينَ\" dalam kalimat:",
        answers: [
            "الضمة",
            "الكسرة",
            "الفتحة",
            "السكون"
        ],
        correct: 2,
        difficulty: 4
    }
];

// Fungsi untuk mengacak pertanyaan
function shuffleQuestions() {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
