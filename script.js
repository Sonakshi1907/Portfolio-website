// Select the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Scroll smoothly to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// =========================
// Active Navigation on Scroll
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // INPUTS

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // ERRORS

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  // SUCCESS MESSAGE

  const success = document.getElementById("successMessage");

  success.innerHTML = "";

  // RESET

  document
    .querySelectorAll(".error")
    .forEach((error) => (error.innerHTML = ""));

  document.querySelectorAll("input, textarea").forEach((input) => {
    input.classList.remove("input-error");

    input.classList.remove("input-success");
  });

  // NAME

  if (name.value.trim().length < 3) {
    nameError.innerHTML = "Name should contain at least 3 characters.";

    name.classList.add("input-error");

    isValid = false;
  } else {
    name.classList.add("input-success");
  }

  // EMAIL

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value.trim())) {
    emailError.innerHTML = "Please enter a valid email address.";

    email.classList.add("input-error");

    isValid = false;
  } else {
    email.classList.add("input-success");
  }

  // SUBJECT

  if (subject.value.trim().length < 5) {
    subjectError.innerHTML = "Subject must be at least 5 characters.";

    subject.classList.add("input-error");

    isValid = false;
  } else {
    subject.classList.add("input-success");
  }

  // MESSAGE

  if (message.value.trim().length < 15) {
    messageError.innerHTML = "Message should contain at least 15 characters.";

    message.classList.add("input-error");

    isValid = false;
  } else {
    message.classList.add("input-success");
  }

  // SUCCESS

  if (isValid) {
    alert("🎉 Message validated successfully!");

    success.classList.add("success");

    form.reset();

    document.querySelectorAll("input, textarea").forEach((input) => {
      input.classList.remove("input-success");
    });
  }
});
let heading = document.querySelectorAll(".about-content");
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".about-content").forEach((heading) => {
  gsap.from(heading, {
    y: 80,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
      trigger: heading,
      start: "top 80%",

      // Remove later
    },
  });
});

const cursor = document.querySelector(".cursor");

const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
});

const hoverItems = document.querySelectorAll("a,button");

hoverItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.width = "70px";
    cursor.style.height = "70px";

    cursor.style.background = "rgba(227,154,245,.15)";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.width = "10px";
    cursor.style.height = "10px";

    cursor.style.background = "transparent";
  });
});

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

function animate() {
  currentX += (mouseX - currentX) * 0.15;

  currentY += (mouseY - currentY) * 0.15;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%,-50%) scale(.75)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%,-50%) scale(1)";
});

new Typed("#typing", {
  strings: [
    "Frontend Developer",
    "Tech Enthusiast",
    "Problem Solver",
    "Building Beautiful Websites",
  ],

  typeSpeed: 70,

  backSpeed: 40,

  backDelay: 1500,

  loop: true,

  showCursor: true,

  cursorChar: "|",
});
