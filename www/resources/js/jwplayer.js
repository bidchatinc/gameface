!function(e,t){
    "object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jwplayer=t():e.jwplayer=t()
}(this,function(){
    return function(e){
        function t(n){
            if(i[n])return i[n].exports;
            var o=i[n]={
                exports:{},
                id:n,
                loaded:!1
            };
                
            return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports
        }
        var n=window.webpackJsonpjwplayer;
        window.webpackJsonpjwplayer=function(i,r){
            for(var a,s,l=0,c=[];l<i.length;l++)s=i[l],o[s]&&c.push.apply(c,o[s]),o[s]=0;
            for(a in r)e[a]=r[a];for(n&&n(i,r);c.length;)c.shift().call(null,t)
        };
                
        var i={},o={
            0:0
        };
        
        return t.e=function(e,n){
            if(0===o[e])return n.call(null,t);
            if(void 0!==o[e])o[e].push(n);
            else{
                o[e]=[n];
                var i=document.getElementsByTagName("head")[0],r=document.createElement("script");
                r.type="text/javascript",r.charset="utf-8",r.async=!0,r.src=t.p+""+({
                    1:"provider.caterpillar",
                    2:"provider.shaka",
                    3:"provider.cast",
                    4:"provider.html5",
                    5:"provider.flash",
                    6:"provider.youtube",
                    7:"polyfills.vttcue",
                    8:"polyfills.vttrenderer",
                    9:"polyfills.promise",
                    10:"polyfills.base64",
                    11:"vttparser"
                }
                [e]||e)+".js",i.appendChild(r)
            }
        },t.m=e,t.c=i,t.p="",t(0)
    }([function(e,t,n){
        e.exports=n(212)
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            var e={},t=Array.prototype,n=Object.prototype,i=Function.prototype,o=t.slice,r=t.concat,a=n.toString,s=n.hasOwnProperty,l=t.map,c=t.reduce,u=t.forEach,d=t.filter,p=t.every,h=t.some,f=t.indexOf,g=Array.isArray,m=Object.keys,v=i.bind,w=function(e){
                return e instanceof w?e:this instanceof w?void 0:new w(e)
            },y=w.each=w.forEach=function(t,n,i){
                if(null==t)return t;
                if(u&&t.forEach===u)t.forEach(n,i);
                else if(t.length===+t.length){
                    for(var o=0,r=t.length;o<r;o++)if(n.call(i,t[o],o,t)===e)return
                }else for(var a=w.keys(t),o=0,r=a.length;o<r;o++)if(n.call(i,t[a[o]],a[o],t)===e)return;return t
            };
            
            w.map=w.collect=function(e,t,n){
                var i=[];
                return null==e?i:l&&e.map===l?e.map(t,n):(y(e,function(e,o,r){
                    i.push(t.call(n,e,o,r))
                }),i)
            };
            
            var j="Reduce of empty array with no initial value";
            w.reduce=w.foldl=w.inject=function(e,t,n,i){
                var o=arguments.length>2;
                if(null==e&&(e=[]),c&&e.reduce===c)return i&&(t=w.bind(t,i)),o?e.reduce(t,n):e.reduce(t);
                if(y(e,function(e,r,a){
                    o?n=t.call(i,n,e,r,a):(n=e,o=!0)
                }),!o)throw new TypeError(j);
                return n
            },w.find=w.detect=function(e,t,n){
                var i;
                return b(e,function(e,o,r){
                    if(t.call(n,e,o,r))return i=e,!0
                }),i
            },w.filter=w.select=function(e,t,n){
                var i=[];
                return null==e?i:d&&e.filter===d?e.filter(t,n):(y(e,function(e,o,r){
                    t.call(n,e,o,r)&&i.push(e)
                }),i)
            },w.reject=function(e,t,n){
                return w.filter(e,function(e,i,o){
                    return!t.call(n,e,i,o)
                },n)
            },w.compact=function(e){
                return w.filter(e,w.identity)
            },w.every=w.all=function(t,n,i){
                n||(n=w.identity);
                var o=!0;
                return null==t?o:p&&t.every===p?t.every(n,i):(y(t,function(t,r,a){
                    if(!(o=o&&n.call(i,t,r,a)))return e
                }),!!o)
            };
            
            var b=w.some=w.any=function(t,n,i){
                n||(n=w.identity);
                var o=!1;
                return null==t?o:h&&t.some===h?t.some(n,i):(y(t,function(t,r,a){
                    if(o||(o=n.call(i,t,r,a)))return e
                }),!!o)
            };
            
            w.size=function(e){
                return null==e?0:e.length===+e.length?e.length:w.keys(e).length
            },w.last=function(e,t,n){
                if(null!=e)return null==t||n?e[e.length-1]:o.call(e,Math.max(e.length-t,0))
            },w.after=function(e,t){
                return function(){
                    if(--e<1)return t.apply(this,arguments)
                }
            },w.before=function(e,t){
                var n;
                return function(){
                    return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n
                }
            };
    
            var E=function(e){
                return null==e?w.identity:w.isFunction(e)?e:w.property(e)
            },k=function(e){
                return function(t,n,i){
                    var o={};
        
                    return n=E(n),y(t,function(r,a){
                        var s=n.call(i,r,a,t);
                        e(o,s,r)
                    }),o
                }
            };

            w.groupBy=k(function(e,t,n){
                w.has(e,t)?e[t].push(n):e[t]=[n]
            }),w.indexBy=k(function(e,t,n){
                e[t]=n
            }),w.sortedIndex=function(e,t,n,i){
                n=E(n);
                for(var o=n.call(i,t),r=0,a=e.length;r<a;){
                    var s=r+a>>>1;
                    n.call(i,e[s])<o?r=s+1:a=s
                }
                return r
            };
    
            var b=w.some=w.any=function(t,n,i){
                n||(n=w.identity);
                var o=!1;
                return null==t?o:h&&t.some===h?t.some(n,i):(y(t,function(t,r,a){
                    if(o||(o=n.call(i,t,r,a)))return e
                }),!!o)
            };
    
            w.contains=w.include=function(e,t){
                return null!=e&&(e.length!==+e.length&&(e=w.values(e)),w.indexOf(e,t)>=0)
            },w.pluck=function(e,t){
                return w.map(e,w.property(t))
            },w.where=function(e,t){
                return w.filter(e,w.matches(t))
            },w.findWhere=function(e,t){
                return w.find(e,w.matches(t))
            },w.max=function(e,t,n){
                if(!t&&w.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);
                var i=-(1/0),o=-(1/0);
                return y(e,function(e,r,a){
                    var s=t?t.call(n,e,r,a):e;
                    s>o&&(i=e,o=s)
                }),i
            },w.difference=function(e){
                var n=r.apply(t,o.call(arguments,1));
                return w.filter(e,function(e){
                    return!w.contains(n,e)
                })
            },w.without=function(e){
                return w.difference(e,o.call(arguments,1))
            },w.indexOf=function(e,t,n){
                if(null==e)return-1;
                var i=0,o=e.length;
                if(n){
                    if("number"!=typeof n)return i=w.sortedIndex(e,t),e[i]===t?i:-1;
                    i=n<0?Math.max(0,o+n):n
                }
                if(f&&e.indexOf===f)return e.indexOf(t,n);
                for(;i<o;i++)if(e[i]===t)return i;return-1
            };
    
            var L=function(){};
    
            w.bind=function(e,t){
                var n,i;
                if(v&&e.bind===v)return v.apply(e,o.call(arguments,1));
                if(!w.isFunction(e))throw new TypeError;
                return n=o.call(arguments,2),i=function(){
                    if(!(this instanceof i))return e.apply(t,n.concat(o.call(arguments)));
                    L.prototype=e.prototype;
                    var r=new L;
                    L.prototype=null;
                    var a=e.apply(r,n.concat(o.call(arguments)));
                    return Object(a)===a?a:r
                }
            },w.partial=function(e){
                var t=o.call(arguments,1);
                return function(){
                    for(var n=0,i=t.slice(),o=0,r=i.length;o<r;o++)i[o]===w&&(i[o]=arguments[n++]);
                    for(;n<arguments.length;)i.push(arguments[n++]);
                    return e.apply(this,i)
                }
            },w.once=w.partial(w.before,2),w.memoize=function(e,t){
                var n={};
    
                return t||(t=w.identity),function(){
                    var i=t.apply(this,arguments);
                    return w.has(n,i)?n[i]:n[i]=e.apply(this,arguments)
                }
            },w.delay=function(e,t){
                var n=o.call(arguments,2);
                return setTimeout(function(){
                    return e.apply(null,n)
                },t)
            },w.defer=function(e){
                return w.delay.apply(w,[e,1].concat(o.call(arguments,1)))
            },w.throttle=function(e,t,n){
                var i,o,r,a=null,s=0;
                n||(n={});
                var l=function(){
                    s=n.leading===!1?0:w.now(),a=null,r=e.apply(i,o),i=o=null
                };
        
                return function(){
                    var c=w.now();
                    s||n.leading!==!1||(s=c);
                    var u=t-(c-s);
                    return i=this,o=arguments,u<=0?(clearTimeout(a),a=null,s=c,r=e.apply(i,o),i=o=null):a||n.trailing===!1||(a=setTimeout(l,u)),r
                }
            },w.keys=function(e){
                if(!w.isObject(e))return[];
                if(m)return m(e);
                var t=[];
                for(var n in e)w.has(e,n)&&t.push(n);return t
            },w.invert=function(e){
                for(var t={},n=w.keys(e),i=0,o=n.length;i<o;i++)t[e[n[i]]]=n[i];
                return t
            },w.defaults=function(e){
                return y(o.call(arguments,1),function(t){
                    if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])
                }),e
            },w.extend=function(e){
                return y(o.call(arguments,1),function(t){
                    if(t)for(var n in t)e[n]=t[n]
                }),e
            },w.pick=function(e){
                var n={},i=r.apply(t,o.call(arguments,1));
                return y(i,function(t){
                    t in e&&(n[t]=e[t])
                }),n
            },w.omit=function(e){
                var n={},i=r.apply(t,o.call(arguments,1));
                for(var a in e)w.contains(i,a)||(n[a]=e[a]);return n
            },w.clone=function(e){
                return w.isObject(e)?w.isArray(e)?e.slice():w.extend({},e):e
            },w.isArray=g||function(e){
                return"[object Array]"==a.call(e)
            },w.isObject=function(e){
                return e===Object(e)
            },y(["Arguments","Function","String","Number","Date","RegExp"],function(e){
                w["is"+e]=function(t){
                    return a.call(t)=="[object "+e+"]"
                }
            }),w.isArguments(arguments)||(w.isArguments=function(e){
                return!(!e||!w.has(e,"callee"))
            }),w.isFunction=function(e){
                return"function"==typeof e
            },w.isFinite=function(e){
                return isFinite(e)&&!isNaN(parseFloat(e))
            },w.isNaN=function(e){
                return w.isNumber(e)&&e!=+e
            },w.isBoolean=function(e){
                return e===!0||e===!1||"[object Boolean]"==a.call(e)
            },w.isNull=function(e){
                return null===e
            },w.isUndefined=function(e){
                return void 0===e
            },w.has=function(e,t){
                return s.call(e,t)
            },w.identity=function(e){
                return e
            },w.constant=function(e){
                return function(){
                    return e
                }
            },w.property=function(e){
                return function(t){
                    return t[e]
                }
            },w.propertyOf=function(e){
                return null==e?function(){}:function(t){
                    return e[t]
                }
            },w.matches=function(e){
                return function(t){
                    if(t===e)return!0;
                    for(var n in e)if(e[n]!==t[n])return!1;return!0
                }
            },w.now=Date.now||function(){
                return(new Date).getTime()
            },w.result=function(e,t){
                if(null!=e){
                    var n=e[t];
                    return w.isFunction(n)?n.call(e):n
                }
            };

            var _=0;
            return w.uniqueId=function(e){
                var t=++_+"";
                return e?e+t:t
            },w
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(8),n(1),n(75),n(76),n(29),n(43),n(21),n(74),n(44),n(78),n(183)],o=function(e,t,n,i,o,r,a,s,l,c,u){
            var d={};
        
            return d.log=function(){
                window.console&&("object"==typeof console.log?console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments))
            },d.between=function(e,t,n){
                return Math.max(Math.min(e,n),t)
            },d.foreach=function(e,t){
                var n,i;
                for(n in e)"function"===d.typeOf(e.hasOwnProperty)?e.hasOwnProperty(n)&&(i=e[n],t(n,i)):(i=e[n],t(n,i))
            },d.indexOf=t.indexOf,d.noop=function(){},d.seconds=e.seconds,d.prefix=e.prefix,d.suffix=e.suffix,t.extend(d,r,a,l,n,s,i,o,c,u),d
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1)],o=function(e){
            var t=[],n=t.slice,i={
                on:function(e,t,n){
                    if(!r(this,"on",e,[t,n])||!t)return this;
                    this._events||(this._events={});
                    var i=this._events[e]||(this._events[e]=[]);
                    return i.push({
                        callback:t,
                        context:n
                    }),this
                },
                once:function(t,n,i){
                    if(!r(this,"once",t,[n,i])||!n)return this;
                    var o=this,a=e.once(function(){
                        o.off(t,a),n.apply(this,arguments)
                    });
                    return a._callback=n,this.on(t,a,i)
                },
                off:function(t,n,i){
                    var o,a,s,l,c,u,d,p;
                    if(!this._events||!r(this,"off",t,[n,i]))return this;
                    if(!t&&!n&&!i)return this._events=void 0,this;
                    for(l=t?[t]:e.keys(this._events),c=0,u=l.length;c<u;c++)if(t=l[c],s=this._events[t]){
                        if(this._events[t]=o=[],n||i)for(d=0,p=s.length;d<p;d++)a=s[d],(n&&n!==a.callback&&n!==a.callback._callback||i&&i!==a.context)&&o.push(a);
                        o.length||delete this._events[t]
                    }
                    return this
                },
                trigger:function(e){
                    if(!this._events)return this;
                    var t=n.call(arguments,1);
                    if(!r(this,"trigger",e,t))return this;
                    var i=this._events[e],o=this._events.all;
                    return i&&a(i,t,this),o&&a(o,arguments,this),this
                },
                triggerSafe:function(e){
                    if(!this._events)return this;
                    var t=n.call(arguments,1);
                    if(!r(this,"trigger",e,t))return this;
                    var i=this._events[e],o=this._events.all;
                    return i&&s(i,t,this),o&&s(o,arguments,this),this
                }
            },o=/\s+/,r=function(e,t,n,i){
                if(!n)return!0;
                if("object"==typeof n){
                    for(var r in n)e[t].apply(e,[r,n[r]].concat(i));return!1
                }
                if(o.test(n)){
                    for(var a=n.split(o),s=0,l=a.length;s<l;s++)e[t].apply(e,[a[s]].concat(i));
                    return!1
                }
                return!0
            },a=function(e,t,n){
                var i,o=-1,r=e.length,a=t[0],s=t[1],l=t[2];
                switch(t.length){
                    case 0:
                        for(;++o<r;)(i=e[o]).callback.call(i.context||n);
                        return;
                    case 1:
                        for(;++o<r;)(i=e[o]).callback.call(i.context||n,a);
                        return;
                    case 2:
                        for(;++o<r;)(i=e[o]).callback.call(i.context||n,a,s);
                        return;
                    case 3:
                        for(;++o<r;)(i=e[o]).callback.call(i.context||n,a,s,l);
                        return;
                    default:
                        for(;++o<r;)(i=e[o]).callback.apply(i.context||n,t);
                        return
                }
            },s=function(e,t,n){
                for(var i,o=-1,r=e.length;++o<r;)try{
                    (i=e[o]).callback.apply(i.context||n,t)
                }
                catch(a){}
            };
    
            return i
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            var e={
                DRAG:"drag",
                DRAG_START:"dragStart",
                DRAG_END:"dragEnd",
                CLICK:"click",
                //DOUBLE_CLICK:"doubleClick",
                TAP:"tap",
                //DOUBLE_TAP:"doubleTap",
                OVER:"over",
                MOVE:"move",
                OUT:"out"
            },t={
                COMPLETE:"complete",
                ERROR:"error",
                JWPLAYER_AD_CLICK:"adClick",
                JWPLAYER_AD_COMPANIONS:"adCompanions",
                JWPLAYER_AD_COMPLETE:"adComplete",
                JWPLAYER_AD_ERROR:"adError",
                JWPLAYER_AD_IMPRESSION:"adImpression",
                JWPLAYER_AD_META:"adMeta",
                JWPLAYER_AD_PAUSE:"adPause",
                JWPLAYER_AD_PLAY:"adPlay",
                JWPLAYER_AD_SKIPPED:"adSkipped",
                JWPLAYER_AD_TIME:"adTime",
                JWPLAYER_CAST_AD_CHANGED:"castAdChanged",
                JWPLAYER_MEDIA_COMPLETE:"complete",
                JWPLAYER_READY:"ready",
                JWPLAYER_MEDIA_SEEK:"seek",
                JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",
                JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",
                JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",
                JWPLAYER_DISPLAY_CLICK:"displayClick",
                JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",
                JWPLAYER_CAST_SESSION:"cast",
                JWPLAYER_MEDIA_ERROR:"mediaError",
                JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",
                JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",
                JWPLAYER_MEDIA_LOADED:"loaded",
                JWPLAYER_MEDIA_SEEKED:"seeked",
                JWPLAYER_SETUP_ERROR:"setupError",
                JWPLAYER_ERROR:"error",
                JWPLAYER_PLAYER_STATE:"state",
                JWPLAYER_CAST_AVAILABLE:"castAvailable",
                JWPLAYER_MEDIA_BUFFER:"bufferChange",
                JWPLAYER_MEDIA_TIME:"time",
                JWPLAYER_MEDIA_TYPE:"mediaType",
                JWPLAYER_MEDIA_VOLUME:"volume",
                JWPLAYER_MEDIA_MUTE:"mute",
                JWPLAYER_MEDIA_META:"meta",
                JWPLAYER_MEDIA_LEVELS:"levels",
                JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",
                JWPLAYER_CONTROLS:"controls",
                JWPLAYER_FULLSCREEN:"fullscreen",
                JWPLAYER_RESIZE:"resize",
                JWPLAYER_PLAYLIST_ITEM:"playlistItem",
                JWPLAYER_PLAYLIST_LOADED:"playlist",
                JWPLAYER_AUDIO_TRACKS:"audioTracks",
                JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",
                JWPLAYER_LOGO_CLICK:"logoClick",
                JWPLAYER_CAPTIONS_LIST:"captionsList",
                JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",
                JWPLAYER_PROVIDER_CHANGED:"providerChanged",
                JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",
                JWPLAYER_USER_ACTION:"userAction",
                JWPLAYER_PROVIDER_CLICK:"providerClick",
                JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",
                JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",
                JWPLAYER_INSTREAM_CLICK:"instreamClick"
            };
        
            return t.touchEvents=e,t
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            return{
                BUFFERING:"buffering",
                IDLE:"idle",
                COMPLETE:"complete",
                PAUSED:"paused",
                PLAYING:"playing",
                ERROR:"error",
                LOADING:"loading",
                STALLED:"stalled"
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,function(e,t,n){
        var i,o;
        i=[n(1)],o=function(e){
            function t(e){
                return!!/[\(,]format=m3u8-/i.test(e)&&"m3u8"
            }
            var n=function(e){
                return e.replace(/^\s+|\s+$/g,"")
            },i=function(e,t,n){
                for(e=""+e,n=n||"0";e.length<t;)e=n+e;
                return e
            },o=function(e,t){
                for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()===t.toLowerCase())return e.attributes[n].value.toString();return""
            },r=function(e){
                if(!e||"rtmp"===e.substr(0,4))return"";
                var n=t(e);
                return n?n:(e=e.split("?")[0].split("#")[0],e.lastIndexOf(".")>-1?e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase():void 0)
            },a=function(e){
                var t=parseInt(e/3600),n=parseInt(e/60)%60,o=e%60;
                return i(t,2)+":"+i(n,2)+":"+i(o.toFixed(3),6)
            },s=function(t,n){
                if(e.isNumber(t))return t;
                t=t.replace(",",".");
                var i=t.split(":"),o=i.length,r=0;
                if("s"===t.slice(-1))r=parseFloat(t);
                else if("m"===t.slice(-1))r=60*parseFloat(t);
                else if("h"===t.slice(-1))r=3600*parseFloat(t);
                else if(o>1){
                    var a=o-1;
                    4===o&&(n&&(r=parseFloat(i[a])/n),a-=1),r+=parseFloat(i[a]),r+=60*parseFloat(i[a-1]),o>=3&&(r+=3600*parseFloat(i[a-2]))
                }else r=parseFloat(t);
                return r
            },l=function(t,n){
                return e.map(t,function(e){
                    return n+e
                })
            },c=function(t,n){
                return e.map(t,function(e){
                    return e+n
                })
            };
            
            return{
                trim:n,
                pad:i,
                xmlAttribute:o,
                extension:r,
                hms:a,
                seconds:s,
                suffix:c,
                prefix:l
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(3),n(4),n(1),n(2)],o=function(e,t,n,i){
            function o(e,t){
                return/touch/.test(e.type)?(e.originalEvent||e).changedTouches[0]["page"+t]:e["page"+t]
            }
            function r(e){
                var t=e||window.event;
                return e instanceof MouseEvent&&("which"in t?3===t.which:"button"in t&&2===t.button)
            }
            function a(e,t,n){
                var i;
                return i=t instanceof MouseEvent||!t.touches&&!t.changedTouches?t:t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0],{
                    type:e,
                    target:t.target,
                    currentTarget:n,
                    pageX:i.pageX,
                    pageY:i.pageY
                }
            }
            function s(e){
                (e instanceof MouseEvent||e instanceof window.TouchEvent)&&(e.preventManipulation&&e.preventManipulation(),e.cancelable&&e.preventDefault&&e.preventDefault())
            }
            var l=!n.isUndefined(window.PointerEvent),c=!l&&i.isMobile(),u=!l&&!c,d=i.isFF()&&i.isOSX(),p=function(e,i){
                function c(e){
                    (u||l&&"touch"!==e.pointerType)&&v(t.touchEvents.OVER,e)
                }
                function p(e){
                    (u||l&&"touch"!==e.pointerType)&&v(t.touchEvents.MOVE,e)
                }
                function h(n){
                    (u||l&&"touch"!==n.pointerType&&!e.contains(document.elementFromPoint(n.x,n.y)))&&v(t.touchEvents.OUT,n)
                }
                function f(t){
                    w=t.target,E=o(t,"X"),k=o(t,"Y"),r(t)||(l?t.isPrimary&&(i.preventScrolling&&(y=t.pointerId,e.setPointerCapture(y)),e.addEventListener("pointermove",g),e.addEventListener("pointercancel",m),e.addEventListener("pointerup",m)):u&&(document.addEventListener("mousemove",g),d&&"object"===t.target.nodeName.toLowerCase()?e.addEventListener("click",m):document.addEventListener("mouseup",m)),w.addEventListener("touchmove",g),w.addEventListener("touchcancel",m),w.addEventListener("touchend",m))
                }
                function g(e){
                    var n=t.touchEvents,r=6;
                    if(b)v(n.DRAG,e);
                    else{
                        var a=o(e,"X"),l=o(e,"Y"),c=a-E,u=l-k;
                        c*c+u*u>r*r&&(v(n.DRAG_START,e),b=!0,v(n.DRAG,e))
                    }
                    i.preventScrolling&&s(e)
                }
                function m(n){
                    var o=t.touchEvents;
                    l?(i.preventScrolling&&e.releasePointerCapture(y),e.removeEventListener("pointermove",g),e.removeEventListener("pointercancel",m),e.removeEventListener("pointerup",m)):u&&(document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",m)),w.removeEventListener("touchmove",g),w.removeEventListener("touchcancel",m),w.removeEventListener("touchend",m),b?v(o.DRAG_END,n):i.directSelect&&n.target!==e||n.type.indexOf("cancel")!==-1||(l&&n instanceof window.PointerEvent?"touch"===n.pointerType?v(o.TAP,n):v(o.CLICK,n):u?v(o.CLICK,n):(v(o.TAP,n),s(n))),w=null,b=!1
                }
                function v(e,o){
                    var r;
                    if(i.enableDoubleTap&&(e===t.touchEvents.CLICK||e===t.touchEvents.TAP))if(n.now()-L<_){
                        var s=e===t.touchEvents.CLICK?t.touchEvents.DOUBLE_CLICK:t.touchEvents.DOUBLE_TAP;
                        r=a(s,o,j),A.trigger(s,r),L=0
                    }else L=n.now();
                    r=a(e,o,j),A.trigger(e,r)
                }
                var w,y,j=e,b=!1,E=0,k=0,L=0,_=300;
                i=i||{},l?(e.addEventListener("pointerdown",f),i.useHover&&(e.addEventListener("pointerover",c),e.addEventListener("pointerout",h)),i.useMove&&e.addEventListener("pointermove",p)):u&&(e.addEventListener("mousedown",f),i.useHover&&(e.addEventListener("mouseover",c),e.addEventListener("mouseout",h)),i.useMove&&e.addEventListener("mousemove",p)),e.addEventListener("touchstart",f);
                var A=this;
                return this.triggerEvent=v,this.destroy=function(){
                    e.removeEventListener("touchstart",f),e.removeEventListener("mousedown",f),w&&(w.removeEventListener("touchmove",g),w.removeEventListener("touchcancel",m),w.removeEventListener("touchend",m)),l&&(i.preventScrolling&&e.releasePointerCapture(y),e.removeEventListener("pointerover",c),e.removeEventListener("pointerdown",f),e.removeEventListener("pointermove",g),e.removeEventListener("pointermove",p),e.removeEventListener("pointercancel",m),e.removeEventListener("pointerout",h),e.removeEventListener("pointerup",m)),e.removeEventListener("click",m),e.removeEventListener("mouseover",c),e.removeEventListener("mousemove",p),e.removeEventListener("mouseout",h),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",m)
                },this
            };
        
            return n.extend(p.prototype,e),p
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,function(e,t,n){
        e.exports=n(141)["default"]
    },function(e,t){
        "use strict";
        function n(e){
            return u[e]
        }
        function i(e){
            for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e
        }
        function o(e,t){
            for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1
        }
        function r(e){
            if("string"!=typeof e){
                if(e&&e.toHTML)return e.toHTML();
                if(null==e)return"";
                if(!e)return e+"";
                e=""+e
            }
            return p.test(e)?e.replace(d,n):e
        }
        function a(e){
            return!e&&0!==e||!(!g(e)||0!==e.length)
        }
        function s(e){
            var t=i({},e);
            return t._parent=e,t
        }
        function l(e,t){
            return e.path=t,e
        }
        function c(e,t){
            return(e?e+".":"")+t
        }
        t.__esModule=!0,t.extend=i,t.indexOf=o,t.escapeExpression=r,t.isEmpty=a,t.createFrame=s,t.blockParams=l,t.appendContextPath=c;
        var u={
            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;",
            "'":"&#x27;",
            "`":"&#x60;",
            "=":"&#x3D;"
        },d=/[&<>"'`=]/g,p=/[&<>"'`=]/,h=Object.prototype.toString;
        t.toString=h;
        var f=function(e){
            return"function"==typeof e
        };
        
        f(/x/)&&(t.isFunction=f=function(e){
            return"function"==typeof e&&"[object Function]"===h.call(e)
        }),t.isFunction=f;
        var g=Array.isArray||function(e){
            return!(!e||"object"!=typeof e)&&"[object Array]"===h.call(e)
        };
        
        t.isArray=g
    },,function(e,t,n){
        var i,o;
        i=[n(8)],o=function(e){
            return{
                localName:function(e){
                    return e?e.localName?e.localName:e.baseName?e.baseName:"":""
                },
                textContent:function(t){
                    return t?t.textContent?e.trim(t.textContent):t.text?e.trim(t.text):"":""
                },
                getChildNode:function(e,t){
                    return e.childNodes[t]
                },
                numChildren:function(e){
                    return e.childNodes?e.childNodes.length:0
                }
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,,,function(e,t,n){
        var i,o;
        i=[n(2),n(8)],o=function(e,t){
            function n(e){
                var t={},n=e.split("\r\n");
                1===n.length&&(n=e.split("\n"));
                var o=1;
                if(n[0].indexOf(" --> ")>0&&(o=0),n.length>o+1&&n[o+1]){
                    var r=n[o],a=r.indexOf(" --> ");
                    a>0&&(t.begin=i(r.substr(0,a)),t.end=i(r.substr(a+5)),t.text=n.slice(o+1).join("\r\n"))
                }
                return t
            }
            var i=e.seconds;
            return function(e){
                var i=[];
                e=t.trim(e);
                var o=e.split("\r\n\r\n");
                1===o.length&&(o=e.split("\n\n"));
                for(var r=0;r<o.length;r++)if("WEBVTT"!==o[r]){
                    var a=n(o[r]);
                    a.text&&i.push(a)
                }
                return i
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(4),n(5),n(1)],o=function(e,t,n,i){
            var o=e.noop,r=i.constant(!1),a={
                supports:r,
                play:o,
                load:o,
                stop:o,
                volume:o,
                mute:o,
                seek:o,
                resize:o,
                remove:o,
                destroy:o,
                setVisibility:o,
                setFullscreen:r,
                getFullscreen:o,
                getContainer:o,
                setContainer:r,
                getName:o,
                getQualityLevels:o,
                getCurrentQuality:o,
                setCurrentQuality:o,
                getAudioTracks:o,
                getCurrentAudioTrack:o,
                setCurrentAudioTrack:o,
                checkComplete:o,
                setControls:o,
                attachMedia:o,
                detachMedia:o,
                setState:function(e){
                    var i=this.state||n.IDLE;
                    this.state=e,e!==i&&this.trigger(t.JWPLAYER_PLAYER_STATE,{
                        newstate:e
                    })
                },
                sendMediaType:function(e){
                    var n=e[0].type,i="oga"===n||"aac"===n||"mp3"===n||"mpeg"===n||"vorbis"===n;
                    this.trigger(t.JWPLAYER_MEDIA_TYPE,{
                        mediaType:i?"audio":"video"
                    })
                }
            };
        
            return a
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1)],o=function(e){
            var t={},n={
                TIT2:"title",
                TT2:"title",
                WXXX:"url",
                TPE1:"artist",
                TP1:"artist",
                TALB:"album",
                TAL:"album"
            };
        
            return t.utf8ArrayToStr=function(e,t){
                var n,i,o,r,a,s;
                for(n="",o=e.length,i=t||0;i<o;)if(r=e[i++],0!==r&&3!==r)switch(r>>4){
                    case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:
                        n+=String.fromCharCode(r);
                        break;
                    case 12:case 13:
                        a=e[i++],n+=String.fromCharCode((31&r)<<6|63&a);
                        break;
                    case 14:
                        a=e[i++],s=e[i++],n+=String.fromCharCode((15&r)<<12|(63&a)<<6|(63&s)<<0)
                }
                return n
            },t.utf16BigEndianArrayToStr=function(e,t){
                var n,i,o;
                for(n="",o=e.length-1,i=t||0;i<o;)254===e[i]&&255===e[i+1]||(n+=String.fromCharCode((e[i]<<8)+e[i+1])),i+=2;
                return n
            },t.syncSafeInt=function(e){
                var n=t.arrayToInt(e);
                return 127&n|(32512&n)>>1|(8323072&n)>>2|(2130706432&n)>>3
            },t.arrayToInt=function(e){
                for(var t="0x",n=0;n<e.length;n++)t+=e[n].toString(16);
                return parseInt(t)
            },t.parseID3=function(i){
                return e.reduce(i,function(i,o){
                    if(!("value"in o)&&"data"in o&&o.data instanceof ArrayBuffer){
                        var r=o,a=new Uint8Array(r.data),s=a.length;
                        o={
                            value:{
                                key:"",
                                data:""
                            }
                        };
                    
                        for(var l=10;l<14&&l<a.length&&0!==a[l];)o.value.key+=String.fromCharCode(a[l]),l++;
                        var c=19,u=a[c];
                        3!==u&&0!==u||(u=a[++c],s--);
                        var d=0;
                        if(1!==u&&2!==u)for(var p=c+1;p<s;p++)if(0===a[p]){
                            d=p-c;
                            break
                        }
                        if(d>0){
                            var h=t.utf8ArrayToStr(a.subarray(c,c+=d),0);
                            if("PRIV"===o.value.key){
                                if("com.apple.streaming.transportStreamTimestamp"===h){
                                    var f=1&t.syncSafeInt(a.subarray(c,c+=4)),g=t.syncSafeInt(a.subarray(c,c+=4));
                                    f&&(g+=4294967296),o.value.data=g
                                }else o.value.data=t.utf8ArrayToStr(a,c+1);
                                o.value.info=h
                            }else o.value.info=h,o.value.data=t.utf8ArrayToStr(a,c+1)
                        }else{
                            var m=a[c];
                            1===m||2===m?o.value.data=t.utf16BigEndianArrayToStr(a,c+1):o.value.data=t.utf8ArrayToStr(a,c+1)
                        }
                    }
                    if(n.hasOwnProperty(o.value.key)&&(i[n[o.value.key]]=o.value.data),o.value.info){
                        var v=i[o.value.key];
                        e.isObject(v)||(v={},i[o.value.key]=v),v[o.value.info]=o.value.data
                    }else i[o.value.key]=o.value.data;
                    return i
                },{})
            },t
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(4),n(3),n(1)],o=function(e,t,n){
            var i={},o={
                NEW:0,
                LOADING:1,
                ERROR:2,
                COMPLETE:3
            },r=function(r,a){
                function s(t){
                    u=o.ERROR,c.trigger(e.ERROR,t)
                }
                function l(t){
                    u=o.COMPLETE,c.trigger(e.COMPLETE,t)
                }
                var c=n.extend(this,t),u=o.NEW;
                this.addEventListener=this.on,this.removeEventListener=this.off,this.makeStyleLink=function(e){
                    var t=document.createElement("link");
                    return t.type="text/css",t.rel="stylesheet",t.href=e,t
                },this.makeScriptTag=function(e){
                    var t=document.createElement("script");
                    return t.src=e,t
                },this.makeTag=a?this.makeStyleLink:this.makeScriptTag,this.load=function(){
                    if(u===o.NEW){
                        var t=i[r];
                        if(t&&(u=t.getStatus(),u<2))return t.on(e.ERROR,s),void t.on(e.COMPLETE,l);
                        var n=document.getElementsByTagName("head")[0]||document.documentElement,c=this.makeTag(r),d=!1;
                        c.onload=c.onreadystatechange=function(e){
                            d||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,l(e),c.onload=c.onreadystatechange=null,n&&c.parentNode&&!a&&n.removeChild(c))
                        },c.onerror=s,n.insertBefore(c,n.firstChild),u=o.LOADING,i[r]=this
                    }
                },this.getStatus=function(){
                    return u
                }
            };
    
            return r.loaderstatus=o,r
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1)],o=function(e){
            var t="free",n="premium",i="enterprise",o="platinum",r="ads",a="unlimited",s="trial",l={
                setup:[t,n,i,r,a,s,o],
                dash:[n,i,r,a,s,o],
                drm:[i,r,a,s],
                hls:[n,r,i,a,s,o],
                ads:[r,a,s,o,i],
                casting:[n,i,r,a,s,o],
                jwpsrv:[t,n,i,r,s,o]
            },c=function(t){
                return function(n){
                    return e.contains(l[n],t)
                }
            };
        
            return c
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,function(e,t){
        "use strict";
        function n(e,t){
            var o=t&&t.loc,r=void 0,a=void 0;
            o&&(r=o.start.line,a=o.start.column,e+=" - "+r+":"+a);
            for(var s=Error.prototype.constructor.call(this,e),l=0;l<i.length;l++)this[i[l]]=s[i[l]];
            Error.captureStackTrace&&Error.captureStackTrace(this,n),o&&(this.lineNumber=r,this.column=a)
        }
        t.__esModule=!0;
        var i=["description","fileName","lineNumber","message","name","number","stack"];
        n.prototype=new Error,t["default"]=n,e.exports=t["default"]
    },function(e,t,n){
        var i,o;
        i=[n(174),n(175),n(67),n(33)],o=function(e,t,n,i){
            var o={},r={},a=function(n,i){
                return r[n]=new e(new t(o),i),r[n]
            },s=function(e,t,r,a){
                var s=i.getPluginName(e);
                o[s]||(o[s]=new n(e)),o[s].registerPlugin(e,t,r,a)
            };
            
            return{
                loadPlugins:a,
                registerPlugin:s
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            return{
                repo:"http://ssl.p.jwpcdn.com/player/v/",
                SkinsIncluded:["seven"],
                SkinsLoadable:["beelden","bekle","five","glow","roundster","six","stormtrooper","vapor"],
                dvrSeekLimit:-25
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(8),n(84)],o=function(e,t){
            function n(e){
                e=e.split("-");
                for(var t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);
                return e.join("")
            }
            function i(t,n,i){
                if(""===n||void 0===n||null===n)return"";
                var o=i?" !important":"";
                return"string"==typeof n&&isNaN(n)?/png|gif|jpe?g/i.test(n)&&n.indexOf("url")<0?"url("+n+")":n+o:0===n||"z-index"===t||"opacity"===t?""+n+o:/color/i.test(t)?"#"+e.pad(n.toString(16).replace(/^0x/i,""),6)+o:Math.ceil(n)+"px"+o
            }
            var o=function(e,n,i){
                i=i||"all-players";
                var o="";
                if("object"==typeof n){
                    var a=document.createElement("div");
                    r(a,n),o="{"+a.style.cssText+"}"
                }else"string"==typeof n&&(o=n);
                t.style([[e,e+o]],i)
            },r=function(e,t){
                if(void 0!==e&&null!==e){
                    void 0===e.length&&(e=[e]);
                    var o,r={};
                
                    for(o in t)r[o]=i(o,t[o]);for(var a=0;a<e.length;a++){
                        var s,l=e[a];
                        if(void 0!==l&&null!==l)for(o in r)s=n(o),l.style[s]!==r[o]&&(l.style[s]=r[o])
                    }
                }
            },a=function(e,t){
                r(e,{
                    transform:t,
                    webkitTransform:t,
                    msTransform:t,
                    mozTransform:t,
                    oTransform:t
                })
            },s=function(e,t){
                var n="rgb";
                e?(e=String(e).replace("#",""),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2])):e="000000";
                var i=[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)];
                return void 0!==t&&100!==t&&(n+="a",i.push(t/100)),n+"("+i.join(",")+")"
            };
    
            return{
                css:o,
                style:r,
                clearCss:t.clear,
                transform:a,
                hexToRgba:s
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            return"7.6.0+commercial_v7-6-0.115.commercial.4cac33.jwplayer.640afe.googima.2587ed.vast.23d1fc.analytics.213ba9.plugin-gapro.6c22bd.plugin-related.2814b7.plugin-sharing.135631"
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(77),n(2)],o=function(e,t){
            var n=e.extend({
                constructor:function(e,t,n){
                    this.el=document.createElement("div"),this.el.className="jw-icon jw-icon-tooltip "+e+" jw-button-color jw-reset jw-hidden",t&&(this.el.setAttribute("tabindex","0"),this.el.setAttribute("role","button"),this.el.setAttribute("aria-label",t)),n===!0?this.el.setAttribute("aria-hidden","false"):this.el.setAttribute("aria-hidden","true"),this.container=document.createElement("div"),this.container.className="jw-overlay jw-reset",this.openClass="jw-open",this.componentType="tooltip",this.el.appendChild(this.container)
                },
                addContent:function(e){
                    this.content&&this.removeContent(),this.content=e,this.container.appendChild(e)
                },
                removeContent:function(){
                    this.content&&(this.container.removeChild(this.content),this.content=null)
                },
                hasContent:function(){
                    return!!this.content
                },
                element:function(){
                    return this.el
                },
                openTooltip:function(e){
                    this.trigger("open-"+this.componentType,e,{
                        isOpen:!0
                    }),this.isOpen=!0,t.toggleClass(this.el,this.openClass,this.isOpen)
                },
                closeTooltip:function(e){
                    this.trigger("close-"+this.componentType,e,{
                        isOpen:!1
                    }),this.isOpen=!1,t.toggleClass(this.el,this.openClass,this.isOpen)
                },
                toggleOpenState:function(e){
                    this.isOpen?this.closeTooltip(e):this.openTooltip(e)
                }
            });
            return n
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(49),n(167),n(1),n(3),n(182),n(4),n(5)],o=function(e,t,n,i,o,r,a,s){
            var l=function(){
                function r(e,t){
                    var n=i.extend({},t,{
                        type:e
                    });
                    switch(e){
                        case"flashThrottle":
                            var o="resume"!==t.state;
                            this.set("flashThrottle",o),this.set("flashBlocked",o);
                            break;
                        case"flashBlocked":
                            return void this.set("flashBlocked",!0);
                        case"flashUnblocked":
                            return void this.set("flashBlocked",!1);
                        case"volume":case"mute":
                            return void this.set(e,t[e]);
                        case a.JWPLAYER_MEDIA_TYPE:
                            return void(this.mediaModel.get("mediaType")!==t.mediaType&&(this.mediaModel.set("mediaType",t.mediaType),this.mediaController.trigger(e,n)));
                        case a.JWPLAYER_PLAYER_STATE:
                            return void this.mediaModel.set("state",t.newstate);
                        case a.JWPLAYER_MEDIA_BUFFER:
                            this.set("buffer",t.bufferPercent);
                        case a.JWPLAYER_MEDIA_META:
                            var r=t.duration;
                            i.isNumber(r)&&(this.mediaModel.set("duration",r),this.set("duration",r));
                            break;
                        case a.JWPLAYER_MEDIA_BUFFER_FULL:
                            this.mediaModel.get("playAttempt")?this.playVideo():this.mediaModel.on("change:playAttempt",function(){
                                this.playVideo()
                            },this);
                            break;
                        case a.JWPLAYER_MEDIA_TIME:
                            this.mediaModel.set("position",t.position),this.set("position",t.position),i.isNumber(t.duration)&&(this.mediaModel.set("duration",t.duration),this.set("duration",t.duration));
                            break;
                        case a.JWPLAYER_PROVIDER_CHANGED:
                            this.set("provider",u.getName());
                            break;
                        case a.JWPLAYER_MEDIA_LEVELS:
                            this.setQualityLevel(t.currentQuality,t.levels),this.mediaModel.set("levels",t.levels);
                            break;
                        case a.JWPLAYER_MEDIA_LEVEL_CHANGED:
                            this.setQualityLevel(t.currentQuality,t.levels),this.persistQualityLevel(t.currentQuality,t.levels);
                            break;
                        case a.JWPLAYER_AUDIO_TRACKS:
                            this.setCurrentAudioTrack(t.currentTrack,t.tracks),this.mediaModel.set("audioTracks",t.tracks);
                            break;
                        case a.JWPLAYER_AUDIO_TRACK_CHANGED:
                            this.setCurrentAudioTrack(t.currentTrack,t.tracks);
                            break;
                        case"subtitlesTrackChanged":
                            this.setVideoSubtitleTrack(t.currentTrack,t.tracks);
                            break;
                        case"visualQuality":
                            var s=i.extend({},t);
                            this.mediaModel.set("visualQuality",s)
                    }
                    this.mediaController.trigger(e,n)
                }
                var l,u,d=this,p=e.noop;
                this.mediaController=i.extend({},o),this.mediaModel=new c,n.model(this),this.set("mediaModel",this.mediaModel),this.setup=function(t){
                    return i.extend(this.attributes,t,{
                        item:0,
                        state:s.IDLE,
                        flashBlocked:!1,
                        fullscreen:!1,
                        compactUI:!1,
                        scrubbing:!1,
                        duration:0,
                        position:0,
                        buffer:0
                    }),e.isMobile()&&!t.mobileSdk&&this.set("autostart",!1),this.updateProviders(),this
                },this.getConfiguration=function(){
                    return i.omit(this.clone(),["mediaModel"])
                },this.updateProviders=function(){
                    l=new t(this.getConfiguration())
                },this.setQualityLevel=function(e,t){
                    e>-1&&t.length>1&&"youtube"!==u.getName().name&&this.mediaModel.set("currentLevel",parseInt(e))
                },this.persistQualityLevel=function(e,t){
                    var n=t[e]||{},i=n.label;
                    this.set("qualityLabel",i)
                },this.setCurrentAudioTrack=function(e,t){
                    e>-1&&t.length>0&&e<t.length&&this.mediaModel.set("currentAudioTrack",parseInt(e));
                },this.onMediaContainer=function(){
                    var e=this.get("mediaContainer");
                    p.setContainer(e)
                },this.changeVideoProvider=function(e){
                    if(this.off("change:mediaContainer",this.onMediaContainer),u&&(u.off(null,null,this),u.getContainer()&&u.remove()),!e)return u=p=e,void this.set("provider",void 0);
                    p=new e(d.get("id"),d.getConfiguration());
                    var t=this.get("mediaContainer");
                    t?p.setContainer(t):this.once("change:mediaContainer",this.onMediaContainer),this.set("provider",p.getName()),p.getName().name.indexOf("flash")===-1&&(this.set("flashThrottle",void 0),this.set("flashBlocked",!1)),u=p,u.volume(d.get("volume")),u.mute(d.get("mute")),u.on("all",r,this)
                },this.destroy=function(){
                    this.off(),u&&(u.off(null,null,this),u.destroy())
                },this.getVideo=function(){
                    return u
                },this.setFullscreen=function(e){
                    e=!!e,e!==d.get("fullscreen")&&d.set("fullscreen",e)
                },this.chooseProvider=function(e){
                    return l.choose(e).provider
                },this.setItemIndex=function(e){
                    var t=this.get("playlist");
                    e=parseInt(e,10)||0,e=(e+t.length)%t.length,this.set("item",e),this.set("playlistItem",t[e]),this.setActiveItem(t[e])
                },this.setActiveItem=function(e){
                    this.mediaModel.off(),this.mediaModel=new c,this.set("mediaModel",this.mediaModel),this.set("position",e.starttime||0),this.set("duration",e.duration||0),this.setProvider(e)
                },this.setProvider=function(e){
                    var t=e&&e.sources&&e.sources[0];
                    if(void 0!==t){
                        var n=this.chooseProvider(t);
                        n&&p instanceof n||d.changeVideoProvider(n),p&&(p.init&&p.init(e),this.trigger("itemReady",e))
                    }
                },this.getProviders=function(){
                    return l
                },this.resetProvider=function(){
                    p=null
                },this.setVolume=function(e){
                    e=Math.round(e),this.set("volume",e),u&&u.volume(e);
                    var t=0===e;
                    t!==this.get("mute")&&this.setMute(t)
                },this.setMute=function(t){
                    if(e.exists(t)||(t=!this.get("mute")),this.set("mute",t),u&&u.mute(t),!t){
                        var n=Math.max(10,this.get("volume"));
                        this.setVolume(n)
                    }
                },this.loadVideo=function(e){
                    if(!e){
                        var t=this.get("item");
                        e=this.get("playlist")[t]
                    }
                    this.set("position",e.starttime||0),this.set("duration",e.duration||0),this.mediaModel.set("playAttempt",!0),this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT,{
                        playReason:this.get("playReason")
                    }),u.load(e)
                },this.stopVideo=function(){
                    u&&u.stop()
                },this.playVideo=function(){
                    u.play()
                },this.persistCaptionsTrack=function(){
                    var e=this.get("captionsTrack");
                    e?this.set("captionLabel",e.label):this.set("captionLabel","Off")
                },this.setVideoSubtitleTrack=function(e,t){
                    this.set("captionsIndex",e),e&&t&&e<=t.length&&t[e-1].data&&this.set("captionsTrack",t[e-1]),u&&u.setSubtitlesTrack&&u.setSubtitlesTrack(e)
                },this.persistVideoSubtitleTrack=function(e){
                    this.setVideoSubtitleTrack(e),this.persistCaptionsTrack()
                }
            },c=l.MediaModel=function(){
                this.set("state",s.IDLE)
            };
    
            return i.extend(l.prototype,r),i.extend(c.prototype,r),l
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(8)],o=function(e){
            var t={},n=t.pluginPathType={
                ABSOLUTE:0,
                RELATIVE:1,
                CDN:2
            };
        
            return t.getPluginPathType=function(t){
                if("string"==typeof t){
                    t=t.split("?")[0];
                    var i=t.indexOf("://");
                    if(i>0)return n.ABSOLUTE;
                    var o=t.indexOf("/"),r=e.extension(t);
                    return!(i<0&&o<0)||r&&isNaN(r)?n.RELATIVE:n.CDN
                }
            },t.getPluginName=function(e){
                return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")
            },t.getPluginVersion=function(e){
                return e.replace(/[^-]*-?([^\.]*).*$/,"$1")
            },t
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            var e=window.chrome,t={};
        
            return t.NS="urn:x-cast:com.longtailvideo.jwplayer",t.debug=!1,t.availability=null,t.available=function(n){
                n=n||t.availability;
                var i="available";
                return e&&e.cast&&e.cast.ReceiverAvailability&&(i=e.cast.ReceiverAvailability.AVAILABLE),n===i
            },t.log=function(){
                if(t.debug){
                    var e=Array.prototype.slice.call(arguments,0);
                    console.log.apply(console,e)
                }
            },t.error=function(){
                var e=Array.prototype.slice.call(arguments,0);
                console.error.apply(console,e)
            },t
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,,,,,function(e,t,n){
        var i,o;
        i=[n(5)],o=function(e){
            function t(t){
                return t===e.COMPLETE||t===e.ERROR?e.IDLE:t
            }
            return function(e,n,i){
                if(n=t(n),i=t(i),n!==i){
                    var o=n.replace(/(?:ing|d)$/,""),r={
                        type:o,
                        newstate:n,
                        oldstate:i,
                        reason:e.mediaModel.get("state")
                    };
                    
                    "play"===o&&(r.playReason=e.get("playReason")),this.trigger(o,r)
                }
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(66),n(173)],o=function(e,t,n){
            var i={
                sources:[],
                tracks:[]
            },o=function(o){
                o=o||{},e.isArray(o.tracks)||delete o.tracks;
                var r=e.extend({},i,o);
                e.isObject(r.sources)&&!e.isArray(r.sources)&&(r.sources=[t(r.sources)]),e.isArray(r.sources)&&0!==r.sources.length||(o.levels?r.sources=o.levels:r.sources=[t(o)]);
                for(var a=0;a<r.sources.length;a++){
                    var s=r.sources[a];
                    if(s){
                        var l=s["default"];
                        l?s["default"]="true"===l.toString():s["default"]=!1,r.sources[a].label||(r.sources[a].label=a.toString()),r.sources[a]=t(r.sources[a])
                    }
                }
                return r.sources=e.compact(r.sources),e.isArray(r.tracks)||(r.tracks=[]),e.isArray(r.captions)&&(r.tracks=r.tracks.concat(r.captions),delete r.captions),r.tracks=e.compact(e.map(r.tracks,n)),r
            };
        
            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(44)],o=function(e,t){
            function n(e){
                return/^(?:(?:https?|file)\:)?\/\//.test(e)}function i(t){return e.some(t,function(e){return"parsererror"===e.nodeName})}var o={};return o.getAbsolutePath=function(e,i){if(t.exists(i)||(i=document.location.href),t.exists(e)){if(n(e))return e;var o,r=i.substring(0,i.indexOf("://")+3),a=i.substring(r.length,i.indexOf("/",r.length+1));if(0===e.indexOf("/"))o=e.split("/");else{var s=i.split("?")[0];s=s.substring(r.length+a.length+1,s.lastIndexOf("/")),o=s.split("/").concat(e.split("/"))}for(var l=[],c=0;c<o.length;c++)o[c]&&t.exists(o[c])&&"."!==o[c]&&(".."===o[c]?l.pop():l.push(o[c]));return r+a+"/"+l.join("/")}},o.getScriptPath=e.memoize(function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var i=t[n].src;if(i&&i.indexOf(e)>=0)return i.substr(0,i.indexOf(e))}return""}),o.parseXML=function(e){var t=null;try{"DOMParser"in window?(t=(new window.DOMParser).parseFromString(e,"text/xml"),(i(t.childNodes)||t.childNodes&&i(t.childNodes[0].childNodes))&&(t=null)):(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(n){}return t},o.serialize=function(e){if(void 0===e)return null;if("string"==typeof e&&e.length<6){var t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(Number(e))&&!isNaN(parseFloat(e)))return Number(e)}return e},o.parseDimension=function(e){return"string"==typeof e?""===e?0:e.lastIndexOf("%")>-1?e:parseInt(e.replace("px",""),10):e},o.timeFormat=function(e,t){if(e<=0&&!t)return"00:00";var n=e<0?"-":"";e=Math.abs(e);var i=Math.floor(e/3600),o=Math.floor((e-3600*i)/60),r=Math.floor(e%60);return n+(i?i+":":"")+(o<10?"0":"")+o+":"+(r<10?"0":"")+r},o.adaptiveType=function(e){if(0!==e){var t=-120;if(e<=t)return"DVR";if(e<0||e===1/0)return"LIVE"}return"VOD"},o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1)],o=function(e){var t={};return t.exists=function(e){switch(typeof e){case"string":return e.length>0;case"object":return null!==e;case"undefined":return!1}return!0},t.isHTTPS=function(){return 0===window.location.href.indexOf("https")},t.isRtmp=function(e,t){return 0===e.indexOf("rtmp")||"rtmp"===t},t.isYouTube=function(e,t){return"youtube"===t||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)},t.youTubeID=function(e){var t=/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);return t?t.slice(1).join("").replace("?",""):""},t.typeOf=function(t){if(null===t)return"null";var n=typeof t;return"object"===n&&e.isArray(t)?"array":n},t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(77),n(9),n(139),n(2)],o=function(e,t,n,i){var o=e.extend({constructor:function(e,t){this.className=e+" jw-background-color jw-reset",this.orientation=t,this.dragStartListener=this.dragStart.bind(this),this.dragMoveListener=this.dragMove.bind(this),this.dragEndListener=this.dragEnd.bind(this),this.tapListener=this.tap.bind(this),this.setup()},
        setup:function(){
            var e={
                "default":this["default"],
                className:this.className,
                orientation:"jw-slider-"+this.orientation
            };
                
            this.el=i.createElement(n(e)),this.elementRail=this.el.getElementsByClassName("jw-slider-container")[0],this.elementBuffer=this.el.getElementsByClassName("jw-buffer")[0],this.elementProgress=this.el.getElementsByClassName("jw-progress")[0],this.elementThumb=this.el.getElementsByClassName("jw-knob")[0],this.userInteract=new t(this.element(),{
                preventScrolling:!0
            }),this.userInteract.on("dragStart",this.dragStartListener),this.userInteract.on("drag",this.dragMoveListener),this.userInteract.on("dragEnd",this.dragEndListener),this.userInteract.on("tap click",this.tapListener)
        },
        dragStart:function(){
            this.trigger("dragStart"),this.railBounds=i.bounds(this.elementRail)
        },
        dragEnd:function(e){
            this.dragMove(e),this.trigger("dragEnd")
        },
        dragMove:function(e){
            var t,n,o=this.railBounds=this.railBounds?this.railBounds:i.bounds(this.elementRail);
            "horizontal"===this.orientation?(t=e.pageX,n=t<o.left?0:t>o.right?100:100*i.between((t-o.left)/o.width,0,1)):(t=e.pageY,n=t>=o.bottom?0:t<=o.top?100:100*i.between((o.height-(t-o.top))/o.height,0,1));
            var r=this.limit(n);
            return this.render(r),this.update(r),!1
        },
        tap:function(e){
            this.railBounds=i.bounds(this.elementRail),this.dragMove(e)
        },
        limit:function(e){
            return e
        },
        update:function(e){
            this.trigger("update",{
                percentage:e
            })
        },
        render:function(e){
            e=Math.max(0,Math.min(e,100)),"horizontal"===this.orientation?(this.elementThumb.style.left=e+"%",this.elementProgress.style.width=e+"%"):(this.elementThumb.style.bottom=e+"%",this.elementProgress.style.height=e+"%")
        },
        updateBuffer:function(e){
            this.elementBuffer.style.width=e+"%"
        },
        element:function(){
            return this.el
        }
    });
    return o
    }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,function(e,t,n){
        var i,o;
        i=[n(1),n(23)],o=function(e,t){
            var n=[{
                configName:"clearkey",
                keyName:"org.w3.clearkey"
            },{
                configName:"widevine",
                keyName:"com.widevine.alpha"
            },{
                configName:"playready",
                keyName:"com.microsoft.playready"
            }],i=[],o={},r=function(t){
                var n=t.get("playlist");
                return!!t.get("drm")||e.some(n,function(t){
                    return!!t.drm||e.some(t.sources,function(e){
                        return!!e.drm
                    })
                })
            },a=function(t){
                return u()?t():(e.forEach(n,function(e){
                    var t=navigator.requestMediaKeySystemAccess(e.keyName,[{}]).then(function(){
                        o[e.configName]=!0
                    })["catch"](function(){
                        o[e.configName]=!1
                    });
                    i.push(t)
                }),Promise.all(i).then(t))
            },s=function(){
                return!!navigator.requestMediaKeySystemAccess&&!!MediaKeySystemAccess.prototype.getConfiguration
            },l=function(e){
                return o[e]
            },c=function(t){
                u()||console.error('DRM only supported with "drm" block in initial setup.',t);
                var n=e.keys(t);
                return e.some(n,function(e){
                    return l(e)
                })
            },u=function(){
                return!!i.length
            };
            
            return{
                containsDrm:r,
                probe:function(e,n){
                    s()&&t(n)("drm")?a(e):e()
                },
                probed:u,
                anySupported:c,
                isSupported:l
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(75),n(23),n(1),n(178),n(47)],o=function(e,t,n,i,o){
            function r(i,r){
                if(e.isSafari())return!1;
                var a=t(r);
                if(!a("dash"))return!1;
                if(i.drm&&!o.anySupported(i.drm))return!1;
                var s=window.MediaSource;
                if(!window.HTMLVideoElement||!s)return!1;
                var l=!0;
                return i.mediaTypes&&(l=n.all(i.mediaTypes,function(e){
                    return s.isTypeSupported(e)
                })),l&&("dash"===i.type||"mpd"===i.type||(i.file||"").indexOf("mpd-time-csf")>-1)
            }
            var a=n.find(i,n.matches({
                name:"flash"
            })),s=a.supports;
            a.supports=function(n,i){
                if(!e.isFlashSupported())return!1;
                var o=n&&n.type;
                if("hls"===o||"m3u8"===o){
                    var r=t(i);
                    return r("hls")
                }
                return s.apply(this,arguments)
            };
            
            var l=n.find(i,n.matches({
                name:"html5"
            })),c=l.supports;
            return l.supports=function(e,n){
                var i=c.apply(this,arguments);
                if(i&&e.drm){
                    var o=t(n);
                    return o("drm")
                }
                return i
            },i.push({
                name:"shaka",
                supports:r
            }),i.push({
                name:"caterpillar",
                supports:function(n,i){
                    if(e.isChrome()&&!e.isMobile()){
                        var o=n&&n.type,r=n&&n.file;
                        if(r.indexOf(".m3u8")>-1||"hls"===o||"m3u8"===o){
                            var a=t(i);
                            return a("hls")
                        }
                    }
                }
            }),i
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(179),n(1),n(48)],o=function(e,t){
            var i,o=e.registerProvider,r=e.prototype.reorderProviders;
            return t.extend(e.loaders,{
                caterpillar:function(e){
                    n.e(1,function(require){
                        var t=n(87);
                        t.setEdition&&t.setEdition(i),o(t),e(t)
                    })
                },
                shaka:function(e){
                    n.e(2,function(require){
                        var t=n(89);
                        o(t),e(t)
                    })
                }
            }),t.extend(e.prototype,{
                reorderProviders:function(){
                    if(r.apply(this),"flash"!==this.config.primary&&this.config.hlshtml===!0){
                        var e=t.indexOf(this.providers,t.findWhere(this.providers,{
                            name:"caterpillar"
                        })),n=this.providers.splice(e,1)[0],i=t.indexOf(this.providers,t.findWhere(this.providers,{
                            name:"flash"
                        }));
                        this.providers.splice(i,0,n)
                    }
                },
                providerSupports:function(e,t){
                    return i=this.config.edition,e.supports(t,i)
                }
            }),e
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,,,,,,,,,,function(e,t,n){
        "use strict";
        function i(e){
            return e&&e.__esModule?e:{
                "default":e
            }
        }
        function o(e,t,n){
            this.helpers=e||{},this.partials=t||{},this.decorators=n||{},l.registerDefaultHelpers(this),c.registerDefaultDecorators(this)
        }
        t.__esModule=!0,t.HandlebarsEnvironment=o;
        var r=n(12),a=n(26),s=i(a),l=n(144),c=n(142),u=n(152),d=i(u),p="4.0.5";
        t.VERSION=p;
        var h=7;
        t.COMPILER_REVISION=h;
        var f={
            1:"<= 1.0.rc.2",
            2:"== 1.0.0-rc.3",
            3:"== 1.0.0-rc.4",
            4:"== 1.x.x",
            5:"== 2.0.0-alpha.x",
            6:">= 2.0.0-beta.1",
            7:">= 4.0.0"
        };

        t.REVISION_CHANGES=f;
        var g="[object Object]";
        o.prototype={
            constructor:o,
            logger:d["default"],
            log:d["default"].log,
            registerHelper:function(e,t){
                if(r.toString.call(e)===g){
                    if(t)throw new s["default"]("Arg not supported with multiple helpers");
                    r.extend(this.helpers,e)
                }else this.helpers[e]=t
            },
            unregisterHelper:function(e){
                delete this.helpers[e]
            },
            registerPartial:function(e,t){
                if(r.toString.call(e)===g)r.extend(this.partials,e);
                else{
                    if("undefined"==typeof t)throw new s["default"]('Attempting to register a partial called "'+e+'" as undefined');
                    this.partials[e]=t
                }
            },
            unregisterPartial:function(e){
                delete this.partials[e]
            },
            registerDecorator:function(e,t){
                if(r.toString.call(e)===g){
                    if(t)throw new s["default"]("Arg not supported with multiple decorators");
                    r.extend(this.decorators,e)
                }else this.decorators[e]=t
            },
            unregisterDecorator:function(e){
                delete this.decorators[e]
            }
        };

        var m=d["default"].log;
        t.log=m,t.createFrame=r.createFrame,t.logger=d["default"]
    },function(e,t,n){
        var i,o;
        i=[n(2),n(1)],o=function(e,t){
            function i(n){
                t.each(n,function(t,i){
                    n[i]=e.serialize(t)
                })
            }
            function o(e){
                return e.slice&&"px"===e.slice(-2)&&(e=e.slice(0,-2)),e
            }
            function r(t,n){
                if(n.toString().indexOf("%")===-1)return 0;
                if("string"!=typeof t||!e.exists(t))return 0;
                if(/^\d*\.?\d+%$/.test(t))return t;
                var i=t.indexOf(":");
                if(i===-1)return 0;
                var o=parseFloat(t.substr(0,i)),r=parseFloat(t.substr(i+1));
                return o<=0||r<=0?0:r/o*100+"%"
            }
            var a={
                autostart:!1,
                controls:!0,
                displaytitle:!0,
                displaydescription:!0,
                mobilecontrols:!1,
                repeat:!1,
                castAvailable:!1,
                skin:"seven",
                stretching:"uniform",
                mute:!1,
                volume:90,
                width:480,
                height:270,
                localization:{
                    play:"Play",
                    playback:"Start playback",
                    pause:"Pause",
                    volume:"Volume",
                    prev:"Previous",
                    next:"Next",
                    cast:"Chromecast",
                    fullscreen:"Fullscreen",
                    playlist:"Playlist",
                    hd:"Quality",
                    cc:"Closed captions",
                    audioTracks:"Audio tracks",
                    replay:"Replay",
                    buffer:"Loading",
                    more:"More",
                    liveBroadcast:"Live broadcast",
                    loadingAd:"Loading ad"
                }
            },s=function(s,l){
                var c=l&&l.getAllItems(),u=t.extend({},(window.jwplayer||{}).defaults,c,s);
                i(u);
                var d=t.extend({},a,u);
                if("."===d.base&&(d.base=e.getScriptPath("jwplayer.js")),d.base=(d.base||e.loadFrom()).replace(/\/?$/,"/"),n.p=d.base,d.width=o(d.width),d.height=o(d.height),d.flashplayer=d.flashplayer||e.getScriptPath("jwplayer.js")+"jwplayer.flash.swf","http:"===window.location.protocol&&(d.flashplayer=d.flashplayer.replace("https","http")),d.aspectratio=r(d.aspectratio,d.width),t.isObject(d.skin)&&(d.skinUrl=d.skin.url,d.skinColorInactive=d.skin.inactive,d.skinColorActive=d.skin.active,d.skinColorBackground=d.skin.background,d.skin=t.isString(d.skin.name)?d.skin.name:a.skin),t.isString(d.skin)&&d.skin.indexOf(".xml")>0&&(console.log("JW Player does not support XML skins, please update your config"),d.skin=d.skin.replace(".xml","")),d.aspectratio||delete d.aspectratio,!d.playlist){
                    var p=t.pick(d,["title","description","type","mediaid","image","file","sources","tracks","preload"]);
                    d.playlist=[p]
                }
                return d
            };
        
            return s
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(8),n(14),n(171),n(172),n(42)],o=function(e,t,n,i,o){
            function r(t){
                for(var r={},s=0;s<t.childNodes.length;s++){
                    var l=t.childNodes[s],u=c(l);
                    if(u)switch(u.toLowerCase()){
                        case"enclosure":
                            r.file=e.xmlAttribute(l,"url");
                            break;
                        case"title":
                            r.title=a(l);
                            break;
                        case"guid":
                            r.mediaid=a(l);
                            break;
                        case"pubdate":
                            r.date=a(l);
                            break;
                        case"description":
                            r.description=a(l);
                            break;
                        case"link":
                            r.link=a(l);
                            break;
                        case"category":
                            r.tags?r.tags+=a(l):r.tags=a(l)
                    }
                }
                return r=i(t,r),r=n(t,r),new o(r)
            }
            var a=t.textContent,s=t.getChildNode,l=t.numChildren,c=t.localName,u={};
    
            return u.parse=function(e){
                for(var t=[],n=0;n<l(e);n++){
                    var i=s(e,n),o=c(i).toLowerCase();
                    if("channel"===o)for(var a=0;a<l(i);a++){
                        var u=s(i,a);
                        "item"===c(u).toLowerCase()&&t.push(r(u))
                    }
                }
                return t
            },u
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(14),n(63),n(2),n(4),n(3),n(1)],o=function(e,t,n,i,o,r){
            var a=function(){
                function a(o){
                    var a=n.tryCatch(function(){
                        var n,a=o.responseXML?o.responseXML.childNodes:null,s="";
                        if(a){
                            for(var u=0;u<a.length&&(s=a[u],8===s.nodeType);u++);
                            "xml"===e.localName(s)&&(s=s.nextSibling),"rss"===e.localName(s)&&(n={
                                playlist:t.parse(s)
                            })
                        }
                        if(!n)try{
                            var d=JSON.parse(o.responseText);
                            if(r.isArray(d))n={
                                playlist:d
                            };
                            else{
                                if(!r.isArray(d.playlist))throw null;
                                n=d
                            }
                        }catch(p){
                            return void l("Not a valid RSS/JSON feed")
                        }
                        c.trigger(i.JWPLAYER_PLAYLIST_LOADED,n)
                    });
                    a instanceof n.Error&&l()
                }
                function s(e){
                    l("Playlist load error: "+e)
                }
                function l(e){
                    c.trigger(i.JWPLAYER_ERROR,{
                        message:e?e:"Error loading file"
                    })
                }
                var c=r.extend(this,o);
                this.load=function(e){
                    n.ajax(e,a,s)
                },this.destroy=function(){
                    this.off()
                }
            };
    
            return a
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(42),n(66),n(1),n(49)],o=function(e,t,n,i){
            function o(e,t){
                for(var n=0;n<e.length;n++){
                    var i=e[n],o=t.choose(i);
                    if(o)return i.type
                }
                return null
            }
            function r(e,t){
                return n.isUndefined(e)?t:e
            }
            var a=function(t){
                return t=n.isArray(t)?t:[t],n.compact(n.map(t,e))
            };
            
            a.filterPlaylist=function(e,t,i,o,a,c,u){
                var d=[];
                return n.each(e,function(e){
                    e=n.extend({},e),e.allSources=s(e.sources,i,e.drm||o,e.preload||a,r(e.withCredentials,u)),e.sources=l(e.allSources,t),e.sources.length&&(e.file=e.sources[0].file,(e.preload||a)&&(e.preload=e.preload||a),(e.feedid||c)&&(e.feedid=e.feedid||c),d.push(e))
                }),d
            };
            
            var s=function(e,i,o,a,s){
                return n.compact(n.map(e,function(e){
                    if(n.isObject(e)){
                        void 0!==i&&null!==i&&(e.androidhls=i),(e.drm||o)&&(e.drm=e.drm||o),(e.preload||a)&&(e.preload=e.preload||a);
                        var l=r(e.withCredentials,s);
                        return n.isUndefined(l)||(e.withCredentials=l),t(e)
                    }
                }))
            },l=function(e,t){
                t&&t.choose||(t=new i({
                    primary:t?"flash":null
                }));
                var r=o(e,t);
                return n.where(e,{
                    type:r
                })
            };
        
            return a
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(8),n(1)],o=function(e,t,n){
            var i={
                "default":!1
            },o=function(o){
                if(o&&o.file){
                    var r=n.extend({},i,o);
                    r.file=t.trim(""+r.file);
                    var a=/^[^\/]+\/(?:x-)?([^\/]+)$/;
                    if(a.test(r.type)&&(r.mimeType=r.type,r.type=r.type.replace(a,"$1")),e.isYouTube(r.file)?r.type="youtube":e.isRtmp(r.file)?r.type="rtmp":r.type||(r.type=t.extension(r.file)),r.type){
                        switch(r.type){
                            case"m3u8":case"vnd.apple.mpegurl":
                                r.type="hls";
                                break;
                            case"dash+xml":
                                r.type="dash";
                                break;
                            case"smil":
                                r.type="rtmp";
                                break;
                            case"m4a":
                                r.type="aac"
                        }
                        return n.each(r,function(e,t){
                            ""===e&&delete r[t]
                        }),r
                    }
                }
            };
    
            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(33),n(4),n(3),n(22),n(1)],o=function(e,t,n,i,o,r){
            var a={
                FLASH:0,
                JAVASCRIPT:1,
                HYBRID:2
            },s=function(s){
                function l(){
                    switch(t.getPluginPathType(s)){
                        case t.pluginPathType.ABSOLUTE:
                            return s;
                        case t.pluginPathType.RELATIVE:
                            return e.getAbsolutePath(s,window.location.href)
                    }
                }
                function c(){
                    r.defer(function(){
                        m=o.loaderstatus.COMPLETE,g.trigger(n.COMPLETE)
                    })
                }
                function u(){
                    m=o.loaderstatus.ERROR,g.trigger(n.ERROR,{
                        url:s
                    })
                }
                var d,p,h,f,g=r.extend(this,i),m=o.loaderstatus.NEW;
                this.load=function(){
                    if(m===o.loaderstatus.NEW){
                        if(s.lastIndexOf(".swf")>0)return d=s,m=o.loaderstatus.COMPLETE,void g.trigger(n.COMPLETE);
                        if(t.getPluginPathType(s)===t.pluginPathType.CDN)return m=o.loaderstatus.COMPLETE,void g.trigger(n.COMPLETE);
                        m=o.loaderstatus.LOADING;
                        var e=new o(l());
                        e.on(n.COMPLETE,c),e.on(n.ERROR,u),e.load()
                    }
                },this.registerPlugin=function(e,t,i,r){
                    f&&(clearTimeout(f),f=void 0),h=t,i&&r?(d=r,p=i):"string"==typeof i?d=i:"function"==typeof i?p=i:i||r||(d=e),m=o.loaderstatus.COMPLETE,g.trigger(n.COMPLETE)
                },this.getStatus=function(){
                    return m
                },this.getPluginName=function(){
                    return t.getPluginName(s)
                },this.getFlashPath=function(){
                    if(d)switch(t.getPluginPathType(d)){
                        case t.pluginPathType.ABSOLUTE:
                            return d;
                        case t.pluginPathType.RELATIVE:
                            return s.lastIndexOf(".swf")>0?e.getAbsolutePath(d,window.location.href):e.getAbsolutePath(d,l())
                    }
                    return null
                },this.getJS=function(){
                    return p
                },this.getTarget=function(){
                    return h
                },this.getPluginmode=function(){
                    return void 0!==typeof d&&void 0!==typeof p?a.HYBRID:void 0!==typeof d?a.FLASH:void 0!==typeof p?a.JAVASCRIPT:void 0
                },this.getNewInstance=function(e,t,n){
                    return new p(e,t,n)
                },this.getURL=function(){
                    return s
                }
            };

            return s
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,,,,,function(e,t,n){
        var i,o;
        i=[n(1),n(43)],o=function(e,t){
            function n(e){
                e.onload=null,e.onprogress=null,e.onreadystatechange=null,e.onerror=null,"abort"in e&&e.abort()
            }
            function i(t,i){
                return function(o){
                    var r=o.currentTarget||i.xhr;
                    if(clearTimeout(i.timeoutId),i.retryWithoutCredentials&&i.xhr.withCredentials){
                        n(r);
                        var a=e.extend({},i,{
                            xhr:null,
                            withCredentials:!1,
                            retryWithoutCredentials:!1
                        });
                        return void d(a)
                    }
                    i.onerror(t,i.url,r)
                }
            }
            function o(e){
                return function(t){
                    var n=t.currentTarget||e.xhr;
                    if(4===n.readyState){
                        if(clearTimeout(e.timeoutId),n.status>=400){
                            var i;
                            return i=404===n.status?"File not found":""+n.status+"("+n.statusText+")",e.onerror(i,e.url,n)
                        }
                        if(200===n.status)return r(e)(t)
                    }
                }
            }
            function r(e){
                return function(n){
                    var i=n.currentTarget||e.xhr;
                    if(clearTimeout(e.timeoutId),e.responseType){
                        if("json"===e.responseType)return a(i,e)
                    }else{
                        var o,r=i.responseXML;
                        if(r)try{
                            o=r.firstChild
                        }catch(l){}
                        if(r&&o)return s(i,r,e);
                        if(c&&i.responseText&&!r&&(r=t.parseXML(i.responseText),r&&r.firstChild))return s(i,r,e);
                        if(e.requireValidXML)return void e.onerror("Invalid XML",e.url,i)
                    }
                    e.oncomplete(i)
                }
            }
            function a(t,n){
                if(!t.response||e.isString(t.response)&&'"'!==t.responseText.substr(1))try{
                    t=e.extend({},t,{
                        response:JSON.parse(t.responseText)
                    })
                }catch(i){
                    return void n.onerror("Invalid JSON",n.url,t)
                }
                return n.oncomplete(t)
            }
            function s(t,n,i){
                var o=n.documentElement;
                return i.requireValidXML&&("parsererror"===o.nodeName||o.getElementsByTagName("parsererror").length)?void i.onerror("Invalid XML",i.url,t):(t.responseXML||(t=e.extend({},t,{
                    responseXML:n
                })),i.oncomplete(t))
            }
            var l=function(){},c=!1,u=function(e){
                var t=document.createElement("a"),n=document.createElement("a");
                t.href=location.href;
                try{
                    return n.href=e,n.href=n.href,t.protocol+"//"+t.host!=n.protocol+"//"+n.host
                }catch(i){}
                return!0
            },d=function(t,a,s,d){
                e.isObject(t)&&(d=t,t=d.url);
                var p,h=e.extend({
                    xhr:null,
                    url:t,
                    withCredentials:!1,
                    retryWithoutCredentials:!1,
                    timeout:6e4,
                    timeoutId:-1,
                    oncomplete:a||l,
                    onerror:s||l,
                    mimeType:d&&!d.responseType?"text/xml":"",
                    requireValidXML:!1,
                    responseType:d&&d.plainText?"text":""
                },d);
                if("XDomainRequest"in window&&u(t))p=h.xhr=new window.XDomainRequest,p.onload=r(h),p.ontimeout=p.onprogress=l,c=!0;
                else{
                    if(!("XMLHttpRequest"in window))return void h.onerror("",t);
                    p=h.xhr=new window.XMLHttpRequest,p.onreadystatechange=o(h)
                }
                var f=i("Error loading file",h);
                p.onerror=f,"overrideMimeType"in p?h.mimeType&&p.overrideMimeType(h.mimeType):c=!0;
                try{
                    t=t.replace(/#.*$/,""),p.open("GET",t,!0)
                }catch(g){
                    return f(g),p
                }
                if(h.responseType)try{
                    p.responseType=h.responseType
                }catch(g){}
                h.timeout&&(h.timeoutId=setTimeout(function(){
                    n(p),h.onerror("Timeout",t,p)
                },h.timeout),p.onabort=function(){
                    clearTimeout(h.timeoutId)
                });
                try{
                    h.withCredentials&&"withCredentials"in p&&(p.withCredentials=!0),p.send()
                }catch(g){
                    f(g)
                }
                return p
            };
    
            return{
                ajax:d,
                crossdomain:u
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1)],o=function(e){
            function t(e){
                return function(){
                    return i(e)
                }
            }
            var n={},i=e.memoize(function(e){
                var t=navigator.userAgent.toLowerCase();
                return null!==t.match(e)
            }),o=n.isInt=function(e){
                return parseFloat(e)%1===0
            };
        
            n.isFlashSupported=function(){
                var e=n.flashVersion();
                return e&&e>=11.2
            },n.isFF=t(/firefox/i),n.isIPod=t(/iP(hone|od)/i),n.isIPad=t(/iPad/i),n.isSafari602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),n.isOSX=t(/Mac OS X/i),n.isEdge=t(/\sedge\/\d+/i);
            var r=n.isIETrident=function(e){
                return!!n.isEdge()||(e?(e=parseFloat(e).toFixed(1),i(new RegExp("trident/.+rv:\\s*"+e,"i"))):i(/trident/i))
            },a=n.isMSIE=function(e){
                return e?(e=parseFloat(e).toFixed(1),i(new RegExp("msie\\s*"+e,"i"))):i(/msie/i)
            },s=t(/chrome/i);
            n.isChrome=function(){
                return s()&&!n.isEdge()
            },n.isIE=function(e){
                return e?(e=parseFloat(e).toFixed(1),e>=11?r(e):a(e)):a()||r()
            },n.isSafari=function(){
                return i(/safari/i)&&!i(/chrome/i)&&!i(/chromium/i)&&!i(/android/i)
            };
        
            var l=n.isIOS=function(e){
                return i(e?new RegExp("iP(hone|ad|od).+\\s(OS\\s"+e+"|.*\\sVersion/"+e+")","i"):/iP(hone|ad|od)/i)
            };
        
            n.isAndroidNative=function(e){
                return c(e,!0)
            };
        
            var c=n.isAndroid=function(e,t){
                return!(t&&i(/chrome\/[123456789]/i)&&!i(/chrome\/18/))&&(e?(o(e)&&!/\./.test(e)&&(e=""+e+"."),i(new RegExp("Android\\s*"+e,"i"))):i(/Android/i))
            };
        
            return n.isMobile=function(){
                return l()||c()
            },n.isIframe=function(){
                return window.frameElement&&"IFRAME"===window.frameElement.nodeName
            },n.flashVersion=function(){
                if(n.isAndroid())return 0;
                var e,t=navigator.plugins;
                if(t&&(e=t["Shockwave Flash"],e&&e.description))return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/,"$1"));
                if("undefined"!=typeof window.ActiveXObject){
                    try{
                        if(e=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,"."))
                    }catch(i){
                        return 0
                    }
                    return e
                }
                return 0
            },n
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(8),n(1),n(181)],o=function(e,t,n){
            var i={};
        
            i.createElement=function(e){
                var t=document.createElement("div");
                return t.innerHTML=e,t.firstChild
            },i.styleDimension=function(e){
                return e+(e.toString().indexOf("%")>0?"":"px")
            };
            
            var o=function(e){
                return t.isString(e.className)?e.className.split(" "):[]
            },r=function(t,n){
                n=e.trim(n),t.className!==n&&(t.className=n)
            };
            
            return i.classList=function(e){
                return e.classList?e.classList:o(e)
            },i.hasClass=n.hasClass,i.addClass=function(e,n){
                var i=o(e),a=t.isArray(n)?n:n.split(" ");
                t.each(a,function(e){
                    t.contains(i,e)||i.push(e)
                }),r(e,i.join(" "))
            },i.removeClass=function(e,n){
                var i=o(e),a=t.isArray(n)?n:n.split(" ");
                r(e,t.difference(i,a).join(" "))
            },i.replaceClass=function(e,t,n){
                var i=e.className||"";
                t.test(i)?i=i.replace(t,n):n&&(i+=" "+n),r(e,i)
            },i.toggleClass=function(e,n,o){
                var r=i.hasClass(e,n);
                o=t.isBoolean(o)?o:!r,o!==r&&(o?i.addClass(e,n):i.removeClass(e,n))
            },i.emptyElement=function(e){
                for(;e.firstChild;)e.removeChild(e.firstChild)
            },i.addStyleSheet=function(e){
                var t=document.createElement("link");
                t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)
            },i.empty=function(e){
                if(e)for(;e.childElementCount>0;)e.removeChild(e.children[0])
            },i.bounds=function(e){
                var t={
                    left:0,
                    right:0,
                    width:0,
                    height:0,
                    top:0,
                    bottom:0
                };
            
                if(!e||!document.body.contains(e))return t;
                var n=e.getBoundingClientRect(e),i=window.pageYOffset,o=window.pageXOffset;
                return n.width||n.height||n.left||n.top?(t.left=n.left+o,t.right=n.right+o,t.top=n.top+i,t.bottom=n.bottom+i,t.width=n.right-n.left,t.height=n.bottom-n.top,t):t
            },i
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(3),n(1)],o=function(e,t){
            function n(){}
            var i=function(e,n){
                var i,o=this;
                i=e&&t.has(e,"constructor")?e.constructor:function(){
                    return o.apply(this,arguments)
                },t.extend(i,o,n);
                var r=function(){
                    this.constructor=i
                };
                
                return r.prototype=o.prototype,i.prototype=new r,e&&t.extend(i.prototype,e),i.__super__=o.prototype,i
            };
            
            return n.extend=i,t.extend(n.prototype,e),n
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(28),n(1),n(44),n(43),n(30)],o=function(e,t,n,i,o){
            var r={};
        
            return r.repo=t.memoize(function(){
                var t=o.split("+")[0],i=e.repo+t+"/";
                return n.isHTTPS()?i.replace(/^http:/,"https:"):i
            }),r.versionCheck=function(e){
                var t=("0"+e).split(/\W/),n=o.split(/\W/),i=parseFloat(t[0]),r=parseFloat(n[0]);
                return!(i>r)&&!(i===r&&parseFloat("0"+t[1])>parseFloat(n[1]))
            },r.loadFrom=function(){
                return r.repo()
            },r
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1)],o=function(e){
            var t=function(){
                var t={},n={},i={},o={};
            
                return{
                    start:function(n){
                        t[n]=e.now(),i[n]=i[n]+1||1
                    },
                    end:function(i){
                        if(t[i]){
                            var o=e.now()-t[i];
                            n[i]=n[i]+o||o
                        }
                    },
                    dump:function(){
                        return{
                            counts:i,
                            sums:n,
                            events:o
                        }
                    },
                    tick:function(t,n){
                        o[t]=n||e.now()
                    },
                    between:function(e,t){
                        return o[t]&&o[e]?o[t]-o[e]:-1
                    }
                }
            };

            return t
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            return document.createElement("video")
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,,function(e,t,n){
        var i;
        i=function(require,e,t){
            function n(e,t){
                o(t,r(e))
            }
            function i(e){
                var t=u[e];
                if(t){
                    for(var n=Object.keys(t),i=0;i<n.length;i+=1)for(var o=t[n[i]],r=0;r<o.parts.length;r+=1)o.parts[r]();
                    delete u[e]
                }
            }
            function o(e,t){
                for(var n=0;n<t.length;n++){
                    var i=t[n],o=(u[e]||{})[i.id];
                    if(o){
                        for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);
                        for(;r<i.parts.length;r++)o.parts.push(l(e,i.parts[r]))
                    }else{
                        for(var a=[],r=0;r<i.parts.length;r++)a.push(l(e,i.parts[r]));
                        u[e]=u[e]||{},u[e][i.id]={
                            id:i.id,
                            parts:a
                        }
                    }
                }
            }
            function r(e){
                for(var t=[],n={},i=0;i<e.length;i++){
                    var o=e[i],r=o[0],a=o[1],s=o[2],l={
                        css:a,
                        media:s
                    };
        
                    n[r]?n[r].parts.push(l):t.push(n[r]={
                        id:r,
                        parts:[l]
                    })
                }
                return t
            }
            function a(e){
                h().appendChild(e)
            }
            function s(e){
                var t=document.createElement("style");
                return t.type="text/css",t.setAttribute("data-jwplayer-id",e),a(t),t
            }
            function l(e,t){
                var n,i,o,r=d[e];
                r||(r=d[e]={
                    element:s(e),
                    counter:0
                });
                var a=r.counter++;
                return n=r.element,i=c.bind(null,n,a,!1),o=c.bind(null,n,a,!0),i(t),function(e){
                    if(e){
                        if(e.css===t.css&&e.media===t.media)return;
                        i(t=e)
                    }else o()
                }
            }
            function c(e,t,n,i){
                var o=n?"":i.css;
                if(e.styleSheet)e.styleSheet.cssText=f(t,o);
                else{
                    var r=document.createTextNode(o),a=e.childNodes;
                    a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)
                }
            }
            var u={},d={},p=function(e){
                var t;
                return function(){
                    return"undefined"==typeof t&&(t=e.apply(this,arguments)),t
                }
            },h=p(function(){
                return document.head||document.getElementsByTagName("head")[0]
            });
            t.exports={
                style:n,
                clear:i
            };

            var f=function(){
                var e=[];
                return function(t,n){
                    return e[t]=n,e.filter(Boolean).join("\n")
                }
            }()
        }.call(t,n,t,e),!(void 0!==i&&(e.exports=i))
    },function(e,t,n){
        var i,o;
        i=[n(160),n(27),n(1)],o=function(e,t,n){
            var i=e.selectPlayer,o=function(){
                var e=i.apply(this,arguments);
                return e?e:{
                    registerPlugin:function(e,n,i){
                        "jwpsrv"!==e&&t.registerPlugin(e,n,i)
                    }
                }
            };
    
            return n.extend(e,{
                selectPlayer:o
            })
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,,,function(e,t,n){
        var i,o;
        i=[n(2),n(91),n(23)],o=function(e,t,n){
            var i="invalid",o="RnXcsftYjWRDA^Uy",r=function(r){
                function a(r){
                    e.exists(r)||(r="");
                    try{
                        r=t.decrypt(r,o);
                        var a=r.split("/");
                        s=a[0],"pro"===s&&(s="premium");
                        var u=n(s);
                        if(a.length>2&&u("setup")){
                            l=a[1];
                            var d=parseInt(a[2]);
                            d>0&&(c=new Date,c.setTime(d))
                        }else s=i
                    }catch(p){
                        s=i
                    }
                }
                var s,l,c;
                this.edition=function(){
                    return c&&c.getTime()<(new Date).getTime()?i:s
                },this.token=function(){
                    return l
                },this.expiration=function(){
                    return c
                },a(r)
            };
        
            return r
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            var e=function(e){
                return window.atob(e)
            },t=function(e){
                return unescape(encodeURIComponent(e))
            },n=function(e){
                try{
                    return decodeURIComponent(escape(e))
                }catch(t){
                    return e
                }
            },i=function(e){
                for(var t=new Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);
                return t
            },o=function(e){
                for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);
                return t.join("")
            };
            return{
                decrypt:function(r,a){
                    if(r=String(r),a=String(a),0==r.length)return"";
                    for(var s,l,c=i(e(r)),u=i(t(a).slice(0,16)),d=c.length,p=c[d-1],h=c[0],f=2654435769,g=Math.floor(6+52/d),m=g*f;0!=m;){
                        l=m>>>2&3;
                        for(var v=d-1;v>=0;v--)p=c[v>0?v-1:d-1],s=(p>>>5^h<<2)+(h>>>3^p<<4)^(m^h)+(u[3&v^l]^p),h=c[v]-=s;
                        m-=f
                    }
                    var w=o(c);
                    return w=w.replace(/\0+$/,""),n(w)
                }
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(201),n(4),n(215)],o=function(e,t,n){
            var i=function(i,o){
                var r=new e(i,o),a=r.setup;
                return r.setup=function(){
                    if(a.call(this),"trial"===o.get("edition")){
                        var e=document.createElement("div");
                        e.className="jw-icon jw-watermark",this.element().appendChild(e)
                    }
                    o.on("change:skipButton",this.onSkipButton,this),o.on("change:castActive change:playlistItem",this.showDisplayIconImage,this)
                },r.showDisplayIconImage=function(e){
                    var t=e.get("castActive"),n=e.get("playlistItem"),i=r.controlsContainer().getElementsByClassName("jw-display-icon-container")[0];
                    t&&n&&n.image?(i.style.backgroundImage='url("'+n.image+'")',i.style.backgroundSize="contain"):(i.style.backgroundImage="",i.style.backgroundSize="")
                },r.onSkipButton=function(e,t){
                    t?this.addSkipButton():this._skipButton&&(this._skipButton.destroy(),this._skipButton=null)
                },r.addSkipButton=function(){
                    this._skipButton=new n(this.instreamModel),this._skipButton.on(t.JWPLAYER_AD_SKIPPED,function(){
                        this.api.skipAd()
                    },this),this.controlsContainer().appendChild(this._skipButton.element())
                },r
            };
            return i
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){
        t=e.exports=n(127)(),t.push([e.id,".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:jw-icons;src:url("+n(129)+") format('woff'),url("+n(128)+') format(\'truetype\');font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-cast:before{content:"\\E603"}.jw-icon-cast.jw-off:before{content:"\\E602"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\E606"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:"\\E60A"}.jw-rightclick-logo:before,.jw-watermark:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-prev:before{content:"\\E60F"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-more:before{content:"\\E614"}.jw-icon-close:before{content:"\\E615"}.jw-icon-playlist:before{content:"\\E616"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jwplayer:hover .jw-display-icon-container{background-color:#212121}.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2.5em}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-controlbar,.jw-display-icon-container,.jw-dock,.jw-logo,.jw-media,.jw-overlays>div,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-click,.jw-preview{position:absolute;width:100%;height:100%}.jw-preview{display:none;opacity:1;visibility:visible;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.75em;width:3.75em;margin:-1.875em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2.5em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;bottom:0;height:2.5em;width:100%;padding:0 .4em}.jw-controlbar .jw-hidden{display:none}.jw-controlbar.jw-drawer-expanded .jw-controlbar-center-group,.jw-controlbar.jw-drawer-expanded .jw-controlbar-left-group{opacity:0}.jw-background-color{background-color:rgba(33,33,33,.8)}.jw-slider-horizontal{background-color:transparent}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .4em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2.5em;position:relative;line-height:2.5em;vertical-align:middle;cursor:pointer;padding:0 .4em}.jw-icon-inline,.jw-icon-tooltip{min-width:1.5625em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-cast,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-button-color{color:hsla(0,0%,100%,.6)}.jw-button-color:hover{color:#fff}.jw-button-color:focus{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:hsla(0,0%,100%,.6)}.jw-toggle:focus{outline:none;color:#fff}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{height:1em;width:100%;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:hsla(0,0%,100%,.2)}.jw-buffer{background-color:hsla(0,0%,100%,.3)}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{height:.25em;background-color:rgba(33,33,33,.9);border-radius:25%;width:.4em}.jw-knob{background-color:#fff;width:.5em;height:.5em;border-radius:.25em}.jw-slider-horizontal{height:.25em}.jw-slider-horizontal.jw-slider-volume{width:4em}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-horizontal .jw-knob{top:-.125em;margin-left:-.25em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.25em}.jw-slider-vertical{padding:.8em .8em 0;position:absolute}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.25em}.jw-slider-vertical .jw-slider-container{height:4em}.jw-slider-vertical .jw-knob{right:0;left:-.125em}.jw-slider-time{width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;width:100%;height:inherit;text-align:center;display:none;max-height:81.375%;line-height:1.3em;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-text-track-display{font-size:inherit;line-height:1.3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:81.375%;line-height:1.3em}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right,.jw-watermark{bottom:0;right:0}.jw-watermark{position:absolute;top:50%;left:0;text-align:center;font-size:14em;color:#fff;opacity:.33;pointer-events:none}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden,.jw-icon-tooltip.jw-open-drawer:before,.jw-overlay-horizontal{display:none}.jw-icon-tooltip.jw-open-drawer .jw-overlay-horizontal{opacity:1;display:inline-block;vertical-align:top}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;bottom:1.25em;padding:.4em;border-radius:.25em}.jw-time-tip .jw-text{color:#fff;line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2.5em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:hsla(0,0%,100%,.6);padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#fff}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-controlbar .jw-option.jw-active-option{color:#fff}.jw-playlist-container{left:-51%}.jw-playlist-container ::-webkit-scrollbar-track{background-color:hsla(0,0%,100%,.6)}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid hsla(0,0%,100%,.6);text-align:left;padding-left:.4em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-x:hidden;overflow-y:scroll;width:calc(100% - 2px)}.jw-playlist .jw-option{height:3em;color:#fff;padding-left:1em;font-size:.75em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em;padding:.4em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:hsla(0,0%,100%,.6);vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;border:1px solid #fff;position:absolute;top:auto;left:.5em;right:.5em;bottom:50%;margin-bottom:-12.5%;height:50%;width:50%;padding:0;background-repeat:no-repeat;background-position:50%}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:.5em;right:.5em;bottom:75%;margin-bottom:1.5em;text-align:center}.jw-cast-name{color:#ccc}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}.jwplayer.jw-state-error .jw-title,body .jw-error .jw-title{display:block}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-preview,body .jw-error .jw-preview{display:block}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\E607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-controlbar{display:none}.jwplayer.jw-flag-media-audio .jw-controlbar,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:3em}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:81.375%}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:81.375%}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-controlbar{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}.jw-flag-controls-disabled.jwplayer .jw-captions{max-height:none}.jw-flag-controls-disabled.jwplayer video::-webkit-media-text-track-container{max-height:none}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch .jw-controlbar,.jw-flag-touch .jw-plugin,.jw-flag-touch .jw-skip{font-size:1.5em}.jw-flag-touch .jw-captions{bottom:4.25em}.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{display:inline;content:"\\E615"}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-compact-player .jw-icon-playlist,.jw-flag-compact-player .jw-text-duration,.jw-flag-compact-player .jw-text-elapsed,.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jwplayer.jw-flag-audio-player{background-color:transparent}.jwplayer.jw-flag-audio-player .jw-media{visibility:hidden}.jwplayer.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jwplayer.jw-flag-audio-player .jw-display-icon-container,.jwplayer.jw-flag-audio-player .jw-preview,.jwplayer.jw-flag-audio-player .jw-title{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{vertical-align:middle;display:table;height:100%;left:0;bottom:0;margin:0;width:100%;min-width:100%}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-audio-player .jw-icon-inline{height:auto;line-height:normal}.jwplayer.jw-flag-audio-player .jw-group{vertical-align:middle}.jwplayer.jw-flag-audio-player .jw-controlbar-center-group{padding-bottom:2px}.jw-skin-seven .jw-color-active,.jw-skin-seven .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-skin-seven .jw-color-inactive,.jw-skin-seven .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-skin-seven .jw-active-option{background-color:hsla(0,0%,100%,.1)}.jw-skin-seven .jw-display-icon-container{display:table;font-size:20px;border-radius:3.5em}.jw-skin-seven .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-skin-seven .jw-display-icon-container>.jw-icon{color:hsla(0,0%,100%,.9);font-size:1.7em}.jw-skin-seven.jw-state-idle .jw-display-icon-container>.jw-icon{padding-left:4px}.jw-skin-seven .jw-dock-button{border-radius:2.5em}.jw-skin-seven .jw-menu{padding:0}.jw-skin-seven .jw-dock .jw-overlay,.jw-skin-seven .jw-skip{border-radius:.4em}.jw-skin-seven .jw-text{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}',""])
    },function(e,t){
        e.exports=function(){
            var e=[];
            return e.toString=function(){
                for(var e=[],t=0;t<this.length;t++){
                    var n=this[t];
                    n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])
                }
                return e.join("")
            },e.i=function(t,n){
                "string"==typeof t&&(t=[[null,t,""]]);
                for(var i={},o=0;o<this.length;o++){
                    var r=this[o][0];
                    "number"==typeof r&&(i[r]=!0)
                }
                for(o=0;o<t.length;o++){
                    var a=t[o];
                    "number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))
                }
            },e
        }
    },function(e,t,n){
        e.exports=n.p+"jw-icons.ttf"
    },function(e,t,n){
        e.exports=n.p+"jw-icons.woff"
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                return'<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                var r;
                return'<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset" role="button" tabindex="0" aria-label="'+e.escapeExpression((r=null!=(r=n.ariaLabel||(null!=t?t.ariaLabel:t))?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{
                    name:"ariaLabel",
                    hash:{},
                    data:o
                }):r))+'"></div>\n</div>\n'
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            1:function(e,t,n,i,o){
                var r,a,s=null!=t?t:{};
                return'    <div class="jw-dock-button jw-background-color jw-reset'+(null!=(r=n["if"].call(s,null!=t?t.btnClass:t,{
                    name:"if",
                    hash:{},
                    fn:e.program(2,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+'" button="'+e.escapeExpression((a=null!=(a=n.id||(null!=t?t.id:t))?a:n.helperMissing,"function"==typeof a?a.call(s,{
                    name:"id",
                    hash:{},
                    data:o
                }):a))+'">\n        <div class="jw-icon jw-dock-image jw-reset" '+(null!=(r=n["if"].call(s,null!=t?t.img:t,{
                    name:"if",
                    hash:{},
                    fn:e.program(4,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+'></div>\n        <div class="jw-arrow jw-reset"></div>\n'+(null!=(r=n["if"].call(s,null!=t?t.tooltip:t,{
                    name:"if",
                    hash:{},
                    fn:e.program(6,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+"    </div>\n"
            },
            2:function(e,t,n,i,o){
                var r;
                return" "+e.escapeExpression((r=null!=(r=n.btnClass||(null!=t?t.btnClass:t))?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{
                    name:"btnClass",
                    hash:{},
                    data:o
                }):r))
            },
            4:function(e,t,n,i,o){
                var r;
                return"style='background-image: url(\""+e.escapeExpression((r=null!=(r=n.img||(null!=t?t.img:t))?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{
                    name:"img",
                    hash:{},
                    data:o
                }):r))+"\")'"
            },
            6:function(e,t,n,i,o){
                var r;
                return'        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">'+e.escapeExpression((r=null!=(r=n.tooltip||(null!=t?t.tooltip:t))?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{
                    name:"tooltip",
                    hash:{},
                    data:o
                }):r))+"</span>\n        </div>\n"
            },
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                var r;
                return'<div class="jw-dock jw-reset">\n'+(null!=(r=n.each.call(null!=t?t:{},t,{
                    name:"each",
                    hash:{},
                    fn:e.program(1,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+"</div>"
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                var r,a=null!=t?t:{},s=n.helperMissing,l="function",c=e.escapeExpression;
                return'<div id="'+c((r=null!=(r=n.id||(null!=t?t.id:t))?r:s,typeof r===l?r.call(a,{
                    name:"id",
                    hash:{},
                    data:o
                }):r))+'"class="jw-skin-'+c((r=null!=(r=n.skin||(null!=t?t.skin:t))?r:s,typeof r===l?r.call(a,{
                    name:"skin",
                    hash:{},
                    data:o
                }):r))+' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">'+c((r=null!=(r=n.title||(null!=t?t.title:t))?r:s,typeof r===l?r.call(a,{
                    name:"title",
                    hash:{},
                    data:o
                }):r))+'</div>\n        <div class="jw-title-secondary jw-reset">'+c((r=null!=(r=n.body||(null!=t?t.body:t))?r:s,typeof r===l?r.call(a,{
                    name:"body",
                    hash:{},
                    data:o
                }):r))+'</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div>\n        </div>\n    </div>\n</div>\n'
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                return'<div class="jw-logo jw-reset"></div>'
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            1:function(e,t,n,i,o){
                var r,a=e.escapeExpression;
                return"        <li class='jw-text jw-option jw-item-"+a((r=null!=(r=n.index||o&&o.index)?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{
                    name:"index",
                    hash:{},
                    data:o
                }):r))+" jw-reset'>"+a(e.lambda(null!=t?t.label:t,t))+"</li>\n"
            },
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                var r;
                return'<ul class="jw-menu jw-background-color jw-reset">\n'+(null!=(r=n.each.call(null!=t?t:{},t,{
                    name:"each",
                    hash:{},
                    fn:e.program(1,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+"</ul>"
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                var r;
                return'<div id="'+e.escapeExpression((r=null!=(r=n.id||(null!=t?t.id:t))?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{
                    name:"id",
                    hash:{},
                    data:o
                }):r))+'" class="jwplayer jw-reset jw-state-idle" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            1:function(e,t,n,i,o){
                var r;
                return null!=(r=n["if"].call(null!=t?t:{},null!=t?t.active:t,{
                    name:"if",
                    hash:{},
                    fn:e.program(2,o,0),
                    inverse:e.program(4,o,0),
                    data:o
                }))?r:""
            },
            2:function(e,t,n,i,o){
                var r,a=e.escapeExpression;
                return"                <li class='jw-option jw-text jw-active-option jw-item-"+a((r=null!=(r=n.index||o&&o.index)?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{
                    name:"index",
                    hash:{},
                    data:o
                }):r))+' jw-reset\'>\n                    <span class="jw-label jw-reset"><span class="jw-icon jw-icon-play jw-reset"></span></span>\n                    <span class="jw-name jw-reset">'+a(e.lambda(null!=t?t.title:t,t))+"</span>\n                </li>\n"
            },
            4:function(e,t,n,i,o){
                var r,a=e.escapeExpression,s=e.lambda;
                return"                <li class='jw-option jw-text jw-item-"+a((r=null!=(r=n.index||o&&o.index)?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{
                    name:"index",
                    hash:{},
                    data:o
                }):r))+' jw-reset\'>\n                    <span class="jw-label jw-reset">'+a(s(null!=t?t.label:t,t))+'</span>\n                    <span class="jw-name jw-reset">'+a(s(null!=t?t.title:t,t))+"</span>\n                </li>\n"
            },
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                var r;
                return'<div class="jw-menu jw-playlist-container jw-background-color jw-reset">\n\n    <div class="jw-tooltip-title jw-reset">\n        <span class="jw-icon jw-icon-inline jw-icon-playlist jw-reset"></span>\n        <span class="jw-text jw-reset">PLAYLIST</span>\n    </div>\n\n    <ul class="jw-playlist jw-reset">\n'+(null!=(r=n.each.call(null!=t?t:{},t,{
                    name:"each",
                    hash:{},
                    fn:e.program(1,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+"    </ul>\n</div>"
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            1:function(e,t,n,i,o){
                var r,a,s=null!=t?t:{},l=n.helperMissing,c="function",u=e.escapeExpression;
                return'        <li class="jw-reset'+(null!=(r=n["if"].call(s,null!=t?t.featured:t,{
                    name:"if",
                    hash:{},
                    fn:e.program(2,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+'">\n            <a href="'+u((a=null!=(a=n.link||(null!=t?t.link:t))?a:l,typeof a===c?a.call(s,{
                    name:"link",
                    hash:{},
                    data:o
                }):a))+'" class="jw-reset" target="_top">\n'+(null!=(r=n["if"].call(s,null!=t?t.showLogo:t,{
                    name:"if",
                    hash:{},
                    fn:e.program(4,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+"                "+u((a=null!=(a=n.title||(null!=t?t.title:t))?a:l,typeof a===c?a.call(s,{
                    name:"title",
                    hash:{},
                    data:o
                }):a))+"\n            </a>\n        </li>\n"
            },
            2:function(e,t,n,i,o){
                return" jw-featured"
            },
            4:function(e,t,n,i,o){
                return'                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'
            },
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                var r;
                return'<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n'+(null!=(r=n.each.call(null!=t?t:{},null!=t?t.items:t,{
                    name:"each",
                    hash:{},
                    fn:e.program(1,o,0),
                    inverse:e.noop,
                    data:o
                }))?r:"")+"    </ul>\n</div>"
            },
            useData:!0
        })
    },function(e,t,n){
        var i=n(11);
        e.exports=(i["default"]||i).template({
            compiler:[7,">= 4.0.0"],
            main:function(e,t,n,i,o){
                var r,a=null!=t?t:{},s=n.helperMissing,l="function",c=e.escapeExpression;
                return'<div class="'+c((r=null!=(r=n.className||(null!=t?t.className:t))?r:s,typeof r===l?r.call(a,{
                    name:"className",
                    hash:{},
                    data:o
                }):r))+" "+c((r=null!=(r=n.orientation||(null!=t?t.orientation:t))?r:s,typeof r===l?r.call(a,{
                    name:"orientation",
                    hash:{},
                    data:o
                }):r))+' jw-reset" aria-hidden="true">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'
            },
            useData:!0
        })
    },,function(e,t,n){
        "use strict";
        function i(e){
            return e&&e.__esModule?e:{
                "default":e
            }
        }
        function o(e){
            if(e&&e.__esModule)return e;
            var t={};
            if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t
        }
        function r(){
            var e=new s.HandlebarsEnvironment;
            return h.extend(e,s),e.SafeString=c["default"],e.Exception=d["default"],e.Utils=h,e.escapeExpression=h.escapeExpression,e.VM=g,e.template=function(t){
                return g.template(t,e)
            },e
        }
        t.__esModule=!0;
        var a=n(61),s=o(a),l=n(155),c=i(l),u=n(26),d=i(u),p=n(12),h=o(p),f=n(154),g=o(f),m=n(153),v=i(m),w=r();
        w.create=r,v["default"](w),w["default"]=w,t["default"]=w,e.exports=t["default"]
    },function(e,t,n){
        "use strict";
        function i(e){
            return e&&e.__esModule?e:{
                "default":e
            }
        }
        function o(e){
            a["default"](e)
        }
        t.__esModule=!0,t.registerDefaultDecorators=o;
        var r=n(143),a=i(r)
    },function(e,t,n){
        "use strict";
        t.__esModule=!0;
        var i=n(12);
        t["default"]=function(e){
            e.registerDecorator("inline",function(e,t,n,o){
                var r=e;
                return t.partials||(t.partials={},r=function(o,r){
                    var a=n.partials;
                    n.partials=i.extend({},a,t.partials);
                    var s=e(o,r);
                    return n.partials=a,s
                }),t.partials[o.args[0]]=o.fn,r
            })
        },e.exports=t["default"]
    },function(e,t,n){
        "use strict";
        function i(e){
            return e&&e.__esModule?e:{
                "default":e
            }
        }
        function o(e){
            a["default"](e),l["default"](e),u["default"](e),p["default"](e),f["default"](e),m["default"](e),w["default"](e)
        }
        t.__esModule=!0,t.registerDefaultHelpers=o;
        var r=n(145),a=i(r),s=n(146),l=i(s),c=n(147),u=i(c),d=n(148),p=i(d),h=n(149),f=i(h),g=n(150),m=i(g),v=n(151),w=i(v)
    },function(e,t,n){
        "use strict";
        t.__esModule=!0;
        var i=n(12);
        t["default"]=function(e){
            e.registerHelper("blockHelperMissing",function(t,n){
                var o=n.inverse,r=n.fn;
                if(t===!0)return r(this);
                if(t===!1||null==t)return o(this);
                if(i.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);
                if(n.data&&n.ids){
                    var a=i.createFrame(n.data);
                    a.contextPath=i.appendContextPath(n.data.contextPath,n.name),n={
                        data:a
                    }
                }
                return r(t,n)
            })
        },e.exports=t["default"]
    },function(e,t,n){
        "use strict";
        function i(e){
            return e&&e.__esModule?e:{
                "default":e
            }
        }
        t.__esModule=!0;
        var o=n(12),r=n(26),a=i(r);
        t["default"]=function(e){
            e.registerHelper("each",function(e,t){
                function n(t,n,r){
                    c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,u&&(c.contextPath=u+t)),l+=i(e[t],{
                        data:c,
                        blockParams:o.blockParams([e[t],t],[u+t,null])
                    })
                }
                if(!t)throw new a["default"]("Must pass iterator to #each");
                var i=t.fn,r=t.inverse,s=0,l="",c=void 0,u=void 0;
                if(t.data&&t.ids&&(u=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(c=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var d=e.length;s<d;s++)s in e&&n(s,s,s===e.length-1);
                    else{
                        var p=void 0;
                        for(var h in e)e.hasOwnProperty(h)&&(void 0!==p&&n(p,s-1),p=h,s++);void 0!==p&&n(p,s-1,!0)
                    }
                return 0===s&&(l=r(this)),l
            })
        },e.exports=t["default"]
    },function(e,t,n){
        "use strict";
        function i(e){
            return e&&e.__esModule?e:{
                "default":e
            }
        }
        t.__esModule=!0;
        var o=n(26),r=i(o);
        t["default"]=function(e){
            e.registerHelper("helperMissing",function(){
                if(1!==arguments.length)throw new r["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')
            })
        },e.exports=t["default"]
    },function(e,t,n){
        "use strict";
        t.__esModule=!0;
        var i=n(12);
        t["default"]=function(e){
            e.registerHelper("if",function(e,t){
                return i.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||i.isEmpty(e)?t.inverse(this):t.fn(this)
            }),e.registerHelper("unless",function(t,n){
                return e.helpers["if"].call(this,t,{
                    fn:n.inverse,
                    inverse:n.fn,
                    hash:n.hash
                })
            })
        },e.exports=t["default"]
    },function(e,t){
        "use strict";
        t.__esModule=!0,t["default"]=function(e){
            e.registerHelper("log",function(){
                for(var t=[void 0],n=arguments[arguments.length-1],i=0;i<arguments.length-1;i++)t.push(arguments[i]);
                var o=1;
                null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)
            })
        },e.exports=t["default"]
    },function(e,t){
        "use strict";
        t.__esModule=!0,t["default"]=function(e){
            e.registerHelper("lookup",function(e,t){
                return e&&e[t]
            })
        },e.exports=t["default"]
    },function(e,t,n){
        "use strict";
        t.__esModule=!0;
        var i=n(12);
        t["default"]=function(e){
            e.registerHelper("with",function(e,t){
                i.isFunction(e)&&(e=e.call(this));
                var n=t.fn;
                if(i.isEmpty(e))return t.inverse(this);
                var o=t.data;
                return t.data&&t.ids&&(o=i.createFrame(t.data),o.contextPath=i.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{
                    data:o,
                    blockParams:i.blockParams([e],[o&&o.contextPath])
                })
            })
        },e.exports=t["default"]
    },function(e,t,n){
        "use strict";
        t.__esModule=!0;
        var i=n(12),o={
            methodMap:["debug","info","warn","error"],
            level:"info",
            lookupLevel:function(e){
                if("string"==typeof e){
                    var t=i.indexOf(o.methodMap,e.toLowerCase());
                    e=t>=0?t:parseInt(e,10)
                }
                return e
            },
            log:function(e){
                if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){
                    var t=o.methodMap[e];
                    console[t]||(t="log");
                    for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];
                    console[t].apply(console,i)
                }
            }
        };
        t["default"]=o,e.exports=t["default"]
    },function(e,t){
        (function(n){
            "use strict";
            t.__esModule=!0,t["default"]=function(e){
                var t="undefined"!=typeof n?n:window,i=t.Handlebars;
                e.noConflict=function(){
                    return t.Handlebars===e&&(t.Handlebars=i),e
                }
            },e.exports=t["default"]
        }).call(t,function(){
            return this
        }())
    },function(e,t,n){
        "use strict";
        function i(e){
            return e&&e.__esModule?e:{
                "default":e
            }
        }
        function o(e){
            if(e&&e.__esModule)return e;
            var t={};
            if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t
        }
        function r(e){
            var t=e&&e[0]||1,n=v.COMPILER_REVISION;
            if(t!==n){
                if(t<n){
                    var i=v.REVISION_CHANGES[n],o=v.REVISION_CHANGES[t];
                    throw new m["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+o+").")
                }
                throw new m["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")
            }
        }
        function a(e,t){
            function n(n,i,o){
                o.hash&&(i=f.extend({},i,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,i,o);
                var r=t.VM.invokePartial.call(this,n,i,o);
                if(null==r&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),r=o.partials[o.name](i,o)),null!=r){
                    if(o.indent){
                        for(var a=r.split("\n"),s=0,l=a.length;s<l&&(a[s]||s+1!==l);s++)a[s]=o.indent+a[s];
                        r=a.join("\n")
                    }
                    return r
                }
                throw new m["default"]("The partial "+o.name+" could not be compiled when running in runtime-only mode")
            }
            function i(t){
                function n(t){
                    return""+e.main(o,t,o.helpers,o.partials,a,l,s)
                }
                var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=r.data;
                i._setup(r),!r.partial&&e.useData&&(a=d(t,a));
                var s=void 0,l=e.useBlockParams?[]:void 0;
                return e.useDepths&&(s=r.depths?t!==r.depths[0]?[t].concat(r.depths):r.depths:[t]),(n=p(e.main,n,o,r.depths||[],a,l))(t,r)
            }
            if(!t)throw new m["default"]("No environment passed to template");
            if(!e||!e.main)throw new m["default"]("Unknown template object: "+typeof e);
            e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);
            var o={
                strict:function(e,t){
                    if(!(t in e))throw new m["default"]('"'+t+'" not defined in '+e);
                    return e[t]
                },
                lookup:function(e,t){
                    for(var n=e.length,i=0;i<n;i++)if(e[i]&&null!=e[i][t])return e[i][t]
                },
                lambda:function(e,t){
                    return"function"==typeof e?e.call(t):e
                },
                escapeExpression:f.escapeExpression,
                invokePartial:n,
                fn:function(t){
                    var n=e[t];
                    return n.decorator=e[t+"_d"],n
                },
                programs:[],
                program:function(e,t,n,i,o){
                    var r=this.programs[e],a=this.fn(e);
                    return t||o||i||n?r=s(this,e,a,t,n,i,o):r||(r=this.programs[e]=s(this,e,a)),r
                },
                data:function(e,t){
                    for(;e&&t--;)e=e._parent;
                    return e
                },
                merge:function(e,t){
                    var n=e||t;
                    return e&&t&&e!==t&&(n=f.extend({},t,e)),n
                },
                noop:t.VM.noop,
                compilerInfo:e.compiler
            };
            return i.isTop=!0,i._setup=function(n){
                n.partial?(o.helpers=n.helpers,o.partials=n.partials,o.decorators=n.decorators):(o.helpers=o.merge(n.helpers,t.helpers),e.usePartial&&(o.partials=o.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(o.decorators=o.merge(n.decorators,t.decorators)))
            },i._child=function(t,n,i,r){
                if(e.useBlockParams&&!i)throw new m["default"]("must pass block params");
                if(e.useDepths&&!r)throw new m["default"]("must pass parent depths");
                return s(o,t,e[t],n,0,i,r)
            },i
        }
        function s(e,t,n,i,o,r,a){
            function s(t){
                var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;
                return a&&t!==a[0]&&(s=[t].concat(a)),n(e,t,e.helpers,e.partials,o.data||i,r&&[o.blockParams].concat(r),s)
            }
            return s=p(n,s,e,a,i,r),s.program=t,s.depth=a?a.length:0,s.blockParams=o||0,s
        }
        function l(e,t,n){
            return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e
        }
        function c(e,t,n){
            n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);
            var i=void 0;
            if(n.fn&&n.fn!==u&&(n.data=v.createFrame(n.data),i=n.data["partial-block"]=n.fn,i.partials&&(n.partials=f.extend({},n.partials,i.partials))),void 0===e&&i&&(e=i),void 0===e)throw new m["default"]("The partial "+n.name+" could not be found");
            if(e instanceof Function)return e(t,n)
        }
        function u(){
            return""
        }
        function d(e,t){
            return t&&"root"in t||(t=t?v.createFrame(t):{},t.root=e),t
        }
        function p(e,t,n,i,o,r){
            if(e.decorator){
                var a={};
                t=e.decorator(t,a,n,i&&i[0],o,r,i),f.extend(t,a)
            }
            return t
        }
        t.__esModule=!0,t.checkRevision=r,t.template=a,t.wrapProgram=s,t.resolvePartial=l,t.invokePartial=c,t.noop=u;
        var h=n(12),f=o(h),g=n(26),m=i(g),v=n(61)
    },function(e,t){
        "use strict";
        function n(e){
            this.string=e
        }
        t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){
            return""+this.string
        },t["default"]=n,e.exports=t["default"]
    },function(e,t,n){
        var i,o;
        i=[n(27),n(1)],o=function(e,t){
            return function(n,i){
                var o=["seek","skipAd","stop","playlistNext","playlistPrev","playlistItem","resize","addButton","removeButton","registerPlugin","attachMedia"];
                t.each(o,function(e){
                    n[e]=function(){
                        return i[e].apply(i,arguments),n
                    }
                }),n.registerPlugin=e.registerPlugin
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1)],o=function(e){
            return function(t,n){
                var i=["buffer","controls","position","duration","fullscreen","volume","mute","item","stretching","playlist","captions"];
                e.each(i,function(e){
                    var i=e.slice(0,1).toUpperCase()+e.slice(1);
                    t["get"+i]=function(){
                        return n._model.get(e)
                    }
                });
                var o=["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],r=["setControls","setFullscreen","setVolume","setMute","setCues","setCaptions"];
                e.each(o,function(e){
                    t[e]=function(){
                        return n[e]?n[e].apply(n,arguments):null
                    }
                }),e.each(r,function(e){
                    t[e]=function(){
                        return n[e].apply(n,arguments),t
                    }
                }),t.getPlaylistIndex=t.getItem
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(4),n(5),n(3),n(2),n(79),n(1),n(210),n(156),n(157),n(159),n(30)],o=function(e,t,n,i,o,r,a,s,l,c,u){
            var d=function(d,p){
                var h,f=this,g=!1,m={};
                r.extend(this,n),this.utils=i,this._=r,this.Events=n,this.version=u,this.trigger=function(e,t){
                    return t=r.isObject(t)?r.extend({},t):{},t.type=e,window.jwplayer&&window.jwplayer.debug?n.trigger.call(f,e,t):n.triggerSafe.call(f,e,t)
                },this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);
                var v=function(){
                    h=new a(d),s(f,h),l(f,h),h.on(e.JWPLAYER_PLAYLIST_ITEM,function(){
                        m={}
                    }),h.on(e.JWPLAYER_MEDIA_META,function(e){
                        r.extend(m,e.metadata)
                    }),h.on(e.JWPLAYER_READY,function(e){
                        g=!0,w.tick("ready"),e.setupTime=w.between("setup","ready")
                    }),h.on("all",f.trigger)
                };
                v(),c(this),this.id=d.id;
                var w=this._qoe=new o;
                w.tick("init");
                var y=function(){
                    g=!1,m={},f.off(),h&&h.off(),h&&h.playerDestroy&&h.playerDestroy()
                };
                return this.getPlugin=function(e){
                    return f.plugins&&f.plugins[e]
                },this.addPlugin=function(e,t){
                    this.plugins=this.plugins||{},this.plugins[e]=t,this.onReady(t.addToPlayer),t.resize&&this.onResize(t.resizeHandler)
                },this.setup=function(e){
                    return w.tick("setup"),y(),v(),i.foreach(e.events,function(e,t){
                        var n=f[e];
                        "function"==typeof n&&n.call(f,t)
                    }),e.id=f.id,h.setup(e,this),f
                },this.qoe=function(){
                    var t=h.getItemQoe(),n=w.between("setup","ready"),i=t.between(e.JWPLAYER_MEDIA_PLAY_ATTEMPT,e.JWPLAYER_MEDIA_FIRST_FRAME);
                    return{
                        setupTime:n,
                        firstFrame:i,
                        player:w.dump(),
                        item:t.dump()
                    }
                },this.getContainer=function(){
                    return h.getContainer?h.getContainer():d
                },this.getMeta=this.getItemMeta=function(){
                    return m
                },this.getPlaylistItem=function(e){
                    if(!i.exists(e))return h._model.get("playlistItem");
                    var t=f.getPlaylist();
                    return t?t[e]:null
                },this.getRenderingMode=function(){
                    return"html5"
                },this.load=function(e){
                    var t=this.getPlugin("vast")||this.getPlugin("googima");
                    return t&&t.destroy(),h.load(e),f
                },this.play=function(e,n){
                    if(r.isBoolean(e)||(n=e),n||(n={
                        reason:"external"
                    }),e===!0)return h.play(n),f;
                    if(e===!1)return h.pause(),f;
                    switch(e=f.getState()){
                        case t.PLAYING:case t.BUFFERING:
                            h.pause();
                            break;
                        default:
                            h.play(n)
                    }
                    return f
                },this.pause=function(e){
                    return r.isBoolean(e)?this.play(!e):this.play()
                },this.createInstream=function(){
                    return h.createInstream()
                },this.castToggle=function(){
                    h&&h.castToggle&&h.castToggle()
                },this.playAd=this.pauseAd=i.noop,this.remove=function(){
                    return p(f),f.trigger("remove"),y(),f
                },this
            };
            return d
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(4)],o=function(e,t){
            return function(n){
                var i={
                    onBufferChange:t.JWPLAYER_MEDIA_BUFFER,
                    onBufferFull:t.JWPLAYER_MEDIA_BUFFER_FULL,
                    onError:t.JWPLAYER_ERROR,
                    onSetupError:t.JWPLAYER_SETUP_ERROR,
                    onFullscreen:t.JWPLAYER_FULLSCREEN,
                    onMeta:t.JWPLAYER_MEDIA_META,
                    onMute:t.JWPLAYER_MEDIA_MUTE,
                    onPlaylist:t.JWPLAYER_PLAYLIST_LOADED,
                    onPlaylistItem:t.JWPLAYER_PLAYLIST_ITEM,
                    onPlaylistComplete:t.JWPLAYER_PLAYLIST_COMPLETE,
                    onReady:t.JWPLAYER_READY,
                    onResize:t.JWPLAYER_RESIZE,
                    onComplete:t.JWPLAYER_MEDIA_COMPLETE,
                    onSeek:t.JWPLAYER_MEDIA_SEEK,
                    onTime:t.JWPLAYER_MEDIA_TIME,
                    onVolume:t.JWPLAYER_MEDIA_VOLUME,
                    onBeforePlay:t.JWPLAYER_MEDIA_BEFOREPLAY,
                    onBeforeComplete:t.JWPLAYER_MEDIA_BEFORECOMPLETE,
                    onDisplayClick:t.JWPLAYER_DISPLAY_CLICK,
                    onControls:t.JWPLAYER_CONTROLS,
                    onQualityLevels:t.JWPLAYER_MEDIA_LEVELS,
                    onQualityChange:t.JWPLAYER_MEDIA_LEVEL_CHANGED,
                    onCaptionsList:t.JWPLAYER_CAPTIONS_LIST,
                    onCaptionsChange:t.JWPLAYER_CAPTIONS_CHANGED,
                    onAdError:t.JWPLAYER_AD_ERROR,
                    onAdClick:t.JWPLAYER_AD_CLICK,
                    onAdImpression:t.JWPLAYER_AD_IMPRESSION,
                    onAdTime:t.JWPLAYER_AD_TIME,
                    onAdComplete:t.JWPLAYER_AD_COMPLETE,
                    onAdCompanions:t.JWPLAYER_AD_COMPANIONS,
                    onAdSkipped:t.JWPLAYER_AD_SKIPPED,
                    onAdPlay:t.JWPLAYER_AD_PLAY,
                    onAdPause:t.JWPLAYER_AD_PAUSE,
                    onAdMeta:t.JWPLAYER_AD_META,
                    onCast:t.JWPLAYER_CAST_SESSION,
                    onAudioTrackChange:t.JWPLAYER_AUDIO_TRACK_CHANGED,
                    onAudioTracks:t.JWPLAYER_AUDIO_TRACKS
                },o={
                    onBuffer:"buffer",
                    onPause:"pause",
                    onPlay:"play",
                    onIdle:"idle"
                };
                e.each(o,function(t,i){
                    n[i]=e.partial(n.on,t,e)
                }),e.each(i,function(t,i){
                    n[i]=e.partial(n.on,t,e)
                })
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(158),n(1),n(49),n(48),n(27)],o=function(e,t,n,i,o){
            var r=[],a=0,s=function(t){
                var n,i;
                return t?"string"==typeof t?(n=l(t),n||(i=document.getElementById(t))):"number"==typeof t?n=r[t]:t.nodeType&&(i=t,n=l(i.id)):n=r[0],n?n:i?c(new e(i,u)):{
                    registerPlugin:o.registerPlugin
                }
            },l=function(e){
                for(var t=0;t<r.length;t++)if(r[t].id===e)return r[t];return null
            },c=function(e){
                return a++,e.uniqueId=a,r.push(e),e
            },u=function(e){
                for(var t=r.length;t--;)if(r[t].uniqueId===e.uniqueId){
                    r.splice(t,1);
                    break
                }
            },d={
                selectPlayer:s,
                registerProvider:n.registerProvider,
                availableProviders:i,
                registerPlugin:o.registerPlugin
            };
            return s.api=d,d
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(211),n(3),n(1),n(4)],o=function(e,t,n,i){
            var o=function(t,o,r,a){
                function s(){
                    p("Setup Timeout Error","Setup took longer than "+m+" seconds to complete.")
                }
                function l(){
                    n.each(g,function(e){
                        e.complete!==!0&&e.running!==!0&&null!==t&&u(e.depends)&&(e.running=!0,c(e))
                    })
                }
                function c(e){
                    var n=function(t){
                        t=t||{},d(e,t)
                    };
                    e.method(n,o,t,r,a)
                }
                function u(e){
                    return n.all(e,function(e){
                        return g[e].complete
                    })
                }
                function d(e,t){
                    "error"===t.type?p(t.msg,t.reason):"complete"===t.type?(clearTimeout(h),f.trigger(i.JWPLAYER_READY)):(e.complete=!0,l())
                }
                function p(e,t){
                    clearTimeout(h),f.trigger(i.JWPLAYER_SETUP_ERROR,{
                        message:e+": "+t
                    }),f.destroy()
                }
                var h,f=this,g=e.getQueue(),m=30;
                this.start=function(){
                    h=setTimeout(s,1e3*m),l()
                },this.destroy=function(){
                    clearTimeout(h),this.off(),g.length=0,t=null,o=null,r=null
                }
            };
            return o.prototype=t,o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            var e=function(e,t){
                function n(e){
                    if(e.tracks.length){
                        d=[],p={},h={},f=0;
                        for(var t=e.tracks||[],n=0;n<t.length;n++){
                            var i=t[n];
                            i.label=i.label||i.name||i.language,a(i)
                        }
                        var o=s();
                        this.setCaptionsList(o),l()
                    }
                }
                function i(e,t){
                    u=t,d=[],p={},h={},f=0
                }
                function o(e){
                    i(t,e),t.mediaController.on("subtitlesTracks",n,this);
                    var o=s();
                    this.setCaptionsList(o),l()
                }
                function r(e,t){
                    var n=null;
                    0!==t&&(n=d[t-1]),e.set("captionsTrack",n)
                }
                function a(e){
                    e.data=e.data||[],e.label||(e.label="Unknown CC",f++,f>1&&(e.label+=" ("+f+")")),d.push(e),p[e._id]=e
                }
                function s(){
                    for(var e=[{
                        id:"off",
                        label:"Off"
                    }],t=0;t<d.length;t++)e.push({
                        id:d[t]._id,
                        label:d[t].label||"Unknown CC"
                    });
                    return e
                }
                function l(){
                    var e=0,n=t.get("captionLabel");
                    if("Off"===n)return void t.set("captionsIndex",0);
                    for(var i=0;i<d.length;i++){
                        var o=d[i];
                        if(n&&n===o.label){
                            e=i+1;
                            break
                        }
                        o["default"]||o.defaulttrack||"default"===o._id?e=i+1:o.autoselect
                    }
                    c(e)
                }
                function c(e){
                    d.length?t.setVideoSubtitleTrack(e,d):t.set("captionsIndex",e)
                }
                t.on("change:playlistItem",i,this),t.on("change:captionsIndex",r,this),t.on("itemReady",o,this),t.mediaController.on("subtitlesTracks",n,this);
                var u={},d=[],p={},h={},f=0;
                this.getCurrentIndex=function(){
                    return t.get("captionsIndex")
                },this.getCaptionsList=function(){
                    return t.get("captionsList")
                },this.setCaptionsList=function(e){
                    t.set("captionsList",e)
                }
            };
            return e
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(62),n(164),n(1),n(161),n(162),n(32),n(169),n(65),n(64),n(2),n(92),n(3),n(41),n(5),n(4),n(196)],o=function(e,t,n,i,o,r,a,s,l,c,u,d,p,h,f,g){
            function m(e){
                return function(){
                    var t=Array.prototype.slice.call(arguments,0);
                    this._model.getVideo()?this["_"+e].apply(this,t):this.eventsQueue.push([e,t])
                }
            }
            function v(e){
                return e===h.LOADING||e===h.STALLED?h.BUFFERING:e
            }
            var w=function(e){
                this.originalContainer=this.currentContainer=e,this.eventsQueue=[],n.extend(this,d),this._model=new r
            };
            return w.prototype={
                play:m("play"),
                pause:m("pause"),
                seek:m("seek"),
                stop:m("stop"),
                load:m("load"),
                playlistNext:m("next"),
                playlistPrev:m("prev"),
                playlistItem:m("item"),
                setCurrentCaptions:m("setCurrentCaptions"),
                setCurrentQuality:m("setCurrentQuality"),
                setFullscreen:m("setFullscreen"),
                setup:function(r,d){
                    function g(e,t){
                        ie.triggerAfterReady(e,t)
                    }
                    function m(){
                        q=null,Q.on("all",g,ie),ie.showView(Q.element()),n.defer(w)
                    }
                    function w(){
                        ie.trigger(f.JWPLAYER_READY,{
                            setupTime:0
                        }),ie.triggerAfterReady=ie.trigger;
                        for(var e=0;e<se.length;e++){
                            var t=se[e];
                            ie.trigger(t.type,t.args)
                        }
                        ee.get("autostart")&&ie.play({
                            reason:"autostart"
                        })
                    }
                    function y(e){
                        var t=ee.getProviders(),n=t.required(e);
                        return t.load(n).then(function(){
                            ie.getProvider()||(ee.setProvider(ee.get("playlistItem")),j())
                        })
                    }
                    function j(){
                        for(;ie.eventsQueue.length>0;){
                            var e=ie.eventsQueue.shift(),t=e[0],n=e[1]||[];
                            ie["_"+t].apply(ie,n)
                        }
                    }
                    function b(e){
                        switch(ee.get("state")===h.ERROR&&ee.set("state",h.IDLE),_(!0),ee.get("autostart")&&ee.once("itemReady",L),typeof e){
                            case"string":
                                E(e);
                                break;
                            case"object":
                                var t=T(e);
                                t&&R(0);
                                break;
                            case"number":
                                R(e)
                        }
                    }
                    function E(e){
                        var t=new l;
                        t.on(f.JWPLAYER_PLAYLIST_LOADED,function(e){
                            b(e.playlist)
                        }),t.on(f.JWPLAYER_ERROR,function(e){
                            e.message="Error loading playlist: "+e.message,this.triggerError(e)
                        },this),t.load(e)
                    }
                    function k(){
                        var e=ie._instreamAdapter&&ie._instreamAdapter.getState();
                        return n.isString(e)?e:ee.get("state")
                    }
                    function L(e){
                        var t;
                        if(e&&ee.set("playReason",e.reason),ee.get("state")!==h.ERROR){
                            var i=ie._instreamAdapter&&ie._instreamAdapter.getState();
                            if(n.isString(i))return d.pauseAd(!1);
                            if(ee.get("state")===h.COMPLETE&&(_(!0),R(0)),!te&&(te=!0,ie.trigger(f.JWPLAYER_MEDIA_BEFOREPLAY,{
                                playReason:ee.get("playReason")
                            }),te=!1,Z))return Z=!1,void($=null);
                            if(C()){
                                if(0===ee.get("playlist").length)return!1;
                                t=c.tryCatch(function(){
                                    ee.loadVideo()
                                })
                            }else ee.get("state")===h.PAUSED&&(t=c.tryCatch(function(){
                                ee.playVideo()
                            }));
                            return!(t instanceof c.Error)||(ie.triggerError(t),$=null,!1)
                        }
                    }
                    function _(e){
                        ee.off("itemReady",L);
                        var t=!e;
                        $=null;
                        var n=c.tryCatch(function(){
                            ee.stopVideo()
                        },ie);
                        return n instanceof c.Error?(ie.triggerError(n),!1):(t&&(ne=!0),te&&(Z=!0),!0)
                    }
                    function A(){
                        $=null;
                        var e=ie._instreamAdapter&&ie._instreamAdapter.getState();
                        if(n.isString(e))return d.pauseAd(!0);
                        switch(ee.get("state")){
                            case h.ERROR:
                                return!1;
                            case h.PLAYING:case h.BUFFERING:
                                var t=c.tryCatch(function(){
                                    oe().pause()
                                },this);
                                if(t instanceof c.Error)return ie.triggerError(t),!1;
                                break;
                            default:
                                te&&(Z=!0)
                        }
                        return!0
                    }
                    function C(){
                        var e=ee.get("state");
                        return e===h.IDLE||e===h.COMPLETE||e===h.ERROR
                    }
                    function x(e){
                        ee.get("state")!==h.ERROR&&(ee.get("scrubbing")||ee.get("state")===h.PLAYING||L(!0),oe().seek(e))
                    }
                    function P(e,t){
                        _(!0),R(e),L(t)
                    }
                    function T(e){
                        var t=s(e);
                        return t=s.filterPlaylist(t,ee.getProviders(),ee.get("androidhls"),ee.get("drm"),ee.get("preload"),ee.get("feedid"),ee.get("withCredentials")),ee.set("playlist",t),n.isArray(t)&&0!==t.length?(y(t),!0):(ie.triggerError({
                            message:"Error loading playlist: No playable sources found"
                        }),!1)
                    }
                    function R(e){
                        ee.setItemIndex(e)
                    }
                    function I(e){
                        P(ee.get("item")-1,e||{
                            reason:"external"
                        })
                    }
                    function M(e){
                        P(ee.get("item")+1,e||{
                            reason:"external"
                        })
                    }
                    function S(){
                        if(C()){
                            if(ne)return void(ne=!1);
                            $=S;
                            var e=ee.get("item");
                            return e===ee.get("playlist").length-1?void(ee.get("repeat")?M({
                                reason:"repeat"
                            }):(ee.set("state",h.COMPLETE),ie.trigger(f.JWPLAYER_PLAYLIST_COMPLETE,{}))):void M({
                                reason:"playlist"
                            })
                        }
                    }
                    function O(e){
                        oe()&&(e=parseInt(e,10)||0,oe().setCurrentQuality(e))
                    }
                    function D(){
                        return oe()?oe().getCurrentQuality():-1
                    }
                    function N(){
                        if(this._model)return this._model.getConfiguration()
                    }
                    function Y(){
                        if(this._model.mediaModel)return this._model.mediaModel.get("visualQuality");
                        var e=W();
                        if(e){
                            var t=D(),i=e[t];
                            if(i)return{
                                level:n.extend({
                                    index:t
                                },i),
                                mode:"",
                                reason:""
                            }
                        }
                        return null
                    }
                    function W(){
                        return oe()?oe().getQualityLevels():null
                    }
                    function F(e){
                        oe()&&(e=parseInt(e,10)||0,oe().setCurrentAudioTrack(e))
                    }
                    function J(){
                        return oe()?oe().getCurrentAudioTrack():-1
                    }
                    function V(){
                        return oe()?oe().getAudioTracks():null
                    }
                    function B(e){
                        e=parseInt(e,10)||0,ee.persistVideoSubtitleTrack(e),ie.trigger(f.JWPLAYER_CAPTIONS_CHANGED,{
                            tracks:z(),
                            track:e
                        })
                    }
                    function U(){
                        return X.getCurrentIndex()
                    }
                    function z(){
                        return X.getCaptionsList()
                    }
                    function H(){
                        var e=ee.getVideo();
                        if(e){
                            var t=e.detachMedia();
                            if(t instanceof HTMLVideoElement)return t
                        }
                        return null
                    }
                    function G(){
                        var e=c.tryCatch(function(){
                            ee.getVideo().attachMedia()
                        });
                        return e instanceof c.Error?void c.log("Error calling _attachMedia",e):void("function"==typeof $&&$())
                    }
                    function K(e){
                        n.isBoolean(e)||(e=!ee.get("fullscreen")),ee.set("fullscreen",e),this._instreamAdapter&&this._instreamAdapter._adModel&&this._instreamAdapter._adModel.set("fullscreen",e)
                    }
                    var Q,X,q,$,Z,ee=this._model,te=!1,ne=!1,ie=this,oe=function(){
                        return ee.getVideo()
                    },re=new a;
                    re.track(ee);
                    var ae=new e(r,re),se=[];
                    ee.setup(ae,re),Q=this._view=new u(d,ee),X=new o(d,ee),q=new i(d,ee,Q,T),q.on(f.JWPLAYER_READY,m,this),q.on(f.JWPLAYER_SETUP_ERROR,this.setupError,this),ee.mediaController.on("all",g,this),ee.mediaController.on(f.JWPLAYER_MEDIA_COMPLETE,function(){
                        n.defer(S)
                    }),ee.mediaController.on(f.JWPLAYER_MEDIA_ERROR,this.triggerError,this),ee.on("change:flashBlocked",function(e,t){
                        if(!t)return void this._model.set("errorEvent",void 0);
                        var n=!!e.get("flashThrottle"),i={
                            message:n?"Click to run Flash":"Flash plugin failed to load"
                        };
                        n||this.trigger(f.JWPLAYER_ERROR,i),this._model.set("errorEvent",i)
                    },this),ee.on("change:state",p,this),ee.on("change:castState",function(e,t){
                        ie.trigger(f.JWPLAYER_CAST_SESSION,t)
                    }),ee.on("change:fullscreen",function(e,t){
                        ie.trigger(f.JWPLAYER_FULLSCREEN,{
                            fullscreen:t
                        })
                    }),ee.on("itemReady",function(){
                        ie.triggerAfterReady(f.JWPLAYER_PLAYLIST_ITEM,{
                            index:ee.get("item"),
                            item:ee.get("playlistItem")
                        })
                    }),ee.on("change:playlist",function(e,t){
                        t.length&&ie.triggerAfterReady(f.JWPLAYER_PLAYLIST_LOADED,{
                            playlist:t
                        })
                    }),ee.on("change:volume",function(e,t){
                        ie.trigger(f.JWPLAYER_MEDIA_VOLUME,{
                            volume:t
                        })
                    }),ee.on("change:mute",function(e,t){
                        ie.trigger(f.JWPLAYER_MEDIA_MUTE,{
                            mute:t
                        })
                    }),ee.on("change:controls",function(e,t){
                        ie.trigger(f.JWPLAYER_CONTROLS,{
                            controls:t
                        })
                    }),ee.on("change:scrubbing",function(e,t){
                        t?A():L()
                    }),ee.on("change:captionsList",function(e,t){
                        try{
                            ie.triggerAfterReady(f.JWPLAYER_CAPTIONS_LIST,{
                                tracks:t,
                                track:U()
                            })
                        }catch(n){
                            c.log("Error with captionsList event:",n)
                        }
                    }),ee.on("change:mediaModel",function(e){
                        e.mediaModel.on("change:state",function(t,n){
                            var i=v(n);
                            e.set("state",i)
                        })
                    }),this.triggerAfterReady=function(e,t){
                        se.push({
                            type:e,
                            args:t
                        })
                    },this._play=L,this._pause=A,this._seek=x,this._stop=_,this._load=b,this._next=M,this._prev=I,this._item=P,this._setCurrentCaptions=B,this._setCurrentQuality=O,this._setFullscreen=K,this.detachMedia=H,this.attachMedia=G,this.getCurrentQuality=D,this.getQualityLevels=W,this.setCurrentAudioTrack=F,this.getCurrentAudioTrack=J,this.getAudioTracks=V,this.getCurrentCaptions=U,this.getCaptionsList=z,this.getVisualQuality=Y,this.getConfig=N,this.getState=k,this.setVolume=ee.setVolume.bind(ee),this.setMute=ee.setMute.bind(ee),this.getProvider=function(){
                        return ee.get("provider")
                    },this.getWidth=function(){
                        return ee.get("containerWidth")
                    },this.getHeight=function(){
                        return ee.get("containerHeight")
                    },this.getContainer=function(){
                        return this.currentContainer
                    },this.resize=Q.resize,this.getSafeRegion=Q.getSafeRegion,this.setCues=Q.addCues,this.setCaptions=Q.setCaptions,this.addButton=function(e,t,i,o,r){
                        var a={
                            img:e,
                            tooltip:t,
                            callback:i,
                            id:o,
                            btnClass:r
                        },s=ee.get("dock");
                        s=s?s.slice(0):[],s=n.reject(s,n.matches({
                            id:a.id
                        })),s.push(a),ee.set("dock",s)
                    },this.removeButton=function(e){
                        var t=ee.get("dock")||[];
                        t=n.reject(t,n.matches({
                            id:e
                        })),ee.set("dock",t)
                    },this.checkBeforePlay=function(){
                        return te
                    },this.getItemQoe=function(){
                        return ee._qoeItem
                    },this.setControls=function(e){
                        n.isBoolean(e)||(e=!ee.get("controls")),ee.set("controls",e);
                        var t=ee.getVideo();
                        t&&t.setControls(e)
                    },this.playerDestroy=function(){
                        this.stop(),this.showView(this.originalContainer),Q&&Q.destroy(),ee&&ee.destroy(),q&&(q.destroy(),q=null)
                    },this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=function(){
                        return ee.getVideo().checkComplete()
                    },this.createInstream=function(){
                        return this.instreamDestroy(),this._instreamAdapter=new t(this,ee,Q),ee.persistCaptionsTrack(),this._instreamAdapter
                    },this.skipAd=function(){
                        this._instreamAdapter&&this._instreamAdapter.skipAd()
                    },this.instreamDestroy=function(){
                        ie._instreamAdapter&&ie._instreamAdapter.destroy()
                    },q.start()
                },
                showView:function(e){
                    (document.documentElement.contains(this.currentContainer)||(this.currentContainer=document.getElementById(this._model.get("id")),this.currentContainer))&&(this.currentContainer.parentElement&&this.currentContainer.parentElement.replaceChild(e,this.currentContainer),this.currentContainer=e)
                },
                triggerError:function(e){
                    this._model.set("errorEvent",e),this._model.set("state",h.ERROR),this._model.once("change:state",function(){
                        this._model.set("errorEvent",void 0)
                    },this),this.trigger(f.JWPLAYER_ERROR,e)
                },
                setupError:function(e){
                    var t=e.message,i=c.createElement(g(this._model.get("id"),this._model.get("skin"),t)),o=this._model.get("width"),r=this._model.get("height");
                    c.style(i,{
                        width:o.toString().indexOf("%")>0?o:o+"px",
                        height:r.toString().indexOf("%")>0?r:r+"px"
                    }),this.showView(i);
                    var a=this;
                    n.defer(function(){
                        a.trigger(f.JWPLAYER_SETUP_ERROR,{
                            message:t
                        })
                    })
                }
            },w
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(166),n(165),n(4),n(5),n(2),n(3),n(1)],o=function(e,t,n,i,o,r,a){
            function s(n){
                var i="",o=n.get("provider");
                return o&&(i=o.name),i.indexOf("flash")>=0?t:e
            }
            var l={
                skipoffset:null,
                tag:null
            },c=function(e,t,r){
                function c(){
                    y._adModel.set("state","buffering"),t.set("skipButton",!1),j++;
                    var e,n=h[j];
                    f&&(e=f[j]),E.loadItem(n,e)
                }
                function u(e,t){
                    "complete"!==e&&(t=t||{},b.tag&&!t.tag&&(t.tag=b.tag),this.trigger(e,t),"mediaError"!==e&&"error"!==e||h&&j+1<h.length&&c())
                }
                function d(e){
                    y._adModel.set("duration",e.duration),y._adModel.set("position",e.position)
                }
                function p(e){
                    var t={};
                    b.tag&&(t.tag=b.tag),h&&j+1<h.length?(this.trigger(n.JWPLAYER_MEDIA_COMPLETE,t),c()):(e.type===n.JWPLAYER_MEDIA_COMPLETE&&(this.trigger(n.JWPLAYER_MEDIA_COMPLETE,t),this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE,{})),this.destroy())
                }
                var h,f,g,m,v,w=s(t),y=new w(e,t),j=0,b={},E=this,k=a.bind(function(e){
                    e=e||{},e.hasControls=!!t.get("controls"),this.trigger(n.JWPLAYER_INSTREAM_CLICK,e),y&&y._adModel&&(y._adModel.get("state")===i.PAUSED?e.hasControls&&y.instreamPlay():y.instreamPause())
                },this),L=a.bind(function(){
                    y&&y._adModel&&y._adModel.get("state")===i.PAUSED&&t.get("controls")&&(e.setFullscreen(),e.play())
                },this);
                this.type="instream",this.init=function(){
                    g=t.getVideo(),m=t.get("position"),v=t.get("playlist")[t.get("item")],y.on("all",u,this),y.on(n.JWPLAYER_MEDIA_TIME,d,this),y.on(n.JWPLAYER_MEDIA_COMPLETE,p,this),y.init(),g.detachMedia(),t.mediaModel.set("state",i.BUFFERING),e.checkBeforePlay()||0===m&&!g.checkComplete()?(m=0,t.set("preInstreamState","instream-preroll")):g&&g.checkComplete()||t.get("state")===i.COMPLETE?t.set("preInstreamState","instream-postroll"):t.set("preInstreamState","instream-midroll");
                    var a=t.get("state");
                    return a!==i.PLAYING&&a!==i.BUFFERING||g.pause(),r.setupInstream(y._adModel),y._adModel.set("state",i.BUFFERING),r.clickHandler().setAlternateClickHandlers(o.noop,null),this.setText(t.get("localization").loadingAd),this
                },this.loadItem=function(e,i){
                    if(o.isAndroid(2.3))return void this.trigger({
                        type:n.JWPLAYER_ERROR,
                        message:"Error loading instream: Cannot play instream on Android 2.3"
                    });
                    var r=e;
                    a.isArray(e)?(h=e,f=i,e=h[j],f&&(i=f[j])):r=[e];
                    var s=this,c=t.getProviders(),u=c.required(r);
                    c.load(u).then(function(){
                        if(null!==y){
                            s.trigger(n.JWPLAYER_PLAYLIST_ITEM,{
                                index:j,
                                item:e
                            }),b=a.extend({},l,i),y.load(e),s.addClickHandler();
                            var o=e.skipoffset||b.skipoffset;
                            o&&(y._adModel.set("skipMessage",b.skipMessage),y._adModel.set("skipText",b.skipText),y._adModel.set("skipOffset",o),t.set("skipButton",!0))
                        }
                    })
                },this.applyProviderListeners=function(e){
                    y.applyProviderListeners(e),this.addClickHandler()
                },this.play=function(){
                    y.instreamPlay()
                },this.pause=function(){
                    y.instreamPause()
                },this.hide=function(){
                    y.hide()
                },this.addClickHandler=function(){
                    r.clickHandler().setAlternateClickHandlers(k,L),y.on(n.JWPLAYER_MEDIA_META,this.metaHandler,this)
                },this.skipAd=function(e){
                    var t=n.JWPLAYER_AD_SKIPPED;
                    this.trigger(t,e),p.call(this,{
                        type:t
                    })
                },this.metaHandler=function(e){
                    e.width&&e.height&&r.resizeMedia()
                },this.destroy=function(){
                    if(this.off(),t.set("skipButton",!1),y){
                        r.clickHandler()&&r.clickHandler().revertAlternateClickHandlers(),y.instreamDestroy(),r.destroyInstream(),y=null,e.attachMedia();
                        var n=t.get("preInstreamState");
                        switch(n){
                            case"instream-preroll":case"instream-midroll":
                                var s=a.extend({},v);
                                s.starttime=m,t.loadVideo(s),o.isMobile()&&t.mediaModel.get("state")===i.BUFFERING&&g.setState(i.BUFFERING),g.play();
                                break;
                            case"instream-postroll":case"instream-idle":
                                g.stop()
                        }
                    }
                },this.getState=function(){
                    return!(!y||!y._adModel)&&y._adModel.get("state")
                },this.setText=function(e){
                    r.setAltText(e?e:"")
                },this.hide=function(){
                    r.useExternalControls()
                }
            };
            return a.extend(c.prototype,r),c
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(3),n(32),n(41),n(4),n(5),n(2),n(1)],o=function(e,t,n,i,o,r,a){
            var s=function(e,i){
                this.model=i,this._adModel=(new t).setup({
                    id:i.get("id"),
                    volume:i.get("volume"),
                    fullscreen:i.get("fullscreen"),
                    mute:i.get("mute")
                }),this._adModel.on("change:state",n,this);
                var o=e.getContainer();
                this.swf=o.querySelector("object")
            };
            return s.prototype=a.extend({
                init:function(){
                    if(r.isChrome()){
                        var e=-1,t=!1;
                        this.swf.on("throttle",function(n){
                            if(clearTimeout(e),"resume"===n.state)t&&(t=!1,this.instreamPlay());
                            else{
                                var i=this;
                                e=setTimeout(function(){
                                    i._adModel.get("state")===o.PLAYING&&(t=!0,i.instreamPause())
                                },250)
                            }
                        },this)
                    }
                    this.swf.on("instream:state",function(e){
                        switch(e.newstate){
                            case o.PLAYING:
                                this._adModel.set("state",e.newstate);
                                break;
                            case o.PAUSED:
                                this._adModel.set("state",e.newstate)
                        }
                    },this).on("instream:time",function(e){
                        this._adModel.set("position",e.position),this._adModel.set("duration",e.duration),this.trigger(i.JWPLAYER_MEDIA_TIME,e)
                    },this).on("instream:complete",function(e){
                        this.trigger(i.JWPLAYER_MEDIA_COMPLETE,e)
                    },this).on("instream:error",function(e){
                        this.trigger(i.JWPLAYER_MEDIA_ERROR,e)
                    },this),this.swf.triggerFlash("instream:init"),this.applyProviderListeners=function(e){
                        this.model.on("change:volume",function(t,n){
                            e.volume(n)
                        },this),this.model.on("change:mute",function(t,n){
                            e.mute(n)
                        },this)
                    }
                },
                instreamDestroy:function(){
                    this._adModel&&(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.swf=null,this._adModel.off(),this._adModel=null,this.model=null)
                },
                load:function(e){
                    this.swf.triggerFlash("instream:load",e)
                },
                instreamPlay:function(){
                    this.swf.triggerFlash("instream:play")
                },
                instreamPause:function(){
                    this.swf.triggerFlash("instream:pause")
                }
            },e),s
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(3),n(41),n(4),n(5),n(32)],o=function(e,t,n,i,o,r){
            var a=function(a,s){
                function l(t){
                    var o=t||p.getVideo();
                    if(h!==o){
                        if(h=o,!o)return;
                        o.off(),o.on("all",function(t,n){
                            n=e.extend({},n,{
                                type:t
                            }),this.trigger(t,n)
                        },f),o.on(i.JWPLAYER_MEDIA_BUFFER_FULL,d),o.on(i.JWPLAYER_PLAYER_STATE,c),o.attachMedia(),o.volume(s.get("volume")),o.mute(s.get("mute")),p.on("change:state",n,f)
                    }
                }
                function c(e){
                    switch(e.newstate){
                        case o.PLAYING:
                            p.set("state",e.newstate);
                            break;
                        case o.PAUSED:
                            p.set("state",e.newstate)
                    }
                }
                function u(e){
                    s.trigger(e.type,e),f.trigger(i.JWPLAYER_FULLSCREEN,{
                        fullscreen:e.jwstate
                    })
                }
                function d(){
                    p.getVideo().play()
                }
                var p,h,f=e.extend(this,t);
                return a.on(i.JWPLAYER_FULLSCREEN,function(e){
                    this.trigger(i.JWPLAYER_FULLSCREEN,e)
                },f),this.init=function(){
                    p=(new r).setup({
                        id:s.get("id"),
                        volume:s.get("volume"),
                        fullscreen:s.get("fullscreen"),
                        mute:s.get("mute")
                    }),p.on("fullscreenchange",u),this._adModel=p
                },f.load=function(e){
                    p.set("item",0),p.set("playlistItem",e),p.setActiveItem(e),l(),p.off(i.JWPLAYER_ERROR),p.on(i.JWPLAYER_ERROR,function(e){
                        this.trigger(i.JWPLAYER_ERROR,e)
                    },f),p.loadVideo(e)
                },f.applyProviderListeners=function(e){
                    l(e),e.off(i.JWPLAYER_ERROR),e.on(i.JWPLAYER_ERROR,function(e){
                        this.trigger(i.JWPLAYER_ERROR,e)
                    },f),s.on("change:volume",function(e,t){
                        h.volume(t)
                    },f),s.on("change:mute",function(e,t){
                        h.mute(t)
                    },f)
                },this.instreamDestroy=function(){
                    p&&(p.off(),this.off(),h&&(h.detachMedia(),h.off(),p.getVideo()&&h.destroy()),p=null,a.off(null,null,this),a=null)
                },f.instreamPlay=function(){
                    p.getVideo()&&p.getVideo().play(!0)
                },f.instreamPause=function(){
                    p.getVideo()&&p.getVideo().pause(!0)
                },f
            };
            return a
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(79),n(4),n(1)],o=function(e,t,n){
            function i(e){
                e.mediaController.off(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,e._onPlayAttempt),e.mediaController.off(t.JWPLAYER_PROVIDER_FIRST_FRAME,e._triggerFirstFrame),e.mediaController.off(t.JWPLAYER_MEDIA_TIME,e._onTime)
            }
            function o(e){
                i(e),e._triggerFirstFrame=n.once(function(){
                    var n=e._qoeItem;
                    n.tick(t.JWPLAYER_MEDIA_FIRST_FRAME);
                    var o=n.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,t.JWPLAYER_MEDIA_FIRST_FRAME);
                    e.mediaController.trigger(t.JWPLAYER_MEDIA_FIRST_FRAME,{
                        loadTime:o
                    }),i(e)
                }),e._onTime=a(e._triggerFirstFrame),e._onPlayAttempt=function(){
                    e._qoeItem.tick(t.JWPLAYER_MEDIA_PLAY_ATTEMPT)
                },e.mediaController.on(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,e._onPlayAttempt),e.mediaController.once(t.JWPLAYER_PROVIDER_FIRST_FRAME,e._triggerFirstFrame),e.mediaController.on(t.JWPLAYER_MEDIA_TIME,e._onTime)
            }
            function r(n){
                function i(n,i,r){
                    n._qoeItem&&r&&n._qoeItem.end(r.get("state")),n._qoeItem=new e,n._qoeItem.tick(t.JWPLAYER_PLAYLIST_ITEM),n._qoeItem.start(i.get("state")),o(n),i.on("change:state",function(e,t,i){
                        n._qoeItem.end(i),n._qoeItem.start(t)
                    })
                }
                n.on("change:mediaModel",i)
            }
            var a=function(e){
                var t=Number.MIN_VALUE;
                return function(n){
                    n.position>t&&e(),t=n.position
                }
            };
            return{
                model:r
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(27),n(64),n(22),n(28),n(1),n(2),n(4)],o=function(e,t,i,o,r,a,s){
            function l(){
                var e={
                    LOAD_PROMISE_POLYFILL:{
                        method:c,
                        depends:[]
                    },
                    LOAD_BASE64_POLYFILL:{
                        method:u,
                        depends:[]
                    },
                    LOAD_VTTCUE_POLYFILL:{
                        method:d,
                        depends:[]
                    },
                    LOADED_POLYFILLS:{
                        method:p,
                        depends:["LOAD_PROMISE_POLYFILL","LOAD_BASE64_POLYFILL","LOAD_VTTCUE_POLYFILL"]
                    },
                    LOAD_PLUGINS:{
                        method:h,
                        depends:["LOADED_POLYFILLS"]
                    },
                    INIT_PLUGINS:{
                        method:f,
                        depends:["LOAD_PLUGINS","SETUP_VIEW"]
                    },
                    LOAD_SKIN:{
                        method:b,
                        depends:["LOADED_POLYFILLS"]
                    },
                    LOAD_PLAYLIST:{
                        method:m,
                        depends:["LOADED_POLYFILLS"]
                    },
                    FILTER_PLAYLIST:{
                        method:v,
                        depends:["LOAD_PLAYLIST"]
                    },
                    SETUP_VIEW:{
                        method:E,
                        depends:["LOAD_SKIN"]
                    },
                    SET_ITEM:{
                        method:k,
                        depends:["INIT_PLUGINS","FILTER_PLAYLIST"]
                    },
                    SEND_READY:{
                        method:L,
                        depends:["SETUP_VIEW","SET_ITEM"]
                    }
                };
                return e
            }
            function c(e){
                window.Promise?e():n.e(9,function(require){
                    n(69),e()
                })
            }
            function u(e){
                window.btoa&&window.atob?e():n.e(10,function(require){
                    n(68),e()
                })
            }
            function d(e){
                window.VTTCue?e():n.e(7,function(require){
                    n(71),e()
                })
            }
            function p(e){
                e()
            }
            function h(t,n){
                A=e.loadPlugins(n.get("id"),n.get("plugins")),A.on(s.COMPLETE,t),A.on(s.ERROR,r.partial(g,t)),A.load()
            }
            function f(e,t,n){
                A.setupPlugins(n,t),e()
            }
            function g(e,t){
                _(e,"Could not load plugin",t.message)
            }
            function m(e,n){
                var i=n.get("playlist");
                r.isString(i)?(C=new t,C.on(s.JWPLAYER_PLAYLIST_LOADED,function(t){
                    n.set("playlist",t.playlist),n.set("feedid",t.feedid),e()
                }),C.on(s.JWPLAYER_ERROR,r.partial(w,e)),C.load(i)):e()
            }
            function v(e,t,n,i,o){
                var r=t.get("playlist"),a=o(r);
                a?e():w(e)
            }
            function w(e,t){
                t&&t.message?_(e,"Error loading playlist",t.message):_(e,"Error loading player","No playable sources found")
            }
            function y(e,t){
                if(r.contains(o.SkinsLoadable,e))return t+"skins/"+e+".css"
            }
            function j(e){
                for(var t=document.styleSheets,n=0,i=t.length;n<i;n++)if(t[n].href===e)return!0;return!1
            }
            function b(e,t){
                var n=t.get("skin"),a=t.get("skinUrl");
                if(r.contains(o.SkinsIncluded,n))return void e();
                if(a||(a=y(n,t.get("base"))),r.isString(a)&&!j(a)){
                    t.set("skin-loading",!0);
                    var l=!0,c=new i(a,l);
                    c.addEventListener(s.COMPLETE,function(){
                        t.set("skin-loading",!1)
                    }),c.addEventListener(s.ERROR,function(){
                        t.set("skin","seven"),t.set("skin-loading",!1)
                    }),c.load()
                }
                r.defer(function(){
                    e()
                })
            }
            function E(e,t,n,i){
                i.setup(),e()
            }
            function k(e,t){
                t.once("itemReady",e),t.setItemIndex(t.get("item"))
            }
            function L(e){
                e({
                    type:"complete"
                })
            }
            function _(e,t,n){
                e({
                    type:"error",
                    msg:t,
                    reason:n
                })
            }
            var A,C;
            return{
                getQueue:l,
                error:_
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(2)],o=function(e,t){
            function n(e){
                return"jwplayer."+e
            }
            function i(){
                return e.reduce(this.persistItems,function(e,i){
                    var o=c[n(i)];
                    return o&&(e[i]=t.serialize(o)),e
                },{})
            }
            function o(e,t){
                try{
                    c[n(e)]=t
                }catch(i){
                    l&&l.debug&&console.error(i)
                }
            }
            function r(){
                e.each(this.persistItems,function(e){
                    c.removeItem(n(e))
                })
            }
            function a(){
                this.persistItems=["volume","mute","captionLabel","qualityLabel"]
            }
            function s(t){
                e.each(this.persistItems,function(e){
                    t.on("change:"+e,function(t,n){
                        o(e,n)
                    })
                })
            }
            var l=window.jwplayer,c={
                removeItem:t.noop
            };
            try{
                c=window.localStorage
            }catch(u){}
            return e.extend(a.prototype,{
                getAllItems:i,
                track:s,
                clear:r
            }),a
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(85),n(2)],o=function(e,t){
            return n.p=t.loadFrom(),e.selectPlayer
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(14),n(8),n(2)],o=function(e,t,n){
            var i="jwplayer",o=function(o,r){
                for(var a=[],s=[],l=t.xmlAttribute,c="default",u="label",d="file",p="type",h=0;h<o.childNodes.length;h++){
                    var f=o.childNodes[h];
                    if(f.prefix===i){
                        var g=e.localName(f);
                        "source"===g?(delete r.sources,a.push({
                            file:l(f,d),
                            "default":l(f,c),
                            label:l(f,u),
                            type:l(f,p)
                        })):"track"===g?(delete r.tracks,s.push({
                            file:l(f,d),
                            "default":l(f,c),
                            kind:l(f,"kind"),
                            label:l(f,u)
                        })):(r[g]=n.serialize(e.textContent(f)),"file"===g&&r.sources&&delete r.sources)
                    }
                    r[d]||(r[d]=r.link)
                }
                if(a.length)for(r.sources=[],h=0;h<a.length;h++)a[h].file.length>0&&(a[h][c]="true"===a[h][c],a[h].label.length||delete a[h].label,r.sources.push(a[h]));
                if(s.length)for(r.tracks=[],h=0;h<s.length;h++)s[h].file.length>0&&(s[h][c]="true"===s[h][c],s[h].kind=s[h].kind.length?s[h].kind:"captions",s[h].label.length||delete s[h].label,r.tracks.push(s[h]));
                return r
            };
            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(14),n(8),n(2)],o=function(e,t,n){
            function i(e){
                for(var t=[],n=0;n<s(e);n++){
                    var i=e.childNodes[n];
                    "jwplayer"===i.prefix&&"mediatypes"===r(i).toLowerCase()&&t.push(a(i))
                }
                return t
            }
            var o=t.xmlAttribute,r=e.localName,a=e.textContent,s=e.numChildren,l="media",c=function(e,t){
                function u(e){
                    var t={
                        zh:"Chinese",
                        nl:"Dutch",
                        en:"English",
                        fr:"French",
                        de:"German",
                        it:"Italian",
                        ja:"Japanese",
                        pt:"Portuguese",
                        ru:"Russian",
                        es:"Spanish"
                    };
                    return t[e]?t[e]:e
                }
                var d,p,h="tracks",f=[];
                for(p=0;p<s(e);p++)if(d=e.childNodes[p],d.prefix===l){
                    if(!r(d))continue;
                    switch(r(d).toLowerCase()){
                        case"content":
                            if(o(d,"duration")&&(t.duration=n.seconds(o(d,"duration"))),o(d,"url")){
                                t.sources||(t.sources=[]);
                                var g={
                                    file:o(d,"url"),
                                    type:o(d,"type"),
                                    width:o(d,"width"),
                                    label:o(d,"label")
                                },m=i(d);
                                m.length&&(g.mediaTypes=m),t.sources.push(g)
                            }
                            s(d)>0&&(t=c(d,t));
                            break;
                        case"title":
                            t.title=a(d);
                            break;
                        case"description":
                            t.description=a(d);
                            break;
                        case"guid":
                            t.mediaid=a(d);
                            break;
                        case"thumbnail":
                            t.image||(t.image=o(d,"url"));
                            break;
                        case"player":
                            break;
                        case"group":
                            c(d,t);
                            break;
                        case"subtitle":
                            var v={};
                            v.file=o(d,"url"),v.kind="captions",o(d,"lang").length>0&&(v.label=u(o(d,"lang"))),f.push(v)
                    }
                }
                for(t.hasOwnProperty(h)||(t[h]=[]),p=0;p<f.length;p++)t[h].push(f[p]);
                return t
            };
            return c
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1)],o=function(e){
            var t={
                kind:"captions",
                "default":!1
            },n=function(n){
                if(n&&n.file)return e.extend({},t,n)
            };
            return n
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(33),n(2),n(4),n(3),n(1),n(22)],o=function(e,t,n,i,o,r){
            function a(e,t,n){
                return function(){
                    var i=e.getContainer().getElementsByClassName("jw-overlays")[0];
                    i&&(i.appendChild(n),n.left=i.style.left,n.top=i.style.top,t.displayArea=i)
                }
            }
            function s(e){
                function t(){
                    var t=e.displayArea;
                    t&&e.resize(t.clientWidth,t.clientHeight)
                }
                return function(){
                    t(),setTimeout(t,400)
                }
            }
            var l=function(l,c){
                function u(){
                    m||(m=!0,g=r.loaderstatus.COMPLETE,f.trigger(n.COMPLETE))
                }
                function d(){
                    if(!w&&(c&&0!==o.keys(c).length||u(),!m)){
                        var i=l.getPlugins();
                        h=o.after(v,u),o.each(c,function(o,a){
                            var s=e.getPluginName(a),l=i[s],c=l.getJS(),u=l.getTarget(),d=l.getStatus();
                            d!==r.loaderstatus.LOADING&&d!==r.loaderstatus.NEW&&(c&&!t.versionCheck(u)&&f.trigger(n.ERROR,{
                                message:"Incompatible player version"
                            }),h())
                        })
                    }
                }
                function p(e){
                    if(!w){
                        var i="File not found";
                        e.url&&t.log(i,e.url),this.off(),this.trigger(n.ERROR,{
                            message:i
                        }),d()
                    }
                }
                var h,f=o.extend(this,i),g=r.loaderstatus.NEW,m=!1,v=o.size(c),w=!1;
                this.setupPlugins=function(n,i){
                    var r=[],c=l.getPlugins(),u=i.get("plugins");
                    o.each(u,function(i,l){
                        var d=e.getPluginName(l),p=c[d],h=p.getFlashPath(),f=p.getJS(),g=p.getURL();
                        if(h){
                            var m=o.extend({
                                name:d,
                                swf:h,
                                pluginmode:p.getPluginmode()
                            },i);
                            r.push(m)
                        }
                        var v=t.tryCatch(function(){
                            if(f&&u[g]){
                                var e=document.createElement("div");
                                e.id=n.id+"_"+d,e.className="jw-plugin jw-reset";
                                var t=o.extend({},u[g]),i=p.getNewInstance(n,t,e);
                                i.addToPlayer=a(n,i,e),i.resizeHandler=s(i),n.addPlugin(d,i,e)
                            }
                        });
                        v instanceof t.Error&&t.log("ERROR: Failed to load "+d+".")
                    }),i.set("flashPlugins",r)
                },this.load=function(){
                    if(t.exists(c)&&"object"!==t.typeOf(c))return void d();
                    g=r.loaderstatus.LOADING,o.each(c,function(e,i){
                        if(t.exists(i)){
                            var o=l.addPlugin(i);
                            o.on(n.COMPLETE,d),o.on(n.ERROR,p)
                        }
                    });
                    var e=l.getPlugins();
                    o.each(e,function(e){
                        e.load()
                    }),d()
                },this.destroy=function(){
                    w=!0,this.off()
                },this.getStatus=function(){
                    return g
                }
            };
            return l
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(33),n(67)],o=function(e,t){
            var n=function(n){
                this.addPlugin=function(i){
                    var o=e.getPluginName(i);
                    return n[o]||(n[o]=new t(i)),n[o]
                },this.getPlugins=function(){
                    return n
                }
            };
            return n
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,function(e,t,n){
        var i,o;
        i=[],o=function(){
            return{}
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(1),n(80)],o=function(e,t,n){
            function i(t){
                if("hls"===t.type)if(t.androidhls!==!1){
                    var n=e.isAndroidNative;
                    if(n(2)||n(3)||n("4.0"))return!1;
                    if(e.isAndroid())return!0
                }else if(e.isAndroid())return!1;
                return null
            }
            var o=[{
                name:"youtube",
                supports:function(t){
                    return e.isYouTube(t.file,t.type)
                }
            },{
                name:"html5",
                supports:function(t){
                    var o={
                        aac:"audio/mp4",
                        mp4:"video/mp4",
                        f4v:"video/mp4",
                        m4v:"video/mp4",
                        mov:"video/mp4",
                        mp3:"audio/mpeg",
                        mpeg:"audio/mpeg",
                        ogv:"video/ogg",
                        ogg:"video/ogg",
                        oga:"video/ogg",
                        vorbis:"video/ogg",
                        webm:"video/webm",
                        f4a:"video/aac",
                        m3u8:"application/vnd.apple.mpegurl",
                        m3u:"application/vnd.apple.mpegurl",
                        hls:"application/vnd.apple.mpegurl"
                    },r=t.file,a=t.type,s=i(t);
                    if(null!==s)return s;
                    if(e.isRtmp(r,a))return!1;
                    if(!o[a])return!1;
                    if(n.canPlayType){
                        var l=n.canPlayType(o[a]);
                        return!!l
                    }
                    return!1
                }
            },{
                name:"flash",
                supports:function(n){
                    var i={
                        flv:"video",
                        f4v:"video",
                        mov:"video",
                        m4a:"video",
                        m4v:"video",
                        mp4:"video",
                        aac:"video",
                        f4a:"video",
                        mp3:"sound",
                        mpeg:"sound",
                        smil:"rtmp"
                    },o=t.keys(i);
                    if(!e.isFlashSupported())return!1;
                    var r=n.file,a=n.type;
                    return!!e.isRtmp(r,a)||t.contains(o,a)
                }
            }];
            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(20),n(48),n(177),n(1)],o=function(e,t,i,o){
            function r(e){
                this.providers=t.slice(),this.config=e||{},this.reorderProviders()
            }
            r.loaders={
                html5:function(e){
                    n.e(4,function(require){
                        var t=n(88);
                        a(t),e(t)
                    })
                },
                flash:function(e){
                    n.e(5,function(require){
                        var t=n(72);
                        a(t),e(t)
                    })
                },
                youtube:function(e){
                    n.e(6,function(require){
                        var t=n(73);
                        a(t),e(t)
                    })
                }
            };
            var a=r.registerProvider=function(n){
                var r=n.getName().name;
                if(!i[r]){
                    if(!o.find(t,o.matches({
                        name:r
                    }))){
                        if(!o.isFunction(n.supports))throw{
                            message:"Tried to register a provider with an invalid object"
                        };
                        t.unshift({
                            name:r,
                            supports:n.supports
                        })
                    }
                    var a=function(){};
                    a.prototype=e,n.prototype=new a,i[r]=n
                }
            };
            return o.extend(r.prototype,{
                load:function(e){
                    return Promise.all(o.map(e,function(e){
                        return new Promise(function(t){
                            var n=r.loaders[e.name];
                            n?n(t):t()
                        })
                    }))
                },
                reorderProviders:function(){
                    if("flash"===this.config.primary){
                        var e=o.indexOf(this.providers,o.findWhere(this.providers,{
                            name:"flash"
                        })),t=this.providers.splice(e,1)[0],n=o.indexOf(this.providers,o.findWhere(this.providers,{
                            name:"html5"
                        }));
                        this.providers.splice(n,0,t)
                    }
                },
                providerSupports:function(e,t){
                    return e.supports(t)
                },
                required:function(e){
                    var t=this;
                    return e=e.slice(),o.compact(o.map(this.providers,function(n){
                        for(var i=!1,o=e.length;o--;){
                            var r=e[o],a=t.providerSupports(n,r.sources[0]);
                            a&&e.splice(o,1),i=i||a
                        }
                        if(i)return n
                    }))
                },
                choose:function(e){
                    e=o.isObject(e)?e:{};
                    for(var t=this.providers.length,n=0;n<t;n++){
                        var r=this.providers[n];
                        if(this.providerSupports(r,e)){
                            var a=t-n-1;
                            return{
                                priority:a,
                                name:r.name,
                                type:e.type,
                                provider:i[r.name]
                            }
                        }
                    }
                    return null
                }
            }),r
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,function(e,t,n){
        var i,o;
        i=[],o=function(){
            return{
                hasClass:function(e,t){
                    var n=" "+t+" ";
                    return 1===e.nodeType&&(" "+e.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0
                }
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(3)],o=function(e,t){
            var n=e.extend({
                get:function(e){
                    return this.attributes=this.attributes||{},this.attributes[e]
                },
                set:function(e,t){
                    if(this.attributes=this.attributes||{},this.attributes[e]!==t){
                        var n=this.attributes[e];
                        this.attributes[e]=t,this.trigger("change:"+e,this,t,n)
                    }
                },
                clone:function(){
                    return e.clone(this.attributes)
                }
            },t);
            return n
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[],o=function(){
            var e=function(e,n,i){
                if(n=n||this,i=i||[],window.jwplayer&&window.jwplayer.debug)return e.apply(n,i);
                try{
                    return e.apply(n,i)
                }catch(o){
                    return new t(e.name,o)
                }
            },t=function(e,t){
                this.name=e,this.message=t.message||t.toString(),this.error=t
            };
            return{
                tryCatch:e,
                Error:t
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(29),n(5),n(1)],o=function(e,t,i,o){
            var r=t.style,a={
                back:!0,
                fontSize:14,
                fontFamily:"Arial,sans-serif",
                fontOpacity:100,
                color:"#FFF",
                backgroundColor:"#000",
                backgroundOpacity:100,
                edgeStyle:null,
                windowColor:"#FFF",
                windowOpacity:0,
                preprocessor:o.identity
            },s=function(s){
                function l(e,n,i){
                    if(t.css("#"+e+" .jw-text-track-display",n,e),t.css("#"+e+" .jw-text-track-cue",i,e),t.css("#"+e+" .jw-video::-webkit-media-text-track-display",n,e),t.css("#"+e+" .jw-video::cue",i,e),i.backgroundColor){
                        var o="{background-color: "+i.backgroundColor+" !important;}";
                        t.css("#"+e+" .jw-video::-webkit-media-text-track-display-backdrop",o,e)
                    }
                }
                function c(e,n,i){
                    var o=t.hexToRgba("#000000",i);
                    "dropshadow"===e?n.textShadow="0 2px 1px "+o:"raised"===e?n.textShadow="0 0 5px "+o+", 0 1px 5px "+o+", 0 2px 5px "+o:"depressed"===e?n.textShadow="0 -2px 1px "+o:"uniform"===e&&(n.textShadow="-2px 0 1px "+o+",2px 0 1px "+o+",0 -2px 1px "+o+",0 2px 1px "+o+",-1px 1px 1px "+o+",1px 1px 1px "+o+",1px -1px 1px "+o+",1px 1px 1px "+o)
                }
                function u(){
                    var t=s.get("provider");
                    return t.name.indexOf("flash")===-1&&(e.isChrome()||e.isIOS()||e.isSafari())
                }
                function d(e){
                    g=e,this.selectCues(h,g)
                }
                function p(){
                    u()||n.e(8,function(require){
                        y=n(70)
                    })
                }
                var h,f,g,m,v,w,y,j={};
                m=document.createElement("div"),m.className="jw-captions jw-reset",this.show=function(){
                    m.className="jw-captions jw-captions-enabled jw-reset"
                },this.hide=function(){
                    m.className="jw-captions jw-reset"
                },this.populate=function(e){
                    return f=[],h=e,e?void this.selectCues(e,g):(f=[],void this.renderCues())
                },this.resize=function(){
                    var e=m.clientWidth,t=Math.pow(e/400,.6);
                    if(t){
                        var n=j.fontSize*t;
                        r(m,{
                            fontSize:Math.floor(2*n)/2+"px"
                        })
                    }
                    this.renderCues(!0)
                },this.renderCues=function(e){
                    e=!!e,y&&y.WebVTT.processCues(window,f,m,e)
                },this.selectCues=function(e,t){
                    var n,i;
                    e&&e.data&&t&&(i=this.getAlignmentPosition(e,t),i!==!1&&(n=this.getCurrentCues(e.data,i),this.updateCurrentCues(n),this.renderCues()))
                },this.getCurrentCues=function(e,t){
                    return o.filter(e,function(e){
                        return t>=e.startTime&&(!e.endTime||t<=e.endTime)
                    })
                },this.updateCurrentCues=function(e){
                    return e.length?o.difference(e,f).length&&(v.className="jw-captions-window jw-reset jw-captions-window-active",f=e):f=[],f
                },this.getAlignmentPosition=function(e,t){
                    var n=e.source,i=t.metadata;
                    return n?!(!i||!o.isNumber(i[n]))&&i[n]:t.position
                },this.clear=function(){
                    e.empty(m)
                },this.setContainerHeight=function(e){
                    r(m,{
                        height:e
                    })
                },this.setup=function(e,n){
                    v=document.createElement("div"),w=document.createElement("span"),v.className="jw-captions-window jw-reset",w.className="jw-captions-text jw-reset",j=o.extend({},a,n);
                    var i=j.fontOpacity,u=j.windowOpacity,d=j.edgeStyle,p=j.backgroundColor,h={},f={
                        color:t.hexToRgba(j.color,i),
                        fontFamily:j.fontFamily,
                        fontStyle:j.fontStyle,
                        fontWeight:j.fontWeight,
                        textDecoration:j.textDecoration
                    };
                    u&&(h.backgroundColor=t.hexToRgba(j.windowColor,u)),c(d,f,i),j.back?f.backgroundColor=t.hexToRgba(p,j.backgroundOpacity):null===d&&c("uniform",f),r(v,h),r(w,f),l(e,h,f),v.appendChild(w),m.appendChild(v),this.populate(s.get("captionsTrack")),s.set("captions",j)
                },this.element=function(){
                    return m
                },s.on("change:playlistItem",function(){
                    g=null,f=[]
                },this),s.on("change:captionsTrack",function(e,t){
                    this.populate(t)
                },this),s.mediaController.on("seek",function(){
                    f=[]
                },this),s.mediaController.on("time seek",d,this),s.mediaController.on("subtitlesTrackData",function(){
                    this.selectCues(h,g)
                },this),s.on("change:state",function(e,t){
                    switch(t){
                        case i.IDLE:case i.ERROR:case i.COMPLETE:
                            this.hide();
                            break;
                        default:
                            this.show()
                    }
                },this),s.on("itemReady",p,this)
            };
            return s
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(9),n(4),n(3),n(1)],o=function(e,t,n,i){
            var o=function(o,r,a){
                function s(e){
                    if(!o.get("flashBlocked"))return u?void u(e):void f.trigger(e.type===t.touchEvents.CLICK?"click":"tap")
                }
                function l(){
                    return d?void d():void f.trigger("doubleClick")
                }
                var c,u,d,p={
                    enableDoubleTap:!0,
                    useMove:!0
                };
                i.extend(this,n),c=r,this.element=function(){
                    return c
                };
                var h=new e(c,i.extend(p,a));
                h.on("click tap",s),h.on("doubleClick doubleTap",l),h.on("move",function(){
                    f.trigger("move")
                }),h.on("over",function(){
                    f.trigger("over")
                }),h.on("out",function(){
                    f.trigger("out")
                }),this.clickHandler=s;
                var f=this;
                this.setAlternateClickHandlers=function(e,t){
                    u=e,d=t||null
                },this.revertAlternateClickHandlers=function(){
                    u=null,d=null
                }
            };
            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(2),n(19)],o=function(e,t,n){
            function i(e,t){
                this.time=e,this.text=t,this.el=document.createElement("div"),this.el.className="jw-cue jw-reset"
            }
            e.extend(i.prototype,{
                align:function(e){
                    if("%"===this.time.toString().slice(-1))this.pct=this.time;
                    else{
                        var t=this.time/e*100;
                        this.pct=t+"%"
                    }
                    this.el.style.left=this.pct
                }
            });
            var o={
                loadChapters:function(e){
                    t.ajax(e,this.chaptersLoaded.bind(this),this.chaptersFailed,{
                        plainText:!0
                    })
                },
                chaptersLoaded:function(t){
                    var i=n(t.responseText);
                    e.isArray(i)&&(e.each(i,this.addCue,this),this.drawCues())
                },
                chaptersFailed:function(){},
                addCue:function(e){
                    this.cues.push(new i(e.begin,e.text))
                },
                drawCues:function(){
                    var t=this._model.mediaModel.get("duration");
                    if(!t||t<=0)return void this._model.mediaModel.once("change:duration",this.drawCues,this);
                    var n=this;
                    e.each(this.cues,function(e){
                        e.align(t),e.el.addEventListener("mouseover",function(){
                            n.activeCue=e
                        }),e.el.addEventListener("mouseout",function(){
                            n.activeCue=null
                        }),n.elementRail.appendChild(e.el)
                    })
                },
                resetChapters:function(){
                    e.each(this.cues,function(e){
                        e.el.parentNode&&e.el.parentNode.removeChild(e.el)
                    },this),this.cues=[]
                }
            };

            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(31),n(2),n(1),n(9)],o=function(e,t,n,i){
            var o=e.extend({
                constructor:function(t,n){
                    e.call(this,t,n),this.container.className="jw-overlay-horizontal jw-reset",this.openClass="jw-open-drawer",this.componentType="drawer"
                },
                setup:function(e,o){
                    this.iconUI||(this.iconUI=new i(this.el,{
                        useHover:!0,
                        directSelect:!0
                    }),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this)),this.reset(),e=n.isArray(e)?e:[],this.activeContents=n.filter(e,function(e){
                        return e.isActive
                    }),t.toggleClass(this.el,"jw-hidden",!o||this.activeContents.length<2),o&&this.activeContents.length>1&&(t.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener),n.each(e,function(e){
                        this.container.appendChild(e.el)
                    },this))
                },
                reset:function(){
                    t.addClass(this.el,"jw-off"),this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()
                }
            });
            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(31),n(2),n(1),n(9),n(135)],o=function(e,t,n,i,o){
            var r=e.extend({
                setup:function(e,r,a){
                    a=a||{},this.iconUI||(this.iconUI=new i(this.el,{
                        useHover:!0,
                        directSelect:!0
                    }),this.toggleValueListener=this.toggleValue.bind(this),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.select.bind(this)),this.reset(),e=n.isArray(e)?e:[],t.toggleClass(this.el,"jw-hidden",e.length<2);
                    var s=e.length>2||2===e.length&&a&&a.toggle===!1,l=!s&&2===e.length;
                    if(t.toggleClass(this.el,"jw-toggle",l||!!a.isToggle),t.toggleClass(this.el,"jw-button-color",!l),this.isActive=s||l,s){
                        t.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener);
                        var c=o(e),u=t.createElement(c);
                        this.addContent(u),this.contentUI=new i(this.content).on("click tap",this.selectListener)
                    }else l&&this.iconUI.on("click tap",this.toggleValueListener);
                    this.selectItem(r)
                },
                toggleValue:function(){
                    this.trigger("toggleValue")
                },
                select:function(e){
                    if(e.target.parentElement===this.content){
                        var i=t.classList(e.target),o=n.find(i,function(e){
                            return 0===e.indexOf("jw-item")
                        });
                        o&&(this.trigger("select",parseInt(o.split("-")[2])),this.closeTooltipListener())
                    }
                },
                selectItem:function(e){
                    if(this.content)for(var n=0;n<this.content.children.length;n++)t.toggleClass(this.content.children[n],"jw-active-option",e===n);
                    t.toggleClass(this.el,"jw-off",0===e)
                },
                reset:function(){
                    t.addClass(this.el,"jw-off"),this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()
                }
            });
            return r
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(1),n(31),n(9),n(137)],o=function(e,t,n,i,o){
            var r=n.extend({
                setup:function(n,o){
                    if(this.iconUI||(this.iconUI=new i(this.el,{
                        useHover:!0
                    }),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.onSelect.bind(this)),this.reset(),n=t.isArray(n)?n:[],e.toggleClass(this.el,"jw-hidden",n.length<2),n.length>=2){
                        this.iconUI=new i(this.el,{
                            useHover:!0
                        }).on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener);
                        var r=this.menuTemplate(n,o),a=e.createElement(r);
                        this.addContent(a),this.contentUI=new i(this.content),this.contentUI.on("click tap",this.selectListener)
                    }
                    this.originalList=n
                },
                menuTemplate:function(n,i){
                    var r=t.map(n,function(t,n){
                        var o=t.title?e.createElement(t.title).textContent:"";
                        return{
                            active:n===i,
                            label:n+1+".",
                            title:o
                        }
                    });
                    return o(r)
                },
                onSelect:function(n){
                    var i=n.target;
                    if("UL"!==i.tagName){
                        "LI"!==i.tagName&&(i=i.parentElement);
                        var o=e.classList(i),r=t.find(o,function(e){
                            return 0===e.indexOf("jw-item")
                        });
                        r&&(this.trigger("select",parseInt(r.split("-")[2])),this.closeTooltip())
                    }
                },
                selectItem:function(e){
                    this.setup(this.originalList,e)
                },
                reset:function(){
                    this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()
                }
            });
            return r
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(2),n(19)],o=function(e,t,n){
            function i(e){
                this.begin=e.begin,this.end=e.end,this.img=e.text
            }
            var o={
                loadThumbnails:function(e){
                    e&&(this.vttPath=e.split("?")[0].split("/").slice(0,-1).join("/"),this.individualImage=null,t.ajax(e,this.thumbnailsLoaded.bind(this),this.thumbnailsFailed.bind(this),{
                        plainText:!0
                    }))
                },
                thumbnailsLoaded:function(t){
                    var o=n(t.responseText);
                    e.isArray(o)&&(e.each(o,function(e){
                        this.thumbnails.push(new i(e))
                    },this),this.drawCues())
                },
                thumbnailsFailed:function(){},
                chooseThumbnail:function(t){
                    var n=e.sortedIndex(this.thumbnails,{
                        end:t
                    },e.property("end"));
                    n>=this.thumbnails.length&&(n=this.thumbnails.length-1);
                    var i=this.thumbnails[n].img;
                    return i.indexOf("://")<0&&(i=this.vttPath?this.vttPath+"/"+i:i),i
                },
                loadThumbnail:function(t){
                    var n=this.chooseThumbnail(t),i={
                        display:"block",
                        margin:"0 auto",
                        backgroundPosition:"0 0"
                    },o=n.indexOf("#xywh");
                    if(o>0)try{
                        var r=/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);
                        n=r[1],i.backgroundPosition=r[2]*-1+"px "+r[3]*-1+"px",i.width=r[4],i.height=r[5]
                    }catch(a){
                        return
                    }else this.individualImage||(this.individualImage=new Image,this.individualImage.onload=e.bind(function(){
                        this.individualImage.onload=null,this.timeTip.image({
                            width:this.individualImage.width,
                            height:this.individualImage.height
                        })
                    },this),this.individualImage.src=n);
                    return i.backgroundImage='url("'+n+'")',i
                },
                showThumbnail:function(e){
                    this.thumbnails.length<1||this.timeTip.image(this.loadThumbnail(e));
                },
                resetThumbnails:function(){
                    this.timeTip.image({
                        backgroundImage:"",
                        width:0,
                        height:0
                    }),this.thumbnails=[]
                }
            };
        
            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(2),n(28),n(45),n(31),n(186),n(190)],o=function(e,t,n,i,o,r,a){
            var s=o.extend({
                setup:function(){
                    this.text=document.createElement("span"),this.text.className="jw-text jw-reset",this.img=document.createElement("div"),this.img.className="jw-reset";
                    var e=document.createElement("div");
                    e.className="jw-time-tip jw-background-color jw-reset",e.appendChild(this.img),e.appendChild(this.text),t.removeClass(this.el,"jw-hidden"),this.addContent(e)
                },
                image:function(e){
                    t.style(this.img,e)
                },
                update:function(e){
                    this.text.innerHTML=e
                }
            }),l=i.extend({
                constructor:function(t,n){
                    this._model=t,this._api=n,this.timeTip=new s("jw-tooltip-time"),this.timeTip.setup(),this.cues=[],this.seekThrottled=e.throttle(this.performSeek,400),this._model.on("change:playlistItem",this.onPlaylistItem,this).on("change:position",this.onPosition,this).on("change:duration",this.onDuration,this).on("change:buffer",this.onBuffer,this),i.call(this,"jw-slider-time","horizontal")
                },
                setup:function(){
                    i.prototype.setup.apply(this,arguments),this._model.get("playlistItem")&&this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.elementRail.appendChild(this.timeTip.element()),this.el.addEventListener("mousemove",this.showTimeTooltip.bind(this),!1),this.el.addEventListener("mouseout",this.hideTimeTooltip.bind(this),!1)
                },
                limit:function(i){
                    if(this.activeCue&&e.isNumber(this.activeCue.pct))return this.activeCue.pct;
                    var o=this._model.get("duration"),r=t.adaptiveType(o);
                    if("DVR"===r){
                        var a=(1-i/100)*o,s=this._model.get("position"),l=Math.min(a,Math.max(n.dvrSeekLimit,s)),c=100*l/o;
                        return 100-c
                    }
                    return i
                },
                update:function(e){
                    this.seekTo=e,this.seekThrottled(),i.prototype.update.apply(this,arguments)
                },
                dragStart:function(){
                    this._model.set("scrubbing",!0),i.prototype.dragStart.apply(this,arguments)
                },
                dragEnd:function(){
                    i.prototype.dragEnd.apply(this,arguments),this._model.set("scrubbing",!1)
                },
                onSeeked:function(){
                    this._model.get("scrubbing")&&this.performSeek()
                },
                onBuffer:function(e,t){
                    this.updateBuffer(t)
                },
                onPosition:function(e,t){
                    this.updateTime(t,e.get("duration"))
                },
                onDuration:function(e,t){
                    this.updateTime(e.get("position"),t)
                },
                updateTime:function(e,n){
                    var i=0;
                    if(n){
                        var o=t.adaptiveType(n);
                        "DVR"===o?i=(n-e)/n*100:"VOD"===o&&(i=e/n*100)
                    }
                    this.render(i)
                },
                onPlaylistItem:function(t,n){
                    this.reset(),t.mediaModel.on("seeked",this.onSeeked,this);
                    var i=n.tracks;
                    e.each(i,function(e){
                        e&&e.kind&&"thumbnails"===e.kind.toLowerCase()?this.loadThumbnails(e.file):e&&e.kind&&"chapters"===e.kind.toLowerCase()&&this.loadChapters(e.file)
                    },this)
                },
                performSeek:function(){
                    var e,n=this.seekTo,i=this._model.get("duration"),o=t.adaptiveType(i);
                    0===i?this._api.play():"DVR"===o?(e=(100-n)/100*i,this._api.seek(e)):(e=n/100*i,this._api.seek(Math.min(e,i-.25)))
                },
                showTimeTooltip:function(e){
                    var i=this._model.get("duration");
                    if(0!==i){
                        var o=t.bounds(this.elementRail),r=e.pageX?e.pageX-o.left:e.x;
                        r=t.between(r,0,o.width);
                        var a=r/o.width,s=i*a;
                        i<0&&(s=i-s);
                        var l;
                        if(this.activeCue)l=this.activeCue.text;
                        else{
                            var c=!0;
                            l=t.timeFormat(s,c),i<0&&s>n.dvrSeekLimit&&(l="Live")
                        }
                        this.timeTip.update(l),this.showThumbnail(s),t.addClass(this.timeTip.el,"jw-open"),this.timeTip.el.style.left=100*a+"%"
                    }
                },
                hideTimeTooltip:function(){
                    t.removeClass(this.timeTip.el,"jw-open")
                },
                reset:function(){
                    this.resetChapters(),this.resetThumbnails()
                }
            });
            return e.extend(l.prototype,r,a),l
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(31),n(45),n(9),n(2)],o=function(e,t,n,i){
            var o=e.extend({
                constructor:function(o,r,a){
                    this._model=o,e.call(this,r,a,!0),this.volumeSlider=new t("jw-slider-volume jw-volume-tip","vertical"),this.addContent(this.volumeSlider.element()),this.volumeSlider.on("update",function(e){
                        this.trigger("update",e)
                    },this),i.removeClass(this.el,"jw-hidden"),new n(this.el,{
                        useHover:!0,
                        directSelect:!0
                    }).on("click",this.toggleValue,this).on("tap",this.toggleOpenState,this).on("over",this.openTooltip,this).on("out",this.closeTooltip,this),this._model.on("change:volume",this.onVolume,this)
                },
                toggleValue:function(){
                    this.trigger("toggleValue")
                }
            });
            return o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(1),n(3),n(28),n(9),n(45),n(191),n(188),n(189),n(192),n(187)],o=function(e,t,n,i,o,r,a,s,l,c,u){
            function d(e,t,n){
                var i=document.createElement("div");
                return i.className="jw-icon jw-icon-inline jw-button-color jw-reset "+e,i.setAttribute("role","button"),i.setAttribute("tabindex","0"),n&&i.setAttribute("aria-label",n),i.style.display="none",t&&new o(i).on("click tap",function(){
                    t()
                }),{
                    element:function(){
                        return i
                    },
                    toggle:function(e){
                        e?this.show():this.hide()
                    },
                    show:function(){
                        i.style.display=""
                    },
                    hide:function(){
                        i.style.display="none"
                    }
                }
            }
            function p(e,t){
                var n=document.createElement("span");
                return n.className="jw-text jw-reset "+e,t&&n.setAttribute("role",t),n
            }
            function h(e,t){
                var n=new s(e,t);
                return n
            }
            function f(e,n){
                var i=document.createElement("div");
                return i.className="jw-group jw-controlbar-"+e+"-group jw-reset",t.each(n,function(e){
                    e.element&&(e=e.element()),i.appendChild(e)
                }),i
            }
            function g(t,n){
                this._api=t,this._model=n,this._isMobile=e.isMobile(),this._compactModeMaxSize=400,this._maxCompactWidth=-1,this._localization=this._model.get("localization"),this.setup()
            }
            return t.extend(g.prototype,n,{
                setup:function(){
                    this.build(),this.initialize()
                },
                build:function(){
                    var e,n,i,o,s=new a(this._model,this._api),g=new u("jw-icon-more",this._localization.more);
                    this._model.get("visualplaylist")!==!1&&(e=new l("jw-icon-playlist",this._localization.playlist));
                    var m=this._localization.play,v=this._localization.prev,w=this._localization.next,y=this._localization.volume;
                    this._isMobile||(o=d("jw-icon-volume",this._api.setMute,y),n=new r("jw-slider-volume","horizontal"),i=new c(this._model,"jw-icon-volume",y)),this.elements={
                        alt:p("jw-text-alt","status"),
                        play:d("jw-icon-playback",this._api.play.bind(this,{
                            reason:"interaction"
                        }),m),
                        prev:d("jw-icon-prev",this._api.playlistPrev.bind(this,{
                            reason:"interaction"
                        }),v),
                        next:d("jw-icon-next",this._api.playlistNext.bind(this,{
                            reason:"interaction"
                        }),w),
                        playlist:e,
                        elapsed:p("jw-text-elapsed","timer"),
                        time:s,
                        duration:p("jw-text-duration","timer"),
                        drawer:g,
                        hd:h("jw-icon-hd",this._localization.hd),
                        cc:h("jw-icon-cc",this._localization.cc),
                        audiotracks:h("jw-icon-audio-tracks",this._localization.audioTracks),
                        mute:o,
                        volume:n,
                        volumetooltip:i,
                        cast:d("jw-icon-cast jw-off",this._api.castToggle,this._localization.cast),
                        fullscreen:d("jw-icon-fullscreen",this._api.setFullscreen,this._localization.fullscreen)
                    },this.layout={
                        left:[this.elements.play,this.elements.prev,this.elements.playlist,this.elements.next,this.elements.elapsed],
                        center:[this.elements.time,this.elements.alt],
                        right:[this.elements.duration,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.drawer,this.elements.mute,this.elements.cast,this.elements.volume,this.elements.volumetooltip,this.elements.fullscreen],
                        drawer:[this.elements.hd,this.elements.cc,this.elements.audiotracks]
                    },this.menus=t.compact([this.elements.playlist,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.volumetooltip]),this.layout.left=t.compact(this.layout.left),this.layout.center=t.compact(this.layout.center),this.layout.right=t.compact(this.layout.right),this.layout.drawer=t.compact(this.layout.drawer),this.el=document.createElement("div"),this.el.className="jw-controlbar jw-background-color jw-reset",this.elements.left=f("left",this.layout.left),this.elements.center=f("center",this.layout.center),this.elements.right=f("right",this.layout.right),this.el.appendChild(this.elements.left),this.el.appendChild(this.elements.center),this.el.appendChild(this.elements.right)
                },
                initialize:function(){
                    this.elements.play.show(),this.elements.fullscreen.show(),this.elements.mute&&this.elements.mute.show(),this.onVolume(this._model,this._model.get("volume")),this.onPlaylist(this._model,this._model.get("playlist")),this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.onMediaModel(this._model,this._model.get("mediaModel")),this.onCastAvailable(this._model,this._model.get("castAvailable")),this.onCastActive(this._model,this._model.get("castActive")),this.onCaptionsList(this._model,this._model.get("captionsList")),this._model.on("change:volume",this.onVolume,this),this._model.on("change:mute",this.onMute,this),this._model.on("change:playlist",this.onPlaylist,this),this._model.on("change:playlistItem",this.onPlaylistItem,this),this._model.on("change:mediaModel",this.onMediaModel,this),this._model.on("change:castAvailable",this.onCastAvailable,this),this._model.on("change:castActive",this.onCastActive,this),this._model.on("change:duration",this.onDuration,this),this._model.on("change:position",this.onElapsed,this),this._model.on("change:fullscreen",this.onFullscreen,this),this._model.on("change:captionsList",this.onCaptionsList,this),this._model.on("change:captionsIndex",this.onCaptionsIndex,this),this._model.on("change:compactUI",this.onCompactUI,this),this.elements.volume&&this.elements.volume.on("update",function(e){
                        var t=e.percentage;
                        this._api.setVolume(t)
                    },this),this.elements.volumetooltip&&(this.elements.volumetooltip.on("update",function(e){
                        var t=e.percentage;
                        this._api.setVolume(t)
                    },this),this.elements.volumetooltip.on("toggleValue",function(){
                        this._api.setMute()
                    },this)),this.elements.playlist&&this.elements.playlist.on("select",function(e){
                        this._model.once("itemReady",function(){
                            this._api.play({
                                reason:"interaction"
                            })
                        },this),this._api.load(e)
                    },this),this.elements.hd.on("select",function(e){
                        this._model.getVideo().setCurrentQuality(e)
                    },this),this.elements.hd.on("toggleValue",function(){
                        this._model.getVideo().setCurrentQuality(0===this._model.getVideo().getCurrentQuality()?1:0)
                    },this),this.elements.cc.on("select",function(e){
                        this._api.setCurrentCaptions(e)
                    },this),this.elements.cc.on("toggleValue",function(){
                        var e=this._model.get("captionsIndex");
                        this._api.setCurrentCaptions(e?0:1)
                    },this),this.elements.audiotracks.on("select",function(e){
                        this._model.getVideo().setCurrentAudioTrack(e)
                    },this),new o(this.elements.duration).on("click tap",function(){
                        if("DVR"===e.adaptiveType(this._model.get("duration"))){
                            var t=this._model.get("position");
                            this._api.seek(Math.max(i.dvrSeekLimit,t))
                        }
                    },this),new o(this.el).on("click tap drag",function(){
                        this.trigger("userAction")
                    },this),this.elements.drawer.on("open-drawer close-drawer",function(t,n){
                        e.toggleClass(this.el,"jw-drawer-expanded",n.isOpen),n.isOpen||this.closeMenus()
                    },this),t.each(this.menus,function(e){
                        e.on("open-tooltip",this.closeMenus,this)
                    },this)
                },
                onCaptionsList:function(e,t){
                    var n=e.get("captionsIndex");
                    this.elements.cc.setup(t,n,{
                        isToggle:!0
                    }),this.clearCompactMode()
                },
                onCaptionsIndex:function(e,t){
                    this.elements.cc.selectItem(t)
                },
                onPlaylist:function(e,t){
                    var n=t.length>1;
                    this.elements.next.toggle(n),this.elements.prev.toggle(n),this.elements.playlist&&this.elements.playlist.setup(t,e.get("item"))
                },
                onPlaylistItem:function(e){
                    this.elements.time.updateBuffer(0),this.elements.time.render(0),this.elements.duration.innerHTML="00:00",this.elements.elapsed.innerHTML="00:00",this.clearCompactMode();
                    var t=e.get("item");
                    this.elements.playlist&&this.elements.playlist.selectItem(t),this.elements.audiotracks.setup()
                },
                onMediaModel:function(n,i){
                    i.on("change:levels",function(e,t){
                        this.elements.hd.setup(t,e.get("currentLevel")),this.clearCompactMode()
                    },this),i.on("change:currentLevel",function(e,t){
                        this.elements.hd.selectItem(t)
                    },this),i.on("change:audioTracks",function(e,n){
                        var i=t.map(n,function(e){
                            return{
                                label:e.name
                            }
                        });
                        this.elements.audiotracks.setup(i,e.get("currentAudioTrack"),{
                            toggle:!1
                        }),this.clearCompactMode()
                    },this),i.on("change:currentAudioTrack",function(e,t){
                        this.elements.audiotracks.selectItem(t)
                    },this),i.on("change:state",function(t,n){
                        "complete"===n&&(this.elements.drawer.closeTooltip(),e.removeClass(this.el,"jw-drawer-expanded"))
                    },this)
                },
                onVolume:function(e,t){
                    this.renderVolume(e.get("mute"),t)
                },
                onMute:function(e,t){
                    this.renderVolume(t,e.get("volume"))
                },
                renderVolume:function(t,n){
                    this.elements.mute&&e.toggleClass(this.elements.mute.element(),"jw-off",t),this.elements.volume&&this.elements.volume.render(t?0:n),this.elements.volumetooltip&&(this.elements.volumetooltip.volumeSlider.render(t?0:n),e.toggleClass(this.elements.volumetooltip.element(),"jw-off",t))
                },
                onCastAvailable:function(e,t){
                    this.elements.cast.toggle(t),this.clearCompactMode()
                },
                onCastActive:function(t,n){
                    e.toggleClass(this.elements.cast.element(),"jw-off",!n)
                },
                onElapsed:function(t,n){
                    var i,o=t.get("duration");
                    i="DVR"===e.adaptiveType(o)?"-"+e.timeFormat(-o):e.timeFormat(n),this.elements.elapsed.innerHTML=i
                },
                onDuration:function(t,n){
                    var i;
                    "DVR"===e.adaptiveType(n)?(i="Live",this.clearCompactMode()):i=e.timeFormat(n),this.elements.duration.innerHTML=i
                },
                onFullscreen:function(t,n){
                    e.toggleClass(this.elements.fullscreen.element(),"jw-off",n)
                },
                element:function(){
                    return this.el
                },
                getVisibleBounds:function(){
                    var t,n=this.el,i=getComputedStyle?getComputedStyle(n):n.currentStyle;
                    return"table"===i.display?e.bounds(n):(n.style.visibility="hidden",n.style.display="table",t=e.bounds(n),n.style.visibility=n.style.display="",t)
                },
                setAltText:function(e){
                    this.elements.alt.innerHTML=e
                },
                addCues:function(e){
                    this.elements.time&&(t.each(e,function(e){
                        this.elements.time.addCue(e)
                    },this),this.elements.time.drawCues())
                },
                closeMenus:function(e){
                    t.each(this.menus,function(t){
                        e&&e.target===t.el||t.closeTooltip(e)
                    })
                },
                hideComponents:function(){
                    this.closeMenus(),this.elements.drawer.closeTooltip(),e.removeClass(this.el,"jw-drawer-expanded")
                },
                clearCompactMode:function(){
                    this._maxCompactWidth=-1,this._model.set("compactUI",!1),this._containerWidth&&this.checkCompactMode(this._containerWidth)
                },
                setCompactModeBounds:function(){
                    if(this.element().offsetWidth>0){
                        var t=this.elements.left.offsetWidth+this.elements.right.offsetWidth;
                        if("LIVE"===e.adaptiveType(this._model.get("duration")))this._maxCompactWidth=t+this.elements.alt.offsetWidth;
                        else{
                            var n=t+(this.elements.center.offsetWidth-this.elements.time.el.offsetWidth),i=.2;
                            this._maxCompactWidth=n/(1-i)
                        }
                    }
                },
                checkCompactMode:function(e){
                    this._maxCompactWidth===-1&&this.setCompactModeBounds(),this._containerWidth=e,this._maxCompactWidth!==-1&&(e>=this._compactModeMaxSize&&e>this._maxCompactWidth?this._model.set("compactUI",!1):(e<this._compactModeMaxSize||e<=this._maxCompactWidth)&&this._model.set("compactUI",!0))
                },
                onCompactUI:function(n,i){
                    e.removeClass(this.el,"jw-drawer-expanded"),this.elements.drawer.setup(this.layout.drawer,i),(!i||this.elements.drawer.activeContents.length<2)&&t.each(this.layout.drawer,function(e){
                        this.elements.right.insertBefore(e.el,this.elements.drawer.el)
                    },this)
                }
            }),g
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(3),n(9),n(131),n(1)],o=function(e,t,n,i,o){
            var r=function(r){
                o.extend(this,t),this.model=r,this.el=e.createElement(i({
                    ariaLabel:this.model.get("localization").playback
                }));
                var a=this;
                this.iconUI=new n(this.el).on("click tap",function(e){
                    a.trigger(e.type)
                }),this.model.on("change:state",function(e,t){
                    var n=a.el.getElementsByClassName("jw-icon-display");
                    if(n.length){
                        var i=a.model.get("localization"),o=i.playback;
                        switch(t){
                            case"buffering":
                                o=i.buffer;
                                break;
                            case"playing":
                                o=i.pause;
                                break;
                            case"complete":
                                o=i.replay;
                                break;
                            case"error":
                                o=""
                        }
                        ""===o?n[0].removeAttribute("aria-label"):n[0].setAttribute("aria-label",o)
                    }
                })
            };
        
            return o.extend(r.prototype,{
                element:function(){
                    return this.el
                }
            }),r
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(132),n(2),n(1),n(9)],o=function(e,t,n,i){
            var o=function(e){
                this.model=e,this.setup(),this.model.on("change:dock",this.render,this)
            };
            
            return n.extend(o.prototype,{
                setup:function(){
                    var n=this.model.get("dock"),o=this.click.bind(this),r=e(n);
                    this.el=t.createElement(r),new i(this.el).on("click tap",o)
                },
                getDockButton:function(e){
                    return t.hasClass(e.target,"jw-dock-button")?e.target:t.hasClass(e.target,"jw-dock-text")?e.target.parentElement.parentElement:e.target.parentElement
                },
                click:function(e){
                    var t=this.getDockButton(e),i=t.getAttribute("button"),o=this.model.get("dock"),r=n.findWhere(o,{
                        id:i
                    });
                    r&&r.callback&&r.callback(e)
                },
                render:function(){
                    var n=this.model.get("dock"),i=e(n),o=t.createElement(i);
                    this.el.innerHTML=o.innerHTML
                },
                element:function(){
                    return this.el
                }
            }),o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(133)],o=function(e){
            function t(t,n,i,o){
                return e({
                    id:t,
                    skin:n,
                    title:i,
                    body:o
                })
            }
            return t
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(9),n(2),n(4),n(1),n(3),n(134)],o=function(e,t,n,i,o,r){
            var a=t.style,s={
                linktarget:"_blank",
                margin:8,
                hide:!1,
                position:"top-right"
            },l=function(l){
                var c,u,d=new Image,p=i.extend({},l.get("logo"));
                return i.extend(this,o),this.setup=function(o){
                    if(u=i.extend({},s,p),u.hide="true"===u.hide.toString(),c=t.createElement(r()),u.file){
                        u.hide&&t.addClass(c,"jw-hide"),t.addClass(c,"jw-logo-"+(u.position||s.position)),"top-right"===u.position&&(l.on("change:dock",this.topRight,this),l.on("change:controls",this.topRight,this),this.topRight(l)),l.set("logo",u),d.onload=function(){
                            var e={
                                backgroundImage:'url("'+this.src+'")',
                                width:this.width,
                                height:this.height
                            };
                            
                            if(u.margin!==s.margin){
                                var t=/(\w+)-(\w+)/.exec(u.position);
                                3===t.length&&(e["margin-"+t[1]]=u.margin,e["margin-"+t[2]]=u.margin)
                            }
                            a(c,e),l.set("logoWidth",e.width)
                        },d.src=u.file;
                        var h=new e(c);
                        h.on("click tap",function(e){
                            t.exists(e)&&e.stopPropagation&&e.stopPropagation(),this.trigger(n.JWPLAYER_LOGO_CLICK,{
                                link:u.link,
                                linktarget:u.linktarget
                            })
                        },this),o.appendChild(c)
                    }
                },this.topRight=function(e){
                    var t=e.get("controls"),n=e.get("dock"),i=t&&(n&&n.length||e.get("sharing")||e.get("related"));
                    a(c,{
                        top:i?"3.5em":0
                    })
                },this.element=function(){
                    return c
                },this.position=function(){
                    return u.position
                },this.destroy=function(){
                    d.onload=null
                },this
            };
        
            return l
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(2)],o=function(e,t){
            function n(e,t){
                t.off("change:mediaType",null,this),t.on("change:mediaType",function(t,n){
                    "audio"===n&&this.setImage(e.get("playlistItem").image)
                },this)
            }
            function i(e,n){
                var i=e.get("autostart")&&!t.isMobile()||e.get("item")>0;
                return i?(this.setImage(null),e.off("change:state",null,this),void e.on("change:state",function(e,t){
                    "complete"!==t&&"idle"!==t&&"error"!==t||(this.setImage(n.image),this.resize(null,null,e.get("stretching")))
                },this)):void this.setImage(n.image)
            }
            var o=function(e){
                this.model=e,e.on("change:playlistItem",i,this),e.on("change:mediaModel",n,this)
            };
            
            return e.extend(o.prototype,{
                setup:function(e){
                    this.el=e;
                    var t=this.model.get("playlistItem");
                    t&&this.setImage(t.image)
                },
                setImage:function(n){
                    var i=this.image;
                    i&&(i.onload=null,this.image=null),this.model.off("change:state",null,this);
                    var o="";
                    e.isString(n)&&(o='url("'+n+'")',i=this.image=new Image,i.src=n),t.style(this.el,{
                        backgroundImage:o
                    })
                },
                resize:function(e,n,i){
                    if("uniform"===i){
                        if(e&&(this.playerAspectRatio=e/n),!this.playerAspectRatio)return;
                        var o=this.image,r=null;
                        if(o){
                            if(0===o.width){
                                var a=this;
                                return void(o.onload=function(){
                                    a.resize(e,n,i)
                                })
                            }
                            var s=o.width/o.height;
                            Math.abs(this.playerAspectRatio-s)<.09&&(r="cover")
                        }
                        t.style(this.el,{
                            backgroundSize:r
                        })
                    }
                },
                element:function(){
                    return this.el
                }
            }),o
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(138),n(1),n(9),n(30)],o=function(e,t,n,i,o){
            var r=function(){};
        
            return n.extend(r.prototype,{
                buildArray:function(){
                    var t=o.split("+"),n=t[0],i={
                        items:[{
                            title:"Powered by JW Player "+n,
                            featured:!0,
                            showLogo:!0,
                            link:"https://jwplayer.com/learn-more"
                        }]
                    },r=n.indexOf("-")>0,a=t[1];
                    if(r&&a){
                        var s=a.split(".");
                        i.items.push({
                            title:"build: ("+s[0]+"."+s[1]+")",
                            link:"#"
                        })
                    }
                    var l=this.model.get("provider");
                    if(l&&l.name.indexOf("flash")>=0){
                        var c="Flash Version "+e.flashVersion();
                        i.items.push({
                            title:c,
                            link:"http://www.adobe.com/software/flash/about/"
                        })
                    }
                    return i
                },
                buildMenu:function(){
                    var n=this.buildArray();
                    return e.createElement(t(n))
                },
                updateHtml:function(){
                    this.el.innerHTML=this.buildMenu().innerHTML
                },
                rightClick:function(e){
                    return this.lazySetup(),!this.mouseOverContext&&(this.hideMenu(),this.showMenu(e),!1)
                },
                getOffset:function(e){
                    for(var t=e.target,n=e.offsetX||e.layerX,i=e.offsetY||e.layerY;t!==this.playerElement;)n+=t.offsetLeft,i+=t.offsetTop,t=t.parentNode;
                    return{
                        x:n,
                        y:i
                    }
                },
                showMenu:function(t){
                    var n=this.getOffset(t);
                    return this.el.style.left=n.x+"px",this.el.style.top=n.y+"px",e.addClass(this.playerElement,"jw-flag-rightclick-open"),e.addClass(this.el,"jw-open"),!1
                },
                hideMenu:function(){
                    this.mouseOverContext||(e.removeClass(this.playerElement,"jw-flag-rightclick-open"),e.removeClass(this.el,"jw-open"))
                },
                lazySetup:function(){
                    this.el||(this.el=this.buildMenu(),this.layer.appendChild(this.el),this.hideMenuHandler=this.hideMenu.bind(this),this.addOffListener(this.playerElement),this.addOffListener(document),this.model.on("change:provider",this.updateHtml,this),this.elementUI=new i(this.el,{
                        useHover:!0
                    }).on("over",function(){
                        this.mouseOverContext=!0
                    },this).on("out",function(){
                        this.mouseOverContext=!1
                    },this))
                },
                setup:function(e,t,n){
                    this.playerElement=t,this.model=e,this.mouseOverContext=!1,this.layer=n,t.oncontextmenu=this.rightClick.bind(this)
                },
                addOffListener:function(e){
                    e.addEventListener("mousedown",this.hideMenuHandler),e.addEventListener("touchstart",this.hideMenuHandler),e.addEventListener("pointerdown",this.hideMenuHandler)
                },
                removeOffListener:function(e){
                    e.removeEventListener("mousedown",this.hideMenuHandler),e.removeEventListener("touchstart",this.hideMenuHandler),e.removeEventListener("pointerdown",this.hideMenuHandler)
                },
                destroy:function(){
                    this.el&&(this.hideMenu(),this.elementUI.off(),this.removeOffListener(this.playerElement),this.removeOffListener(document),this.hideMenuHandler=null,this.el=null),this.playerElement&&(this.playerElement.oncontextmenu=null,this.playerElement=null),this.model&&(this.model.off("change:provider",this.updateHtml),this.model=null)
                }
            }),r
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(1),n(2)],o=function(e,t){
            var n=function(e){
                this.model=e,this.model.on("change:playlistItem",this.playlistItem,this)
            };
            
            return e.extend(n.prototype,{
                hide:function(){
                    this.el.style.display="none"
                },
                show:function(){
                    this.el.style.display=""
                },
                setup:function(e){
                    this.el=e;
                    var t=this.el.getElementsByTagName("div");
                    this.title=t[0],this.description=t[1],this.model.get("playlistItem")&&this.playlistItem(this.model,this.model.get("playlistItem")),this.model.on("change:logoWidth",this.update,this),this.model.on("change:dock",this.update,this)
                },
                update:function(e){
                    var n={
                        paddingLeft:0,
                        paddingRight:0
                    },i=e.get("controls"),o=e.get("dock"),r=e.get("logo");
                    if(r){
                        var a=1*(""+r.margin).replace("px",""),s=e.get("logoWidth")+(isNaN(a)?0:a);
                        "top-left"===r.position?n.paddingLeft=s:"top-right"===r.position&&(n.paddingRight=s)
                    }
                    if(i&&o&&o.length){
                        var l=56*o.length;
                        n.paddingRight=Math.max(n.paddingRight,l)
                    }
                    t.style(this.el,n)
                },
                playlistItem:function(e,t){
                    if(e.get("displaytitle")||e.get("displaydescription")){
                        var n="",i="";
                        t.title&&e.get("displaytitle")&&(n=t.title),t.description&&e.get("displaydescription")&&(i=t.description),this.updateText(n,i)
                    }else this.hide()
                },
                updateText:function(e,t){
                    this.title.innerHTML=e,this.description.innerHTML=t,this.title.firstChild||this.description.firstChild?this.show():this.hide()
                },
                element:function(){
                    return this.el
                }
            }),n
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(4),n(3),n(28),n(5),n(184),n(185),n(194),n(195),n(197),n(193),n(198),n(216),n(200),n(1),n(136)],o=function(e,t,i,o,r,a,s,l,c,u,d,p,h,f,g,m){
            var v=e.style,w=e.bounds,y=e.isMobile(),j=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],b=function(b,E){
                function k(t){
                    var n=0,i=E.get("duration"),r=E.get("position");
                    "DVR"===e.adaptiveType(i)&&(n=i,i=Math.max(r,o.dvrSeekLimit));
                    var a=e.between(r+t,n,i);
                    b.seek(a)
                }
                function L(t){
                    var n=e.between(E.get("volume")+t,0,100);
                    b.setVolume(n)
                }
                function _(e){
                    return!e.ctrlKey&&!e.metaKey&&!!E.get("controls")
                }
                function A(e){
                    if(!_(e))return!0;
                    switch(Ne||oe(),e.keyCode){
                        case 27:
                            b.setFullscreen(!1);
                            break;
                        case 13:case 32:
                            b.play({
                                reason:"interaction"
                            });
                            break;
                        case 37:
                            Ne||k(-5);
                            break;
                        case 39:
                            Ne||k(5);
                            break;
                        case 38:
                            L(10);
                            break;
                        case 40:
                            L(-10);
                            break;
                        case 67:
                            var t=b.getCaptionsList(),n=t.length;
                            if(n){
                                var i=(b.getCurrentCaptions()+1)%n;
                                b.setCurrentCaptions(i)
                            }
                            break;
                        case 77:
                            b.setMute();
                            break;
                        case 70:
                            b.setFullscreen();
                            break;
                        default:
                            if(e.keyCode>=48&&e.keyCode<=59){
                                var o=e.keyCode-48,r=o/10*E.get("duration");
                                b.seek(r)
                            }
                    }
                    return/13|32|37|38|39|40/.test(e.keyCode)?(e.preventDefault(),!1):void 0
                }
                function C(){
                    ze=!1,e.removeClass(fe,"jw-no-focus")
                }
                function x(e){
                    e.target&&e.target.blur&&e.target.blur()
                }
                function P(){
                    ze=!0,e.addClass(fe,"jw-no-focus")
                }
                function T(){
                    ze||C(),Ne||oe()
                }
                function R(){
                    var e=w(fe),n=Math.round(e.width),i=Math.round(e.height);
                    Ve(Fe),n&&i&&(n!==ve||i!==we)&&(ve=n,we=i,clearTimeout(We),We=setTimeout(Z,50),E.set("containerWidth",n),E.set("containerHeight",i),He.trigger(t.JWPLAYER_RESIZE,{
                        width:n,
                        height:i
                    }))
                }
                function I(){
                    document.body.contains(fe)?(Ve(Fe),Fe=Je(R)):(window.removeEventListener("resize",I),y&&window.removeEventListener("orientationchange",I))
                }
                function M(t,n,i){
                    var o={
                        color:t,
                        borderColor:t,
                        stroke:t
                    },r={
                        color:n,
                        borderColor:n,
                        stroke:n
                    };
            
                    e.css("#"+i+" .jw-color-active",o,i),e.css("#"+i+" .jw-color-active-hover:hover",o,i),e.css("#"+i+" .jw-color-inactive",r,i),e.css("#"+i+" .jw-color-inactive-hover:hover",r,i)
                }
                function S(t,n){
                    n=n||!1,e.toggleClass(fe,"jw-flag-casting",n)
                }
                function O(t,n){
                    e.toggleClass(fe,"jw-flag-cast-available",n),e.toggleClass(ge,"jw-flag-cast-available",n)
                }
                function D(t,n){
                    e.replaceClass(fe,/jw-stretch-\S+/,"jw-stretch-"+n)
                }
                function N(t,n){
                    /*e.toggleClass(fe,"jw-flag-compact-player",n)*/
                }
                function Y(e){
                    e&&!y&&(e.element().addEventListener("mousemove",J,!1),e.element().addEventListener("mouseout",V,!1))
                }
                function W(){
                    E.get("state")!==r.IDLE&&E.get("state")!==r.COMPLETE&&E.get("state")!==r.PAUSED||!E.get("controls")||b.play({
                        reason:"interaction"
                    }),Ye?ie():oe()
                }
                function F(e){
                    e.link?(b.pause(!0),b.setFullscreen(!1),window.open(e.link,e.linktarget)):E.get("controls")&&b.play({
                        reason:"interaction"
                    })
                }
                function J(){
                    clearTimeout(Se)
                }
                function V(){
                    oe()
                }
                function B(e){
                    He.trigger(e.type,e)
                }
                function U(t,n){
                    n?(Pe&&Pe.destroy(),e.addClass(fe,"jw-flag-flash-blocked")):(Pe&&Pe.setup(E,fe,fe),e.removeClass(fe,"jw-flag-flash-blocked"))
                }
                function z(){
                    E.get("controls")&&b.setFullscreen()
                }
                function H(){
                    var n=fe.getElementsByClassName("jw-overlays")[0];
                    n.addEventListener("mousemove",oe),Ee=new s(E,me,{
                        useHover:!0
                    }),Ee.on("click",function(){
                        B({
                            type:t.JWPLAYER_DISPLAY_CLICK
                        }),E.get("controls")&&b.play({
                            reason:"interaction"
                        })
                    }),Ee.on("tap",function(){
                        B({
                            type:t.JWPLAYER_DISPLAY_CLICK
                        }),W()
                    }),Ee.on("doubleClick",z),Ee.on("move",oe),Ee.on("over",oe);
                    var i=new l(E);
                    i.on("click",function(){
                        B({
                            type:t.JWPLAYER_DISPLAY_CLICK
                        }),b.play({
                            reason:"interaction"
                        })
                    }),i.on("tap",function(){
                        B({
                            type:t.JWPLAYER_DISPLAY_CLICK
                        }),W()
                    }),e.isChrome()&&i.el.addEventListener("mousedown",function(){
                        var e=E.getVideo(),t=e&&0===e.getName().name.indexOf("flash");
                        if(t){
                            var n=function(){
                                document.removeEventListener("mouseup",n),i.el.style.pointerEvents="auto"
                            };
                        
                            this.style.pointerEvents="none",document.addEventListener("mouseup",n)
                        }
                    }),ge.appendChild(i.element()),Le=new c(E),_e=new u(E),_e.on(t.JWPLAYER_LOGO_CLICK,F);
                    var o=document.createElement("div");
                    o.className="jw-controls-right jw-reset",_e.setup(o),o.appendChild(Le.element()),ge.appendChild(o),Ce=new a(E),Ce.setup(fe.id,E.get("captions")),ge.parentNode.insertBefore(Ce.element(),Ae.element());
                    var r=E.get("height");
                    y&&("string"==typeof r||r>=1.5*De)?e.addClass(fe,"jw-flag-touch"):(Pe=new h,Pe.setup(E,fe,fe)),je=new d(b,E),je.on(t.JWPLAYER_USER_ACTION,oe),E.on("change:scrubbing",K),E.on("change:compactUI",N),ge.appendChild(je.element()),fe.addEventListener("focus",T),fe.addEventListener("blur",C),fe.addEventListener("keydown",A),fe.onmousedown=P,fe.onmouseup=x
                }
                function G(t){
                    return t.get("state")===r.PAUSED?void t.once("change:state",G):void(t.get("scrubbing")===!1&&e.removeClass(fe,"jw-flag-dragging"))
                }
                function K(t,n){
                    t.off("change:state",G),n?e.addClass(fe,"jw-flag-dragging"):G(t)
                }
                function Q(t,n,i){
                    var o,r=fe.className;
                    i=!!i,i&&(r=r.replace(/\s*aspectMode/,""),fe.className!==r&&(fe.className=r),v(fe,{
                        display:"block"
                    },i)),e.exists(t)&&e.exists(n)&&(E.set("width",t),E.set("height",n)),o={
                        width:t
                    },e.hasClass(fe,"jw-flag-aspect-mode")||(o.height=n),E.get("aspectratio")&&he(),v(fe,o,!0),X(n),Z(t,n)
                }
                function X(t){
                    if(xe=q(t),je&&!xe){
                        var n=Ne?ye:E;
                        pe(n,n.get("state"))
                    }
                    e.toggleClass(fe,"jw-flag-audio-player",xe)
                }
                function q(e){
                    if(E.get("aspectratio"))return!1;
                    if(g.isString(e)&&e.indexOf("%")>-1)return!1;
                    var t=g.isNumber(e)?e:E.get("containerHeight");
                    return $(t)
                }
                function $(e){
                    return e&&e<=De*(y?1.75:1)
                }
                function Z(t,n){
                    if(!t||isNaN(Number(t))){
                        if(!me)return;
                        t=me.clientWidth
                    }
                    if(!n||isNaN(Number(n))){
                        if(!me)return;
                        n=me.clientHeight
                    }
                    be&&be.resize(t,n,E.get("stretching")),e.isMSIE(9)&&document.all&&!window.atob&&(t=n="100%");
                    var i=E.getVideo();
                    if(i){
                        var o=i.resize(t,n,E.get("stretching"));
                        o&&(clearTimeout(We),We=setTimeout(Z,250)),E.get("aspectratio")&&he(),Ce.resize(),je.checkCompactMode(t)
                    }
                }
                function ee(){
                    if(Ue){
                        var e=document.fullscreenElement||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.msFullscreenElement;
                        return!(!e||e.id!==E.get("id"))
                    }
                    return Ne?ye.getVideo().getFullScreen():E.getVideo().getFullScreen()
                }
                function te(e){
                    var t=E.get("fullscreen"),n=void 0!==e.jwstate?e.jwstate:ee();
                    t!==n&&E.set("fullscreen",n),clearTimeout(We),We=setTimeout(Z,200)
                }
                function ne(t,n){
                    n?(e.addClass(t,"jw-flag-fullscreen"),v(document.body,{
                        "overflow-y":"hidden"
                    }),oe()):(e.removeClass(t,"jw-flag-fullscreen"),v(document.body,{
                        "overflow-y":""
                    })),Z()
                }
                function ie(){
                    Ye=!1,clearTimeout(Se),je.hideComponents(),e.addClass(fe,"jw-flag-user-inactive"),Ce.renderCues(!0)
                }
                function oe(){
                    Ye||(e.removeClass(fe,"jw-flag-user-inactive"),je.checkCompactMode(me.clientWidth),Ce.renderCues(!0)),Ye=!0,clearTimeout(Se),Se=setTimeout(ie,Oe)
                }
                function re(){
                    b.setFullscreen(!1)
                }
                function ae(){
                    ke&&ke.setState(E.get("state")),se(E,E.mediaModel.get("mediaType")),E.mediaModel.on("change:mediaType",se,this)
                }
                function se(t,n){
                    var i="audio"===n,o=E.getVideo(),r=o&&0===o.getName().name.indexOf("flash");
                    e.toggleClass(fe,"jw-flag-media-audio",i),i&&!r?fe.insertBefore(be.el,me):fe.insertBefore(be.el,Ce.element())
                }
                function le(t,n){
                    var i="LIVE"===e.adaptiveType(n);
                    e.toggleClass(fe,"jw-flag-live",i),He.setAltText(i?t.get("localization").liveBroadcast:"")
                }
                function ce(e,t){
                    return t?void(t.name?Ae.updateText(t.name,t.message):Ae.updateText(t.message,"")):void Ae.playlistItem(e,e.get("playlistItem"))
                }
                function ue(){
                    var e=E.getVideo();
                    return!!e&&e.isCaster
                }
                function de(){
                    e.replaceClass(fe,/jw-state-\S+/,"jw-state-"+Te)
                }
                function pe(t,n){
                    if(Te=n,clearTimeout(Be),n===r.COMPLETE||n===r.IDLE?Be=setTimeout(de,100):de(),ue())return void e.addClass(me,"jw-media-show");
                    switch(n){
                        case r.PLAYING:
                            Z();
                            break;
                        case r.PAUSED:
                            oe()
                    }
                }
                function he(){
                    var e=fe.getElementsByClassName("jw-aspect")[0];
                    Ce.setContainerHeight(e.offsetHeight)
                }
                var fe,ge,me,ve,we,ye,je,be,Ee,ke,Le,_e,Ae,Ce,xe,Pe,Te,Re,Ie,Me,Se=-1,Oe=y?4e3:2e3,De=40,Ne=!1,Ye=!1,We=-1,Fe=-1,Je=window.requestAnimationFrame||function(e){
                    return window.setTimeout(e,17)
                },Ve=window.cancelAnimationFrame||window.clearTimeout,Be=-1,Ue=!1,ze=!1,He=g.extend(this,i);
                window.webpackJsonpjwplayer&&n(203),this.model=E,this.api=b,fe=e.createElement(m({
                    id:E.get("id")
                })),e.isIE()&&e.addClass(fe,"jw-ie");
                var Ge=E.get("width"),Ke=E.get("height");
                v(fe,{
                    width:Ge.toString().indexOf("%")>0?Ge:Ge+"px",
                    height:Ke.toString().indexOf("%")>0?Ke:Ke+"px"
                }),Ie=fe.requestFullscreen||fe.webkitRequestFullscreen||fe.webkitRequestFullScreen||fe.mozRequestFullScreen||fe.msRequestFullscreen,Me=document.exitFullscreen||document.webkitExitFullscreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen,Ue=Ie&&Me,this.onChangeSkin=function(t,n){
                    e.replaceClass(fe,/jw-skin-\S+/,n?"jw-skin-"+n:"")
                },this.handleColorOverrides=function(){
                    function t(t,i,o){
                        if(o){
                            t=e.prefix(t,"#"+n+" ");
                            var r={};
            
                            r[i]=o,e.css(t.join(", "),r,n)
                        }
                    }
                    var n=E.get("id"),i=E.get("skinColorActive"),o=E.get("skinColorInactive"),r=E.get("skinColorBackground");
                    t([".jw-toggle",".jw-button-color:hover"],"color",i),t([".jw-active-option",".jw-progress",".jw-playlist-container .jw-option.jw-active-option",".jw-playlist-container .jw-option:hover"],"background",i),t([".jw-text",".jw-option",".jw-button-color",".jw-toggle.jw-off",".jw-tooltip-title",".jw-skip .jw-skip-icon",".jw-playlist-container .jw-icon"],"color",o),t([".jw-cue",".jw-knob"],"background",o),t([".jw-playlist-container .jw-option"],"border-bottom-color",o),t([".jw-background-color",".jw-tooltip-title",".jw-playlist",".jw-playlist-container .jw-option"],"background",r),t([".jw-playlist-container ::-webkit-scrollbar"],"border-color",r),M(i,o,n)
                },this.setup=function(){
                    this.handleColorOverrides(),E.get("skin-loading")===!0&&(e.addClass(fe,"jw-flag-skin-loading"),E.once("change:skin-loading",function(){
                        e.removeClass(fe,"jw-flag-skin-loading")
                    })),this.onChangeSkin(E,E.get("skin"),""),E.on("change:skin",this.onChangeSkin,this),me=fe.getElementsByClassName("jw-media")[0],ge=fe.getElementsByClassName("jw-controls")[0];
                    var n=fe.getElementsByClassName("jw-preview")[0];
                    be=new p(E),be.setup(n);
                    var i=fe.getElementsByClassName("jw-title")[0];
                    Ae=new f(E),Ae.setup(i),H(),oe(),E.set("mediaContainer",me),E.mediaController.on("fullscreenchange",te);
                    for(var o=j.length;o--;)document.addEventListener(j[o],te,!1);
                    window.removeEventListener("resize",I),window.addEventListener("resize",I,!1),y&&(window.removeEventListener("orientationchange",I),window.addEventListener("orientationchange",I,!1)),E.on("change:errorEvent",ce),E.on("change:controls",Qe),Qe(E,E.get("controls")),E.on("change:state",pe),E.on("change:duration",le,this),E.on("change:flashBlocked",U),U(E,E.get("flashBlocked")),b.onPlaylistComplete(re),b.onPlaylistItem(ae),E.on("change:castAvailable",O),O(E,E.get("castAvailable")),E.on("change:castActive",S),S(E,E.get("castActive")),E.get("stretching")&&D(E,E.get("stretching")),E.on("change:stretching",D),pe(E,r.IDLE),E.on("change:fullscreen",Xe),Y(je),Y(_e);
                    var a=E.get("aspectratio");
                    if(a){
                        e.addClass(fe,"jw-flag-aspect-mode");
                        var s=fe.getElementsByClassName("jw-aspect")[0];
                        v(s,{
                            paddingTop:a
                        })
                    }
                    b.on(t.JWPLAYER_READY,function(){
                        R(),Q(E.get("width"),E.get("height"))
                    })
                };
    
                var Qe=function(t,n){
                    if(n){
                        var i=Ne?ye.get("state"):E.get("state");
                        pe(t,i)
                    }
                    e.toggleClass(fe,"jw-flag-controls-disabled",!n)
                },Xe=function(t,n){
                    var i=E.getVideo();
                    Ue?(n?Ie.apply(fe):Me.apply(document),ne(fe,n)):e.isIE()?ne(fe,n):(ye&&ye.getVideo()&&ye.getVideo().setFullscreen(n),i.setFullscreen(n)),i&&0===i.getName().name.indexOf("flash")&&i.setFullscreen(n)
                };
    
                this.resize=function(e,t){
                    var n=!0;
                    Q(e,t,n),R()
                },this.resizeMedia=Z,this.reset=function(){
                    document.contains(fe)&&fe.parentNode.replaceChild(Re,fe),e.emptyElement(fe)
                },this.setupInstream=function(t){
                    this.instreamModel=ye=t,ye.on("change:controls",Qe,this),ye.on("change:state",pe,this),Ne=!0,e.addClass(fe,"jw-flag-ads"),oe()
                },this.setAltText=function(e){
                    je.setAltText(e)
                },this.useExternalControls=function(){
                    e.addClass(fe,"jw-flag-ads-hide-controls")
                },this.destroyInstream=function(){
                    if(Ne=!1,ye&&(ye.off(null,null,this),ye=null),this.setAltText(""),e.removeClass(fe,"jw-flag-ads"),e.removeClass(fe,"jw-flag-ads-hide-controls"),E.getVideo){
                        var t=E.getVideo();
                        t.setContainer(me)
                    }
                    le(E,E.get("duration")),Ee.revertAlternateClickHandlers()
                },this.addCues=function(e){
                    je&&je.addCues(e)
                },this.clickHandler=function(){
                    return Ee
                },this.controlsContainer=function(){
                    return ge
                },this.getContainer=this.element=function(){
                    return fe
                },this.getSafeRegion=function(t){
                    var n={
                        x:0,
                        y:0,
                        width:E.get("containerWidth")||0,
                        height:E.get("containerHeight")||0
                    },i=E.get("dock");
                    return i&&i.length&&E.get("controls")&&(n.y=Le.element().clientHeight,n.height-=n.y),t=t||!e.exists(t),t&&E.get("controls")&&(n.height-=je.element().clientHeight),n
                },this.setCaptions=function(e){
                    Ce.clear(),Ce.setup(E.get("id"),e),Ce.resize()
                },this.destroy=function(){
                    window.removeEventListener("resize",I),window.removeEventListener("orientationchange",I);
                    for(var t=j.length;t--;)document.removeEventListener(j[t],te,!1);
                    E.mediaController&&E.mediaController.off("fullscreenchange",te),fe.removeEventListener("keydown",A,!1),Pe&&Pe.destroy(),ke&&(E.off("change:state",ke.statusDelegate),ke.destroy(),ke=null),Ne&&this.destroyInstream(),_e&&_e.destroy(),e.clearCss(E.get("id"))
                }
            };

            return b
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,function(e,t,n){
        var i=n(126);
        "string"==typeof i&&(i=[["all-players",i,""]]),n(84).style(i,"all-players"),i.locals&&(e.exports=i.locals)
    },,function(e,t,n){
        var i,o;
        i=[n(85),n(1),n(30),n(2),n(8),n(9),n(90),n(22),n(91),n(80),n(4),n(5),n(65),n(42),n(34),n(63),n(27)],o=function(e,t,n,i,o,r,a,s,l,c,u,d,p,h,f,g,m){
            var v={};
        
            return v.api=e,v._=t,v.version=n,v.utils=t.extend(i,o,{
                canCast:f.available,
                key:a,
                extend:t.extend,
                scriptloader:s,
                rssparser:g,
                tea:l,
                UI:r
            }),v.utils.css.style=v.utils.style,v.vid=c,v.events=t.extend({},u,{
                state:d
            }),v.playlist=t.extend({},p,{
                item:h
            }),v.plugins=m,v.cast=f,v
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,,,,function(e,t,n){
        var i,o;
        i=[n(163),n(23),n(214)],o=function(e,t,i){
            var o=e.prototype.setup;
            return e.prototype.setup=function(e,r){
                e.analytics&&(e.sdkplatform=e.sdkplatform||e.analytics.sdkplatform),o.apply(this,arguments);
                var a=this._model.get("edition"),s=t(a),l=this._model.get("cast"),c=this;
                s("casting")&&l&&l.appid&&n.e(3,function(require){
                    var e=n(86);
                    c._castController=new e(c,c._model),c.castToggle=c._castController.castToggle.bind(c._castController)
                });
                var u=i.setup();
                this.once("ready",u.onReady,this),r.getAdBlock=u.checkAdBlock
            },e
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(90),n(23),n(1),n(2),n(78),n(168),n(47)],o=function(e,t,i,o,r,a,s){
            function l(e,t,n){
                if(t){
                    var i=t.client;
                    delete t.client,/\.(js|swf)$/.test(i||"")||(i=r.repo()+n),e[i]=t
                }
            }
            function c(e,n){
                var o=i.clone(n.get("plugins"))||{},a=n.get("edition"),s=t(a),c=/^(vast|googima)$/,u=/\.(js|swf)$/,d=r.repo(),p=i.clone(n.get("advertising"));
                if(s("ads")&&p&&(u.test(p.client)?o[p.client]=p:c.test(p.client)&&(o[d+p.client+".js"]=p),delete p.client),s("jwpsrv")){
                    var h=n.get("analytics");
                    i.isObject(h)||(h={}),l(o,h,"jwpsrv.js")
                }
                l(o,n.get("ga"),"gapro.js"),l(o,n.get("sharing"),"sharing.js"),l(o,n.get("related"),"related.js"),n.set("plugins",o),e()
            }
            function u(t,i){
                var s=i.get("key")||window.jwplayer&&window.jwplayer.key,l=new e(s),c=l.edition();
                if(i.set("key",s),i.set("edition",c),"unlimited"===c){
                    var u=o.getScriptPath("jwplayer.js");
                    if(!u)return void a.error(t,"Error setting up player","Could not locate jwplayer.js script tag");
                    n.p=u,o.repo=r.repo=r.loadFrom=function(){
                        return u
                    }
                }
                i.updateProviders(),"invalid"===c?a.error(t,"Error setting up player",(void 0===s?"Missing":"Invalid")+" license key"):t()
            }
            function d(e,t){
                s.containsDrm(t)?s.probe(e,t.get("edition")):e()
            }
            function p(){
                var e=a.getQueue();
                return e.CHECK_KEY={
                    method:u,
                    depends:["LOADED_POLYFILLS"]
                },e.PROBE_DRM_SUPPORT={
                    method:d,
                    depends:["CHECK_KEY"]
                },e.FILTER_PLUGINS={
                    method:c,
                    depends:["CHECK_KEY"]
                },e.FILTER_PLAYLIST.depends.push("PROBE_DRM_SUPPORT"),e.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"),e.SETUP_VIEW.depends.push("CHECK_KEY"),e
            }
            return{
                getQueue:p
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(170),n(205),n(1)],o=function(e,t,n){
            return window.jwplayer?window.jwplayer:n.extend(e,t)
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },,function(e,t,n){
        var i,o;
        i=[],o=function(){
            function e(){
                var e=document.createElement("div");
                return e.className=n,e.innerHTML="&nbsp;",e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.background="transparent",e
            }
            function t(){
                function t(){
                    var e=this,t=e._view.element();
                    t.appendChild(a),o=!0,i()&&e.trigger("adBlock")
                }
                function i(){
                    return!!o&&(!!r||(""!==a.innerHTML&&a.className===n&&null!==a.offsetParent&&0!==a.clientHeight||(r=!0),r))
                }
                var o=!1,r=!1,a=e();
                return{
                    onReady:t,
                    checkAdBlock:i
                }
            }
            var n="afs_ads";
            return{
                setup:t
            }
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(2),n(4),n(9),n(3),n(1),n(130)],o=function(e,t,n,i,o,r){
            var a=function(e){
                this.model=e,this.setup()
            };
            
            return o.extend(a.prototype,i,{
                setup:function(){
                    this.destroy(),this.skipMessage=this.model.get("skipText"),this.skipMessageCountdown=this.model.get("skipMessage"),this.setWaitTime(this.model.get("skipOffset"));
                    var t=r();
                    this.el=e.createElement(t),this.skiptext=this.el.getElementsByClassName("jw-skiptext")[0],this.skipAdOnce=o.once(this.skipAd.bind(this)),new n(this.el).on("click tap",o.bind(function(){
                        this.skippable&&this.skipAdOnce()
                    },this)),this.model.on("change:duration",this.onChangeDuration,this),this.model.on("change:position",this.onChangePosition,this),this.onChangeDuration(this.model,this.model.get("duration")),this.onChangePosition(this.model,this.model.get("position"))
                },
                updateMessage:function(e){
                    this.skiptext.innerHTML=e
                },
                updateCountdown:function(e){
                    this.updateMessage(this.skipMessageCountdown.replace(/xx/gi,Math.ceil(this.waitTime-e)))
                },
                onChangeDuration:function(t,n){
                    if(n){
                        if(this.waitPercentage){
                            if(!n)return;
                            this.itemDuration=n,this.setWaitTime(this.waitPercentage),delete this.waitPercentage
                        }
                        e.removeClass(this.el,"jw-hidden")
                    }
                },
                onChangePosition:function(t,n){
                    this.waitTime-n>0?this.updateCountdown(n):(this.updateMessage(this.skipMessage),this.skippable=!0,e.addClass(this.el,"jw-skippable"))
                },
                element:function(){
                    return this.el
                },
                setWaitTime:function(t){
                    if(o.isString(t)&&"%"===t.slice(-1)){
                        var n=parseFloat(t);
                        return void(this.itemDuration&&!isNaN(n)?this.waitTime=this.itemDuration*n/100:this.waitPercentage=t)
                    }
                    o.isNumber(t)?this.waitTime=t:"string"===e.typeOf(t)?this.waitTime=e.seconds(t):isNaN(Number(t))?this.waitTime=0:this.waitTime=Number(t)
                },
                skipAd:function(){
                    this.trigger(t.JWPLAYER_AD_SKIPPED)
                },
                destroy:function(){
                    this.el&&(this.el.removeEventListener("click",this.skipAdOnce),this.el.parentElement&&this.el.parentElement.removeChild(this.el)),delete this.skippable,delete this.itemDuration,delete this.waitPercentage
                }
            }),a
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    },function(e,t,n){
        var i,o;
        i=[n(199),n(1)],o=function(e,t){
            var n=function(){};
        
            return t.extend(n.prototype,e.prototype,{
                buildArray:function(){
                    var t=e.prototype.buildArray.apply(this,arguments);
                    if(this.model.get("abouttext")){
                        t.items[0].showLogo=!1,t.items.push(t.items.shift());
                        var n={
                            title:this.model.get("abouttext"),
                            link:this.model.get("aboutlink")||t.items[0].link
                        };
                        
                        t.items.unshift(n)
                    }
                    return t
                }
            }),n
        }.apply(t,i),!(void 0!==o&&(e.exports=o))
    }])
});