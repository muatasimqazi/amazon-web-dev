(this["webpackJsonpamazon-web-dev"]=this["webpackJsonpamazon-web-dev"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),c=(n(11),n(12),n(4)),l=n(5),d=n(1);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={container:{margin:"20px 100px"},label:{display:"block",marginBottom:20},select:{height:40,width:300,border:"1px solid #ced4da",background:"#fff",padding:"8px 16px",verticalAlign:"middle",marginBottom:20,fontSize:15},button:{color:"#fff",fontWeight:400,border:0,borderRadius:4,fontSize:18,cursor:"pointer"},btnAdd:{display:"block",background:"#0f7397",padding:"8px 16px"},itemsContainer:{width:300,padding:0,border:"1px solid #ced4da",borderRadius:5},item:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 12px",borderBottom:"1px solid #ced4da"},btnDelete:{background:"#bd0505",padding:"7px 14px"},btnDisabled:{cursor:"default",opacity:.5}},p=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)([]),u=Object(d.a)(c,2),p=u[0],m=u[1],f=Object(r.useState)(!0),g=Object(d.a)(f,2),y=g[0],O=g[1],v=e.options;return o.a.createElement("div",{style:b.container},o.a.createElement("label",{style:b.label,htmlFor:"options"},"List of Options"),o.a.createElement("select",{style:b.select,name:"options",onChange:function(e){return function(e){var t=e.target.value;t?(O(!1),i(t)):O(!0)}(e)}},o.a.createElement("option",null),v.map((function(e,t){return o.a.createElement("option",{key:t,value:e},e)}))),o.a.createElement("button",{style:y?s({},b.button,{},b.btnAdd,{},b.btnDisabled):s({},b.button,{},b.btnAdd),onClick:function(){return e=a,void m([].concat(Object(l.a)(p),[{id:p.length,option:e}]));var e},disabled:y},"Add to list"),o.a.createElement("ul",{style:b.itemsContainer,hidden:0===p.length},p.map((function(e){return o.a.createElement("li",{key:e.id,style:b.item},e.option,o.a.createElement("button",{style:s({},b.button,{},b.btnDelete),onClick:function(){return t=e.id,void m(p.filter((function(e){return e.id!==t})));var t}},"Delete"))}))))},m=["Item One","Item Two","Item Three","Item Four","Item Five"],f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{options:m}))};i.a.render(o.a.createElement(f,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.f3bfbdbc.chunk.js.map