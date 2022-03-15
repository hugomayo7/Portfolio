import{R as $,a as j,$ as _,r as v,o as u,c as p,b as e,d as r,w as c,F as w,p as k,e as x,f as h,g as l,h as N,m as C,t as b,n as T,i as E,j as M,k as A,l as O,q as P,s as V,u as H,v as D,x as q}from"./vendor.41d82274.js";const F=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function d(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=d(a);fetch(a.href,s)}};F();var f=(t,i)=>{const d=t.__vccOpts||t;for(const[n,a]of i)d[n]=a;return d};const R={components:{RouterLink:$,RouterView:j},mounted(){_(".menu-btn").click(function(){_(".slide").toggleClass("isOpen"),_(".darkLayout").toggleClass("displayDarkLayout")}),_(".close-btn").click(function(){_(".slide").toggleClass("isOpen"),_(".darkLayout").toggleClass("displayDarkLayout")}),_(".darkLayout").click(function(){_(".slide").toggleClass("isOpen"),_("#dLayout").toggleClass("displayDarkLayout")}),_(".elementNav").click(function(){_(".slide").toggleClass("isOpen"),_("#dLayout").toggleClass("displayDarkLayout")})}},L=t=>(k("data-v-42ed5097"),t=t(),x(),t),J=L(()=>e("div",{class:"menu-btn"},[e("div",{class:"barre"}),e("div",{class:"barre"}),e("div",{class:"barre"})],-1)),U={class:"slide"},Y=L(()=>e("span",{class:"close-btn"},"x",-1)),z={class:"nav__wrapper"},K=l("Accueil"),G=l("Projets"),W=l("\xC0 propos"),Z=l("Contact"),Q=h('<div class="social-media" data-v-42ed5097><ul class="list__social-media" data-v-42ed5097><a href="https://www.linkedin.com/in/hugo-mayonobe/" target="_blank" data-v-42ed5097><i class="fa-brands fa-linkedin-in icon" data-v-42ed5097></i></a><a href="https://www.facebook.com/hugo.mayonobe/" target="_blank" data-v-42ed5097><i class="fa-brands fa-facebook-f icon" data-v-42ed5097></i></a><a href="https://www.instagram.com/hugo_mynb/" target="_blank" data-v-42ed5097><i class="fa-brands fa-instagram icon" data-v-42ed5097></i></a></ul><p data-v-42ed5097>Me contacter</p></div>',1);function X(t,i,d,n,a,s){const o=v("RouterLink");return u(),p(w,null,[J,e("div",U,[Y,e("ul",z,[e("li",null,[r(o,{class:"elementNav",to:"/home"},{default:c(()=>[K]),_:1})]),e("li",null,[r(o,{class:"elementNav",to:"/projets"},{default:c(()=>[G]),_:1})]),e("li",null,[r(o,{class:"elementNav",to:"/about"},{default:c(()=>[W]),_:1})]),e("li",null,[r(o,{class:"elementNav",to:"/contact"},{default:c(()=>[Z]),_:1})])]),Q])],64)}var ee=f(R,[["render",X],["__scopeId","data-v-42ed5097"]]);const te={components:{BurgerSlide:ee,RouterLink:$,RouterView:j}},ae={class:"wrapperr site-header__wrapper"},oe={class:"site-header__logo"},se=l("MAYONOBE"),ne={class:"site-header__cat"},de={class:"nav__wrapper"},ie=l("Accueil"),re=l("Projets"),ce=l("\xC0 propos"),le=l("Contact"),_e={class:"burger"};function ue(t,i,d,n,a,s){const o=v("RouterLink"),m=v("BurgerSlide");return u(),p("div",ae,[e("div",oe,[r(o,{id:"logo",to:"/"},{default:c(()=>[se]),_:1})]),e("div",ne,[e("ul",de,[r(o,{class:"homePage",to:"/home"},{default:c(()=>[ie]),_:1}),r(o,{class:"projectsPage",to:"/projets"},{default:c(()=>[re]),_:1}),r(o,{class:"aboutPage",to:"/about"},{default:c(()=>[ce]),_:1}),r(o,{class:"contactPage",to:"/contact"},{default:c(()=>[le]),_:1})])]),e("div",_e,[r(m)])])}var pe=f(te,[["render",ue],["__scopeId","data-v-497b14cc"]]);const fe={components:{RouterLink:$,RouterView:j}},ve=t=>(k("data-v-48457579"),t=t(),x(),t),me={class:"wrapper site-footer__wrapper"},he={class:"pages"},ge=l("Accueil"),be=l("Projets"),ye=l("\xC0 propos"),$e=l("Contact"),je=ve(()=>e("div",{class:"name"},[e("p",null,"\xA9 2022 Mayonobe Hugo")],-1));function we(t,i,d,n,a,s){const o=v("RouterLink");return u(),p("div",me,[e("ul",he,[e("li",null,[r(o,{to:"/home"},{default:c(()=>[ge]),_:1})]),e("li",null,[r(o,{to:"/projets"},{default:c(()=>[be]),_:1})]),e("li",null,[r(o,{to:"/about"},{default:c(()=>[ye]),_:1})]),e("li",null,[r(o,{to:"/contact"},{default:c(()=>[$e]),_:1})])]),je])}var ke=f(fe,[["render",we],["__scopeId","data-v-48457579"]]);const xe={components:{NavBar:pe,Footer:ke,RouterLink:$,RouterView:j}},Ce={class:"navbar--main"},Le=h('<div id="dLayout" class="darkLayout"></div><div class="light x2"></div><div class="light x3"></div><div class="light x4"></div><div class="light x6"></div><div class="light x8"></div><div class="light x9"></div>',7),Ie={class:"footer"};function Se(t,i,d,n,a,s){const o=v("NavBar"),m=v("RouterView"),g=v("Footer");return u(),p(w,null,[e("header",null,[e("div",Ce,[r(o)])]),Le,r(m),e("footer",null,[e("div",Ie,[r(g)])])],64)}var Be=f(xe,[["render",Se]]);const Ne={},Te=h('<div class="my_picture" data-v-55339ccd><img src="https://uploads-ssl.webflow.com/5e7b6b23dd8fc2114f1bac22/5e8492f63fb6cf4a9ef4a307_designer.svg" alt="me" data-v-55339ccd></div><div class="me" data-v-55339ccd><div class="my_name" data-v-55339ccd><p class="lastname" data-v-55339ccd>Hugo</p><p class="firstname" data-v-55339ccd>MAYONOBE</p></div><div class="barre" data-v-55339ccd></div><div class="resume" data-v-55339ccd><p data-v-55339ccd> Passionn\xE9 par le <strong data-v-55339ccd>D\xE9veloppement Web</strong></p></div></div>',2),Ee=[Te];function Me(t,i,d,n,a,s){return u(),p("main",null,Ee)}var Ae=f(Ne,[["render",Me],["__scopeId","data-v-55339ccd"]]);const Oe=[{id:1,title:"Mortarman",image:"./src/static/img/mortarman.png",resume:"D\xE9veloppement d'un jeu r\xE9tro",details:`L'objectif de ce projet \xE0 \xE9t\xE9 de r\xE9aliser un jeu r\xE9tro, par groupe de 4 \xE9tudiants, dans le cadre de notre projet de 1\xE8re ann\xE9e de DUT Informatique.<br><br>
        Dans un premier temps, nous avons d\xFB faire de la conception (diagrammes de classes, ...) pour que la programmation se d\xE9roule correctement et plus rapidement.<br>
        Ensuite, tout le jeu \xE0 \xE9t\xE9 d\xE9velopp\xE9 en C++ qui est un langage de programmation orient\xE9e objet, c'est le langage que nous avions appris durant l'ann\xE9e.<br> 
        Chaque t\xE2ches \xE9tait donc r\xE9parti entre les membres de l'\xE9quipe pour pouvoir avancer au mieux<br><br>
        En conclusion<br><br>
        Vid\xE9o de d\xE9mo : <a target="_blank" href="https://www.youtube.com/watch?v=3ETm-zUKb0I">https://www.youtube.com/watch?v=3ETm-zUKb0I</a>`,techno:"<li>C++</li>",year:"2021"},{id:2,title:"Portfolio",image:"./src/static/img/portfolio.png",resume:"Cr\xE9ation de mon site portfolio",details:`L'objectif de ce projet \xE0 \xE9t\xE9 de r\xE9aliser mon site portfolio \xE0 l'aide du framework VueJS, pour y r\xE9pertorier tous mes projets et futur projets. <br><br>
        La cr\xE9ation de ce site m'a permis de d\xE9couvrir le framework VueJS que je n'avais jamais utilis\xE9 auparavant (gestion des Composants, etc), tout en r\xE9alisant mon propre site portfolio o\xF9 j'ai
        pu apprendre \xE0 faire des animations en CSS pour donner plus de "vie" \xE0 mon site, chose que je ne savais pas faire avant ce projet.  
        De plus, il a fallu rendre le site responsive pour qu'il soit accessible depuis tous les appareils (smartphones, tablettes, ordinateurs). 
        J'ai \xE9galement utilis\xE9 Boostrap pour pouvoir utiliser des "Modals".  
        Tout \xE7a m'a au final permit de voir comment d\xE9ployer un site en ligne gr\xE2ce \xE0 un fichier de configuration nginx.  <br><br>
        En conclusion, ce projet m'a permit de d\xE9couvrir de nouvelles technologies et de renforcer mon aspect FullStack tout en cr\xE9ant mon propre site.`,techno:"<li>VueJS</li><li>HTML</li><li>SCSS</li><li>Bash/Nginx</li>",year:"2022"}];const Pe={props:{info_project:Object},setup(t){return{changeBackground:N(()=>({backgroundImage:`url(${t.info_project.image})`}))}},data(){return{details_prj:this.info_project.details,techno_prj:this.info_project.techno}},computed:{markdownToHtml_details(){return C(this.details_prj)},markdownToHtml_techno(){return C(this.techno_prj)}}},y=t=>(k("data-v-563a5e60"),t=t(),x(),t),Ve={class:"card"},He={class:"year"},De={class:"year__project"},qe={class:"projet"},Fe={class:"project--info"},Re={class:"title"},Je={class:"desc"},Ue={class:"button--more"},Ye=["data-bs-target"],ze=["id"],Ke={class:"modal-dialog modal-lg",role:"document"},Ge={class:"modal-content"},We={class:"modal-header"},Ze={class:"modal-title title_modal"},Qe={class:"year__project--modal"},Xe={class:"modal-body content_modal"},et={class:"picture"},tt=["src","alt"],at={class:"project-global"},ot={class:"project-details"},st=y(()=>e("h5",{class:"sous-title_modal"},"D\xE9tails :",-1)),nt=y(()=>e("hr",null,null,-1)),dt=["innerHTML"],it={class:"project-techno"},rt=y(()=>e("h5",{class:"sous-title_modal"},"Technologies :",-1)),ct=y(()=>e("hr",null,null,-1)),lt=["innerHTML"],_t=y(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"more-bttn btn btn-secondary close__button","data-bs-dismiss":"modal"}," Fermer ")],-1));function ut(t,i,d,n,a,s){return u(),p(w,null,[e("div",Ve,[e("div",He,[e("p",De,b(d.info_project.year),1)]),e("div",{style:T(n.changeBackground),class:"cardImage"},null,4),e("div",qe,[e("div",Fe,[e("div",Re,b(d.info_project.title),1),e("div",Je,b(d.info_project.resume),1)]),e("div",Ue,[e("button",{class:"more-bttn",type:"button","data-bs-toggle":"modal","data-bs-target":"#project-"+d.info_project.id}," En savoir plus ",8,Ye)])])]),e("div",{class:"modal fade",id:"project-"+d.info_project.id,tabindex:"-1",role:"dialog"},[e("div",Ke,[e("div",Ge,[e("div",We,[e("h5",Ze,b(d.info_project.title),1),e("p",Qe,b(d.info_project.year),1)]),e("div",Xe,[e("div",et,[e("img",{src:d.info_project.image,alt:"image project"+d.info_project.id},null,8,tt)]),e("div",at,[e("div",ot,[st,nt,e("div",{class:"content-details",innerHTML:s.markdownToHtml_details},null,8,dt)]),e("div",it,[rt,ct,e("div",{class:"content-techno",innerHTML:s.markdownToHtml_techno},null,8,lt)])])]),_t])])],8,ze)],64)}var pt=f(Pe,[["render",ut],["__scopeId","data-v-563a5e60"]]);const ft={components:{ProjectCard:pt},setup(){class t{constructor(a,s,o,m,g,S,B){this.id=a,this.title=s,this.image=o,this.resume=m,this.details=g,this.techno=S,this.year=B}}let i=E([]);return M(()=>{for(const n of Oe){const a=new t(n.id,n.title,n.image,n.resume,n.details,n.techno,n.year);i.value.push(a)}}),{data_project:i}}},vt={class:"projectsList"};function mt(t,i,d,n,a,s){const o=v("ProjectCard");return u(),p("main",null,[e("div",vt,[(u(!0),p(w,null,A(n.data_project,(m,g)=>(u(),O(o,{key:g,info_project:m},null,8,["info_project"]))),128))])])}var ht=f(ft,[["render",mt],["__scopeId","data-v-2ac9606a"]]);const gt={methods:{sendEmail(){P.sendForm("service_0wv2tqh","template_kcrdh1i",this.$refs.form,"GB8yA50yjoyhiB68O").then(t=>{document.getElementById("nameInput").value="",document.getElementById("mailInput").value="",document.getElementById("msgInput").value=""},t=>{console.log("FAILED...",t.text)})}}},bt={class:"formulaire"},yt=h('<div class="left_part" data-v-2ef2aff7><div class="app-title" data-v-2ef2aff7><span data-v-2ef2aff7>CONTACTEZ</span><span data-v-2ef2aff7>MOI</span></div><div class="contact_info" data-v-2ef2aff7><ul data-v-2ef2aff7><li data-v-2ef2aff7><a href="mailto:hugomayonobe@gmail.com" data-v-2ef2aff7>hugomayonobe@gmail.com</a></li><li data-v-2ef2aff7><a href="tel:+33782648734" data-v-2ef2aff7>07 82 64 87 34</a></li></ul><div class="media" data-v-2ef2aff7><ul class="list__social-media" data-v-2ef2aff7><a href="https://www.linkedin.com/in/hugo-mayonobe/" target="_blank" data-v-2ef2aff7><i class="fa-brands fa-linkedin-in icon" data-v-2ef2aff7></i></a><a href="https://www.facebook.com/hugo.mayonobe/" target="_blank" data-v-2ef2aff7><i class="fa-brands fa-facebook-f icon" data-v-2ef2aff7></i></a><a href="https://www.instagram.com/hugo_mynb/" target="_blank" data-v-2ef2aff7><i class="fa-brands fa-instagram icon" data-v-2ef2aff7></i></a></ul><p data-v-2ef2aff7>Mes R\xE9seaux</p></div></div></div>',1),$t=h('<div class="name" data-v-2ef2aff7><input id="nameInput" type="text" placeholder="NOM" name="user_name" data-v-2ef2aff7></div><div class="mail" data-v-2ef2aff7><input id="mailInput" type="email" placeholder="EMAIL" name="user_email" data-v-2ef2aff7></div><div class="msg" data-v-2ef2aff7><textarea id="msgInput" placeholder="MESSAGE" name="message" data-v-2ef2aff7></textarea></div><input class="buttons" type="submit" value="Envoyer" data-v-2ef2aff7>',4),jt=[$t];function wt(t,i,d,n,a,s){return u(),p("div",bt,[yt,e("form",{class:"wrapper__form",ref:"form",onSubmit:i[0]||(i[0]=V((...o)=>s.sendEmail&&s.sendEmail(...o),["prevent"]))},jt,544)])}var kt=f(gt,[["render",wt],["__scopeId","data-v-2ef2aff7"]]);const xt={components:{ContactForm:kt}};function Ct(t,i,d,n,a,s){const o=v("ContactForm");return u(),p("main",null,[r(o)])}var Lt=f(xt,[["render",Ct],["__scopeId","data-v-1059d396"]]);const It={},St=h('<div class="container-time" data-v-f8da5378><div class="timeline" data-v-f8da5378><ul data-v-f8da5378><li data-v-f8da5378><div class="timeline-content" data-v-f8da5378><h2 class="date" data-v-f8da5378>2019-2020</h2><h1 data-v-f8da5378>Bac Technologique STI2D - Option SIN</h1><p data-v-f8da5378> Ann\xE9e de terminale, avec option Syst\xE8me d&#39;Information et Num\xE9rique. <br data-v-f8da5378> D\xE9couverte et l\xE9g\xE8re initiation au HTML/CSS. </p></div></li><li data-v-f8da5378><div class="timeline-content" data-v-f8da5378><h2 class="date" data-v-f8da5378>2020-2021</h2><h1 data-v-f8da5378>DUT Informatique - 1ere Ann\xE9e</h1><p data-v-f8da5378> - Algorithmique avanc\xE9e <br data-v-f8da5378> - Programmation <strong data-v-f8da5378>C++</strong> <br data-v-f8da5378> - Apprentissage <strong data-v-f8da5378>HTML/CSS</strong> (Flex, ...)<br data-v-f8da5378></p></div></li><li data-v-f8da5378><div class="timeline-content" data-v-f8da5378><h2 class="date" data-v-f8da5378>2021-2022</h2><h1 data-v-f8da5378>DUT Informatique - 2e Ann\xE9e</h1><p data-v-f8da5378> - <strong data-v-f8da5378>PHP</strong> <br data-v-f8da5378> - D\xE9couverte du framework <strong data-v-f8da5378>Symfony</strong><br data-v-f8da5378> - D\xE9couverte du framework <strong data-v-f8da5378>ReactJS</strong><br data-v-f8da5378> - <strong data-v-f8da5378>HTML/CSS</strong><br data-v-f8da5378> - <strong data-v-f8da5378>Javascript</strong></p></div></li></ul></div></div><div class="download-cv" data-v-f8da5378><h2 data-v-f8da5378>Telecharger mon CV</h2><a href="./src/static/CV_MAYONOBE_Hugo.pdf" download="CV_MAYONOBE_Hugo.pdf" data-v-f8da5378><button class="dw-button" data-v-f8da5378>Download</button></a></div>',2);function Bt(t,i,d,n,a,s){return St}var Nt=f(It,[["render",Bt],["__scopeId","data-v-f8da5378"]]);const Tt=H({history:D("/"),routes:[{path:"/",alias:["/home"],name:"home",component:Ae},{path:"/projets",name:"projets",component:ht},{path:"/contact",name:"contact",component:Lt},{path:"/about",name:"about",component:Nt}]}),I=q(Be);I.use(Tt);I.mount("#app");
