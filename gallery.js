document.addEventListener("DOMContentLoaded", () => {
  // 🔘 Filter buttons
  const buttons = document.querySelectorAll("#filter-buttons button");
  const cards = document.querySelectorAll("#filterable-cards .card");

  buttons.forEach(button => {
    button.addEventListener("click", e => {
      buttons.forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");

      const filter = e.target.dataset.filter;

      cards.forEach(card => {
        if (filter === "all" || card.dataset.name === filter) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  // 🔊 Mainkan bunyi bila gambar diklik dan hentikan selepas 3 saat
  const images = document.querySelectorAll("img[data-sound]");
  let currentAudio = null;
  let stopTimer = null;

  images.forEach(img => {
    img.addEventListener("click", () => {
      const soundPath = img.getAttribute("data-sound");

      // Hentikan audio lama jika ada
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        clearTimeout(stopTimer);
      }

      // Main audio baru
      currentAudio = new Audio(soundPath);
      currentAudio.play().catch(err => {
        console.error("Gagal mainkan audio:", err);
      });

      // Set masa henti automatik selepas 3 saat
      stopTimer = setTimeout(() => {
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
      }, 3000);
    });
  });
});

// ✅ Untuk overlay jika ada animasi masuk
window.addEventListener("load", () => {
  const overlay = document.getElementById("transition-overlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
});

