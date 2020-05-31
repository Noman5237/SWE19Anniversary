if (self.CavalryLogger) { CavalryLogger.start_js(["hKKeY"]); }

__d("EntityInteractionLogger",["BanzaiLogger","Event","ScriptPath","collectDataAttributes","pageID"],(function(a,b,c,d,e,f){"use strict";var g="EntityInteractionLoggerConfig";function h(a){a=a.target||a.srcElement;a=i(a);if(a!==!1){var c={client_time:Date.now(),event:"generic",session_id:b("pageID"),surface_tag:b("ScriptPath").getScriptPath()};Object.assign(c,a);b("BanzaiLogger").log(g,c)}}function i(a){a=b("collectDataAttributes")(a,["et"],["href"]);var c=a.normal.href;return(!c||c==="#")&&(!a.et||!a.et.click_point)?!1:a.et}a={setup:function(a){b("Event").listen(a,{click:h})},handleEvent:h};e.exports=a}),null);
__d("ImageUtils",["UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){a={hasLoaded:function(a){if(a.naturalWidth!==void 0)return a.complete&&a.width!==0;else if(a.height==20&&a.width==20&&a.complete)return!1;else if(a.complete===void 0&&b("UserAgent_DEPRECATED").webkit()<500){var c=new Image();c.src=a.src;return c.complete}return a.complete}};e.exports=a}),null);
__d("PhotoLogger",["Banzai","BanzaiScuba","Event","SubscriptionsHandler"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$1=a,this.$2={}}var c=a.prototype;c.log=function(a,c,d,e){b("Banzai").post("profile_photos_view",{photo_fbid:c,source:d,profile_id:e}),this.$2[a]||(this.$3(a),this.$2[a]=!0)};c.$3=function(a){this.$4("loading",{uri:a});var c=new(b("SubscriptionsHandler"))(),d=new Image();c.addSubscriptions(b("Event").listen(d,"load",function(){this.$4("loaded",{uri:a}),c.release()}.bind(this)),b("Event").listen(d,"error",function(){this.$4("error",{uri:a}),c.release()}.bind(this)),b("Event").listen(d,"abort",function(){this.$4("abort",{uri:a}),c.release()}.bind(this)));d.src=a};c.logEvent=function(a){this.$4(a)};c.$4=function(a,c){var d=new(b("BanzaiScuba"))("photos_client_loading",null,{addBrowserFields:!0});d.addNormal("event",a);d.addNormal("viewer",this.$1);for(var e in c)d.addNormal(e,c[e]);d.post()};return a}();e.exports=a}),null);
__d("PhotosConst",[],(function(a,b,c,d,e,f){a={VIEWER_PERMALINK:0,VIEWER_SNOWLIFT:6,VIEWER_VAULTBOX:8,VIEWER_SNOWFLAKE:14,VIEWER_COMPOSER:16,VIEWER_CAROUSEL:19,VIEWER_SPHERICAL:20,VIEWER_PERMALINK_STRING:"permalink",VIEWER_SNOWLIFT_STRING:"snowlift",VIEWER_VAULTBOX_STRING:"vaultbox",VIEWER_CAROUSEL_STRING:"carousel",BULK_EDITOR:3,BULK_EDITOR_REACT:15,EDITOR_MODAL:17,FLASH_UPLOADER:4,HTML5_UPLOADER:10,SIZE_NORMAL:"n",PIC_NORMAL_FBX_SIZE:180,ALBUM_NAME_MAXLEN:65};e.exports=a}),null);
__d("PhotosUtils",["Vector"],(function(a,b,c,d,e,f){function a(){}Object.assign(a,{getNearestBox:function(a,b){var c=Infinity,d=null;for(var e in a){var f=a[e];if(f.contains(b)){f=b.distanceTo(f.getCenter());f<c&&(c=f,d=e)}}return d},absoluteToNormalizedPosition:function(a,c){var d=b("Vector").getElementPosition(a);a=b("Vector").getElementDimensions(a);c=c.sub(d).mul(100/a.x,100/a.y);c.domain="pure";return c},normalizedToAbsolutePosition:function(a,c){var d=b("Vector").getElementPosition(a);a=b("Vector").getElementDimensions(a);c=c.mul(a.x/100,a.y/100).add(d);c.domain="document";return c},isFacebox:function(a){return a.match(/^face:/)},isTag:function(a){return a.match(/^tag:/)}});e.exports=a}),null);
__d("PlaceActionLink",["AsyncRequest","Dialog"],(function(a,b,c,d,e,f){a={start_claim_link:function(a){a=new(b("AsyncRequest"))().setMethod("POST").setURI("/ajax/places/claim/start_claim.php").setData({id:a});new(b("Dialog"))().setAsync(a).show();return!1},refer_claim_link:function(a){a=new(b("AsyncRequest"))().setMethod("POST").setURI("/ajax/places/claim/refer_claim.php").setData({id:a});new(b("Dialog"))().setAsync(a).show();return!1}};e.exports=a}),null);
__d("legacy:place-action-link",["PlaceActionLink"],(function(a,b,c,d,e,f){a.PlaceActionLink=b("PlaceActionLink")}),3);
__d("SavedForLaterNUX",["csx","DOM","Event","Tooltip"],(function(a,b,c,d,e,f,g){var h="._t6k";a={init:function(a,c){var d=b("DOM").scry(c,h);this.suppress(d,!0);b("Event").listen(a,"click",function(){this.suppress(d,!1)}.bind(this))},suppress:function(a,c){for(var d=0;d<a.length;d++){var e=a[d];b("Tooltip").suppress(e,c)}}};e.exports=a}),null);
__d("SphericalMediaActionNamespaces",[],(function(a,b,c,d,e,f){"use strict";e.exports={BASE:"BASE",CORE:"CORE",PHOTO:"PHOTO",PHOTO_EDIT:"PHOTO_EDIT",VIEW:"VIEW"}}),null);
__d("SphericalMediaActions",[],(function(a,b,c,d,e,f){"use strict";e.exports={TURN_ON:"TURN_ON",TURN_OFF:"TURN_OFF",ENABLE_SPHERICAL:"ENABLE_SPHERICAL",DISABLE_SPHERICAL:"DISABLE_SPHERICAL",REQUEST_PHOTO_FAILED:"REQUEST_PHOTO_FAILED",REQUEST_PHOTO:"REQUEST_PHOTO",RECEIVE_PHOTO:"RECEIVE_PHOTO",UPDATE_BASE:"UPDATE_BASE",DRAG_START:"DRAG_START",GYRO_START:"GYRO_START",ZOOM_START:"ZOOM_START",SIGNIFICANT_MOVE:"SIGNIFICANT_MOVE",MOUSE_ANIMATION_START:"MOUSE_ANIMATION_START",MOUSE_ENTER:"MOUSE_ENTER",TAP_HEADING_INDICATOR:"TAP_HEADING_INDICATOR",VIEWPORT_CLICKED:"VIEWPORT_CLICKED",VISIBILITY_CHANGED:"VISIBILITY_CHANGED",UPDATE_DIMENSION:"UPDATE_DIMENSION",UPDATE_INITIAL_FOV:"UPDATE_INITIAL_FOV",UPDATE_INITIAL_VIEWPORT:"UPDATE_INITIAL_VIEWPORT",SETUP_RENDERER:"SETUP_RENDERER",WEBGL_CONTEXT_LOST:"WEBGL_CONTEXT_LOST",WEBGL_INIT_FAILED:"WEBGL_INIT_FAILED",WEBGL_RENDER_FAILED:"WEBGL_RENDER_FAILED",SOURCE_ONLOAD:"SOURCE_ONLOAD",REPLACE_BASE_STATE:"REPLACE_BASE_STATE",UPDATE_CTR_ELEM:"UPDATE_CTR_ELEM",SHOW_FALLBACK:"SHOW_FALLBACK",FALLBACK_MOUSE_OVER:"FALLBACK_MOUSE_OVER",FALLBACK_MOUSE_OUT:"FALLBACK_MOUSE_OUT",FALLBACK_INDICATOR_MOUSE_OVER:"FALLBACK_INDICATOR_MOUSE_OVER",FALLBACK_INDICATOR_MOUSE_OUT:"FALLBACK_INDICATOR_MOUSE_OUT",UPDATE_PARTIAL_LIMITS:"UPDATE_PARTIAL_LIMITS",USE_FALLBACK:"USE_FALLBACK",UPDATE_VIEW:"UPDATE_VIEW",UPDATE_VIEWPORT:"UPDATE_VIEWPORT",UPDATE_FOV:"UPDATE_FOV",UPDATE_YAW:"UPDATE_YAW",UPDATE_VIEWPORT_AND_FOV:"UPDATE_VIEWPORT_AND_FOV",START_ANIMATING:"START_ANIMATING",STOP_ANIMATING:"STOP_ANIMATING",UPDATE_FEED_ROOT_ELEMENT:"UPDATE_FEED_ROOT_ELEMENT",UPDATE_PHOTO_EDIT:"UPDATE_PHOTO_EDIT",CANCEL_EDITING:"CANCEL_EDITING",START_EDITING:"START_EDITING",STOP_EDITING:"STOP_EDITING",UPDATE_PHOTO:"UPDATE_PHOTO",UPDATE_PHOTO_FAILED:"UPDATE_PHOTO_FAILED",UPDATE_PHOTO_DONE:"UPDATE_PHOTO_DONE",UPDATE_RENDERER_PROJECTION_TYPE:108,UPDATE_RENDERER_PROJECTION_TYPE_FAILED:109,UPDATE_RENDERER_PROJECTION_TYPE_DONE:110,RESET_MOUSE_ANIMATION:"RESET_MOUSE_ANIMATION",START_MOUSE_ANIMATION:"START_MOUSE_ANIMATION",STOP_MOUSE_ANIMATION:"STOP_MOUSE_ANIMATION",DISABLE_SPHERICAL_ON_SAVE:"DISABLE_SPHERICAL_ON_SAVE",ENABLE_SPHERICAL_ON_SAVE:"ENABLE_SPHERICAL_ON_SAVE",ENABLE_EDITING:"ENABLE_EDITING",DISABLE_EDITING:"DISABLE_EDITING",TAKE_STATE_SNAPSHOT:"TAKE_STATE_SNAPSHOT",RESTORE_EDIT_STATE_FROM_SNAPSHOT:"RESTORE_EDIT_STATE_FROM_SNAPSHOT",RESTORE_TAGS_STATE_FROM_SNAPSHOT:"RESTORE_TAGS_STATE_FROM_SNAPSHOT",REMOVE_STATE_SNAPSHOT:"REMOVE_STATE_SNAPSHOT",PHOTO_REMOVED:"PHOTO_REMOVED",UPDATE_FILE_URL:"UPDATE_FILE_URL",SET_VR_IS_PRESENTING:"SET_VR_IS_PRESENTING",SET_VR_DEVICE:"SET_VR_DEVICE",SET_VR_RENDERING_SUPPORTED:"SET_VR_RENDERING_SUPPORTED",SET_VR_RENDERER_IS_READY:"SET_VR_RENDERER_IS_READY",CANVAS_RESIZE_START:"CANVAS_RESIZE_START",CANVAS_RESIZE_IMG_LOADED:"CANVAS_RESIZE_IMG_LOADED",CANVAS_RESIZE_SUCCESS:"CANVAS_RESIZE_SUCCESS",CANVAS_RESIZE_FAILED:"CANVAS_RESIZE_FAILED",OPEN_TAG_DIALOG:"OPEN_TAG_DIALOG",CLOSE_TAG_DIALOG:"CLOSE_TAG_DIALOG",SAVE_DIALOG_TAGS:"SAVE_DIALOG_TAGS",CANCEL_DIALOG_TAG_CHANGES:"CANCEL_DIALOG_TAG_CHANGES",PHOTO_RENDERER_STATS:"PHOTO_RENDERER_STATS",ENABLE_TAGGING:"ENABLE_TAGGING",DISABLE_TAGGING:"DISABLE_TAGGING",UPDATE_SPATIAL_TAGS:"UPDATE_SPATIAL_TAGS",UPDATE_SPATIAL_TAGS_FROM_COMPOSER:"UPDATE_SPATIAL_TAGS_FROM_COMPOSER",UPDATE_TAG_UNDER_MOUSE:"UPDATE_TAG_UNDER_MOUSE",TAGGING_START:"TAGGING_START",TAGGING_STOP:"TAGGING_STOP",UPDATE_TAG_CLICKED:"UPDATE_TAG_CLICKED",UPDATE_TAGGER:"UPDATE_TAGGER",ENTER_TAGGING_MODE:"ENTER_TAGGING_MODE",EXIT_TAGGING_MODE:"EXIT_TAGGING_MODE",UPDATE_TARGETED_TAG:"UPDATE_TARGETED_TAG",REDIRECT_FROM_CLICKED_TAG:"REDIRECT_FROM_CLICKED_TAG",DELETED_SPATIAL_TAG:"DELETED_SPATIAL_TAG",ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER:"ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER"}}),null);
__d("SphericalMediaBaseActions",["SphericalMediaActionNamespaces","SphericalMediaActions"],(function(a,b,c,d,e,f){"use strict";e.exports={updateBase:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_BASE,data:a}},dragStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").DRAG_START}},gyroStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").GYRO_START}},mouseAnimationStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").MOUSE_ANIMATION_START}},mouseEnter:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").MOUSE_ENTER}},tapHeadingIndicator:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").TAP_HEADING_INDICATOR}},significantMove:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").SIGNIFICANT_MOVE,data:{view:a}}},viewportClicked:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").VIEWPORT_CLICKED}},visibilityChanged:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").VISIBILITY_CHANGED,data:a}},zoomStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").ZOOM_START}},updateDimension:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_DIMENSION,data:{width:a,height:c}}},updateInitialViewport:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_INITIAL_VIEWPORT,data:{initialYaw:a,initialPitch:c}}},updateInitialFOV:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_INITIAL_FOV,data:{initialFov:a}}},setupRenderer:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").SETUP_RENDERER,data:{renderer:a,dt:c}}},webGlInitFailed:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").WEBGL_INIT_FAILED,data:{error:a}}},webGlRenderFailed:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").WEBGL_RENDER_FAILED,data:{error:a,view:c}}},webGlContextLost:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").WEBGL_CONTEXT_LOST}},sourceOnLoad:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").SOURCE_ONLOAD}},replaceBaseState:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").REPLACE_BASE_STATE,data:a}},updateSpatialTags:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_SPATIAL_TAGS,data:a}},updateSpatialTagsFromComposer:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_SPATIAL_TAGS_FROM_COMPOSER,data:a}},updateTagUnderMouse:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_TAG_UNDER_MOUSE,data:a}},updateFileURL:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_FILE_URL,data:a}},canvasResizeStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").CANVAS_RESIZE_START}},canvasResizeImgLoaded:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").CANVAS_RESIZE_IMG_LOADED,data:{width:a,height:c}}},canvasResizeSuccess:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").CANVAS_RESIZE_SUCCESS,data:a}},canvasResizeFailed:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").CANVAS_RESIZE_FAILED,data:a}},enableTagging:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").ENABLE_TAGGING}},disableTagging:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").DISABLE_TAGGING}},taggingStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").TAGGING_START}},taggingStop:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").TAGGING_STOP}},updateTagClicked:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_TAG_CLICKED,data:a}},updateTagger:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_TAGGER,data:a}},enterTaggingMode:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").ENTER_TAGGING_MODE}},exitTaggingMode:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").EXIT_TAGGING_MODE}},updateTargetedTag:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_TARGETED_TAG,data:a}},redirectFromClickedTag:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").REDIRECT_FROM_CLICKED_TAG}},deletedSpatialTag:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").DELETED_SPATIAL_TAG}},addSpatialTagFromPhotoTagger:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER}},updateCtrElem:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_CTR_ELEM,data:{element:a}}},showFallbackUI:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").SHOW_FALLBACK}},requestPhoto:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").REQUEST_PHOTO}},requestPhotoFailed:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").REQUEST_PHOTO_FAILED,data:{id:a,error:c}}},receivePhoto:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").RECEIVE_PHOTO,data:c}},updatePartialLimits:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_PARTIAL_LIMITS,data:a}},useFallbackUI:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").USE_FALLBACK}},updateFeedRootElement:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_FEED_ROOT_ELEMENT,data:a}}}}),null);
__d("ReactComponentRenderer",["React","ReactDOM","warning"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(){function a(a,b){this.klass=a,this.container=b,this.props={},this.component=null}var c=a.prototype;c.replaceProps=function(a,b){this.props={},this.setProps(a,b)};c.setProps=function(a,c){if(this.klass==null)return;Object.assign(this.props,a);a=g.createElement(this.klass,this.props);var d=this;b("ReactDOM").render(a,this.container,function(){d.component=this,c&&c.call(this)})};c.unmount=function(){b("ReactDOM").unmountComponentAtNode(this.container),this.klass=null};return a}();e.exports=a}),null);