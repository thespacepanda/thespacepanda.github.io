goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35699 = arguments.length;
var i__4737__auto___35700 = (0);
while(true){
if((i__4737__auto___35700 < len__4736__auto___35699)){
args__4742__auto__.push((arguments[i__4737__auto___35700]));

var G__35701 = (i__4737__auto___35700 + (1));
i__4737__auto___35700 = G__35701;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35547){
var G__35548 = cljs.core.first(seq35547);
var seq35547__$1 = cljs.core.next(seq35547);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35548,seq35547__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35549 = cljs.core.seq(sources);
var chunk__35550 = null;
var count__35551 = (0);
var i__35552 = (0);
while(true){
if((i__35552 < count__35551)){
var map__35562 = chunk__35550.cljs$core$IIndexed$_nth$arity$2(null,i__35552);
var map__35562__$1 = (((((!((map__35562 == null))))?(((((map__35562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35562):map__35562);
var src = map__35562__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35564){var e_35702 = e35564;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35702);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35702.message)].join('')));
}

var G__35703 = seq__35549;
var G__35704 = chunk__35550;
var G__35705 = count__35551;
var G__35706 = (i__35552 + (1));
seq__35549 = G__35703;
chunk__35550 = G__35704;
count__35551 = G__35705;
i__35552 = G__35706;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35549);
if(temp__5735__auto__){
var seq__35549__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35549__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35549__$1);
var G__35707 = cljs.core.chunk_rest(seq__35549__$1);
var G__35708 = c__4556__auto__;
var G__35709 = cljs.core.count(c__4556__auto__);
var G__35710 = (0);
seq__35549 = G__35707;
chunk__35550 = G__35708;
count__35551 = G__35709;
i__35552 = G__35710;
continue;
} else {
var map__35565 = cljs.core.first(seq__35549__$1);
var map__35565__$1 = (((((!((map__35565 == null))))?(((((map__35565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35565):map__35565);
var src = map__35565__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35568){var e_35711 = e35568;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35711);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35711.message)].join('')));
}

var G__35712 = cljs.core.next(seq__35549__$1);
var G__35713 = null;
var G__35714 = (0);
var G__35715 = (0);
seq__35549 = G__35712;
chunk__35550 = G__35713;
count__35551 = G__35714;
i__35552 = G__35715;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35570 = cljs.core.seq(js_requires);
var chunk__35571 = null;
var count__35572 = (0);
var i__35573 = (0);
while(true){
if((i__35573 < count__35572)){
var js_ns = chunk__35571.cljs$core$IIndexed$_nth$arity$2(null,i__35573);
var require_str_35716 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35716);


var G__35717 = seq__35570;
var G__35718 = chunk__35571;
var G__35719 = count__35572;
var G__35720 = (i__35573 + (1));
seq__35570 = G__35717;
chunk__35571 = G__35718;
count__35572 = G__35719;
i__35573 = G__35720;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35570);
if(temp__5735__auto__){
var seq__35570__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35570__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35570__$1);
var G__35721 = cljs.core.chunk_rest(seq__35570__$1);
var G__35722 = c__4556__auto__;
var G__35723 = cljs.core.count(c__4556__auto__);
var G__35724 = (0);
seq__35570 = G__35721;
chunk__35571 = G__35722;
count__35572 = G__35723;
i__35573 = G__35724;
continue;
} else {
var js_ns = cljs.core.first(seq__35570__$1);
var require_str_35725 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35725);


var G__35726 = cljs.core.next(seq__35570__$1);
var G__35727 = null;
var G__35728 = (0);
var G__35729 = (0);
seq__35570 = G__35726;
chunk__35571 = G__35727;
count__35572 = G__35728;
i__35573 = G__35729;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35575){
var map__35576 = p__35575;
var map__35576__$1 = (((((!((map__35576 == null))))?(((((map__35576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35576):map__35576);
var msg = map__35576__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35578(s__35579){
return (new cljs.core.LazySeq(null,(function (){
var s__35579__$1 = s__35579;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35579__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35584 = cljs.core.first(xs__6292__auto__);
var map__35584__$1 = (((((!((map__35584 == null))))?(((((map__35584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35584):map__35584);
var src = map__35584__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35584__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35579__$1,map__35584,map__35584__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35576,map__35576__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35578_$_iter__35580(s__35581){
return (new cljs.core.LazySeq(null,((function (s__35579__$1,map__35584,map__35584__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35576,map__35576__$1,msg,info,reload_info){
return (function (){
var s__35581__$1 = s__35581;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35581__$1);
if(temp__5735__auto____$1){
var s__35581__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35581__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35581__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35583 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35582 = (0);
while(true){
if((i__35582 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35582);
cljs.core.chunk_append(b__35583,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35730 = (i__35582 + (1));
i__35582 = G__35730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35583),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35578_$_iter__35580(cljs.core.chunk_rest(s__35581__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35583),null);
}
} else {
var warning = cljs.core.first(s__35581__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35578_$_iter__35580(cljs.core.rest(s__35581__$2)));
}
} else {
return null;
}
break;
}
});})(s__35579__$1,map__35584,map__35584__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35576,map__35576__$1,msg,info,reload_info))
,null,null));
});})(s__35579__$1,map__35584,map__35584__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35576,map__35576__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35578(cljs.core.rest(s__35579__$1)));
} else {
var G__35731 = cljs.core.rest(s__35579__$1);
s__35579__$1 = G__35731;
continue;
}
} else {
var G__35732 = cljs.core.rest(s__35579__$1);
s__35579__$1 = G__35732;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35586_35733 = cljs.core.seq(warnings);
var chunk__35587_35734 = null;
var count__35588_35735 = (0);
var i__35589_35736 = (0);
while(true){
if((i__35589_35736 < count__35588_35735)){
var map__35598_35737 = chunk__35587_35734.cljs$core$IIndexed$_nth$arity$2(null,i__35589_35736);
var map__35598_35738__$1 = (((((!((map__35598_35737 == null))))?(((((map__35598_35737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35598_35737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35598_35737):map__35598_35737);
var w_35739 = map__35598_35738__$1;
var msg_35740__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598_35738__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598_35738__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598_35738__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598_35738__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35743)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35741),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35742),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35740__$1)].join(''));


var G__35744 = seq__35586_35733;
var G__35745 = chunk__35587_35734;
var G__35746 = count__35588_35735;
var G__35747 = (i__35589_35736 + (1));
seq__35586_35733 = G__35744;
chunk__35587_35734 = G__35745;
count__35588_35735 = G__35746;
i__35589_35736 = G__35747;
continue;
} else {
var temp__5735__auto___35748 = cljs.core.seq(seq__35586_35733);
if(temp__5735__auto___35748){
var seq__35586_35749__$1 = temp__5735__auto___35748;
if(cljs.core.chunked_seq_QMARK_(seq__35586_35749__$1)){
var c__4556__auto___35750 = cljs.core.chunk_first(seq__35586_35749__$1);
var G__35751 = cljs.core.chunk_rest(seq__35586_35749__$1);
var G__35752 = c__4556__auto___35750;
var G__35753 = cljs.core.count(c__4556__auto___35750);
var G__35754 = (0);
seq__35586_35733 = G__35751;
chunk__35587_35734 = G__35752;
count__35588_35735 = G__35753;
i__35589_35736 = G__35754;
continue;
} else {
var map__35600_35755 = cljs.core.first(seq__35586_35749__$1);
var map__35600_35756__$1 = (((((!((map__35600_35755 == null))))?(((((map__35600_35755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35600_35755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35600_35755):map__35600_35755);
var w_35757 = map__35600_35756__$1;
var msg_35758__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600_35756__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600_35756__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600_35756__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600_35756__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35761)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35759),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35760),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35758__$1)].join(''));


var G__35762 = cljs.core.next(seq__35586_35749__$1);
var G__35763 = null;
var G__35764 = (0);
var G__35765 = (0);
seq__35586_35733 = G__35762;
chunk__35587_35734 = G__35763;
count__35588_35735 = G__35764;
i__35589_35736 = G__35765;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35574_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35574_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35602){
var map__35603 = p__35602;
var map__35603__$1 = (((((!((map__35603 == null))))?(((((map__35603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35603):map__35603);
var msg = map__35603__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35603__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35605 = cljs.core.seq(updates);
var chunk__35607 = null;
var count__35608 = (0);
var i__35609 = (0);
while(true){
if((i__35609 < count__35608)){
var path = chunk__35607.cljs$core$IIndexed$_nth$arity$2(null,i__35609);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35639_35766 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35643_35767 = null;
var count__35644_35768 = (0);
var i__35645_35769 = (0);
while(true){
if((i__35645_35769 < count__35644_35768)){
var node_35770 = chunk__35643_35767.cljs$core$IIndexed$_nth$arity$2(null,i__35645_35769);
if(cljs.core.not(node_35770.shadow$old)){
var path_match_35771 = shadow.cljs.devtools.client.browser.match_paths(node_35770.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35771)){
var new_link_35772 = (function (){var G__35651 = node_35770.cloneNode(true);
G__35651.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35771),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35651;
})();
(node_35770.shadow$old = true);

(new_link_35772.onload = ((function (seq__35639_35766,chunk__35643_35767,count__35644_35768,i__35645_35769,seq__35605,chunk__35607,count__35608,i__35609,new_link_35772,path_match_35771,node_35770,path,map__35603,map__35603__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35770);
});})(seq__35639_35766,chunk__35643_35767,count__35644_35768,i__35645_35769,seq__35605,chunk__35607,count__35608,i__35609,new_link_35772,path_match_35771,node_35770,path,map__35603,map__35603__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35771], 0));

goog.dom.insertSiblingAfter(new_link_35772,node_35770);


var G__35773 = seq__35639_35766;
var G__35774 = chunk__35643_35767;
var G__35775 = count__35644_35768;
var G__35776 = (i__35645_35769 + (1));
seq__35639_35766 = G__35773;
chunk__35643_35767 = G__35774;
count__35644_35768 = G__35775;
i__35645_35769 = G__35776;
continue;
} else {
var G__35777 = seq__35639_35766;
var G__35778 = chunk__35643_35767;
var G__35779 = count__35644_35768;
var G__35780 = (i__35645_35769 + (1));
seq__35639_35766 = G__35777;
chunk__35643_35767 = G__35778;
count__35644_35768 = G__35779;
i__35645_35769 = G__35780;
continue;
}
} else {
var G__35781 = seq__35639_35766;
var G__35782 = chunk__35643_35767;
var G__35783 = count__35644_35768;
var G__35784 = (i__35645_35769 + (1));
seq__35639_35766 = G__35781;
chunk__35643_35767 = G__35782;
count__35644_35768 = G__35783;
i__35645_35769 = G__35784;
continue;
}
} else {
var temp__5735__auto___35785 = cljs.core.seq(seq__35639_35766);
if(temp__5735__auto___35785){
var seq__35639_35786__$1 = temp__5735__auto___35785;
if(cljs.core.chunked_seq_QMARK_(seq__35639_35786__$1)){
var c__4556__auto___35787 = cljs.core.chunk_first(seq__35639_35786__$1);
var G__35788 = cljs.core.chunk_rest(seq__35639_35786__$1);
var G__35789 = c__4556__auto___35787;
var G__35790 = cljs.core.count(c__4556__auto___35787);
var G__35791 = (0);
seq__35639_35766 = G__35788;
chunk__35643_35767 = G__35789;
count__35644_35768 = G__35790;
i__35645_35769 = G__35791;
continue;
} else {
var node_35792 = cljs.core.first(seq__35639_35786__$1);
if(cljs.core.not(node_35792.shadow$old)){
var path_match_35793 = shadow.cljs.devtools.client.browser.match_paths(node_35792.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35793)){
var new_link_35794 = (function (){var G__35652 = node_35792.cloneNode(true);
G__35652.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35793),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35652;
})();
(node_35792.shadow$old = true);

(new_link_35794.onload = ((function (seq__35639_35766,chunk__35643_35767,count__35644_35768,i__35645_35769,seq__35605,chunk__35607,count__35608,i__35609,new_link_35794,path_match_35793,node_35792,seq__35639_35786__$1,temp__5735__auto___35785,path,map__35603,map__35603__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35792);
});})(seq__35639_35766,chunk__35643_35767,count__35644_35768,i__35645_35769,seq__35605,chunk__35607,count__35608,i__35609,new_link_35794,path_match_35793,node_35792,seq__35639_35786__$1,temp__5735__auto___35785,path,map__35603,map__35603__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35793], 0));

goog.dom.insertSiblingAfter(new_link_35794,node_35792);


var G__35795 = cljs.core.next(seq__35639_35786__$1);
var G__35796 = null;
var G__35797 = (0);
var G__35798 = (0);
seq__35639_35766 = G__35795;
chunk__35643_35767 = G__35796;
count__35644_35768 = G__35797;
i__35645_35769 = G__35798;
continue;
} else {
var G__35799 = cljs.core.next(seq__35639_35786__$1);
var G__35800 = null;
var G__35801 = (0);
var G__35802 = (0);
seq__35639_35766 = G__35799;
chunk__35643_35767 = G__35800;
count__35644_35768 = G__35801;
i__35645_35769 = G__35802;
continue;
}
} else {
var G__35803 = cljs.core.next(seq__35639_35786__$1);
var G__35804 = null;
var G__35805 = (0);
var G__35806 = (0);
seq__35639_35766 = G__35803;
chunk__35643_35767 = G__35804;
count__35644_35768 = G__35805;
i__35645_35769 = G__35806;
continue;
}
}
} else {
}
}
break;
}


var G__35807 = seq__35605;
var G__35808 = chunk__35607;
var G__35809 = count__35608;
var G__35810 = (i__35609 + (1));
seq__35605 = G__35807;
chunk__35607 = G__35808;
count__35608 = G__35809;
i__35609 = G__35810;
continue;
} else {
var G__35811 = seq__35605;
var G__35812 = chunk__35607;
var G__35813 = count__35608;
var G__35814 = (i__35609 + (1));
seq__35605 = G__35811;
chunk__35607 = G__35812;
count__35608 = G__35813;
i__35609 = G__35814;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35605);
if(temp__5735__auto__){
var seq__35605__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35605__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35605__$1);
var G__35815 = cljs.core.chunk_rest(seq__35605__$1);
var G__35816 = c__4556__auto__;
var G__35817 = cljs.core.count(c__4556__auto__);
var G__35818 = (0);
seq__35605 = G__35815;
chunk__35607 = G__35816;
count__35608 = G__35817;
i__35609 = G__35818;
continue;
} else {
var path = cljs.core.first(seq__35605__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35653_35819 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35657_35820 = null;
var count__35658_35821 = (0);
var i__35659_35822 = (0);
while(true){
if((i__35659_35822 < count__35658_35821)){
var node_35823 = chunk__35657_35820.cljs$core$IIndexed$_nth$arity$2(null,i__35659_35822);
if(cljs.core.not(node_35823.shadow$old)){
var path_match_35824 = shadow.cljs.devtools.client.browser.match_paths(node_35823.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35824)){
var new_link_35825 = (function (){var G__35665 = node_35823.cloneNode(true);
G__35665.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35824),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35665;
})();
(node_35823.shadow$old = true);

(new_link_35825.onload = ((function (seq__35653_35819,chunk__35657_35820,count__35658_35821,i__35659_35822,seq__35605,chunk__35607,count__35608,i__35609,new_link_35825,path_match_35824,node_35823,path,seq__35605__$1,temp__5735__auto__,map__35603,map__35603__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35823);
});})(seq__35653_35819,chunk__35657_35820,count__35658_35821,i__35659_35822,seq__35605,chunk__35607,count__35608,i__35609,new_link_35825,path_match_35824,node_35823,path,seq__35605__$1,temp__5735__auto__,map__35603,map__35603__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35824], 0));

goog.dom.insertSiblingAfter(new_link_35825,node_35823);


var G__35826 = seq__35653_35819;
var G__35827 = chunk__35657_35820;
var G__35828 = count__35658_35821;
var G__35829 = (i__35659_35822 + (1));
seq__35653_35819 = G__35826;
chunk__35657_35820 = G__35827;
count__35658_35821 = G__35828;
i__35659_35822 = G__35829;
continue;
} else {
var G__35830 = seq__35653_35819;
var G__35831 = chunk__35657_35820;
var G__35832 = count__35658_35821;
var G__35833 = (i__35659_35822 + (1));
seq__35653_35819 = G__35830;
chunk__35657_35820 = G__35831;
count__35658_35821 = G__35832;
i__35659_35822 = G__35833;
continue;
}
} else {
var G__35834 = seq__35653_35819;
var G__35835 = chunk__35657_35820;
var G__35836 = count__35658_35821;
var G__35837 = (i__35659_35822 + (1));
seq__35653_35819 = G__35834;
chunk__35657_35820 = G__35835;
count__35658_35821 = G__35836;
i__35659_35822 = G__35837;
continue;
}
} else {
var temp__5735__auto___35838__$1 = cljs.core.seq(seq__35653_35819);
if(temp__5735__auto___35838__$1){
var seq__35653_35839__$1 = temp__5735__auto___35838__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35653_35839__$1)){
var c__4556__auto___35840 = cljs.core.chunk_first(seq__35653_35839__$1);
var G__35841 = cljs.core.chunk_rest(seq__35653_35839__$1);
var G__35842 = c__4556__auto___35840;
var G__35843 = cljs.core.count(c__4556__auto___35840);
var G__35844 = (0);
seq__35653_35819 = G__35841;
chunk__35657_35820 = G__35842;
count__35658_35821 = G__35843;
i__35659_35822 = G__35844;
continue;
} else {
var node_35845 = cljs.core.first(seq__35653_35839__$1);
if(cljs.core.not(node_35845.shadow$old)){
var path_match_35846 = shadow.cljs.devtools.client.browser.match_paths(node_35845.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35846)){
var new_link_35847 = (function (){var G__35666 = node_35845.cloneNode(true);
G__35666.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35846),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35666;
})();
(node_35845.shadow$old = true);

(new_link_35847.onload = ((function (seq__35653_35819,chunk__35657_35820,count__35658_35821,i__35659_35822,seq__35605,chunk__35607,count__35608,i__35609,new_link_35847,path_match_35846,node_35845,seq__35653_35839__$1,temp__5735__auto___35838__$1,path,seq__35605__$1,temp__5735__auto__,map__35603,map__35603__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35845);
});})(seq__35653_35819,chunk__35657_35820,count__35658_35821,i__35659_35822,seq__35605,chunk__35607,count__35608,i__35609,new_link_35847,path_match_35846,node_35845,seq__35653_35839__$1,temp__5735__auto___35838__$1,path,seq__35605__$1,temp__5735__auto__,map__35603,map__35603__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35846], 0));

goog.dom.insertSiblingAfter(new_link_35847,node_35845);


var G__35848 = cljs.core.next(seq__35653_35839__$1);
var G__35849 = null;
var G__35850 = (0);
var G__35851 = (0);
seq__35653_35819 = G__35848;
chunk__35657_35820 = G__35849;
count__35658_35821 = G__35850;
i__35659_35822 = G__35851;
continue;
} else {
var G__35852 = cljs.core.next(seq__35653_35839__$1);
var G__35853 = null;
var G__35854 = (0);
var G__35855 = (0);
seq__35653_35819 = G__35852;
chunk__35657_35820 = G__35853;
count__35658_35821 = G__35854;
i__35659_35822 = G__35855;
continue;
}
} else {
var G__35856 = cljs.core.next(seq__35653_35839__$1);
var G__35857 = null;
var G__35858 = (0);
var G__35859 = (0);
seq__35653_35819 = G__35856;
chunk__35657_35820 = G__35857;
count__35658_35821 = G__35858;
i__35659_35822 = G__35859;
continue;
}
}
} else {
}
}
break;
}


var G__35860 = cljs.core.next(seq__35605__$1);
var G__35861 = null;
var G__35862 = (0);
var G__35863 = (0);
seq__35605 = G__35860;
chunk__35607 = G__35861;
count__35608 = G__35862;
i__35609 = G__35863;
continue;
} else {
var G__35864 = cljs.core.next(seq__35605__$1);
var G__35865 = null;
var G__35866 = (0);
var G__35867 = (0);
seq__35605 = G__35864;
chunk__35607 = G__35865;
count__35608 = G__35866;
i__35609 = G__35867;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35667){
var map__35668 = p__35667;
var map__35668__$1 = (((((!((map__35668 == null))))?(((((map__35668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35668):map__35668);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35668__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35670){
var map__35671 = p__35670;
var map__35671__$1 = (((((!((map__35671 == null))))?(((((map__35671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35671):map__35671);
var _ = map__35671__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35671__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35673,done,error){
var map__35674 = p__35673;
var map__35674__$1 = (((((!((map__35674 == null))))?(((((map__35674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35674):map__35674);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35674__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35676,done,error){
var map__35677 = p__35676;
var map__35677__$1 = (((((!((map__35677 == null))))?(((((map__35677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35677):map__35677);
var msg = map__35677__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35677__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35677__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35677__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35679){
var map__35680 = p__35679;
var map__35680__$1 = (((((!((map__35680 == null))))?(((((map__35680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35680):map__35680);
var src = map__35680__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35682 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35682) : done.call(null,G__35682));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35683){
var map__35684 = p__35683;
var map__35684__$1 = (((((!((map__35684 == null))))?(((((map__35684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35684):map__35684);
var msg__$1 = map__35684__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35686){var ex = e35686;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35687){
var map__35688 = p__35687;
var map__35688__$1 = (((((!((map__35688 == null))))?(((((map__35688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35688):map__35688);
var env = map__35688__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35688__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35690){
var map__35691 = p__35690;
var map__35691__$1 = (((((!((map__35691 == null))))?(((((map__35691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35691):map__35691);
var msg = map__35691__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35693){
var map__35694 = p__35693;
var map__35694__$1 = (((((!((map__35694 == null))))?(((((map__35694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35694):map__35694);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35694__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35694__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35696){
var map__35697 = p__35696;
var map__35697__$1 = (((((!((map__35697 == null))))?(((((map__35697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35697):map__35697);
var svc = map__35697__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35697__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
