(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),b=(n(0),n(198)),c={id:"button",title:"Button",sidebar_label:"Button"},i={id:"button",isDocsHomePage:!1,title:"Button",description:"Button components helps to handle all user actions using onPress handlers, the button component has some types defined inside it which display various form of buttons on the basis of that,any time you can customize it by passing the custom styles. On the lower level it uses react-native-material-ripple",source:"@site/docs/button.md",permalink:"/frontatish/docs/button",editUrl:"https://github.com/Groww/frontatish/edit/alpha/docs/documentation/docs/button.md",sidebar_label:"Button",sidebar:"someSidebar",previous:{title:"Contributing",permalink:"/frontatish/docs/contributing"},next:{title:"CheckBox",permalink:"/frontatish/docs/checkbox"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"onPress",id:"onpress",children:[]},{value:"label",id:"label",children:[]},{value:"type",id:"type",children:[]},{value:"loading",id:"loading",children:[]},{value:"disabled",id:"disabled",children:[]},{value:"customStyles",id:"customstyles",children:[]}]}],l={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Button components helps to handle all user actions using onPress handlers, the button component has some types defined inside it which display various form of buttons on the basis of that,any time you can customize it by passing the custom styles. On the lower level it uses ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-material-ripple"}),"react-native-material-ripple")),Object(b.b)("div",{className:"image-horizontal-preview"},Object(b.b)("figure",null,Object(b.b)("img",{src:"/frontatish/img/button-light.png",alt:"primary-button"})),Object(b.b)("figure",null,Object(b.b)("img",{src:"/frontatish/img/button-dark.png",alt:"secondary-button"}))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// react base imports\n\nimport { Button } from \'frontatish\';\n\n// primary button\n<Button\n  type="primary"\n  label="primary button"\n  onPress={() => console.log(\'Pressed\')}\n/>\n\n// secondary button\n<Button\n  label="secondary button"\n  type="primary"\n  onPress={() => console.log(\'Pressed\')}\n/>\n\n')),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"onpress"},"onPress"),Object(b.b)("p",null,"Function to be called when user taps on the button"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"None",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"label"},"label"),Object(b.b)("p",null,"Label to display inside the button"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"None ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"type"},"type"),Object(b.b)("p",null,"On the basis of ",Object(b.b)("strong",{parentName:"p"},"type")," passed to component, it applies the defined style to it"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Values"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"primary")," ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"primary or secondary ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"loading"},"loading"),Object(b.b)("p",null,"loading ensures that user see some indicator while some action is getting done,it also disables onPress when loading is true so that function call can be atomic."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"disabled"},"disabled"),Object(b.b)("p",null,"disabled make sure if its true then user won't be able to click it and the onPress would not get called"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"customstyles"},"customStyles"),Object(b.b)("p",null,"A react native style object which takes care of styling the button component as per your needs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))))}s.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=s(n),O=a,j=p["".concat(c,".").concat(O)]||p[O]||d[O]||b;return n?r.a.createElement(j,i(i({ref:t},l),{},{components:n})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<b;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);