/*! For license information please see vendors~cloud~example-page-a~example-page-b~example-page-c~g100-theme-page~home~ui-components~white-~b69daec9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{192:function(module,__webpack_exports__,__webpack_require__){"use strict";function deprecate(component,message){return console.warn(message||"The ".concat(component.name," component has been deprecated. Please consult the release notes for more information.")),component}__webpack_require__.d(__webpack_exports__,"a",(function(){return deprecate}))},2:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={version:"Carbon for IBM.com v1.31.0",stablePrefix:"dds"}},229:function(module,__webpack_exports__,__webpack_require__){"use strict";var carbon_components_es_globals_js_misc_on__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45);function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.a=function(element,sentinelNodes){var eventRequestFocusWrap=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"dds-request-focus-wrap";return Object(carbon_components_es_globals_js_misc_on__WEBPACK_IMPORTED_MODULE_0__.a)(element,"focusout",(function(event){var _event$currentTarget$,_event$currentTarget$2,target=event.target,relatedTarget=event.relatedTarget,_sentinelNodes=_slicedToArray(sentinelNodes,2),startSentinelNode=_sentinelNodes[0],endSentinelNode=_sentinelNodes[1],oldContains=target&&target!==this&&(event.currentTarget.contains(target)||(null===(_event$currentTarget$=event.currentTarget.host)||void 0===_event$currentTarget$?void 0:_event$currentTarget$.contains(target)))&&sentinelNodes.indexOf(target)<0,currentContains=relatedTarget&&relatedTarget!==this&&(event.currentTarget.contains(relatedTarget)||(null===(_event$currentTarget$2=event.currentTarget.host)||void 0===_event$currentTarget$2?void 0:_event$currentTarget$2.contains(relatedTarget)))&&sentinelNodes.indexOf(relatedTarget)<0;if(oldContains&&!currentContains&&relatedTarget){var comparisonResult=target.compareDocumentPosition(relatedTarget);comparisonResult=relatedTarget===startSentinelNode?Node.DOCUMENT_POSITION_PRECEDING:relatedTarget===endSentinelNode?Node.DOCUMENT_POSITION_FOLLOWING:-1,element.dispatchEvent(new CustomEvent(eventRequestFocusWrap,{bubbles:!0,cancelable:!1,composed:!0,detail:{comparisonResult:comparisonResult}}))}}))}},234:function(module,__webpack_exports__,__webpack_require__){"use strict";var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(252),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__),marked__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(280),prefix=__webpack_require__(5).a.prefix,_htmlTagRegex=/<.*?>/g,_cleanStringRegex=/\n|\s{2,}|&;/g,_removeHtmlTags=function(str){return str.replace(_htmlTagRegex,"")},_cleanString=function(str){return str.replace(_cleanStringRegex," ")};__webpack_exports__.a=function(str){var _ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_ref$allowHtml=_ref.allowHtml,allowHtml=void 0!==_ref$allowHtml&&_ref$allowHtml,_ref$renderer=_ref.renderer,renderer=void 0===_ref$renderer?{}:_ref$renderer,customTags=_ref.customTags,converted=allowHtml?str:_removeHtmlTags(str),defaultRenderer={link:function(href,title,text){var linkTitle=title?'title="'.concat(title,'"'):null;return'<a class="'.concat(prefix,"--link ").concat(prefix,'--link--lg" href="').concat(href,'" ').concat(linkTitle,">").concat(text,"</a>")},list:function(body,ordered){var listType=ordered?"ol":"ul",listClass="".concat(prefix,ordered?"--list--ordered":"--list--unordered");return"<".concat(listType,' class="').concat(listClass,'">').concat(body,"</").concat(listType,">")},listitem:function(text){return'<li class="'.concat(prefix,'--list__item">').concat(text,"</li>")}};marked__WEBPACK_IMPORTED_MODULE_1__.marked.use({smartypants:!0,renderer:Object.assign(defaultRenderer,renderer)}),customTags&&isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default.a.addHook("uponSanitizeElement",(function(node,_ref2){var allowedTags=_ref2.allowedTags,tagName=_ref2.tagName;customTags.has(tagName)&&!allowedTags[tagName]&&(allowedTags[tagName]=!0)}));var convertedMarkdown=isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default.a.sanitize(Object(marked__WEBPACK_IMPORTED_MODULE_1__.marked)(converted));return customTags&&isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default.a.removeHook("uponSanitizeElement"),_cleanString(convertedMarkdown)}},275:function(module,__webpack_exports__,__webpack_require__){"use strict";var js_cookie__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(276),js_cookie__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var ipcinfoCookie=function(){function ipcinfoCookie(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ipcinfoCookie)}var Constructor,protoProps,staticProps;return Constructor=ipcinfoCookie,staticProps=[{key:"get",value:function(){var cc,lc,ipcinfo=js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get("ipcInfo");if(ipcinfo)return decodeURIComponent(ipcinfo).split(";").map((function(code){var itemParts=code.split("=");"cc"===itemParts[0]&&(cc=itemParts[1]),"lc"===itemParts[0]&&(lc=itemParts[1])})),{cc:cc,lc:lc}}},{key:"set",value:function(_ref){var cc=_ref.cc,lc=_ref.lc,info="cc=".concat(cc,";lc=").concat(lc);js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set("ipcInfo",encodeURIComponent(info),{expires:365,domain:".ibm.com"})}}],(protoProps=null)&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),ipcinfoCookie}();__webpack_exports__.a=ipcinfoCookie},304:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){var axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(83),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var _endpoint=process&&{ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk-bundle",CONDA:"/usr/share/miniconda",ANT_HOME:"/usr/share/ant",STATS_KEEPALIVE:"false",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",RUNNER_USER:"runner",GOROOT_1_15_X64:"/opt/hostedtoolcache/go/1.15.15/x64",HOMEBREW_REPOSITORY:"/home/linuxbrew/.linuxbrew/Homebrew",CHROME_BIN:"/usr/bin/google-chrome",LANG:"C.UTF-8",DOTNET_MULTILEVEL_LOOKUP:"0",JOURNAL_STREAM:"8:22897",PIPX_HOME:"/opt/pipx",GOROOT_1_17_X64:"/opt/hostedtoolcache/go/1.17.7/x64",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk-bundle",ImageOS:"ubuntu20",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu20",SGX_AESM_ADDR:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",ACCEPT_EULA:"Y",USER:"runner",CI:"true",DEBIAN_FRONTEND:"noninteractive",PIPX_BIN_DIR:"/opt/pipx_bin",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",GRAALVM_11_ROOT:"/usr/local/graalvm/graalvm-ce-java11-22.0.0.2",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GOROOT_1_16_X64:"/opt/hostedtoolcache/go/1.16.14/x64",NVM_DIR:"/home/runner/.nvm",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LEIN_HOME:"/usr/local/lib/lein",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_ACTIONS:"true",XDG_CONFIG_HOME:"/home/runner/.config",ImageVersion:"20220213.1",HOMEBREW_PREFIX:"/home/linuxbrew/.linuxbrew",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",SWIFT_PATH:"/usr/share/swift/usr/bin",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/23.1.7779620",CHROMEWEBDRIVER:"/usr/local/share/chrome_driver",INVOCATION_ID:"20216a7bf163458a88bc19f7024ef291",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",DEPLOYMENT_BASEPATH:"/opt/runner",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",HOMEBREW_CELLAR:"/home/linuxbrew/.linuxbrew/Cellar",RUNNER_PERFLOG:"/home/runner/perflog",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",DOTNET_NOLOGO:"1",PATH:"/opt/hostedtoolcache/node/14.19.0/x64/bin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",GRADLE_HOME:"/usr/share/gradle-7.4",RUNNER_TRACKING_ID:"github_8d40574d-beed-4b10-9a64-d312feb079ce",HOMEBREW_NO_AUTO_UPDATE:"1",HOME:"/home/runner",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.9.8-standalone.jar",ENABLE_RTL:"true","INPUT_ENV-FILE":".env",GITHUB_JOB:"canary-rtl",GITHUB_REF:"refs/heads/main",GITHUB_SHA:"5e72d03bb46ad179ad04a78023195e73ba3fb4ea",GITHUB_REPOSITORY:"carbon-design-system/carbon-for-ibm-dotcom-web-components-test",GITHUB_REPOSITORY_OWNER:"carbon-design-system",GITHUB_RUN_ID:"1866121974",GITHUB_RUN_NUMBER:"108",GITHUB_RETENTION_DAYS:"90",GITHUB_RUN_ATTEMPT:"1",GITHUB_ACTOR:"ibmdotcom-bot",GITHUB_WORKFLOW:"deploy-canary (Deploy to Github Pages)",GITHUB_HEAD_REF:"",GITHUB_BASE_REF:"",GITHUB_EVENT_NAME:"repository_dispatch",GITHUB_SERVER_URL:"https://github.com",GITHUB_API_URL:"https://api.github.com",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",GITHUB_REF_NAME:"main",GITHUB_REF_PROTECTED:"true",GITHUB_REF_TYPE:"branch",GITHUB_WORKSPACE:"/home/runner/work/carbon-for-ibm-dotcom-web-components-test/carbon-for-ibm-dotcom-web-components-test",GITHUB_ACTION:"__self",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",GITHUB_ACTION_REPOSITORY:"",GITHUB_ACTION_REF:"",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_9ff971ab-7a49-4e37-82d3-b7f6be5cc2d9",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_9ff971ab-7a49-4e37-82d3-b7f6be5cc2d9",RUNNER_OS:"Linux",RUNNER_ARCH:"X64",RUNNER_NAME:"GitHub Actions 17",RUNNER_TEMP:"/home/runner/work/_temp",RUNNER_WORKSPACE:"/home/runner/work/carbon-for-ibm-dotcom-web-components-test",ACTIONS_RUNTIME_URL:"https://pipelines.actions.githubusercontent.com/dtQ81jPF1LQsP0IxXyXdxcH8nvyWrpd2bZIfTlfXlKrGQl6OUp/",ACTIONS_RUNTIME_TOKEN:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVCWl9jbjNzWFlBZDBjaDRUSEJLSElnT3dPRSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC8yOTkzIExvY2F0aW9uU2VydmljZS5Db25uZWN0IFJlYWRBbmRVcGRhdGVCdWlsZEJ5VXJpOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMC8xOkJ1aWxkL0J1aWxkLzI5OTMiLCJJZGVudGl0eVR5cGVDbGFpbSI6IlN5c3RlbTpTZXJ2aWNlSWRlbnRpdHkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiJERERERERERC1ERERELUREREQtRERERC1EREREREREREREREQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJhdWkiOiJmNGVjY2RhOS03NDY2LTQ0YTQtYjVhYy0wYTE1ZDRlZDk2NmUiLCJzaWQiOiJiZTdmYmUyZi1hNGI4LTRiZTUtOTI0OC0zZDNiOWRlYmQ5N2QiLCJhYyI6Ilt7XCJTY29wZVwiOlwicmVmcy9oZWFkcy9tYWluXCIsXCJQZXJtaXNzaW9uXCI6M31dIiwib3JjaGlkIjoiYjFjYzZiYzMtZDQzNi00YWM3LTllNTItNDg1NjRiZmQzNmUwLmNhbmFyeS1ydGwuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOjFkNTY5ZjQzLTgyMjAtNGU5MS04NGFiLWY5NzY0Njc0ZTY3YyIsIm5iZiI6MTY0NTIxMTEyNSwiZXhwIjoxNjQ1MjMzOTI1fQ.0z7dZiuIfZhDvFhLnLlf7jgEuSEBxnS9F5QSajeBkLVFjp02mogBFcQpIlVP8q6arq0gQa4khClxzMzFqNXiJdwrKCdWEIPFNOP-IDMHirmwWd1Ggf8k7QCNGRdCHDy1qFyFFCXb0vP718wmvgtzaaMQpt73V5KFSje5QrJr-uD9SRrZKCjjMBQTydfVnKcZIdOQ0CTWS0Lg8jATSRYXj_PuabeqnHdG-pyZmEBsmv9GBiL2V1Y73hMV0xpAVKH7z6Rp4IpZqhejUbssMLsvnALZ5DnfzDG1SpT2NBbujZNukpNJ9zv1L20FZghfwFFInINozvBkxmpIlosghIhwlA",ACTIONS_CACHE_URL:"https://artifactcache.actions.githubusercontent.com/dtQ81jPF1LQsP0IxXyXdxcH8nvyWrpd2bZIfTlfXlKrGQl6OUp/",NODE_ENV:"production"}.GEO_API||"https://api.www.s81c.com/webmaster/dbip/";function _geolocation(){return(_geolocation=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var location,cc;return regeneratorRuntime.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_endpoint,{headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(response){return response.data}));case 2:return location=_context.sent,cc=location&&location.country,_context.abrupt("return",cc);case 5:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}__webpack_exports__.a=function(){return _geolocation.apply(this,arguments)}}).call(this,__webpack_require__(130))},31:function(module,__webpack_exports__,__webpack_require__){"use strict";function formatVideoCaption(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},duration=_ref.duration,name=_ref.name;return!name||0!==duration&&!duration?name||duration||"":"".concat(name," (").concat(duration,")")}function formatVideoDuration(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},duration=_ref2.duration,minutes=Math.floor((null!=duration?duration:0)/6e4),seconds=Math.floor((null!=duration?duration:0)/1e3%60),fillSeconds=Array.from({length:2-String(seconds).length+1}).join("0");return null==duration?duration:"".concat(minutes,":").concat(fillSeconds).concat(seconds)}__webpack_require__.d(__webpack_exports__,"a",(function(){return formatVideoCaption})),__webpack_require__.d(__webpack_exports__,"b",(function(){return formatVideoDuration}))},312:function(module,__webpack_exports__,__webpack_require__){"use strict";var window_or_global__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),window_or_global__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(window_or_global__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function(){var langs={};return window_or_global__WEBPACK_IMPORTED_MODULE_0___default.a.document&&window_or_global__WEBPACK_IMPORTED_MODULE_0___default.a.document.querySelectorAll('link[rel="alternate"]').forEach((function(link){langs[link.getAttribute("hreflang")]=link.getAttribute("href")})),langs}},315:function(module,__webpack_exports__,__webpack_require__){"use strict";var _host="https://1.www.s81c.com/common/carbon/plex",_fonts={ar:{entry:"sans-arabic",family:"IBM Plex Sans Arabic"},ja:{entry:"sans-jp",family:"IBM Plex Sans JP"},ko:{entry:"sans-kr",family:"IBM Plex Sans KR"}},_weights={100:"thin",200:"extralight",300:"light",400:"regular",450:"text",500:"medium",600:"semibold",700:"bold"};function _injectCSS(language){var weights=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===weights.length){var link=document.createElement("link");link.href="".concat(_host,"/").concat(_fonts[language].entry,".css"),link.type="text/css",link.rel="stylesheet",link.media="screen,print",document.getElementsByTagName("head")[0].appendChild(link)}else weights.forEach((function(weight){var linkWeight=document.createElement("link");linkWeight.href="".concat(_host,"/").concat(_fonts[language].entry,"-").concat(_weights[weight],".css"),linkWeight.type="text/css",linkWeight.rel="stylesheet",linkWeight.media="screen,print",document.getElementsByTagName("head")[0].appendChild(linkWeight)}))}function _setFontFamily(language){document.body.style.fontFamily="".concat(_fonts[language].family,",IBM Plex Sans,Helvetica Neue,Arial,sans-serif")}__webpack_exports__.a=function(language){var weights=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];_fonts[language]&&(_injectCSS(language,weights),_setFontFamily(language))}},333:function(module,__webpack_exports__,__webpack_require__){"use strict";var _htmlTagRegex=/<.*?>/g,_cleanStringRegex=/\n|\s{2,}|&([a-zA-Z]+);/g,_removeHtmlTags=function(str){return str.replace(_htmlTagRegex,"")},_cleanString=function(str){return str.replace(_cleanStringRegex," ")};__webpack_exports__.a=function(str){var _ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_ref$removeEntities=_ref.removeEntities,removeEntities=void 0===_ref$removeEntities||_ref$removeEntities,removedTags=_removeHtmlTags(str);return removedTags=removeEntities?_cleanString(removedTags):removedTags}},37:function(module,__webpack_exports__,__webpack_require__){"use strict";var _carbon_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(281);__webpack_exports__.a=function(elemCollection){var minSize=arguments.length>1&&void 0!==arguments[1]&&arguments[1],elemArr=Array.prototype.slice.call(elemCollection),targetWidth=minSize?parseFloat(_carbon_layout__WEBPACK_IMPORTED_MODULE_0__.b[minSize].width)*_carbon_layout__WEBPACK_IMPORTED_MODULE_0__.a:0;if(window.innerWidth>targetWidth){var targetHeight=0;elemArr.forEach((function(elem){elem.style.height="auto",elem.offsetHeight>targetHeight&&(targetHeight=elem.clientHeight)})),elemArr.forEach((function(elem){elem.style.height=targetHeight+"px"}))}else elemArr.forEach((function(elem){elem.style.height="auto"}))}},66:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),carbon_components_es_globals_js_settings_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_carbon_ibmdotcom_utilities_es_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),carbon_web_components_es_icons_arrow_down_20_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(235),carbon_web_components_es_icons_arrow_right_20_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(145),carbon_web_components_es_icons_download_20_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(236),carbon_web_components_es_icons_launch_20_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(237),carbon_web_components_es_icons_play_outline_20_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(238),_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14);let _t,_=t=>t;const{prefix:prefix}=carbon_components_es_globals_js_settings_js__WEBPACK_IMPORTED_MODULE_1__.a,{stablePrefix:ddsPrefix}=_carbon_ibmdotcom_utilities_es_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_2__.a,icons={[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.LOCAL]:carbon_web_components_es_icons_arrow_right_20_js__WEBPACK_IMPORTED_MODULE_4__.a,[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.DOWNLOAD]:carbon_web_components_es_icons_download_20_js__WEBPACK_IMPORTED_MODULE_5__.a,[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.EXTERNAL]:carbon_web_components_es_icons_launch_20_js__WEBPACK_IMPORTED_MODULE_6__.a,[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.JUMP]:carbon_web_components_es_icons_arrow_down_20_js__WEBPACK_IMPORTED_MODULE_3__.a,[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.VIDEO]:carbon_web_components_es_icons_play_outline_20_js__WEBPACK_IMPORTED_MODULE_7__.a},ariaLabels={[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.LOCAL]:"",[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.DOWNLOAD]:" - This link downloads a file",[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.EXTERNAL]:" - This link opens in a new tab",[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.JUMP]:"",[_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.VIDEO]:" - This link plays a video"};__webpack_exports__.a=Base=>class extends Base{_handleClick(event){const{disabled:disabled}=this;disabled&&(event.preventDefault(),event.stopPropagation())}_renderIcon(){var _icons$ctaType;const{ctaType:ctaType}=this;return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__.d)(_t||(_t=_`
        <slot name="icon">${0}</slot>
      `),null===(_icons$ctaType=icons[ctaType])||void 0===_icons$ctaType?void 0:_icons$ctaType.call(icons,{class:`${prefix}--card__cta ${ddsPrefix}-ce--cta__icon`}))}updated(changedProperties){super.updated(changedProperties);const{ctaType:ctaType,_linkNode:linkNode}=this;if(changedProperties.has("ctaType")||changedProperties.has("download")){const{download:download}=this;ctaType!==_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.DOWNLOAD&&download&&console.warn(`\`download\` property used with a CTA data item besides \`type: download\` (\`type: ${ctaType}\`).`)}if(linkNode&&"A"===linkNode.nodeName){if(changedProperties.has("ctaType")||changedProperties.has("href")){const{href:href}=this,hrefValue=ctaType!==_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.VIDEO?href:"#";null==hrefValue?linkNode.removeAttribute("href"):linkNode.setAttribute("href",hrefValue)}if(changedProperties.has("ctaType")||changedProperties.has("target")){const{target:target}=this,targetInEffect=ctaType!==_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_8__.a.EXTERNAL||target?target:"_blank";targetInEffect?linkNode.setAttribute("target",targetInEffect):linkNode.removeAttribute("target")}linkNode.hasAttribute("aria-label")&&linkNode.setAttribute("aria-label",linkNode.getAttribute("aria-label")+(ctaType?ariaLabels[ctaType]:""))}}}},67:function(module,__webpack_exports__,__webpack_require__){"use strict";var _carbon_ibmdotcom_utilities_es_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),carbon_web_components_es_icons_arrow_down_20_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(235),carbon_web_components_es_icons_arrow_right_20_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(145),carbon_web_components_es_icons_download_20_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(236),carbon_web_components_es_icons_launch_20_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(237),carbon_web_components_es_icons_play_outline_20_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(238),_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14);const{stablePrefix:ddsPrefix}=_carbon_ibmdotcom_utilities_es_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_0__.a;_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.LOCAL,carbon_web_components_es_icons_arrow_right_20_js__WEBPACK_IMPORTED_MODULE_2__.a,_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.DOWNLOAD,carbon_web_components_es_icons_download_20_js__WEBPACK_IMPORTED_MODULE_3__.a,_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.EXTERNAL,carbon_web_components_es_icons_launch_20_js__WEBPACK_IMPORTED_MODULE_4__.a,_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.JUMP,carbon_web_components_es_icons_arrow_down_20_js__WEBPACK_IMPORTED_MODULE_1__.a,_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.VIDEO,carbon_web_components_es_icons_play_outline_20_js__WEBPACK_IMPORTED_MODULE_5__.a;__webpack_exports__.a=Base=>class extends Base{_handleClick(event){this.focus();const{ctaType:ctaType,disabled:disabled,href:href,videoName:videoName,videoDescription:videoDescription}=this;if(ctaType===_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.VIDEO&&event.preventDefault(),!disabled){const{eventRunAction:eventRunAction}=this.constructor;this.dispatchEvent(new CustomEvent(eventRunAction,{bubbles:!0,cancelable:!0,composed:!0,detail:{href:href,ctaType:ctaType,videoName:videoName,videoDescription:videoDescription}}))}}updated(changedProperties){super.updated(changedProperties);const{ctaType:ctaType,videoName:videoName,videoDescription:videoDescription,href:href,videoDuration:videoDuration}=this,{eventRequestVideoData:eventRequestVideoData}=this.constructor;changedProperties.has("ctaType")&&ctaType===_components_cta_defs_js__WEBPACK_IMPORTED_MODULE_6__.a.VIDEO&&void 0===videoDuration&&this.dispatchEvent(new CustomEvent(eventRequestVideoData,{bubbles:!0,cancelable:!0,composed:!0,detail:{href:href,videoName:videoName,videoDescription:videoDescription}})),(changedProperties.has("videoName")&&(null===videoName||"null"===videoName)||changedProperties.has("videoDescription"))&&this.dispatchEvent(new CustomEvent(eventRequestVideoData,{bubbles:!0,cancelable:!0,composed:!0,detail:{videoName:videoName,videoDescription:videoDescription,href:href}}))}static get eventRequestVideoData(){return`${ddsPrefix}-cta-request-video-data`}static get eventRunAction(){return`${ddsPrefix}-cta-run-action`}}}}]);
//# sourceMappingURL=vendors~cloud~example-page-a~example-page-b~example-page-c~g100-theme-page~home~ui-components~white-~b69daec9.js.map