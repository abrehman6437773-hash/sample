/**
 * ===================================================================
 * DREAMY MIDNIGHT BIRTHDAY - MUNIZA SHAHEEN
 * Interactive Birthday Web Application
 * ===================================================================
 * 
 * Technical Features:
 * - HTML5 Canvas Starfield, Shooting Stars & Floating Dust
 * - 3D Gift Box Opening & Closing Sequence with Real 3D CSS Transforms
 * - Automatic Age Calculator & Life Milestones
 * - Dynamic Perpetual Birthday Countdown
 * - Interactive Tiered Birthday Cake with Blowable Candles
 * - Memory Gallery with Fullscreen Lightbox & Keyboard Navigation
 * - Dual-Engine Audio Player (Native HTML5 MP3 + Procedural Web Audio Synth)
 * - Canvas Confetti Explosion Engine
 * - Highly Responsive & Mobile Optimized
 */

/* ===================================================================
   EASY CUSTOMIZATION CONFIGURATION
   Change any values below to personalize the birthday celebration.
   =================================================================== */
const CONFIG = {
  // Birthday Girl Details
  name: "Muniza Shaheen",
  nickname: "Muniza",
  birthDate: "2006-11-24", // Format: YYYY-MM-DD
  birthDateDisplay: "24 NOVEMBER 2006",
  
  // Hero Section
  heroTitle: "TODAY IS ALL ABOUT YOU",
  heroSubtitle: "HAPPY BIRTHDAY",
  heroQuote: "May your life always be filled with happiness, beautiful memories, endless smiles, and wonderful moments.",

  // Birthday Message Section
  message: {
    title: "A LITTLE MESSAGE FOR YOU",
    p1: "Today is a celebration of you — your smile, your dreams, your journey, and all the beautiful moments still waiting for you.",
    p2: "May this new chapter bring you happiness, success, unforgettable memories, and countless reasons to smile.",
    quote: '"Keep shining, keep dreaming, and always be yourself."',
    signaturePrefix: "With endless admiration & love,",
    signatureName: "Muniza Shaheen's Day 💜"
  },

  // Memory Gallery Items (Easily replace images with custom photos)
  gallery: [
    {
      src: "assets/images/memory-1.svg",
      title: "Starry Starlight",
      subtitle: "A night full of dreams & sparkling wonder"
    },
    {
      src: "assets/images/memory-2.svg",
      title: "Sweet Radiance",
      subtitle: "A smile that lights up every room"
    },
    {
      src: "assets/images/memory-3.svg",
      title: "Crescent Whispers",
      subtitle: "Graceful wishes sent to the silver night"
    },
    {
      src: "assets/images/memory-4.svg",
      title: "Midnight Sparkles",
      subtitle: "Cherished laughter and endless joy"
    },
    {
      src: "assets/images/memory-5.svg",
      title: "Lavender Blossom",
      subtitle: "Elegance, charm and gentle warmth"
    },
    {
      src: "assets/images/memory-6.svg",
      title: "Celebration of You",
      subtitle: "Another wonderful chapter of brilliance"
    },
    {
      src: "assets/images/memory-7.svg",
      title: "Golden Aura",
      subtitle: "Luminous spirit and graceful heart"
    },
    {
      src: "assets/images/memory-8.svg",
      title: "Constellation of Dreams",
      subtitle: "Every star aligned in your honor"
    },
    {
      src: "assets/images/memory-9.svg",
      title: "Forever Cherished",
      subtitle: "Special moments kept close to the heart"
    }
  ],

  // Special Moments Timeline (Easily editable milestones)
  timeline: [
    {
      year: "2006",
      text: "The beginning of a beautiful journey — a radiant light entered the world."
    },
    {
      year: "2012",
      text: "Little memories, big smiles, and sweet innocent laughter under sunny skies."
    },
    {
      year: "2018",
      text: "New dreams and new adventures, discovering inner passions and grace."
    },
    {
      year: "2024",
      text: "More memories, more growth, blossoming into elegance and brilliance."
    },
    {
      year: "2026",
      text: "Another beautiful chapter begins, with the universe cheering for you!"
    }
  ],

  // Audio Settings
  audio: {
    filePath: "assets/music/birthday.mp3",
    useDreamySynthesizerFallback: true
  }
};

