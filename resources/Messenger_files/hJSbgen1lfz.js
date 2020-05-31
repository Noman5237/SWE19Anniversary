if (self.CavalryLogger) { CavalryLogger.start_js(["4ViSL"]); }

__d("PlatformOAuthDialogLoginFunnelLogger",["FBLogger","URI","WebFunnelLogger"],(function(a,b,c,d,e,f){"use strict";var g,h={CLIENT_FUNNEL_VERSION:1,log:function(a,c,d,e,f){e===void 0&&(e=!0);if(null==d||""===d||e&&(null==c||""===c||0===c)){b("FBLogger")("platform_login_web_funnel_client_js").mustfix("\nerror: null_required_field\naction: "+a+"\nloggerId: "+String(d)+"\ncbt: "+String(c)+"\n        ");return}e="number"!==typeof c?parseInt(c,10):c;c=Date.now()-e;var g=i(),l=j();d=new(b("WebFunnelLogger"))("PlatformLoginWebFunnelDefinition").setAction(a).setSessionKey(d).addActionPayload("logger_id",d).addActionPayload("first_paint_time",g).addActionPayload("response_start_time",l).addActionPayload("cbt_delta",c).addFunnelPayload("client_funnel_version",h.CLIENT_FUNNEL_VERSION).addFunnelPayload("cbt",e).addFunnelPayload("gdp_type",f);if(a==="client_logged_out_init_impression"){g=k();d.addFunnelPayload("login_uri",g)}d.logVital()}},i=function(){if(window.performance){var a=window.performance.getEntriesByType("paint").filter(function(a){return"first-paint"===a.name});if(null==a||0<!a.length)return null;a=a[0].startTime+a[0].duration;return a}return null},j=function(){if(window.performance){var a=window.performance.getEntriesByType("navigation");return null==a||0<!a.length?null:a[0].responseStart}return null},k=function(){return(g||(g=b("URI"))).getRequestURI().setQueryString("").toString()};e.exports=h}),null);
__d("XOauthDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/dialog/oauth/",{app_id:{type:"Int"},auth_method:{type:"Enum",defaultValue:"",enumType:1},facebook_sdk_version:{type:"String"},calling_package_key:{type:"String"},context_uri:{type:"String"},default_audience:{type:"Enum",enumType:1},display:{type:"Enum",enumType:1},domain:{type:"String"},encoded_state:{type:"String"},fallback_redirect_uri:{type:"String"},force_confirmation:{type:"Bool",defaultValue:!1},kid_directed_site:{type:"Bool",defaultValue:!1},install_nonce:{type:"String"},legacy_override:{type:"String"},logged_out_behavior:{type:"Enum",enumType:0},logger_id:{type:"String"},native_login_button:{type:"Bool",defaultValue:!1},original_redirect_uri:{type:"String"},privacyx:{type:"String"},redirect_uri:{type:"String"},ref:{type:"String"},return_format:{type:"EnumVector",enumType:{member:1}},return_scopes:{type:"Bool",defaultValue:!1},scope:{type:"StringVector"},scope_objects:{type:"String"},scope_objects_count:{type:"String"},sdk:{type:"String"},sdk_version:{type:"String"},seen_scopes:{type:"String"},sheet_name:{type:"String"},state:{type:"String"},user_mobile_phone:{type:"String"},android_key:{type:"String"},sso:{type:"String"},sso_device:{type:"Enum",enumType:1},sso_key:{type:"String"},nonce:{type:"String"},user_code:{type:"String"},auth_type:{type:"String"},auth_nonce:{type:"String"},ret:{type:"String"},fbs:{type:"Int",defaultValue:-1},fbapp_pres:{type:"Bool",defaultValue:!1},response_type:{type:"String",defaultValue:"code"},ignore_reentry:{type:"Bool",defaultValue:!1},type:{type:"Enum",enumType:1},l_nonce:{type:"String"},cbt:{type:"Int"},ies:{type:"Bool",defaultValue:!1},cct_over_app_switch:{type:"Bool",defaultValue:!1},cct_prefetching:{type:"Bool",defaultValue:!1},page_id_account_linking:{type:"Int"}})}),null);
__d("PlatformDialogCBTSetter",["PlatformOAuthDialogLoginFunnelLogger","URI","XOauthDialogController","uuid"],(function(a,b,c,d,e,f){"use strict";var g;a={setCBTInFieldAndLog:function(a,c,d,e){if(a.value===""){var f=Date.now();a.value=f.toString()}b("PlatformOAuthDialogLoginFunnelLogger").log(c,a.value,d,!0,e)},setCBTInFormAndLog:function(a,c){var d=new(g||(g=b("URI")))(a.action),e=d.getQueryData().next;if(!e)return;e=new g(e);var f=b("XOauthDialogController").getURIBuilder().getURI().getPath().toString();f.endsWith("/")&&(f=f.substr(0,f.length-1));if(!e.getPath().includes(f))return;f=e.getQueryData().cbt;var h=e.getQueryData().logger_id;f||(f=Date.now(),e.addQueryData("cbt",f),d.addQueryData("next",e.toString()),a.action=d.toString());h||(h=b("uuid")(),e.addQueryData("logger_id",h),d.addQueryData("next",e.toString()),a.action=d.toString());b("PlatformOAuthDialogLoginFunnelLogger").log(c,f,h)}};e.exports=a}),null);