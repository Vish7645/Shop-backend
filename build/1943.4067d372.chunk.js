"use strict";(self.webpackChunke=self.webpackChunke||[]).push([[1943],{61943:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var D=_(92132),a=_(71005),n=_(78323),A=_(21272),C=_(69593),R=_(14718),i=_(15853),v=_(55151),U=_(79077),B=_(39232),t=_(15126),l=_(63299),L=_(67014),I=_(59080),d=_(79275),O=_(82437),T=_(61535),M=_(5790),E=_(12083),o=_(35223),K=_(5409),P=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(56336),S=_(13426),y=_(84624),N=_(77965),j=_(54257),H=_(71210),x=_(51187),F=_(39404),V=_(58692),$=_(501),e=_(57646),G=_(23120),z=_(44414),c=_(25962),X=_(14664),Y=_(42588),J=_(90325),Q=_(62785),Z=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),O_=_(22249),M_=_(67031);const m=()=>((0,n.u)(),(0,D.jsx)(a.HomePageCE,{}))},78323:(W,s,_)=>{_.d(s,{u:()=>B});var D=_(21272),a=_(69593),n=_(67031),A=_(54894),C=_(17703),R=_(39232);const i="strapi-notification-seat-limit",v="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,a.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:o}=l??{};D.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),K&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:o?v:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,T,o,L])}}}]);
