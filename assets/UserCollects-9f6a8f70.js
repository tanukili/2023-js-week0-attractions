import{_ as i,o,c,a as s,F as d,r as h,t as a,w as _}from"./index-ff41197e.js";const u={data(){return{views:[]}},methods:{render(t){this.axios.get(`http://localhost:3000/collects?userId=${t}`).then(r=>{this.views=r.data})},removeCollect(t){this.axios.delete(`http://localhost:3000/collects/${t}`).then(()=>{alert("成功移除"),this.render()}).catch(()=>{alert("移除失敗")})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,"$1");t?this.render(t):this.$router.push("/")}},p={class:"container mt-5"},m=s("h1",null,"我的收藏",-1),$={class:"row row-cols-2 row-cols-md-3 g-4 list-unstyled"},f={class:"card h-100"},v={class:"card-body"},k={class:"card-title"},x={class:"card-text"},w={class:"card-footer"},y=["onClick"];function C(t,r,g,b,l,n){return o(),c("div",p,[m,s("ul",$,[(o(!0),c(d,null,h(l.views,e=>(o(),c("li",{class:"col",key:e.id},[s("div",f,[s("div",v,[s("h5",k,a(e.name),1),s("p",x,a(e.description),1)]),s("div",w,[s("a",{href:"#",class:"btn btn-primary",onClick:_(B=>n.removeCollect(e.id),["prevent"])},"移除收藏",8,y)])])]))),128))])])}const F=i(u,[["render",C]]);export{F as default};
