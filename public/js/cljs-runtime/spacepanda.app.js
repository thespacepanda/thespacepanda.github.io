goog.provide('spacepanda.app');
spacepanda.app.label = rum.core.lazy_build(rum.core.build_defc,(function (text){
return daiquiri.core.create_element("div",{'className':"label"},[daiquiri.interpreter.interpret(text)]);
}),null,"spacepanda.app/label");
spacepanda.app.card = rum.core.lazy_build(rum.core.build_defc,(function (content){
var attrs27289 = content;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs27289))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["py-8","px-8","max-w-sm","mx-auto","bg-white","rounded-xl","shadow-md","space-y-2"], null)], null),attrs27289], 0))):{'className':"py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2"}),((cljs.core.map_QMARK_(attrs27289))?null:[daiquiri.interpreter.interpret(attrs27289)]));
}),null,"spacepanda.app/card");
spacepanda.app.avatar = rum.core.lazy_build(rum.core.build_defc,(function (alt){
return daiquiri.core.create_element("img",{'src':"/avatar.jpg",'alt':alt,'className':"block rounded-full max-h-48"},[]);
}),null,"spacepanda.app/avatar");
spacepanda.app.page = rum.core.lazy_build(rum.core.build_defc,(function (content){
return daiquiri.core.create_element("div",{'className':"flex flex-col space-y-2 min-h-screen bg-blue-300"},[daiquiri.core.create_element("div",{'className':"flex items-center"},[spacepanda.app.avatar("Space Panda Avatar"),daiquiri.core.create_element("h1",{'style':{'fontFamily':"Pacifico"},'className':"text-6xl"},["Space Panda"])]),daiquiri.core.create_element("div",{'className':"flex justify-center space-x-2"},[daiquiri.core.create_element("p",null,["bio"]),daiquiri.core.create_element("p",null,["code"]),daiquiri.core.create_element("p",null,["resume"]),daiquiri.core.create_element("p",null,["music"]),daiquiri.core.create_element("p",null,["blog"])]),daiquiri.interpreter.interpret(content)]);
}),null,"spacepanda.app/page");
spacepanda.app.init = (function spacepanda$app$init(){
return rum.core.mount(spacepanda.app.page(spacepanda.app.card(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"This is a card."], null))),document.getElementById("root"));
});

//# sourceMappingURL=spacepanda.app.js.map
