"use strict";(self.webpackChunkcrud_redux_router=self.webpackChunkcrud_redux_router||[]).push([[498,759],{2759:function(e,t,n){n.r(t);var r=n(2791),u=n(9434),a=n(7689),c=n(719);t.default=function(){var e=(0,u.I0)(),t=(0,a.UO)().id,n=(0,u.v9)((function(e){return e.notesSlice})).record;return(0,r.useEffect)((function(){e((0,c.getNote)(t))}),[e,t]),n}},498:function(e,t,n){n.r(t);var r=n(4165),u=n(1413),a=n(5861),c=n(885),o=n(2791),s=n(3855),l=n(3402),i=n(9434),f=n(7689),d=n(783),p=n(2266),v=n(2759),x=n(719),h=n(184);t.default=function(){var e=(0,f.s0)(),t=(0,v.default)(),n=(0,i.v9)((function(e){return e.notesSlice})).loading,Z=(0,o.useState)(""),m=(0,c.Z)(Z,2),b=m[0],j=m[1],g=(0,o.useState)(""),E=(0,c.Z)(g,2),k=E[0],C=E[1],S=(0,o.useState)(!0),w=(0,c.Z)(S,2),y=w[0],I=w[1],N=(0,i.I0)();(0,o.useEffect)((function(){if(t){var e=t.title,n=t.desc;j(e||""),C(n||"")}}),[t]),(0,o.useEffect)((function(){return function(){return N((0,x.cleanRecord)())}}),[N]);var _=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,I(!1),n.next=5,N((0,x.updateNote)((0,u.Z)((0,u.Z)({},t),{},{title:b,desc:k}))).unwrap();case 5:e("/"),l.Am.success("Has been edit note successfully"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),l.Am.error("Error please try again!");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsx)(p.default,{stop:y,children:(0,h.jsxs)(s.Z,{onSubmit:_,children:[(0,h.jsxs)(s.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,h.jsx)(s.Z.Label,{children:"Title note"}),(0,h.jsx)(s.Z.Control,{value:b,onChange:function(e){j(e.target.value)},type:"text",placeholder:"Title note"})]}),(0,h.jsxs)(s.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,h.jsx)(s.Z.Label,{children:"Description note"}),(0,h.jsx)(s.Z.Control,{value:k,onChange:function(e){C(e.target.value)},type:"text",as:"textarea",placeholder:"Write note"})]}),(0,h.jsx)(d.default,{loading:n,title:"Edit note",disabled:!(b&&k)})]})})}}}]);
//# sourceMappingURL=498.4defa7ca.chunk.js.map