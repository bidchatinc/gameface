Ext.define("Ext.plugin.ListPagingSeeMore",{override:"Ext.plugin.ListPaging",init:function(c){var a=false;if(c.getScrollable()){a=c.getScrollable().getScroller()}var b=c.getStore();this.setList(c);if(a){this.setScroller(a)}this.bindStore(c.getStore());c.updateStore=Ext.Function.createInterceptor(c.updateStore,this.bindStore,this);if(a){if(this.getAutoPaging()){a.on({scrollend:this.onScrollEnd,scope:this})}}this.addLoadMoreCmp()},onStoreLoad:function(a){var d=this.getLoadMoreCmp(),b=this.getLoadTpl(),c=this.storeFullyLoaded()?this.getNoMoreRecordsText():this.getLoadMoreText();if(a.getCount()&&!this.storeFullyLoaded()&&typeof a.totalCount!="undefined"){d.show()}else{d.hide()}this.setLoading(false);d.setHtml(b.apply({cssPrefix:Ext.baseCSSPrefix,message:c}));if(this.currentScrollToTopOnRefresh!==undefined){this.getList().setScrollToTopOnRefresh(this.currentScrollToTopOnRefresh);delete this.currentScrollToTopOnRefresh}this.enableDataViewMask()},storeFullyLoaded:function(){var a=this.getList().getStore(),b=a.getTotalCount();return b!==null?a.getTotalCount()<=(a.currentPage*a.getPageSize()):false},bindStore:function(a,b){if(b){b.un({beforeload:this.onStoreBeforeLoad,load:this.onStoreLoad,addrecords:this.onStoreLoad,filter:this.onFilter,scope:this})}if(a){a.on({beforeload:this.onStoreBeforeLoad,load:this.onStoreLoad,addrecords:this.onStoreLoad,filter:this.onFilter,scope:this})}}});Ext.define("Ext.ulti.PositionMap",{override:"Ext.util.PositionMap",config:{minimumHeight:0}});