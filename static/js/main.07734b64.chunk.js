(this["webpackJsonpone-page"]=this["webpackJsonpone-page"]||[]).push([[0],{14:function(e,t,a){e.exports={Photo:"Name_Photo__3iRLk",PrintButton:"Name_PrintButton__1wKQb",Name:"Name_Name__14AuP",ContentPrint:"Name_ContentPrint__1vOW7",Content:"Name_Content__1BpS1"}},17:function(e,t,a){e.exports={Content:"AboutMe_Content__2cyQb",Description:"AboutMe_Description__1j_y0",HeaderPrint:"AboutMe_HeaderPrint__3eDkE",Header:"AboutMe_Header__2KrjA"}},18:function(e,t,a){e.exports={Content:"Achievements_Content__2zOZ9",Description:"Achievements_Description__1X4zx",HeaderPrint:"Achievements_HeaderPrint__3t4Tp",Header:"Achievements_Header__2o2-D",List:"Achievements_List__3Xpha",ListedText:"Achievements_ListedText__1Vyh-"}},19:function(e,t,a){e.exports={Detail:"Detail_Detail__yKh_4",Name:"Detail_Name__2ND9N",Value:"Detail_Value__3M1PE"}},20:function(e,t,a){e.exports={Content:"Skills_Content__2AXYS",Header:"Skills_Header__1_XgD",SkillSet:"Skills_SkillSet__3LHyi",Skill:"Skills_Skill__2MmAP"}},24:function(e,t,a){e.exports={Content:"ContactDetails_Content__2zClf",ContactDetails:"ContactDetails_ContactDetails__22cNo",ContactDetailsPrint:"ContactDetails_ContactDetailsPrint__2ak-u"}},25:function(e,t,a){e.exports={Content:"Experiences_Content__14pUb",Header:"Experiences_Header__2NrLE",Experiences:"Experiences_Experiences__g2G68",MobileDescription:"Experiences_MobileDescription__B8Ouq"}},26:function(e,t,a){e.exports={Description:"Description_Description__3hALL",List:"Description_List__1dyFb",ListedText:"Description_ListedText__1RCtr"}},46:function(e,t,a){e.exports={LeftSide:"LeftSide_LeftSide__1oMwz"}},47:function(e,t,a){e.exports={RightSide:"RightSide_RightSide__VWfQT"}},5:function(e,t,a){e.exports={Headings:"Experience_Headings__26KpL",HeadingList:"Experience_HeadingList__QzL_M",Heading:"Experience_Heading__1bnwp",Selected:"Experience_Selected__cYq4d",Title:"Experience_Title__1L4-R",Company:"Experience_Company__23aAG",Location:"Experience_Location__THpxK",Duration:"Experience_Duration__3KczU",MobileDescription:"Experience_MobileDescription__1QMGm",DescriptionPrint:"Experience_DescriptionPrint__pvbB6",TitlePrint:"Experience_TitlePrint__32nmL",LocationPrint:"Experience_LocationPrint__11svV"}},53:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(21),s=a.n(c),r=(a(53),a(3)),l=a(15),o=a(23),d=a.n(o),j=a(13),x=a(30),b=a.n(x),u=function(e){return{type:"getFeatures",payload:e}},h=function(e){return{type:"init",payload:e}},_=a(17),m=a.n(_),p=a(0),O=function(e){var t=e.data.map((function(e,t){return Object(p.jsx)("p",{className:m.a.Para,children:e},t)}));return Object(p.jsx)("div",{className:m.a.Content,children:Object(p.jsx)("div",{className:m.a.Qualification,children:Object(p.jsx)("div",{className:m.a.Description,children:t})})})},f=a(18),v=a.n(f),N=function(e){var t=e.data.map((function(e,t){return Object(p.jsx)("li",{className:v.a.ListedText,children:e},t)}));return Object(p.jsx)("div",{className:v.a.Content,children:Object(p.jsx)("div",{className:v.a.Qualification,children:Object(p.jsx)("ul",{className:v.a.List,children:t})})})},g=a(24),D=a.n(g),S=a(19),L=a.n(S),C=function(e){var t=Object(p.jsx)("label",{className:L.a.Value,children:e.value});return e.isUrl&&(t=Object(p.jsx)("a",{href:e.value,className:L.a.Value,children:e.displayText})),Object(p.jsxs)("div",{className:L.a.Detail,children:[Object(p.jsx)("label",{className:L.a.Name,children:e.name}),t]})},y=function(e){return Object(p.jsxs)("div",{className:D.a.Content,children:[Object(p.jsxs)("div",{className:D.a.ContactDetails,children:[Object(p.jsx)(C,{name:"Mobile Number :",value:e.data.mobile}),Object(p.jsx)(C,{name:"Email Id :",value:"mailto:".concat(e.data.email),displayText:e.data.email,isUrl:!0}),Object(p.jsx)(C,{name:"Based at :",value:e.data.location}),Object(p.jsx)(C,{name:"Github :",value:e.data.github,displayText:"Github URL",isUrl:!0}),Object(p.jsx)(C,{name:"LinkedIn :",value:e.data.linkedIn,displayText:"LinkedIn URL",isUrl:!0})]}),Object(p.jsxs)("div",{className:D.a.ContactDetailsPrint,children:[Object(p.jsx)(C,{name:"Mobile :",value:e.data.mobile}),Object(p.jsx)(C,{name:"Email :",value:"mailto:".concat(e.data.email),displayText:e.data.email,isUrl:!0}),Object(p.jsx)(C,{name:"Location :",value:e.data.location}),Object(p.jsx)(C,{name:"Github :",value:e.data.github,displayText:e.data.github,isUrl:!0}),Object(p.jsx)(C,{name:"LinkedIn :",value:e.data.linkedIn,displayText:e.data.linkedIn,isUrl:!0})]})]})},k=a(25),P=a.n(k),H=a(5),E=a.n(H),A=a(26),w=a.n(A),T=function(e){var t=e.text.listedText.map((function(e,t){return Object(p.jsx)("li",{className:w.a.ListedText,children:e},t)}));return Object(p.jsxs)("div",{className:w.a.Description,children:[Object(p.jsx)("span",{children:e.text.plainText}),Object(p.jsx)("ul",{className:w.a.List,children:t})]})},M=function(e){var t=Object(i.useState)(null),a=Object(l.a)(t,2),n=a[0],c=a[1],s=Object(j.b)();return Object(i.useEffect)((function(){var t=e.data.map((function(t,a){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("li",{className:t.isSelected?[E.a.Heading,E.a.Selected].join(" "):E.a.Heading,onClick:function(t){return function(t){e.descriptionHandler(e.data[t].description),s(function(e){return function(e){return{type:"selectExperience",payload:e}}(e)}(t))}(a)},children:[Object(p.jsxs)("div",{className:E.a.TitlePrint,children:[Object(p.jsx)("div",{className:E.a.Title,children:t.title}),Object(p.jsx)("div",{className:E.a.Company,children:t.company})]}),Object(p.jsxs)("div",{className:E.a.LocationPrint,children:[Object(p.jsx)("div",{className:E.a.Location,children:t.location}),Object(p.jsx)("div",{className:E.a.Duration,children:t.duration})]}),Object(p.jsx)("div",{className:E.a.DescriptionPrint,children:Object(p.jsx)(T,{text:t.description})})]}),Object(p.jsx)("div",{className:E.a.MobileDescription,children:t.isSelected&&Object(p.jsx)(T,{text:t.description})})]},a)}));c(t)}),[c,e,s]),Object(p.jsx)("div",{className:E.a.Headings,children:Object(p.jsx)("ul",{className:E.a.HeadingList,children:n})})},Q=function(e){var t=Object(i.useState)(null),a=Object(l.a)(t,2),n=a[0],c=a[1];return Object(i.useEffect)((function(){if(e.data&&e.data.length>0){var t=e.data.find((function(e){return e.isSelected}));c(t&&t.description)}}),[e,c]),Object(p.jsxs)("div",{className:P.a.Content,children:[Object(p.jsx)("div",{className:P.a.Header,children:"Work Experiences"}),Object(p.jsx)(M,{descriptionHandler:c,data:e.data}),Object(p.jsx)("div",{className:P.a.MobileDescription,children:n&&Object(p.jsx)(T,{text:n})})]})},F=a(46),z=a.n(F),B=function(e){return Object(p.jsx)("div",{className:z.a.LeftSide,children:e.children})},R=a(14),U=a.n(R),I=a.p+"static/media/printer.fa1c7689.png",V=function(e){var t=Object(j.c)((function(e){return e.features}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:U.a.Content,children:[Object(p.jsx)("div",{className:U.a.Photo}),t["enable-print"]&&Object(p.jsx)("div",{className:U.a.PrintButton,onClick:function(){window.print()},children:Object(p.jsx)("img",{src:I,alt:"Print friendly version",height:"32px",width:"32px"})}),Object(p.jsx)("div",{className:U.a.Name,children:"Ayan Sasmal"})]}),Object(p.jsxs)("div",{className:U.a.ContentPrint,children:[Object(p.jsx)("div",{className:U.a.Photo}),Object(p.jsx)("div",{className:U.a.Name,children:"Ayan Sasmal"})]})]})},G=a(47),K=a.n(G),W=function(e){return Object(p.jsx)("div",{className:K.a.RightSide,children:e.children})},X=a(20),q=a.n(X),Y=function(){return Object(p.jsxs)("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",width:"14px",height:"14px",style:{marginRight:"5px"},children:[Object(p.jsx)("path",{style:{fill:"#FFDC64"},d:"M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97\r L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348\r L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922\r C516.225,203.78,511.532,189.337,499.92,188.26z"}),Object(p.jsx)("path",{style:{fill:"#FFC850"},d:"M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26\r c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979\r c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z"})]})},J=function(e){var t=e.data,a=e.header,i=void 0===a?"Skills":a,n=t.map((function(e,t){return Object(p.jsxs)("li",{className:q.a.Skill,children:[e.isSpeciality&&Object(p.jsx)(Y,{}),e.title]},t)}));return Object(p.jsxs)("div",{className:q.a.Content,children:[Object(p.jsx)("div",{className:q.a.Header,children:i}),Object(p.jsx)("ul",{className:q.a.SkillSet,children:n})]})},Z=a(9),$=a.n(Z);var ee=function(){var e=Object(j.c)((function(e){return e}),(function(){})),t=Object(i.useState)(!0),a=Object(l.a)(t,2),n=a[0],c=a[1],s=Object(j.b)();return Object(i.useEffect)((function(){s((function(e){b.a.get("content.json").then((function(t){e(h(t.data))})).catch((function(t){console.log("Error in fetching details",t),e(h({}))}))})),s((function(e){b.a.get("features.json").then((function(t){e(u(t.data))})).catch((function(t){console.log("Error in fetching details",t),e(u({}))}))})),c(!1)}),[s]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:$.a.App,children:[n&&Object(p.jsx)("div",{children:"loading..."}),!n&&Object(p.jsxs)("main",{children:[Object(p.jsxs)(B,{children:[Object(p.jsx)(V,{}),Object(p.jsx)(y,{data:e.details}),Object(p.jsx)(O,{data:e.aboutMe})]}),Object(p.jsxs)(W,{children:[Object(p.jsx)(J,{data:e.skills}),Object(p.jsx)(Q,{data:e.experiences})]})]}),Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Ayan Sasmal, 2021 | "}),Object(p.jsxs)("span",{children:["Icons made by"," ",Object(p.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik",children:"Freepik"})," ","from"," ",Object(p.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})})]}),Object(p.jsxs)("div",{className:$.a.AppPrint,children:[n&&Object(p.jsx)("div",{children:"loading..."}),!n&&Object(p.jsxs)("main",{children:[Object(p.jsxs)(B,{children:[Object(p.jsx)(V,{}),Object(p.jsx)(y,{data:e.details})]}),Object(p.jsxs)(W,{children:[Object(p.jsx)("h2",{className:$.a.Header,children:"About me"}),Object(p.jsx)(O,{data:e.aboutMe}),Object(p.jsx)("h2",{className:$.a.Header,children:"Skills"}),Object(p.jsx)(J,{data:e.skills,header:"Technical Skills"}),Object(p.jsx)(J,{data:e.bestPracticesSkills,header:"Best Practices"}),Object(p.jsx)(J,{data:e.softSkills,header:"Soft Skills"}),Object(p.jsx)(Q,{data:e.experiences}),Object(p.jsx)("h2",{className:$.a.Header,children:"Achievements"}),Object(p.jsx)(N,{data:e.achievements})]}),Object(p.jsxs)("div",{className:$.a.Qrcodes,children:[Object(p.jsxs)("div",{className:$.a.Qrcode,children:[Object(p.jsx)(d.a,{value:"+61452299076",size:50,fgColor:"#6495ed"}),Object(p.jsx)("div",{className:$.a.QrcodeDesc,children:"Phone"})]}),Object(p.jsxs)("div",{className:$.a.Qrcode,children:[Object(p.jsx)(d.a,{value:"mailto:ayan.m.sasmal@gmail.com",size:50,fgColor:"#f43f1a"}),Object(p.jsx)("div",{className:$.a.QrcodeDesc,children:"Email"})]}),Object(p.jsxs)("div",{className:$.a.Qrcode,children:[Object(p.jsx)(d.a,{value:"https://ayansasmal.github.io/",size:50,fgColor:"#507672"}),Object(p.jsx)("div",{className:$.a.QrcodeDesc,children:"Profile"})]})]})]}),Object(p.jsx)("footer",{children:Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:"Ayan Sasmal, 2021"})})})]})]})},te=function(e){return Object(p.jsx)("div",{children:"Projects"})},ae=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(r.d,{children:[Object(p.jsx)(r.b,{path:"/home",exact:!0,component:ee}),Object(p.jsx)(r.b,{path:"/projects",exact:!0,component:te}),Object(p.jsx)(r.a,{to:"/home"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(48),ne=a(11),ce={details:{},aboutMe:[],achievements:[],qualification:{},experiences:[],softSkills:[],bestPracticesSkills:[],skills:[],features:{}},se=function(e,t){return Object(ne.a)(Object(ne.a)({},e),{},{features:t.payload})},re=function(e,t){return Object(ne.a)(Object(ne.a)({},e),t.payload)},le=function(e,t){var a=e.experiences.map((function(e,a){return a===t.payload?Object(ne.a)(Object(ne.a)({},e),{},{isSelected:!0}):Object(ne.a)(Object(ne.a)({},e),{},{isSelected:!1})}));return Object(ne.a)(Object(ne.a)({},e),{},{experiences:a})},oe=a(33),de=a(29),je=Object(oe.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getFeatures":return se(e,t);case"init":return re(e,t);case"selectExperience":return le(e,t);default:return e}}),Object(oe.a)(ie.a));s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(j.a,{store:je,children:Object(p.jsx)(de.a,{children:Object(p.jsx)(ae,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={App:"Home_App__1oWcL",AppPrint:"Home_AppPrint__2Fadm",Header:"Home_Header__iBkRe",Qrcodes:"Home_Qrcodes__1jYp9",Qrcode:"Home_Qrcode__2FDxc",QrcodeDesc:"Home_QrcodeDesc__2zzZc"}}},[[85,1,2]]]);
//# sourceMappingURL=main.07734b64.chunk.js.map