/* ===================================================================
   APPLICATION CONTROLLER
   =================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Canvas Background (Starfield, Shooting Stars, Sparkles)
  initStarrySkyCanvas();

  // 2. Initialize Dynamic Text & Data from Config
  populateConfigData();

  // 3. Initialize Age Calculation & Stats
  calculateAndRenderAge();

  // 4. Initialize Dynamic Birthday Countdown
  initBirthdayCountdown();

  // 5. Initialize Gallery & Lightbox
  initGallery();

  // 6. Initialize Timeline
  initTimeline();

  // 7. Initialize Interactive Cake & Wishes
  initWishesCake();

  // 8. Initialize 3D Gift Box Opening & Closing Experience
  initSurpriseExperience();

  // 9. Initialize Audio Controller (Synthesizer + MP3)
  initAudioController();

  // 10. Initialize Navigation
  initNavigation();
});

/* ===================================================================
   1. CANVAS STARRY SKY & PARTICLE ENGINE
   =================================================================== */
let skyCanvas, skyCtx;
let stars = [];
let shootingStars = [];
let floatingDust = [];
let confettiParticles = [];
let isSkyActive = true;

function initStarrySkyCanvas() {
  skyCanvas = document.getElementById("sky-canvas");
  if (!skyCanvas) return;
  skyCtx = skyCanvas.getContext("2d");

  function resizeCanvas() {
    skyCanvas.width = window.innerWidth;
    skyCanvas.height = window.innerHeight;
    generateStars();
  }

  function generateStars() {
    stars = [];
    const count = Math.min(220, Math.floor((skyCanvas.width * skyCanvas.height) / 7000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * skyCanvas.width,
        y: Math.random() * skyCanvas.height,
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color: ['#FFFFFF', '#FFB6D9', '#C8B6FF', '#E2E8F0', '#FFD166'][Math.floor(Math.random() * 5)]
      });
    }

    floatingDust = [];
    const dustCount = 45;
    for (let i = 0; i < dustCount; i++) {
      floatingDust.push({
        x: Math.random() * skyCanvas.width,
        y: Math.random() * skyCanvas.height,
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        color: ['#FFB6D9', '#C8B6FF', '#E0AAFF', '#FFFFFF'][Math.floor(Math.random() * 4)]
      });
    }
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Periodically spawn a magical shooting star
  setInterval(() => {
    if (shootingStars.length < 3 && Math.random() > 0.3) {
      shootingStars.push({
        x: Math.random() * skyCanvas.width * 0.8 + skyCanvas.width * 0.1,
        y: Math.random() * (skyCanvas.height * 0.4),
        length: Math.random() * 90 + 70,
        speed: Math.random() * 7 + 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
        color: '#FFFFFF'
      });
    }
  }, 3500);

  // Animation Loop
  function animateSky(time) {
    if (!isSkyActive) return;
    skyCtx.clearRect(0, 0, skyCanvas.width, skyCanvas.height);

    // Render Twinkling Stars
    for (let star of stars) {
      star.twinklePhase += star.twinkleSpeed;
      const currentAlpha = star.alpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));

      skyCtx.beginPath();
      skyCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      skyCtx.fillStyle = star.color;
      skyCtx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
      skyCtx.shadowBlur = star.size > 1.2 ? 6 : 0;
      skyCtx.shadowColor = star.color;
      skyCtx.fill();
    }

    // Render Floating Fairy Dust
    for (let dust of floatingDust) {
      dust.x += dust.vx;
      dust.y += dust.vy;
      if (dust.y < -10) dust.y = skyCanvas.height + 10;
      if (dust.x < -10) dust.x = skyCanvas.width + 10;
      if (dust.x > skyCanvas.width + 10) dust.x = -10;

      skyCtx.beginPath();
      skyCtx.arc(dust.x, dust.y, dust.radius, 0, Math.PI * 2);
      skyCtx.fillStyle = dust.color;
      skyCtx.globalAlpha = dust.alpha * 0.6;
      skyCtx.shadowBlur = 8;
      skyCtx.shadowColor = dust.color;
      skyCtx.fill();
    }

    // Render Shooting Stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      const endX = s.x - Math.cos(s.angle) * s.length;
      const endY = s.y - Math.sin(s.angle) * s.length;

      const grad = skyCtx.createLinearGradient(s.x, s.y, endX, endY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${s.alpha})`);
      grad.addColorStop(0.3, `rgba(255, 182, 217, ${s.alpha * 0.7})`);
      grad.addColorStop(1, 'rgba(157, 78, 221, 0)');

      skyCtx.beginPath();
      skyCtx.moveTo(s.x, s.y);
      skyCtx.lineTo(endX, endY);
      skyCtx.strokeStyle = grad;
      skyCtx.lineWidth = 2;
      skyCtx.shadowBlur = 10;
      skyCtx.shadowColor = '#FFB6D9';
      skyCtx.stroke();

      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.alpha -= 0.015;

      if (s.alpha <= 0 || s.x > skyCanvas.width + 100 || s.y > skyCanvas.height + 100) {
        shootingStars.splice(i, 1);
      }
    }

    // Render Confetti
    if (confettiParticles.length > 0) {
      for (let i = confettiParticles.length - 1; i >= 0; i--) {
        const p = confettiParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.alpha -= p.fadeRate;

        if (p.alpha <= 0 || p.y > skyCanvas.height + 50) {
          confettiParticles.splice(i, 1);
          continue;
        }

        skyCtx.save();
        skyCtx.translate(p.x, p.y);
        skyCtx.rotate(p.rotation);
        skyCtx.fillStyle = p.color;
        skyCtx.globalAlpha = Math.max(0, p.alpha);
        skyCtx.shadowBlur = 6;
        skyCtx.shadowColor = p.color;
        skyCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        skyCtx.restore();
      }
    }

    skyCtx.shadowBlur = 0;
    skyCtx.globalAlpha = 1;
    requestAnimationFrame(animateSky);
  }

  requestAnimationFrame(animateSky);
}

// Confetti burst helper
function launchConfetti(originX, originY, count = 120) {
  const colors = ['#FFB6D9', '#C8B6FF', '#E0AAFF', '#FFD166', '#FFFFFF', '#9D4EDD', '#FDE2E4'];
  const startX = originX || window.innerWidth / 2;
  const startY = originY || window.innerHeight / 2;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 12 + 4;
    confettiParticles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5,
      gravity: 0.18,
      size: Math.random() * 8 + 4,
      rotation: Math.random() * Math.PI,
      rotationSpeed: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      fadeRate: Math.random() * 0.008 + 0.004
    });
  }
}

/* =========================================================
   2. POPULATE CONFIG DATA
   ========================================================= */
function populateConfigData() {
  // Date badge
  const configDateDisplay = document.getElementById("configDateDisplay");
  if (configDateDisplay) configDateDisplay.textContent = CONFIG.birthDateDisplay;

  // Hero section
  const heroName = document.getElementById("heroName");
  if (heroName) heroName.textContent = CONFIG.name.toUpperCase();

  const heroDate = document.getElementById("heroDate");
  if (heroDate) heroDate.textContent = CONFIG.birthDateDisplay;

  const heroQuote = document.getElementById("heroQuote");
  if (heroQuote) heroQuote.textContent = CONFIG.heroQuote;

  // Message section
  const msgP1 = document.getElementById("msgP1");
  if (msgP1) msgP1.textContent = CONFIG.message.p1;

  const msgP2 = document.getElementById("msgP2");
  if (msgP2) msgP2.textContent = CONFIG.message.p2;

  const msgP3 = document.getElementById("msgP3");
  if (msgP3) msgP3.textContent = CONFIG.message.quote;
}

/* =========================================================
   3. AGE CALCULATION & LIFE MILESTONES
   ========================================================= */
function calculateAndRenderAge() {
  const birthDate = new Date(CONFIG.birthDate);
  const now = new Date();

  // Exact age calculation
  let age = now.getFullYear() - birthDate.getFullYear();
  const m = now.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }

  // Days and hours lived
  const diffTime = Math.abs(now - birthDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

  const calculatedAgeEl = document.getElementById("calculatedAge");
  const statsDaysEl = document.getElementById("statsDays");
  const statsHoursEl = document.getElementById("statsHours");

  if (calculatedAgeEl) {
    animateCounter(calculatedAgeEl, age, 1500);
  }
  if (statsDaysEl) {
    statsDaysEl.textContent = diffDays.toLocaleString() + "+";
  }
  if (statsHoursEl) {
    statsHoursEl.textContent = diffHours.toLocaleString() + "+";
  }
}

function animateCounter(element, target, duration = 1500) {
  let start = 0;
  const stepTime = 30;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, stepTime);
}

/* =========================================================
   4. BIRTHDAY COUNTDOWN ENGINE
   ========================================================= */
function initBirthdayCountdown() {
  const daysEl = document.getElementById("daysCount");
  const hoursEl = document.getElementById("hoursCount");
  const minutesEl = document.getElementById("minutesCount");
  const secondsEl = document.getElementById("secondsCount");
  const countdownTitle = document.getElementById("countdownTitle");
  const countdownSubtitle = document.getElementById("countdownSubtitle");
  const countdownGrid = document.getElementById("countdownGrid");
  const birthdayTodayBanner = document.getElementById("birthdayTodayBanner");

  function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Birthday of current year (November 24)
    const birthMonth = 10; // 0-indexed, November is 10
    const birthDay = 24;

    // Check if today is the birthday
    if (now.getMonth() === birthMonth && now.getDate() === birthDay) {
      if (countdownTitle) countdownTitle.textContent = "🎉 IT'S YOUR BIRTHDAY! 🎉";
      if (countdownSubtitle) countdownSubtitle.textContent = "The whole world is glowing brighter in your honor today!";
      if (countdownGrid) countdownGrid.style.display = "none";
      if (birthdayTodayBanner) birthdayTodayBanner.style.display = "block";
      return;
    }

    if (countdownGrid) countdownGrid.style.display = "flex";
    if (birthdayTodayBanner) birthdayTodayBanner.style.display = "none";

    // Target next birthday
    let targetDate = new Date(currentYear, birthMonth, birthDay, 0, 0, 0);
    if (now > targetDate) {
      // Birthday has passed this year, countdown toward next year's birthday
      targetDate = new Date(currentYear + 1, birthMonth, birthDay, 0, 0, 0);
    }

    const diff = targetDate - now;
    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* =========================================================
   5. MEMORY GALLERY & LIGHTBOX
   ========================================================= */
let currentLightboxIndex = 0;

function initGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";

  CONFIG.gallery.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View memory: ${item.title}`);

    card.innerHTML = `
      <div class="gallery-thumb-wrapper">
        <img src="${item.src}" alt="${item.title}" class="gallery-thumb" loading="lazy">
      </div>
      <div class="gallery-overlay">
        <h4 class="gallery-card-title">${item.title}</h4>
        <p class="gallery-card-sub">${item.subtitle}</p>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    galleryGrid.appendChild(card);
  });

  // Lightbox Controls
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", () => navigateLightbox(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => navigateLightbox(1));

  document.addEventListener("keydown", (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(index) {
  const lightboxModal = document.getElementById("lightboxModal");
  if (!lightboxModal) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  lightboxModal.classList.add("active");
  lightboxModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightboxModal = document.getElementById("lightboxModal");
  if (!lightboxModal) return;

  lightboxModal.classList.remove("active");
  lightboxModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + CONFIG.gallery.length) % CONFIG.gallery.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = CONFIG.gallery[currentLightboxIndex];
  const imgEl = document.getElementById("lightboxImg");
  const titleEl = document.getElementById("lightboxTitle");
  const subEl = document.getElementById("lightboxSubtitle");
  const counterEl = document.getElementById("lightboxCounter");

  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.title;
  }
  if (titleEl) titleEl.textContent = item.title;
  if (subEl) subEl.textContent = item.subtitle;
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${CONFIG.gallery.length}`;
}

