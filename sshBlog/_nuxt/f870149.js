(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,n,e){var content=e(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("56573f4e",content,!0,{sourceMap:!1})},183:function(t,n,e){var content=e(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("42b4964a",content,!0,{sourceMap:!1})},184:function(t,n,e){var content=e(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("4a214b4a",content,!0,{sourceMap:!1})},185:function(t,n,e){"use strict";e.r(n);var o={},r=(e(187),e(22)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"window"},[n("span"),this._v(" "),n("span"),this._v(" "),n("span"),this._v(" "),n("div",{staticClass:"body"},[this._t("default")],2)])}),[],!1,null,"3b985f0c",null);n.default=component.exports},186:function(t,n,e){"use strict";e.r(n);e(56),e(133),e(40),e(134);var o={data:function(){return{history:[],user:"vistor@mkBlog",currentCatalog:"~",inputing:"",order:["ls"],catalogs:["blog","tags","about"]}},methods:{enter:function(){this.history.push({type:"order",content:this.inputing}),this.orderHandle(this.inputing),this.inputing=""},inputEve:function(t){},orderHandle:function(t){var n=t.split(" ").filter((function(t){return t}));switch(t){case"ls":this.history.push({type:"catalog",content:this.catalogs.join(" ")});break;case"cd":this.currentCatalog="blog"}console.log(n)}}},r=(e(189),e(22)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"terminal"},[e("ul",t._l(t.history,(function(n,o){return e("li",{key:n+o},["order"===n.type?e("span",[e("span",{staticClass:"user"},[t._v(t._s(t.user))]),t._v(" "),e("span",{staticClass:"catalog"},[t._v(" "+t._s(t.currentCatalog)+" ")]),t._v(" "),e("span",[t._v("$")])]):t._e(),t._v(" "),e("span",[t._v(t._s(n.content))])])})),0),t._v(" "),e("p",[e("span",{staticClass:"user"},[t._v(t._s(t.user))]),t._v(" "),e("span",{staticClass:"catalog"},[t._v(" "+t._s(t.currentCatalog)+" ")]),t._v(" "),e("span",[t._v("$")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputing,expression:"inputing"}],attrs:{"value.html":"inputing",type:"text",autofocus:""},domProps:{value:t.inputing},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.enter(n)},input:[function(n){n.target.composing||(t.inputing=n.target.value)},t.inputEve]}})])])}),[],!1,null,"223717bf",null);n.default=component.exports},187:function(t,n,e){"use strict";e(182)},188:function(t,n,e){(n=e(54)(!1)).push([t.i,'.window[data-v-3b985f0c]{height:400px;width:450px;max-width:100%;box-shadow:0 7px 15px rgba(0,0,0,.1),0 12px 28px rgba(0,0,0,.25);float:none;box-sizing:border-box;border-radius:10px;overflow:hidden}.window[data-v-3b985f0c],.window .body[data-v-3b985f0c]{position:relative;display:block;margin:auto}.window .body[data-v-3b985f0c]{height:100%;box-shadow:none;background:transparent;background:#000;padding:.6rem}.window[data-v-3b985f0c]:before{content:"";height:35px;display:block;border-radius:4px 4px 0 0;position:relative;background:linear-gradient(0deg,#d0d0d0,#eae8eb);border-bottom:1px solid rgba(0,0,0,.15);z-index:999;background:linear-gradient(0deg,#2d2d2d,#4f4f4f)}.window>span[data-v-3b985f0c]{position:absolute;background:hsla(0,0%,100%,.7);width:10px;height:10px;border-radius:50%;top:12px;right:15px;z-index:10;display:inline-block;overflow:hidden;z-index:999}.window>span[data-v-3b985f0c]:before{content:"";height:75%;width:100%;background:linear-gradient(0deg,rgba(0,0,0,.15),transparent);position:absolute;bottom:0;left:0;right:0;z-index:999}.window>span[data-v-3b985f0c]:first-child{background:#34c949}.window>span[data-v-3b985f0c]:nth-child(2){right:32px;background:#fcbf40}.window>span[data-v-3b985f0c]:nth-child(3){right:48px;background:#fb625d}',""]),t.exports=n},189:function(t,n,e){"use strict";e(183)},190:function(t,n,e){(n=e(54)(!1)).push([t.i,'.terminal[data-v-223717bf]{height:100%;width:100%;background:#000;color:#fff;font-size:13px;font-family:"Lucida Console";text-align:left}.terminal li[data-v-223717bf],.terminal ul[data-v-223717bf]{list-style:none;padding:0}.terminal input[data-v-223717bf]{color:#fff;background:none;border:none;outline:none;font-family:"Lucida Console";padding:0}.terminal .user[data-v-223717bf]{color:#00bf00}.terminal .catalog[data-v-223717bf]{color:#bfbf00}',""]),t.exports=n},191:function(t,n,e){"use strict";e(184)},192:function(t,n,e){(n=e(54)(!1)).push([t.i,".container{overflow:hidden;display:flex;height:100vh;justify-content:space-between}.container>div{width:50%}.container>div:nth-child(2){overflow-y:scroll}.container .left{position:relative;display:flex;justify-content:center;align-items:center}.container .left .copyright{position:absolute;color:#666;bottom:10px;left:10px}.container .right .article{padding-right:36px}.container .right .article .title{font-size:30px;line-height:2.6}.container .right .article .info{color:#a9a9a9;line-height:2.6;margin-bottom:10px}.container .right .article .section p{margin-bottom:1em;text-indent:2em;line-height:1.6;text-align:justify}",""]),t.exports=n},194:function(t,n,e){"use strict";e.r(n);var o=e(185),r=e(186),l={component:{Window:o.default,Terminal:r.default},mounted:function(){$webfont.load(".article","3dde787962af4cbd89fece1a79981c2b","jdfangsongjian"),$webfont.load(".title","3dde787962af4cbd89fece1a79981c2b","jdfangsongjian"),$webfont.draw()}},c=(e(191),e(22)),component=Object(c.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[n("Window",[n("Terminal")],1),this._v(" "),n("div",{staticClass:"copyright"},[this._v("©2020 Power by mkBlog")])],1),this._v(" "),this._m(0)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"right"},[e("div",{staticClass:"article"},[e("h1",{staticClass:"title"},[t._v("狗屁不通文章生成器")]),t._v(" "),e("div",{staticClass:"info"},[e("span",{staticClass:"author"},[t._v("mk965")]),t._v(" "),e("span",{staticClass:"time"},[t._v("2020年12月1日 21:45:09")])]),t._v(" "),e("div",{staticClass:"section"},[e("p",[t._v("经过上述讨论， 这样看来， 既然如此， 问题的发生，到底需要如何做到，不问题的发生，又会如何产生。 一般来说， 马云曾经说过，最大的挑战和突破在于用人，而用人最大的突破在于信任人。这不禁令我深思。")]),t._v(" "),e("p",[t._v("就我个人来说，问题对我的意义，不能不说非常重大。 问题，到底应该如何实现。 莎士比亚曾经提到过，人的一生是短的，但如果卑劣地过这一生，就太长了。我希望诸位也能好好地体会这句话. 这样看来， 歌德在不经意间这样说过，决定一个人的一生，以及整个命运的，只是一瞬之间。这不禁令我深思. 经过上述讨论， 卡耐基说过一句著名的话，我们若已接受最坏的，就再没有什么损失。带着这句话, 我们还要更加慎重的审视这个问题。")]),t._v(" "),e("p",[t._v("那么， 问题，发生了会如何，不发生又会如何。 带着这些问题，我们来审视一下问题。 经过上述讨论， 要想清楚，问题，到底是一种怎么样的存在。 可是，即使是这样，问题的出现仍然代表了一定的意义。 迈克尔·F·斯特利曾经提到过，最具挑战性的挑战莫过于提升自我。这句话看似简单，但其中的阴郁不禁让人深思。")]),t._v(" "),e("p",[t._v("经过上述讨论， 这样看来， 既然如此， 问题的发生，到底需要如何做到，不问题的发生，又会如何产生。 一般来说， 马云曾经说过，最大的挑战和突破在于用人，而用人最大的突破在于信任人。这不禁令我深思。")]),t._v(" "),e("p",[t._v("就我个人来说，问题对我的意义，不能不说非常重大。 问题，到底应该如何实现。 莎士比亚曾经提到过，人的一生是短的，但如果卑劣地过这一生，就太长了。我希望诸位也能好好地体会这句话. 这样看来， 歌德在不经意间这样说过，决定一个人的一生，以及整个命运的，只是一瞬之间。这不禁令我深思. 经过上述讨论， 卡耐基说过一句著名的话，我们若已接受最坏的，就再没有什么损失。带着这句话, 我们还要更加慎重的审视这个问题。")]),t._v(" "),e("p",[t._v("那么， 问题，发生了会如何，不发生又会如何。 带着这些问题，我们来审视一下问题。 经过上述讨论， 要想清楚，问题，到底是一种怎么样的存在。 可是，即使是这样，问题的出现仍然代表了一定的意义。 迈克尔·F·斯特利曾经提到过，最具挑战性的挑战莫过于提升自我。这句话看似简单，但其中的阴郁不禁让人深思。")])])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Terminal:e(186).default,Window:e(185).default})}}]);