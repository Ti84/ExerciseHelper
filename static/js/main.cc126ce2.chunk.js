(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(27)},18:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=(n(18),n(1)),l=n(2),s=n(4),m=n(3),u=n(5),f=(n(28),n(26),n(7)),b=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).formatSeconds=function(t){var e=Math.floor(t/60),n=Math.floor(t%60);return n.toString().length<2?"".concat(e,":0").concat(n):"".concat(e,":").concat(n)},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"timer-background"},r.a.createElement("span",{className:"time"},this.formatSeconds(this.props.seconds))))}}]),e}(a.Component),h=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).onClick=function(){n.props.onClick()},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("input",{className:"btn-control",type:"button",onClick:function(){return t.onClick()},value:this.props.label})}}]),e}(a.Component),p=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).playButtonClick=function(){n.setState(Object(f.a)({},n.state,{timerControlText:"Start"===n.state.timerControlText?"Pause":"Start",timerPlaying:!n.state.timerPlaying}),function(){return n.timer(n.state.timeLeft)})},n.setTimeLeft=function(t){n.setState(Object(f.a)({},n.state,{timeLeft:t,timerPlaying:!1,timerControlText:"Start"}),function(){return n.timer(n.state.timeLeft)})},n.setTime=function(t){n.setState(Object(f.a)({},n.state,{timeLeft:t}))},n.timer=function(t){var e,a=Date.now()+1e3*t;n.state.timerPlaying?(e=setInterval(function(){n.state.timeLeft%60===0&&new Audio("https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3").play();var t=Math.round((a-Date.now())/1e3);t<=0?clearInterval(n.state.countDown):n.setTime(t)},1e3),n.setState(Object(f.a)({},n.state,{countDown:e}))):clearInterval(n.state.countDown)},n.state={timerControlText:"Start",timeLeft:1200,timerPlaying:!1},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setTime(this.state.timeLeft)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"timer-page"},r.a.createElement(b,{seconds:this.state.timeLeft}),r.a.createElement("div",{className:"btn-control-nav"},r.a.createElement("div",{className:"time-controls"},r.a.createElement(h,{onClick:function(){return t.setTimeLeft(300)},label:5}),r.a.createElement(h,{onClick:function(){return t.setTimeLeft(600)},label:10}),r.a.createElement(h,{onClick:function(){return t.setTimeLeft(900)},label:15}),r.a.createElement(h,{onClick:function(){return t.setTimeLeft(1200)},label:20})),r.a.createElement("div",{className:"function-controls"},r.a.createElement(h,{onClick:this.playButtonClick,label:this.state.timerControlText}))))}}]),e}(a.Component),v=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.cc126ce2.chunk.js.map