document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());
const form = document.getElementById("contactForm");
if (form) form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent("MN V2Ray VPN enquiry");
  const body = encodeURIComponent(`Name: ${name}\nContact: ${contact}\n\nMessage:\n${message}`);
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
});