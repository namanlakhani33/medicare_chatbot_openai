"use strict";(self.webpackChunk_streamlit_app=self.webpackChunk_streamlit_app||[]).push([[4177],{94177:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var n=i(22951),r=i(91976),o=i(67591),l=i(94337),a=i(66845),s=i(87814),u=i(74516),m=i(50641),d=i(40864),f=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;(0,n.Z)(this,i);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).formClearHelper=new s.K,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setStringValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState((function(e,t){return{value:t.element.default}}),(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onColorClose=function(t){e.setState({value:t},(function(){return e.commitWidgetValue({fromUi:!0})}))},e}return(0,r.Z)(i,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getStringValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e,t=this.props,i=t.element,n=t.width,r=t.disabled,o=t.widgetMgr,l=this.state.value;return this.formClearHelper.manageFormClearListener(o,i.formId,this.onFormCleared),(0,d.jsx)(u.Z,{label:i.label,labelVisibility:(0,m.iF)(null===(e=i.labelVisibility)||void 0===e?void 0:e.value),help:i.help,onChange:this.onColorClose,disabled:r,width:n,value:l})}}]),i}(a.PureComponent),c=f},87814:function(e,t,i){i.d(t,{K:function(){return l}});var n=i(22951),r=i(91976),o=i(50641),l=function(){function e(){(0,n.Z)(this,e),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}return(0,r.Z)(e,[{key:"manageFormClearListener",value:function(e,t,i){null!=this.formClearListener&&this.lastWidgetMgr===e&&this.lastFormId===t||(this.disconnect(),(0,o.bM)(t)&&(this.formClearListener=e.addFormClearedListener(t,i),this.lastWidgetMgr=e,this.lastFormId=t))}},{key:"disconnect",value:function(){var e;null===(e=this.formClearListener)||void 0===e||e.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}]),e}()}}]);