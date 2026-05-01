// script.js — Gestionare produse, coș, animații, cart slide-in

// SISTEM DE TRADUCERI MULTILINGV
const translations = {
  ro: {
    products: "Produse populare",
    choose: "Alege dintre mai multe tipuri de peleți, ambalaje și prețuri convenabile.",
    bulkOrders: "Comenzi în cantități mari?",
    bulkDesc: "Pentru achizițiile de 1+ tonă, oferim discounturi speciale și condiții personalizate. Transport inclus, factură la termen și manager dedicat.",
    bulkBtn: "Cere ofertă negociabilă",
    aboutTitle: "Despre noi",
    aboutDesc: "Suntem aici pentru a oferi soluții de încălzire fiabile și accesibile. Cu experiență în industria combustibililor regenerabili, garantez peleți de calitate certificată cu umiditate controlată și putere calorică constantă. Fiecare sac este testat pentru performanță optimă la aparatele tale.",
    priceNote: "⚠️ Prețurile afișate sunt negociabile pentru comenzi mari. Contactează-ne pentru oferte personalizate!",
    aboutList1: "Material 100% lemn natural din păduri certificate",
    aboutList2: "Umiditate controlată (<10%) pentru ardere eficientă",
    aboutList3: "Ambalaje rezistente și livrare rapidă 48-72h",
    aboutList4: "Discounturi disponibile pentru cantități mai mari",
    aboutList5: "Sprijin direct și răspuns rapid la întrebări",
    contactBtn: "Contactează-ne",
    footerLinks: "Link-uri utile",
    payment: "Plăți & Livrare",
    paymentDesc: "Plăți la livrare sau transfer bancar. Livrări în 48-72h în majoritatea zonelor.",
    rights: "Toate drepturile rezervate",
    cart: "Coșul tău",
    cartEmpty: "Coșul este gol",
    total: "Total:",
    continue: "Continuă cumpărăturile",
    hero: "Peleți de înaltă calitate pentru confortul casei tale",
    heroSub: "Livrări rapide, energie eficientă și selecție atentă de peleți din lemn 100% natural.",
    seeProducts: "Vezi produsele",
    prodNav: "Produse",
    aboutNav: "Despre noi",
    contactNav: "Contact",
    aboutPageHero: "Povestea noastră de succes",
    aboutPageHeroSub: "Dedicați calității și satisfacției clientului",
    aboutPageStory: "Povestea noastră",
    aboutPageStoryText1: "Suntem PelețiPro, o companie cu tradiție în furnizarea de combustibili regenerabili de înaltă calitate. Cu peste 15 ani de experiență în industrie, am ajutat mii de clienți să găsească soluția perfectă de încălzire pentru casele lor.",
    aboutPageStoryText2: "Filosofia noastră este simplă: calitate înainte de orice. Fiecare sac de peleți este supus unor teste riguroase pentru a asigura că îndeplinește standardele noastre înalte. Peleții noștri provin exclusiv din păduri certificate și sunt procesați cu grijă pentru a menține integritatea fibrelor de lemn.",
    aboutPageStoryText3: "Astazi, suntem mândri că suntem partenerii de încredere ai mii de gospodării și businessuri din România și din jur. Angajamentul nostru rămâne neschimbat: să oferim peleți de calitate certificată, serviciu rapid și suport dedicat pentru fiecare client.",
    aboutPageValues: "Valorile noastre",
    aboutPageVal1Title: "Sustenabilitate",
    aboutPageVal1Text: "Încredințați pe energia verde și combustibili regenerabili. Fiecare peleț este o alegere pentru viitor mai curat.",
    aboutPageVal2Title: "Eficiență",
    aboutPageVal2Text: "Maximizând performanța și minimizând risipă. Peleții noștri oferă cea mai bună putere calorică per kilogram.",
    aboutPageVal3Title: "Fiabilitate",
    aboutPageVal3Text: "Consistency în fiecare pachet. Clienții noștri știu exact ce așteptă de la PelețiPro.",
    aboutPageVal4Title: "Sprijin client",
    aboutPageVal4Text: "Orice întrebare merită un răspuns rapid. Echipa noastră este aici pentru a vă ajuta.",
    aboutPageWhy: "De ce să alegeți PelețiPro?",
    aboutPageWhy1Title: "Calitate Certificată",
    aboutPageWhy1Text: "Peleții noștri îndeplinesc standardele europene DIN+ și ISO. Fiecare lot este testat pentru putere calorică, umiditate și durabilitate.",
    aboutPageWhy2Title: "Livrare Rapidă",
    aboutPageWhy2Text: "Comenzi procesate în 24h și livrări în 48-72h la majoritatea locațiilor. Track-and-trace pentru fiecare transport.",
    aboutPageWhy3Title: "Prețuri Competitive",
    aboutPageWhy3Text: "Oferim cele mai bune prețuri pe piață, cu discounturi pentru cantități mari și clienți fideli.",
    aboutPageWhy4Title: "Suport Dedicat",
    aboutPageWhy4Text: "Echipa noastră este disponibilă prin telefon, email și WhatsApp. Vorbim limba ta și înțelegem nevoile tale.",
    aboutPageWhy5Title: "Păduri Sustenabile",
    aboutPageWhy5Text: "Toți furnizorii noștri respectă protocoalele de gestionare durabilă a pădurilor și certificări FSC.",
    aboutPageWhy6Title: "Garanție de Satisfacție",
    aboutPageWhy6Text: "Dacă nu ești satisfăcut, oferim returnuri fără probleme și rambursări complete.",
    aboutPageQuality: "Standarde de Calitate",
    aboutPageQualityStat1: "Umiditate maximă pentru ardere optimă",
    aboutPageQualityStat2: "kWh/kg — Putere calorică minima",
    aboutPageQualityStat3: "Lemn natural, fără aditivi chimici",
    aboutPageQualityStat4: "Certificare europeană de calitate",
    aboutPageCtaTitle: "Gata să te alături echipei noastre?",
    aboutPageCtaText: "Explorează gama noastră completă de peleți și găsește soluția perfectă pentru casa ta.",
    aboutPageShop: "Cumpără acum",
    aboutPageContactBtn: "Contactează-ne",
    footerPayTitle: "Plăți & Livrare",
    footerPayText: "Plăți la livrare sau transfer bancar. Livrări în 48-72h în majoritatea zonelor.",
    about: "Despre noi",
    footerTerms: "Termeni și condiții",
    productsInfoTitle: "Informații Despre Produse",
    certTitle: "Certificări și Standarde",
    certText: "Peleții noștri respectă standarde recunoscute (DIN+, ENplus, ISO 17225-2). Fiecare lot este testat în laborator pentru umiditate, putere calorică, conținut de cenușă și durabilitate mecanică înainte de expediere.",
    certList: "DIN+ - criterii tehnice stricte pentru peleți;ENplus - certificare europeană de performanță;ISO 17225-2 - standard internațional pentru biocombustibili solizi;FSC - materie primă din păduri gestionate responsabil",
    sourceTitle: "Origine și Trasabilitate",
    sourceText: "Folosim exclusiv lemn 100% natural, provenit din furnizori certificați. Trasabilitatea fiecărui lot este documentată — de la sursă până la ambalaj.",
    sourceList: "Furnizori locali verificați;Materie primă 100% lemn natural;Fără aditivi chimici;Documentație de trasabilitate pentru fiecare lot",
    deliveryTitle: "Livrare & Logistică",
    deliverySpeedTitle: "Timp de Procesare și Livrare",
    deliverySpeedText: "Comenzile primite până la ora 14:00 sunt procesate în aceeași zi; livrăm standard în 48-72h, iar pentru marfă paletizată oferim opțiuni de livrare expres.",
    packagingTitle: "Ambalare & Paletizare",
    packagingText: "Peleții sunt ambalați în saci rezistenți de 15 kg sau în big-bag la cerere; paletizare standard pentru comenzi mari și folie protectoare pentru transport sigur.",
    coverageTitle: "Arie de Acoperire",
    coverageText: "Acoperim întreaga Românie, cu parteneri de transport pentru rute speciale (munte, insule). Oferim monitorizare transport (track & trace) la comenzile paletizate.",
    priceTitle: "Politica de Prețuri & Discounturi",
    priceText: "Prețuri transparente, discounturi pentru volume (ex: +1 tonă) și oferte dedicate pentru contracte B2B. Modalități de plată: ramburs, transfer bancar, plata în cont.",
    qcTitle: "Controlul Calității — Proces în 4 Pași",
    qcIntro: "Pentru a garanta performanța, fiecare lot urmează un flux strict de control al calității în patru etape, documentat și măsurabil.",
    qcStep1Title: "Selecția Materiilor Prime",
    qcStep1Text: "Evaluăm proveniența, specie și umiditatea lemnului; refuzăm materia primă care nu îndeplinește criteriile noastre stricte.",
    qcStep2Title: "Procesare și Monitorizare",
    qcStep2Text: "Peletizarea se face în instalații moderne cu monitorizare continuă a temperaturii și densității, pentru a obține granulare constantă.",
    qcStep3Title: "Testare de Laborator",
    qcStep3Text: "Fiecare lot este testat pentru umiditate, putere calorică (kWh/kg), conținut de cenușă și durabilitate mecanică; raportul însoțește expediția.",
    qcStep4Title: "Ambalare, Etichetare și Expediere",
    qcStep4Text: "Ambalăm conform standardelor, aplicăm etichete cu lot și caracteristici, iar transportul este asigurat până la destinație.",
    envTitle: "Angajament de Mediu",
    env1Title: "Carbon și Energie Regenerabilă",
    env1Text: "Utilizarea peleților reduce amprenta de carbon comparativ cu combustibilii fosili; promovăm soluții energetice neutre sau mai curate.",
    env2Title: "Managementul Pădurilor",
    env2Text: "Lucrăm cu furnizori care aplică practici de gestionare durabilă (FSC) și susținem proiecte locale de reîmpădurire.",
    env3Title: "Economia Circulară & Reducerea Deșeurilor",
    env3Text: "Valorificăm reziduurile lemnoase din industria prelucrătoare, transformând deșeurile în combustibil util, reducând risipa.",
    testimonialTitle: "Ce Spun Clienții Noștri",
    test1Quote: "Am folosit peleții toată iarna — ardere constantă, cenușă puțină și facturi mai mici.",
    test1Author: "Ana Marinescu, Iași",
    test2Quote: "Comunicare rapidă, livrare punctuală și echipă de suport profesionistă.",
    test2Author: "George Ilie, Brașov",
    test3Quote: "Calitate constantă la fiecare livrare — recomand pentru locuințe și afaceri mici.",
    test3Author: "Elena Pop, Constanța",
    contactInfoTitle: "Contact & Suport",
    addressTitle: "Sediu",
    addressText: "Str. Exemplu 12, București, România",
    phoneTitle: "Telefon Comercial",
    phoneText: "+40 123 456 789 — Vânzări / +40 123 456 788 — Suport",
    emailTitle: "Email",
    emailText: "vanzari@peletipro.ro | suport@peletipro.ro",
    hoursTitle: "Program",
    hoursText: "Luni - Vineri: 08:00 - 18:00 | Sâmbătă: 09:00 - 13:00"
  },
  en: {
    products: "Popular Products",
    choose: "Choose from various types of pellets, packages and convenient prices.",
    bulkOrders: "Bulk Orders?",
    bulkDesc: "For purchases of 1+ tons, we offer special discounts and personalized conditions. Transport included, invoice on terms and dedicated manager.",
    bulkBtn: "Request Negotiable Quote",
    aboutTitle: "About Us",
    aboutDesc: "We are here to provide reliable and affordable heating solutions. With experience in the renewable fuel industry, I guarantee certified quality pellets with controlled moisture and constant calorific value. Each bag is tested for optimal performance on your appliances.",
    priceNote: "⚠️ Displayed prices are negotiable for large orders. Contact us for personalized offers!",
    aboutList1: "100% natural wood material from certified forests",
    aboutList2: "Controlled humidity (<10%) for efficient combustion",
    aboutList3: "Resistant packaging and fast delivery 48-72h",
    aboutList4: "Discounts available for larger quantities",
    aboutList5: "Direct support and quick response to questions",
    contactBtn: "Contact Us",
    footerLinks: "Useful Links",
    payment: "Payment & Delivery",
    paymentDesc: "Payment on delivery or bank transfer. Deliveries in 48-72h in most areas.",
    rights: "All rights reserved",
    cart: "Your Cart",
    cartEmpty: "Cart is empty",
    total: "Total:",
    continue: "Continue Shopping",
    hero: "High-quality pellets for your home comfort",
    heroSub: "Fast deliveries, efficient energy and carefully selected 100% natural wood pellets.",
    seeProducts: "See Products",
    prodNav: "Products",
    aboutNav: "About",
    contactNav: "Contact",
    aboutPageHero: "Our Success Story",
    aboutPageHeroSub: "Dedicated to quality and customer satisfaction",
    aboutPageStory: "Our Story",
    aboutPageStoryText1: "We are PelețiPro, a company with a tradition of supplying high-quality renewable fuels. With over 15 years of experience in the industry, we have helped thousands of customers find the perfect heating solution for their homes.",
    aboutPageStoryText2: "Our philosophy is simple: quality before everything else. Each bag of pellets is subjected to rigorous testing to ensure it meets our high standards. Our pellets come exclusively from certified forests and are processed carefully to maintain the integrity of the wood fibers.",
    aboutPageStoryText3: "Today, we are proud to be trusted partners to thousands of households and businesses in Romania and beyond. Our commitment remains unchanged: to provide certified quality pellets, fast service and dedicated support for every customer.",
    aboutPageValues: "Our Values",
    aboutPageVal1Title: "Sustainability",
    aboutPageVal1Text: "Committed to green energy and renewable fuels. Every pellet is a choice for a cleaner future.",
    aboutPageVal2Title: "Efficiency",
    aboutPageVal2Text: "Maximizing performance and minimizing waste. Our pellets offer the best calorific value per kilogram.",
    aboutPageVal3Title: "Reliability",
    aboutPageVal3Text: "Consistency in every package. Our customers know exactly what to expect from PelețiPro.",
    aboutPageVal4Title: "Customer Support",
    aboutPageVal4Text: "Every question deserves a quick answer. Our team is here to help you.",
    aboutPageWhy: "Why Choose PelețiPro?",
    aboutPageWhy1Title: "Certified Quality",
    aboutPageWhy1Text: "Our pellets meet European DIN+ and ISO standards. Each batch is tested for calorific value, moisture and durability.",
    aboutPageWhy2Title: "Fast Delivery",
    aboutPageWhy2Text: "Orders processed within 24h and deliveries within 48-72h to most locations. Track-and-trace for every shipment.",
    aboutPageWhy3Title: "Competitive Prices",
    aboutPageWhy3Text: "We offer the best prices on the market, with discounts for large quantities and loyal customers.",
    aboutPageWhy4Title: "Dedicated Support",
    aboutPageWhy4Text: "Our team is available by phone, email and WhatsApp. We speak your language and understand your needs.",
    aboutPageWhy5Title: "Sustainable Forests",
    aboutPageWhy5Text: "All our suppliers comply with sustainable forest management protocols and FSC certifications.",
    aboutPageWhy6Title: "Satisfaction Guarantee",
    aboutPageWhy6Text: "If you're not satisfied, we offer hassle-free returns and full refunds.",
    aboutPageQuality: "Quality Standards",
    aboutPageQualityStat1: "Maximum moisture for optimal burning",
    aboutPageQualityStat2: "kWh/kg — Minimum calorific value",
    aboutPageQualityStat3: "Natural wood, no chemical additives",
    aboutPageQualityStat4: "European quality certification",
    aboutPageCtaTitle: "Ready to join our team?",
    aboutPageCtaText: "Explore our complete range of pellets and find the perfect solution for your home.",
    aboutPageShop: "Shop Now",
    aboutPageContactBtn: "Contact Us",
    footerPayTitle: "Payment & Delivery",
    footerPayText: "Payment on delivery or bank transfer. Deliveries within 48-72h in most areas.",
    about: "About",
    footerTerms: "Terms and Conditions",
    productsInfoTitle: "Product Information",
    certTitle: "Certifications and Standards",
    certText: "All our pellets are certified according to European quality standards. We verify each batch to ensure maximum performance.",
    certList: "DIN+ - German pellet standard;ISO 17225-2 - International standard;EN+ - European certification;FSC - Sustainable forest origin",
    sourceTitle: "Origin and Sources",
    sourceText: "Our pellets come from high-quality natural wood, with no chemical additives. We work exclusively with certified suppliers.",
    sourceList: "100% natural wood from certified forests;No chemical additives or artificial lignins;Processing in controlled sanitary conditions;Strict moisture and density control",
    deliveryTitle: "Delivery and Logistics",
    deliverySpeedTitle: "Fast Delivery",
    deliverySpeedText: "We process orders within 24 hours and deliver within 48-72 hours throughout Romania.",
    packagingTitle: "Safe Packaging",
    packagingText: "Pellets are packaged in resistant 15kg bags, protected from moisture and pests. Palletization available for large orders.",
    coverageTitle: "Coverage Area",
    coverageText: "Delivery throughout Romania, including Bucharest, Brașov, Cluj, Timișoara, Constanța, Galați and other cities. Insured transport and GPS tracking.",
    priceTitle: "Pricing Policy",
    priceText: "Competitive prices with discounts for large orders. Option to pay on delivery or bank transfer. Negotiable for substantial volumes.",
    qcTitle: "Quality Control Process",
    qcIntro: "Every batch of pellets goes through a rigorous four-stage verification process to ensure excellence.",
    qcStep1Title: "Raw Material Selection",
    qcStep1Text: "Inspection and selection of raw wood from certified suppliers, verification of moisture and quality.",
    qcStep2Title: "Controlled Processing",
    qcStep2Text: "Pelletizing in modern facilities with computer-controlled temperature and pressure.",
    qcStep3Title: "Laboratory Testing",
    qcStep3Text: "Complete analysis: moisture, calorific value, ash, mechanical durability. Compliance with DIN+ and ISO standards.",
    qcStep4Title: "Packaging and Delivery",
    qcStep4Text: "Protection in resistant packages, labels with complete information, respect for the cold chain.",
    envTitle: "Environmental Commitment",
    env1Title: "Renewable Energy",
    env1Text: "Wood pellets are a renewable energy source that reduces CO2 emissions compared to fossil fuels.",
    env2Title: "Sustainable Forests",
    env2Text: "We support sustainable forest management. All our suppliers comply with FSC protocols and reforestation.",
    env3Title: "Waste Reduction",
    env3Text: "We produce pellets from wood waste, transforming industrial waste into useful and efficient fuel.",
    testimonialTitle: "What Our Customers Say",
    test1Quote: "PelețiPro pellets are exceptional quality. I heated the house all winter and am extremely satisfied with the performance and prices.",
    test1Author: "John Anderson, Bucharest",
    test2Quote: "Delivery was fast and the pellets are exactly as described. I strongly recommend PelețiPro for any heating needs.",
    test2Author: "Anna Mueller, Cluj-Napoca",
    test3Quote: "Die beste Pelletqualität, die ich je bestellt habe. Schnelle Lieferung, professionelles Team und konkurrenzfähige Preise. Sehr zu empfehlen!",
    test3Author: "Hans Weber, Brașov",
    contactInfoTitle: "Contact Information",
    addressTitle: "Address",
    addressText: "Str. Example 12, City, Romania 123456",
    phoneTitle: "Phone",
    phoneText: "+40 123 456 789 | +40 123 456 788",
    emailTitle: "Email",
    emailText: "contact@peletipro.ro | support@peletipro.ro",
    hoursTitle: "Business Hours",
    hoursText: "Monday - Friday: 08:00 - 18:00 | Saturday: 09:00 - 14:00 | Sunday: Closed"
  },
  de: {
    products: "Beliebte Produkte",
    choose: "Wählen Sie aus verschiedenen Pellettypen, Verpackungen und günstigen Preisen.",
    bulkOrders: "Großbestellungen?",
    bulkDesc: "Für Käufe ab 1 Tonne bieten wir Spezialrabatte und personalisierte Bedingungen. Transport inklusive, Rechnung zu Bedingungen und dedizierter Manager.",
    bulkBtn: "Verhandelbares Angebot anfordern",
    aboutTitle: "Über Uns",
    aboutDesc: "Wir bieten zuverlässige und erschwingliche Heizlösungen. Mit Erfahrung in der erneuerbaren Brennstoffindustrie garantiere ich zertifizierte Hochqualitätspellets mit kontrollierter Feuchte und konstanter Heizwertigkeit. Jeder Sack wird auf optimale Leistung in Ihren Geräten getestet.",
    priceNote: "⚠️ Die angezeigten Preise sind bei Großmengen verhandelbar. Kontaktieren Sie uns für personalisierte Angebote!",
    aboutList1: "100% Naturholz aus zertifizierten Wäldern",
    aboutList2: "Kontrollierte Feuchte (<10%) für effiziente Verbrennung",
    aboutList3: "Robuste Verpackung und schnelle Lieferung 48-72h",
    aboutList4: "Rabatte für größere Mengen",
    aboutList5: "Direkter Support und schnelle Antwort auf Fragen",
    contactBtn: "Kontaktieren Sie Uns",
    footerLinks: "Nützliche Links",
    payment: "Bezahlung & Lieferung",
    paymentDesc: "Zahlung bei Lieferung oder Banküberweisung. Lieferungen in 48-72h in den meisten Bereichen.",
    rights: "Alle Rechte vorbehalten",
    cart: "Ihr Warenkorb",
    cartEmpty: "Warenkorb ist leer",
    total: "Insgesamt:",
    continue: "Einkaufen fortsetzen",
    hero: "Hochwertige Pellets für Ihren Wohnkomfort",
    heroSub: "Schnelle Lieferungen, effiziente Energie und sorgfältig ausgewählte 100% Naturholzpellets.",
    seeProducts: "Produkte anzeigen",
    prodNav: "Produkte",
    aboutNav: "Über",
    contactNav: "Kontakt",
    aboutPageHero: "Unsere Erfolgsgeschichte",
    aboutPageHeroSub: "Gewidmet Qualität und Kundenzufriedenheit",
    aboutPageStory: "Unsere Geschichte",
    aboutPageStoryText1: "Wir sind PelețiPro, ein Unternehmen mit Tradition in der Lieferung hochwertiger erneuerbarer Brennstoffe. Mit über 15 Jahren Erfahrung in der Branche haben wir Tausenden von Kunden geholfen, die perfekte Heizlösung für ihre Häuser zu finden.",
    aboutPageStoryText2: "Unsere Philosophie ist einfach: Qualität vor allem anderen. Jeder Sack Pellets wird strengen Tests unterzogen, um sicherzustellen, dass er unsere hohen Standards erfüllt. Unsere Pellets stammen ausschließlich aus zertifizierten Wäldern und werden sorgfältig verarbeitet, um die Integrität der Holzfasern zu erhalten.",
    aboutPageStoryText3: "Heute sind wir stolz, vertrauenswürdige Partner von Tausenden von Haushalten und Unternehmen in Rumänien und darüber hinaus zu sein. Unser Engagement bleibt unverändert: hochwertige zertifizierte Pellets, schnellen Service und engagierte Unterstützung für jeden Kunden bereitzustellen.",
    aboutPageValues: "Unsere Werte",
    aboutPageVal1Title: "Nachhaltigkeit",
    aboutPageVal1Text: "Verpflichtet zu grüner Energie und erneuerbaren Brennstoffen. Jedes Pellet ist eine Wahl für eine sauberere Zukunft.",
    aboutPageVal2Title: "Effizienz",
    aboutPageVal2Text: "Maximierung der Leistung und Minimierung von Verschwendung. Unsere Pellets bieten den besten Heizwert pro Kilogramm.",
    aboutPageVal3Title: "Zuverlässigkeit",
    aboutPageVal3Text: "Konsistenz in jedem Paket. Unsere Kunden wissen genau, was sie von PelețiPro erwarten können.",
    aboutPageVal4Title: "Kundenunterstützung",
    aboutPageVal4Text: "Jede Frage verdient eine schnelle Antwort. Unser Team ist hier, um Ihnen zu helfen.",
    aboutPageWhy: "Warum PelețiPro wählen?",
    aboutPageWhy1Title: "Zertifizierte Qualität",
    aboutPageWhy1Text: "Unsere Pellets erfüllen europäische DIN+ und ISO-Standards. Jede Charge wird auf Heizwert, Feuchte und Haltbarkeit getestet.",
    aboutPageWhy2Title: "Schnelle Lieferung",
    aboutPageWhy2Text: "Bestellungen innerhalb von 24h verarbeitet und Lieferungen innerhalb von 48-72h an die meisten Standorte. Tracking für jeden Transport.",
    aboutPageWhy3Title: "Wettbewerbsfähige Preise",
    aboutPageWhy3Text: "Wir bieten die besten Preise auf dem Markt, mit Rabatten für große Mengen und treue Kunden.",
    aboutPageWhy4Title: "Engagierte Unterstützung",
    aboutPageWhy4Text: "Unser Team ist per Telefon, E-Mail und WhatsApp erreichbar. Wir sprechen Ihre Sprache und verstehen Ihre Bedürfnisse.",
    aboutPageWhy5Title: "Nachhaltige Wälder",
    aboutPageWhy5Text: "Alle unsere Lieferanten erfüllen Protokolle zur nachhaltigen Waldbewirtschaftung und FSC-Zertifizierungen.",
    aboutPageWhy6Title: "Zufriedenheitsgarantie",
    aboutPageWhy6Text: "Wenn Sie nicht zufrieden sind, bieten wir problemlose Retouren und vollständige Rückerstattungen.",
    aboutPageQuality: "Qualitätsstandards",
    aboutPageQualityStat1: "Maximale Feuchte für optimales Brennen",
    aboutPageQualityStat2: "kWh/kg — Mindestbeheizungswert",
    aboutPageQualityStat3: "Naturholz, keine chemischen Zusatzstoffe",
    aboutPageQualityStat4: "Europäische Qualitätszertifizierung",
    aboutPageCtaTitle: "Bereit, unserem Team beizutreten?",
    aboutPageCtaText: "Erkunden Sie unsere vollständige Pelletpalette und finden Sie die perfekte Lösung für Ihr Zuhause.",
    aboutPageShop: "Jetzt kaufen",
    aboutPageContactBtn: "Kontaktieren Sie Uns",
    footerPayTitle: "Bezahlung & Lieferung",
    footerPayText: "Zahlung bei Lieferung oder Banküberweisung. Lieferungen innerhalb von 48-72h in den meisten Bereichen.",
    about: "Über",
    footerTerms: "Allgemeine Geschäftsbedingungen",
    productsInfoTitle: "Produktinformation",
    certTitle: "Zertifizierungen und Standards",
    certText: "Alle unsere Pellets sind nach europäischen Qualitätsstandards zertifiziert. Wir überprüfen jede Charge, um maximale Leistung zu gewährleisten.",
    certList: "DIN+ - Deutscher Pelletstandard;ISO 17225-2 - Internationaler Standard;EN+ - Europäische Zertifizierung;FSC - Nachhaltige Waldherkunft",
    sourceTitle: "Herkunft und Quellen",
    sourceText: "Unsere Pellets stammen aus hochwertigem Naturholz ohne chemische Zusatzstoffe. Wir arbeiten ausschließlich mit zertifizierten Lieferanten.",
    sourceList: "100% Naturholz aus zertifizierten Wäldern;Keine chemischen Zusatzstoffe oder künstliche Lignine;Verarbeitung unter kontrollierten Hygienebedingungen;Strenge Feuchte- und Dichtekontrolle",
    deliveryTitle: "Lieferung und Logistik",
    deliverySpeedTitle: "Schnelle Lieferung",
    deliverySpeedText: "Wir bearbeiten Bestellungen innerhalb von 24 Stunden und liefern innerhalb von 48-72 Stunden in ganz Rumänien.",
    packagingTitle: "Sichere Verpackung",
    packagingText: "Pellets sind in widerstandsfähigen 15-kg-Säcken verpackt, geschützt vor Feuchtigkeit und Schädlingen. Palettierung für große Bestellungen verfügbar.",
    coverageTitle: "Abdeckungsgebiet",
    coverageText: "Lieferung in ganz Rumänien, einschließlich Bukarest, Brașov, Klausenburg, Temeswar, Konstanza, Galatz und andere Städte. Versicherte Lieferung und GPS-Verfolgung.",
    priceTitle: "Preispolitik",
    priceText: "Wettbewerbsfähige Preise mit Rabatten für große Bestellungen. Option zur Zahlung bei Lieferung oder Banküberweisung. Verhandelbar für erhebliche Mengen.",
    qcTitle: "Qualitätskontrollprozess",
    qcIntro: "Jede Charge von Pellets durchläuft einen rigorosen vierstufigen Überprüfungsprozess, um Exzellenz zu gewährleisten.",
    qcStep1Title: "Rohstoffauswahl",
    qcStep1Text: "Inspektion und Auswahl von Rohholz von zertifizierten Lieferanten, Überprüfung von Feuchte und Qualität.",
    qcStep2Title: "Kontrollierte Verarbeitung",
    qcStep2Text: "Pelletierung in modernen Anlagen mit computergestützter Temperatur- und Druckkontrolle.",
    qcStep3Title: "Labortests",
    qcStep3Text: "Vollständige Analyse: Feuchte, Heizwert, Asche, mechanische Haltbarkeit. Einhaltung von DIN+ und ISO-Standards.",
    qcStep4Title: "Verpackung und Lieferung",
    qcStep4Text: "Schutz in widerstandsfähigen Verpackungen, Etiketten mit vollständigen Informationen, Einhaltung der Kühlkette.",
    envTitle: "Umweltverpflichtung",
    env1Title: "Erneuerbare Energie",
    env1Text: "Holzpellets sind eine erneuerbare Energiequelle, die CO2-Emissionen im Vergleich zu fossilen Brennstoffen reduziert.",
    env2Title: "Nachhaltige Wälder",
    env2Text: "Wir unterstützen nachhaltige Waldbewirtschaftung. Alle unsere Lieferanten erfüllen FSC-Protokolle und Aufforstung.",
    env3Title: "Abfallvermeidung",
    env3Text: "Wir stellen Pellets aus Holzabfällen her und wandeln Industrieabfälle in nützlichen und effizienten Brennstoff um.",
    testimonialTitle: "Was unsere Kunden sagen",
    test1Quote: "Pellets von PelețiPro sind von außergewöhnlicher Qualität. Ich habe das Haus den ganzen Winter geheizt und bin mit der Leistung und den Preisen äußerst zufrieden.",
    test1Author: "Klaus Schmidt, Bukarest",
    test2Quote: "Lieferung war schnell und die Pellets sind genau wie beschrieben. Ich empfehle PelețiPro wärmstens für alle Heizanforderungen.",
    test2Author: "Petra Mueller, Klausenburg",
    test3Quote: "Ausgezeichnete Qualität und hervorragender Kundenservice. Schnelle Verarbeitung und faire Preise. Sehr empfehlenswert!",
    test3Author: "Wolfgang Weber, Brașov",
    contactInfoTitle: "Kontaktinformation",
    addressTitle: "Adresse",
    addressText: "Str. Beispiel 12, Stadt, Rumänien 123456",
    phoneTitle: "Telefon",
    phoneText: "+40 123 456 789 | +40 123 456 788",
    emailTitle: "E-Mail",
    emailText: "contact@peletipro.ro | support@peletipro.ro",
    hoursTitle: "Geschäftszeiten",
    hoursText: "Montag - Freitag: 08:00 - 18:00 | Samstag: 09:00 - 14:00 | Sonntag: Geschlossen"
  },
  fr: {
    products: "Produits populaires",
    choose: "Choisissez parmi différents types de granulés, emballages et prix convenables.",
    bulkOrders: "Commandes en gros?",
    bulkDesc: "Pour les achats de 1+ tonne, nous offrons des réductions spéciales et des conditions personnalisées. Transport inclus, facture à conditions et gestionnaire dédié.",
    bulkBtn: "Demander un devis négociable",
    aboutTitle: "À Propos de Nous",
    aboutDesc: "Nous sommes ici pour fournir des solutions de chauffage fiables et abordables. Avec l'expérience de l'industrie des combustibles renouvelables, je garantis des granulés de qualité certifiée avec une humidité contrôlée et un pouvoir calorifique constant. Chaque sac est testé pour des performances optimales sur vos appareils.",
    priceNote: "⚠️ Les prix affichés sont négociables pour les grandes commandes. Contactez-nous pour des offres personnalisées!",
    aboutList1: "Matériau bois naturel 100% provenant de forêts certifiées",
    aboutList2: "Humidité contrôlée (<10%) pour une combustion efficace",
    aboutList3: "Emballage résistant et livraison rapide 48-72h",
    aboutList4: "Remises disponibles pour les plus grandes quantités",
    aboutList5: "Support direct et réponse rapide aux questions",
    contactBtn: "Nous Contacter",
    footerLinks: "Liens Utiles",
    payment: "Paiement & Livraison",
    paymentDesc: "Paiement à la livraison ou virement bancaire. Livraisons en 48-72h dans la plupart des zones.",
    rights: "Tous droits réservés",
    cart: "Votre Panier",
    cartEmpty: "Le panier est vide",
    total: "Total:",
    continue: "Continuer les achats",
    hero: "Granulés de haute qualité pour le confort de votre maison",
    heroSub: "Livraisons rapides, énergie efficace et granulés de bois naturel 100% sélectionnés avec soin.",
    seeProducts: "Voir les produits",
    prodNav: "Produits",
    aboutNav: "À Propos",
    contactNav: "Contact",
    aboutPageHero: "Notre histoire de succès",
    aboutPageHeroSub: "Dédiés à la qualité et à la satisfaction client",
    aboutPageStory: "Notre histoire",
    aboutPageStoryText1: "Nous sommes PelețiPro, une entreprise avec une tradition d'approvisionnement en combustibles renouvelables de haute qualité. Avec plus de 15 ans d'expérience dans l'industrie, nous avons aidé des milliers de clients à trouver la solution de chauffage parfaite pour leurs maisons.",
    aboutPageStoryText2: "Notre philosophie est simple : la qualité avant tout. Chaque sac de granulés est soumis à des tests rigoureux pour s'assurer qu'il répond à nos normes élevées. Nos granulés proviennent exclusivement de forêts certifiées et sont traités avec soin pour maintenir l'intégrité des fibres de bois.",
    aboutPageStoryText3: "Aujourd'hui, nous sommes fiers d'être les partenaires de confiance de milliers de ménages et d'entreprises en Roumanie et ailleurs. Notre engagement reste inchangé : fournir des granulés de qualité certifiée, un service rapide et un support dévoué pour chaque client.",
    aboutPageValues: "Nos valeurs",
    aboutPageVal1Title: "Durabilité",
    aboutPageVal1Text: "Engagés envers l'énergie verte et les combustibles renouvelables. Chaque granule est un choix pour un avenir plus propre.",
    aboutPageVal2Title: "Efficacité",
    aboutPageVal2Text: "Maximisation des performances et minimisation des gaspillages. Nos granulés offrent le meilleur pouvoir calorifique par kilogramme.",
    aboutPageVal3Title: "Fiabilité",
    aboutPageVal3Text: "Cohérence dans chaque paquet. Nos clients savent exactement ce qu'ils peuvent attendre de PelețiPro.",
    aboutPageVal4Title: "Support client",
    aboutPageVal4Text: "Chaque question mérite une réponse rapide. Notre équipe est là pour vous aider.",
    aboutPageWhy: "Pourquoi choisir PelețiPro?",
    aboutPageWhy1Title: "Qualité certifiée",
    aboutPageWhy1Text: "Nos granulés répondent aux normes européennes DIN+ et ISO. Chaque lot est testé pour son pouvoir calorifique, son humidité et sa durabilité.",
    aboutPageWhy2Title: "Livraison rapide",
    aboutPageWhy2Text: "Commandes traitées dans les 24h et livraisons dans les 48-72h vers la plupart des localités. Suivi pour chaque expédition.",
    aboutPageWhy3Title: "Tarifs compétitifs",
    aboutPageWhy3Text: "Nous offrons les meilleurs prix du marché, avec des réductions pour les grandes quantités et les clients fidèles.",
    aboutPageWhy4Title: "Support dévoué",
    aboutPageWhy4Text: "Notre équipe est disponible par téléphone, email et WhatsApp. Nous parlons votre langue et comprenons vos besoins.",
    aboutPageWhy5Title: "Forêts durables",
    aboutPageWhy5Text: "Tous nos fournisseurs respectent les protocoles de gestion durable des forêts et les certifications FSC.",
    aboutPageWhy6Title: "Garantie de satisfaction",
    aboutPageWhy6Text: "Si vous n'êtes pas satisfait, nous offrons des retours sans tracas et des remboursements complets.",
    aboutPageQuality: "Normes de qualité",
    aboutPageQualityStat1: "Humidité maximale pour une combustion optimale",
    aboutPageQualityStat2: "kWh/kg — Pouvoir calorifique minimum",
    aboutPageQualityStat3: "Bois naturel, sans additifs chimiques",
    aboutPageQualityStat4: "Certification de qualité européenne",
    aboutPageCtaTitle: "Prêt à rejoindre notre équipe?",
    aboutPageCtaText: "Explorez notre gamme complète de granulés et trouvez la solution parfaite pour votre maison.",
    aboutPageShop: "Acheter maintenant",
    aboutPageContactBtn: "Nous contacter",
    footerPayTitle: "Paiement & Livraison",
    footerPayText: "Paiement à la livraison ou virement bancaire. Livraisons dans les 48-72h dans la plupart des zones.",
    about: "À propos",
    footerTerms: "Conditions générales",
    productsInfoTitle: "Informations sur les Produits",
    certTitle: "Certifications et Normes",
    certText: "Tous nos granulés sont certifiés selon les normes européennes de qualité. Nous vérifions chaque lot pour assurer une performance maximale.",
    certList: "DIN+ - Norme allemande pour granulés;ISO 17225-2 - Norme internationale;EN+ - Certification européenne;FSC - Origine forestière durable",
    sourceTitle: "Origine et Sources",
    sourceText: "Nos granulés proviennent de bois naturel de haute qualité, sans additifs chimiques. Nous travaillons exclusivement avec des fournisseurs certifiés.",
    sourceList: "100% bois naturel provenant de forêts certifiées;Aucun additif chimique ni lignines artificielles;Traitement dans des conditions d'hygiène contrôlées;Contrôle strict de l'humidité et de la densité",
    deliveryTitle: "Livraison et Logistique",
    deliverySpeedTitle: "Livraison Rapide",
    deliverySpeedText: "Nous traitons les commandes dans les 24 heures et livrons dans les 48-72 heures dans toute la Roumanie.",
    packagingTitle: "Emballage Sécurisé",
    packagingText: "Les granulés sont emballés dans des sacs résistants de 15 kg, protégés de l'humidité et des parasites. Palettisation disponible pour les grandes commandes.",
    coverageTitle: "Zone de Couverture",
    coverageText: "Livraison dans toute la Roumanie, y compris Bucarest, Brașov, Cluj, Timișoara, Constanța, Galați et autres villes. Transport assuré et suivi GPS.",
    priceTitle: "Politique de Prix",
    priceText: "Tarifs compétitifs avec réductions pour les grandes commandes. Option de paiement à la livraison ou virement bancaire. Négociable pour les volumes importants.",
    qcTitle: "Processus de Contrôle de Qualité",
    qcIntro: "Chaque lot de granulés passe par un processus de vérification rigoureux en quatre étapes pour assurer l'excellence.",
    qcStep1Title: "Sélection des Matières Premières",
    qcStep1Text: "Inspection et sélection du bois brut auprès de fournisseurs certifiés, vérification de l'humidité et de la qualité.",
    qcStep2Title: "Traitement Contrôlé",
    qcStep2Text: "Granulation dans des installations modernes avec contrôle informatisé de la température et de la pression.",
    qcStep3Title: "Tests Laboratoire",
    qcStep3Text: "Analyse complète: humidité, pouvoir calorifique, cendres, durabilité mécanique. Conformité aux normes DIN+ et ISO.",
    qcStep4Title: "Emballage et Livraison",
    qcStep4Text: "Protection dans des emballages résistants, étiquettes avec informations complètes, respect de la chaîne du froid.",
    envTitle: "Engagement Environnemental",
    env1Title: "Énergie Renouvelable",
    env1Text: "Les granulés de bois sont une source d'énergie renouvelable qui réduit les émissions de CO2 par rapport aux combustibles fossiles.",
    env2Title: "Forêts Durables",
    env2Text: "Nous soutenons la gestion durable des forêts. Tous nos fournisseurs respectent les protocoles FSC et la reforestation.",
    env3Title: "Réduction des Déchets",
    env3Text: "Nous produisons des granulés à partir de résidus de bois, transformant les déchets industriels en combustible utile et efficace.",
    testimonialTitle: "Ce que disent nos clients",
    test1Quote: "Les granulés de PelețiPro sont d'une qualité exceptionnelle. J'ai chauffé la maison tout l'hiver et je suis très satisfait des performances et des prix.",
    test1Author: "Pierre Dubois, Bucarest",
    test2Quote: "La livraison a été rapide et les granulés sont exactement comme décrits. Je recommande vivement PelețiPro pour tous les besoins de chauffage.",
    test2Author: "Marie Leclerc, Cluj-Napoca",
    test3Quote: "Qualité exceptionnelle, service professionnel et prix très compétitifs. Je recommande fortement PelețiPro.",
    test3Author: "Jean Martin, Brașov",
    contactInfoTitle: "Informations de Contact",
    addressTitle: "Adresse",
    addressText: "Str. Exemple 12, Ville, Roumanie 123456",
    phoneTitle: "Téléphone",
    phoneText: "+40 123 456 789 | +40 123 456 788",
    emailTitle: "Email",
    emailText: "contact@peletipro.ro | support@peletipro.ro",
    hoursTitle: "Horaires d'Ouverture",
    hoursText: "Lundi - Vendredi: 08:00 - 18:00 | Samedi: 09:00 - 14:00 | Dimanche: Fermé"
  },
  es: {
    products: "Productos populares",
    choose: "Elige entre varios tipos de pellets, empaques y precios convenientes.",
    bulkOrders: "¿Pedidos al por mayor?",
    bulkDesc: "Para compras de 1+ tonelada, ofrecemos descuentos especiales y condiciones personalizadas. Transporte incluido, factura a plazo y gerente dedicado.",
    bulkBtn: "Solicitar cotización negociable",
    aboutTitle: "Sobre Nosotros",
    aboutDesc: "Estamos aquí para proporcionar soluciones de calefacción confiables y asequibles. Con experiencia en la industria de combustibles renovables, garantizo pellets de calidad certificada con humedad controlada y poder calorífico constante. Cada saco se prueba para un rendimiento óptimo en tus aparatos.",
    priceNote: "⚠️ Los precios mostrados son negociables para órdenes grandes. ¡Contáctenos para ofertas personalizadas!",
    aboutList1: "Material de madera natural 100% de bosques certificados",
    aboutList2: "Humedad controlada (<10%) para combustión eficiente",
    aboutList3: "Empaque resistente y entrega rápida 48-72h",
    aboutList4: "Descuentos disponibles para cantidades mayores",
    aboutList5: "Soporte directo y respuesta rápida a preguntas",
    contactBtn: "Contáctenos",
    footerLinks: "Enlaces Útiles",
    payment: "Pago y Entrega",
    paymentDesc: "Pago contra entrega o transferencia bancaria. Entregas en 48-72h en la mayoría de áreas.",
    rights: "Todos los derechos reservados",
    cart: "Tu Carrito",
    cartEmpty: "El carrito está vacío",
    total: "Total:",
    continue: "Continuar comprando",
    hero: "Pellets de alta calidad para la comodidad de tu hogar",
    heroSub: "Entregas rápidas, energía eficiente y pellets de madera natural 100% cuidadosamente seleccionados.",
    seeProducts: "Ver productos",
    prodNav: "Productos",
    aboutNav: "Nosotros",
    contactNav: "Contacto",
    aboutPageHero: "Nuestra historia de éxito",
    aboutPageHeroSub: "Dedicados a la calidad y satisfacción del cliente",
    aboutPageStory: "Nuestra historia",
    aboutPageStoryText1: "Somos PelețiPro, una empresa con tradición en el suministro de combustibles renovables de alta calidad. Con más de 15 años de experiencia en la industria, hemos ayudado a miles de clientes a encontrar la solución de calefacción perfecta para sus hogares.",
    aboutPageStoryText2: "Nuestra filosofía es simple: calidad antes que nada. Cada saco de pellets se somete a pruebas rigurosas para garantizar que cumple con nuestros altos estándares. Nuestros pellets provienen exclusivamente de bosques certificados y se procesan con cuidado para mantener la integridad de las fibras de madera.",
    aboutPageStoryText3: "Hoy, estamos orgullosos de ser socios de confianza de miles de hogares y negocios en Rumania y más allá. Nuestro compromiso se mantiene sin cambios: proporcionar pellets de calidad certificada, servicio rápido y apoyo dedicado para cada cliente.",
    aboutPageValues: "Nuestros valores",
    aboutPageVal1Title: "Sostenibilidad",
    aboutPageVal1Text: "Comprometidos con la energía verde y los combustibles renovables. Cada pellet es una opción por un futuro más limpio.",
    aboutPageVal2Title: "Eficiencia",
    aboutPageVal2Text: "Maximizando el rendimiento y minimizando el desperdicio. Nuestros pellets ofrecen el mejor poder calorífico por kilogramo.",
    aboutPageVal3Title: "Confiabilidad",
    aboutPageVal3Text: "Consistencia en cada paquete. Nuestros clientes saben exactamente qué esperar de PelețiPro.",
    aboutPageVal4Title: "Apoyo al cliente",
    aboutPageVal4Text: "Cada pregunta merece una respuesta rápida. Nuestro equipo está aquí para ayudarte.",
    aboutPageWhy: "¿Por qué elegir PelețiPro?",
    aboutPageWhy1Title: "Calidad certificada",
    aboutPageWhy1Text: "Nuestros pellets cumplen con los estándares europeos DIN+ e ISO. Cada lote se prueba para poder calorífico, humedad y durabilidad.",
    aboutPageWhy2Title: "Entrega rápida",
    aboutPageWhy2Text: "Pedidos procesados dentro de 24h y entregas dentro de 48-72h a la mayoría de ubicaciones. Seguimiento para cada envío.",
    aboutPageWhy3Title: "Precios competitivos",
    aboutPageWhy3Text: "Ofrecemos los mejores precios del mercado, con descuentos para cantidades grandes y clientes leales.",
    aboutPageWhy4Title: "Apoyo dedicado",
    aboutPageWhy4Text: "Nuestro equipo está disponible por teléfono, correo electrónico y WhatsApp. Hablamos tu idioma y entendemos tus necesidades.",
    aboutPageWhy5Title: "Bosques sostenibles",
    aboutPageWhy5Text: "Todos nuestros proveedores cumplen con los protocolos de gestión forestal sostenible y certificaciones FSC.",
    aboutPageWhy6Title: "Garantía de satisfacción",
    aboutPageWhy6Text: "Si no estás satisfecho, ofrecemos devoluciones sin problemas y reembolsos completos.",
    aboutPageQuality: "Estándares de calidad",
    aboutPageQualityStat1: "Humedad máxima para una quema óptima",
    aboutPageQualityStat2: "kWh/kg — Poder calorífico mínimo",
    aboutPageQualityStat3: "Madera natural, sin aditivos químicos",
    aboutPageQualityStat4: "Certificación de calidad europea",
    aboutPageCtaTitle: "¿Listo para unirte a nuestro equipo?",
    aboutPageCtaText: "Explora nuestra gama completa de pellets y encuentra la solución perfecta para tu hogar.",
    aboutPageShop: "Comprar ahora",
    aboutPageContactBtn: "Contáctanos",
    footerPayTitle: "Pago y Entrega",
    footerPayText: "Pago contra entrega o transferencia bancaria. Entregas dentro de 48-72h en la mayoría de áreas.",
    about: "Nosotros",
    footerTerms: "Términos y condiciones",
    productsInfoTitle: "Información del Producto",
    certTitle: "Certificaciones y Estándares",
    certText: "Todos nuestros pellets están certificados según las normas europeas de calidad. Verificamos cada lote para asegurar el máximo rendimiento.",
    certList: "DIN+ - Estándar alemán para pellets;ISO 17225-2 - Estándar internacional;EN+ - Certificación europea;FSC - Origen forestal sostenible",
    sourceTitle: "Origen y Fuentes",
    sourceText: "Nuestros pellets provienen de madera natural de alta calidad, sin aditivos químicos. Trabajamos exclusivamente con proveedores certificados.",
    sourceList: "100% madera natural de bosques certificados;Sin aditivos químicos ni ligninas artificiales;Procesamiento en condiciones sanitarias controladas;Control estricto de humedad y densidad",
    deliveryTitle: "Entrega y Logística",
    deliverySpeedTitle: "Entrega Rápida",
    deliverySpeedText: "Procesamos pedidos en máximo 24 horas y entregamos en 48-72 horas en toda Rumania.",
    packagingTitle: "Embalaje Seguro",
    packagingText: "Los pellets se empacan en bolsas resistentes de 15kg, protegidos contra la humedad y plagas. Palletización disponible para pedidos grandes.",
    coverageTitle: "Área de Cobertura",
    coverageText: "Entrega en toda Rumania, incluyendo Bucarest, Brașov, Cluj, Timișoara, Constanța, Galați y otras ciudades. Transporte asegurado y rastreo GPS.",
    priceTitle: "Política de Precios",
    priceText: "Precios competitivos con descuentos para pedidos grandes. Opción de pago contra entrega o transferencia bancaria. Negociable para volúmenes substanciales.",
    qcTitle: "Proceso de Control de Calidad",
    qcIntro: "Cada lote de pellets pasa por un riguroso proceso de verificación en cuatro etapas para asegurar la excelencia.",
    qcStep1Title: "Selección de Materia Prima",
    qcStep1Text: "Inspección y selección de madera bruta de proveedores certificados, verificación de humedad y calidad.",
    qcStep2Title: "Procesamiento Controlado",
    qcStep2Text: "Peletización en instalaciones modernas con control computarizado de temperatura y presión.",
    qcStep3Title: "Pruebas de Laboratorio",
    qcStep3Text: "Análisis completo: humedad, poder calorífico, ceniza, durabilidad mecánica. Cumplimiento con estándares DIN+ e ISO.",
    qcStep4Title: "Embalaje y Entrega",
    qcStep4Text: "Protección en embalajes resistentes, etiquetas con información completa, respeto a la cadena de frío.",
    envTitle: "Compromiso Ambiental",
    env1Title: "Energía Renovable",
    env1Text: "Los pellets de madera son una fuente de energía renovable que reduce las emisiones de CO2 en comparación con combustibles fósiles.",
    env2Title: "Bosques Sostenibles",
    env2Text: "Apoyamos la gestión sostenible de bosques. Todos nuestros proveedores cumplen con protocolos FSC y reforestación.",
    env3Title: "Reducción de Residuos",
    env3Text: "Producimos pellets a partir de residuos de madera, transformando desechos industriales en combustible útil y eficiente.",
    testimonialTitle: "Lo que Dicen nuestros Clientes",
    test1Quote: "Los pellets de PelețiPro son de calidad excepcional. Calenté la casa todo el invierno y estoy extremadamente satisfecho con el rendimiento y los precios.",
    test1Author: "Carlos García, Bucarest",
    test2Quote: "La entrega fue rápida y los pellets son exactamente como se describieron. Recomiendo ampliamente PelețiPro para todas las necesidades de calefacción.",
    test2Author: "Rosa Martínez, Cluj-Napoca",
    test3Quote: "Excelente calidad de producto, entrega rápida y equipo muy profesional. Muy recomendado.",
    test3Author: "Diego López, Brașov",
    contactInfoTitle: "Información de Contacto",
    addressTitle: "Dirección",
    addressText: "Str. Ejemplo 12, Ciudad, Rumania 123456",
    phoneTitle: "Teléfono",
    phoneText: "+40 123 456 789 | +40 123 456 788",
    emailTitle: "Correo Electrónico",
    emailText: "contact@peletipro.ro | support@peletipro.ro",
    hoursTitle: "Horario de Atención",
    hoursText: "Lunes - Viernes: 08:00 - 18:00 | Sábado: 09:00 - 14:00 | Domingo: Cerrado"
  },
  it: {
    products: "Prodotti Popolari",
    choose: "Scegli tra vari tipi di pellet, confezioni e prezzi convenienti.",
    bulkOrders: "Ordini all'ingrosso?",
    bulkDesc: "Per acquisti di 1+ tonnellata, offriamo sconti speciali e condizioni personalizzate. Trasporto incluso, fattura a termine e gestore dedicato.",
    bulkBtn: "Richiedi quotazione negoziabile",
    aboutTitle: "Chi Siamo",
    aboutDesc: "Siamo qui per fornire soluzioni di riscaldamento affidabili e convenienti. Con esperienza nell'industria dei combustibili rinnovabili, garantisco pellet di qualità certificata con umidità controllata e potere calorifico costante. Ogni sacco è testato per prestazioni ottimali sui tuoi apparecchi.",
    priceNote: "⚠️ I prezzi visualizzati sono negoziabili per ordini di grandi quantità. Contattaci per offerte personalizzate!",
    aboutList1: "Materiale legno naturale al 100% da foreste certificate",
    aboutList2: "Umidità controllata (<10%) per combustione efficiente",
    aboutList3: "Confezione resistente e consegna veloce 48-72h",
    aboutList4: "Sconti disponibili per quantità maggiori",
    aboutList5: "Supporto diretto e risposta rapida alle domande",
    contactBtn: "Contattaci",
    footerLinks: "Link Utili",
    payment: "Pagamento e Consegna",
    paymentDesc: "Pagamento alla consegna o bonifico bancario. Consegne in 48-72h nella maggior parte delle aree.",
    rights: "Tutti i diritti riservati",
    cart: "Il Tuo Carrello",
    cartEmpty: "Carrello vuoto",
    total: "Totale:",
    continue: "Continua lo shopping",
    hero: "Pellet di alta qualità per il comfort della tua casa",
    heroSub: "Consegne veloci, energia efficiente e pellet di legno naturale 100% accuratamente selezionati.",
    seeProducts: "Vedi i prodotti",
    prodNav: "Prodotti",
    aboutNav: "Chi Siamo",
    contactNav: "Contatti",
    aboutPageHero: "La nostra storia di successo",
    aboutPageHeroSub: "Dedicati alla qualità e alla soddisfazione del cliente",
    aboutPageStory: "La nostra storia",
    aboutPageStoryText1: "Siamo PelețiPro, un'azienda con tradizione nella fornitura di combustibili rinnovabili di alta qualità. Con oltre 15 anni di esperienza nel settore, abbiamo aiutato migliaia di clienti a trovare la soluzione di riscaldamento perfetta per le loro case.",
    aboutPageStoryText2: "La nostra filosofia è semplice: la qualità prima di tutto. Ogni sacco di pellet viene sottoposto a test rigorosi per garantire che rispetti i nostri standard elevati. I nostri pellet provengono esclusivamente da foreste certificate e vengono elaborati con cura per mantenere l'integrità delle fibre di legno.",
    aboutPageStoryText3: "Oggi siamo orgogliosi di essere partner di fiducia di migliaia di famiglie e imprese in Romania e oltre. Il nostro impegno rimane invariato: fornire pellet di qualità certificata, servizio veloce e supporto dedicato per ogni cliente.",
    aboutPageValues: "I nostri valori",
    aboutPageVal1Title: "Sostenibilità",
    aboutPageVal1Text: "Impegnati per l'energia verde e i combustibili rinnovabili. Ogni pellet è una scelta per un futuro più pulito.",
    aboutPageVal2Title: "Efficienza",
    aboutPageVal2Text: "Massimizzando le prestazioni e minimizzando gli sprechi. I nostri pellet offrono il miglior potere calorifico per chilogrammo.",
    aboutPageVal3Title: "Affidabilità",
    aboutPageVal3Text: "Coerenza in ogni pacchetto. I nostri clienti sanno esattamente cosa aspettarsi da PelețiPro.",
    aboutPageVal4Title: "Supporto clienti",
    aboutPageVal4Text: "Ogni domanda merita una risposta rapida. Il nostro team è qui per aiutarti.",
    aboutPageWhy: "Perché scegliere PelețiPro?",
    aboutPageWhy1Title: "Qualità certificata",
    aboutPageWhy1Text: "I nostri pellet rispettano gli standard europei DIN+ e ISO. Ogni lotto viene testato per potere calorifico, umidità e durabilità.",
    aboutPageWhy2Title: "Consegna veloce",
    aboutPageWhy2Text: "Ordini elaborati entro 24h e consegne entro 48-72h nella maggior parte dei luoghi. Tracciamento per ogni spedizione.",
    aboutPageWhy3Title: "Prezzi competitivi",
    aboutPageWhy3Text: "Offriamo i migliori prezzi sul mercato, con sconti per quantità elevate e clienti fedeli.",
    aboutPageWhy4Title: "Supporto dedicato",
    aboutPageWhy4Text: "Il nostro team è disponibile per telefono, email e WhatsApp. Parliamo la tua lingua e comprendiamo le tue esigenze.",
    aboutPageWhy5Title: "Foreste sostenibili",
    aboutPageWhy5Text: "Tutti i nostri fornitori rispettano i protocolli di gestione forestale sostenibile e le certificazioni FSC.",
    aboutPageWhy6Title: "Garanzia di soddisfazione",
    aboutPageWhy6Text: "Se non sei soddisfatto, offriamo resi senza problemi e rimborsi completi.",
    aboutPageQuality: "Standard di qualità",
    aboutPageQualityStat1: "Umidità massima per una combustione ottimale",
    aboutPageQualityStat2: "kWh/kg — Potere calorifico minimo",
    aboutPageQualityStat3: "Legno naturale, senza additivi chimici",
    aboutPageQualityStat4: "Certificazione di qualità europea",
    aboutPageCtaTitle: "Pronto a unirti al nostro team?",
    aboutPageCtaText: "Esplora la nostra gamma completa di pellet e trova la soluzione perfetta per la tua casa.",
    aboutPageShop: "Acquista ora",
    aboutPageContactBtn: "Contattaci",
    footerPayTitle: "Pagamento e Consegna",
    footerPayText: "Pagamento alla consegna o bonifico bancario. Consegne entro 48-72h nella maggior parte delle aree.",
    about: "Chi Siamo",
    footerTerms: "Termini e condizioni",
    productsInfoTitle: "Informazioni sul Prodotto",
    certTitle: "Certificazioni e Standard",
    certText: "Tutti i nostri pellet sono certificati secondo gli standard europei di qualità. Verifichiamo ogni lotto per garantire le prestazioni massime.",
    certList: "DIN+ - Standard tedesco per pellet;ISO 17225-2 - Standard internazionale;EN+ - Certificazione europea;FSC - Origine forestale sostenibile",
    sourceTitle: "Origine e Fonti",
    sourceText: "I nostri pellet provengono da legno naturale di alta qualità, senza additivi chimici. Lavoriamo esclusivamente con fornitori certificati.",
    sourceList: "100% legno naturale da foreste certificate;Senza additivi chimici o lignine artificiali;Lavorazione in condizioni sanitarie controllate;Controllo rigoroso dell'umidità e della densità",
    deliveryTitle: "Consegna e Logistica",
    deliverySpeedTitle: "Consegna Veloce",
    deliverySpeedText: "Elaboriamo gli ordini entro 24 ore e consegniamo entro 48-72 ore in tutta la Romania.",
    packagingTitle: "Imballaggio Sicuro",
    packagingText: "I pellet sono confezionati in sacchi resistenti da 15 kg, protetti dall'umidità e dai parassiti. Palettizzazione disponibile per ordini grandi.",
    coverageTitle: "Area di Copertura",
    coverageText: "Consegna in tutta la Romania, incluso Bucarest, Brașov, Cluj, Timișoara, Constanța, Galați e altre città. Trasporto assicurato e tracciamento GPS.",
    priceTitle: "Politica dei Prezzi",
    priceText: "Prezzi competitivi con sconti per ordini grandi. Opzione di pagamento alla consegna o bonifico bancario. Negoziabile per volumi sostanziali.",
    qcTitle: "Processo di Controllo Qualità",
    qcIntro: "Ogni lotto di pellet passa attraverso un rigoroso processo di verifica in quattro fasi per garantire l'eccellenza.",
    qcStep1Title: "Selezione Materie Prime",
    qcStep1Text: "Ispezione e selezione del legno greggio da fornitori certificati, verifica dell'umidità e della qualità.",
    qcStep2Title: "Lavorazione Controllata",
    qcStep2Text: "Peletizzazione in impianti moderni con controllo computerizzato della temperatura e della pressione.",
    qcStep3Title: "Test di Laboratorio",
    qcStep3Text: "Analisi completa: umidità, potere calorifico, cenere, durabilità meccanica. Conformità agli standard DIN+ e ISO.",
    qcStep4Title: "Confezionamento e Consegna",
    qcStep4Text: "Protezione in imballaggi resistenti, etichette con informazioni complete, rispetto della catena del freddo.",
    envTitle: "Impegno Ambientale",
    env1Title: "Energia Rinnovabile",
    env1Text: "I pellet di legno sono una fonte di energia rinnovabile che riduce le emissioni di CO2 rispetto ai combustibili fossili.",
    env2Title: "Foreste Sostenibili",
    env2Text: "Supportiamo la gestione sostenibile delle foreste. Tutti i nostri fornitori rispettano i protocolli FSC e il rimboschimento.",
    env3Title: "Riduzione dei Rifiuti",
    env3Text: "Produciamo pellet dagli scarti di legno, trasformando i rifiuti industriali in combustibile utile ed efficiente.",
    testimonialTitle: "Cosa Dicono i Nostri Clienti",
    test1Quote: "I pellet di Peletipro sono di qualità eccezionale. Ho riscaldato la casa per tutto l'inverno e sono estremamente soddisfatto delle prestazioni e dei prezzi.",
    test1Author: "Marco Rossi, Bucarest",
    test2Quote: "La consegna è stata veloce e i pellet sono esattamente come descritti. Consiglio vivamente Peletipro per tutte le esigenze di riscaldamento.",
    test2Author: "Anna Bianchi, Cluj-Napoca",
    test3Quote: "Qualità eccezionale, consegna rapida e team molto professionale. Altamente consigliato.",
    test3Author: "Giovanni Ferrari, Brașov",
    contactInfoTitle: "Informazioni di Contatto",
    addressTitle: "Indirizzo",
    addressText: "Str. Esempio 12, Città, Romania 123456",
    phoneTitle: "Telefono",
    phoneText: "+40 123 456 789 | +40 123 456 788",
    emailTitle: "Email",
    emailText: "contact@peletipro.ro | support@peletipro.ro",
    hoursTitle: "Orari di Apertura",
    hoursText: "Lunedì - Venerdì: 08:00 - 18:00 | Sabato: 09:00 - 14:00 | Domenica: Chiuso"
  }
  ,
  hu: {
    products: "Népszerű termékek",
    choose: "Válasszon különböző pellet típusok közül, csomagolások és kedvező árak.",
    bulkOrders: "Nagy tételben rendelne?",
    bulkDesc: "1+ tonna vásárlása esetén kedvezményeket és személyre szabott feltételeket kínálunk. Szállítás, számla és dedikált kapcsolattartó.",
    bulkBtn: "Kérjen tárgyalható árajánlatot",
    aboutTitle: "Rólunk",
    aboutDesc: "Megbízható és megfizethető fűtési megoldásokat kínálunk. Tapasztalat a megújuló tüzelőanyag iparágban, minősített pellet garantálva.",
    priceNote: "⚠️ A feltüntetett árak nagyobb megrendelés esetén tárgyalhatók.",
    aboutList1: "100% természetes faanyag tanúsított erdőkből",
    aboutList2: "Szabályozott páratartalom (<10%) a hatékony égéshez",
    aboutList3: "Tartós csomagolás és gyors szállítás 48-72h",
    aboutList4: "Kedvezmények nagyobb mennyiségek esetén",
    aboutList5: "Közvetlen támogatás és gyors válasz",
    contactBtn: "Lépjen kapcsolatba velünk",
    footerLinks: "Hasznos linkek",
    payment: "Fizetés & Szállítás",
    paymentDesc: "Utánvéttel vagy banki átutalással. Szállítás 48-72h belül.",
    rights: "Minden jog fenntartva",
    cart: "Kosara",
    cartEmpty: "A kosár üres",
    total: "Összesen:",
    continue: "Folytassa a vásárlást",
    hero: "Kiváló minőségű pellet otthona kényelméért",
    heroSub: "Gyors kézbesítés, hatékony energia és gondosan válogatott 100% természetes fa pellet.",
    seeProducts: "Termékek megtekintése",
    prodNav: "Termékek",
    aboutNav: "Rólunk",
    contactNav: "Kapcsolat",
    aboutPageHero: "Siker történetünk",
    aboutPageHeroSub: "Elkötelezetten a minőség és az ügyfél-elégedettség irányában",
    aboutPageStory: "A mi történetünk",
    aboutPageStoryText1: "A PelețiPro egy hagyománnyal rendelkező vállalat a magas minőségű megújuló energiaforrások szállításában. 15 évnél több ipari tapasztalattal több ezer ügyfélnek segítettünk megtalálni a tökéletes fűtési megoldást otthonaikhoz.",
    aboutPageStoryText2: "Filozófiánk egyszerű: a minőség mindenekelőtt. A pellet minden zsákját szigorú tesztek alá vetjük, hogy biztosítsuk magas szintű normáinknak való megfelelést. Peletjeink kizárólag tanúsított erdőkből származnak és gondosan feldolgozzuk a fa rostok integritásának megőrzésére.",
    aboutPageStoryText3: "Ma büszkék vagyunk arra, hogy megbízható partnerek vagyunk több ezer háztartás és üzlet száméra Romániában és azon túl. Elkötelezettségünk változatlan: tanúsított minőségű pelleteket, gyors szolgáltatást és dedikált támogatást nyújtunk minden ügyfélnek.",
    aboutPageValues: "Értékeink",
    aboutPageVal1Title: "Fenntarthatóság",
    aboutPageVal1Text: "Elkötelezettünk a zöld energia és a megújuló tüzelőanyagok irányában. Minden pellet egy választás a tisztább jövőért.",
    aboutPageVal2Title: "Hatékonyság",
    aboutPageVal2Text: "A teljesítmény maximalizálása és a pazarlás minimalizálása. Peletjeink a legjobb hőértéket nyújtják kilogrammonként.",
    aboutPageVal3Title: "Megbízhatóság",
    aboutPageVal3Text: "Konzisztencia minden csomagban. Ügyfeleink pontosan tudják, mit várhatnak a PelețiPro-tól.",
    aboutPageVal4Title: "Ügyfélszolgálat",
    aboutPageVal4Text: "Minden kérdés gyors választ érdemel. Csapatunk itt van, hogy segítsen.",
    aboutPageWhy: "Miért válassza a PelețiPro-t?",
    aboutPageWhy1Title: "Tanúsított minőség",
    aboutPageWhy1Text: "Peletjeink megfelelnek az európai DIN+ és ISO szabványoknak. Minden tétel hőértékre, páratartalomra és tartósságra van tesztelve.",
    aboutPageWhy2Title: "Gyors szállítás",
    aboutPageWhy2Text: "Megrendelések feldolgozása 24 órán belül és szállítás 48-72 órán belül a legtöbb helyre. Nyomkövetés minden szállítmányhoz.",
    aboutPageWhy3Title: "Versenyképes árak",
    aboutPageWhy3Text: "A piacon a legjobb árakat kínáljuk, nagy mennyiségekre és hűséges ügyfelekre vonatkozó kedvezményekkel.",
    aboutPageWhy4Title: "Dedikált támogatás",
    aboutPageWhy4Text: "Csapatunk telefonon, emailen és WhatsApp-on érhető el. Beszéljük az ön nyelvét és megértjük igényeit.",
    aboutPageWhy5Title: "Fenntartható erdők",
    aboutPageWhy5Text: "Minden szállítónk betartja az erdőgazdálkodási protokollokat és az FSC tanúsítványokat.",
    aboutPageWhy6Title: "Elégedettségi garancia",
    aboutPageWhy6Text: "Ha nem vagy elégedett, gondtalan visszaküldéseket és teljes visszatérítést kínálunk.",
    aboutPageQuality: "Minőségi szabványok",
    aboutPageQualityStat1: "Maximális páratartalom optimális égéshez",
    aboutPageQualityStat2: "kWh/kg — Minimum hőérték",
    aboutPageQualityStat3: "Természetes fa, nincs kémiai adalék",
    aboutPageQualityStat4: "Európai minőségi tanúsítás",
    aboutPageCtaTitle: "Készen állsz csapatunkhoz csatlakozni?",
    aboutPageCtaText: "Fedezd fel teljes pellet kínálatunkat és találd meg az ideális megoldást otthonodnak.",
    aboutPageShop: "Vásárolj most",
    aboutPageContactBtn: "Lépjen kapcsolatba velünk",
    footerPayTitle: "Fizetés & Szállítás",
    footerPayText: "Utánvéttel vagy banki átutalással. Szállítás 48-72h belül legtöbb helyre.",
    about: "Rólunk",
    footerTerms: "Feltételek és kikötések",
    productsInfoTitle: "Termékinformációk",
    certTitle: "Tanúsítványok és Szabványok",
    certText: "Összes peletünk az európai minőségi szabványok szerint tanúsított. Minden tételt ellenőrzünk a maximális teljesítmény biztosítása érdekében.",
    certList: "DIN+ - Német pellet szabvány;ISO 17225-2 - Nemzetközi szabvány;EN+ - Európai tanúsítás;FSC - Fenntartható erdő eredete",
    sourceTitle: "Eredet és Források",
    sourceText: "Peletjeink kiváló minőségű természetes fából származnak, kémiai adalékok nélkül. Kizárólag tanúsított szállítókkal dolgozunk.",
    sourceList: "100% természetes fa tanúsított erdőkből;Nincs kémiai adalék vagy mesterséges lignin;Feldolgozás szabályozott higiénikus körülmények között;Szigorú páratartalom és sűrűség ellenőrzés",
    deliveryTitle: "Szállítás és Logisztika",
    deliverySpeedTitle: "Gyors Szállítás",
    deliverySpeedText: "Megrendeléseket maximum 24 órán belül feldolgozunk és 48-72 órán belül szállítunk Romániában.",
    packagingTitle: "Biztonságos Csomagolás",
    packagingText: "A pelet 15kg-os ellenálló zsákokba van csomagolva, páratartalom és kártevők ellen védve. Palettázás nagy megrendelésekhez elérhető.",
    coverageTitle: "Lefedési Terület",
    coverageText: "Szállítás egész Romániában, beleértve Bukarestet, Brașovot, Kolozsvárott, Temesvárt, Konstancát, Galatit és más városokat. Biztosított szállítás és GPS követés.",
    priceTitle: "Árpolitika",
    priceText: "Versenyképes árak nagy megrendelésekre vonatkozó kedvezményekkel. Lehetőség utánvétre vagy banki átutalásra. Egyeztethetô jelentős mennyiségek esetén.",
    qcTitle: "Minőségellenőrzési Eljárás",
    qcIntro: "Minden pellet tétel egy szigorú négy lépéses ellenőrzési folyamaton megy keresztül a kiválóság biztosítása érdekében.",
    qcStep1Title: "Nyersanyag Kiválasztás",
    qcStep1Text: "Nyers fa vizsgálata és kiválasztása tanúsított szállítóktól, páratartalom és minőség ellenőrzése.",
    qcStep2Title: "Kontrollált Feldolgozás",
    qcStep2Text: "Peletálás modern üzemekben számítógépes hőmérséklet- és nyomásvezérléssel.",
    qcStep3Title: "Laboratóriumi Tesztek",
    qcStep3Text: "Teljes elemzés: páratartalom, fűtőérték, hamu, mechanikai tartósság. DIN+ és ISO szabványok betartása.",
    qcStep4Title: "Csomagolás és Szállítás",
    qcStep4Text: "Védelem ellenálló csomagolásban, teljes információs címkékkel, hidegláncnak való megfelelés.",
    envTitle: "Környezetvédelmi Kötelezettség",
    env1Title: "Megújuló Energia",
    env1Text: "Fa pelet egy megújuló energiaforrás, amely csökkenti a CO2 kibocsátást a fosszilis üzemanyagokhoz képest.",
    env2Title: "Fenntartható Erdők",
    env2Text: "Támogatjuk az erdők fenntartható kezelését. Összes szállítónk betartja az FSC protokollokat és újraerdősítést.",
    env3Title: "Hulladékcsökkentés",
    env3Text: "Fa hulladékból gyártunk peletet, az ipari hulladékot hasznos és hatékony tüzelőanyaggá alakítva.",
    testimonialTitle: "Mit Mondanak Ügyfeleink",
    test1Quote: "A Peletipro pellet kivételes minőségű. Egész télen fűtöttem a házat és rendkívül elégedett vagyok a teljesítménnyel és az árakkal.",
    test1Author: "István Nagy, Bukarest",
    test2Quote: "A szállítás gyors volt és a pelet pontosan úgy, ahogy leírták. Erősen ajánlom a Peletiprot minden fűtési szükséglethez.",
    test2Author: "Erzsébet Kovács, Kolozsvár",
    test3Quote: "Kitűnő minőség, gyors szállítás és nagyon professzionális csapat. Nagyon ajánlott.",
    test3Author: "Béla Molnár, Brașov",
    contactInfoTitle: "Elérhetőségi Adatok",
    addressTitle: "Cím",
    addressText: "Str. Példa 12, Város, Románia 123456",
    phoneTitle: "Telefon",
    phoneText: "+40 123 456 789 | +40 123 456 788",
    emailTitle: "Email",
    emailText: "contact@peletipro.ro | support@peletipro.ro",
    hoursTitle: "Nyitvatartás",
    hoursText: "Hétfő - Péntek: 08:00 - 18:00 | Szombat: 09:00 - 14:00 | Vasárnap: Zárva"
  },
  sr: {
    products: "Popularni proizvodi",
    choose: "Izaberite između različitih vrsta peleta, pakovanja i povoljnih cena.",
    bulkOrders: "Narudžbine na veliko?",
    bulkDesc: "Za kupovine od 1+ tone nudimo posebne popuste i prilagođene uslove. Transport uključen, faktura i posvećeni menadžer.",
    bulkBtn: "Zatražite pregovaračku ponudu",
    aboutTitle: "O nama",
    aboutDesc: "Pružamo pouzdana i pristupačna rešenja za grejanje. Iskustvo u industriji obnovljivih goriva, garantujemo kvalitetne pelete.",
    priceNote: "⚠️ Cene su pregovarajuće za velike porudžbine.",
    aboutList1: "100% prirodno drvo iz sertifikovanih šuma",
    aboutList2: "Kontrolisana vlažnost (<10%) za efikasno sagorevanje",
    aboutList3: "Otpremno pakovanje i brza dostava 48-72h",
    aboutList4: "Popusti za veće količine",
    aboutList5: "Direktna podrška i brz odgovor",
    contactBtn: "Kontaktirajte nas",
    footerLinks: "Korisni linkovi",
    payment: "Plaćanje & Dostava",
    paymentDesc: "Plaćanje pouzećem ili bankovnim transferom. Dostave u 48-72h.",
    rights: "Sva prava zadržana",
    cart: "Vaša korpa",
    cartEmpty: "Korpa je prazna",
    total: "Ukupno:",
    continue: "Nastavite kupovinu",
    hero: "Kvalitetni peleti za udobnost vašeg doma",
    heroSub: "Brze isporuke, efikasna energija i pažljivo odabrani 100% prirodni peleti.",
    seeProducts: "Pogledajte proizvode",
    prodNav: "Proizvodi",
    aboutNav: "O nama",
    contactNav: "Kontakt",
    aboutPageHero: "Naša priča o uspehu",
    aboutPageHeroSub: "Posvećeni kvalitetu i zadovoljstvu kupaca",
    aboutPageStory: "Naša priča",
    aboutPageStoryText1: "Peletipro je kompanija sa tradicijom u snabdevanju obnovljivih goriva visoke kvalitete. Sa više od 15 godina iskustva u industriji, pomogli smo hiljade kupaca da pronađu savršeno rešenje za grejanje svojih domova.",
    aboutPageStoryText2: "Naša filozofija je jednostavna: kvalitet pre svega. Svaka vreća peleta se podvrgava rigoroznom testiranju da bi se osiguralo da ispunjava naše visoke standarde. Naši peleti potiču isključivo iz sertifikovanih šuma i obrađeni su pažljivo kako bi se održala integritet vlaknastih struktura drveća.",
    aboutPageStoryText3: "Danas smo ponosni što smo pouzdani partneri hiljade domaćinstava i preduzeća u Rumuniji i šire. Naš angažman ostaje nepromenjen: pružiti pelete sertifikovane kvalitete, brzu uslugu i posvećenu podršku svakom kupcu.",
    aboutPageValues: "Naše vrednosti",
    aboutPageVal1Title: "Održivost",
    aboutPageVal1Text: "Posvećeni zelenoj energiji i obnovljivim gorivima. Svaki pelet je izbor za čistiju budućnost.",
    aboutPageVal2Title: "Efikasnost",
    aboutPageVal2Text: "Maksimiziranje performansi i minimiziranje rasipanja. Naši peleti pružaju najbolju kalorijsku vrednost po kilogramu.",
    aboutPageVal3Title: "Pouzdanost",
    aboutPageVal3Text: "Konzistentnost u svakom pakovanju. Naši kupci tačno znaju šta mogu očekivati od Peletipro.",
    aboutPageVal4Title: "Podrška kupcu",
    aboutPageVal4Text: "Svako pitanje zaslužuje brz odgovor. Naš tim je tu da vam pomogne.",
    aboutPageWhy: "Zašto odabrati Peletipro?",
    aboutPageWhy1Title: "Sertifikovana kvaliteta",
    aboutPageWhy1Text: "Naši peleti ispunjavaju evropske standarde DIN+ i ISO. Svaka serija se testira na kalorijsku vrednost, vlažnost i trajnost.",
    aboutPageWhy2Title: "Brza isporuka",
    aboutPageWhy2Text: "Narudžbe obrađene u roku od 24h i isporuke u roku od 48-72h do većine lokacija. Praćenje za svaku pošiljku.",
    aboutPageWhy3Title: "Konkurentne cene",
    aboutPageWhy3Text: "Nudimo najbolje cene na tržištu, sa popustima za velike količine i lojalnim kupcima.",
    aboutPageWhy4Title: "Posvećena podrška",
    aboutPageWhy4Text: "Naš tim je dostupan telefonom, e-poštom i WhatsApp-om. Govorimo vaš jezik i razumemo vaše potrebe.",
    aboutPageWhy5Title: "Održive šume",
    aboutPageWhy5Text: "Svi naši dobavljači poštuju protokole održive šumske privrede i FSC sertifikate.",
    aboutPageWhy6Title: "Garancija zadovoljstva",
    aboutPageWhy6Text: "Ako niste zadovoljni, nudimo bez problema vraćanja i pune povraćaje novca.",
    aboutPageQuality: "Standardi kvaliteta",
    aboutPageQualityStat1: "Maksimalna vlažnost za optimalnu sagorevanje",
    aboutPageQualityStat2: "kWh/kg — Minimalna kalorijska vrednost",
    aboutPageQualityStat3: "Prirodno drvo, bez hemijskih aditiva",
    aboutPageQualityStat4: "Evropska sertifikacija kvaliteta",
    aboutPageCtaTitle: "Spreman li si da se pridružiš našem timu?",
    aboutPageCtaText: "Istražite našu kompletnu ponudu peleta i pronađite savršeno rešenje za svoj dom.",
    aboutPageShop: "Kupi sada",
    aboutPageContactBtn: "Kontaktirajte nas",
    footerPayTitle: "Plaćanje i isporuka",
    footerPayText: "Plaćanje pouzećem ili bankovnim transferom. Dostave u roku od 48-72h na većini lokacija.",
    about: "O nama",
    footerTerms: "Uslovi i odredbe",
    productsInfoTitle: "Informacije o Proizvodima",
    certTitle: "Sertifikati i Standardi",
    certText: "Svi naši peleti su sertifikovani prema evropskim standardima kvaliteta.",
    certList: "DIN+ - Nemački standard za pelete;ISO 17225-2 - Međunarodni standard;EN+ - Evropska sertifikacija;FSC - Poreklo iz održivih šuma",
    sourceTitle: "Poreklo i Izvori",
    sourceText: "Peleti potiču iz visokokvalitetnog prirodnog drveta bez hemijskih dodataka.",
    sourceList: "100% prirodno drvo iz sertifikovanih šuma;Bez hemijskih dodataka;Obrada u kontrolisanim uslovima;Stroga kontrola vlage i gustine",
    deliveryTitle: "Isporuka i Logistika",
    deliverySpeedTitle: "Brza Isporuka",
    deliverySpeedText: "Obrađujemo porudžbine u roku od 24h i isporučujemo u 48-72h.",
    packagingTitle: "Sigurna Ambalaža",
    packagingText: "Peleti su pakovani u čvrste kese od 15kg, zaštićene od vlage.",
    coverageTitle: "Zona Isporuke",
    coverageText: "Isporuka širom zemlje sa osiguranim transportom i praćenjem.",
    priceTitle: "Politika Cena",
    priceText: "Konkurentne cene sa popustima za velike narudžbine.",
    qcTitle: "Proces Kontrole Kvaliteta",
    qcIntro: "Svaka serija prolazi kroz rigoroznu četvorostepenu proveru kvaliteta.",
    qcStep1Title: "Selektovanje Sirovina",
    qcStep1Text: "Inspekcija i odabir drveta od sertifikovanih dobavljača.",
    qcStep2Title: "Kontrolisana Obrada",
    qcStep2Text: "Peletizacija u modernim postrojenjima sa kontrolom procesa.",
    qcStep3Title: "Laboratorijska Testiranja",
    qcStep3Text: "Analize vlage, kalorijske vrednosti, pepela i mehaničke otpornosti.",
    qcStep4Title: "Pakovanje i Isporuka",
    qcStep4Text: "Zaštita u pakovanju i sigurna dostava do kupca.",
    envTitle: "Posvećenost Životnoj Sredini",
    env1Title: "Obnovljiva Energija",
    env1Text: "Peleti su obnovljivi izvor energije sa nižim CO2 emisijama.",
    env2Title: "Održive Šume",
    env2Text: "Podržavamo održivo upravljanje šumama i pošumljavanje.",
    env3Title: "Smanjenje Otpada",
    env3Text: "Proizvodimo pelete od drvnih ostataka, smanjujući industrijski otpad.",
    testimonialTitle: "Šta Kažu Naši Klijenti",
    test1Quote: "Kvalitet peleta je izvanredan i isporuka brza.",
    test1Author: "Marko, Beograd",
    test2Quote: "Pouzdani proizvodi i odlična podrška.",
    test2Author: "Jelena, Novi Sad",
    test3Quote: "Preporučujem Peletipro za pouzdano grejanje.",
    test3Author: "Petar, Niš",
    contactInfoTitle: "Kontakt Informacije",
    addressTitle: "Adresa",
    addressText: "Ulica Primer 12, Grad, Srbija",
    phoneTitle: "Telefon",
    phoneText: "+381 123 456 789",
    emailTitle: "Email",
    emailText: "kontakt@peletipro.rs",
    hoursTitle: "Radno Vreme",
    hoursText: "Ponedeljak - Petak: 08:00 - 18:00"
  },
  pl: {
    products: "Popularne produkty",
    choose: "Wybierz spośród różnych rodzajów peletów, opakowań i korzystnych cen.",
    bulkOrders: "Zamówienia hurtowe?",
    bulkDesc: "Przy zakupach powyżej 1 tony oferujemy specjalne rabaty i indywidualne warunki. Transport w cenie, faktura na warunkach.",
    bulkBtn: "Poproś o negocjowaną ofertę",
    aboutTitle: "O nas",
    aboutDesc: "Dostarczamy niezawodne i przystępne rozwiązania grzewcze. Doświadczenie w branży paliw odnawialnych, gwarantujemy certyfikowane peletki wysokiej jakości.",
    priceNote: "⚠️ Ceny są negocjowalne przy dużych zamówieniach.",
    aboutList1: "100% naturalne drewno z certyfikowanych lasów",
    aboutList2: "Kontrolowana wilgotność (<10%) dla efektywnego spalania",
    aboutList3: "Wytrzymałe opakowania i szybka dostawa 48-72h",
    aboutList4: "Rabat przy większych ilościach",
    aboutList5: "Bezpośrednie wsparcie i szybka odpowiedź",
    contactBtn: "Skontaktuj się z nami",
    footerLinks: "Przydatne linki",
    payment: "Płatności i Dostawa",
    paymentDesc: "Płatność przy odbiorze lub przelew bankowy. Dostawy w 48-72h.",
    rights: "Wszelkie prawa zastrzeżone",
    cart: "Twój koszyk",
    cartEmpty: "Koszyk jest pusty",
    total: "Razem:",
    continue: "Kontynuuj zakupy",
    hero: "Wysokiej jakości pelet dla komfortu Twojego domu",
    heroSub: "Szybka dostawa, efektywna energia i starannie wyselekcjonowane 100% naturalne peletki.",
    seeProducts: "Zobacz produkty",
    prodNav: "Produkty",
    aboutNav: "O nas",
    contactNav: "Kontakt",
    aboutPageHero: "Nasza historia sukcesu",
    aboutPageHeroSub: "Zaangażowani w jakość i zadowolenie klientów",
    aboutPageStory: "Nasza historia",
    aboutPageStoryText1: "Jesteśmy Peletipro, firmą o tradycji dostarczania odnawialnych paliw wysokiej jakości. Dysponując ponad 15-letnim doświadczeniem w branży, pomogliśmy tysiącom klientów znaleźć doskonałe rozwiązanie grzewcze dla swoich domów.",
    aboutPageStoryText2: "Nasza filozofia jest prosta: jakość ponad wszystkim. Każdy worek paliwa poddawany jest rygorystycznym testom, aby zagwarantować spełnienie naszych wysokich standardów. Nasze pelet pochodzą wyłącznie z certyfikowanych lasów i są przetwarzane z dbałością o zachowanie integralności włókien drewna.",
    aboutPageStoryText3: "Dziś jesteśmy dumni, że jesteśmy zaufanymi partnerami tysięcy domów i przedsiębiorstw w Rumunii i poza nią. Nasze zaangażowanie pozostaje niezmienione: dostarczanie paliw certyfikowanej jakości, szybka obsługa i dedykowana pomoc dla każdego klienta.",
    aboutPageValues: "Nasze wartości",
    aboutPageVal1Title: "Zrównoważony rozwój",
    aboutPageVal1Text: "Zaangażowani w zieloną energię i paliwa odnawialne. Każdy pelet to wybór dla czystszej przyszłości.",
    aboutPageVal2Title: "Wydajność",
    aboutPageVal2Text: "Maksymalizacja wydajności i minimalizacja strat. Nasze pelet oferują najlepszą wartość opałową na kilogram.",
    aboutPageVal3Title: "Niezawodność",
    aboutPageVal3Text: "Konsekwencja w każdym opakowaniu. Nasi klienci wiedzą dokładnie, czego mogą się spodziewać po Peletipro.",
    aboutPageVal4Title: "Obsługa klienta",
    aboutPageVal4Text: "Każde pytanie zasługuje na szybką odpowiedź. Nasz zespół jest tu, aby Ci pomóc.",
    aboutPageWhy: "Dlaczego wybrać Peletipro?",
    aboutPageWhy1Title: "Certyfikowana jakość",
    aboutPageWhy1Text: "Nasze pelet spełniają europejskie standardy DIN+ i ISO. Każda partia jest testowana pod kątem wartości opałowej, wilgotności i trwałości.",
    aboutPageWhy2Title: "Szybka dostawa",
    aboutPageWhy2Text: "Zamówienia przetwarzane w ciągu 24h i dostawy w ciągu 48-72h do większości lokalizacji. Śledzenie dla każdej przesyłki.",
    aboutPageWhy3Title: "Ceny konkurencyjne",
    aboutPageWhy3Text: "Oferujemy najlepsze ceny na rynku ze zniżkami na duże ilości i lojalnych klientów.",
    aboutPageWhy4Title: "Dedykowana pomoc",
    aboutPageWhy4Text: "Nasz zespół jest dostępny telefonicznie, pocztą elektroniczną i WhatsApp-ie. Mówimy Twoim językiem i rozumiemy Twoje potrzeby.",
    aboutPageWhy5Title: "Zrównoważone lasy",
    aboutPageWhy5Text: "Wszyscy nasi dostawcy przestrzegają protokołów zrównoważonego zarządzania lasami i certyfikacji FSC.",
    aboutPageWhy6Title: "Gwarancja zadowolenia",
    aboutPageWhy6Text: "Jeśli nie jesteś zadowolony, oferujemy bezproblemowe zwroty i pełne zwroty pieniędzy.",
    aboutPageQuality: "Standardy jakości",
    aboutPageQualityStat1: "Maksymalna wilgotność do optymalnego spalania",
    aboutPageQualityStat2: "kWh/kg — Minimalna wartość opałowa",
    aboutPageQualityStat3: "Naturalne drewno, bez dodatków chemicznych",
    aboutPageQualityStat4: "Europejska certyfikacja jakości",
    aboutPageCtaTitle: "Gotów do przyłączenia się do naszego zespołu?",
    aboutPageCtaText: "Zapoznaj się z naszą pełną ofertą paliwa i znajdź idealnego rozwiązanie dla swojego domu.",
    aboutPageShop: "Kup teraz",
    aboutPageContactBtn: "Skontaktuj się z nami",
    footerPayTitle: "Płatności i dostawa",
    footerPayText: "Płatność przy odbiorze lub przelew bankowy. Dostawy w ciągu 48-72h na większości lokalizacji.",
    about: "O nas",
    footerTerms: "Warunki i postanowienia",
    productsInfoTitle: "Informacje o Produkcie",
    certTitle: "Certyfikaty i Standardy",
    certText: "Wszystkie nasze pelety są certyfikowane zgodnie z europejskimi standardami jakości.",
    certList: "DIN+ - Niemiecki standard;ISO 17225-2 - Standard międzynarodowy;EN+ - Certyfikat europejski;FSC - Pochodzenie z zrównoważonych lasów",
    sourceTitle: "Pochodzenie i Źródła",
    sourceText: "Pelety pochodzą z wysokiej jakości drewna naturalnego bez dodatków chemicznych.",
    sourceList: "100% naturalne drewno z certyfikowanych lasów;Bez dodatków chemicznych;Przetwarzanie w kontrolowanych warunkach;Ścisła kontrola wilgotności i gęstości",
    deliveryTitle: "Dostawa i Logistyka",
    deliverySpeedTitle: "Szybka Dostawa",
    deliverySpeedText: "Realizujemy zamówienia w 24h i dostarczamy w 48-72h.",
    packagingTitle: "Bezpieczne Opakowanie",
    packagingText: "Pelety pakowane w mocne worki 15kg, chronione przed wilgocią.",
    coverageTitle: "Obszar Dostaw",
    coverageText: "Dostawa na terenie całego kraju z ubezpieczonym transportem i śledzeniem.",
    priceTitle: "Polityka Cenowa",
    priceText: "Konkurencyjne ceny z rabatami dla dużych zamówień.",
    qcTitle: "Proces Kontroli Jakości",
    qcIntro: "Każda partia przechodzi rygorystyczny, czterostopniowy proces kontroli.",
    qcStep1Title: "Wybór Surowca",
    qcStep1Text: "Inspekcja i wybór drewna od certyfikowanych dostawców.",
    qcStep2Title: "Kontrolowane Przetwarzanie",
    qcStep2Text: "Peletowanie w nowoczesnych zakładach z kontrolą procesu.",
    qcStep3Title: "Testy Laboratoryjne",
    qcStep3Text: "Analizy wilgotności, wartości opałowej, zawartości popiołu i trwałości.",
    qcStep4Title: "Pakowanie i Dostawa",
    qcStep4Text: "Ochrona w opakowaniu i bezpieczna dostawa do klienta.",
    envTitle: "Zaangażowanie Ekologiczne",
    env1Title: "Energia Odnawialna",
    env1Text: "Pelety to odnawialne źródło energii redukujące emisję CO2.",
    env2Title: "Zrównoważone Lasy",
    env2Text: "Wspieramy zrównoważone zarządzanie lasami i zalesianie.",
    env3Title: "Redukcja Odpadów",
    env3Text: "Produkujemy pelety z odpadów drewnianych, zmniejszając odpady przemysłowe.",
    testimonialTitle: "Opinie Klientów",
    test1Quote: "Jakość peletów jest znakomita, a dostawa szybka.",
    test1Author: "Jan, Warszawa",
    test2Quote: "Solidny produkt i świetne wsparcie.",
    test2Author: "Anna, Kraków",
    test3Quote: "Polecam Peletipro dla niezawodnego ogrzewania.",
    test3Author: "Marek, Gdańsk",
    contactInfoTitle: "Informacje Kontaktowe",
    addressTitle: "Adres",
    addressText: "Ulica Przykład 12, Miasto, Polska",
    phoneTitle: "Telefon",
    phoneText: "+48 123 456 789",
    emailTitle: "Email",
    emailText: "kontakt@peletipro.pl",
    hoursTitle: "Godziny Pracy",
    hoursText: "Poniedziałek - Piątek: 08:00 - 18:00"
  },
  bg: {
    products: "Популярни продукти",
    choose: "Изберете от различни видове пелети, опаковки и удобни цени.",
    bulkOrders: "Големи поръчки?",
    bulkDesc: "За покупки над 1 тон предлагаме специални отстъпки и персонализирани условия. Транспорт включен.",
    bulkBtn: "Заявете преговорна оферта",
    aboutTitle: "За нас",
    aboutDesc: "Предоставяме надеждни и достъпни решения за отопление. Гарантираме сертифицирани пелети с контролирана влажност.",
    priceNote: "⚠️ Цените са предмет на преговор за големи поръчки.",
    aboutList1: "100% естествена дървесина от сертифицирани гори",
    aboutList2: "Контролирана влажност (<10%) за ефективно горене",
    aboutList3: "Здрави опаковки и бърза доставка 48-72h",
    aboutList4: "Отстъпки за по-големи количества",
    aboutList5: "Директна подкрепа и бърз отговор",
    contactBtn: "Свържете се с нас",
    footerLinks: "Полезни връзки",
    payment: "Плащане и Доставка",
    paymentDesc: "Плащане при доставка или банков превод. Доставки в 48-72h.",
    rights: "Всички права запазени",
    cart: "Вашата кошница",
    cartEmpty: "Кошницата е празна",
    total: "Общо:",
    continue: "Продължете пазаруването",
    hero: "Пелети с високо качество за комфорта на вашия дом",
    heroSub: "Бързи доставки, ефективна енергия и внимателно подбрани 100% естествени пелети.",
    seeProducts: "Виж продукти",
    prodNav: "Продукти",
    aboutNav: "За нас",
    contactNav: "Контакт",
    aboutPageHero: "Нашата история на успех",
    aboutPageHeroSub: "Посветени на качество и задоволство на клиентите",
    aboutPageStory: "Нашата история",
    aboutPageStoryText1: "Ние сме Peletipro, компания с традиция в доставката на възобновяеми горива с висока качество. С над 15 години опит в индустрията помогнахме на хиляди клиенти да намерят идеалното решение за отопление на своите домове.",
    aboutPageStoryText2: "Нашата философия е проста: качество преди всичко. Всеки сак с пелети подлежи на строги тестове, за да се гарантира, че отговаря на нашите високи стандарти. Нашите пелети произхождат изключително от сертифицирани гори и се обработват внимателно, за да се поддържа интегритета на дървесните влакна.",
    aboutPageStoryText3: "Днес сме гордеи, че сме надежни партньори на хиляди домакинства и предприятия в България и отвъд. Нашето ангажиране остава непроменено: доставяне на пелети с сертифицирано качество, бърз сервиз и посветена подкрепа за всеки клиент.",
    aboutPageValues: "Нашите ценности",
    aboutPageVal1Title: "Устойчивост",
    aboutPageVal1Text: "Посветени на зелена енергия и възобновяеми горива. Всеки пелет е избор за по-чисто бъдеще.",
    aboutPageVal2Title: "Ефективност",
    aboutPageVal2Text: "Максимизиране на производителността и минимизиране на отпадъци. Нашите пелети предлагат най-добра топлинна стойност на килограм.",
    aboutPageVal3Title: "Надежност",
    aboutPageVal3Text: "Последователност в всеки пакет. Нашите клиенти знаят точно какво да очаквят от Peletipro.",
    aboutPageVal4Title: "Поддръжка на клиентите",
    aboutPageVal4Text: "Всеки въпрос заслужава бърз отговор. Нашият екип е тук, за да ви помогне.",
    aboutPageWhy: "Защо да изберете Peletipro?",
    aboutPageWhy1Title: "Сертифицирано качество",
    aboutPageWhy1Text: "Нашите пелети отговарят на европейските стандарти DIN+ и ISO. Всеки партида се тества за топлинна стойност, влажност и издържливост.",
    aboutPageWhy2Title: "Бърза доставка",
    aboutPageWhy2Text: "Поръчките се обработват в рамките на 24 часа и доставката е в рамките на 48-72 часа до повечето локации. Проследяване за всяка пратка.",
    aboutPageWhy3Title: "Конкурентни цени",
    aboutPageWhy3Text: "Предлагаме най-добрите цени на пазара със отстъпки за големи количества и верни клиенти.",
    aboutPageWhy4Title: "Посветена поддръжка",
    aboutPageWhy4Text: "Нашият екип е достъпен по телефон, имейл и WhatsApp. Говорим вашия език и разбираме вашите нужди.",
    aboutPageWhy5Title: "Устойчиви гори",
    aboutPageWhy5Text: "Всички наши доставчици спазват протоколите за устойчиво управление на горите и FSC сертификациите.",
    aboutPageWhy6Title: "Гаранция за задоволство",
    aboutPageWhy6Text: "Ако не сте задоволни, предлагаме безпроблемни върнати и пълни възвръщания на пари.",
    aboutPageQuality: "Стандарти на качество",
    aboutPageQualityStat1: "Максимална влажност за оптимално горене",
    aboutPageQualityStat2: "kWh/kg — Минимална топлинна стойност",
    aboutPageQualityStat3: "Естествено дърво, без химически добавки",
    aboutPageQualityStat4: "Европейска сертификация на качество",
    aboutPageCtaTitle: "Готов ли си да се присъединиш към нашия екип?",
    aboutPageCtaText: "Изследвай нашата пълна гама пелети и намери идеалното решение за твоя дом.",
    aboutPageShop: "Купи сега",
    aboutPageContactBtn: "Свържете се с нас",
    footerPayTitle: "Плащане и доставка",
    footerPayText: "Плащане при доставка или банков превод. Доставки в рамките на 48-72 часа на повечето локации.",
    about: "За нас",
    footerTerms: "Условия и разпоредби",
    productsInfoTitle: "Информация за продуктите",
    certTitle: "Сертификати и стандарти",
    certText: "Всички наши пелети са сертифицирани според европейските стандарти за качество.",
    certList: "DIN+ - Немски стандарт;ISO 17225-2 - Международен стандарт;EN+ - Европейска сертификация;FSC - Произход от устойчиви гори",
    sourceTitle: "Произход и източници",
    sourceText: "Пелетите ни произхождат от висококачествена естествена дървесина без химикали.",
    sourceList: "100% естествена дървесина от сертифицирани гори;Без химически добавки;Обработка в контролирани условия;Строг контрол на влажността и плътността",
    deliveryTitle: "Доставка и логистика",
    deliverySpeedTitle: "Бърза доставка",
    deliverySpeedText: "Обработваме поръчки в рамките на 24 часа и доставяме в 48-72 часа.",
    packagingTitle: "Сигурна опаковка",
    packagingText: "Пелетите са опаковани в здрави чували от 15kg, защитени от влага.",
    coverageTitle: "Зона на доставка",
    coverageText: "Доставка на територията на страната с осигурен транспорт и проследяване.",
    priceTitle: "Ценова политика",
    priceText: "Конкурентни цени с отстъпки за големи поръчки.",
    qcTitle: "Процес на контрол на качеството",
    qcIntro: "Всяка партида минава през строг четириетапен контрол за гарантиране на качество.",
    qcStep1Title: "Избор на суровини",
    qcStep1Text: "Инспекция и избор на дървесина от сертифицирани доставчици.",
    qcStep2Title: "Контролирана обработка",
    qcStep2Text: "Пелетиране в модерни инсталации с контрол на процеса.",
    qcStep3Title: "Лабораторни тестове",
    qcStep3Text: "Анализи на влага, калорична стойност, пепел и механична здравина.",
    qcStep4Title: "Опаковане и доставка",
    qcStep4Text: "Защита в опаковки и сигурна доставка до клиента.",
    envTitle: "Екологичен ангажимент",
    env1Title: "Възобновяема енергия",
    env1Text: "Пелетите са възобновяем източник на енергия с по-ниски емисии на CO2.",
    env2Title: "Устойчиви гори",
    env2Text: "Подкрепяме устойчивото управление на горите и залесяване.",
    env3Title: "Намаляване на отпадъците",
    env3Text: "Произвеждаме пелети от дървесни отпадъци, намалявайки индустриалните отпадъци.",
    testimonialTitle: "Отзиви от клиенти",
    test1Quote: "Качеството на пелетите е отлично, доставката е бърза.",
    test1Author: "Иван, София",
    test2Quote: "Надежден продукт и добра поддръжка.",
    test2Author: "Мария, Пловдив",
    test3Quote: "Препоръчвам Peletipro за надеждно отопление.",
    test3Author: "Георги, Варна",
    contactInfoTitle: "Контактна информация",
    addressTitle: "Адрес",
    addressText: "Ул. Пример 12, Град, България",
    phoneTitle: "Телефон",
    phoneText: "+359 123 456 789",
    emailTitle: "Имейл",
    emailText: "kontakt@peletipro.bg",
    hoursTitle: "Работно време",
    hoursText: "Пон - Пет: 08:00 - 18:00"
  },
  uk: {
    products: "Популярні товари",
    choose: "Оберіть з різних видів пелетів, пакувань та вигідних цін.",
    bulkOrders: "Оптові замовлення?",
    bulkDesc: "Для покупок від 1+ тонни пропонуємо спеціальні знижки та персональні умови. Транспорт включено.",
    bulkBtn: "Запросити переговорну пропозицію",
    aboutTitle: "Про нас",
    aboutDesc: "Ми надаємо надійні та доступні рішення для опалення. Гарантуємо сертифіковані пелети з контрольованою вологістю.",
    priceNote: "⚠️ Ціни можуть обговорюватися для великих замовлень.",
    aboutList1: "100% натуральна деревина з сертифікованих лісів",
    aboutList2: "Контрольована вологість (<10%) для ефективного згоряння",
    aboutList3: "Міцна упаковка та швидка доставка 48-72h",
    aboutList4: "Знижки для великих кількостей",
    aboutList5: "Пряма підтримка та швидка відповідь",
    contactBtn: "Зв'яжіться з нами",
    footerLinks: "Корисні посилання",
    payment: "Оплата та Доставка",
    paymentDesc: "Оплата при доставці або банківський переказ. Доставки за 48-72h.",
    rights: "Всі права захищені",
    cart: "Ваш кошик",
    cartEmpty: "Кошик порожній",
    total: "Разом:",
    continue: "Продовжити покупки",
    hero: "Пелети високої якості для комфорту вашого дому",
    heroSub: "Швидкі доставки, ефективна енергія та ретельно відібрані 100% натуральні пелети.",
    seeProducts: "Дивитися товари",
    prodNav: "Продукти",
    aboutNav: "Про нас",
    contactNav: "Контакт",
    aboutPageHero: "Наша історія успіху",
    aboutPageHeroSub: "Присвячені якості та задоволенню клієнтів",
    aboutPageStory: "Наша історія",
    aboutPageStoryText1: "Ми є PelețiPro, компанія з традицією постачання відновлюваних видів палива високої якості. З більш ніж 15 років досвіду в промисловості ми допомогли тисячам клієнтів знайти ідеальне рішення для опалення своїх будинків.",
    aboutPageStoryText2: "Наша філософія проста: якість перед усім. Кожна мішок пелет піддається суворим тестам, щоб гарантувати дотримання наших високих стандартів. Наші пелет походять виключно з сертифікованих лісів і обробляються ретельно для збереження цілісності деревних волокон.",
    aboutPageStoryText3: "Сьогодні ми пишаємся тим, що є надійними партнерами тисяч домогосподарств і компаній у Румунії та далі. Наше зобов'язання залишається незмінним: постачати сертифіковані пелети, швидко обслуговувати та забезпечувати свідому підтримку кожному клієнтові.",
    aboutPageValues: "Наші цінності",
    aboutPageVal1Title: "Сталість",
    aboutPageVal1Text: "Присвячені зеленій енергії та відновлюваним видам палива. Кожен пелет - це вибір для чистішого майбутнього.",
    aboutPageVal2Title: "Ефективність",
    aboutPageVal2Text: "Максимізація продуктивності та мінімізація витрат. Наші пелети пропонують найкращу теплову цінність на килограм.",
    aboutPageVal3Title: "Надійність",
    aboutPageVal3Text: "Послідовність у кожній упаковці. Наші клієнти точно знають, чого очікувати від PelețiPro.",
    aboutPageVal4Title: "Підтримка клієнтів",
    aboutPageVal4Text: "Кожне питання заслуговує швидкої відповіді. Наша команда тут, щоб допомогти вам.",
    aboutPageWhy: "Чому вибирати PelețiPro?",
    aboutPageWhy1Title: "Сертифікована якість",
    aboutPageWhy1Text: "Наші пелети відповідають європейським стандартам DIN+ та ISO. Кожна партія тестується на теплову цінність, вологість та довговічність.",
    aboutPageWhy2Title: "Швидка доставка",
    aboutPageWhy2Text: "Замовлення обробляються протягом 24 годин, доставка протягом 48-72 годин на більшість місцезнаходження. Відстеження для кожної посилки.",
    aboutPageWhy3Title: "Конкурентні ціни",
    aboutPageWhy3Text: "Пропонуємо найкращі ціни на ринку зі знижками для великих кількостей та лояльних клієнтів.",
    aboutPageWhy4Title: "Свідома підтримка",
    aboutPageWhy4Text: "Наша команда доступна по телефону, електронній пошті та WhatsApp. Ми говоримо вашою мовою і розуміємо ваші потреби.",
    aboutPageWhy5Title: "Стійкі ліси",
    aboutPageWhy5Text: "Усі наші постачальники дотримуються протоколів стійкого управління лісами та сертифікатів FSC.",
    aboutPageWhy6Title: "Гарантія задоволення",
    aboutPageWhy6Text: "Якщо ви не задоволені, ми пропонуємо безпроблемні повернення та повні повернення грошей.",
    aboutPageQuality: "Стандарти якості",
    aboutPageQualityStat1: "Максимальна вологість для оптимального спалювання",
    aboutPageQualityStat2: "kWh/kg — Мінімальна теплова цінність",
    aboutPageQualityStat3: "Натуральне дерево, без хімічних добавок",
    aboutPageQualityStat4: "Європейська сертифікація якості",
    aboutPageCtaTitle: "Готові приєднатися до нашої команди?",
    aboutPageCtaText: "Дослідіть нашу повну лінійку пелет та знайдіть ідеальне рішення для свого дому.",
    aboutPageShop: "Придбайте зараз",
    aboutPageContactBtn: "Зв'яжіться з нами",
    footerPayTitle: "Оплата та доставка",
    footerPayText: "Оплата при доставці або банківський переказ. Доставка протягом 48-72 годин на більшість місцезнаходження.",
    about: "Про нас",
    footerTerms: "Умови та положення",
    productsInfoTitle: "Інформація про продукт",
    certTitle: "Сертифікати та стандарти",
    certText: "Усі наші пелети сертифіковані відповідно до європейських стандартів якості.",
    certList: "DIN+ - Німецький стандарт;ISO 17225-2 - Міжнародний стандарт;EN+ - Європейська сертифікація;FSC - Походження з сталих лісів",
    sourceTitle: "Походження та джерела",
    sourceText: "Пелети походять із високоякісної натуральної деревини без хімічних добавок.",
    sourceList: "100% натуральна деревина з сертифікованих лісів;Без хімічних добавок;Обробка в контрольованих умовах;Суворий контроль вологості та щільності",
    deliveryTitle: "Доставка та логістика",
    deliverySpeedTitle: "Швидка доставка",
    deliverySpeedText: "Ми обробляємо замовлення протягом 24 годин та доставляємо за 48-72 години.",
    packagingTitle: "Безпечна упаковка",
    packagingText: "Пелети пакуються у міцні мішки по 15 кг, захищені від вологи.",
    coverageTitle: "Зона покриття",
    coverageText: "Доставка по всій країні з застрахованим транспортом та відстеженням.",
    priceTitle: "Цінова політика",
    priceText: "Конкурентні ціни з знижками для великих замовлень.",
    qcTitle: "Процес контролю якості",
    qcIntro: "Кожна партія проходить суворий чотириступеневий контроль якості.",
    qcStep1Title: "Вибір сировини",
    qcStep1Text: "Інспекція та відбір деревини від сертифікованих постачальників.",
    qcStep2Title: "Контрольована обробка",
    qcStep2Text: "Пелетизація на сучасних потужностях з контролем процесу.",
    qcStep3Title: "Лабораторні випробування",
    qcStep3Text: "Аналіз вологи, теплотворної здатності, золи та механічної міцності.",
    qcStep4Title: "Фасування та доставка",
    qcStep4Text: "Захист в упаковці та безпечна доставка до клієнта.",
    envTitle: "Екологічні зобов'язання",
    env1Title: "Відновлювана енергія",
    env1Text: "Пелети — відновлюваний енергетичний ресурс з нижчими викидами CO2.",
    env2Title: "Сталий лісовий менеджмент",
    env2Text: "Підтримуємо стале управління лісами та відновлення лісів.",
    env3Title: "Скорочення відходів",
    env3Text: "Виробляємо пелети з деревних відходів, перетворюючи відходи на корисне паливо.",
    testimonialTitle: "Відгуки клієнтів",
    test1Quote: "Якість пелет відмінна, доставка швидка.",
    test1Author: "Олена, Київ",
    test2Quote: "Надійний продукт і відмінна підтримка.",
    test2Author: "Іван, Львів",
    test3Quote: "Рекомендую Peletipro для ефективного опалення.",
    test3Author: "Оксана, Харків",
    contactInfoTitle: "Контактна інформація",
    addressTitle: "Адреса",
    addressText: "Вул. Приклад 12, Місто, Україна",
    phoneTitle: "Телефон",
    phoneText: "+380 123 456 789",
    emailTitle: "Електронна пошта",
    emailText: "kontakt@peletipro.ua",
    hoursTitle: "Години роботи",
    hoursText: "Пн - Пт: 08:00 - 18:00"
  },
  ru: {
    products: "Популярные товары",
    choose: "Выберите из различных типов пеллет, упаковок и удобных цен.",
    bulkOrders: "Оптовые заказы?",
    bulkDesc: "При покупке от 1+ тонны мы предлагаем специальные скидки и индивидуальные условия. Транспорт включен.",
    bulkBtn: "Запросить переговорное предложение",
    aboutTitle: "О нас",
    aboutDesc: "Мы предлагаем надежные и доступные решения для отопления. Гарантируем сертифицированные пеллеты с контролируемой влажностью.",
    priceNote: "⚠️ Цены оговариваются для крупных заказов.",
    aboutList1: "100% натуральная древесина из сертифицированных лесов",
    aboutList2: "Контролируемая влажность (<10%) для эффективного сгорания",
    aboutList3: "Прочная упаковка и быстрая доставка 48-72ч",
    aboutList4: "Скидки для больших объемов",
    aboutList5: "Прямая поддержка и быстрый ответ",
    contactBtn: "Связаться с нами",
    footerLinks: "Полезные ссылки",
    payment: "Оплата и Доставка",
    paymentDesc: "Оплата при доставке или банковским переводом. Доставки 48-72ч.",
    rights: "Все права защищены",
    cart: "Ваша корзина",
    cartEmpty: "Корзина пуста",
    total: "Итого:",
    continue: "Продолжить покупки",
    hero: "Качественные пеллеты для комфорта вашего дома",
    heroSub: "Быстрая доставка, эффективная энергия и тщательно отобранные 100% натуральные пеллеты.",
    seeProducts: "Смотреть продукты",
    prodNav: "Продукты",
    aboutNav: "О нас",
    contactNav: "Контакт",
    aboutPageHero: "Наша история успеха",
    aboutPageHeroSub: "Посвящены качеству и удовлетворению клиентов",
    aboutPageStory: "Наша история",
    aboutPageStoryText1: "Мы PelețiPro, компания с традицией поставки возобновляемых видов топлива высокого качества. С более чем 15-летним опытом в отрасли мы помогли тысячам клиентов найти идеальное решение для отопления своих домов.",
    aboutPageStoryText2: "Наша философия проста: качество превыше всего. Каждый мешок пеллет подвергается строгому тестированию, чтобы гарантировать соответствие нашим высоким стандартам. Наши пеллеты происходят исключительно из сертифицированных лесов и обрабатываются с осторожностью для сохранения целостности древесных волокон.",
    aboutPageStoryText3: "Сегодня мы гордимся тем, что являемся надежными партнерами тысяч домохозяйств и компаний в Румынии и за ее пределами. Наше обязательство остается неизменным: поставлять сертифицированные пеллеты, быстрый сервис и преданную поддержку каждому клиенту.",
    aboutPageValues: "Наши ценности",
    aboutPageVal1Title: "Устойчивость",
    aboutPageVal1Text: "Посвящены зеленой энергии и возобновляемым видам топлива. Каждый пеллет - выбор для более чистого будущего.",
    aboutPageVal2Title: "Эффективность",
    aboutPageVal2Text: "Максимизация производительности и минимизация отходов. Наши пеллеты обеспечивают лучшую теплотворную способность на килограмм.",
    aboutPageVal3Title: "Надежность",
    aboutPageVal3Text: "Последовательность в каждой упаковке. Наши клиенты знают точно, чего ожидать от PelețiPro.",
    aboutPageVal4Title: "Поддержка клиентов",
    aboutPageVal4Text: "Каждый вопрос заслуживает быстрого ответа. Наша команда здесь, чтобы помочь вам.",
    aboutPageWhy: "Почему выбрать PelețiPro?",
    aboutPageWhy1Title: "Сертифицированное качество",
    aboutPageWhy1Text: "Наши пеллеты соответствуют европейским стандартам DIN+ и ISO. Каждая партия тестируется на теплотворную способность, влажность и долговечность.",
    aboutPageWhy2Title: "Быстрая доставка",
    aboutPageWhy2Text: "Заказы обрабатываются в течение 24 часов и доставляются в течение 48-72 часов в большинство мест. Отслеживание для каждой отправки.",
    aboutPageWhy3Title: "Конкурентные цены",
    aboutPageWhy3Text: "Мы предлагаем лучшие цены на рынке со скидками для крупных объемов и постоянных клиентов.",
    aboutPageWhy4Title: "Преданная поддержка",
    aboutPageWhy4Text: "Наша команда доступна по телефону, электронной почте и WhatsApp. Мы говорим на вашем языке и понимаем ваши потребности.",
    aboutPageWhy5Title: "Устойчивые леса",
    aboutPageWhy5Text: "Все наши поставщики соблюдают протоколы устойчивого управления лесами и сертификаты FSC.",
    aboutPageWhy6Title: "Гарантия удовлетворения",
    aboutPageWhy6Text: "Если вы не удовлетворены, мы предлагаем беспроблемный возврат и полную компенсацию.",
    aboutPageQuality: "Стандарты качества",
    aboutPageQualityStat1: "Максимальная влажность для оптимального горения",
    aboutPageQualityStat2: "kWh/kg — Минимальная теплотворная способность",
    aboutPageQualityStat3: "Натуральное дерево, без химических добавок",
    aboutPageQualityStat4: "Европейская сертификация качества",
    aboutPageCtaTitle: "Готовы присоединиться к нашей команде?",
    aboutPageCtaText: "Изучите наш полный ассортимент пеллет и найдите идеальное решение для вашего дома.",
    aboutPageShop: "Купить сейчас",
    aboutPageContactBtn: "Свяжитесь с нами",
    footerPayTitle: "Оплата и доставка",
    footerPayText: "Оплата при доставке или банковским переводом. Доставка в течение 48-72 часов в большинство мест.",
    about: "О нас",
    footerTerms: "Условия использования",
    productsInfoTitle: "Информация о продукте",
    certTitle: "Сертификаты и стандарты",
    certText: "Все наши пеллеты сертифицированы в соответствии с европейскими стандартами качества.",
    certList: "DIN+ - Немецкий стандарт;ISO 17225-2 - Международный стандарт;EN+ - Европейская сертификация;FSC - Происхождение из устойчивых лесов",
    sourceTitle: "Происхождение и источники",
    sourceText: "Пеллеты из высококачественной натуральной древесины без химических добавок.",
    sourceList: "100% натуральная древесина из сертифицированных лесов;Без химических добавок;Обработка в контролируемых условиях;Строгий контроль влажности и плотности",
    deliveryTitle: "Доставка и логистика",
    deliverySpeedTitle: "Быстрая доставка",
    deliverySpeedText: "Обрабатываем заказы в течение 24 часов и доставляем за 48-72 часа.",
    packagingTitle: "Надежная упаковка",
    packagingText: "Пеллеты упакованы в прочные мешки по 15 кг, защищенные от влаги.",
    coverageTitle: "Зона покрытия",
    coverageText: "Доставка по всей стране с застрахованным транспортом и отслеживанием.",
    priceTitle: "Ценовая политика",
    priceText: "Конкурентные цены со скидками для крупных заказов.",
    qcTitle: "Процесс контроля качества",
    qcIntro: "Каждая партия проходит строгий четырехэтапный контроль качества.",
    qcStep1Title: "Отбор сырья",
    qcStep1Text: "Инспекция и отбор древесины у сертифицированных поставщиков.",
    qcStep2Title: "Контролируемая обработка",
    qcStep2Text: "Пеллетирование на современных мощностях с контролем процесса.",
    qcStep3Title: "Лабораторные испытания",
    qcStep3Text: "Анализ влаги, теплотворной способности, золы и механической прочности.",
    qcStep4Title: "Упаковка и доставка",
    qcStep4Text: "Защита в упаковке и безопасная доставка клиенту.",
    envTitle: "Экологическая ответственность",
    env1Title: "Возобновляемая энергия",
    env1Text: "Пеллеты являются возобновляемым источником энергии с меньшими выбросами CO2.",
    env2Title: "Устойчивое лесопользование",
    env2Text: "Мы поддерживаем устойчивое управление лесами и восстановление лесов.",
    env3Title: "Сокращение отходов",
    env3Text: "Мы производим пеллеты из древесных отходов, превращая отходы в полезное топливо.",
    testimonialTitle: "Отзывы клиентов",
    test1Quote: "Качество пеллет отличное, доставка быстрая.",
    test1Author: "Алексей, Москва",
    test2Quote: "Надежный продукт и отличная поддержка.",
    test2Author: "Ольга, Санкт-Петербург",
    test3Quote: "Рекомендую Peletipro для эффективного отопления.",
    test3Author: "Иван, Казань",
    contactInfoTitle: "Контактная информация",
    addressTitle: "Адрес",
    addressText: "Ул. Пример 12, Город, Россия",
    phoneTitle: "Телефон",
    phoneText: "+7 123 456 7890",
    emailTitle: "Электронная почта",
    emailText: "kontakt@peletipro.ru",
    hoursTitle: "Часы работы",
    hoursText: "Пн - Пт: 08:00 - 18:00"
  },
  zh: {
    products: "热门产品",
    choose: "从各种类型的木颗粒、包装和优惠价格中选择。",
    bulkOrders: "批量订单？",
    bulkDesc: "对于1吨及以上的采购，我们提供特别折扣和个性化条件。含运输、可开票并配专属经理。",
    bulkBtn: "请求可谈判报价",
    aboutTitle: "关于我们",
    aboutDesc: "我们致力于提供可靠且实惠的供暖解决方案。保证认证的高质量木颗粒，湿度可控。",
    priceNote: "⚠️ 大宗订单的价格可议。",
    aboutList1: "来自认证林区的100%天然木材",
    aboutList2: "受控湿度 (<10%)，燃烧更高效",
    aboutList3: "结实的包装和48-72小时快速交付",
    aboutList4: "大批量可享折扣",
    aboutList5: "直接支持和快速响应",
    contactBtn: "联系我们",
    footerLinks: "有用的链接",
    payment: "支付与配送",
    paymentDesc: "货到付款或银行转账。大多数地区48-72小时送达。",
    rights: "版权所有",
    cart: "您的购物车",
    cartEmpty: "购物车为空",
    total: "总计:",
    continue: "继续购物",
    hero: "高品质木颗粒，为您的家庭带来舒适",
    heroSub: "快速交付、高效能源和精心挑选的100%天然木颗粒。",
    seeProducts: "查看产品",
    prodNav: "产品",
    aboutNav: "关于",
    contactNav: "联系",
    aboutPageHero: "我们的成功故事",
    aboutPageHeroSub: "致力于质量和客户满意度",
    aboutPageStory: "我们的故事",
    aboutPageStoryText1: "我们是PelețiPro，一家拥有供应高质量可再生燃料传统的公司。凭借超过15年的行业经验，我们已帮助数千名客户为其家庭找到完美的供暖解决方案。",
    aboutPageStoryText2: "我们的理念很简单：质量第一。每袋木颗粒都经过严格测试，以确保符合我们的高标准。我们的木颗粒仅来自经过认证的森林，并经过精心处理以保持木纤维的完整性。",
    aboutPageStoryText3: "如今，我们为能够成为罗马尼亚及其他地区数千个家庭和企业的信任伙伴而感到自豪。我们的承诺保持不变：为每位客户提供经认证质量的木颗粒、快速服务和专业支持。",
    aboutPageValues: "我们的价值观",
    aboutPageVal1Title: "可持续性",
    aboutPageVal1Text: "致力于绿色能源和可再生燃料。每粒木颗粒都是为更清洁的未来做出的选择。",
    aboutPageVal2Title: "效率",
    aboutPageVal2Text: "最大化性能并最小化浪费。我们的木颗粒提供每公斤最佳的热值。",
    aboutPageVal3Title: "可靠性",
    aboutPageVal3Text: "每个包装的一致性。我们的客户准确地知道对PelețiPro的期望。",
    aboutPageVal4Title: "客户支持",
    aboutPageVal4Text: "每个问题都值得快速回答。我们的团队在这里帮助您。",
    aboutPageWhy: "为什么选择PelețiPro?",
    aboutPageWhy1Title: "认证质量",
    aboutPageWhy1Text: "我们的木颗粒符合欧洲DIN+和ISO标准。每批都测试热值、湿度和耐久性。",
    aboutPageWhy2Title: "快速交付",
    aboutPageWhy2Text: "订单在24小时内处理，在48-72小时内交付到大多数地点。每次发货都有追踪。",
    aboutPageWhy3Title: "竞争力价格",
    aboutPageWhy3Text: "我们提供市场上最优价格，对大批量和忠诚客户提供折扣。",
    aboutPageWhy4Title: "专业支持",
    aboutPageWhy4Text: "我们的团队可通过电话、电子邮件和WhatsApp获得。我们说您的语言，理解您的需求。",
    aboutPageWhy5Title: "可持续森林",
    aboutPageWhy5Text: "我们所有供应商都遵守可持续森林管理协议和FSC认证。",
    aboutPageWhy6Title: "满意度保证",
    aboutPageWhy6Text: "如果您不满意，我们提供无忧退货和全额退款。",
    aboutPageQuality: "质量标准",
    aboutPageQualityStat1: "最大湿度，实现最优燃烧",
    aboutPageQualityStat2: "kWh/kg — 最小热值",
    aboutPageQualityStat3: "天然木材，无化学添加剂",
    aboutPageQualityStat4: "欧洲质量认证",
    aboutPageCtaTitle: "准备加入我们的团队?",
    aboutPageCtaText: "探索我们的完整木颗粒范围，为您的家庭找到完美的解决方案。",
    aboutPageShop: "立即购买",
    aboutPageContactBtn: "联系我们",
    footerPayTitle: "支付和交付",
    footerPayText: "支付货到付款或银行转账。大多数地点在48-72小时内交付。",
    about: "关于",
    footerTerms: "条款和条件"
  }
};

