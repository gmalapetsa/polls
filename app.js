var jp=Object.create;var jl=Object.defineProperty;var Gp=Object.getOwnPropertyDescriptor;var zp=Object.getOwnPropertyNames;var $p=Object.getPrototypeOf,Kp=Object.prototype.hasOwnProperty;var Wp=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Hp=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of zp(e))!Kp.call(n,i)&&i!==t&&jl(n,i,{get:()=>e[i],enumerable:!(r=Gp(e,i))||r.enumerable});return n};var Qp=(n,e,t)=>(t=n!=null?jp($p(n)):{},Hp(e||!n||!n.__esModule?jl(t,"default",{value:n,enumerable:!0}):t,n));var sp=Wp((rp,ip)=>{var np=function(){var n=function(L,F){var k=236,U=17,S=L,v=t[F],p=null,f=0,y=null,_=[],I={},w=function(C,D){f=S*4+17,p=function(P){for(var x=new Array(P),M=0;M<P;M+=1){x[M]=new Array(P);for(var z=0;z<P;z+=1)x[M][z]=null}return x}(f),X(0,0),X(f-7,0),X(0,f-7),ye(),_e(),Ge(C,D),S>=7&&De(C),y==null&&(y=rt(S,v,_)),We(y,D)},X=function(C,D){for(var P=-1;P<=7;P+=1)if(!(C+P<=-1||f<=C+P))for(var x=-1;x<=7;x+=1)D+x<=-1||f<=D+x||(0<=P&&P<=6&&(x==0||x==6)||0<=x&&x<=6&&(P==0||P==6)||2<=P&&P<=4&&2<=x&&x<=4?p[C+P][D+x]=!0:p[C+P][D+x]=!1)},oe=function(){for(var C=0,D=0,P=0;P<8;P+=1){w(!0,P);var x=i.getLostPoint(I);(P==0||C>x)&&(C=x,D=P)}return D},_e=function(){for(var C=8;C<f-8;C+=1)p[C][6]==null&&(p[C][6]=C%2==0);for(var D=8;D<f-8;D+=1)p[6][D]==null&&(p[6][D]=D%2==0)},ye=function(){for(var C=i.getPatternPosition(S),D=0;D<C.length;D+=1)for(var P=0;P<C.length;P+=1){var x=C[D],M=C[P];if(p[x][M]==null)for(var z=-2;z<=2;z+=1)for(var Q=-2;Q<=2;Q+=1)z==-2||z==2||Q==-2||Q==2||z==0&&Q==0?p[x+z][M+Q]=!0:p[x+z][M+Q]=!1}},De=function(C){for(var D=i.getBCHTypeNumber(S),P=0;P<18;P+=1){var x=!C&&(D>>P&1)==1;p[Math.floor(P/3)][P%3+f-8-3]=x}for(var P=0;P<18;P+=1){var x=!C&&(D>>P&1)==1;p[P%3+f-8-3][Math.floor(P/3)]=x}},Ge=function(C,D){for(var P=v<<3|D,x=i.getBCHTypeInfo(P),M=0;M<15;M+=1){var z=!C&&(x>>M&1)==1;M<6?p[M][8]=z:M<8?p[M+1][8]=z:p[f-15+M][8]=z}for(var M=0;M<15;M+=1){var z=!C&&(x>>M&1)==1;M<8?p[8][f-M-1]=z:M<9?p[8][15-M-1+1]=z:p[8][15-M-1]=z}p[f-8][8]=!C},We=function(C,D){for(var P=-1,x=f-1,M=7,z=0,Q=i.getMaskFunction(D),H=f-1;H>0;H-=2)for(H==6&&(H-=1);;){for(var ue=0;ue<2;ue+=1)if(p[x][H-ue]==null){var me=!1;z<C.length&&(me=(C[z]>>>M&1)==1);var Y=Q(x,H-ue);Y&&(me=!me),p[x][H-ue]=me,M-=1,M==-1&&(z+=1,M=7)}if(x+=P,x<0||f<=x){x-=P,P=-P;break}}},Rt=function(C,D){for(var P=0,x=0,M=0,z=new Array(D.length),Q=new Array(D.length),H=0;H<D.length;H+=1){var ue=D[H].dataCount,me=D[H].totalCount-ue;x=Math.max(x,ue),M=Math.max(M,me),z[H]=new Array(ue);for(var Y=0;Y<z[H].length;Y+=1)z[H][Y]=255&C.getBuffer()[Y+P];P+=ue;var Fe=i.getErrorCorrectPolynomial(me),Ue=a(z[H],Fe.getLength()-1),gi=Ue.mod(Fe);Q[H]=new Array(Fe.getLength()-1);for(var Y=0;Y<Q[H].length;Y+=1){var ir=Y+gi.getLength()-Q[H].length;Q[H][Y]=ir>=0?gi.getAt(ir):0}}for(var sr=0,Y=0;Y<D.length;Y+=1)sr+=D[Y].totalCount;for(var Kt=new Array(sr),Wt=0,Y=0;Y<x;Y+=1)for(var H=0;H<D.length;H+=1)Y<z[H].length&&(Kt[Wt]=z[H][Y],Wt+=1);for(var Y=0;Y<M;Y+=1)for(var H=0;H<D.length;H+=1)Y<Q[H].length&&(Kt[Wt]=Q[H][Y],Wt+=1);return Kt},rt=function(C,D,P){for(var x=u.getRSBlocks(C,D),M=l(),z=0;z<P.length;z+=1){var Q=P[z];M.put(Q.getMode(),4),M.put(Q.getLength(),i.getLengthInBits(Q.getMode(),C)),Q.write(M)}for(var H=0,z=0;z<x.length;z+=1)H+=x[z].dataCount;if(M.getLengthInBits()>H*8)throw"code length overflow. ("+M.getLengthInBits()+">"+H*8+")";for(M.getLengthInBits()+4<=H*8&&M.put(0,4);M.getLengthInBits()%8!=0;)M.putBit(!1);for(;!(M.getLengthInBits()>=H*8||(M.put(k,8),M.getLengthInBits()>=H*8));)M.put(U,8);return Rt(M,x)};I.addData=function(C,D){D=D||"Byte";var P=null;switch(D){case"Numeric":P=d(C);break;case"Alphanumeric":P=g(C);break;case"Byte":P=E(C);break;case"Kanji":P=T(C);break;default:throw"mode:"+D}_.push(P),y=null},I.isDark=function(C,D){if(C<0||f<=C||D<0||f<=D)throw C+","+D;return p[C][D]},I.getModuleCount=function(){return f},I.make=function(){if(S<1){for(var C=1;C<40;C++){for(var D=u.getRSBlocks(C,v),P=l(),x=0;x<_.length;x++){var M=_[x];P.put(M.getMode(),4),P.put(M.getLength(),i.getLengthInBits(M.getMode(),C)),M.write(P)}for(var z=0,x=0;x<D.length;x++)z+=D[x].dataCount;if(P.getLengthInBits()<=z*8)break}S=C}w(!1,oe())},I.createTableTag=function(C,D){C=C||2,D=typeof D>"u"?C*4:D;var P="";P+='<table style="',P+=" border-width: 0px; border-style: none;",P+=" border-collapse: collapse;",P+=" padding: 0px; margin: "+D+"px;",P+='">',P+="<tbody>";for(var x=0;x<I.getModuleCount();x+=1){P+="<tr>";for(var M=0;M<I.getModuleCount();M+=1)P+='<td style="',P+=" border-width: 0px; border-style: none;",P+=" border-collapse: collapse;",P+=" padding: 0px; margin: 0px;",P+=" width: "+C+"px;",P+=" height: "+C+"px;",P+=" background-color: ",P+=I.isDark(x,M)?"#000000":"#ffffff",P+=";",P+='"/>';P+="</tr>"}return P+="</tbody>",P+="</table>",P},I.createSvgTag=function(C,D,P,x){var M={};typeof arguments[0]=="object"&&(M=arguments[0],C=M.cellSize,D=M.margin,P=M.alt,x=M.title),C=C||2,D=typeof D>"u"?C*4:D,P=typeof P=="string"?{text:P}:P||{},P.text=P.text||null,P.id=P.text?P.id||"qrcode-description":null,x=typeof x=="string"?{text:x}:x||{},x.text=x.text||null,x.id=x.text?x.id||"qrcode-title":null;var z=I.getModuleCount()*C+D*2,Q,H,ue,me,Y="",Fe;for(Fe="l"+C+",0 0,"+C+" -"+C+",0 0,-"+C+"z ",Y+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',Y+=M.scalable?"":' width="'+z+'px" height="'+z+'px"',Y+=' viewBox="0 0 '+z+" "+z+'" ',Y+=' preserveAspectRatio="xMinYMin meet"',Y+=x.text||P.text?' role="img" aria-labelledby="'+pe([x.id,P.id].join(" ").trim())+'"':"",Y+=">",Y+=x.text?'<title id="'+pe(x.id)+'">'+pe(x.text)+"</title>":"",Y+=P.text?'<description id="'+pe(P.id)+'">'+pe(P.text)+"</description>":"",Y+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',Y+='<path d="',ue=0;ue<I.getModuleCount();ue+=1)for(me=ue*C+D,Q=0;Q<I.getModuleCount();Q+=1)I.isDark(ue,Q)&&(H=Q*C+D,Y+="M"+H+","+me+Fe);return Y+='" stroke="transparent" fill="black"/>',Y+="</svg>",Y},I.createDataURL=function(C,D){C=C||2,D=typeof D>"u"?C*4:D;var P=I.getModuleCount()*C+D*2,x=D,M=P-D;return ee(P,P,function(z,Q){if(x<=z&&z<M&&x<=Q&&Q<M){var H=Math.floor((z-x)/C),ue=Math.floor((Q-x)/C);return I.isDark(ue,H)?0:1}else return 1})},I.createImgTag=function(C,D,P){C=C||2,D=typeof D>"u"?C*4:D;var x=I.getModuleCount()*C+D*2,M="";return M+="<img",M+=' src="',M+=I.createDataURL(C,D),M+='"',M+=' width="',M+=x,M+='"',M+=' height="',M+=x,M+='"',P&&(M+=' alt="',M+=pe(P),M+='"'),M+="/>",M};var pe=function(C){for(var D="",P=0;P<C.length;P+=1){var x=C.charAt(P);switch(x){case"<":D+="&lt;";break;case">":D+="&gt;";break;case"&":D+="&amp;";break;case'"':D+="&quot;";break;default:D+=x;break}}return D},ho=function(C){var D=1;C=typeof C>"u"?D*2:C;var P=I.getModuleCount()*D+C*2,x=C,M=P-C,z,Q,H,ue,me,Y={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},Fe={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},Ue="";for(z=0;z<P;z+=2){for(H=Math.floor((z-x)/D),ue=Math.floor((z+1-x)/D),Q=0;Q<P;Q+=1)me="\u2588",x<=Q&&Q<M&&x<=z&&z<M&&I.isDark(H,Math.floor((Q-x)/D))&&(me=" "),x<=Q&&Q<M&&x<=z+1&&z+1<M&&I.isDark(ue,Math.floor((Q-x)/D))?me+=" ":me+="\u2588",Ue+=C<1&&z+1>=M?Fe[me]:Y[me];Ue+=`
`}return P%2&&C>0?Ue.substring(0,Ue.length-P-1)+Array(P+1).join("\u2580"):Ue.substring(0,Ue.length-1)};return I.createASCII=function(C,D){if(C=C||1,C<2)return ho(D);C-=1,D=typeof D>"u"?C*2:D;var P=I.getModuleCount()*C+D*2,x=D,M=P-D,z,Q,H,ue,me=Array(C+1).join("\u2588\u2588"),Y=Array(C+1).join("  "),Fe="",Ue="";for(z=0;z<P;z+=1){for(H=Math.floor((z-x)/C),Ue="",Q=0;Q<P;Q+=1)ue=1,x<=Q&&Q<M&&x<=z&&z<M&&I.isDark(H,Math.floor((Q-x)/C))&&(ue=0),Ue+=ue?me:Y;for(H=0;H<C;H+=1)Fe+=Ue+`
`}return Fe.substring(0,Fe.length-1)},I.renderTo2dContext=function(C,D){D=D||2;for(var P=I.getModuleCount(),x=0;x<P;x++)for(var M=0;M<P;M++)C.fillStyle=I.isDark(x,M)?"black":"white",C.fillRect(x*D,M*D,D,D)},I};n.stringToBytesFuncs={default:function(L){for(var F=[],k=0;k<L.length;k+=1){var U=L.charCodeAt(k);F.push(U&255)}return F}},n.stringToBytes=n.stringToBytesFuncs.default,n.createStringToBytes=function(L,F){var k=function(){for(var S=G(L),v=function(){var _e=S.read();if(_e==-1)throw"eof";return _e},p=0,f={};;){var y=S.read();if(y==-1)break;var _=v(),I=v(),w=v(),X=String.fromCharCode(y<<8|_),oe=I<<8|w;f[X]=oe,p+=1}if(p!=F)throw p+" != "+F;return f}(),U=63;return function(S){for(var v=[],p=0;p<S.length;p+=1){var f=S.charCodeAt(p);if(f<128)v.push(f);else{var y=k[S.charAt(p)];typeof y=="number"?(y&255)==y?v.push(y):(v.push(y>>>8),v.push(y&255)):v.push(U)}}return v}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},t={L:1,M:0,Q:3,H:2},r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var L=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],F=1335,k=7973,U=21522,S={},v=function(p){for(var f=0;p!=0;)f+=1,p>>>=1;return f};return S.getBCHTypeInfo=function(p){for(var f=p<<10;v(f)-v(F)>=0;)f^=F<<v(f)-v(F);return(p<<10|f)^U},S.getBCHTypeNumber=function(p){for(var f=p<<12;v(f)-v(k)>=0;)f^=k<<v(f)-v(k);return p<<12|f},S.getPatternPosition=function(p){return L[p-1]},S.getMaskFunction=function(p){switch(p){case r.PATTERN000:return function(f,y){return(f+y)%2==0};case r.PATTERN001:return function(f,y){return f%2==0};case r.PATTERN010:return function(f,y){return y%3==0};case r.PATTERN011:return function(f,y){return(f+y)%3==0};case r.PATTERN100:return function(f,y){return(Math.floor(f/2)+Math.floor(y/3))%2==0};case r.PATTERN101:return function(f,y){return f*y%2+f*y%3==0};case r.PATTERN110:return function(f,y){return(f*y%2+f*y%3)%2==0};case r.PATTERN111:return function(f,y){return(f*y%3+(f+y)%2)%2==0};default:throw"bad maskPattern:"+p}},S.getErrorCorrectPolynomial=function(p){for(var f=a([1],0),y=0;y<p;y+=1)f=f.multiply(a([1,s.gexp(y)],0));return f},S.getLengthInBits=function(p,f){if(1<=f&&f<10)switch(p){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw"mode:"+p}else if(f<27)switch(p){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw"mode:"+p}else if(f<41)switch(p){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw"mode:"+p}else throw"type:"+f},S.getLostPoint=function(p){for(var f=p.getModuleCount(),y=0,_=0;_<f;_+=1)for(var I=0;I<f;I+=1){for(var w=0,X=p.isDark(_,I),oe=-1;oe<=1;oe+=1)if(!(_+oe<0||f<=_+oe))for(var _e=-1;_e<=1;_e+=1)I+_e<0||f<=I+_e||oe==0&&_e==0||X==p.isDark(_+oe,I+_e)&&(w+=1);w>5&&(y+=3+w-5)}for(var _=0;_<f-1;_+=1)for(var I=0;I<f-1;I+=1){var ye=0;p.isDark(_,I)&&(ye+=1),p.isDark(_+1,I)&&(ye+=1),p.isDark(_,I+1)&&(ye+=1),p.isDark(_+1,I+1)&&(ye+=1),(ye==0||ye==4)&&(y+=3)}for(var _=0;_<f;_+=1)for(var I=0;I<f-6;I+=1)p.isDark(_,I)&&!p.isDark(_,I+1)&&p.isDark(_,I+2)&&p.isDark(_,I+3)&&p.isDark(_,I+4)&&!p.isDark(_,I+5)&&p.isDark(_,I+6)&&(y+=40);for(var I=0;I<f;I+=1)for(var _=0;_<f-6;_+=1)p.isDark(_,I)&&!p.isDark(_+1,I)&&p.isDark(_+2,I)&&p.isDark(_+3,I)&&p.isDark(_+4,I)&&!p.isDark(_+5,I)&&p.isDark(_+6,I)&&(y+=40);for(var De=0,I=0;I<f;I+=1)for(var _=0;_<f;_+=1)p.isDark(_,I)&&(De+=1);var Ge=Math.abs(100*De/f/f-50)/5;return y+=Ge*10,y},S}(),s=function(){for(var L=new Array(256),F=new Array(256),k=0;k<8;k+=1)L[k]=1<<k;for(var k=8;k<256;k+=1)L[k]=L[k-4]^L[k-5]^L[k-6]^L[k-8];for(var k=0;k<255;k+=1)F[L[k]]=k;var U={};return U.glog=function(S){if(S<1)throw"glog("+S+")";return F[S]},U.gexp=function(S){for(;S<0;)S+=255;for(;S>=256;)S-=255;return L[S]},U}();function a(L,F){if(typeof L.length>"u")throw L.length+"/"+F;var k=function(){for(var S=0;S<L.length&&L[S]==0;)S+=1;for(var v=new Array(L.length-S+F),p=0;p<L.length-S;p+=1)v[p]=L[p+S];return v}(),U={};return U.getAt=function(S){return k[S]},U.getLength=function(){return k.length},U.multiply=function(S){for(var v=new Array(U.getLength()+S.getLength()-1),p=0;p<U.getLength();p+=1)for(var f=0;f<S.getLength();f+=1)v[p+f]^=s.gexp(s.glog(U.getAt(p))+s.glog(S.getAt(f)));return a(v,0)},U.mod=function(S){if(U.getLength()-S.getLength()<0)return U;for(var v=s.glog(U.getAt(0))-s.glog(S.getAt(0)),p=new Array(U.getLength()),f=0;f<U.getLength();f+=1)p[f]=U.getAt(f);for(var f=0;f<S.getLength();f+=1)p[f]^=s.gexp(s.glog(S.getAt(f))+v);return a(p,0).mod(S)},U}var u=function(){var L=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],F=function(S,v){var p={};return p.totalCount=S,p.dataCount=v,p},k={},U=function(S,v){switch(v){case t.L:return L[(S-1)*4+0];case t.M:return L[(S-1)*4+1];case t.Q:return L[(S-1)*4+2];case t.H:return L[(S-1)*4+3];default:return}};return k.getRSBlocks=function(S,v){var p=U(S,v);if(typeof p>"u")throw"bad rs block @ typeNumber:"+S+"/errorCorrectionLevel:"+v;for(var f=p.length/3,y=[],_=0;_<f;_+=1)for(var I=p[_*3+0],w=p[_*3+1],X=p[_*3+2],oe=0;oe<I;oe+=1)y.push(F(w,X));return y},k}(),l=function(){var L=[],F=0,k={};return k.getBuffer=function(){return L},k.getAt=function(U){var S=Math.floor(U/8);return(L[S]>>>7-U%8&1)==1},k.put=function(U,S){for(var v=0;v<S;v+=1)k.putBit((U>>>S-v-1&1)==1)},k.getLengthInBits=function(){return F},k.putBit=function(U){var S=Math.floor(F/8);L.length<=S&&L.push(0),U&&(L[S]|=128>>>F%8),F+=1},k},d=function(L){var F=e.MODE_NUMBER,k=L,U={};U.getMode=function(){return F},U.getLength=function(p){return k.length},U.write=function(p){for(var f=k,y=0;y+2<f.length;)p.put(S(f.substring(y,y+3)),10),y+=3;y<f.length&&(f.length-y==1?p.put(S(f.substring(y,y+1)),4):f.length-y==2&&p.put(S(f.substring(y,y+2)),7))};var S=function(p){for(var f=0,y=0;y<p.length;y+=1)f=f*10+v(p.charAt(y));return f},v=function(p){if("0"<=p&&p<="9")return p.charCodeAt(0)-48;throw"illegal char :"+p};return U},g=function(L){var F=e.MODE_ALPHA_NUM,k=L,U={};U.getMode=function(){return F},U.getLength=function(v){return k.length},U.write=function(v){for(var p=k,f=0;f+1<p.length;)v.put(S(p.charAt(f))*45+S(p.charAt(f+1)),11),f+=2;f<p.length&&v.put(S(p.charAt(f)),6)};var S=function(v){if("0"<=v&&v<="9")return v.charCodeAt(0)-48;if("A"<=v&&v<="Z")return v.charCodeAt(0)-65+10;switch(v){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+v}};return U},E=function(L){var F=e.MODE_8BIT_BYTE,k=L,U=n.stringToBytes(L),S={};return S.getMode=function(){return F},S.getLength=function(v){return U.length},S.write=function(v){for(var p=0;p<U.length;p+=1)v.put(U[p],8)},S},T=function(L){var F=e.MODE_KANJI,k=L,U=n.stringToBytesFuncs.SJIS;if(!U)throw"sjis not supported.";(function(p,f){var y=U(p);if(y.length!=2||(y[0]<<8|y[1])!=f)throw"sjis not supported."})("\u53CB",38726);var S=U(L),v={};return v.getMode=function(){return F},v.getLength=function(p){return~~(S.length/2)},v.write=function(p){for(var f=S,y=0;y+1<f.length;){var _=(255&f[y])<<8|255&f[y+1];if(33088<=_&&_<=40956)_-=33088;else if(57408<=_&&_<=60351)_-=49472;else throw"illegal char at "+(y+1)+"/"+_;_=(_>>>8&255)*192+(_&255),p.put(_,13),y+=2}if(y<f.length)throw"illegal char at "+(y+1)},v},b=function(){var L=[],F={};return F.writeByte=function(k){L.push(k&255)},F.writeShort=function(k){F.writeByte(k),F.writeByte(k>>>8)},F.writeBytes=function(k,U,S){U=U||0,S=S||k.length;for(var v=0;v<S;v+=1)F.writeByte(k[v+U])},F.writeString=function(k){for(var U=0;U<k.length;U+=1)F.writeByte(k.charCodeAt(U))},F.toByteArray=function(){return L},F.toString=function(){var k="";k+="[";for(var U=0;U<L.length;U+=1)U>0&&(k+=","),k+=L[U];return k+="]",k},F},V=function(){var L=0,F=0,k=0,U="",S={},v=function(f){U+=String.fromCharCode(p(f&63))},p=function(f){if(!(f<0)){if(f<26)return 65+f;if(f<52)return 97+(f-26);if(f<62)return 48+(f-52);if(f==62)return 43;if(f==63)return 47}throw"n:"+f};return S.writeByte=function(f){for(L=L<<8|f&255,F+=8,k+=1;F>=6;)v(L>>>F-6),F-=6},S.flush=function(){if(F>0&&(v(L<<6-F),L=0,F=0),k%3!=0)for(var f=3-k%3,y=0;y<f;y+=1)U+="="},S.toString=function(){return U},S},G=function(L){var F=L,k=0,U=0,S=0,v={};v.read=function(){for(;S<8;){if(k>=F.length){if(S==0)return-1;throw"unexpected end of file./"+S}var f=F.charAt(k);if(k+=1,f=="=")return S=0,-1;if(f.match(/^\s$/))continue;U=U<<6|p(f.charCodeAt(0)),S+=6}var y=U>>>S-8&255;return S-=8,y};var p=function(f){if(65<=f&&f<=90)return f-65;if(97<=f&&f<=122)return f-97+26;if(48<=f&&f<=57)return f-48+52;if(f==43)return 62;if(f==47)return 63;throw"c:"+f};return v},B=function(L,F){var k=L,U=F,S=new Array(L*F),v={};v.setPixel=function(_,I,w){S[I*k+_]=w},v.write=function(_){_.writeString("GIF87a"),_.writeShort(k),_.writeShort(U),_.writeByte(128),_.writeByte(0),_.writeByte(0),_.writeByte(0),_.writeByte(0),_.writeByte(0),_.writeByte(255),_.writeByte(255),_.writeByte(255),_.writeString(","),_.writeShort(0),_.writeShort(0),_.writeShort(k),_.writeShort(U),_.writeByte(0);var I=2,w=f(I);_.writeByte(I);for(var X=0;w.length-X>255;)_.writeByte(255),_.writeBytes(w,X,255),X+=255;_.writeByte(w.length-X),_.writeBytes(w,X,w.length-X),_.writeByte(0),_.writeString(";")};var p=function(_){var I=_,w=0,X=0,oe={};return oe.write=function(_e,ye){if(_e>>>ye)throw"length over";for(;w+ye>=8;)I.writeByte(255&(_e<<w|X)),ye-=8-w,_e>>>=8-w,X=0,w=0;X=_e<<w|X,w=w+ye},oe.flush=function(){w>0&&I.writeByte(X)},oe},f=function(_){for(var I=1<<_,w=(1<<_)+1,X=_+1,oe=y(),_e=0;_e<I;_e+=1)oe.add(String.fromCharCode(_e));oe.add(String.fromCharCode(I)),oe.add(String.fromCharCode(w));var ye=b(),De=p(ye);De.write(I,X);var Ge=0,We=String.fromCharCode(S[Ge]);for(Ge+=1;Ge<S.length;){var Rt=String.fromCharCode(S[Ge]);Ge+=1,oe.contains(We+Rt)?We=We+Rt:(De.write(oe.indexOf(We),X),oe.size()<4095&&(oe.size()==1<<X&&(X+=1),oe.add(We+Rt)),We=Rt)}return De.write(oe.indexOf(We),X),De.write(w,X),De.flush(),ye.toByteArray()},y=function(){var _={},I=0,w={};return w.add=function(X){if(w.contains(X))throw"dup key:"+X;_[X]=I,I+=1},w.size=function(){return I},w.indexOf=function(X){return _[X]},w.contains=function(X){return typeof _[X]<"u"},w};return v},ee=function(L,F,k){for(var U=B(L,F),S=0;S<F;S+=1)for(var v=0;v<L;v+=1)U.setPixel(v,S,k(v,S));var p=b();U.write(p);for(var f=V(),y=p.toByteArray(),_=0;_<y.length;_+=1)f.writeByte(y[_]);return f.flush(),"data:image/gif;base64,"+f};return n}();(function(){np.stringToBytesFuncs["UTF-8"]=function(n){function e(t){for(var r=[],i=0;i<t.length;i++){var s=t.charCodeAt(i);s<128?r.push(s):s<2048?r.push(192|s>>6,128|s&63):s<55296||s>=57344?r.push(224|s>>12,128|s>>6&63,128|s&63):(i++,s=65536+((s&1023)<<10|t.charCodeAt(i)&1023),r.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63))}return r}return e(n)}})();(function(n){typeof define=="function"&&define.amd?define([],n):typeof rp=="object"&&(ip.exports=n())})(function(){return np})});var zl=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Jp=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},$l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,g=s>>2,E=(s&3)<<4|u>>4,T=(u&15)<<2|d>>6,b=d&63;l||(b=64,a||(T=64)),r.push(t[g],t[E],t[T],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let E=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||E==null)throw new xo;let T=s<<2|u>>4;if(r.push(T),d!==64){let b=u<<4&240|d>>2;if(r.push(b),E!==64){let V=d<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},xo=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Yp=function(n){let e=zl(n);return $l.encodeByteArray(e,!0)},wr=function(n){return Yp(n).replace(/\./g,"")},Vo=function(n){try{return $l.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Xp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Zp=()=>Xp().__FIREBASE_DEFAULTS__,em=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Vo(n[1]);return e&&JSON.parse(e)},xi=()=>{try{return Zp()||em()||tm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lo=n=>{var e,t;return(t=(e=xi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kl=n=>{let e=Lo(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mo=()=>{var n;return(n=xi())===null||n===void 0?void 0:n.config},Fo=n=>{var e;return(e=xi())===null||e===void 0?void 0:e[`_${n}`]};var Ni=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Wl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wr(JSON.stringify(t)),wr(JSON.stringify(a)),""].join(".")}function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function nm(){var n;let e=(n=xi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ql(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jl(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xl(){let n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zl(){return!nm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uo(){try{return typeof indexedDB=="object"}catch{return!1}}function eh(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var rm="FirebaseError",$e=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=rm,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_t.prototype.create)}},_t=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?im(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new $e(i,u,r)}};function im(n,e){return n.replace(sm,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var sm=/\{\$([^}]+)}/g;function th(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(Gl(s)&&Gl(a)){if(!Xt(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Gl(n){return n!==null&&typeof n=="object"}function Pn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Dn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function nh(n,e){let t=new Oo(n,e);return t.subscribe.bind(t)}var Oo=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");om(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=No),i.error===void 0&&(i.error=No),i.complete===void 0&&(i.complete=No);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function om(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function No(){}var cw=4*60*60*1e3;function be(n){return n&&n._delegate?n._delegate:n}var He=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Zt="[DEFAULT]";var Bo=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Ni;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cm(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:am(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function am(n){return n===Zt?void 0:n}function cm(n){return n.instantiationMode==="EAGER"}var Oi=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Bo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var um=[],re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));var lm={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},hm=re.INFO,dm={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},fm=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=dm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},kt=class{constructor(e){this.name=e,this._logLevel=hm,this._logHandler=fm,this._userLogHandler=null,um.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}};var pm=(n,e)=>e.some(t=>n instanceof t),rh,ih;function mm(){return rh||(rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gm(){return ih||(ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var sh=new WeakMap,jo=new WeakMap,oh=new WeakMap,qo=new WeakMap,zo=new WeakMap;function _m(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(it(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sh.set(t,n)}).catch(()=>{}),zo.set(e,n),e}function ym(n){if(jo.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});jo.set(n,e)}var Go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return jo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||oh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return it(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ah(n){Go=n(Go)}function vm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Vi(this),e,...t);return oh.set(r,e.sort?e.sort():[e]),it(r)}:gm().includes(n)?function(...e){return n.apply(Vi(this),e),it(sh.get(this))}:function(...e){return it(n.apply(Vi(this),e))}}function wm(n){return typeof n=="function"?vm(n):(n instanceof IDBTransaction&&ym(n),pm(n,mm())?new Proxy(n,Go):n)}function it(n){if(n instanceof IDBRequest)return _m(n);if(qo.has(n))return qo.get(n);let e=wm(n);return e!==n&&(qo.set(n,e),zo.set(e,n)),e}var Vi=n=>zo.get(n);function uh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),u=it(a);return r&&a.addEventListener("upgradeneeded",l=>{r(it(a.result),l.oldVersion,l.newVersion,it(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var Im=["get","getKey","getAll","getAllKeys","count"],Em=["put","add","delete","clear"],$o=new Map;function ch(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Em.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Im.includes(t)))return;let s=async function(a,...u){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return $o.set(e,s),s}ah(n=>({...n,get:(e,t,r)=>ch(e,t)||n.get(e,t,r),has:(e,t)=>!!ch(e,t)||n.has(e,t)}));var Wo=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tm(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Tm(n){let e=n.getComponent();return e?.type==="VERSION"}var Ho="@firebase/app",lh="0.10.13";var yt=new kt("@firebase/app"),Am="@firebase/app-compat",bm="@firebase/analytics-compat",Sm="@firebase/analytics",Rm="@firebase/app-check-compat",Pm="@firebase/app-check",Cm="@firebase/auth",Dm="@firebase/auth-compat",km="@firebase/database",Nm="@firebase/data-connect",xm="@firebase/database-compat",Om="@firebase/functions",Vm="@firebase/functions-compat",Lm="@firebase/installations",Mm="@firebase/installations-compat",Fm="@firebase/messaging",Um="@firebase/messaging-compat",Bm="@firebase/performance",qm="@firebase/performance-compat",jm="@firebase/remote-config",Gm="@firebase/remote-config-compat",zm="@firebase/storage",$m="@firebase/storage-compat",Km="@firebase/firestore",Wm="@firebase/vertexai-preview",Hm="@firebase/firestore-compat",Qm="firebase",Jm="10.14.1";var Qo="[DEFAULT]",Ym={[Ho]:"fire-core",[Am]:"fire-core-compat",[Sm]:"fire-analytics",[bm]:"fire-analytics-compat",[Pm]:"fire-app-check",[Rm]:"fire-app-check-compat",[Cm]:"fire-auth",[Dm]:"fire-auth-compat",[km]:"fire-rtdb",[Nm]:"fire-data-connect",[xm]:"fire-rtdb-compat",[Om]:"fire-fn",[Vm]:"fire-fn-compat",[Lm]:"fire-iid",[Mm]:"fire-iid-compat",[Fm]:"fire-fcm",[Um]:"fire-fcm-compat",[Bm]:"fire-perf",[qm]:"fire-perf-compat",[jm]:"fire-rc",[Gm]:"fire-rc-compat",[zm]:"fire-gcs",[$m]:"fire-gcs-compat",[Km]:"fire-fst",[Hm]:"fire-fst-compat",[Wm]:"fire-vertex","fire-js":"fire-js",[Qm]:"fire-js-all"};var Li=new Map,Xm=new Map,Jo=new Map;function hh(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){let e=n.name;if(Jo.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Jo.set(e,n);for(let t of Li.values())hh(t,n);for(let t of Xm.values())hh(t,n);return!0}function Er(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function st(n){return n.settings!==void 0}var Zm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new _t("app","Firebase",Zm);var Yo=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}};var Ot=Jm;function ea(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:Qo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=Mo()),!t)throw Nt.create("no-options");let s=Li.get(i);if(s){if(Xt(t,s.options)&&Xt(r,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}let a=new Oi(i);for(let l of Jo.values())a.addComponent(l);let u=new Yo(t,r,a);return Li.set(i,u),u}function Mi(n=Qo){let e=Li.get(n);if(!e&&n===Qo&&Mo())return ea();if(!e)throw Nt.create("no-app",{appName:n});return e}function Ye(n,e,t){var r;let i=(r=Ym[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(u.join(" "));return}xt(new He(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var eg="firebase-heartbeat-database",tg=1,Ir="firebase-heartbeat-store",Ko=null;function mh(){return Ko||(Ko=uh(eg,tg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),Ko}async function ng(n){try{let t=(await mh()).transaction(Ir),r=await t.objectStore(Ir).get(gh(n));return await t.done,r}catch(e){if(e instanceof $e)yt.warn(e.message);else{let t=Nt.create("idb-get",{originalErrorMessage:e?.message});yt.warn(t.message)}}}async function dh(n,e){try{let r=(await mh()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,gh(n)),await r.done}catch(t){if(t instanceof $e)yt.warn(t.message);else{let r=Nt.create("idb-set",{originalErrorMessage:t?.message});yt.warn(r.message)}}}function gh(n){return`${n.name}!${n.options.appId}`}var rg=1024,ig=30*24*60*60*1e3,Xo=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Zo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let u=new Date(a.date).valueOf();return Date.now()-u<=ig}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=fh(),{heartbeatsToSend:r,unsentEntries:i}=sg(this._heartbeatsCache.heartbeats),s=wr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return yt.warn(t),""}}};function fh(){return new Date().toISOString().substring(0,10)}function sg(n,e=rg){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ph(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ph(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Zo=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uo()?eh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await ng(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return dh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return dh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function ph(n){return wr(JSON.stringify({version:2,heartbeats:n})).length}function og(n){xt(new He("platform-logger",e=>new Wo(e),"PRIVATE")),xt(new He("heartbeat",e=>new Xo(e),"PRIVATE")),Ye(Ho,lh,n),Ye(Ho,lh,"esm2017"),Ye("fire-js","")}og("");var ag="firebase",cg="10.14.1";Ye(ag,cg,"app");var _h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yh={};var Vt,ta;(function(){var n;function e(v,p){function f(){}f.prototype=p.prototype,v.D=p.prototype,v.prototype=new f,v.prototype.constructor=v,v.C=function(y,_,I){for(var w=Array(arguments.length-2),X=2;X<arguments.length;X++)w[X-2]=arguments[X];return p.prototype[_].apply(y,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,f){f||(f=0);var y=Array(16);if(typeof p=="string")for(var _=0;16>_;++_)y[_]=p.charCodeAt(f++)|p.charCodeAt(f++)<<8|p.charCodeAt(f++)<<16|p.charCodeAt(f++)<<24;else for(_=0;16>_;++_)y[_]=p[f++]|p[f++]<<8|p[f++]<<16|p[f++]<<24;p=v.g[0],f=v.g[1],_=v.g[2];var I=v.g[3],w=p+(I^f&(_^I))+y[0]+3614090360&4294967295;p=f+(w<<7&4294967295|w>>>25),w=I+(_^p&(f^_))+y[1]+3905402710&4294967295,I=p+(w<<12&4294967295|w>>>20),w=_+(f^I&(p^f))+y[2]+606105819&4294967295,_=I+(w<<17&4294967295|w>>>15),w=f+(p^_&(I^p))+y[3]+3250441966&4294967295,f=_+(w<<22&4294967295|w>>>10),w=p+(I^f&(_^I))+y[4]+4118548399&4294967295,p=f+(w<<7&4294967295|w>>>25),w=I+(_^p&(f^_))+y[5]+1200080426&4294967295,I=p+(w<<12&4294967295|w>>>20),w=_+(f^I&(p^f))+y[6]+2821735955&4294967295,_=I+(w<<17&4294967295|w>>>15),w=f+(p^_&(I^p))+y[7]+4249261313&4294967295,f=_+(w<<22&4294967295|w>>>10),w=p+(I^f&(_^I))+y[8]+1770035416&4294967295,p=f+(w<<7&4294967295|w>>>25),w=I+(_^p&(f^_))+y[9]+2336552879&4294967295,I=p+(w<<12&4294967295|w>>>20),w=_+(f^I&(p^f))+y[10]+4294925233&4294967295,_=I+(w<<17&4294967295|w>>>15),w=f+(p^_&(I^p))+y[11]+2304563134&4294967295,f=_+(w<<22&4294967295|w>>>10),w=p+(I^f&(_^I))+y[12]+1804603682&4294967295,p=f+(w<<7&4294967295|w>>>25),w=I+(_^p&(f^_))+y[13]+4254626195&4294967295,I=p+(w<<12&4294967295|w>>>20),w=_+(f^I&(p^f))+y[14]+2792965006&4294967295,_=I+(w<<17&4294967295|w>>>15),w=f+(p^_&(I^p))+y[15]+1236535329&4294967295,f=_+(w<<22&4294967295|w>>>10),w=p+(_^I&(f^_))+y[1]+4129170786&4294967295,p=f+(w<<5&4294967295|w>>>27),w=I+(f^_&(p^f))+y[6]+3225465664&4294967295,I=p+(w<<9&4294967295|w>>>23),w=_+(p^f&(I^p))+y[11]+643717713&4294967295,_=I+(w<<14&4294967295|w>>>18),w=f+(I^p&(_^I))+y[0]+3921069994&4294967295,f=_+(w<<20&4294967295|w>>>12),w=p+(_^I&(f^_))+y[5]+3593408605&4294967295,p=f+(w<<5&4294967295|w>>>27),w=I+(f^_&(p^f))+y[10]+38016083&4294967295,I=p+(w<<9&4294967295|w>>>23),w=_+(p^f&(I^p))+y[15]+3634488961&4294967295,_=I+(w<<14&4294967295|w>>>18),w=f+(I^p&(_^I))+y[4]+3889429448&4294967295,f=_+(w<<20&4294967295|w>>>12),w=p+(_^I&(f^_))+y[9]+568446438&4294967295,p=f+(w<<5&4294967295|w>>>27),w=I+(f^_&(p^f))+y[14]+3275163606&4294967295,I=p+(w<<9&4294967295|w>>>23),w=_+(p^f&(I^p))+y[3]+4107603335&4294967295,_=I+(w<<14&4294967295|w>>>18),w=f+(I^p&(_^I))+y[8]+1163531501&4294967295,f=_+(w<<20&4294967295|w>>>12),w=p+(_^I&(f^_))+y[13]+2850285829&4294967295,p=f+(w<<5&4294967295|w>>>27),w=I+(f^_&(p^f))+y[2]+4243563512&4294967295,I=p+(w<<9&4294967295|w>>>23),w=_+(p^f&(I^p))+y[7]+1735328473&4294967295,_=I+(w<<14&4294967295|w>>>18),w=f+(I^p&(_^I))+y[12]+2368359562&4294967295,f=_+(w<<20&4294967295|w>>>12),w=p+(f^_^I)+y[5]+4294588738&4294967295,p=f+(w<<4&4294967295|w>>>28),w=I+(p^f^_)+y[8]+2272392833&4294967295,I=p+(w<<11&4294967295|w>>>21),w=_+(I^p^f)+y[11]+1839030562&4294967295,_=I+(w<<16&4294967295|w>>>16),w=f+(_^I^p)+y[14]+4259657740&4294967295,f=_+(w<<23&4294967295|w>>>9),w=p+(f^_^I)+y[1]+2763975236&4294967295,p=f+(w<<4&4294967295|w>>>28),w=I+(p^f^_)+y[4]+1272893353&4294967295,I=p+(w<<11&4294967295|w>>>21),w=_+(I^p^f)+y[7]+4139469664&4294967295,_=I+(w<<16&4294967295|w>>>16),w=f+(_^I^p)+y[10]+3200236656&4294967295,f=_+(w<<23&4294967295|w>>>9),w=p+(f^_^I)+y[13]+681279174&4294967295,p=f+(w<<4&4294967295|w>>>28),w=I+(p^f^_)+y[0]+3936430074&4294967295,I=p+(w<<11&4294967295|w>>>21),w=_+(I^p^f)+y[3]+3572445317&4294967295,_=I+(w<<16&4294967295|w>>>16),w=f+(_^I^p)+y[6]+76029189&4294967295,f=_+(w<<23&4294967295|w>>>9),w=p+(f^_^I)+y[9]+3654602809&4294967295,p=f+(w<<4&4294967295|w>>>28),w=I+(p^f^_)+y[12]+3873151461&4294967295,I=p+(w<<11&4294967295|w>>>21),w=_+(I^p^f)+y[15]+530742520&4294967295,_=I+(w<<16&4294967295|w>>>16),w=f+(_^I^p)+y[2]+3299628645&4294967295,f=_+(w<<23&4294967295|w>>>9),w=p+(_^(f|~I))+y[0]+4096336452&4294967295,p=f+(w<<6&4294967295|w>>>26),w=I+(f^(p|~_))+y[7]+1126891415&4294967295,I=p+(w<<10&4294967295|w>>>22),w=_+(p^(I|~f))+y[14]+2878612391&4294967295,_=I+(w<<15&4294967295|w>>>17),w=f+(I^(_|~p))+y[5]+4237533241&4294967295,f=_+(w<<21&4294967295|w>>>11),w=p+(_^(f|~I))+y[12]+1700485571&4294967295,p=f+(w<<6&4294967295|w>>>26),w=I+(f^(p|~_))+y[3]+2399980690&4294967295,I=p+(w<<10&4294967295|w>>>22),w=_+(p^(I|~f))+y[10]+4293915773&4294967295,_=I+(w<<15&4294967295|w>>>17),w=f+(I^(_|~p))+y[1]+2240044497&4294967295,f=_+(w<<21&4294967295|w>>>11),w=p+(_^(f|~I))+y[8]+1873313359&4294967295,p=f+(w<<6&4294967295|w>>>26),w=I+(f^(p|~_))+y[15]+4264355552&4294967295,I=p+(w<<10&4294967295|w>>>22),w=_+(p^(I|~f))+y[6]+2734768916&4294967295,_=I+(w<<15&4294967295|w>>>17),w=f+(I^(_|~p))+y[13]+1309151649&4294967295,f=_+(w<<21&4294967295|w>>>11),w=p+(_^(f|~I))+y[4]+4149444226&4294967295,p=f+(w<<6&4294967295|w>>>26),w=I+(f^(p|~_))+y[11]+3174756917&4294967295,I=p+(w<<10&4294967295|w>>>22),w=_+(p^(I|~f))+y[2]+718787259&4294967295,_=I+(w<<15&4294967295|w>>>17),w=f+(I^(_|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(_+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+_&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var f=p-this.blockSize,y=this.B,_=this.h,I=0;I<p;){if(_==0)for(;I<=f;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[_++]=v.charCodeAt(I++),_==this.blockSize){i(this,y),_=0;break}}else for(;I<p;)if(y[_++]=v[I++],_==this.blockSize){i(this,y),_=0;break}}this.h=_,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var f=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=f&255,f/=256;for(this.u(v),v=Array(16),p=f=0;4>p;++p)for(var y=0;32>y;y+=8)v[f++]=this.g[p]>>>y&255;return v};function s(v,p){var f=u;return Object.prototype.hasOwnProperty.call(f,v)?f[v]:f[v]=p(v)}function a(v,p){this.h=p;for(var f=[],y=!0,_=v.length-1;0<=_;_--){var I=v[_]|0;y&&I==p||(f[_]=I,y=!1)}this.g=f}var u={};function l(v){return-128<=v&&128>v?s(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return B(d(-v));for(var p=[],f=1,y=0;v>=f;y++)p[y]=v/f|0,f*=4294967296;return new a(p,0)}function g(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return B(g(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=d(Math.pow(p,8)),y=E,_=0;_<v.length;_+=8){var I=Math.min(8,v.length-_),w=parseInt(v.substring(_,_+I),p);8>I?(I=d(Math.pow(p,I)),y=y.j(I).add(d(w))):(y=y.j(f),y=y.add(d(w)))}return y}var E=l(0),T=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(G(this))return-B(this).m();for(var v=0,p=1,f=0;f<this.g.length;f++){var y=this.i(f);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(G(this))return"-"+B(this).toString(v);for(var p=d(Math.pow(v,6)),f=this,y="";;){var _=k(f,p).g;f=ee(f,_.j(p));var I=((0<f.g.length?f.g[0]:f.h)>>>0).toString(v);if(f=_,V(f))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function G(v){return v.h==-1}n.l=function(v){return v=ee(this,v),G(v)?-1:V(v)?0:1};function B(v){for(var p=v.g.length,f=[],y=0;y<p;y++)f[y]=~v.g[y];return new a(f,~v.h).add(T)}n.abs=function(){return G(this)?B(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),f=[],y=0,_=0;_<=p;_++){var I=y+(this.i(_)&65535)+(v.i(_)&65535),w=(I>>>16)+(this.i(_)>>>16)+(v.i(_)>>>16);y=w>>>16,I&=65535,w&=65535,f[_]=w<<16|I}return new a(f,f[f.length-1]&-2147483648?-1:0)};function ee(v,p){return v.add(B(p))}n.j=function(v){if(V(this)||V(v))return E;if(G(this))return G(v)?B(this).j(B(v)):B(B(this).j(v));if(G(v))return B(this.j(B(v)));if(0>this.l(b)&&0>v.l(b))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,f=[],y=0;y<2*p;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(var _=0;_<v.g.length;_++){var I=this.i(y)>>>16,w=this.i(y)&65535,X=v.i(_)>>>16,oe=v.i(_)&65535;f[2*y+2*_]+=w*oe,L(f,2*y+2*_),f[2*y+2*_+1]+=I*oe,L(f,2*y+2*_+1),f[2*y+2*_+1]+=w*X,L(f,2*y+2*_+1),f[2*y+2*_+2]+=I*X,L(f,2*y+2*_+2)}for(y=0;y<p;y++)f[y]=f[2*y+1]<<16|f[2*y];for(y=p;y<2*p;y++)f[y]=0;return new a(f,0)};function L(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function F(v,p){this.g=v,this.h=p}function k(v,p){if(V(p))throw Error("division by zero");if(V(v))return new F(E,E);if(G(v))return p=k(B(v),p),new F(B(p.g),B(p.h));if(G(p))return p=k(v,B(p)),new F(B(p.g),p.h);if(30<v.g.length){if(G(v)||G(p))throw Error("slowDivide_ only works with positive integers.");for(var f=T,y=p;0>=y.l(v);)f=U(f),y=U(y);var _=S(f,1),I=S(y,1);for(y=S(y,2),f=S(f,2);!V(y);){var w=I.add(y);0>=w.l(v)&&(_=_.add(f),I=w),y=S(y,1),f=S(f,1)}return p=ee(v,_.j(p)),new F(_,p)}for(_=E;0<=v.l(p);){for(f=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(f),w=I.j(p);G(w)||0<w.l(v);)f-=y,I=d(f),w=I.j(p);V(I)&&(I=T),_=_.add(I),v=ee(v,w)}return new F(_,v)}n.A=function(v){return k(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)&v.i(y);return new a(f,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)|v.i(y);return new a(f,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)^v.i(y);return new a(f,this.h^v.h)};function U(v){for(var p=v.g.length+1,f=[],y=0;y<p;y++)f[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(f,v.h)}function S(v,p){var f=p>>5;p%=32;for(var y=v.g.length-f,_=[],I=0;I<y;I++)_[I]=0<p?v.i(I+f)>>>p|v.i(I+f+1)<<32-p:v.i(I+f);return new a(_,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ta=yh.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,Vt=yh.Integer=a}).apply(typeof _h<"u"?_h:typeof self<"u"?self:typeof window<"u"?window:{});var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vt={};var na,ug,kn,ra,Tr,Ui,ia,sa,oa;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fi=="object"&&Fi];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in h))break e;h=h[A]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,m=!1,A={next:function(){if(!m&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function g(o,c,h){return o.call.apply(o.bind,arguments)}function E(o,c,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function T(o,c,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:E,T.apply(null,arguments)}function b(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,A,R){for(var j=Array(arguments.length-2),he=2;he<arguments.length;he++)j[he-2]=arguments[he];return c.prototype[A].apply(m,j)}}function G(o){let c=o.length;if(0<c){let h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function B(o,c){for(let h=1;h<arguments.length;h++){let m=arguments[h];if(l(m)){let A=o.length||0,R=m.length||0;o.length=A+R;for(let j=0;j<R;j++)o[A+j]=m[j]}else o.push(m)}}class ee{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function k(o){return k[" "](o),o}k[" "]=function(){};var U=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function S(o,c,h){for(let m in o)c.call(h,o[m],m,o)}function v(o,c){for(let h in o)c.call(void 0,o[h],h,o)}function p(o){let c={};for(let h in o)c[h]=o[h];return c}let f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(o,c){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)o[h]=m[h];for(let R=0;R<f.length;R++)h=f[R],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function _(o){var c=1;o=o.split(":");let h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function I(o){u.setTimeout(()=>{throw o},0)}function w(){var o=Ge;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class X{constructor(){this.h=this.g=null}add(c,h){let m=oe.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var oe=new ee(()=>new _e,o=>o.reset());class _e{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,De=!1,Ge=new X,We=()=>{let o=u.Promise.resolve(void 0);ye=()=>{o.then(Rt)}};var Rt=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(h){I(h)}var c=oe;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}De=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var ho=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function C(o,c){if(pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(U){e:{try{k(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:D[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&C.aa.h.call(this)}}V(C,pe);var D={2:"touch",3:"pen",4:"mouse"};C.prototype.h=function(){C.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var P="closure_listenable_"+(1e6*Math.random()|0),x=0;function M(o,c,h,m,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=A,this.key=++x,this.da=this.fa=!1}function z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Q(o){this.src=o,this.g={},this.h=0}Q.prototype.add=function(o,c,h,m,A){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var j=ue(o,c,m,A);return-1<j?(c=o[j],h||(c.fa=!1)):(c=new M(c,this.src,R,!!m,A),c.fa=h,o.push(c)),c};function H(o,c){var h=c.type;if(h in o.g){var m=o.g[h],A=Array.prototype.indexOf.call(m,c,void 0),R;(R=0<=A)&&Array.prototype.splice.call(m,A,1),R&&(z(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ue(o,c,h,m){for(var A=0;A<o.length;++A){var R=o[A];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==m)return A}return-1}var me="closure_lm_"+(1e6*Math.random()|0),Y={};function Fe(o,c,h,m,A){if(m&&m.once)return ir(o,c,h,m,A);if(Array.isArray(c)){for(var R=0;R<c.length;R++)Fe(o,c[R],h,m,A);return null}return h=mo(h),o&&o[P]?o.K(c,h,d(m)?!!m.capture:!!m,A):Ue(o,c,h,!1,m,A)}function Ue(o,c,h,m,A,R){if(!c)throw Error("Invalid event type");var j=d(A)?!!A.capture:!!A,he=fo(o);if(he||(o[me]=he=new Q(o)),h=he.add(c,h,m,j,R),h.proxy)return h;if(m=gi(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)ho||(A=j),A===void 0&&(A=!1),o.addEventListener(c.toString(),m,A);else if(o.attachEvent)o.attachEvent(Wt(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function gi(){function o(h){return c.call(o.src,o.listener,h)}let c=mp;return o}function ir(o,c,h,m,A){if(Array.isArray(c)){for(var R=0;R<c.length;R++)ir(o,c[R],h,m,A);return null}return h=mo(h),o&&o[P]?o.L(c,h,d(m)?!!m.capture:!!m,A):Ue(o,c,h,!0,m,A)}function sr(o,c,h,m,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)sr(o,c[R],h,m,A);else m=d(m)?!!m.capture:!!m,h=mo(h),o&&o[P]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=ue(R,h,m,A),-1<h&&(z(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=fo(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ue(c,h,m,A)),(h=-1<o?c[o]:null)&&Kt(h))}function Kt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[P])H(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(Wt(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=fo(c))?(H(h,o),h.h==0&&(h.src=null,c[me]=null)):z(o)}}}function Wt(o){return o in Y?Y[o]:Y[o]="on"+o}function mp(o,c){if(o.da)o=!0;else{c=new C(c,this);var h=o.listener,m=o.ha||o.src;o.fa&&Kt(o),o=h.call(m,c)}return o}function fo(o){return o=o[me],o instanceof Q?o:null}var po="__closure_events_fn_"+(1e9*Math.random()>>>0);function mo(o){return typeof o=="function"?o:(o[po]||(o[po]=function(c){return o.handleEvent(c)}),o[po])}function ke(){rt.call(this),this.i=new Q(this),this.M=this,this.F=null}V(ke,rt),ke.prototype[P]=!0,ke.prototype.removeEventListener=function(o,c,h,m){sr(this,o,c,h,m)};function Be(o,c){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new pe(c,o);else if(c instanceof pe)c.target=c.target||o;else{var A=c;c=new pe(m,o),y(c,A)}if(A=!0,h)for(var R=h.length-1;0<=R;R--){var j=c.g=h[R];A=_i(j,m,!0,c)&&A}if(j=c.g=o,A=_i(j,m,!0,c)&&A,A=_i(j,m,!1,c)&&A,h)for(R=0;R<h.length;R++)j=c.g=h[R],A=_i(j,m,!1,c)&&A}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],m=0;m<h.length;m++)z(h[m]);delete o.g[c],o.h--}}this.F=null},ke.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},ke.prototype.L=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function _i(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,R=0;R<c.length;++R){var j=c[R];if(j&&!j.da&&j.capture==h){var he=j.listener,Pe=j.ha||j.src;j.fa&&H(o.i,j),A=he.call(Pe,m)!==!1&&A}}return A&&!m.defaultPrevented}function Wu(o,c,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Hu(o){o.g=Wu(()=>{o.g=null,o.i&&(o.i=!1,Hu(o))},o.l);let c=o.h;o.h=null,o.m.apply(null,c)}class gp extends rt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Hu(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(o){rt.call(this),this.h=o,this.g={}}V(or,rt);var Qu=[];function Ju(o){S(o.g,function(c,h){this.g.hasOwnProperty(h)&&Kt(c)},o),o.g={}}or.prototype.N=function(){or.aa.N.call(this),Ju(this)},or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var go=u.JSON.stringify,_p=u.JSON.parse,yp=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function _o(){}_o.prototype.h=null;function Yu(o){return o.h||(o.h=o.i())}function Xu(){}var ar={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yo(){pe.call(this,"d")}V(yo,pe);function vo(){pe.call(this,"c")}V(vo,pe);var Ht={},Zu=null;function yi(){return Zu=Zu||new ke}Ht.La="serverreachability";function el(o){pe.call(this,Ht.La,o)}V(el,pe);function cr(o){let c=yi();Be(c,new el(c))}Ht.STAT_EVENT="statevent";function tl(o,c){pe.call(this,Ht.STAT_EVENT,o),this.stat=c}V(tl,pe);function qe(o){let c=yi();Be(c,new tl(c,o))}Ht.Ma="timingevent";function nl(o,c){pe.call(this,Ht.Ma,o),this.size=c}V(nl,pe);function ur(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function vp(o,c,h,m,A,R){o.info(function(){if(o.g)if(R)for(var j="",he=R.split("&"),Pe=0;Pe<he.length;Pe++){var ae=he[Pe].split("=");if(1<ae.length){var Ne=ae[0];ae=ae[1];var xe=Ne.split("_");j=2<=xe.length&&xe[1]=="type"?j+(Ne+"="+ae+"&"):j+(Ne+"=redacted&")}}else j=null;else j=R;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+c+`
`+h+`
`+j})}function wp(o,c,h,m,A,R,j){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+c+`
`+h+`
`+R+" "+j})}function An(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ep(o,h)+(m?" "+m:"")})}function Ip(o,c){o.info(function(){return"TIMEOUT: "+c})}lr.prototype.info=function(){};function Ep(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var j=1;j<A.length;j++)A[j]=""}}}}return go(h)}catch{return c}}var vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wo;function wi(){}V(wi,_o),wi.prototype.g=function(){return new XMLHttpRequest},wi.prototype.i=function(){return{}},wo=new wi;function Pt(o,c,h,m){this.j=o,this.i=c,this.l=h,this.R=m||1,this.U=new or(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}var sl={},Io={};function Eo(o,c,h){o.L=1,o.v=Ai(mt(c)),o.m=h,o.P=!0,ol(o,null)}function ol(o,c){o.F=Date.now(),Ii(o),o.A=mt(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),wl(h.i,"t",m),o.C=0,h=o.j.J,o.h=new il,o.g=Fl(o.j,h?c:null,!o.m),0<o.O&&(o.M=new gp(T(o.Y,o,o.g),o.O)),c=o.U,h=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Qu[0]=A.toString()),A=Qu);for(var R=0;R<A.length;R++){var j=Fe(h,A[R],m||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),cr(),vp(o.i,o.u,o.A,o.l,o.R,o.m)}Pt.prototype.ca=function(o){o=o.target;let c=this.M;c&&gt(o)==3?c.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{let xe=gt(this.g);var c=this.g.Ba();let Rn=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||Rl(this.g)))){this.J||xe!=4||c==7||(c==8||0>=Rn?cr(3):cr(2)),To(this);var h=this.g.Z();this.X=h;t:if(al(this)){var m=Rl(this.g);o="";var A=m.length,R=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),hr(this);var j="";break t}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(R&&c==A-1)});m.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,wp(this.i,this.u,this.A,this.l,this.R,xe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Pe=this.g;if((he=Pe.g?Pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(he)){var ae=he;break t}}ae=null}if(h=ae)An(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ao(this,h);else{this.o=!1,this.s=3,qe(12),Qt(this),hr(this);break e}}if(this.P){h=!0;let Je;for(;!this.J&&this.C<j.length;)if(Je=Tp(this,j),Je==Io){xe==4&&(this.s=4,qe(14),h=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==sl){this.s=4,qe(15),An(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else An(this.i,this.l,Je,null),Ao(this,Je);if(al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||j.length!=0||this.h.h||(this.s=1,qe(16),h=!1),this.o=this.o&&h,!h)An(this.i,this.l,j,"[Invalid Chunked Response]"),Qt(this),hr(this);else if(0<j.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Do(Ne),Ne.M=!0,qe(11))}}else An(this.i,this.l,j,null),Ao(this,j);xe==4&&Qt(this),this.o&&!this.J&&(xe==4?Ol(this.j,this):(this.o=!1,Ii(this)))}else Bp(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),Qt(this),hr(this)}}}catch{}finally{}};function al(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Tp(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?Io:(h=Number(c.substring(h,m)),isNaN(h)?sl:(m+=1,m+h>c.length?Io:(c=c.slice(m,m+h),o.C=m+h,c)))}Pt.prototype.cancel=function(){this.J=!0,Qt(this)};function Ii(o){o.S=Date.now()+o.I,cl(o,o.I)}function cl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ur(T(o.ba,o),c)}function To(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Pt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Ip(this.i,this.A),this.L!=2&&(cr(),qe(17)),Qt(this),this.s=2,hr(this)):cl(this,this.S-o)};function hr(o){o.j.G==0||o.J||Ol(o.j,o)}function Qt(o){To(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ju(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ao(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||bo(h.h,o))){if(!o.K&&bo(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ci(h),Ri(h);else break e;Co(h),qe(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=ur(T(h.Za,h),6e3));if(1>=hl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Yt(h,11)}else if((o.K||h.g==o)&&Ci(h),!L(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let ae=A[c];if(h.T=ae[0],ae=ae[1],h.G==2)if(ae[0]=="c"){h.K=ae[1],h.ia=ae[2];let Ne=ae[3];Ne!=null&&(h.la=Ne,h.j.info("VER="+h.la));let xe=ae[4];xe!=null&&(h.Aa=xe,h.j.info("SVER="+h.Aa));let Rn=ae[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(m=1.5*Rn,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;let Je=o.g;if(Je){let ki=Je.g?Je.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var R=m.h;R.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(So(R,R.h),R.h=null))}if(m.D){let ko=Je.g?Je.g.getResponseHeader("X-HTTP-Session-Id"):null;ko&&(m.ya=ko,de(m.I,m.D,ko))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var j=o;if(m.qa=Ml(m,m.J?m.ia:null,m.W),j.K){dl(m.h,j);var he=j,Pe=m.L;Pe&&(he.I=Pe),he.B&&(To(he),Ii(he)),m.g=j}else Nl(m);0<h.i.length&&Pi(h)}else ae[0]!="stop"&&ae[0]!="close"||Yt(h,7);else h.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Yt(h,7):Po(h):ae[0]!="noop"&&h.l&&h.l.ta(ae),h.v=0)}}cr(4)}catch{}}var Ap=class{constructor(o,c){this.g=o,this.map=c}};function ul(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ll(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hl(o){return o.h?1:o.g?o.g.size:0}function bo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function So(o,c){o.g?o.g.add(c):o.h=c}function dl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ul.prototype.cancel=function(){if(this.i=fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function fl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(let h of o.g.values())c=c.concat(h.D);return c}return G(o.i)}function bp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,m=0;m<h;m++)c.push(o[m]);return c}c=[],h=0;for(m in o)c[h++]=o[m];return c}function Sp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(let m in o)c[h++]=m;return c}}}function pl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Sp(o),m=bp(o),A=m.length,R=0;R<A;R++)c.call(void 0,m[R],h&&h[R],o)}var ml=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rp(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),A=null;if(0<=m){var R=o[h].substring(0,m);A=o[h].substring(m+1)}else R=o[h];c(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jt){this.h=o.h,Ei(this,o.j),this.o=o.o,this.g=o.g,Ti(this,o.s),this.l=o.l;var c=o.i,h=new pr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),gl(this,h),this.m=o.m}else o&&(c=String(o).match(ml))?(this.h=!1,Ei(this,c[1]||"",!0),this.o=dr(c[2]||""),this.g=dr(c[3]||"",!0),Ti(this,c[4]),this.l=dr(c[5]||"",!0),gl(this,c[6]||"",!0),this.m=dr(c[7]||"")):(this.h=!1,this.i=new pr(null,this.h))}Jt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(fr(c,_l,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(fr(c,_l,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(fr(h,h.charAt(0)=="/"?Dp:Cp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",fr(h,Np)),o.join("")};function mt(o){return new Jt(o)}function Ei(o,c,h){o.j=h?dr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ti(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function gl(o,c,h){c instanceof pr?(o.i=c,xp(o.i,o.h)):(h||(c=fr(c,kp)),o.i=new pr(c,o.h))}function de(o,c,h){o.i.set(c,h)}function Ai(o){return de(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function dr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function fr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Pp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Pp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _l=/[#\/\?@]/g,Cp=/[#\?:]/g,Dp=/[#\?]/g,kp=/[#\?@]/g,Np=/#/g;function pr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ct(o){o.g||(o.g=new Map,o.h=0,o.i&&Rp(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=pr.prototype,n.add=function(o,c){Ct(this),this.i=null,o=bn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function yl(o,c){Ct(o),c=bn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function vl(o,c){return Ct(o),c=bn(o,c),o.g.has(c)}n.forEach=function(o,c){Ct(this),this.g.forEach(function(h,m){h.forEach(function(A){o.call(c,A,m,this)},this)},this)},n.na=function(){Ct(this);let o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){let A=o[m];for(let R=0;R<A.length;R++)h.push(c[m])}return h},n.V=function(o){Ct(this);let c=[];if(typeof o=="string")vl(this,o)&&(c=c.concat(this.g.get(bn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return Ct(this),this.i=null,o=bn(this,o),vl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function wl(o,c,h){yl(o,c),0<h.length&&(o.i=null,o.g.set(bn(o,c),G(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];let R=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var A=R;j[m]!==""&&(A+="="+encodeURIComponent(String(j[m]))),o.push(A)}}return this.i=o.join("&")};function bn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function xp(o,c){c&&!o.j&&(Ct(o),o.i=null,o.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(yl(this,m),wl(this,A,h))},o)),o.j=c}function Op(o,c){let h=new lr;if(u.Image){let m=new Image;m.onload=b(Dt,h,"TestLoadImage: loaded",!0,c,m),m.onerror=b(Dt,h,"TestLoadImage: error",!1,c,m),m.onabort=b(Dt,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=b(Dt,h,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Vp(o,c){let h=new lr,m=new AbortController,A=setTimeout(()=>{m.abort(),Dt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(R=>{clearTimeout(A),R.ok?Dt(h,"TestPingServer: ok",!0,c):Dt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),Dt(h,"TestPingServer: error",!1,c)})}function Dt(o,c,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function Lp(){this.g=new yp}function Mp(o,c,h){let m=h||"";try{pl(o,function(A,R){let j=A;d(A)&&(j=go(A)),c.push(m+R+"="+encodeURIComponent(j))})}catch(A){throw c.push(m+"type="+encodeURIComponent("_badmap")),A}}function mr(o){this.l=o.Ub||null,this.j=o.eb||!1}V(mr,_o),mr.prototype.g=function(){return new bi(this.l,this.j)},mr.prototype.i=function(o){return function(){return o}}({});function bi(o,c){ke.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(bi,ke),n=bi.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,_r(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Il(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Il(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?gr(this):_r(this),this.readyState==3&&Il(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,gr(this))},n.Qa=function(o){this.g&&(this.response=o,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,_r(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function _r(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function El(o){let c="";return S(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Ro(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=El(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):de(o,c,h))}function ve(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ve,ke);var Fp=/^https?$/i,Up=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wo.g(),this.v=this.o?Yu(this.o):Yu(wo),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Tl(this,R);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(let R of m.keys())h.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Up,c,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[R,j]of h)this.g.setRequestHeader(R,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sl(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Tl(this,R)}};function Tl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Al(o),Si(o)}function Al(o){o.A||(o.A=!0,Be(o,"complete"),Be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Be(this,"complete"),Be(this,"abort"),Si(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bl(this):this.bb())},n.bb=function(){bl(this)};function bl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||gt(o)!=4||o.Z()!=2)){if(o.u&&gt(o)==4)Wu(o.Ea,0,o);else if(Be(o,"readystatechange"),gt(o)==4){o.h=!1;try{let j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=j===0){var A=String(o.D).match(ml)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Fp.test(A?A.toLowerCase():"")}h=m}if(h)Be(o,"complete"),Be(o,"success");else{o.m=6;try{var R=2<gt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Al(o)}}finally{Si(o)}}}}function Si(o,c){if(o.g){Sl(o);let h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Be(o,"ready");try{h.onreadystatechange=m}catch{}}}function Sl(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function gt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),_p(c)}};function Rl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Bp(o){let c={};o=(o.g&&2<=gt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(L(o[m]))continue;var h=_(o[m]);let A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let R=c[A]||[];c[A]=R,R.push(h)}v(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Pl(o){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yr("baseRetryDelayMs",5e3,o),this.cb=yr("retryDelaySeedMs",1e4,o),this.Wa=yr("forwardChannelMaxRetries",2,o),this.wa=yr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ul(o&&o.concurrentRequestLimit),this.Da=new Lp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pl.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,m){qe(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Ml(this,null,this.W),Pi(this)};function Po(o){if(Cl(o),o.G==3){var c=o.U++,h=mt(o.I);if(de(h,"SID",o.K),de(h,"RID",c),de(h,"TYPE","terminate"),vr(o,h),c=new Pt(o,o.j,c),c.L=2,c.v=Ai(mt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Fl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ii(c)}Ll(o)}function Ri(o){o.g&&(Do(o),o.g.cancel(),o.g=null)}function Cl(o){Ri(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Pi(o){if(!ll(o.h)&&!o.s){o.s=!0;var c=o.Ga;ye||We(),De||(ye(),De=!0),Ge.add(c,o),o.B=0}}function qp(o,c){return hl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ur(T(o.Ga,o,c),Vl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let A=new Pt(this,this.j,o),R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=kl(this,A,c),h=mt(this.I),de(h,"RID",o),de(h,"CVER",22),this.D&&de(h,"X-HTTP-Session-Id",this.D),vr(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(El(R)))+"&"+c:this.m&&Ro(h,this.m,R)),So(this.h,A),this.Ua&&de(h,"TYPE","init"),this.P?(de(h,"$req",c),de(h,"SID","null"),A.T=!0,Eo(A,h,null)):Eo(A,h,c),this.G=2}}else this.G==3&&(o?Dl(this,o):this.i.length==0||ll(this.h)||Dl(this))};function Dl(o,c){var h;c?h=c.l:h=o.U++;let m=mt(o.I);de(m,"SID",o.K),de(m,"RID",h),de(m,"AID",o.T),vr(o,m),o.m&&o.o&&Ro(m,o.m,o.o),h=new Pt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=kl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),So(o.h,h),Eo(h,m,c)}function vr(o,c){o.H&&S(o.H,function(h,m){de(c,m,h)}),o.l&&pl({},function(h,m){de(c,m,h)})}function kl(o,c,h){h=Math.min(o.i.length,h);var m=o.l?T(o.l.Na,o.l,o):null;e:{var A=o.i;let R=-1;for(;;){let j=["count="+h];R==-1?0<h?(R=A[0].g,j.push("ofs="+R)):R=0:j.push("ofs="+R);let he=!0;for(let Pe=0;Pe<h;Pe++){let ae=A[Pe].g,Ne=A[Pe].map;if(ae-=R,0>ae)R=Math.max(0,A[Pe].g-100),he=!1;else try{Mp(Ne,j,"req"+ae+"_")}catch{m&&m(Ne)}}if(he){m=j.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,m}function Nl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;ye||We(),De||(ye(),De=!0),Ge.add(c,o),o.v=0}}function Co(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ur(T(o.Fa,o),Vl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,xl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ur(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),Ri(this),xl(this))};function Do(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function xl(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=mt(o.qa);de(c,"RID","rpc"),de(c,"SID",o.K),de(c,"AID",o.T),de(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&de(c,"TO",o.ja),de(c,"TYPE","xmlhttp"),vr(o,c),o.m&&o.o&&Ro(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ai(mt(c)),h.m=null,h.P=!0,ol(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Ri(this),Co(this),qe(19))};function Ci(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ol(o,c){var h=null;if(o.g==c){Ci(o),Do(o),o.g=null;var m=2}else if(bo(o.h,c))h=c.D,dl(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;m=yi(),Be(m,new nl(m,h)),Pi(o)}else Nl(o);else if(A=c.s,A==3||A==0&&0<c.X||!(m==1&&qp(o,c)||m==2&&Co(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Yt(o,5);break;case 4:Yt(o,10);break;case 3:Yt(o,6);break;default:Yt(o,2)}}}function Vl(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Yt(o,c){if(o.j.info("Error code "+c),c==2){var h=T(o.fb,o),m=o.Xa;let A=!m;m=new Jt(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ei(m,"https"),Ai(m),A?Op(m.toString(),h):Vp(m.toString(),h)}else qe(2);o.G=0,o.l&&o.l.sa(c),Ll(o),Cl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Ll(o){if(o.G=0,o.ka=[],o.l){let c=fl(o.h);(c.length!=0||o.i.length!=0)&&(B(o.ka,c),B(o.ka,o.i),o.h.i.length=0,G(o.i),o.i.length=0),o.l.ra()}}function Ml(o,c,h){var m=h instanceof Jt?mt(h):new Jt(h);if(m.g!="")c&&(m.g=c+"."+m.g),Ti(m,m.s);else{var A=u.location;m=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var R=new Jt(null);m&&Ei(R,m),c&&(R.g=c),A&&Ti(R,A),h&&(R.l=h),m=R}return h=o.D,c=o.ya,h&&c&&de(m,h,c),de(m,"VER",o.la),vr(o,m),m}function Fl(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ve(new mr({eb:h})):new ve(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ul(){}n=Ul.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Di(){}Di.prototype.g=function(o,c){return new ze(o,c)};function ze(o,c){ke.call(this),this.g=new Pl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!L(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Sn(this)}V(ze,ke),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){Po(this.g)},ze.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=go(o),o=h);c.i.push(new Ap(c.Ya++,o)),c.G==3&&Pi(c)},ze.prototype.N=function(){this.g.l=null,delete this.j,Po(this.g),delete this.g,ze.aa.N.call(this)};function Bl(o){yo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(let h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}V(Bl,yo);function ql(){vo.call(this),this.status=1}V(ql,vo);function Sn(o){this.g=o}V(Sn,Ul),Sn.prototype.ua=function(){Be(this.g,"a")},Sn.prototype.ta=function(o){Be(this.g,new Bl(o))},Sn.prototype.sa=function(o){Be(this.g,new ql)},Sn.prototype.ra=function(){Be(this.g,"b")},Di.prototype.createWebChannel=Di.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,oa=vt.createWebChannelTransport=function(){return new Di},sa=vt.getStatEventTarget=function(){return yi()},ia=vt.Event=Ht,Ui=vt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vi.NO_ERROR=0,vi.TIMEOUT=8,vi.HTTP_ERROR=6,Tr=vt.ErrorCode=vi,rl.COMPLETE="complete",ra=vt.EventType=rl,Xu.EventType=ar,ar.OPEN="a",ar.CLOSE="b",ar.ERROR="c",ar.MESSAGE="d",ke.prototype.listen=ke.prototype.K,kn=vt.WebChannel=Xu,ug=vt.FetchXmlHttpFactory=mr,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,na=vt.XhrIo=ve}).apply(typeof Fi<"u"?Fi:typeof self<"u"?self:typeof window<"u"?window:{});var vh="@firebase/firestore";var Se=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");var Jn="10.14.0";var sn=new kt("@firebase/firestore");function Ar(){return sn.logLevel}function K(n,...e){if(sn.logLevel<=re.DEBUG){let t=e.map(Gc);sn.debug(`Firestore (${Jn}): ${n}`,...t)}}function wt(n,...e){if(sn.logLevel<=re.ERROR){let t=e.map(Gc);sn.error(`Firestore (${Jn}): ${n}`,...t)}}function Fn(n,...e){if(sn.logLevel<=re.WARN){let t=e.map(Gc);sn.warn(`Firestore (${Jn}): ${n}`,...t)}}function Gc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function Z(n="Unexpected state"){let e=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+n;throw wt(e),new Error(e)}function le(n,e){n||Z()}function te(n,e){return n}var N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},$=class extends $e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Ze=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var zi=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},ha=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}},da=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},fa=class{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ze,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?u(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ze)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new zi(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Se(e)}},pa=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},ma=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new pa(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}},ga=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},_a=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){le(this.o===void 0);let r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string"),this.R=t.token,new ga(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function lg(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var $i=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=lg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function ce(n,e){return n<e?-1:n>e?1:0}function Un(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var Ce=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var ne=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new Ce(0,0))}static max(){return new n(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ki=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(),r===void 0?r=e.length-t:r>e.length-t&&Z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},ge=class n extends Ki{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},hg=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Ke=class n extends Ki{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return hg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var J=class n{constructor(e){this.path=e}static fromPath(e){return new n(ge.fromString(e))}static fromName(e){return new n(ge.fromString(e).popFirst(5))}static empty(){return new n(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ge(e.slice()))}};var ya=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};ya.UNKNOWN_ID=-1;function dg(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new on(i,J.empty(),e)}function fg(n){return new on(n.readTime,n.key,-1)}var on=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(ne.min(),J.empty(),-1)}static max(){return new n(ne.max(),J.empty(),-1)}};function pg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}var mg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",va=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Hr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==mg)throw n;K("LocalStore","Unexpectedly lost primary lease")}var q=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),u=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(g=>{a[d]=g,++u,u===s&&r(a)},g=>i(g))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function gg(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qr(n){return n.name==="IndexedDbTransactionError"}var Dr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Dr.oe=-1;function Is(n){return n==null}function kr(n){return n===0&&1/n==-1/0}function _g(n){return typeof n=="number"&&Number.isInteger(n)&&!kr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var yg=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qw=[...yg,"documentOverlays"],vg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wg=vg,Ig=[...wg,"indexConfiguration","indexState","indexEntries"];var jw=[...Ig,"globals"];function wh(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var we=class n{constructor(e,t){this.comparator=e,this.root=t||ct.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vn(this.root,e,this.comparator,!0)}},Vn=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ct=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();let e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}};ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ve=class n{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wi(this.data.getIterator())}getIteratorFrom(e){return new Wi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Wi=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var at=class n{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new n([])}unionWith(e){let t=new Ve(Ke.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Un(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Hi=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Le=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Hi("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Le.EMPTY_BYTE_STRING=new Le("");var Eg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(n){if(le(!!n),typeof n=="string"){let e=0,t=Eg.exec(n);if(le(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mt(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}function zc(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $c(n){let e=n.mapValue.fields.__previous_value__;return zc(e)?$c(e):e}function Nr(n){let e=It(n.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}var wa=class{constructor(e,t,r,i,s,a,u,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}},Qi=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Bi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zc(n)?4:td(n)?9007199254740991:ed(n)?10:11:Z()}function dt(n,e){if(n===e)return!0;let t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nr(n).isEqual(Nr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=It(i.timestampValue),u=It(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Mt(i.bytesValue).isEqual(Mt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return fe(i.geoPointValue.latitude)===fe(s.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return fe(i.integerValue)===fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=fe(i.doubleValue),u=fe(s.doubleValue);return a===u?kr(a)===kr(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Un(n.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(wh(a)!==wh(u))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!dt(a[l],u[l])))return!1;return!0}(n,e);default:return Z()}}function xr(n,e){return(n.values||[]).find(t=>dt(t,e))!==void 0}function Bn(n,e){if(n===e)return 0;let t=an(n),r=an(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(s,a){let u=fe(s.integerValue||s.doubleValue),l=fe(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return Ih(n.timestampValue,e.timestampValue);case 4:return Ih(Nr(n),Nr(e));case 5:return ce(n.stringValue,e.stringValue);case 6:return function(s,a){let u=Mt(s),l=Mt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){let g=ce(u[d],l[d]);if(g!==0)return g}return ce(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let u=ce(fe(s.latitude),fe(a.latitude));return u!==0?u:ce(fe(s.longitude),fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Eh(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,d,g;let E=s.fields||{},T=a.fields||{},b=(u=E.value)===null||u===void 0?void 0:u.arrayValue,V=(l=T.value)===null||l===void 0?void 0:l.arrayValue,G=ce(((d=b?.values)===null||d===void 0?void 0:d.length)||0,((g=V?.values)===null||g===void 0?void 0:g.length)||0);return G!==0?G:Eh(b,V)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Bi.mapValue&&a===Bi.mapValue)return 0;if(s===Bi.mapValue)return 1;if(a===Bi.mapValue)return-1;let u=s.fields||{},l=Object.keys(u),d=a.fields||{},g=Object.keys(d);l.sort(),g.sort();for(let E=0;E<l.length&&E<g.length;++E){let T=ce(l[E],g[E]);if(T!==0)return T;let b=Bn(u[l[E]],d[g[E]]);if(b!==0)return b}return ce(l.length,g.length)}(n.mapValue,e.mapValue);default:throw Z()}}function Ih(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);let t=It(n),r=It(e),i=ce(t.seconds,r.seconds);return i!==0?i:ce(t.nanos,r.nanos)}function Eh(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=Bn(t[i],r[i]);if(s)return s}return ce(t.length,r.length)}function qn(n){return Ia(n)}function Ia(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=It(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Mt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return J.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=Ia(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${Ia(t.fields[a])}`;return i+"}"}(n.mapValue):Z()}function Th(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ea(n){return!!n&&"integerValue"in n}function Kc(n){return!!n&&"arrayValue"in n}function Ah(n){return!!n&&"nullValue"in n}function bh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ji(n){return!!n&&"mapValue"in n}function ed(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Sr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Yn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sr(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function td(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Xe=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ji(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(t)}setAll(e){let t=Ke.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Sr(a):i.push(u.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());ji(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ji(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Yn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Sr(this.value))}};function nd(n){let e=[];return Yn(n.fields,(t,r)=>{let i=new Ke([t]);if(ji(r)){let s=nd(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new at(e)}var et=class n{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,ne.min(),ne.min(),ne.min(),Xe.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,ne.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,ne.min(),ne.min(),Xe.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,ne.min(),ne.min(),Xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var jn=class{constructor(e,t){this.position=e,this.inclusive=t}};function Sh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),t.key):r=Bn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dt(n.position[t],e.position[t]))return!1;return!0}var Gn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function Tg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Ji=class{},Te=class n extends Ji{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Aa(e,t,r):t==="array-contains"?new Ra(e,r):t==="in"?new Pa(e,r):t==="not-in"?new Ca(e,r):t==="array-contains-any"?new Da(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ba(e,r):new Sa(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Bn(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(Bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},tt=class n extends Ji{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return rd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function rd(n){return n.op==="and"}function id(n){return Ag(n)&&rd(n)}function Ag(n){for(let e of n.filters)if(e instanceof tt)return!1;return!0}function Ta(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+qn(n.value);if(id(n))return n.filters.map(e=>Ta(e)).join(",");{let e=n.filters.map(t=>Ta(t)).join(",");return`${n.op}(${e})`}}function sd(n,e){return n instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&dt(r.value,i.value)}(n,e):n instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&sd(a,i.filters[u]),!0):!1}(n,e):void Z()}function od(n){return n instanceof Te?function(t){return`${t.field.canonicalString()} ${t.op} ${qn(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(od).join(" ,")+"}"}(n):"Filter"}var Aa=class extends Te{constructor(e,t,r){super(e,t,r),this.key=J.fromName(r.referenceValue)}matches(e){let t=J.comparator(e.key,this.key);return this.matchesComparison(t)}},ba=class extends Te{constructor(e,t){super(e,"in",t),this.keys=ad("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Sa=class extends Te{constructor(e,t){super(e,"not-in",t),this.keys=ad("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function ad(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>J.fromName(r.referenceValue))}var Ra=class extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Kc(t)&&xr(t.arrayValue,this.value)}},Pa=class extends Te{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&xr(this.value.arrayValue,t)}},Ca=class extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!xr(this.value.arrayValue,t)}},Da=class extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Kc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>xr(this.value.arrayValue,r))}};var ka=class{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}};function Ph(n,e=null,t=[],r=[],i=null,s=null,a=null){return new ka(n,e,t,r,i,s,a)}function Wc(n){let e=te(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ta(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Is(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>qn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>qn(r)).join(",")),e.ue=t}return e.ue}function Hc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Tg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rh(n.startAt,e.startAt)&&Rh(n.endAt,e.endAt)}function Na(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var cn=class{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function bg(n,e,t,r,i,s,a,u){return new cn(n,e,t,r,i,s,a,u)}function Es(n){return new cn(n)}function Ch(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cd(n){return n.collectionGroup!==null}function Rr(n){let e=te(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ve(Ke.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gn(s,r))}),t.has(Ke.keyField().canonicalString())||e.ce.push(new Gn(Ke.keyField(),r))}return e.ce}function ut(n){let e=te(n);return e.le||(e.le=Sg(e,Rr(n))),e.le}function Sg(n,e){if(n.limitType==="F")return Ph(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Gn(i.field,s)});let t=n.endAt?new jn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new jn(n.startAt.position,n.startAt.inclusive):null;return Ph(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xa(n,e){let t=n.filters.concat([e]);return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Oa(n,e,t){return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ts(n,e){return Hc(ut(n),ut(e))&&n.limitType===e.limitType}function ud(n){return`${Wc(ut(n))}|lt:${n.limitType}`}function Nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>od(i)).join(", ")}]`),Is(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>qn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>qn(i)).join(",")),`Target(${r})`}(ut(n))}; limitType=${n.limitType})`}function As(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Rr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){let d=Sh(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,Rr(r),i)||r.endAt&&!function(a,u,l){let d=Sh(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,Rr(r),i))}(n,e)}function Rg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ld(n){return(e,t)=>{let r=!1;for(let i of Rr(n)){let s=Pg(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Pg(n,e,t){let r=n.field.isKeyField()?J.comparator(e.key,t.key):function(s,a,u){let l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?Bn(l,d):Z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}var Ft=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Zh(this.inner)}size(){return this.innerSize}};var Cg=new we(J.comparator);function Et(){return Cg}var hd=new we(J.comparator);function br(...n){let e=hd;for(let t of n)e=e.insert(t.key,t);return e}function dd(n){let e=hd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function en(){return Pr()}function fd(){return Pr()}function Pr(){return new Ft(n=>n.toString(),(n,e)=>n.isEqual(e))}var Dg=new we(J.comparator),kg=new Ve(J.comparator);function ie(...n){let e=kg;for(let t of n)e=e.add(t);return e}var Ng=new Ve(ce);function xg(){return Ng}function Qc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kr(e)?"-0":e}}function pd(n){return{integerValue:""+n}}function Og(n,e){return _g(e)?pd(e):Qc(n,e)}var zn=class{constructor(){this._=void 0}};function Vg(n,e,t){return n instanceof un?function(i,s){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zc(s)&&(s=$c(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof ln?gd(n,e):n instanceof hn?_d(n,e):function(i,s){let a=md(i,s),u=Dh(a)+Dh(i.Pe);return Ea(a)&&Ea(i.Pe)?pd(u):Qc(i.serializer,u)}(n,e)}function Lg(n,e,t){return n instanceof ln?gd(n,e):n instanceof hn?_d(n,e):t}function md(n,e){return n instanceof $n?function(r){return Ea(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var un=class extends zn{},ln=class extends zn{constructor(e){super(),this.elements=e}};function gd(n,e){let t=yd(e);for(let r of n.elements)t.some(i=>dt(i,r))||t.push(r);return{arrayValue:{values:t}}}var hn=class extends zn{constructor(e){super(),this.elements=e}};function _d(n,e){let t=yd(e);for(let r of n.elements)t=t.filter(i=>!dt(i,r));return{arrayValue:{values:t}}}var $n=class extends zn{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function Dh(n){return fe(n.integerValue||n.doubleValue)}function yd(n){return Kc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Va=class{constructor(e,t){this.field=e,this.transform=t}};function Mg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ln&&i instanceof ln||r instanceof hn&&i instanceof hn?Un(r.elements,i.elements,dt):r instanceof $n&&i instanceof $n?dt(r.Pe,i.Pe):r instanceof un&&i instanceof un}(n.transform,e.transform)}var La=class{constructor(e,t){this.version=e,this.transformResults=t}},rn=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Gi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Kn=class{};function vd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yi(n.key,rn.none()):new dn(n.key,n.data,rn.none());{let t=n.data,r=Xe.empty(),i=new Ve(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Tt(n.key,r,new at(i.toArray()),rn.none())}}function Fg(n,e,t){n instanceof dn?function(i,s,a){let u=i.value.clone(),l=Nh(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Tt?function(i,s,a){if(!Gi(i.precondition,s))return void s.convertToUnknownDocument(a.version);let u=Nh(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(wd(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Cr(n,e,t,r){return n instanceof dn?function(s,a,u,l){if(!Gi(s.precondition,a))return u;let d=s.value.clone(),g=xh(s.fieldTransforms,l,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Tt?function(s,a,u,l){if(!Gi(s.precondition,a))return u;let d=xh(s.fieldTransforms,l,a),g=a.data;return g.setAll(wd(s)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(s,a,u){return Gi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Ug(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=md(r.transform,i||null);s!=null&&(t===null&&(t=Xe.empty()),t.set(r.field,s))}return t||null}function kh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Un(r,i,(s,a)=>Mg(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var dn=class extends Kn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Tt=class extends Kn{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function wd(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Nh(n,e,t){let r=new Map;le(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,Lg(a,u,t[i]))}return r}function xh(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,Vg(s,a,e))}return r}var Yi=class extends Kn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Ma=class extends Kn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Fa=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&Fg(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=fd();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;let l=vd(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ie())}isEqual(e){return this.batchId===e.batchId&&Un(this.mutations,e.mutations,(t,r)=>kh(t,r))&&Un(this.baseMutations,e.baseMutations,(t,r)=>kh(t,r))}},Ua=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){le(e.mutations.length===r.length);let i=function(){return Dg}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var Ba=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var qa=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Ie,se;function Bg(n){switch(n){default:return Z();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Id(n){if(n===void 0)return wt("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ie.OK:return N.OK;case Ie.CANCELLED:return N.CANCELLED;case Ie.UNKNOWN:return N.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return N.INTERNAL;case Ie.UNAVAILABLE:return N.UNAVAILABLE;case Ie.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ie.NOT_FOUND:return N.NOT_FOUND;case Ie.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ie.ABORTED:return N.ABORTED;case Ie.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ie.DATA_LOSS:return N.DATA_LOSS;default:return Z()}}(se=Ie||(Ie={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";var Oh=null;function qg(){return new TextEncoder}var jg=new Vt([4294967295,4294967295],0);function Vh(n){let e=qg().encode(n),t=new ta;return t.update(e),new Uint8Array(t.digest())}function Lh(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vt([t,r],0),new Vt([i,s],0)]}var ja=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new tn(`Invalid padding: ${t}`);if(r<0)throw new tn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new tn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new tn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Vt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Vt.fromNumber(r)));return i.compare(jg)===1&&(i=new Vt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=Vh(e),[r,i]=Lh(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;let t=Vh(e),[r,i]=Lh(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},tn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Xi=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Or.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(ne.min(),i,new we(ce),Et(),ie())}},Or=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,ie(),ie(),ie())}};var Ln=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},Zi=class{constructor(e,t){this.targetId=e,this.me=t}},es=class{constructor(e,t,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},ts=class{constructor(){this.fe=0,this.ge=Fh(),this.pe=Le.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),t=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Or(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Fh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Ga=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=Et(),this.qe=Mh(),this.Qe=new we(ce)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let s=i.target;if(Na(s))if(r===0){let a=new J(s.path);this.Ue(t,a,et.newNoDocument(a,ne.min()))}else le(r===1);else{let a=this.Ye(t);if(a!==r){let u=this.Ze(e),l=u?this.Xe(u,e,a):1;if(l!==0){this.je(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}Oh?.et(function(g,E,T,b,V){var G,B,ee,L,F,k;let U={localCacheCount:g,existenceFilterCount:E.count,databaseId:T.database,projectId:T.projectId},S=E.unchangedNames;return S&&(U.bloomFilter={applied:V===0,hashCount:(G=S?.hashCount)!==null&&G!==void 0?G:0,bitmapLength:(L=(ee=(B=S?.bits)===null||B===void 0?void 0:B.bitmap)===null||ee===void 0?void 0:ee.length)!==null&&L!==void 0?L:0,padding:(k=(F=S?.bits)===null||F===void 0?void 0:F.padding)!==null&&k!==void 0?k:0,mightContain:v=>{var p;return(p=b?.mightContain(v))!==null&&p!==void 0&&p}}),U}(a,e.me,this.Le.tt(),u,l))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,u;try{a=Mt(r).toUint8Array()}catch(l){if(l instanceof Hi)return Fn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ja(a,i,s)}catch(l){return Fn(l instanceof tn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,s,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((s,a)=>{let u=this.Je(a);if(u){if(s.current&&Na(u.target)){let l=new J(u.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,et.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{let d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));let i=new Xi(e,t,this.Qe,this.ke,r);return this.ke=Et(),this.qe=Mh(),this.Qe=new we(ce),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ts,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ve(ce),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ts),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function Mh(){return new we(J.comparator)}function Fh(){return new we(J.comparator)}var Gg={asc:"ASCENDING",desc:"DESCENDING"},zg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$g={and:"AND",or:"OR"},za=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function $a(n,e){return n.useProto3Json||Is(e)?e:{value:e}}function ns(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ed(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Kg(n,e){return ns(n,e.toTimestamp())}function lt(n){return le(!!n),ne.fromTimestamp(function(t){let r=It(t);return new Ce(r.seconds,r.nanos)}(n))}function Jc(n,e){return Ka(n,e).canonicalString()}function Ka(n,e){let t=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Td(n){let e=ge.fromString(n);return le(Pd(e)),e}function Wa(n,e){return Jc(n.databaseId,e.path)}function aa(n,e){let t=Td(e);if(t.get(1)!==n.databaseId.projectId)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(bd(t))}function Ad(n,e){return Jc(n.databaseId,e)}function Wg(n){let e=Td(n);return e.length===4?ge.emptyPath():bd(e)}function Ha(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bd(n){return le(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Uh(n,e,t){return{name:Wa(n,e),fields:t.value.mapValue.fields}}function Hg(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,g){return d.useProto3Json?(le(g===void 0||typeof g=="string"),Le.fromBase64String(g||"")):(le(g===void 0||g instanceof Buffer||g instanceof Uint8Array),Le.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let g=d.code===void 0?N.UNKNOWN:Id(d.code);return new $(g,d.message||"")}(a);t=new es(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=aa(n,r.document.name),s=lt(r.document.updateTime),a=r.document.createTime?lt(r.document.createTime):ne.min(),u=new Xe({mapValue:{fields:r.document.fields}}),l=et.newFoundDocument(i,s,a,u),d=r.targetIds||[],g=r.removedTargetIds||[];t=new Ln(d,g,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=aa(n,r.document),s=r.readTime?lt(r.readTime):ne.min(),a=et.newNoDocument(i,s),u=r.removedTargetIds||[];t=new Ln([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=aa(n,r.document),s=r.removedTargetIds||[];t=new Ln([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new qa(i,s),u=r.targetId;t=new Zi(u,a)}}return t}function Qg(n,e){let t;if(e instanceof dn)t={update:Uh(n,e.key,e.value)};else if(e instanceof Yi)t={delete:Wa(n,e.key)};else if(e instanceof Tt)t={update:Uh(n,e.key,e.data),updateMask:i_(e.fieldMask)};else{if(!(e instanceof Ma))return Z();t={verify:Wa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let u=a.transform;if(u instanceof un)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ln)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof hn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof $n)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw Z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Kg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(n,e.precondition)),t}function Jg(n,e){return n&&n.length>0?(le(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?lt(i.updateTime):lt(s);return a.isEqual(ne.min())&&(a=lt(s)),new La(a,i.transformResults||[])}(t,e))):[]}function Yg(n,e){return{documents:[Ad(n,e.path)]}}function Xg(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ad(n,i);let s=function(d){if(d.length!==0)return Rd(tt.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(g=>function(T){return{field:xn(T.field),direction:t_(T.dir)}}(g))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=$a(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Zg(n){let e=Wg(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){le(r===1);let g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let s=[];t.where&&(s=function(E){let T=Sd(E);return T instanceof tt&&id(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(E){return E.map(T=>function(V){return new Gn(On(V.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(t.orderBy));let u=null;t.limit&&(u=function(E){let T;return T=typeof E=="object"?E.value:E,Is(T)?null:T}(t.limit));let l=null;t.startAt&&(l=function(E){let T=!!E.before,b=E.values||[];return new jn(b,T)}(t.startAt));let d=null;return t.endAt&&(d=function(E){let T=!E.before,b=E.values||[];return new jn(b,T)}(t.endAt)),bg(e,i,a,s,u,"F",l,d)}function e_(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=On(t.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=On(t.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=On(t.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=On(t.unaryFilter.field);return Te.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(n):n.fieldFilter!==void 0?function(t){return Te.create(On(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>Sd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(t.compositeFilter.op))}(n):Z()}function t_(n){return Gg[n]}function n_(n){return zg[n]}function r_(n){return $g[n]}function xn(n){return{fieldPath:n.canonicalString()}}function On(n){return Ke.fromServerFormat(n.fieldPath)}function Rd(n){return n instanceof Te?function(t){if(t.op==="=="){if(bh(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NAN"}};if(Ah(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bh(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NAN"}};if(Ah(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xn(t.field),op:n_(t.op),value:t.value}}}(n):n instanceof tt?function(t){let r=t.getFilters().map(i=>Rd(i));return r.length===1?r[0]:{compositeFilter:{op:r_(t.op),filters:r}}}(n):Z()}function i_(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Pd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Vr=class n{constructor(e,t,r,i,s=ne.min(),a=ne.min(),u=Le.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Qa=class{constructor(e){this.ct=e}};function s_(n){let e=Zg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Oa(e,e.limit,"L"):e}var rs=class{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(fe(e.integerValue));else if("doubleValue"in e){let r=fe(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),kr(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=It(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Mt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?td(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ed(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Z()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let r=e.fields||{};this.dt(t,55);for(let i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;let s=e.fields||{};this.dt(t,53);let a="value",u=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(fe(u)),this.Vt(a,t),this.Tt(s[a],t)}bt(e,t){let r=e.values||[];this.dt(t,50);for(let i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),J.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}};rs.vt=new rs;var Ja=class{constructor(){this.un=new Ya}addToCollectionParentIndex(e,t){return this.un.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(on.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(on.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}},Ya=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ve(ge.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(ge.comparator)).toArray()}};var zw=new Uint8Array(0);var ot=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(41943040,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);var Lr=class n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new n(0)}static kn(){return new n(-1)}};var Xa=class{constructor(){this.changes=new Ft(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Za=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var ec=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Cr(r.mutation,i,at.empty(),Ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ie()){let i=en();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=br();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=en();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ie()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=Et(),a=Pr(),u=function(){return Pr()}();return t.forEach((l,d)=>{let g=r.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof Tt)?s=s.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Cr(g.mutation,d,g.mutation.getFieldMask(),Ce.now())):a.set(d.key,at.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,g)=>a.set(d,g)),t.forEach((d,g)=>{var E;return u.set(d,new Za(g,(E=a.get(d))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(e,t){let r=Pr(),i=new we((a,u)=>a-u),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let g=r.get(l)||at.empty();g=u.applyToLocalView(d,g),r.set(l,g);let E=(i.get(u.batchId)||ie()).add(l);i=i.insert(u.batchId,E)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let l=u.getNext(),d=l.key,g=l.value,E=fd();g.forEach(T=>{if(!s.has(T)){let b=vd(t.get(T),r.get(T));b!==null&&E.set(T,b),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,E))}return q.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):q.resolve(en()),u=-1,l=s;return a.next(d=>q.forEach(d,(g,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),s.get(g)?q.resolve():this.remoteDocumentCache.getEntry(e,g).next(T=>{l=l.insert(g,T)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,ie())).next(g=>({batchId:u,changes:dd(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next(r=>{let i=br();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=br();return this.indexManager.getCollectionParents(e,s).next(u=>q.forEach(u,l=>{let d=function(E,T){return new cn(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(g=>{g.forEach((E,T)=>{a=a.insert(E,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let g=d.getKey();a.get(g)===null&&(a=a.insert(g,et.newInvalidDocument(g)))});let u=br();return a.forEach((l,d)=>{let g=s.get(l);g!==void 0&&Cr(g.mutation,d,at.empty(),Ce.now()),As(t,d)&&(u=u.insert(l,d))}),u})}};var tc=class{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return q.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:lt(i.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:s_(i.bundledQuery),readTime:lt(i.readTime)}}(t)),q.resolve()}};var nc=class{constructor(){this.overlays=new we(J.comparator),this.Ir=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){let r=en();return q.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),q.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){let i=en(),s=t.length+1,a=new J(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return q.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new we((d,g)=>d-g),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let g=s.get(d.largestBatchId);g===null&&(g=en(),s=s.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}let u=en(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,g)=>u.set(d,g)),!(u.size()>=i)););return q.resolve(u)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ba(t,r));let s=this.Ir.get(t);s===void 0&&(s=ie(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}};var rc=class{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}};var Mr=class{constructor(){this.Tr=new Ve(Ee.Er),this.dr=new Ve(Ee.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let r=new Ee(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ee(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){let t=new J(new ge([])),r=new Ee(t,e),i=new Ee(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new J(new ge([])),r=new Ee(t,e),i=new Ee(t,e+1),s=ie();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new Ee(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},Ee=class{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return J.comparator(e.key,t.key)||ce(e.wr,t.wr)}static Ar(e,t){return ce(e.wr,t.wr)||J.comparator(e.key,t.key)}};var ic=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ve(Ee.Er)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Fa(s,t,r,i);this.mutationQueue.push(a);for(let u of i)this.br=this.br.add(new Ee(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return q.resolve(a)}lookupMutationBatch(e,t){return q.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.vr(r),s=i<0?0:i;return q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new Ee(t,0),i=new Ee(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{let u=this.Dr(a.wr);s.push(u)}),q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(ce);return t.forEach(i=>{let s=new Ee(i,0),a=new Ee(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],u=>{r=r.add(u.wr)})}),q.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;J.isDocumentKey(s)||(s=s.child(""));let a=new Ee(new J(s),0),u=new Ve(ce);return this.br.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.wr)),!0)},a),q.resolve(this.Cr(u))}Cr(e){let t=[];return e.forEach(r=>{let i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){le(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return q.forEach(t.mutations,i=>{let s=new Ee(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){let r=new Ee(t,0),i=this.br.firstAfterOrEqual(r);return q.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var sc=class{constructor(e){this.Mr=e,this.docs=function(){return new we(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():et.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Et(),a=t.path,u=new J(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){let{key:d,value:{document:g}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||pg(fg(g),r)<=0||(i.has(g.key)||As(t,g))&&(s=s.insert(g.key,g.mutableCopy()))}return q.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Z()}Or(e,t){return q.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new oc(this)}getSize(e){return q.resolve(this.size)}},oc=class extends Xa{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),q.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}};var ac=class{constructor(e){this.persistence=e,this.Nr=new Ft(t=>Wc(t),Hc),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Mr,this.targetCount=0,this.kr=Lr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),q.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new Lr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Kn(t),q.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),q.waitFor(s).next(()=>i)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){let r=this.Nr.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),q.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),q.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.yr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this.Br.containsKey(t))}};var cc=class{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Dr(0),this.Kr=!1,this.Kr=!0,this.$r=new rc,this.referenceDelegate=e(this),this.Ur=new ac(this),this.indexManager=new Ja,this.remoteDocumentCache=function(i){return new sc(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Qa(t),this.Gr=new tc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new ic(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);let i=new uc(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return q.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}},uc=class extends va{constructor(e){super(),this.currentSequenceNumber=e}},lc=class n{constructor(e){this.persistence=e,this.Jr=new Mr,this.Yr=null}static Zr(e){return new n(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),q.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Xr,r=>{let i=J.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,ne.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return q.or([()=>q.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}};var hc=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ie(),i=ie();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var dc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var fc=class{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Zl()?8:gg(Ae())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new dc;return this.Xi(e,t,a).next(u=>{if(s.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Ar()<=re.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),q.resolve()):(Ar()<=re.DEBUG&&K("QueryEngine","Query:",Nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ar()<=re.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):q.resolve())}Yi(e,t){if(Ch(t))return q.resolve(null);let r=ut(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Oa(t,null,"F"),r=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=ie(...s);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.ts(t,u);return this.ns(t,d,a,l.readTime)?this.Yi(e,Oa(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,i){return Ch(t)||i.isEqual(ne.min())?q.resolve(null):this.Ji.getDocuments(e,r).next(s=>{let a=this.ts(t,s);return this.ns(t,a,r,i)?q.resolve(null):(Ar()<=re.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nn(t)),this.rs(e,a,t,dg(i,-1)).next(u=>u))})}ts(e,t){let r=new Ve(ld(e));return t.forEach((i,s)=>{As(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Ar()<=re.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Nn(t)),this.Ji.getDocumentsMatchingQuery(e,t,on.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var pc=class{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new we(ce),this._s=new Ft(s=>Wc(s),Hc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ec(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}};function o_(n,e,t,r){return new pc(n,e,t,r)}async function Cd(n,e){let t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],u=[],l=ie();for(let d of i){a.push(d.batchId);for(let g of d.mutations)l=l.add(g.key)}for(let d of s){u.push(d.batchId);for(let g of d.mutations)l=l.add(g.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function a_(n,e){let t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(u,l,d,g){let E=d.batch,T=E.keys(),b=q.resolve();return T.forEach(V=>{b=b.next(()=>g.getEntry(l,V)).next(G=>{let B=d.docVersions.get(V);le(B!==null),G.version.compareTo(B)<0&&(E.applyToRemoteDocument(G,d),G.isValidDocument()&&(G.setReadTime(d.commitVersion),g.addEntry(G)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(l,E))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=ie();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Dd(n){let e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function c_(n,e){let t=te(n),r=e.snapshotVersion,i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;let u=[];e.targetChanges.forEach((g,E)=>{let T=i.get(E);if(!T)return;u.push(t.Ur.removeMatchingKeys(s,g.removedDocuments,E).next(()=>t.Ur.addMatchingKeys(s,g.addedDocuments,E)));let b=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(E)!==null?b=b.withResumeToken(Le.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):g.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(g.resumeToken,r)),i=i.insert(E,b),function(G,B,ee){return G.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=3e8?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(T,b,g)&&u.push(t.Ur.updateTargetData(s,b))});let l=Et(),d=ie();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,g))}),u.push(u_(s,a,e.documentUpdates).next(g=>{l=g.Ps,d=g.Is})),!r.isEqual(ne.min())){let g=t.Ur.getLastRemoteSnapshotVersion(s).next(E=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(g)}return q.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.os=i,s))}function u_(n,e,t){let r=ie(),i=ie();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Et();return t.forEach((u,l)=>{let d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):K("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:i}})}function l_(n,e){let t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function h_(n,e){let t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,q.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Vr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function mc(n,e,t){let r=te(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Qr(a))throw a;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Bh(n,e,t){let r=te(n),i=ne.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,g){let E=te(l),T=E._s.get(g);return T!==void 0?q.resolve(E.os.get(T)):E.Ur.getTargetData(d,g)}(r,a,ut(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:ne.min(),t?s:ie())).next(u=>(d_(r,Rg(e),u),{documents:u,Ts:s})))}function d_(n,e,t){let r=n.us.get(e)||ne.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}var is=class{constructor(){this.activeTargetIds=xg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var gc=class{constructor(){this.so=new is,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new is,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var _c=class{_o(e){}shutdown(){}};var ss=class{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var qi=null;function ca(){return qi===null?qi=function(){return 268435456+Math.round(2147483648*Math.random())}():qi++,"0x"+qi.toString(16)}var f_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var yc=class{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}};var Oe="WebChannelConnection",vc=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){let u=ca(),l=this.xo(t,r.toUriEncodedString());K("RestConnection",`Sending RPC '${t}' ${u}:`,l,i);let d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(t,l,d,i).then(g=>(K("RestConnection",`Received RPC '${t}' ${u}: `,g),g),g=>{throw Fn("RestConnection",`RPC '${t}' ${u} failed with error: `,g,"url: ",l,"request:",i),g})}Lo(t,r,i,s,a,u){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){let i=f_[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){let s=ca();return new Promise((a,u)=>{let l=new na;l.setWithCredentials(!0),l.listenOnce(ra.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Tr.NO_ERROR:let g=l.getResponseJson();K(Oe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(g)),a(g);break;case Tr.TIMEOUT:K(Oe,`RPC '${e}' ${s} timed out`),u(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case Tr.HTTP_ERROR:let E=l.getStatus();if(K(Oe,`RPC '${e}' ${s} failed with status:`,E,"response text:",l.getResponseText()),E>0){let T=l.getResponseJson();Array.isArray(T)&&(T=T[0]);let b=T?.error;if(b&&b.status&&b.message){let V=function(B){let ee=B.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(ee)>=0?ee:N.UNKNOWN}(b.status);u(new $(V,b.message))}else u(new $(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new $(N.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{K(Oe,`RPC '${e}' ${s} completed.`)}});let d=JSON.stringify(i);K(Oe,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}Bo(e,t,r){let i=ca(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=oa(),u=sa(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let g=s.join("");K(Oe,`Creating RPC '${e}' stream ${i}: ${g}`,l);let E=a.createWebChannel(g,l),T=!1,b=!1,V=new yc({Io:B=>{b?K(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,B):(T||(K(Oe,`Opening RPC '${e}' stream ${i} transport.`),E.open(),T=!0),K(Oe,`RPC '${e}' stream ${i} sending:`,B),E.send(B))},To:()=>E.close()}),G=(B,ee,L)=>{B.listen(ee,F=>{try{L(F)}catch(k){setTimeout(()=>{throw k},0)}})};return G(E,kn.EventType.OPEN,()=>{b||(K(Oe,`RPC '${e}' stream ${i} transport opened.`),V.yo())}),G(E,kn.EventType.CLOSE,()=>{b||(b=!0,K(Oe,`RPC '${e}' stream ${i} transport closed`),V.So())}),G(E,kn.EventType.ERROR,B=>{b||(b=!0,Fn(Oe,`RPC '${e}' stream ${i} transport errored:`,B),V.So(new $(N.UNAVAILABLE,"The operation could not be completed")))}),G(E,kn.EventType.MESSAGE,B=>{var ee;if(!b){let L=B.data[0];le(!!L);let F=L,k=F.error||((ee=F[0])===null||ee===void 0?void 0:ee.error);if(k){K(Oe,`RPC '${e}' stream ${i} received error:`,k);let U=k.status,S=function(f){let y=Ie[f];if(y!==void 0)return Id(y)}(U),v=k.message;S===void 0&&(S=N.INTERNAL,v="Unknown error status: "+U+" with message "+k.message),b=!0,V.So(new $(S,v)),E.close()}else K(Oe,`RPC '${e}' stream ${i} received:`,L),V.bo(L)}}),G(u,ia.STAT_EVENT,B=>{B.stat===Ui.PROXY?K(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):B.stat===Ui.NOPROXY&&K(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}};function ua(){return typeof document<"u"?document:null}function bs(n){return new za(n,!0)}var os=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}};var as=class{constructor(e,t,r,i,s,a,u,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new os(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{let i=new $(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){let r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},wc=class extends as{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=Hg(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?lt(a.readTime):ne.min()}(e);return this.listener.d_(t,r)}A_(e){let t={};t.database=Ha(this.serializer),t.addTarget=function(s,a){let u,l=a.target;if(u=Na(l)?{documents:Yg(s,l)}:{query:Xg(s,l)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ed(s,a.resumeToken);let d=$a(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(ne.min())>0){u.readTime=ns(s,a.snapshotVersion.toTimestamp());let d=$a(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=e_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){let t={};t.database=Ha(this.serializer),t.removeTarget=e,this.a_(t)}},Ic=class extends as{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();let t=Jg(e.writeResults,e.commitTime),r=lt(e.commitTime);return this.listener.g_(r,t)}p_(){let e={};e.database=Ha(this.serializer),this.a_(e)}m_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Qg(this.serializer,r))};this.a_(t)}};var Ec=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Ka(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(N.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,Ka(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}},Tc=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wt(t),this.D_=!1):K("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}};var Ac=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{pn(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){let d=te(l);d.L_.add(4),await Jr(d),d.q_.set("Unknown"),d.L_.delete(4),await Ss(d)}(this))})}),this.q_=new Tc(r,i)}};async function Ss(n){if(pn(n))for(let e of n.B_)await e(!0)}async function Jr(n){for(let e of n.B_)await e(!1)}function kd(n,e){let t=te(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),eu(t)?Zc(t):Xn(t).r_()&&Xc(t,e))}function Yc(n,e){let t=te(n),r=Xn(t);t.N_.delete(e),r.r_()&&Nd(t,e),t.N_.size===0&&(r.r_()?r.o_():pn(t)&&t.q_.set("Unknown"))}function Xc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xn(n).A_(e)}function Nd(n,e){n.Q_.xe(e),Xn(n).R_(e)}function Zc(n){n.Q_=new Ga({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Xn(n).start(),n.q_.v_()}function eu(n){return pn(n)&&!Xn(n).n_()&&n.N_.size>0}function pn(n){return te(n).L_.size===0}function xd(n){n.Q_=void 0}async function p_(n){n.q_.set("Online")}async function m_(n){n.N_.forEach((e,t)=>{Xc(n,e)})}async function g_(n,e){xd(n),eu(n)?(n.q_.M_(e),Zc(n)):n.q_.set("Unknown")}async function __(n,e,t){if(n.q_.set("Online"),e instanceof es&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let u of s.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cs(n,r)}else if(e instanceof Ln?n.Q_.Ke(e):e instanceof Zi?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ne.min()))try{let r=await Dd(n.localStore);t.compareTo(r)>=0&&await function(s,a){let u=s.Q_.rt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let g=s.N_.get(d);g&&s.N_.set(d,g.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{let g=s.N_.get(l);if(!g)return;s.N_.set(l,g.withResumeToken(Le.EMPTY_BYTE_STRING,g.snapshotVersion)),Nd(s,l);let E=new Vr(g.target,l,d,g.sequenceNumber);Xc(s,E)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await cs(n,r)}}async function cs(n,e,t){if(!Qr(e))throw e;n.L_.add(1),await Jr(n),n.q_.set("Offline"),t||(t=()=>Dd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ss(n)})}function Od(n,e){return e().catch(t=>cs(n,t,e))}async function Rs(n){let e=te(n),t=Ut(e),r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;y_(e);)try{let i=await l_(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,v_(e,i)}catch(i){await cs(e,i)}Vd(e)&&Ld(e)}function y_(n){return pn(n)&&n.O_.length<10}function v_(n,e){n.O_.push(e);let t=Ut(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Vd(n){return pn(n)&&!Ut(n).n_()&&n.O_.length>0}function Ld(n){Ut(n).start()}async function w_(n){Ut(n).p_()}async function I_(n){let e=Ut(n);for(let t of n.O_)e.m_(t.mutations)}async function E_(n,e,t){let r=n.O_.shift(),i=Ua.from(r,e,t);await Od(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Rs(n)}async function T_(n,e){e&&Ut(n).V_&&await async function(r,i){if(function(a){return Bg(a)&&a!==N.ABORTED}(i.code)){let s=r.O_.shift();Ut(r).s_(),await Od(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Rs(r)}}(n,e),Vd(n)&&Ld(n)}async function qh(n,e){let t=te(n);t.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");let r=pn(t);t.L_.add(3),await Jr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ss(t)}async function A_(n,e){let t=te(n);e?(t.L_.delete(2),await Ss(t)):e||(t.L_.add(2),await Jr(t),t.q_.set("Unknown"))}function Xn(n){return n.K_||(n.K_=function(t,r,i){let s=te(t);return s.w_(),new wc(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:p_.bind(null,n),Ro:m_.bind(null,n),mo:g_.bind(null,n),d_:__.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),eu(n)?Zc(n):n.q_.set("Unknown")):(await n.K_.stop(),xd(n))})),n.K_}function Ut(n){return n.U_||(n.U_=function(t,r,i){let s=te(t);return s.w_(),new Ic(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:w_.bind(null,n),mo:T_.bind(null,n),f_:I_.bind(null,n),g_:E_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Rs(n)):(await n.U_.stop(),n.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}var bc=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,u=new n(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function tu(n,e){if(wt("AsyncQueue",`${e}: ${n}`),Qr(n))return new $(N.UNAVAILABLE,`${e}: ${n}`);throw n}var us=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||J.comparator(t.key,r.key):(t,r)=>J.comparator(t.key,r.key),this.keyedMap=br(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var ls=class{constructor(){this.W_=new we(J.comparator)}track(e){let t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}},Wn=class n{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,us.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ts(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Sc=class{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}},Rc=class{constructor(){this.queries=jh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){let i=te(t),s=i.queries;i.queries=jh(),s.forEach((a,u)=>{for(let l of u.j_)l.onError(r)})})(this,new $(N.ABORTED,"Firestore shutting down"))}};function jh(){return new Ft(n=>ud(n),Ts)}async function nu(n,e){let t=te(n),r=3,i=e.query,s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Sc,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=tu(a,`Initialization of query '${Nn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&iu(t)}async function ru(n,e){let t=te(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function b_(n,e){let t=te(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&iu(t)}function S_(n,e,t){let r=te(n),i=r.queries.get(e);if(i)for(let s of i.j_)s.onError(t);r.queries.delete(e)}function iu(n){n.Y_.forEach(e=>{e.next()})}var Pc,Gh;(Gh=Pc||(Pc={})).ea="default",Gh.Cache="cache";var Fr=class{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;let r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Pc.Cache}};var hs=class{constructor(e){this.key=e}},ds=class{constructor(e){this.key=e}},Cc=class{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=ld(e),this.Ra=new us(this.Aa)}get Va(){return this.Ta}ma(e,t){let r=t?t.fa:new ls,i=t?t.Ra:this.Ra,s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((g,E)=>{let T=i.get(g),b=As(this.query,E)?E:null,V=!!T&&this.mutatedKeys.has(T.key),G=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations),B=!1;T&&b?T.data.isEqual(b.data)?V!==G&&(r.track({type:3,doc:b}),B=!0):this.ga(T,b)||(r.track({type:2,doc:b}),B=!0,(l&&this.Aa(b,l)>0||d&&this.Aa(b,d)<0)&&(u=!0)):!T&&b?(r.track({type:0,doc:b}),B=!0):T&&!b&&(r.track({type:1,doc:T}),B=!0,(l||d)&&(u=!0)),B&&(b?(a=a.add(b),s=G?s.add(g):s.delete(g)):(a=a.delete(g),s=s.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),s=s.delete(g.key),r.track({type:1,doc:g})}return{Ra:a,fa:r,ns:u,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let a=e.fa.G_();a.sort((g,E)=>function(b,V){let G=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return G(b)-G(V)}(g.type,E.type)||this.Aa(g.doc,E.doc)),this.pa(r),i=i!=null&&i;let u=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new Wn(this.query,e.Ra,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ls,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});let t=[];return e.forEach(r=>{this.da.has(r)||t.push(new ds(r))}),this.da.forEach(r=>{e.has(r)||t.push(new hs(r))}),t}ba(e){this.Ta=e.Ts,this.da=ie();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Wn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}},Dc=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},kc=class{constructor(e){this.key=e,this.va=!1}},Nc=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ft(u=>ud(u),Ts),this.Ma=new Map,this.xa=new Set,this.Oa=new we(J.comparator),this.Na=new Map,this.La=new Mr,this.Ba={},this.ka=new Map,this.qa=Lr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}};async function R_(n,e,t=!0){let r=jd(n),i,s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Md(r,e,t,!0),i}async function P_(n,e){let t=jd(n);await Md(t,e,!0,!1)}async function Md(n,e,t,r){let i=await h_(n.localStore,ut(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),u;return r&&(u=await C_(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&kd(n.remoteStore,i),u}async function C_(n,e,t,r,i){n.Ka=(E,T,b)=>async function(G,B,ee,L){let F=B.view.ma(ee);F.ns&&(F=await Bh(G.localStore,B.query,!1).then(({documents:v})=>B.view.ma(v,F)));let k=L&&L.targetChanges.get(B.targetId),U=L&&L.targetMismatches.get(B.targetId)!=null,S=B.view.applyChanges(F,G.isPrimaryClient,k,U);return $h(G,B.targetId,S.wa),S.snapshot}(n,E,T,b);let s=await Bh(n.localStore,e,!0),a=new Cc(e,s.Ts),u=a.ma(s.documents),l=Or.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);$h(n,t,d.wa);let g=new Dc(e,t,a);return n.Fa.set(e,g),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function D_(n,e,t){let r=te(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Ts(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Yc(r.remoteStore,i.targetId),xc(r,i.targetId)}).catch(Hr)):(xc(r,i.targetId),await mc(r.localStore,i.targetId,!0))}async function k_(n,e){let t=te(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Yc(t.remoteStore,r.targetId))}async function N_(n,e,t){let r=U_(n);try{let i=await function(a,u){let l=te(a),d=Ce.now(),g=u.reduce((b,V)=>b.add(V.key),ie()),E,T;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Et(),G=ie();return l.cs.getEntries(b,g).next(B=>{V=B,V.forEach((ee,L)=>{L.isValidDocument()||(G=G.add(ee))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,V)).next(B=>{E=B;let ee=[];for(let L of u){let F=Ug(L,E.get(L.key).overlayedDocument);F!=null&&ee.push(new Tt(L.key,F,nd(F.value.mapValue),rn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,d,ee,u)}).next(B=>{T=B;let ee=B.applyToLocalDocumentSet(E,G);return l.documentOverlayCache.saveOverlays(b,B.batchId,ee)})}).then(()=>({batchId:T.batchId,changes:dd(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new we(ce)),d=d.insert(u,l),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await Yr(r,i.changes),await Rs(r.remoteStore)}catch(i){let s=tu(i,"Failed to persist write");t.reject(s)}}async function Fd(n,e){let t=te(n);try{let r=await c_(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Na.get(s);a&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?le(a.va):i.removedDocuments.size>0&&(le(a.va),a.va=!1))}),await Yr(t,r,e)}catch(r){await Hr(r)}}function zh(n,e,t){let r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Fa.forEach((s,a)=>{let u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let l=te(a);l.onlineState=u;let d=!1;l.queries.forEach((g,E)=>{for(let T of E.j_)T.Z_(u)&&(d=!0)}),d&&iu(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x_(n,e,t){let r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Na.get(e),s=i&&i.key;if(s){let a=new we(J.comparator);a=a.insert(s,et.newNoDocument(s,ne.min()));let u=ie().add(s),l=new Xi(ne.min(),new Map,new we(ce),a,u);await Fd(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),su(r)}else await mc(r.localStore,e,!1).then(()=>xc(r,e,t)).catch(Hr)}async function O_(n,e){let t=te(n),r=e.batch.batchId;try{let i=await a_(t.localStore,e);Bd(t,r,null),Ud(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Yr(t,i)}catch(i){await Hr(i)}}async function V_(n,e,t){let r=te(n);try{let i=await function(a,u){let l=te(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return l.mutationQueue.lookupMutationBatch(d,u).next(E=>(le(E!==null),g=E.keys(),l.mutationQueue.removeMutationBatch(d,E))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,g,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>l.localDocuments.getDocuments(d,g))})}(r.localStore,e);Bd(r,e,t),Ud(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Yr(r,i)}catch(i){await Hr(i)}}function Ud(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Bd(n,e,t){let r=te(n),i=r.Ba[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function xc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||qd(n,r)})}function qd(n,e){n.xa.delete(e.path.canonicalString());let t=n.Oa.get(e);t!==null&&(Yc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),su(n))}function $h(n,e,t){for(let r of t)r instanceof hs?(n.La.addReference(r.key,e),L_(n,r)):r instanceof ds?(K("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||qd(n,r.key)):Z()}function L_(n,e){let t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(K("SyncEngine","New document in limbo: "+t),n.xa.add(r),su(n))}function su(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){let e=n.xa.values().next().value;n.xa.delete(e);let t=new J(ge.fromString(e)),r=n.qa.next();n.Na.set(r,new kc(t)),n.Oa=n.Oa.insert(t,r),kd(n.remoteStore,new Vr(ut(Es(t.path)),r,"TargetPurposeLimboResolution",Dr.oe))}}async function Yr(n,e,t){let r=te(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,l)=>{a.push(r.Ka(l,e,t).then(d=>{var g;if((d||t)&&r.isPrimaryClient){let E=d?!d.fromCache:(g=t?.targetChanges.get(l.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(l.targetId,E?"current":"not-current")}if(d){i.push(d);let E=hc.Wi(l.targetId,d);s.push(E)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(l,d){let g=te(l);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>q.forEach(d,T=>q.forEach(T.$i,b=>g.persistence.referenceDelegate.addReference(E,T.targetId,b)).next(()=>q.forEach(T.Ui,b=>g.persistence.referenceDelegate.removeReference(E,T.targetId,b)))))}catch(E){if(!Qr(E))throw E;K("LocalStore","Failed to update sequence numbers: "+E)}for(let E of d){let T=E.targetId;if(!E.fromCache){let b=g.os.get(T),V=b.snapshotVersion,G=b.withLastLimboFreeSnapshotVersion(V);g.os=g.os.insert(T,G)}}}(r.localStore,s))}async function M_(n,e){let t=te(n);if(!t.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());let r=await Cd(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(u=>{u.forEach(l=>{l.reject(new $(N.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yr(t,r.hs)}}function F_(n,e){let t=te(n),r=t.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie(),s=t.Ma.get(e);if(!s)return i;for(let a of s){let u=t.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function jd(n){let e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x_.bind(null,e),e.Ca.d_=b_.bind(null,e.eventManager),e.Ca.$a=S_.bind(null,e.eventManager),e}function U_(n){let e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V_.bind(null,e),e}var Hn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return o_(this.persistence,new fc,e.initialUser,this.serializer)}Ga(e){return new cc(lc.Zr,this.serializer)}Wa(e){return new gc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Hn.provider={build:()=>new Hn};var Ur=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=M_.bind(null,this.syncEngine),await A_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rc}()}createDatastore(e){let t=bs(e.databaseInfo.databaseId),r=function(s){return new vc(s)}(e.databaseInfo);return function(s,a,u,l){return new Ec(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new Ac(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>zh(this.syncEngine,t,0),function(){return ss.D()?new ss:new _c}())}createSyncEngine(e,t){return function(i,s,a,u,l,d,g){let E=new Nc(i,s,a,u,l,d);return g&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=te(i);K("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Jr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Ur.provider={build:()=>new Ur};var Br=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Oc=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=$i.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{K("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(K("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=tu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function la(n,e){n.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Kh(n,e){n.asyncQueue.verifyOperationInProgress();let t=await B_(n);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>qh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>qh(e.remoteStore,i)),n._onlineComponents=e}async function B_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await la(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Fn("Error using user provided cache. Falling back to memory cache: "+t),await la(n,new Hn)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await la(n,new Hn);return n._offlineComponents}async function Gd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Kh(n,n._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Kh(n,new Ur))),n._onlineComponents}function q_(n){return Gd(n).then(e=>e.syncEngine)}async function fs(n){let e=await Gd(n),t=e.eventManager;return t.onListen=R_.bind(null,e.syncEngine),t.onUnlisten=D_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=P_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=k_.bind(null,e.syncEngine),t}function j_(n,e,t={}){let r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){let g=new Br({next:T=>{g.Za(),a.enqueueAndForget(()=>ru(s,E));let b=T.docs.has(u);!b&&T.fromCache?d.reject(new $(N.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&T.fromCache&&l&&l.source==="server"?d.reject(new $(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),E=new Fr(Es(u.path),g,{includeMetadataChanges:!0,_a:!0});return nu(s,E)}(await fs(n),n.asyncQueue,e,t,r)),r.promise}function G_(n,e,t={}){let r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){let g=new Br({next:T=>{g.Za(),a.enqueueAndForget(()=>ru(s,E)),T.fromCache&&l.source==="server"?d.reject(new $(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),E=new Fr(u,g,{includeMetadataChanges:!0,_a:!0});return nu(s,E)}(await fs(n),n.asyncQueue,e,t,r)),r.promise}function zd(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Wh=new Map;function $d(n,e,t){if(!t)throw new $(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function z_(n,e,t,r){if(e===!0&&r===!0)throw new $(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hh(n){if(!J.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qh(n){if(J.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ps(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z()}function ht(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Ps(n);throw new $(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var ps=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Qn=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ps({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ps(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ha;switch(r.type){case"firstParty":return new ma(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Wh.get(t);r&&(K("ComponentProvider","Removing Datastore"),Wh.delete(t),r.terminate())}(this),Promise.resolve()}};function ou(n,e,t,r={}){var i;let s=(n=ht(n,Qn))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=Se.MOCK_USER;else{u=Wl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Se(d)}n._authCredentials=new da(new zi(u,l))}}var fn=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},je=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},Lt=class n extends fn{constructor(e,t,r){super(e,t,Es(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new J(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Xr(n,e,...t){if(n=be(n),$d("collection","path",e),n instanceof Qn){let r=ge.fromString(e,...t);return Qh(r),new Lt(n,null,r)}{if(!(n instanceof je||n instanceof Lt))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ge.fromString(e,...t));return Qh(r),new Lt(n.firestore,null,r)}}function Cs(n,e,...t){if(n=be(n),arguments.length===1&&(e=$i.newId()),$d("doc","path",e),n instanceof Qn){let r=ge.fromString(e,...t);return Hh(r),new je(n,null,new J(r))}{if(!(n instanceof je||n instanceof Lt))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ge.fromString(e,...t));return Hh(r),new je(n.firestore,n instanceof Lt?n.converter:null,new J(r))}}var ms=class{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new os(this,"async_queue_retry"),this.Vu=()=>{let r=ua();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;let t=ua();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;let t=ua();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});let t=new Ze;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Qr(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){let t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;let i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw wt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);let i=bc.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(let t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){let t=this.Tu.indexOf(e);this.Tu.splice(t,1)}};function Jh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var Bt=class extends Qn{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ms,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new ms(e),this._firestoreClient=void 0,await e}}};function Kd(n,e){let t=typeof n=="object"?n:Mi(),r=typeof n=="string"?n:e||"(default)",i=Er(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=Kl("firestore");s&&ou(i,...s)}return i}function Ds(n){if(n._terminated)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$_(n),n._firestoreClient}function $_(n){var e,t,r;let i=n._freezeSettings(),s=function(u,l,d,g){return new wa(u,l,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,zd(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Oc(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){let l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}var qr=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Le.fromBase64String(e))}catch(t){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var jr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Gr=class{constructor(e){this._methodName=e}};var zr=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}};var $r=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var K_=/^__.*__$/,Vc=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Tt(e,this.data,this.fieldMask,t,this.fieldTransforms):new dn(e,this.data,t,this.fieldTransforms)}};function Wd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}var Lc=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return gs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Wd(this.Cu)&&K_.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}},Mc=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bs(e)}Qu(e,t,r,i=!1){return new Lc({Cu:e,methodName:t,qu:r,path:Ke.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Hd(n){let e=n._freezeSettings(),t=bs(n._databaseId);return new Mc(n._databaseId,!!e.ignoreUndefinedProperties,t)}function W_(n,e,t,r,i,s={}){let a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);Yd("Data must be an object, but it was:",a,r);let u=Qd(r,a),l,d;if(s.merge)l=new at(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let g=[];for(let E of s.mergeFields){let T=Q_(e,E,t);if(!a.contains(T))throw new $(N.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Y_(g,T)||g.push(T)}l=new at(g),d=a.fieldTransforms.filter(E=>l.covers(E.field))}else l=null,d=a.fieldTransforms;return new Vc(new Xe(u),l,d)}var Fc=class n extends Gr{_toFieldTransform(e){return new Va(e.path,new un)}isEqual(e){return e instanceof n}};function H_(n,e,t,r=!1){return au(t,n.Qu(r?4:3,e))}function au(n,e){if(Jd(n=be(n)))return Yd("Unsupported field value:",e,n),Qd(n,e);if(n instanceof Gr)return function(r,i){if(!Wd(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let u of r){let l=au(u,i.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Og(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=Ce.fromDate(r);return{timestampValue:ns(i.serializer,s)}}if(r instanceof Ce){let s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ns(i.serializer,s)}}if(r instanceof zr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qr)return{bytesValue:Ed(i.serializer,r._byteString)};if(r instanceof je){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $r)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw u.Bu("VectorValues must only contain numeric values.");return Qc(u.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ps(r)}`)}(n,e)}function Qd(n,e){let t={};return Zh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yn(n,(r,i)=>{let s=au(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Jd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof zr||n instanceof qr||n instanceof je||n instanceof Gr||n instanceof $r)}function Yd(n,e,t){if(!Jd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=Ps(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Q_(n,e,t){if((e=be(e))instanceof jr)return e._internalPath;if(typeof e=="string")return Xd(n,e);throw gs("Field path arguments must be of type string or ",n,!1,void 0,t)}var J_=new RegExp("[~\\*/\\[\\]]");function Xd(n,e,t){if(e.search(J_)>=0)throw gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jr(...e.split("."))._internalPath}catch{throw gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function gs(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new $(N.INVALID_ARGUMENT,u+n+l)}function Y_(n,e){return n.some(t=>t.isEqual(e))}var _s=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Uc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(cu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Uc=class extends _s{data(){return super.data()}};function cu(n,e){return typeof e=="string"?Xd(n,e):e instanceof jr?e._internalPath:e._delegate._internalPath}function Zd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Kr=class{},Bc=class extends Kr{};function Zr(n,e,...t){let r=[];e instanceof Kr&&r.push(e),r=r.concat(t),function(s){let a=s.filter(l=>l instanceof qc).length,u=s.filter(l=>l instanceof ys).length;if(a>1||a>0&&u>0)throw new $(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)n=i._apply(n);return n}var ys=class n extends Bc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new n(e,t,r)}_apply(e){let t=this._parse(e);return ef(e._query,t),new fn(e.firestore,e.converter,xa(e._query,t))}_parse(e){let t=Hd(e.firestore);return function(s,a,u,l,d,g,E){let T;if(d.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new $(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){Xh(E,g);let b=[];for(let V of E)b.push(Yh(l,s,V));T={arrayValue:{values:b}}}else T=Yh(l,s,E)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||Xh(E,g),T=H_(u,a,E,g==="in"||g==="not-in");return Te.create(d,g,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function qt(n,e,t){let r=e,i=cu("where",n);return ys._create(i,r,t)}var qc=class n extends Kr{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i,u=s.getFlattenedFilters();for(let l of u)ef(a,l),a=xa(a,l)}(e._query,t),new fn(e.firestore,e.converter,xa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};function Yh(n,e,t){if(typeof(t=be(t))=="string"){if(t==="")throw new $(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cd(e)&&t.indexOf("/")!==-1)throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let r=e.path.child(ge.fromString(t));if(!J.isDocumentKey(r))throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Th(n,new J(r))}if(t instanceof je)return Th(n,t._key);throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ps(t)}.`)}function Xh(n,e){if(!Array.isArray(n)||n.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ef(n,e){let t=function(i,s){for(let a of i)for(let u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}var jc=class{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Yn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>fe(a.doubleValue));return new $r(s)}convertGeoPoint(e){return new zr(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=$c(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Nr(e));default:return null}}convertTimestamp(e){let t=It(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ge.fromString(e);le(Pd(r));let i=new Qi(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(t)||wt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function X_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var nn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},vs=class extends _s{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(cu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Mn=class extends vs{data(e={}){return super.data(e)}},ws=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Mn(this._firestore,this._userDataWriter,r.key,r,new nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let l=new Mn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new nn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{let l=new Mn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new nn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,g=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),g=a.indexOf(u.doc.key)),{type:Z_(u.type),doc:l,oldIndex:d,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Z_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}function uu(n){n=ht(n,je);let e=ht(n.firestore,Bt);return j_(Ds(e),n._key).then(t=>nf(e,n,t))}var Wr=class extends jc{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}};function tf(n){n=ht(n,fn);let e=ht(n.firestore,Bt),t=Ds(e),r=new Wr(e);return Zd(n._query),G_(t,n._query).then(i=>new ws(e,r,n,i))}function Zn(n,e,t){n=ht(n,je);let r=ht(n.firestore,Bt),i=X_(n.converter,e,t);return ey(r,[W_(Hd(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,rn.none())])}function At(n,...e){var t,r,i;n=be(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Jh(e[a])||(s=e[a],a++);let u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Jh(e[a])){let E=e[a];e[a]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[a+2]=(i=E.complete)===null||i===void 0?void 0:i.bind(E)}let l,d,g;if(n instanceof je)d=ht(n.firestore,Bt),g=Es(n._key.path),l={next:E=>{e[a]&&e[a](nf(d,n,E))},error:e[a+1],complete:e[a+2]};else{let E=ht(n,fn);d=ht(E.firestore,Bt),g=E._query;let T=new Wr(d);l={next:b=>{e[a]&&e[a](new ws(d,T,E,b))},error:e[a+1],complete:e[a+2]},Zd(n._query)}return function(T,b,V,G){let B=new Br(G),ee=new Fr(b,B,V);return T.asyncQueue.enqueueAndForget(async()=>nu(await fs(T),ee)),()=>{B.Za(),T.asyncQueue.enqueueAndForget(async()=>ru(await fs(T),ee))}}(Ds(d),g,u,l)}function ey(n,e){return function(r,i){let s=new Ze;return r.asyncQueue.enqueueAndForget(async()=>N_(await q_(r),i,s)),s.promise}(Ds(n),e)}function nf(n,e,t){let r=t.docs.get(e._key),i=new Wr(n);return new vs(n,i,e._key,r,new nn(t.hasPendingWrites,t.fromCache),e.converter)}function rf(){return new Fc("serverTimestamp")}(function(e,t=!0){(function(i){Jn=i})(Ot),xt(new He("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),u=new Bt(new fa(r.getProvider("auth-internal")),new _a(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(d.options.projectId,g)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Ye(vh,"4.7.3",e),Ye(vh,"4.7.3","esm2017")})();function ks(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ef(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Tf=Ef,Af=new _t("auth","Firebase",Ef());var Ms=new kt("@firebase/auth");function ty(n,...e){Ms.logLevel<=re.WARN&&Ms.warn(`Auth (${Ot}): ${n}`,...e)}function xs(n,...e){Ms.logLevel<=re.ERROR&&Ms.error(`Auth (${Ot}): ${n}`,...e)}function Qe(n,...e){throw Du(n,...e)}function nt(n,...e){return Du(n,...e)}function Cu(n,e,t){let r=Object.assign(Object.assign({},Tf()),{[e]:t});return new _t("auth","Firebase",r).create(e,{appName:n.name})}function mn(n){return Cu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ny(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qe(n,"argument-error"),Cu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Du(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Af.create(n,...e)}function W(n,e,...t){if(!n)throw Du(e,...t)}function ft(n){let e="INTERNAL ASSERTION FAILED: "+n;throw xs(e),new Error(e)}function St(n,e){n||ft(e)}function du(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ry(){return sf()==="http:"||sf()==="https:"}function sf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function iy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ry()||Jl()||"connection"in navigator)?navigator.onLine:!0}function sy(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var gn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,St(t>e,"Short delay should be less than long delay!"),this.isMobile=Hl()||Yl()}get(){return iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function ku(n,e){St(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Fs=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var oy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var ay=new gn(3e4,6e4);function Re(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Me(n,e,t,r,i={}){return bf(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let u=Pn(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return Ql()||(d.referrerPolicy="no-referrer"),Fs.fetch()(Sf(n,n.config.apiHost,t,u),d)})}async function bf(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},oy),e);try{let i=new fu(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw ei(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ei(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ei(n,"user-disabled",a);let g=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Cu(n,g,d);Qe(n,g)}}catch(i){if(i instanceof $e)throw i;Qe(n,"network-request-failed",{message:String(i)})}}async function In(n,e,t,r,i={}){let s=await Me(n,e,t,r,i);return"mfaPendingCredential"in s&&Qe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Sf(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?ku(n.config,i):`${n.config.apiScheme}://${i}`}function cy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var fu=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),ay.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function ei(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=nt(n,e,r);return i.customData._tokenResponse=t,i}function of(n){return n!==void 0&&n.enterprise!==void 0}var pu=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function uy(n,e){return Me(n,"GET","/v2/recaptchaConfig",Re(n,e))}async function ly(n,e){return Me(n,"POST","/v1/accounts:delete",e)}async function Rf(n,e){return Me(n,"POST","/v1/accounts:lookup",e)}function ti(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pf(n,e=!1){let t=be(n),r=await t.getIdToken(e),i=Nu(r);W(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:ti(lu(i.auth_time)),issuedAtTime:ti(lu(i.iat)),expirationTime:ti(lu(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function lu(n){return Number(n)*1e3}function Nu(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xs("JWT malformed, contained fewer than 3 sections"),null;try{let i=Vo(t);return i?JSON.parse(i):(xs("Failed to decode base64 JWT payload"),null)}catch(i){return xs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function af(n){let e=Nu(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ri(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $e&&hy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function hy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var mu=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ii=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Us(n){var e;let t=n.auth,r=await n.getIdToken(),i=await ri(n,Rf(t,{idToken:r}));W(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Df(s.providerUserInfo):[],u=dy(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!u?.length,g=l?d:!1,E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new ii(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(n,E)}async function Cf(n){let e=be(n);await Us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Df(n){return n.map(e=>{var{providerId:t}=e,r=ks(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function fy(n,e){let t=await bf(n,{},async()=>{let r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Sf(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Fs.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function py(n,e){return Me(n,"POST","/v2/accounts:revokeToken",Re(n,e))}var ni=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):af(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");let t=af(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await fy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return ft("not implemented")}};function jt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var tr=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ks(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ii(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await ri(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pf(this,e)}reload(){return Cf(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Us(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(mn(this.auth));let e=await this.getIdToken();return await ri(this,ly(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,g;let E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,G=(u=t.tenantId)!==null&&u!==void 0?u:void 0,B=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,ee=(d=t.createdAt)!==null&&d!==void 0?d:void 0,L=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:F,emailVerified:k,isAnonymous:U,providerData:S,stsTokenManager:v}=t;W(F&&v,e,"internal-error");let p=ni.fromJSON(this.name,v);W(typeof F=="string",e,"internal-error"),jt(E,e.name),jt(T,e.name),W(typeof k=="boolean",e,"internal-error"),W(typeof U=="boolean",e,"internal-error"),jt(b,e.name),jt(V,e.name),jt(G,e.name),jt(B,e.name),jt(ee,e.name),jt(L,e.name);let f=new n({uid:F,auth:e,email:T,emailVerified:k,displayName:E,isAnonymous:U,photoURL:V,phoneNumber:b,tenantId:G,stsTokenManager:p,createdAt:ee,lastLoginAt:L});return S&&Array.isArray(S)&&(f.providerData=S.map(y=>Object.assign({},y))),B&&(f._redirectEventId=B),f}static async _fromIdTokenResponse(e,t,r=!1){let i=new ni;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Us(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];W(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Df(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new ni;u.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ii(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var cf=new Map;function bt(n){St(n instanceof Function,"Expected a class definition");let e=cf.get(n);return e?(St(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cf.set(n,e),e)}var Bs=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Bs.type="NONE";var gu=Bs;function Os(n,e,t){return`firebase:${n}:${e}:${t}`}var qs=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Os(this.userKey,i.apiKey,s),this.fullPersistenceKey=Os("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(bt(gu),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||bt(gu),a=Os(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let g=await d._get(a);if(g){let E=tr._fromJSON(e,g);d!==s&&(u=E),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function uf(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lf(e))return"Blackberry";if(Mf(e))return"Webos";if(Nf(e))return"Safari";if((e.includes("chrome/")||xf(e))&&!e.includes("edge/"))return"Chrome";if(Vf(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function kf(n=Ae()){return/firefox\//i.test(n)}function Nf(n=Ae()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xf(n=Ae()){return/crios\//i.test(n)}function Of(n=Ae()){return/iemobile/i.test(n)}function Vf(n=Ae()){return/android/i.test(n)}function Lf(n=Ae()){return/blackberry/i.test(n)}function Mf(n=Ae()){return/webos/i.test(n)}function xu(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function my(n=Ae()){var e;return xu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gy(){return Xl()&&document.documentMode===10}function Ff(n=Ae()){return xu(n)||Vf(n)||Mf(n)||Lf(n)||/windows phone/i.test(n)||Of(n)}function Uf(n,e=[]){let t;switch(n){case"Browser":t=uf(Ae());break;case"Worker":t=`${uf(Ae())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ot}/${r}`}var _u=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,u)=>{try{let l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function _y(n,e={}){return Me(n,"GET","/v2/passwordPolicy",Re(n,e))}var yy=6,yu=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:yy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var vu=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new js(this),this.idTokenSubscription=new js(this),this.beforeStateQueue=new _u(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Rf(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(st(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Us(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(mn(this));let t=e?be(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await _y(this),t=new yu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _t("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await py(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&bt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&ty(`Error while retrieving App Check token: ${t.error}`),t?.token}};function En(n){return be(n)}var js=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=nh(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var so={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vy(n){so=n}function Bf(n){return so.loadJS(n)}function wy(){return so.recaptchaEnterpriseScript}function Iy(){return so.gapiScript}function qf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Ey="recaptcha-enterprise",Ty="NO_RECAPTCHA",wu=class{constructor(e){this.type=Ey,this.auth=En(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{uy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new pu(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function i(s,a,u){let l=window.grecaptcha;of(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ty)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&of(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=wy();l.length!==0&&(l+=u),Bf(l).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function lf(n,e,t,r=!1){let i=new wu(n),s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}let a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function hf(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await lf(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await lf(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}function jf(n,e){let t=Er(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Xt(s,e??{}))return i;Qe(i,"already-initialized")}return t.initialize({options:e})}function Ay(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(bt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function oo(n,e,t){let r=En(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Gf(e),{host:a,port:u}=by(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Sy()}function Gf(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function by(n){let e=Gf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:df(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:df(a)}}}function df(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Sy(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var _n=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}};async function Ry(n,e){return Me(n,"POST","/v1/accounts:signUp",e)}async function Py(n,e){return In(n,"POST","/v1/accounts:signInWithPassword",Re(n,e))}async function Cy(n,e){return In(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}async function Dy(n,e){return In(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}var si=class n extends _n{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hf(e,t,"signInWithPassword",Py);case"emailLink":return Cy(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hf(e,r,"signUpPassword",Ry);case"emailLink":return Dy(e,{idToken:t,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function er(n,e){return In(n,"POST","/v1/accounts:signInWithIdp",Re(n,e))}var ky="http://localhost",yn=class n extends _n{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ks(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){let e={requestUri:ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pn(t)}return e}};async function Ny(n,e){return Me(n,"POST","/v1/accounts:sendVerificationCode",Re(n,e))}async function xy(n,e){return In(n,"POST","/v1/accounts:signInWithPhoneNumber",Re(n,e))}async function Oy(n,e){let t=await In(n,"POST","/v1/accounts:signInWithPhoneNumber",Re(n,e));if(t.temporaryProof)throw ei(n,"account-exists-with-different-credential",t);return t}var Vy={USER_NOT_FOUND:"user-not-found"};async function Ly(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return In(n,"POST","/v1/accounts:signInWithPhoneNumber",Re(n,t),Vy)}var oi=class n extends _n{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return xy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Oy(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ly(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function My(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fy(n){let e=Cn(Dn(n)).link,t=e?Cn(Dn(e)).deep_link_id:null,r=Cn(Dn(n)).deep_link_id;return(r?Cn(Dn(r)).link:null)||r||t||e||n}var Gs=class n{constructor(e){var t,r,i,s,a,u;let l=Cn(Dn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,g=(r=l.oobCode)!==null&&r!==void 0?r:null,E=My((i=l.mode)!==null&&i!==void 0?i:null);W(d&&g&&E,"argument-error"),this.apiKey=d,this.operation=E,this.code=g,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=Fy(e);try{return new n(t)}catch{return null}}};var nr=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return si._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Gs.parseLink(t);return W(r,"argument-error"),si._fromEmailAndCode(e,r.code,r.tenantId)}};nr.PROVIDER_ID="password";nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var ai=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var vn=class extends ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var ci=class n extends vn{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";var Gt=class n extends vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";var ui=class n extends vn{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";var li=class n extends vn{constructor(){super("twitter.com")}static credential(e,t){return yn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";var hi=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await tr._fromIdTokenResponse(e,r,i),a=ff(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=ff(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function ff(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var Iu=class n extends $e{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function zf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(n,s,e,r):s})}async function Uy(n,e,t=!1){let r=await ri(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hi._forOperation(n,"link",r)}async function By(n,e,t=!1){let{auth:r}=n;if(st(r.app))return Promise.reject(mn(r));let i="reauthenticate";try{let s=await ri(n,zf(r,i,e,n),t);W(s.idToken,r,"internal-error");let a=Nu(s.idToken);W(a,r,"internal-error");let{sub:u}=a;return W(n.uid===u,r,"user-mismatch"),hi._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Qe(r,"user-mismatch"),s}}async function $f(n,e,t=!1){if(st(n.app))return Promise.reject(mn(n));let r="signIn",i=await zf(n,r,e),s=await hi._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Ou(n,e){return $f(En(n),e)}function Kf(n,e,t,r){return be(n).onIdTokenChanged(e,t,r)}function Wf(n,e,t){return be(n).beforeAuthStateChanged(e,t)}function Vu(n,e,t,r){return be(n).onAuthStateChanged(e,t,r)}function ao(n){return be(n).signOut()}function qy(n,e){return Me(n,"POST","/v2/accounts/mfaEnrollment:start",Re(n,e))}function jy(n,e){return Me(n,"POST","/v2/accounts/mfaEnrollment:finalize",Re(n,e))}function Gy(n,e){return Me(n,"POST","/v2/accounts/mfaEnrollment:start",Re(n,e))}function zy(n,e){return Me(n,"POST","/v2/accounts/mfaEnrollment:finalize",Re(n,e))}var zs="__sak";var $s=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zs,"1"),this.storage.removeItem(zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var $y=1e3,Ky=10,Ks=class extends $s{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ff(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);gy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ky):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},$y)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ks.type="LOCAL";var Hf=Ks;var Ws=class extends $s{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Ws.type="SESSION";var Lu=Ws;function Wy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Hs=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,s)),l=await Wy(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Hs.receivers=[];function Mu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Eu=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{let d=Mu("",20);i.port1.start();let g=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){let T=E;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(T.data.response);break;default:clearTimeout(g),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function pt(){return window}function Hy(n){pt().location.href=n}function Qf(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function Qy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Yy(){return Qf()?self:null}var Jf="firebaseLocalStorageDb",Xy=1,Qs="firebaseLocalStorage",Yf="fbase_key",wn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function co(n,e){return n.transaction([Qs],e?"readwrite":"readonly").objectStore(Qs)}function Zy(){let n=indexedDB.deleteDatabase(Jf);return new wn(n).toPromise()}function Tu(){let n=indexedDB.open(Jf,Xy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Qs,{keyPath:Yf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Qs)?e(r):(r.close(),await Zy(),e(await Tu()))})})}async function pf(n,e,t){let r=co(n,!0).put({[Yf]:e,value:t});return new wn(r).toPromise()}async function ev(n,e){let t=co(n,!1).get(e),r=await new wn(t).toPromise();return r===void 0?null:r.value}function mf(n,e){let t=co(n,!0).delete(e);return new wn(t).toPromise()}var tv=800,nv=3,Js=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tu(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>nv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hs._getInstance(Yy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qy(),!this.activeServiceWorker)return;this.sender=new Eu(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Tu();return await pf(e,zs,"1"),await mf(e,zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>ev(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=co(i,!1).getAll();return new wn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Js.type="LOCAL";var Xf=Js;function rv(n,e){return Me(n,"POST","/v2/accounts/mfaSignIn:start",Re(n,e))}function iv(n,e){return Me(n,"POST","/v2/accounts/mfaSignIn:finalize",Re(n,e))}function sv(n,e){return Me(n,"POST","/v2/accounts/mfaSignIn:finalize",Re(n,e))}var nI=qf("rcb"),rI=new gn(3e4,6e4);var ov="recaptcha";async function av(n,e,t){var r;let i=await t.verify();try{W(typeof i=="string",n,"argument-error"),W(t.type===ov,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){let a=s.session;if("phoneNumber"in s)return W(a.type==="enroll",n,"internal-error"),(await qy(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{W(a.type==="signin",n,"internal-error");let u=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return W(u,n,"missing-multi-factor-info"),(await rv(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:a}=await Ny(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}var di=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=En(e)}verifyPhoneNumber(e,t){return av(this.auth,e,be(t))}static credential(e,t){return oi._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?oi._fromTokenResponse(t,r):null}};di.PROVIDER_ID="phone";di.PHONE_SIGN_IN_METHOD="phone";function Zf(n,e){return e?bt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var fi=class extends _n{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function cv(n){return $f(n.auth,new fi(n),n.bypassAuthState)}function uv(n){let{auth:e,user:t}=n;return W(t,e,"internal-error"),By(t,new fi(n),n.bypassAuthState)}async function lv(n){let{auth:e,user:t}=n;return W(t,e,"internal-error"),Uy(t,new fi(n),n.bypassAuthState)}var Ys=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cv;case"linkViaPopup":case"linkViaRedirect":return lv;case"reauthViaPopup":case"reauthViaRedirect":return uv;default:Qe(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var hv=new gn(2e3,1e4);async function Fu(n,e,t){if(st(n.app))return Promise.reject(nt(n,"operation-not-supported-in-this-environment"));let r=En(n);ny(n,e,ai);let i=Zf(r,t);return new Xs(r,"signInViaPopup",e,i).executeNotNull()}var Xs=class n extends Ys{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");let e=Mu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hv.get())};e()}};Xs.currentPopupAction=null;var dv="pendingRedirect",Vs=new Map,Au=class extends Ys{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vs.get(this.auth._key());if(!e){try{let r=await fv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vs.set(this.auth._key(),e)}return this.bypassAuthState||Vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function fv(n,e){let t=gv(e),r=mv(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function pv(n,e){Vs.set(n._key(),e)}function mv(n){return bt(n._redirectPersistence)}function gv(n){return Os(dv,n.config.apiKey,n.name)}async function _v(n,e,t=!1){if(st(n.app))return Promise.reject(mn(n));let r=En(n),i=Zf(r,e),a=await new Au(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var yv=10*60*1e3,bu=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ep(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yv&&this.cachedEventUids.clear(),this.cachedEventUids.has(gf(e))}saveEventToCache(e){this.cachedEventUids.add(gf(e)),this.lastProcessedEventTime=Date.now()}};function gf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ep({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function vv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(n);default:return!1}}async function wv(n,e={}){return Me(n,"GET","/v1/projects",e)}var Iv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ev=/^https?/;async function Tv(n){if(n.config.emulator)return;let{authorizedDomains:e}=await wv(n);for(let t of e)try{if(Av(t))return}catch{}Qe(n,"unauthorized-domain")}function Av(n){let e=du(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ev.test(t))return!1;if(Iv.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var bv=new gn(3e4,6e4);function _f(){let n=pt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sv(n){return new Promise((e,t)=>{var r,i,s;function a(){_f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_f(),t(nt(n,"network-request-failed"))},timeout:bv.get()})}if(!((i=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pt().gapi)===null||s===void 0)&&s.load)a();else{let u=qf("iframefcb");return pt()[u]=()=>{gapi.load?a():t(nt(n,"network-request-failed"))},Bf(`${Iy()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Ls=null,e})}var Ls=null;function Rv(n){return Ls=Ls||Sv(n),Ls}var Pv=new gn(5e3,15e3),Cv="__/auth/iframe",Dv="emulator/auth/iframe",kv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xv(n){let e=n.config;W(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?ku(e,Dv):`https://${n.config.authDomain}/${Cv}`,r={apiKey:e.apiKey,appName:n.name,v:Ot},i=Nv.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Pn(r).slice(1)}`}async function Ov(n){let e=await Rv(n),t=pt().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:xv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=nt(n,"network-request-failed"),u=pt().setTimeout(()=>{s(a)},Pv.get());function l(){pt().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var Vv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lv=500,Mv=600,Fv="_blank",Uv="http://localhost",Zs=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Bv(n,e,t,r=Lv,i=Mv){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",l=Object.assign(Object.assign({},Vv),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Ae().toLowerCase();t&&(u=xf(d)?Fv:t),kf(d)&&(e=e||Uv,l.scrollbars="yes");let g=Object.entries(l).reduce((T,[b,V])=>`${T}${b}=${V},`,"");if(my(d)&&u!=="_self")return qv(e||"",u),new Zs(null);let E=window.open(e||"",u,g);W(E,n,"popup-blocked");try{E.focus()}catch{}return new Zs(E)}function qv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var jv="__/auth/handler",Gv="emulator/auth/handler",zv=encodeURIComponent("fac");async function yf(n,e,t,r,i,s){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ot,eventId:i};if(e instanceof ai){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",th(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[g,E]of Object.entries(s||{}))a[g]=E}if(e instanceof vn){let g=e.getScopes().filter(E=>E!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let g of Object.keys(u))u[g]===void 0&&delete u[g];let l=await n._getAppCheckToken(),d=l?`#${zv}=${encodeURIComponent(l)}`:"";return`${$v(n)}?${Pn(u).slice(1)}${d}`}function $v({config:n}){return n.emulator?ku(n,Gv):`https://${n.authDomain}/${jv}`}var hu="webStorageSupport",Su=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=_v,this._overrideRedirectResult=pv}async _openPopup(e,t,r,i){var s;St((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await yf(e,t,r,du(),i);return Bv(e,a,Mu())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await yf(e,t,r,du(),i);return Hy(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(St(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await Ov(e),r=new bu(e);return t.register("authEvent",i=>(W(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hu,{type:hu},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[hu];a!==void 0&&t(!!a),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Tv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ff()||Nf()||xu()}},tp=Su,eo=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ft("unexpected MultiFactorSessionType")}}},Ru=class n extends eo{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return jy(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return iv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},to=class{constructor(){}static assertion(e){return Ru._fromCredential(e)}};to.FACTOR_ID="phone";var no=class{static assertionForEnrollment(e,t){return ro._fromSecret(e,t)}static assertionForSignIn(e,t){return ro._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;W(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await Gy(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return io._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};no.FACTOR_ID="totp";var ro=class n extends eo{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return W(typeof this.secret<"u",e,"argument-error"),zy(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){W(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return sv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},io=class n{constructor(e,t,r,i,s,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Ns(e)||Ns(t))&&(i=!0),i&&(Ns(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Ns(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Ns(n){return typeof n>"u"||n?.length===0}var vf="@firebase/auth",wf="1.7.9";var Pu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Kv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wv(n){xt(new He("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uf(n)},d=new vu(r,i,s,l);return Ay(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xt(new He("auth-internal",e=>{let t=En(e.getProvider("auth").getImmediate());return(r=>new Pu(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(vf,wf,Kv(n)),Ye(vf,wf,"esm2017")}var Hv=5*60,Qv=Fo("authIdTokenMaxAge")||Hv,If=null,Jv=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Qv)return;let i=t?.token;If!==i&&(If=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Uu(n=Mi()){let e=Er(n,"auth");if(e.isInitialized())return e.getImmediate();let t=jf(n,{popupRedirectResolver:tp,persistence:[Xf,Hf,Lu]}),r=Fo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=Jv(s.toString());Wf(t,a,()=>a(t.currentUser)),Kf(t,u=>a(u))}}let i=Lo("auth");return i&&oo(t,`http://${i}`),t}function Yv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}vy({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=nt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Yv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wv("Browser");var lp=Qp(sp()),ju=window.POLLS||[],mi=Object.fromEntries(ju.map(n=>[n.id,n])),op=(window.ADMIN_EMAIL||"").toLowerCase(),Ku=new URLSearchParams(location.search),rr=Ku.has("emu")&&["localhost","127.0.0.1"].includes(location.hostname),hp=ea(window.FIREBASE_CONFIG),$t=Kd(hp);rr&&ou($t,"127.0.0.1",8080);var zt=(n,e=document)=>e.querySelector(n),O=(n,e={},...t)=>{let r=document.createElement(n);for(let[i,s]of Object.entries(e))i==="class"?r.className=s:i.startsWith("on")?r.addEventListener(i.slice(2),s):s!==!1&&s!=null&&r.setAttribute(i,s===!0?"":s);for(let i of t.flat())i!=null&&r.append(i.nodeType?i:document.createTextNode(String(i)));return r},dp="\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039A\u039B\u039C",Tn=n=>Cs($t,"state",n),lo=()=>Cs($t,"state","_current");function Gu(){let n=new URL(location.href);return n.search="",n.hash="",n.pathname=n.pathname.replace(/[^/]*$/,""),n.toString()}function pi(n){let e=Gu()+(n?`?p=${encodeURIComponent(n)}`:"");return rr&&(e+=(e.includes("?")?"&":"?")+"emu"),e}function ap(n,e=6){let t=(0,lp.default)(0,"M");t.addData(n),t.make();let r=O("div",{class:"qr"});return r.innerHTML=t.createSvgTag({cellSize:e,margin:2,scalable:!0}),r}function Xv(){let n=()=>Array.from(crypto.getRandomValues(new Uint8Array(16)),e=>"abcdefghijklmnopqrstuvwxyz0123456789"[e%36]).join("");try{let e=localStorage.getItem("poll_device");return e||(e=n(),localStorage.setItem("poll_device",e)),e}catch{return window.__dev||(window.__dev=n())}}var fp=(n,e)=>`voted_${n}_${e}`,Zv=(n,e)=>{try{return localStorage.getItem(fp(n,e))==="1"}catch{return!1}},cp=(n,e)=>{try{localStorage.setItem(fp(n,e),"1")}catch{}};function pp(n){let e=Ku.get("p");if(e){n(e);return}At(lo(),t=>n(t.exists()?t.data().poll:null),()=>n(null))}function ew(){let n=zt("#main"),e=null;pp(t=>{e&&e();let r=mi[t];if(!r){n.replaceChildren(Bu("\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B1\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE \u03B5\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7 \u03C3\u03C4\u03B9\u03B3\u03BC\u03AE.","\u039A\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03B1\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE \u2014 \u03B7 \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 \u03B5\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7 \u03B8\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03B9\u03C3\u03C4\u03B5\u03AF \u03B5\u03B4\u03CE \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1."));return}e=At(Tn(t),i=>{let s=i.exists()?i.data():{open:!1,round:1};if(!s.open){n.replaceChildren(Bu(r.title,"\u0397 \u03B5\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7 \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE. \u03A0\u03B5\u03C1\u03B9\u03BC\u03AD\u03BD\u03B5\u03C4\u03B5 \u2014 \u03B8\u03B1 \u03B1\u03BD\u03BF\u03AF\u03BE\u03B5\u03B9 \u03B5\u03B4\u03CE \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1."));return}if(Zv(t,s.round)){n.replaceChildren(zu(r));return}n.replaceChildren(tw(r,s.round))},()=>n.replaceChildren(Bu("\u03A0\u03C1\u03CC\u03B2\u03BB\u03B7\u03BC\u03B1 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u03C2","\u0395\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03AE \u03C3\u03B1\u03C2 \u03C3\u03C4\u03BF internet \u03BA\u03B1\u03B9 \u03B1\u03BD\u03B1\u03BD\u03B5\u03CE\u03C3\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1.")))})}function Bu(n,e){return O("section",{class:"card wait"},O("h2",{},n),O("p",{},e),O("div",{class:"pulse"}))}function zu(n){return O("section",{class:"card thanks"},O("div",{class:"tick"},"\u2713"),O("h2",{},"\u0395\u03C5\u03C7\u03B1\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD\u03BC\u03B5!"),O("p",{},"\u0397 \u03B1\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03AE \u03C3\u03B1\u03C2 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5. \u0394\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B1 \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03C3\u03C4\u03B7\u03BD \u03BF\u03B8\u03CC\u03BD\u03B7 \u03C4\u03B7\u03C2 \u03B1\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1\u03C2."),O("p",{class:"muted"},n.title))}function tw(n,e){let t=O("form",{class:"card"});t.append(O("p",{class:"eyebrow"},n.unit||""),O("h2",{},n.title));let r={};n.type==="single"?n.options.forEach((u,l)=>{let d=O("input",{type:"radio",name:"a",value:l,id:`o${l}`,onchange:()=>{r.a=l,a()}});t.append(O("label",{class:"opt",for:`o${l}`},d,O("span",{class:"letter"},dp[l]),O("span",{},u)))}):n.type==="items"?(r.a=n.items.map(()=>null),n.items.forEach((u,l)=>{let d=O("fieldset",{class:"item"},O("legend",{},`${l+1}. ${u}`)),g=O("div",{class:"chips"});n.options.forEach((E,T)=>{let b=`i${l}o${T}`;g.append(O("input",{type:"radio",name:`i${l}`,id:b,value:T,onchange:()=>{r.a[l]=T,a()}}),O("label",{for:b,class:"chip"},E))}),d.append(g),t.append(d)})):n.fields.forEach((u,l)=>{let d=O("textarea",{maxlength:280,rows:3,id:`t${l}`,oninput:g=>{r[`t${l}`]=g.target.value,a()}});t.append(O("label",{class:"field",for:`t${l}`},u),d)});let i=O("button",{type:"submit",class:"btn",disabled:!0},"\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE"),s=O("p",{class:"msg"});t.append(i,s);function a(){let u;n.type==="single"?u=Number.isInteger(r.a):n.type==="items"?u=r.a.every(Number.isInteger):u=n.fields.some((l,d)=>(r[`t${d}`]||"").trim().length>0),i.disabled=!u}return t.addEventListener("submit",async u=>{u.preventDefault(),i.disabled=!0,s.textContent="\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u2026";let l={poll:n.id,round:e,ts:rf()};n.type==="text"?n.fields.forEach((d,g)=>{let E=(r[`t${g}`]||"").trim().slice(0,280);E&&(l[`t${g}`]=E)}):l.a=r.a;try{await Zn(Cs($t,"votes",`${n.id}_${e}_${Xv()}`),l),cp(n.id,e),t.replaceWith(zu(n))}catch(d){if(d.code==="permission-denied"){let g=await uu(Tn(n.id)).catch(()=>null);g&&g.exists()&&g.data().open?(cp(n.id,e),t.replaceWith(zu(n))):s.textContent="\u0397 \u03B5\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7 \u03AD\u03BA\u03BB\u03B5\u03B9\u03C3\u03B5 \u03C0\u03C1\u03B9\u03BD \u03C3\u03C4\u03B1\u03BB\u03B5\u03AF \u03B7 \u03B1\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B7."}else s.textContent="\u0394\u03B5\u03BD \u03C3\u03C4\u03AC\u03BB\u03B8\u03B7\u03BA\u03B5 \u2014 \u03B5\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03BE\u03B1\u03BD\u03B1\u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5.",i.disabled=!1}}),t}function nw(){let n=zt("#main"),e=[],t=()=>{e.forEach(r=>r()),e=[]};pp(r=>{t();let i=mi[r];if(!i){n.replaceChildren(O("section",{class:"screen-idle"},O("h1",{},"\u03A3\u03BA\u03B1\u03BD\u03AC\u03C1\u03B5\u03C4\u03B5 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03AD\u03C7\u03B5\u03C4\u03B5"),ap(pi(null),10),O("p",{class:"url"},pi(null)),O("p",{class:"muted"},"\u039A\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03B1\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE \u03C3\u03C4\u03BF \u03BA\u03B9\u03BD\u03B7\u03C4\u03CC \u2014 \u03BF\u03B9 \u03B5\u03C1\u03C9\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2 \u03B8\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1.")));return}let s=O("header",{class:"screen-head"},O("div",{},O("p",{class:"eyebrow"},i.unit||""),O("h1",{},i.title)),O("div",{class:"join"},ap(pi(Ku.get("p")?r:null),5),O("p",{class:"count"},O("b",{id:"n"},"0")," \u03B1\u03C0\u03B1\u03BD\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2"),O("p",{id:"status",class:"status"},""))),a=O("div",{class:"screen-body",id:"body"});n.replaceChildren(s,a);let u={open:!1,round:1,reveal:!1},l=[],d=null,g=null,E=()=>rw(i,u,l,d,a);e.push(At(Tn(r),T=>{let b=T.exists()?T.data():{open:!1,round:1,reveal:!1},V=b.round!==u.round||!g;u=b,zt("#status").textContent=u.open?"\u25CF \u0391\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE":"\u039A\u03BB\u03B5\u03B9\u03C3\u03C4\u03AE",zt("#status").className="status "+(u.open?"on":"off"),V&&(g&&g(),g=At(Zr(Xr($t,"votes"),qt("poll","==",r),qt("round","==",u.round)),G=>{l=G.docs.map(B=>B.data()),zt("#n").textContent=l.length,E()}),e.push(()=>g&&g())),E()})),i.compare&&mi[i.compare]&&uu(Tn(i.compare)).then(T=>{let b=T.exists()?T.data().round:1;e.push(At(Zr(Xr($t,"votes"),qt("poll","==",i.compare),qt("round","==",b)),V=>{d=V.docs.map(G=>G.data()),E()}))})})}var uo=(n,e)=>e?Math.round(100*n/e):0;function rw(n,e,t,r,i){if(i.replaceChildren(),n.type==="single"){let s=g=>{let E=n.options.map(()=>0);return g.forEach(T=>{Number.isInteger(T.a)&&T.a>=0&&T.a<E.length&&E[T.a]++}),E},a=s(t),u=t.length,l=r?s(r):null,d=r?r.length:0;l&&i.append(O("p",{class:"legend"},O("span",{class:"sw before"}),`${mi[n.compare].title.split(":")[0]} (${d})`,O("span",{class:"sw now"}),`\u03A4\u03CE\u03C1\u03B1 (${u})`)),n.options.forEach((g,E)=>{let T=O("div",{class:"bar-row"}),b=O("div",{class:"bar-label"},O("span",{class:"letter"},dp[E]),O("span",{},g));e.reveal&&n.reveal&&b.append(O("span",{class:"tag"},n.reveal[E]));let V=O("div",{class:"bars"});l&&V.append(up(uo(l[E],d),l[E],"before")),V.append(up(uo(a[E],u),a[E],"now")),T.append(b,V),i.append(T)})}else if(n.type==="items"){let s=t.length,a=O("div",{class:"items"});n.items.forEach((u,l)=>{let d=n.options.map(()=>0);t.forEach(b=>{let V=Array.isArray(b.a)?b.a[l]:null;Number.isInteger(V)&&V>=0&&V<d.length&&d[V]++});let g=[].concat(n.correct?n.correct[l]:[]),E=O("div",{class:"stack"});d.forEach((b,V)=>{let G=uo(b,s),B=O("div",{class:`seg s${V}`+(e.reveal&&g.includes(V)?" right":e.reveal?" dim":""),style:`width:${Math.max(G,0)}%`},G>=8?`${G}%`:"");E.append(B)});let T=g.reduce((b,V)=>b+d[V],0);a.append(O("div",{class:"item-row"},O("div",{class:"item-text"},O("b",{},`${l+1}. `),u,e.reveal?O("span",{class:"answer"}," \u2192 "+g.map(b=>n.options[b]).join(" / ")+`  \xB7  ${uo(T,s)}% \u03C3\u03C9\u03C3\u03C4\u03AC`):null),E))}),i.append(O("p",{class:"legend"},...n.options.map((u,l)=>[O("span",{class:`sw s${l}`}),u+"  "])),a)}else{let s=t.length,a={},u=new Set("\u03BA\u03B1\u03B9 \u03C4\u03BF\u03C5 \u03C4\u03B7\u03C2 \u03C4\u03C9\u03BD \u03C4\u03BF\u03BD \u03C4\u03B7\u03BD \u03C3\u03C4\u03BF \u03C3\u03C4\u03B7 \u03C3\u03C4\u03BF\u03BD \u03C3\u03C4\u03B7\u03BD \u03C3\u03C4\u03B1 \u03C3\u03C4\u03B9\u03C2 \u03C3\u03C4\u03BF\u03C5\u03C2 \u03B1\u03C0\u03CC \u03B3\u03B9\u03B1 \u03BC\u03B5 \u03C3\u03B5 \u03BD\u03B1 \u03B8\u03B1 \u03B4\u03B5\u03BD \u03C0\u03BF\u03C5 \u03CC\u03C4\u03B9 \u03BF\u03C4\u03B9 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03B9\u03BD\u03B1\u03B9 \u03AD\u03BD\u03B1 \u03B5\u03BD\u03B1 \u03BC\u03B9\u03B1 \u03BC\u03AF\u03B1 \u03B1\u03BB\u03BB\u03AC \u03B1\u03BB\u03BB\u03B1 \u03CC\u03C4\u03B1\u03BD \u03BF\u03C4\u03B1\u03BD \u03C0\u03B9\u03BF \u03C0\u03BF\u03BB\u03CD \u03C0\u03BF\u03BB\u03C5 \u03C4\u03BF\u03C5\u03C2 \u03C4\u03B9\u03C2 \u03C4\u03B1 \u03C4\u03BF \u03C4\u03B7 \u03BF\u03B9 \u03BF \u03B7 \u03C9\u03C2 \u03BA\u03AC\u03C4\u03B9 \u03BA\u03B1\u03C4\u03B9 \u03BC\u03B1\u03C2 \u03C3\u03B1\u03C2 \u03B5\u03BC\u03B5\u03AF\u03C2 \u03B5\u03BC\u03B5\u03B9\u03C2 \u03B1\u03C5\u03C4\u03CC \u03B1\u03C5\u03C4\u03BF \u03B1\u03C5\u03C4\u03AE \u03B1\u03C5\u03C4\u03B7 \u03CC\u03C0\u03C9\u03C2 \u03BF\u03C0\u03C9\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03B5\u03C7\u03B5\u03B9 \u03AD\u03C7\u03BF\u03C5\u03BD \u03B5\u03C7\u03BF\u03C5\u03BD \u03B3\u03B9\u03B1\u03C4\u03AF \u03B3\u03B9\u03B1\u03C4\u03B9".split(" "));t.forEach(T=>n.fields.forEach((b,V)=>{(typeof T[`t${V}`]=="string"?T[`t${V}`]:"").toLowerCase().split(/[^\p{L}\p{N}]+/u).forEach(B=>{let ee=B.normalize("NFD").replace(/[\u0300-\u036f]/g,"");ee.length<=3||u.has(ee)||(a[ee]||(a[ee]=[0,B]),a[ee][0]++)})}));let l=Object.values(a).sort((T,b)=>b[0]-T[0]).slice(0,24),d=l.length?l[0][0]:1,g=O("div",{class:"cloud"},l.map(([T,b])=>O("span",{style:`font-size:${18+34*T/d}px`},b))),E=O("div",{class:"answers"});t.slice().sort((T,b)=>(b.ts?.seconds||0)-(T.ts?.seconds||0)).slice(0,30).forEach(T=>{let b=O("div",{class:"answer-card"});n.fields.forEach((V,G)=>{let B=T[`t${G}`];typeof B=="string"&&B&&b.append(O("p",{},n.fields.length>1?O("b",{},V.split(" ")[0]+" \xB7 "):null,B))}),E.append(b)}),i.append(s?g:O("p",{class:"muted"},"\u03A0\u03B5\u03C1\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B9\u03C2 \u03C0\u03C1\u03CE\u03C4\u03B5\u03C2 \u03B1\u03C0\u03B1\u03BD\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2\u2026"),E)}}function up(n,e,t){return O("div",{class:"bar "+t},O("div",{class:"fill",style:`width:${n}%`}),O("span",{class:"val"},`${n}% \xB7 ${e}`))}function iw(){let n=Uu(hp);rr&&oo(n,"http://127.0.0.1:9099",{disableWarnings:!0}),rr&&(window.__emuLogin=t=>Ou(n,Gt.credential(JSON.stringify({sub:"u"+t.length,email:t,email_verified:!0}))));let e=zt("#main");Vu(n,t=>{if(!t){e.replaceChildren(O("section",{class:"card"},O("h2",{},"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03B4\u03B9\u03B4\u03AC\u03C3\u03BA\u03BF\u03C5\u03C3\u03B1\u03C2"),O("p",{},"\u03A3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC Google "+(op||"")+" \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B1\u03BD\u03BF\u03AF\u03B3\u03B5\u03C4\u03B5 \u03BA\u03B1\u03B9 \u03BD\u03B1 \u03BA\u03BB\u03B5\u03AF\u03BD\u03B5\u03C4\u03B5 \u03B5\u03C1\u03C9\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2."),O("button",{class:"btn",onclick:()=>Fu(n,new Gt).catch(r=>$u(r.message))},"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BC\u03B5 Google")));return}if((t.email||"").toLowerCase()!==op){e.replaceChildren(O("section",{class:"card"},O("h2",{},"\u03A7\u03C9\u03C1\u03AF\u03C2 \u03B4\u03B9\u03BA\u03B1\u03AF\u03C9\u03BC\u03B1"),O("p",{},`\u039F \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC\u03C2 ${t.email} \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE\u03C2.`),O("button",{class:"btn ghost",onclick:()=>ao(n)},"\u0391\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7")));return}sw(e,n)})}function $u(n){let e=zt("#toast");e&&(e.textContent=n,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),4e3))}function sw(n,e){let t=O("div",{class:"admin-list"}),r=O("p",{class:"current"},"\u03A4\u03C1\u03AD\u03C7\u03BF\u03C5\u03C3\u03B1 \u03B5\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7: \u2014");n.replaceChildren(O("section",{class:"card admin-top"},O("div",{},O("h2",{},"\u03A0\u03AF\u03BD\u03B1\u03BA\u03B1\u03C2 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5"),r,O("p",{class:"muted"},"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03C5\u03C2 \u03C6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2 (\u03AD\u03BD\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03CC\u03BB\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03B5\u03C1\u03C9\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2): ",O("a",{href:pi(null),target:"_blank"},pi(null)))),O("div",{class:"admin-actions"},O("a",{class:"btn",href:Gu()+"screen.html"+(rr?"?emu":""),target:"_blank"},"\u039F\u03B8\u03CC\u03BD\u03B7 \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE\u03C2"),O("button",{class:"btn ghost",onclick:async()=>{await Zn(lo(),{poll:null});for(let s of ju)await Zn(Tn(s.id),{open:!1},{merge:!0});$u("\u0388\u03BA\u03BB\u03B5\u03B9\u03C3\u03B1\u03BD \u03CC\u03BB\u03B5\u03C2 \u03BF\u03B9 \u03B5\u03C1\u03C9\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2.")}},"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03CC\u03BB\u03C9\u03BD"),O("button",{class:"btn ghost",onclick:()=>ao(e)},"\u0391\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7"))),t),At(lo(),s=>{let a=s.exists()?mi[s.data().poll]:null;r.textContent="\u03A4\u03C1\u03AD\u03C7\u03BF\u03C5\u03C3\u03B1 \u03B5\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7: "+(a?a.title:"\u2014")});let i=null;for(let s of ju){s.unit!==i&&(i=s.unit,t.append(O("h3",{class:"unit"},i||"")));let a=O("span",{class:"status off"},"\u039A\u03BB\u03B5\u03B9\u03C3\u03C4\u03AE"),u=O("span",{class:"n"},"0"),l=O("span",{class:"muted"},""),d={open:!1,round:1,reveal:!1},g=null,E=async b=>{try{await Zn(Tn(s.id),{round:d.round||1,...b},{merge:!0})}catch(V){$u("\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1: "+V.message)}},T=O("div",{class:"admin-row"},O("div",{class:"admin-info"},O("b",{},s.title),O("div",{class:"meta"},a," \xB7 ",u," \u03B1\u03C0\u03B1\u03BD\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2 \xB7 ",l," \xB7 ",O("code",{},s.id))),O("div",{class:"admin-btns"},O("button",{class:"btn small",onclick:async()=>{await E({open:!0}),await Zn(lo(),{poll:s.id})}},"\u0386\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1"),O("button",{class:"btn small ghost",onclick:()=>E({open:!1})},"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF"),s.reveal||s.correct?O("button",{class:"btn small ghost",onclick:()=>E({reveal:!d.reveal})},"\u0391\u03C0\u03BF\u03BA\u03AC\u03BB\u03C5\u03C8\u03B7"):null,O("button",{class:"btn small ghost",onclick:()=>{confirm("\u039D\u03AD\u03BF\u03C2 \u03B3\u03CD\u03C1\u03BF\u03C2; \u039F\u03B9 \u03C0\u03B1\u03BB\u03B9\u03AD\u03C2 \u03B1\u03C0\u03B1\u03BD\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2 \u03BA\u03C1\u03B1\u03C4\u03B9\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE, \u03B1\u03BB\u03BB\u03AC \u03B7 \u03BF\u03B8\u03CC\u03BD\u03B7 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03B1\u03C0\u03CC \u03C4\u03BF \u03BC\u03B7\u03B4\u03AD\u03BD.")&&E({round:(d.round||1)+1,open:!1,reveal:!1})}},"\u039D\u03AD\u03BF\u03C2 \u03B3\u03CD\u03C1\u03BF\u03C2"),O("a",{class:"btn small ghost",href:Gu()+"screen.html?p="+s.id+(rr?"&emu":""),target:"_blank"},"\u039F\u03B8\u03CC\u03BD\u03B7"),O("button",{class:"btn small ghost",onclick:()=>ow(s)},"CSV")));t.append(T),At(Tn(s.id),b=>{d=b.exists()?b.data():{open:!1,round:1,reveal:!1},a.textContent=d.open?"\u25CF \u0391\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE":"\u039A\u03BB\u03B5\u03B9\u03C3\u03C4\u03AE",a.className="status "+(d.open?"on":"off"),l.textContent=`\u03B3\u03CD\u03C1\u03BF\u03C2 ${d.round||1}`+(d.reveal?" \xB7 \u03B1\u03C0\u03BF\u03BA\u03AC\u03BB\u03C5\u03C8\u03B7":""),g&&g(),g=At(Zr(Xr($t,"votes"),qt("poll","==",s.id),qt("round","==",d.round||1)),V=>u.textContent=V.size)})}}async function ow(n){let e=await tf(Zr(Xr($t,"votes"),qt("poll","==",n.id))),t=u=>`"${String(u??"").replace(/"/g,'""')}"`,r=["\u03B3\u03CD\u03C1\u03BF\u03C2","\u03C7\u03C1\u03CC\u03BD\u03BF\u03C2"];n.type==="single"?r.push("\u03B1\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B7"):n.type==="items"?r.push(...n.items.map((u,l)=>`\u03B5\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7 ${l+1}`)):r.push(...n.fields);let i=[r.map(t).join(",")];e.docs.map(u=>u.data()).sort((u,l)=>u.round-l.round||(u.ts?.seconds||0)-(l.ts?.seconds||0)).forEach(u=>{let l=[u.round,u.ts?new Date(u.ts.seconds*1e3).toISOString():""];n.type==="single"?l.push(n.options[u.a]??""):n.type==="items"?n.items.forEach((d,g)=>l.push(n.options[(u.a||[])[g]]??"")):n.fields.forEach((d,g)=>l.push(u[`t${g}`]||"")),i.push(l.map(t).join(","))});let s=new Blob(["\uFEFF"+i.join(`\r
`)],{type:"text/csv;charset=utf-8"}),a=O("a",{href:URL.createObjectURL(s),download:`${n.id}.csv`});document.body.append(a),a.click(),a.remove()}document.querySelectorAll("[data-course]").forEach(n=>n.textContent=window.COURSE_TITLE||"");var qu=document.body.dataset.page;!window.FIREBASE_CONFIG||String(window.FIREBASE_CONFIG.apiKey).includes("\u03A3\u03A5\u039C\u03A0\u039B\u0397\u03A1\u03A9\u03A3\u03A4\u0395")?zt("#main").replaceChildren(O("section",{class:"card"},O("h2",{},"\u039B\u03B5\u03AF\u03C0\u03BF\u03C5\u03BD \u03BF\u03B9 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2"),O("p",{},"\u03A3\u03C5\u03BC\u03C0\u03BB\u03B7\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1 \u03C4\u03BF\u03C5 Firebase \u03C3\u03C4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF config.js."))):qu==="vote"?ew():qu==="screen"?nw():qu==="admin"&&iw();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
