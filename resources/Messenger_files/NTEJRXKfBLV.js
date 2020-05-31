if (self.CavalryLogger) { CavalryLogger.start_js(["ugjZd"]); }

__d("MessengerStoriesRingPresenceBucketQueryContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"bucketID",type:"[ID!]!"}],b=[{kind:"Variable",name:"id",variableName:"bucketID"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MessengerStoriesRingPresenceBucketQueryContainerQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"story_bucket",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"MessengerStoriesRingPresence_storyBucket"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MessengerStoriesRingPresenceBucketQueryContainerQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"story_bucket",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isStoryBucket"},{alias:null,args:null,kind:"ScalarField",name:"is_bucket_seen_by_viewer",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:"2812946625484230",metadata:{},name:"MessengerStoriesRingPresenceBucketQueryContainerQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("MessengerStoriesRingPresenceBucketQueryContainer_montageThread.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MessengerStoriesRingPresenceBucketQueryContainer_montageThread",selections:[{alias:null,args:null,kind:"ScalarField",name:"montage_container_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message_count",storageKey:null}],type:"MontageThread",abstractKey:null};e.exports=a}),null);
__d("MessengerStoriesRingPresenceMontageQueryContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"messengerThreadID",type:"ID!"}],b=[{kind:"Variable",name:"id",variableName:"messengerThreadID"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MessengerStoriesRingPresenceMontageQueryContainerQuery",selections:[{alias:null,args:b,concreteType:"MontageThread",kind:"LinkedField",name:"montage_thread",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"MessengerStoriesRingPresenceBucketQueryContainer_montageThread"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MessengerStoriesRingPresenceMontageQueryContainerQuery",selections:[{alias:null,args:b,concreteType:"MontageThread",kind:"LinkedField",name:"montage_thread",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"montage_container_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:"2254691471316377",metadata:{},name:"MessengerStoriesRingPresenceMontageQueryContainerQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("MessengerStoriesRingPresenceMontageQueryContainer_messageThread.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MessengerStoriesRingPresenceMontageQueryContainer_messageThread",selections:[{alias:null,args:null,concreteType:"MessageThread",kind:"LinkedField",name:"montage_thread",plural:!1,selections:[{alias:null,args:null,concreteType:"MessageThreadKey",kind:"LinkedField",name:"thread_key",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"thread_fbid",storageKey:null}],storageKey:null}],storageKey:null}],type:"MessageThread",abstractKey:null};e.exports=a}),null);
__d("MessengerStoriesRingPresence_storyBucket.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MessengerStoriesRingPresence_storyBucket",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_bucket_seen_by_viewer",storageKey:null}],type:"StoryBucket",abstractKey:"__isStoryBucket"};e.exports=a}),null);
__d("MessengerStoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTION_SOURCE:{FACEBOOK_CHAT_TAB:"facebook_chat_tab",MESSENGER_DOT_COM:"messenger_dot_com"}};e.exports=a}),null);
__d("MessengerStoriesRingPresence.react",["FBStoriesViewer2","MercuryParticipantsImageM4React.re","MessengerStoriesLoggingConstants","React","RelayModern","uuid","MessengerStoriesRingPresence_storyBucket.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("MercuryParticipantsImageM4React.re").make,i=b("React");c=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;var j=216,k=56,l=857,m=1141,n=160,o=284;function a(a){var c=a.borderColor,d=a.className,e=a.expanded,f=a.isActive,g=a.montageFBThreadID,p=a.participants,q=a.size,r=a.storiesRingEligible,s=a.storyBucket;a=a.totalParticipants;var t=function(){if(g==null||r!==!0)return;var a={bucketID:g,cardID:null,openSource:b("MessengerStoriesLoggingConstants").ACTION_SOURCE.MESSENGER_DOT_COM,tilePosition:{bottom:j,height:k,left:l,right:m,top:n,width:o},traySessionID:b("uuid")()};b("FBStoriesViewer2").getInstance().openDialogMessenger(a)},u=function(){return(s==null?void 0:s.is_bucket_seen_by_viewer)===!1};u=u();return i.jsx("div",{onClick:t,"aria-hidden":!0,children:i.jsx(h,{borderColor:c,className:d,expanded:e,hasUnreadStories:u,isActive:f,participants:p,size:q,storiesRingEligible:r,totalParticipants:a})})}e.exports=c(a,{storyBucket:g!==void 0?g:g=b("MessengerStoriesRingPresence_storyBucket.graphql")})}),null);
__d("MessengerStoriesRingPresenceBucketQueryContainer.react",["CometRelayEnvironmentFactory","CurrentUser","MercuryParticipantsImageM4React.re","MessengerStoriesRingPresence.react","React","RelayModern","MessengerStoriesRingPresenceBucketQueryContainerQuery.graphql","MessengerStoriesRingPresenceBucketQueryContainer_montageThread.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h,i=b("MercuryParticipantsImageM4React.re").make,j=b("React"),k=b("RelayModern").QueryRenderer;c=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;function a(a){var c=a.borderColor,d=a.className,e=a.expanded,f=a.isActive,h=a.montageThread,l=a.participants,m=a.size,n=a.storiesRingEligible,o=a.totalParticipants;a=b("CurrentUser").getID();var p=h==null?void 0:h.montage_container_id;a=b("CometRelayEnvironmentFactory").getForActorID(a);var q=!!(h==null?void 0:h.message_count);return j.jsx(k,{environment:a,query:g!==void 0?g:g=b("MessengerStoriesRingPresenceBucketQueryContainerQuery.graphql"),variables:{bucketID:p},render:function(a){a=a.props;return a?j.jsx(b("MessengerStoriesRingPresence.react"),{borderColor:c,className:d,expanded:e,isActive:f,montageFBThreadID:p,participants:l,size:m,storiesRingEligible:n&&q,storyBucket:a.story_bucket[0],totalParticipants:o}):j.jsx(i,{borderColor:c,className:d,expanded:e,isActive:f,participants:l,size:m,storiesRingEligible:n,totalParticipants:o})}})}e.exports=c(a,{montageThread:h!==void 0?h:h=b("MessengerStoriesRingPresenceBucketQueryContainer_montageThread.graphql")})}),null);
__d("MessengerStoriesRingPresenceMontageQueryContainer.react",["MercuryParticipantsImageM4React.re","MessengerStoriesRingPresenceBucketQueryContainer.react","React","RelayFBEnvironment","RelayModern","MessengerStoriesRingPresenceMontageQueryContainerQuery.graphql","MessengerStoriesRingPresenceMontageQueryContainer_messageThread.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h,i=b("MercuryParticipantsImageM4React.re").make,j=b("React"),k=b("RelayModern").QueryRenderer;c=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;function a(a){var c=a.borderColor,d=a.className,e=a.expanded,f=a.isActive,h=a.messageThread,l=a.participants,m=a.size,n=a.storiesRingEligible,o=a.totalParticipants;a=h==null?void 0:(a=h.montage_thread)==null?void 0:(h=a.thread_key)==null?void 0:h.thread_fbid;var p=j.jsx(i,{borderColor:c,className:d,expanded:e,isActive:f,participants:l,size:m,storiesRingEligible:n,totalParticipants:o});return a==null?p:j.jsx(k,{environment:b("RelayFBEnvironment"),query:g!==void 0?g:g=b("MessengerStoriesRingPresenceMontageQueryContainerQuery.graphql"),variables:{messengerThreadID:a},render:function(a){a=a.props;return a&&a.montage_thread?j.jsx(b("MessengerStoriesRingPresenceBucketQueryContainer.react"),{borderColor:c,className:d,expanded:e,isActive:f,montageThread:a.montage_thread,participants:l,size:m,storiesRingEligible:n,totalParticipants:o}):p}})}e.exports=c(a,{messageThread:h!==void 0?h:h=b("MessengerStoriesRingPresenceMontageQueryContainer_messageThread.graphql")})}),null);