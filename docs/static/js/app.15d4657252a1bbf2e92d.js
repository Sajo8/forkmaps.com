webpackJsonp([1],{"7Okc":function(t,n){},DrYC:function(t,n){},NHnr:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("7+uW"),a={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"nav-bar"},[i("div",{staticClass:"nav-content"},[i("img",{staticClass:"site-logo",attrs:{src:"/static/img/forkmaps_w.svg"}}),t._v(" "),i("span",{staticClass:"app-title"}),t._v(" "),i("router-link",{staticClass:"navbar-link",attrs:{to:"/",exact:""}},[i("div",{staticClass:"link-wrapper"},[i("span",[t._v("Streamer List")])])]),t._v(" "),i("router-link",{staticClass:"navbar-link",attrs:{to:"/forkMap",exact:""}},[i("div",{staticClass:"link-wrapper"},[i("span",[t._v("Game Map")])])]),t._v(" "),i("div",{staticClass:"nav-divider"}),t._v(" "),t._m(0)],1)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"navbar-link nav-social",attrs:{href:"https://github.com/Sajo8",target:"_blank"}},[n("i",{staticClass:"fab fa-github"})])}]};var s={name:"App",components:{"nav-bar":i("VU/8")({name:"nav-bar",data:function(){return{}}},a,!1,function(t){i("deZz")},"data-v-5f9c93ea",null).exports},created:function(){this.$store.dispatch("loadCoins")}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav-bar"),this._v(" "),n("div",{staticClass:"main-content"},[n("router-view")],1)],1)},staticRenderFns:[]};var c=i("VU/8")(s,o,!1,function(t){i("nFw9")},null,null).exports,r=i("/ocq"),l=i("Dd8w"),d=i.n(l),u={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"coin-card"},[i("div",{staticClass:"coin-main"},[t.coin.icon?i("div",{staticClass:"coin-icon",style:{background:"url("+t.coin.icon+")  no-repeat center center","background-size":"contain"}}):i("div",{staticClass:"coin-icon"}),t._v(" "),i("div",{staticClass:"coin-title"},[i("span",{staticClass:"coin-name"},[i("a",{attrs:{href:t.coin.links.website}},[t._v(t._s(t.coin.name))])]),t._v(" "),i("span",{staticClass:"coin-ticker"},[t._v(t._s(t.coin.coin))]),t._v(" "),i("span",[t._v("Games:")]),t._v(" "),i("span",[t._v(t._s(t.coin.game))]),t._v(" "),i("span",[t._v(t._s(t.coin.game2))])])]),t._v(" "),i("div",{staticClass:"coin-links"},[t._l(t.coin.links,function(n,e,a){return i("a",{staticClass:"coin-link link-website",attrs:{href:n,title:e,rel:"nofollow",target:"_blank"}},["discord"==e?i("i",{staticClass:"fab fa-discord link-icon"}):"facebook"==e?i("i",{staticClass:"fab fa-facebook link-icon"}):"reddit"==e?i("i",{staticClass:"fab fa-reddit link-icon"}):"telegram"==e?i("i",{staticClass:"fab fa-telegram link-icon"}):"twitter"==e?i("i",{staticClass:"fab fa-twitter link-icon"}):"website"==e?i("i",{staticClass:"fab fa-twitch link-icon"}):t._e()])}),t._v(" "),t.coin.website?i("a",{staticClass:"coin-link link-website",attrs:{href:t.coin.website,rel:"nofollow",target:"_blank"}},[i("i",{staticClass:"fab fa-twitch link-icon"}),t._v(" "),i("span",{staticClass:"link-text"},[t._v("Twitch")])]):t._e()],2)])},staticRenderFns:[]};var f=i("VU/8")({name:"coin-card",props:["coin"]},u,!1,function(t){i("jznT")},"data-v-4155ade1",null).exports,v={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"coin-row"},[t.coin.icon?i("div",{staticClass:"coin-icon",style:{background:"url("+t.coin.icon+")  no-repeat center center","background-size":"contain"}}):i("div",{staticClass:"coin-icon"}),t._v(" "),i("div",{staticClass:"coin-title"},[i("span",{staticClass:"coin-name"},[t._v(t._s(t.coin.name))]),t._v(" "),i("span",{staticClass:"coin-ticker"},[t._v(t._s(t.coin.coin))])]),t._v(" "),t.coin.website?i("a",{staticClass:"coin-link link-website",attrs:{href:t.coin.website,rel:"nofollow",target:"_blank"}},[i("i",{staticClass:"fas fa-globe link-icon"}),t._v(" "),i("span",{staticClass:"link-text"},[t._v("website")])]):t._e(),t._v(" "),t.coin.repo?i("a",{staticClass:"coin-link link-repo",attrs:{href:t.coin.repo,target:"_blank"}},[t.coin.repo.includes("github")?i("i",{staticClass:"fab fa-github link-icon"}):t.coin.repo.includes("bitbucket")?i("i",{staticClass:"fab fa-bitbucket link-icon"}):i("i",{staticClass:"fas fa-code link-icon"}),t._v(" "),t.coin.repo.includes("github")?i("span",{staticClass:"link-text"},[t._v("github")]):t.coin.repo.includes("bitbucket")?i("span",{staticClass:"link-text"},[t._v("bitbucket")]):i("span",{staticClass:"link-text"},[t._v("repo")])]):t._e()])},staticRenderFns:[]};var p=i("VU/8")({name:"coin-row",props:["coin"]},v,!1,function(t){i("DrYC")},"data-v-51ef516f",null).exports,_=i("NYxO"),h={name:"coinList",components:{"coin-card":f,"coin-row":p},computed:d()({},Object(_.b)(["coinList"]))},m={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"list-page"},[i("div",{staticClass:"header-wrapper"},[i("div",{staticClass:"list-header"},[i("span",{staticClass:"header-item"},[t._v(t._s(t.coinList.length-2)+" Twitch Turtle(s)")]),t._v(" "),i("div",{staticClass:"input-wrapper"})])]),t._v(" "),i("div",{staticClass:"list-content"},t._l(t.coinList,function(n,e,a){return n.forkedFrom?t._e():i("coin-card",{key:e,attrs:{coin:n}})}))])},staticRenderFns:[]};var k=i("VU/8")(h,m,!1,function(t){i("7Okc")},"data-v-66d51914",null).exports,C=i("gRE1"),b=i.n(C),g=i("d7EF"),w=i.n(g),F=i("W3Iv"),E=i.n(F),x=i("fZjL"),y=i.n(x),S=i("woOf"),T=i.n(S),A=i("mtWM"),U=i.n(A),O={name:"tree-node",props:{coin:Object,isLast:Boolean}},j={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"tree-node",class:{"left-border":!t.isLast}},[i("div",{staticClass:"coin-card"},[i("div",{staticClass:"coin-icon-wrapper"},[t.coin.icon?i("div",{staticClass:"coin-icon",style:{background:"url("+t.coin.icon+")  no-repeat center center","background-size":"contain"}}):i("div",{staticClass:"coin-icon-placeholder"},[i("div",{staticStyle:{"text-align":"center",width:"100%",color:"#FFFFFF","font-size":"22px","font-weight":"700","padding-top":"10px"}},[t._v(t._s(t.coin.coin[0]))])])]),t._v(" "),i("div",{staticClass:"coin-card-text"},[i("span",[t._v(t._s(t.coin.name))]),t._v(" "),i("span",[t._v(t._s(t.coin.coin))])])]),t._v(" "),t._l(t.coin.forks,function(n,e){return t.coin.forks?i("tree-node",{key:e,attrs:{"is-last":e==t.coin.forks.length-1,coin:n}}):t._e()})],2)},staticRenderFns:[]};var D={name:"coinTree",components:{"tree-node":i("VU/8")(O,j,!1,function(t){i("T2EO")},"data-v-d97c96f2",null).exports},data:function(){return{nestedCoins:null}},methods:{getCoins:function(){var t=this;return U()("https://raw.githubusercontent.com/Sajo8/cryptonote/master/dist/coins.json").then(function(n){var i=n.data;t.nestedCoins=L(i)}).catch(function(t){console.log(t)})}},mounted:function(){this.getCoins()}},L=function(t){var n=T()({},t);y()(n);E()(n).forEach(function(t){var i=w()(t,2),e=(i[0],i[1]);if(e.forkedFrom){var a=e.forkedFrom;a&&Array.isArray(a)?a.forEach(function(t){n[t]&&(n[t].forks||(n[t].forks=[]),n[t].forks.push(e))}):n[a]&&(n[a].forks||(n[a].forks=[]),n[a].forks.push(e))}});var i={};for(var e in n){var a=n[e];!a.forkedFrom&&a.forks&&(i[e]=a)}return b()(i)},B={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"coin-tree"},[n("div",{staticClass:"tree-parent"},this._l(this.nestedCoins,function(t,i,e){return n("tree-node",{key:i,attrs:{"is-last":!0,coin:t}})}))])},staticRenderFns:[]};var M=i("VU/8")(D,B,!1,function(t){i("PUAl")},"data-v-613aeb7d",null).exports,$={name:"networkMap",data:function(){return{nestedCoins:null}},methods:{getCoins:function(){return U()("https://raw.githubusercontent.com/Sajo8/cryptonote/master/dist/coins.json").then(function(t){var n=t.data;z(n)}).catch(function(t){console.log(t)})}},mounted:function(){this.getCoins()}},z=function(t){var n={},i=[];E()(t).forEach(function(e){var a=w()(e,2),s=a[0],o=a[1];o.forkedFrom&&function(e,a){function s(a,s,o){if(!n[o]){var c=t[o];n[o]=new N(o,c)}n[e]=new N(a,s),i.push({from:o,to:a,color:{color:"#BBBBBB"},arrows:{to:{enabled:!0,scaleFactor:.5},from:{enabled:!0,scaleFactor:.1,type:"circle"}},arrowStrikethrough:!1})}Array.isArray(a.forkedFrom)?a.forkedFrom.forEach(function(t){return s(e,a,t)}):s(e,a,a.forkedFrom)}(s,o)});var e=document.getElementById("networkMapContainer"),a={nodes:new vis.DataSet(b()(n)),edges:new vis.DataSet(i)};new vis.Network(e,a,{interaction:{hideEdgesOnDrag:!0},layout:{hierarchical:{enabled:!1,sortMethod:"directed"}}})},N=function(t,n){this.id=t,this.label=n.name,this.title=n.coin,this.shadow={enabled:!0,color:"rgba(0,0,0,0.5)",x:1,y:1,size:10},this.color={background:"#FFFFFF",border:"#FFFFFF"},n.icon?(this.shape="image",this.image=n.icon,this.shapeProperties={useBorderWithImage:!1}):this.shape="circle"},R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"map-page"},[n("div",{staticStyle:{width:"100%"},attrs:{id:"networkMapContainer"}})])}]};var I=i("VU/8")($,R,!1,function(t){i("i2BG")},"data-v-0771d442",null).exports;e.a.use(r.a);var V=new r.a({routes:[{path:"/",name:"coinList",component:k},{path:"/tree",name:"coinTree",component:M},{path:"/forkMap",name:"forkMap",component:I}]}),G={state:{coins:{},loading:!1},getters:{coins:function(t){return t.coins},coinList:function(t){var n=b()(t.coins);return n.sort(function(t,n){var i=t.name.toUpperCase(),e=n.name.toUpperCase();return i<e?-1:i>e?1:0}),n},coinMap:function(t){}},actions:{loadCoins:function(t){t.commit("LOADING_STATUS",!0),U()("https://raw.githubusercontent.com/Sajo8/cryptonote/master/dist/coins.json").then(function(n){t.commit("COINS_UPDATED",n.data),t.commit("LOADING_STATUS",!1)}).catch(function(t){console.error(t)})}},mutations:{LOADING_STATUS:function(t,n){t.loading=n},COINS_UPDATED:function(t,n){t.coins=n}}};e.a.use(_.a);var P=new _.a.Store({modules:{coins:G}});e.a.config.productionTip=!1,new e.a({el:"#app",router:V,store:P,template:"<App/>",components:{App:c}})},PUAl:function(t,n){},T2EO:function(t,n){},deZz:function(t,n){},i2BG:function(t,n){},jznT:function(t,n){},nFw9:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.15d4657252a1bbf2e92d.js.map