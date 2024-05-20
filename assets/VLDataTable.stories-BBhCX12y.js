import{c as o}from"./VLTextArea-D-cT8AaM.js";import{_ as s}from"./ActiveCell-L8W9246E.js";import{s as m}from"./vue.esm-bundler-BYZbTIRI.js";import"./api.esm-C3jrVNCq.js";import"./main-hpqHc6ls.js";const i=()=>new Array(40).fill(0).map((l,e)=>({username:`user${e}`,firstName:`Name${e}`,lastName:`LastName${e}`,active:e%2,activation_date:"2021-01-01",expiration_date:"2025-12-31"})),_={title:"Components/Data Table",component:o,tags:["autodocs"],argTypes:{selectionMode:{control:"select",options:[void 0,"single","multiple"]}},args:{}},a={args:{columns:[{name:"header.username",value:"username"},{name:"header.firstname",value:"firstName",sortable:!0},{name:"header.lastname",value:"lastName"},{name:"header.active",value:"active",component:m(s),componentProps:{trueColor:"text-yellow-500"}},{name:"header.activation_date",value:"activation_date"},{name:"header.expiration_date",value:"expiration_date"}],actions:[],items:i()}};var t,n,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    columns: [{
      name: 'header.username',
      value: 'username'
    }, {
      name: 'header.firstname',
      value: 'firstName',
      sortable: true
    }, {
      name: 'header.lastname',
      value: 'lastName'
    }, {
      name: 'header.active',
      value: 'active',
      component: shallowRef(ActiveComponent),
      componentProps: {
        trueColor: 'text-yellow-500'
      }
    }, {
      name: 'header.activation_date',
      value: 'activation_date'
    }, {
      name: 'header.expiration_date',
      value: 'expiration_date'
    }],
    actions: [],
    items: getItems()
  }
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const h=["Simple"];export{a as Simple,h as __namedExportsOrder,_ as default};
