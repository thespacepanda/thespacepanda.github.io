goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__25921 = arguments.length;
switch (G__25921) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__25925 = opts;
var map__25925__$1 = (((((!((map__25925 == null))))?(((((map__25925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25925):map__25925);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25925__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25925__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__25927 = cljs.core.count(refs);
switch (G__25927) {
case (1):
var vec__25928 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25928,(0),null);
return (function (){
var G__25931 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25931) : f.call(null,G__25931));
});

break;
case (2):
var vec__25932 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25932,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25932,(1),null);
return (function (){
var G__25935 = cljs.core.deref(a);
var G__25936 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25935,G__25936) : f.call(null,G__25935,G__25936));
});

break;
case (3):
var vec__25937 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25937,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25937,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25937,(2),null);
return (function (){
var G__25940 = cljs.core.deref(a);
var G__25941 = cljs.core.deref(b);
var G__25942 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25940,G__25941,G__25942) : f.call(null,G__25940,G__25941,G__25942));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__25943 = ref;
cljs.core.reset_BANG_(G__25943,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__25943;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__25944_25956 = cljs.core.seq(refs);
var chunk__25945_25957 = null;
var count__25946_25958 = (0);
var i__25947_25959 = (0);
while(true){
if((i__25947_25959 < count__25946_25958)){
var ref_25960__$1 = chunk__25945_25957.cljs$core$IIndexed$_nth$arity$2(null,i__25947_25959);
cljs.core.add_watch(ref_25960__$1,key,watch);


var G__25961 = seq__25944_25956;
var G__25962 = chunk__25945_25957;
var G__25963 = count__25946_25958;
var G__25964 = (i__25947_25959 + (1));
seq__25944_25956 = G__25961;
chunk__25945_25957 = G__25962;
count__25946_25958 = G__25963;
i__25947_25959 = G__25964;
continue;
} else {
var temp__5735__auto___25965 = cljs.core.seq(seq__25944_25956);
if(temp__5735__auto___25965){
var seq__25944_25966__$1 = temp__5735__auto___25965;
if(cljs.core.chunked_seq_QMARK_(seq__25944_25966__$1)){
var c__4556__auto___25967 = cljs.core.chunk_first(seq__25944_25966__$1);
var G__25968 = cljs.core.chunk_rest(seq__25944_25966__$1);
var G__25969 = c__4556__auto___25967;
var G__25970 = cljs.core.count(c__4556__auto___25967);
var G__25971 = (0);
seq__25944_25956 = G__25968;
chunk__25945_25957 = G__25969;
count__25946_25958 = G__25970;
i__25947_25959 = G__25971;
continue;
} else {
var ref_25974__$1 = cljs.core.first(seq__25944_25966__$1);
cljs.core.add_watch(ref_25974__$1,key,watch);


var G__25977 = cljs.core.next(seq__25944_25966__$1);
var G__25978 = null;
var G__25979 = (0);
var G__25980 = (0);
seq__25944_25956 = G__25977;
chunk__25945_25957 = G__25978;
count__25946_25958 = G__25979;
i__25947_25959 = G__25980;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
