import{l as o}from"./VLTextArea-haNQI8wn.js";import"./vue.esm-bundler-DEjXoRfX.js";import"./api.esm-D392XNf6.js";const i={title:"Components/Tooltip",component:o,tags:["autodocs"],render:a=>({components:{VLTooltip:o},setup(){return{args:a}},template:`
      <VLTooltip v-bind="args">
        <span>{{args.default}}</span>
      </VLTooltip>
    `}),argTypes:{placement:{control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"]}},args:{default:"Hover me",hoist:!0}},t={args:{content:"tooltip!!!"}};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    content: 'tooltip!!!'
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const l=["Medium"];export{t as Medium,l as __namedExportsOrder,i as default};
