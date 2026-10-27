/**
 * Koisei Design System - Sakura Petals WebGL Effect
 * Realistic 3D particle system of falling Japanese cherry blossom petals with scroll interaction.
 * Dependency: THREE.js (https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js or similar)
 */

(function (global) {
  'use strict';

  function initSakuraPetals(canvasId, options) {
    const opts = Object.assign({
      mobileThreshold: 640,
      mobileCount: 45,
      desktopCount: 130,
      baseSpeedY: 0.008,
      swaySpeed: 0.004,
      driftX: 0.006,
    }, options);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = document.getElementById(canvasId);

    if (!canvas) return null;

    if (reduceMotion || typeof THREE === 'undefined') {
      canvas.remove();
      return null;
    }

    // Three.js Scene Setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: false
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 12;

    // Generate Petal Texture dynamically via 2D Canvas
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext('2d');
    const grad = ctx.createRadialGradient(32, 28, 2, 32, 32, 30);
    grad.addColorStop(0, 'rgba(230, 170, 178, 0.95)');  // Pale Sakura core
    grad.addColorStop(0.5, 'rgba(199, 131, 137, 0.55)'); // Soft petal body
    grad.addColorStop(1, 'rgba(199, 131, 137, 0.00)');   // Feathered transparent edge
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(32, 32, 26, 18, 0.6, 0, Math.PI * 2);
    ctx.fill();
    const petalTexture = new THREE.CanvasTexture(c);

    // Particle Count based on viewport width
    const isMobile = window.innerWidth < opts.mobileThreshold;
    const count = isMobile ? opts.mobileCount : opts.desktopCount;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      seeds[i] = Math.random() * 100;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      map: petalTexture,
      size: 0.45,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.NormalBlending,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Resize Handler
    function onResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    onResize();
    window.addEventListener('resize', onResize);

    // Animation Loop with scroll velocity responsiveness
    let time = 0;
    let animId;
    let lastScroll = window.scrollY;
    let scrollVel = 0;

    function animate() {
      time += opts.swaySpeed;

      const currentScroll = window.scrollY;
      scrollVel += ((currentScroll - lastScroll) - scrollVel) * 0.1;
      lastScroll = currentScroll;
      const vel = Math.min(3, Math.abs(scrollVel) * 0.04);

      const posArray = geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        // Horizontal sway
        posArray[i * 3] += Math.sin(time + seeds[i]) * 0.004 + opts.driftX;

        // Downward fall speed + velocity boost from scroll
        posArray[i * 3 + 1] -= opts.baseSpeedY + vel * 0.02 + Math.cos(time * 0.7 + seeds[i]) * 0.003;

        // Reset particle if it leaves bottom
        if (posArray[i * 3 + 1] < -9) {
          posArray[i * 3 + 1] = 9;
          posArray[i * 3] = (Math.random() - 0.5) * 24;
        }

        // Wrap around horizontally if it drifts too far right
        if (posArray[i * 3] > 13) {
          posArray[i * 3] = -13;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      points.rotation.z = Math.sin(time * 0.4) * 0.03;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    }
    animate();

    return {
      destroy: function () {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        geometry.dispose();
        material.dispose();
        petalTexture.dispose();
        renderer.dispose();
      }
    };
  }

  global.initSakuraPetals = initSakuraPetals;
})(typeof window !== 'undefined' ? window : this);
