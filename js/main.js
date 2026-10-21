(function(){
var S=window.SITE, $=function(s,r){return (r||document).querySelector(s)};
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var logoBadge='<span class="badge"><img src="assets/logo.png" alt=""></span>';
function menu(page){
  var m=$("#menu"); if(!m)return;
  m.innerHTML='<a class="logo" href="index.html">'+logoBadge+esc(S.name)+'</a><nav><a href="work.html"'+(page==="what"?' aria-current="page"':'')+'>What we do</a><a href="work.html#who">Who we are</a><a href="contact.html"'+(page==="contact"?' aria-current="page"':'')+'>Contact us</a></nav>';
}
var page=document.body.getAttribute("data-page");
/* HOME */
if(page==="home"){
  var bg=$("#bg");
  if(S.homeVideo){var v=document.createElement("video");v.muted=true;v.loop=true;v.autoplay=true;v.playsInline=true;v.setAttribute("muted","");v.src=S.homeVideo;v.onerror=function(){v.remove()};bg.parentNode.insertBefore(v,bg.nextSibling);v.play&&v.play().catch(function(){})}
}
/* WORK */
if(page==="what"){
  menu("what");
  var wrap=$("#services");
  S.services.forEach(function(s,i){wrap.appendChild(el("div","svc","<small>0"+(i+1)+"</small><h2>"+esc(s.title)+"</h2><p>"+esc(s.note)+"</p>"))});
  wrap.appendChild(el("div","uc",'<span class="badge big"><img src="assets/logo.png" alt="'+esc(S.name)+'"></span><span class="tagline">Under construction</span>'));
  var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.25}):null;
  document.querySelectorAll(".svc,.uc").forEach(function(n){io?io.observe(n):n.classList.add("in")});
  var cards=$("#cards"), user=svgUser();
  S.people.forEach(function(p){
    var photo=p.photo?'<img src="'+esc(p.photo)+'" alt="'+esc(p.name)+'">':user;
    var credits=(p.credits||[]).map(function(c){return"<li>"+esc(c)+"</li>"}).join("");
    var vim=p.vimeo?'<a class="vim" href="'+esc(p.vimeo)+'" target="_blank" rel="noopener">Watch on Vimeo</a>':'<span class="vim off">Vimeo link coming</span>';
    var c=el("div","card",'<div class="card-in"><div class="face front"><div class="ph">'+photo+'</div><div class="pulse">Hover to flip</div><b>'+esc(p.name)+'</b><span>'+esc(p.role)+'</span></div><div class="face back"><h3>'+esc(p.name)+'</h3><dl><dt>Role</dt><dd>'+esc(p.role)+'</dd><dt>Based in</dt><dd>'+esc(p.basedIn)+'</dd><dt>Experience</dt><dd>'+esc(p.experience)+'</dd></dl><dl style="grid-template-columns:1fr"><dt>Selected credits</dt><dd><ul>'+credits+'</ul></dd></dl><div>'+esc(p.bio)+'</div>'+vim+'</div></div>');
    c.tabIndex=0;c.setAttribute("role","button");c.setAttribute("aria-label",p.name+", flip to read CV");
    c.addEventListener("click",function(e){if(e.target.closest("a"))return;c.classList.toggle("flip")});
    c.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();c.classList.toggle("flip")}});
    cards.appendChild(c);
  });
  var touch=window.matchMedia("(hover:none)").matches;
  if(!touch)document.addEventListener("pointermove",function(e){
    if(e.pointerType==="touch")return;
    document.querySelectorAll(".card").forEach(function(c){var r=c.getBoundingClientRect();
      c.classList.toggle("flip",e.clientX>r.left-30&&e.clientX<r.right+30&&e.clientY>r.top-30&&e.clientY<r.bottom+30)})});
  if(touch)document.querySelectorAll(".pulse").forEach(function(p){p.textContent="Tap to flip"});
}
function svgUser(){return '<svg viewBox="0 0 64 64"><circle cx="32" cy="22" r="12" fill="currentColor"/><path d="M8 60c2-16 14-22 24-22s22 6 24 22z" fill="currentColor"/></svg>'}
/* CONTACT */
if(page==="contact"){
  menu("contact");
  var ml=$("#mail"); ml.href="mailto:"+S.email; ml.textContent=S.email;
  var f=$("#f"), ok=$("#ok"), er=$("#err");
  f.addEventListener("submit",function(e){
    e.preventDefault(); ok.style.display=er.style.display="none";
    if(f.hp.value)return;
    var d=new FormData(f); d.delete("hp");
    if(S.formEndpoint){
      fetch(S.formEndpoint,{method:"POST",body:d,headers:{Accept:"application/json"}}).then(function(r){
        if(r.ok){f.reset();ok.style.display="block"}else{er.style.display="block"}
      }).catch(function(){er.style.display="block"});
    }else{
      var body=["Name: "+d.get("name"),"Brand: "+d.get("brand"),"Email: "+d.get("email"),"Need: "+d.get("need"),"","Message:",d.get("message")].join("\n");
      location.href="mailto:"+S.email+"?subject="+encodeURIComponent("Intro call: "+d.get("name"))+"&body="+encodeURIComponent(body);
      ok.textContent="Your email app should open with the message ready. If it doesn't, write to us at "+S.email+".";ok.style.display="block";
    }
  });
}
})();
