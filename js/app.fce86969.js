(function(e){function n(n){for(var o,i,c=n[0],s=n[1],l=n[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(n);while(d.length)d.shift()();return t.push.apply(t,l||[]),a()}function a(){for(var e,n=0;n<t.length;n++){for(var a=t[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(o=!1)}o&&(t.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"0f1f9651","chunk-0206bfa0":"9d64e2cb","chunk-0c047e41":"c1b5f948","chunk-13a6037e":"b6cc52b1","chunk-18f95272":"c2a5eee4","chunk-25b302c8":"26cfb7b2","chunk-26fc7596":"286ada91","chunk-2c06842c":"44a60f75","chunk-2d0c5615":"ebc1981a","chunk-2d0e96ec":"7b8875b5","chunk-2d208d90":"9c6a4a0e","chunk-2d21d0e2":"320e0a0d","chunk-2d22c123":"474e9714","chunk-2d2747e2":"55b9a2a1","chunk-2e80bb9a":"818f9add","chunk-319206de":"2b0a71fd","chunk-32334cb6":"4e06baf7","chunk-36769079":"f509823e","chunk-3c57cd7b":"d8fd3cb3","chunk-4cdd78c0":"21552dad","chunk-4f2d402a":"f52de32d","chunk-515a8379":"ad4b0488","chunk-53ccb27e":"e4c9c4d9","chunk-55d286b8":"984d19df","chunk-59974754":"4b536167","chunk-60cbc06b":"17f2bb4a","chunk-659152b8":"4c724f06","chunk-6e1e538a":"1656d117","chunk-766a929b":"4fd76fb0","chunk-c796899c":"b404a9ce","chunk-e8a7823a":"9ff4a1e8","chunk-f2df7d2c":"d2fe56d5","chunk-fde47172":"6ef31f8b",comple:"1c245d52",creditos:"e0a862ca",glosario:"d00893fb",intro:"38ec00d7",referencias:"58209c16",sintesis:"7ab75a22",tema1:"e72805b6",tema2:"4a25b9ea",tema3:"c538d279"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"26246671","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"f3a189b9","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"a4a9ab68","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"1f457347",creditos:"066770fd",glosario:"8f6aa7b7",intro:"31d6cfe0",referencias:"cf151eaa",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),a(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise((function(n,a){o=r[e]=[n,a]}));n.push(o[2]=t);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,a[1](d)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var m=u;t.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"417a":function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.60a3b765.svg"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=a("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");d["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Estrategias en <em>marketing online</em>",descripcionCurso:"El <em>Marketing</em> Digital es fundamental en el desarrollo y crecimiento de las organizaciones, toda vez que permite la consolidación de la información por medio de su tratamiento y el establecimiento de una hoja de ruta que permita aprovechar las herramientas tecnológicas, para el logro de los objetivos trazados y genere más clientes, ventas y utilidades.",imagenBannerPrincipal:a("74b5"),fondoBannerPrincipal:a("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")},{clases:["banner-principal-decorativo-2"],imagen:a("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"La campaña de <em>marketing online</em>",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Valor de vida de un cliente",hash:"t_1_1"},{numero:"1.2",titulo:"La tasa de conversión",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Plan de <em>marketing online</em>",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Análisis del entorno",hash:"t_2_1"},{numero:"2.2",titulo:"Definición de objetivos",hash:"t_2_2"},{numero:"2.3",titulo:"Diseño de estrategias y tácticas",hash:"t_2_3"},{numero:"2.4",titulo:"Control y seguimiento",hash:"t_2_4"},{numero:"2.5",titulo:"Presupuesto",hash:"t_2_5"}]},{nombreRuta:"tema3",numero:"3",titulo:"<em>Inbound</em>",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_14_623605.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1. La campaña de <em>marketing online</em>",referencia:"Aprendamos <em>Marketing.</em> (2019). Cómo Calcular el Costo de Adquisición al Cliente | Calcular el CAC y LTV. [Video] YouTube.",tipo:"Video",link:"https://youtu.be/y0vBAo0AA1k"},{tema:"2. Plan de <em>marketing online</em>",referencia:"Convierte más con Vilma Núñez (2021). ¿Cómo hacer un plan de <em>marketing</em>? [Video] YouTube. Youtube",tipo:"Video",link:"https://youtu.be/4bJh41Rerp8"},{tema:"3. <em>Inbound</em>",referencia:"InboundCycle - <em>Marketing</em> y ventas <em>inbound</em> (2018). <em>Inbound marketing:</em> etapas y metodología. [Video] YouTube.",tipo:"Video",link:"https://youtu.be/hQb5_ZCx08U"}],glosario:[{termino:"Análisis CAME",significado:"herramienta (Corregir, Afrontar, Mantener y Explotar) que complementa al análisis DAFO para poder establecer las guías de acción a partir de la información encontrada en la matriz FODA."},{termino:"Análisis DAFO",significado:"se utiliza para identificar y observar los factores internos y externos de un producto, servicio, lugar o persona (análisis de debilidades, amenazas, fortalezas y oportunidades)."},{termino:"Análisis de las 5 fuerzas de Porter",significado:"modelo que establece un marco de análisis para el nivel de competencia y rivalidad en las empresas, y desarrolla estrategias de negocio para la competencia."},{termino:"Análisis PESTEL",significado:"herramienta de planeación estratégica que le permite a una empresa analizar los factores macroeconómicos del ambiente en el cual opera."},{termino:"<em>Branding</em>",significado:"es el proceso de definición y construcción de una marca mediante la gestión planificada de todos los procesos gráficos, comunicacionales y de posicionamiento que se llevan a cabo."},{termino:"Estrategias en <em>Marketing Online</em>",significado:"consecución de actos con las que un determinado departamento espera lograr sus objetivos de <strong><em>marketing</em></strong> a través de seleccionar un público objetivo al que quiere llegar."},{termino:"<em>Marketing Online</em>",significado:"sistema para innovación, desarrollo y promoción continua de productos y servicios a un público seleccionado que utiliza Internet y los servicios comerciales en línea."}],referencias:[{referencia:"Aguilar, D. (2020). Cómo las ventas por internet están salvando empresas en Colombia",link:"https://www.triario.co/blog/evolucion-ventas-por-internet-en-colombia"},{referencia:"Ancin, J. M. (2016). El Plan de <em>Marketing</em> en la Pyme. ESIC",link:""},{referencia:"Arrieta, G. V. (2017). <em>Marketing</em> digital y su poder en la comunicación. Repositorio Institucional Universidad Santo Tomás.",link:""},{referencia:"Deiss, R.; Henneberry, R. (2020). <em>Digital marketing for dummies.</em> John Wiley & Sons.",link:""},{referencia:"Estrade, N. J. (2013). <em>Marketing</em> digital. <em>Marketing</em> digital: <em>marketing</em> móvil, SEO y analítica <em>web.</em> Difusora Larousse - Ediciones Pirámide.",link:""},{referencia:"Martínez, D. (2012). La elaboración del plan estratégico y su implementación. Análisis de entorno. Diaz Santos. Ortega, M. (2020). Herramientas del <em>marketing</em> digital que permiten desarrollar presencia online, analizar la <em>web,</em> conocer a la audiencia y mejorar los resultados de búsqueda. Revista Perspectivas, (45), 33-6",link:""},{referencia:"Sainz, J. (2018). El plan de <em>marketing</em> digital en la práctica. Esic editorial.",link:""},{referencia:"Sanmiguel, P. (2020). Influencer <em>Marketing:</em> Conecta tu marca con tu público. LID Editorial.",link:""},{referencia:"Torres, E. (2020). Digitalízate ¿Por dónde empezar?: Cómo transformar tu empresa para la era digital. Penguin Random House Grupo Editorial Perú.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de Línea de Producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Andrea Carolina Vargas Serrato",cargo:"Experto Temático",centro:"Regional Tolima - Centro de Industria y la Información"},{nombre:"Adriana López",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Leydy Jhuliana Jaramillo Mejía",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Asesora Metodológica y Pedagógica",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo de Desarrollo Curricular",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Corrector de Estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Juan Gilberto Giraldo Cortes",cargo:"Diseñador Instruccional",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Viviana Esperanza Herrera Quiñonez",cargo:"Asesora Metodológica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Andrés Felipe Herrera Roldán",cargo:"Diseñador web",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco José Vásquez Suárez",cargo:"Desarrollador Fullstack",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard e Ilustración",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Maria Alejandra Vera Briceño",cargo:"Animador y Productor Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Animador y Productor Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador y Productor Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco José Vásquez Suárez",cargo:"Actividad Didáctica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Javier Mauricio Oviedo",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de contenidos accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:g,store:h["a"],render:function(e){return e(u)}}).$mount("#app")},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.4648b951.svg"},"74b5":function(e,n,a){e.exports=a.p+"img/banner-princiapal.69b54c9d.png"},"8f04":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.89f4c9f5.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){}});
//# sourceMappingURL=app.fce86969.js.map