import{r as p}from"./index-B3ehnkiM.js";import{useMDXComponents as c}from"./index-rbP-kYFP.js";import"./_commonjsHelpers-Cpj98o6Y.js";var d={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=p,x=Symbol.for("react.element"),m=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,j=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(i,e,r){var l,o={},s=null,h=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(h=e.ref);for(l in e)b.call(e,l)&&!y.hasOwnProperty(l)&&(o[l]=e[l]);if(i&&i.defaultProps)for(l in e=i.defaultProps,e)o[l]===void 0&&(o[l]=e[l]);return{$$typeof:x,type:i,key:s,ref:h,props:o,_owner:j.current}}t.Fragment=m;t.jsx=u;t.jsxs=u;d.exports=t;var n=d.exports;function a(i){const e={a:"a",h1:"h1",h2:"h2",p:"p",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
  .sbdocs.sbdocs-wrapper {
    padding: 0 20px;
  }
`}),`
`,n.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center",justifyContent:"end",width:"100%",position:"fixed",top:0,right:20,zIndex:50},children:n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"12px",backgroundColor:"white"},children:[n.jsx("a",{href:"https://www.github.com/Skillbill/vuelace-3",children:n.jsx("img",{style:{height:"36px"},src:"assets/github-mark.svg",alt:"GitHub"})}),n.jsx("a",{href:"https://www.skillbill.it",children:n.jsx("img",{style:{height:"36px"},src:"assets/logo_skillbill_00.svg",alt:"Skillbill"})})]})}),`
`,n.jsx(e.h1,{id:"introduction",children:"Introduction"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://www.github.com/Skillbill/vuelace-3",rel:"nofollow",children:"Vuelace-3"}),` is a UI component library for Vue,
built on top of `,n.jsx(e.a,{href:"https://shoelace.style/",rel:"nofollow",children:"Shoelace"})," and ",n.jsx(e.a,{href:"https://primevue.org/",rel:"nofollow",children:"PrimeVue"}),"."]}),`
`,n.jsx(e.p,{children:`The scope was to have a friendly components wrapper for the Shoelace web components ready to use in Vue.
We also included some utilities to use icons comfortably and fulfill missing components with PrimeVue's ones.`}),`
`,n.jsx(e.h2,{id:"details",children:"Details"}),`
`,n.jsx(e.p,{children:"We don't describe components in detail here because there is the storybook components list on the left panel."}),`
`,n.jsx(e.p,{children:`If you need to build a site using Vue and you are looking for a ready-to-use components for crud,
forms, and so on, you are in the right place.`}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick start"}),`
`,n.jsxs(e.p,{children:[`It is an easy-to-use vue3 library,
you can find every updated detail in the `,n.jsx(e.a,{href:"https://github.com/Skillbill/vuelace-3/blob/main/README.md",rel:"nofollow",children:"README"})]}),`
`,n.jsx(e.h2,{id:"support",children:"Support"}),`
`,n.jsxs(e.p,{children:[`Do you have questions, suggestions or do you need help?
Please feel free to `,n.jsx(e.a,{href:"https://github.com/Skillbill/vuelace-3/issues/new/choose",rel:"nofollow",children:"open"})," an issue on GitHub!"]}),`
`,n.jsx(e.h2,{id:"contributing",children:"Contributing"}),`
`,n.jsxs(e.p,{children:["There are some guidelines in ",n.jsx(e.a,{href:"https://github.com/Skillbill/vuelace-3/blob/main/CONTRIBUTING.md",rel:"nofollow",children:"CONTRIBUTING"})]}),`
`,n.jsx(e.h2,{id:"license",children:"License"}),`
`,n.jsxs(e.p,{children:["The whole library is under ",n.jsx(e.a,{href:"https://github.com/Skillbill/vuelace-3/blob/main/LICENSE",rel:"nofollow",children:"MIT License"})]}),`
`,n.jsx(e.h2,{id:"versioning",children:"Versioning"}),`
`,n.jsxs(e.p,{children:["We use the standard ",n.jsx(e.a,{href:"https://semver.org/",rel:"nofollow",children:"SemVer"})]}),`
`,n.jsx(e.h2,{id:"about",children:"About"}),`
`,n.jsxs(e.p,{children:["Vuelace-3 is a library built for internal needs by ",n.jsx(e.a,{href:"https://www.skillbill.it",rel:"nofollow",children:"Skillbill"}),`
and made open source to allow anyone to use it or contribute to it.`]})]})}function k(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{k as default};
