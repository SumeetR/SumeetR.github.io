(this.webpackJsonpsumcho=this.webpackJsonpsumcho||[]).push([[0],{33:function(a,e,t){a.exports=t(43)},38:function(a,e,t){},39:function(a,e,t){},43:function(a,e,t){"use strict";t.r(e);var o=t(0),s=t.n(o),c=t(14),n=t.n(c),i=(t(38),t(29)),m=t(17),r=t(32),l=t(31),u=(t(39),t(70)),g=t(78),h=t(79),p=t(71),d=t(72),w=t(75),_=t(30),f=t(68),j=Object(_.a)({palette:{primary:{main:"#ffffff"}}}),v=function(a){var e=a.selected,t=a.tag,o=a.onClick,c=e===t,n=c?"contained":void 0,i=c?"":t;return s.a.createElement(f.a,{theme:j},s.a.createElement(w.a,{size:"small",color:"primary",variant:n,onClick:function(){return o(i)},disableElevation:!0}," #",t," "))},b=Object(u.a)((function(a){return Object(g.a)({root:{flexGrow:1},appBar:{color:a.palette.common.white,backgroundColor:a.palette.common.black},title:{alignItems:"right",flexGrow:1}})}));function E(a){var e=a.setTag,t=a.tag,o=b();return s.a.createElement("div",{className:o.root},s.a.createElement(h.a,{className:o.appBar,color:"inherit",position:"static",variant:"elevation"},s.a.createElement(p.a,null,s.a.createElement(d.a,{variant:"h6",className:o.title},"sumcho.com"),s.a.createElement(d.a,null,t&&s.a.createElement(v,{tag:t,selected:t,onClick:e})))))}var z=t(76),C=t(73),k=t(77),y=t(74),L=["https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/16_PeritoMoreno_Argentina_Latinoamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/15_Chiloe_Chile_Latinoamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/14_Manhattan_Newyork_Northamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/13_Iguazu_Argentina_Latinoamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/12_LagoAtitlan_Guatemala_Latinoamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/11_Mojave_California_Northamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/10_Comuna13_Colombia_Latinoamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/09_ElMedano_Canarias_Europe.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/08_BocaChica_RD_Latinoamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/07_Tenerife_Canarias_Europe.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/06_SenhorDaPedra_Portugal_Europe.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/05_AbuDhabi_UAE_MiddleEast.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/04_Tulum_Mexico_Latinoamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/03_MachuPicchu_Peru_Latinoamerica.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/02_Bar'am_Palestine_MiddleEast.jpeg","https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/01_ValleDelCocora_Colombia_Latinoamerica.jpeg"],O=function(a){var e=a.split("https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/")[1].split(".jp")[0].split("_");return{id:e[0],img:a,place:e[1],country:e[2],region:e[3],tags:[e[1],e[2],e[3]]}},N=Object(u.a)((function(a){return Object(g.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"strech",overflow:"hidden",backgroundColor:a.palette.background.paper},gridList:{transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},tile:{height:"200px"},icon:{color:"white"}})}));var M=Object(z.a)()((function(a){var e=N(),t=a.width,o=a.setTag,c=a.tag,n=function(a){var e=L.map(O);return a?e.filter((function(e){return e.tags.includes(a)})):e}(c);return s.a.createElement("div",{className:e.root},s.a.createElement(C.a,{cols:12,spacing:1,className:e.gridList},n.map((function(a,n){var i=function(a,e){if(Object(z.b)("sm",a))return{cols:12,rows:2};switch(e%10){case 1:case 2:case 8:case 9:return{cols:6,rows:3};case 4:case 5:case 6:return{cols:4,rows:2};default:return{cols:12,rows:4}}}(t,n),m=i.cols,r=i.rows;return s.a.createElement(k.a,{className:e.tile,key:"".concat(n,"_").concat(a.img),cols:m,rows:r},s.a.createElement("img",{src:a.img,alt:"".concat(a.id,"_").concat(a.tags.join("_"))}),s.a.createElement(y.a,{title:a.id,subtitle:a.tags.map((function(a,e){return s.a.createElement(v,{key:"".concat(c,"_").concat(e),tag:a,selected:c,onClick:o})})),titlePosition:"top",className:e.titleBar}))}))))})),T=function(a){Object(r.a)(t,a);var e=Object(l.a)(t);function t(a){var o;return Object(i.a)(this,t),(o=e.call(this,a)).setTag=function(a){o.setState({tag:a})},o.state={tag:void 0},o}return Object(m.a)(t,[{key:"render",value:function(){var a=this.state.tag;return s.a.createElement("div",null,s.a.createElement(E,{tag:a,setTag:this.setTag}),s.a.createElement(M,{tag:a,setTag:this.setTag}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.137d5f42.chunk.js.map