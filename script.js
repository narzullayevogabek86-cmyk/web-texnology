const allQuestionsData = [
{ question: "Web texnologiyalar fanining asosiy maqsadi nima?", options: ["Zamonaviy veb-ilovalarni yaratishning nazariy va amaliy asoslarini o'rgatish.", "Faqat kompyuterning operatsion tizimini boshqarish, nazariy va amaliy asoslarini o'rgatish.", "Faqat ma'lumotlar bazasini loyihalash qoidalari.", "Mobil qurilmalar uchun dasturlashni o'rgatish."], correctText: "Zamonaviy veb-ilovalarni yaratishning nazariy va amaliy asoslarini o'rgatish." },
            { question: "Web-sayt nima?", options: ["Umumiy mavzu, uslub va navigatsiya orqali bog'langan web-sahifalar to'plami.", "Faqat bitta kompyuterning xotira qismi, Tarmoq kabellarini ulash usuli, Ma'lumotlarni shifrlash protokoli.", "Tarmoq kabellarini ulash usuli.", "Ma'lumotlarni shifrlash protokoli."], correctText: "Umumiy mavzu, uslub va navigatsiya orqali bog'langan web-sahifalar to'plami." },
            { question: "Web-serverning asosiy vazifasi nima?", options: ["Mijoz (brauzer) so'rovlariga javoban web-sahifalar va resurslarni taqdim etish.", "Faqat ma'lumotlarni uzoq muddat saqlash.", "Faqat kompyuterga quvvat berish.", "Dasturlash tillarini o'rganish, ma'lumotlarni uzoq muddat saqlash va web-sahifalar va resurslarni taqdim etish."], correctText: "Mijoz (brauzer) so'rovlariga javoban web-sahifalar va resurslarni taqdim etish." },
            { question: "HTML nima uchun ishlatiladi?", options: ["Web-sahifaning tuzilmasini (kontentini) belgilash va belgilash (markup) uchun.", "Web-sahifaning tashqi ko'rinishini sozlash uchun.", "Web-sahifaga dinamiklik berish uchun.", "Ma'lumotlar bazasini boshqarish uchun."], correctText: "Web-sahifaning tuzilmasini (kontentini) belgilash va belgilash (markup) uchun." },
            { question: "HTML hujjati qaysi e'lon bilan boshlanishi kerak?", options: ["!DOCTYPE html e'loni.", "start tegi.", "html asosiy tegi.", "document e'loni."], correctText: "!DOCTYPE html e'loni." },
            { question: "HTML da sarlavha (heading) tegining eng kattasi qaysi?", options: ["h1", "h9", "h6", "head"], correctText: "h1" },
            { question: "HTML da abzas (paragraph) yaratish uchun qaysi teg ishlatiladi?", options: ["p", "pr", "tab", "par"], correctText: "p" },
            { question: "Web-sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?", options: ["img (source va alt atributlari bilan).", "picture (link atributi bilan).", "image (source atributi bilan).", "photo (url atributi bilan)."], correctText: "img (source va alt atributlari bilan)." },
            { question: "HTML da bog'lanish (link) yaratish uchun qaysi teg ishlatiladi?", options: ["a (href atributi bilan).", "l", "link", "href"], correctText: "a (href atributi bilan)." },
            { question: "HTML hujjatining metama'lumotlari (masalan, sarlavha) qayerda joylashadi?", options: ["head teglari orasida.", "body teglari orasida.", "html teglari orasida.", "title teglari orasida."], correctText: "head teglari orasida." },
            { question: "HTML da tartiblangan ro'yxat (numbered list) yaratish uchun qaysi teg ishlatiladi?", options: ["ol", "ul", "list", "dl"], correctText: "ol" },
            { question: "Web-sahifa nima?", options: ["Internetda ko'rsatish uchun mo'ljallangan matn, rasm va boshqa resurslarni o'z ichiga olgan hujjat.", "Faqat dasturlash uchun ishlatiladigan vosita.", "Ma'lumotlar bazasi bilan ishlash qoidalari.", "Kompyuter qurilmalarining to'plami."], correctText: "Internetda ko'rsatish uchun mo'ljallangan matn, rasm va boshqa resurslarni o'z ichiga olgan hujjat." },
            { question: "Web-sahifalarni ko'rish uchun ishlatiladigan dastur nima deb ataladi?", options: ["Brauzer (Browser).", "Web-server.", "PHP interpreter.", "Ma'lumotlar bazasi."], correctText: "Brauzer (Browser)." },
            { question: "HTML da satr uzilishini (line break) yaratish uchun qaysi teg ishlatiladi?", options: ["br", "lb", "break", "hr"], correctText: "br" },
            { question: "body tegi qanday ma'lumotlarni o'z ichiga oladi?", options: ["Brauzerda to'g'ridan-to'g'ri ko'rinadigan barcha kontent (matn, rasm, linklar).", "Sahifaning sarlavhasi va metama'lumotlari.", "Sahifaning uslub (style) belgilari.", "Dasturlash tilidagi kodlarning o'zi."], correctText: "Brauzerda to'g'ridan-to'g'ri ko'rinadigan barcha kontent (matn, rasm, linklar)." },
            { question: "CSS nima uchun ishlatiladi?", options: ["HTML elementlarining tashqi ko'rinishi va joylashuvini belgilash uchun.", "Web-sahifaning tuzilmasini yaratish uchun.", "Ma'lumotlar bazasini so'rovlar yuborish uchun.", "Mijoz tomonida dinamik harakatlarni qo'shish uchun."], correctText: "HTML elementlarining tashqi ko'rinishi va joylashuvini belgilash uchun." },
            { question: "CSS ning to'liq nomi nima?", options: ["Cascading Style Sheets (Kaskadli jadval stillari).", "Complete System Styles.", "Computer Server Software.", "Common Syntax Styles."], correctText: "Cascading Style Sheets (Kaskadli jadval stillari)." },
            { question: "CSS ni HTML hujjatga joylashtirishning eng tavsiya etilgan usuli qaysi?", options: ["Tashqi stil jadvali (External Style Sheet).", "Ichki stil (Internal Style).", "Satr ichi stil (Inline Style).", "JavaScript orqali."], correctText: "Tashqi stil jadvali (External Style Sheet)." },
            { question: "Tashqi stil jadvalini ulash uchun HTML dagi qaysi teg ishlatiladi?", options: ["link (rel=\"stylesheet\" va href atributlari bilan).", "style (src atributi bilan).", "stylesheet (url atributi bilan).", "import (style atributi bilan)."], correctText: "link (rel=\"stylesheet\" va href atributlari bilan)." },
            { question: "CSS da klass (class) selektori qanday belgilanadi?", options: ["Nuqta (.) belgisi bilan, masalan: .qizil.", "Panjara (#) belgisi bilan, masalan: #asosiy.", "Tek nomi bilan, masalan: p.", "Yulduzcha (*) belgisi bilan."], correctText: "Nuqta (.) belgisi bilan, masalan: .qizil." },
            { question: "CSS da identifikator (ID) selektori qanday belgilanadi?", options: ["Panjara (#) belgisi bilan, masalan: #menu.", "Nuqta (.) belgisi bilan, masalan: .block.", "Dollar ($) belgisi bilan.", "Tek nomi bilan, masalan: body."], correctText: "Panjara (#) belgisi bilan, masalan: #menu." },
            { question: "CSS da shriftning rangini belgilash uchun qaysi xususiyat (property) ishlatiladi?", options: ["color", "background-color", "font-style", "text-align"], correctText: "color" },
            { question: "CSS da elementning orqa fon (background) rangini belgilash uchun qaysi xususiyat ishlatiladi?", options: ["background-color", "color", "bg-color", "text-color"], correctText: "background-color" },
            { question: "CSS da elementning ichki chekinishini (padding) belgilash nima uchun kerak?", options: ["Element kontenti atrofidagi bo'sh joyni yaratish uchun.", "Elementning tashqi chegarasini belgilash uchun.", "Elementning qalinligini belgilash uchun.", "Elementni boshqa joyga ko'chirish uchun."], correctText: "Element kontenti atrofidagi bo'sh joyni yaratish uchun." },
            { question: "CSS da elementga tashqi chegara (margin) berish nima uchun kerak?", options: ["Element va boshqa elementlar o'rtasida bo'sh joy yaratish uchun.", "Elementning ichki chekinishini belgilash uchun.", "Elementning kengligini belgilash uchun.", "Element kontentini rangini o'zgartirish uchun."], correctText: "Element va boshqa elementlar o'rtasida bo'sh joy yaratish uchun." },
            { question: "CSS da matnni markazga joylashtirish uchun qaysi xususiyat ishlatiladi?", options: ["text-align: center;", "align: center;", "text-position: center;", "justify: center;"], correctText: "text-align: center;" },
            { question: "CSS da stil qoidasining eng yuqori ustuvorligi (precedence) nimaga beriladi?", options: ["Satr ichi stilga (Inline style).", "Tashqi stil jadvaliga.", "Ichki stilga (Internal style).", "Tek nomi selektoriga."], correctText: "Satr ichi stilga (Inline style)." },
            { question: "Qaysi CSS xususiyati elementning balandligini belgilaydi?", options: ["height", "width", "size", "margin"], correctText: "height" },
            { question: "CSS da bitta qatorda bir nechta xususiyatlarni birlashtirish (shorthand) mumkin bo'lgan xususiyatga misol?", options: ["border", "color", "font-size", "text-decoration"], correctText: "border" },
            { question: "CSS da elementning ko'rinishini butunlay yo'qotish uchun qaysi xususiyat ishlatiladi?", options: ["display: none;", "visibility: hidden;", "opacity: 0;", "hide: true;"], correctText: "display: none;" },
            { question: "JavaScript nima uchun ishlatiladi?", options: ["Web-sahifaga dinamiklik va interaktivlik qo'shish uchun (Mijoz tomonida dasturlash).", "Web-sahifaning tuzilmasini yaratish uchun.", "Web-sahifaning tashqi ko'rinishini belgilash uchun.", "Ma'lumotlar bazasida doimiy saqlash uchun."], correctText: "Web-sahifaga dinamiklik va interaktivlik qo'shish uchun (Mijoz tomonida dasturlash)." },
            { question: "JavaScript kodini HTML hujjatga joylashtirish uchun qaysi teg ishlatiladi?", options: ["script", "js", "javascript", "code-js"], correctText: "script" },
            { question: "JavaScript da o'zgaruvchini e'lon qilishning zamonaviy usuli qaysi?", options: ["let yoki const kalit so'zlari.", "var kalit so'zi.", "variable kalit so'zi.", "declare buyrug'i."], correctText: "let yoki const kalit so'zlari." },
            { question: "JavaScript da satr (String) ma'lumotlar tipi qanday belgilanadi?", options: ["Qo'shtirnoqlar (' ' yoki \" \") orasidagi qiymat.", "Faqat raqamlardan iborat qiymat.", "Faqat  true  yoki  false  qiymati.", "Massiv ichidagi qiymatlar."], correctText: "Qo'shtirnoqlar (' ' yoki \" \") orasidagi qiymat." },
            { question: "JavaScript da butun son va o'nli kasrli sonlar qaysi ma'lumotlar tipiga kiradi?", options: ["Number", "Integer", "Float", "Decimal"], correctText: "Number" },
            { question: "JavaScript da mantiqiy (boolean) ma'lumotlar tipining qiymatlari qaysilar?", options: ["true va false", "1 va 0", "\"True\" va \"False\"", "Yes va No"], correctText: "true va false" },
            { question: "JavaScript da tenglikni tekshirish (qiymat va tur) uchun qaysi operator ishlatiladi?", options: ["===", "==", "=", "!="], correctText: "===" },
            { question: "JavaScript da massiv (Array) qanday yaratiladi?", options: ["Kvadrat qavslar [ ] yordamida, masalan: [1, 2, 3].", "Qovuslar ( ) yordamida.", "Figurali qavslar { } yordamida.", "massiv kalit so'zi bilan."], correctText: "Kvadrat qavslar [ ] yordamida, masalan: [1, 2, 3]." },
            { question: "JavaScript da massiv elementiga qanday kirish mumkin?", options: ["Massiv nomi va kvadrat qavs ichida indeks raqami (0 dan boshlab).", "Massiv nomi va nuqta orqali.", "Faqat for tsikli orqali.", "Faqat element nomi orqali."], correctText: "Massiv nomi va kvadrat qavs ichida indeks raqami (0 dan boshlab)." },
            { question: "JavaScript da biron bir xabar (ogohlantirish) chiqarish uchun qaysi funksiya ishlatiladi?", options: ["alert(\"Xabar\");", "log(\"Xabar\");", "write(\"Xabar\");", "print(\"Xabar\");"], correctText: "alert(\"Xabar\");" },
            { question: "JavaScript da DOM (Document Object Model) nima uchun kerak?", options: ["HTML va XML hujjatlarining strukturasi, kontenti va uslubini o'zgartirish uchun API.", "Faqat ma'lumotlar bazasi bilan ishlash uchun.", "Faqat CSS stillarini yaratish uchun.", "Faqat web-serverga ulanish uchun."], correctText: "HTML va XML hujjatlarining strukturasi, kontenti va uslubini o'zgartirish uchun API." },
            { question: "JavaScript da for tsikli sintaksisi qanday yoziladi?", options: ["for (boshlash; shart; o'zgartirish) { ... }", "for (shart; o'zgartirish; boshlash) { ... }", "loop (boshlash, shart, o'zgartirish) { ... }", "while (boshlash, shart, o'zgartirish) { ... }"], correctText: "for (boshlash; shart; o'zgartirish) { ... }" },
            { question: "JavaScript da if-else shart operatori qanday ishlaydi?", options: ["Agar if ichidagi shart rost (true) bo'lsa, birinchi blok, aks holda else blokdagi kod bajariladi.", "Faqat birinchi blokdagi kod bajariladi.", "Faqat else blokdagi kod bajariladi.", "Har doim ikkala blokdagi kod ham bajariladi."], correctText: "Agar if ichidagi shart rost (true) bo'lsa, birinchi blok, aks holda else blokdagi kod bajariladi." },
            { question: "JavaScript da ikki qiymatning qo'shilishini bajaruvchi arifmetik amal qaysi?", options: ["+ (qo'shish)", "- (ayirish)", "* (ko'paytirish)", "/ (bo'lish)"], correctText: "+ (qo'shish)" },
            { question: "JavaScript da funksiyani e'lon qilish uchun qaysi kalit so'z ishlatiladi?", options: ["function", "func", "method", "def"], correctText: "function" },
            { question: "JavaScript da mantiqiy KO'PAYTIRISH (AND) operatori qaysi?", options: ["&&", "||", "!", "&"], correctText: "&&" },
            { question: "JavaScript da while tsikli qanday ishlaydi?", options: ["Belgilangan shart rost bo'lib qolar ekan, kod bloki qayta-qayta bajariladi.", "Kod bloki faqat bir marta bajariladi.", "Kod bloki bir marta bajariladi, keyin shart tekshiriladi.", "Faqat massivlar bilan ishlash uchun."], correctText: "Belgilangan shart rost bo'lib qolar ekan, kod bloki qayta-qayta bajariladi." },
            { question: "JavaScript da qaysi obyekt brauzer oynasini ifodalaydi?", options: ["window", "document", "body", "location"], correctText: "window" },
            { question: "JavaScript da ob'ekt (Object) qanday yaratiladi?", options: ["Figurali qavslar { } yordamida (kalit: qiymat juftligi bilan).", "Kvadrat qavslar [ ] yordamida.", "Qavslar ( ) yordamida.", "object kalit so'zi bilan."], correctText: "Figurali qavslar { } yordamida (kalit: qiymat juftligi bilan)." },
            { question: "JavaScript da qiymat mavjud emasligini bildiruvchi ma'lumotlar tipi qaysi?", options: ["null", "undefined", "NaN", "Void"], correctText: "null" },
            { question: "PHP nima uchun ishlatiladi?", options: ["Server tomonida dasturlash, web-ilovalarning orqa fonini (back-end) yaratish uchun.", "Mijoz tomonida sahifaning ko'rinishini sozlash uchun.", "Web-sahifaning tuzilmasini yaratish uchun.", "Faqat ma'lumotlar bazasini boshqarish uchun."], correctText: "Server tomonida dasturlash, web-ilovalarning orqa fonini (back-end) yaratish uchun." },
            { question: "PHP kodini yozish uchun qaysi belgilar ishlatiladi?", options: ["<?php va ?> teglari orasida.", "<php> va </php> teglari orasida.", "<script> va </script> teglari orasida.", "<!php va !> teglari orasida."], correctText: "<?php va ?> teglari orasida." },
            { question: "Lokal serverni o'rnatish va testlash uchun keng qo'llaniladigan dasturlar qaysilar?", options: ["XAMPP, WAMP, LAMP, MAMP.", "Photoshop, CorelDraw.", "Visual Studio Code, Sublime Text.", "Chrome, Firefox."], correctText: "XAMPP, WAMP, LAMP, MAMP." },
            { question: "PHP da o'zgaruvchi qanday belgi bilan boshlanadi?", options: ["Dollar ($) belgisi bilan, masalan: $ism.", "Panjara (#) belgisi bilan.", "Nuqta (.) belgisi bilan.", "At (@) belgisi bilan."], correctText: "Dollar ($) belgisi bilan, masalan: $ism." },
            { question: "PHP da kod satrining tugashi qanday belgi bilan yakunlanadi?", options: ["Nuqtali vergul (;).", "Vergul (,).", "Ikki nuqta (:).", "Nuqta (.)."], correctText: "Nuqtali vergul (;)." },
            { question: "PHP da matnni (String) ekranga chiqarish uchun eng ko'p ishlatiladigan buyruqlar qaysi?", options: ["echo yoki print.", "write.", "alert.", "console.log."], correctText: "echo yoki print." },
            { question: "PHP da satr (String) va butun son (Integer) qaysi asosiy ma'lumotlar tiplariga kiradi?", options: ["Skalar tiplar.", "Kompozit tiplar.", "Maxsus tiplar.", "Obyekt tiplar."], correctText: "Skalar tiplar." },
            { question: "PHP da mantiqiy (Boolean) ma'lumotlar tipining qiymatlari qaysilar?", options: ["TRUE va FALSE.", "1 va 0.", "\"True\" va \"False\".", "Null va Undefined."], correctText: "TRUE va FALSE." },
            { question: "PHP da ikki sonni bo'lish natijasidagi qoldiqni topish uchun qaysi arifmetik operator ishlatiladi?", options: ["% (modul).", "/ (bo'lish).", "// (butun bo'lish).", "** (daraja)."], correctText: "% (modul)." },
            { question: "PHP da ikkita satrni birlashtirish (concatenation) uchun qaysi operator ishlatiladi?", options: ["Nuqta (.).", "Plyus (+).", "Ampersand (&).", "Ikki nuqta (:)."], correctText: "Nuqta (.)." },
            { question: "PHP da bir qatorli izoh (comment) qoldirish uchun qaysi belgi ishlatiladi?", options: ["// yoki #", "/* va */", "<! -- va -->", "**"], correctText: "// yoki #" },
            { question: "PHP da if shart operatori qanday yoziladi?", options: ["if (shart) { ... }", "else if (shart) { ... }", "for (shart) { ... }", "while (shart) { ... }"], correctText: "if (shart) { ... }" },
            { question: "PHP da aniq sonli takrorlash (iterator) uchun qaysi tsikl operatori ishlatiladi?", options: ["for", "while", "do-while", "foreach"], correctText: "for" },
            { question: "PHP da ma'lumotlar bazasi bilan aloqa o'rnatish qaysi turdagi dasturlashga misol bo'ladi?", options: ["Server tomonidan dasturlash.", "Mijoz tomonidan dasturlash.", "Frontend dasturlash.", "Web-dizayn."], correctText: "Server tomonidan dasturlash." },
            { question: "PHP da while tsikli qachon to'xtaydi?", options: ["Qavslar ichidagi shart yolg'on (FALSE) bo'lganda.", "Qavslar ichidagi shart rost (TRUE) bo'lganda.", "Faqat bir marta bajarilgandan so'ng.", "Har doim 10 marta bajarilgandan so'ng."], correctText: "Qavslar ichidagi shart yolg'on (FALSE) bo'lganda." },
            { question: "PHP da massiv (Array) nima uchun ishlatiladi?", options: ["Bitta o'zgaruvchida bir nechta qiymatlarni saqlash uchun.", "Faqat bitta qiymatni saqlash uchun.", "Faqat mantiqiy qiymatlarni saqlash uchun.", "Faqat ob'ektlarni yaratish uchun."], correctText: "Bitta o'zgaruvchida bir nechta qiymatlarni saqlash uchun." },
            { question: "PHP da indekslangan (Indexed) massiv qanday yaratiladi?", options: ["array() funksiyasi yoki [ ] kvadrat qavslar bilan (kalitlari 0 dan boshlanadi).", "Faqat kalit (key) va qiymat (value) juftligi bilan.", "new Object() konstruktori bilan.", "Faqat bir o'lchovli massiv sifatida."], correctText: "array() funksiyasi yoki [ ] kvadrat qavslar bilan (kalitlari 0 dan boshlanadi)." },
            { question: "PHP da assotsiativ (Associative) massiv nima bilan farq qiladi?", options: ["Elementlarga raqamli indekslar o'rniga nomli kalitlar (String) yordamida kirish mumkin.", "Faqat ikki o'lchovli bo'ladi.", "Faqat sonli ma'lumotlar saqlaydi.", "Faqat ob'ektlarga tegishli."], correctText: "Elementlarga raqamli indekslar o'rniga nomli kalitlar (String) yordamida kirish mumkin." },
            { question: "PHP da massivdagi elementlar sonini aniqlash uchun qaysi funksiya ishlatiladi?", options: ["count()", "length()", "size()", "sizeof()"], correctText: "count()" },
            { question: "PHP da ikki o'lchovli massiv nima?", options: ["Massivning har bir elementi o'zi ham massiv bo'lgan tuzilma (Jadvallar kabi).", "Faqat ikkita elementdan iborat massiv.", "Faqat assotsiativ massiv.", "Faqat funksiyalarni saqlovchi massiv."], correctText: "Massivning har bir elementi o'zi ham massiv bo'lgan tuzilma (Jadvallar kabi)." },
            { question: "PHP da massiv elementlarini tartiblash (sortlash) uchun ishlatiladigan funksiya qaysi?", options: ["sort() yoki rsort()", "order()", "arrange()", "map()"], correctText: "sort() yoki rsort()" },
            { question: "PHP da massiv elementlarini kalit (key) bo'yicha tartiblash uchun ishlatiladigan funksiya qaysi?", options: ["ksort() yoki krsort()", "sort()", "asort()", "arsort()"], correctText: "ksort() yoki krsort()" },
            { question: "PHP da foreach tsikli nima uchun eng qulay hisoblanadi?", options: ["Massivning har bir elementi ustida osongina takrorlashni ta'minlaydi.", "Faqat ma'lum bir shart bajarilguncha takrorlaydi.", "Faqat 10 marta takrorlash uchun.", "Faqat for tsikli o'rnida ishlatiladi."], correctText: "Massivning har bir elementi ustida osongina takrorlashni ta'minlaydi." },
            { question: "PHP da funksiyani e'lon qilish uchun qaysi kalit so'z ishlatiladi?", options: ["function", "func", "method", "declare"], correctText: "function" },
            { question: "PHP funksiyasidan qiymatni qaytarish uchun qaysi kalit so'z ishlatiladi?", options: ["return", "output", "echo", "print"], correctText: "return" },
            { question: "PHP funksiyasi parametrlarining asosiy maqsadi nima?", options: ["Funksiya ichida ishlatish uchun tashqaridan ma'lumotlarni qabul qilish.", "Funksiyaning nomini belgilash.", "Funksiya ichidagi kodni ekranga chiqarish.", "Funksiyani chaqirishni ta'minlash."], correctText: "Funksiya ichida ishlatish uchun tashqaridan ma'lumotlarni qabul qilish." },
            { question: "PHP da standart parametr qiymati (Default Parameter Value) nima?", options: ["Agar funksiya chaqirilganda parametrga qiymat berilmasa, avtomatik ishlatiladigan qiymat.", "Har doim bir xil bo'lishi kerak bo'lgan qiymat.", "Faqat massivlar uchun ishlatiladigan qiymat.", "Funksiya qaytaradigan qiymat."], correctText: "Agar funksiya chaqirilganda parametrga qiymat berilmasa, avtomatik ishlatiladigan qiymat." },
            { question: "PHP da funksiya global o'zgaruvchilarga to'g'ridan-to'g'ri kirishi uchun nima qilish kerak?", options: ["global kalit so'zidan foydalanish.", "static kalit so'zidan foydalanish.", "Faqat return yordamida.", "Faqat parametr sifatida o'tkazish."], correctText: "global kalit so'zidan foydalanish." },
            { question: "PHP da nom berilgan funksiyalardan tashqari, anonim funksiyalar (Anonymous Functions) yaratish mumkinmi?", options: ["Ha, ular ba'zan closure deb ham ataladi.", "Yo'q, PHP da barcha funksiyalar nomga ega bo'lishi shart.", "Faqat ob'ektlar ichida.", "Faqat 5.0 dan eski versiyalarda."], correctText: "Ha, ular ba'zan closure deb ham ataladi." },
            { question: "PHP da array_push() funksiyasi nima vazifani bajaradi?", options: ["Massivning oxiriga bir yoki bir nechta element qo'shadi.", "Massivning boshidan elementni olib tashlaydi.", "Massiv elementlarini tartiblaydi.", "Massivning elementlari sonini hisoblaydi."], correctText: "Massivning oxiriga bir yoki bir nechta element qo'shadi." },
            { question: "PHP da massivdan elementni boshidan olib tashlash va uni qaytarish uchun qaysi funksiya ishlatiladi?", options: ["array_shift()", "array_pop()", "array_splice()", "unset()"], correctText: "array_shift()" },
            { question: "PHP da  static  kalit so'zi funksiya ichida qanday maqsadda ishlatiladi?", options: ["O'zgaruvchini funksiya chaqiruvlari o'rtasida qiymatini saqlab qolish uchun.", "O'zgaruvchini global qilish uchun.", "O'zgaruvchini funksiyadan tashqarida ishlatish uchun.", "O'zgaruvchini doimiy (constant) qilish uchun."], correctText: "O'zgaruvchini funksiya chaqiruvlari o'rtasida qiymatini saqlab qolish uchun." },
            { question: "PHP da ob'ekt tushunchasi nimani anglatadi?", options: ["Ma'lumotlar (xususiyatlar) va ular bilan ishlovchi funksiyalar (metodlar)ni o'z ichiga olgan sinf (Class) namunasini.", "Faqat bitta turdagi ma'lumotni saqlovchi o'zgaruvchi.", "Faqat HTML teglarini ifodalovchi element.", "Faqat ma'lumotlar bazasiga ulanish."], correctText: "Ma'lumotlar (xususiyatlar) va ular bilan ishlovchi funksiyalar (metodlar)ni o'z ichiga olgan sinf (Class) namunasini." },
            { question: "PHP da ob'ektni yaratish uchun qaysi kalit so'z ishlatiladi?", options: ["new", "create", "object", "instantiate"], correctText: "new" },
            { question: "PHP da ob'ektning metodiga qanday kirish mumkin?", options: ["-> (o'q) operatori yordamida, masalan: $ob'yekt->metod().", ". (nuqta) operatori yordamida.", ":: (ikki ikki nuqta) operatori yordamida.", "-> (o'q) operatori yordamida, faqat $belgisiz."], correctText: "-> (o'q) operatori yordamida, masalan: $ob'yekt->metod()." },
            { question: "PHP da sinf (Class) nima?", options: ["Ob'ekt yaratish uchun shablon (template) yoki loyiha.", "Faqat ma'lumotlar bazasi jadvallarini ifodalovchi tuzilma.", "Faqat funksiyalarni saqlovchi massiv.", "Faqat bitta o'zgaruvchini saqlovchi konteyner."], correctText: "Ob'ekt yaratish uchun shablon (template) yoki loyiha." },
            { question: "PHP da konstruktor metodi nima uchun ishlatiladi?", options: ["Ob'ekt yaratilganda avtomatik ravishda chaqiriladigan metod (obyektni initsializatsiya qilish uchun).", "Ob'ekt yo'q qilinganda chaqiriladigan metod.", "Ob'ektning ma'lumotlarini qaytarish uchun.", "Ob'ektning nomini o'zgartirish uchun."], correctText: "Ob'ekt yaratilganda avtomatik ravishda chaqiriladigan metod (obyektni initsializatsiya qilish uchun)." },
            { question: "PHP da ob'ektga yo'naltirilgan dasturlash (OOP) tamoyiliga kiruvchi tushuncha?", options: ["Merosxo'rlik (Inheritance).", "Massivlardan foydalanish.", "Shart operatorlari.", "Oddiy funksiyalar."], correctText: "Merosxo'rlik (Inheritance)." },
            { question: "PHP da massivdan elementni oxiridan olib tashlash va uni qaytarish uchun qaysi funksiya ishlatiladi?", options: ["array_pop()", "array_shift()", "unset()", "array_slice()"], correctText: "array_pop()" },
            { question: "PHP da do-while tsikli qanday ishlaydi?", options: ["Kod bloki avval bir marta bajariladi, keyin shart tekshiriladi va rost bo'lsa davom etadi.", "Shart rost bo'lsa, kod bloki bajarilmaydi.", "Faqat 10 marta bajariladi.", "Faqat massivlar bilan ishlaydi."], correctText: "Kod bloki avval bir marta bajariladi, keyin shart tekshiriladi va rost bo'lsa davom etadi." },
            { question: "PHP da Superglobal o'zgaruvchilarga misol?", options: ["$_GET, $_POST, $_SESSION", "$a, $b, $c", "$ism, $yosh", "$global, $local"], correctText: "$_GET, $_POST, $_SESSION" },
            { question: "PHP da $_POST massivi nima uchun ishlatiladi?", options: ["HTML shakl ma'lumotlarini HTTP POST metodi orqali xavfsiz qabul qilish uchun.", "HTML shakl ma'lumotlarini URL orqali qabul qilish uchun.", "Fayllarni serverga yuklash uchun.", "Foydalanuvchi sessiyasini boshqarish uchun."], correctText: "HTML shakl ma'lumotlarini HTTP POST metodi orqali xavfsiz qabul qilish uchun." },
            { question: "PHP da faylga ma'lumot yozish uchun ishlatiladigan funksiya (misol)?", options: ["fwrite()", "file_read()", "file_get_contents()", "echo()"], correctText: "fwrite()" },
            { question: "PHP da oddiy dasturlarni tuzishda foydalaniladigan muhit qaysi?", options: ["Lokal server (XAMPP, WAMP kabi) va matn muharriri.", "Faqat web-brauzer.", "Faqat mobil telefon.", "Faqat ma'lumotlar bazasi tizimi."], correctText: "Lokal server (XAMPP, WAMP kabi) va matn muharriri." },
            { question: "PHP da Array turiga kiradigan element?", options: ["Massiv", "Butun son", "Satr", "Mantiqiy qiymat"], correctText: "Massiv" },
            { question: "PHP da funksiyaga o'tkaziladigan ma'lumotlar nima deb ataladi?", options: ["Argumentlar (Parameters).", "Massivlar.", "Ob'ektlar.", "Shartlar."], correctText: "Argumentlar (Parameters)." },
            { question: "PHP da die() yoki exit() funksiyasi nima vazifani bajaradi?", options: ["Skriptning bajarilishini shu joyda to'xtatadi.", "Skriptni boshidan boshlaydi.", "Faqat ekranga xabar chiqaradi.", "Faqat funksiyadan qiymat qaytaradi."], correctText: "Skriptning bajarilishini shu joyda to'xtatadi." },
            { question: "PHP da ob'ekt yaratishdan avval nima e'lon qilinishi shart?", options: ["Sinf (Class).", "Funksiya.", "Massiv.", "O'zgaruvchi."], correctText: "Sinf (Class)." },
            { question: "PHP da server tomonidan dasturlashning afzalligi nima?", options: ["Xavfsizlik, ma'lumotlar bazasi bilan ishlash va katta hajmdagi ma'lumotlarni qayta ishlash imkoniyati.", "Faqat sahifaning ko'rinishini o'zgartirish.", "Faqat mijoz brauzerida ishlash.", "Faqat HTML teglarini yaratish."], correctText: "Xavfsizlik, ma'lumotlar bazasi bilan ishlash va katta hajmdagi ma'lumotlarni qayta ishlash imkoniyati." },
            { question: "PHP da ikki o'lchovli assotsiativ massivga misol?", options: ["Kalitlari nomli bo'lgan massivlar ichidagi massiv.", "Faqat raqamli indekslarga ega massiv.", "Faqat bitta satrli elementdan iborat massiv.", "Faqat funksiyalarni o'z ichiga olgan massiv."], correctText: "Kalitlari nomli bo'lgan massivlar ichidagi massiv." },
        ];



