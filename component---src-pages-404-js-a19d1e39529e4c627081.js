(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(182),o=a(180);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},176:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});a(34),a(20);var n=a(0),r=a.n(n);function i(e,t){var a=t.payload;switch(t.type){case"updateLastSpoken":return Object.assign({},e,{lastSpoken:a});case"addResult":return Object.assign({},e,{results:[].concat(e.results,[{spoken:e.lastSpoken,translated:a}])});case"setFromLang":return Object.assign({},e,{fromLang:{name:a.name,code:a.code}});case"setToLang":return Object.assign({},e,{toLang:{name:a.name,code:a.code}});case"toggleListening":return Object.assign({},e,{listening:!e.listening});default:return e}}var o=Object(n.createContext)();function s(){var e=Object(n.useContext)(o);if(!e)throw new Error("useSpeechProvider must be used within a SpeechProvider");return e}function c(e){var t=Object(n.useReducer)(i,{fromLang:{name:"English",code:"en"},toLang:{name:"Japanese",code:"ja"},lastSpoken:"",listening:!1,results:[]}),a=t[0],s=t[1];var c={speechState:a,updateLastSpoken:function(e){s({type:"updateLastSpoken",payload:e})},addTranslationResult:function(e){s({type:"addResult",payload:e})},setFromLang:function(e){s({type:"setFromLang",payload:e})},clearFromLang:function(){s({type:"setFromLang",payload:{name:"",code:""}})},setToLang:function(e){s({type:"setToLang",payload:e})},clearToLang:function(){s({type:"setToLang",payload:{name:"",code:""}})},toggleListening:function(){s({type:"toggleListening"})}};return r.a.createElement(o.Provider,Object.assign({value:c},e))}},177:function(e,t,a){var n;e.exports=(n=a(179))&&n.default||n},178:function(e){e.exports={data:{site:{siteMetadata:{title:"Babelfish"}}}}},179:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),s=a(88),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},180:function(e,t,a){"use strict";var n=a(181),r=a(0),i=a.n(r),o=a(11),s=a.n(o),c=a(184),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,c=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Babelfish",description:"A spoken translation app",author:"Lee Warrick"}}}}},182:function(e,t,a){"use strict";var n=a(178),r=a(0),i=a.n(r),o=a(11),s=a.n(o),c=a(58),l=a.n(c);a(177),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func;var u=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var d=u,p=(a(183),a(176)),m=function(e){var t=e.children,a=n.data;return i.a.createElement(p.a,null,i.a.createElement("div",{className:"font-serif"},i.a.createElement(d,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{className:"container mx-auto"},i.a.createElement("main",null,t))))};m.propTypes={children:s.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-a19d1e39529e4c627081.js.map