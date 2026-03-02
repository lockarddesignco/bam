(function () {
  'use strict';

  var MOMENTUM_DECAY = 0.92;
  var MIN_VELOCITY = 0.3;

  document.querySelectorAll('.marquee-drag').forEach(function (wrapper) {
    var inner = wrapper.firstElementChild;
    if (!inner) return;

    var dragging = false;
    var startX = 0;
    var lastX = 0;
    var lastTime = 0;
    var velocity = 0;
    var offset = 0;
    var rafId = null;
    var moved = false;
    var halfWidth = 0;

    function getHalfWidth() {
      if (halfWidth <= 0) halfWidth = inner.scrollWidth / 2;
      return halfWidth;
    }

    function pauseCSS() {
      var m = window.getComputedStyle(inner).transform;
      halfWidth = inner.scrollWidth / 2;
      var tx = 0;
      if (m && m !== 'none') {
        var v = m.match(/matrix.*\((.+)\)/);
        if (v) tx = parseFloat(v[1].split(', ')[4]) || 0;
      }
      inner.style.animation = 'none';
      offset = tx;
      inner.style.transform = 'translateX(' + offset + 'px)';
    }

    function resumeCSS() {
      inner.style.animation = '';
      inner.style.transform = '';
    }

    function wrap(val) {
      var hw = getHalfWidth();
      if (hw <= 0) return val;
      while (val > 0) val -= hw;
      while (val < -hw) val += hw;
      return val;
    }

    function animateMomentum() {
      if (Math.abs(velocity) < MIN_VELOCITY) {
        resumeCSS();
        wrapper.classList.remove('is-dragging');
        return;
      }
      offset += velocity;
      offset = wrap(offset);
      velocity *= MOMENTUM_DECAY;
      inner.style.transform = 'translateX(' + offset + 'px)';
      rafId = requestAnimationFrame(animateMomentum);
    }

    function onStart(clientX) {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      dragging = true;
      moved = false;
      startX = clientX;
      lastX = clientX;
      lastTime = Date.now();
      velocity = 0;
      pauseCSS();
      wrapper.classList.add('is-dragging');
    }

    function onMove(clientX) {
      if (!dragging) return;
      var now = Date.now();
      var dx = clientX - lastX;
      var dt = now - lastTime;
      if (Math.abs(clientX - startX) > 4) moved = true;
      if (dt > 0) velocity = dx / dt * 16;
      offset += dx;
      offset = wrap(offset);
      inner.style.transform = 'translateX(' + offset + 'px)';
      lastX = clientX;
      lastTime = now;
    }

    function onEnd() {
      if (!dragging) return;
      dragging = false;
      if (Math.abs(velocity) > MIN_VELOCITY) {
        rafId = requestAnimationFrame(animateMomentum);
      } else {
        resumeCSS();
        wrapper.classList.remove('is-dragging');
      }
    }

    wrapper.addEventListener('mousedown', function (e) {
      e.preventDefault();
      onStart(e.clientX);
    });
    wrapper.addEventListener('touchstart', function (e) {
      onStart(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('mousemove', function (e) {
      if (dragging) { e.preventDefault(); onMove(e.clientX); }
    });
    window.addEventListener('touchmove', function (e) {
      if (dragging) onMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);

    wrapper.addEventListener('click', function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  });
})();
