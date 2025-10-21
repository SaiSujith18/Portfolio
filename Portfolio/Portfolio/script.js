// ======================
// Dynamic Greeting
// ======================
const greeting = document.createElement('h3');
const hour = new Date().getHours();
let greetText = "Hello";
if (hour < 12) greetText = "Good Morning 🌞";
else if (hour < 18) greetText = "Good Afternoon ☀";
else greetText = "Good Evening 🌙";
greeting.textContent = greetText;
greeting.style.textAlign = "center";
greeting.style.marginBottom = "20px";
document.body.prepend(greeting);

// ======================
// Typewriter Effect (for heading)
// ======================
const heading = document.querySelector('h2');
if (heading) {
  const text = heading.textContent;
  heading.textContent = '';
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      heading.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
}

// ======================
// Smooth Scrolling
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ======================
// Scroll-to-Top Button
// ======================
const topBtn = document.createElement('button');
topBtn.textContent = "↑";
topBtn.id = "topBtn";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#007bff";
topBtn.style.color = "white";
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ======================
// Dark/Light Mode Toggle
// ======================
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "8px 14px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.background = "#333";
toggleBtn.style.color = "#fff";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') 
    ? "☀ Light Mode" 
    : "🌙 Dark Mode";
});

// Dark mode styling
const darkStyle = document.createElement('style');
darkStyle.textContent = `
  body.dark {
    background: #121212;
    color: white;
    transition: 0.3s;
  }
  body.dark .experience-card {
    background: #1e1e1e;
    color: white;
  }
`;
document.head.appendChild(darkStyle);

// ======================
// Section Reveal Animation
// ======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
document.querySelectorAll('.experience-card, p').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
const style = document.createElement('style');
style.textContent = `
.hidden { opacity: 0; transform: translateY(50px); transition: 0.6s; }
.show { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

// ======================
// Accordion (expand details)
// ======================
document.querySelectorAll('.experience-card h3').forEach(title => {
  title.style.cursor = 'pointer';
  title.addEventListener('click', () => {
    const list = title.nextElementSibling;
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });
});

// ======================
// Simple Search Filter (Experience Page)
// ======================
// const searchBox = document.createElement('input');
// searchBox.type = "text";
// searchBox.placeholder = "Search Internship or Role...";
// searchBox.style.display = "block";
// searchBox.style.margin = "20px auto";
// searchBox.style.padding = "10px";
// searchBox.style.width = "80%";
// searchBox.style.borderRadius = "8px";
// searchBox.style.border = "1px solid #ccc";
// document.body.insertBefore(searchBox, document.querySelector('h2').nextSibling);

// searchBox.addEventListener('keyup', () => {
//   const query = searchBox.value.toLowerCase();
//   document.querySelectorAll('.experience-card').forEach(card => {
//     card.style.display = card.textContent.toLowerCase().includes(query)
//       ? 'block'
//       : 'none';
//   });
// });

// ======================
// Modal Popup (on card click)
// ======================
document.querySelectorAll('.experience-card').forEach(card => {
  card.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.innerHTML = `
      <div style="background:white; padding:30px; border-radius:10px; max-width:600px;">
        ${card.innerHTML}
        <button id="closeModal" style="margin-top:20px; background:#007bff; color:white; padding:10px 20px; border:none; border-radius:8px;">Close</button>
      </div>`;
    document.body.appendChild(modal);
    document.getElementById('closeModal').addEventListener('click', () => modal.remove());
  });
});

// ======================
// Skill Counter Animation (optional for Education/Skills section)
// ======================
document.querySelectorAll('.skill-counter').forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const update = () => {
    if (count < target) {
      count++;
      counter.textContent = count + '%';
      requestAnimationFrame(update);
    }
  };
  update();
});

// ======================
// Contact Form Validation (if you have one)
// ======================
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const msg = form.querySelector('textarea');
    if (!name.value || !email.value || !msg.value) {
      e.preventDefault();
      alert('Please fill all fields!');
    }
  });
}


// document.querySelectorAll('.skill-counter').forEach(counter => {
//   const target = +counter.getAttribute('data-target'); // get target number
//   let count = 0;
//   const update = () => {
//     if (count < target) {
//       count++;
//       counter.textContent = count + '%';
//       requestAnimationFrame(update);
//     }
//   };
//   update();
// });