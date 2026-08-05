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
