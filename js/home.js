(function(){
  const moodsEl = document.querySelector('.moods');
  const viewer  = document.getElementById('viewer');
  const liste   = document.getElementById('liste');
  const titre   = document.getElementById('titre');
  const sous    = document.getElementById('sous-titre');
  const vignette= document.getElementById('vignette');
  const texteEl = document.getElementById('texte');
  const btnAutre= document.getElementById('btn-autre');
  const btnSurp = document.getElementById('btn-surprise');

  let humeurCourante = null;
  let conteCourantId = null;

  const data = window.CONTE_DATA || {};

  // helpers
  function toClass(h){ return 'humeur-' + h; }
  function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function parafy(str){
    return str.trim().split(/\n\s*\n/).map(p=>`<p>${p.trim()}</p>`).join('');
  }

  function setHumeur(h){
    humeurCourante = h;
    // bouton actif
    document.querySelectorAll('.mood').forEach(b=>{
      b.classList.toggle('active', b.dataset.humeur===h);
    });
    // classe de thème
    document.body.className = ('home ' + toClass(h)).trim();

    const contes = data[h] || [];
    if(!contes.length){
      renderEmpty(h);
      return;
    }
    const pick = pickRandom(contes);
    renderConte(h, pick);
    buildListe(h, contes, pick.id);
  }

  function renderEmpty(h){
    titre.textContent = "Pas encore de conte pour cette humeur";
    sous.textContent = "Reviens bientôt : d'autres lucioles arrivent ✨";
    vignette.hidden = true;
    texteEl.innerHTML = "";
    btnAutre.disabled = true;
    liste.innerHTML = `<h3>Pour ${h}</h3><p style="opacity:.8;margin:8px;">Bientôt…</p>`;
  }

  function renderConte(h, conte){
    conteCourantId = conte.id;
    titre.textContent = conte.titre;
    sous.textContent = conte.theme === 'cosmos' ? "Cosmos" : "Terre";
    if(conte.image){
      vignette.innerHTML = `<img alt="" src="${conte.image}">`;
      vignette.hidden = false;
    }else{
      vignette.hidden = true;
      vignette.innerHTML = "";
    }
    texteEl.innerHTML = parafy(conte.texte || "");
    btnAutre.disabled = (data[h]?.length || 0) < 2;
  }

  function buildListe(h, contes, activeId){
    const items = contes.map(c => `
      <a href="#${h}/${c.id}" class="item ${c.id===activeId?'active':''}" data-id="${c.id}">
        ${c.titre}
      </a>
    `).join('');
    liste.innerHTML = `<h3>Autres contes</h3>${items}`;
    liste.querySelectorAll('.item').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = a.getAttribute('data-id');
        const match = (data[h]||[]).find(c=>c.id===id);
        if(match){ renderConte(h, match); buildListe(h, data[h], id); }
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
      setHumeur(h);
      if(id){
        const m = data[h].find(c=>c.id===id);
        if(m){ renderConte(h, m); buildListe(h, data[h], m.id); }
      }
    }
  })();

})();
