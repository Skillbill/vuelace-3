import{h as t}from"./VLTextArea-haNQI8wn.js";import"./vue.esm-bundler-DEjXoRfX.js";import"./api.esm-D392XNf6.js";const o={title:"Components/Number input",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large",void 0]}},args:{}},a={args:{label:"Age (VLNumberInput)",clearable:!0,helpText:"The number must be between 0 and 150",rules:[{validateFn:e=>e!=null,message:"The value is required"},{validateFn:e=>e>0,message:"The value must be greater than 0"},{validateFn:e=>e<=150,message:"The number must be less than 150"}]}};var n,r,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const i=["Primary"];export{a as Primary,i as __namedExportsOrder,o as default};
