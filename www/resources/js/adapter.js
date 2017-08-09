"use strict";var getUserMedia=null;var attachMediaStream=null;var reattachMediaStream=null;var webrtcDetectedBrowser=null;var webrtcDetectedVersion=null;var webrtcMinimumVersion=null;var windowdevice=null;if(window.device){var windowdevice=window.device.platform}var webrtcUtils={log:function(){if(typeof module!=="undefined"||typeof require==="function"&&typeof define==="function"){return}console.log.apply(console,arguments)}};function trace(b){if(b[b.length-1]==="\n"){b=b.substring(0,b.length-1)}if(window.performance){var a=(window.performance.now()/1000).toFixed(3);webrtcUtils.log(a+": "+b)}else{webrtcUtils.log(b)}}if(typeof window==="object"){if(window.HTMLMediaElement&&!("srcObject" in window.HTMLMediaElement.prototype)){Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return"mozSrcObject" in this?this.mozSrcObject:this._srcObject},set:function(a){if("mozSrcObject" in this){this.mozSrcObject=a}else{this._srcObject=a;this.src=URL.createObjectURL(a)}}})}getUserMedia=window.navigator&&window.navigator.getUserMedia}attachMediaStream=function(a,b){a.srcObject=b};reattachMediaStream=function(b,a){b.srcObject=a.srcObject};if(typeof window==="undefined"||!window.navigator){webrtcUtils.log("This does not appear to be a browser");webrtcDetectedBrowser="not a browser"}else{if(navigator.mozGetUserMedia&&window.mozRTCPeerConnection){webrtcUtils.log("This appears to be Firefox");webrtcDetectedBrowser="firefox";webrtcDetectedVersion=parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1],10);webrtcMinimumVersion=31;window.RTCPeerConnection=function(c,f){if(webrtcDetectedVersion<38){if(c&&c.iceServers){var e=[];for(var b=0;b<c.iceServers.length;b++){var d=c.iceServers[b];if(d.hasOwnProperty("urls")){for(var a=0;a<d.urls.length;a++){var g={url:d.urls[a]};if(d.urls[a].indexOf("turn")===0){g.username=d.username;g.credential=d.credential}e.push(g)}}else{e.push(c.iceServers[b])}}c.iceServers=e}}return new mozRTCPeerConnection(c,f)};window.RTCSessionDescription=mozRTCSessionDescription;window.RTCIceCandidate=mozRTCIceCandidate;getUserMedia=function(d,c,a){var b=function(f){if(typeof f!=="object"||f.require){return f}var e=[];Object.keys(f).forEach(function(h){if(h==="require"||h==="advanced"||h==="mediaSource"){return}var i=f[h]=(typeof f[h]==="object")?f[h]:{ideal:f[h]};if(i.min!==undefined||i.max!==undefined||i.exact!==undefined){e.push(h)}if(i.exact!==undefined){if(typeof i.exact==="number"){i.min=i.max=i.exact}else{f[h]=i.exact}delete i.exact}if(i.ideal!==undefined){f.advanced=f.advanced||[];var g={};if(typeof i.ideal==="number"){g[h]={min:i.ideal,max:i.ideal}}else{g[h]=i.ideal}f.advanced.push(g);delete i.ideal;if(!Object.keys(i).length){delete f[h]}}});if(e.length){f.require=e}return f};if(webrtcDetectedVersion<38){webrtcUtils.log("spec: "+JSON.stringify(d));if(d.audio){d.audio=b(d.audio)}if(d.video){d.video=b(d.video)}webrtcUtils.log("ff37: "+JSON.stringify(d))}return navigator.mozGetUserMedia(d,c,a)};navigator.getUserMedia=getUserMedia;if(!navigator.mediaDevices){navigator.mediaDevices={getUserMedia:requestUserMedia,addEventListener:function(){},removeEventListener:function(){}}}navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(a){var b=[{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}];a(b)})};if(webrtcDetectedVersion<41){var orgEnumerateDevices=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices)}}else{if(navigator.webkitGetUserMedia&&!!window.chrome){webrtcUtils.log("This appears to be Chrome");webrtcDetectedBrowser="chrome";webrtcDetectedVersion=parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2],10);webrtcMinimumVersion=38;window.RTCPeerConnection=function(c,d){if(c&&c.iceTransportPolicy){c.iceTransports=c.iceTransportPolicy}if(windowdevice==="Android"){var a=new RTCPeerConnection()}else{var a=new webkitRTCPeerConnection(c,d)}var b=a.getStats.bind(a);a.getStats=function(f,e,h){var g=this;var i=arguments;if(arguments.length>0&&typeof f==="function"){return b(f,e)}var j=function(m){var n={};var l=m.result();l.forEach(function(p){var o={id:p.id,timestamp:p.timestamp,type:p.type};p.names().forEach(function(q){o[q]=p.stat(q)});n[o.id]=o});return n};if(arguments.length>=2){var k=function(l){i[1](j(l))};return b.apply(this,[k,arguments[0]])}return new Promise(function(m,l){if(i.length===1&&f===null){b.apply(g,[function(n){m.apply(null,[j(n)])},l])}else{b.apply(g,[m,l])}})};return a};["createOffer","createAnswer"].forEach(function(b){var a=webkitRTCPeerConnection.prototype[b];webkitRTCPeerConnection.prototype[b]=function(){var c=this;if(arguments.length<1||(arguments.length===1&&typeof(arguments[0])==="object")){var d=arguments.length===1?arguments[0]:undefined;return new Promise(function(f,e){a.apply(c,[f,e,d])})}else{return a.apply(this,arguments)}}});["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(b){var a=webkitRTCPeerConnection.prototype[b];webkitRTCPeerConnection.prototype[b]=function(){var d=arguments;var c=this;return new Promise(function(f,e){a.apply(c,[d[0],function(){f();if(d.length>=2){d[1].apply(null,[])}},function(g){e(g);if(d.length>=3){d[2].apply(null,[g])}}])})}});var constraintsToChrome=function(b){if(typeof b!=="object"||b.mandatory||b.optional){return b}var a={};Object.keys(b).forEach(function(d){if(d==="require"||d==="advanced"||d==="mediaSource"){return}var e=(typeof b[d]==="object")?b[d]:{ideal:b[d]};if(e.exact!==undefined&&typeof e.exact==="number"){e.min=e.max=e.exact}var f=function(h,g){if(h){return h+g.charAt(0).toUpperCase()+g.slice(1)}return(g==="deviceId")?"sourceId":g};if(e.ideal!==undefined){a.optional=a.optional||[];var c={};if(typeof e.ideal==="number"){c[f("min",d)]=e.ideal;a.optional.push(c);c={};c[f("max",d)]=e.ideal;a.optional.push(c)}else{c[f("",d)]=e.ideal;a.optional.push(c)}}if(e.exact!==undefined&&typeof e.exact!=="number"){a.mandatory=a.mandatory||{};a.mandatory[f("",d)]=e.exact}else{["min","max"].forEach(function(g){if(e[g]!==undefined){a.mandatory=a.mandatory||{};a.mandatory[f(g,d)]=e[g]}})}});if(b.advanced){a.optional=(a.optional||[]).concat(b.advanced)}return a};getUserMedia=function(c,b,a){if(c.audio){c.audio=constraintsToChrome(c.audio)}if(c.video){c.video=constraintsToChrome(c.video)}webrtcUtils.log("chrome: "+JSON.stringify(c));return navigator.webkitGetUserMedia(c,b,a)};navigator.getUserMedia=getUserMedia;if(!navigator.mediaDevices){navigator.mediaDevices={getUserMedia:requestUserMedia,enumerateDevices:function(){return new Promise(function(b){var a={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(c){b(c.map(function(d){return{label:d.label,kind:a[d.kind],deviceId:d.id,groupId:""}}))})})}}}if(!navigator.mediaDevices.getUserMedia){navigator.mediaDevices.getUserMedia=function(a){return requestUserMedia(a)}}else{var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(a){webrtcUtils.log("spec:   "+JSON.stringify(a));a.audio=constraintsToChrome(a.audio);a.video=constraintsToChrome(a.video);webrtcUtils.log("chrome: "+JSON.stringify(a));return origGetUserMedia(a)}}if(typeof navigator.mediaDevices.addEventListener==="undefined"){navigator.mediaDevices.addEventListener=function(){webrtcUtils.log("Dummy mediaDevices.addEventListener called.")}}if(typeof navigator.mediaDevices.removeEventListener==="undefined"){navigator.mediaDevices.removeEventListener=function(){webrtcUtils.log("Dummy mediaDevices.removeEventListener called.")}}webrtcUtils.log("Chrome version:"+webrtcDetectedVersion);attachMediaStream=function(a,b){if(webrtcDetectedVersion>=43){a.srcObject=b}else{if(typeof a.src!=="undefined"){a.src=URL.createObjectURL(b)}else{webrtcUtils.log("Error attaching stream to element.")}}};reattachMediaStream=function(b,a){if(webrtcDetectedVersion>=43){b.srcObject=a.srcObject}else{b.src=a.src}}}else{if(navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)){webrtcUtils.log("This appears to be Edge");webrtcDetectedBrowser="edge";webrtcDetectedVersion=parseInt(navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)[2],10);webrtcMinimumVersion=12}else{if(navigator.webkitGetUserMedia){webrtcUtils.log("This appears to be Android Chrome");webrtcDetectedBrowser="chrome";webrtcDetectedVersion=parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2],10);webrtcMinimumVersion=38;window.RTCPeerConnection=function(c,d){if(c&&c.iceTransportPolicy){c.iceTransports=c.iceTransportPolicy}if(windowdevice==="Android"){var a=new RTCPeerConnection()}else{var a=new webkitRTCPeerConnection(c,d)}var b=a.getStats.bind(a);a.getStats=function(f,e,h){var g=this;var i=arguments;if(arguments.length>0&&typeof f==="function"){return b(f,e)}var j=function(m){var n={};var l=m.result();l.forEach(function(p){var o={id:p.id,timestamp:p.timestamp,type:p.type};p.names().forEach(function(q){o[q]=p.stat(q)});n[o.id]=o});return n};if(arguments.length>=2){var k=function(l){i[1](j(l))};return b.apply(this,[k,arguments[0]])}return new Promise(function(m,l){if(i.length===1&&f===null){b.apply(g,[function(n){m.apply(null,[j(n)])},l])}else{b.apply(g,[m,l])}})};return a};getUserMedia=function(c,b,a){if(c.audio){c.audio=constraintsToChrome(c.audio)}if(c.video){c.video=constraintsToChrome(c.video)}webrtcUtils.log("chrome: "+JSON.stringify(c));return navigator.webkitGetUserMedia(c,b,a)};navigator.getUserMedia=getUserMedia;["createOffer","createAnswer"].forEach(function(b){var a=webkitRTCPeerConnection.prototype[b];webkitRTCPeerConnection.prototype[b]=function(){var c=this;if(arguments.length<1||(arguments.length===1&&typeof(arguments[0])==="object")){var d=arguments.length===1?arguments[0]:undefined;return new Promise(function(f,e){a.apply(c,[f,e,d])})}else{return a.apply(this,arguments)}}});["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(b){var a=webkitRTCPeerConnection.prototype[b];webkitRTCPeerConnection.prototype[b]=function(){var d=arguments;var c=this;return new Promise(function(f,e){a.apply(c,[d[0],function(){f();if(d.length>=2){d[1].apply(null,[])}},function(g){e(g);if(d.length>=3){d[2].apply(null,[g])}}])})}});var constraintsToChrome=function(b){if(typeof b!=="object"||b.mandatory||b.optional){return b}var a={};Object.keys(b).forEach(function(d){if(d==="require"||d==="advanced"||d==="mediaSource"){return}var e=(typeof b[d]==="object")?b[d]:{ideal:b[d]};if(e.exact!==undefined&&typeof e.exact==="number"){e.min=e.max=e.exact}var f=function(h,g){if(h){return h+g.charAt(0).toUpperCase()+g.slice(1)}return(g==="deviceId")?"sourceId":g};if(e.ideal!==undefined){a.optional=a.optional||[];var c={};if(typeof e.ideal==="number"){c[f("min",d)]=e.ideal;a.optional.push(c);c={};c[f("max",d)]=e.ideal;a.optional.push(c)}else{c[f("",d)]=e.ideal;a.optional.push(c)}}if(e.exact!==undefined&&typeof e.exact!=="number"){a.mandatory=a.mandatory||{};a.mandatory[f("",d)]=e.exact}else{["min","max"].forEach(function(g){if(e[g]!==undefined){a.mandatory=a.mandatory||{};a.mandatory[f(g,d)]=e[g]}})}});if(b.advanced){a.optional=(a.optional||[]).concat(b.advanced)}return a};webrtcUtils.log("Chrome version:"+webrtcDetectedVersion);attachMediaStream=function(a,b){if(webrtcDetectedVersion>=43){a.srcObject=b}else{if(typeof a.src!=="undefined"){a.src=URL.createObjectURL(b)}else{webrtcUtils.log("Error attaching stream to element.")}}};reattachMediaStream=function(b,a){if(webrtcDetectedVersion>=43){b.srcObject=a.srcObject}else{b.src=a.src}}}else{window.RTCPeerConnection=function(c,d){if(c&&c.iceTransportPolicy){c.iceTransports=c.iceTransportPolicy}var a=new RTCPeerConnection();var b=a.getStats.bind(a);a.getStats=function(f,e,h){var g=this;var i=arguments;if(arguments.length>0&&typeof f==="function"){return b(f,e)}var j=function(m){var n={};var l=m.result();l.forEach(function(p){var o={id:p.id,timestamp:p.timestamp,type:p.type};p.names().forEach(function(q){o[q]=p.stat(q)});n[o.id]=o});return n};if(arguments.length>=2){var k=function(l){i[1](j(l))};return b.apply(this,[k,arguments[0]])}return new Promise(function(m,l){if(i.length===1&&f===null){b.apply(g,[function(n){m.apply(null,[j(n)])},l])}else{b.apply(g,[m,l])}})};return a};["createOffer","createAnswer"].forEach(function(b){var a=webkitRTCPeerConnection.prototype[b];webkitRTCPeerConnection.prototype[b]=function(){var c=this;if(arguments.length<1||(arguments.length===1&&typeof(arguments[0])==="object")){var d=arguments.length===1?arguments[0]:undefined;return new Promise(function(f,e){a.apply(c,[f,e,d])})}else{return a.apply(this,arguments)}}});["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(b){var a=webkitRTCPeerConnection.prototype[b];webkitRTCPeerConnection.prototype[b]=function(){var d=arguments;var c=this;return new Promise(function(f,e){a.apply(c,[d[0],function(){f();if(d.length>=2){d[1].apply(null,[])}},function(g){e(g);if(d.length>=3){d[2].apply(null,[g])}}])})}})}}}}}function requestUserMedia(a){return new Promise(function(c,b){getUserMedia(a,c,b)})}var webrtcTesting={};Object.defineProperty(webrtcTesting,"version",{set:function(a){webrtcDetectedVersion=a}});if(typeof module!=="undefined"){var RTCPeerConnection;if(typeof window!=="undefined"){RTCPeerConnection=window.RTCPeerConnection}module.exports={RTCPeerConnection:RTCPeerConnection,getUserMedia:getUserMedia,attachMediaStream:attachMediaStream,reattachMediaStream:reattachMediaStream,webrtcDetectedBrowser:webrtcDetectedBrowser,webrtcDetectedVersion:webrtcDetectedVersion,webrtcMinimumVersion:webrtcMinimumVersion,webrtcTesting:webrtcTesting}}else{if((typeof require==="function")&&(typeof define==="function")){define([],function(){return{RTCPeerConnection:window.RTCPeerConnection,getUserMedia:getUserMedia,attachMediaStream:attachMediaStream,reattachMediaStream:reattachMediaStream,webrtcDetectedBrowser:webrtcDetectedBrowser,webrtcDetectedVersion:webrtcDetectedVersion,webrtcMinimumVersion:webrtcMinimumVersion,webrtcTesting:webrtcTesting}})}};