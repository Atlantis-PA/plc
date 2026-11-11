document.addEventListener('DOMContentLoaded', () => {
  // Typewriter
  const typeEl = document.getElementById('typewriter');
  const fullText = 'Panama <span class="thin">Learning</span> Code';
  let idx = 0;
  function typeLoop() {
    if (idx <= fullText.length) {
      typeEl.innerHTML = fullText.slice(0, idx);
      idx++;
      setTimeout(typeLoop, 55);
    }
  }
  if(typeEl) typeLoop();

  // Partículas
  const canvas = document.getElementById('particles');
  if(canvas) {
    const ctx = canvas.getContext('2d');
    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    }
    resize();
    window.addEventListener('resize', resize);
    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2
    }));
    function loop() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(loop);
    }
    loop();
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll('[class*="reveal"], .card, .stat, .event');
  const reveal = (el, delay=0) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .9s cubic-bezier(.16,.8,.24,1), transform .9s cubic-bezier(.16,.8,.24,1)';
    const io = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
  };
  revealEls.forEach((el,i) => reveal(el, i*60));

  // Scroll spy
  const links = document.querySelectorAll('.links a');
  const sections = ['hero','features','stats','events','newsletter'];
  const spy = () => {
    let found = 'hero';
    for(const id of sections) {
      const el = document.getElementById(id);
      if(el) {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight/2 && rect.bottom > 80) found = id;
      }
    }
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + found));
  };
  window.addEventListener('scroll', spy, { passive:true });
  spy();

  // Toggle tema
    const themeBtn = document.getElementById('theme-toggle');
    function setTheme(light) {
      document.documentElement.classList.toggle('light', light);
      localStorage.setItem('plc-theme', light ? 'light' : 'dark');
      themeBtn.textContent = light ? '☀️' : '🌙';
    }
    if(themeBtn) {
      let light = localStorage.getItem('plc-theme') === 'light';
      if(!localStorage.getItem('plc-theme')) {
        light = window.matchMedia('(prefers-color-scheme: light)').matches;
      }
      setTheme(light);
      themeBtn.addEventListener('click', () => {
        light = !light;
        setTheme(light);
      });
    }

  // Newsletter
  const form = document.getElementById('newsletter-form');
  const okMsg = document.getElementById('newsletter-ok');
  if(form && okMsg) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button');
      btn.disabled = true;
      btn.textContent = 'Enviando…';
      try {
        const body = new URLSearchParams(new FormData(form));
        const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
        if (!res.ok) throw new Error();
        form.style.display = 'none';
        okMsg.style.display = 'block';
      } catch {
        btn.disabled = false;
        btn.textContent = 'Suscribirme';
        const errEl = document.createElement('p');
        errEl.style.cssText = 'color:var(--color-danger);font-size:.9rem;margin-top:.8rem;';
        errEl.textContent = 'Algo salió mal. Intenta de nuevo.';
        form.after(errEl);
        setTimeout(() => errEl.remove(), 4000);
      }
    });
  }
});
