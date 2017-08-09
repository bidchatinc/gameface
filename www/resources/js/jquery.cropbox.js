(function(){function e(){return"ontouchstart" in window||"onmsgesturechange" in window}function d(g,h,f){if(g+h<f){g=f-h}return g>0?0:g}function b(g){var j=g.split(",");var m=atob(j[1]);var f=j[0].split(":")[1].split(";")[0];var l=new ArrayBuffer(m.length);var h=new Uint8Array(l);for(var k=0;k<m.length;k++){h[k]=m.charCodeAt(k)}return new Blob([l],{type:f})}var c="cropbox";function a(g){function f(i,h){this.width=null;this.height=null;this.img_width=null;this.img_height=null;this.img_left=0;this.img_top=0;this.minPercent=null;this.options=h;this.$image=i;this.$image.hide().prop("draggable",false).addClass("cropImage").wrap('<div class="cropFrame" />');this.$frame=this.$image.parent();this.init()}f.prototype={init:function(){var i=this;var h=g("<div/>",{"class":"cropControls"}).append(g("<span>Drag to crop</span>")).append(g("<a/>",{"class":"cropZoomIn"}).on("click",g.proxy(this.zoomIn,this))).append(g("<a/>",{"class":"cropZoomOut"}).on("click",g.proxy(this.zoomOut,this)));this.$frame.append(this.options.controls||h);this.updateOptions();if(typeof g.fn.hammer==="function"||typeof Hammer!=="undefined"){var j,k;if(typeof g.fn.hammer==="function"){j=this.$image.hammer()}else{j=Hammer(this.$image.get(0))}j.on("touch",function(l){l.gesture.preventDefault()}).on("dragleft dragright dragup dragdown",function(l){if(!k){k={startX:i.img_left,startY:i.img_top,}}k.dx=l.gesture.deltaX;k.dy=l.gesture.deltaY;l.gesture.preventDefault();l.gesture.stopPropagation();i.drag.call(i,k,true)}).on("release",function(l){l.gesture.preventDefault();k=null;i.update.call(i)}).on("doubletap",function(l){l.gesture.preventDefault();i.zoomIn.call(i)}).on("pinchin",function(l){l.gesture.preventDefault();i.zoomOut.call(i)}).on("pinchout",function(l){l.gesture.preventDefault();i.zoomIn.call(i)})}else{this.$image.on("mousedown."+c,function(m){var l={startX:i.img_left,startY:i.img_top,};m.preventDefault();g(document).on("mousemove."+c,function(n){l.dx=n.pageX-m.pageX;l.dy=n.pageY-m.pageY;i.drag.call(i,l,true)}).on("mouseup."+c,function(){i.update.call(i);g(document).off("mouseup."+c);g(document).off("mousemove."+c)})})}if(g.fn.mousewheel){this.$image.on("mousewheel."+c,function(l){l.preventDefault();if(l.deltaY<0){i.zoomIn.call(i)}else{i.zoomOut.call(i)}})}},updateOptions:function(){var i=this;i.img_top=0;i.img_left=0;i.$image.css({width:"",left:i.img_left,top:i.img_top});i.$frame.width(i.options.width).height(i.options.height);i.$frame.off("."+c);i.$frame.removeClass("hover");if(i.options.showControls==="always"||i.options.showControls==="auto"&&e()){i.$frame.addClass("hover")}else{if(i.options.showControls!=="never"){i.$frame.on("mouseenter."+c,function(){i.$frame.addClass("hover")});i.$frame.on("mouseleave."+c,function(){i.$frame.removeClass("hover")})}}var h=new Image();h.src=i.$image.attr("src");h.onload=function(){i.width=h.width;i.height=h.height;h.src="";h.onload=null;i.percent=undefined;i.fit.call(i);if(i.options.result){i.setCrop.call(i,i.options.result)}else{i.zoom.call(i,i.minPercent)}i.$image.fadeIn("fast")}},remove:function(){var h;if(typeof g.fn.hammer==="function"){h=this.$image.hammer()}else{if(typeof Hammer!=="undefined"){h=Hammer(this.$image.get(0))}}if(h){h.off("mousedown dragleft dragright dragup dragdown release doubletap pinchin pinchout")}this.$frame.off("."+c);this.$image.off("."+c);this.$image.css({width:"",left:"",top:""});this.$image.removeClass("cropImage");this.$image.removeData("cropbox");this.$image.insertAfter(this.$frame);this.$frame.removeClass("cropFrame");this.$frame.removeAttr("style");this.$frame.empty();this.$frame.hide()},fit:function(){var i=this.options.width/this.width,h=this.options.height/this.height;this.minPercent=(i>=h)?i:h},setCrop:function(h){this.percent=Math.max(this.options.width/h.cropW,this.options.height/h.cropH);this.img_width=Math.ceil(this.width*this.percent);this.img_height=Math.ceil(this.height*this.percent);this.img_left=-Math.floor(h.cropX*this.percent);this.img_top=-Math.floor(h.cropY*this.percent);this.$image.css({width:this.img_width,left:this.img_left,top:this.img_top});this.update()},zoom:function(i){var j=this.percent;this.percent=Math.max(this.minPercent,Math.min(this.options.maxZoom,i));this.img_width=Math.ceil(this.width*this.percent);this.img_height=Math.ceil(this.height*this.percent);if(j){var h=this.percent/j;this.img_left=d((1-h)*this.options.width/2+h*this.img_left,this.img_width,this.options.width);this.img_top=d((1-h)*this.options.height/2+h*this.img_top,this.img_height,this.options.height)}else{this.img_left=d((this.options.width-this.img_width)/2,this.img_width,this.options.width);this.img_top=d((this.options.height-this.img_height)/2,this.img_height,this.options.height)}this.$image.css({width:this.img_width,left:this.img_left,top:this.img_top});this.update()},zoomIn:function(){this.zoom(this.percent+(1-this.minPercent)/(this.options.zoom-1||1))},zoomOut:function(){this.zoom(this.percent-(1-this.minPercent)/(this.options.zoom-1||1))},drag:function(i,h){this.img_left=d(i.startX+i.dx,this.img_width,this.options.width);this.img_top=d(i.startY+i.dy,this.img_height,this.options.height);this.$image.css({left:this.img_left,top:this.img_top});if(h){this.update()}},update:function(){this.result={cropX:-Math.ceil(this.img_left/this.percent),cropY:-Math.ceil(this.img_top/this.percent),cropW:Math.floor(this.options.width/this.percent),cropH:Math.floor(this.options.height/this.percent),stretch:this.minPercent>1};this.$image.trigger(c,[this.result,this])},getDataURL:function(){var i=document.createElement("canvas"),h=i.getContext("2d");i.width=this.options.width;i.height=this.options.height;h.drawImage(this.$image.get(0),this.result.cropX,this.result.cropY,this.result.cropW,this.result.cropH,0,0,this.options.width,this.options.height);return i.toDataURL()},getBlob:function(){return b(this.getDataURL())},};g.fn[c]=function(h){return this.each(function(){var j=g.data(this,c);if(!j){var i=g.extend({},g.fn[c].defaultOptions,h);g.data(this,c,new f(g(this),i))}else{if(h){g.extend(j.options,h);j.updateOptions()}}})};g.fn[c].defaultOptions={width:200,height:200,zoom:10,maxZoom:1,controls:null,showControls:"auto"}}if(typeof require==="function"&&typeof exports==="object"&&typeof module==="object"){a(require("jquery"))}else{if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(window.jQuery||window.Zepto)}}})();