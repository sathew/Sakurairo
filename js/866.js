(self.webpackChunksakurairo_scripts=self.webpackChunksakurairo_scripts||[]).push([[866],{1557:e=>{e.exports=function(e){var t=[].forEach,n=[].some,l=document.body,o=!0,s=" ";function r(n,l){var o,c,a,d=l.appendChild((o=n,c=document.createElement("li"),a=document.createElement("a"),e.listItemClass&&c.setAttribute("class",e.listItemClass),e.onClick&&(a.onclick=e.onClick),e.includeTitleTags&&a.setAttribute("title",o.textContent),e.includeHtml&&o.childNodes.length?t.call(o.childNodes,(function(e){a.appendChild(e.cloneNode(!0))})):a.textContent=o.textContent,a.setAttribute("href",e.basePath+"#"+o.id),a.setAttribute("class",e.linkClass+s+"node-name--"+o.nodeName+s+e.extraLinkClasses),c.appendChild(a),c));if(n.children.length){var u=i(n.isCollapsed);n.children.forEach((function(e){r(e,u)})),d.appendChild(u)}}function i(t){var n=e.orderedList?"ol":"ul",l=document.createElement(n),o=e.listClass+s+e.extraListClasses;return t&&(o+=s+e.collapsibleClass,o+=s+e.isCollapsedClass),l.setAttribute("class",o),l}function c(t){var n=0;return t!==document.querySelector(e.contentSelector&&null!=t)&&(n=t.offsetTop,e.hasInnerContainers&&(n+=c(t.offsetParent))),n}function a(t){return-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(s+e.isCollapsedClass).join(""),a(t.parentNode.parentNode)):t}return{enableTocAnimation:function(){o=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(o=!1)},render:function(e,t){var n=i(!1);t.forEach((function(e){r(e,n)}));var l=document.querySelector(e);if(null!==l)return l.firstChild&&l.removeChild(l.firstChild),0===t.length?l:l.appendChild(n)},updateToc:function(r){var i;i=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||l.scrollTop,e.positionFixedSelector&&function(){var t;t=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||l.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=s+e.positionFixedClass):n.className=n.className.split(s+e.positionFixedClass).join("")}();var d,u=r;if(o&&null!==document.querySelector(e.tocSelector)&&u.length>0){n.call(u,(function(t,n){return c(t)>i+e.headingsOffset+10?(d=u[0===n?n:n-1],!0):n===u.length-1?(d=u[u.length-1],!0):void 0}));var f=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);t.call(f,(function(t){t.className=t.className.split(s+e.activeLinkClass).join("")}));var m=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);t.call(m,(function(t){t.className=t.className.split(s+e.activeListItemClass).join("")}));var h=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+d.nodeName+'[href="'+e.basePath+"#"+d.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g,"\\$1")+'"]');-1===h.className.indexOf(e.activeLinkClass)&&(h.className+=s+e.activeLinkClass);var p=h.parentNode;p&&-1===p.className.indexOf(e.activeListItemClass)&&(p.className+=s+e.activeListItemClass);var C=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);t.call(C,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=s+e.isCollapsedClass)})),h.nextSibling&&-1!==h.nextSibling.className.indexOf(e.isCollapsedClass)&&(h.nextSibling.className=h.nextSibling.className.split(s+e.isCollapsedClass).join("")),a(h.parentNode.parentNode)}}}}},1340:e=>{e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1}},2866:function(e,t,n){var l,o,s;o=[],void 0===(s="function"==typeof(l=function(e){var t,l,o,s=n(1340),r={},i={},c=n(1557),a=n(9620),d=n(3693),u=!!(e&&e.document&&e.document.querySelector&&e.addEventListener);if("undefined"!=typeof window||u){var f=Object.prototype.hasOwnProperty;return i.destroy=function(){if(!r.skipRendering)try{document.querySelector(r.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+r.tocSelector)}r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(r.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1))},i.init=function(e){if(u&&(r=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var l in n)f.call(n,l)&&(e[l]=n[l])}return e}(s,e||{}),this.options=r,this.state={},r.scrollSmooth&&(r.duration=r.scrollSmoothDuration,r.offset=r.scrollSmoothOffset,i.scrollSmooth=n(764).initSmoothScrolling(r)),t=c(r),l=a(r),this._buildHtml=t,this._parseContent=l,i.destroy(),null!==(o=l.selectHeadings(r.contentSelector,r.headingSelector)))){var h=l.nestHeadingsArray(o).nest;r.skipRendering||t.render(r.tocSelector,h),this._scrollListener=m((function(e){t.updateToc(o),!r.disableTocScrollSync&&d(r);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(o),r.scrollEndCallback&&r.scrollEndCallback(e))}),r.throttleTimeout),this._scrollListener(),r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var p=null;return this._clickListener=m((function(e){r.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(o),p&&clearTimeout(p),p=setTimeout((function(){t.enableTocAnimation()}),r.scrollSmoothDuration)}),r.throttleTimeout),r.scrollContainer&&document.querySelector(r.scrollContainer)?document.querySelector(r.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},i.refresh=function(e){i.destroy(),i.init(e||this.options)},e.tocbot=i,i}function m(e,t,n){var l,o;return t||(t=250),function(){var s=n||this,r=+new Date,i=arguments;l&&r<l+t?(clearTimeout(o),o=setTimeout((function(){l=r,e.apply(s,i)}),t)):(l=r,e.apply(s,i))}}}(void 0!==n.g?n.g:this.window||this.global))?l.apply(t,o):l)||(e.exports=s)},9620:e=>{e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function l(e){return+e.nodeName.split("H").join("")}function o(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;var n={id:t.id,children:[],nodeName:t.nodeName,headingLevel:l(t),textContent:e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim()};return e.includeHtml&&(n.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(n,t):n}return{nestHeadingsArray:function(l){return t.call(l,(function(t,l){var s=o(l);return s&&function(t,l){for(var s=o(t),r=s.headingLevel,i=l,c=n(i),a=r-(c?c.headingLevel:0);a>0;)(c=n(i))&&void 0!==c.children&&(i=c.children),a--;r>=e.collapseDepth&&(s.isCollapsed=!0),i.push(s)}(s,t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var l=n;e.ignoreSelector&&(l=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return document.querySelector(t).querySelectorAll(l)}catch(e){return console.warn("Element not found: "+t),null}}}}},764:(e,t)=>{t.initSmoothScrolling=function(e){document.documentElement.style;var t=e.duration,n=e.offset,l=location.hash?o(location.href):location.href;function o(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",(function(s){var r;"a"!==(r=s.target).tagName.toLowerCase()||!(r.hash.length>0||"#"===r.href.charAt(r.href.length-1))||o(r.href)!==l&&o(r.href)+"#"!==l||s.target.className.indexOf("no-smooth-scroll")>-1||"#"===s.target.href.charAt(s.target.href.length-2)&&"!"===s.target.href.charAt(s.target.href.length-1)||-1===s.target.className.indexOf(e.linkClass)||function(e,t){var n,l,o=window.pageYOffset,s={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||function(e,t,n,l){return(e/=l/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},r=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]')||document.querySelector('[id="'+e.split("#").join("")+'"]'),i="string"==typeof e?s.offset+(e?r&&r.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,c="function"==typeof s.duration?s.duration(i):s.duration;function a(e){l=e-n,window.scrollTo(0,s.easing(l,o,i,c)),l<c?requestAnimationFrame(a):(window.scrollTo(0,o+i),"function"==typeof s.callback&&s.callback())}requestAnimationFrame((function(e){n=e,a(e)}))}(s.target.hash,{duration:t,offset:n,callback:function(){var e,t;e=s.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}})}),!1)}},3693:e=>{e.exports=function(e){var t=document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);n&&(t.scrollTop=n.offsetTop)}}}}]);
//# sourceMappingURL=866.js.map