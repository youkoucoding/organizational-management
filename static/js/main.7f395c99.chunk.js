(this["webpackJsonporganizational-management"]=this["webpackJsonporganizational-management"]||[]).push([[0],{43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s,n=a(2),r=a(24),i=a.n(r),c=(a(43),a(8)),l=a(5),o=a(3);!function(e){e.FetchDataSuccess="FETCH_DATA_SUCCESS",e.FetchDataFailure="FETCH_DATA_FAILURE",e.EditMember="EDIT_MEMBER",e.AddMember="ADD_MEMBER",e.DeleteMember="DELETE_MEMBER",e.AddOrg="ADD_ORGANIZATION",e.EditOrg="EDIT_ORGANIZATION"}(s||(s={}));var d=a(20),m=a.n(d),b={status:"isLoading",error:void 0,data:[]},u=function(e,t){switch(t.type){case s.FetchDataSuccess:return Object(o.a)(Object(o.a)({},e),{},{status:"success",error:"",data:t.payload});case s.FetchDataFailure:return Object(o.a)(Object(o.a)({},e),{},{status:"failure",error:t.payload,data:[]});case s.DeleteMember:return Object(o.a)(Object(o.a)({},e),{},{data:e.data.map((function(e){var a;return Object(o.a)(Object(o.a)({},e),{},{members:null===(a=e.members)||void 0===a?void 0:a.filter((function(e){return e.id!==t.payload.id}))})}))});case s.EditMember:return Object(o.a)(Object(o.a)({},e),{},{data:e.data.map((function(e){var a;return Object(o.a)(Object(o.a)({},e),{},{members:null===(a=e.members)||void 0===a?void 0:a.map((function(a,s){return a.id===t.payload.id?e.members[s]=t.payload:e.members[s]}))})}))});case s.AddMember:var a=function(e){var t=Object(l.a)(e.data),a=m.a.findLast(t,(function(e){var t;return(null===(t=e.members)||void 0===t?void 0:t.length)>0})),s=m.a.last(null===a||void 0===a?void 0:a.members);return(null===s||void 0===s?void 0:s.id)?s.id:s}(e).match(/\d+.?\d+?$/),n=a?a[0]:a,r="member-"+(n?Number(n)+1:null);return Object(o.a)(Object(o.a)({},e),{},{data:e.data.map((function(e){var a;return Object(o.a)(Object(o.a)({},e),{},{members:e.id===t.payload.org_id?null===(a=e.members)||void 0===a?void 0:a.concat([Object(o.a)(Object(o.a)({},t.payload.data),{},{id:r})]):e.members})}))});case s.AddOrg:var i=function(e){var t=Object(l.a)(e.data),a=m.a.last(t);return null===a||void 0===a?void 0:a.id}(e).match(/\d+.?\d+?$/),c=i?i[0]:i,d="org-"+(c?Number(c)+1:c);return Object(o.a)(Object(o.a)({},e),{},{data:[].concat(Object(l.a)(e.data),[{name:d,id:d,type:"organization",parent:null,representation:"",members:[]}])});case s.EditOrg:return Object(o.a)(Object(o.a)({},e),{},{data:e.data.map((function(e){return e.id===t.payload.id?Object(o.a)(Object(o.a)({},e),{},{name:t.payload.name,representation:t.payload.representation}):e}))});default:return e}},j=n.createContext({state:b,dispatch:function(){}}),x=a(13),h=a(1),p=function(e){var t=e.showChildren;return Object(h.jsxs)("button",{className:"relative group",children:[Object(h.jsx)("div",{className:"".concat(t?"rotate-90":null," cursor-pointer transform duration-300 hover:scale-110 hover:text-gray-500 text-gray-600 ml-3 pl-1"),children:Object(h.jsx)(x.a,{size:32})}),Object(h.jsx)("span",{className:"".concat(t?null:"group-hover:visible"," absolute text-gray-700 bg-gray-200 ring-1 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-6 left-3 top-10 rounded-md"),children:"Show Sub Organization"})]})},f=function(){return Object(h.jsx)("button",{className:"relative group",children:Object(h.jsxs)("div",{className:"transform duration-300 hover:scale-110 hover:text-green-500 text-green-600 ml-3 pl-1",children:[Object(h.jsx)(x.g,{size:32}),Object(h.jsx)("span",{className:"group-hover:visible w-48 mx-6 py-3 absolute text-center text-gray-700 bg-gray-200 ring-1 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-6 left-3 top-8 rounded-md",children:"Add New Member"})]})})},g=a(38),O=function(){return Object(h.jsxs)("button",{className:"relative group",children:[Object(h.jsx)("div",{className:"transform duration-300 hover:scale-110 hover:text-gray-600 text-gray-700 pl-1",children:Object(h.jsx)(g.a,{size:36})}),Object(h.jsx)("span",{className:"group-hover:visible w-56 mx-2 py-3 absolute text-center text-gray-700 bg-gray-200 ring-1 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-3 left-10 top-0 rounded-md",children:"Add New Organization"})]})},y=a(68),v=a(67),w=a(26),N=function(e){var t=e.showAddOrgModal,a=e.setShowAddOrgModal,r=n.useContext(j).dispatch,i=n.useRef(null);return Object(h.jsx)(y.a.Root,{show:t,as:n.Fragment,children:Object(h.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:i,onClose:a,children:Object(h.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(h.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(h.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(h.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(h.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(h.jsxs)("div",{className:"sm:flex sm:items-start py-3 px-1",children:[Object(h.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10",children:Object(h.jsx)(w.b,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),Object(h.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(h.jsx)(v.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Add New Sub Organization"}),Object(h.jsx)("div",{className:"mt-2",children:Object(h.jsx)("p",{className:"text-sm text-gray-500",children:"Are you sure you want to add a new sub Organization? This action cannot be undone."})})]})]})}),Object(h.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(h.jsx)("button",{type:"submit",className:"w-full inline-flex uppercase tracking-wide justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return r({type:s.AddOrg}),void a(!1)},children:"Add first Class Organization"}),Object(h.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex uppercase tracking-wide justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return a(!1)},ref:i,children:"Cancel"})]})]})})]})})})},k=function(){var e=n.useState(!1),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(h.jsx)("nav",{className:"md:flex hidden bg-gray-400 rounded-b-sm fixed top-0 w-full z-10 shadow md:flex-row md:flex-nowrap md:justify-start items-center px-2 py-1",children:Object(h.jsxs)("div",{className:"w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap px-4",children:[Object(h.jsx)("div",{className:"text-xl hidden lg:inline-block font-semibold",children:"Organization DashBoard"}),Object(h.jsx)("div",{onClick:function(){return s(!a)},className:"mx-6",children:Object(h.jsx)(O,{})}),Object(h.jsx)(N,{showAddOrgModal:a,setShowAddOrgModal:s}),Object(h.jsx)("div",{className:"md:flex hidden flex-row items-center lg:ml-auto mr-3",children:Object(h.jsx)("div",{className:"relative flex w-full flex-wrap items-stretch h-6"})})]})})},F=function(e){var t=e.onClick,a=e.children;return Object(h.jsx)("button",{onClick:t,className:"text-dark-700 dark:text-light-300hover:text-dark-300 dark:hover:text-light-500 text-sm font-semibold block py-1 px-3",children:a})},C=function(){return Object(h.jsx)("footer",{className:"sticky bg-gray-400 shadow-lg dark:bg-dark-700 bottom-0 block py-2 rounded-t-sm",children:Object(h.jsx)("div",{className:"container mx-auto",children:Object(h.jsxs)("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:[Object(h.jsx)("div",{className:"w-full md:w-4/12 px-4",children:Object(h.jsxs)("div",{className:"text-sm text- font-semibold py-1 text-center md:text-left",children:["Copyright \xa9 ",(new Date).getFullYear(),Object(h.jsx)("a",{href:"/",className:"text-dark-700 dark:text-light-300 hover:text-dark-300 dark:hover:text-light-500 text-sm font-semibold p-1",children:"Organizational Management"})]})}),Object(h.jsx)("div",{className:"w-full md:w-8/12 px-4 mt-2 md:mt-0",children:Object(h.jsxs)("ul",{className:"flex flex-wrap list-none md:justify-end justify-center",children:[Object(h.jsx)("li",{children:Object(h.jsx)(F,{onClick:function(){return alert("Thank you")},children:Object(h.jsx)(x.d,{size:20})})}),Object(h.jsx)("li",{children:Object(h.jsx)(F,{onClick:function(){return alert("Thank you")},children:Object(h.jsx)(x.f,{size:20})})})]})})]})})})},M=a(28),S=function(){return Object(h.jsx)("aside",{className:"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto shadow-2xl flex flex-col items-center justify-between w-12 z-40 bg-gray-400",children:Object(h.jsxs)("div",{className:"md:flex-col md:items-stretch md:min-h-full px-0 flex items-center justify-center w-full mx-auto",children:[Object(h.jsx)("a",{href:"/",className:"flex item-center justify-center py-2 cursor-pointer",children:Object(h.jsx)(x.b,{size:32})}),Object(h.jsxs)("div",{className:"md:flex md:flex-col md:items-stretch md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded",children:[Object(h.jsx)(T,{icon:Object(h.jsx)(x.e,{size:24})}),Object(h.jsx)(T,{icon:Object(h.jsx)(M.b,{size:24})}),Object(h.jsx)(T,{icon:Object(h.jsx)(M.a,{size:24})})]})]})})},T=function(e){var t=e.icon;return Object(h.jsx)("div",{className:"sidebar-icon",children:t})},A=function(e){var t=e.renderData;return Object(h.jsx)("div",{className:"flex flex-row mx-6 mt-8 px-3 py-4 pb-6 bg-gray-200 rounded-lg shadow-md border-1 border-gray-200",children:Object(h.jsx)(J,{renderData:t})})},z=a(18),D=function(e){var t,a=e.showMemberModal,r=e.setShowMemberModal,i=e.org_id,c=n.useContext(j).dispatch,l=Object(z.a)({defaultValues:{id:void 0,name:"member_name",age:30,status:"activated"}}),d=l.register,m=l.handleSubmit,b=l.formState.errors,u=n.useRef(null);return Object(h.jsx)(y.a.Root,{show:a,as:n.Fragment,children:Object(h.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:u,onClose:r,children:Object(h.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(h.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(h.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(h.jsx)("div",{className:"inline-block align-bottom bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:Object(h.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:Object(h.jsxs)("form",{onSubmit:m((function(e){r(!1),c({type:s.AddMember,payload:{data:e,org_id:i}})})),children:[Object(h.jsxs)("div",{className:"px-4 py-5 bg-white sm:p-6 font-medium",children:["You Are Adding New Member to organization"," ",Object(h.jsx)("span",{className:"font-mono font-semibold text-green-600",children:i})]}),Object(h.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(h.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:Object(h.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(h.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(h.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"required"===(null===(t=b.name)||void 0===t?void 0:t.type)?Object(h.jsx)("span",{className:"text-red-500 font-medium",children:"Name is required"}):"Name"}),Object(h.jsx)("input",Object(o.a)(Object(o.a)({type:"text",id:"name"},d("name",{required:!0,maxLength:20})),{},{className:"mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}))]}),Object(h.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(h.jsx)("label",{htmlFor:"age",className:"block text-sm font-medium text-gray-700",children:b.age?Object(h.jsx)("span",{className:"text-red-500 font-medium",children:"Need to be above 18 below 99"}):"Age"}),Object(h.jsx)("input",Object(o.a)(Object(o.a)({type:"number",id:"age"},d("age",{required:!0,min:18,max:99})),{},{className:"mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}))]}),Object(h.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(h.jsx)("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700",children:"Status"}),Object(h.jsxs)("select",Object(o.a)(Object(o.a)({id:"status"},d("status")),{},{className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm",children:[Object(h.jsx)("option",{value:"activated",children:"Activated"}),Object(h.jsx)("option",{value:"inactivated",children:"Inactivated"})]}))]})]})}),Object(h.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:Object(h.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Add New Member"})})]})]})})})})]})})})},E=function(e){var t=e.title;return Object(h.jsx)("div",{className:"px-4 rounded-t-sm align-baseline font-bold text-2xl",children:t})},R=function(){return Object(h.jsxs)("tr",{className:"w-full grid grid-cols-9 gap-12  uppercase tracking-wider text-gray-50",children:[Object(h.jsx)("th",{scope:"col",className:"col-span-2 px-3 py-3 text-xs font-medium",children:"name"}),Object(h.jsx)("th",{scope:"col",className:"col-span-1 px-3 py-3 text-xs font-semibold",children:"age"}),Object(h.jsx)("th",{scope:"col",className:"col-span-2 px-3 py-3 text-xs font-semibold",children:"actived"}),Object(h.jsx)("th",{scope:"col",className:"col-span-2 px-3 py-3 text-xs font-semibold",children:"representation"}),Object(h.jsx)("th",{scope:"col",className:"col-span-2 px-3 py-3 text-xs font-semibold",children:"action"})]})},_=function(e){var t=e.showDeleteConfirm,a=e.setShowDeleteConfirm,r=e.id,i=n.useContext(j).dispatch,c=n.useRef(null);return Object(h.jsx)(y.a.Root,{show:t,as:n.Fragment,children:Object(h.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:c,onClose:a,children:Object(h.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(h.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(h.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(h.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(h.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(h.jsxs)("div",{className:"sm:flex sm:items-start py-3 px-1",children:[Object(h.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:Object(h.jsx)(w.a,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),Object(h.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(h.jsx)(v.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Delete Member"}),Object(h.jsx)("div",{className:"mt-2",children:Object(h.jsx)("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete this member?"})})]})]})}),Object(h.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(h.jsx)("button",{type:"submit",className:"w-full inline-flex uppercase tracking-wide justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return function(e){i({type:s.DeleteMember,payload:{id:e}}),a(!1)}(r)},children:"Delete"}),Object(h.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex uppercase tracking-wide justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return a(!1)},ref:c,children:"Cancel"})]})]})})]})})})},I=function(e){var t,a=e.showMemberModal,r=e.setShowMemberModal,i=e.member,c=n.useContext(j).dispatch,l=Object(z.a)({defaultValues:{id:i.id,name:i.name,age:i.age,status:i.status}}),d=l.register,m=l.handleSubmit,b=l.formState.errors,u=n.useRef(null);return Object(h.jsx)(y.a.Root,{show:a,as:n.Fragment,children:Object(h.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:u,onClose:r,children:Object(h.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(h.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(h.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(h.jsx)("div",{className:"inline-block align-bottom bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:Object(h.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:Object(h.jsxs)("form",{onSubmit:m((function(e){r(!1),c({type:s.EditMember,payload:e})})),children:[Object(h.jsxs)("div",{className:"px-4 py-5 bg-white sm:p-6 font-medium",children:["Editing member is ",": ",Object(h.jsx)("span",{className:"text-lg",children:i.id})]}),Object(h.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(h.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:Object(h.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(h.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(h.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"required"===(null===(t=b.name)||void 0===t?void 0:t.type)?Object(h.jsx)("span",{className:"text-red-500 font-medium",children:"Name is required"}):"Name"}),Object(h.jsx)("input",Object(o.a)(Object(o.a)({type:"text",id:"name"},d("name",{required:!0,maxLength:20})),{},{className:"mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}))]}),Object(h.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(h.jsx)("label",{htmlFor:"age",className:"block text-sm font-medium text-gray-700",children:b.age?Object(h.jsx)("span",{className:"text-red-500 font-medium",children:"Need to be above 18 below 99"}):"Age"}),Object(h.jsx)("input",Object(o.a)(Object(o.a)({type:"number",id:"age"},d("age",{required:!0,min:18,max:100})),{},{className:"mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}))]}),Object(h.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(h.jsx)("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700",children:"Status"}),Object(h.jsxs)("select",Object(o.a)(Object(o.a)({id:"status"},d("status")),{},{className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm",children:[Object(h.jsx)("option",{value:"activated",children:"Activated"}),Object(h.jsx)("option",{value:"inactivated",children:"Inactivated"})]}))]})]})}),Object(h.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:Object(h.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Save"})})]})]})})})})]})})})},q=function(e){var t,a=e.member,s=e.representation,r=n.useState(!1),i=Object(c.a)(r,2),l=i[0],o=i[1],d=n.useState(!1),m=Object(c.a)(d,2),b=m[0],u=m[1];return Object(h.jsxs)("tr",{className:"w-full grid grid-cols-9 gap-10 even:bg-gray-200",children:[Object(h.jsx)("td",{className:"col-span-2 px-3 py-4 whitespace-nowrap ",children:Object(h.jsx)("p",{className:"flex items-center justify-center text-gray-600 font-medium",children:a.name})}),Object(h.jsx)("td",{className:"col-span-1 px-3 py-4 whitespace-nowrap",children:Object(h.jsx)("p",{className:"flex items-center justify-center text-gray-600 font-medium",children:a.age})}),Object(h.jsx)("td",{className:"col-span-2 px-3 py-4 whitespace-nowrap",children:Object(h.jsx)("p",{className:"flex items-center justify-center text-gray-600 font-medium",children:"activated"===(null===(t=a.status)||void 0===t?void 0:t.toLowerCase())?Object(h.jsx)("span",{className:"bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium",children:"activated"}):Object(h.jsx)("span",{className:"bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium",children:"inactivated"})})}),Object(h.jsx)("td",{className:"col-span-2 px-3 py-4 whitespace-nowrap",children:Object(h.jsx)("p",{className:"flex items-center justify-center text-gray-600 font-medium",children:s===a.id?Object(h.jsx)("span",{className:"text-blue-600",children:"representation"}):"member"})}),Object(h.jsx)("td",{className:"col-span-2 px-3 py-4 whitespace-nowrap",children:Object(h.jsxs)("div",{className:"flex flex-row space-x-6 items-center justify-center",children:[Object(h.jsx)("button",{className:"transform hover:scale-110 transition-all duration-300 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm uppercase tracking-wide font-medium",type:"button",onClick:function(){return u(!0)},children:"edit"}),Object(h.jsx)("button",{className:"transform hover:scale-110 transition-all duration-300 bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm uppercase tracking-wide font-medium",type:"button",onClick:function(){return o(!0)},children:"delete"}),Object(h.jsx)(I,{showMemberModal:b,setShowMemberModal:u,member:a}),Object(h.jsx)(_,{showDeleteConfirm:l,setShowDeleteConfirm:o,id:a.id})]})})]})},L=function(){return Object(h.jsxs)("button",{className:"relative group",children:[Object(h.jsx)("div",{className:"transform duration-300 hover:scale-110 hover:text-gray-700 text-gray-600 pl-1",children:Object(h.jsx)(x.c,{size:30})}),Object(h.jsx)("span",{className:"group-hover:visible w-56 mx-2 py-3 absolute text-center text-gray-700 bg-gray-200 ring-1 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-2 -left-60 top-0 rounded-md",children:"Edit Organization Info"})]})},B=function(e){var t,a=e.showEditOrgModal,r=e.setShowEditOrgModal,i=e.editable_org,c=n.useContext(j).dispatch,l=Object(z.a)({defaultValues:{id:i.id,name:i.name,representation:i.representation,members:i.members}}),d=l.register,m=l.handleSubmit,b=l.formState.errors,u=n.useRef(null);return Object(h.jsx)(y.a.Root,{show:a,as:n.Fragment,children:Object(h.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:u,onClose:r,children:Object(h.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(h.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(h.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(h.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(h.jsx)("div",{className:"inline-block align-bottom bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:Object(h.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:Object(h.jsxs)("form",{onSubmit:m((function(e){r(!1),c({type:s.EditOrg,payload:e})})),children:[Object(h.jsxs)("div",{className:"px-4 py-5 bg-white sm:p-6 font-medium",children:["The organization id you are modifying is\uff1a",Object(h.jsx)("span",{className:"font-bold text-lg",children:i.id})]}),Object(h.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(h.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:Object(h.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(h.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(h.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"required"===(null===(t=b.name)||void 0===t?void 0:t.type)?Object(h.jsx)("span",{className:"text-red-500 font-medium",children:"Name is required"}):"Name"}),Object(h.jsx)("input",Object(o.a)(Object(o.a)({type:"text",id:"name"},d("name",{required:!0,maxLength:30})),{},{className:"mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}))]}),Object(h.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(h.jsx)("label",{htmlFor:"reperesentation",className:"block text-sm font-medium text-gray-700",children:"Representation"}),Object(h.jsx)("select",Object(o.a)(Object(o.a)({id:"representation"},d("representation")),{},{className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm",children:i.members.map((function(e){return"activated"===e.status?Object(h.jsx)("option",{value:e.name,children:e.name},e.id+e.age):null}))}))]})]})}),Object(h.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:Object(h.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Confirm"})})]})]})})})})]})})})},J=function e(t){var a,s=t.renderData,r=n.useState(!1),i=Object(c.a)(r,2),l=i[0],o=i[1],d=n.useState(!1),m=Object(c.a)(d,2),b=m[0],u=m[1],j=n.useState(!1),x=Object(c.a)(j,2),g=x[0],O=x[1],y=n.useCallback((function(){o(!l)}),[l,o]),v=n.useCallback((function(){u(!b)}),[b,u]),w=n.useCallback((function(){O(!g)}),[g,O]),N=s.children.map((function(t){return Object(h.jsx)("div",{className:"relative flex flex-col border-l-4",children:Object(h.jsx)("div",{className:"ml-14 mt-2",children:Object(h.jsx)(e,{renderData:t})})},t.id+t.parent)}));return Object(h.jsx)("div",{className:"w-full pt-1",children:Object(h.jsxs)("div",{className:"mx-4 sm:mx-6 lg:mx-1",children:[Object(h.jsxs)("div",{className:"min-w-full sm:px-6 lg:px-2",children:[Object(h.jsxs)("div",{className:"shadow border border-gray-300 sm:rounded-lg",children:[Object(h.jsxs)("div",{className:"flex items-center justify-between bg-gray-300",children:[Object(h.jsxs)("div",{className:"flex flex-row gap-3 item-center justify-center py-3",children:[Object(h.jsx)("div",{onClick:y,children:0!==s.children.length?Object(h.jsx)(p,{showChildren:l}):null}),Object(h.jsx)(E,{title:s.name}),Object(h.jsx)("div",{onClick:v,children:Object(h.jsx)(f,{})})]}),Object(h.jsx)("div",{onClick:w,className:"flex flex-row px-6",children:Object(h.jsx)(L,{})})]}),Object(h.jsxs)("table",{className:"h-56 rounded-t-xl min-w-full divide-y divide-gray-500 bg-white",children:[Object(h.jsx)("thead",{className:"bg-gray-400 flex-col min-w-full",children:Object(h.jsx)(R,{})}),Object(h.jsx)("tbody",{className:"flex flex-col divide-y divide-gray-200",children:null===(a=s.members)||void 0===a?void 0:a.map((function(e){return Object(h.jsx)(n.Fragment,{children:Object(h.jsx)(q,{member:e,representation:s.representation})},e.id+e.age)}))})]}),Object(h.jsx)("div",{className:"sticky bottom-0 py-2 rounded-b-lg bg-gray-300"})]}),Object(h.jsx)(D,{showMemberModal:b,setShowMemberModal:u,org_id:s.name}),Object(h.jsx)(B,{showEditOrgModal:g,setShowEditOrgModal:O,editable_org:{name:s.name,id:s.id,representation:s.representation,members:s.members}})]}),Object(h.jsx)("div",{className:"".concat(l?"block":"hidden"," transition-all duration-1000"),children:N})]})})},P=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.filter((function(e){return e.parent===a})).map((function(a){return Object(o.a)(Object(o.a)({},a),{},{children:e(t,a.id)})}))},V=function(){var e=n.useContext(j).state.data,t=n.useState([]),a=Object(c.a)(t,2),s=a[0],r=a[1];return n.useEffect((function(){r(P(e))}),[e]),Object(h.jsx)(n.Fragment,{children:0!==s.length&&s.map((function(e){return Object(h.jsx)(n.Fragment,{children:Object(h.jsx)(A,{renderData:e})},e.id+e.name)}))})},G=function(e){var t=e.children,a=n.useContext(j).state;return"isLoading"===a.status||"failure"===a.status?null:Object(h.jsx)("main",{className:"pt-9",children:t})},H=function(e){var t=e.children;return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(S,{}),Object(h.jsxs)("div",{className:"md:ml-12 bg-light-500 dark:bg-dark-500 h-screen overflow-auto",children:[Object(h.jsx)(k,{}),Object(h.jsx)("div",{className:"w-full min-h-full space-y-4 bg-gray-50",children:t}),Object(h.jsx)(C,{})]})]})},U=a(29),Y=a.n(U),Z=function(e,t,a){return Number(a)>=200&&Number(a)<400?e({type:s.FetchDataSuccess,payload:t}):e({type:s.FetchDataFailure,payload:t})},$="https://my-json-server.typicode.com/youkoucoding/json_data_mock",K=function(e){var t=e.children,a=n.useReducer(u,b),s=Object(c.a)(a,2),r=s[0],i=s[1],d=function(){Promise.all([Y.a.get("".concat($,"/organizations")),Y.a.get("".concat($,"/members"))]).then((function(e){var t=function(e,t){for(var a=Object(l.a)(e),s=Object(l.a)(t),n=function(e){var t=a[e].members;if(t)for(var n=function(e){var a=s.filter((function(a){return a.id===t[e]}));a[0]&&(t[e]=a[0])},r=0;r<t.length;r++)n(r);else a[e]=Object(o.a)(Object(o.a)({},a[e]),{},{members:[]})},r=0;r<a.length;r++)n(r);return a}(e[0].data,e[1].data),a=JSON.parse(JSON.stringify(t));Z(i,a,e[0].status)})).catch((function(e){Z(i,e)}))};return n.useEffect((function(){d()}),[]),Object(h.jsx)(j.Provider,{value:{state:r,dispatch:i},children:t})};var Q=function(){return Object(h.jsx)(K,{children:Object(h.jsx)(H,{children:Object(h.jsx)(G,{children:Object(h.jsx)(V,{})})})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(n.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),W()}},[[66,1,2]]]);
//# sourceMappingURL=main.7f395c99.chunk.js.map