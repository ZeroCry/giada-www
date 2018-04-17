+function(c){var d=function(f,e){this.$element=c(f).on("keydown.bs.carousel",c.proxy(this.keydown,this));this.$indicators=this.$element.find(".carousel-indicators");this.options=e;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.pause=="hover"&&this.$element.on("mouseenter.bs.carousel",c.proxy(this.pause,this)).on("mouseleave.bs.carousel",c.proxy(this.cycle,this))};d.VERSION="3.2.0";d.DEFAULTS={interval:5000,pause:"hover",wrap:true};d.prototype.keydown=function(f){switch(f.which){case 37:this.prev();break;case 39:this.next();break;default:return}f.preventDefault()};d.prototype.cycle=function(f){f||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(c.proxy(this.next,this),this.options.interval));return this};d.prototype.getItemIndex=function(e){this.$items=e.parent().children(".item");return this.$items.index(e||this.$active)};d.prototype.to=function(g){var f=this;var e=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(g>(this.$items.length-1)||g<0){return}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){f.to(g)})}if(e==g){return this.pause().cycle()}return this.slide(g>e?"next":"prev",c(this.$items[g]))};d.prototype.pause=function(f){f||(this.paused=true);if(this.$element.find(".next, .prev").length&&c.support.transition){this.$element.trigger(c.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};d.prototype.next=function(){if(this.sliding){return}return this.slide("next")};d.prototype.prev=function(){if(this.sliding){return}return this.slide("prev")};d.prototype.slide=function(m,h){var p=this.$element.find(".item.active");var f=h||p[m]();var k=this.interval;var n=m=="next"?"left":"right";var i=m=="next"?"first":"last";var j=this;if(!f.length){if(!this.options.wrap){return}f=this.$element.find(".item")[i]()}if(f.hasClass("active")){return(this.sliding=false)}var l=f[0];var e=c.Event("slide.bs.carousel",{relatedTarget:l,direction:n});this.$element.trigger(e);if(e.isDefaultPrevented()){return}this.sliding=true;k&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");var g=c(this.$indicators.children()[this.getItemIndex(f)]);g&&g.addClass("active")}var o=c.Event("slid.bs.carousel",{relatedTarget:l,direction:n});if(c.support.transition&&this.$element.hasClass("slide")){f.addClass(m);f[0].offsetWidth;p.addClass(n);f.addClass(n);p.one("bsTransitionEnd",function(){f.removeClass([m,n].join(" ")).addClass("active");p.removeClass(["active",n].join(" "));j.sliding=false;setTimeout(function(){j.$element.trigger(o)},0)}).emulateTransitionEnd(p.css("transition-duration").slice(0,-1)*1000)}else{p.removeClass("active");f.addClass("active");this.sliding=false;this.$element.trigger(o)}k&&this.cycle();return this};function b(e){return this.each(function(){var i=c(this);var h=i.data("bs.carousel");var f=c.extend({},d.DEFAULTS,i.data(),typeof e=="object"&&e);var g=typeof e=="string"?e:f.slide;if(!h){i.data("bs.carousel",(h=new d(this,f)))}if(typeof e=="number"){h.to(e)}else{if(g){h[g]()}else{if(f.interval){h.pause().cycle()}}}})}var a=c.fn.carousel;c.fn.carousel=b;c.fn.carousel.Constructor=d;c.fn.carousel.noConflict=function(){c.fn.carousel=a;return this};c(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(k){var g;var j=c(this);var f=c(j.attr("data-target")||(g=j.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,""));if(!f.hasClass("carousel")){return}var h=c.extend({},f.data(),j.data());var i=j.attr("data-slide-to");if(i){h.interval=false}b.call(f,h);if(i){f.data("bs.carousel").to(i)}k.preventDefault()});c(window).on("load",function(){c('[data-ride="carousel"]').each(function(){var e=c(this);b.call(e,e.data())})})}(jQuery);