// Nume localizate ale limbilor (cum să apară fiecare limbă în contextul unei limbi selectate)
const localizedLanguageNames = {
  ro: { ro: 'Română', en: 'Engleză', de: 'Germană', fr: 'Franceză', es: 'Spaniolă', it: 'Italiană', hu: 'Maghiară', sr: 'Sârbă', pl: 'Poloneză', bg: 'Bulgara', uk: 'Ucrainiană', ru: 'Rusă', zh: 'Chineză' },
  en: { ro: 'Romanian', en: 'English', de: 'German', fr: 'French', es: 'Spanish', it: 'Italian', hu: 'Hungarian', sr: 'Serbian', pl: 'Polish', bg: 'Bulgarian', uk: 'Ukrainian', ru: 'Russian', zh: 'Chinese' },
  de: { ro: 'Rumänisch', en: 'Englisch', de: 'Deutsch', fr: 'Französisch', es: 'Spanisch', it: 'Italienisch', hu: 'Ungarisch', sr: 'Serbisch', pl: 'Polnisch', bg: 'Bulgarisch', uk: 'Ukrainisch', ru: 'Russisch', zh: 'Chinesisch' },
  fr: { ro: 'Roumain', en: 'Anglais', de: 'Allemand', fr: 'Français', es: 'Espagnol', it: 'Italien', hu: 'Hongrois', sr: 'Serbe', pl: 'Polonais', bg: 'Bulgare', uk: 'Ukrainien', ru: 'Russe', zh: 'Chinois' },
  es: { ro: 'Rumano', en: 'Inglés', de: 'Alemán', fr: 'Francés', es: 'Español', it: 'Italiano', hu: 'Húngaro', sr: 'Serbio', pl: 'Polaco', bg: 'Búlgaro', uk: 'Ucraniano', ru: 'Ruso', zh: 'Chino' },
  it: { ro: 'Rumeno', en: 'Inglese', de: 'Tedesco', fr: 'Francese', es: 'Spagnolo', it: 'Italiano', hu: 'Ungherese', sr: 'Serbo', pl: 'Polacco', bg: 'Bulgaro', uk: 'Ucraino', ru: 'Russo', zh: 'Cinese' },
  hu: { ro: 'Román', en: 'Angol', de: 'Német', fr: 'Francia', es: 'Spanyol', it: 'Olasz', hu: 'Magyar', sr: 'Szerb', pl: 'Lengyel', bg: 'Bolgár', uk: 'Ukrán', ru: 'Orosz', zh: 'Kínai' },
  sr: { ro: 'Rumunski', en: 'Engleski', de: 'Nemački', fr: 'Francuski', es: 'Španski', it: 'Italijanski', hu: 'Mađarski', sr: 'Srpski', pl: 'Poljski', bg: 'Bugarski', uk: 'Ukrajinski', ru: 'Ruski', zh: 'Kineski' },
  pl: { ro: 'Rumuński', en: 'Angielski', de: 'Niemiecki', fr: 'Francuski', es: 'Hiszpański', it: 'Włoski', hu: 'Węgierski', sr: 'Serbski', pl: 'Polski', bg: 'Bułgarski', uk: 'Ukraiński', ru: 'Rosyjski', zh: 'Chiński' },
  bg: { ro: 'Румънски', en: 'Английски', de: 'Немски', fr: 'Френски', es: 'Испански', it: 'Италиански', hu: 'Унгарски', sr: 'Сръбски', pl: 'Полски', bg: 'Български', uk: 'Украински', ru: 'Руски', zh: 'Китайски' },
  uk: { ro: 'Румунська', en: 'Англійська', de: 'Німецька', fr: 'Французька', es: 'Іспанська', it: 'Італійська', hu: 'Угорська', sr: 'Сербська', pl: 'Польська', bg: 'Болгарська', uk: 'Українська', ru: 'Російська', zh: 'Китайська' },
  ru: { ro: 'Румынский', en: 'Английский', de: 'Немецкий', fr: 'Французский', es: 'Испанский', it: 'Итальянский', hu: 'Венгерский', sr: 'Сербский', pl: 'Польский', bg: 'Болгарский', uk: 'Украинский', ru: 'Русский', zh: 'Китайский' },
  zh: { ro: '罗马尼亚语', en: '英语', de: '德语', fr: '法语', es: '西班牙语', it: '意大利语', hu: '匈牙利语', sr: '塞尔维亚语', pl: '波兰语', bg: '保加利亚语', uk: '乌克兰语', ru: '俄语', zh: '中文' }
};

