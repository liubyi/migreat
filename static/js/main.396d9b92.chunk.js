(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/nidhi1.0d0ce99b.jpg"},101:function(e,a,t){e.exports=t.p+"static/media/nidhi3.883c92c5.jpg"},102:function(e,a,t){e.exports=t.p+"static/media/yun1.d30eb11c.jpg"},117:function(e,a,t){e.exports=t.p+"static/media/nidhi2.f4ff9f21.jpg"},118:function(e,a,t){e.exports=t.p+"static/media/yun2.0f615ef3.jpg"},147:function(e,a,t){e.exports=t.p+"static/media/winston4.c0ab643c.jpg"},157:function(e,a,t){e.exports=t.p+"static/media/james1.183addf0.jpg"},158:function(e,a,t){e.exports=t.p+"static/media/karen1.060c5a8f.jpg"},190:function(e,a,t){e.exports=t.p+"static/media/birds.362233f1.png"},194:function(e,a,t){e.exports=t.p+"static/media/james2.50504f5b.jpg"},195:function(e,a,t){e.exports=t.p+"static/media/james3.2208d0d1.jpg"},196:function(e,a,t){e.exports=t.p+"static/media/karen2.b8e86ffa.jpg"},290:function(e,a,t){e.exports=t.p+"static/media/place1.5b947656.jpg"},291:function(e,a,t){e.exports=t.p+"static/media/place2.bba58434.jpg"},292:function(e,a,t){e.exports=t.p+"static/media/place3.aefb91be.jpg"},293:function(e,a,t){e.exports=t.p+"static/media/place4.57b43041.jpg"},294:function(e,a,t){e.exports=t.p+"static/media/place5.9fc93202.jpg"},295:function(e,a,t){e.exports=t.p+"static/media/place6.51c1f5af.jpg"},296:function(e,a,t){e.exports=t.p+"static/media/place7.ff12dfc2.jpg"},329:function(e,a,t){e.exports=t(497)},46:function(e,a,t){e.exports=t.p+"static/media/anon.d72b2e5b.png"},496:function(e,a,t){},497:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),o=t.n(i),l=t(29),s=t(25),c=t(33),m=t(34),u=t(35),d=t(72),h=t(79),p=t(190),g=t.n(p),f=t(297),E=t(499),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={redirect:!1,redirectHome:!1},t.setRedirect=function(){t.setState({redirect:!0})},t.setRedirectHome=function(){t.setState({redirectHome:!0})},t.renderRedirect=function(){return t.state.redirect?r.a.createElement(h.a,{to:"/survey"}):t.state.redirectHome?r.a.createElement(h.a,{to:"/home"}):void 0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"login"},r.a.createElement(f.a,{src:g.a,alt:"birds",size:"massive",padding:"30px",centered:!0}),r.a.createElement("div",{id:"title-container"},r.a.createElement("div",{className:"title"}," migreat "),r.a.createElement("div",{className:"subtitle"}," Let's make moving exciting again "),this.renderRedirect(),r.a.createElement("div",{className:"button-container"},r.a.createElement(E.a,{basic:!0,inverted:!0,size:"huge",onClick:this.setRedirectHome},"SIGN UP"))))}}]),a}(r.a.Component),w=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Error: Page does not exist!"))},v=t(201),k=t(119),y=t(549),x=t(542),C=t(541),I=t(540),S=t(21),A=t(38),M=t(533),F=t(536),j=t(556),q=Object(M.a)({root:{width:300}});function O(e){return"".concat(e,"\xb0C")}function R(){var e=q(),a=r.a.useState([2500,4e3]),t=Object(A.a)(a,2),n=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(F.a,{id:"range-slider",gutterBottom:!0},"Budget"),r.a.createElement(j.a,Object(S.a)({min:0,step:100,max:1e4,value:n,onChange:function(e,a){i(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:O},"valueLabelDisplay","on")))}var T=t(538),z=t(160),W=t(43),L=t(548);function N(){var e=r.a.useState(new Date("2020-05-18T21:11:54")),a=Object(A.a)(e,2),t=a[0],n=a[1];return r.a.createElement(W.a,{utils:z.a},r.a.createElement(T.a,{container:!0},r.a.createElement(L.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Start Date",value:t,onChange:function(e){n(e)},KeyboardButtonProps:{"aria-label":"change date"}})))}function H(){var e=r.a.useState(new Date("2020-08-18T21:11:54")),a=Object(A.a)(e,2),t=a[0],n=a[1];return r.a.createElement(W.a,{utils:z.a},r.a.createElement(T.a,{container:!0},r.a.createElement(L.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"End Date",value:t,onChange:function(e){n(e)},KeyboardButtonProps:{"aria-label":"change date"}})))}var G=Object(M.a)((function(e){return{root:{width:350},margin:{height:e.spacing(3)}}})),B=[{value:0,label:"1"},{value:5,label:"5"}];function P(e){return"".concat(e,"\xb0C")}function D(e){var a=G();return r.a.createElement("div",{className:a.root},r.a.createElement(F.a,{id:"discrete-slider-custom",gutterBottom:!0},e.textLabel),r.a.createElement(j.a,{justify:"center",defaultValue:3,getAriaValueText:P,"aria-labelledby":"discrete-slider-custom",min:0,step:1,max:5,valueLabelDisplay:"auto",marks:B}))}var V=[{key:"m",text:"Male",value:"male"},{key:"f",text:"Female",value:"female"},{key:"o",text:"Other",value:"other"},{key:"n",text:"No preference",value:"none"}],$=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={},t.handleChange=function(e,a){var n=a.value;return t.setState({value:n})},t.state={redirect:!1},t.setRedirect=function(){t.setState({redirect:!0})},t.renderRedirect=function(){if(t.state.redirect)return r.a.createElement(h.a,{to:"/home"})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){this.state.value;return r.a.createElement("div",{id:"survey-container"},r.a.createElement(v.a,{padded:!0},r.a.createElement(k.a,{attached:"top left",size:"large"},"What are you looking for?"),r.a.createElement(y.a,null,r.a.createElement(y.a.Field,{label:"I have a place and I'm looking for roommate(s)! (Skip the apartment section of the survey)",control:"input",type:"checkbox"}),r.a.createElement(y.a.Field,{label:"I don't have a place, but I would like to live with cool people.",control:"input",type:"checkbox"}),r.a.createElement(y.a.Field,{label:"I'm interested in additional services such as storage, moving, furniture, etc",control:"input",type:"checkbox"}))),r.a.createElement(v.a,{padded:!0},r.a.createElement(k.a,{attached:"top left",size:"large"},"Apartment Search Information"),r.a.createElement(y.a,null,r.a.createElement(x.a,{hidden:!0}),r.a.createElement(R,null),r.a.createElement(N,null),r.a.createElement(H,null),r.a.createElement(x.a,{hidden:!0}),r.a.createElement(y.a.Field,{inline:!0},r.a.createElement("label",null,"I am looking for an apartment in"),r.a.createElement(C.a,{icon:"search",iconPosition:"left",placeholder:"Location..."})))),r.a.createElement(v.a,null,r.a.createElement(k.a,{attached:"top left",size:"large"},"Roommate Search Information"),r.a.createElement(y.a,null,r.a.createElement(v.a,{padded:!0,basic:!0},r.a.createElement(k.a,{size:"large",basic:!0},"How orderly are you? ",r.a.createElement(I.a,{label:"Hard sell"})),r.a.createElement(x.a,{hidden:!0}),r.a.createElement(D,{textLabel:"1 = I'm ok with clothes on the floor, 5 = Everything has to be in its place"})),r.a.createElement(v.a,{padded:!0,basic:!0},r.a.createElement(k.a,{size:"large",basic:!0},"How much noise can you tolerate at night? ",r.a.createElement(I.a,{label:"Hard sell"})),r.a.createElement(x.a,{hidden:!0}),r.a.createElement(D,{textLabel:"1 = I can sleep through anything. 5 = I'm a light sleeper."})),r.a.createElement(v.a,{padded:!0,basic:!0},r.a.createElement(k.a,{size:"large",basic:!0},"How much do you want to socialize with your roommates? ",r.a.createElement(I.a,{label:"Hard sell"})),r.a.createElement(x.a,{hidden:!0}),r.a.createElement(D,{textLabel:"1 = I prefer to keep to myself. 5 = I want to hang out with my roommates."})),r.a.createElement(y.a.Select,{fluid:!0,label:"Preferred gender of future roommates (s)",options:V,placeholder:"Gender"}),r.a.createElement(y.a.Field,null,r.a.createElement("label",null,"Do you have any allergies that your future roommates should know about?"),r.a.createElement("input",{placeholder:"Description"})),r.a.createElement(y.a.Field,null,r.a.createElement("label",null,"Do you have any accessibility requirements that your future roommates should know about?"),r.a.createElement("input",{placeholder:"Description"})),r.a.createElement(y.a.Field,null,r.a.createElement("label",null,"How often will you have guests over."),r.a.createElement("input",{placeholder:"Description"})),r.a.createElement(y.a.Field,null,r.a.createElement("label",null,"Do you have any pets? Are you ok with living with a pet?"),r.a.createElement("input",{placeholder:"Description"})),r.a.createElement(y.a.Field,null,r.a.createElement("label",null,"Any additional requirements?"),r.a.createElement("input",{placeholder:"Description"})),r.a.createElement(y.a.Field,null,r.a.createElement("label",null,"Let future roommates know a little more about yourself. (Occupation, etc)"),r.a.createElement("input",{placeholder:"Description"})))),this.renderRedirect(),r.a.createElement(E.a,{onClick:this.setRedirect}," Submit"))}}]),a}(r.a.Component),Q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={},t.handleChange=function(e,a){var n=a.value;return t.setState({value:n})},t.state={redirect:!1},t.setRedirect=function(){t.setState({redirect:!0})},t.renderRedirect=function(){if(t.state.redirect)return r.a.createElement(h.a,{to:"/home"})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){this.state.value;return r.a.createElement("div",{id:"survey-container"},r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSeP7ROrJrvFl880EgDp1cNXm0xcXQ0CYUHfpRvI2trAoCfUMQ/viewform?embedded=true",width:"100%",height:"100%",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),this.renderRedirect(),r.a.createElement(x.a,{hidden:!0}),r.a.createElement(E.a,{basic:!0,content:"Go to homepage",onClick:this.setRedirect}))}}]),a}(r.a.Component),_=(t(543),t(544),t(546),t(545),t(539),t(280),t(85)),U=t.n(_),J=t(86),K=t.n(J),X=t(96),Y=t.n(X),Z=t(100),ee=t.n(Z),ae=t(117),te=t.n(ae),ne=t(101),re=t.n(ne),ie=t(102),oe=t.n(ie),le=t(118),se=t.n(le);Object(M.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:900,height:900},icon:{color:"rgba(255, 255, 255, 0.54)"}}})),U.a,K.a,Y.a,ee.a,te.a,re.a,oe.a,se.a,re.a;var ce=t(299),me=t(551),ue=t(550),de=t(553),he=t(80),pe=t(554),ge=t(298),fe=function(e){var a=e.roommate;return r.a.createElement(ue.a,{trigger:r.a.createElement(de.a,null,r.a.createElement(f.a,{src:a.src,wrapped:!0,ui:!1}),r.a.createElement(de.a.Content,null,r.a.createElement(de.a.Header,null,a.name)),r.a.createElement(de.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(he.a,{name:"user"}),a.match))),closeIcon:!0},r.a.createElement(ue.a.Header,null,a.match),r.a.createElement(ue.a.Content,{image:!0},r.a.createElement(f.a,{wrapped:!0,size:"large",src:a.src}),r.a.createElement(ue.a.Description,null,r.a.createElement(pe.a,{as:"h2"},a.name,"  ",r.a.createElement(he.a,{name:"add user",position:"right",size:"small"})),r.a.createElement(ge.a.Item,{href:"https://www.gmail.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"mail",color:"red",size:"large"})),r.a.createElement(ge.a.Item,{href:"https://www.linkedin.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"linkedin",color:"blue",size:"large"})),r.a.createElement(ge.a.Item,{href:"https://www.facebook.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"facebook",color:"blue",size:"large"})),r.a.createElement(ge.a.Item,{href:"https://www.twitter.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"twitter square",color:"blue",size:"large"})),r.a.createElement(ge.a.Item,{href:"https://www.google.com/maps/search/coffee+near+Stanford,+CA/@37.4898887,-122.2122108,13z/data=!3m1!4b1",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"coffee",color:"brown",size:"large"})),r.a.createElement(pe.a,{as:"h3"},"Schedule"),r.a.createElement("p",null,a.location),r.a.createElement("p",null,a.movein," | ",a.moveout),r.a.createElement(pe.a,{as:"h3"},"Lifestyle"),r.a.createElement("p",null,a.cleanliness," | ",a.noise),r.a.createElement("p",null,a.sleep),r.a.createElement("p",null,a.interests),r.a.createElement("p",null,a.interaction),r.a.createElement("p",null,a.guests))))},Ee=t(147),be=t.n(Ee),we=t(157),ve=t.n(we),ke=t(194),ye=t.n(ke),xe=t(195),Ce=t.n(xe),Ie=t(158),Se=t.n(Ie),Ae=t(196),Me=t.n(Ae),Fe=[{src:U.a,name:"Winston",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 89%"},{src:ee.a,name:"Nidhi",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 83%"},{src:se.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 84%"},{src:K.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 78%"},{src:Y.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 96%"},{src:oe.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 87%"},{src:ve.a,name:"James",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 77%"},{src:Me.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 85%"},{src:te.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 67%"},{src:be.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 85%"},{src:re.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 97%"},{src:ye.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 57%"},{src:Ce.a,name:"Anonymous",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 85%"},{src:Se.a,name:"Karen",description:"Working in the Bay Area",location:"Looking for housing in San Francisco, CA",movein:"Move in: 6/5/20",moveout:"Move out: 8/19/20",cleanliness:"Cleanliness: 4/5",noise:"Noise: 3/5",interests:"Interests: Reading, hiking",sleep:"Sleeping habits: Sleep around 11pm, wake up around 7am.",interaction:"Interaction: Want to interact with roommates, occasionally cook together.",guests:"Guest policy: Overnight guests are ok as long as it's infrequent and we are notified ahead of time.",match:"Match: 85%"}],je=function(){var e=Fe.map((function(e){return r.a.createElement(ce.a.Column,null,r.a.createElement(me.a.Group,null,r.a.createElement(fe,{roommate:e})))}));return r.a.createElement("div",{id:"search-container"},r.a.createElement(ce.a,{stackable:!0,columns:4},e))},qe=t(555),Oe=t(552),Re=function(){return r.a.createElement("div",{id:"search-container"},r.a.createElement(Oe.a,{compact:!0},r.a.createElement(Oe.a.Header,null,r.a.createElement(Oe.a.Row,null,r.a.createElement(Oe.a.HeaderCell,null),r.a.createElement(Oe.a.HeaderCell,null,"Budget"),r.a.createElement(Oe.a.HeaderCell,null,"Location of workplace or school"),r.a.createElement(Oe.a.HeaderCell,null,"Requirements"),r.a.createElement(Oe.a.HeaderCell,null,"Lifestyle"))),r.a.createElement(Oe.a.Body,null,r.a.createElement(Oe.a.Row,null,r.a.createElement(Oe.a.Cell,null,r.a.createElement(f.a,{src:oe.a,size:"small",circular:!0})),r.a.createElement(Oe.a.Cell,null,"$1500-$1800"),r.a.createElement(Oe.a.Cell,null,"Financial District, SF"),r.a.createElement(Oe.a.Cell,null,"Need to be in walking distance of public transit. Area needs to be safe enough to walk."),r.a.createElement(Oe.a.Cell,null,"Hiking, reading, watching TV. I like to go out with friends on the weekends.")),r.a.createElement(Oe.a.Row,null,r.a.createElement(Oe.a.Cell,null,r.a.createElement(f.a,{src:ee.a,size:"small",circular:!0})),r.a.createElement(Oe.a.Cell,null,"$1400-$1700"),r.a.createElement(Oe.a.Cell,null,"Market Street, SF"),r.a.createElement(Oe.a.Cell,null,"Pet friendly. Would like grocery stores within walking distance too. "),r.a.createElement(Oe.a.Cell,null,"Traveling, reading, going to the movies. I travel every other month for work.")),r.a.createElement(Oe.a.Row,null,r.a.createElement(Oe.a.Cell,null,r.a.createElement(f.a,{src:K.a,size:"small",circular:!0})),r.a.createElement(Oe.a.Cell,null,"$1500-$1900"),r.a.createElement(Oe.a.Cell,null,"Protreo Hill, SF"),r.a.createElement(Oe.a.Cell,null,"Need in unit washer and dryer. Mild peanut allergy so shared kitchen spaces needs to be nut free."),r.a.createElement(Oe.a.Cell,null,"Hiking, going to the beach, reading, listening to music")),r.a.createElement(Oe.a.Row,null,r.a.createElement(Oe.a.Cell,null,r.a.createElement(f.a,{src:ve.a,size:"small",circular:!0})),r.a.createElement(Oe.a.Cell,null,"$1700-$1800"),r.a.createElement(Oe.a.Cell,null,"Near a corporate bus stop."),r.a.createElement(Oe.a.Cell,null,"Area should be safe and crime free"),r.a.createElement(Oe.a.Cell,null,"Will have friends visit on some weekends, enjoys cooking")),r.a.createElement(Oe.a.Row,null,r.a.createElement(Oe.a.Cell,null,r.a.createElement(f.a,{src:Se.a,size:"small",circular:!0})),r.a.createElement(Oe.a.Cell,null,"$1500-$2000"),r.a.createElement(Oe.a.Cell,null,"Near Caltrain"),r.a.createElement(Oe.a.Cell,null,"Trash should be taken out every few days"),r.a.createElement(Oe.a.Cell,null,"Reading, hiking, watching Youtube, pet sitting")))),r.a.createElement(x.a,{hidden:!0}))},Te=t(547),ze=t(46),We=t.n(ze),Le=function(){return r.a.createElement(Te.a,{active:!0,placeholder:We.a,url:"https://maps.google.com/maps?q=trinity%20mission&t=&z=15&ie=UTF8&iwloc=&output=embed"})},Ne=t(290),He=t.n(Ne),Ge=t(291),Be=t.n(Ge),Pe=t(292),De=t.n(Pe),Ve=t(293),$e=t.n(Ve),Qe=t(294),_e=t.n(Qe),Ue=t(295),Je=t.n(Ue),Ke=t(296),Xe=t.n(Ke),Ye=function(e){var a=e.place;return r.a.createElement(me.a,null,r.a.createElement(me.a.Image,{src:a.src}),r.a.createElement(me.a.Content,null,r.a.createElement(me.a.Header,{as:"a"},a.name),r.a.createElement(me.a.Meta,null,r.a.createElement("span",{className:"cinema"},a.address)),r.a.createElement(me.a.Description,null,a.description),r.a.createElement(me.a.Extra,null,r.a.createElement(k.a,null,"Studio - 2 Bedroom"),r.a.createElement(k.a,null,a.extra1),r.a.createElement(k.a,null,a.extra2))))},Ze=(r.a.createElement(f.a,{src:"/images/wireframe/short-paragraph.png"}),[{src:He.a,name:"500 Folsom",description:"500 Folsom St, San Francisco, CA 94105",extra1:"Pet friendly",extra2:"Free parking"},{src:Be.a,name:"100 Van Ness",description:"100 Van Ness Ave, San Francisco, CA 94102",extra1:"Washer",extra2:"Free parking"},{src:De.a,name:"The Rise Hayes Valley",description:"1699 Market St, San Francisco, CA 94103 ",extra1:"Washer",extra2:"Free parking"},{src:$e.a,name:"Marina Cove Apartments",description:"1550 Bay St, San Francisco, CA 94123",extra1:"Public Transit",extra2:"Kitchen"},{src:_e.a,name:"Channel Mission Bay",description:"185 Channel St, San Francisco, CA 94158",extra1:"Public Transit",extra2:"Free parking"},{src:Je.a,name:"Potrero Launch",description:"2235-2265 3rd St, San Francisco, CA 94107",extra1:"Washer",extra2:"Free parking"},{src:Xe.a,name:"Solaire",description:"299 Fremont St, San Francisco, CA 94105",eextra1:"Washer",extra2:"Free parking"}]),ea=function(){var e=Ze.map((function(e){return r.a.createElement(Ye,{place:e})}));return r.a.createElement(me.a.Group,{divided:!0},e)},aa=function(){return r.a.createElement("div",{id:"search-container"},r.a.createElement(v.a,null,r.a.createElement(v.a,{basic:!0},r.a.createElement("div",null,"Location  ",r.a.createElement(C.a,{placeholder:"Location"}),"  Minimum price  ",r.a.createElement(C.a,{placeholder:"$"})," Maximum price ",r.a.createElement(C.a,{placeholder:"$"}))),r.a.createElement(ce.a,{stackable:!0,columns:2},r.a.createElement(ce.a.Column,{width:3},r.a.createElement(v.a,null,r.a.createElement(pe.a,{as:"h3"},"Types"),r.a.createElement(I.a,{label:"Houses"}),r.a.createElement(I.a,{label:"Apartments"})),r.a.createElement(v.a,null,r.a.createElement(pe.a,{as:"h3"},"Amenities"),r.a.createElement(I.a,{label:"Pool"}),r.a.createElement(I.a,{label:"In unit washer & dryer"}),r.a.createElement(I.a,{label:"Parking"}),r.a.createElement(I.a,{label:"Air conditioning"}),r.a.createElement(I.a,{label:"Wheelchair"}),r.a.createElement(I.a,{label:"Pet friendly"})),r.a.createElement(v.a,null,r.a.createElement(pe.a,{as:"h3"},"Overlays"),r.a.createElement(I.a,{label:"Crime level"}),r.a.createElement(I.a,{label:"Grocery stores"}),r.a.createElement(I.a,{label:"Public Transit"}),r.a.createElement(I.a,{label:"Childcare"}))),r.a.createElement(ce.a.Column,{width:13},r.a.createElement(Le,null))),r.a.createElement(x.a,{hidden:!0}),r.a.createElement(ea,null),r.a.createElement(x.a,{hidden:!0})))},ta=function(){return r.a.createElement("div",{id:"search-container"},r.a.createElement(ce.a,{stackable:!0,columns:2},r.a.createElement(ce.a.Column,null,r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"},"Google | 2018"),r.a.createElement(ge.a.Item,{href:"https://www.linkedin.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"linkedin",color:"blue",size:"large"})),r.a.createElement(ge.a.Item,{href:"https://www.google.com/maps/search/coffee+near+Stanford,+CA/@37.4898887,-122.2122108,13z/data=!3m1!4b1",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"coffee",color:"brown",size:"large"})),r.a.createElement("p",null,"I lived in San Francisco at Trinity Apartments on Mission Street. The apartment was very modern and clean with a small gym. There was a laundry room on each floor. I had one roommate and we each paid $1700 for a one bedroom apartment. Caltrain is a half hour walk away but it can be unsafe to walk there alone. The streets were not safe to walk around at night, but the building felt secure. The Westfield Mall is a 15 minute walk away and it's safe to walk down Market Street during the day. There was a Google bus stop that was a 5 minute walk away. Commuting to work on the bus took 1 hour each trip, but I was able to do work on the bus. Traffic is bad on Fridays if there are concerts held at Shoreline Amphitheatre. If you plan to stay indoors"),r.a.createElement("p",null,"I enjoyed my intern experience, however the team I was on was at an early stage and was somewhat disorganized. My advice is to make friends with the other interns. There are lots of coffee bars on campus, and of course there is free food. They give everyone a Chromebook, but if you want a Mac you can make a request and they will likely give one to you for the summer. Also, the San Francisco cafe is only for San Francisco Google employees.")),r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"},"CAISO | 2017"),r.a.createElement(ge.a.Item,{href:"https://www.gmail.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"mail",color:"red",size:"large"})),r.a.createElement("p",null,"I lived in Folsom, CA. The company had created a Facebook group and employees were renting rooms to the interns. I stayed with an employee at her house for the summer. We carpooled to work and I helped pay for gas. Rent was $800 per month and I got my own bedroom. It was very hot outside, but there is a nice river that is a 15 minute walk away. Neighborhood was quiet and safe, but it was hard to get places without a car. Other interns were in Sacramento, and I wished I lived there instead and used the light rail to get to work. I took the Megabus to San Francisco every other weekend. I would recommned this location only if you have a car."),r.a.createElement("p",null,"California ISO was an interesting place to work at. The intern group was very close and we would plan trips together. However, the team did not have much work for me to do, so I ended up sitting in a lot of meetings.")),r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"}," xxx | 20xx "),r.a.createElement("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."),r.a.createElement("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.")),r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"}," xxx | 20xx "),r.a.createElement("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."),r.a.createElement("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.")),r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"}," xxx | 20xx "),r.a.createElement("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."),r.a.createElement("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in."))),r.a.createElement(ce.a.Column,null,r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"},"Roblox | 2017"),r.a.createElement(ge.a.Item,{href:"https://www.gmail.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"mail",color:"red",size:"large"})),r.a.createElement(ge.a.Item,{href:"https://www.linkedin.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"linkedin",color:"blue",size:"large"})),r.a.createElement(ge.a.Item,{href:"https://www.google.com/maps/search/coffee+near+Stanford,+CA/@37.4898887,-122.2122108,13z/data=!3m1!4b1",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"coffee",color:"brown",size:"large"})),r.a.createElement("p",null,"I lived in Park Place, San Mateo. Roblox was literally across the street. Rent was $4200 for a one bedroom with an in unit washer/dryer. I lived with two roommates. Two of us shared the master bedroom and one was in the living room (added a bamboo screen for privacy). Park Place is in a safe, quiet neighborhood right off the freeway. There is a small park for people to walk their dogs. There is a series of shops across the street, including Chipotle, Whole Foods, and Mendicino Farms sandwich shop. The nearest Caltrain is the Hillsdale station that is a 15 minutes walk away. Next to the Hillsdale station is the Hillsdale Mall, along with a Trader Joes and Barns and Noble. The walk to the station is very safe and clean. There is even a police station two blocks away. Rent is expensive, but the neighborhood is very safe, clean, and has everything you need within a block of you."),r.a.createElement("p",null,"Roblox was my first gaming company and I really enjoyed working with people who were also interested in games. However, the onboarding process was slow and it took a long to get approval for different tasks. I ended up making up my own project. The internship would have been a lot better if they were less disorganized. However, the snack kitchen is awesome with free avocados.")),r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"},"Google | 2018"),r.a.createElement(ge.a.Item,{href:"https://www.gmail.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"mail",color:"red",size:"large"})),r.a.createElement(ge.a.Item,{href:"https://www.facebook.com",position:"right",target:"_blank"},r.a.createElement(he.a,{name:"facebook",color:"blue",size:"large"})),r.a.createElement("p",null,"I lived in Los Gatos in a 4 bedroom house with 3 other people. I found these roommates through a Facebook group and we were all from the same college. My roommates worked at either Google or Apple. Rent was $1400 each. I biked 30 minutes to work everyday. The location was okay, but there was no air conditioning so on hot days I ended up staying at the office late. Near the end of the summer, the washer broke and no one came to fix it, so I had to take my laundry to Google. One roommate did not clean up after herself, so the kitchen was always dirty. I ended up having to clean the kitchen and take out the trash every week if I didn't want the whole place to smell bad. I would recommend finding a place with air conditioning because it got so hot I couldn't sleep at night.")),r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"}," xxx | 20xx "),r.a.createElement("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."),r.a.createElement("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.")),r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"}," xxx | 20xx "),r.a.createElement("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."),r.a.createElement("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.")),r.a.createElement(v.a,null,r.a.createElement(f.a,{src:We.a,size:"small",floated:"left"}),r.a.createElement(pe.a,{as:"h4"}," xxx | 20xx "),r.a.createElement("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."),r.a.createElement("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.")))))},na=function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSecLh-HbZIfDWw11Qn1sU4QcTifazXZ02tJozRpk9wpGclc0Q/viewform?embedded=true",width:"100%",height:"780",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"))},ra=[{menuItem:"Past Intern Experiences",render:function(){return r.a.createElement(ta,null)}},{menuItem:"Search for roommates",render:function(){return r.a.createElement(je,null)}},{menuItem:"Roommate Group",render:function(){return r.a.createElement(Re,null)}},{menuItem:"Find an apartment",render:function(){return r.a.createElement(aa,null)}},{menuItem:"Share your experience",render:function(){return r.a.createElement(na,null)}}],ia=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"banner"}),r.a.createElement("div",{id:"background"},r.a.createElement(qe.a,{menu:{secondary:!0,pointing:!0},panes:ra})))},oa=(t(496),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/migreat",component:b,exact:!0}),r.a.createElement(h.b,{path:"/survey",component:Q}),r.a.createElement(h.b,{path:"/survey2",component:$}),r.a.createElement(h.b,{path:"/roommategrid",component:je}),r.a.createElement(h.b,{path:"/home",component:ia}),r.a.createElement(h.b,{component:w}))))}}]),a}(n.Component));o.a.render(r.a.createElement(oa,null),document.getElementById("root"))},85:function(e,a,t){e.exports=t.p+"static/media/winston1.0f91ff5e.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/winston2.adabe46a.jpg"},96:function(e,a,t){e.exports=t.p+"static/media/winston3.a4a065b2.jpg"}},[[329,1,2]]]);
//# sourceMappingURL=main.396d9b92.chunk.js.map