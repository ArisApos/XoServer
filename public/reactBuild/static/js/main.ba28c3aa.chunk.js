(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(276)},112:function(e,t,a){},118:function(e,t,a){},150:function(e,t){},169:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){},175:function(e,t,a){},267:function(e,t,a){},269:function(e,t,a){},271:function(e,t,a){},273:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(42),o=a.n(c),i=(a(112),Array(3).fill(null)),l=function(e,t){return i.map(function(a,n){return s.a.createElement(R,{key:n+e,gameId:t,i:n+e})})},u=function(){n.classList.toggle("mystyle")},m=function(e){var t=e.gameId;return s.a.createElement("div",{className:"gameBoard"},s.a.createElement("div",{ref:function(e){e&&(n=e)},onClick:u,className:"boardRow"},l(0,t)),s.a.createElement("div",{className:"boardRow"},l(3,t)),s.a.createElement("div",{className:"boardRow"},l(6,t)))};m=s.a.memo(m);var d=a(10),p=a(8),g=a(7),f=a(9),E=a(106),v=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s={type:e};return a.forEach(function(e,t){s[e]=n[t]}),s}},b=a(11),N=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(b.a)(t[a],3),r=n[0],s=n[1],c=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[c])return{winner:e[r],winnerLine:t[a]}}return{winner:null,winnerLine:null}},y=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return a.forEach(function(t){return e(t)})},O=function(){var e=0;return function(){return e++}}(),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_GAME":t.type,t.gameId;return Object(E.a)(t,["type","gameId"]);default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_STEP":return t.step;default:return e}},A=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_XISNEXT":return t.xTurn;default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Array(9).fill(null),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SQUARE":return e[t.index]=t.input,e.slice();default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{squares:j(void 0,{})}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SQUARE":return[].concat(Object(f.a)(e.slice(0,t.step+1)),[{squares:j(e[t.step].squares.slice(),t)}]);case"CUT":return Object(f.a)(e.slice(0,t.step+1));default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{X:0,O:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOSE_POINTS":return Object(g.a)({},e,Object(p.a)({},t.playerXO,e[t.playerXO]-t.points));default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{stepNumber:w(void 0,{}),xIsNext:A(void 0,{}),history:x(void 0,{}),score:q(void 0,{}),winnerResults:{winner:null,winnerLine:null}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SQUARE":var a=x(e.history.slice(),t),n=N(a[a.length-1].squares.slice()),r=n.winner?Object(g.a)({},e.score,Object(p.a)({},n.winner,e.score[n.winner]+1)):Object(g.a)({},e.score);return Object(g.a)({},e,{history:a,score:r,winnerResults:n});case"CUT":var s=x(e.history.slice(),t),c=N(s[s.length-1].squares.slice());return Object(g.a)({},e,{history:s,winnerResults:c});case"CHANGE_XISNEXT":return Object(g.a)({},e,{xIsNext:A(e.xIsNext,t)});case"CHANGE_STEP":return Object(g.a)({},e,{stepNumber:w(e.stepNumber,t)});case"ADD_NEW_GAME":return Object(g.a)({},e,{gameSettings:h({},t)});case"LOSE_POINTS":return Object(g.a)({},e,{score:q(e.score,t)});default:return e}},T=v("ADD_SQUARE","gameId","index","input","step"),S=v("CHANGE_XISNEXT","gameId","xTurn"),I=v("CHANGE_STEP","gameId","step"),L=v("CUT","gameId","step"),_=v("ADD_NEW_GAME","newGameId","playerXName","playerOName","timeLimmit"),P=v("LOSE_POINTS","gameId","playerXO","points"),R=Object(d.b)(function(e,t){var a=e.games[t.gameId],n=a.history,r=a.winnerResults,s=a.xIsNext,c=a.stepNumber;return{squareValue:n[c].squares[t.i],xIsNext:s,stepNumber:c,winner:r.winner&&c===n.length-1?r.winner:null,winnerLine:r.winnerLine}},function(e){return{squareHandler:function(t,a,n,r){y(e,function(e,t,a,n){return T(e,t,a?"X":"O",n)}(t,a,n,r),function(e,t){return S(e,!t)}(t,n),function(e,t){return I(e,t+1)}(t,r))}}})(function(e){var t=e.gameId,a=e.i,n=e.squareValue,r=e.xIsNext,c=e.stepNumber,o=e.squareHandler,i=e.winner,l=e.winnerLine,u=i&&l.some(function(e){return e===a});return s.a.createElement("button",{onClick:function(){return i||n?1:o(t,a,r,c)},className:u?"squareW squareA square":i?"squareA square":"square"},n)}),D=(a(118),Object(d.b)(function(e,t){var a=e.games[t.gameId],n=a.gameSettings,r=n.playerXName,s=n.playerOName,c=n.timeLimmit,o=a.xIsNext,i=a.stepNumber,l=a.score,u=a.history,m=a.winnerResults;return{winner:m.winner&&i===u.length-1?m.winner:null,historyLength:Array(u.length).fill(null),xIsNext:o,stepNumber:i,score:l,playerXName:r,playerOName:s,timeLimmit:c}},function(e){return{timeTravelDis:function(t,a){y(e,function(e,t){return S(e,t%2===0)}(t,a),function(e,t){return I(e,t)}(t,a))},cutDis:function(t,a){e(function(e,t){return L(e,t)}(t,a))},losePointsDis:function(t,a,n){e(function(e,t,a){return P(e,t,a)}(t,a,n))}}})(function(e){var t=e.gameId,a=e.score,n=e.winner,r=e.historyLength,c=e.xIsNext,o=e.timeTravelDis,i=e.cutDis,l=e.stepNumber,u=e.playerOName,d=e.playerXName,p=e.timeLimmit,g=e.losePointsDis;return s.a.createElement("div",{className:"game"},s.a.createElement(m,{gameId:t}),s.a.createElement(X,{gameId:t,historyLength:r,stepNumber:l,cutDis:i,timeTravelDis:o,winner:n,xIsNext:c}),s.a.createElement(G,{playerXName:d,playerOName:u,winner:n,score:a}),s.a.createElement(U,{gameId:t,timeLimmit:p,xIsNext:c,losePointsDis:g}))})),C=function(e){e.classList.add("scoreRotation"),setTimeout(function(){return e.classList.remove("scoreRotation")},2e3)},G=function(e){var t=e.playerXName,a=e.playerOName,n=e.winner,r=e.score;return s.a.createElement("div",{className:"totalScore"},s.a.createElement("span",{className:"headerName"},t),s.a.createElement("span",{className:"headerName"},a),s.a.createElement("span",{className:"header"},"X"),s.a.createElement("span",{className:"header"},"O"),s.a.createElement("span",{className:"xi",ref:function(e){"X"===n&&e&&C(e)}},r.X),s.a.createElement("span",{className:"omikron",ref:function(e){"O"===n&&e&&C(e)}},r.O))};G=s.a.memo(G);var X=function(e){var t=e.gameId,a=e.historyLength,n=e.stepNumber,r=e.cutDis,c=e.timeTravelDis,o=e.winner,i=e.xIsNext,l=a.map(function(e,a){var o=a?"Go to move #"+a:"Go to game start";return s.a.createElement("li",{key:a},s.a.createElement("button",{ref:function(e){a===n&&e&&(e.style.zIndex=1,setTimeout(function(){e.style.transform="translate(0,10px)",e.style.zIndex=0},100))},className:n===a?"travel current":"travel",onClick:function(){r(t,a)},onMouseEnter:function(){return c(t,a)}},o))}),u=o?"Winner: "+o:"Next player: "+(i?"X":"O");return s.a.createElement("div",{className:"gameInfo"},s.a.createElement("div",{className:o?"status winner":"status"},u),s.a.createElement("ol",null,l))},U=function(e){var t=e.gameId,a=e.timeLimmit,n=e.xIsNext,c=e.losePointsDis,o=Object(r.useState)(a/1e3),i=Object(b.a)(o,2),l=i[0],u=i[1];return Object(r.useEffect)(function(){var e,r=a/1e3,s=1,o=!0;return e=setInterval(function(){var e=r-s++%(r+1);u(e),function(e,a){e||0!==a||c(t,n?"X":"O",.5)}(o,e),o&&(o=!o)},1e3),function(){clearInterval(e),u(a/1e3)}},[n]),s.a.createElement("span",{className:n?"timer":"timer oIsNext",style:function(e){var t=e/(a/1e3);switch(!0){case t>.75:return{color:"green"};case t>.5:return{color:"yellow"};case t>.25:return{color:"orange"};case t>=0:return{color:"red"};default:return null}}(l)},l)},W=Object(d.b)(function(e){var t=e.games;return{gamesIds:Object.keys(t)}},function(e){return{addNewGameDis:function(t){var a=t.newGameId,n=t.playerXName,r=t.playerOName,s=t.timeLimmit;e(function(e,t,a,n){return _(e,t,a,n)}(a,n,r,s))}}})(function(e){var t=e.gamesIds,a=e.addNewGameDis,n=Object(r.useCallback)(function(e){return a(e)},[]),c=t.map(function(e){return s.a.createElement(D,{key:e,gameId:e})});return s.a.createElement(s.a.Fragment,null,s.a.createElement(F,Object.assign({className:"gamesMenuu"},{addNewGameDisUCB:n})),s.a.createElement("div",{className:"gamesContainer"},c))}),M=a(25),F=function(e){var t=e.addNewGameDisUCB,a=Object(r.useState)(!1),n=Object(b.a)(a,2),c=n[0],o=n[1],i=Object(M.a)(),l=i.register,u=i.handleSubmit,m=i.errors;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:c?"newGameButton on":"newGameButton",onClick:function(){return o(!c)}}),s.a.createElement("form",{className:c?"gamesMenu menuVisible":"gamesMenu menuHidden",onSubmit:u(function(e){var a=Object(g.a)({newGameId:O()},e,{timeLimmit:1e3*e.timeLimmit});o(!1),t(a)})},s.a.createElement("input",{name:"playerXName",placeholder:"nameX",ref:l({required:!0,pattern:/^([a-zA-Z0-9_-]){3,5}$/})}),m.playerXName&&"nameX is required Please enter Alpanumeric Letters with length 3-5",s.a.createElement("input",{name:"playerOName",placeholder:"nameO",ref:l({required:!0,pattern:/^([a-zA-Z0-9_-]){3,5}$/})}),m.playerOName&&"nameO is required Please enter Alpanumeric Letters with length 3-5",s.a.createElement("input",{name:"timeLimmit",placeholder:"time Limmit(sec)",ref:l({required:!0,pattern:/^[2-8]$/})}),m.timeLimmit&&"timeLimmit is required Please enter  a  number 2-8",s.a.createElement("input",{className:"submit",type:"submit"})))};F=s.a.memo(F);var H=Object(d.b)(function(e){e.games;return{}},function(e){return{}})(function(e){e.games;return s.a.createElement("div",{className:"offLinePage"},s.a.createElement(W,null))}),B=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log(t.length);try{if(2!==t.length)throw new Error("The function takes 2 arguments. First string with key, Second array with objects were have a standard key");var n=t[0],r=t[1];if(console.log(n,r),"string"!==typeof n)throw new Error("first argument must be string!");if(!(r instanceof Array))throw new Error("second argument must be array!");if(r.find(function(e){return!e[n]}))throw new Error("Duuuuuuddeeee. All the objects in the array must contain the given key");return r.reduce(function(e,t){return Object(g.a)({},e,Object(p.a)({},t[n],t))},{})}catch(s){console.error(s.name+"IndexingFunction: "+s.message)}},Y=a(3),$=a.n(Y),V=a(14),z=a(103),Q=a.n(z),K="http://127.0.0.1:5000",Z=function(){var e=Object(V.a)($.a.mark(function e(t){var a,n,r;return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.nameSpace,n=a?K+a:K,console.log(">>>>>>>>>>>>>>>>>>>>>>>createSocketConnection  url",n),r=Q()(n),e.next=6,new Promise(function(e){r.on("connection",function(t){t.socket=r,console.log(">>>>>>>>>>>>>>>>>>>>>>>>SERVER!!!!! SOCKET CONNECTION to url,NameSsocketData",n,t),e(t)})});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),J=a(60),ee=a.n(J),te=function(e){var t=e.data,a=e.endpoint,n=e.headers,r=e.method,s=void 0===r?"get":r,c=e.token,o="get"===s&&t?Object.values(t).reduce(function(e,t){return e+encodeURIComponent(t)+"/"},"/"):"",i="".concat(K,"/").concat(a).concat(o),l=c?"Bearer ".concat(c):null,u=[i];return t&&u.push(t),(l||n)&&u.push({headers:Object(g.a)({Authorization:l},n)}),console.log("Axios API-- data, endpoint, headers, method, token, AxiosParameters",t,a,n,s,c,t,u),ee.a[s].apply(ee.a,u).then(function(e){return console.log("AxiosAPI--------202!!!!",e),e.data}).catch(function(e){throw console.log("AxioApi----oups! throw error catched",e.response),e})},ae=(a(169),function(){var e=Object(d.e)(function(e){return{players:e.online.players,games:e.online.games}}),t=e.players,a=e.games,n=Object.values(a).map(function(e){return e.enemyName}),r=Object.values(t).map(function(e){var t=e.name,a=e.points,r=e.avatar,c=e.online;return s.a.createElement("div",{key:t,className:n.find(function(e){return e===t})?"rPlayer enemy":"rPlayer"},s.a.createElement("img",{className:"avatar",src:K+r,alt:t}),s.a.createElement("span",{className:"name"},t),s.a.createElement("span",{className:"point"},a),s.a.createElement("span",{className:c?"online on":"online"}))});return s.a.createElement("section",{className:"ranks"},s.a.createElement("h3",{className:"title"},"Ranks"),r)}),ne=(a(171),function(e){var t=e.myStatus,a=e.logout,n=e.setActiveWindows;if(t){var r=t.name,c=t.avatar,o=t.points,i=t.maxPlayers,l=t.maxTime;return s.a.createElement("section",{className:"myStatus"},s.a.createElement("h3",{className:"title"},"LoggedInStatus"),s.a.createElement("div",{className:"statusItem person"},s.a.createElement("div",{className:"name"},r),s.a.createElement("img",{src:K+c,alt:"avatar",className:"avatar"})),s.a.createElement("div",{className:"statusItem points"},"points: ".concat(o)),s.a.createElement("div",{className:"statusItem maxTime"},"maxTime: ".concat(l)),s.a.createElement("div",{className:"statusItem maxPlayers"},"maxPlayers: ".concat(i)),s.a.createElement("div",{className:"loggedOut",onClick:function(){n({registration:!1,mountRegistration:!1,loggin:!1,mountLoggin:!0}),setTimeout(function(){return n({registration:!1,mountRegistration:!1,loggin:!0,mountLoggin:!0})}),a()}},"loggedOut"))}return s.a.createElement("div",null,"NOT LOGGEDin, GO AWAY")}),re="GET_PLAYER_REQUESTED",se="POST_PLAYER_REQUESTED",ce="LOGOUT",oe="UPDATE_PLAYERS_ONLINE",ie="CREATE_GAME",le="UPDATE_GAME",ue=v("SET_LOGGED_STATUS","loggedIn","token"),me=v("SET_PLAYER_STATUS","payload"),de=v("SET_PLAYERS","players","clear"),pe=v("SET_SERVER_NOTIFICATION","requesting","message","success","utilities"),ge=v(re,"name","password","endpoint","method","utilities"),fe=v(se,"data","endpoint","method","headers","utilities"),Ee=v("SET_SOCKET_DATA","socketData"),ve=v(ce),be=v(ie,"payload"),Ne=function(){var e=Object(d.e)(function(e){return e.online.serverNotification},d.c),t=e.utilities,a=e.requesting,n=e.message,r=e.success,c=Object(d.d)();return console.log("////////////=>useServerNotification",a,n,r),{utilities:t,Loader:a?s.a.createElement("div",{key:"loader",className:"loaderContainer"},s.a.createElement("div",{className:"loader"})):null,Message:n&&!a?s.a.createElement("div",{key:"message",className:r?"response":"response fail"},n):null,success:r,setServerNotificationD:function(e,t,a,n){return c(pe(e,t,a,n))}}},ye=(a(173),0),Oe=function(e){var t=e.on,a=e.setActiveWindows,n=e.postPlayerRequested,c=e.getPlayerRequested,o=Object(M.a)(),i=o.register,l=o.handleSubmit,u=o.errors,m=o.reset;console.log("--------------------Registrattttttiiioooonnnn!!!!!!!!!!!!!",ye++);var d=Ne(),p=d.Loader,f=d.Message,E=d.success,v=d.setServerNotificationD,N=Object(r.useState)({file:null,name:null,password:null}),y=Object(b.a)(N,2),O=y[0],h=y[1],w=!p&&E?s.a.createElement("div",{key:"loggin",onClick:function(){c(O.name,O.password,"players","get",{cb:function(){m(),h({})}})},className:"logginButton"},"Loggin"):null,A=!p&&E?null:s.a.createElement("div",{className:"goLoggin",onClick:function(){v(null,"",null,null),a({registration:!0,mountRegistration:!0,loggin:!1,mountLoggin:!0}),setTimeout(function(){return a({registration:!1,mountRegistration:!0,loggin:!0,mountLoggin:!0})}),setTimeout(function(){return a({registration:!1,mountRegistration:!1,loggin:!0,mountLoggin:!0})},800)}},"GoLoggin");return s.a.createElement("section",{className:t?"registration on":"registration"},s.a.createElement("h3",{className:"title"},"Register"),s.a.createElement("form",{className:"form",onSubmit:l(function(e){h(Object(g.a)({},O,{name:e.name,password:e.password}));var t=new FormData;Object.keys(e).forEach(function(a){return t.append(a,e[a])}),t.append("avatar",O.files);n(t,"players","post",{"content-type":"multipart/form-data"},{})})},s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{className:u.name?"errorInput":null,name:"name",placeholder:"name",ref:i({required:!0,pattern:/^([a-zA-Z0-9_-]){3,8}$/})}),u.name&&s.a.createElement("span",{className:"error"},"name is required Please enter Alpanumeric Letters with length 3-8")),s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{className:u.password?"errorInput":null,name:"password",placeholder:"password",ref:i({required:!0,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}),u.password&&s.a.createElement("span",{className:"error"},"Password must contain",s.a.createElement("br",null),"1)At least 1 lowercase alphabetical character",s.a.createElement("br",null),"2)at least 1 uppercase alphabetical character",s.a.createElement("br",null),"3)at least 1 numeric character",s.a.createElement("br",null),"4)at least one special character(!@#$%^&*)",s.a.createElement("br",null),"5)at least 8 characters")),s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{className:u.maxPlayers?"errorInput":null,name:"maxPlayers",placeholder:"players Limmit (2-9)",ref:i({required:!0,pattern:/^[2-9]$/})}),u.maxPlayers&&s.a.createElement("span",{className:"error"},"players Limmit is required Please enter a number 2-8")),s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{className:u.maxTime?"errorInput":null,name:"maxTime",placeholder:"time Limmit(2-9)'",ref:i({required:!0,pattern:/^[2-9]$/})}),u.maxTime&&s.a.createElement("span",{className:"error"},"time Limmit is required Please enter a number 2-9")),s.a.createElement("div",{className:"inputField"},s.a.createElement("div",{className:"avatarButton"},s.a.createElement("label",{className:"avatarLabel"}," ","Upload Avatar",s.a.createElement("input",{className:"customFileInput",type:"file",name:"avatar",onChange:function(e){console.log(e.target.files[0]),h({files:e.target.files[0]})}})))),s.a.createElement("input",{className:"submit",type:"submit"})),A,s.a.createElement("div",{className:"responseContainer"},[f,w]," "),p)},he=(a(175),0),we=function(e){var t=e.on,a=e.setActiveWindows,n=e.getPlayerRequested;console.log("--------------------Logginnnnnnnnnnnn!!!!!!!!!!!!!",he++);var r=Ne(),c=r.Loader,o=r.Message,i=r.setServerNotificationD,l=Object(M.a)(),u=l.register,m=l.handleSubmit,d=l.reset;return s.a.createElement("section",{className:t?"login on":"login"},s.a.createElement("h3",{className:"title"},"Loggin"),s.a.createElement("form",{className:"form",onSubmit:m(function(e){var t=e.name,a=e.password;n(t,a,"players","get",{location:"loggin",cb:d})})},s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{name:"name",placeholder:"name",ref:u({required:!0})})),s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{name:"password",placeholder:"password",ref:u({required:!0})})),s.a.createElement("input",{className:"submit",type:"submit"})),s.a.createElement("div",{className:"goRegistration",onClick:function(){i(null,"",null,null),a({registration:!1,mountRegistration:!0,loggin:!1,mountLoggin:!0}),setTimeout(function(){return a({registration:!0,mountRegistration:!0,loggin:!1,mountLoggin:!0})}),setTimeout(function(){return a({registration:!0,mountRegistration:!0,loggin:!1,mountLoggin:!1})},800)}},"GoRegistration"),[o,c])},Ae=a(104),je=a.n(Ae),xe=function(e,t,a){var n=e.map(function(e){var n=e.name;return s.a.createElement("div",{key:n,"data-key":n,onClick:t,className:a.find(function(e){return e===n})?"tPlayer enemy":"tPlayer"},n)});return s.a.createElement("div",{key:e[0].maxTime,className:"timeRoom"},s.a.createElement("div",{className:"timeLimit"},e[0].maxTime),n)},qe=(a(267),function(){var e=Object(d.e)(function(e){return{players:e.online.players,games:e.online.games,myPlayerName:e.online.player.status.name}}),t=e.players,a=e.myPlayerName,n=e.games,r=Object(d.d)(),c=Object.values(n).map(function(e){return e.enemyName}),o=Object.values(t).reduce(function(e,t){return t.online&&t.name!==a?[].concat(Object(f.a)(e),[t]):e},[]),i=je()(o,function(e){return e.maxTime}),l=function(e){return r(be({player1:a,player2:e.target.getAttribute("data-key")}))},u=Object.values(i).reduce(function(e,t){return[].concat(Object(f.a)(e),[xe(t,l,c)])},[]);return s.a.createElement("section",{className:"liveOverview"},s.a.createElement("h3",{className:"title"},"Live Overview"),s.a.createElement("div",{className:"status options"},"Total active players, options, others"),s.a.createElement("div",{className:"timeRooms"},u))}),ke=(a(269),function(e){var t=e.ranks,a=e.player,n=e.getPlayerRequested,c=e.postPlayerRequested,o=e.logout,i=Object(r.useState)({registration:!1,mountRegistration:!1,loggin:!0,mountLoggin:!0}),l=Object(b.a)(i,2),u=l[0],m=l[1];return s.a.createElement("section",{className:"controlPanel"},s.a.createElement(ae,{ranks:t}),s.a.createElement("section",{className:"account"},s.a.createElement(ne,{myStatus:a.loggedStatus.loggedIn?a.status:null,setActiveWindows:m,logout:o}),u.mountRegistration&&s.a.createElement(Oe,{on:!a.loggedStatus.loggedIn&&u.registration,setActiveWindows:m,postPlayerRequested:c,getPlayerRequested:n}),u.mountLoggin&&s.a.createElement(we,{on:!a.loggedStatus.loggedIn&&u.loggin,setActiveWindows:m,getPlayerRequested:n})),s.a.createElement(qe,null))}),Te=function(e){var t=e.myName,a=e.player1,n=e.player2,c=e.squares,o=e.turn,i=(e.nameSpace,e.socketData),l=e.winnerData,u=l.winner,m=l.winnerLine;Object(r.useEffect)(function(){if(t===o){var e=setInterval(function(){return console.log("lose points")},1e3*a.maxTime);return function(){return clearTimeout(e)}}},[o]);var d=function(e){if(t===o&&!e.target.innerText&&!u){e.target.classList.add("mySquare");var a=e.target.getAttribute("data-squareindex");i.socket.emit(i.cs.root.UPDATE_GAME,{squareIndex:a})}},p=a.name===t?"player myPlayer":"player enemy";p+=o===a.name?" turn":"";var g=n.name===t?"player myPlayer":"player enemy";g+=o===n.name?" turn":"";var f=u?u===t?"won":"lost":"";return s.a.createElement("div",{className:"game "+f},s.a.createElement("div",{className:"players"},s.a.createElement("span",{className:p},s.a.createElement("span",null,a.name),s.a.createElement("span",null,a.points)),s.a.createElement("img",{className:"player enemysAvatar",src:t!==a.name?K+a.avatar:K+n.avatar,alt:""}),s.a.createElement("span",{className:g},s.a.createElement("span",null,n.name),s.a.createElement("span",null,n.points))),s.a.createElement("div",{className:"gameBoard"},s.a.createElement("div",{className:"boardRow"},s.a.createElement("button",{className:m?void 0!==m.find(function(e){return 0===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"0",onClick:d},c[0]),s.a.createElement("button",{className:m?m.find(function(e){return 1===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"1",onClick:d},c[1]),s.a.createElement("button",{className:m?m.find(function(e){return 2===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"2",onClick:d},c[2])),s.a.createElement("div",{className:"boardRow"},s.a.createElement("button",{className:m?m.find(function(e){return 3===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"3",onClick:d},c[3]),s.a.createElement("button",{className:m?m.find(function(e){return 4===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"4",onClick:d},c[4]),s.a.createElement("button",{className:m?m.find(function(e){return 5===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"5",onClick:d},c[5])),s.a.createElement("div",{className:"boardRow"},s.a.createElement("button",{className:m?m.find(function(e){return 6===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"6",onClick:d},c[6]),s.a.createElement("button",{className:m?m.find(function(e){return 7===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"7",onClick:d},c[7]),s.a.createElement("button",{className:m?m.find(function(e){return 8===e})?"squareW squareA square "+f:"squareA square":"square","data-squareindex":"8",onClick:d},c[8]))))},Se=(a(271),function(){var e=Object(d.e)(function(e){return{games:Object.values(e.online.games)}}).games.map(function(e){return s.a.createElement(Te,Object.assign({key:e.name},e))});return s.a.createElement("div",{className:"gamesContainer"},e)}),Ie=a(16),Le=Object(Ie.c)({loggedStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedIn:!1,token:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED_STATUS":return Object(g.a)({},e,{loggedIn:t.loggedIn,token:t.token});default:return e}},status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLAYER_STATUS":return Object(g.a)({},e,t.payload);default:return e}}}),_e=Object(Ie.c)({player:Le,players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLAYERS":return t.clear?{}:Object(g.a)({},e,t.players);case oe:var a=Object(g.a)({},e);return Object.keys(a).forEach(function(e){return a[e].online=!!t.payload[e]}),a;default:return e}},serverNotification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{requesting:null,message:null,success:null,utilities:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SERVER_NOTIFICATION":var a=t.requesting,n=t.utilities,r=t.message,s=t.success;return{requesting:a,message:r=null!==r?r:e.message,success:s=null!==s?s:e.success,utilities:n};default:return e}},socketData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOCKET_DATA":return Object(g.a)({},e,t.socketData);default:return e}},games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>UPDATE_GAME",t),Object(g.a)({},e,t.payload);default:return e}}}),Pe=a(4),Re=a(30),De=$.a.mark(Xe),Ce=$.a.mark(We);function Ge(e){var t=e.socket,a=e.ss,n=e.cs;return Object(Re.b)(function(e){function r(){return(r=Object(V.a)($.a.mark(function t(r){var s;return $.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(">>>>>>>>>SAGA-------CREATE-SOCKET-CHANEL___createGame-from ss",r),t.next=3,Z({nameSpace:r});case 3:(s=t.sent).ss=a,s.cs=n,e({type:"WATCH_SOCKET_GAME",payload:s});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}t.on(a.root.UPDATE_PLAYERS,function(t){var a=t.onlinePlayers;e({type:oe,payload:a})}),t.on(a.root.CREATE_GAME,function(e){return r.apply(this,arguments)});return function(){}})}function Xe(e,t){var a,n,r,s,c;return $.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=t.status,t.token,o.next=3,Object(Pe.b)(Ge,e);case 3:n=o.sent,e.socket.emit(e.cs.root.UPDATE_PLAYERS,{message:"Dude!!! I am a React Client IN SAGA CHANELL!! and i am connected to you!!!!Take my name,my password and my token",data:Object(g.a)({},a)});case 5:return o.prev=6,o.next=9,Object(Pe.f)(n);case 9:return r=o.sent,s=r.type,c=r.payload,o.next=14,Object(Pe.d)({type:s,payload:c});case 14:o.next=19;break;case 16:o.prev=16,o.t0=o.catch(6),console.error("socket error:",o.t0);case 19:o.next=5;break;case 21:case"end":return o.stop()}},De,null,[[6,16]])}function Ue(e){var t=e.socket,a=e.ss;return Object(Re.b)(function(n){t.on(a.root.UPDATE_GAME,function(t){for(var a in t){t[a].socketData=e;break}n({type:le,payload:t})});return function(){}})}function We(e){var t,a,n,r;return $.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(Pe.b)(Ue,e);case 2:t=s.sent;case 3:return s.prev=4,s.next=7,Object(Pe.f)(t);case 7:return a=s.sent,n=a.type,r=a.payload,s.next=12,Object(Pe.d)({type:n,payload:r});case 12:s.next=17;break;case 14:s.prev=14,s.t0=s.catch(4),console.error("socket error:",s.t0);case 17:s.next=3;break;case 19:case"end":return s.stop()}},Ce,null,[[4,14]])}var Me=$.a.mark(Qe),Fe=$.a.mark(Ke),He=$.a.mark(Ze),Be=$.a.mark(Je),Ye=$.a.mark(et),$e=$.a.mark(tt),Ve=$.a.mark(at),ze=$.a.mark(nt);function Qe(e){var t,a,n,r,s,c,o,i,l,u,m,d,p,g,f,E;return $.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return t=e.name,a=e.password,n=e.endpoint,r=e.method,s=e.utilities,c={name:t,password:a},v.next=4,Object(Pe.d)(pe(!0,null,null,s));case 4:return v.prev=4,v.next=7,Object(Pe.b)(te,{method:r,endpoint:n,data:c});case 7:return o=v.sent,i=o.message,l=o.token,u=o.status,s.loggedIn=!0,v.next=14,Object(Pe.a)([Object(Pe.b)(te,{method:"get",endpoint:"players",token:l}),Object(Pe.b)(Z,{name:t,password:a,token:l})]);case 14:return m=v.sent,d=Object(b.a)(m,2),p=d[0].allPlayers,g=d[1],v.next=20,Object(Pe.c)(Xe,g,{status:u,token:l});case 20:return s.cb&&s.cb(),v.next=23,Object(Pe.a)([Object(Pe.d)(pe(!1,i,!0,s)),Object(Pe.d)(ue(!0,l)),Object(Pe.d)(me(u)),Object(Pe.d)(de(B("name",p))),Object(Pe.d)(Ee(g))]);case 23:v.next=30;break;case 25:return v.prev=25,v.t0=v.catch(4),f=v.t0.response?v.t0.response.data:{message:"unknown error"},E=f.message,v.next=30,Object(Pe.d)(pe(!1,E,!1,s));case 30:case"end":return v.stop()}},Me,null,[[4,25]])}function Ke(){return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.g)(re,Qe);case 2:case"end":return e.stop()}},Fe)}function Ze(e){var t,a,n,r,s,c,o,i;return $.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.endpoint,a=e.data,n=e.method,r=e.utilities,s=e.headers,console.log("****************PostPlayerWorker Action",e),l.next=4,Object(Pe.d)(pe(!0,null,null,r));case 4:return l.prev=4,l.next=7,Object(Pe.b)(te,{method:n,endpoint:t,data:a,headers:s});case 7:return c=l.sent,o=c.message,l.next=11,Object(Pe.d)(pe(!1,o,!0,{logginSuccess:!0}));case 11:l.next=18;break;case 13:return l.prev=13,l.t0=l.catch(4),i=l.t0.response.data.message,l.next=18,Object(Pe.d)(pe(!1,i,!1,r));case 18:case"end":return l.stop()}},He,null,[[4,13]])}function Je(){return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.g)(se,Ze);case 2:case"end":return e.stop()}},Be)}function et(){var e;return $.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.f)(ce);case 2:if(!t.sent){t.next=12;break}return console.log("loggoutTriggeeerrreeeddd"),t.next=6,Object(Pe.e)(function(e){return e.online.socketData});case 6:return(e=t.sent).socket.emit(e.cs.root.MANULLY_DISCONNECT),t.next=10,Object(Pe.a)([Object(Pe.d)(ue(!1,null)),Object(Pe.d)(me(null)),Object(Pe.d)(pe(null,"",null,null)),Object(Pe.d)(de({},!0))]);case 10:t.next=0;break;case 12:case"end":return t.stop()}},Ye)}function tt(){var e,t;return $.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(Pe.f)(ie);case 3:return e=a.sent,a.next=6,Object(Pe.e)(function(e){return e.online.socketData});case 6:t=a.sent,console.log("CREATE_GAME",e),t.socket.emit(t.cs.root.CREATE_GAME,Object(g.a)({},e.payload)),a.next=0;break;case 11:case"end":return a.stop()}},$e)}function at(){var e,t;return $.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(Pe.f)("WATCH_SOCKET_GAME");case 3:return e=a.sent,t=e.payload,a.next=7,Object(Pe.c)(We,t);case 7:a.next=0;break;case 9:case"end":return a.stop()}},Ve)}function nt(){return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.a)([Ke(),Je(),et(),tt(),at()]);case 2:case"end":return e.stop()}},ze)}a(273);var rt=Object(d.b)(function(e){var t=e.online;return{player:t.player,socketData:t.socketData}},{getPlayerRequested:ge,postPlayerRequested:fe,logout:ve})(function(e){var t=e.player,a=e.getPlayerRequested,n=e.postPlayerRequested,r=e.logout;return s.a.createElement("section",{className:"onLinePage"},s.a.createElement(ke,{player:t,getPlayerRequested:a,postPlayerRequested:n,logout:r}),s.a.createElement(Se,null))}),st=a(46),ct=a(45);function ot(){return s.a.createElement(st.a,null,s.a.createElement(ct.c,null,s.a.createElement(ct.a,{exact:!0,path:"/"},s.a.createElement("nav",{className:"modes"},s.a.createElement(st.b,{className:"modeLink",to:"/offLine"},"OffLineMode"),s.a.createElement(st.b,{className:"modeLink",to:"/onLine"},"onLineMode"))),s.a.createElement(ct.a,{exact:!0,path:"/offLine"},s.a.createElement(H,null)),s.a.createElement(ct.a,{path:"/onLine",component:rt},s.a.createElement(rt,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var it=Object(Re.a)(),lt=Object(Ie.c)({online:_e,games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_GAME":var a=Object(p.a)({},t.newGameId,k(void 0,t));return Object(g.a)({},e,a);case"ADD_SQUARE":case"CUT":case"CHANGE_XISNEXT":case"CHANGE_STEP":case"LOSE_POINTS":var n=e[t.gameId],r=k(n,t);return Object(g.a)({},e,Object(p.a)({},t.gameId,r));default:return e}}}),ut=Object(Ie.e)(lt,Object(Ie.d)(Object(Ie.a)(it),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));it.run(nt),o.a.render(s.a.createElement(d.a,{store:ut},s.a.createElement(ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[107,2,1]]]);
//# sourceMappingURL=main.ba28c3aa.chunk.js.map