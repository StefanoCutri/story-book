import{j as _}from"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:l="No label",size:C="normal",allCaps:z,color:h="primary",fontColor:v})=>_("span",{className:`label ${C} text-${h}`,style:{color:v},children:z?l.toUpperCase():l});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Label text content",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"Label text color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:null,description:"Capitalize label",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:null,description:"What background color to use",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"UI/MyLable",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Primary",size:"normal",color:"primary"}},r={args:{label:"Secondary",size:"h2",color:"secondary"}},a={args:{label:"Tertiary",size:"h1",color:"tertiary",allCaps:!0}},o={args:{label:"Custom font",size:"h1",color:"primary",fontColor:"#5517ac"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Primary",
    size: "normal",
    color: "primary"
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    size: "h2",
    color: "secondary"
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Tertiary",
    size: "h1",
    color: "tertiary",
    allCaps: true
  }
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,f,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Custom font",
    size: "h1",
    color: "primary",
    fontColor: '#5517ac'
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const N=["Primary","Secondary","Tertiary","CustomFont"];export{o as CustomFont,e as Primary,r as Secondary,a as Tertiary,N as __namedExportsOrder,q as default};
//# sourceMappingURL=MyLabel.stories-a2ea1fef.js.map
