/**
 * Enhanced UI/UX Interactions for MOVVE
 * Advanced features: 3D tilt, magnetic buttons, ripple effects, parallax, micro-interactions
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ═══════════════════════════════════════════
  // 3D CARD TILT EFFECT
  // ═══════════════════════════════════════════
  function init3DTilt() {
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.service-card, .testimonial-card, .region-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
      });
    });
  }

  // ═══════════════════════════════════════════
  // MAGNETIC BUTTON EFFECT
  // ═══════════════════════════════════════════
  function initMagneticButtons() {
    if (prefersReducedMotion) return;

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ═══════════════════════════════════════════
  // RIPPLE EFFECT ON CLICK
  // ═══════════════════════════════════════════
  function initRippleEffect() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.ripple, .btn, .service-card, .region-card');
      if (!target) return;
      
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: translate(-50%, -50%) scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
      `;
      
      target.style.position = 'relative';
      target.style.overflow = 'hidden';
      target.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  }

  // Add ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleEffect {
      to {
        transform: translate(-50%, -50%) scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ═══════════════════════════════════════════
  // PARALLAX SCROLLING
  // ═══════════════════════════════════════════
  function initParallax() {
    if (prefersReducedMotion) return;

    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        parallaxElements.forEach(el => {
          const speed = el.dataset.parallaxSpeed || 0.5;
          const offset = window.scrollY * speed;
          el.style.setProperty('--parallax-offset', `-${offset}px`);
        });
      });
    });
  }

  // ═══════════════════════════════════════════
  // ENHANCED TOAST NOTIFICATIONS
  // ═══════════════════════════════════════════
  function showEnhancedToast(message, type = 'success', duration = 3500) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    
    const icons = {
      success: '✓',
      error: '✗',
      info: 'ℹ',
      warning: '⚠'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span style="font-size: 1.2rem; font-weight: bold;">${icons[type] || '✓'}</span>
      <span>${message}</span>
    `;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'toastOut 0.4s ease forwards';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  // Make toast globally available
  window.showToast = showEnhancedToast;

  // ═══════════════════════════════════════════
  // SMOOTH COUNTER ANIMATION WITH EASING
  // ═══════════════════════════════════════════
  function animateCounter(element, target, duration = 2000, suffix = '') {
    if (prefersReducedMotion) {
      element.textContent = target + suffix;
      return;
    }
    
    const start = performance.now();
    const startValue = 0;
    
    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (target - startValue) * easeProgress;
      
      if (target < 10) {
        element.textContent = currentValue.toFixed(1) + suffix;
      } else {
        element.textContent = Math.floor(currentValue) + suffix;
      }
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + suffix;
      }
    }
    
    requestAnimationFrame(update);
  }

  // ═══════════════════════════════════════════
  // LAZY LOAD IMAGES WITH FADE-IN
  // ═══════════════════════════════════════════
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => {
            img.classList.add('loaded');
          };
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });
    
    images.forEach(img => imageObserver.observe(img));
  }

  // ═══════════════════════════════════════════
  // KEYBOARD NAVIGATION ENHANCEMENTS
  // ═══════════════════════════════════════════
  function initKeyboardNav() {
    // Skip to main content
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content') || document.querySelector('main');
        if (mainContent) {
          mainContent.tabIndex = -1;
          mainContent.focus();
        }
      });
    }
    
    // Escape key closes mobile menu and modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close mobile menu
        const mobileMenu = document.querySelector('.mobile-menu');
        const hamburger = document.querySelector('.hamburger');
        if (mobileMenu?.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          hamburger?.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  }

  // ═══════════════════════════════════════════
  // FORM VALIDATION WITH REAL-TIME FEEDBACK
  // ═══════════════════════════════════════════
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      
      inputs.forEach(input => {
        // Real-time validation on blur
        input.addEventListener('blur', () => validateInput(input));
        
        // Clear error on input
        input.addEventListener('input', () => {
          if (input.classList.contains('error')) {
            validateInput(input);
          }
        });
      });
      
      form.addEventListener('submit', (e) => {
        let isValid = true;
        inputs.forEach(input => {
          if (!validateInput(input)) isValid = false;
        });
        
        if (!isValid) {
          e.preventDefault();
          showEnhancedToast('Please fix all errors before submitting', 'error');
        }
      });
    });
  }

  function validateInput(input) {
    const value = input.value.trim();
    const isRequired = input.hasAttribute('required');
    
    // Remove existing error
    input.classList.remove('error', 'valid');
    const errorElement = input.parentElement.querySelector('.form-error');
    if (errorElement) errorElement.classList.remove('visible');
    
    // Required validation
    if (isRequired && !value) {
      showError(input, 'This field is required');
      return false;
    }
    
    // Email validation
    if (input.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showError(input, 'Please enter a valid email address');
        return false;
      }
    }
    
    // Phone validation (optional)
    if (input.type === 'tel' && value) {
      const phoneRegex = /^[\d\s\-+()]{10,}$/;
      if (!phoneRegex.test(value)) {
        showError(input, 'Please enter a valid phone number');
        return false;
      }
    }
    
    // Custom validation via data-validate attribute
    const customValidate = input.dataset.validate;
    if (customValidate) {
      try {
        const validateFn = new Function('value', customValidate);
        const result = validateFn(value);
        if (result !== true) {
          showError(input, result || 'Invalid input');
          return false;
        }
      } catch (e) {
        console.warn('Custom validation error:', e);
      }
    }
    
    input.classList.add('valid');
    return true;
  }

  function showError(input, message) {
    input.classList.add('error');
    
    let errorElement = input.parentElement.querySelector('.form-error');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'form-error';
      input.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.classList.add('visible');
  }

  // ═══════════════════════════════════════════
  // MICRO-INTERACTIONS: BUTTON FEEDBACK
  // ═══════════════════════════════════════════
  function initButtonFeedback() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.98)';
      });
      
      btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ═══════════════════════════════════════════
  // PAGE SCROLL PROGRESS
  // ═══════════════════════════════════════════
  function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
      progressBar.style.width = scrollPercent + '%';
    };
    
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ═══════════════════════════════════════════
  // BACK TO TOP BUTTON
  // ═══════════════════════════════════════════
  function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // ═══════════════════════════════════════════
  // HERO TEXT REVEAL ANIMATION
  // ═══════════════════════════════════════════
  function initHeroReveal() {
    if (prefersReducedMotion) return;
    
    const heroText = document.querySelector('.hero-text');
    if (!heroText) return;
    
    const letters = heroText.querySelectorAll('h1 span, h1');
    letters.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 100);
    });
  }

  // ═══════════════════════════════════════════
  // INTERACTIVE MAP TOOLTIPS
  // ═══════════════════════════════════════════
  function initMapInteractions() {
    const mapContainer = document.getElementById('mapContainer');
    if (!mapContainer) return;
    
    // Add hover sound effect (optional)
    mapContainer.addEventListener('mouseenter', () => {
      // Could add subtle audio feedback here
    });
  }

  // ═══════════════════════════════════════════
  // PERFORMANCE MONITORING (DEV ONLY)
  // ═══════════════════════════════════════════
  function initPerformanceMonitor() {
    if (!window.performance || !window.performance.getEntriesByType) return;
    
    // Log page load time in development
    window.addEventListener('load', () => {
      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
      }
    });
  }

  // ═══════════════════════════════════════════
  // INIT ALL ENHANCEMENTS
  // ═══════════════════════════════════════════
  document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initScrollProgress();
    initBackToTop();
    initKeyboardNav();
    
    // Visual enhancements (skip if reduced motion)
    if (!prefersReducedMotion) {
      init3DTilt();
      initMagneticButtons();
      initRippleEffect();
      initParallax();
      initHeroReveal();
      initButtonFeedback();
    }
    
    // Utility functions
    initLazyLoading();
    initFormValidation();
    initMapInteractions();
    
    // Performance
    initPerformanceMonitor();
    
    // Expose utilities globally
    window.MOVVE = {
      showToast: showEnhancedToast,
      animateCounter: animateCounter,
      validateInput: validateInput
    };
  });

})();