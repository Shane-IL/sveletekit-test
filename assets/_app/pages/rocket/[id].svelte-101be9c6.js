import{S as a,i as s,s as r,e as t,t as c,k as e,c as i,a as o,g as l,d as h,n as f,b as n,J as m,f as v,D as d,E,O as g}from"../../chunks/vendor-834b7f88.js";import{s as u}from"../../chunks/spacex-store-2cdb92a5.js";function I(a){let s,r,g,u,I,p,k,x,D,b,L,B,y,F,V,$,_,M,S,j,C,H,U,w,G,J,O,P,q,z,A,K,N,Q,R,T,W,X,Y,Z,aa,sa,ra,ta,ca,ea,ia,oa,la,ha,fa,na=a[0].name+"",ma=a[0].description+"",va=a[0].height.meters+"",da=a[0].diameter.meters+"",Ea=a[0].mass.kg+"",ga=a[0].stages+"",ua=a[0].first_flight+"",Ia=a[0].cost_per_launch+"";return{c(){s=t("div"),r=t("div"),g=c(na),u=e(),I=t("img"),k=e(),x=t("p"),D=c(ma),b=e(),L=t("div"),B=c("Dimentions"),y=e(),F=t("ul"),V=t("li"),$=t("b"),_=c("Height: "),M=c(va),S=c("m"),j=e(),C=t("li"),H=t("b"),U=c("Diameter: "),w=c(da),G=c("m"),J=e(),O=t("li"),P=t("b"),q=c("Mass: "),z=c(Ea),A=c("kg"),K=e(),N=t("div"),Q=c("Details"),R=e(),T=t("ul"),W=t("li"),X=t("b"),Y=c("Stages: "),Z=c(ga),aa=e(),sa=t("li"),ra=t("b"),ta=c("First Flight: "),ca=c(ua),ea=e(),ia=t("li"),oa=t("b"),la=c("Launch Cost: "),ha=c("$"),fa=c(Ia),this.h()},l(a){s=i(a,"DIV",{class:!0});var t=o(s);r=i(t,"DIV",{class:!0});var c=o(r);g=l(c,na),c.forEach(h),u=f(t),I=i(t,"IMG",{class:!0,alt:!0,src:!0}),k=f(t),x=i(t,"P",{class:!0});var e=o(x);D=l(e,ma),e.forEach(h),b=f(t),L=i(t,"DIV",{class:!0});var n=o(L);B=l(n,"Dimentions"),n.forEach(h),y=f(t),F=i(t,"UL",{class:!0});var m=o(F);V=i(m,"LI",{});var v=o(V);$=i(v,"B",{});var d=o($);_=l(d,"Height: "),d.forEach(h),M=l(v,va),S=l(v,"m"),v.forEach(h),j=f(m),C=i(m,"LI",{});var E=o(C);H=i(E,"B",{});var p=o(H);U=l(p,"Diameter: "),p.forEach(h),w=l(E,da),G=l(E,"m"),E.forEach(h),J=f(m),O=i(m,"LI",{});var pa=o(O);P=i(pa,"B",{});var ka=o(P);q=l(ka,"Mass: "),ka.forEach(h),z=l(pa,Ea),A=l(pa,"kg"),pa.forEach(h),m.forEach(h),K=f(t),N=i(t,"DIV",{class:!0});var xa=o(N);Q=l(xa,"Details"),xa.forEach(h),R=f(t),T=i(t,"UL",{class:!0});var Da=o(T);W=i(Da,"LI",{});var ba=o(W);X=i(ba,"B",{});var La=o(X);Y=l(La,"Stages: "),La.forEach(h),Z=l(ba,ga),ba.forEach(h),aa=f(Da),sa=i(Da,"LI",{});var Ba=o(sa);ra=i(Ba,"B",{});var ya=o(ra);ta=l(ya,"First Flight: "),ya.forEach(h),ca=l(Ba,ua),Ba.forEach(h),ea=f(Da),ia=i(Da,"LI",{});var Fa=o(ia);oa=i(Fa,"B",{});var Va=o(oa);la=l(Va,"Launch Cost: "),Va.forEach(h),ha=l(Fa,"$"),fa=l(Fa,Ia),Fa.forEach(h),Da.forEach(h),t.forEach(h),this.h()},h(){n(r,"class","text-6xl font-semibold text-center"),n(I,"class","my-6 h-96 m-auto"),n(I,"alt",a[0].name),m(I.src,p=a[0].flickr_images[0])||n(I,"src",p),n(x,"class","text-lg"),n(L,"class","my-4 text-2xl"),n(F,"class","leading-8"),n(N,"class","my-4 text-2xl"),n(T,"class","leading-8"),n(s,"class","w-8/12 text-left m-auto")},m(a,t){v(a,s,t),d(s,r),d(r,g),d(s,u),d(s,I),d(s,k),d(s,x),d(x,D),d(s,b),d(s,L),d(L,B),d(s,y),d(s,F),d(F,V),d(V,$),d($,_),d(V,M),d(V,S),d(F,j),d(F,C),d(C,H),d(H,U),d(C,w),d(C,G),d(F,J),d(F,O),d(O,P),d(P,q),d(O,z),d(O,A),d(s,K),d(s,N),d(N,Q),d(s,R),d(s,T),d(T,W),d(W,X),d(X,Y),d(W,Z),d(T,aa),d(T,sa),d(sa,ra),d(ra,ta),d(sa,ca),d(T,ea),d(T,ia),d(ia,oa),d(oa,la),d(ia,ha),d(ia,fa)},p:E,i:E,o:E,d(a){a&&h(s)}}}async function p({page:a}){return{props:{rocketId:a.params.id}}}function k(a,s,r){let t;g(a,u,(a=>r(2,t=a)));let{rocketId:c}=s;const e=t.find((a=>a.id===c));return a.$$set=a=>{"rocketId"in a&&r(1,c=a.rocketId)},[e,c]}class x extends a{constructor(a){super(),s(this,a,k,I,r,{rocketId:1})}}export{x as default,p as load};
