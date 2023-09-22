(this["webpackJsonpdan-portfolio"]=this["webpackJsonpdan-portfolio"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"name":"Iperdesign Icebreaker Card Game","deploy":"https://iperdesign.com/icebreaker/","link":"https://github.com/DanRingenbach","descr":"I developed this simple mobile card game for Iperdesign based on their pre-existing deck of icbreaker cards. The design is mobile first but desktop friendly. It is built using HTML, JavaScript and CSS."},{"name":"DnD Character Builder","link":"https://github.com/DanRingenbach/DnD-Character-Builder","image":"https://assets.skybound.com/wp-content/uploads/2019/08/12165636/dnd-characters.jpg","descr":"This is the final project I completed for the Penn LPS Full Stack Web Development Boot Camp. The assignment was as a group to create a complete React.js application from scratch and deploy it to Heroku. Myself and two classmates began meeting and discussing what our application should do. We developed the idea of a D&D character creator which would enable a casual player of the role playing game Dungeons and Dragons to create a character easily and save it to an editable database. After wireframing the basic usability in Figma I was given the task to complete and connect the backend using GraphQL and MongoDB. We completed the project on time and the final presentation went flawlessly. I am very proud of what we were able to accomplish in such a small amount of time."},{"name":"Work Day Scheduler","link":"https://github.com/DanRingenbach/05-Work-Day-Scheduler","deploy":"https://danringenbach.github.io/05-Work-Day-Scheduler/","image":"https://freerangestock.com/sample/120630/flat-lay-of-a-calendar-on-the-table.jpg","descr":"The task of this assignment was to create a simple daily scheduling web application. The starter code for the CSS and the HTML was provided already. Our task was to give the site functionality using vanilla JavaScript and the npm package Moment.js. I was able to fulfill all the requirements of the assignment and submit on time. User input is saved locally and retrieved on page load and the color of the hour blocks is dependent on the current time of day"},{"name":"Budget Tracker","link":"https://github.com/DanRingenbach/19-Budget-Tracker","image":"https://media.istockphoto.com/photos/home-budget-with-tax-form-money-and-calculator-picture-id915636236?k=6&m=915636236&s=612x612&w=0&h=_JnzEZX1JFqtrXLp2RwGCEicU0NMJoTZD8kFQCqr3H0=","descr":"For this project I was given the front end and most of the back end of an fitness tracking application. My role was to complete the back-end of this application by making if functional offline. I did so by using Express, MongoDB, and Mongoose. Offline functionality was produced by introducing IndexedDB"}]')},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(8),s=a.n(i),c=a(2),r=a.p+"static/media/propic.88db0786.jpg",o=a(1);function l(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container mt-5",id:"aboutme",children:[Object(o.jsx)("div",{className:"container-div",children:Object(o.jsx)("img",{style:{width:200},src:r,alt:"Profile"})}),Object(o.jsxs)("div",{id:"aboutmedescr",children:[Object(o.jsx)("p",{className:"m-5",style:{textAlign:"left",fontSize:"25px",fontStyle:"italic"},children:"Dan Ringenbach is a front end developer as well as a UX/UI designer. He leverages his background in metal working and the fine arts to create web applications that feel sturdy and functional in addition to being light and responsive. He enjoys discussions on new design practices and methodologies with friends and associates and is always ready to play a friendly game of chess. Dan has worked at multiple digital marketing agencies in the Philadelphia area and is extremely comfortable with WordPress and front end JavaScript frameworks."}),Object(o.jsxs)("div",{className:"m-3 contact ",children:[Object(o.jsx)("a",{href:"mailto:danringenbach.art@gmail.com",children:Object(o.jsx)("button",{className:"button",children:"E-Mail"})}),Object(o.jsx)("p",{}),Object(o.jsx)("a",{href:"https://docs.google.com/document/d/1GmBgI6t6tpi4gME74v2dNUCl5eAihzYYb3wr1xWBgn4/edit?usp=sharing",children:Object(o.jsx)("button",{className:"button",children:"Resume"})}),Object(o.jsx)("p",{}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/daniel-ringenbach-50a8a41bb/",children:Object(o.jsx)("button",{className:"button",children:"LinkedIn"})}),Object(o.jsx)("p",{}),Object(o.jsx)("a",{href:"https://github.com/DanRingenbach",children:Object(o.jsx)("button",{className:"button",children:"GitHub"})})]})]})]})})}var d=function(e){var t;return t=e.deploy?Object(o.jsx)("a",{className:"btn btn-primary m-2",href:e.deploy,role:"button",children:"Deployed Application"}):null,Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container mt-3",children:Object(o.jsx)("div",{className:"",children:Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h3",{className:"card-title",children:e.name}),Object(o.jsx)("p",{className:"card-text",style:{display:"flex",alignItems:"flex-start"},children:e.descr}),t,Object(o.jsx)("a",{className:"btn btn-primary m-2",href:e.link,role:"button",children:"GitHub Repository"})]})})})})})},h=a(10);var m=function(){return Object(o.jsxs)(o.Fragment,{children:[h.map((function(e){return Object(o.jsx)(d,{name:e.name,image:e.image,link:e.link,descr:e.descr,deploy:e.deploy})})),","]})},b=a(24);var p=function(e){e.currentPage;var t=e.handlePageChange;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(b.a,{variant:"tabs",defaultActiveKey:"#home",className:"justify-content-left",children:[Object(o.jsx)(b.a.Item,{children:Object(o.jsx)(b.a.Link,{"ml-5":!0,href:"#home",onClick:function(){return t("Home")},children:"Home"})}),Object(o.jsx)(b.a.Item,{children:Object(o.jsx)(b.a.Link,{href:"#work",onClick:function(){return t("Work")},children:"Web Dev Work"})})]})})};var u=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"m-4",children:"Dan R."}),Object(o.jsx)(p,{currentPage:e.currentPage,handlePageChange:e.handlePageChange})]})};function g(){var e=Object(n.useState)("Home"),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{currentPage:a,handlePageChange:function(e){return i(e)}}),"Home"===a?Object(o.jsx)(l,{}):"Work"===a?Object(o.jsx)(m,{}):void 0]})}a(20);var j=function(){return Object(o.jsx)(g,{})};a(21);s.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ec3656fc.chunk.js.map