// Limba curentă
let currentLang = localStorage.getItem('selectedLang') || 'ro';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('selectedLang', lang);
  updateLanguageDisplay();
  applyTranslations();
}

function updateLanguageDisplay() {
  const langCodes = { ro: 'RO', en: 'EN', de: 'DE', fr: 'FR', es: 'ES', it: 'IT', hu: 'HU', sr: 'SR', pl: 'PL', bg: 'BG', uk: 'UA', ru: 'RU', zh: 'ZH' };
  document.getElementById('langToggle').textContent = (langCodes[currentLang] || 'EN');
  
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;

  // Update navigation
  const navLinks = document.querySelectorAll('.nav a');
  if (navLinks[0]) navLinks[0].textContent = t.prodNav;
  if (navLinks[1]) navLinks[1].textContent = t.aboutNav;
  if (navLinks[2]) navLinks[2].textContent = t.contactNav;

  // Update hero section
  const heroH1 = document.querySelector('.hero-text h1');
  const heroP = document.querySelector('.hero-text p');
  const heroBtn = document.querySelector('.hero-text .btn-primary');
  if (heroH1) heroH1.textContent = t.hero;
  if (heroP) heroP.textContent = t.heroSub;
  if (heroBtn) heroBtn.textContent = t.seeProducts;

  // Update products section
  const prodTitle = document.querySelector('.section-title');
  const prodSub = document.querySelector('.section-sub');
  if (prodTitle) prodTitle.textContent = t.products;
  if (prodSub) prodSub.textContent = t.choose;

  // Update B2B section
  const b2bH2 = document.querySelector('.b2b-inner h2');
  const b2bP = document.querySelector('.b2b-inner p');
  const b2bBtn = document.querySelector('.b2b-inner .btn-accent');
  if (b2bH2) b2bH2.textContent = t.bulkOrders;
  if (b2bP) b2bP.textContent = t.bulkDesc;
  if (b2bBtn) b2bBtn.textContent = t.bulkBtn;

  // Update about section
  const aboutH2 = document.querySelector('.about-content h2');
  const aboutPs = document.querySelectorAll('.about-content p');
  const aboutLis = document.querySelectorAll('.about-content li');
  const aboutBtn = document.querySelector('.about-content .btn-outline');
  if (aboutH2) aboutH2.textContent = t.aboutTitle;
  if (aboutPs[0]) aboutPs[0].textContent = t.aboutDesc;
  if (aboutPs[1]) {
    aboutPs[1].innerHTML = `⚠️ ${t.priceNote.substring(4)}`;
    aboutPs[1].style.color = 'var(--accent)';
    aboutPs[1].style.fontWeight = '600';
  }
  if (aboutLis[0]) aboutLis[0].textContent = t.aboutList1;
  if (aboutLis[1]) aboutLis[1].textContent = t.aboutList2;
  if (aboutLis[2]) aboutLis[2].textContent = t.aboutList3;
  if (aboutLis[3]) aboutLis[3].textContent = t.aboutList4;
  if (aboutLis[4]) aboutLis[4].textContent = t.aboutList5;
  if (aboutBtn) aboutBtn.textContent = t.contactBtn;

  // Update footer
  const footerH3 = document.querySelector('.site-footer h3');
  const footerH4s = document.querySelectorAll('.site-footer h4');
  if (footerH3) footerH3.textContent = 'PelețiPro';
  if (footerH4s[0]) footerH4s[0].textContent = t.footerLinks;
  if (footerH4s[1]) footerH4s[1].textContent = t.payment;
  const footerP = document.querySelector('.site-footer > div > div > div:nth-child(3) > p');
  if (footerP) footerP.textContent = t.paymentDesc;

  // Update cart
  const cartH3 = document.querySelector('.cart-header h3');
  const cartEmpty = document.querySelector('.cart-empty');
  const cartLabel = document.querySelector('.cart-total-label');
  const checkoutBtn = document.querySelector('.cart-checkout');
  if (cartH3) cartH3.textContent = t.cart;
  if (cartEmpty) cartEmpty.textContent = t.cartEmpty;
  if (cartLabel) cartLabel.textContent = t.total;
  if (checkoutBtn) checkoutBtn.textContent = t.continue;

  document.documentElement.lang = currentLang;

  // Update the language menu labels to show language names localized to currentLang
  document.querySelectorAll('.lang-option').forEach(btn => {
    const code = btn.dataset.lang;
    const flag = btn.dataset.flag || btn.textContent.trim().split(' ')[0];
    const nameMap = localizedLanguageNames[currentLang] || localizedLanguageNames['en'];
    const displayName = (nameMap && nameMap[code]) ? nameMap[code] : code.toUpperCase();
    btn.innerHTML = `${flag} ${displayName}`;
  });
  // Re-render product cards so names/descriptions update
  renderProducts();
}