/* =========================================================
   6. SPECIAL MOMENTS TIMELINE
   ========================================================= */
function initTimeline() {
  const container = document.getElementById("timelineContainer");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.timeline.forEach((item, index) => {
    const isLeft = index % 2 === 0;
    const timelineItem = document.createElement("div");
    timelineItem.className = `timeline-item ${isLeft ? 'left' : 'right'}`;

    timelineItem.innerHTML = `
      <div class="timeline-node"></div>
      <div class="timeline-content glass-panel">
        <span class="timeline-year">${item.year}</span>
        <p class="timeline-text">${item.text}</p>
      </div>
    `;

    container.appendChild(timelineItem);
  });
}

/* =========================================================
   7. WISHES SECTION & INTERACTIVE BIRTHDAY CAKE
   ========================================================= */
function initWishesCake() {
  const blowBtn = document.getElementById("blowCandlesBtn");
  const flames = document.querySelectorAll(".flame");
  const smokes = document.querySelectorAll(".smoke");
  const wishRevealBox = document.getElementById("wishRevealBox");
  const cakeGlow = document.getElementById("cakeGlow");
  const wishInput = document.getElementById("wishInput");
  const sendWishBtn = document.getElementById("sendWishBtn");
  const wishSentMsg = document.getElementById("wishSentMsg");
  let candlesBlown = false;

  function blowOutCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    // Extinguish flames
    flames.forEach(flame => flame.classList.add("extinguished"));
    smokes.forEach(smoke => smoke.classList.add("active"));

    // Brief screen dim effect for magical wish atmosphere
    document.body.style.filter = "brightness(0.65)";
    setTimeout(() => {
      document.body.style.filter = "brightness(1)";
    }, 700);

    // Audio chime / harpsichord arpeggio if available
    playWishChimeSound();

    // Confetti burst
    const cakeRect = document.getElementById("interactiveCake").getBoundingClientRect();
    launchConfetti(cakeRect.left + cakeRect.width / 2, cakeRect.top + 60, 160);

    // Fade in reveal box
    setTimeout(() => {
      if (wishRevealBox) wishRevealBox.style.display = "block";
      if (blowBtn) {
        blowBtn.innerHTML = '<span>✨ CANDLES BLOWN WITH LOVE ✨</span>';
        blowBtn.style.opacity = '0.7';
        blowBtn.style.cursor = 'default';
      }
    }, 600);
  }

  if (blowBtn) {
    blowBtn.addEventListener("click", blowOutCandles);
  }

  // Clicking on cake candles directly also blows them
  const interactiveCake = document.getElementById("interactiveCake");
  if (interactiveCake) {
    interactiveCake.addEventListener("click", blowOutCandles);
  }

  // Wish sender input
  if (sendWishBtn && wishInput) {
    sendWishBtn.addEventListener("click", () => {
      const text = wishInput.value.trim();
      if (!text) return;

      // Spawn special shooting star across sky for the wish!
      if (shootingStars) {
        shootingStars.push({
          x: window.innerWidth * 0.2,
          y: window.innerHeight * 0.3,
          length: 160,
          speed: 15,
          angle: Math.PI / 4,
          alpha: 1,
          color: '#FFD166'
        });
      }

      launchConfetti(window.innerWidth / 2, window.innerHeight * 0.7, 80);

      wishInput.disabled = true;
      sendWishBtn.style.display = "none";
      if (wishSentMsg) wishSentMsg.style.display = "block";
    });
  }
}

