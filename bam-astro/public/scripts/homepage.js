(function () {
  'use strict';

  // Hero form: set dynamic subject before submit
  const heroForm = document.getElementById('hero-quote-form');
  if (heroForm) {
    heroForm.addEventListener('submit', function () {
      const name = heroForm.querySelector('[name="name"]')?.value?.trim() || '';
      const phone = heroForm.querySelector('[name="phone"]')?.value?.trim() || '';
      const zip = heroForm.querySelector('[name="zip"]')?.value?.trim() || '';
      const projectType = heroForm.querySelector('[name="project-type"]')?.value?.trim() || 'Project';
      const subj = heroForm.querySelector('[name="subject"]');
      if (subj) subj.value = 'New ' + projectType + ' lead from ' + name + ', ' + phone + ', ' + zip;
    });
  }

  // Before/After sliders
  document.querySelectorAll('.before-after-card').forEach((card) => {
    const overlay = card.querySelector('.before-overlay');
    const handle = card.querySelector('.slider-handle');
    const container = card.querySelector('.ba-container');
    if (!overlay || !handle || !container) return;

    let isDragging = false;

    function updatePosition(clientX) {
      const rect = container.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      overlay.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = `${pct}%`;
    }

    handle.addEventListener('mousedown', (e) => { e.preventDefault(); isDragging = true; });
    handle.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });

    window.addEventListener('mousemove', (e) => { if (isDragging) { e.preventDefault(); updatePosition(e.clientX); } });
    window.addEventListener('touchmove', (e) => { if (isDragging) updatePosition(e.touches[0].clientX); }, { passive: true });

    window.addEventListener('mouseup', () => (isDragging = false));
    window.addEventListener('touchend', () => (isDragging = false));
  });

  // Process steps scroll-progress animation
  (function () {
    const steps = document.querySelectorAll('.process-step');
    const progressLine = document.getElementById('process-progress-line');
    const totalSteps = steps.length;
    if (!totalSteps) return;

    function setStepActive(step, active) {
      const icon = step.querySelector('.process-icon');
      const badge = step.querySelector('.process-badge');
      const connector = step.querySelector('.process-connector');
      const label = step.querySelector('.process-step-label');

      if (active) {
        if (icon) {
          icon.style.backgroundColor = 'var(--color-gold, #C09C5B)';
          icon.style.color = 'var(--color-navy, #004687)';
          icon.style.borderColor = 'var(--color-gold, #C09C5B)';
        }
        if (badge) {
          badge.style.backgroundColor = '#fff';
          badge.style.color = 'var(--color-navy, #004687)';
          badge.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,.3)';
        }
        if (connector) connector.style.backgroundColor = 'var(--color-gold, #C09C5B)';
        if (label) label.style.opacity = '1';
      } else {
        if (icon) { icon.style.backgroundColor = ''; icon.style.color = ''; icon.style.borderColor = ''; }
        if (badge) { badge.style.backgroundColor = ''; badge.style.color = ''; badge.style.boxShadow = ''; }
        if (connector) connector.style.backgroundColor = '';
        if (label) label.style.opacity = '';
      }
    }

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const trigger = window.innerHeight * 0.55;
        let activeCount = 0;

        steps.forEach((step) => {
          const icon = step.querySelector('.process-icon');
          if (!icon) return;
          const iconTop = icon.getBoundingClientRect().top;
          const isActive = iconTop < trigger;
          setStepActive(step, isActive);
          if (isActive) activeCount++;
        });

        if (progressLine) {
          progressLine.style.transform = `scaleX(${activeCount / totalSteps})`;
        }

        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  // ZIP Code Checker
  (function () {
    const coreZips = new Set([
      '37901','37902','37909','37912','37914','37916','37917','37918','37919',
      '37920','37921','37922','37923','37924','37927','37928','37929','37930',
      '37931','37932','37933','37934','37938','37939','37940','37950',
      '37849','37830','37831','37828',
      '37840','37716','37705',
      '37803','37804','37801','37701','37737','37742','37882','37886','37777',
      '37774','37771','37772',
      '37806','37871','37721','37754','37709','37865','37853',
    ]);

    const bufferZips = new Set([
      '37748','37763','37854','37880','37846',
      '37876','37764','37862',
      '37725','37760','37890',
      '37885','37826','37354',
      '37769','37757','37766',
      '37861',
      '37874',
    ]);

    const input = document.getElementById('zip-input');
    const btn = document.getElementById('zip-check-btn');
    const textResult = document.getElementById('zip-result-text');
    const card = document.getElementById('zip-result-card');
    const cardHeadline = document.getElementById('zip-card-headline');
    const cardSub = document.getElementById('zip-card-sub');
    if (!input || !btn || !textResult || !card || !cardHeadline || !cardSub) return;

    function hideAll() {
      textResult.classList.add('hidden');
      card.classList.add('hidden');
    }

    function showCard(headline, sub) {
      hideAll();
      cardHeadline.textContent = headline;
      cardSub.textContent = sub;
      card.classList.remove('hidden');
      const inner = card.querySelector('.zip-card-enter');
      const check = card.querySelector('.zip-check-pop');
      if (inner) { inner.style.animation = 'none'; inner.offsetHeight; inner.style.animation = ''; }
      if (check) { check.style.animation = 'none'; check.offsetHeight; check.style.animation = ''; }
    }

    function showText(msg, cls) {
      hideAll();
      textResult.innerHTML = msg;
      textResult.className = 'mt-4 text-sm font-medium ' + cls;
      textResult.classList.remove('hidden');
    }

    function checkZip() {
      const zip = input.value.trim();
      if (zip.length !== 5 || !/^\d{5}$/.test(zip)) {
        showText('Please enter a valid 5-digit ZIP code.', 'text-red-500');
        return;
      }
      if (coreZips.has(zip)) {
        showCard(
          'Great news — we serve your area!',
          'We regularly complete projects in your ZIP code. Get a free, no-obligation estimate today.'
        );
      } else if (bufferZips.has(zip)) {
        showCard(
          "You're within our service range!",
          "Your area is within our extended coverage. We'd be happy to schedule an estimate."
        );
      } else {
        showText(
          'We may still serve your area. <a href="/contact/" class="text-gold font-bold underline">Contact us to check →</a>',
          'text-navy'
        );
      }
    }

    btn.addEventListener('click', checkZip);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') checkZip(); });
  })();

  // Multi-step CTA quote form
  (function () {
    const emailInput = document.getElementById('cta-email');
    const emailCheck = document.getElementById('cta-email-check');
    const advanceBtn = document.getElementById('cta-advance-btn');
    const emailError = document.getElementById('cta-email-error');
    const trustLine = document.getElementById('cta-trust');
    const step2 = document.getElementById('cta-step2');
    const step3 = document.getElementById('cta-step3');
    const step1 = document.getElementById('cta-step1');
    const submitBtn = document.getElementById('cta-submit-btn');
    if (!emailInput || !advanceBtn || !step2 || !step3 || !step1 || !submitBtn) return;

    function showStep2() {
      const email = emailInput.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!valid) {
        if (emailError) emailError.classList.remove('hidden');
        emailInput.classList.add('border-red-400/50');
        return;
      }

      if (emailError) emailError.classList.add('hidden');
      emailInput.classList.remove('border-red-400/50');

      emailInput.readOnly = true;
      emailInput.classList.remove('bg-white/10', 'border-white/20');
      emailInput.classList.add('bg-gold/10', 'border-gold/30', 'pr-12');
      if (emailCheck) emailCheck.classList.remove('hidden');

      advanceBtn.style.display = 'none';
      if (trustLine) trustLine.classList.add('hidden');

      step2.classList.remove('max-h-0', 'opacity-0');
      step2.classList.add('max-h-[500px]', 'opacity-100');
    }

    advanceBtn.addEventListener('click', showStep2);
    emailInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); showStep2(); }
    });
    emailInput.addEventListener('input', () => {
      if (emailError) emailError.classList.add('hidden');
      emailInput.classList.remove('border-red-400/50');
    });

    submitBtn.addEventListener('click', async () => {
      const name = document.getElementById('cta-name')?.value?.trim();
      const phone = document.getElementById('cta-phone')?.value?.trim();
      const zip = document.getElementById('cta-zip')?.value?.trim();
      const service = document.getElementById('cta-service')?.value;

      if (!name || !phone || !zip || !service) return;

      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      try {
        const subject = 'New ' + (service || 'Project') + ' lead from ' + name + ', ' + phone + ', ' + zip;
        const body = new URLSearchParams({
          'form-name': 'homepage-cta-quote',
          subject,
          email: emailInput.value.trim(),
          name,
          phone,
          zip,
          service,
        });
        await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
      } catch (_) {}

      step1.classList.add('hidden');
      step2.classList.add('hidden');
      if (step3) step3.classList.remove('hidden');
    });
  })();
})();
