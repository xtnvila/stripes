(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.86d618b5.svg"},function(e,t,n){e.exports=n.p+"static/media/phone.e908706c.svg"},function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(4),r=n.n(c),s=(n(12),n(5)),o=n.n(s),u=n(1),i=n(2),m=[{page:"products",links:[{label:"payment",icon:l.a.createElement(u.d,null),url:"/products"},{label:"terminal",icon:l.a.createElement(u.d,null),url:"/products"},{label:"connect",icon:l.a.createElement(u.d,null),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:l.a.createElement(u.b,null),url:"/products"},{label:"libraries",icon:l.a.createElement(u.b,null),url:"/products"},{label:"help",icon:l.a.createElement(u.b,null),url:"/products"},{label:"billing",icon:l.a.createElement(u.b,null),url:"/products"}]},{page:"company",links:[{label:"about",icon:l.a.createElement(u.c,null),url:"/products"},{label:"customers",icon:l.a.createElement(u.c,null),url:"/products"}]}],b=l.a.createContext(),p=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),p=u[0],E=u[1],d=Object(a.useState)({}),f=Object(i.a)(d,2),v=f[0],g=f[1],h=Object(a.useState)({page:"",links:[]}),O=Object(i.a)(h,2),S=O[0],k=O[1];return l.a.createElement(b.Provider,{value:{isSubmenuOpen:p,isSidebarOpen:r,openSubmenu:function(e,t){var n=m.find((function(t){return t.page===e}));k(n),g(t),E(!0)},openSidebar:function(){s(!0)},closeSubmenu:function(){E(!1)},closeSidebar:function(){s(!1)},location:v,page:S}},t)},E=function(){return Object(a.useContext)(b)},d=function(){var e=E(),t=e.openSidebar,n=e.openSubmenu,a=e.closeSubmenu,c=function(e){var t=e.target.textContent,a=e.target.getBoundingClientRect(),l=(a.left+a.right)/2,c=a.bottom-3;n(t,{center:l,bottom:c})};return l.a.createElement("nav",{className:"nav",onMouseOver:function(e){e.target.classList.contains("link-btn")||a()}},l.a.createElement("div",{className:"nav-center"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("img",{src:o.a,className:"nav-logo",alt:"stripe"}),l.a.createElement("button",{className:"btn toggle-btn",onClick:t},l.a.createElement(u.a,null))),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement("button",{class:"link-btn",onMouseOver:c},"products")),l.a.createElement("li",null,l.a.createElement("button",{class:"link-btn",onMouseOver:c},"developers")),l.a.createElement("li",null,l.a.createElement("button",{class:"link-btn",onMouseOver:c},"company"))),l.a.createElement("button",{className:"btn signin-btn"},"sign in")))},f=n(6),v=n.n(f),g=function(){var e=E().closeSubmenu;return l.a.createElement("section",{className:"hero",onMouseOver:e},l.a.createElement("div",{className:"hero-center"},l.a.createElement("article",{className:"hero-info"},l.a.createElement("h1",null,"Payments infrastructure for the internet"),l.a.createElement("p",null,"Millions of companies of all sizes-from startups to Frotune 500s-use Stripe' software and APIs to accept payments, send payouts, and manage their business online."),l.a.createElement("button",{className:"btn"},"Start now")),l.a.createElement("article",{className:"hero-images"},l.a.createElement("img",{src:v.a,className:"phone-img",alt:"phone"}))))},h=function(){var e=E(),t=e.isSidebarOpen,n=e.closeSidebar;return l.a.createElement("aside",{className:"".concat(t?"sidebar-wrapper show":"sidebar-wrapper")},l.a.createElement("div",{className:"sidebar"},l.a.createElement("button",{className:"close-btn",onClick:n},l.a.createElement(u.e,null)),l.a.createElement("div",{className:"sidebar-links"},m.map((function(e,t){var n=e.links,a=e.page;return l.a.createElement("article",{key:t},l.a.createElement("h4",null,a),l.a.createElement("div",{className:"sidebar-sublinks"},n.map((function(e,t){var n=e.url,a=e.icon,c=e.label;return l.a.createElement("a",{key:t,href:n},a,c)}))))})))))},O=function(){var e=E(),t=e.isSubmenuOpen,n=e.location,c=e.page,r=c.page,s=c.links,o=Object(a.useRef)(null),u=Object(a.useState)("col-2"),m=Object(i.a)(u,2),b=m[0],p=m[1];return Object(a.useEffect)((function(){p("col-2");var e=o.current,t=n.center,a=n.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(a,"px"),3===s.length&&p("col-3"),s.length>3&&p("col-4")}),[n,s]),l.a.createElement("aside",{className:"".concat(t?"submenu show":"submenu"),ref:o},l.a.createElement("h4",null,r),l.a.createElement("div",{className:"submenu-center ".concat(b)},s.map((function(e,t){var n=e.label,a=e.icon,c=e.url;return l.a.createElement("a",{key:t,href:c},a,n)}))))};var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(g,null),l.a.createElement(O,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null,l.a.createElement(S,null))),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.86696989.chunk.js.map