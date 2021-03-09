
shadow.cljs.devtools.client.env.module_loaded('main');

try { spacepanda.app.init(); } catch (e) { console.error("An error occurred when calling (spacepanda.app/init)"); throw(e); }