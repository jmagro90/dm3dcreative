const copyButton = document.getElementById('copyPix');
const copyStatus = document.getElementById('copyStatus');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('11986566109');
    copyStatus.textContent = 'Chave Pix copiada!';
    copyButton.textContent = 'Chave copiada ✓';
    setTimeout(() => {
      copyStatus.textContent = '';
      copyButton.textContent = 'Copiar chave Pix';
    }, 2600);
  } catch {
    copyStatus.textContent = 'Copie manualmente: 11986566109';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
