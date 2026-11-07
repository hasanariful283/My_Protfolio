const progress = document.getElementById("progress");
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = (scrollable > 0 ? window.scrollY / scrollable * 100 : 0) + "%";
});
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".heading,.card,.research,.mini-grid article,.timeline-card,.project,.leadership .card,.contact-links,.form,.hero-copy,.hero-art").forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});
const form = document.getElementById("contactForm");
if (form) form.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name"), email = data.get("email"), subject = data.get("subject"), message = data.get("message");
  const recipient = "YOUR_EMAIL@example.com";
  if (recipient === "YOUR_EMAIL@example.com") {
    document.getElementById("formStatus").textContent = "Please replace YOUR_EMAIL@example.com in index.html with your real email address before using this form.";
    return;
  }
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
});
