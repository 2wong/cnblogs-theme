"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[130],{67454:function(e,t,n){function i(n){let e=document.createElement("canvas"),t=(e.id="bubble",$("#page_end_html").after(e),document.getElementById("bubble")),i=t.getContext("2d"),o=(t.width=window.innerWidth,t.height=window.innerHeight,t.style.position="fixed",t.style.left="0",t.style.bottom="0",t.style.pointerEvents="none",[]),l=n.__config.animate.mouseClick.options.bubble.live,s=n.__config.animate.mouseClick.options.bubble.colors;window.addEventListener("mousemove",function(t){for(let e=0;e<n.__config.animate.mouseClick.options.bubble.quantity;e++)o.push({sx:t.x,sy:t.y,vx:.5-Math.random(),vy:.5-Math.random(),life:l,color:s[parseInt(Math.random()*s.length)],size:Math.random()*n.__config.animate.mouseClick.options.bubble.size})}),setInterval(function(){i.clearRect(0,0,t.width,t.height);for(let t=0;t<o.length;t++){let e=o[t];i.beginPath(),i.arc(e.sx,e.sy,e.size,2*Math.PI,!1),i.fillStyle="rgba("+e.color+","+e.life/l+")",i.fill(),e.life--,e.life<=0&&o.splice(t,1),e.sx+=3*e.vx,e.sy+=3*e.vy}},20)}n.r(t),n.d(t,{default:function(){return i}})}}]);