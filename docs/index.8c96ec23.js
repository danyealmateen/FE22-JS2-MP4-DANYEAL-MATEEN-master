var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},$parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequire5146;null==parcelRequire&&(parcelRequire=function(e){if(e in $parcel$modules)return $parcel$modules[e].exports;if(e in $parcel$inits){var t=$parcel$inits[e];delete $parcel$inits[e];var n={id:e,exports:{}};return $parcel$modules[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r},parcelRequire.register=function(e,t){$parcel$inits[e]=t},$parcel$global.parcelRequire5146=parcelRequire),parcelRequire.register("2Qf9l",(function(module,exports){const inputScreen=document.querySelector(".screen"),buttons=document.querySelectorAll(".btn"),clear=document.querySelector(".btn-clear"),equal=document.querySelector(".btn-equal");let expression="";buttons.forEach((button=>{button.addEventListener("click",(()=>{if(inputScreen.value+=`${button.dataset.num}`,"="===button.dataset.num)try{const result=eval(expression),logMessage=`${expression} = ${result}`;inputScreen.textContent=result.toString(),expression=result.toString(),inputScreen.value=`${logMessage}`}catch(e){const t=`Invalid expression: ${expression}`;inputScreen.textContent=`${t} = Invalid expression`,expression=""}else if("C"===button.dataset.num){const e="Clear";inputScreen.value="",inputScreen.textContent="",expression=""}else inputScreen.textContent+=button.dataset.num,expression+=button.dataset.num}))}))})),parcelRequire("2Qf9l");
//# sourceMappingURL=index.8c96ec23.js.map