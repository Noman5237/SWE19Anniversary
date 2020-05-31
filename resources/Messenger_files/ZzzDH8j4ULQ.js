if (self.CavalryLogger) { CavalryLogger.start_js(["NLiOm"]); }

__d("FBRTCParticipantCallState",[],(function(a,b,c,d,e,f){e.exports={UNKNOWN:0,DISCONNECTED:1,NO_ANSWER:2,REJECTED:3,UNREACHABLE:4,CONNECTION_DROPPED:5,CONTACTING:6,RINGING:7,CONNECTING:8,CONNECTED:9,PARTICIPANT_LIMIT_REACHED:10,IN_ANOTHER_CALL:11,RING_TYPE_UNSUPPORTED:12,PENDING_APPROVAL:13,APPROVED:14,FAILED_APPROVAL:15,HANGUP_IN_WAITING_ROOM:16}}),null);
__d("FBRTCConfig",["CurrentUser"],(function(a,b,c,d,e,f){var g=!1,h=null,i=null,j=0,k={};a={setConfig:function(a){var b=a.isVCEndpointCall,c=a.meetingID,d=a.meetingPassword,e=a.peerID;a=a.serverConfig;g=b;h=c;i=d;j=e;k=a},isVCEndpointCall:function(){return g},getMeetingID:function(){return h},getMeetingPassword:function(){return i},getPeerID:function(){return j},statsInterpreterConfig:function(){return{bad_score_count:3,frr_weight:800,plr_weight:500,rtt_weight:2,score_threshold:1e3}},unsupportedBrowserUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.unsupported_browser)return k.troubleshooting_urls.unsupported_browser;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/919532078125908";else return"https://www.facebook.com/help/211644178877843"},userMediaErrorUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_error)return k.troubleshooting_urls.user_media_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},userMediaPermissionErrorUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_permission_error)return k.troubleshooting_urls.user_media_permission_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},isMessengerDotCom:function(){return k.is_messenger_dot_com},useMessengerCallUI:function(){return k.messenger_call_ui},shouldUseHDVideoQuality:function(){return k.use_hd_video_quality},shouldCreateDataChannel:function(){return k.data_channel},disableURLManager:function(){return k.disable_url_manager}};e.exports=a}),null);
__d("WebEndCallSummaryHeartbeatTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WebEndCallSummaryHeartbeatLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebEndCallSummaryHeartbeatLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebEndCallSummaryHeartbeatLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActiveConn=function(a){this.$1.active_conn=a;return this};c.setAppEventTimes=function(a){this.$1.app_event_times=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setCallID=function(a){this.$1.call_id=a;return this};c.setCallType=function(a){this.$1.call_type=a;return this};c.setCaller=function(a){this.$1.caller=a;return this};c.setClientPushPhase=function(a){this.$1.client_push_phase=a;return this};c.setClientVersion=function(a){this.$1.client_version=a;return this};c.setConfName=function(a){this.$1.conf_name=a;return this};c.setConnAvgrtt=function(a){this.$1.conn_avgrtt=a;return this};c.setConnDtls=function(a){this.$1.conn_dtls=a;return this};c.setConnMaxrtt=function(a){this.$1.conn_maxrtt=a;return this};c.setConnMinrtt=function(a){this.$1.conn_minrtt=a;return this};c.setConnRelayIP=function(a){this.$1.conn_relay_ip=a;return this};c.setDeviceCharged=function(a){this.$1.device_charged=a;return this};c.setEndConnType=function(a){this.$1.end_conn_type=a;return this};c.setEndEndCallReasonString=function(a){this.$1.end_end_call_reason_string=a;return this};c.setEndEndCallSubreasonString=function(a){this.$1.end_end_call_subreason_string=a;return this};c.setEndRemoteEnded=function(a){this.$1.end_remote_ended=a;return this};c.setEscP2pCallID=function(a){this.$1.esc_p2p_call_id=a;return this};c.setEscStateTimes=function(a){this.$1.esc_state_times=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setHeartbeatSeqNum=function(a){this.$1.heartbeat_seq_num=a;return this};c.setJoinWithSid=function(a){this.$1.join_with_sid=a;return this};c.setLogLevel=function(a){this.$1.log_level=a;return this};c.setOpenCount=function(a){this.$1.open_count=a;return this};c.setPeerID=function(a){this.$1.peer_id=a;return this};c.setPerfxDownlinkMegabits=function(a){this.$1.perfx_downlink_megabits=a;return this};c.setPerfxEffectiveConnectionType=function(a){this.$1.perfx_effective_connection_type=a;return this};c.setPerfxNumCores=function(a){this.$1.perfx_num_cores=a;return this};c.setPerfxRamGb=function(a){this.$1.perfx_ram_gb=a;return this};c.setPerfxRttMs=function(a){this.$1.perfx_rtt_ms=a;return this};c.setReceiverAvgrtt=function(a){this.$1.receiver_avgrtt=a;return this};c.setReceiverBytes=function(a){this.$1.receiver_bytes=a;return this};c.setReceiverDbeAvg=function(a){this.$1.receiver_dbe_avg=a;return this};c.setReceiverDecCng=function(a){this.$1.receiver_dec_cng=a;return this};c.setReceiverDecNormal=function(a){this.$1.receiver_dec_normal=a;return this};c.setReceiverDecPlc=function(a){this.$1.receiver_dec_plc=a;return this};c.setReceiverDecPlcCng=function(a){this.$1.receiver_dec_plc_cng=a;return this};c.setReceiverIce=function(a){this.$1.receiver_ice=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setReceiverIceG0=function(a){this.$1.receiver_ice_g0=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setReceiverNeteqCalls=function(a){this.$1.receiver_neteq_calls=a;return this};c.setReceiverPlost=function(a){this.$1.receiver_plost=a;return this};c.setReceiverPrecv=function(a){this.$1.receiver_precv=a;return this};c.setSenderAvgrtt=function(a){this.$1.sender_avgrtt=a;return this};c.setSenderBytes=function(a){this.$1.sender_bytes=a;return this};c.setSenderCodec=function(a){this.$1.sender_codec=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setSenderMaxrtt=function(a){this.$1.sender_maxrtt=a;return this};c.setSenderMinrtt=function(a){this.$1.sender_minrtt=a;return this};c.setSenderPlost=function(a){this.$1.sender_plost=a;return this};c.setSenderPsent=function(a){this.$1.sender_psent=a;return this};c.setSenderUbeAvg=function(a){this.$1.sender_ube_avg=a;return this};c.setServInfo=function(a){this.$1.serv_info=a;return this};c.setSignalingDuration=function(a){this.$1.signaling_duration=a;return this};c.setSignalingNewTimeFromStart=function(a){this.$1.signaling_new_time_from_start=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setSignalingStartTime=function(a){this.$1.signaling_start_time=a;return this};c.setSignalingTimeFromStart=function(a){this.$1.signaling_time_from_start=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setSignalingTrigger=function(a){this.$1.signaling_trigger=a;return this};c.setTabIsBackgrounded=function(a){this.$1.tab_is_backgrounded=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVer=function(a){this.$1.ver=a;return this};c.setVidEscTimes=function(a){this.$1.vid_esc_times=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setVideoBweAvgEncBitrate=function(a){this.$1.video_bwe_avg_enc_bitrate=a;return this};c.setVideoBweAvgRetransBitrate=function(a){this.$1.video_bwe_avg_retrans_bitrate=a;return this};c.setVideoBweAvgSendBw=function(a){this.$1.video_bwe_avg_send_bw=a;return this};c.setVideoBweAvgTransBitrate=function(a){this.$1.video_bwe_avg_trans_bitrate=a;return this};c.setVideoLd=function(a){this.$1.video_ld=a;return this};c.setVideoRd=function(a){this.$1.video_rd=a;return this};c.setVideoReceiverDecBytes=function(a){this.$1.video_receiver_dec_bytes=a;return this};c.setVideoReceiverDecFrame=function(a){this.$1.video_receiver_dec_frame=a;return this};c.setVideoReceiverDecTime=function(a){this.$1.video_receiver_dec_time=a;return this};c.setVideoReceiverDecTimeAllStreams=function(a){this.$1.video_receiver_dec_time_all_streams=a;return this};c.setVideoReceiverDname=function(a){this.$1.video_receiver_dname=a;return this};c.setVideoReceiverFrcnt=function(a){this.$1.video_receiver_frcnt=a;return this};c.setVideoReceiverFrd=function(a){this.$1.video_receiver_frd=a;return this};c.setVideoReceiverPlost=function(a){this.$1.video_receiver_plost=a;return this};c.setVideoReceiverPrecv=function(a){this.$1.video_receiver_precv=a;return this};c.setVideoReceiverQps=function(a){this.$1.video_receiver_qps=a;return this};c.setVideoSenderEname=function(a){this.$1.video_sender_ename=a;return this};c.setVideoSenderEqps=function(a){this.$1.video_sender_eqps=a;return this};c.setVideoSenderFrames=function(a){this.$1.video_sender_frames=a;return this};c.setVideoSenderPlost=function(a){this.$1.video_sender_plost=a;return this};c.setVideoSenderPsent=function(a){this.$1.video_sender_psent=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={active_conn:!0,app_event_times:!0,call_id:!0,call_type:!0,caller:!0,client_push_phase:!0,client_version:!0,conf_name:!0,conn_avgrtt:!0,conn_dtls:!0,conn_maxrtt:!0,conn_minrtt:!0,conn_relay_ip:!0,device_charged:!0,end_conn_type:!0,end_end_call_reason_string:!0,end_end_call_subreason_string:!0,end_remote_ended:!0,esc_p2p_call_id:!0,esc_state_times:!0,heartbeat_seq_num:!0,join_with_sid:!0,log_level:!0,open_count:!0,peer_id:!0,perfx_downlink_megabits:!0,perfx_effective_connection_type:!0,perfx_num_cores:!0,perfx_ram_gb:!0,perfx_rtt_ms:!0,receiver_avgrtt:!0,receiver_bytes:!0,receiver_dbe_avg:!0,receiver_dec_cng:!0,receiver_dec_normal:!0,receiver_dec_plc:!0,receiver_dec_plc_cng:!0,receiver_ice:!0,receiver_ice_g0:!0,receiver_neteq_calls:!0,receiver_plost:!0,receiver_precv:!0,sender_avgrtt:!0,sender_bytes:!0,sender_codec:!0,sender_maxrtt:!0,sender_minrtt:!0,sender_plost:!0,sender_psent:!0,sender_ube_avg:!0,serv_info:!0,signaling_duration:!0,signaling_new_time_from_start:!0,signaling_start_time:!0,signaling_time_from_start:!0,signaling_trigger:!0,tab_is_backgrounded:!0,time:!0,vc:!0,ver:!0,vid_esc_times:!0,video_bwe_avg_enc_bitrate:!0,video_bwe_avg_retrans_bitrate:!0,video_bwe_avg_send_bw:!0,video_bwe_avg_trans_bitrate:!0,video_ld:!0,video_rd:!0,video_receiver_dec_bytes:!0,video_receiver_dec_frame:!0,video_receiver_dec_time:!0,video_receiver_dec_time_all_streams:!0,video_receiver_dname:!0,video_receiver_frcnt:!0,video_receiver_frd:!0,video_receiver_plost:!0,video_receiver_precv:!0,video_receiver_qps:!0,video_sender_ename:!0,video_sender_eqps:!0,video_sender_frames:!0,video_sender_plost:!0,video_sender_psent:!0,weight:!0};e.exports=a}),null);
__d("FBRTCHeartbeatLogger",["PerfXSharedFields","WebEndCallSummaryHeartbeatTypedLogger","gkx","throttle"],(function(a,b,c,d,e,f){"use strict";c=30*1e3;var g=new Map(),h=new Set(),i=new Map();function j(a){return(a=g.get(a))!=null?a:0}function k(a){var b=j(a);g.set(a,b+1);return b}function l(a,c){c===void 0&&(c=!1);var d=a.getHeartbeatData(),e=a.getExtraInfo(),f=k(a.callID),g=b("PerfXSharedFields").getCommonData();a={heartbeat_seq_num:f,tab_is_backgrounded:e.is_backgrounded===!0,perfx_num_cores:g.num_cores,perfx_ram_gb:g.ram_gb,perfx_downlink_megabits:g.downlink_megabits,perfx_effective_connection_type:g.effective_connection_type,perfx_rtt_ms:g.rtt_ms!=null?Math.floor(g.rtt_ms):null,call_id:a.callID,peer_id:a.peerID,ver:d.ver,log_level:d.log_level,caller:d.caller,call_type:d.call_type,active_conn:d.active_conn,app_event_times:d.app_event_times,conf_name:d.conf_name,join_with_sid:d.join_with_sid,esc_p2p_call_id:d.esc_p2p_call_id,esc_state_times:d.esc_state_times,vid_esc_times:d.vid_esc_times,serv_info:d.serv_info,conn_avgrtt:d.conn.avgrtt,conn_dtls:d.conn.dtls,conn_maxrtt:d.conn.maxrtt,conn_minrtt:d.conn.minrtt,conn_relay_ip:d.conn.relay_ip,open_count:d.open_count,signaling_duration:d.signaling.duration,signaling_new_time_from_start:d.signaling.new_time_from_start,signaling_start_time:d.signaling.start_time,signaling_time_from_start:d.signaling.time_from_start,signaling_trigger:d.signaling.trigger,sender_avgrtt:d.sender.avgrtt,sender_bytes:d.sender.bytes,sender_codec:d.sender.codec,sender_maxrtt:d.sender.maxrtt,sender_minrtt:d.sender.minrtt,sender_plost:d.sender.plost,sender_psent:d.sender.psent,sender_ube_avg:d.sender.ube_avg,receiver_avgrtt:d.receiver.avgrtt,receiver_bytes:d.receiver.bytes,receiver_dbe_avg:d.receiver.dbe_avg,receiver_dec_cng:d.receiver.dec_cng,receiver_dec_normal:d.receiver.dec_normal,receiver_dec_plc:d.receiver.dec_plc,receiver_dec_plc_cng:d.receiver.dec_plc_cng,receiver_ice:d.receiver.ice,receiver_ice_g0:d.receiver.ice_g0,receiver_neteq_calls:d.receiver.neteq_calls,receiver_plost:d.receiver.plost,receiver_precv:d.receiver.precv,end_conn_type:d.end.conn_type,end_end_call_reason_string:d.end.end_call_reason_string,end_end_call_subreason_string:d.end.call_subreason_string,end_remote_ended:d.end.remote_ended,video_ld:d.video.ld,video_rd:d.video.rd,video_bwe_avg_enc_bitrate:(f=d.video.bwe)==null?void 0:f.avg_enc_bitrate,video_bwe_avg_retrans_bitrate:(e=d.video.bwe)==null?void 0:e.avg_retrans_bitrate,video_bwe_avg_send_bw:(g=d.video.bwe)==null?void 0:g.avg_send_bw,video_bwe_avg_trans_bitrate:(a=d.video.bwe)==null?void 0:a.avg_trans_bitrate,video_receiver_dec_bytes:(f=d.video.receiver)==null?void 0:f.dec_bytes,video_receiver_dec_frame:(e=d.video.receiver)==null?void 0:e.dec_frame,video_receiver_dec_time:(g=d.video.receiver)==null?void 0:g.dec_time,video_receiver_dec_time_all_streams:(a=d.video.receiver)==null?void 0:a.dec_time_all_streams,video_receiver_dname:(f=d.video.receiver)==null?void 0:f.dname,video_receiver_frcnt:(e=d.video.receiver)==null?void 0:e.frcnt,video_receiver_frd:(g=d.video.receiver)==null?void 0:g.frd,video_receiver_plost:(a=d.video.receiver)==null?void 0:a.plost,video_receiver_precv:(f=d.video.receiver)==null?void 0:f.precv,video_receiver_qps:(e=d.video.receiver)==null?void 0:e.qps,video_sender_ename:(g=d.video.sender)==null?void 0:g.ename,video_sender_eqps:(a=d.video.sender)==null?void 0:a.eqps,video_sender_frames:(f=d.video.sender)==null?void 0:f.frames,video_sender_plost:(e=d.video.sender)==null?void 0:e.plost,video_sender_psent:(g=d.video.sender)==null?void 0:g.psent,client_push_phase:d.push_phase,device_charged:d.device_charged,client_version:d.client_version};f=new(b("WebEndCallSummaryHeartbeatTypedLogger"))().updateData(a);b("gkx")("1503824")?f.logVital():c?f.logImmediately():f.logVital()}var m=b("throttle")(function(a){var b=i.get(a);b&&(l(b),i["delete"](a))},c);function n(a,b){b===void 0&&(b=!1),l(a,b),i["delete"](a.callID)}function a(a,b){j(a.callID)===0?(n(a),m(a.callID)):b==="pageunhide"||b==="pagehide"?n(a,b==="pagehide"):a.wasCallEnded()?h.has(a.callID)||(n(a),h.add(a.callID)):(i.set(a.callID,a),m(a.callID))}e.exports={logCallSummaryHeartbeat:a}}),null);
__d("RTWebExperiments",["FBRTCConfig","qex"],(function(a,b,c,d,e,f){"use strict";a={enableCallCollisionFix:function(){return b("FBRTCConfig").isVCEndpointCall()?!1:b("qex")._("771668")},passOfferWithWindowMessages:function(){return b("FBRTCConfig").isVCEndpointCall()?!1:b("qex")._("771669")}};e.exports=a}),null);
__d("FBRTCLocalMessageQueue",["CacheStorage","FBRTCConstants","RTWebExperiments"],(function(a,b,c,d,e,f){var g="localstorage",h="RTC_",i="offer",j="offer_msg",k="data_",l=30*1e3,m=new Map(),n={STORAGE_TYPE:g,PREFIX:h,OFFER_KEY:i,OFFER_SUFFIX:j,DATA_KEY_PREFIX:k,CACHE_LIFE:l,clearQueue:function(a){m.set(a,new Map())},writePeerOfferToStorage:function(a,b){a=n.getStorage(a,j);n._storeData(a,i,b)},getPeerOfferFromStorage:function(a){a=n.getStorage(a,j);return n._getData(a,i)},clearPeerOfferFromStorage:function(a){a=n.getStorage(a,j);a.remove(i)},pluckOffer:function(a){if(b("RTWebExperiments").passOfferWithWindowMessages()){var c=m.get(a)||new Map(),d=c.get(i);c["delete"](i);return d||null}else{c=n.getPeerOfferFromStorage(a);n.clearPeerOfferFromStorage(a);return c||null}},enqueueMessage:function(a,c,d){c=k+c.toString();var e=m.get(a)||new Map();d.msg_type===b("FBRTCConstants").PayloadType.OFFER&&(c=i);e.set(c,d);m.set(a,e)},drainQueue:function(a,b){var c=m.get(a)||new Map();for(var c=c,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;f[0];f=f[1];b(f)}m.set(a,new Map())},_storeData:function(a,b,c){c={__t:Date.now(),__d:c};a.set(b,c)},_getData:function(a,b){var c=a.get(b);if(c&&n._isValid(c))return c.__d;else c&&a.remove(b);return null},_getAndRemoveData:function(a,b){var c=n._getData(a,b);if(c!==null){a.remove(b);return c}return null},_isValid:function(a){return Date.now()-a.__t<l},getStorage:function(a,c){return new(b("CacheStorage"))(g,""+h+a+"_"+c+"_")}};e.exports=n}),null);
__d("FBRTCMessageListener",["invariant","Bootloader","FBMqttChannel","FBRTCConstants","FBRTCLocalMessageQueue","FBRTCSupport","RTWebExperiments","Run","gkx","guid","mixInEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h=b("FBRTCConstants").ChildWindowMessageType,i=45*1e3,j=[],k=null,l=null,m,n=null,o=null,p=!1,q=!1,r=null,s=null,t=null,u=null,v=null,w=[];a={logCheckpoint:function(a){b("Bootloader").loadModules(["RTWebUserActionLogger"],function(b){b.logCheckpoint({checkpoint:a})},"FBRTCMessageListener")},init:function(a,c){var d=this;if(p)return;p=!0;q=a;r=c;this.subscribeToMqtt();if(b("FBRTCSupport").isWebrtcSupported()&&window.addEventListener){var e=a?this._handleWindowMessageToChild.bind(this):this._handleWindowMessageToParent.bind(this);window.addEventListener("message",e,!1)}a&&this._connectToParentWindow(c);b("Run").onUnload(function(){d.unsubscribeToAll()})},subscribeToMqtt:function(){var a=this;w.push("/webrtc");b("FBMqttChannel").subscribe("/webrtc",function(b){b=JSON.parse(b);a._onMessage(b)});w.push("/rtc_multi");b("FBMqttChannel").subscribe("/rtc_multi",function(b){b=JSON.parse(b);a._onMultiwayMessage(b)});w.push("/onevc");b("FBMqttChannel").subscribe("/onevc",function(b){b=JSON.parse(b);a._onOneVCMessage(b)})},unsubscribeToAll:function(){w.forEach(function(a){b("FBMqttChannel").unsubscribeAll(a)})},setParentWindowNonce:function(a){n=a},generateNewNonce:function(){o=b("guid")();return o},setMultiwayMessageHandler:function(a){s&&g(0,1011),s=a},removeMultiwayMessageHandler:function(){s=null},_emit:function(a,b){this.emit(a,b)},_onMultiwayMessage:function(a){this._emit("multiwayMessageReceived",a),s&&s(a)},setOneVCMessegeHandler:function(a){t==null&&(t=a)},_onOneVCMessage:function(a){t!=null&&t(a)},setMessageHandler:function(a){k&&g(0,1013);k=a;while(j.length)k(j.shift())},removeMessageHandler:function(){k=null},removeOneVCMessageHandler:function(){t=null},setParentWindowStartCallHandler:function(a){u=a},_onMessage:function(a){a.from&&(a.from=a.from.toString()),this._emit("messageReceived",a),k?k(a):j.push(a),q||this._passOrQueueToChildWindow(a)},_connectToParentWindow:function(a){var b=this;if(window.opener&&window.opener.postMessage){a={type:h.CHILD_WINDOW_READY,nonce:n,childNonce:this.generateNewNonce(),peerID:a};var c=new MessageChannel();c.port1.onmessage=function(a){b._handleWindowMessageToChild(a,!0)};window.opener.postMessage(a,window.location.origin,[c.port2])}},_verifyWindowMessage:function(a){return Boolean(a.origin===window.location.origin&&a.data&&o!==null&&a.data.nonce===o)},_verifyPortMessage:function(a){return Boolean(o!==null&&(a==null?void 0:(a=a.data)==null?void 0:a.nonce)===o)},_handleWindowMessageToParent:function(a){if(!this._verifyWindowMessage(a))return;if(a.data.type===h.CHILD_WINDOW_READY){var c=a.data,d=c.childNonce;c=c.peerID;b("gkx")("1098789")&&a.ports!=null&&Array.isArray(a.ports)&&a.ports[0]!=null&&(v=a.ports[0]);this.setParentWindowNonce(d);this._setChildWindow(a.source);this._startCallInChildWindow(c);this.generateNewNonce();this._replayQueuedMessagesToChild(c,l)}},_handleWindowMessageToChild:function(a,c){c===void 0&&(c=!1);if(c&&!this._verifyPortMessage(a)||!c&&!this._verifyWindowMessage(a))return;a.data.type===h.CHILD_WINDOW_MESSAGE&&this._onMessage(a.data.message);if(a.data.type===h.CHILD_WINDOW_START_CALL&&u){c=a.data.offer;!c&&r&&(c=b("FBRTCLocalMessageQueue").getPeerOfferFromStorage(r),c&&b("RTWebExperiments").passOfferWithWindowMessages()&&this.logCheckpoint("got_offer_from_storage_while_in_experiment"));u(c)}},_replayQueuedMessagesToChild:function(a,c){var d=this;b("FBRTCLocalMessageQueue").drainQueue(a,function(a){d._postToChildWindowMessage(c,a)})},_setChildWindow:function(a){l=a,window.clearTimeout(m),m=window.setTimeout(function(){l=null},i)},_postToChildWindowMessage:function(a,c){c={type:h.CHILD_WINDOW_MESSAGE,nonce:n,message:c};b("gkx")("1098789")&&v!=null?v.postMessage(c):a.postMessage(c,window.location.origin)},_passOrQueueToChildWindow:function(a){l&&this._postToChildWindowMessage(l,a),b("RTWebExperiments").enableCallCollisionFix()&&b("FBRTCLocalMessageQueue").enqueueMessage(a.from,a.id,a)},_startCallInChildWindow:function(a){if(l){a={type:h.CHILD_WINDOW_START_CALL,nonce:n,offer:b("RTWebExperiments").passOfferWithWindowMessages()?b("FBRTCLocalMessageQueue").pluckOffer(a):null};b("gkx")("1098789")&&v!=null?v.postMessage(a):l.postMessage(a,window.location.origin)}},listenOnce:function(a,b){this.once(a,b)}};b("mixInEventEmitter")(a,{messageReceived:!0,multiwayMessageReceived:!0});e.exports=a}),null);
__d("RTWebStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={busy:g._("Busy"),callAgain:g._("Call Again"),callEnded:g._("Call ended"),callFailed:g._("Call Failed"),callInterrupted:g._("Call Interrupted"),cannotConnect:g._("Can't connect Call"),chatLinksLeftVideoChat:g._("You left the group video chat"),chatLinkMaxParticipantsExceeded:g._("This room has the maximum number of participants. When someone leaves, you can try to join again."),clientEncryptionError:g._("Client encryption error"),close:g._("Close"),connected:g._("Connected"),connecting:g._("Connecting..."),connectionDropped:g._("Connection dropped"),connectionLost:g._("Connection lost"),contacting:g._("Contacting..."),copiedVideoChatLink:g._("Copied"),copyVideoChatLink:g._("Copy Link"),disconnected:g._("Disconnected"),dismiss:g._("Dismiss"),hangingUp:g._("Hanging up..."),inactive:g._("Call is inactive"),inAnotherCall:g._("In another call"),incomingVideoChat:g._("Incoming video chat"),invalidStreamConfiguration:g._("Too many clients connected to the room"),noAnswer:g._("No answer"),notNow:g._("Not Now"),participantLimitReached:g._("Participant limit reached"),pleaseWait:g._("Please wait..."),profilePictureAlt:g._("Profile picture"),reconnecting:g._("Reconnecting..."),redial:g._("Redial"),ringing:g._("Ringing..."),switchToWiFi:g._("Switch to Wi-Fi to complete your call"),unreachable:g._("Unreachable"),userVideoOff:function(a){return g._("{name}'s camera is off",[g._param("name",a)])},viewerVideoOff:g._("Your camera is off"),waitingForOthers:g._("Waiting for others to join...")};e.exports=a}),null);
__d("RTCUserRecord",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record({FBID:"UNDEFINED",isGuestUser:!1,isMessengerUser:!1,isPartiesUser:!1,isVideoSubscribed:!1,lastConnectedAt:0,participantState:null,pausedDownlink:!1,profilePictureUrl:null,profileUrl:null,roomLocation:null,screenStreams:b("immutable").Set(),streams:b("immutable").Set(),userName:"",userShortName:"",vanity:""});c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("RTCUser",["FBRTCConstants","FBRTCParticipantCallState","RTCUserRecord","immutable","nullthrows"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").MediaContentTypes;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.clone=function(){return new c(this.toObject())};d.setParticipantState=function(a){return(!this.participantState||this.participantState.state!==b("FBRTCParticipantCallState").CONNECTED)&&a.state===b("FBRTCParticipantCallState").CONNECTED?this.set("participantState",a).set("lastConnectedAt",Date.now()):!this.participantState||this.participantState.state!==a.state?this.set("participantState",a):this};d.getParticipantState=function(){return this.participantState&&this.participantState.state};d.hasAudio=function(){return this.getAllStreamAudioTracks().some(function(a){return a.length>0})};d.hasVideo=function(){return this.streams.some(function(a){return a.getVideoTracks().length>0})};d.hasLiveVideoTracks=function(){return this.streams.some(function(a){return a.getVideoTracks().some(function(a){return a.readyState==="live"})})};d.isAudioMuted=function(){var a=this;return!this.hasAudio()?!0:this.getAllStreamAudioTracks().every(function(b){return a.areAllTracksMuted(b)})};d.isVideoMuted=function(){var a=this;return!this.hasVideo()?!0:this.streams.every(function(b){return a.areAllTracksMuted(b.getVideoTracks())})};d.areAllTracksMuted=function(a){return!a.some(function(a){return a.enabled})};d.hasFunctioningVideoTrack=function(){return!this.hasVideo()?!1:this.streams.every(function(a){return a.getVideoTracks().some(function(a){return a.enabled&&!a.muted})})};d.toggleMuteAudio=function(a){var b=this;this.getAllStreamAudioTracks().forEach(function(c){return b.$RTCUser1(c,a)});return this.clone()};d.toggleMuteVideo=function(a){var b=this;this.streams.forEach(function(c){b.$RTCUser1(c.getVideoTracks(),a)});return this.clone()};d.stopVideo=function(){var a=this;this.streams.forEach(function(b){b.getVideoTracks().forEach(function(c){a.$RTCUser1(b.getVideoTracks(),!0),c.readyState!=="ended"&&(c.onended&&c.onended(),c.stop())})});return this.clone()};d.getAllStreamAudioTracks=function(){return this.streams.concat(this.screenStreams).map(function(a){return a.getAudioTracks()})};d.hasStream=function(){return!this.streams.isEmpty()};d.addStream=function(a){return this.set("streams",this.streams.add(b("nullthrows")(a)))};d.removeStream=function(a){return this.set("streams",this.streams["delete"](a))};d.getStream=function(){return this.hasStream()?this.streams.first():null};d.getActiveStream=function(){return this.hasStream()?this.streams.find(function(a){return"active"in a&&a.active}):null};d.replaceStream=function(a,b){return!this.streams.contains(a)?this:this.set("streams",this.streams["delete"](a).add(b))};d.removeAllStreams=function(){return this.set("streams",b("immutable").Set())};d.getScreenStream=function(){return this.screenStreams&&this.hasScreenStream()?this.screenStreams.first():null};d.hasScreenStream=function(){return!this.screenStreams.isEmpty()};d.addScreenStream=function(a){return this.set("screenStreams",this.screenStreams.add(a))};d.removeScreenStream=function(a){return this.set("screenStreams",this.screenStreams["delete"](a))};d.removeAllScreenStreams=function(){return this.set("screenStreams",b("immutable").Set())};d.replaceScreenStream=function(a,b){if(!this.screenStreams.contains(a))return this;return a===b?this:this.set("screenStreams",this.screenStreams.add(b)["delete"](a))};d.setRoomLocation=function(a){return this.set("roomLocation",a)};d.getRoomLocation=function(){return this.roomLocation};d.$RTCUser1=function(a,b){var c=b!=null?!b:this.areAllTracksMuted(a);a.forEach(function(a){return a.enabled=c})};d.getMediaTypeForTracks=function(){var a=new Map(),b=this.getScreenStream();b&&b.getVideoTracks().forEach(function(b){return a.set(b.id,g.SCREEN)});return a};d.subscribeVideo=function(){return this.set("isVideoSubscribed",!0)};d.unsubscribeVideo=function(){return this.set("isVideoSubscribed",!1)};d.setPausedDownlink=function(a){return this.set("pausedDownlink",a)};return c}(b("RTCUserRecord"));e.exports=a}),null);
__d("RTCCallTitle.react",["MercuryIDs","MercuryParticipantListRenderer","React","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){var c=a.displayViewerName,d=a.viewer,e=a.participants;a=a.className;var f=b("MercuryIDs").getParticipantIDFromUserID(d);d=Object.keys(e.toJS());d.length>1&&(d=d.filter(function(a){return a!==f||c}));d=d.map(function(a){return e.get(a)});d=new(b("MercuryParticipantListRenderer"))().setUseShortName(!1).setUseAndSeparator(!1).renderParticipantList(d);return g.jsx("span",{className:a,children:d})};e.exports=a}),null);
__d("MercuryThreadTitle_DEPRECATED.react",["fbt","MercuryIDs","MercuryParticipantListRenderer","MessengerParticipants.bs","MessengerTextWithEmoticons.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,c.state={participantNames:""},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$1=!0,this.$2(this.props)};d.componentWillUnmount=function(){this.$1=!1};d.componentDidUpdate=function(a){a!==this.props&&this.$2(this.props)};d.render=function(){return h.jsxs("span",{className:this.props.className,children:[this.props.thread.name?this.$3():this.state.participantNames,this.props.children]})};d.getTitle=function(){return this.state.participantNames};d.$3=function(){var a=this.props.thread,c=this.props.maxTitle?this.props.maxTitle<a.name.length?a.name.slice(0,this.props.maxTitle)+"...":a.name:a.name;c=h.jsx(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:c});return!a.unread_count||!this.props.showUnreadCount?c:this.$4(c,a.unread_count)};d.$2=function(a){var c=this;if(a.thread.name)return;this.setState({participantNames:""});var d=b("MercuryIDs").getParticipantIDFromUserID(a.viewer),e=a.thread.participants||[];e.length>1&&(e=e.filter(function(a){return a!=d}));b("MessengerParticipants.bs").getMulti(e,function(d){if(!c.$1)return;var f=e.map(function(a){return d[a]}),g=a.thread.custom_nickname?{}:null,i=b("MessengerTextWithEmoticons.react");if(g)for(var j in a.thread.custom_nickname)g[j]=h.jsx(i,{renderEmoticons:!0,renderEmoji:!0,text:a.thread.custom_nickname[j]});i=new(b("MercuryParticipantListRenderer"))().setUseShortName(a.useShortName).setUseAndSeparator(a.useAndSeparator).setIsNewThread(a.isNewThread).setNickname(g).renderParticipantList(f);g=a.showUnreadCount&&a.thread.unread_count?c.$4(i,a.thread.unread_count):i;c.setState({participantNames:g})})};d.$4=function(a,b){return g._("{conversation-title} ({unread-count})",[g._param("conversation-title",a),g._param("unread-count",b)])};return c}(h.Component);a.defaultProps={isNewThread:!1,showUnreadCount:!1,useShortName:!1,useAndSeparator:!1};e.exports=a}),null);
__d("MessengerRTCGroupCallContactListItem.react",["cx","fbt","ix","FBRTCParticipantCallState","Image.react","Link.react","MessengerContactImageReact.bs","React","RTWebStrings","emptyFunction"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("MessengerContactImageReact.bs").jsComponent,k=b("React"),l=(a={},a[(c=b("FBRTCParticipantCallState")).DISCONNECTED]=(d=b("RTWebStrings")).disconnected,a[c.NO_ANSWER]=d.noAnswer,a[c.REJECTED]=d.noAnswer,a[c.UNREACHABLE]=d.unreachable,a[c.CONNECTION_DROPPED]=d.connectionDropped,a[c.CONTACTING]=d.contacting,a[c.RINGING]=d.ringing,a[c.CONNECTING]=d.connecting,a[c.CONNECTED]=d.connected,a[c.PARTICIPANT_LIMIT_REACHED]=d.participantLimitReached,a[c.IN_ANOTHER_CALL]=d.inAnotherCall,a),m=32;f=function(a){var c=a.isSelected,d=a.onClick,e=a.user,f=a.dataTestID;f=a.participantState;return k.jsxs(b("Link.react"),{"aria-checked":c,className:"_4nvn",onClick:p(f)?b("emptyFunction"):d,"data-testid":void 0,role:"checkbox",children:[k.jsx(j,{className:"_4nvr",isMessengerUser:e.isMessengerUser,isPartiesUser:e.isPartiesUser,size:m,src:e.profilePictureUrl}),k.jsxs("div",{className:"_4nvs",children:[k.jsxs("div",{className:"_4nvt",children:[k.jsx("div",{className:"_4nv_",children:e.userName}),k.jsx(n,{user:e,participantState:f})]}),k.jsx(o,{isSelected:c,participantState:f})]})]})};var n=function(a){var b=a.user;a=a.participantState;if(a){a=l[a.state]||h._("Unknown");return k.jsx("div",{className:"_4nw0",children:a})}return b.vanity?k.jsxs("div",{className:"_4nw0",children:["@",b.vanity]}):null},o=function(a){var c=a.isSelected;a=a.participantState;if(p(a))return k.jsx("div",{className:"_1j79",children:h._("In call")});else if(c)return k.jsx("div",{className:"_1j79",children:k.jsx(b("Image.react"),{src:i("86852")})});return null};function p(a){if(!a)return!1;switch(a.state){case b("FBRTCParticipantCallState").CONTACTING:case b("FBRTCParticipantCallState").RINGING:case b("FBRTCParticipantCallState").CONNECTING:case b("FBRTCParticipantCallState").CONNECTED:return!0;default:return!1}}e.exports=f}),null);
__d("MessengerRTCGroupCallContactList.react",["cx","MessengerRTCGroupCallContactListItem.react","MessengerScrollableArea.react","React","immutable"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){var c=a.isParticipantSelected,d=a.onClick,e=a.remoteUsers;a=a.participantStates;var f=a===void 0?b("immutable").Map():a;a=e.map(function(a){return h.jsx(b("MessengerRTCGroupCallContactListItem.react"),{isSelected:c.get(a.FBID),onClick:function(){return d(a.FBID)},user:a,dataTestID:"RTCPickerDialogContactListItem"+a.FBID,participantState:f.get(a.FBID)},a.FBID)});return h.jsx(b("MessengerScrollableArea.react"),{className:"_12zw",children:a})};e.exports=a}),null);
__d("MessengerRTCGroupCallThreadRow.react",["cx","fbt","MercuryParticipantsImage.react","MercuryThreadTitle_DEPRECATED.react","MessengerProfileImageWrapperReact.bs","MessengerThreadImageReact.bs","React","RTCCallTitle.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("MessengerProfileImageWrapperReact.bs").jsComponent,j=b("MessengerThreadImageReact.bs").jsComponent,k=b("React"),l=function(){return k.jsx("div",{className:"_1apf",children:h._("People you add to this group video will see previous messages in this conversation.")})},m=function(){return k.jsx("div",{className:"_1ydy",children:h._("You are about to ring people who you've blocked.")})};a=function(a){var c=a.thread,d=a.displayAddMemberWarning,e=a.displayBlockedMemberWarning,f=a.participants,g=a.viewerID;babelHelpers.objectWithoutPropertiesLoose(a,["thread","displayAddMemberWarning","displayBlockedMemberWarning","participants","viewerID"]);return k.jsxs("div",{className:"_5y31",children:[c&&c.image_src?k.jsx(j,{className:"_5y32",participants:f,thread:c,viewer:g}):k.jsx(i,{className:"_5y32",size:50,showBadge:!1,children:k.jsx(b("MercuryParticipantsImage.react"),{participants:Object.keys(f.toJS()),size:50})}),k.jsxs("div",{className:"_5y34",children:[c&&c.name?k.jsx(b("MercuryThreadTitle_DEPRECATED.react"),{className:"_5y37",thread:c,viewer:g}):k.jsx(b("RTCCallTitle.react"),{className:"_5y37",participants:f,viewer:g}),d?k.jsx(l,{}):null,e?k.jsx(m,{}):null]})]})};e.exports=a}),null);