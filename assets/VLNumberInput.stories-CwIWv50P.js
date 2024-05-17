import{h as t}from"./VLCrud-YwUZMWmj.js";import"./vue.esm-bundler-CM7cZQeb.js";import"./api.esm-C3jrVNCq.js";const i={title:"Vuelace3/Number input",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large",void 0]}},args:{}},a={args:{label:"Age (VLNumberInput)",clearable:!0,helpText:"The number must be between 0 and 150",rules:[{validateFn:e=>e!=null,message:"The value is required"},{validateFn:e=>e>0,message:"The value must be greater than 0"},{validateFn:e=>e<=150,message:"The number must be less than 150"}]}};var r,n,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Age (VLNumberInput)',
    clearable: true,
    helpText: 'The number must be between 0 and 150',
    rules: [{
      validateFn: (value: number | undefined) => value != undefined,
      message: 'The value is required'
    }, {
      validateFn: (value: number) => value > 0,
      message: 'The value must be greater than 0'
    }, {
      validateFn: (value: number) => value <= 150,
      message: 'The number must be less than 150'
    }]
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const o=["Primary"];export{a as Primary,o as __namedExportsOrder,i as default};
