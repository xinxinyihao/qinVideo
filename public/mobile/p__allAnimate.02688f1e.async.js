(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{bZw3:function(t,e,a){"use strict";a.r(e);a("IzEo");var i=a("bx4M"),r=a("p0pE"),s=a.n(r),n=a("mrSG"),l=a("q1tI"),o=a.n(l),c=a("MuoO"),p=a("mOtZ"),m=a("WqWh"),y=a("/88p"),h=a("Qp6+"),u=a("nLTe"),d=a("3a4m"),g=a.n(d),v=a("YO1i"),E=class extends l["Component"]{constructor(t){super(t),this.initData=(t=>{var e=t.query,a=void 0===e?this.state.query:e,i=t.filter,r=void 0===i?this.state.filter:i,n=this.props.dispatch;n({type:"animate/queryList",payload:{query:s()({},a,r),addon:{type:"allAnimate"}}}),g.a.replace({pathname:"/allAnimate",query:s()({},a,r)}),window.scrollTo(0,0)}),this.initCategory=(()=>{var t=this.props.dispatch;t({type:"category/queryList",payload:{params:{type:"animate"}}})}),this.listQuery=(t=>{var e=this.state.query,a=s()({},e,t);this.setState({query:a},()=>{this.initData({})})}),this.filterQuery=(t=>{var e=this.state.filter,a=s()({},e,t);this.setState({filter:a,query:s()({},this.state.query,{page:1})},()=>{this.initData({})})}),this.toggleList=(t=>{this.setState({list:t})});var e=t.location.query;this.state={cate:"allAnimate",query:{sortBy:e.sortBy||"updatedAt",sortOrder:e.sortOrder||-1,size:e.size?parseInt(e.size):21,page:e.page?parseInt(e.page):1},filter:{area:e.area||"",year:e.year||"",kind:e.kind||"",tag:e.tag||""},list:!!e.list&&"true"===e.list}}componentDidMount(){this.initData({}),this.initCategory()}render(){var t=this.state,e=t.cate,a=t.query,r=t.filter,n=t.list,l=this.props,c=l.animate,d=l.category,g=l.loadingAnimate,E=l.location.pathname,q=c[e]?c[e].list:[],f=c[e]?c[e].total:0;return o.a.createElement("div",null,o.a.createElement(u["a"],{active:E}),o.a.createElement("div",{className:"container"},o.a.createElement(h["a"],{value:r,onChange:this.filterQuery,list:d.all,type:"a"}),o.a.createElement(i["a"],{bordered:!1,style:{marginBottom:"20px",padding:"0",margin:"15px 0"},loading:g},o.a.createElement(p["a"],{value:a,onChange:this.listQuery},o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:n?"":"active",onClick:()=>this.toggleList(!1)},o.a.createElement(v["a"],{type:"icon-settings-filter"})),o.a.createElement("span",{className:n?"active":"",onClick:()=>this.toggleList(!0)},o.a.createElement(v["a"],{type:"icon-apps"})))),n?o.a.createElement(y["b"],{type:"animate",list:q}):o.a.createElement(y["a"],{type:"animate",list:q}),o.a.createElement(m["a"],{value:s()({},a,{total:f}),onChange:this.listQuery}))))}};E=Object(n["a"])([Object(c["connect"])(t=>{var e=t.animate,a=t.category,i=t.loading;return{animate:e,category:a,loadingAnimate:i.models.animate,loadingCategory:i.models.category}})],E),e["default"]=E}}]);