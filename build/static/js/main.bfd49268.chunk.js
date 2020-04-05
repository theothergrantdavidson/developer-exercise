(this["webpackJsonpdeveloper-exercise"]=this["webpackJsonpdeveloper-exercise"]||[]).push([[0],[,,,,,,,function(t){t.exports=JSON.parse('{"restConfig":{"hostName":"localhost","hostPort":8176},"webServerConfig":{"hostName":"localhost","hostPort":8080},"dbConfig":{"user":"postgres","host":"localhost","database":"counter","password":"gdn4","port":5432},"restApi":{"paths":{"modifyCount":"modifyCount","getCount":"getCount"}}}')},function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(6),r=a.n(o),i=(a(13),a(1)),s=a(2),u=a(3),l=a(4),m=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"react-ButtonComponent"},c.a.createElement("button",{className:"btn btn-primary",onClick:this.props.onClickCallBack.bind(this)},c.a.createElement("span",null,this.props.buttonTitle)))}}]),a}(c.a.Component),h=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"react-CounterComponent"},c.a.createElement("div",null,"Current count: ",this.props.count))}}]),a}(c.a.Component),d=a(7),f=a.t(d,2),p=function(){function t(){Object(i.a)(this,t),this._config=void 0,this._config=f}return Object(s.a)(t,[{key:"_createRequest",value:function(t,e,a){var n=this;return new Promise((function(c,o){fetch("http://".concat(n._config.restConfig.hostName,":").concat(n._config.restConfig.hostPort,"/").concat(e),{method:t,mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:a}).then((function(t){t&&200===t.status?t.json().then((function(t){c(t)})):o(t)}),(function(t){o(t)}))}))}},{key:"modifyCount",value:function(t){var e=this;return new Promise((function(a,n){var c={value:t};e._createRequest("POST",e._config.restApi.paths.modifyCount,JSON.stringify(c)).then((function(t){a(t)})).catch((function(t){n(t)}))}))}},{key:"getCount",value:function(){var t=this;return new Promise((function(e,a){t._createRequest("GET",t._config.restApi.paths.getCount).then((function(t){e(t)})).catch((function(t){a(t)}))}))}}]),t}(),v=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"_createList",value:function(){var t=[];return this.props.listItems.forEach((function(e){t.push(c.a.createElement("li",{className:"list-group-item"},c.a.createElement("label",null,"Count: ",e.count.toString()," Timestamp: ",e.timeStamp)))})),t}},{key:"render",value:function(){return c.a.createElement("div",{className:"react-ListComponent"},c.a.createElement("div",{className:"panel panel-primary"},c.a.createElement("div",{className:"panel-body"},c.a.createElement("ul",{className:"list-group"},this._createList()))))}}]),a}(c.a.Component),b=(a(14),a(15),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t))._services=new p,n._increaseDecreaseNum=5,n.state={count:null,dataList:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;this._services.getCount().then((function(e){t.setState({count:e.data[0].count,dataList:e.data})})).catch((function(t){throw t}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"app-Main"},c.a.createElement("div",{className:"react-Counter"},null!==this.state.count?c.a.createElement(h,{count:this.state.count.toString()}):c.a.createElement("div",null,"Waiting for data")),c.a.createElement("div",{className:"react-AddGroup"},c.a.createElement("div",{className:"react-AddBtn"},c.a.createElement(m,{buttonTitle:"Add",onClickCallBack:this._addCountCallback.bind(this)}))),c.a.createElement("div",{className:"react-SubtractGroup"},c.a.createElement("div",{className:"react-SubtractGroup"},c.a.createElement(m,{buttonTitle:"Subtract",onClickCallBack:this._subtractCountCallback.bind(this)}))),c.a.createElement("div",{className:"panel-heading"},c.a.createElement("h3",{className:"panel-title"},"History")),c.a.createElement("div",{className:"react-TransactionHistory"},this.state.dataList.length>0?c.a.createElement(v,{listItems:this.state.dataList}):c.a.createElement("div",null,"Waiting for data")))}},{key:"_addCountCallback",value:function(){var t=this,e=Number(this.state.dataList[0].count);e+=this._increaseDecreaseNum,this._services.modifyCount(e).then((function(e){console.log(e),t.setState({count:e.data[0].count,dataList:e.data})})).catch((function(t){console.log(t)}))}},{key:"_subtractCountCallback",value:function(){var t=this,e=Number(this.state.dataList[0].count);e-=this._increaseDecreaseNum,this._services.modifyCount(e).then((function(e){console.log(e),t.setState({count:e.data[0].count,dataList:e.data})})).catch((function(t){console.log(t)}))}}]),a}(c.a.Component));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.bfd49268.chunk.js.map