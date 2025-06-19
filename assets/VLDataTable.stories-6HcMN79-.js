import{c as r}from"./VLTextArea-D2lUVC5j.js";import{_ as s}from"./ActiveCell-DeeRdDJ1.js";import{s as m}from"./vue.esm-bundler-DEjXoRfX.js";import"./api.esm-D392XNf6.js";import"./main-BA7XvICN.js";const i=()=>new Array(40).fill(0).map((l,e)=>({username:`user${e}`,firstName:`Name${e}`,lastName:`LastName${e}`,active:e%2,activation_date:"2021-01-01",expiration_date:"2025-12-31"})),_={title:"Components/Data Table",component:r,tags:["autodocs"],argTypes:{selectionMode:{control:"select",options:[void 0,"single","multiple"]}},args:{}},a={args:{columns:[{name:"Username",value:"username"},{name:"First name",value:"firstName",sortable:!0},{name:"Last name",value:"lastName"},{name:"Active",value:"active",component:m(s),componentProps:{trueColor:"text-yellow-500"}},{name:"Activation Date",value:"activation_date"},{name:"Expiration Date",value:"expiration_date"}],actions:[],items:i()}};var t,n,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    columns: [{
      name: 'Username',
      value: 'username'
    }, {
      name: 'First name',
      value: 'firstName',
      sortable: true
    }, {
      name: 'Last name',
      value: 'lastName'
    }, {
      name: 'Active',
      value: 'active',
      component: shallowRef(ActiveComponent),
      componentProps: {
        trueColor: 'text-yellow-500'
      }
    }, {
      name: 'Activation Date',
      value: 'activation_date'
    }, {
      name: 'Expiration Date',
      value: 'expiration_date'
    }],
    actions: [],
    items: getItems()
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const f=["Simple"];export{a as Simple,f as __namedExportsOrder,_ as default};
