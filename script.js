const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('[data-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.dataset.product;
    const select = document.querySelector('select[name="product"]');
    if (select) {
      [...select.options].forEach(o => o.selected = o.text === product);
    }
    document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});
  });
});

document.querySelector('#enquiryForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const email = 'ADD-YOUR-OFFICIAL-EMAIL@example.com'; // Replace before publishing
  const subject = `Wholesale enquiry — ${data.get('product') || 'Dry Fruits'}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Company: ${data.get('company')}`,
    `Email: ${data.get('email')}`,
    `Product: ${data.get('product')}`,
    `Quantity: ${data.get('quantity')}`,
    `Destination: ${data.get('destination')}`,
    '',
    data.get('message') || ''
  ].join('\n');
  const note = document.querySelector('#formNote');
  if (email.includes('ADD-YOUR')) {
    note.textContent = 'Form is ready. Replace the placeholder email in script.js with your official business email before publishing.';
    note.style.color = '#d5b269';
    return;
  }
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