/* =========================================================
   8. 3D GIFT BOX SURPRISE OPENING & CLOSING
   ========================================================= */
function initSurpriseExperience() {
  const openSurpriseBtn = document.getElementById("openSurpriseBtn");
  const closeSurpriseBtn = document.getElementById("closeSurpriseBtn");
  const openingScreen = document.getElementById("openingScreen");
  const mainExperience = document.getElementById("mainExperience");
  const giftBox = document.getElementById("giftBox");
  const giftLid = document.getElementById("giftLid");
  const burstRays = document.getElementById("burstRays");
  const boxInteriorLight = document.getElementById("boxInteriorLight");
  const risingCard = document.getElementById("risingCard");
  const floatingNav = document.getElementById("floatingNav");

  // Step-by-Step Cinematic Opening
  if (openSurpriseBtn) {
    openSurpriseBtn.addEventListener("click", () => {
      // 1. Button smoothly fades away
      openSurpriseBtn.classList.add("fade-out");

      // 2. Stars brighten & gift box glows
      if (giftBox) giftBox.classList.add("glowing");
      if (burstRays) burstRays.classList.add("active");

      // 3. Lid opens with smooth 3D animation
      setTimeout(() => {
        if (giftLid) giftLid.classList.add("lid-opened");
      }, 500);

      // 4. Light bursts gently from inside & Confetti rises
      setTimeout(() => {
        if (boxInteriorLight) boxInteriorLight.classList.add("light-burst");
        const boxRect = giftBox.getBoundingClientRect();
        launchConfetti(boxRect.left + boxRect.width / 2, boxRect.top + boxRect.height / 2, 140);
        playGiftChimeSound();
      }, 900);

      // 5. Birthday card rises from the gift box
      setTimeout(() => {
        if (risingCard) risingCard.classList.add("card-revealed");
      }, 1300);

      // 6. Card expands toward the screen
      setTimeout(() => {
        if (risingCard) risingCard.classList.add("card-expanded");
      }, 2100);

      // 7. Main experience fades in smoothly
      setTimeout(() => {
        if (openingScreen) openingScreen.classList.add("hidden");
        if (mainExperience) mainExperience.classList.add("visible");
        if (floatingNav) floatingNav.classList.add("visible");
        document.body.classList.remove("opening-active");

        // Autoplay background music if permitted
        attemptMusicAutoplay();

        // Additional celebration confetti
        launchConfetti(window.innerWidth / 2, window.innerHeight * 0.35, 100);
      }, 2900);
    });
  }

  // Reverse Cinematic Closing Animation
  if (closeSurpriseBtn) {
    closeSurpriseBtn.addEventListener("click", () => {
      // Smooth scroll back to top first
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        // Fade out main content and hide navigation
        if (mainExperience) mainExperience.classList.remove("visible");
        if (floatingNav) floatingNav.classList.remove("visible");

        // Reveal opening screen
        if (openingScreen) openingScreen.classList.remove("hidden");
        document.body.classList.add("opening-active");

        // Shrink card back
        if (risingCard) {
          risingCard.classList.remove("card-expanded");
          risingCard.classList.remove("card-revealed");
        }

        // Close interior lights & lid
        setTimeout(() => {
          if (boxInteriorLight) boxInteriorLight.classList.remove("light-burst");
          if (burstRays) burstRays.classList.remove("active");
          if (giftLid) giftLid.classList.remove("lid-opened");
        }, 600);

        // Remove glow and restore opening button
        setTimeout(() => {
          if (giftBox) giftBox.classList.remove("glowing");
          if (openSurpriseBtn) openSurpriseBtn.classList.remove("fade-out");
        }, 1300);
      }, 350);
    });
  }
}

