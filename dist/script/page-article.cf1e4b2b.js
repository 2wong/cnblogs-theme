"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[269],{277:function(t,e,o){o.r(e),o.d(e,{default:function(){return a}});var n=o(24);function a(){(0,n.default)(),o.e(191).then(o.bind(o,294)).then((t=>{(0,t.default)()})),$.__tools.dynamicLoadingCss($.__config.default.fancyboxcss),$.__tools.dynamicLoadingJs($.__config.default.fancybox).catch((t=>console.error("fancybox.js",t))),setTimeout((()=>{let t=$("#cnblogs_post_body img").length-1;if(!t)return;let e=$("#cnblogs_post_body"),o=$(`#cnblogs_post_body img:lt(${t})`),n=$(".feedbackItem img"),a=[];$.each(o,(function(t){a.push(o[t])})),$.each(n,(function(t){a.push(n[t])})),e.length>0&&a.length>0&&$.each(a,(t=>{let e=$(a[t]);if(!e.hasClass("code_img_closed")&&!e.hasClass("code_img_opened")){let t=e.attr("width"),o=e.attr("height"),n=e.attr("alt")??"",a=e.attr("style")??"";e.after('<a data-fancybox="gallery" href="'+e.attr("src")+'"><img '+(t?' width="'+t+'" ':"")+(o?' height="'+o+'" ':"")+` src="${e.attr("src")}"`+` alt="${n}"`+` style="${a}"/></a>`),e.remove()}}))}),800)}$.__tools.dynamicLoadingJs($.__config.default.iconfont).catch((t=>console.error("iconfont.js",t)))}}]);