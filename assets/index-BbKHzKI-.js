import{r as C,R as j,j as o}from"./index-CzqR4CHq.js";const D="data:image/svg+xml,%3csvg%20width='24.542'%20height='16'%20viewBox='0%200%206.493%204.233'%20xml:space='preserve'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20style='fill:%23d2ff14;fill-opacity:1;stroke-width:.264999;stroke-linecap:round'%20d='M267.17%20179.502a2.91%202.91%200%200%200-2.91%202.909v170.685a2.91%202.91%200%200%200%202.91%202.91h28.013a2.91%202.91%200%200%200%202.909-2.91v-95.007a.71.71%200%200%201%201.336-.323l45.962%2088.564a4.788%204.788%200%200%200%204.245%202.586h24.092a4.788%204.788%200%200%200%204.245-2.586l45.963-88.564a.71.71%200%200%201%201.336.323v61.154a2.91%202.91%200%200%200%202.909%202.91h103.906a2.91%202.91%200%200%200%202.91-2.91V291.23a2.91%202.91%200%200%200-2.91-2.909h-70.075a2.91%202.91%200%200%201-2.91-2.909V182.411a2.91%202.91%200%200%200-2.908-2.91H428.18a4.654%204.654%200%200%200-4.18%202.608l-61.048%20125.369a1.417%201.417%200%200%201-2.542%200l-61.047-125.369a4.654%204.654%200%200%200-4.18-2.607H267.17zm225.03%201.616a2.494%202.494%200%200%200-1.12.194%2024.187%2024.187%200%200%200-14.847%2019.393%2024.187%2024.187%200%201%200%2047.945.13%2024.187%2024.187%200%200%200-14.76-19.523c-1.46-.626-3.074.331-3.491%201.874l-1.832%206.465c-.417%201.543.498%203.13%201.875%203.922a11.676%2011.676%200%200%201%205.494%207.218c.376%201.543.376%204.211%200%205.754a11.676%2011.676%200%200%201-8.425%208.382%2014.178%2014.178%200%200%201-5.797%200%2011.676%2011.676%200%200%201-8.339-8.425%2014.095%2014.095%200%200%201%200-5.754%2011.676%2011.676%200%200%201%205.517-7.218c1.417-.793%202.334-2.338%201.917-3.922l-1.723-6.465c-.313-1.157-1.304-1.959-2.414-2.025zM428.18%20339.09a2.91%202.91%200%200%200-2.91%202.909v11.097a2.91%202.91%200%200%200%202.91%202.91h103.906a2.91%202.91%200%200%200%202.91-2.91v-11.097a2.91%202.91%200%200%200-2.91-2.91H428.18z'%20transform='translate(-6.338%20-4.305)%20scale(.02398)'/%3e%3c/svg%3e";function V(a){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];a&&a.addEventListener&&a.addEventListener.apply(a,e)}function R(a){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];a&&a.removeEventListener&&a.removeEventListener.apply(a,e)}var A=typeof window<"u",z=function(a){C.useEffect(a,[])},B=function(a){var e=C.useRef(a);e.current=a,z(function(){return function(){return e.current()}})},H=function(a){var e=C.useRef(0),t=C.useState(a),s=t[0],i=t[1],n=C.useCallback(function(r){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){i(r)})},[]);return B(function(){cancelAnimationFrame(e.current)}),[s,n]},T=function(a){var e={},t=e.initialWidth,s=t===void 0?1/0:t,i=e.initialHeight,n=i===void 0?1/0:i,r=e.onChange,c=H({width:A?window.innerWidth:s,height:A?window.innerHeight:n}),l=c[0],f=c[1];return C.useEffect(function(){if(A){var d=function(){var h=window.innerWidth,x=window.innerHeight;f({width:h,height:x}),r&&r(h,x)};return V(window,"resize",d),function(){R(window,"resize",d)}}},[]),l};const P=a=>{let e;const t=new Set,s=(f,d)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const x=e;e=d??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(u=>u(e,x))}},i=()=>e,c={setState:s,getState:i,getInitialState:()=>l,subscribe:f=>(t.add(f),()=>t.delete(f))},l=e=a(s,i,c);return c},Y=a=>a?P(a):P,Q=a=>a;function U(a,e=Q){const t=j.useSyncExternalStore(a.subscribe,()=>e(a.getState()),()=>e(a.getInitialState()));return j.useDebugValue(t),t}const E=a=>{const e=Y(a),t=s=>U(e,s);return Object.assign(t,e),t},q=a=>a?E(a):E,M=q(a=>({isNotificationVisible:!1,setNotificationVisible:e=>{a({isNotificationVisible:e})},isErrorNotificationVisible:!1,setErrorNotificationVisible:e=>{a({isErrorNotificationVisible:e})}}));var F,_;function W(){if(_)return F;_=1;var a={linear:function(e,t,s,i){var n=s-t;return n*e/i+t},easeInQuad:function(e,t,s,i){var n=s-t;return n*(e/=i)*e+t},easeOutQuad:function(e,t,s,i){var n=s-t;return-n*(e/=i)*(e-2)+t},easeInOutQuad:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,s,i){var n=s-t;return n*(e/=i)*e*e+t},easeOutCubic:function(e,t,s,i){var n=s-t;return n*((e=e/i-1)*e*e+1)+t},easeInOutCubic:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,s,i){var n=s-t;return n*(e/=i)*e*e*e+t},easeOutQuart:function(e,t,s,i){var n=s-t;return-n*((e=e/i-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,s,i){var n=s-t;return n*(e/=i)*e*e*e*e+t},easeOutQuint:function(e,t,s,i){var n=s-t;return n*((e=e/i-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,s,i){var n=s-t;return-n*Math.cos(e/i*(Math.PI/2))+n+t},easeOutSine:function(e,t,s,i){var n=s-t;return n*Math.sin(e/i*(Math.PI/2))+t},easeInOutSine:function(e,t,s,i){var n=s-t;return-n/2*(Math.cos(Math.PI*e/i)-1)+t},easeInExpo:function(e,t,s,i){var n=s-t;return e==0?t:n*Math.pow(2,10*(e/i-1))+t},easeOutExpo:function(e,t,s,i){var n=s-t;return e==i?t+n:n*(-Math.pow(2,-10*e/i)+1)+t},easeInOutExpo:function(e,t,s,i){var n=s-t;return e===0?t:e===i?t+n:(e/=i/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,s,i){var n=s-t;return-n*(Math.sqrt(1-(e/=i)*e)-1)+t},easeOutCirc:function(e,t,s,i){var n=s-t;return n*Math.sqrt(1-(e=e/i-1)*e)+t},easeInOutCirc:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,s,i){var n=s-t,r,c,l;return l=1.70158,c=0,r=n,e===0?t:(e/=i)===1?t+n:(c||(c=i*.3),r<Math.abs(n)?(r=n,l=c/4):l=c/(2*Math.PI)*Math.asin(n/r),-(r*Math.pow(2,10*(e-=1))*Math.sin((e*i-l)*(2*Math.PI)/c))+t)},easeOutElastic:function(e,t,s,i){var n=s-t,r,c,l;return l=1.70158,c=0,r=n,e===0?t:(e/=i)===1?t+n:(c||(c=i*.3),r<Math.abs(n)?(r=n,l=c/4):l=c/(2*Math.PI)*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin((e*i-l)*(2*Math.PI)/c)+n+t)},easeInOutElastic:function(e,t,s,i){var n=s-t,r,c,l;return l=1.70158,c=0,r=n,e===0?t:(e/=i/2)===2?t+n:(c||(c=i*(.3*1.5)),r<Math.abs(n)?(r=n,l=c/4):l=c/(2*Math.PI)*Math.asin(n/r),e<1?-.5*(r*Math.pow(2,10*(e-=1))*Math.sin((e*i-l)*(2*Math.PI)/c))+t:r*Math.pow(2,-10*(e-=1))*Math.sin((e*i-l)*(2*Math.PI)/c)*.5+n+t)},easeInBack:function(e,t,s,i,n){var r=s-t;return n===void 0&&(n=1.70158),r*(e/=i)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,s,i,n){var r=s-t;return n===void 0&&(n=1.70158),r*((e=e/i-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,s,i,n){var r=s-t;return n===void 0&&(n=1.70158),(e/=i/2)<1?r/2*(e*e*(((n*=1.525)+1)*e-n))+t:r/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,s,i){var n=s-t,r;return r=a.easeOutBounce(i-e,0,n,i),n-r+t},easeOutBounce:function(e,t,s,i){var n=s-t;return(e/=i)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,s,i){var n=s-t,r;return e<i/2?(r=a.easeInBounce(e*2,0,n,i),r*.5+t):(r=a.easeOutBounce(e*2-i,0,n,i),r*.5+n*.5+t)}};return F=a,F}var G=W();function L(a){return a*Math.PI/180}function m(a,e){return a+Math.random()*(e-a)}function J(a,e){return Math.floor(a+Math.random()*(e-a+1))}var N;(function(a){a[a.Circle=0]="Circle",a[a.Square=1]="Square",a[a.Strip=2]="Strip"})(N||(N={}));var w;(function(a){a[a.Positive=1]="Positive",a[a.Negative=-1]="Negative"})(w||(w={}));const Z=1e3/60;class K{constructor(e,t,s,i){this.getOptions=t;const{colors:n,initialVelocityX:r,initialVelocityY:c}=this.getOptions();this.context=e,this.x=s,this.y=i,this.w=m(5,20),this.h=m(5,20),this.radius=m(5,10),this.vx=typeof r=="number"?m(-r,r):m(r.min,r.max),this.vy=typeof c=="number"?m(-c,0):m(c.min,c.max),this.shape=J(0,2),this.angle=L(m(0,360)),this.angularSpin=m(-.2,.2),this.color=n[Math.floor(Math.random()*n.length)],this.rotateY=m(0,1),this.rotationDirection=m(0,1)?w.Positive:w.Negative}update(e){const{gravity:t,wind:s,friction:i,opacity:n,drawShape:r}=this.getOptions(),c=e/Z;this.x+=this.vx*c,this.y+=this.vy*c,this.vy+=t*c,this.vx+=s*c,this.vx*=i**c,this.vy*=i**c,this.rotateY>=1&&this.rotationDirection===w.Positive?this.rotationDirection=w.Negative:this.rotateY<=-1&&this.rotationDirection===w.Negative&&(this.rotationDirection=w.Positive);const l=.1*this.rotationDirection*c;if(this.rotateY+=l,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=n,this.context.lineCap="round",this.context.lineWidth=2,r&&typeof r=="function")r.call(this,this.context);else switch(this.shape){case N.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case N.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case N.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class X{constructor(e,t){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=m(this.x,this.w+this.x),n=m(this.y,this.h+this.y);return new K(this.context,this.getOptions,i,n)},this.animate=i=>{const{canvas:n,context:r,particlesGenerated:c,lastNumberOfPieces:l}=this,{run:f,recycle:d,numberOfPieces:h,debug:x,tweenFunction:u,tweenDuration:p}=this.getOptions();if(!f)return!1;const g=this.particles.length,y=d?g:c;if(y<h){l!==h&&(this.tweenProgress=0,this.tweenFrom=y,this.lastNumberOfPieces=h),this.tweenProgress=Math.min(p,Math.max(0,this.tweenProgress+i));const b=u(this.tweenProgress,this.tweenFrom,h,p),v=Math.round(b-y);for(let k=0;k<v;k++)this.particles.push(this.getParticle());this.particlesGenerated+=v}x&&(r.font="12px sans-serif",r.fillStyle="#333",r.textAlign="right",r.fillText(`Particles: ${g}`,n.width-10,n.height-20));for(let b=this.particles.length-1;b>=0;b--){const v=this.particles[b];v.update(i),(v.y>n.height||v.y<-100||v.x>n.width+100||v.x<-100)&&(d&&y<=h?this.particles[b]=this.getParticle():this.removeParticleAt(b))}return g>0||y<h},this.canvas=e;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=t}}const I={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:G.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class ${constructor(e,t){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const n={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...n,...I,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:n,onConfettiComplete:r,frameRate:c},canvas:l,context:f}=this,d=Math.min(i-this.lastFrameTime,50);if(c&&d<1e3/c){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(c?d%c:0),n&&(f.fillStyle="white",f.clearRect(0,0,l.width,l.height)),this.generator.animate(d)?this.rafId=requestAnimationFrame(this.update):(r&&typeof r=="function"&&this.generator.particlesGenerated>0&&r.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=e;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new X(this.canvas,()=>this.options),this.options=t,this.update()}get options(){return this._options}set options(e){var i,n;const t=(i=this._options)==null?void 0:i.run,s=(n=this._options)==null?void 0:n.recycle;this.setOptionsWithDefaults(e),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof e.recycle=="boolean"&&e.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof e.run=="boolean"&&e.run&&t===!1&&this.update()}}const ee=j.createRef();class S extends j.Component{constructor(e){super(e),this.canvas=j.createRef(),this.canvas=e.canvasRef||ee}componentDidMount(){if(this.canvas.current){const e=O(this.props)[0];this.confetti=new $(this.canvas.current,e)}}componentDidUpdate(){const e=O(this.props)[0];this.confetti&&(this.confetti.options=e)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[e,t]=O(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...t.style};return o.jsx("canvas",{width:e.width,height:e.height,ref:this.canvas,...t,style:s})}}S.defaultProps={...I};S.displayName="ReactConfetti";function O(a){const e={},t={},s={},i=[...Object.keys(I),"confettiSource","drawShape","onConfettiComplete","frameRate"],n=["canvasRef"];for(const r in a){const c=a[r];i.includes(r)?e[r]=c:n.includes(r)?n[r]=c:s[r]=c}return[e,s,t]}const te=j.forwardRef((a,e)=>o.jsx(S,{canvasRef:e,...a})),ne="/assets/mivoll-maskot-DhKPUJFP.webp",ie="data:image/svg+xml,%3csvg%20width='49'%20height='49'%20viewBox='0%200%2049%2049'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.9032%200.819275C18.3624%200.819275%2017.5425%200.860865%2014.9737%200.966586C12.4103%201.08369%2010.663%201.48484%209.13116%202.08053C7.54734%202.69585%206.19875%203.52309%204.85987%204.86216C3.52095%206.20123%202.70149%207.54257%202.0861%209.12641C1.49057%2010.6585%201.08175%2012.4131%200.964815%2014.9768C0.847349%2017.5457%200.817139%2018.3658%200.817139%2024.907C0.817139%2031.4486%200.847339%2032.2683%200.964815%2034.8373C1.0819%2037.401%201.49057%2039.1484%202.0861%2040.6805C2.70149%2042.2643%203.52095%2043.6056%204.85987%2044.9447C6.19875%2046.2838%207.54734%2047.1103%209.13116%2047.726C10.663%2048.3213%2012.4103%2048.7304%2014.9737%2048.8475C17.5425%2048.9646%2018.3624%2048.9872%2024.9032%2048.9872C31.4439%2048.9872%2032.2639%2048.9495%2034.8326%2048.8475C37.3961%2048.7304%2039.1508%2048.3213%2040.6826%2047.726C42.2664%2047.1103%2043.6076%2046.2838%2044.9465%2044.9447C46.2854%2043.6056%2047.1048%2042.2643%2047.7202%2040.6805C48.3158%2039.1484%2048.7246%2037.401%2048.8416%2034.8373C48.959%2032.2683%2048.9892%2031.4486%2048.9892%2024.907C48.9892%2018.3658%2048.959%2017.5457%2048.8416%2014.9768C48.7245%2012.4131%2048.3158%2010.6585%2047.7202%209.12641C47.1048%207.54257%2046.2854%206.20123%2044.9465%204.86216C43.6076%203.52309%2042.2664%202.69585%2040.6826%202.08053C39.1508%201.48484%2037.3961%201.08369%2034.8326%200.966586C32.2639%200.849487%2031.4439%200.819275%2024.9032%200.819275ZM24.9032%205.15718C31.3338%205.15718%2032.0938%205.19491%2034.6334%205.29693C36.9815%205.4027%2038.2626%205.80083%2039.1113%206.1306C40.2355%206.56763%2041.035%207.08815%2041.8777%207.93088C42.7205%208.77361%2043.2409%209.57327%2043.6776%2010.6974C44.0074%2011.5462%2044.4041%2012.8275%2044.5113%2015.1754C44.6269%2017.7153%2044.6514%2018.4757%2044.6514%2024.9066C44.6514%2031.3379%2044.625%2032.0983%2044.5113%2034.6378C44.404%2036.9862%2044.0074%2038.2599%2043.6776%2039.1087C43.2409%2040.2328%2042.7205%2041.0393%2041.8777%2041.8824C41.035%2042.7251%2040.2355%2043.2457%2039.1113%2043.6827C38.2626%2044.0113%2036.9815%2044.4023%2034.6334%2044.5092C32.0942%2044.6263%2031.3344%2044.6489%2024.9032%2044.6489C18.472%2044.6489%2017.7122%2044.6112%2015.1729%2044.5092C12.8249%2044.4034%2011.5511%2044.0124%2010.7024%2043.6827C9.57825%2043.2457%208.7714%2042.7251%207.9287%2041.8824C7.08606%2041.0393%206.56565%2040.2328%206.12873%2039.1087C5.79899%2038.2599%205.40969%2036.9862%205.30251%2034.6378C5.18692%2032.0983%205.16237%2031.3379%205.16237%2024.9066C5.16237%2018.4757%205.18881%2017.7153%205.30251%2015.1754C5.40977%2012.8275%205.79899%2011.5462%206.12873%2010.6974C6.56565%209.57327%207.08606%208.77361%207.9287%207.93088C8.7714%207.08815%209.57825%206.56763%2010.7024%206.1306C11.5511%205.80197%2012.8249%205.40421%2015.1729%205.29693C17.7126%205.17984%2018.4726%205.15718%2024.9032%205.15718ZM37.7613%209.15587C36.1653%209.15587%2034.8695%2010.4515%2034.8695%2012.0478C34.8695%2013.6441%2036.1653%2014.9397%2037.7613%2014.9397C39.3575%2014.9397%2040.6531%2013.6441%2040.6531%2012.0478C40.6531%2010.4515%2039.3575%209.15587%2037.7613%209.15587ZM24.9032%2012.5347C18.073%2012.5347%2012.5393%2018.0765%2012.5393%2024.907C12.5393%2031.738%2018.073%2037.2718%2024.9032%2037.2718C31.7334%2037.2718%2037.2744%2031.738%2037.2744%2024.907C37.2744%2018.0765%2031.7334%2012.5347%2024.9032%2012.5347ZM24.9032%2016.8802C29.3369%2016.8802%2032.9294%2020.4732%2032.9294%2024.907C32.9294%2029.3412%2029.3369%2032.9339%2024.9032%2032.9339C20.4695%2032.9339%2016.877%2029.3412%2016.877%2024.907C16.877%2020.4732%2020.4695%2016.8802%2024.9032%2016.8802Z'%20fill='%23D2FF14'/%3e%3c/svg%3e",se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgB7ZZNToRAEIW/wk5YymJmz9qF4g3wBMYTOEfRE3gU4wn0BjOOF8C1JuLSiJZN0MRhaEIP+JMJb9Ekr6r7q+6CDsKGutNJquipIokgUeVqVo5vFCeHkudN8wyemmsUGcylQgoWVYG+wnE5hLBrH8MAA8y1XT5hQwU+yUudzqQHrJTnDvW42ZdMPvtX6gWeGQYoybd+VSXA2YE8nNNRXkdql4/rzjtyhYc8gesKeX3yye8N9NWvA8UVmOs02UEvanbakHpTN/bl8QiHjDugkTYDaCvCzlm0JQ9+pOK40n4MyH/bobOHBcUixKSr3voLEiCzYOVaK25pL6i7ljrRumco4j3J7+mo7f/wR+AIHIF/D/T9a8voqQ+9jEOLSVKFuAAAAABJRU5ErkJggg==",ae="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_43_352)'%3e%3cpath%20d='M1.91602%2016.1553H11.4629V46.8629H1.91602V16.1553ZM6.68973%200.891113C9.74104%200.891113%2012.2208%203.37085%2012.2208%206.42727C12.2208%209.48063%209.74104%2011.9604%206.68973%2011.9604C3.63126%2011.9604%201.15869%209.48063%201.15869%206.42727C1.15869%203.37085%203.63126%200.891113%206.68973%200.891113Z'%20fill='%23D2FF14'/%3e%3cpath%20d='M17.4487%2016.1554H26.6032V20.3544H26.7337C28.0078%2017.9392%2031.1221%2015.395%2035.7638%2015.395C45.4284%2015.395%2047.2122%2021.7529%2047.2122%2030.0211V46.8629H37.6724V31.9298C37.6724%2028.3678%2037.6105%2023.7875%2032.713%2023.7875C27.7463%2023.7875%2026.9885%2027.6698%2026.9885%2031.6739V46.8629H17.4487V16.1554Z'%20fill='%23D2FF14'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_43_352'%3e%3crect%20width='46.6182'%20height='46.6182'%20fill='white'%20transform='translate(0.902344%200.594055)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function re(){const[a,e]=C.useState({message:"",email:""}),{screenWidth:t,screenHeight:s}=T(),[i,n]=C.useState(!1),r=M(u=>u.isNotificationVisible),c=M(u=>u.setNotificationVisible),l=M(u=>u.isErrorNotificationVisible),f=M(u=>u.setErrorNotificationVisible),d=async u=>{u.preventDefault();try{const p=await fetch("https://formsubmit.co/ajax/info@mivoll.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),g=await p.json();p.ok&&g.success==="true"?c(!0):(console.error("FormSubmit error:",g),f(!0))}catch(p){console.error("Network or server error:",p),f(!0)}};function h(){n(u=>!u)}const x=u=>{const{name:p,value:g}=u.target;e(y=>({...y,[p]:g}))};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
    @keyframes breathe {
      0%, 100% {
        transform: scale(0.75);
      }
      30% {
        transform: scale(1.0);
      }
    }

    @keyframes heartbeat {
          0% {
            transform: scale(1.2);
          }
          14% {
            transform: scale(1.3);
          }
          28% {
            transform: scale(1.2);
          }
          42% {
            transform: scale(1.3);
          }
          70%, 100% {
            transform: scale(1.2);
          }
        }

    @keyframes heartbeat-text {
          0% {
            transform: scale(1.0);
          }
          14% {
            transform: scale(1.05);
          }
          28% {
            transform: scale(1.0);
          }
          42% {
            transform: scale(1.05);
          }
          70%, 100% {
            transform: scale(1.0);
          }
        }
  `}),o.jsx("div",{className:`fixed lg:w-[666px] lg:h-[666px] sm:w-[555px] sm:h-[555px]
          ${r?"animate-[heartbeat_1.5s_ease-in-out_infinite]":"animate-[breathe_6s_ease-in-out_infinite]"}
          bg-[#D2FF14]/55 rounded-full left-[-200px]
          bottom-[-200px] blur-[300px] 
          pointer-events-none z-0`}),o.jsx("div",{className:`fixed lg:w-[666px] lg:h-[666px] sm:w-[555px] sm:h-[555px]
          ${r?"animate-[heartbeat_1.5s_ease-in-out_infinite]":"animate-[breathe_6s_ease-in-out_infinite]"}
          bg-[#D2FF14]/55 rounded-full right-[-200px]
          top-[-200px] blur-[300px] 
          pointer-events-none z-0`}),o.jsxs("div",{className:"sm:hidden",children:[o.jsx("div",{className:`fixed w-[200px] h-[300px]
          ${r?"animate-[heartbeat_1.5s_ease-in-out_infinite]":"animate-[breathe_6s_ease-in-out_infinite]"}
          bg-[#D2FF14] rounded-full 
          left-[-150px]
          bottom-[-50px]
          blur-[150px] 
          pointer-events-none z-0`}),o.jsx("div",{className:`fixed w-[200px] h-[300px]
          ${r?"animate-[heartbeat_1.5s_ease-in-out_infinite]":"animate-[breathe_6s_ease-in-out_infinite]"}
          bg-[#D2FF14] rounded-full 
          right-[20px]
          top-[-180px]
          blur-[150px] 
          pointer-events-none z-0`}),o.jsx("div",{className:`fixed w-[200px] h-[300px]
          ${r?"animate-[heartbeat_1.5s_ease-in-out_infinite]":"animate-[breathe_6s_ease-in-out_infinite]"}
          bg-[#D2FF14] rounded-full 
          right-[-200px]
          top-[300px]
          blur-[150px] 
          pointer-events-none z-0`})]}),o.jsx("div",{className:"bg-[#1D1E24] h-screen overflow-hidden",children:o.jsxs("div",{className:"h-screen",children:[o.jsx("div",{className:"w-screen min-h-5 md:min-h-0"}),o.jsxs("div",{className:"flex justify-between w-screen h-1/12",children:[o.jsx("div",{className:`
            {/* default screen */}
              flex items-center justify-center h-full max-w-30 ml-7
            {/* >=sm */}
              sm:hidden
            `,children:o.jsx("a",{href:"https://mivoll.com",children:o.jsx("img",{src:D,alt:"mivol logo",width:65})})}),o.jsx("div",{className:`
            {/* default screen */}
              flex items-center justify-center h-full max-w-30 mr-7
            {/* >=sm */}
              sm:hidden
            `,children:i?o.jsx("button",{onClick:h,children:o.jsx("div",{className:`flex items-center justify-center h-[50px] w-[50px] bg-[#d2ff14]
                shadow-2xl/30
                rounded-full transition-transform duration-500 transform rotate-0`,children:o.jsxs("div",{className:"h-[20px] w-[33px]",children:[o.jsx("div",{className:"h-[3px] w-[19px] mt-[2.5px] bg-[#2a2a2a] rounded-full transition-transform duration-500 transform rotate-225"}),o.jsx("div",{className:"h-[3px] w-[36px] bg-[#2a2a2a] -mx-[1px] mt-[4px] rounded-full transition-transform duration-500 transform -rotate-45"}),o.jsxs("div",{className:"flex",children:[o.jsx("div",{className:"h-[3px] w-[15px] bg-[#d2ff14] rounded-full mt-[5px]"}),o.jsx("div",{className:"h-[3px] w-[18px] bg-[#2a2a2a] rounded-full mt-[4px] transition-transform duration-500 transform rotate-405"})]})]})})}):o.jsx("button",{onClick:h,children:o.jsx("div",{className:`flex items-center justify-center h-[50px] w-[50px] bg-[#d2ff14]
                shadow-2xl/30
                rounded-full transition-transform duration-500 transform rotate-0`,children:o.jsxs("div",{className:"h-[20px] w-[30px]",children:[o.jsx("div",{className:"h-[3px] w-[15px] mt-[1px] bg-[#2a2a2a] rounded-full transition-transform duration-500 transform rotate-0"}),o.jsx("div",{className:"h-[3px] w-[30px] bg-[#2a2a2a] mt-[5px] rounded-full transition-transform duration-500 transform rotate-0"}),o.jsxs("div",{className:"flex",children:[o.jsx("div",{className:"h-[3px] w-[15px] bg-[#d2ff14] rounded-full mt-[5px]"}),o.jsx("div",{className:"h-[3px] w-[15px] bg-[#2a2a2a] rounded-full mt-[5px] transition-transform duration-500 transform rotate-0"})]})]})})})})]}),o.jsx("div",{className:`
          {/* default screen */}
          hidden
          {/* >= sm */}
          sm:flex sm:w-screen h-1/12
          {/* >= md */}
          {/* >= lg */}
        `}),o.jsx("div",{className:"flex items-center justify-center w-screen h-1/9",children:o.jsx("h1",{className:`
            ${r?"animate-[heartbeat-text_1.5s_ease-in-out_infinite]":"animate-pulse"}
            {/* default screen */}
              font-rem text-[#D2FF14] text-[38px] font-semibold 
            {/* >= sm */}
              sm:font-normal sm:text-[90px]
            {/* >= md */}
              md:font-normal md:text-[90px]
            {/* >= lg */}
              lg:font-normal lg:text-[100px]
          `,children:"ÇOK YAKINDA"})}),o.jsx("div",{className:" flex items-center justify-center text-center w-screen h-2/9 ",children:o.jsxs("p",{className:`
            {/* default screen */}
              text-[14px] mx-3 text-white max-w-4xl
            {/* >= sm */}
              sm:text-[20px]
            {/* >= md */}
              md:text-[24px]
            `,children:["Türkiye merkezli bir ",o.jsx("span",{className:"font-bold",children:"yazılım ve dijital içerik"})," stüdyosu olan"," ",o.jsx("span",{className:"text-[#D2FF14] font-bold",children:"Mivoll"})," yakında sizlerle! Dijital dünyada fark yaratmaya hazırlanıyoruz. O zamana kadar bizimle mail üzerinden iletişime geçebilirsiniz."]})}),o.jsxs("div",{className:"flex w-screen h-3/9 justify-center",children:[o.jsxs("form",{onSubmit:d,className:`
            {/* default screen */}
              flex flex-col items-center gap-1
            {/* >= sm */}
              sm:gap-1 sm:flex-row 
            {/* >= md */}
              md:gap-4 md:flex-row 
            {/* >= lg */}
              lg:gap-8 lg:flex-row 
            `,children:[o.jsx("input",{className:`
                {/* default screen */}
                  bg-[#101114] w-75 border-4 border-[#3a3a3a] text-white placeholder:text-[#7a7a7a] placeholder:text-xs
                  px-3 py-1 rounded-xl focus:outline-none border-b-0 border-l-0
                {/* >= sm */}
                  sm:w-72 sm:py-4 
                {/* >= md */}
                  md:w-72 md:py-4 
                {/* >= lg */}
                  lg:w-72 lg:py-4 
              `,type:"email",name:"email",placeholder:"Mail Adresi",value:a.email,onChange:x}),o.jsx("textarea",{className:`
              {/* default screen */}
                bg-[#101114] w-75 border-4 border-[#3a3a3a] text-white placeholder:text-[#7a7a7a] placeholder:text-xs
                px-3 pb-8 pt-1 rounded-xl focus:outline-none border-b-0 border-l-0 resize-none
              {/* >= sm */}
                sm:py-1 sm:w-72 
              {/* >= md */}
                md:py-1 md:w-72 
              {/* >= lg */}
                lg:py-1 lg:w-72 
              `,type:"text",name:"message",placeholder:"Mesajınızı Giriniz",value:a.message,onChange:x}),o.jsx("button",{className:`
              {/* default screen */}
              font-poppins border-4 border-[#3a3a3a] border-b-0 border-l-0 bg-[#101114] text-[#D2FF14] text-xs
              px-6 py-1 rounded-md hover:bg-[#D2FF14] hover:text-[#101114] transition-colors
              {/* >= sm */}
              sm:py-4 sm:px-6
              {/* >= md */}
              md:py-4 md:px-6
              {/* >= lg */}
              lg:py-4 lg:px-6
              `,type:"submit",children:"Gönder"})]}),r&&o.jsxs("div",{children:[o.jsx(te,{width:t,height:s,gravity:.08}),o.jsxs("div",{className:"bg-black/7 text-[#cccccc] fixed top-1/8 tranform translate-x-[-50%] border border-[#D2FF1447] items-center justify-center rounded-4xl",children:[o.jsx("h3",{className:"font-rem font-bold text-3xl px-4 pt-6",children:"Teşekkürler!"}),o.jsx("p",{className:"font-rem text-2xl px-4 leading-7",children:"Mailiniz gönderilmiştir 🚀 "}),o.jsx("p",{className:"font-rem text-xl px-4 pb-6",children:"Size en kısa zamanda dönüş sağlayacağız."})]})]}),l&&o.jsx("div",{className:"bg-black/7 text-[#cccccc] fixed top-1/8 border border-[#D2FF1447] items-center justify-center rounded-4xl ",children:o.jsx("p",{className:"font-rem text-2xl px-4 py-6",children:"Bir şeyler ters gitti.. Lütfen daha sonra tekrar deneyin."})})]}),o.jsxs("div",{className:"w-screen h-screen",children:[o.jsxs("div",{className:"mb-2 w-screen flex items-center justify-center gap-8 ",children:[o.jsx("a",{href:"https://www.instagram.com/mivoll.tr?igsh=Yjl2YjlidHFpYmp4",target:"_blank",children:o.jsx("img",{src:ie,alt:"instagram logo",width:"32"})}),o.jsx("a",{href:"https://www.facebook.com/people/Mivoll/61577316533568/",target:"_blank",children:o.jsx("img",{src:se,alt:"facebook logo",width:"32"})}),o.jsx("a",{href:"https://www.linkedin.com/company/mivoll/",target:"_blank",children:o.jsx("img",{src:ae,alt:"linkedin logo",width:"32"})}),o.jsx("img",{className:`
            {/* default screen */}
                w-30 fixed -right-5 mb-15

                {/* >= sm */}
                sm:w-35 sm:mb-19 sm:right-10
                {/* >= md */}
                md:w-40 md:mb-24 md:right-10
                {/* >= lg */}
                lg:w-50 lg:mb-33
                `,src:ne,alt:"mivoll mascot"})]}),o.jsx("div",{className:"border border-[#48484d] h-0 border-b-0 border-l-0 border-r-0"}),o.jsx("p",{className:"text-[#a5a5a7] mt-3 sm:mt-[1rem] text-center",children:"© 2025 Mivoll Dijital. Tüm hakları saklıdır."})]})]})})]})}const ce=()=>o.jsx(re,{});export{ce as component};
