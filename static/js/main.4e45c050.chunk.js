(this["webpackJsonpfilm-search-app"]=this["webpackJsonpfilm-search-app"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(4),i=c.n(s),a=(c(9),c(2)),j=(c(10),c(0)),l=function(e){var t=e.films;return Object(j.jsxs)(j.Fragment,{children:[t.length>0&&Object(j.jsx)("h2",{children:"Results: "}),Object(j.jsx)("div",{className:"list",children:t.map((function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:e.Poster,alt:"film poster"}),Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("h2",{children:e.Title}),Object(j.jsxs)("p",{children:["Year: ",e.Year]}),Object(j.jsxs)("p",{children:["Type: ",e.Type]})]})]},e.imdbID)}))})]})},h=function(e){var t=e.handelSearch,c=Object(n.useState)(""),r=Object(a.a)(c,2),s=r[0],i=r[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{placeholder:"Enter film's title",value:s,onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){return t(s)},children:"Search"})]})},o=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(a.a)(s,2),o=i[0],u=i[1];return Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(h,{handelSearch:function(e){return fetch("https://www.omdbapi.com/?apikey=1d60c136&s=".concat(e)).then((function(e){return e.json()})).then((function(e){e.Search?r(e.Search):(u(e.Error),r([]))})).catch((function(e){console.log(e.message)}))}}),c.length>0?Object(j.jsx)(l,{films:c}):Object(j.jsx)("div",{className:"error",children:o})]})};c(12);var u=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsx)("h1",{children:"Film Search App"})}),Object(j.jsx)(o,{})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.4e45c050.chunk.js.map