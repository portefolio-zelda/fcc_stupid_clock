(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{19:function(t,e,n){t.exports=n(31)},20:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);n(20);var a=n(1),s=n.n(a),i=n(15),r=n.n(i),l=n(5),c=n(6),o=n(9),u=n(8),h=n(10),m=n.n(h),p=n(44),b=n(45),v=n(11),d=n(42),E=n(43),f=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"increment",value:function(){var t=this.props.value+1;this.props.setState(Object(v.a)({},this.props.connect,t)),this.updateTime(t)}},{key:"decrement",value:function(){if(this.props.value-1>0){var t=this.props.value-1;this.props.setState(Object(v.a)({},this.props.connect,t)),this.updateTime(t)}}},{key:"updateTime",value:function(t){"sessionLength"===this.props.connect&&this.props.setState({time:60*t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"inputs"},s.a.createElement("p",null,this.props.label),s.a.createElement("button",{onClick:this.increment.bind(this)},s.a.createElement(d.a,null)),s.a.createElement("p",null,this.props.value),s.a.createElement("button",{onClick:this.decrement.bind(this)},s.a.createElement(E.a,null)))}}]),n}(s.a.Component),k=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this)).state={sessionLength:25,breakLength:5,time:1500,timer:null},a}return Object(c.a)(n,[{key:"startStop",value:function(){var t=this;null!==this.state.timer?(window.clearInterval(this.state.timer),this.setState({timer:null})):this.setState({timer:window.setInterval((function(){0===t.state.time?t.setState({time:60*t.state.breakLength}):t.setState({time:--t.state.time})}),1e3)})}},{key:"formatTime",value:function(t){var e=parseInt(t/60),n=t-60*e;return e+":"+(n>9?n:"0"+n)}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(f,{label:"Break Length",value:this.state.breakLength,connect:"breakLength",setState:this.setState.bind(this)}),s.a.createElement(f,{label:"Session Length",value:this.state.sessionLength,connect:"sessionLength",setState:this.setState.bind(this)}),s.a.createElement("p",null,this.formatTime(this.state.time)),s.a.createElement("div",{className:"countdown-buttons"},s.a.createElement("button",{onClick:this.startStop.bind(this)},s.a.createElement(p.a,null),s.a.createElement(b.a,null)),s.a.createElement("button",null,s.a.createElement(m.a,null))))}}]),n}(s.a.Component);r.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f334cf52.chunk.js.map