(this["webpackJsonporganizational-management"]=this["webpackJsonporganizational-management"]||[]).push([[0],{39:function(e,t,s){},59:function(e,t,s){"use strict";s.r(t);var a,n=s(2),r=s(17),c=s.n(r),i=(s(39),s(9));!function(e){e.FetchDataSuccess="FETCH_DATA_SUCCESS",e.FetchDataFailure="FETCH_DATA_FAILURE"}(a||(a={}));var l={status:"isLoading",error:void 0,data:[]},o=function(e,t){switch(t.type){case a.FetchDataSuccess:return Object(i.a)(Object(i.a)({},e),{},{status:"success",error:"",data:t.payload});case a.FetchDataFailure:return Object(i.a)(Object(i.a)({},e),{},{status:"failure",error:t.payload,data:[]});default:return e}},d=n.createContext({state:l,dispatch:function(){}}),m=s(1),j=function(){return Object(m.jsx)("nav",{className:"md:flex hidden bg-gray-400 rounded-b-sm sticky top-0 w-full z-10 shadow md:flex-row md:flex-nowrap md:justify-start items-center p-2",children:Object(m.jsxs)("div",{className:"w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap px-4",children:[Object(m.jsx)("div",{className:"text-xl hidden lg:inline-block font-semibold",children:"Organization DashBoard"}),Object(m.jsx)("div",{className:"md:flex hidden flex-row items-center lg:ml-auto mr-3",children:Object(m.jsx)("div",{className:"relative flex w-full flex-wrap items-stretch h-8"})})]})})},x=function(e){var t=e.onClick,s=e.children;return Object(m.jsx)("button",{onClick:t,className:"text-dark-700 dark:text-light-300hover:text-dark-300 dark:hover:text-light-500 text-sm font-semibold block py-1 px-3",children:s})},u=s(10),b=function(){return Object(m.jsx)("footer",{className:"sticky bg-gray-400 shadow-lg dark:bg-dark-700 bottom-0 block py-3 rounded-t-sm",children:Object(m.jsx)("div",{className:"container mx-auto",children:Object(m.jsxs)("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:[Object(m.jsx)("div",{className:"w-full md:w-4/12 px-4",children:Object(m.jsxs)("div",{className:"text-sm text- font-semibold py-1 text-center md:text-left",children:["Copyright \xa9 ",(new Date).getFullYear(),Object(m.jsx)("a",{href:"/",className:"text-dark-700 dark:text-light-300 hover:text-dark-300 dark:hover:text-light-500 text-sm font-semibold p-1",children:"Organizational Management"})]})}),Object(m.jsx)("div",{className:"w-full md:w-8/12 px-4 mt-2 md:mt-0",children:Object(m.jsxs)("ul",{className:"flex flex-wrap list-none md:justify-end justify-center",children:[Object(m.jsx)("li",{children:Object(m.jsx)(x,{onClick:function(){return alert("Thank you")},children:Object(m.jsx)(u.c,{size:20})})}),Object(m.jsx)("li",{children:Object(m.jsx)(x,{onClick:function(){return alert("Thank you")},children:Object(m.jsx)(u.e,{size:20})})})]})})]})})})},h=s(21),p=function(){return Object(m.jsx)("aside",{className:"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto shadow-2xl flex flex-col items-center justify-between w-12 z-40 bg-gray-400",children:Object(m.jsxs)("div",{className:"md:flex-col md:items-stretch md:min-h-full px-0 flex items-center justify-center w-full mx-auto",children:[Object(m.jsx)("a",{href:"/",className:"flex item-center justify-center py-2 cursor-pointer",children:Object(m.jsx)(u.b,{size:32})}),Object(m.jsxs)("div",{className:"md:flex md:flex-col md:items-stretch md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded",children:[Object(m.jsx)(f,{icon:Object(m.jsx)(u.d,{size:24})}),Object(m.jsx)(f,{icon:Object(m.jsx)(h.b,{size:24})}),Object(m.jsx)(f,{icon:Object(m.jsx)(h.a,{size:24})})]})]})})},f=function(e){var t=e.icon;return Object(m.jsx)("div",{className:"sidebar-icon",children:t})},g=function(e){var t=e.showChildren;return Object(m.jsxs)("div",{className:"relative group",children:[Object(m.jsx)("div",{className:"".concat(t?"rotate-90":null," cursor-pointer transform duration-300 hover:scale-110 hover:text-gray-500 text-gray-600 ml-3 pl-1"),children:Object(m.jsx)(u.a,{size:32})}),Object(m.jsx)("span",{className:"".concat(t?null:"group-hover:visible"," absolute text-gray-700 bg-gray-200 ring-2 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-6  left-9 -top-14 rounded-md"),children:"Show Sub Organization"})]})},y=function(){return Object(m.jsx)("div",{className:"relative group",children:Object(m.jsxs)("div",{className:"transform duration-300 hover:scale-110 hover:text-green-500 text-green-600 ml-3 pl-1",children:[Object(m.jsx)(u.f,{size:32}),Object(m.jsx)("span",{className:"group-hover:visible w-48 mx-6 py-3 absolute text-center text-gray-700 bg-gray-200 ring-2 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-6  left-6 -top-8 rounded-md",children:"Add New Member"})]})})},O=s(32),v=function(){return Object(m.jsxs)("div",{className:"relative group",children:[Object(m.jsx)("div",{className:"transform duration-300 hover:scale-110 hover:text-green-500 text-green-600 pl-1",children:Object(m.jsx)(O.a,{size:42})}),Object(m.jsx)("span",{className:"group-hover:visible w-48 mx-6 py-3 absolute text-center text-gray-700 bg-gray-200 ring-2 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-6  left-0 -top-14 rounded-md",children:"Add New Member"})]})},w=function(e){var t=e.renderData;return Object(m.jsxs)("div",{className:"flex flex-row mx-3 my-2 mt-6 p-4 mb-12 bg-gray-200 rounded-lg",children:[Object(m.jsx)("div",{className:"mt-6",children:Object(m.jsx)(v,{})}),Object(m.jsx)(A,{renderData:t})]})},N=s(13),k=function(e){var t=e.title;return Object(m.jsx)("div",{className:"py-3 px-4 rounded-t-sm align-baseline font-semibold text-2xl",children:t})},C=function(){return Object(m.jsxs)("tr",{className:"w-full grid grid-cols-9 gap-12",children:[Object(m.jsx)("th",{scope:"col",className:"col-span-2 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider",children:"name"}),Object(m.jsx)("th",{scope:"col",className:"col-span-1 px-3 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider",children:"age"}),Object(m.jsx)("th",{scope:"col",className:"col-span-2 px-3 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider",children:"actived"}),Object(m.jsx)("th",{scope:"col",className:"col-span-2 px-3 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider",children:"representation"}),Object(m.jsx)("th",{scope:"col",className:"col-span-2 px-3 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider",children:"action"})]})},F=s(61),S=s(60),D=s(33),z=function(e){var t=e.showDeleteConfirm,s=e.setShowDeleteConfirm,a=n.useRef(null);return Object(m.jsx)(F.a.Root,{show:t,as:n.Fragment,children:Object(m.jsx)(S.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:a,onClose:s,children:Object(m.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(m.jsx)(F.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(m.jsx)(S.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(m.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(m.jsx)(F.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(m.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(m.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(m.jsxs)("div",{className:"sm:flex sm:items-start py-3 px-1",children:[Object(m.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:Object(m.jsx)(D.a,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),Object(m.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(m.jsx)(S.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Delete Member"}),Object(m.jsx)("div",{className:"mt-2",children:Object(m.jsx)("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete this member? This action cannot be undone."})})]})]})}),Object(m.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(m.jsx)("button",{type:"button",className:"w-full inline-flex uppercase tracking-wide justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return s(!1)},children:"Delete"}),Object(m.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex uppercase tracking-wide justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return s(!1)},ref:a,children:"Cancel"})]})]})})]})})})},T=function(e){var t=e.showMemberModal,s=e.setShowMemberModal,a=e.data,r=n.useRef(null);return Object(m.jsx)(F.a.Root,{show:t,as:n.Fragment,children:Object(m.jsx)(S.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:r,onClose:s,children:Object(m.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(m.jsx)(F.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(m.jsx)(S.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(m.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(m.jsx)(F.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(m.jsx)("div",{className:"inline-block align-bottom bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:Object(m.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:Object(m.jsx)("form",{action:"#",method:"POST",children:Object(m.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(m.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:Object(m.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(m.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",id:"name",value:a,autoComplete:"",className:"mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(m.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(m.jsx)("label",{htmlFor:"age",className:"block text-sm font-medium text-gray-700",children:"Age"}),Object(m.jsx)("input",{type:"number",name:"age",id:"age",autoComplete:"",className:"mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(m.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(m.jsx)("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700",children:"Status"}),Object(m.jsxs)("select",{id:"country",name:"country",autoComplete:"country-name",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm",children:[Object(m.jsx)("option",{children:"Activated"}),Object(m.jsx)("option",{children:"Inactivated"})]})]}),Object(m.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(m.jsx)("label",{htmlFor:"role",className:"block text-sm font-medium text-gray-700",children:"Role"}),Object(m.jsxs)("select",{id:"role",name:"role",autoComplete:"",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm",children:[Object(m.jsx)("option",{children:"Member"}),Object(m.jsx)("option",{children:"Representation"})]})]})]})}),Object(m.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:Object(m.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Save"})})]})})})})})]})})})},M=function(e){var t=e.member,s=n.useState(!1),a=Object(N.a)(s,2),r=a[0],c=a[1],i=n.useState(!1),l=Object(N.a)(i,2),o=l[0],d=l[1];return Object(m.jsxs)("tr",{className:"w-full grid grid-cols-9 gap-12 bg-gray-50",children:[Object(m.jsx)("td",{className:"col-span-2 px-3 py-4 whitespace-nowrap ",children:Object(m.jsx)("p",{className:"flex items-center justify-center text-gray-500 font-medium",children:t.name})}),Object(m.jsx)("td",{className:"col-span-1 px-3 py-4 whitespace-nowrap bg-gray-50",children:Object(m.jsx)("p",{className:"flex items-center justify-center text-gray-500 font-medium",children:t.age})}),Object(m.jsx)("td",{className:"col-span-2 px-3 py-4 whitespace-nowrap bg-gray-50",children:Object(m.jsx)("p",{className:"flex items-center justify-center text-gray-500 font-medium",children:t.status})}),Object(m.jsx)("td",{className:"col-span-2 px-3 py-4 whitespace-nowrap bg-gray-50",children:Object(m.jsx)("p",{className:"flex items-center justify-center text-gray-500 font-medium",children:t.name})}),Object(m.jsx)("td",{className:"col-span-2 px-3 py-4 whitespace-nowrap bg-gray-50",children:Object(m.jsxs)("div",{className:"flex flex-row space-x-6 items-center justify-center",children:[Object(m.jsx)("button",{className:"bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium",type:"button",onClick:function(){return d(!0)},children:"edit"}),Object(m.jsx)("button",{className:"bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium",type:"button",onClick:function(){return c(!0)},children:"delete"}),Object(m.jsx)(T,{showMemberModal:o,setShowMemberModal:d,data:"hello"}),Object(m.jsx)(z,{showDeleteConfirm:r,setShowDeleteConfirm:c})]})})]})},A=function e(t){var s,a=t.renderData,r=n.useState(!1),c=Object(N.a)(r,2),i=c[0],l=c[1],o=n.useState(!1),d=Object(N.a)(o,2),j=d[0],x=d[1],u=n.useCallback((function(){l(!i)}),[i,l]),b=n.useCallback((function(){x(!j)}),[j,x]),h=a.children.map((function(t){return Object(m.jsx)("div",{className:"relative flex flex-col border-l-4",children:Object(m.jsx)("div",{className:"ml-12",children:Object(m.jsx)(e,{renderData:t},t.id)})})}));return Object(m.jsx)("div",{className:"w-full pt-3 pb-1",children:Object(m.jsxs)("div",{className:"mx-4 sm:mx-6 lg:mx-1",children:[Object(m.jsxs)("div",{className:"min-w-full sm:px-6 lg:px-2",children:[Object(m.jsxs)("div",{className:"shadow border border-gray-300 sm:rounded-lg",children:[Object(m.jsxs)("div",{className:"flex flex-row gap-3 items-center justify-start bg-gray-300",children:[Object(m.jsx)("div",{onClick:u,children:0!==a.children.length?Object(m.jsx)(g,{showChildren:i}):null}),Object(m.jsx)(k,{title:a.name}),Object(m.jsx)("div",{onClick:b,children:Object(m.jsx)(y,{})})]}),Object(m.jsxs)("table",{className:"h-56 rounded-t-xl min-w-full divide-y divide-gray-300",children:[Object(m.jsx)("thead",{className:"bg-gray-200 flex-col min-w-full",children:Object(m.jsx)(C,{})}),Object(m.jsx)("tbody",{className:"flex flex-col bg-white divide-y divide-gray-200",children:null===(s=a.members)||void 0===s?void 0:s.map((function(e){return Object(m.jsx)(n.Fragment,{children:Object(m.jsx)(M,{member:e})},e.name)}))})]}),Object(m.jsx)("div",{className:"sticky bottom-0 py-1 rounded-b-lg bg-gray-300"})]}),Object(m.jsx)(T,{showMemberModal:j,setShowMemberModal:x})]}),Object(m.jsx)("div",{className:"".concat(i?"block":"hidden"," transition-all duration-1000"),children:h})]})})},R=function e(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.filter((function(e){return e.parent===s})).map((function(s){return Object(i.a)(Object(i.a)({},s),{},{children:e(t,s.id)})}))},E=function(){var e=n.useContext(d).state.data,t=R(e);return Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsx)(w,{renderData:e},e.name)}))})},_=function(e){var t=e.children,s=n.useContext(d).state;return"isLoading"===s.status||"failure"===s.status?null:Object(m.jsx)(n.Fragment,{children:t})},L=function(e){var t=e.children;return Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"md:ml-12 bg-light-500 dark:bg-dark-500 h-screen overflow-auto",children:[Object(m.jsx)(j,{}),Object(m.jsx)("div",{className:"w-full min-h-full space-y-4 bg-gray-50",children:t}),Object(m.jsx)(b,{})]})]})},P=s(22),I=s.n(P),J=function(e,t,s){return Number(s)>=200&&Number(s)<400?e({type:a.FetchDataSuccess,payload:t}):e({type:a.FetchDataFailure,payload:t})},B=s(23),H=function(e,t){for(var s=Object(B.a)(e),a=Object(B.a)(t),n=function(e){var t=s[e].members;if(t)for(var n=function(e){var s=a.filter((function(s){return s.id===t[e]}));s[0]&&(t[e]=s[0])},r=0;r<t.length;r++)n(r);else s[e]=Object(i.a)(Object(i.a)({},s[e]),{},{members:[]})},r=0;r<s.length;r++)n(r);return s},U="https://my-json-server.typicode.com/youkoucoding/json_data_mock",Y=function(e){var t=e.children,s=n.useReducer(o,l),a=Object(N.a)(s,2),r=a[0],c=a[1];return n.useEffect((function(){Promise.all([I.a.get("".concat(U,"/organizations")),I.a.get("".concat(U,"/members"))]).then((function(e){var t=e[0].data,s=e[1].data,a=H(t,s),n=JSON.parse(JSON.stringify(a));J(c,n,e[0].status)})).catch((function(e){J(c,e)}))}),[]),Object(m.jsx)(d.Provider,{value:{state:r,dispatch:c},children:t})};var q=function(){return Object(m.jsx)(Y,{children:Object(m.jsx)(L,{children:Object(m.jsx)(_,{children:Object(m.jsx)(E,{})})})})},G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,62)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(n.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root")),G()}},[[59,1,2]]]);
//# sourceMappingURL=main.2db56a60.chunk.js.map