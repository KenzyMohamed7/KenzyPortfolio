(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Preloader ── */
  const preloader = document.querySelector('.preloader');
  function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add('hide');
    document.body.classList.add('loaded');
    initHeroEntrance();
  }
  window.addEventListener('load', () => setTimeout(hidePreloader, prefersReduced || matchMedia('(pointer:coarse)').matches ? 200 : 600));

  /* ── Mobile nav ── */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  /* ── Active nav link ── */
  const page = document.body.dataset.page;
  if (page && navLinks) {
    navLinks.querySelectorAll('a').forEach((a) => {
      const href = a.getAttribute('href') || '';
      if (href.includes(page) || (page === 'home' && (href === 'index.html' || href === '/' || href === './'))) {
        a.classList.add('active');
      }
    });
  }

  /* ── Nav scroll effect ── */
  const nav = document.querySelector('.nav');
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    const backTop = document.querySelector('.back-top');
    if (backTop) backTop.classList.toggle('show', window.scrollY > 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Back to top ── */
  const backTop = document.querySelector('.back-top');
  if (backTop) {
    backTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
    );
  }

  /* ── Hero entrance ── */
  function initHeroEntrance() {
    const hero = document.querySelector('.hero');
    if (hero && !prefersReduced) hero.classList.add('hero-in');
  }
  if (!preloader) initHeroEntrance();

  /* ── Scroll reveal ── */
  if (!prefersReduced) {
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const delay = el.dataset.delay || 0;
            setTimeout(() => el.classList.add('revealed'), delay);
            observer.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      revealEls.forEach((el) => observer.observe(el));
    }
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'));
  }

  /* ── Counter animation ── */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && !prefersReduced) {
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObs.observe(c));
  } else {
    counters.forEach((c) => {
      c.textContent = (c.dataset.count || '0') + (c.dataset.suffix || '');
    });
  }

  /* ── Skill bars ── */
  const skillBars = document.querySelectorAll('.skill-bar span');
  if (skillBars.length && !prefersReduced) {
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width || '0%';
            barObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    skillBars.forEach((bar) => barObs.observe(bar));
  } else {
    skillBars.forEach((bar) => (bar.style.width = bar.dataset.width || '0%'));
  }

  /* ── Hero parallax (subtle, desktop only) ── */
  const heroSection = document.querySelector('.hero');
  if (heroSection && !prefersReduced && matchMedia('(pointer:fine)').matches) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const photo = heroSection.querySelector('.hero-photo-ring');
      if (photo) photo.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
    });
    heroSection.addEventListener('mouseleave', () => {
      const photo = heroSection.querySelector('.hero-photo-ring');
      if (photo) photo.style.transform = '';
    });
  }

  /* ── Typing effect ── */
  const typingEl = document.querySelector('[data-typing]');
  if (typingEl && !prefersReduced) {
    let words = typingEl.dataset.typing.split('|');
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let typingTimer = null;
    function type() {
      const word = words[wordIdx % words.length];
      if (!deleting) {
        typingEl.textContent = word.slice(0, ++charIdx);
        if (charIdx === word.length) {
          deleting = true;
          typingTimer = setTimeout(type, 2000);
          return;
        }
      } else {
        typingEl.textContent = word.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      typingTimer = setTimeout(type, deleting ? 40 : 80);
    }
    typingTimer = setTimeout(type, 1000);

    /* Restart cleanly when the language (and word list) changes */
    window.addEventListener('kenzy:langchange', () => {
      words = typingEl.dataset.typing.split('|');
      wordIdx = 0; charIdx = 0; deleting = false;
      typingEl.textContent = '';
      if (typingTimer) clearTimeout(typingTimer);
      typingTimer = setTimeout(type, 400);
    });
  } else if (typingEl && prefersReduced) {
    window.addEventListener('kenzy:langchange', () => {
      const words = typingEl.dataset.typing.split('|');
      typingEl.textContent = words[0] || '';
    });
  }

  /* ── Tap / click animations on cards & icons ── */
  if (!prefersReduced) {
    const tapSelectors = [
      '.highlight-card', '.stat-card', '.pill', '.video-card',
      '.fact-card', '.contact-item', '.timeline-item', '.card', '.icon-card'
    ];
    const tapEls = document.querySelectorAll(tapSelectors.join(','));
    tapEls.forEach((el) => {
      el.classList.add('tap-card');
    });

    // Release any taps when pointer leaves the element (prevents stuck-small state)
    document.addEventListener('pointerup', () => {
      document.querySelectorAll('.tap-card.is-tapping').forEach((el) => el.classList.remove('is-tapping'));
    });
    document.addEventListener('pointercancel', () => {
      document.querySelectorAll('.tap-card.is-tapping').forEach((el) => el.classList.remove('is-tapping'));
    });
    tapEls.forEach((el) => {
      el.addEventListener('pointerdown', () => el.classList.add('is-tapping'));
      el.addEventListener('pointerleave', () => el.classList.remove('is-tapping'));
      // pop-on-click for achievement/timeline items
      if (el.classList.contains('highlight-card') || el.classList.contains('timeline-item')) {
        el.addEventListener('click', () => {
          el.classList.remove('pop-in');
          void el.offsetWidth; // reflow to restart animation
          el.classList.add('pop-in');
        });
      }
    });

    // Ripple-like press on primary buttons
    document.querySelectorAll('.btn, .contact-icon, .onair').forEach((btn) => {
      btn.addEventListener('pointerdown', () => btn.classList.add('is-tapping'));
      btn.addEventListener('pointerup', () => btn.classList.remove('is-tapping'));
      btn.addEventListener('pointerleave', () => btn.classList.remove('is-tapping'));
    });
  }

  /* ── Contact form ── */
  const form = document.getElementById('contactForm');
  const formSuccess = document.querySelector('.form-success');
  const EMAIL = 'nkenzy77@gmail.com';
  const WHATSAPP = '201282333616';

  function collectFields() {
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const subject = form.querySelector('[name="subject"]');
    const message = form.querySelector('[name="message"]');
    let valid = true;
    [name, email, message].forEach((field) => {
      if (field && field.value.trim()) {
        field.style.borderColor = '';
      } else if (field) {
        valid = false;
        field.style.borderColor = 'var(--red)';
      }
    });
    return valid ? { name: name.value.trim(), email: email.value.trim(), subject: subject.value, message: message.value.trim() } : null;
  }

  function showResult() {
    if (formSuccess) {
      formSuccess.classList.add('show');
      setTimeout(() => formSuccess && formSuccess.classList.remove('show'), 6000);
    }
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = collectFields();
      if (!data) return;
      const body = encodeURIComponent(
        'Name: ' + data.name + '\n' +
        'Email: ' + data.email + '\n' +
        'Subject: ' + data.subject + '\n\n' +
        data.message
      );
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Message from ' + data.name + ' — ' + data.subject) + '&body=' + body;
      showResult();
    });

    const waButton = document.getElementById('waButton');
    if (waButton) {
      waButton.addEventListener('click', () => {
        const data = collectFields();
        if (!data) return;
        const text = encodeURIComponent(
          'Name: ' + data.name + '\n' +
          'Email: ' + data.email + '\n' +
          'Subject: ' + data.subject + '\n\n' +
          data.message
        );
        window.open('https://wa.me/' + WHATSAPP + '?text=' + text, '_blank');
        form.reset();
        showResult();
      });
    }
  }

  /* ── Video placeholder pulse on click ── */
  document.querySelectorAll('.video-frame').forEach((frame) => {
    frame.addEventListener('click', () => {
      const ph = frame.querySelector('.video-placeholder');
      if (ph) {
        ph.style.animation = 'none';
        ph.offsetHeight;
        ph.style.animation = 'pulse .4s ease';
      }
    });
  });

  const style = document.createElement('style');
  style.textContent = '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}';
  document.head.appendChild(style);
})();