/* =========================================================
   9. DUAL-ENGINE AUDIO SYSTEM (SYNTHESIZER + MP3)
   ========================================================= */
let audioContext = null;
let isMusicPlaying = false;
let synthTimer = null;
let bgAudio = null;

function initAudioController() {
  const musicToggleBtn = document.getElementById("musicToggleBtn");
  const musicTooltip = document.getElementById("musicTooltip");
  bgAudio = document.getElementById("bgAudio");

  if (!musicToggleBtn) return;

  musicToggleBtn.addEventListener("click", () => {
    toggleMusicPlayback();
  });
}

function toggleMusicPlayback() {
  const musicToggleBtn = document.getElementById("musicToggleBtn");
  const musicTooltip = document.getElementById("musicTooltip");

  if (isMusicPlaying) {
    // Turn Music OFF
    stopMusic();
    if (musicToggleBtn) musicToggleBtn.classList.remove("playing");
    if (musicTooltip) musicTooltip.textContent = "Play Music";
  } else {
    // Turn Music ON
    startMusic();
    if (musicToggleBtn) musicToggleBtn.classList.add("playing");
    if (musicTooltip) musicTooltip.textContent = "Music ON";
  }
}

function startMusic() {
  isMusicPlaying = true;

  // Try HTML5 Audio element first
  if (bgAudio) {
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Native MP3 is playing nicely
        })
        .catch(err => {
          // Native MP3 failed or is silent placeholder; fall back to Web Audio procedural music box
          startDreamySynthesizer();
        });
    }
  } else {
    startDreamySynthesizer();
  }
}

