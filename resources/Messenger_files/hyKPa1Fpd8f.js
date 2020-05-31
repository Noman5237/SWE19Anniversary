if (self.CavalryLogger) { CavalryLogger.start_js(["tcYUa"]); }

__d("MessengerGameDialogErrorMessage.react",["ix","cx","Image.react","React","cxMargin","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(a){return i.jsxs("div",{className:"_1e1n",children:[i.jsx(b("Image.react"),{src:g("141787")}),i.jsx("span",{className:"_3-99",children:a.error})]})};e.exports=a}),null);
__d("MessengerGameDialogSendingSpinner.react",["cx","fbt","MessengerSpinner.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(){return i.jsxs("div",{children:[i.jsx(b("MessengerSpinner.react"),{}),i.jsx("span",{className:"_1e1n _3-99",children:h._("Sending")})]})};e.exports=a}),null);
__d("MessengerGameShareMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1096845470442042"};b.getQueryID=function(){return"1395239747186826"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("MessengerGameShareDialog.react",["cx","fbt","AsyncRequest","CurrentUser","LayerFadeOnHide","MessengerComposeViewHeader.react","MessengerDialog.react","MessengerDialogBodyReact.bs","MessengerDialogButton.react","MessengerDialogFooter.react","MessengerDialogHeaderReact.re","MessengerDialogs.bs","MessengerDialogTitleReact.re","MessengerGameDialogErrorMessage.react","MessengerGameDialogSendingSpinner.react","MessengerGameShareMutationWebGraphQLMutation","React","emptyFunction","immutable","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("MessengerDialogBodyReact.bs").jsComponent,j=b("MessengerDialogHeaderReact.re").make,k=b("MessengerDialogTitleReact.re").make,l=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={recipients:b("immutable").List(),sendError:null,sending:!1},d.$2=function(a){d.setState({recipients:d.state.recipients.push(a)})},d.$3=function(a){var b=d.state.recipients;d.setState({recipients:b["delete"](b.indexOf(a))})},d.$1=function(){d.setState({recipients:b("immutable").List()})},d.$4=function(){var a=d.state.recipients.map(function(a){return a.getUniqueID()}).toArray();new(b("AsyncRequest"))(b("MessengerGameShareMutationWebGraphQLMutation").getURI({thread_id:a,game_id:d.props.gameID})).setHandler(d.$5).send();d.setState({sending:!0,sendError:null})},d.$5=function(a){if(!a.error){d.setState({recipients:b("immutable").List(),sending:!1},function(){return b("MessengerDialogs.bs").removeDialog()});return}d.setState({sending:!1,sendError:a.error})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=h._("Send"),c;this.state.sending?c=l.jsx(b("MessengerGameDialogSendingSpinner.react"),{}):this.state.sendError&&(c=l.jsx(b("MessengerGameDialogErrorMessage.react"),{error:this.state.sendError}));return l.jsxs(b("MessengerDialog.react"),{shown:this.props.shown,behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},hideOnEscape:!0,children:[l.jsx(j,{children:l.jsx(k,{children:this.props.title})}),l.jsx(i,{children:l.jsx(b("MessengerComposeViewHeader.react"),{className:"_1e1o",forceHideClearButton:!1,onClear:this.$1,onAddRecipient:this.$2,onRemoveRecipient:this.$3,onResize:b("emptyFunction"),recipients:this.state.recipients,viewer:b("CurrentUser").getID()})}),l.jsxs(b("MessengerDialogFooter.react"),{leftContent:c,children:[l.jsx(b("MessengerDialogButton.react"),{action:"cancel",label:h._("Cancel"),onClick:b("MessengerDialogs.bs").removeDialog,type:"secondary",use:"default"}),l.jsx(b("MessengerDialogButton.react"),{action:"confirm",disabled:!this.state.recipients.size||this.state.sending,label:a,onClick:this.$4,type:"primary",use:"default"})]})]})};return c}(l.Component);a.propTypes={gameID:b("prop-types").string.isRequired,shown:b("prop-types").bool.isRequired,title:b("prop-types").node.isRequired};e.exports=a}),null);