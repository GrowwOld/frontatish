(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),c=(n(0),n(198)),i={id:"numpad",title:"NumPad",sidebar_label:"NumPad"},b={id:"numpad",isDocsHomePage:!1,title:"NumPad",description:"Numpad is custom designed keypad for handling number inputs,it rely on react-native-material-ripple,to have ripple effect on every number press.",source:"@site/docs/numpad.md",permalink:"/frontatish/docs/numpad",editUrl:"https://github.com/Groww/frontatish/edit/alpha/docs/documentation/docs/numpad.md",sidebar_label:"NumPad",sidebar:"someSidebar",previous:{title:"CheckBox",permalink:"/frontatish/docs/checkbox"},next:{title:"CodeInput",permalink:"/frontatish/docs/codeinput"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"onItemClick",id:"onitemclick",children:[]},{value:"onDeleteItem",id:"ondeleteitem",children:[]},{value:"onItemKeyClick",id:"onitemkeyclick",children:[]},{value:"onSubmit",id:"onsubmit",children:[]}]}],l={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Numpad is custom designed keypad for handling number inputs,it rely on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-material-ripple"}),"react-native-material-ripple"),",to have ripple effect on every number press."),Object(c.b)("div",{className:"image-horizontal-preview"},Object(c.b)("figure",null,Object(c.b)("img",{src:"/frontatish/img/numpad.png",alt:"NumberPad",height:"250"})),Object(c.b)("figure",null,Object(c.b)("img",{src:"/frontatish/img/numpad_2.png",alt:"NumberPad",height:"250"}))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { NumPad } from 'frontatish';\n\nclass NumPadExample extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { input: '' };\n  }\n\n  onItemClick = (value) => {\n    const { input } = this.state;\n    if (input.length < 10) {\n      this.setState({ input: input + value });\n    }\n  };\n\n  onDeleteItem = () => {\n    const { input } = this.state;\n    this.setState({ input: input.substring(0, input.length - 1) });\n  };\n\n  render() {\n    const { input } = this.state;\n    return (\n      <NumPad onItemClick={this.onItemClick} onDeleteItem={this.onDeleteItem} />\n    );\n  }\n}\n")),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"onitemclick"},"onItemClick"),Object(c.b)("p",null,"Callback function which gets called on every item press in number pad,you can see the usage to understand better\nit will basically append the the value you will press, eventually in the parent state."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(c.b)("img",{width:"500"}))))),Object(c.b)("h3",{id:"ondeleteitem"},"onDeleteItem"),Object(c.b)("p",null,"Callback function which gets called on delete icon press,you can see the usage to understand better\nit will basically delete the the last item from the current value."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(c.b)("img",{width:"500"}))))),Object(c.b)("h3",{id:"onitemkeyclick"},"onItemKeyClick"),Object(c.b)("p",null,"Callback function which gets called if passed and with these argument ",Object(c.b)("inlineCode",{parentName:"p"},"keyStroke")," which is of type ",Object(c.b)("inlineCode",{parentName:"p"},"keyStrokeType"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(c.b)("img",{width:"500"}))))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"keyStrokeType ",Object(c.b)("inlineCode",{parentName:"p"},"{ actionType:'insert' | 'delete' ,actionId: number,value: string }"))),Object(c.b)("p",null,"keyStrokeType can help you to build more customizable components with it. for example to make use of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"codeinput"}),"CodeInput")," along with the NumPad component this method will help you to use both of them together seamlessly"),Object(c.b)("h3",{id:"onsubmit"},"onSubmit"),Object(c.b)("p",null,"Callback function which gets called on pressing submit button in the keypad"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(c.b)("img",{width:"500"}))))))}p.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,s=u["".concat(i,".").concat(d)]||u[d]||m[d]||c;return n?r.a.createElement(s,b(b({ref:t},l),{},{components:n})):r.a.createElement(s,b({ref:t},l))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);