function stopMusic() {
  isMusicPlaying = false;
  if (bgAudio) {
    bgAudio.pause();
    bgAudio.currentTime = 0;
  }
  stopDreamySynthesizer();
}

function attemptMusicAutoplay() {
  // If not already playing, try gently
  if (!isMusicPlaying) {
    toggleMusicPlayback();
  }
}

// Procedural Web Audio Dreamy Music Box (Lullaby / Birthday Melody)
// Always plays soothing, romantic, crystalline chimes even if no external MP3 is present!
function getAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioContext = new AudioCtx();
  }
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
}

function playSynthNote(freq, time, duration = 0.9, gainVal = 0.15) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  // Dual tone for warm bell / celesta timbre
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, time);

  // Soft envelope
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(gainVal, time + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(time);
  osc.stop(time + duration);
}

function startDreamySynthesizer() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Happy Birthday / Dreamy Melody Notes (in Hz):
  // C4, D4, E4, F4, G4, A4, B4, C5...
  const melody = [
    { note: 392.00, dur: 0.4 }, // G4
    { note: 392.00, dur: 0.4 }, // G4
    { note: 440.00, dur: 0.8 }, // A4
    { note: 392.00, dur: 0.8 }, // G4
    { note: 523.25, dur: 0.8 }, // C5
    { note: 493.88, dur: 1.2 }, // B4

    { note: 392.00, dur: 0.4 }, // G4
    { note: 392.00, dur: 0.4 }, // G4
    { note: 440.00, dur: 0.8 }, // A4
    { note: 392.00, dur: 0.8 }, // G4
    { note: 587.33, dur: 0.8 }, // D5
    { note: 523.25, dur: 1.2 }, // C5

    { note: 392.00, dur: 0.4 }, // G4
    { note: 392.00, dur: 0.4 }, // G4
    { note: 783.99, dur: 0.8 }, // G5
    { note: 659.25, dur: 0.8 }, // E5
    { note: 523.25, dur: 0.8 }, // C5
    { note: 493.88, dur: 0.8 }, // B4
    { note: 440.00, dur: 1.0 }, // A4

    { note: 698.46, dur: 0.4 }, // F5
    { note: 698.46, dur: 0.4 }, // F5
    { note: 659.25, dur: 0.8 }, // E5
    { note: 523.25, dur: 0.8 }, // C5
    { note: 587.33, dur: 0.8 }, // D5
    { note: 523.25, dur: 1.6 }  // C5
  ];

  let noteIdx = 0;
  function scheduleNextNote() {
    if (!isMusicPlaying) return;
    const current = melody[noteIdx];
    const ctxNow = ctx.currentTime;

    playSynthNote(current.note, ctxNow, current.dur * 1.5, 0.12);
    // Subtle lower harmony note for richness
    playSynthNote(current.note / 2, ctxNow, current.dur * 1.8, 0.05);

    noteIdx = (noteIdx + 1) % melody.length;
    synthTimer = setTimeout(scheduleNextNote, current.dur * 950);
  }

  scheduleNextNote();
}