// Event listeners pentru selectorul de limbă
document.getElementById('langToggle')?.addEventListener('click', () => {
  document.getElementById('langMenu').classList.toggle('active');
});

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', (e) => {
    setLanguage(e.target.dataset.lang);
    document.getElementById('langMenu').classList.remove('active');
  });
});

// Generare imagini produse cu Canvas
function generateProductImage(label, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');
  
  // Fundal gradient
  const grad = ctx.createLinearGradient(0, 0, 600, 400);
  grad.addColorStop(0, color);
  grad.addColorStop(1, '#333');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 600, 400);
  
  // Sac de peleți (dreptunghi rotunjit)
  ctx.fillStyle = '#8B7355';
  ctx.beginPath();
  ctx.roundRect(100, 80, 400, 250, [20, 20, 20, 20]);
  ctx.fill();
  
  // Parte superioară (deschisă)
  ctx.fillStyle = '#A0826D';
  ctx.beginPath();
  ctx.ellipse(300, 80, 200, 40, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Text principal
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('PELEȚI', 300, 200);
  
  // Text secundar
  ctx.fillStyle = '#FFD700';
  ctx.font = '24px Arial';
  ctx.fillText(label, 300, 250);
  
  return canvas.toDataURL();
}

// Date produse cu imagini generate
// Product translations for multiple languages. If a language is missing, fallback to EN.
const productI18n = {
  1: {
    ro: { name: "Pellet Premium Fag 6mm", desc: "100% lemn de fag, umiditate <10%, putere calorică 4.8 kWh/kg. Ardere liniștită și eficientă." },
    en: { name: "Premium Beech Pellet 6mm", desc: "100% beech wood, moisture <10%, calorific value 4.8 kWh/kg. Quiet and efficient burn." },
    de: { name: "Premium Buche Pellet 6mm", desc: "100% Buche, Feuchte <10%, Heizwert 4,8 kWh/kg. Ruhige und effiziente Verbrennung." },
    fr: { name: "Granulé Hêtre Premium 6mm", desc: "100% hêtre, humidité <10%, pouvoir calorifique 4,8 kWh/kg. Combustion silencieuse et efficace." },
    es: { name: "Pellet Haya Premium 6mm", desc: "100% haya, humedad <10%, poder calorífico 4.8 kWh/kg. Combustión silenciosa y eficiente." },
    it: { name: "Pellet Faggio Premium 6mm", desc: "100% faggio, umidità <10%, potere calorifico 4,8 kWh/kg. Combustione silenziosa ed efficiente." },
    hu: { name: "Prémium Bükk Pellet 6mm", desc: "100% bükkfa, nedvesség <10%, fűtőérték 4,8 kWh/kg. Csendes és hatékony égés." },
    sr: { name: "Premium Bukova Pellett 6mm", desc: "100% bukva, vlažnost <10%, toplotna vrednost 4.8 kWh/kg. Tiho i efikasno sagorevanje." },
    pl: { name: "Pellet Bukowy Premium 6mm", desc: "100% buk, wilgotność <10%, wartość opałowa 4,8 kWh/kg. Ciche i efektywne spalanie." },
    bg: { name: "Пелети Бука Премиум 6mm", desc: "100% бук, влажност <10%, калоричност 4.8 kWh/kg. Тиха и ефективна горене." },
    uk: { name: "Пелети Бук Преміум 6мм", desc: "100% бук, вологість <10%, теплова потужність 4.8 kWh/kg. Тихе і ефективне горіння." },
    ru: { name: "Пеллеты Бука Премиум 6мм", desc: "100% бук, влажность <10%, теплотворность 4.8 kWh/kg. Тихое и эффективное горение." },
    zh: { name: "优质山毛榉颗粒6mm", desc: "100% 山毛榉，含水量 <10%，热值 4.8 kWh/kg。燃烧安静且高效。" }
  },
  2: {
    ro: { name: "Pellet Premium Brad 6mm", desc: "Lemn de brad selectat, certificat EN+A1. Ideal pentru centrale termice și sobe. Fără aditivi." },
    en: { name: "Premium Spruce Pellet 6mm", desc: "Selected spruce wood, EN+A1 certified. Ideal for boilers and stoves. No additives." },
    de: { name: "Premium Fichten Pellet 6mm", desc: "Ausgewählte Fichte, EN+A1 zertifiziert. Ideal für Heizkessel und Öfen. Ohne Zusätze." },
    fr: { name: "Granulé Épicéa Premium 6mm", desc: "Épicéa sélectionné, certifié EN+A1. Idéal pour chaudières et poêles. Sans additifs." },
    es: { name: "Pellet Abeto Premium 6mm", desc: "Abeto seleccionado, certificado EN+A1. Ideal para calderas y estufas. Sin aditivos." },
    it: { name: "Pellet Abete Premium 6mm", desc: "Abete selezionato, certificato EN+A1. Ideale per caldaie e stufe. Senza additivi." },
    hu: { name: "Prémium Lucfenyő Pellet 6mm", desc: "Kiválasztott lucfenyő, EN+A1 tanúsítvány. Kazánokhoz és kályhákhoz ideális. Adalékanyag nélküli." },
    sr: { name: "Premium Smrek Pellett 6mm", desc: "Izabrani smrek, EN+A1 sertifikat. Idealno za kotlove i peći. Bez aditiva." },
    pl: { name: "Pellet Świerkowy Premium 6mm", desc: "Wyselekcjonowany świerk, certyfikat EN+A1. Idealny do kotłów i pieców. Bez dodatków." },
    bg: { name: "Пелети Ела Премиум 6mm", desc: "Подбран ела, сертифициран EN+A1. Идеален за котли и печки. Без добавки." },
    uk: { name: "Пелети Ялина Преміум 6мм", desc: "Обернена ялина, сертифіковано EN+A1. Ідеально для котлів і печей. Без добавок." },
    ru: { name: "Пеллеты Ели Премиум 6мм", desc: "Отборная ель, сертификация EN+A1. Идеально для котлов и печей. Без добавок." },
    zh: { name: "优质云杉颗粒6mm", desc: "精选云杉，EN+A1 认证。适用于锅炉和炉具。无添加剂。" }
  },
  3: {
    ro: { name: "Pellet Eco Mix 8mm", desc: "Mix de lemn dur și moale, 8mm granulă. Preț economic fără compromisuri de calitate." },
    en: { name: "Eco Mix Pellet 8mm", desc: "Blend of hardwood and softwood, 8mm granule. Economical price without quality compromise." },
    de: { name: "Eco Mix Pellet 8mm", desc: "Mischung aus Hartholz und Nadelholz, 8mm. Wirtschaftlicher Preis bei guter Qualität." },
    fr: { name: "Granulé Éco Mix 8mm", desc: "Mélange feuillus et résineux, granulé 8mm. Prix économique sans compromis de qualité." },
    es: { name: "Pellet Eco Mix 8mm", desc: "Mezcla de maderas duras y blandas, 8mm. Precio económico sin comprometer calidad." },
    it: { name: "Pellet Eco Mix 8mm", desc: "Miscela di legni duri e morbidi, 8mm. Prezzo economico senza rinunciare alla qualità." },
    hu: { name: "Eco Mix Pellet 8mm", desc: "Kemény- és puhafa keverék, 8mm. Gazdaságos ár, megtartva a minőséget." },
    sr: { name: "Eco Mix Pellet 8mm", desc: "Mešavina tvrdih i mekih vrsta drveta, 8mm. Povljna cena bez kompromisa u kvalitetu." },
    pl: { name: "Pellet Eco Mix 8mm", desc: "Mieszanka drewna twardego i miękkiego, 8mm. Ekonomiczna cena bez utraty jakości." },
    bg: { name: "Пелети Еко Микс 8mm", desc: "Смес от твърда и мека дървесина, 8mm. Икономична цена без компромис в качеството." },
    uk: { name: "Пелети Еко Мікс 8мм", desc: "Суміш твердих і м’яких порід, 8мм. Економічна ціна без втрати якості." },
    ru: { name: "Пеллет Eco Mix 8mm", desc: "Смесь твердых и мягких пород, 8мм. Экономичная цена без потери качества." },
    zh: { name: "生态混合颗粒8mm", desc: "硬木与软木混合，8mm。价格经济，质量可靠。" }
  },
  4: {
    ro: { name: "Pellet Industrial 10mm", desc: "Granulă 10mm pentru centrale de putere mare. Ambalaj rezistent, livrare în paleți." },
    en: { name: "Industrial Pellet 10mm", desc: "10mm granules for high-capacity plants. Durable packaging, palletized delivery." },
    de: { name: "Industrie Pellet 10mm", desc: "10mm Pellets für leistungsstarke Anlagen. Robuste Verpackung, palettierte Lieferung." },
    fr: { name: "Granulé Industriel 10mm", desc: "Granulé 10mm pour installations de grande puissance. Emballage robuste, livraison sur palette." },
    es: { name: "Pellet Industrial 10mm", desc: "Gránulos de 10mm para plantas de alta capacidad. Embalaje resistente, entrega paletizada." },
    it: { name: "Pellet Industriale 10mm", desc: "Granuli 10mm per impianti ad alta capacità. Imballaggio resistente, consegna su pallet." },
    hu: { name: "Ipari Pellet 10mm", desc: "10mm granulátum nagy teljesítményű rendszerekhez. Tartós csomagolás, raklapos szállítás." },
    sr: { name: "Industrijski Pellet 10mm", desc: "10mm granulacija za postrojenja velike snage. Čvrsto pakovanje, isporuka na paletama." },
    pl: { name: "Pellet Przemysłowy 10mm", desc: "Granulki 10mm dla instalacji wysokiej mocy. Trwałe opakowanie, dostawa na paletach." },
    bg: { name: "Индустриални Пелети 10mm", desc: "10mm гранули за големи инсталации. Здраво опаковане, доставка на палети." },
    uk: { name: "Пелети Промислові 10мм", desc: "Гранули 10мм для потужних установок. Міцна упаковка, доставка на піддонах." },
    ru: { name: "Пеллеты Промышленные 10мм", desc: "Гранулы 10мм для мощных установок. Прочная упаковка, доставка палетами." },
    zh: { name: "工业用颗粒10mm", desc: "10mm 颗粒，适用于高功率装置。结实包装，托盘交付。" }
  },
  5: {
    ro: { name: "Pellet Select Fag Premium", desc: "Calitate superioară, umiditate controlată (<8%), certificat ISO. Ardere aproape fără scrum." },
    en: { name: "Select Premium Beech", desc: "Top quality, controlled moisture (<8%), ISO certified. Nearly ash-free combustion." },
    de: { name: "Select Premium Buche", desc: "Top-Qualität, Feuchte <8%, ISO-zertifiziert. Fast aschefreie Verbrennung." },
    fr: { name: "Sélection Hêtre Premium", desc: "Qualité supérieure, humidité <8%, certifié ISO. Combustion presque sans cendre." },
    es: { name: "Select Haya Premium", desc: "Calidad superior, humedad <8%, certificado ISO. Combustión casi sin ceniza." },
    it: { name: "Select Faggio Premium", desc: "Qualità superiore, umidità <8%, certificato ISO. Combustione quasi priva di cenere." },
    hu: { name: "Select Prémium Bükk", desc: "Kiváló minőség, nedvesség <8%, ISO tanúsítvány. Szinte hamu nélküli égés." },
    sr: { name: "Select Premium Bukva", desc: "Vrhunski kvalitet, vlažnost <8%, ISO sertifikat. Gotovo bez pepela." },
    pl: { name: "Select Premium Buk", desc: "Najwyższa jakość, wilgotność <8%, certyfikat ISO. Prawie bez popiołu." },
    bg: { name: "Select Бука Премиум", desc: "Високо качество, влажност <8%, ISO сертификат. Почти без пепел при горене." },
    uk: { name: "Select Бук Преміум", desc: "Висока якість, вологість <8%, сертифікат ISO. Майже без попелу при горінні." },
    ru: { name: "Select Бук Премиум", desc: "Высокое качество, влажность <8%, сертификат ISO. Практически без золы при сгорании." },
    zh: { name: "精选优质山毛榉", desc: "优质，含水量 <8%，ISO 认证。燃烧几乎无灰。" }
  },
  6: {
    ro: { name: "Pellet Extra 6mm Stejar", desc: "Lemn de stejar, duritate înaltă, putere calorică 4.9 kWh/kg. Ardere constantă 8+ ore." },
    en: { name: "Extra Oak Pellet 6mm", desc: "Oak wood, high density, calorific value 4.9 kWh/kg. Steady burn 8+ hours." },
    de: { name: "Extra Eiche Pellet 6mm", desc: "Eichenholz, hohe Dichte, Heizwert 4,9 kWh/kg. Gleichmäßige Verbrennung 8+ Stunden." },
    fr: { name: "Granulé Chêne Extra 6mm", desc: "Chêne, haute densité, pouvoir calorifique 4,9 kWh/kg. Combustion stable 8+ heures." },
    es: { name: "Pellet Roble Extra 6mm", desc: "Roble, alta densidad, poder calorífico 4.9 kWh/kg. Combustión constante 8+ horas." },
    it: { name: "Pellet Quercia Extra 6mm", desc: "Quercia, alta densità, potere calorifico 4,9 kWh/kg. Combustione costante 8+ ore." },
    hu: { name: "Extra Tölgy Pellet 6mm", desc: "Tölgyfa, nagy sűrűség, fűtőérték 4,9 kWh/kg. Egyenletes égés 8+ órán át." },
    sr: { name: "Extra Hrast Pellet 6mm", desc: "Hrast, visoka gustina, toplotna vrednost 4.9 kWh/kg. Stabilno sagorevanje 8+ sati." },
    pl: { name: "Extra Dąb Pellet 6mm", desc: "Dąb, wysoka gęstość, wartość opałowa 4,9 kWh/kg. Stałe spalanie 8+ godzin." },
    bg: { name: "Екстра Дъб Пелет 6mm", desc: "Дъб, висока плътност, калоричност 4.9 kWh/kg. Постоянно горене 8+ часа." },
    uk: { name: "Extra Дуб Пелети 6мм", desc: "Дуб, висока щільність, теплова потужність 4.9 kWh/kg. Стійке горіння 8+ годин." },
    ru: { name: "Extra Дуб Пеллет 6мм", desc: "Дуб, высокая плотность, теплотворность 4.9 kWh/kg. Равномерное горение 8+ часов." },
    zh: { name: "特级橡木颗粒6mm", desc: "橡木，高密度，热值 4.9 kWh/kg。持续燃烧 8+ 小时。" }
  },
  7: {
    ro: { name: "Pellet Premium Ecosmart", desc: "Certificat A1, lemn 100% reciclat din industrie. Eco-friendly și performant." },
    en: { name: "Premium Ecosmart Pellet", desc: "A1 certified, 100% recycled wood from industry. Eco-friendly and performant." },
    de: { name: "Premium Ecosmart Pellet", desc: "A1 zertifiziert, 100% recyceltes Holz aus der Industrie. Umweltfreundlich und leistungsstark." },
    fr: { name: "Granulé Ecosmart Premium", desc: "Certifié A1, bois 100% recyclé industriel. Éco-responsable et performant." },
    es: { name: "Pellet Ecosmart Premium", desc: "Certificado A1, madera 100% reciclada industrial. Ecológico y eficiente." },
    it: { name: "Pellet Ecosmart Premium", desc: "Certificato A1, legno 100% riciclato. Ecologico e performante." },
    hu: { name: "Prémium Ecosmart Pellet", desc: "A1 tanúsítvány, 100% ipari újrahasznosított fa. Környezetbarát és teljesítményorientált." },
    sr: { name: "Premium Ecosmart Pellet", desc: "A1 sertifikovan, 100% reciklirano drvo iz industrije. Ekološki i efikasan." },
    pl: { name: "Pellet Ecosmart Premium", desc: "Certyfikat A1, 100% drewno z recyklingu przemysłowego. Ekologiczne i wydajne." },
    bg: { name: "Ecosmart Пелети Премиум", desc: "Сертифицирано A1, 100% рециклирана дървесина от индустрията. Еко и ефективно." },
    uk: { name: "Ecosmart Пелети Преміум", desc: "Сертифікат A1, 100% перероблена деревина з промисловості. Екологічно та ефективно." },
    ru: { name: "Ecosmart Пеллеты Премиум", desc: "Сертифицировано A1, 100% переработанная древесина. Экологично и эффективно." },
    zh: { name: "Ecosmart 优质颗粒", desc: "A1 认证，100% 工业回收木材。环保且高效。" }
  },
  8: {
    ro: { name: "Pellet Compact 8mm Economy", desc: "Granulă mare (8mm), depozitare eficientă. Perfect pentru firme și distribuitori." },
    en: { name: "Compact Pellet 8mm Economy", desc: "Larger 8mm granules, efficient storage. Perfect for companies and distributors." },
    de: { name: "Compact Pellet 8mm Economy", desc: "Größere 8mm Pellets, platzsparende Lagerung. Ideal für Firmen und Händler." },
    fr: { name: "Granulé Compact 8mm Éco", desc: "Granulés 8mm, stockage efficace. Parfait pour entreprises et distributeurs." },
    es: { name: "Pellet Compact 8mm Economía", desc: "Gránulos 8mm, almacenamiento eficiente. Perfecto para empresas y distribuidores." },
    it: { name: "Pellet Compact 8mm Economy", desc: "Granuli 8mm, stoccaggio efficiente. Perfetto per aziende e distributori." },
    hu: { name: "Compact Pellet 8mm Economy", desc: "8mm granulátum, hatékony tárolás. Cégeknek és forgalmazóknak ideális." },
    sr: { name: "Compact Pellet 8mm Economy", desc: "Veća 8mm granulacija, efikasno skladištenje. Pogodno za firme i distributere." },
    pl: { name: "Pellet Compact 8mm Economy", desc: "Większe granulki 8mm, efektywne przechowywanie. Idealne dla firm i dystrybutorów." },
    bg: { name: "Компактни Пелети 8mm Economy", desc: "По-големи 8mm гранули, ефективно съхранение. Перфектни за фирми и дистрибутори." },
    uk: { name: "Compact Пелети 8мм Economy", desc: "Більші гранули 8мм, ефективне зберігання. Ідеально для компаній і дистриб’юторів." },
    ru: { name: "Компактные Пеллеты 8mm Economy", desc: "Крупные гранулы 8мм, экономичное хранение. Подходит для компаний и дистрибьюторов." },
    zh: { name: "紧凑型颗粒8mm 经济装", desc: "8mm 大颗粒，存储高效。适合企业与分销商。" }
  },
  9: {
    ro: { name: "Pellet Bio 100% Natural", desc: "Fără aditivi chimici, lemn provenit din păduri certificate. Combustibil pur și sigur." },
    en: { name: "Bio Pellet 100% Natural", desc: "No chemical additives, wood from certified forests. Pure and safe fuel." },
    de: { name: "Bio Pellet 100% Natural", desc: "Keine chemischen Zusatzstoffe, Holz aus zertifizierten Wäldern. Reiner und sicherer Brennstoff." },
    fr: { name: "Granulé Bio 100% Naturel", desc: "Sans additifs chimiques, bois issu de forêts certifiées. Combustible pur et sûr." },
    es: { name: "Pellet Bio 100% Natural", desc: "Sin aditivos químicos, madera de bosques certificados. Combustible puro y seguro." },
    it: { name: "Pellet Bio 100% Naturale", desc: "Senza additivi chimici, legno proveniente da foreste certificate. Combustibile puro e sicuro." },
    hu: { name: "Bio Pellet 100% Természetes", desc: "Nincsenek kémiai adalékok, tanúsított erdőkből származó fa. Tiszta és biztonságos tüzelő." },
    sr: { name: "Bio Pellet 100% Prirodan", desc: "Bez hemijskih aditiva, drvo iz sertifikovanih šuma. Čisto i sigurno gorivo." },
    pl: { name: "Pellet Bio 100% Natural", desc: "Bez dodatków chemicznych, drewno z certyfikowanych lasów. Czyste i bezpieczne paliwo." },
    bg: { name: "Био Пелети 100% Натурални", desc: "Без химични добавки, дърво от сертифицирани гори. Чисто и безопасно гориво." },
    uk: { name: "Біо Пелети 100% Натуральні", desc: "Без хімічних добавок, деревина з сертифікованих лісів. Чисте та безпечне паливо." },
    ru: { name: "Био Пеллеты 100% Натуральные", desc: "Без химических добавок, древесина из сертифицированных лесов. Чистое и безопасное топливо." },
    zh: { name: "生物颗粒100%天然", desc: "无化学添加剂，来自认证森林的木材。纯净且安全的燃料。" }
  },
  10: {
    ro: { name: "Pellet Value 8mm Standard", desc: "Preț avantajos pentru consum casnic. Calitate certificată EN+B. Raport preț-performanță optim." },
    en: { name: "Value Pellet 8mm Standard", desc: "Great value for household use. EN+B certified quality. Optimal price-performance." },
    de: { name: "Value Pellet 8mm Standard", desc: "Gutes Preis-Leistungs-Verhältnis für den Haushalt. EN+B zertifizierte Qualität." },
    fr: { name: "Granulé Value 8mm Standard", desc: "Bon rapport qualité-prix pour usage domestique. Qualité certifiée EN+B." },
    es: { name: "Pellet Value 8mm Standard", desc: "Buena relación calidad-precio para uso doméstico. Calidad certificada EN+B." },
    it: { name: "Pellet Value 8mm Standard", desc: "Ottimo rapporto qualità-prezzo per uso domestico. Qualità certificata EN+B." },
    hu: { name: "Value Pellet 8mm Standard", desc: "Kiváló ár-érték arány háztartási használatra. EN+B tanúsított minőség." },
    sr: { name: "Value Pellet 8mm Standard", desc: "Dobar odnos cene i kvaliteta za domaću upotrebu. EN+B sertifikovana kvaliteta." },
    pl: { name: "Value Pellet 8mm Standard", desc: "Doskonały stosunek jakości do ceny do użytku domowego. Jakość z certyfikatem EN+B." },
    bg: { name: "Value Пелети 8mm Standard", desc: "Добро съотношение цена-качество за дома. Сертифицирано EN+B качество." },
    uk: { name: "Value Пелети 8мм Standard", desc: "Відмінне співвідношення ціни і якості для домашнього використання. Сертифіковано EN+B." },
    ru: { name: "Value Пеллеты 8mm Standard", desc: "Отличное соотношение цена/качество для домашнего использования. Сертификация EN+B." },
    zh: { name: "Value 颗粒8mm 标准", desc: "家用优良性价比。EN+B 认证质量。" }
  }
};

