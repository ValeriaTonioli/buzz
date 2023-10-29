"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,f=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"Preferences",sidebar_position:4},i=void 0,o={unversionedId:"preferences",id:"preferences",title:"Preferences",description:"Open the Preferences window from the Menu bar, or click Ctrl/Cmd + ,.",source:"@site/docs/preferences.md",sourceDirName:".",slug:"/preferences",permalink:"/buzz/docs/preferences",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Preferences",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Live Recording",permalink:"/buzz/docs/usage/live_recording"},next:{title:"CLI",permalink:"/buzz/docs/cli"}},p={},d=[{value:"General Preferences",id:"general-preferences",level:2},{value:"Default export file name",id:"default-export-file-name",level:3}],m={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Open the Preferences window from the Menu bar, or click ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl/Cmd + ,"),"."),(0,a.kt)("h2",{id:"general-preferences"},"General Preferences"),(0,a.kt)("h3",{id:"default-export-file-name"},"Default export file name"),(0,a.kt)("p",null,"Sets the default export file name for file transcriptions. For\nexample, a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ input_file_name }} ({{ task }}d on {{ date_time }})")," will save TXT exports\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"Input Filename (transcribed on 19-Sep-2023 20-39-25).txt")," by default."),(0,a.kt)("p",null,"Available variables:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"input_file_name")),(0,a.kt)("td",{parentName:"tr",align:null},"File name of the imported file"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"audio")," (e.g. if the imported file path was ",(0,a.kt)("inlineCode",{parentName:"td"},"/path/to/audio.wav"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"task")),(0,a.kt)("td",{parentName:"tr",align:null},"Transcription task"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"transcribe"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"translate"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"language")),(0,a.kt)("td",{parentName:"tr",align:null},"Language code"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"en"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"fr"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"yo"),", etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"model_type")),(0,a.kt)("td",{parentName:"tr",align:null},"Model type"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Whisper"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Whisper.cpp"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Faster Whisper"),", etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"model_size")),(0,a.kt)("td",{parentName:"tr",align:null},"Model size"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tiny"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"base"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"small"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"medium"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"large"),", etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"date_time")),(0,a.kt)("td",{parentName:"tr",align:null},"Export time (format: ",(0,a.kt)("inlineCode",{parentName:"td"},"%d-%b-%Y %H-%M-%S"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"19-Sep-2023 20-39-25"))))))}u.isMDXComponent=!0}}]);