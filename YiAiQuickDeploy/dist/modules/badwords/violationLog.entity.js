'use strict';var _0x54b25b=_0xe36c;(function(_0x1b471c,_0x38b2fb){var _0x584ccf=_0xe36c,_0x1826ec=_0x1b471c();while(!![]){try{var _0x55d232=parseInt(_0x584ccf(0x150))/0x1*(-parseInt(_0x584ccf(0x13b))/0x2)+-parseInt(_0x584ccf(0x152))/0x3*(-parseInt(_0x584ccf(0x149))/0x4)+-parseInt(_0x584ccf(0x14e))/0x5*(parseInt(_0x584ccf(0x139))/0x6)+-parseInt(_0x584ccf(0x144))/0x7+-parseInt(_0x584ccf(0x136))/0x8*(parseInt(_0x584ccf(0x13a))/0x9)+parseInt(_0x584ccf(0x146))/0xa*(-parseInt(_0x584ccf(0x14b))/0xb)+parseInt(_0x584ccf(0x133))/0xc*(parseInt(_0x584ccf(0x14f))/0xd);if(_0x55d232===_0x38b2fb)break;else _0x1826ec['push'](_0x1826ec['shift']());}catch(_0x5935e2){_0x1826ec['push'](_0x1826ec['shift']());}}}(_0x1626,0x58940));function _0x1626(){var _0x32db3d=['4355897IytdOC','object','3510ZXemzQ','decorate','__esModule','448424EmbSWN','length','11YzjTDb','getOwnPropertyDescriptor','违规内容','515UFfApI','26VSMtPZ','1RQhmzN','content','6JbCDOD','function','typeCn','违规检测失败于哪个平台','prototype','8301288YghdUS','__metadata','design:type','520ZGQyif','Column','ViolationLogEntity','13296LPntGx','15219OReRZw','568318eZymKF','text','userId','BaseEntity','metadata','用户id','typeOriginCn','words','defineProperty'];_0x1626=function(){return _0x32db3d;};return _0x1626();}function _0xe36c(_0xae39b4,_0x57b188){var _0x1626ad=_0x1626();return _0xe36c=function(_0xe36cee,_0x5f1a47){_0xe36cee=_0xe36cee-0x131;var _0x1a325d=_0x1626ad[_0xe36cee];return _0x1a325d;},_0xe36c(_0xae39b4,_0x57b188);}var __decorate=this&&this['__decorate']||function(_0x4acff8,_0x43506a,_0xddb57a,_0x2f318b){var _0x420c31=_0xe36c,_0x5f178e=arguments['length'],_0x7ac9b2=_0x5f178e<0x3?_0x43506a:_0x2f318b===null?_0x2f318b=Object[_0x420c31(0x14c)](_0x43506a,_0xddb57a):_0x2f318b,_0x2b3e9a;if(typeof Reflect===_0x420c31(0x145)&&typeof Reflect[_0x420c31(0x147)]==='function')_0x7ac9b2=Reflect['decorate'](_0x4acff8,_0x43506a,_0xddb57a,_0x2f318b);else{for(var _0x293b00=_0x4acff8[_0x420c31(0x14a)]-0x1;_0x293b00>=0x0;_0x293b00--)if(_0x2b3e9a=_0x4acff8[_0x293b00])_0x7ac9b2=(_0x5f178e<0x3?_0x2b3e9a(_0x7ac9b2):_0x5f178e>0x3?_0x2b3e9a(_0x43506a,_0xddb57a,_0x7ac9b2):_0x2b3e9a(_0x43506a,_0xddb57a))||_0x7ac9b2;}return _0x5f178e>0x3&&_0x7ac9b2&&Object[_0x420c31(0x143)](_0x43506a,_0xddb57a,_0x7ac9b2),_0x7ac9b2;},__metadata=this&&this[_0x54b25b(0x134)]||function(_0x8ed647,_0x5c5c5c){var _0x2972aa=_0x54b25b;if(typeof Reflect===_0x2972aa(0x145)&&typeof Reflect[_0x2972aa(0x13f)]===_0x2972aa(0x153))return Reflect[_0x2972aa(0x13f)](_0x8ed647,_0x5c5c5c);};Object['defineProperty'](exports,_0x54b25b(0x148),{'value':!![]}),exports[_0x54b25b(0x138)]=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require('../../common/entity/baseEntity');let ViolationLogEntity=class ViolationLogEntity extends baseEntity_1[_0x54b25b(0x13e)]{};__decorate([(0x0,typeorm_1[_0x54b25b(0x137)])({'comment':_0x54b25b(0x140)}),__metadata(_0x54b25b(0x135),Number)],ViolationLogEntity[_0x54b25b(0x132)],_0x54b25b(0x13d),void 0x0),__decorate([(0x0,typeorm_1[_0x54b25b(0x137)])({'comment':_0x54b25b(0x14d),'type':_0x54b25b(0x13c)}),__metadata('design:type',String)],ViolationLogEntity['prototype'],_0x54b25b(0x151),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'敏感词','type':'text'}),__metadata(_0x54b25b(0x135),String)],ViolationLogEntity[_0x54b25b(0x132)],_0x54b25b(0x142),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'违规类型'}),__metadata('design:type',String)],ViolationLogEntity[_0x54b25b(0x132)],_0x54b25b(0x154),void 0x0),__decorate([(0x0,typeorm_1[_0x54b25b(0x137)])({'comment':_0x54b25b(0x131)}),__metadata('design:type',String)],ViolationLogEntity[_0x54b25b(0x132)],_0x54b25b(0x141),void 0x0),ViolationLogEntity=__decorate([(0x0,typeorm_1['Entity'])({'name':'violation_log'})],ViolationLogEntity),exports[_0x54b25b(0x138)]=ViolationLogEntity;