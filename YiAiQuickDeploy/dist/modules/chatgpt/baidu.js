'use strict';const _0x3449c8=_0x5ca9;(function(_0x571628,_0x23acfb){const _0x1525c1=_0x5ca9,_0x5cc691=_0x571628();while(!![]){try{const _0x355873=parseInt(_0x1525c1(0x1e5))/0x1+parseInt(_0x1525c1(0x1dc))/0x2*(-parseInt(_0x1525c1(0x1e8))/0x3)+-parseInt(_0x1525c1(0x1d8))/0x4*(parseInt(_0x1525c1(0x1ca))/0x5)+parseInt(_0x1525c1(0x1c2))/0x6*(-parseInt(_0x1525c1(0x1c9))/0x7)+-parseInt(_0x1525c1(0x1d2))/0x8+-parseInt(_0x1525c1(0x1c6))/0x9*(parseInt(_0x1525c1(0x1db))/0xa)+parseInt(_0x1525c1(0x1e6))/0xb*(parseInt(_0x1525c1(0x1e4))/0xc);if(_0x355873===_0x23acfb)break;else _0x5cc691['push'](_0x5cc691['shift']());}catch(_0x5471d2){_0x5cc691['push'](_0x5cc691['shift']());}}}(_0x3bdf,0x2fef1));Object[_0x3449c8(0x1d3)](exports,_0x3449c8(0x1c7),{'value':!![]}),exports['sendMessageFromBaidu']=exports[_0x3449c8(0x1d6)]=void 0x0;const axios=require(_0x3449c8(0x1e0)),getApiModelMaps=()=>{const _0x578a59=_0x3449c8;let _0x23eb5f={};const _0x142327={'ERNIE-Bot':'completions','ERNIE-Bot-turbo':_0x578a59(0x1de),'BLOOMZ-7B':_0x578a59(0x1cd),'ERNIE-Bot-4':_0x578a59(0x1cc),'Llama-2-7b-chat':_0x578a59(0x1e7),'Llama-2-13b-chat':_0x578a59(0x1df),'ChatGLM2-6B-32K':_0x578a59(0x1c5),'Qianfan-Chinese-Llama-2-7B':_0x578a59(0x1e1)};return Object[_0x578a59(0x1e2)](_0x142327)['map'](_0x24c371=>{const _0x4282c4=_0x578a59;_0x23eb5f[''+_0x24c371[_0x4282c4(0x1da)]()]=_0x142327[_0x24c371];}),_0x23eb5f;};function getAccessToken(_0x2b3de7,_0x40a862){const _0x357a72=_0x3449c8;let _0x27527a=_0x357a72(0x1c1)+_0x2b3de7+_0x357a72(0x1d7)+_0x40a862;return new Promise((_0x12beef,_0x168ee0)=>{const _0x471c1d=_0x357a72;axios[_0x471c1d(0x1c8)](_0x27527a)['then'](_0x14e364=>{const _0x15de73=_0x471c1d;_0x12beef(_0x14e364[_0x15de73(0x1d1)][_0x15de73(0x1ce)]);})['catch'](_0x13dfa5=>{_0x168ee0(_0x13dfa5);});});}exports[_0x3449c8(0x1d6)]=getAccessToken;function _0x5ca9(_0x2178f0,_0x3328bb){const _0x3bdf57=_0x3bdf();return _0x5ca9=function(_0x5ca95e,_0x416208){_0x5ca95e=_0x5ca95e-0x1c1;let _0x175dba=_0x3bdf57[_0x5ca95e];return _0x175dba;},_0x5ca9(_0x2178f0,_0x3328bb);}function _0x3bdf(){const _0x1b8a97=['18wQDAQd','toString','?access_token=','chatglm2_6b_32k','978795fKvXVp','__esModule','post','517433YTrknI','54790nZepzY','end','completions_pro','bloomz_7b1','access_token','stream','https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/','data','1722960YztmGf','defineProperty','data:\x20','POST','getAccessToken','&client_secret=','28BKwRxk','application/json','toLowerCase','30MDgYJm','6QKrhJU','trim','eb-instant','llama_2_13b','axios','qianfan_chinese_llama_2_7b','keys','text','24hdiWiR','101756RDAgOk','7051583PkGOqQ','llama_2_7b','347427uybAQB','catch','https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='];_0x3bdf=function(){return _0x1b8a97;};return _0x3bdf();}function sendMessageFromBaidu(_0x2c4229,{onProgress:_0x20d6ae,accessToken:_0x8693a2,model:_0x5812c8,temperature:temperature=0.95}){const _0x199b92=_0x3449c8,_0xdaf77f=getApiModelMaps()[_0x5812c8[_0x199b92(0x1dd)]()['toLowerCase']()];return new Promise((_0x5990fc,_0x2f4953)=>{const _0x46f405=_0x199b92,_0x4f9aad=_0x46f405(0x1d0)+_0xdaf77f+_0x46f405(0x1c4)+_0x8693a2;var _0x25ef9f={'method':_0x46f405(0x1d5),'url':_0x4f9aad,'responseType':_0x46f405(0x1cf),'headers':{'Content-Type':_0x46f405(0x1d9)},'data':{'stream':!![],'messages':_0x2c4229}};axios(_0x25ef9f)['then'](_0x189466=>{const _0x3d6d8a=_0x46f405,_0x353ba8=_0x189466[_0x3d6d8a(0x1d1)];let _0x41dc9c={},_0x3ba35e='',_0x4bd891='';_0x353ba8['on'](_0x3d6d8a(0x1d1),_0x6dcb4a=>{const _0x134a1e=_0x3d6d8a,_0x53d73e=_0x6dcb4a[_0x134a1e(0x1c3)]()['split']('\x0a\x0a')['filter'](_0x24657c=>_0x24657c[_0x134a1e(0x1dd)]()!=='');for(const _0x2c59f2 of _0x53d73e){const _0x307e47=_0x2c59f2['replace'](_0x134a1e(0x1d4),'');try{const _0x1640ba=_0x3ba35e+_0x307e47,_0x1100b7=JSON['parse'](_0x1640ba);_0x3ba35e='';const {is_end:_0x20483f,result:_0x47c7a2}=_0x1100b7;_0x47c7a2&&(_0x4bd891+=_0x47c7a2),_0x20483f&&(_0x41dc9c=_0x1100b7,_0x41dc9c[_0x134a1e(0x1e3)]=_0x4bd891),_0x20d6ae(_0x1100b7);}catch(_0x9c0def){_0x3ba35e=_0x307e47;}}}),_0x353ba8['on'](_0x3d6d8a(0x1cb),()=>{_0x4bd891='',_0x3ba35e='',_0x5990fc(_0x41dc9c);});})[_0x46f405(0x1e9)](_0x3ce4e0=>{_0x2f4953(new Error(_0x3ce4e0));});});}exports['sendMessageFromBaidu']=sendMessageFromBaidu;