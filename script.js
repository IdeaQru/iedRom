const Iya = document.querySelector(".next");
        const Text = document.getElementById("text");
        const Image = document.querySelector("#image-gif");

        Iya.addEventListener("click", function () {
            Iya.value = parseInt(Iya.value) + 1;
            Text.classList.remove('text-animate');

            if (Iya.value == 1) {
                Text.innerHTML = "Selamat Pagi , wanita tercantikku !";
            } else if (Iya.value == 2) {
                Text.innerHTML = "Website ini dibuat karna perpaduan gabut di dinihari dan pikiran<br> dimana kamu jadi Intisarinya</br>";
            } else if (Iya.value == 3) {
                Text.innerHTML = "Aku Cuma berharap mulai IdulFitri 2024 ini aku selalu<br> jadi Lelaki satu-satunya untukmu";
            } else if (Iya.value == 4) {
                Text.innerHTML = "Jadi Orang Pertama yang kamu butuhkan saat kamu perlu bantuan. ";
            } else if (Iya.value == 5) {
                Text.innerHTML = "Namun yang jauh aku harapkan adalah Bahagiamu entah <br>dengan aku atau siapapun nanti di IdulFitri Selanjutnya";
            } else if (Iya.value == 6) {
                Text.innerHTML = "Give me a warning to stop loving you <br>if there is someone who can make you happier than I can";
            } else if (Iya.value == 7) {
                Text.innerHTML = " so  I can prepare myself in advance .<br>oke gitu aja tolong klik lagi ya cantik ";
            } else if (Iya.value == 8) {
                Text.innerHTML = "تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ <br> Taqabbalallahu Minna Wa Minkum";
            } else if (Iya.value == 9) {
                Text.innerHTML = "Selamat hari raya Idul Fitri 1445 Hijriah!! <br>Mohon Maaf kalok aku ada salah kata atau Karna Lancang mencintaimu ,</br>  <br>dan mungkin sangat bawel kepadamu dan tetap yang kuharap adalah Kelancaran Untuk seluruh tujuan kamu";
            } else if (Iya.value == 10) {
                Text.innerHTML = "ini adalah yang terakhir ,Sehat Selalu buat kamu <br>semoga kita bisa semeja Di Idul Fitri Selanjutnya <3";
                Iya.remove();
            }

            // Tambahkan kembali kelas 'text-animate' setelah memberi waktu untuk teks ditampilkan
            setTimeout(function() {
                Text.classList.add('text-animate');
            }, 100);
        });