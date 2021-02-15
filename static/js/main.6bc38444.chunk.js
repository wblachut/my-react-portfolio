(this["webpackJsonpmy-react-portfolio"]=this["webpackJsonpmy-react-portfolio"]||[]).push([[0],{21:function(e,c,s){},22:function(e,c,s){},29:function(e,c,s){},31:function(e,c,s){"use strict";s.r(c);var t=s(3),i=s.n(t),a=s(9),n=s.n(a),l=(s(21),s(14)),o=(s(22),s(8)),r=s.n(o),j=s(10),d=s(11),b=s(12),h=s(16),m=s(15),p=s(2),u=(s(29),s(0)),x=function(e){Object(h.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=c.call(this,e)).state={isLoading:!1,myRepos:[]},t}return Object(b.a)(s,[{key:"getStyle",value:function(){this.props.isHidden}},{key:"componentDidMount",value:function(){var e=Object(j.a)(r.a.mark((function e(){var c,s,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/wblachut/repos");case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,console.log(s),t=s.sort((function(e,c){return e.id>c.id?1:-1})).slice(1,13).reverse(),this.setState({myRepos:t});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"portfolio hidden",styles:this.getStyle(),children:[Object(u.jsx)("div",{className:"portfolio-wrapper",children:this.state.myRepos.map((function(e){return Object(u.jsx)("div",{className:"repo-container",children:Object(u.jsxs)("div",{className:"repo-img-div",children:[Object(u.jsx)("img",{src:"/my-react-portfolio"+"/images/".concat(e.name,"_img.png"),alt:"repo-image",className:"repo-image"}),Object(u.jsx)("a",{href:e.html_url,className:"gh-link",children:Object(u.jsx)(p.a,{icon:["fab","github"],className:"gh-icon"})}),Object(u.jsx)("a",{href:"https://wblachut.github.io/".concat(e.name,"/"),className:"demo-link",children:Object(u.jsx)(p.a,{icon:["fas","link"],className:"link-icon"})}),Object(u.jsxs)("div",{className:"repo-gif-div",children:[Object(u.jsx)("img",{src:"/my-react-portfolio"+"/images/".concat(e.name,"_gif.gif"),alt:"repo-gif",className:"repo-gif"}),Object(u.jsx)("div",{className:"repo-name",children:e.name})]})]})},e.id)}))}),Object(u.jsxs)("ul",{className:"icon-skills",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(p.a,{icon:["fab","js-square"],className:"skill-icon"})," ",Object(u.jsx)("p",{children:"javascript"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)(p.a,{icon:["fab","react"],className:"skill-icon"})," ",Object(u.jsx)("p",{children:"React"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)(p.a,{icon:["fab","html5"],className:"skill-icon"})," ",Object(u.jsx)("p",{children:"HTML5"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)(p.a,{icon:["fab","css3"],className:"skill-icon"})," ",Object(u.jsx)("p",{children:"CSS3"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{alt:"White Visual Studio Code 2019 icon",src:"https://img.icons8.com/nolan/2x/ffffff/visual-studio-code-2019.png"}),Object(u.jsx)("p",{children:"VS Code"})]})]})]})}}]),s}(i.a.Component),O=function(){var e=function(){document.querySelector(".portfolio").classList.toggle("hidden"),document.querySelector(".toggle-projects").classList.toggle("hide")};return Object(u.jsxs)("section",{className:"personals",children:[Object(u.jsxs)("p",{className:"wb-title",children:[Object(u.jsx)("code",{children:Object(u.jsx)("b",{children:"WB "})}),Object(u.jsx)("code",{children:"portfolio"})]}),Object(u.jsx)("p",{children:"traveler "}),Object(u.jsx)("p",{children:"freeride skier"}),Object(u.jsx)("p",{className:"web-dev",role:"button",onClick:e,children:Object(u.jsx)("code",{children:"webDeveloper </>"})}),Object(u.jsxs)("ul",{className:"icons-main",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.facebook.com/buahoot/",className:"main-icon-link",children:Object(u.jsx)(p.a,{icon:["fab","facebook"],className:"fa-main-icon"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://github.com/wblachut",className:"main-icon-link",children:Object(u.jsx)(p.a,{icon:["fab","github"],className:"fa-main-icon"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/wblachut-webdev/",className:"main-icon-link",children:Object(u.jsx)(p.a,{icon:["fab","linkedin"],className:"fa-main-icon"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.instagram.com/buahoot/",className:"main-icon-link",children:Object(u.jsx)(p.a,{icon:["fab","instagram"],className:"fa-main-icon"})})})]}),Object(u.jsx)("div",{className:"toggle-projects",role:"button",onClick:e,children:Object(u.jsxs)("div",{className:"toggle-icon-wrapper",children:[Object(u.jsx)("svg",{className:"show-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",clipRule:"evenodd"})}),Object(u.jsx)("svg",{className:"hide-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",clipRule:"evenodd"})})]})})]})};var f=function(){var e=Object(t.useState)(!0),c=Object(l.a)(e,2),s=c[0],i=c[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{isHidden:s,setHidden:i}),Object(u.jsx)(x,{isHidden:s})]})},g=s(4),v=s(13),w=s(5);g.b.add(v.a,w.b,w.a),n.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.6bc38444.chunk.js.map