document.addEventListener("DOMContentLoaded", () => {
    const btnNext = document.getElementById("btn-next");
    const page1 = document.getElementById("page-1");
    const page2 = document.getElementById("page-2");
    const bgMusic = document.getElementById("bg-music");

    btnNext.addEventListener("click", () => {
        // Mainkan musik (browser membutuhkan interaksi user untuk memutar musik, jadi diletakkan di klik tombol)
        bgMusic.play().catch(error => {
            console.log("Autoplay dicegah oleh browser atau file musik belum ada.", error);
        });

        // Efek transisi halaman
        page1.classList.remove("active");
        page1.classList.add("hidden");

        page2.classList.remove("hidden");
        page2.classList.add("active");
    });
});
