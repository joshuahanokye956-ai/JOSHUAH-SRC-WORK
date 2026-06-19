// ================= NAV TOGGLE =================
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });
}

// ================= TESTIMONIAL SLIDER =================
const track = document.querySelector(".testimonial-track");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  const cards = document.querySelectorAll(".testimonial-card");
  const offset = -index * 100;
  track.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length;
  showSlide(currentIndex);
}, 5000);

// ================= SPORTS TICKER =================
const tickerTrack = document.querySelector(".ticker-track");
let tickerOffset = 0;

function animateTicker() {
  tickerOffset -= 1; // speed of scroll
  tickerTrack.style.transform = `translateX(${tickerOffset}px)`;

  // Reset when scrolled past half its width
  if (Math.abs(tickerOffset) > tickerTrack.scrollWidth / 2) {
    tickerOffset = 0;
  }

  requestAnimationFrame(animateTicker);
}

if (tickerTrack) {
  animateTicker();
}

// ================= SEARCH BAR (optional enhancement) =================
const searchInput = document.querySelector(".hero-actions input[type='search']");
if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      alert(`Searching for: ${searchInput.value}`);
      // You can replace alert with actual search logic
    }
  });
}

// ================= NAV MENU TOGGLE =================
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("open");
}

// ================= ACTIVE LINK HIGHLIGHT =================
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// ================= CARD ANIMATION =================
const cards = document.querySelectorAll(".card");

function revealCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// ================= SMALL HERO EFFECT =================
const hero = document.querySelector(".hero-small");
if (hero) {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY * 0.5;
    hero.style.backgroundPositionY = `${offset}px`;
  });
}


// ================= NAV TOGGLE =================
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });
}

// ================= ACTIVE LINK HIGHLIGHT =================
const navItems = document.querySelectorAll(".site-nav a");
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// ================= BLOG SEARCH =================
const searchInput = document.getElementById("search-input");
const postCards = document.querySelectorAll(".search-card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    postCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ================= SCROLL ANIMATION FOR POSTS =================
const posts = document.querySelectorAll(".post-card");

function revealPosts() {
  const triggerBottom = window.innerHeight * 0.85;
  posts.forEach(post => {
    const postTop = post.getBoundingClientRect().top;
    if (postTop < triggerBottom) {
      post.classList.add("show");
    } else {
      post.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealPosts);
window.addEventListener("load", revealPosts);


// ================= NAV TOGGLE =================
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });
}

// ================= ACTIVE LINK HIGHLIGHT =================
const navItems = document.querySelectorAll(".site-nav a");
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// ================= FORM VALIDATION =================
const registerForm = document.getElementById("register-form");
const registerMessage = document.getElementById("register-message");
const captchaChallenge = document.getElementById("captcha-challenge");
const captchaAnswer = document.getElementById("captcha-answer");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;
    const captcha = captchaAnswer.value.trim();

    // Basic validation
    if (!fullName || !email || !interest) {
      registerMessage.textContent = "Please fill in all required fields.";
      registerMessage.style.color = "red";
      return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      registerMessage.textContent = "Please enter a valid email address.";
      registerMessage.style.color = "red";
      return;
    }

    // CAPTCHA validation (6 + 2 = 8)
    if (captcha !== "8") {
      registerMessage.textContent = "Verification failed. Please try again.";
      registerMessage.style.color = "red";
      return;

      document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");
  const message = document.getElementById("register-message");
  const captchaAnswer = document.getElementById("captcha-answer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check captcha
    if (captchaAnswer.value.trim() !== "8") {
      alert("❌ Verification failed. Please try again.");
      message.textContent = "❌ Verification failed. Please try again.";
      message.style.color = "red";
      return;
    }

    // Check required fields
    if (!form.checkValidity()) {
      alert("⚠️ Please fill out all required fields.");
      message.textContent = "⚠️ Please fill out all required fields.";
      message.style.color = "orange";
      return;
    }

    // Success
    alert("✅ Register successfully!");
    message.textContent = "✅ Register successfully!";
    message.style.color = "green";

    // Reset form
    form.reset();
  });
});

    }

    // Success
    registerMessage.textContent = "Registration successful! Welcome to SRC Sports Academy.";
    registerMessage.style.color = "green";

    // Reset form
    registerForm.reset();
  });
}


// ================= NAV TOGGLE =================
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });
}

// ================= ACTIVE LINK HIGHLIGHT =================
const navItems = document.querySelectorAll(".site-nav a");
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// ================= FAQ TOGGLE =================
const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const answer = toggle.nextElementSibling;
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    // Collapse all other FAQs
    faqToggles.forEach(btn => {
      btn.setAttribute("aria-expanded", "false");
      btn.nextElementSibling.style.maxHeight = null;
    });

    // Expand selected FAQ
    if (!isExpanded) {
      toggle.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ================= ACTIVITY CARD ANIMATION =================
const activityCards = document.querySelectorAll(".activity-card");

function revealActivities() {
  const triggerBottom = window.innerHeight * 0.85;
  activityCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealActivities);
window.addEventListener("load", revealActivities);


// ================= NAV MENU TOGGLE =================
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("open");
}

// ================= ACTIVE LINK HIGHLIGHT =================
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// ================= BOOKING FORM VALIDATION =================
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const sport = document.getElementById("sport").value;
  const date = document.getElementById("date").value;
  const captcha = document.getElementById("captcha").value.trim();

  // Check required fields
  if (!name || !email || !sport || !date || !captcha) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Validate email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate CAPTCHA (5 + 3 = 8)
  if (captcha !== "8") {
    alert("Verification failed. Please answer the CAPTCHA correctly.");
    return false;
  }

  // Success
  alert("Booking successful! We’ll confirm your session via email.");
  return true;
}


// ================= NAV TOGGLE =================
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });
}

// ================= ACTIVE LINK HIGHLIGHT =================
const navItems = document.querySelectorAll(".site-nav a");
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// ================= SCROLL ANIMATION FOR SCHEDULE =================
const scheduleCards = document.querySelectorAll(".schedule-card");

function revealSchedule() {
  const triggerBottom = window.innerHeight * 0.85;
  scheduleCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealSchedule);
window.addEventListener("load", revealSchedule);

// ================= SCROLL ANIMATION FOR FIXTURES =================
const fixtures = document.querySelectorAll(".fixture-list article");

function revealFixtures() {
  const triggerBottom = window.innerHeight * 0.85;
  fixtures.forEach(fixture => {
    const fixtureTop = fixture.getBoundingClientRect().top;
    if (fixtureTop < triggerBottom) {
      fixture.classList.add("show");
    } else {
      fixture.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealFixtures);
window.addEventListener("load", revealFixtures);






