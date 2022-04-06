import{R as j,a as $,$ as u,r as v,o as _,c as p,b as e,d,w as c,F as w,p as k,e as L,f as h,g as l,h as P,m as x,t as g,n as A,i as T,j as B,k as M,l as N,q as E,s as O,u as D,v as H,x as V}from"./vendor.41d82274.js";const R=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}};R();var m=(t,n)=>{const i=t.__vccOpts||t;for(const[r,a]of n)i[r]=a;return i};const J={components:{RouterLink:j,RouterView:$},mounted(){u(".menu-btn").click(function(){u(".slide").toggleClass("isOpen"),u(".darkLayout").toggleClass("displayDarkLayout")}),u(".close-btn").click(function(){u(".slide").toggleClass("isOpen"),u(".darkLayout").toggleClass("displayDarkLayout")}),u(".darkLayout").click(function(){u(".slide").toggleClass("isOpen"),u("#dLayout").toggleClass("displayDarkLayout")}),u(".elementNav").click(function(){u(".slide").toggleClass("isOpen"),u("#dLayout").toggleClass("displayDarkLayout")})}},S=t=>(k("data-v-a1bc7810"),t=t(),L(),t),F=S(()=>e("div",{class:"menu-btn"},[e("div",{class:"barre"}),e("div",{class:"barre"}),e("div",{class:"barre"})],-1)),U={class:"slide"},Y=S(()=>e("span",{class:"close-btn"},"x",-1)),W={class:"nav__wrapper"},z=l("Accueil"),G=l("Projets"),K=l("\xC0 propos"),Q=l("Contact"),Z=h('<div class="social-media" data-v-a1bc7810><ul class="list__social-media" data-v-a1bc7810><a href="https://www.linkedin.com/in/hugo-mayonobe/" target="_blank" data-v-a1bc7810><i class="fa-brands fa-linkedin-in icon" data-v-a1bc7810></i></a><a href="https://www.facebook.com/hugo.mayonobe/" target="_blank" data-v-a1bc7810><i class="fa-brands fa-facebook-f icon" data-v-a1bc7810></i></a><a href="https://www.instagram.com/hugo_mynb/" target="_blank" data-v-a1bc7810><i class="fa-brands fa-instagram icon" data-v-a1bc7810></i></a></ul><p data-v-a1bc7810>Me contacter</p></div>',1);function X(t,n,i,r,a,o){const s=v("RouterLink");return _(),p(w,null,[F,e("div",U,[Y,e("ul",W,[e("li",null,[d(s,{class:"elementNav",to:"/"},{default:c(()=>[z]),_:1})]),e("li",null,[d(s,{class:"elementNav",to:"/projets"},{default:c(()=>[G]),_:1})]),e("li",null,[d(s,{class:"elementNav",to:"/about"},{default:c(()=>[K]),_:1})]),e("li",null,[d(s,{class:"elementNav",to:"/contact"},{default:c(()=>[Q]),_:1})])]),Z])],64)}var ee=m(J,[["render",X],["__scopeId","data-v-a1bc7810"]]);const te={components:{BurgerSlide:ee,RouterLink:j,RouterView:$}},ae={class:"wrapperr site-header__wrapper"},se={class:"site-header__logo"},oe=l("MAYONOBE"),re={class:"site-header__cat"},ie={class:"nav__wrapper"},ne=l("Accueil"),de=l("Projets"),ce=l("\xC0 propos"),le=l("Contact"),ue={class:"burger"};function _e(t,n,i,r,a,o){const s=v("RouterLink"),f=v("BurgerSlide");return _(),p("div",ae,[e("div",se,[d(s,{id:"logo",to:"/"},{default:c(()=>[oe]),_:1})]),e("div",re,[e("ul",ie,[d(s,{class:"homePage",to:"/"},{default:c(()=>[ne]),_:1}),d(s,{class:"projectsPage",to:"/projets"},{default:c(()=>[de]),_:1}),d(s,{class:"aboutPage",to:"/about"},{default:c(()=>[ce]),_:1}),d(s,{class:"contactPage",to:"/contact"},{default:c(()=>[le]),_:1})])]),e("div",ue,[d(f)])])}var pe=m(te,[["render",_e],["__scopeId","data-v-041b1199"]]);const me={components:{RouterLink:j,RouterView:$}},ve=t=>(k("data-v-deadc64c"),t=t(),L(),t),fe={class:"wrapper site-footer__wrapper"},he={class:"pages"},be=l("Accueil"),ge=l("Projets"),ye=l("\xC0 propos"),je=l("Contact"),$e=ve(()=>e("div",{class:"name"},[e("p",null,"\xA9 2022 Mayonobe Hugo")],-1));function we(t,n,i,r,a,o){const s=v("RouterLink");return _(),p("div",fe,[e("ul",he,[e("li",null,[d(s,{to:"/"},{default:c(()=>[be]),_:1})]),e("li",null,[d(s,{to:"/projets"},{default:c(()=>[ge]),_:1})]),e("li",null,[d(s,{to:"/about"},{default:c(()=>[ye]),_:1})]),e("li",null,[d(s,{to:"/contact"},{default:c(()=>[je]),_:1})])]),$e])}var ke=m(me,[["render",we],["__scopeId","data-v-deadc64c"]]);const Le={components:{NavBar:pe,Footer:ke,RouterLink:j,RouterView:$}},xe={class:"navbar--main"},Se=h('<div id="dLayout" class="darkLayout"></div><div class="light x2"></div><div class="light x3"></div><div class="light x4"></div><div class="light x6"></div><div class="light x8"></div><div class="light x9"></div>',7),Ce={class:"footer"};function Ie(t,n,i,r,a,o){const s=v("NavBar"),f=v("RouterView"),b=v("Footer");return _(),p(w,null,[e("header",null,[e("div",xe,[d(s)])]),Se,d(f),e("footer",null,[e("div",Ce,[d(b)])])],64)}var qe=m(Le,[["render",Ie]]);const Pe={},Ae=h('<div class="my_picture" data-v-44cbfbf7><img src="https://uploads-ssl.webflow.com/5e7b6b23dd8fc2114f1bac22/5e8492f63fb6cf4a9ef4a307_designer.svg" alt="me" data-v-44cbfbf7></div><div class="me" data-v-44cbfbf7><div class="my_name" data-v-44cbfbf7><p class="lastname" data-v-44cbfbf7><strong data-v-44cbfbf7>Hugo</strong></p><p class="firstname" data-v-44cbfbf7><strong data-v-44cbfbf7>MAYONOBE</strong></p></div><div class="barre" data-v-44cbfbf7></div><div class="resume" data-v-44cbfbf7><p data-v-44cbfbf7> Passionn\xE9 par le <strong data-v-44cbfbf7>D\xE9veloppement Web</strong></p></div></div>',2),Te=[Ae];function Be(t,n,i,r,a,o){return _(),p("main",null,Te)}var Me=m(Pe,[["render",Be],["__scopeId","data-v-44cbfbf7"]]);const Ne=[{id:1,title:"Mortarman",image:"./img/mortarman.png",resume:"D\xE9veloppement d'un jeu r\xE9tro",details:`L'objectif de ce projet \xE0 \xE9t\xE9 de r\xE9aliser un jeu r\xE9tro, par groupes de 4 \xE9tudiants, dans le cadre de notre projet de 1\xE8re ann\xE9e de DUT Informatique.<br><br>
        Notre id\xE9e \xE9tait de reprendre le jeu "Bomberman". Dans un premier temps, nous avons d\xFB faire de la conception (diagrammes de classes, ...) pour que la programmation se d\xE9roule correctement et plus rapidement.<br>
        Ensuite, tout le jeu a \xE9t\xE9 d\xE9velopp\xE9 en C++ qui est un langage de programmation orient\xE9e objet, c'est le langage que nous avions apprit durant l'ann\xE9e.<br> 
        Chaque t\xE2che \xE9tait donc r\xE9partie entre les membres de l'\xE9quipe pour pouvoir avancer au mieux<br><br>
        En conclusion, ce projet nous a permis d'apprendre \xE0 travailler en \xE9quipe, notamment sur la communication au sein d'un groupe et le suivie d'un projet.<br><br>
        Vid\xE9o de d\xE9monstration : <a target="_blank" href="https://www.youtube.com/watch?v=3ETm-zUKb0I">YouTube</a>`,techno:"<li>C++</li>",year:"2021"},{id:2,title:"Portfolio",image:"./img/portfolio.png",resume:"Cr\xE9ation de mon site portfolio",details:`L'objectif de ce projet a \xE9t\xE9 de r\xE9aliser mon site portfolio \xE0 l'aide du framework VueJS, pour y r\xE9pertorier tous mes projets et futurs projets. <br><br>
        La cr\xE9ation de ce site m'a permis de d\xE9couvrir le framework VueJS que je n'avais jamais utilis\xE9 auparavant (gestion des composants, etc), tout en r\xE9alisant mon propre site portfolio o\xF9 j'ai
        pu apprendre \xE0 faire des animations en CSS pour donner plus de "vie" \xE0 mon site, chose que je ne savais pas faire avant ce projet.  
        De plus, il a fallu rendre le site "responsive" pour qu'il soit accessible depuis tous les appareils (smartphones, tablettes, ordinateurs). 
        J'ai \xE9galement utilis\xE9 Boostrap pour pouvoir utiliser des "Modals".  
        Tout \xE7a m'a au final permis de voir comment d\xE9ployer un site en ligne gr\xE2ce \xE0 un fichier de configuration nginx.  <br><br>
        En conclusion, ce projet m'a permis de d\xE9couvrir de nouvelles technologies et de renforcer mon aspect FullStack tout en cr\xE9ant mon propre site.`,techno:"<li>VueJS</li><li>HTML</li><li>SCSS</li><li>Bash/Nginx</li>",year:"2022"},{id:3,title:"Casse-Brique",image:"./img/casse-brique.png",resume:"D\xE9veloppement d'un Casse-Brique en JS",details:`Le but de ce projet \xE0 \xE9t\xE9 de reproduire le jeu "Casse-Brique" en HTML \xE0 l'aide de la balise "canvas" mais \xE9galement \xE0 l'aide de Javascript. <br><br>
        Concr\xE8tement, l'objectif de ce jeu est de d\xE9truire un mur de brique \xE0 l'aide d'une balle, qui rebondit sur les murs et les briques, mais aussi sur une raquette qu'il est possible de diriger gr\xE2ce aux touches directionnelles du clavier. <br>
        Pour cela, ce projet \xE0 \xE9t\xE9 d\xE9velopp\xE9 \xE0 l'aide de Javascript et de sa librairie JQuery pour pouvoir dans un premier temps dessiner tous les \xE9l\xE9ments de jeu sur l'\xE9cran dans le canvas, mais aussi pour pouvoir g\xE9rer toutes les collisions de la balle, la gestion des vies et du score du joueur, le d\xE9placement de la raquette avec les touches du clavier, ... <br>
        De plus, le score ainsi que le nom du joueur est enregistr\xE9 sur un serveur, il est donc possible de voir via le menu "Classement" du jeu, les 5 meilleurs score qui ont \xE9t\xE9 fait par les joueurs. <br><br>
        On retrouve sur le jeu diff\xE9rentes briques : <br>
        <li>    Briques normales (vertes)</li>
        <li>    Briques vitesses (roses) : rajoutant de la vitesse \xE0 la balle</li>
        <li>    Briques explosives (oranges) : d\xE9truisant les briques adjacentes \xE0 celle-ci</li><br>
        En conclusion, ce projet m'a permis de voir comment il \xE9tait possible de d\xE9velopper un jeu en HTML et Javascript, mais aussi de renforcer mes connaissances dans l'utilisation de ce langage et le DOM.<br><br>
        Vid\xE9o de d\xE9monstration : <a target="_blank" href="https://www.youtube.com/watch?v=_c8lT2npp8A">YouTube</a>
        `,techno:"<li>HTML</li><li>CSS</li><li>Javascript</li><li>JQuery</li>",year:"2022"},{id:4,title:"Mus\xE9e Maritime",image:"./img/musee-maritime.png",resume:"Application Web mobile",details:`Durant ma 2e ann\xE9e d'IUT Informatique, nous avons eu par \xE9quipe de 5, l'occasion de r\xE9aliser une application web mobile pour le mus\xE9e maritime de La Rochelle. Ce projet n'est pas r\xE9ellement destin\xE9e pour le mus\xE9e maritime de La Rochelle, mais nous avions pour objectif de faire comme si cela \xE9tait le cas.<br><br>
        L'application web \xE0 pour objectif de permettre aux visiteurs de consulter les diff\xE9rentes informations concernant les diff\xE9rents bateaux appartenant au mus\xE9e maritime.<br><br>
        Le projet est mont\xE9 sur une stack Docker, l'application est r\xE9alis\xE9e avec le framework ReactJS pour la partie "front", le framework Symfony pour la partie "back" et MySql pour la base de donn\xE9e. Avec Symfony nous avons cr\xE9\xE9 une API \xE0 l'aide de API-Platform pour enregistrer et avoir toutes les informations de chaque bateaux du mus\xE9e. Toutes ces donn\xE9es sont par la suite appel\xE9es puis affich\xE9es avec du Javascript.<br><br>
        La page d'accueil contient une carte permettant de localiser l'ensemble des bateaux. Pour faire cela, nous avons utilis\xE9 l'API Leaflet. <br>
        Enfin, nous avons utilis\xE9 l'API OpenWeatherMap, qui permet de r\xE9cup\xE9rer les informations sur la m\xE9t\xE9o des prochains jours, pour que les visiteurs puissent la consulter et pr\xE9parer au mieux leur visite. <br><br>
        En conclusion, ce projet \xE0 \xE9t\xE9 une tr\xE8s bonne exp\xE9rience sur le fait de travailler en \xE9quipe, se r\xE9partir les t\xE2ches, etc, mais aussi sur le fait de pouvoir cr\xE9er notre propre API, notre propre visuel et pouvoir travailler \xE0 la fois sur le back et le front. J'ai donc pu me familiariser avec React et Symfony. <br><br>
        Vid\xE9o de d\xE9monstration : <a target="_blank" href="https://www.youtube.com/watch?v=mPk8INzt4AU">YouTube</a>
        `,techno:"<li>ReactJS</li><li>Symfony</li><li>API-Platform</li><li>Docker</li><li>HTML/CSS</li><li>Javascript</li><li>API Leaflet</li><li>API OpenWeatherMap</li>",year:"2022"}];const Ee={props:{info_project:Object},setup(t){return{changeBackground:P(()=>({backgroundImage:`url(${t.info_project.image})`}))}},data(){return{details_prj:this.info_project.details,techno_prj:this.info_project.techno}},computed:{markdownToHtml_details(){return x(this.details_prj)},markdownToHtml_techno(){return x(this.techno_prj)}}},y=t=>(k("data-v-72326c31"),t=t(),L(),t),Oe={class:"card"},De={class:"year"},He={class:"year__project"},Ve={class:"projet"},Re={class:"project--info"},Je={class:"title"},Fe={class:"desc"},Ue={class:"button--more"},Ye=["data-bs-target"],We=["id"],ze={class:"modal-dialog modal-lg",role:"document"},Ge={class:"modal-content"},Ke={class:"modal-header"},Qe={class:"modal-title title_modal"},Ze={class:"year__project--modal"},Xe={class:"modal-body content_modal"},et={class:"picture"},tt=["src","alt"],at={class:"project-global"},st={class:"project-details"},ot=y(()=>e("h5",{class:"sous-title_modal"},"D\xE9tails :",-1)),rt=y(()=>e("hr",null,null,-1)),it=["innerHTML"],nt={class:"project-techno"},dt=y(()=>e("h5",{class:"sous-title_modal"},"Technologies :",-1)),ct=y(()=>e("hr",null,null,-1)),lt=["innerHTML"],ut=y(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"more-bttn btn btn-secondary close__button","data-bs-dismiss":"modal"}," Fermer ")],-1));function _t(t,n,i,r,a,o){return _(),p(w,null,[e("div",Oe,[e("div",De,[e("p",He,g(i.info_project.year),1)]),e("div",{style:A(r.changeBackground),class:"cardImage"},null,4),e("div",Ve,[e("div",Re,[e("div",Je,g(i.info_project.title),1),e("div",Fe,g(i.info_project.resume),1)]),e("div",Ue,[e("button",{class:"more-bttn",type:"button","data-bs-toggle":"modal","data-bs-target":"#project-"+i.info_project.id}," En savoir plus ",8,Ye)])])]),e("div",{class:"modal fade",id:"project-"+i.info_project.id,tabindex:"-1",role:"dialog"},[e("div",ze,[e("div",Ge,[e("div",Ke,[e("h5",Qe,g(i.info_project.title),1),e("p",Ze,g(i.info_project.year),1)]),e("div",Xe,[e("div",et,[e("img",{src:i.info_project.image,alt:"image project"+i.info_project.id},null,8,tt)]),e("div",at,[e("div",st,[ot,rt,e("div",{class:"content-details",innerHTML:o.markdownToHtml_details},null,8,it)]),e("div",nt,[dt,ct,e("div",{class:"content-techno",innerHTML:o.markdownToHtml_techno},null,8,lt)])])]),ut])])],8,We)],64)}var pt=m(Ee,[["render",_t],["__scopeId","data-v-72326c31"]]);const mt={components:{ProjectCard:pt},setup(){class t{constructor(a,o,s,f,b,I,q){this.id=a,this.title=o,this.image=s,this.resume=f,this.details=b,this.techno=I,this.year=q}}let n=T([]);return B(()=>{for(const r of Ne){const a=new t(r.id,r.title,r.image,r.resume,r.details,r.techno,r.year);n.value.push(a)}}),{data_project:n}}},vt={class:"projectsList"};function ft(t,n,i,r,a,o){const s=v("ProjectCard");return _(),p("main",null,[e("div",vt,[(_(!0),p(w,null,M(r.data_project,(f,b)=>(_(),N(s,{key:b,info_project:f},null,8,["info_project"]))),128))])])}var ht=m(mt,[["render",ft],["__scopeId","data-v-2cbc50e4"]]);const bt={methods:{sendEmail(){E.sendForm("service_0wv2tqh","template_kcrdh1i",this.$refs.form,"GB8yA50yjoyhiB68O").then(t=>{document.getElementById("nameInput").value="",document.getElementById("mailInput").value="",document.getElementById("msgInput").value=""},t=>{console.log("FAILED...",t.text)})}}},gt={class:"formulaire"},yt=h('<div class="left_part" data-v-1a39d75d><div class="app-title" data-v-1a39d75d><span data-v-1a39d75d>CONTACTEZ</span><span data-v-1a39d75d>MOI</span></div><div class="contact_info" data-v-1a39d75d><ul data-v-1a39d75d><li data-v-1a39d75d><a href="mailto:hugomayonobe@gmail.com" data-v-1a39d75d>hugomayonobe@gmail.com</a></li><li data-v-1a39d75d><a href="tel:+33782648734" data-v-1a39d75d>07 82 64 87 34</a></li></ul><div class="media" data-v-1a39d75d><ul class="list__social-media" data-v-1a39d75d><a href="https://www.linkedin.com/in/hugo-mayonobe/" target="_blank" data-v-1a39d75d><i class="fa-brands fa-linkedin-in icon" data-v-1a39d75d></i></a><a href="https://www.facebook.com/hugo.mayonobe/" target="_blank" data-v-1a39d75d><i class="fa-brands fa-facebook-f icon" data-v-1a39d75d></i></a><a href="https://www.instagram.com/hugo_mynb/" target="_blank" data-v-1a39d75d><i class="fa-brands fa-instagram icon" data-v-1a39d75d></i></a></ul><p data-v-1a39d75d>Mes R\xE9seaux</p></div></div></div>',1),jt=h('<div class="name" data-v-1a39d75d><input required id="nameInput" type="text" placeholder="NOM" name="user_name" data-v-1a39d75d></div><div class="mail" data-v-1a39d75d><input required id="mailInput" type="email" placeholder="EMAIL" name="user_email" data-v-1a39d75d></div><div class="msg" data-v-1a39d75d><textarea required id="msgInput" placeholder="MESSAGE" name="message" data-v-1a39d75d></textarea></div><input class="buttons" type="submit" value="Envoyer" data-v-1a39d75d>',4),$t=[jt];function wt(t,n,i,r,a,o){return _(),p("div",gt,[yt,e("form",{class:"wrapper__form",ref:"form",onSubmit:n[0]||(n[0]=O((...s)=>o.sendEmail&&o.sendEmail(...s),["prevent"]))},$t,544)])}var kt=m(bt,[["render",wt],["__scopeId","data-v-1a39d75d"]]);const Lt={components:{ContactForm:kt}};function xt(t,n,i,r,a,o){const s=v("ContactForm");return _(),p("main",null,[d(s)])}var St=m(Lt,[["render",xt],["__scopeId","data-v-1059d396"]]);const Ct={},It=h('<div class="container-time" data-v-8eddd004><div class="timeline" data-v-8eddd004><ul data-v-8eddd004><li data-v-8eddd004><div class="timeline-content" data-v-8eddd004><h2 class="date" data-v-8eddd004>2019-2020</h2><h1 data-v-8eddd004>Bac Technologique STI2D - Option SIN</h1><p data-v-8eddd004> Ann\xE9e de terminale, avec option Syst\xE8me d&#39;Information et Num\xE9rique. <br data-v-8eddd004> D\xE9couverte et l\xE9g\xE8re initiation au HTML/CSS. </p></div></li><li data-v-8eddd004><div class="timeline-content" data-v-8eddd004><h2 class="date" data-v-8eddd004>2020-2021</h2><h1 data-v-8eddd004>DUT Informatique - 1ere Ann\xE9e</h1><p data-v-8eddd004> - Algorithmique avanc\xE9e <br data-v-8eddd004> - Programmation <strong data-v-8eddd004>C++</strong> <br data-v-8eddd004> - Apprentissage <strong data-v-8eddd004>HTML/CSS</strong> (Flex, ...)<br data-v-8eddd004></p></div></li><li data-v-8eddd004><div class="timeline-content" data-v-8eddd004><h2 class="date" data-v-8eddd004>2021-2022</h2><h1 data-v-8eddd004>DUT Informatique - 2e Ann\xE9e</h1><p data-v-8eddd004> - <strong data-v-8eddd004>PHP</strong> <br data-v-8eddd004> - D\xE9couverte du framework <strong data-v-8eddd004>Symfony</strong><br data-v-8eddd004> - D\xE9couverte du framework <strong data-v-8eddd004>ReactJS</strong><br data-v-8eddd004> - <strong data-v-8eddd004>HTML/CSS</strong><br data-v-8eddd004> - <strong data-v-8eddd004>Javascript</strong></p></div></li></ul></div></div><div class="download-cv" data-v-8eddd004><h2 data-v-8eddd004>Consulter mon CV</h2><a href="./CV_MAYONOBE_Hugo.pdf" target="_blank" data-v-8eddd004><button class="dw-button" data-v-8eddd004>CONSULTER</button></a></div>',2);function qt(t,n,i,r,a,o){return It}var Pt=m(Ct,[["render",qt],["__scopeId","data-v-8eddd004"]]);const At=D({history:H("/"),routes:[{path:"/",alias:["/home"],name:"home",component:Me},{path:"/projets",name:"projets",component:ht},{path:"/contact",name:"contact",component:St},{path:"/about",name:"about",component:Pt}]}),C=V(qe);C.use(At);C.mount("#app");