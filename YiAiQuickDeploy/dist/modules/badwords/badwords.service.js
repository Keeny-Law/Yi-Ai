'use strict';const _0xb7f907=_0x2c5e;(function(_0x251244,_0x451331){const _0x2e12fd=_0x2c5e,_0x43bd6f=_0x251244();while(!![]){try{const _0x16f244=parseInt(_0x2e12fd(0x1aa))/0x1*(-parseInt(_0x2e12fd(0x207))/0x2)+-parseInt(_0x2e12fd(0x1af))/0x3+parseInt(_0x2e12fd(0x1b6))/0x4*(-parseInt(_0x2e12fd(0x1ef))/0x5)+-parseInt(_0x2e12fd(0x1c5))/0x6*(-parseInt(_0x2e12fd(0x204))/0x7)+parseInt(_0x2e12fd(0x1d2))/0x8*(-parseInt(_0x2e12fd(0x1e8))/0x9)+-parseInt(_0x2e12fd(0x19f))/0xa+-parseInt(_0x2e12fd(0x1cd))/0xb*(-parseInt(_0x2e12fd(0x1f9))/0xc);if(_0x16f244===_0x451331)break;else _0x43bd6f['push'](_0x43bd6f['shift']());}catch(_0x4dd844){_0x43bd6f['push'](_0x43bd6f['shift']());}}}(_0x5ae7,0x97b1d));function _0x2c5e(_0x164b54,_0x388042){const _0x5ae770=_0x5ae7();return _0x2c5e=function(_0x2c5eaa,_0x4ba1d7){_0x2c5eaa=_0x2c5eaa-0x19a;let _0x8a4cac=_0x5ae770[_0x2c5eaa];return _0x8a4cac;},_0x2c5e(_0x164b54,_0x388042);}var __decorate=this&&this[_0xb7f907(0x1b8)]||function(_0x11f2c2,_0x24eb77,_0x49042a,_0xbc9210){const _0x1c266a=_0xb7f907;var _0x360254=arguments['length'],_0x561fb9=_0x360254<0x3?_0x24eb77:_0xbc9210===null?_0xbc9210=Object['getOwnPropertyDescriptor'](_0x24eb77,_0x49042a):_0xbc9210,_0x332457;if(typeof Reflect===_0x1c266a(0x1c4)&&typeof Reflect[_0x1c266a(0x1c2)]===_0x1c266a(0x1d1))_0x561fb9=Reflect[_0x1c266a(0x1c2)](_0x11f2c2,_0x24eb77,_0x49042a,_0xbc9210);else{for(var _0x1e77a3=_0x11f2c2['length']-0x1;_0x1e77a3>=0x0;_0x1e77a3--)if(_0x332457=_0x11f2c2[_0x1e77a3])_0x561fb9=(_0x360254<0x3?_0x332457(_0x561fb9):_0x360254>0x3?_0x332457(_0x24eb77,_0x49042a,_0x561fb9):_0x332457(_0x24eb77,_0x49042a))||_0x561fb9;}return _0x360254>0x3&&_0x561fb9&&Object[_0x1c266a(0x1da)](_0x24eb77,_0x49042a,_0x561fb9),_0x561fb9;},__metadata=this&&this[_0xb7f907(0x1bb)]||function(_0x9c8b9a,_0x5e957b){const _0x311094=_0xb7f907;if(typeof Reflect===_0x311094(0x1c4)&&typeof Reflect[_0x311094(0x1e0)]==='function')return Reflect[_0x311094(0x1e0)](_0x9c8b9a,_0x5e957b);},__param=this&&this[_0xb7f907(0x1dd)]||function(_0x4c6823,_0x2839a4){return function(_0x53896a,_0x1c75a8){_0x2839a4(_0x53896a,_0x1c75a8,_0x4c6823);};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['BadwordsService']=void 0x0;function _0x5ae7(){const _0x425d1d=['axios','violationCount','您提交的信息中包含','findOne','您提交的内容中包含','getSensitiveConfig','decorate','百度云检测','object','318VqxMpw','log','queryBadWords','检测失败','删除敏感词成功','badWordsEntity','update','Repository','192291ETYNxE','violationCount\x20+\x201','code','post','function','542536RETDLc','application/json','Injectable','default','ViolationLogEntity','更新敏感词成功','status','您提交的信息中包含违规的内容、我们已对您的账户进行标记、请合规使用！','defineProperty','data','word_list','__param','where','userEntity','metadata','word','https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token=','GlobalConfigService','avatar','extractContent','的信息、我们已对您账号进行标记、请合规使用！','删除敏感词失败','117nuDXqq','nineaiCheckBadWords','design:paramtypes','NineAi检测','execute','stringify','敏感词已存在,请检查您的提交信息','97980jlCRLE','msg','HttpException','addBadWord','push','violationLogEntity','baidu','hideString','loadBadWords','delete','2244Tfefym','baiduCheckBadWords','affected','email','typeorm','super','userInfo','delBadWords','baiduTextAccessToken','ASC','Like','148085GjhpOf','typeOriginCn','findAndCount','18LhEqyr','BAD_REQUEST','customSensitiveWords','forEach','includes','UserEntity','user','nineai','userId','的内容、我们已对您的账户进行标记、请合规使用！','../../common/utils','application/x-www-form-urlencoded','9326570QkDUfg','join','map','id\x20=\x20:userId','recordUserBadWords','category','formarTips','error:\x20','length','checkBadWordsByConfig','badWords','31026VETPBt','find','自定义检测','@nestjs/common','save','1498647sUtksb','@nestjs/typeorm','HttpStatus','set','./badwords.entity','violation','onModuleInit','240PLGRqx','keyword','__decorate','createQueryBuilder','globalConfigService','__metadata'];_0x5ae7=function(){return _0x425d1d;};return _0x5ae7();}const globalConfig_service_1=require('../globalConfig/globalConfig.service'),common_1=require(_0xb7f907(0x1ad)),badwords_entity_1=require(_0xb7f907(0x1b3)),typeorm_1=require(_0xb7f907(0x1fd)),typeorm_2=require(_0xb7f907(0x1b0)),axios_1=require(_0xb7f907(0x1bc)),violationLog_entity_1=require('./violationLog.entity'),user_entity_1=require('../user/user.entity'),utils_1=require(_0xb7f907(0x19d));let BadwordsService=class BadwordsService{constructor(_0x329973,_0x656e85,_0x568629,_0x40a14b){const _0x421ac0=_0xb7f907;this[_0x421ac0(0x1ca)]=_0x329973,this[_0x421ac0(0x1f4)]=_0x656e85,this['userEntity']=_0x568629,this[_0x421ac0(0x1ba)]=_0x40a14b,this[_0x421ac0(0x1a9)]=[];}async[_0xb7f907(0x1b5)](){const _0x4a9188=_0xb7f907;this[_0x4a9188(0x1f7)]();}async[_0xb7f907(0x209)](_0x36f409,_0x3ec436){const _0x294d7a=_0xb7f907,_0x3a204a=[];for(let _0x502373=0x0;_0x502373<this[_0x294d7a(0x1a9)][_0x294d7a(0x1a7)];_0x502373++){const _0x5cab79=this['badWords'][_0x502373];_0x36f409[_0x294d7a(0x20b)](_0x5cab79)&&_0x3a204a[_0x294d7a(0x1f3)](_0x5cab79);}if(_0x3a204a['length']){await this[_0x294d7a(0x1a3)](_0x3ec436,_0x36f409,_0x3a204a,['自定义'],_0x294d7a(0x1ac));const _0x54bce7=_0x294d7a(0x1d9);throw new common_1[(_0x294d7a(0x1f1))](_0x54bce7,common_1[_0x294d7a(0x1b1)][_0x294d7a(0x208)]);}}async['checkBadWords'](_0x41159d,_0x5addf4){const _0x2d334b=_0xb7f907,_0x3a79a9=await this[_0x2d334b(0x1ba)][_0x2d334b(0x1c1)]();_0x3a79a9&&await this[_0x2d334b(0x1a8)](_0x41159d,_0x3a79a9,_0x5addf4),await this['customSensitiveWords'](_0x41159d,_0x5addf4);}async[_0xb7f907(0x1a8)](_0x368145,_0x45bf29,_0x19a198){const _0x272b8a=_0xb7f907,{useType:_0x536363}=_0x45bf29;_0x536363===_0x272b8a(0x1f5)&&await this[_0x272b8a(0x1fa)](_0x368145,_0x45bf29[_0x272b8a(0x201)],_0x19a198),_0x536363===_0x272b8a(0x19a)&&await this['nineaiCheckBadWords'](_0x368145,_0x45bf29,_0x19a198);}['extractContent'](_0x31b4c2){const _0xc68474=/存在(.*?)不合规/,_0x3a6837=_0x31b4c2['match'](_0xc68474);return _0x3a6837?_0x3a6837[0x1]:'';}async['baiduCheckBadWords'](_0x46dc7e,_0x4ea9a1,_0x1f51e4){const _0x1b374f=_0xb7f907;if(!_0x4ea9a1)return;const _0xe7efed=_0x1b374f(0x1e2)+_0x4ea9a1+'}',_0x117336={'Content-Type':_0x1b374f(0x19e),'Accept':'application/json'},_0x2aba6d=await axios_1[_0x1b374f(0x1d5)][_0x1b374f(0x1d0)](_0xe7efed,{'text':_0x46dc7e},{'headers':_0x117336}),{conclusion:_0x30641a,error_code:_0x381f3a,error_msg:_0x53b92f,conclusionType:_0x4b61f9,data:_0x198e01}=_0x2aba6d[_0x1b374f(0x1db)];_0x381f3a&&console['log']('百度文本检测出现错误、请查看配置信息:\x20',_0x53b92f);if(_0x4b61f9!==0x1){const _0x592c49=[...new Set(_0x198e01['map'](_0x1a2d14=>this[_0x1b374f(0x1e5)](_0x1a2d14[_0x1b374f(0x1f0)])))];await this[_0x1b374f(0x1a3)](_0x1f51e4,_0x46dc7e,['***'],_0x592c49,_0x1b374f(0x1c3));const _0x120b5c=_0x1b374f(0x1be)+_0x592c49[_0x1b374f(0x1a0)](',')+_0x1b374f(0x19c);throw new common_1['HttpException'](_0x120b5c,common_1['HttpStatus'][_0x1b374f(0x208)]);}}async[_0xb7f907(0x1e9)](_0x5889c7,_0x1d1cfc,_0x2dd7e2){const _0x31f0b6=_0xb7f907;var _0x5a16b9;const {nineaiBuiltInSensitiveApiBase:_0x53b1bc,nineaiBuiltInSensitiveAuthKey:_0x105af1}=_0x1d1cfc;if(!_0x53b1bc||!_0x105af1)return;const _0x1042ea=await axios_1[_0x31f0b6(0x1d5)][_0x31f0b6(0x1d0)](_0x53b1bc,{'content':_0x5889c7},{'headers':{'Content-Type':_0x31f0b6(0x1d3),'Authorization':_0x105af1}});if(!_0x1042ea[_0x31f0b6(0x1db)])return;if(_0x1042ea['data'][_0x31f0b6(0x1cf)]!=='0'){const {msg:msg=_0x31f0b6(0x1c8)}=_0x1042ea['data'];throw new common_1[(_0x31f0b6(0x1f1))]('敏感词检测\x20|\x20'+msg,common_1['HttpStatus'][_0x31f0b6(0x208)]);}if(_0x1042ea['data'][_0x31f0b6(0x1dc)]&&((_0x5a16b9=_0x1042ea['data'][_0x31f0b6(0x1dc)])===null||_0x5a16b9===void 0x0?void 0x0:_0x5a16b9[_0x31f0b6(0x1a7)])){const _0x31d430=[...new Set(_0x1042ea['data'][_0x31f0b6(0x1dc)]['map'](_0x54d6e6=>_0x54d6e6[_0x31f0b6(0x1b7)]))],_0x168b29=[...new Set(_0x1042ea[_0x31f0b6(0x1db)]['word_list'][_0x31f0b6(0x1a1)](_0x5b4abd=>_0x5b4abd['category']))];await this['recordUserBadWords'](_0x2dd7e2,_0x5889c7,_0x31d430,_0x168b29,_0x31f0b6(0x1eb));const _0x4c9407=this[_0x31f0b6(0x1a5)](_0x1042ea[_0x31f0b6(0x1db)][_0x31f0b6(0x1dc)]);throw new common_1[(_0x31f0b6(0x1f1))](_0x4c9407,common_1[_0x31f0b6(0x1b1)][_0x31f0b6(0x208)]);}}[_0xb7f907(0x1a5)](_0x2a87ee){const _0x13b702=_0xb7f907,_0x17c77d=_0x2a87ee[_0x13b702(0x1a1)](_0x114897=>_0x114897[_0x13b702(0x1a4)]),_0x40efef=[...new Set(_0x17c77d)];return _0x13b702(0x1c0)+_0x40efef[_0x13b702(0x1a0)](',')+_0x13b702(0x1e6);}async[_0xb7f907(0x1f7)](){const _0x30a9e2=_0xb7f907,_0x165a35=await this[_0x30a9e2(0x1ca)][_0x30a9e2(0x1ab)]({'where':{'status':0x1},'select':[_0x30a9e2(0x1e1)]});this['badWords']=_0x165a35['map'](_0x24208c=>_0x24208c[_0x30a9e2(0x1e1)]);}async[_0xb7f907(0x1c7)](_0x1d323e){const _0x26f9e6=_0xb7f907,{page:page=0x1,size:size=0x1f4,word:_0x40e99b,status:_0x5c58a7}=_0x1d323e,_0x2a0fc1={};[0x0,0x1,'0','1']['includes'](_0x5c58a7)&&(_0x2a0fc1[_0x26f9e6(0x1d8)]=_0x5c58a7),_0x40e99b&&(_0x2a0fc1[_0x26f9e6(0x1e1)]=(0x0,typeorm_1[_0x26f9e6(0x203)])('%'+_0x40e99b+'%'));const [_0x2d3603,_0x17e647]=await this['badWordsEntity'][_0x26f9e6(0x206)]({'where':_0x2a0fc1,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x26f9e6(0x202)}});return{'rows':_0x2d3603,'count':_0x17e647};}async[_0xb7f907(0x200)](_0x6de3ed){const _0x34d621=_0xb7f907,_0x4268e9=await this[_0x34d621(0x1ca)][_0x34d621(0x1bf)]({'where':{'id':_0x6de3ed['id']}});if(!_0x4268e9)throw new common_1[(_0x34d621(0x1f1))]('敏感词不存在,请检查您的提交信息',common_1[_0x34d621(0x1b1)][_0x34d621(0x208)]);const _0x4dd243=await this[_0x34d621(0x1ca)][_0x34d621(0x1f8)]({'id':_0x6de3ed['id']});if(_0x4dd243[_0x34d621(0x1fb)]>0x0)return await this[_0x34d621(0x1f7)](),_0x34d621(0x1c9);else throw new common_1[(_0x34d621(0x1f1))](_0x34d621(0x1e7),common_1[_0x34d621(0x1b1)][_0x34d621(0x208)]);}async['updateBadWords'](_0x258c95){const _0x3eb920=_0xb7f907,{id:_0x1190bb,word:_0x4816df,status:_0x26b5e2}=_0x258c95,_0x176266=await this[_0x3eb920(0x1ca)]['findOne']({'where':{'word':_0x4816df}});if(_0x176266)throw new common_1[(_0x3eb920(0x1f1))]('敏感词已经存在了、请勿重复添加',common_1['HttpStatus'][_0x3eb920(0x208)]);const _0x2e8ded=await this['badWordsEntity'][_0x3eb920(0x1cb)]({'id':_0x1190bb},{'word':_0x4816df,'status':_0x26b5e2});if(_0x2e8ded['affected']>0x0)return await this[_0x3eb920(0x1f7)](),_0x3eb920(0x1d7);else throw new common_1[(_0x3eb920(0x1f1))]('更新敏感词失败',common_1[_0x3eb920(0x1b1)]['BAD_REQUEST']);}async[_0xb7f907(0x1f2)](_0xf92e3c){const _0x5c2910=_0xb7f907,{word:_0x3372cd}=_0xf92e3c,_0x36f084=await this[_0x5c2910(0x1ca)]['findOne']({'where':{'word':_0x3372cd}});if(_0x36f084)throw new common_1[(_0x5c2910(0x1f1))](_0x5c2910(0x1ee),common_1[_0x5c2910(0x1b1)][_0x5c2910(0x208)]);return await this[_0x5c2910(0x1ca)][_0x5c2910(0x1ae)]({'word':_0x3372cd}),await this['loadBadWords'](),'添加敏感词成功';}async[_0xb7f907(0x1a3)](_0x4d4ce5,_0x1325ae,_0x32dba3,_0x1d379b,_0x5a9b71){const _0x284c32=_0xb7f907,_0x3f8b17={'userId':_0x4d4ce5,'content':_0x1325ae,'words':JSON[_0x284c32(0x1ed)](_0x32dba3),'typeCn':JSON[_0x284c32(0x1ed)](_0x1d379b),'typeOriginCn':_0x5a9b71};try{await this[_0x284c32(0x1df)][_0x284c32(0x1b9)]()[_0x284c32(0x1cb)](user_entity_1['UserEntity'])[_0x284c32(0x1b2)]({'violationCount':()=>_0x284c32(0x1ce)})[_0x284c32(0x1de)](_0x284c32(0x1a2),{'userId':_0x4d4ce5})[_0x284c32(0x1ec)](),await this['violationLogEntity'][_0x284c32(0x1ae)](_0x3f8b17);}catch(_0x134b1f){console[_0x284c32(0x1c6)](_0x284c32(0x1a6),_0x134b1f);}}async[_0xb7f907(0x1b4)](_0x752ec6,_0x552ec3){const _0x5c4abb=_0xb7f907,{role:_0x47f713}=_0x752ec6[_0x5c4abb(0x20d)],{page:page=0x1,size:size=0xa,userId:_0x2901dd,typeOriginCn:_0x1f9abb}=_0x552ec3,_0x573792={};_0x2901dd&&(_0x573792['userId']=_0x2901dd),_0x1f9abb&&(_0x573792[_0x5c4abb(0x205)]=_0x1f9abb);const [_0x1d4170,_0x3b912e]=await this['violationLogEntity'][_0x5c4abb(0x206)]({'where':_0x573792,'skip':(page-0x1)*size,'take':size,'order':{'id':'DESC'}}),_0x34d88d=[...new Set(_0x1d4170[_0x5c4abb(0x1a1)](_0x3d27c5=>_0x3d27c5[_0x5c4abb(0x19b)]))],_0x3fce61=await this[_0x5c4abb(0x1df)][_0x5c4abb(0x1ab)]({'where':{'id':(0x0,typeorm_1['In'])(_0x34d88d)},'select':['id',_0x5c4abb(0x1e4),'username',_0x5c4abb(0x1fc),_0x5c4abb(0x1bd),'status']});return _0x1d4170[_0x5c4abb(0x20a)](_0x219ee8=>{const _0x23099d=_0x5c4abb,_0x182e47=_0x3fce61[_0x23099d(0x1ab)](_0x343725=>_0x343725['id']===_0x219ee8[_0x23099d(0x19b)]);_0x47f713!==_0x23099d(0x1fe)&&(_0x182e47[_0x23099d(0x1fc)]=(0x0,utils_1[_0x23099d(0x1f6)])(_0x182e47[_0x23099d(0x1fc)])),_0x219ee8[_0x23099d(0x1ff)]=_0x182e47;}),{'rows':_0x1d4170,'count':_0x3b912e};}};BadwordsService=__decorate([(0x0,common_1[_0xb7f907(0x1d4)])(),__param(0x0,(0x0,typeorm_2['InjectRepository'])(badwords_entity_1['BadWordsEntity'])),__param(0x1,(0x0,typeorm_2['InjectRepository'])(violationLog_entity_1[_0xb7f907(0x1d6)])),__param(0x2,(0x0,typeorm_2['InjectRepository'])(user_entity_1[_0xb7f907(0x20c)])),__metadata(_0xb7f907(0x1ea),[typeorm_1[_0xb7f907(0x1cc)],typeorm_1[_0xb7f907(0x1cc)],typeorm_1[_0xb7f907(0x1cc)],globalConfig_service_1[_0xb7f907(0x1e3)]])],BadwordsService),exports['BadwordsService']=BadwordsService;