// LOGIKA
let currentQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let isClickable = true;

// Elementlar
const welcomeScreen = document.getElementById('welcome-screen');
const quizApp = document.getElementById('quiz-app');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const currentStatusEl = document.getElementById('current-status');
const scoreStatusEl = document.getElementById('score-status');
const progressBar = document.getElementById('progress-bar');
const modeNameEl = document.getElementById('mode-name');

function startMode(mode) {
    welcomeScreen.style.display = 'none';
    quizApp.style.display = 'block';
    
    if (mode === 'practice') {
        currentQuestions = [...allQuestionsData]; 
        modeNameEl.innerText = "Takrorlash";
    } else {
        // 30 talik Random Imtihon
        const shuffled = [...allQuestionsData].sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, 30);
        modeNameEl.innerText = "Imtihon (30)";
    }

    currentQuizIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    isClickable = true;
    optionsList.innerHTML = '';
    
    const currentData = currentQuestions[currentQuizIndex];
    
    // Savol matni
    questionEl.innerText = `${currentQuizIndex + 1}. ${currentData.question}`;
    
    // Progress
    const progressPercent = ((currentQuizIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentStatusEl.innerText = `${currentQuizIndex + 1} / ${currentQuestions.length}`;
    scoreStatusEl.innerText = `${score} to'g'ri`;

    // Variantlarni aralashtirish
    let shuffledOptions = [...currentData.options].sort(() => 0.5 - Math.random());
    const correctText = currentData.correctText;

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(opt, correctText, btn);
        optionsList.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btnElement) {
    if (!isClickable) return;
    isClickable = false; // Ketma-ket bosishni oldini olish

    const buttons = document.querySelectorAll('.option-btn');
    
    if (selected === correct) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        // To'g'risini ko'rsatamiz
        buttons.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
    }

    scoreStatusEl.innerText = `${score} to'g'ri`;

    // 1.2 sekunddan keyin keyingisiga o'tish
    setTimeout(() => {
        currentQuizIndex++;
        if (currentQuizIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

function showResults() {
    quizApp.style.display = 'none';
    resultScreen.style.display = 'flex';
    
    const total = currentQuestions.length;
    const percentage = (score / total) * 100;
    
    document.getElementById('total-count').innerText = `/ ${total}`;
    document.getElementById('final-score').innerText = score;
    
    const msgEl = document.getElementById('result-message');
    if (percentage >= 80) msgEl.innerText = "Ajoyib natija! 🎉";
    else if (percentage >= 60) msgEl.innerText = "Yaxshi, lekin yana o'qing. 📚";
    else msgEl.innerText = "Qayta urinib ko'ring. 💪";
}