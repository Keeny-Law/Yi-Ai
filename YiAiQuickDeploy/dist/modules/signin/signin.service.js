'use strict';const _0x3dc759=_0x1111;(function(_0x221579,_0x4eaa3a){const _0x57291e=_0x1111,_0x15b005=_0x221579();while(!![]){try{const _0x373cab=-parseInt(_0x57291e(0xe7))/0x1*(parseInt(_0x57291e(0xe3))/0x2)+parseInt(_0x57291e(0xd0))/0x3+-parseInt(_0x57291e(0xd9))/0x4*(parseInt(_0x57291e(0xda))/0x5)+parseInt(_0x57291e(0xc5))/0x6*(-parseInt(_0x57291e(0x104))/0x7)+parseInt(_0x57291e(0xd3))/0x8+-parseInt(_0x57291e(0xef))/0x9*(parseInt(_0x57291e(0xca))/0xa)+parseInt(_0x57291e(0xf2))/0xb;if(_0x373cab===_0x4eaa3a)break;else _0x15b005['push'](_0x15b005['shift']());}catch(_0x5a4b8b){_0x15b005['push'](_0x15b005['shift']());}}}(_0x499c,0xaa08b));var __decorate=this&&this[_0x3dc759(0xfb)]||function(_0x297721,_0x1e7951,_0x4a1392,_0x3efe64){const _0x4c4601=_0x3dc759;var _0x8402b4=arguments['length'],_0x44c5fd=_0x8402b4<0x3?_0x1e7951:_0x3efe64===null?_0x3efe64=Object[_0x4c4601(0x100)](_0x1e7951,_0x4a1392):_0x3efe64,_0xe5e006;if(typeof Reflect==='object'&&typeof Reflect[_0x4c4601(0x101)]==='function')_0x44c5fd=Reflect['decorate'](_0x297721,_0x1e7951,_0x4a1392,_0x3efe64);else{for(var _0x2f45b5=_0x297721['length']-0x1;_0x2f45b5>=0x0;_0x2f45b5--)if(_0xe5e006=_0x297721[_0x2f45b5])_0x44c5fd=(_0x8402b4<0x3?_0xe5e006(_0x44c5fd):_0x8402b4>0x3?_0xe5e006(_0x1e7951,_0x4a1392,_0x44c5fd):_0xe5e006(_0x1e7951,_0x4a1392))||_0x44c5fd;}return _0x8402b4>0x3&&_0x44c5fd&&Object[_0x4c4601(0xc8)](_0x1e7951,_0x4a1392,_0x44c5fd),_0x44c5fd;},__metadata=this&&this[_0x3dc759(0xe0)]||function(_0x39753d,_0x2aec45){const _0x255df1=_0x3dc759;if(typeof Reflect===_0x255df1(0x105)&&typeof Reflect[_0x255df1(0x106)]===_0x255df1(0xf0))return Reflect['metadata'](_0x39753d,_0x2aec45);},__param=this&&this[_0x3dc759(0xcf)]||function(_0x5400b9,_0x56d2c6){return function(_0x268e69,_0xf86a5e){_0x56d2c6(_0x268e69,_0xf86a5e,_0x5400b9);};};Object[_0x3dc759(0xc8)](exports,_0x3dc759(0xd8),{'value':!![]}),exports[_0x3dc759(0xde)]=void 0x0;const globalConfig_service_1=require(_0x3dc759(0xee)),userBalance_service_1=require(_0x3dc759(0xf7)),common_1=require('@nestjs/common'),signIn_entity_1=require(_0x3dc759(0xdd)),typeorm_1=require('@nestjs/typeorm'),typeorm_2=require('typeorm'),date_1=require('../../common/utils/date'),user_entity_1=require('../user/user.entity'),balance_constant_1=require('../../common/constants/balance.constant');function _0x1111(_0x3d1cc2,_0x28c8ae){const _0x499c18=_0x499c();return _0x1111=function(_0x11110f,_0x5233f6){_0x11110f=_0x11110f-0xc0;let _0x5630ff=_0x499c18[_0x11110f];return _0x5630ff;},_0x1111(_0x3d1cc2,_0x28c8ae);}let SigninService=class SigninService{constructor(_0x5a7894,_0x54c53a,_0x238d4a,_0x460f9c){const _0x1cfa19=_0x3dc759;this[_0x1cfa19(0xd4)]=_0x5a7894,this[_0x1cfa19(0xe9)]=_0x54c53a,this[_0x1cfa19(0xdb)]=_0x238d4a,this[_0x1cfa19(0xd7)]=_0x460f9c;}async[_0x3dc759(0xcb)](_0x3cbd51){const _0x10cfb5=_0x3dc759,{id:_0x407c54}=_0x3cbd51[_0x10cfb5(0xfe)],_0x46e3bb=(0x0,date_1[_0x10cfb5(0xff)])(new Date())[_0x10cfb5(0xe6)](_0x10cfb5(0xf4)),_0x38c43d=await this[_0x10cfb5(0xd4)]['findOne']({'where':{'userId':_0x407c54,'signInDate':_0x46e3bb}});if(_0x38c43d)throw new common_1[(_0x10cfb5(0xfc))]('今日已签到、改天再来吧!.',common_1['HttpStatus'][_0x10cfb5(0xd5)]);const {model3Count:_0x2d0a52,model4Count:_0x374bf6,drawMjCount:_0x57662f}=await this[_0x10cfb5(0xd7)][_0x10cfb5(0xc0)]();await this[_0x10cfb5(0xd4)][_0x10cfb5(0x103)]({'userId':_0x407c54,'signInTime':new Date(),'signInDate':_0x46e3bb,'isSigned':!![]}),await this[_0x10cfb5(0xdb)]['addBalanceToUser'](_0x407c54,{'model3Count':_0x2d0a52,'model4Count':_0x374bf6,'drawMjCount':_0x57662f}),await this[_0x10cfb5(0xdb)][_0x10cfb5(0xed)]({'userId':_0x407c54,'rechargeType':balance_constant_1['RechargeType'][_0x10cfb5(0xeb)],'model3Count':_0x2d0a52,'model4Count':_0x374bf6,'drawMjCount':_0x57662f});const _0x18122b=(0x0,date_1['default'])(new Date())[_0x10cfb5(0xc6)](0x1,_0x10cfb5(0xc3))[_0x10cfb5(0xe6)](_0x10cfb5(0xf4)),_0x52ed3b=await this[_0x10cfb5(0xd4)][_0x10cfb5(0xc7)]({'where':{'userId':_0x407c54,'signInDate':_0x18122b}});if(_0x52ed3b){common_1['Logger'][_0x10cfb5(0xe4)]('用户'+_0x407c54+'昨天签到了、今天是连续签到！',_0x10cfb5(0xde));const _0x109bb9=await this['userEntity'][_0x10cfb5(0xc7)]({'where':{'id':_0x407c54}});if(!_0x109bb9)throw new common_1['HttpException']('用户不存在',common_1[_0x10cfb5(0xf3)][_0x10cfb5(0xd5)]);const {consecutiveDays:consecutiveDays=0x0}=_0x109bb9;await this['userEntity'][_0x10cfb5(0xf6)]({'id':_0x407c54},{'consecutiveDays':consecutiveDays+0x1});}else common_1[_0x10cfb5(0xd6)]['debug']('用户'+_0x407c54+'昨天没签到、今天重置天数！',_0x10cfb5(0xde)),await this[_0x10cfb5(0xe9)][_0x10cfb5(0xf6)]({'id':_0x407c54},{'consecutiveDays':0x1});return _0x10cfb5(0xf8);}async['getSigninLog'](_0xfabb4d){const _0x30f394=_0x3dc759;try{const {id:_0x2b7ba5}=_0xfabb4d[_0x30f394(0xfe)],_0x350ab2=(0x0,date_1[_0x30f394(0xff)])()[_0x30f394(0xdf)](_0x30f394(0xc4))['format']('YYYY-MM-DD\x20HH:mm:ss'),_0x465cd6=(0x0,date_1['default'])()[_0x30f394(0xec)]('month')['format'](_0x30f394(0xce)),_0x441607=this[_0x30f394(0xd4)][_0x30f394(0xc9)](_0x30f394(0xea)),_0x465667=await _0x441607[_0x30f394(0xd2)]('signin.signInDate\x20as\x20signInDate,\x20signin.isSigned\x20as\x20isSigned')[_0x30f394(0xf5)](_0x30f394(0xe5),{'userId':_0xfabb4d[_0x30f394(0xfe)]['id']})['andWhere'](_0x30f394(0xfa),{'firstDay':_0x350ab2})[_0x30f394(0xf5)]('signin.signInTime\x20<=\x20:lastDay',{'lastDay':_0x465cd6})[_0x30f394(0xd1)](),_0x27a1f9=new Date(_0x350ab2),_0x2b0f77=new Date(_0x465cd6),_0x11e296=[],_0x377e33=new Date(_0x27a1f9);while(_0x377e33<=_0x2b0f77){_0x11e296[_0x30f394(0xfd)]((0x0,date_1['default'])(new Date(_0x377e33))[_0x30f394(0xe6)]('YYYY-MM-DD')),_0x377e33[_0x30f394(0xdc)](_0x377e33[_0x30f394(0xc2)]()+0x1);}const _0x4ec954=[];for(const _0x203374 of _0x11e296){const _0x228440=_0x465667['find'](_0x1e4fc6=>_0x1e4fc6[_0x30f394(0x102)]===_0x203374);!_0x228440?_0x4ec954[_0x30f394(0xfd)]({'signInDate':_0x203374,'isSigned':![]}):(_0x228440['isSigned']=!![],_0x4ec954[_0x30f394(0xfd)](_0x228440));}return _0x4ec954;}catch(_0x3f770b){console['log'](_0x30f394(0xcd),_0x3f770b);throw new common_1[(_0x30f394(0xfc))](_0x30f394(0xe1),common_1[_0x30f394(0xf3)]['BAD_REQUEST']);}}};SigninService=__decorate([(0x0,common_1[_0x3dc759(0xe2)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(signIn_entity_1['SigninEntity'])),__param(0x1,(0x0,typeorm_1[_0x3dc759(0xe8)])(user_entity_1['UserEntity'])),__metadata(_0x3dc759(0xcc),[typeorm_2[_0x3dc759(0xf1)],typeorm_2[_0x3dc759(0xf1)],userBalance_service_1[_0x3dc759(0xc1)],globalConfig_service_1[_0x3dc759(0xf9)]])],SigninService),exports[_0x3dc759(0xde)]=SigninService;function _0x499c(){const _0x416cc1=['Logger','globalConfigService','__esModule','1306096uhzjRD','5EoLdbF','userBalanceService','setDate','./signIn.entity','SigninService','startOf','__metadata','获取签到数据失败！','Injectable','600670GtFNdX','debug','signin.userId\x20=\x20:userId','format','2psCFgd','InjectRepository','userEntity','signin','SIGN_IN','endOf','saveRecordRechargeLog','../globalConfig/globalConfig.service','81nZpKYX','function','Repository','13690127mJzWZo','HttpStatus','YYYY-MM-DD','andWhere','update','../userBalance/userBalance.service','Sign\x20in\x20successful.','GlobalConfigService','signin.signInTime\x20>=\x20:firstDay','__decorate','HttpException','push','user','default','getOwnPropertyDescriptor','decorate','signInDate','save','11459WOBgsk','object','metadata','getSignatureGiftConfig','UserBalanceService','getDate','day','month','234FefnEv','subtract','findOne','defineProperty','createQueryBuilder','816110jFYQwN','sign','design:paramtypes','error:\x20','YYYY-MM-DD\x20HH:mm:ss','__param','1156863vTEbBs','getRawMany','select','6334536VQUvwy','signinEntity','BAD_REQUEST'];_0x499c=function(){return _0x416cc1;};return _0x499c();}