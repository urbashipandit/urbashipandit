let h1 = document.querySelector(".h1");
let text = h1.textContent;
h1.textContent = ""; // Clear original text

let i = 0;

let interval = setInterval(() => {
    if (i < text.length) {
        let span = document.createElement("span");
        span.textContent = text[i];
        span.style.color="golden";
        h1.appendChild(span);
        i++;
    } else {
        clearInterval(interval);
    }
}, 150);

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const type = document.getElementById("projectType").value;
  const message = document.getElementById("message").value;

  if (name && email && type && message) {
    alert(`Thank you, ${name}! We'll contact you soon about your "${type}" project.`);
    this.reset();
  } else {
    alert("Please fill in all the fields.");
  }
});
  const res = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
  if(result.message === 'Message sent successfully') form.reset();
});