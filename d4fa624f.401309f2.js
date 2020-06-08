(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{363:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(4),a=n(11),i=(n(0),n(394)),o={id:"time",title:"Time"},c={id:"plugins/time",title:"Time",description:"Installation",source:"@site/docs/plugins/time.md",permalink:"/docs/plugins/time",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/time.md",sidebar:"sidebar",previous:{title:"Add",permalink:"/docs/plugins/add"},next:{title:"Relay Operation Optimizer",permalink:"/docs/plugins/relay-operation-optimizer"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[{value:"format (<code>string</code>, default value: <code>YYYY-MM-DDTHH:mm:ssZ</code>)",id:"format-string-default-value-yyyy-mm-ddthhmmssz",children:[]},{value:"message (<code>string</code>, default value: <code>Generated on</code>)",id:"message-string-default-value-generated-on",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/time\n")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"You can either specify a ",Object(i.b)("inlineCode",{parentName:"p"},"string")," that contains the moment format, or specify an object with the following:"),Object(i.b)("h3",{id:"format-string-default-value-yyyy-mm-ddthhmmssz"},"format (",Object(i.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"YYYY-MM-DDTHH:mm:ssZ"),")"),Object(i.b)("p",null,"Customize the Moment format of the output time."),Object(i.b)("h4",{id:"usage-example"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - time:\n       format: DD.MM.YY\n")),Object(i.b)("h3",{id:"message-string-default-value-generated-on"},"message (",Object(i.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"Generated on"),")"),Object(i.b)("p",null,"Customize the comment message"),Object(i.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'generates:\npath/to/file.ts:\n plugins:\n   - time:\n       message: "The file generated on: "\n')))}s.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);