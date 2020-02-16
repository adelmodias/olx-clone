(this["webpackJsonpolx-clone"]=this["webpackJsonpolx-clone"]||[]).push([[0],{43:function(e,n,a){e.exports=a(64)},63:function(e,n,a){},64:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(18),l=a.n(c),i=a(17),o=a(19),s=a(6),u=a(3),d=a(4);function m(){var e=Object(u.a)(["\n    margin: 10px 0;\n    background-color:#FFCACA;\n    color:#000;\n    border: 2px solid #FF0000;\n    padding: 10px;\n"]);return m=function(){return e},e}function p(){var e=Object(u.a)([""]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n    font-size: 27px;\n"]);return b=function(){return e},e}function f(){var e=Object(u.a)(["\n    max-width: 1000px;\n    margin: auto;\n"]);return f=function(){return e},e}function g(){var e=Object(u.a)([""]);return g=function(){return e},e}var x=d.a.div(g()),E=d.a.div(f()),h=d.a.h1(b()),v=(d.a.div(p()),d.a.div(m()));function w(){var e=Object(u.a)(["\n    background-color: #fff;\n    height: 60px;\n    border-bottom: 1px solid #CCC;\n    \n    .container {\n        max-width: 1140px;\n        margin: auto;\n        display: flex;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    .logo {\n        flex: 1;\n        display: flex;\n        align-items: center;\n        min-height: 60px;\n\n        .logo-1,\n        .logo-2,\n        .logo-3 {\n            font-size: 27px;\n            font-weight: bold;\n        }\n\n        .logo-1 { color: #FF0000 };\n        .logo-2 { color: #00FF00 };\n        .logo-3 { color: #0000FF };\n    }\n\n    nav {\n        padding-top: 10px;\n        padding-bottom: 10px;\n\n        ul,\n        li {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n\n        ul {\n            display: flex;\n            align-items: center;\n            height: 40px;\n        }\n\n        li {\n            margin-left: 20px;\n            margin-right: 20px;\n\n            a,\n            button {\n                color: black;\n                font-size: 14px;\n                transition: 0.3s all;\n                border: none;\n                background: transparent;\n                cursor: pointer;\n                outline: none;\n\n                &:hover {\n                    color: #333;\n                    opacity: 0.9;\n                }\n\n                &.button {\n                    background-color: #FF8100;\n                    border-radius: 4px;\n                    color: white;\n                    padding: 5px 10px;\n\n                    &:hover {\n                        background-color: #E57706;\n                    }\n                }\n            }\n        }\n    }\n"]);return w=function(){return e},e}var j=d.a.div(w()),O=a(13),y=a.n(O),N=function(){return!!y.a.get("token")},k=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n?y.a.set("token",e,{expires:999}):y.a.set("token",e)},S=function(){var e=N();return r.a.createElement(j,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},r.a.createElement(s.b,{to:"./"},r.a.createElement("span",{className:"logo-1"},"O"),r.a.createElement("span",{className:"logo-2"},"L"),r.a.createElement("span",{className:"logo-3"},"X"))),r.a.createElement("nav",null,r.a.createElement("ul",null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/my-account"},"Minha Conta")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){y.a.remove("token"),window.location.href="/"}},"Sair")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/post-an-ad",className:"button"},"Anunciar"))),!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/signin"},"Login")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/signup"},"Cadastrar")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/signin",className:"button"},"Anunciar")))))))};function C(){var e=Object(u.a)(["\n    height: 100px;\n    background-color: #CCC;\n"]);return C=function(){return e},e}var F=d.a.div(C()),z=function(){return r.a.createElement(F,null,"Footer")},D=a(15),q=a(42),A=function(e){var n=e.children,a=Object(q.a)(e,["children"]),t=N(),c=!(a.private&&!t);return r.a.createElement(D.b,Object.assign({},a,{render:function(){return c?n:r.a.createElement(D.a,{to:"/signin"})}}))},I=a(1),P=a.n(I),L=a(2);function B(){var e=Object(u.a)(["\n    h2 {\n        font-size: 20px;\n    }\n\n    .list {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-around;\n\n        .ad-item {\n            width: 25%;\n        }\n    }\n\n    .viewAllAds {\n        color: black;\n        text-decoration: none;\n        font-weight: bold;\n        display: inline-block;\n        margin-top: 10px;\n    }\n"]);return B=function(){return e},e}function T(){var e=Object(u.a)(["\n    background-color: #DDD;\n    border-bottom: 1px solid #CCC;\n    padding: 20px 0;\n\n    .searchBox {\n        background-color: #9BB83C;\n        padding: 20px 15px;\n        border-radius: 5px;\n        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);\n        display: flex;\n\n        form {\n            flex: 1;\n            display: flex;\n\n            input,\n            select {\n                height: 40px;\n                border: 0;\n                border-radius: 5px;\n                outline: none;\n                font-size: 15px;\n                color: black;\n                margin-right: 20px;\n                background: white;\n            }\n\n            input {\n                flex: 1;\n                padding: 0 10px;\n            }\n\n            select {\n                width: 100px;\n            }\n\n            button {\n                background-color: #49AEEF;\n                font-size: 15px;\n                border: 0;\n                border-radius: 5px;\n                color: white;\n                height: 40px;\n                padding: 0 20px;\n                cursor: pointer;\n            }\n        }\n    }\n\n    .categoryList {\n        display: flex;\n        flex-wrap: wrap;\n        margin-top: 20px;\n\n        .categoryItem {\n            width: 25%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: black;\n            text-decoration: none;\n            height: 50px;\n            margin-bottom: 10px;\n\n            &:hover {\n                color: #999;\n            }\n\n            img {\n                width: 45px;\n                height: 45px;\n                margin-right: 10px;\n            }\n        }\n    }\n\n"]);return T=function(){return e},e}var R=d.a.div(T()),_=d.a.div(B()),M=a(36),V=a.n(M),$="http://alunos.b7web.com.br:501",J=function(e,n){var a,t,r;return P.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n.token||(a=y.a.get("token"))&&(n.token=a),c.next=3,P.a.awrap(fetch($+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}));case 3:return t=c.sent,c.next=6,P.a.awrap(t.json());case 6:if(!(r=c.sent).notallowed){c.next=10;break}return window.location.href="/signin",c.abrupt("return");case 10:return c.abrupt("return",r);case 11:case"end":return c.stop()}}))},W=function(e){var n,a,t,r,c=arguments;return P.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return(n=c.length>1&&void 0!==c[1]?c[1]:[]).token||(a=y.a.get("token"))&&(n.token=a),l.next=4,P.a.awrap(fetch("".concat($+e,"?").concat(V.a.stringify(n))));case 4:return t=l.sent,l.next=7,P.a.awrap(t.json());case 7:if(!(r=l.sent).notallowed){l.next=11;break}return window.location.href="/signin",l.abrupt("return");case 11:return l.abrupt("return",r);case 12:case"end":return l.stop()}}))},G=function(e,n){var a,t,r;return P.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n.token||(a=y.a.get("token"))&&n.append("token",a),c.next=3,P.a.awrap(fetch($+e,{method:"POST",body:n}));case 3:return t=c.sent,c.next=6,P.a.awrap(t.json());case 6:if(!(r=c.sent).notallowed){c.next=10;break}return window.location.href="/signin",c.abrupt("return");case 10:return c.abrupt("return",r);case 11:case"end":return c.stop()}}))},H={login:function(e,n){var a;return P.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.awrap(J("/user/signin",{email:e,password:n}));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}))},register:function(e,n,a,t,r){var c;return P.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,P.a.awrap(J("/user/signup",{name:e,state:n,email:a,password:t,confirmPassword:r}));case 2:return c=l.sent,l.abrupt("return",c);case 4:case"end":return l.stop()}}))},getStates:function(){var e;return P.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.a.awrap(W("/states"));case 2:return e=n.sent,n.abrupt("return",e.states);case 4:case"end":return n.stop()}}))},getCategories:function(){var e;return P.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.a.awrap(W("/categories"));case 2:return e=n.sent,n.abrupt("return",e.categories);case 4:case"end":return n.stop()}}))},getAds:function(e){var n;return P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(W("/ad/list",e));case 2:return n=a.sent,a.abrupt("return",n);case 4:case"end":return a.stop()}}))},getAdInfo:function(e){var n,a,t=arguments;return P.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>1&&void 0!==t[1]&&t[1],r.next=3,P.a.awrap(W("/ad/item",{id:e,other:n}));case 3:return a=r.sent,r.abrupt("return",a);case 5:case"end":return r.stop()}}))},addAd:function(e){var n;return P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(G("/ad/add",e));case 2:return n=a.sent,a.abrupt("return",n);case 4:case"end":return a.stop()}}))}},U=function(){return H};function X(){var e=Object(u.a)(["\n    a {\n        display: block;\n        border: 1px solid #FFF;\n        margin: 10px;\n        text-decoration: none;\n        padding: 10px;\n        border-radius: 5px;\n        color: black;\n        background: #fff;\n        transition: 0.4s all ease;\n        box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);\n\n        &:hover {\n            border: 1px solid #CCC;\n        }\n\n        .ad-image {\n            width: 100%;\n            border-radius: 5px;\n        }\n\n        .ad-name {\n            font-weight: bold;\n        }\n    }\n"]);return X=function(){return e},e}var Y=d.a.div(X()),K=function(e){var n="";return n=e.data.priceNegotiable?"Pre\xe7o Negoci\xe1vel":"R$ ".concat(e.data.price),r.a.createElement(Y,{className:"ad-item"},r.a.createElement(s.b,{to:"/ad/".concat(e.data.id)},r.a.createElement("img",{src:e.data.image,className:"ad-image"}),r.a.createElement("div",{className:"ad-name"},e.data.title),r.a.createElement("div",{className:"ad-price"},n)))},Q=function(){var e=U(),n=Object(t.useState)([]),a=Object(L.a)(n,2),c=a[0],l=a[1],i=Object(t.useState)([]),o=Object(L.a)(i,2),u=o[0],d=o[1],m=Object(t.useState)([]),p=Object(L.a)(m,2),b=p[0],f=p[1];return Object(t.useEffect)((function(){!function(){var n;P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(e.getStates());case 2:n=a.sent,l(n);case 4:case"end":return a.stop()}}))}()}),[]),Object(t.useEffect)((function(){!function(){var n;P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(e.getCategories());case 2:n=a.sent,d(n);case 4:case"end":return a.stop()}}))}()}),[]),Object(t.useEffect)((function(){!function(){var n;P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(e.getAds({sort:"desc",limit:8}));case 2:n=a.sent,f(n.ads);case 4:case"end":return a.stop()}}))}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null,r.a.createElement(E,null,r.a.createElement("div",{className:"searchBox"},r.a.createElement("form",{method:"GET",action:"/ads"},r.a.createElement("input",{type:"text",name:"q",placeholder:"O que voc\xea procura?"}),r.a.createElement("select",{name:"state"},c.map((function(e,n){return r.a.createElement("option",{key:n,value:e.name},e.name)}))),r.a.createElement("button",null,"Pesquisa"))),r.a.createElement("div",{className:"categoryList"},u.map((function(e,n){return r.a.createElement(s.b,{key:n,to:"/ads?cat=".concat(e.slug),className:"categoryItem"},r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("span",null,e.name))}))))),r.a.createElement(E,null,r.a.createElement(_,null,r.a.createElement("h2",null,"An\xfancios Recentes"),r.a.createElement("div",{className:"list"},b.map((function(e,n){return r.a.createElement(K,{key:n,data:e})}))),r.a.createElement(s.b,{to:"/ads",className:"viewAllAds"},"Ver todos"),r.a.createElement("hr",null),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque debitis ad officia perferendis est quo consequatur eveniet quis, adipisci eos laboriosam error labore assumenda nesciunt, illo impedit ipsam necessitatibus?"))))},Z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"P\xe1gina Sobre"),r.a.createElement("br",null),r.a.createElement(s.b,{to:"./"},"P\xe1gina inicial"))},ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"P\xe1gina n\xe3o encontrada!"),r.a.createElement("br",null),r.a.createElement(s.b,{to:"./"},"Voltar para a home"))};function ne(){var e=Object(u.a)(["\n    form {\n        background-color: #fff;\n        border-radius: 3px;\n        padding: 10px;\n        box-shadow: 0px 0px 3px #999;\n\n        .area {\n            display: flex;\n            align-items: center;\n            padding: 10px;\n            max-width: 500px;\n\n            .area--title {\n                width: 200px;\n                text-align: right;\n                padding-right: 20px;\n                font-weight: bold;\n                font-size: 14px;\n            }\n\n            .area--input {\n                flex: 1;\n\n                input:not([type=checkbox]) {\n                    width: 100%;\n                    font-size: 14px;\n                    padding: 5px;\n                    border: 1px solid #DDD;\n                    border-radius: 3px;\n                    outline: 0;\n                    transition: all ease .4s;\n\n                    &:focus {\n                        border: 1px solid #333;\n                        color: #333;\n                    }\n                }\n\n                button {\n                    background-color: #0089FF;\n                    border: 0;\n                    outline: 0;\n                    padding: 5px 10px;\n                    border-radius: 4px;\n                    color: #FFF;\n                    font-size: 15px;\n                    cursor: pointer;\n\n                    &:hover {\n                        background-color: #006FCE;\n                    }\n                }\n            }\n        }\n    }\n"]);return ne=function(){return e},e}var ae=d.a.div(ne()),te=function(){var e=U(),n=Object(t.useState)(""),a=Object(L.a)(n,2),c=a[0],l=a[1],i=Object(t.useState)(""),o=Object(L.a)(i,2),s=o[0],u=o[1],d=Object(t.useState)(!1),m=Object(L.a)(d,2),p=m[0],b=m[1],f=Object(t.useState)(!1),g=Object(L.a)(f,2),x=g[0],w=g[1],j=Object(t.useState)(""),O=Object(L.a)(j,2),y=O[0],N=O[1];return r.a.createElement(E,null,r.a.createElement(h,null,"Login"),r.a.createElement(ae,null,y&&r.a.createElement(v,null,y),r.a.createElement("form",{onSubmit:function(n){var a;return P.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),w(!0),N(""),t.next=5,P.a.awrap(e.login(c,s));case 5:(a=t.sent).error?N(a.error):(k(a.token,p),window.location.href="/"),w(!1);case 8:case"end":return t.stop()}}))}},r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"E-mail"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"email",value:c,onChange:function(e){return l(e.target.value)},disabled:x,required:!0}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Senha"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"password",value:s,onChange:function(e){return u(e.target.value)},disabled:x,required:!0}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Lembrar Senha?"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"checkbox",checked:p,onChange:function(){return b(!p)},disabled:x}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"}),r.a.createElement("div",{className:"area--input"},r.a.createElement("button",{disabled:x},"Fazer Login"))))))};function re(){var e=Object(u.a)(["\n    form {\n        background-color: #fff;\n        border-radius: 3px;\n        padding: 10px;\n        box-shadow: 0px 0px 3px #999;\n\n        .area {\n            display: flex;\n            align-items: center;\n            padding: 10px;\n            max-width: 500px;\n\n            .area--title {\n                width: 200px;\n                text-align: right;\n                padding-right: 20px;\n                font-weight: bold;\n                font-size: 14px;\n            }\n\n            .area--input {\n                flex: 1;\n\n                input:not([type=checkbox]),\n                select {\n                    width: 100%;\n                    font-size: 14px;\n                    padding: 5px;\n                    border: 1px solid #DDD;\n                    border-radius: 3px;\n                    outline: 0;\n                    transition: all ease .4s;\n                    background: none;\n\n                    &:focus {\n                        border: 1px solid #333;\n                        color: #333;\n                    }\n                }\n\n                button {\n                    background-color: #0089FF;\n                    border: 0;\n                    outline: 0;\n                    padding: 5px 10px;\n                    border-radius: 4px;\n                    color: #FFF;\n                    font-size: 15px;\n                    cursor: pointer;\n\n                    &:hover {\n                        background-color: #006FCE;\n                    }\n                }\n            }\n        }\n    }\n"]);return re=function(){return e},e}var ce=d.a.div(re()),le=function(){var e=U(),n=Object(t.useState)(""),a=Object(L.a)(n,2),c=a[0],l=a[1],i=Object(t.useState)(""),o=Object(L.a)(i,2),s=o[0],u=o[1],d=Object(t.useState)(""),m=Object(L.a)(d,2),p=m[0],b=m[1],f=Object(t.useState)(""),g=Object(L.a)(f,2),x=g[0],w=g[1],j=Object(t.useState)(""),O=Object(L.a)(j,2),y=O[0],N=O[1],S=Object(t.useState)([]),C=Object(L.a)(S,2),F=C[0],z=C[1],D=Object(t.useState)(!1),q=Object(L.a)(D,2),A=q[0],I=q[1],B=Object(t.useState)(""),T=Object(L.a)(B,2),R=T[0],_=T[1];Object(t.useEffect)((function(){!function(){var n;P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(e.getStates());case 2:n=a.sent,z(n);case 4:case"end":return a.stop()}}))}()}),[]);return r.a.createElement(E,null,r.a.createElement(h,null,"Cadastro"),r.a.createElement(ce,null,R&&r.a.createElement(v,null,R),r.a.createElement("form",{onSubmit:function(n){var a;return P.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),I(!0),_(""),x===y){t.next=7;break}return _("Confirma\xe7\xe3o de senha com erro!"),I(!1),t.abrupt("return");case 7:return t.next=9,P.a.awrap(e.register(c,s,p,x,y));case 9:(a=t.sent).error?_(a.error):(k(a.token),window.location.href="/"),I(!1);case 12:case"end":return t.stop()}}))}},r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Nome Completo"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)},disabled:A,required:!0}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Estado"),r.a.createElement("div",{className:"area--input"},r.a.createElement("select",{value:s,onChange:function(e){return u(e.target.value)},required:!0},r.a.createElement("option",null),F.map((function(e,n){return r.a.createElement("option",{key:n,value:e._id},e.name)}))))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"E-mail"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"email",value:p,onChange:function(e){return b(e.target.value)},disabled:A,required:!0}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Senha"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"password",value:x,onChange:function(e){return w(e.target.value)},disabled:A,required:!0}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Confirmar Senha"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"password",checked:y,onChange:function(e){return N(e.target.value)},disabled:A}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"}),r.a.createElement("div",{className:"area--input"},r.a.createElement("button",{disabled:A},"Fazer Login"))))))},ie=a(37);function oe(){var e=Object(u.a)(["\n    font-size: 13px;\n    margin-top: 20px;\n\n    a {\n        display: inline-block;\n        margin: 0 5px;\n        text-decoration: underline;\n        color: black;\n    }\n"]);return oe=function(){return e},e}function se(){var e=Object(u.a)(["\n    h2 {\n        font-size: 20px;\n    }\n\n    .relatedProducts {\n        display: flex;\n        flex-wrap: wrap;\n\n        .ad-item {\n            width: 25%;\n        }\n    }\n"]);return se=function(){return e},e}function ue(){var e=Object(u.a)(["\n    display: flex;\n    margin-top: 20px;\n\n    .box {\n        background-color: #fff;\n        border-radius: 5px;\n        box-shadow: 0 0 4px #999;\n        margin-bottom: 20px;\n\n        &--padding {\n            padding: 10px;\n        }\n    }\n\n    .leftSide {\n        flex: 1;\n        margin-right: 20px;\n\n        .box {\n            display: flex;\n        }\n\n        .adImage {\n            width: 320px;\n            height: 320px;\n            margin-right: 20px;\n\n            .each-slide img {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                background-size: cover;\n                height: 320px;\n            }\n        }\n\n        .adInfo {\n            flex: 1;\n\n            .adName {\n                margin-bottom: 20px;\n\n                h2 {\n                    margin-bottom: 0;\n                }\n\n                small {\n                    color: #999;\n                }\n            }\n\n            .adDescription {\n                small {\n                    color: #999;\n                }\n            }\n        }\n    }\n\n    .rightSide {\n        width: 250px;\n\n        .adPrice span {\n            color: #0000FF;\n            display: block;\n            font-size: 27px;\n            font-weight: bold;\n        }\n\n        .contactSellerLink {\n            background-color: #0000FF;\n            color: white;\n            height: 30px;\n            border-radius: 5px;\n            box-shadow: 0 0 4px #999;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            text-decoration: none;\n            margin-bottom: 20px;\n        }\n\n        .adCreatedBy {\n            small {\n                display: block;\n                color: #999;\n                margin-top: 5px;\n            }\n        }\n    }\n"]);return ue=function(){return e},e}function de(){var e=Object(u.a)(["\n    background-color: #DDD;\n    height: ","px;\n"]);return de=function(){return e},e}var me=d.a.div(de(),(function(e){return e.height||20})),pe=d.a.div(ue()),be=d.a.div(se()),fe=d.a.div(oe()),ge=function(){var e=U(),n=Object(D.i)().id,a=Object(t.useState)(!0),c=Object(L.a)(a,2),l=c[0],i=c[1],o=Object(t.useState)({}),u=Object(L.a)(o,2),d=u[0],m=u[1];Object(t.useEffect)((function(){!function(n){var a;P.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.awrap(e.getAdInfo(n,!0));case 2:a=t.sent,m(a),i(!1);case 5:case"end":return t.stop()}}))}(n)}),[]);return r.a.createElement(E,null,d.category&&r.a.createElement(fe,null,"Voc\xea est\xe1 aqui:",r.a.createElement(s.b,{to:"./"},"Home"),"/",r.a.createElement(s.b,{to:"/ads?state=".concat(d.stateName)},d.stateName),"/",r.a.createElement(s.b,{to:"/ads?state=".concat(d.stateName,"&cat=").concat(d.category.slug)},d.category.name),"/ ",d.title),r.a.createElement(pe,null,r.a.createElement("div",{className:"leftSide"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"adImage"},l&&r.a.createElement(me,{height:300}),d.images&&r.a.createElement(ie.Slide,null,d.images.map((function(e,n){return r.a.createElement("div",{className:"each-slide",key:n},r.a.createElement("img",{src:e,alt:""}))})))),r.a.createElement("div",{className:"adInfo"},r.a.createElement("div",{className:"adName"},l&&r.a.createElement(me,{height:20}),d.title&&r.a.createElement("h2",null,d.title),d.dateCreated&&r.a.createElement("small",null,"Data de publica\xe7\xe3o: ",function(e){var n=new Date(e),a=n.getDate(),t=n.getMonth(),r=n.getFullYear();return"".concat(a," de ").concat(["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"][t]," de ").concat(r)}(d.dateCreated))),r.a.createElement("div",{className:"adDescription"},l&&r.a.createElement(me,{height:100}),d.description,r.a.createElement("hr",null),d.views&&r.a.createElement("small",null,"An\xfancio visualizado ",d.views," vezes."))))),r.a.createElement("div",{className:"rightSide"},r.a.createElement("div",{className:"box box--padding"},l&&r.a.createElement(me,{height:20}),d.priceNegotiable&&"Pre\xe7o Negoci\xe1vel",!d.priceNegotiable&&d.price&&r.a.createElement("div",{className:"adPrice"},"Pre\xe7o: ",r.a.createElement("span",null,"R$ ",d.price))),l&&r.a.createElement(me,{height:50}),d.userInfo&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"mailto:".concat(d.userInfo.email),className:"contactSellerLink",target:"_blank"},"Falar com o Vendedor"),r.a.createElement("div",{className:"adCreatedBy box box--padding"},l&&r.a.createElement(me,{height:50}),"Criado por: ",r.a.createElement("strong",null,d.userInfo.name),r.a.createElement("small",null,"E-mail: ",d.userInfo.email),r.a.createElement("small",null,"Estado: ",d.stateName))))),r.a.createElement(be,null,d.others&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Outras ofertas do vendedor"),r.a.createElement("div",{className:"relatedProducts"},d.others.map((function(e,n){return r.a.createElement(K,{key:n,data:e})}))))))};function xe(){var e=Object(u.a)(["\n    display: flex;\n    margin-top: 20px;\n\n    .leftSide {\n        width: 250px;\n        margin-right: 10px;\n        padding-right: 20px;\n\n        .filterName {\n            font-size: 15px;\n            margin: 10px 0;\n        }\n\n        input,\n        select {\n            width: 100%;\n            height: 40px;\n            background: white;\n            border: 2px solid #9BB83C;\n            border-radius: 5px;\n            outline: 0;\n            font-size: 15px;\n            color: black;\n            padding: 5px;\n        }\n\n        ul, li {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n\n        .categoryItem {\n            display: flex;\n            align-items: center;\n            padding: 10px;\n            border-radius: 5px;\n            color: black;\n            cursor: pointer;\n            transition: 0.2s all;\n\n            &:hover,\n            &.active {\n                background-color: #9BB83C;\n                color: white;\n            }\n\n            img {\n                width: 25px;\n                height: 25px;\n                margin-right: 5px;\n            }\n\n            span {\n                font-size: 15px;\n            }\n        }\n    }\n\n    .rightSide {\n        flex: 1;\n\n        h2 {\n            margin-top: 0;\n            font-size: 18px;\n        }\n\n        .listWarning {\n            padding: 30px;\n            text-align: center;\n        }\n\n        .list {\n            display: flex;\n            flex-wrap: wrap;\n            \n            .ad-item {\n                width: 33%;\n            }\n        }\n\n        .pagination {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 20px;\n\n            .paginationItem {\n                width: 30px;\n                height: 30px;\n                border: 1px solid black;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                font-size: 14px;\n                margin-right: 5px;\n                cursor: pointer;\n\n                &:hover {\n                    border: 1px solid #999;\n                    background: #DDD;\n                }\n\n                &.active {\n                    background: #CCC;\n                }\n            }\n        }\n    }\n"]);return xe=function(){return e},e}var Ee,he=d.a.div(xe()),ve=function(){var e=U(),n=Object(D.g)(),a=new URLSearchParams(Object(D.h)().search),c=Object(t.useState)(null!=a.get("q")?a.get("q"):""),l=Object(L.a)(c,2),i=l[0],o=l[1],s=Object(t.useState)(null!=a.get("cat")?a.get("cat"):""),u=Object(L.a)(s,2),d=u[0],m=u[1],p=Object(t.useState)(null!=a.get("state")?a.get("state"):""),b=Object(L.a)(p,2),f=b[0],g=b[1],x=Object(t.useState)(0),h=Object(L.a)(x,2),v=h[0],w=h[1],j=Object(t.useState)([]),O=Object(L.a)(j,2),y=O[0],N=O[1],k=Object(t.useState)([]),S=Object(L.a)(k,2),C=S[0],F=S[1],z=Object(t.useState)([]),q=Object(L.a)(z,2),A=q[0],I=q[1],B=Object(t.useState)(0),T=Object(L.a)(B,2),R=T[0],_=T[1],M=Object(t.useState)(1),V=Object(L.a)(M,2),$=V[0],J=V[1],W=Object(t.useState)(1),G=Object(L.a)(W,2),H=G[0],X=G[1],Y=Object(t.useState)(!0),Q=Object(L.a)(Y,2),Z=Q[0],ee=Q[1],ne=function(){var n;return P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(e.getAds({sort:"desc",limit:9,q:i,cat:d,state:f}));case 2:n=a.sent,I(n.ads),w(n.total),X(1),ee(!1);case 7:case"end":return a.stop()}}))};Object(t.useEffect)((function(){A.length>0?_(Math.ceil(v/A.length)):_(0)}),[v]),Object(t.useEffect)((function(){var e=[];i&&e.push("q=".concat(i)),d&&e.push("cat=".concat(d)),f&&e.push("state=".concat(f)),n.replace({search:"?".concat(e.join("&"))}),Ee&&clearTimeout(Ee),J(1),ee(!0),Ee=setTimeout(ne,1500),X(.3)}),[i,d,f]),Object(t.useEffect)((function(){!function(){var n;P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(e.getStates());case 2:n=a.sent,N(n);case 4:case"end":return a.stop()}}))}()}),[]),Object(t.useEffect)((function(){!function(){var n;P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(e.getCategories());case 2:n=a.sent,F(n);case 4:case"end":return a.stop()}}))}()}),[]);for(var ae=[],te=1;te<=R;te++)ae.push(te);return r.a.createElement(E,null,r.a.createElement(he,null,r.a.createElement("div",{className:"leftSide"},r.a.createElement("form",{method:"GET"},r.a.createElement("input",{type:"text",name:"q",placeholder:"O que voc\xea procura?",value:i,onChange:function(e){return o(e.target.value)}}),r.a.createElement("div",{className:"filterName"},"Estado:"),r.a.createElement("select",{name:"state",value:f,onChange:function(e){return g(e.target.value)}},y.map((function(e,n){return r.a.createElement("option",{key:n,value:e.name},e.name)}))),r.a.createElement("div",{className:"filterName"},"Categoria:"),r.a.createElement("ul",null,C.map((function(e,n){return r.a.createElement("li",{key:n,value:e.name,className:d==e.slug?"categoryItem active":"categoryItem",onClick:function(){return m(e.slug)}},r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("span",null,e.name))}))))),r.a.createElement("div",{className:"rightSide"},r.a.createElement("h2",null,"Resultados da busca"),Z&&r.a.createElement("div",{className:"listWarning"},"Carregando..."),!Z&&0===A.length&&r.a.createElement("div",{className:"listWarning"},"Nenhum resultado encontrado!"),r.a.createElement("div",{className:"list",style:{opacity:H}},A.map((function(e,n){return r.a.createElement(K,{key:n,data:e})}))),r.a.createElement("div",{className:"pagination"},ae.map((function(e,n){return r.a.createElement("div",{onClick:function(){return J(e)},className:e===$?"paginationItem active":"paginationItem",key:n},e)}))))))};function we(){var e=Object(u.a)(["\n    form {\n        background-color: #fff;\n        border-radius: 3px;\n        padding: 10px;\n        box-shadow: 0px 0px 3px #999;\n\n        .area {\n            display: flex;\n            align-items: center;\n            padding: 10px;\n            max-width: 500px;\n\n            .area--title {\n                width: 200px;\n                text-align: right;\n                padding-right: 20px;\n                font-weight: bold;\n                font-size: 14px;\n            }\n\n            .area--input {\n                flex: 1;\n\n                input:not([type=checkbox]),\n                select,\n                textarea {\n                    width: 100%;\n                    font-size: 14px;\n                    padding: 5px;\n                    border: 1px solid #DDD;\n                    border-radius: 3px;\n                    outline: 0;\n                    transition: all ease .4s;\n                    background: transparent;\n\n                    &:focus {\n                        border: 1px solid #333;\n                        color: #333;\n                    }\n                }\n\n                textarea {\n                    height: 150px;\n                    resize: none;\n                }\n\n                button {\n                    background-color: #0089FF;\n                    border: 0;\n                    outline: 0;\n                    padding: 5px 10px;\n                    border-radius: 4px;\n                    color: #FFF;\n                    font-size: 15px;\n                    cursor: pointer;\n\n                    &:hover {\n                        background-color: #006FCE;\n                    }\n                }\n            }\n        }\n    }\n"]);return we=function(){return e},e}var je=d.a.div(we()),Oe=a(38),ye=a.n(Oe),Ne=a(39),ke=a.n(Ne),Se=function(){var e=U(),n=Object(t.useRef)(),a=Object(D.g)(),c=Object(t.useState)([]),l=Object(L.a)(c,2),i=l[0],o=l[1],s=Object(t.useState)(""),u=Object(L.a)(s,2),d=u[0],m=u[1],p=Object(t.useState)(""),b=Object(L.a)(p,2),f=b[0],g=b[1],x=Object(t.useState)(""),w=Object(L.a)(x,2),j=w[0],O=w[1],y=Object(t.useState)(!1),N=Object(L.a)(y,2),k=N[0],S=N[1],C=Object(t.useState)(""),F=Object(L.a)(C,2),z=F[0],q=F[1],A=Object(t.useState)(!1),I=Object(L.a)(A,2),B=I[0],T=I[1],R=Object(t.useState)(""),_=Object(L.a)(R,2),M=_[0],V=_[1];Object(t.useEffect)((function(){!function(){var n;P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.awrap(e.getCategories());case 2:n=a.sent,o(n);case 4:case"end":return a.stop()}}))}()}),[]);var $=ke()({prefix:"R$ ",includeThounsandsSeparator:!0,thousandsSeparatorSymbol:".",allowDecimal:!0,decimalSymbol:","});return r.a.createElement(E,null,r.a.createElement(h,null,"Postar um an\xfancio"),r.a.createElement(je,null,M&&r.a.createElement(v,null,M),r.a.createElement("form",{onSubmit:function(t){var r,c,l,i,o;return P.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t.preventDefault(),T(!0),V(""),r=[],d.trim()||r.push("Digite o t\xedtulo do an\xfancio."),f||r.push("Selecione uma categoria."),0!==r.length){s.next=26;break}if((c=new FormData).append("title",d),c.append("cat",f),c.append("price",j),c.append("priceneg",k),c.append("desc",z),(l=n.current.files).length>0)for(i=0;i<l.length;i++)c.append("img",l[i]);return s.next=17,P.a.awrap(e.addAd(c));case 17:if((o=s.sent).error){s.next=23;break}return a.push("/ad/".concat(o.id)),s.abrupt("return");case 23:V(o.error);case 24:s.next=27;break;case 26:V(r.join("\n"));case 27:T(!1);case 28:case"end":return s.stop()}}))}},r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"T\xedtulo"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"text",value:d,onChange:function(e){return m(e.target.value)},disabled:B,required:!0}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Categoria"),r.a.createElement("div",{className:"area--input"},r.a.createElement("select",{onChange:function(e){return g(e.target.value)},disabled:B,required:!0},r.a.createElement("option",null,"Selecione uma categoria"),i&&i.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Pre\xe7o"),r.a.createElement("div",{className:"area--input"},r.a.createElement(ye.a,{mask:$,placeholder:"R$ ",disabled:B||k,value:j,onChange:function(e){return O(e.target.value)}}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Pre\xe7o negoci\xe1vel?"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"checkbox",checked:k,onChange:function(){return S(!k)},disabled:B}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Descri\xe7\xe3o"),r.a.createElement("div",{className:"area--input"},r.a.createElement("textarea",{value:z,disabled:B,onChange:function(e){return q(e.target.value)}}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"},"Imagens"),r.a.createElement("div",{className:"area--input"},r.a.createElement("input",{type:"file",disabled:B,ref:n,multiple:!0}))),r.a.createElement("label",{className:"area"},r.a.createElement("div",{className:"area--title"}),r.a.createElement("div",{className:"area--input"},r.a.createElement("button",{disabled:B},"Enviar novo an\xfancio"))))))},Ce=function(){return r.a.createElement(D.d,null,r.a.createElement(A,{exact:!0,path:"./"},r.a.createElement(Q,null)),r.a.createElement(A,{exact:!0,path:"./sobre"},r.a.createElement(Z,null)),r.a.createElement(A,{exact:!0,path:"./signin"},r.a.createElement(te,null)),r.a.createElement(A,{exact:!0,path:"./signup"},r.a.createElement(le,null)),r.a.createElement(A,{exact:!0,path:"./ad/:id"},r.a.createElement(ge,null)),r.a.createElement(A,{exact:!0,path:"./ads"},r.a.createElement(ve,null)),r.a.createElement(A,{private:!0,exact:!0,path:"./post-an-ad"},r.a.createElement(Se,null)),r.a.createElement(A,null,r.a.createElement(ee,null)))},Fe=(a(63),Object(o.b)((function(e){return{user:e.user}}),(function(e){return{}}))((function(e){return r.a.createElement(s.a,null,r.a.createElement(x,null,r.a.createElement(S,null),r.a.createElement(Ce,null),r.a.createElement(z,null)))}))),ze=a(40),De={email:""},qe=Object(i.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,n=arguments.length>1?arguments[1]:void 0;return"SET_EMAIL"===n.type?Object(ze.a)({},e,{email:n.payload.email}):e}}),Ae=Object(i.c)(qe);l.a.render(r.a.createElement(o.a,{store:Ae},r.a.createElement(Fe,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.687d74d6.chunk.js.map