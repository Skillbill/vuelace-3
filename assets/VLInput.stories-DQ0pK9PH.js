import{g as s}from"./VLCrud-CKYllaQO.js";import"./vue.esm-bundler-CM7cZQeb.js";import"./api.esm-C3jrVNCq.js";const c={title:"Vuelace3/Input",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large",void 0]},type:{control:"select",options:["password","text","email",void 0]},autocapitalize:{control:"select",options:["off","none","on","sentences","words","characters",void 0]},autocorrect:{control:"select",options:["off","on",void 0]},inputmode:{control:"select",options:["none","text","email",void 0]}}},t={args:{label:"Name (VLInput)",rules:[{validateFn:e=>e&&e.length>0,message:"The value is required"},{validateFn:e=>e.length>1,message:"The value must be at least than 2 character long"}]}};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Name (VLInput)',
    rules: [{
      validateFn: (value: string | undefined) => value && value.length > 0,
      message: 'The value is required'
    }, {
      validateFn: (value: string) => value.length > 1,
      message: 'The value must be at least than 2 character long'
    }]
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const u=["Primary"];export{t as Primary,u as __namedExportsOrder,c as default};
