(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],Array(18).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),l=(n(18),n(9)),s=n(2),i=n(1),r=n(5),o=(n(19),n(20),n(0)),u=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),r=Object(s.a)(l,2),u=r[0],j=r[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+u,date:new Date(x)};e.onSaveExpenseData(n),c(""),j(""),v("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{htmlFor:"",children:"Title"}),Object(o.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{htmlFor:"",children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{htmlFor:"",children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:function(){e.onCancle()},children:"Cancle"}),Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})})},j=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(o.jsxs)("div",{className:"new-expense",children:[!a&&Object(o.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(o.jsx)(u,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancle:function(){c(!1)}})]})};n(22),n(23);var d=function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})},b=(n(24),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selectedYear,onChange:function(t){console.log(t.target.value),e.onFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(25);var x=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__day",children:n}),Object(o.jsx)("div",{className:"expense-date__year",children:a})]})};n(26);var v=function(e){return Object(o.jsx)("li",{children:Object(o.jsxs)(d,{className:"expense-item",children:[Object(o.jsx)(x,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("div",{className:"expense-item__price",children:"$"+e.amount})]})]})})},O=(n(27),function(e){return 0===e.item.length?Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"Found no content"}):Object(o.jsx)("ul",{className:"expense-list",children:e.item.map((function(e){return Object(o.jsx)(v,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),h=n(8),m=(n(28),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),p=(n(29),function(e){var t=e.dataPoints.map((function(e){return e.value})).reduce((function(e,t){return e+t}),0);return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(m,{maxValue:t,value:e.value,label:e.label},e.label)}))})}),f=(n(30),function(e){console.log(e.expense);var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expense);try{for(a.s();!(t=a.n()).done;){var c=t.value;console.log(c),n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(o.jsx)(p,{dataPoints:n})});var _=function(e){var t=Object(i.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.data.filter((function(e){return e.date.getYear()===+a-1900}));return Object(o.jsxs)(d,{className:"expenses",children:[Object(o.jsx)(b,{selectedYear:a,onFilter:function(e){c(e)}}),Object(o.jsx)(f,{expense:l}),Object(o.jsx)(O,{item:l})]})},N=(n(31),function(){return console.log("Kuy"),Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("h2",{className:"footer__content",children:"Made by React.JS, Yossavorn Iangleard "})})}),g=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var y=function(){var e=Object(i.useState)(g),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))})),console.log("App"),console.log(e)}}),Object(o.jsx)(_,{data:n}),Object(o.jsx)(N,{})]})};c.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(y,{}))}]),[[32,1,2]]]);
//# sourceMappingURL=main.e6b1ffdc.chunk.js.map