"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{687:function(t,e,n){n.d(e,{Bt:function(){return h},FE:function(){return f},Y5:function(){return p},vw:function(){return s},y:function(){return l}});var r=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="e1fe80951c2b97a426dc0cdfe1eff4f3",i="language=en-US",s=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(e,"&").concat(i,"&page=").concat(n,"&api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?").concat(i,"&api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?").concat(i,"&api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?").concat(i,"&page=1&api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},906:function(t,e,n){n.d(e,{e:function(){return u}});var r=n(689),a=n(87),c=n(184),u=function(t){var e=t.movies,n=t.link,u=(0,r.TH)();return(0,c.jsx)("ul",{className:"movies-list",children:e.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"".concat(n).concat(t.id),state:{from:u},children:t.title})},t.id)}))})}},446:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(433),a=n(861),c=n(439),u=n(757),o=n.n(u),i=n(791),s=n(87),f=n(687),p=n(184),l=function(t){var e=t.onSubmit;return(0,p.jsxs)("form",{className:"searchForm",children:[(0,p.jsx)("input",{className:"searchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,p.jsx)("button",{type:"submit",className:"searchForm-button",onClick:function(t){e(t.target.previousElementSibling.value),t.preventDefault()},children:"Search"})]})},h=n(906),v=function(t){var e=t.nextPage;return(0,p.jsx)("button",{onClick:e,className:"button",type:"button",children:"Load More"})},m=n(767),d=n(686),x=n.n(d);function g(){var t,e=(0,i.useState)([]),n=(0,c.Z)(e,2),u=n[0],d=n[1],g=(0,i.useState)(!1),k=(0,c.Z)(g,2),w=k[0],y=k[1],b=(0,i.useState)(1),Z=(0,c.Z)(b,2),j=Z[0],S=Z[1],_=(0,i.useState)(),F=(0,c.Z)(_,2),N=F[0],C=F[1],E=(0,i.useState)(null),q=(0,c.Z)(E,2),U=q[0],D=q[1],L=(0,s.lr)(""),M=(0,c.Z)(L,2),O=M[0],P=M[1],B=null!==(t=O.get("query"))&&void 0!==t?t:"";(0,i.useEffect)((function(){function t(){return(t=(0,a.Z)(o().mark((function t(){var e,n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===B){t.next=19;break}return t.prev=1,y(!0),t.next=5,(0,f.FE)(B,j);case 5:e=t.sent,n=e.results,a=e.total_pages,0===n.length&&x().Notify.failure('Oops, no movie with the title "'.concat(B,'" was found.')),C(j<Math.ceil(a/20)),d((function(t){return(0,r.Z)(t.concat(n))})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),x().Notify.failure("Oops, something went wrong, try reloading the page");case 16:return t.prev=16,y(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[B,j,U]);return(0,p.jsxs)("div",{children:[(0,p.jsx)(l,{onSubmit:function(t){P({query:t}),S(1),d([]),D(Date.now())}}),u.length>0&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(h.e,{movies:u,link:""})}),w&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(m.a,{})}),N&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(v,{nextPage:function(){S((function(t){return t+1}))}})})]})}}}]);
//# sourceMappingURL=446.2f1d730a.chunk.js.map