document.getElementById('menu').addEventListener('click',function(){var n=document.getElementById('nav');var o=n.classList.toggle('open');this.setAttribute('aria-expanded',o);});
document.querySelectorAll('form.subform, form.contact').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.ok').hidden=false;f.querySelector('button').disabled=true;});});
var fl=document.querySelectorAll('.filters button');
fl.forEach(function(b){b.addEventListener('click',function(){fl.forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');var s=b.textContent.toLowerCase();document.querySelectorAll('.roster .ath:not(.open)').forEach(function(a){a.hidden=(s!=='all'&&a.textContent.toLowerCase().indexOf(s)<0)});});});
var hero=document.getElementById('hero');
if(hero){var slides=hero.querySelectorAll('.slide'),dots=hero.querySelectorAll('.dots button'),cur=0,timer;
function go(i){cur=(i+slides.length)%slides.length;slides.forEach(function(s,k){s.classList.toggle('on',k===cur)});dots.forEach(function(d,k){d.setAttribute('aria-selected',k===cur)});}
function auto(){clearInterval(timer);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(function(){go(cur+1)},6000);}
dots.forEach(function(d,k){d.addEventListener('click',function(){go(k);auto()})});
hero.querySelector('.prev').addEventListener('click',function(){go(cur-1);auto()});hero.querySelector('.next').addEventListener('click',function(){go(cur+1);auto()});
auto();}
document.querySelectorAll('.seg').forEach(function(seg){var card=seg.closest('.plan2');seg.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){seg.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-selected','false')});b.setAttribute('aria-selected','true');card.querySelectorAll('.tier').forEach(function(t){t.classList.toggle('on',t.dataset.tier===b.dataset.tier)});runCounts(card);});});});
var ph=document.getElementById('phone');
if(ph){var pss=ph.querySelectorAll('.p-screen'),pd=ph.querySelectorAll('.p-dots i'),pc=0,pt;
function pgo(i){pc=(i+pss.length)%pss.length;pss.forEach(function(s,k){s.classList.toggle('on',k===pc)});pd.forEach(function(d,k){d.classList.toggle('on',k===pc)});runCounts(pss[pc]);}
function pauto(){clearInterval(pt);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)pt=setInterval(function(){pgo(pc+1)},4500);}
pd.forEach(function(d,k){d.addEventListener('click',function(){pgo(k);pauto()})});
ph.addEventListener('click',function(e){if(!e.target.closest('.p-dots'))pgo(pc+1),pauto()});
pauto();}
document.querySelectorAll('.carousel').forEach(function(c){var w=document.createElement('div');w.className='railwrap';c.parentNode.insertBefore(w,c);w.appendChild(c);c.classList.add('rail');w.insertAdjacentHTML('afterbegin','<button class="arr prev" aria-label="Previous"><svg class="ico" aria-hidden="true"><use href="#i-left"/></svg></button>');w.insertAdjacentHTML('beforeend','<button class="arr next" aria-label="Next"><svg class="ico" aria-hidden="true"><use href="#i-right"/></svg></button>');});
document.querySelectorAll('.railwrap').forEach(function(w,idx){var r=w.querySelector('.rail');
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var paused=false,t;
function tick(){if(paused)return;var step=r.firstElementChild?r.firstElementChild.getBoundingClientRect().width+16:r.clientWidth*0.8;if(r.scrollLeft+r.clientWidth>=r.scrollWidth-4)r.scrollTo({left:0,behavior:'smooth'});else r.scrollBy({left:step,behavior:'smooth'});}
t=setInterval(tick,4200+idx*350);
['mouseenter','touchstart','focusin','pointerdown'].forEach(function(ev){r.addEventListener(ev,function(){paused=true},{passive:true})});
['mouseleave','focusout'].forEach(function(ev){r.addEventListener(ev,function(){paused=false})});
r.addEventListener('touchend',function(){setTimeout(function(){paused=false},6000)},{passive:true});
w.querySelectorAll('.arr').forEach(function(b){b.addEventListener('click',function(){paused=true;setTimeout(function(){paused=false},8000)})});}w.querySelector('.prev').addEventListener('click',function(){r.scrollBy({left:-r.clientWidth*0.8,behavior:'smooth'})});w.querySelector('.next').addEventListener('click',function(){r.scrollBy({left:r.clientWidth*0.8,behavior:'smooth'})});});
var st=document.querySelectorAll('.show-tabs [role=tab]');
function showScreen(id){document.querySelectorAll('.screen').forEach(function(s){s.classList.toggle('on',s.id===id)});st.forEach(function(x){x.setAttribute('aria-selected',x.dataset.screen===id)});runCounts(document.getElementById(id));}
st.forEach(function(t){t.addEventListener('click',function(){showScreen(t.dataset.screen)})});
function runCounts(root){(root||document).querySelectorAll('.count').forEach(function(el){var to=parseFloat(el.dataset.to),dec=parseInt(el.dataset.dec||0),pre=el.dataset.prefix||'',suf=el.dataset.suffix||'',t0=null;if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=pre+to.toFixed(dec)+suf;return;}function step(ts){if(!t0)t0=ts;var k=Math.min(1,(ts-t0)/900);k=1-Math.pow(1-k,3);el.textContent=pre+(to*k).toFixed(dec)+suf;if(k<1)requestAnimationFrame(step);}requestAnimationFrame(step);});}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('seen');runCounts(e.target);io.unobserve(e.target);}})},{threshold:.3});document.querySelectorAll('.show, .phone, .camp, .stats, .bignums').forEach(function(el){io.observe(el)});}else{runCounts();}
document.querySelectorAll('.apply').forEach(function(b){b.addEventListener('click',function(){b.textContent='Applied';b.disabled=true;})});
var tabs=document.querySelectorAll('.tabs [role=tab]');
tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(x){x.setAttribute('aria-selected','false');document.getElementById(x.getAttribute('aria-controls')).hidden=true;});t.setAttribute('aria-selected','true');document.getElementById(t.getAttribute('aria-controls')).hidden=false;});});
