/**
 * MOVVE Website - Common JavaScript
 * Shared functionality across all pages
 * Includes: Dark mode, navigation, mobile menu, form validation, toast notifications
 */

(function() {
  'use strict';

  // ═══════════════════════════════════════════
  // DARK MODE TOGGLE
  // ═══════════════════════════════════════════
  function initDarkMode() {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    
    // Add theme toggle button styles
    const themeToggleStyle = document.createElement('style');
    themeToggleStyle.textContent = `
      .theme-toggle {
        position: fixed;
        top: 100px;
        right: 24px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--color-primary);
        color: var(--color-on-primary);
        border: 2px solid var(--color-border);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 16px rgba(10,22,40,.2);
      }
      .theme-toggle:hover {
        background: var(--color-tertiary);
        transform: scale(1.1);
      }
      @media (max-width: 768px) {
        .theme-toggle {
          top: 90px;
          right: 16px;
          width: 40px;
          height: 40px;
        }
      }
    `;
    document.head.appendChild(themeToggleStyle);
    document.body.appendChild(themeToggle);
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      showToast(newTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'info');
    });
  }

  // ═══════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════
  function initNavigation() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
    
    // Active page highlighting
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      if (a.getAttribute('href') === currentPage) {
        a.classList.add('active');
      }
    });
  }

  // ═══════════════════════════════════════════
  // MOBILE MENU
  // ═══════════════════════════════════════════
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!hamburger || !mobileMenu) return;
    
    let menuOpen = false;
    
    hamburger.addEventListener('click', () => {
      menuOpen = !menuOpen;
      hamburger.classList.toggle('active', menuOpen);
      mobileMenu.classList.toggle('active', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });
    
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuOpen = false;
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuOpen) {
        menuOpen = false;
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ═══════════════════════════════════════════
  // SCROLL PROGRESS BAR
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
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }, { passive: true });
      
      backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    } else {
      // Create back to top button if it doesn't exist
      const backToTopBtn = document.createElement('button');
      backToTopBtn.className = 'back-to-top';
      backToTopBtn.setAttribute('aria-label', 'Back to top');
      backToTopBtn.innerHTML = '↑';
      document.body.appendChild(backToTopBtn);
      
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }, { passive: true });
      
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // ═══════════════════════════════════════════
  // SCROLL REVEAL ANIMATIONS
  // ═══════════════════════════════════════════
  function initScrollReveal() {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });
    
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // ═══════════════════════════════════════════
  // TOAST NOTIFICATIONS
  // ═══════════════════════════════════════════
  function showToast(message, type = 'success', duration = 3500) {
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

  // ═══════════════════════════════════════════
  // FORM VALIDATION
  // ═══════════════════════════════════════════
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      
      inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
          if (input.classList.contains('error')) {
            validateField(input);
          }
        });
      });
      
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let isValid = true;
        
        inputs.forEach(input => {
          if (!validateField(input)) isValid = false;
        });
        
        if (!isValid) {
          showToast('Please fix all errors before submitting', 'error');
          return;
        }
        
        // Show loading state
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.innerHTML = '<span class="spinner"></span> Sending...';
        btn.disabled = true;
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        showToast('Message sent successfully! We\'ll respond within 24 hours.', 'success');
        form.reset();
        
        // Reset button
        btn.textContent = originalText;
        btn.disabled = false;
      });
    });
  }

  function validateField(field) {
    // Remove existing states
    field.classList.remove('error', 'valid');
    const errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) errorEl.classList.remove('visible');
    
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    // Required validation
    if (isRequired && !value) {
      showError(field, 'This field is required');
      return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showError(field, 'Please enter a valid email address');
        return false;
      }
    }
    
    // Phone validation (optional)
    if (field.type === 'tel' && value) {
      const phoneRegex = /^[\d\s\-+()]{10,}$/;
      if (!phoneRegex.test(value)) {
        showError(field, 'Please enter a valid phone number');
        return false;
      }
    }
    
    field.classList.add('valid');
    return true;
  }

  function showError(field, message) {
    field.classList.add('error');
    
    let errorEl = field.parentElement.querySelector('.form-error');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'form-error';
      field.parentElement.appendChild(errorEl);
    }
    
    errorEl.textContent = message;
    errorEl.classList.add('visible');
  }

  // ═══════════════════════════════════════════
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ═══════════════════════════════════════════
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ═══════════════════════════════════════════
  // LAZY LOAD IMAGES
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
  // SKIP TO MAIN CONTENT
  // ═══════════════════════════════════════════
  function initSkipLink() {
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
  }

  // ═══════════════════════════════════════════
  // INITIALIZE ALL FEATURES
  // ═══════════════════════════════════════════
  document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initNavigation();
    initMobileMenu();
    initScrollProgress();
    initBackToTop();
    initScrollReveal();
    initFormValidation();
    initSmoothScroll();
    initLazyLoading();
    initSkipLink();
    
    // Expose utilities globally
    window.MOVVE = {
      showToast: showToast,
      validateField: validateField
    };
  });

})();