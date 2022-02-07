/*! For license information please see vendors~cloud~example-page-a~example-page-b~example-page-c~g100-theme-page~home~ui-components~white-~b69daec9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{192:function(module,__webpack_exports__,__webpack_require__){"use strict";function deprecate(component,message){return console.warn(message||"The ".concat(component.name," component has been deprecated. Please consult the release notes for more information.")),component}__webpack_require__.d(__webpack_exports__,"a",(function(){return deprecate}))},2:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={version:"Carbon for IBM.com v1.31.0",stablePrefix:"dds"}},244:function(module,__webpack_exports__,__webpack_require__){"use strict";var browser=__webpack_require__(250),browser_default=__webpack_require__.n(browser),marked_umd=__webpack_require__(277),prefix={prefix:"bx",selectorTabbable:"\n    a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n    textarea:not([disabled]):not([tabindex='-1']),\n    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]\n  ",selectorFocusable:"\n    a[href], area[href], input:not([disabled]),\n    button:not([disabled]),select:not([disabled]),\n    textarea:not([disabled]),\n    iframe, object, embed, *[tabindex], *[contenteditable=true]\n  "}.prefix,_htmlTagRegex=/<.*?>/g,_cleanStringRegex=/\n|\s{2,}|&;/g,_removeHtmlTags=function(str){return str.replace(_htmlTagRegex,"")},_cleanString=function(str){return str.replace(_cleanStringRegex," ")};__webpack_exports__.a=function(str){var _ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_ref$allowHtml=_ref.allowHtml,allowHtml=void 0!==_ref$allowHtml&&_ref$allowHtml,_ref$renderer=_ref.renderer,renderer=void 0===_ref$renderer?{}:_ref$renderer,customTags=_ref.customTags,converted=allowHtml?str:_removeHtmlTags(str),defaultRenderer={link:function(href,title,text){var linkTitle=title?'title="'.concat(title,'"'):null;return'<a class="'.concat(prefix,"--link ").concat(prefix,'--link--lg" href="').concat(href,'" ').concat(linkTitle,">").concat(text,"</a>")},list:function(body,ordered){var listType=ordered?"ol":"ul",listClass="".concat(prefix,ordered?"--list--ordered":"--list--unordered");return"<".concat(listType,' class="').concat(listClass,'">').concat(body,"</").concat(listType,">")},listitem:function(text){return'<li class="'.concat(prefix,'--list__item">').concat(text,"</li>")}};marked_umd.marked.use({smartypants:!0,renderer:Object.assign(defaultRenderer,renderer)}),customTags&&browser_default.a.addHook("uponSanitizeElement",(function(node,_ref2){var allowedTags=_ref2.allowedTags,tagName=_ref2.tagName;customTags.has(tagName)&&!allowedTags[tagName]&&(allowedTags[tagName]=!0)}));var convertedMarkdown=browser_default.a.sanitize(Object(marked_umd.marked)(converted));return customTags&&browser_default.a.removeHook("uponSanitizeElement"),_cleanString(convertedMarkdown)}},248:function(module,__webpack_exports__,__webpack_require__){"use strict";function on(element){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return element.addEventListener.apply(element,args),{release:function(){return element.removeEventListener.apply(element,args),null}}}function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.a=function(element,sentinelNodes){var eventRequestFocusWrap=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"dds-request-focus-wrap";return on(element,"focusout",(function(event){var _event$currentTarget$,_event$currentTarget$2,target=event.target,relatedTarget=event.relatedTarget,_sentinelNodes=_slicedToArray(sentinelNodes,2),startSentinelNode=_sentinelNodes[0],endSentinelNode=_sentinelNodes[1],oldContains=target&&target!==this&&(event.currentTarget.contains(target)||(null===(_event$currentTarget$=event.currentTarget.host)||void 0===_event$currentTarget$?void 0:_event$currentTarget$.contains(target)))&&sentinelNodes.indexOf(target)<0,currentContains=relatedTarget&&relatedTarget!==this&&(event.currentTarget.contains(relatedTarget)||(null===(_event$currentTarget$2=event.currentTarget.host)||void 0===_event$currentTarget$2?void 0:_event$currentTarget$2.contains(relatedTarget)))&&sentinelNodes.indexOf(relatedTarget)<0;if(oldContains&&!currentContains&&relatedTarget){var comparisonResult=target.compareDocumentPosition(relatedTarget);comparisonResult=relatedTarget===startSentinelNode?Node.DOCUMENT_POSITION_PRECEDING:relatedTarget===endSentinelNode?Node.DOCUMENT_POSITION_FOLLOWING:-1,element.dispatchEvent(new CustomEvent(eventRequestFocusWrap,{bubbles:!0,cancelable:!1,composed:!0,detail:{comparisonResult:comparisonResult}}))}}))}},273:function(module,__webpack_exports__,__webpack_require__){"use strict";var js_cookie__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(210),js_cookie__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var ipcinfoCookie=function(){function ipcinfoCookie(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ipcinfoCookie)}var Constructor,protoProps,staticProps;return Constructor=ipcinfoCookie,staticProps=[{key:"get",value:function(){var cc,lc,ipcinfo=js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get("ipcInfo");if(ipcinfo)return decodeURIComponent(ipcinfo).split(";").map((function(code){var itemParts=code.split("=");"cc"===itemParts[0]&&(cc=itemParts[1]),"lc"===itemParts[0]&&(lc=itemParts[1])})),{cc:cc,lc:lc}}},{key:"set",value:function(_ref){var cc=_ref.cc,lc=_ref.lc,info="cc=".concat(cc,";lc=").concat(lc);js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set("ipcInfo",encodeURIComponent(info),{expires:365,domain:".ibm.com"})}}],(protoProps=null)&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),ipcinfoCookie}();__webpack_exports__.a=ipcinfoCookie},301:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){var axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(83),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var _endpoint=process&&{JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",LEIN_HOME:"/usr/local/lib/lein",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu20",JOURNAL_STREAM:"8:22323",GRAALVM_11_ROOT:"/usr/local/graalvm/graalvm-ce-java11-22.0.0.2",SWIFT_PATH:"/usr/share/swift/usr/bin",GRADLE_HOME:"/usr/share/gradle-7.3.3",GOROOT_1_16_X64:"/opt/hostedtoolcache/go/1.16.13/x64",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",GITHUB_ACTIONS:"true",DEBIAN_FRONTEND:"noninteractive",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk-bundle",ImageVersion:"20220131.1",PIPX_HOME:"/opt/pipx",DEPLOYMENT_BASEPATH:"/opt/runner",XDG_CONFIG_HOME:"/home/runner/.config",HOMEBREW_NO_AUTO_UPDATE:"1",SGX_AESM_ADDR:"1",ImageOS:"ubuntu20",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/23.1.7779620",CHROMEWEBDRIVER:"/usr/local/share/chrome_driver",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",HOME:"/home/runner",DOTNET_MULTILEVEL_LOOKUP:"0",ANDROID_HOME:"/usr/local/lib/android/sdk",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",CONDA:"/usr/share/miniconda",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",LANG:"C.UTF-8",RUNNER_USER:"runner",ACCEPT_EULA:"Y",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk-bundle",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_15_X64:"/opt/hostedtoolcache/go/1.15.15/x64",ANT_HOME:"/usr/share/ant",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.9.8-standalone.jar",INVOCATION_ID:"bb03a3ff762f415a8a96905d325a6568",RUNNER_PERFLOG:"/home/runner/perflog",NVM_DIR:"/home/runner/.nvm",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",CI:"true",HOMEBREW_PREFIX:"/home/linuxbrew/.linuxbrew",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",CHROME_BIN:"/usr/bin/google-chrome",USER:"runner",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GOROOT_1_17_X64:"/opt/hostedtoolcache/go/1.17.6/x64",RUNNER_TRACKING_ID:"github_974c59cb-866e-4490-957f-8a60ff3c99cd",HOMEBREW_CELLAR:"/home/linuxbrew/.linuxbrew/Cellar",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",PATH:"/opt/hostedtoolcache/node/14.18.3/x64/bin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",PIPX_BIN_DIR:"/opt/pipx_bin",HOMEBREW_REPOSITORY:"/home/linuxbrew/.linuxbrew/Homebrew",STATS_KEEPALIVE:"false",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",DOTNET_NOLOGO:"1",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",ENABLE_RTL:"true","INPUT_ENV-FILE":".env",GITHUB_JOB:"canary-rtl",GITHUB_REF:"refs/heads/main",GITHUB_SHA:"98b4f942957c5f4cb324a2d5520741fec245a073",GITHUB_REPOSITORY:"carbon-design-system/carbon-for-ibm-dotcom-web-components-test",GITHUB_REPOSITORY_OWNER:"carbon-design-system",GITHUB_RUN_ID:"1806939295",GITHUB_RUN_NUMBER:"76",GITHUB_RETENTION_DAYS:"90",GITHUB_RUN_ATTEMPT:"1",GITHUB_ACTOR:"ibmdotcom-bot",GITHUB_WORKFLOW:"deploy-canary (Deploy to Github Pages)",GITHUB_HEAD_REF:"",GITHUB_BASE_REF:"",GITHUB_EVENT_NAME:"repository_dispatch",GITHUB_SERVER_URL:"https://github.com",GITHUB_API_URL:"https://api.github.com",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",GITHUB_REF_NAME:"main",GITHUB_REF_PROTECTED:"true",GITHUB_REF_TYPE:"branch",GITHUB_WORKSPACE:"/home/runner/work/carbon-for-ibm-dotcom-web-components-test/carbon-for-ibm-dotcom-web-components-test",GITHUB_ACTION:"__self",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",GITHUB_ACTION_REPOSITORY:"",GITHUB_ACTION_REF:"",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_f5f14dde-6cfe-4596-9205-b310ecf75dc3",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_f5f14dde-6cfe-4596-9205-b310ecf75dc3",RUNNER_OS:"Linux",RUNNER_ARCH:"X64",RUNNER_NAME:"GitHub Actions 10",RUNNER_TEMP:"/home/runner/work/_temp",RUNNER_WORKSPACE:"/home/runner/work/carbon-for-ibm-dotcom-web-components-test",ACTIONS_RUNTIME_URL:"https://pipelines.actions.githubusercontent.com/dtQ81jPF1LQsP0IxXyXdxcH8nvyWrpd2bZIfTlfXlKrGQl6OUp/",ACTIONS_RUNTIME_TOKEN:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVCWl9jbjNzWFlBZDBjaDRUSEJLSElnT3dPRSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC8yODU0IExvY2F0aW9uU2VydmljZS5Db25uZWN0IFJlYWRBbmRVcGRhdGVCdWlsZEJ5VXJpOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMC8xOkJ1aWxkL0J1aWxkLzI4NTQiLCJJZGVudGl0eVR5cGVDbGFpbSI6IlN5c3RlbTpTZXJ2aWNlSWRlbnRpdHkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiJERERERERERC1ERERELUREREQtRERERC1EREREREREREREREQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJhdWkiOiI3ZDdlZTA5MS0wNTAwLTRiYzQtYjA4Yy0xMGVmMDRmYzMwYmUiLCJzaWQiOiIwY2IwMTNiYy0wZmFlLTQyNWUtOGQ3MC1iODk0MGM4ZDBkMTAiLCJhYyI6Ilt7XCJTY29wZVwiOlwicmVmcy9oZWFkcy9tYWluXCIsXCJQZXJtaXNzaW9uXCI6M31dIiwib3JjaGlkIjoiMWY0NDllMTgtODRjNi00MzEwLWI1MDYtM2M4MGQzYmY2OTlmLmNhbmFyeS1ydGwuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOjFkNTY5ZjQzLTgyMjAtNGU5MS04NGFiLWY5NzY0Njc0ZTY3YyIsIm5iZiI6MTY0NDI0MzIyNiwiZXhwIjoxNjQ0MjY2MDI2fQ.tVnvUSLCJPTF8H0D4k2sbH-r1RxWlr5OHNeKT6mol0fYcolHuvhznXs-Vx2czPXewP3ZuEc2w_EFBcmWMn5QUt-H9Il7XiD4uueH0q87qmW-eFYrNPrDxcuaOlcyl4VOm6surKMM3tJLiNuJkgb69elC1oMo-vS3EGXx6BXTDm0-pTJS3DBgBI-tF_OiPnKm_AvU6xFmY4ua7CzpsK7uau0fdaN5cxC53dX0pRdHFO-UW3QaLIgI9cNUAIxrD0aaUUPCzyv4yQbzCmmIIwAiKR-TQxBYgeV1hbojkXfkOnZGRG4rKYxtc4BBpkafRwIvXhdlhLlw88I8VXtQk4BtYA",ACTIONS_CACHE_URL:"https://artifactcache.actions.githubusercontent.com/dtQ81jPF1LQsP0IxXyXdxcH8nvyWrpd2bZIfTlfXlKrGQl6OUp/",NODE_ENV:"production"}.GEO_API||"https://api.www.s81c.com/webmaster/dbip/";function _geolocation(){return(_geolocation=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var location,cc;return regeneratorRuntime.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_endpoint,{headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(response){return response.data}));case 2:return location=_context.sent,cc=location&&location.country,_context.abrupt("return",cc);case 5:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}__webpack_exports__.a=function(){return _geolocation.apply(this,arguments)}}).call(this,__webpack_require__(130))},309:function(module,__webpack_exports__,__webpack_require__){"use strict";var window_or_global__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),window_or_global__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(window_or_global__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function(){var langs={};return window_or_global__WEBPACK_IMPORTED_MODULE_0___default.a.document&&window_or_global__WEBPACK_IMPORTED_MODULE_0___default.a.document.querySelectorAll('link[rel="alternate"]').forEach((function(link){langs[link.getAttribute("hreflang")]=link.getAttribute("href")})),langs}},31:function(module,__webpack_exports__,__webpack_require__){"use strict";function formatVideoCaption(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},duration=_ref.duration,name=_ref.name;return!name||0!==duration&&!duration?name||duration||"":"".concat(name," (").concat(duration,")")}function formatVideoDuration(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},duration=_ref2.duration,minutes=Math.floor((null!=duration?duration:0)/6e4),seconds=Math.floor((null!=duration?duration:0)/1e3%60),fillSeconds=Array.from({length:2-String(seconds).length+1}).join("0");return null==duration?duration:"".concat(minutes,":").concat(fillSeconds).concat(seconds)}__webpack_require__.d(__webpack_exports__,"a",(function(){return formatVideoCaption})),__webpack_require__.d(__webpack_exports__,"b",(function(){return formatVideoDuration}))},312:function(module,__webpack_exports__,__webpack_require__){"use strict";var _host="https://1.www.s81c.com/common/carbon/plex",_fonts={ar:{entry:"sans-arabic",family:"IBM Plex Sans Arabic"},ja:{entry:"sans-jp",family:"IBM Plex Sans JP"},ko:{entry:"sans-kr",family:"IBM Plex Sans KR"}},_weights={100:"thin",200:"extralight",300:"light",400:"regular",450:"text",500:"medium",600:"semibold",700:"bold"};function _injectCSS(language){var weights=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===weights.length){var link=document.createElement("link");link.href="".concat(_host,"/").concat(_fonts[language].entry,".css"),link.type="text/css",link.rel="stylesheet",link.media="screen,print",document.getElementsByTagName("head")[0].appendChild(link)}else weights.forEach((function(weight){var linkWeight=document.createElement("link");linkWeight.href="".concat(_host,"/").concat(_fonts[language].entry,"-").concat(_weights[weight],".css"),linkWeight.type="text/css",linkWeight.rel="stylesheet",linkWeight.media="screen,print",document.getElementsByTagName("head")[0].appendChild(linkWeight)}))}function _setFontFamily(language){document.body.style.fontFamily="".concat(_fonts[language].family,",IBM Plex Sans,Helvetica Neue,Arial,sans-serif")}__webpack_exports__.a=function(language){var weights=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];_fonts[language]&&(_injectCSS(language,weights),_setFontFamily(language))}},330:function(module,__webpack_exports__,__webpack_require__){"use strict";var _htmlTagRegex=/<.*?>/g,_cleanStringRegex=/\n|\s{2,}|&([a-zA-Z]+);/g,_removeHtmlTags=function(str){return str.replace(_htmlTagRegex,"")},_cleanString=function(str){return str.replace(_cleanStringRegex," ")};__webpack_exports__.a=function(str){var _ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_ref$removeEntities=_ref.removeEntities,removeEntities=void 0===_ref$removeEntities||_ref$removeEntities,removedTags=_removeHtmlTags(str);return removedTags=removeEntities?_cleanString(removedTags):removedTags}},37:function(module,__webpack_exports__,__webpack_require__){"use strict";var _carbon_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(278);__webpack_exports__.a=function(elemCollection){var minSize=arguments.length>1&&void 0!==arguments[1]&&arguments[1],elemArr=Array.prototype.slice.call(elemCollection),targetWidth=minSize?parseFloat(_carbon_layout__WEBPACK_IMPORTED_MODULE_0__.b[minSize].width)*_carbon_layout__WEBPACK_IMPORTED_MODULE_0__.a:0;if(window.innerWidth>targetWidth){var targetHeight=0;elemArr.forEach((function(elem){elem.style.height="auto",elem.offsetHeight>targetHeight&&(targetHeight=elem.clientHeight)})),elemArr.forEach((function(elem){elem.style.height=targetHeight+"px"}))}else elemArr.forEach((function(elem){elem.style.height="auto"}))}},66:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),carbon_components_es_globals_js_settings_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_carbon_ibmdotcom_utilities_es_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),carbon_web_components_es_icons_arrow_down_20_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(234),carbon_web_components_es_icons_arrow_right_20_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(145),carbon_web_components_es_icons_download_20_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(235),carbon_web_components_es_icons_launch_20_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(236),carbon_web_components_es_icons_play_outline_20_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(237),_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14);let _t,_=t=>t;const{prefix:prefix}=carbon_components_es_globals_js_settings_js__WEBPACK_IMPORTED_MODULE_1__.a,{stablePrefix:ddsPrefix}=_carbon_ibmdotcom_utilities_es_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_2__.a,icons={[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.LOCAL]:carbon_web_components_es_icons_arrow_right_20_js__WEBPACK_IMPORTED_MODULE_4__.a,[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.DOWNLOAD]:carbon_web_components_es_icons_download_20_js__WEBPACK_IMPORTED_MODULE_5__.a,[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.EXTERNAL]:carbon_web_components_es_icons_launch_20_js__WEBPACK_IMPORTED_MODULE_6__.a,[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.JUMP]:carbon_web_components_es_icons_arrow_down_20_js__WEBPACK_IMPORTED_MODULE_3__.a,[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.VIDEO]:carbon_web_components_es_icons_play_outline_20_js__WEBPACK_IMPORTED_MODULE_7__.a},ariaLabels={[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.LOCAL]:"",[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.DOWNLOAD]:" - This link downloads a file",[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.EXTERNAL]:" - This link opens in a new tab",[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.JUMP]:"",[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.VIDEO]:" - This link plays a video"};__webpack_exports__.a=Base=>class extends Base{_handleClick(event){const{disabled:disabled}=this;disabled&&(event.preventDefault(),event.stopPropagation())}_renderIcon(){var _icons$ctaType;const{ctaType:ctaType}=this;return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__.d)(_t||(_t=_`
        <slot name="icon">${0}</slot>
      `),null===(_icons$ctaType=icons[ctaType])||void 0===_icons$ctaType?void 0:_icons$ctaType.call(icons,{class:`${prefix}--card__cta ${ddsPrefix}-ce--cta__icon`}))}updated(changedProperties){super.updated(changedProperties);const{ctaType:ctaType,_linkNode:linkNode}=this;if(changedProperties.has("ctaType")||changedProperties.has("download")){const{download:download}=this;ctaType!==_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.DOWNLOAD&&download&&console.warn(`\`download\` property used with a CTA data item besides \`type: download\` (\`type: ${ctaType}\`).`)}if(linkNode&&"A"===linkNode.nodeName){if(changedProperties.has("ctaType")||changedProperties.has("href")){const{href:href}=this,hrefValue=ctaType!==_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.VIDEO?href:"#";null==hrefValue?linkNode.removeAttribute("href"):linkNode.setAttribute("href",hrefValue)}if(changedProperties.has("ctaType")||changedProperties.has("target")){const{target:target}=this,targetInEffect=ctaType!==_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.EXTERNAL||target?target:"_blank";targetInEffect?linkNode.setAttribute("target",targetInEffect):linkNode.removeAttribute("target")}linkNode.hasAttribute("aria-label")&&linkNode.setAttribute("aria-label",linkNode.getAttribute("aria-label")+(ctaType?ariaLabels[ctaType]:""))}}}},67:function(module,__webpack_exports__,__webpack_require__){"use strict";var _carbon_ibmdotcom_utilities_es_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),carbon_web_components_es_icons_arrow_down_20_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(234),carbon_web_components_es_icons_arrow_right_20_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(145),carbon_web_components_es_icons_download_20_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(235),carbon_web_components_es_icons_launch_20_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(236),carbon_web_components_es_icons_play_outline_20_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(237),_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14);const{stablePrefix:ddsPrefix}=_carbon_ibmdotcom_utilities_es_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_0__.a;_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.LOCAL,carbon_web_components_es_icons_arrow_right_20_js__WEBPACK_IMPORTED_MODULE_2__.a,_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.DOWNLOAD,carbon_web_components_es_icons_download_20_js__WEBPACK_IMPORTED_MODULE_3__.a,_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.EXTERNAL,carbon_web_components_es_icons_launch_20_js__WEBPACK_IMPORTED_MODULE_4__.a,_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.JUMP,carbon_web_components_es_icons_arrow_down_20_js__WEBPACK_IMPORTED_MODULE_1__.a,_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.VIDEO,carbon_web_components_es_icons_play_outline_20_js__WEBPACK_IMPORTED_MODULE_5__.a;__webpack_exports__.a=Base=>class extends Base{_handleClick(event){this.focus();const{ctaType:ctaType,disabled:disabled,href:href,videoName:videoName,videoDescription:videoDescription}=this;if(ctaType===_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.VIDEO&&event.preventDefault(),!disabled){const{eventRunAction:eventRunAction}=this.constructor;this.dispatchEvent(new CustomEvent(eventRunAction,{bubbles:!0,cancelable:!0,composed:!0,detail:{href:href,ctaType:ctaType,videoName:videoName,videoDescription:videoDescription}}))}}updated(changedProperties){super.updated(changedProperties);const{ctaType:ctaType,videoName:videoName,videoDescription:videoDescription,href:href,videoDuration:videoDuration}=this,{eventRequestVideoData:eventRequestVideoData}=this.constructor;changedProperties.has("ctaType")&&ctaType===_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.VIDEO&&void 0===videoDuration&&this.dispatchEvent(new CustomEvent(eventRequestVideoData,{bubbles:!0,cancelable:!0,composed:!0,detail:{href:href,videoName:videoName,videoDescription:videoDescription}})),(changedProperties.has("videoName")&&(null===videoName||"null"===videoName)||changedProperties.has("videoDescription"))&&this.dispatchEvent(new CustomEvent(eventRequestVideoData,{bubbles:!0,cancelable:!0,composed:!0,detail:{videoName:videoName,videoDescription:videoDescription,href:href}}))}static get eventRequestVideoData(){return`${ddsPrefix}-cta-request-video-data`}static get eventRunAction(){return`${ddsPrefix}-cta-run-action`}}}}]);
//# sourceMappingURL=vendors~cloud~example-page-a~example-page-b~example-page-c~g100-theme-page~home~ui-components~white-~b69daec9.js.map