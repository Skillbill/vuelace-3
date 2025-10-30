import{d as b}from"./VLRadioGroup-bghozsU6.js";import"./vue.esm-bundler-B0YmCfnK.js";import"./api.esm-D392XNf6.js";const M={title:"Components/Date picker",component:b,tags:["autodocs"],argTypes:{selectionMode:{control:"select",options:["single","range","multiple",void 0]}},args:{}},e={args:{label:"Date of birth (VLDatePicker)",rules:[{validateFn:n=>!!n,message:"The value is required"},{validateFn:n=>n.getTime()<new Date().getTime(),message:"Oh...it seems you are not born yet!"}]}},a={args:{label:"Date",name:"DateInput",placeholder:"Select a date...",selectionMode:"multiple"}},t={args:{label:"Date",name:"DateInput",placeholder:"Select a date...",selectionMode:"range"}},r={args:{label:"Date",name:"DateInput",placeholder:"Select a date and time...",withTime:!0}};var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth (VLDatePicker)',
    rules: [{
      validateFn: (value: Date | undefined) => !!value,
      message: 'The value is required'
    }, {
      validateFn: (value: Date) => value.getTime() < new Date().getTime(),
      message: 'Oh...it seems you are not born yet!'
    }]
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    name: 'DateInput',
    placeholder: 'Select a date...',
    selectionMode: 'multiple'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    name: 'DateInput',
    placeholder: 'Select a date...',
    selectionMode: 'range'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,D,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    name: 'DateInput',
    placeholder: 'Select a date and time...',
    withTime: true
  }
}`,...(h=(D=r.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const I=["Single","Multiple","Range","WithTime"];export{a as Multiple,t as Range,e as Single,r as WithTime,I as __namedExportsOrder,M as default};
