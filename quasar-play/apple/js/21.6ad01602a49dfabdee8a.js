webpackJsonp([21,92],{209:function(t,n,s){var o,r;o=s(387);var e=s(465);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=e.render,r.staticRenderFns=e.staticRenderFns,t.exports=o},387:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{progressBtn:0}},methods:{workButton:function(){var t=this;this.stopWorkButton(),this.progressBtn=15,this.workingButton=setInterval(function(){t.progressBtn+=parseInt(12*Math.random(),10),t.progressBtn>=100&&t.stopWorkButton()},500)},stopWorkButton:function(){this.workingButton&&(clearInterval(this.workingButton),this.workingButton=null)}},beforeDestroy:function(){this.stopWorkButton()}}},465:function(t,n){t.exports={render:function(){var t=this;return t._h("div",[t._h("div",{staticClass:"layout-padding"},[t._h("p",{staticClass:"caption"},["Click on Buttons below to see them in action."])," ",t._h("p",{staticClass:"caption"},["Determined Progress"])," ",t._h("div",{staticClass:"group"},[t._h("q-progress-button",{staticClass:"yellow",attrs:{percentage:t.progressBtn,"dark-filler":""},nativeOn:{click:function(n){t.workButton()}}},["\n        Work it!\n      "])," ",t._h("q-progress-button",{staticClass:"dark",attrs:{percentage:t.progressBtn},nativeOn:{click:function(n){t.workButton()}}},["\n        Work it!\n      "])])," ",t._h("p",{staticClass:"caption"},["Indetermined Progress"])," ",t._h("div",{staticClass:"group"},[t._h("q-progress-button",{staticClass:"primary",attrs:{indeterminate:"",percentage:t.progressBtn},nativeOn:{click:function(n){t.workButton()}}},["\n        Work it!\n      "])," ",t._h("q-progress-button",{staticClass:"negative",attrs:{indeterminate:"",percentage:t.progressBtn},nativeOn:{click:function(n){t.workButton()}}},["\n        Work it!\n      "])])," ",t._h("p",{staticClass:"caption"},["Control Progress with Buttons below"])," ",t._h("div",{staticClass:"group"},[t._h("button",{staticClass:"secondary clear",on:{click:function(n){t.stopWorkButton()}}},["\n        Stop\n      "])," ",t._h("button",{staticClass:"secondary clear",on:{click:function(n){t.progressBtn=-1}}},["\n        Error\n      "])," ",t._h("button",{staticClass:"secondary clear",on:{click:function(n){t.progressBtn=100}}},["\n        Success\n      "])," ",t._h("button",{staticClass:"secondary clear",on:{click:function(n){t.progressBtn=0}}},["\n        Reset\n      "])," ",t._h("div",{staticClass:"label tag bg-light"},[t._s(t.progressBtn)])])])])},staticRenderFns:[]}}});