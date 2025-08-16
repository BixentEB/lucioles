// Luciole pour page INTRO
// la luciole flotte tranquillement 
//quand tu vas vers le bouton, elle te rejoint et orbite gentiment dessus (effet “viens, on entre ✨”). //

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

  function animate(){
    const w = window.innerWidth;
    const h = window.innerHeight;

    if(seek){
      const {cx, cy} = getButtonCenter();
      const dx = cx - x;
      const dy = cy - y;
      const dist = Math.hypot(dx, dy);

      // on dirige la luciole vers le bouton (steering simple)
      const speed = 1.2; // vitesse de rapprochement
      vx += (dx / (dist || 1)) * 0.08;
      vy += (dy / (dist || 1)) * 0.08;

      // friction douce pour éviter une course folle
      vx *= 0.96;
      vy *= 0.96;

      // si on est très proche, on passe en orbite mignonne autour du bouton
      if(dist < 22){
        orbit = true;
        seek = false;
        t = 0;
      }
    } else if(orbit){
      // petite orbite autour du centre du bouton
      const {cx, cy} = getButtonCenter();
      const radius = 14;
      t += 0.05;
      x = cx + Math.cos(t)*radius;
      y = cy + Math.sin(t)*radius * 0.6;
    } else {
      // errance douce : bruit pauvre mais suffisant
      vx += (Math.random() - 0.5) * 0.05;
      vy += (Math.random() - 0.5) * 0.05;
      vx = clamp(vx, -0.8, 0.8);
      vy = clamp(vy, -0.8, 0.8);
    }

    // mise à jour position si pas en orbite (sinon déjà fixée)
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

    requestAnimationFrame(animate);
  }

  // positionne la luciole au chargement
  firefly.style.left = x + 'px';
  firefly.style.top  = y + 'px';
  requestAnimationFrame(animate);

  // réajuste si resize
  window.addEventListener('resize', () => {
    // rien de spécial, on laisse l’animation recaler naturellement
  });
})();
