'use strict';const _0x565397=_0x27ba;(function(_0x5f1351,_0x29b9b3){const _0x1a8b6f=_0x27ba,_0x20f75f=_0x5f1351();while(!![]){try{const _0xbbd1d2=-parseInt(_0x1a8b6f(0xda))/0x1*(-parseInt(_0x1a8b6f(0xe6))/0x2)+parseInt(_0x1a8b6f(0xb2))/0x3+parseInt(_0x1a8b6f(0xdb))/0x4*(-parseInt(_0x1a8b6f(0xb6))/0x5)+parseInt(_0x1a8b6f(0xab))/0x6*(parseInt(_0x1a8b6f(0xe0))/0x7)+parseInt(_0x1a8b6f(0xbe))/0x8*(-parseInt(_0x1a8b6f(0xcf))/0x9)+parseInt(_0x1a8b6f(0xb0))/0xa+parseInt(_0x1a8b6f(0xad))/0xb;if(_0xbbd1d2===_0x29b9b3)break;else _0x20f75f['push'](_0x20f75f['shift']());}catch(_0x14ba38){_0x20f75f['push'](_0x20f75f['shift']());}}}(_0xcb2e,0x96cbc));var __decorate=this&&this['__decorate']||function(_0x514f51,_0x138951,_0x164dca,_0x201fa1){const _0x1660ea=_0x27ba;var _0x575a8b=arguments['length'],_0x30b156=_0x575a8b<0x3?_0x138951:_0x201fa1===null?_0x201fa1=Object[_0x1660ea(0xc6)](_0x138951,_0x164dca):_0x201fa1,_0xf3c4d2;if(typeof Reflect===_0x1660ea(0xbf)&&typeof Reflect['decorate']===_0x1660ea(0xcb))_0x30b156=Reflect['decorate'](_0x514f51,_0x138951,_0x164dca,_0x201fa1);else{for(var _0x4212a0=_0x514f51[_0x1660ea(0xe5)]-0x1;_0x4212a0>=0x0;_0x4212a0--)if(_0xf3c4d2=_0x514f51[_0x4212a0])_0x30b156=(_0x575a8b<0x3?_0xf3c4d2(_0x30b156):_0x575a8b>0x3?_0xf3c4d2(_0x138951,_0x164dca,_0x30b156):_0xf3c4d2(_0x138951,_0x164dca))||_0x30b156;}return _0x575a8b>0x3&&_0x30b156&&Object[_0x1660ea(0xe3)](_0x138951,_0x164dca,_0x30b156),_0x30b156;},__metadata=this&&this[_0x565397(0xc0)]||function(_0x8212ce,_0xec4dc7){const _0x3a31bf=_0x565397;if(typeof Reflect===_0x3a31bf(0xbf)&&typeof Reflect[_0x3a31bf(0xd4)]==='function')return Reflect[_0x3a31bf(0xd4)](_0x8212ce,_0xec4dc7);},__param=this&&this[_0x565397(0xc3)]||function(_0x25aa4f,_0x29f298){return function(_0x5001e2,_0x508ac4){_0x29f298(_0x5001e2,_0x508ac4,_0x25aa4f);};};Object[_0x565397(0xe3)](exports,'__esModule',{'value':!![]}),exports[_0x565397(0xd7)]=void 0x0;function _0xcb2e(){const _0x39f074=['验证码已过期','图形验证码错误、请检查填写!','@nestjs/common','createdAt','BAD_REQUEST','verifycationEntity','design:paramtypes','7840168ipaHuC','object','__metadata','验证码不存在',':CAPTCHA:','__param','Message','DESC','getOwnPropertyDescriptor','验证码错误','HttpException','验证码发送失败！','typeorm','function','../globalConfig/globalConfig.service','GlobalConfigService','../redisCache/redisCache.service','9GeFOMk','../../common/constants/status.constant','图形验证码已过期、请重新输入!','VerificationUseStatusEnum','code','metadata','@nestjs/typeorm','https://dysmsapi.aliyuncs.com','VerificationService','findOne','save','20rTdLNP','5932UwNRXb','getTime','USED','getPhoneVerifyConfig','verifyCaptcha','35FgFasJ','del','POST','defineProperty','2017-05-25','length','42318VTIZVB','Code','globalConfigService','InjectRepository','@alicloud/pop-core','used','确实必要参数错误！','stringify','data','Injectable','1127796sximaC','getNamespace','2124507rsccKG','redisCacheService','now','5140380QQNRsB','HttpStatus','535599HydcDh','Repository','expiresAt','ceil','2195CscjvV'];_0xcb2e=function(){return _0x39f074;};return _0xcb2e();}function _0x27ba(_0x7fc022,_0x1b8523){const _0xcb2ea1=_0xcb2e();return _0x27ba=function(_0x27bada,_0x3822fa){_0x27bada=_0x27bada-0xa5;let _0x570e50=_0xcb2ea1[_0x27bada];return _0x570e50;},_0x27ba(_0x7fc022,_0x1b8523);}const globalConfig_service_1=require(_0x565397(0xcc)),status_constant_1=require(_0x565397(0xd0)),typeorm_1=require(_0x565397(0xd5)),typeorm_2=require(_0x565397(0xca)),verifycation_entity_1=require('./verifycation.entity'),common_1=require(_0x565397(0xb9)),utils_1=require('../../common/utils'),redisCache_service_1=require(_0x565397(0xce)),Core=require(_0x565397(0xa5));let VerificationService=class VerificationService{constructor(_0x2db9f1,_0x1943b1,_0x1defb8){const _0x296e37=_0x565397;this['verifycationEntity']=_0x2db9f1,this['globalConfigService']=_0x1943b1,this[_0x296e37(0xae)]=_0x1defb8;}async['createVerification'](_0x45a4a5,_0x2fb27e,_0x14cec2=0x1e*0x3c){const _0x5a2c23=_0x565397,_0x218359=await this[_0x5a2c23(0xbc)][_0x5a2c23(0xd8)]({'where':{'userId':_0x45a4a5['id'],'type':_0x2fb27e},'order':{'createdAt':_0x5a2c23(0xc5)}});if(_0x218359&&_0x218359['createdAt'][_0x5a2c23(0xdc)]()+0x1*0x3c*0x3e8>Date[_0x5a2c23(0xaf)]()){const _0x27ee39=Math[_0x5a2c23(0xb5)]((_0x218359[_0x5a2c23(0xba)][_0x5a2c23(0xdc)]()+0x1*0x3c*0x3e8-Date[_0x5a2c23(0xaf)]())/0x3e8);throw new common_1[(_0x5a2c23(0xc8))](_0x27ee39+'S内不得重新发送',common_1[_0x5a2c23(0xb1)][_0x5a2c23(0xbb)]);}const _0xab6a33=(0x0,utils_1['createRandomCode'])(),_0x33c679=new Date(Date[_0x5a2c23(0xaf)]()+_0x14cec2*0x3e8),{id:_0x42a795,email:_0x5b6344}=_0x45a4a5,_0x3fd516={'userId':_0x42a795,'type':_0x2fb27e,'code':_0xab6a33,'expiresAt':_0x33c679,'email':_0x5b6344};return await this[_0x5a2c23(0xbc)][_0x5a2c23(0xd9)](_0x3fd516);}async['verifyCode']({code:_0x3c988f,id:_0x4c00aa},_0x401784){const _0x213ec0=_0x565397,_0x1a52b6=await this[_0x213ec0(0xbc)][_0x213ec0(0xd8)]({'where':{'id':_0x4c00aa,'type':_0x401784},'order':{'createdAt':_0x213ec0(0xc5)}});if(!_0x1a52b6)throw new common_1[(_0x213ec0(0xc8))](_0x213ec0(0xc1),common_1[_0x213ec0(0xb1)][_0x213ec0(0xbb)]);if(_0x1a52b6[_0x213ec0(0xa6)]===status_constant_1[_0x213ec0(0xd2)][_0x213ec0(0xdd)])throw new common_1[(_0x213ec0(0xc8))]('当前验证码已被使用！',common_1[_0x213ec0(0xb1)]['BAD_REQUEST']);else _0x1a52b6['used']=status_constant_1[_0x213ec0(0xd2)][_0x213ec0(0xdd)],await this['verifycationEntity']['update']({'id':_0x4c00aa},_0x1a52b6);if(Number(_0x1a52b6[_0x213ec0(0xd3)])!==Number(_0x3c988f))throw new common_1['HttpException'](_0x213ec0(0xc7),common_1[_0x213ec0(0xb1)]['BAD_REQUEST']);if(_0x1a52b6[_0x213ec0(0xb4)]<new Date())throw new common_1[(_0x213ec0(0xc8))](_0x213ec0(0xb7),common_1[_0x213ec0(0xb1)][_0x213ec0(0xbb)]);return _0x1a52b6;}async[_0x565397(0xdf)](_0x38eb75){const _0x46b8c7=_0x565397,{captchaId:_0x4a332d,captchaCode:_0x2c6acd}=_0x38eb75,_0x20b256=await this['globalConfigService'][_0x46b8c7(0xac)](),_0x258f3d=_0x20b256+_0x46b8c7(0xc2)+_0x4a332d,_0x5c5503=await this[_0x46b8c7(0xae)]['get']({'key':_0x258f3d});await this['redisCacheService'][_0x46b8c7(0xe1)]({'key':_0x258f3d});if(!_0x5c5503)throw new common_1[(_0x46b8c7(0xc8))](_0x46b8c7(0xd1),common_1['HttpStatus'][_0x46b8c7(0xbb)]);if(!_0x5c5503||_0x5c5503!==_0x2c6acd)throw new common_1[(_0x46b8c7(0xc8))](_0x46b8c7(0xb8),common_1[_0x46b8c7(0xb1)][_0x46b8c7(0xbb)]);}async['sendPhoneCode'](_0x1b2b5c){const _0x5a65d1=_0x565397;var _0xfb754e;const {accessKeyId:_0x114e3e,accessKeySecret:_0x56d60b,SignName:_0x254769,TemplateCode:_0x26435b}=await this[_0x5a65d1(0xe8)][_0x5a65d1(0xde)](),{phone:_0x2d47e7,code:_0x86e6f8}=_0x1b2b5c;if(!_0x2d47e7||!_0x86e6f8)throw new common_1[(_0x5a65d1(0xc8))](_0x5a65d1(0xa7),common_1[_0x5a65d1(0xb1)][_0x5a65d1(0xbb)]);const _0x2e86f6=new Core({'accessKeyId':_0x114e3e,'accessKeySecret':_0x56d60b,'endpoint':_0x5a65d1(0xd6),'apiVersion':_0x5a65d1(0xe4)}),_0x2c8d08={'PhoneNumbers':_0x2d47e7,'SignName':_0x254769,'TemplateCode':_0x26435b,'TemplateParam':JSON[_0x5a65d1(0xa8)]({'code':_0x86e6f8})},_0x3313f8={'method':_0x5a65d1(0xe2),'formatParams':![]};try{const _0x222f87=await _0x2e86f6['request']('SendSms',_0x2c8d08,_0x3313f8);if(_0x222f87[_0x5a65d1(0xe7)]==='OK')return!![];else throw new common_1[(_0x5a65d1(0xc8))](_0x222f87[_0x5a65d1(0xc4)]||'验证码发送失败！',common_1[_0x5a65d1(0xb1)][_0x5a65d1(0xbb)]);}catch(_0x3918a7){throw new common_1[(_0x5a65d1(0xc8))](((_0xfb754e=_0x3918a7===null||_0x3918a7===void 0x0?void 0x0:_0x3918a7[_0x5a65d1(0xa9)])===null||_0xfb754e===void 0x0?void 0x0:_0xfb754e[_0x5a65d1(0xc4)])||_0x5a65d1(0xc9),common_1[_0x5a65d1(0xb1)][_0x5a65d1(0xbb)]);}}};VerificationService=__decorate([(0x0,common_1[_0x565397(0xaa)])(),__param(0x0,(0x0,typeorm_1[_0x565397(0xe9)])(verifycation_entity_1['VerifycationEntity'])),__metadata(_0x565397(0xbd),[typeorm_2[_0x565397(0xb3)],globalConfig_service_1[_0x565397(0xcd)],redisCache_service_1['RedisCacheService']])],VerificationService),exports[_0x565397(0xd7)]=VerificationService;