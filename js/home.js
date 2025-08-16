(function(){
  const moodsEl  = document.querySelector('.moods');
  const viewer   = document.getElementById('viewer');
  const liste    = document.getElementById('liste');
  const titre    = document.getElementById('titre');
  const sous     = document.getElementById('sous-titre');
  const vignette = document.getElementById('vignette');
  const texteEl  = document.getElementById('texte');
  const btnAutre = document.getElementById('btn-autre');
  const btnSurp  = document.getElementById('btn-surprise');
  const carteConte = document.getElementById('conte');

  // petit fondu à chaque changement de conte
  function flashFade(){
    carteConte.classList.remove('fade');
    // reflow pour relancer l'anim
    // eslint-disable-next-line no-unused-expressions
    carteConte.offsetWidth;
    carteConte.classList.add('fade');
  }

  let humeurCourante = null;
  let conteCourantId = null;

  const data = window.CONTE_DATA || {};
  const THEME_LABEL = { cosmos: "Cosmos", terre: "Terre", ciel: "Ciel" };

  // helpers
  function toClass(h){ return 'humeur-' + h; }
  function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function parafy(str){
    return (str||"").trim()
      .split(/\n\s*\n/)
      .map(p=>`<p>${p.trim()}</p>`).join('');
  }
  function updateURL(h, id){
    const url = new URL(location.href);
    url.searchParams.set('humeur', h);
    if(id) url.searchParams.set('id', id); else url.searchParams.delete('id');
    history.replaceState(null, '', url);
  }

  function setHumeur(h){
    humeurCourante = h;

    // boutons actifs
    document.querySelectorAll('.mood').forEach(b=>{
      b.classList.toggle('active', b.dataset.humeur===h);
    });

    // classe de thème sur <body>
    document.body.className = ('home ' + toClass(h)).trim();

    const contes = data[h] || [];
    if(!contes.length){
      renderEmpty(h);
      updateURL(h, null);
      return;
    }
    const pick = pickRandom(contes);
    renderConte(h, pick);
    buildListe(h, contes, pick.id);
    updateURL(h, pick.id);
  }

  function renderEmpty(h){
    titre.textContent = "Pas encore de conte pour cette humeur";
    sous.textContent = "Reviens bientôt : d'autres lucioles arrivent ✨";
    vignette.hidden = true;
    vignette.innerHTML = "";
    texteEl.innerHTML = "";
    btnAutre.disabled = true;
    liste.innerHTML = `<h3>Pour ${h}</h3><p style="opacity:.8;margin:8px;">Bientôt…</p>`;
    flashFade();
  }

  function renderConte(h, conte){
    conteCourantId = conte.id;
    titre.textContent = conte.titre;
    sous.textContent  = THEME_LABEL[(conte.theme||'').toLowerCase()] || "";

    if(conte.image){
      vignette.innerHTML = `<img alt="" src="${conte.image}">`;
      vignette.hidden = false;
    } else {
      vignette.hidden = true;
      vignette.innerHTML = "";
    }

    texteEl.innerHTML = parafy(conte.texte);
    btnAutre.disabled = (data[h]?.length || 0) < 2;

    flashFade();
  }

  function buildListe(h, contes, activeId){
    const items = contes.map(c => `
      <a href="?humeur=${encodeURIComponent(h)}&id=${encodeURIComponent(c.id)}"
         class="item ${c.id===activeId?'active':''}" data-id="${c.id}">
        ${c.titre}
      </a>
    `).join('');
    liste.innerHTML = `<h3>Autres contes</h3>${items}`;

    // interactions
    liste.querySelectorAll('.item').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = a.getAttribute('data-id');
        const match = (data[h]||[]).find(c=>c.id===id);
        if(match){
          renderConte(h, match);
          buildListe(h, data[h], id);
          updateURL(h, id);
          // sur mobile, remonter sur le bloc
          carteConte.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  }

  // évènements
  moodsEl?.addEventListener('click', (e)=>{
    const btn = e.target.closest('.mood');
    if(!btn) return;
    setHumeur(btn.dataset.humeur);
  });

  btnAutre.addEventListener('click', ()=>{
    if(!humeurCourante) return;
    const contes = (data[humeurCourante]||[]).filter(c=>c.id!==conteCourantId);
    if(!contes.length) return;
    const pick = pickRandom(contes);
    renderConte(humeurCourante, pick);
    buildListe(humeurCourante, data[humeurCourante], pick.id);
    updateURL(humeurCourante, pick.id);
  });

  btnSurp.addEventListener('click', ()=>{
    const keys = Object.keys(data).filter(k => (data[k]||[]).length);
    if(!keys.length) return;
    const h = pickRandom(keys);
    setHumeur(h);
  });

  // deep link ?humeur=perdu&id=etoile-oubliee
  (function initFromQuery(){
    const sp = new URLSearchParams(location.search);
    const h  = sp.get('humeur');
    const id = sp.get('id');

    if(h && data[h]?.length){
      // humeur valide => affiche la bonne liste
      const contes = data[h];
      // si id valide, charge ce conte, sinon aléatoire
      const m = id ? contes.find(c=>c.id===id) : null;
      if(m){
        // setHumeur sans tirage
        humeurCourante = h;
        document.querySelectorAll('.mood').forEach(b=>{
          b.classList.toggle('active', b.dataset.humeur===h);
        });
        document.body.className = ('home ' + toClass(h)).trim();
        renderConte(h, m);
        buildListe(h, contes, m.id);
        updateURL(h, m.id);
      } else {
        setHumeur(h);
      }
    }
  })();
})();
