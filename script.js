const langButtons=[...document.querySelectorAll('[data-lang]')];
const translatables=[...document.querySelectorAll('[data-fr][data-ja]')];
const listTranslatables=[...document.querySelectorAll('[data-fr-list][data-ja-list]')];
function renderList(el,lang){const items=el.dataset[`${lang}List`].split('|');el.innerHTML=items.map(item=>`<li>${item}</li>`).join('')}
function setLang(lang){document.documentElement.lang=lang==='ja'?'ja':'fr';translatables.forEach(el=>el.textContent=el.dataset[lang]);listTranslatables.forEach(el=>renderList(el,lang));langButtons.forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));localStorage.setItem('lang',lang)}
langButtons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem('lang')||'fr');
