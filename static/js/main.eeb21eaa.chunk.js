(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(3),i=n.n(r),o=(n(15),n(7)),l=n(4),m=n(5),d=n(6),j=n(9),b=n(8),u=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={element:"",items:[]},e.onChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.setState({element:"",items:[].concat(Object(o.a)(e.state.items),[{element:e.state.element}])})},e.deleteItem=function(t){var n=e.state.items;n.splice(t,1),e.setState({items:n})},e.renderTodo=function(){return e.state.items.map((function(t,n){return Object(c.jsx)("div",{className:"card mb-3",children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("h4",{children:[t.element,Object(c.jsx)("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:function(){return e.deleteItem(n)}})]})})},n)}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)("div",{className:"card my-3",children:[Object(c.jsx)("div",{className:"card-header",children:" To-Do List"}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"element",children:"Chose a faire"}),Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",name:"element",onChange:this.onChange,value:this.state.element})]}),Object(c.jsx)("button",{className:"btn btn-primary btn-block",children:"Ajouter une chose a faire!"})]})})]}),this.renderTodo()]})}}]),n}(a.Component);var h=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(u,{})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.eeb21eaa.chunk.js.map