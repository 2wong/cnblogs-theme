"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[191],{294:function(o,e,i){function c(){$.__tools.dynamicLoadingJs($.__config.default.clipboard).catch((o=>console.error("clipboard.js",o)));let o=$("#main pre");function e(){if(!$.__config.code.options.line)return!0;let o=$("code-box pre code");$.each(o,(function(e){let i=$(o[e]),c=i.html().replace(/\<br\>/g,"\n").split("\n"),n=[];$.each(c,(o=>{(c[o].trim()||o<c.length-1)&&"</code>"!==c[o]&&n.push('<code-line class="line-numbers-rows"></code-line>'+c[o])})),i.html(n.join("\n")),i.addClass("code-pre-line")}))}"function"==typeof $.__config.hooks.beforeCode&&$.__config.hooks.beforeCode(),$.each(o,(function(e){let i=$(o[e]),c="code-"+$.__tools.randomString(6);i.wrap('<code-box id="'+c+'"></code-box>'),i.attr("boxid",c)})),(()=>{if($.__config.code.options.macStyle){let o=$("code-box");$.each(o,(function(e){$(o[e]).prepend('<div class="code-tools"></div>')}))}else o.css("border-radius","4px")})(),(()=>{let o=$("code-box");$.each(o,(function(e){let i=$(o[e]),c=i.attr("id"),n='<button boxid="'+c+'" type="button" class="clipboard code-copay-btn" data-clipboard-action="copy" data-clipboard-target="#'+c+' pre" aria-label="复制代码" ><i class="iconfont icon-fuzhi"></i></button>';i.prepend(n)})),$("code-box .code-copay-btn").click((function(){$(this).find("i").removeClass("icon-fuzhi").addClass("icon-right"),setTimeout("$('code-box button[boxid='"+$(this).attr("boxid")+"'] i').removeClass('icon-right').addClass('icon-fuzhi')",1500)})),o.on({mouseover:function(){$(this).find(".code-copay-btn").css({opacity:1,visibility:"visible"})},mouseout:function(){$(this).find(".code-copay-btn").css({opacity:0,visibility:"hidden"})}}),new ClipboardJS(".clipboard")})(),$.__config.code.options.maxHeight&&$("code-box pre").css("max-height",$.__config.code.options.maxHeight),"hljs"===$.__config.code.type.toLowerCase()?i.e(586).then(i.bind(i,48)).then((o=>{(0,o.default)(e)})):(o.css("background","#f5f5fa"),$("code-box .code-tools").css("background","#f5f5fa"),$("pre .hljs").css({background:"none",border:"0","border-radius":"0",padding:"0"}),e()),"function"==typeof $.__config.hooks.afterCode&&$.__config.hooks.afterCode()}i.r(e),i.d(e,{default:function(){return c}})}}]);