(this.webpackJsonpdevflix=this.webpackJsonpdevflix||[]).push([[0],{32:function(t,n,e){t.exports=e.p+"static/media/logo.65abfa1d.png"},33:function(t,n,e){t.exports=e.p+"static/media/banner.f2c23aac.png"},35:function(t,n,e){t.exports=e(64)},40:function(t,n,e){},43:function(t,n,e){},64:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(11),i=e.n(o),c=(e(40),e(8)),l=e(3),u=e(13),s=e(1),p=e(2);function d(){var t=Object(s.a)(["\n\tbackground-color: var(--black);\n\tcolor: var(--white);\n\tflex: 1;\n\tpadding-top: 50px;\n\tpadding-left: 5%;\n\tpadding-right: 5%;\n"]);return d=function(){return t},t}p.b.main(d());var f=e(32),m=e.n(f);function b(){var t=Object(s.a)(["\n\tcolor: var(--white);\n\tborder: 1px solid var(--white);\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tpadding: 16px 24px;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 16px;\n\toutline: none;\n\tborder-radius: 5px;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\ttransition: opacity 0.3s;\n\t&:hover,\n\t&:focus {\n\t\topacity: 0.5;\n    }\n    \n    @media (max-width: 800px) {\n        &:{\n            position: fixed;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: var(--primary);\n            border-radius: 0;\n            border: 0;\n            text-align: center;\n        }\n    }\n    \n"]);return b=function(){return t},t}var g=p.b.a(b());e(43);function x(){return a.a.createElement("nav",{className:"nav-menu"},a.a.createElement(c.b,{to:"/"},a.a.createElement("img",{src:m.a,alt:"Devflix",className:"logo"})),a.a.createElement(g,{as:c.b,to:"/cadastro/video"},"Novo v\xeddeo"))}function h(){var t=Object(s.a)(["\n\tbackground: var(--black);\n\tborder-top: 2px solid var(--primary);\n\tpadding-left: 16px;\n\tpadding-right: 16px;\n\tpadding-top: 32px;\n\tpadding-bottom: 32px;\n\tcolor: var(--white);\n\ttext-align: center;\n\t@media (max-width: 800px) {\n\t\tmargin-bottom: 50px;\n\t}\n"]);return h=function(){return t},t}var v=p.b.footer(h());var y=function(){return a.a.createElement(v,null,a.a.createElement("p",null,"Criado por Alison Christian na Imers\xe3o React da Alura."))};function E(t){var n=t.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,null),n,a.a.createElement(y,null))}var w=e(20),k=e(25);var j=function(t){var n=Object(r.useState)(t),e=Object(u.a)(n,2),a=e[0],o=e[1];return{values:a,handleChange:function(t){var n,e;n=t.target.getAttribute("name"),e=t.target.value,o(Object(k.a)(Object(k.a)({},a),{},Object(w.a)({},n,e)))},clearForm:function(){o(t)}}};function O(){var t=Object(s.a)(["\n\t\t\t\twidth: 400px;\n\t\t\t"]);return O=function(){return t},t}function C(){var t=Object(s.a)(["\n\t\t\t\t&:not([type='color']) + "," {\n\t\t\t\t\ttransform: scale(0.6) translateY(-10px);\n\t\t\t\t}\n\t\t\t"]);return C=function(){return t},t}function z(){var t=Object(s.a)(["\n\tflex: 1;\n\tbackground: #f0f0f5;\n\tborder-radius: 8px;\n\tborder: 0;\n\tpadding: 16px 24px;\n\tfont-size: 16px;\n\tcolor: #6c6c80;\n\ttransition: border-color 0.3s;\n\tmax-width: 500px;\n\tresize: none;\n\tdisplay: block;\n\toutline: 0;\n\n\t&:focus {\n\t\tborder-bottom-color: var(--primary);\n\t}\n\n\t&:focus:not([type='color']) + "," {\n\t\ttransform: scale(0.6) translateY(-10px);\n\t}\n\n\t","\n\n\t","\n"]);return z=function(){return t},t}function S(){var t=Object(s.a)(["\n\tcolor: #e5e5e5;\n\theight: 57px;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 16px;\n\n\tdisplay: flex;\n\talign-items: center;\n\n\ttransform-origin: 0% 0%;\n\tfont-size: 18px;\n\tfont-style: normal;\n\tfont-weight: 300;\n\n\ttransition: 0.1s ease-in-out;\n"]);return S=function(){return t},t}function F(){var t=Object(s.a)([""]);return F=function(){return t},t}function A(){var t=Object(s.a)(["\n\tposition: relative;\n\tmargin: 7px 0;\n\ttextarea {\n\t\tmin-height: 150px;\n\t}\n\tinput[type='color'] {\n\t\tpadding-left: 56px;\n\t\twidth: 100px;\n\t\theight: 55px;\n\t}\n"]);return A=function(){return t},t}var I=p.b.div(A()),T=p.b.label(F()),_=p.b.span(S()),U=p.b.input(z(),_,(function(t){return t.value.length>0&&Object(p.a)(C(),_)}),(function(t){return"color"===t.type&&Object(p.a)(O())}));function D(t){var n=t.label,e=t.type,r=t.name,o=t.value,i=t.onChange,c=t.suggestions,l="textarea"===e?"textarea":"input",u=Boolean(o.length),s="id_".concat(r),p=Boolean(c.length);return a.a.createElement(I,null,a.a.createElement(T,{htmlFor:s},a.a.createElement(U,{as:l,id:s,type:e,value:o,name:r,hasValue:u,onChange:i,autoComplete:p?"off":"on",list:p?"suggestionFor_".concat(s):void 0}),a.a.createElement(_,null,n),p&&a.a.createElement("datalist",{id:"suggestionFor_".concat(s)},c.map((function(t){return a.a.createElement("option",{value:t,key:"suggestionFor_".concat(s,"_option").concat(t)},t)})))))}D.defaultProps={type:"text",value:"",onChange:function(){},suggestions:[]};var R=D;function V(){var t=Object(s.a)(["\n\tcolor: var(--white);\n\tbackground-color: var(--black);\n\tborder: 1px solid var(--white);\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tpadding: 16px 24px;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 16px;\n\toutline: none;\n\tborder-radius: 5px;\n\t-webkit-text-decoration: none;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\t-webkit-transition: opacity 0.3s;\n\ttransition: opacity 0.3s;\n\n\t&:focus {\n\t\topacity: 0.5;\n\t}\n"]);return V=function(){return t},t}var N=p.b.button(V()),J=e(9),L=e.n(J),P=e(15),B="http://localhost:3333",W="".concat(B,"/videos");var M={create:function(t){return fetch("".concat(W,"?_embed=videos"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then(function(){var t=Object(P.a)(L.a.mark((function t(n){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.ok){t.next=5;break}return t.next=3,n.json();case 3:return e=t.sent,t.abrupt("return",e);case 5:throw new Error("Error Unknow on register");case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}},Y="".concat(B,"/categorias");var q={getAll:function(){return fetch("".concat(Y)).then(function(){var t=Object(P.a)(L.a.mark((function t(n){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.ok){t.next=5;break}return t.next=3,n.json();case 3:return e=t.sent,t.abrupt("return",e);case 5:throw new Error("Error Unknow");case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())},getAllWithVideos:function(){return fetch("".concat(Y,"?_embed=videos")).then(function(){var t=Object(P.a)(L.a.mark((function t(n){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.ok){t.next=5;break}return t.next=3,n.json();case 3:return e=t.sent,t.abrupt("return",e);case 5:throw new Error("Error Unknow");case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())},create:function(t){return fetch("".concat(Y),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then(function(){var t=Object(P.a)(L.a.mark((function t(n){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.ok){t.next=5;break}return t.next=3,n.json();case 3:return e=t.sent,t.abrupt("return",e);case 5:throw new Error("Error Unknow on register");case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}};function H(){var t=Object(s.a)(["\n\tmargin: 30px auto 80px auto;\n\tpadding: 64px;\n\tmax-width: 500px;\n\tbackground: #fff;\n\tborder-radius: 8px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\th1 {\n\t\tfont-size: 36px;\n\t\ttext-transform: uppercase;\n\t\ttext-align: center;\n\t}\n\n\tspan {\n\t\tfont-size: 14px;\n\t\tfont-weight: normal;\n\t\tcolor: var(--text-color);\n\t}\n\n\tinput {\n\t\tjustify-item: center;\n\t}\n\n\ta {\n\t\tmargin-top:50px;\n\t\tcolor: var(--primary);\n\t\ttext-decoration: none;\n\t\ttext-transform: uppercase;\n\t\tfont-weight: bold;\n\t}\n"]);return H=function(){return t},t}var $=p.b.form(H()),G=e(14);function K(){var t=Object(l.f)(),n=Object(r.useState)([]),e=Object(u.a)(n,2),o=e[0],i=e[1],s=o.map((function(t){return t.titulo})),p=j({title:"",url:"",category:""}),d=p.handleChange,f=p.values;return Object(r.useEffect)((function(){q.getAll().then((function(t){i(t)}))}),[]),a.a.createElement(E,null,a.a.createElement($,{onSubmit:function(n){n.preventDefault();var e=o.find((function(t){return t.titulo===f.category}));M.create({titulo:f.title,url:f.url,categoriaId:e.id}).then((function(){G.b.success("V\xeddeo cadastrado."),t.push("/")}))}},a.a.createElement("h1",null,"Cadastro de v\xeddeos"),a.a.createElement(R,{label:"T\xedtulo do V\xeddeo",name:"title",value:f.title,onChange:d}),a.a.createElement(R,{label:"URL",name:"url",value:f.url,onChange:d}),a.a.createElement(R,{label:"Categoria",name:"category",value:f.category,onChange:d,suggestions:s}),a.a.createElement(N,{type:"submit"},"Cadastrar"),a.a.createElement(c.b,{to:"/cadastro/categoria"},"Cadastrar Categoria")))}function Q(){var t=j({title:"",description:"",color:""}),n=t.handleChange,e=t.values,r=t.clearForm;return a.a.createElement(E,null,a.a.createElement($,{onSubmit:function(t){t.preventDefault(),q.create({titulo:e.title,descricao:e.description,cor:e.color}).then((function(){G.b.success("Categoria cadastrada."),r()}))}},a.a.createElement("h1",null,"Cadasto de categorias"),a.a.createElement(R,{label:"T\xedtulo",type:"text",name:"title",value:e.title,onChange:n}),a.a.createElement(R,{label:"Descri\xe7\xe3o",type:"textarea",name:"description",value:e.description,onChange:n}),a.a.createElement(R,{label:"Cor",type:"color",name:"color",value:e.color,onChange:n}),a.a.createElement(N,{type:"submit"},"Cadastrar"),a.a.createElement(c.b,{to:"/cadastro/video"},"Cadastrar V\xeddeo")),a.a.createElement(c.b,{to:"/"},"Ir para home"))}function X(){var t=Object(s.a)(["\n\tfont-family: 'Roboto', sans-serif;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tpadding: 16px 24px;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 16px;\n\toutline: none;\n\tborder-radius: 5px;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tborder: 1px solid transparent;\n\tcolor: var(--black);\n\tbackground: var(--white);\n\tborder-color: var(--black);\n\ttransition: opacity 0.3s;\n\tdisplay: none;\n\tmargin: 0 auto;\n\t@media (max-width: 800px) {\n\t\tdisplay: block;\n\t}\n"]);return X=function(){return t},t}function Z(){var t=Object(s.a)(["\n\theight: 80vh;\n\tposition: relative;\n\tcolor: #fff;\n\tbackground-image: ",";\n\tbackground-size: cover;\n\tbackground-position: center;\n\t@media (max-width: 800px) {\n\t\theight: auto;\n\t\tmin-height: 50vh;\n\t}\n\t&:after,\n\t&:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tmargin: auto;\n\t\theight: 20%;\n\t}\n\t&:before {\n\t\ttop: 0;\n\t\theight: 100%;\n\t\tbackground: rgba(0, 0, 0, 0.5);\n\t}\n\t&:after {\n\t\tbottom: 0;\n\t\tbackground: linear-gradient(0deg, #141414 0%, transparent 100%);\n\t}\n"]);return Z=function(){return t},t}function tt(){var t=Object(s.a)(["\n\tmax-width: 100%;\n"]);return tt=function(){return t},t}function nt(){var t=Object(s.a)(["\n\tcolor: var(--primary);\n"]);return nt=function(){return t},t}function et(){var t=Object(s.a)(["\n\tfont-style: normal;\n\tfont-weight: 600;\n\tfont-size: 40px;\n\tline-height: 1.5;\n\tmargin-top: 0;\n\tmargin-bottom: 32px;\n\t@media (max-width: 800px) {\n\t\tfont-size: 32px;\n\t\ttext-align: center;\n\t}\n"]);return et=function(){return t},t}function rt(){var t=Object(s.a)(["\n\tline-height: 1.6em;\n\ttext-align: justify;\n\t@media (max-width: 800px) {\n\t\tdisplay: none;\n\t}\n"]);return rt=function(){return t},t}function at(){var t=Object(s.a)(["\n\tfont-family: Roboto;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 60px;\n\tline-height: 70px;\n\tdisplay: flex;\n\talign-items: center;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tpadding: 25px;\n\tline-height: 1;\n\tborder-radius: 4px;\n\t@media (max-width: 800px) {\n\t\tdisplay: none;\n\t\tfont-size: 18px;\n\t\tpadding: 10px;\n\t}\n"]);return at=function(){return t},t}function ot(){var t=Object(s.a)(["\n\twidth: 50%;\n\tdisplay: inline-block;\n\tmargin-bottom: 50px;\n\tmargin-left: 10px;\n\t@media (max-width: 800px) {\n\t\twidth: 100%;\n\t}\n"]);return ot=function(){return t},t}function it(){var t=Object(s.a)(["\n\tmargin-left: 5%;\n\tmargin-right: 5%;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\tz-index: 10;\n\t@media (max-width: 800px) {\n\t\tpadding-top: 100px;\n\t\tflex-direction: column;\n\t}\n"]);return it=function(){return t},t}var ct=p.b.section(it());ct.Item=p.b.div(ot()),ct.Category=p.b.h1(at()),ct.Description=p.b.p(rt()),ct.Title=p.b.h2(et()),ct.Span=p.b.span(nt());var lt=p.b.img(tt()),ut=p.b.section(Z(),(function(t){var n=t.backgroundImage;return"url(".concat(n,")")})),st=p.b.button(X()),pt=e(33),dt=e.n(pt);function ft(){return a.a.createElement(ut,null,a.a.createElement(ct,null,a.a.createElement(ct.Item,null,a.a.createElement(ct.Title,null,"Plataforma para compartilhamento de v\xeddeos sobre"," ",a.a.createElement(ct.Span,null,"desenvolvimento")," ","e",a.a.createElement(ct.Span,null," ","tecnologia")," .")),a.a.createElement(ct.Item,null,a.a.createElement(lt,{src:dt.a,alt:"Devflix"}),a.a.createElement(st,null,"Assistir"))))}function mt(){var t=Object(s.a)(["\n\tcolor: white;\n\tmin-height: 197px;\n\tmargin-left: 5%;\n\tmargin-bottom: 16px;\n"]);return mt=function(){return t},t}function bt(){var t=Object(s.a)(["\n\tmargin: 0;\n\tpadding-left: 0;\n\tpadding-bottom: 32px;\n\tlist-style: none;\n\tdisplay: flex;\n\toverflow-x: auto;\n\tflex-direction: row;\n\n\tli {\n\t\tmargin-right: 16px;\n\t}\n"]);return bt=function(){return t},t}function gt(){var t=Object(s.a)(["\n\tmargin-left: 16px;\n\ttext-decoration: none;\n\ttransition: opacity 0.3s;\n\t&:hover,\n\t&:focus {\n\t\topacity: 0.5;\n\t}\n\t@media (max-width: 800px) {\n\t\tdisplay: block;\n\t\tmargin-bottom: 16px;\n\t\tmargin-left: 0;\n\t}\n"]);return gt=function(){return t},t}function xt(){var t=Object(s.a)(["\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 35px;\n\tline-height: 1;\n\tmargin-bottom: 16px;\n\tdisplay: inline-block;\n\tpadding: 20px;\n\tbackground: red;\n\tline-height: 1;\n\tborder-radius: 4px;\n\t@media (max-width: 800px) {\n\t\tfont-size: 18px;\n\t\tpadding: 10px;\n\t}\n"]);return xt=function(){return t},t}var ht=p.b.h3(xt()),vt=(p.b.a(gt()),p.b.ul(bt()),p.b.section(mt()));function yt(){var t=Object(s.a)(["\n\tborder: 2px solid;\n\tborder-radius: 4px;\n\ttext-decoration: none;\n\toverflow: hidden;\n\tcursor: pointer;\n\tcolor: white;\n\tflex: 0 0 298px;\n\twidth: 298px;\n\theight: 197px;\n\tbackground-image: ",";\n\tbackground-size: cover;\n\tbackground-position: center;\n\tborder-radius: 10px;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tpadding: 16px;\n\ttransition: opacity 0.3s;\n\t&:hover,\n\t&:focus {\n\t\topacity: 0.5;\n\t}\n\n\t&:not(:first-child) {\n\t\tmargin-left: 20px;\n\t}\n"]);return yt=function(){return t},t}var Et=p.b.a(yt(),(function(t){var n=t.url;return"url(".concat(n,")")}));var wt=function(t){var n=t.videoTitle,e=t.videoURL,r=t.categoryColor,o="https://img.youtube.com/vi/".concat(e.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),"/hqdefault.jpg");return a.a.createElement(Et,{url:o,href:e,target:"_blank",style:{borderColor:r||"red"},title:n})};function kt(){var t=Object(s.a)(["\n\tmargin-right: 16px;\n\timg {\n\t\tmargin: 16px;\n\t\twidth: 298px;\n\t\theight: 197px;\n\t\tobject-fit: cover;\n\t}\n"]);return kt=function(){return t},t}function jt(){var t=Object(s.a)(["\n\tpadding: 0;\n\tmargin: 0;\n\t.slick-prev,\n\t.slick-next {\n\t\tz-index: 50;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tmargin: auto;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\ttransform: initial;\n\t\t&:before {\n\t\t\tfont-size: 30px;\n\t\t}\n\t}\n\n\t.slick-prev {\n\t\tleft: 0;\n\t}\n\t.slick-next {\n\t\tright: 16px;\n\t}\n"]);return jt=function(){return t},t}var Ot=p.b.ul(jt()),Ct=p.b.li(kt()),zt=e(34),St=e.n(zt);function Ft(t){var n=t.children;return a.a.createElement(Ot,null,a.a.createElement(St.a,{dots:!1,infinite:!0,speed:300,centerMode:!0,variableWidth:!0,adaptiveHeight:!0},n))}function At(t){var n=t.category,e=n.titulo,r=n.cor,o=n.videos;return a.a.createElement(vt,null,e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ht,{style:{backgroundColor:r||"red"}},e)),a.a.createElement(Ft,null,o.map((function(t,n){return a.a.createElement(Ct,{key:t.titulo},a.a.createElement(wt,{videoTitle:t.titulo,videoURL:t.url,categoryColor:r}))}))))}var It=function(){var t=Object(r.useState)([]),n=Object(u.a)(t,2),e=n[0],o=n[1];return Object(r.useEffect)((function(){q.getAllWithVideos().then((function(t){o(t)})).catch((function(t){}))}),[]),a.a.createElement(E,null,0===e.length&&a.a.createElement("div",null,"Loading..."),a.a.createElement(ft,null),e.map((function(t){return a.a.createElement(At,{category:t,key:t.id})})))};var Tt=function(){return a.a.createElement(c.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",component:It,exact:!0}),a.a.createElement(l.a,{path:"/cadastro/video",component:K}),a.a.createElement(l.a,{path:"/cadastro/categoria",component:Q}),a.a.createElement(l.a,{component:It})))};e(63);var _t=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(G.a,null),a.a.createElement(Tt,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_t,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fd60c80f.chunk.js.map