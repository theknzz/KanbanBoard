(this["webpackJsonpreact-dnd-course"]=this["webpackJsonpreact-dnd-course"]||[]).push([[0],{17:function(n,e,t){n.exports=t(31)},22:function(n,e,t){},23:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(4),c=t.n(o),i=(t(22),t(8)),l=t(3),s=t(16),d=t(1),u=(t(23),{tasks:{"task-1":{id:"task-1",content:"Take out the garbage"},"task-2":{id:"task-2",content:"Watch my favourite show"},"task-3":{id:"task-3",content:"Charge my phone"},"task-4":{id:"task-4",content:"Cook diner"},"task-5":{id:"task-5",content:"Go to sleep"},"task-6":{id:"task-6",content:"Read a book"},"task-7":{id:"task-7",content:"Write a book"}},columns:{"column-1":{id:"column-1",title:"To do",taskIds:["task-1","task-2","task-3","task-4"]},"column-2":{id:"column-2",title:"Progress",taskIds:["task-5","task-6"]},"column-3":{id:"column-3",title:"Done",taskIds:["task-7"]}},columnOrder:["column-1","column-2","column-3"]}),g=t(2),m=t(6);function p(){var n=Object(d.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    padding: 9px;\n    margin-bottom: 8px;\n    background-color: ",";\n"]);return p=function(){return n},n}var b=g.a.div(p(),(function(n){return n.isDragging?"lightgreen":"white"})),k=function(n){return r.a.createElement(m.b,{draggableId:n.task.id,index:n.index},(function(e,t){return r.a.createElement(b,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,isDragging:t.isDragging}),n.task.content)}))};function f(){var n=Object(d.a)(["\n    padding: 8px;\n    transition: background-color 0.2s ease;\n    background-color: ",";\n    flex-grow: 1;\n"]);return f=function(){return n},n}function v(){var n=Object(d.a)(["\n    padding: 8px;\n    text-align: center;\n"]);return v=function(){return n},n}function x(){var n=Object(d.a)(["\n    margin: 8px;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    background-color: #9CC5A1;\n"]);return x=function(){return n},n}var h=g.a.div(x()),O=g.a.h3(v()),j=g.a.div(f(),(function(n){return n.isDraggingOver?"skyblue":"white"})),I=function(n){return r.a.createElement(h,null,r.a.createElement(O,null,n.column.title),r.a.createElement(m.c,{droppableId:n.column.id},(function(e,t){return r.a.createElement(j,Object.assign({ref:e.innerRef},e.droppableProps,{isDraggingOver:t.isDraggingOver}),n.tasks.map((function(n,e){return r.a.createElement(k,{key:n.id,task:n,index:e})})),e.placeholder)})))};function E(){var n=Object(d.a)(["\n    color: #9CC5A1;\n    text-shadow: 2px 2px #1F2421;\n"]);return E=function(){return n},n}function w(){var n=Object(d.a)(["\n    display: flex;\n    background-color: #216869;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n    \n"]);return w=function(){return n},n}var y=g.a.div(w()),D=g.a.h1(E()),C=function(n){return r.a.createElement(y,null,r.a.createElement(D,null,"Kanban Board"))};function A(){var n=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]);return A=function(){return n},n}var P=g.a.div(A());var T=function(){var n=Object(a.useState)(u),e=Object(s.a)(n,2),t=e[0],o=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(m.a,{onDragEnd:function(n){var e;console.log(n);var a=n.destination,r=n.source,c=n.draggableId;if(a&&(a.droppableId!==r.droppableId||a.index!==r.index)){var s=t.columns[r.droppableId],d=Array.from(s.taskIds),u=t.columns[a.droppableId],g=Array.from(u.taskIds);d.splice(r.index,1),r.droppableId===a.droppableId&&d.splice(a.index,0,c),g.splice(a.index,0,c);var m=Object(l.a)(Object(l.a)({},s),{},{taskIds:d}),p=Object(l.a)(Object(l.a)({},u),{},{taskIds:g}),b=Object(l.a)(Object(l.a)({},t),{},{columns:Object(l.a)(Object(l.a)({},t.columns),{},(e={},Object(i.a)(e,r.droppableId,m),Object(i.a)(e,a.droppableId,p),e))});o(b),console.log("STATE",b)}}},r.a.createElement(P,null,t.columnOrder.map((function(n){var e=t.columns[n],a=e.taskIds.map((function(n){return t.tasks[n]}));return r.a.createElement(I,{key:e.id,column:e,tasks:a})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9575c18c.chunk.js.map