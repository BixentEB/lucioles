// Luciole pour page INTRO
// flotte tranquillement ; à l’approche du bouton, elle rejoint et orbite ✨
(function(){
  const firefly = document.getElementById('firefly');
  const btn = document.getElementById('enter-btn');
  if(!firefly || !btn) return;

  // position initiale : proche du titre
  let x = window.innerWidth * 0.55;
  let y = window.innerHeight * 0.35;

  // petite vitesse aléatoire
  let vx = (Math.random() * 0.6 - 0.3);
  let vy = (Math.random() * 0.6 - 0.3);

  let seek = false;
  let orbit = false;
  let t = 0; // temps pour l’orbite

  // viser le centre du bouton
  function getButtonCenter(){
    const r = btn.getBoundingClientRect();
    return { cx: r.left + r.width/2, cy: r.top + r.height/2 };
  }

  // quand le bouton est survolé ou focus, on “seek”
  function enableSeek(){
    seek = true; orbit = false;
    btn.classList.add('is-near');
  }
  function disableSeek(){
    seek = false; orbit = false;
    btn.classList.remove('is-near');
  }

  btn.addEventListener('mouseenter', enableSeek);
  btn.addEventListener('focus', enableSeek);
  btn.addEventListener('mouseleave', disableSeek);
  btn.addEventListener('blur', disableSeek);

  function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }

  // --- petites étincelles derrière la luciole ---
  function spawnSpark(x, y){
    const s = document.createElement('span');
    s.className = 'firefly-spark';
    s.style.left = x + (Math.random()*12 - 6) + 'px';
    s.style.top  = y + (Math.random()*12 - 6) + 'px';
    document.body.appendChild(s);
    setTimeout(()=> s.remove(), 800); // auto-destruction
  }
  let sparkTimer = 0;
  function sparkle(x, y, mode){
    const now = performance.now();
    if(mode && now - sparkTimer > 120){ // ~toutes les 120ms
      spawnSpark(x, y);
      sparkTimer = now;
    }
  }

  function animate(){
    const w = window.innerWidth;
    const h = window.innerHeight;

    if(seek){
      const {cx, cy} = getButtonCenter();
      const dx = cx - x;
      const dy = cy - y;
      const dist = Math.hypot(dx, dy);

      // steering simple vers le bouton
      vx += (dx / (dist || 1)) * 0.08;
      vy += (dy / (dist || 1)) * 0.08;

      // friction douce
      vx *= 0.96;
      vy *= 0.96;

      // orbite si très proche
      if(dist < 22){
        orbit = true;
        seek = false;
        t = 0;
      }
    } else if(orbit){
      const {cx, cy} = getButtonCenter();
      const radius = 14;
      t += 0.05;
      x = cx + Math.cos(t)*radius;
      y = cy + Math.sin(t)*radius * 0.6;
    } else {
      // errance douce
      vx += (Math.random() - 0.5) * 0.05;
      vy += (Math.random() - 0.5) * 0.05;
      vx = clamp(vx, -0.8, 0.8);
      vy = clamp(vy, -0.8, 0.8);
    }

    // mise à jour position si pas en orbite
    if(!orbit){
      x += vx;
      y += vy;
    }

    // marges & rebonds doux
    const margin = 20;
    if(x < margin){ x = margin; vx = Math.abs(vx)*0.6; }
    if(y < margin){ y = margin; vy = Math.abs(vy)*0.6; }
    if(x > w - margin){ x = w - margin; vx = -Math.abs(vx)*0.6; }
    if(y > h - margin){ y = h - margin; vy = -Math.abs(vy)*0.6; }

    firefly.style.left = x + 'px';
    firefly.style.top  = y + 'px';

    // ✨ étincelles seulement quand seek/orbite
    sparkle(x, y, seek || orbit);

    requestAnimationFrame(animate);
  }

  // positionne la luciole au chargement
  firefly.style.left = x + 'px';
  firefly.style.top  = y + 'px';
  requestAnimationFrame(animate);

  // resize : l’anim se recale d’elle-même
  window.addEventListener('resize', () => {});
})();
