webpackJsonp([14,92],{217:function(i,t,e){var n,a;n=e(394);var o=e(528);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,i.exports=n},394:function(i,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{anchorOrigin:{vertical:"bottom",horizontal:"middle"},selfOrigin:{vertical:"top",horizontal:"middle"}}},computed:{anchor:function(){return this.anchorOrigin.vertical+" "+this.anchorOrigin.horizontal},self:function(){return this.selfOrigin.vertical+" "+this.selfOrigin.horizontal}}}},528:function(i,t){i.exports={render:function(){var i=this;return i._h("div",[i._h("div",{staticClass:"layout-padding"},[i._m(0)," ",i._h("div",{staticStyle:{"margin-top":"40px",width:"200px",height:"70px","background-color":"#26A69A"}},["\n       \n      ",i._h("q-tooltip",["\n        Quasar Rulz!\n      "])])," ",i._h("br"),i._h("br")," ",i._h("div",{staticClass:"group"},[i._h("button",{staticClass:"indigo"},["\n        Hover\n        ",i._h("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},["\n          Quasar Tooltip 1\n        "])])," ",i._h("button",{staticClass:"red"},["\n        Over\n        ",i._h("q-tooltip",{attrs:{anchor:"center right",self:"center left"}},["\n          Quasar Tooltip 2\n        "])])," ",i._h("button",{staticClass:"purple"},["\n        These\n        ",i._h("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},["\n          Quasar Tooltip 3\n        "])])," ",i._h("button",{staticClass:"amber"},["\n        Buttons\n        ",i._h("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle"}},["\n          Quasar Tooltip 4\n        "])])])," ",i._h("div",{staticClass:"card",staticStyle:{"margin-top":"75px"}},[i._h("div",{staticClass:"card-title bg-primary text-center"},[i._h("button",{staticClass:"orange push",staticStyle:{padding:"35px"}},[i._h("span",{staticClass:"mobile-hide"},["Mouse Hover"])," ",i._h("span",{staticClass:"mobile-only"},["Tap Me"])," ",i._h("q-tooltip",{attrs:{anchor:i.anchor,self:i.self}},["\n            Quasar\n          "])])])," ",i._h("p",{staticClass:"caption text-center"},["Configure the Tooltip for button above."])," ",i._h("p",{staticClass:"text-center"},[i._h("span",{staticClass:"tag label bg-light"},['anchor="'+i._s(i.anchor)+'"'])," ",i._h("span",{staticClass:"tag label bg-light"},['self="'+i._s(i.self)+'"'])])," ",i._h("div",{staticClass:"card-content group row sm-column"},[i._h("div",{staticClass:"auto column items-center"},[i._h("p",{staticClass:"caption"},["Anchor Origin"])," ",i._h("div",{staticClass:"flex"},[i._h("div",{staticClass:"column group"},[i._h("div",["Vertical"])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.vertical,expression:"anchorOrigin.vertical"}],attrs:{val:"top"},domProps:{value:i.anchorOrigin.vertical},on:{input:function(t){i.anchorOrigin.vertical=t}}}),"\n                Top\n              "])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.vertical,expression:"anchorOrigin.vertical"}],attrs:{val:"center"},domProps:{value:i.anchorOrigin.vertical},on:{input:function(t){i.anchorOrigin.vertical=t}}}),"\n                Center\n              "])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.vertical,expression:"anchorOrigin.vertical"}],attrs:{val:"bottom"},domProps:{value:i.anchorOrigin.vertical},on:{input:function(t){i.anchorOrigin.vertical=t}}}),"\n                Bottom\n              "])])," ",i._h("div",{staticClass:"column group"},[i._h("div",["Horizontal"])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.horizontal,expression:"anchorOrigin.horizontal"}],attrs:{val:"left"},domProps:{value:i.anchorOrigin.horizontal},on:{input:function(t){i.anchorOrigin.horizontal=t}}}),"\n                Left\n              "])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.horizontal,expression:"anchorOrigin.horizontal"}],attrs:{val:"middle"},domProps:{value:i.anchorOrigin.horizontal},on:{input:function(t){i.anchorOrigin.horizontal=t}}}),"\n                Middle\n              "])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.horizontal,expression:"anchorOrigin.horizontal"}],attrs:{val:"right"},domProps:{value:i.anchorOrigin.horizontal},on:{input:function(t){i.anchorOrigin.horizontal=t}}}),"\n                Right\n              "])])])])," ",i._h("div",{staticClass:"auto column items-center"},[i._h("p",{staticClass:"caption"},["Target Origin"])," ",i._h("div",{staticClass:"flex"},[i._h("div",{staticClass:"column group"},[i._h("div",["Vertical"])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.vertical,expression:"selfOrigin.vertical"}],attrs:{val:"top"},domProps:{value:i.selfOrigin.vertical},on:{input:function(t){i.selfOrigin.vertical=t}}}),"\n                Top\n              "])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.vertical,expression:"selfOrigin.vertical"}],attrs:{val:"center"},domProps:{value:i.selfOrigin.vertical},on:{input:function(t){i.selfOrigin.vertical=t}}}),"\n                Center\n              "])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.vertical,expression:"selfOrigin.vertical"}],attrs:{val:"bottom"},domProps:{value:i.selfOrigin.vertical},on:{input:function(t){i.selfOrigin.vertical=t}}}),"\n                Bottom\n              "])])," ",i._h("div",{staticClass:"column group"},[i._h("div",["Horizontal"])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.horizontal,expression:"selfOrigin.horizontal"}],attrs:{val:"left"},domProps:{value:i.selfOrigin.horizontal},on:{input:function(t){i.selfOrigin.horizontal=t}}}),"\n                Left\n              "])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.horizontal,expression:"selfOrigin.horizontal"}],attrs:{val:"middle"},domProps:{value:i.selfOrigin.horizontal},on:{input:function(t){i.selfOrigin.horizontal=t}}}),"\n                Middle\n              "])," ",i._h("label",[i._h("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.horizontal,expression:"selfOrigin.horizontal"}],attrs:{val:"right"},domProps:{value:i.selfOrigin.horizontal},on:{input:function(t){i.selfOrigin.horizontal=t}}}),"\n                Right\n              "])])])])])])])])},staticRenderFns:[function(){var i=this;return i._h("p",{staticClass:"caption"},[i._h("span",{staticClass:"mobile-hide"},["\n        Move mouse over the elements below. On a mobile device,\n        you need to tap the elements.\n      "])," ",i._h("span",{staticClass:"mobile-only"},["\n        Tap on elements below. On desktop you can move the mouse\n        over the elements.\n      "])])}]}}});