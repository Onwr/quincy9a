const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Günaydın");
    }

    else if(hr == 12) {
        speak("Tünaydın");
    }

    else if(hr > 12 && hr <= 17) {
        speak("İyi Günler");
    }

    else {
        speak("İyi akşamlar");
    }
}

window.addEventListener('load', ()=>{
    speak("Quincy Etkinleştirildi");
    speak("Artık Çevrimiçi");
    speak("Web tabanlı olarak çalışan bir yapay zekadır.");
    speak("Onur Kürkaya ve Salih Çelik tarafından geliştirilmiştir.")
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Anlamadım";

    if(message.includes('Merhaba') || message.includes('merhaba')) {
        const finalText = "merhaba";
        speech.text = finalText;
    }

    else if(message.includes('nasılsın')) {
        const finalText = "iyiyim elhamdulillah, siz nasılsınız?";
        speech.text = finalText;
    }

    else if(message.includes('adın ne')) {
        const finalText = "Benim adım Memoli";
        speech.text = finalText;
    }

    else if(message.includes('dna şekli nedir')) {
        const finalText = "DNA, iki iplikçikten oluşan bir moleküldür. DNA'nın kendine özgü çift burgulu bir yapısı vardır. Bu çifte sarmal yapı, bükülmüş bir merdivene benzer. Her bir iplikçik, 4 bazın uzun dizilimlerinden oluşur.";
        speech.text = finalText;
    }

    else if(message.includes('kaç çeşit dna var')) {
        const finalText = "DNA'nın bilinen üç farklı formu vardır. Deoksiribonükleik asit olarak da bilinen DNA, canlılarda bir önceki nesilden bir sonraki nesile genetik (kalıtsal) bilgi taşıyan bir molekül grubudur.";
        speech.text = finalText;
    }

    else if(message.includes('rna kendini onarabilir mi')) {
        const finalText = "DNA kendini onarıyorsa RNAda kendini onarır. RNA hemen her zaman tek bir moleküldür.";
        speech.text = finalText;
    }

    else if(message.includes('dna nedir')) {
        const finalText = "Deoksiribo nükleik asit veya kısaca DNA, tüm organizmaların ve bazı virüslerin canlılık işlevleri ve biyolojik gelişmeleri için gerekli olan genetik talimatları taşıyan bir nükleik asittir. DNA'nın başlıca rolü bilgiyi uzun süre saklamasıdır.";
        speech.text = finalText;
    }

    else if(message.includes('rna nedir')) {
        const finalText = "Ribonükleik asid, bir nükleik asittir, nükleotitlerden oluşan bir polimerdir. Her nükleotit bir azotlu baz, bir riboz şeker ve bir fosfattan oluşur. RNA pek çok önemli biyolojik rol oynar, DNA'da taşınan genetik bilginin proteine çevirisi ile ilişkili çeşitli süreçlerde de yer alır."
        speech.text = finalText;
    }

    else if(message.includes('saat kaç')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('bugün ayın kaçı')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('dna içinde ne bulunur')) {
        const finalText = "DNA'da bulunan dört baz, adenin (A olarak kısaltılır), sitozin (C), guanin (G) ve timin (T) olarak adlandırılır. Bu dört baz şeker-fosfata bağlanarak bir nükleotit oluşturur, örneğin 'adenozin monofosfat' bir nükleotittir."
        speech.text = finalText;
    }

    else if(message.includes('dna ile rna arasındaki fark nedir')) {
        const finalText = "Özetlemek gerekirse DNA ile RNA arasındaki en temel fark moleküllerinde bulunan şekerdir. RNA'da riboz şekeri, DNA'da ise deoksiriboz şekeri bulunur. En büyük fark budur. Buna ek olarak DNA timin kullanırken, RNA urasil kullanır."
        speech.text = finalText;
    }

    else if(message.includes('rna yapısında ne bulunmaz')) {
        const finalText = "RNA azotlu organik bazlardan oluşan bir yapıdır. Bu organik bazlar Sitozin, Guanin, Adenin ve Urasil olarak sıralanabilir. RNA DNA ile benzerlik gösterir. Ancak DNA'da RNA'dan farklı olarak Timin bulunurken Urasil bulunmaz."
        speech.text = finalText;
    }
    
    else if(message.includes('rna ne iş yapar')) {
        const finalText = "Rna'nın işlevi ise dna'daki genetik kodu sentezlemek, taşımak ve yorumlamaktır. Kısaca bu süreçten bahsetelim: Hücre çekirdeğinde dna belirli enzimler sayesinde pre-mRna olarak yazılır bu pre-mRna belirli süreçler geçirerek, mRna yani genetik kodları taşıyan Rna'ya dönüşür."
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}