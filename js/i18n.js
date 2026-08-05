/* ============================================================
   Kenzy Mohamed — i18n (English <-> Egyptian Arabic) engine
   ============================================================ */
(function () {
  'use strict';

  var DICT = {
    en: {
      common: {
        logo: 'KENZY <span>MOHAMED</span>',
        logoPlain: 'KENZY MOHAMED',
        name: 'Kenzy Mohamed',
        onair: 'On Air',
        watchShowreel: 'Watch Showreel',
        getInTouch: 'Get in Touch',
        contactKenzy: 'Contact Kenzy',
        factBasedIn: 'Based in',
        factFocus: 'Focus',
        factEducation: 'Education',
        factLanguages: 'Languages',
        factBasedInVal: 'Giza, Egypt',
        factFocusValShort: 'TV & Radio Presenting, PR',
        factFocusValFull: 'TV & Radio Presenting, Public Relations',
        factEducationVal: 'LL.B., Ain Shams University (2026)',
        factLanguagesVal: 'Arabic (Native), English',
        achievementsEyebrow: 'Achievements',
        aboutEyebrow: 'About',
        expertiseEyebrow: 'Expertise',
        timelineEyebrow: 'Timeline',
        contactEyebrow: 'Contact',
        toggleLabel: 'العربية'
      },
      nav: {
        home: 'Home',
        about: 'About',
        showreel: 'Showreel',
        achievements: 'Achievements',
        contact: 'Contact'
      },
      footer: {
        tagline: 'Media Presenter · TV Host · Public Relations Professional based in Giza, Egypt.',
        copy: '© Kenzy Mohamed',
        tagShort: 'Media Presenter · TV Host · Public Relations'
      },
      video: {
        v1t: '8 Morning Show — Special Interview Segment', v1d: 'Kenzy interviews Dr. Tarek Elias on student unions and their impact on students', v1g: 'TV',
        v2t: 'The Little Broadcaster — Kenzy Mohamed', v2d: 'Special interview with Dr. Nesrine Saleh', v2g: 'TV',
        v4t: 'Bokra Lena Program', v4d: 'Over 50 episodes with Egyptian Television — years of collaboration', v4g: 'TV',
        v4ch: 'Egyptian Television',
        v5t: 'National Council for Childhood &amp; Motherhood', v5d: 'A video made in cooperation with the National Council for Childhood and Motherhood', v5g: 'Co-op',
        v5ch: 'National Council',
        v6t: 'Graduation Speech — University of Sharjah', v6d: "Graduates' speech — Professional Diploma in Parliamentary Work Skills, Advanced Level", v6g: 'Speech',
        v6ch: 'University of Sharjah',
        comingSoon: 'Video coming soon'
      },
      home: {
        metaTitle: 'Kenzy Mohamed — Media Presenter & PR Professional',
        metaDesc: 'Kenzy Mohamed — TV Host, Radio Presenter & Public Relations Professional based in Giza, Egypt.',
        heroEyebrow: 'Media Presenter · TV Host · PR Professional',
        heroName: 'KENZY<br><em>MOHAMED</em>',
        heroTyping: 'TV HOST|Radio|Public Relations|Live Events',
        heroTagline: 'Hands-on experience hosting national broadcasts, conferences, and governmental ceremonies — with proven leadership representing Egypt on regional stages.',
        heroLocationTag: 'GIZA, EGYPT',
        statYears: 'Years in Media',
        statEvents: 'Events Hosted',
        statLeadership: 'Regional Leadership Role',
        statLanguages: 'Languages',
        aboutHeading: 'The story behind the microphone',
        aboutP1: 'Kenzy Mohamed is a media presenter and public relations professional with hands-on experience in television, radio broadcasting, and hosting official events across Egypt.',
        aboutP2: 'She is the first Egyptian female President of the Arab Parliament for the Child, representing Egypt on a regional level with strong communication and audience-engagement skills.',
        aboutReadMore: 'Read full story →',
        showreelHeading: 'Featured Showreel',
        showreelDesc: 'A selection of hosting, broadcasting, and public-speaking moments.',
        showreelViewAll: 'View All Videos',
        achHeading: 'Recognized on regional stages',
        achExplore: 'Explore full timeline →',
        ach1t: 'First Female President', ach1d: 'First Egyptian female President of the Arab Parliament for the Child.',
        ach2t: 'Regional Representation', ach2d: 'Represented Egypt in regional youth forums and diplomatic initiatives.',
        ach3t: 'Official Ceremonies', ach3d: 'Hosted official governmental ceremonies and national conferences.',
        ach4t: 'World Youth Forum', ach4d: 'Speaker at World Youth Forum sessions broadcast on DMC.',
        ctaHeading: 'Ready to bring your event to life?',
        ctaDesc: 'Available for television, radio, conferences, and public relations projects across Egypt and the region.',
        ctaButton: 'Start a Conversation'
      },
      about: {
        metaTitle: 'About — Kenzy Mohamed',
        metaDesc: 'Learn about Kenzy Mohamed — media presenter, TV host, and PR professional from Giza, Egypt.',
        breadcrumb: 'About',
        heroEyebrow: 'About Kenzy',
        heroH1: 'The story behind<br>the microphone',
        heroP: 'From national broadcasts to regional leadership — a journey in media, public relations, and youth empowerment.',
        p1: 'Kenzy Mohamed is a media presenter and public relations professional with hands-on experience in television, radio broadcasting, and hosting official events. She has presented conferences, youth forums, governmental ceremonies, and public initiatives across Egypt.',
        p2: 'Beyond the studio, Kenzy is the first Egyptian female President of the Arab Parliament for the Child, representing Egypt on a regional level, and has led community and youth-empowerment initiatives with national organizations.',
        p3: "She brings strong communication, interviewing, and audience-engagement skills to every stage she stands on — whether it's a live broadcast, a diplomatic forum, or a national ceremony.",
        p4: 'Currently pursuing her LL.B. at Ain Shams University, Kenzy combines legal knowledge with media expertise to deliver polished, professional presentations that connect with diverse audiences.',
        expertiseHeading: 'On camera & behind the scenes',
        mediaSkillsHeading: 'Media Skills',
        techProHeading: 'Technical & Professional',
        pillTvRadio: 'TV & Radio Presenting',
        pillLiveEvent: 'Live Event Hosting',
        pillInterviewing: 'Interviewing',
        pillPublicSpeaking: 'Public Speaking',
        pillVoicePresentation: 'Voice Presentation',
        pillAudienceEngagement: 'Audience Engagement',
        pillScriptWriting: 'Script Writing',
        pillEventCoordination: 'Event Coordination',
        pillVideoEditing: 'Video Editing',
        pillContentCreation: 'Content Creation',
        pillSocialMedia: 'Social Media Management',
        pillPR: 'Public Relations',
        pillLeadership: 'Leadership & Team Coordination',
        pillMsOffice: 'Microsoft Office',
        barTvPresenting: 'TV Presenting',
        barPublicSpeaking: 'Public Speaking',
        barInterviewing: 'Interviewing',
        barPR: 'Public Relations',
        barContentCreation: 'Content Creation',
        barEventCoordination: 'Event Coordination',
        ctaHeading: 'Watch Kenzy at Work',
        ctaDesc: 'Explore the showreel featuring television hosting, forum sessions, and ceremonial coverage.',
        ctaButton: 'Watch Showreel'
      },
      achievements: {
        metaTitle: 'Achievements — Kenzy Mohamed',
        metaDesc: "Kenzy Mohamed's achievements — regional leadership, official ceremonies, and World Youth Forum.",
        breadcrumb: 'Achievements',
        heroEyebrow: 'Achievements',
        heroH1: 'Recognized on<br>regional stages',
        heroP: 'From pioneering leadership roles to national broadcasts — milestones that define a career in media and public service.',
        c1t: 'First Female President', c1d: 'First Egyptian female President of the Arab Parliament for the Child — a pioneering leadership role representing Egypt across the Arab region.',
        c2t: 'Regional Representation', c2d: 'Represented Egypt in regional youth forums and diplomatic youth initiatives, building bridges between nations through media and dialogue.',
        c3t: 'Official Ceremonies', c3d: 'Hosted official governmental ceremonies and national conferences with poise, professionalism, and strong audience engagement.',
        c4t: 'World Youth Forum', c4d: 'Speaker at World Youth Forum sessions broadcast on DMC, addressing digital education and youth empowerment on a global stage.',
        c5t: 'University of Sharjah Keynote', c5d: 'Delivered a keynote address at the University of Sharjah as part of the Arab Parliament for the Child initiative.',
        c6t: 'National TV & Radio', c6d: 'Presented segments on Egyptian television and radio, covering topics from youth policy to community development.',
        timelineHeading: 'Career milestones',
        t1y: '2024 — Present', t1t: 'President, Arab Parliament for the Child', t1d: 'First Egyptian female to hold this regional leadership position, representing Egypt and leading youth advocacy initiatives across the Arab world.',
        t2y: '2023', t2t: 'World Youth Forum — DMC Broadcast', t2d: 'Featured speaker at the World Youth Forum, presenting on digital education in sessions broadcast nationally on DMC channel.',
        t3y: '2022', t3t: 'Keynote — University of Sharjah', t3d: 'Delivered keynote address on child rights and youth empowerment at the University of Sharjah, UAE.',
        t4y: '2021', t4t: 'Governmental Ceremony Hosting', t4d: 'Hosted multiple official governmental ceremonies and national conferences across Egypt.',
        t5y: '2020', t5t: 'Television & Radio Debut', t5d: 'Began presenting segments on Egyptian television and radio, building a foundation in live broadcasting and audience engagement.',
        ctaHeading: "Let's create something together",
        ctaDesc: 'Kenzy is open to hosting, presenting, and PR opportunities across television, radio, and live events.',
        ctaButton: 'Contact Kenzy'
      },
      showreel: {
        metaTitle: 'Showreel — Kenzy Mohamed',
        metaDesc: 'Watch Kenzy Mohamed at work — TV hosting, forum sessions, and ceremonial coverage.',
        breadcrumb: 'Showreel',
        heroH1: 'Watch Kenzy at Work',
        heroP: 'A selection of hosting, broadcasting, and public-speaking moments from television, forums, and official ceremonies.',
        ctaHeading: 'Get in Touch with Kenzy',
        ctaDesc: 'Available for television, radio, conferences, and ceremonial hosting across Egypt and the region.',
        ctaButton: 'Get in Touch'
      },
      contact: {
        metaTitle: 'Contact — Kenzy Mohamed',
        metaDesc: 'Get in touch with Kenzy Mohamed for hosting, presenting, and public relations opportunities.',
        breadcrumb: 'Contact',
        heroH1: "Let's work<br>together",
        heroP: 'Open to hosting, presenting, and public relations opportunities across television, radio, and events.',
        getInTouchHeading: 'Get in touch',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        linkedinLabel: 'LinkedIn',
        locationLabel: 'Location',
        locationVal: 'Giza, Egypt',
        availableFor: 'Available for:',
        pillTvHosting: 'TV Hosting',
        pillRadio: 'Radio',
        pillConferences: 'Conferences',
        pillCeremonies: 'Ceremonies',
        pillPrProjects: 'PR Projects',
        formHeading: 'Send a message',
        formName: 'Full Name',
        formNamePh: 'Your name',
        formEmail: 'Email',
        formEmailPh: 'you@email.com',
        formSubject: 'Subject',
        formSubjectHosting: 'TV / Event Hosting',
        formSubjectRadio: 'Radio Presenting',
        formSubjectPR: 'Public Relations',
        formMessage: 'Message',
        formMessagePh: "Tell Kenzy about your project...",
        formSend: 'Send Message',
        formWhatsapp: 'Send via WhatsApp',
        formSuccess: 'Your email app should now open with the message ready. Just hit send — it goes straight to Kenzy!'
      }
    },

    ar: {
      common: {
        logo: 'كنزي <span>محمد</span>',
        logoPlain: 'كنزي محمد',
        name: 'كنزي محمد',
        onair: 'على الهوا',
        watchShowreel: 'شوف الأعمال',
        getInTouch: 'كلمنا',
        contactKenzy: 'كلم كنزي',
        factBasedIn: 'مقيمة في',
        factFocus: 'مجال الشغل',
        factEducation: 'التعليم',
        factLanguages: 'اللغات',
        factBasedInVal: 'الجيزة، مصر',
        factFocusValShort: 'تقديم تليفزيوني وإذاعي، وعلاقات عامة',
        factFocusValFull: 'تقديم تليفزيوني وإذاعي، وعلاقات عامة',
        factEducationVal: 'بكالوريوس حقوق، جامعة عين شمس (2026)',
        factLanguagesVal: 'العربية (لغة أم)، الإنجليزية',
        achievementsEyebrow: 'الإنجازات',
        aboutEyebrow: 'نبذة',
        expertiseEyebrow: 'المهارات',
        timelineEyebrow: 'التايم لاين',
        contactEyebrow: 'تواصل',
        toggleLabel: 'English'
      },
      nav: {
        home: 'الرئيسية',
        about: 'نبذة عني',
        showreel: 'الأعمال',
        achievements: 'الإنجازات',
        contact: 'تواصل معايا'
      },
      footer: {
        tagline: 'مذيعة ومقدمة برامج ومتخصصة علاقات عامة، مقيمة في الجيزة، مصر.',
        copy: '© كنزي محمد',
        tagShort: 'مذيعة ومقدمة برامج ومتخصصة علاقات عامة'
      },
      video: {
        v1t: '8 الصبح — فقرة الحوار الخاص', v1d: 'كنزي بتعمل حوار خاص مع د. طارق إلياس عن الاتحادات الطلابية وتأثيرها على الطلاب', v1g: 'تليفزيون',
        v2t: 'فقرة المذيع الصغير — كنزي محمد', v2d: 'حوار خاص مع د. نسرين صالح', v2g: 'تليفزيون',
        v4t: 'برنامج بكرة لينا', v4d: 'أكتر من 50 حلقة مع التليفزيون المصري — شغالة معاه من سنين', v4g: 'تليفزيون',
        v4ch: 'التليفزيون المصري',
        v5t: 'المجلس القومي للطفولة والأمومة', v5d: 'فيديو بالتعاون مع المجلس القومي للطفولة والأمومة', v5g: 'تعاون',
        v5ch: 'المجلس القومي',
        v6t: 'كلمة الخريجين — جامعة الشارقة', v6d: 'كلمة الخريجين — الدبلوم المهني لمهارات العمل البرلماني، المستوى المتقدم', v6g: 'كلمة',
        v6ch: 'جامعة الشارقة',
        comingSoon: 'الفيديو جاي قريب'
      },
      home: {
        metaTitle: 'كنزي محمد — مذيعة ومتخصصة علاقات عامة',
        metaDesc: 'كنزي محمد — مقدمة تليفزيون وراديو ومتخصصة علاقات عامة، مقيمة في الجيزة، مصر.',
        heroEyebrow: 'مذيعة · مقدمة برامج · متخصصة علاقات عامة',
        heroName: 'كنزي<br><em>محمد</em>',
        heroTyping: 'مذيعة تلفزيون|الراديو|العلاقات العامة|الفعاليات الحية',
        heroTagline: 'خبرة عملية في تقديم برامج على الهوا، ومؤتمرات، واحتفالات حكومية — مع تاريخ قيادي في تمثيل مصر على مستوى إقليمي.',
        heroLocationTag: 'الجيزة، مصر',
        statYears: 'سنين في مجال الميديا',
        statEvents: 'فعالية قدّمتها',
        statLeadership: 'منصب قيادي إقليمي',
        statLanguages: 'لغات',
        aboutHeading: 'الحكاية اللي وراء الميكروفون',
        aboutP1: 'كنزي محمد مذيعة ومتخصصة علاقات عامة، وعندها خبرة عملية في التليفزيون، والإذاعة، وتقديم الفعاليات الرسمية في مصر كلها.',
        aboutP2: 'وهي أول مصرية تبقى رئيسة البرلمان العربي للطفل، وبتمثل مصر على المستوى الإقليمي بمهارات تواصل قوية وقدرة على التأثير في الجمهور.',
        aboutReadMore: 'اقرأ القصة كاملة ←',
        showreelHeading: 'أبرز الأعمال',
        showreelDesc: 'مجموعة مختارة من لحظات التقديم، والبث، والكلام قدام الجمهور.',
        showreelViewAll: 'شوف كل الفيديوهات',
        achHeading: 'معروفة على المسارح الإقليمية',
        achExplore: 'شوف التايم لاين كامل ←',
        ach1t: 'أول رئيسة', ach1d: 'أول مصرية تبقى رئيسة البرلمان العربي للطفل.',
        ach2t: 'تمثيل إقليمي', ach2d: 'مثّلت مصر في منتديات شبابية إقليمية ومبادرات دبلوماسية.',
        ach3t: 'احتفالات رسمية', ach3d: 'قدّمت احتفالات حكومية رسمية ومؤتمرات قومية.',
        ach4t: 'منتدى شباب العالم', ach4d: 'اتكلمت في جلسات منتدى شباب العالم اللي اتذاعت على قناة DMC.',
        ctaHeading: 'جاهزة تخلي فعاليتك تبقى حدث فعلاً؟',
        ctaDesc: 'متاحة لمشاريع تليفزيون، وراديو، ومؤتمرات، وعلاقات عامة في مصر والمنطقة.',
        ctaButton: 'كلم كنزي'
      },
      about: {
        metaTitle: 'نبذة عني — كنزي محمد',
        metaDesc: 'اتعرف على كنزي محمد — مذيعة ومقدمة برامج ومتخصصة علاقات عامة من الجيزة، مصر.',
        breadcrumb: 'نبذة عني',
        heroEyebrow: 'نبذة عن كنزي',
        heroH1: 'الحكاية اللي وراء<br>الميكروفون',
        heroP: 'من البرامج القومية للقيادة الإقليمية — رحلة في الإعلام، والعلاقات العامة، وتمكين الشباب.',
        p1: 'كنزي محمد مذيعة ومتخصصة علاقات عامة، عندها خبرة عملية في التليفزيون، والإذاعة، وتقديم الفعاليات الرسمية. قدّمت مؤتمرات، ومنتديات شبابية، واحتفالات حكومية، ومبادرات عامة في مصر كلها.',
        p2: 'وبعيد عن الاستديو، كنزي هي أول مصرية تبقى رئيسة البرلمان العربي للطفل، وبتمثل مصر على المستوى الإقليمي، وقادت مبادرات مجتمعية وتمكين شباب مع مؤسسات قومية.',
        p3: 'شاطرة في مهارات تواصل، وإجراء حوارات، والتأثير في الجمهور، على أي مسرح بتقف عليه — سواء بث مباشر، أو منتدى دبلوماسي، أو احتفال قومي.',
        p4: 'وهي حالياً بتكمل بكالوريوس الحقوق في جامعة عين شمس، وبتجمع بين المعرفة القانونية والخبرة الإعلامية علشان تقدّم عروض احترافية تلمس جمهور متنوع.',
        expertiseHeading: 'قدام الكاميرا وورا الكواليس',
        mediaSkillsHeading: 'المهارات الإعلامية',
        techProHeading: 'مهارات تقنية ومهنية',
        pillTvRadio: 'تقديم تليفزيوني وإذاعي',
        pillLiveEvent: 'تقديم فعاليات حية',
        pillInterviewing: 'إجراء حوارات',
        pillPublicSpeaking: 'التحدث أمام الجمهور',
        pillVoicePresentation: 'الإلقاء الصوتي',
        pillAudienceEngagement: 'التفاعل مع الجمهور',
        pillScriptWriting: 'كتابة السكريبت',
        pillEventCoordination: 'تنظيم الفعاليات',
        pillVideoEditing: 'مونتاج الفيديو',
        pillContentCreation: 'صناعة محتوى',
        pillSocialMedia: 'إدارة السوشيال ميديا',
        pillPR: 'علاقات عامة',
        pillLeadership: 'القيادة وتنسيق الفرق',
        pillMsOffice: 'برامج مايكروسوفت أوفيس',
        barTvPresenting: 'التقديم التليفزيوني',
        barPublicSpeaking: 'التحدث أمام الجمهور',
        barInterviewing: 'إجراء الحوارات',
        barPR: 'العلاقات العامة',
        barContentCreation: 'صناعة المحتوى',
        barEventCoordination: 'تنظيم الفعاليات',
        ctaHeading: 'اتفرج على شغل كنزي',
        ctaDesc: 'شوف الأعمال اللي فيها تقديم تليفزيوني، وجلسات منتديات، وتغطية احتفالات.',
        ctaButton: 'شوف الأعمال'
      },
      achievements: {
        metaTitle: 'الإنجازات — كنزي محمد',
        metaDesc: 'إنجازات كنزي محمد — قيادة إقليمية، واحتفالات رسمية، ومنتدى شباب العالم.',
        breadcrumb: 'الإنجازات',
        heroEyebrow: 'الإنجازات',
        heroH1: 'معروفة على<br>المسارح الإقليمية',
        heroP: 'من مناصب قيادية ريادية للبرامج القومية — محطات مهمة في مشوار الإعلام والخدمة العامة.',
        c1t: 'أول رئيسة', c1d: 'أول مصرية تبقى رئيسة البرلمان العربي للطفل — منصب قيادي ريادي بتمثل فيه مصر على مستوى المنطقة العربية.',
        c2t: 'تمثيل إقليمي', c2d: 'مثّلت مصر في منتديات شبابية إقليمية ومبادرات شبابية دبلوماسية، وبنت جسور بين الدول من خلال الإعلام والحوار.',
        c3t: 'احتفالات رسمية', c3d: 'قدّمت احتفالات حكومية رسمية ومؤتمرات قومية بثقة، واحترافية، وقدرة عالية على التفاعل مع الجمهور.',
        c4t: 'منتدى شباب العالم', c4d: 'اتكلمت في جلسات منتدى شباب العالم اللي اتذاعت على قناة DMC، وتكلمت عن التعليم الرقمي وتمكين الشباب على مستوى عالمي.',
        c5t: 'كلمة في جامعة الشارقة', c5d: 'ألقت كلمة رئيسية في جامعة الشارقة كجزء من مبادرة البرلمان العربي للطفل.',
        c6t: 'تليفزيون وراديو قومي', c6d: 'قدّمت فقرات على التليفزيون والراديو المصري، وغطّت مواضيع من سياسات الشباب لتنمية المجتمع.',
        timelineHeading: 'محطات في المشوار',
        t1y: '2024 — لحد دلوقتي', t1t: 'رئيسة البرلمان العربي للطفل', t1d: 'أول مصرية تشغل المنصب القيادي الإقليمي ده، بتمثل مصر وبتقود مبادرات مناصرة الشباب في العالم العربي.',
        t2y: '2023', t2t: 'منتدى شباب العالم — بث على DMC', t2d: 'متحدثة رئيسية في منتدى شباب العالم، وقدّمت عن التعليم الرقمي في جلسات اتذاعت على مستوى الجمهورية على قناة DMC.',
        t3y: '2022', t3t: 'كلمة رئيسية — جامعة الشارقة', t3d: 'ألقت كلمة رئيسية عن حقوق الطفل وتمكين الشباب في جامعة الشارقة، الإمارات.',
        t4y: '2021', t4t: 'تقديم احتفالات حكومية', t4d: 'قدّمت أكتر من احتفال حكومي رسمي ومؤتمر قومي في مصر كلها.',
        t5y: '2020', t5t: 'أول ظهور تليفزيوني وإذاعي', t5d: 'بدأت تقدّم فقرات على التليفزيون والراديو المصري، وكوّنت أساس قوي في البث المباشر والتفاعل مع الجمهور.',
        ctaHeading: 'يلا نشتغل سوا',
        ctaDesc: 'كنزي متاحة لفرص تقديم وعلاقات عامة في التليفزيون، والراديو، والفعاليات الحية.',
        ctaButton: 'كلم كنزي'
      },
      showreel: {
        metaTitle: 'الأعمال — كنزي محمد',
        metaDesc: 'اتفرج على شغل كنزي محمد — تقديم تليفزيوني، وجلسات منتديات، وتغطية احتفالات.',
        breadcrumb: 'الأعمال',
        heroH1: 'اتفرج على شغل كنزي',
        heroP: 'مجموعة مختارة من لحظات التقديم، والبث، والكلام قدام الجمهور، من التليفزيون والمنتديات والاحتفالات الرسمية.',
        ctaHeading: 'تواصل مع كنزي',
        ctaDesc: 'متاحة لتقديم برامج تليفزيون، وراديو، ومؤتمرات، واحتفالات في مصر والمنطقة.',
        ctaButton: 'كلم كنزي'
      },
      contact: {
        metaTitle: 'تواصل معايا — كنزي محمد',
        metaDesc: 'تواصل مع كنزي محمد لفرص التقديم والعلاقات العامة.',
        breadcrumb: 'تواصل',
        heroH1: 'يلا نشتغل<br>مع بعض',
        heroP: 'متاحة لفرص التقديم والعلاقات العامة في التليفزيون، والراديو، والفعاليات.',
        getInTouchHeading: 'تواصل معايا',
        emailLabel: 'الإيميل',
        phoneLabel: 'التليفون',
        linkedinLabel: 'لينكدإن',
        locationLabel: 'العنوان',
        locationVal: 'الجيزة، مصر',
        availableFor: 'متاحة لـ:',
        pillTvHosting: 'تقديم تليفزيوني',
        pillRadio: 'راديو',
        pillConferences: 'مؤتمرات',
        pillCeremonies: 'احتفالات',
        pillPrProjects: 'مشاريع علاقات عامة',
        formHeading: 'ابعت رسالة',
        formName: 'الاسم بالكامل',
        formNamePh: 'اكتب اسمك',
        formEmail: 'الإيميل',
        formEmailPh: 'you@email.com',
        formSubject: 'الموضوع',
        formSubjectHosting: 'تقديم تليفزيون / فعاليات',
        formSubjectRadio: 'تقديم إذاعي',
        formSubjectPR: 'علاقات عامة',
        formSubjectOther: 'حاجة تانية',
        formMessage: 'الرسالة',
        formMessagePh: 'احكيلها عن مشروعك...',
        formSend: 'ابعت الرسالة',
        formWhatsapp: 'ابعت على الواتساب',
        formSuccess: 'بيفتح عندك برنامج الإيميل والرسالة جاهزة — دوس إرسال وهتوصّل لكنزي مباشرة!'
      }
    }
  };

  function getVal(lang, key) {
    var parts = key.split('.');
    var obj = DICT[lang];
    for (var i = 0; i < parts.length; i++) {
      if (obj == null) return undefined;
      obj = obj[parts[i]];
    }
    return obj;
  }

  function applyLanguage(lang, animate) {
    if (lang !== 'ar') lang = 'en';
    var root = document.documentElement;
    root.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.toggle('is-rtl', lang === 'ar');

    try { localStorage.setItem('kenzy-lang', lang); } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = getVal(lang, el.getAttribute('data-i18n'));
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = getVal(lang, el.getAttribute('data-i18n-html'));
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = getVal(lang, el.getAttribute('data-i18n-placeholder'));
      if (v !== undefined) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = getVal(lang, el.getAttribute('data-i18n-alt'));
      if (v !== undefined) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var v = getVal(lang, el.getAttribute('data-i18n-content'));
      if (v !== undefined) el.setAttribute('content', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = getVal(lang, el.getAttribute('data-i18n-aria'));
      if (v !== undefined) el.setAttribute('aria-label', v);
    });

    // typing widget: swap its word list and restart
    var typingEl = document.querySelector('[data-typing]');
    if (typingEl) {
      var typeKey = typingEl.getAttribute('data-i18n-typing');
      if (typeKey) {
        var words = getVal(lang, typeKey);
        if (words !== undefined) typingEl.setAttribute('data-typing', words);
      }
      window.dispatchEvent(new Event('kenzy:langchange'));
    }

    // language toggle button label(s) — shows the OTHER language name
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = getVal(lang, 'common.toggleLabel');
      btn.setAttribute('data-current-lang', lang);
    });
  }

  function initLangToggle() {
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
        applyLanguage(current === 'ar' ? 'en' : 'ar');
      });
    });
  }

  var saved = 'en';
  try { saved = localStorage.getItem('kenzy-lang') || 'en'; } catch (e) {}
  initLangToggle();
  applyLanguage(saved);

  window.KenzyI18n = { apply: applyLanguage, get: getVal };
})();