function stopDreamySynthesizer() {
  if (synthTimer) {
    clearTimeout(synthTimer);
    synthTimer = null;
  }
}

// Sound Effects (Web Audio Synth)
function playGiftChimeSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const chord = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
  chord.forEach((freq, idx) => {
    playSynthNote(freq, now + idx * 0.1, 1.2, 0.14);
  });
}

function playWishChimeSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const notes = [659.25, 783.99, 987.77, 1318.51];
  notes.forEach((freq, idx) => {
    playSynthNote(freq, now + idx * 0.12, 1.6, 0.15);
  });
}

/* =========================================================
   10. FLOATING NAVIGATION & SMOOTH SCROLLING
   ========================================================= */
function initNavigation() {
  const navHamburger = document.getElementById("navHamburger");
  const navLinks = document.getElementById("navLinks");
  const navLinkItems = document.querySelectorAll(".nav-link");

  if (navHamburger && navLinks) {
    navHamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Smooth scroll and active indicator
  navLinkItems.forEach(link => {
    link.addEventListener("click", (e) => {
      if (navLinks) navLinks.classList.remove("mobile-open");
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Active section spy on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 200;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinkItems.forEach(item => {
          item.classList.remove("active");
          if (item.getAttribute("href") === `#${sectionId}`) {
            item.classList.add("active");
          }
        });
      }
    });
  });
}
