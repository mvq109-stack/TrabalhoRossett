/**
 * Koisei Design System - Motion & Interactive Engine
 * Handles reveals, seal stamp animations, parallax, dynamic header theming, and scroll progress.
 */

(function (global) {
  'use strict';

  const KoiseiMotion = {
    init: function (options) {
      const opts = Object.assign({
        revealSelector: '.reveal',
        sealSelector: '.seal',
        headerId: 'siteHeader',
        brandTextId: 'brandText',
        navLinksId: 'navLinks',
        visitBtnId: 'visitBtn',
        progressBarId: 'progBar',
        darkSectionSelectors: ['#night', '#film1', '#lantern', '#temple'],
      }, options);

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // 1. Initial State Setup
      const revealElements = document.querySelectorAll(opts.revealSelector);
      const sealElements = document.querySelectorAll(opts.sealSelector);

      if (!reduceMotion) {
        revealElements.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(24px)';
          el.style.transition = 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)';
        });

        sealElements.forEach(el => {
          el.style.transform = 'scale(0.6) rotate(-8deg)';
          el.style.opacity = '0';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });

        // 2. Intersection Observer for Scroll Reveals
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }, idx * 90);

              // Check for nested seals
              entry.target.querySelectorAll(opts.sealSelector).forEach(seal => {
                setTimeout(() => {
                  seal.style.opacity = '1';
                  seal.style.transform = 'scale(1) rotate(0deg)';
                }, 400);
              });

              if (entry.target.classList.contains('seal')) {
                setTimeout(() => {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'scale(1) rotate(0deg)';
                }, 350);
              }

              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });

        revealElements.forEach(el => observer.observe(el));
        sealElements.forEach(el => observer.observe(el));
      } else {
        // Reduced motion: immediately visible
        revealElements.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        sealElements.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      }

      // 3. Smooth Scroll for Anchor Links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: reduceMotion ? 'auto' : 'smooth'
            });
          }
        });
      });

      // 4. Parallax, Dynamic Header Theme & Scroll Progress
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      const progressBar = document.getElementById(opts.progressBarId);
      const header = document.getElementById(opts.headerId);
      const brandText = document.getElementById(opts.brandTextId);
      const navLinks = document.getElementById(opts.navLinksId);
      const visitBtn = document.getElementById(opts.visitBtnId);
      const darkSections = opts.darkSectionSelectors
        .map(sel => document.querySelector(sel))
        .filter(Boolean);

      let lastScroll = window.scrollY;
      let scrollVel = 0;

      function onFrame() {
        const y = window.scrollY;
        scrollVel += ((y - lastScroll) - scrollVel) * 0.1;
        lastScroll = y;

        // Progress bar
        if (progressBar) {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min(1, Math.max(0, y / (docHeight || 1)));
          progressBar.style.height = (progress * 100) + '%';
        }

        // Parallax
        if (!reduceMotion && parallaxElements.length > 0) {
          parallaxElements.forEach(el => {
            const parent = el.parentElement;
            if (parent) {
              const rect = parent.getBoundingClientRect();
              const rate = parseFloat(el.dataset.parallax || 0.1);
              el.style.transform = `translateY(${rect.top * -rate}px)`;
            }
          });
        }

        // Header theme detection
        if (header && darkSections.length > 0) {
          const isOverDark = darkSections.some(sec => {
            const rect = sec.getBoundingClientRect();
            return rect.top < 60 && rect.bottom > 80;
          });

          if (isOverDark) {
            header.classList.add('is-dark');
            if (brandText) brandText.style.color = '#f4eee3';
            if (navLinks) navLinks.style.color = 'rgba(244, 238, 227, 0.75)';
            if (visitBtn) {
              visitBtn.style.color = '#f4eee3';
              visitBtn.style.borderColor = 'rgba(244, 238, 227, 0.4)';
            }
            header.style.background = 'linear-gradient(180deg, rgba(33, 27, 21, 0.45), transparent)';
          } else {
            header.classList.remove('is-dark');
            if (brandText) brandText.style.color = '#201d17';
            if (navLinks) navLinks.style.color = '#5d574b';
            if (visitBtn) {
              visitBtn.style.color = '#201d17';
              visitBtn.style.borderColor = 'rgba(32, 29, 23, 0.35)';
            }
            header.style.background = 'linear-gradient(180deg, rgba(239, 234, 222, 0.55), transparent)';
          }
        }

        requestAnimationFrame(onFrame);
      }

      requestAnimationFrame(onFrame);

      // Return controller API
      return {
        getScrollVelocity: () => scrollVel,
      };
    }
  };

  global.KoiseiMotion = KoiseiMotion;

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      // Auto-initialize if elements are present
      if (document.querySelector('.reveal') || document.getElementById('siteHeader')) {
        KoiseiMotion.init();
      }
    });
  }
})(typeof window !== 'undefined' ? window : this);
