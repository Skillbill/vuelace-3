import{d as b}from"./VLCrud-CKYllaQO.js";import"./vue.esm-bundler-CM7cZQeb.js";import"./api.esm-C3jrVNCq.js";const M={title:"Vuelace3/Date picker",component:b,tags:["autodocs"],argTypes:{selectionMode:{control:"select",options:["single","range","multiple",void 0]}},args:{}},e={args:{label:"Date of birth (VLDatePicker)",rules:[{validateFn:n=>!!n,message:"The value is required"},{validateFn:n=>n.getTime()<new Date().getTime(),message:"Oh...it seems you are not born yet!"}]}},a={args:{label:"Date",name:"DateInput",placeholder:"Select a date...",selectionMode:"multiple"}},t={args:{label:"Date",name:"DateInput",placeholder:"Select a date...",selectionMode:"range"}},r={args:{label:"Date",name:"DateInput",placeholder:"Select a date and time...",withTime:!0}};var s,l,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