const products = [
  { id:1, price:85.00, color:"#8B4513", badge:"Popular" },
  { id:2, price:79.99, color:"#A0522D", badge:"Nou" },
  { id:3, price:72.50, color:"#704214" },
  { id:4, price:68.00, color:"#654321" },
  { id:5, price:89.99, color:"#8B6914", badge:"Nou" },
  { id:6, price:82.50, color:"#6B4423" },
  { id:7, price:76.00, color:"#795432", badge:"Premium" },
  { id:8, price:69.99, color:"#8B5A2B" },
  { id:9, price:81.00, color:"#704210" },
  { id:10, price:65.50, color:"#5C4033" }
];

// Referințe DOM
const grid = document.getElementById('productsGrid');
const cartCountEl = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');

// Stocare coș în localStorage
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
updateCartCount();
renderCart();

// Generează carduri produse
function renderProducts(){
  grid.innerHTML = '';
  products.forEach(prod => {
    const card = document.createElement('article');
    card.className = 'card';
    // Select localized name/desc
    const i18n = productI18n[prod.id] || {};
    const localized = i18n[currentLang] || i18n['en'] || {};
    const displayName = localized.name || prod.name || ('Produs ' + prod.id);
    const displayDesc = localized.desc || prod.desc || '';

    // Generează imagine pentru produs (folosim primele două cuvinte din displayName)
    const imgLabel = displayName.split(' ').slice(0,2).join(' ');
    const prodImg = generateProductImage(imgLabel, prod.color);
    
    let badgeHTML = '';
    if(prod.badge) {
      badgeHTML = `<div class="badge">${prod.badge}</div>`;
    }
    
    card.innerHTML = `
      <div class="card-media">
        ${badgeHTML}
        <img src="${prodImg}" alt="${prod.name}">
      </div>
      <div>
        <div class="card-title">${displayName}</div>
        <div class="card-desc">${displayDesc}</div>
      </div>
      <div class="card-footer">
        <div class="price">${prod.price.toFixed(2)} RON</div>
        <button class="buy-btn" data-id="${prod.id}">
          ${translations[currentLang]?.cart ? translations[currentLang].cart.replace('Coșul', 'Cumpără') : 'Cumpără'}
          <span class="ripple"></span>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}
renderProducts();

// Eveniment global pentru butoane Cumpără
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.buy-btn');
  if(!btn) return;
  
  const id = Number(btn.dataset.id);
  const product = products.find(p=>p.id===id);
  if(!product) return;

  // Ripple effect
  const ripple = btn.querySelector('.ripple');
  if(ripple){
    const rect = btn.getBoundingClientRect();
    const clickX = (e.clientX || rect.left + rect.width/2) - rect.left;
    const clickY = (e.clientY || rect.top + rect.height/2) - rect.top;
    ripple.style.left = `${clickX - 60}px`;
    ripple.style.top = `${clickY - 60}px`;
    ripple.style.opacity = '1';
    ripple.style.transform = 'scale(0)';
    setTimeout(()=>{ ripple.style.transform = 'scale(1)'; ripple.style.opacity = '0'; }, 10);
  }

  const localizedName = (productI18n[id] && (productI18n[id][currentLang]?.name || productI18n[id].en?.name)) || (`Produs ${id}`);
  addToCart(product, localizedName);
  showToast(`${localizedName} a fost adăugat în coș`);
  animateCartBtn();
});

// Adaugă produs în coș
function addToCart(product, displayName){
  const found = cart.find(i => i.id === product.id);
  if(found) found.qty += 1;
  else cart.push({ id: product.id, name: displayName, price: product.price, qty:1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Actualizează numărătorul din header
function updateCartCount(){
  const count = cart.reduce((s,i)=>s+i.qty,0);
  cartCountEl.textContent = count;
}

// Afișează itemele din coș
function renderCart(){
  if(cart.length === 0){
    cartItemsContainer.innerHTML = '<div class="cart-empty">Coșul este gol</div>';
    cartTotalPrice.textContent = '0 RON';
    return;
  }

  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toFixed(2)} RON</div>
      </div>
      <div class="cart-item-qty">${item.qty}x</div>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price * item.qty;
  });

  cartTotalPrice.textContent = total.toFixed(2) + ' RON';
}

// Animație la click pe butonul coș
function animateCartBtn(){
  if(!cartBtn) return;
  cartBtn.animate([{ transform:'scale(1)' }, { transform:'scale(1.08)' }, { transform:'scale(1)' }], { duration:220, easing:'ease-out' });
}

// Toast notificare
let toastTimer = null;
function showToast(txt){
  toast.textContent = txt;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 2200);
}

// Deschide/Închide cart sidebar
cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open');
});

cartClose.addEventListener('click', () => {
  cartSidebar.classList.remove('open');
});

// Închide cart la click în afara
document.addEventListener('click', (e) => {
  if(!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)){
    cartSidebar.classList.remove('open');
  }
});

// Fade-in la scroll cu IntersectionObserver
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// Smooth scroll pentru link-uri din header
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (ev)=>{
    const href = a.getAttribute('href');
    if(href === '#') return;
    const target = document.querySelector(href);
    if(target){ ev.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); cartSidebar.classList.remove('open'); }
  });
});

// Actualizează anul în footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize language on page load
updateLanguageDisplay();
applyTranslations();

// Close language menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-selector')) {
    document.getElementById('langMenu')?.classList.remove('active');
  }
});
