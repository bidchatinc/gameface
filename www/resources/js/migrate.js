if(navigator.userAgent.indexOf("PhantomJS")>=0){jQuery.migrateMute=true}function expectWarning(a,c,b){if(!b){b=c;c=null}jQuery.migrateReset();b();if(c===0){deepEqual(jQuery.migrateWarnings,[],a+": did not warn")}else{if(c&&jQuery.migrateWarnings.length===c){equal(jQuery.migrateWarnings.length,c,a+": warned")}else{if(!c&&jQuery.migrateWarnings.length){ok(true,a+": warned")}else{deepEqual(jQuery.migrateWarnings,"<warnings: "+(c||"1+")+">",a+": warned")}}}}function expectNoWarning(a,c,b){return expectWarning(a,0,b||c)};