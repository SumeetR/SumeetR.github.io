(this.webpackJsonpsumcho=this.webpackJsonpsumcho||[]).push([[0],{23:function(e,a,t){e.exports=t(33)},28:function(e,a,t){},29:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var o=t(1),c=t.n(o),s=t(20),n=t.n(s),r=(t(28),t(29),t(53)),i=t(62),m=t(63),l=t(56),u=t(57),g=Object(r.a)((function(e){return Object(i.a)({root:{flexGrow:1},appBar:{color:e.palette.common.white,backgroundColor:e.palette.common.black},title:{alignItems:"right",flexGrow:1}})}));function p(){var e=g();return c.a.createElement("div",{className:e.root},c.a.createElement(m.a,{className:e.appBar,color:"inherit",position:"static",variant:"elevation"},c.a.createElement(l.a,null,c.a.createElement(u.a,{variant:"h6",className:e.title},"sumcho.com"))))}var h=t(60),d=t(58),w=t(61),_=t(59),f=[{img:"https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/07_Canarias_Spain_Europe.jpeg"},{img:"https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/06_SenhorDaPedra_Portugal_Europe.jpeg"},{img:"https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/05_AbuDhabi_UAE_MiddleEast.jpeg"},{img:"https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/04_Tulum_Mexico_Latinoamerica.jpeg"},{img:"https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/03_MachuPicchu_Peru_Latinoamerica.jpeg"},{img:"https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/02_Bar'am_Palestine_MiddleEast.jpeg"},{img:"https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/01_ValleDelCocora_Colombia_Latinoamerica.jpeg"}],b=Object(r.a)((function(e){return Object(i.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"strech",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},tile:{height:"200px"},icon:{color:"white"}})}));var E=Object(h.a)()((function(e){var a=b(),t=e.width;return c.a.createElement("div",{className:a.root},c.a.createElement(d.a,{cellHeight:500,cols:12,spacing:1,className:a.gridList},f.map((function(e,o){var s=function(e,a){if(Object(h.b)("sm",e))return{cols:12,rows:2};switch(a%10){case 1:case 2:case 8:case 9:return{cols:6,rows:1};case 4:case 5:case 6:return{cols:4,rows:1};default:return{cols:12,rows:2}}}(t,o),n=s.cols,r=s.rows,i=function(e){var a=e.split("https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/")[1].split(".jpeg")[0].split("_");return{id:a[0],place:a[1],country:a[2],region:a[3],tags:[a[1],a[2],a[3]]}}(e.img);return console.log(o,n,r),c.a.createElement(w.a,{className:a.tile,key:"".concat(o,"_").concat(e.img),cols:n,rows:r},c.a.createElement("img",{src:e.img,alt:"".concat(i.id,"_").concat(i.tags.join("_"))}),c.a.createElement(_.a,{title:i.id,subtitle:i.tags.map((function(e,a){return c.a.createElement("span",{key:"".concat(e,"_").concat(a)},"#",e)})),titlePosition:"top",className:a.titleBar}))}))))}));var v=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3ce39554.chunk.js.map