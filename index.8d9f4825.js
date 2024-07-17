function t(t){return t&&t.__esModule?t.default:t}var e={};class s{static STATUS={idle:"idle",playing:"playing",win:"win",lose:"lose"};constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.score=0,this.status=s.STATUS.idle,this.initialState=t,this.state=t.map(t=>[...t])}getState(){return this.state}getScore(){return this.score}getStatus(){return this.status}moveLeft(){if(this.getStatus()!==s.STATUS.playing)return;let t=!1,e=this.state.map(e=>{let s=e.filter(t=>0!==t),i=[];for(let e=0;e<s.length;e++)if(s[e]===s[e+1]){let a=2*s[e];i.push(a),this.score+=a,e++,t=!0}else i.push(s[e]);for(;i.length<e.length;)i.push(0);return t||e.every((t,e)=>t===i[e])||(t=!0),i});return t&&(this.state=e,this.addCell(),this.setState(),this.checkStatus()),t}moveRight(){if(this.getStatus()!==s.STATUS.playing)return;let t=!1,e=this.state.map(e=>{let s=e.filter(t=>0!==t),i=[];for(let e=s.length-1;e>=0;e--)if(s[e]===s[e-1]){let a=2*s[e];i.unshift(a),this.score+=a,e--,t=!0}else i.unshift(s[e]);for(;i.length<e.length;)i.unshift(0);return t||e.every((t,e)=>t===i[e])||(t=!0),i});return t&&(this.state=e,this.addCell(),this.setState(),this.checkStatus()),t}moveUp(){if(this.getStatus()!==s.STATUS.playing)return;let t=!1,e=this.state.map(t=>[...t]);for(let s=0;s<this.state[0].length;s++){let i=[];for(let t=0;t<this.state.length;t++)0!==this.state[t][s]&&i.push(this.state[t][s]);let a=[];for(let e=0;e<i.length;e++)if(i[e]===i[e+1]){let s=2*i[e];a.push(s),this.score+=s,e++,t=!0}else a.push(i[e]);for(;a.length<this.state.length;)a.push(0);for(let i=0;i<this.state.length;i++)e[i][s]!==a[i]&&(e[i][s]=a[i],t=!0)}return t&&(this.state=e,this.addCell(),this.setState(),this.checkStatus()),t}moveDown(){if(this.getStatus()!==s.STATUS.playing)return;let t=!1,e=this.state.map(t=>[...t]);for(let s=0;s<this.state[0].length;s++){let i=[];for(let t=this.state.length-1;t>=0;t--)0!==this.state[t][s]&&i.push(this.state[t][s]);let a=[];for(let e=0;e<i.length;e++)if(i[e]===i[e+1]){let s=2*i[e];a.unshift(s),this.score+=s,e++,t=!0}else a.unshift(i[e]);for(;a.length<this.state.length;)a.unshift(0);for(let i=0;i<this.state.length;i++)e[i][s]!==a[i]&&(e[i][s]=a[i],t=!0)}return t&&(this.state=e,this.addCell(),this.setState(),this.checkStatus()),t}start(){this.status=s.STATUS.playing,this.state=this.initialState.map(t=>[...t]),this.addCell(),this.addCell(),this.setState()}restart(){this.score=0,this.status=s.STATUS.idle,this.state=this.initialState.map(t=>[...t]),this.setState()}addCell(){let t=[];for(let e=0;e<this.state.length;e++)for(let s=0;s<this.state[e].length;s++)0===this.state[e][s]&&t.push({row:e,cel:s});if(0===t.length)return;let e=this.addRandomNumber(t.length),{row:s,cel:i}=t[e],a=this.state.map(t=>[...t]);a[s][i]=this.getRandomCell(),this.state=a}setState(){let t=document.querySelectorAll(".field-cell"),e=this.state.flat();if(0!==t.length)for(let s=0;s<e.length;s++){let i=t[s],a=e[s];i&&(i.className="field-cell",a>0?(i.textContent=a,i.classList.add(`field-cell--${a}`)):i.textContent="")}}checkStatus(){let t=!1,e=!1;for(let t=0;t<this.state.length;t++)for(let e=0;e<this.state[t].length;e++)if(2048===this.state[t][e]){this.status=s.STATUS.win;return}for(let t=0;t<this.state.length;t++){for(let s=0;s<this.state[t].length-1;s++)if(this.state[t][s]===this.state[t][s+1]){e=!0;break}if(e)break}if(!e)for(let t=0;t<this.state.length-1;t++){for(let s=0;s<this.state[t].length;s++)if(this.state[t][s]===this.state[t+1][s]){e=!0;break}if(e)break}for(let e=0;e<this.state.length;e++){for(let s=0;s<this.state[e].length;s++)if(0===this.state[e][s]){t=!0;break}if(t)break}t||e||(this.status=s.STATUS.lose)}getRandomCell(){return .9>Math.random()?2:4}addRandomNumber(t){return Math.floor(Math.random()*t)}}const i=new(t(e=s)),a=document.querySelector(".start"),l=document.querySelector(".message-start"),h=document.querySelector(".message-lose"),r=document.querySelectorAll(".message-win"),n=document.querySelector(".game-score");function o(){n.textContent=i.getScore()}a.addEventListener("click",()=>{a.classList.contains("start")?(i.start(),a.classList="button restart",a.innerHTML="Restart",l.classList.add("hidden"),h.classList.add("hidden"),r.classList.add("hidden"),o()):a.classList.contains("restart")&&(i.restart(),a.classList="button start",a.innerHTML="Start",l.classList.remove("hidden"),h.classList.add("hidden"),r.classList.add("hidden"),o())}),document.addEventListener("keydown",s=>{switch(s.key){case"ArrowLeft":i.moveLeft();break;case"ArrowRight":i.moveRight();break;case"ArrowUp":i.moveUp();break;case"ArrowDown":i.moveDown()}o(),i.getStatus()===t(e).STATUS.lose?h.classList.remove("hidden"):i.getStatus()===t(e).STATUS.win&&r.classList.remove("hidden")});
//# sourceMappingURL=index.8d9f4825.js.map
