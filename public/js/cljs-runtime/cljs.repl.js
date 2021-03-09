goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34779){
var map__34780 = p__34779;
var map__34780__$1 = (((((!((map__34780 == null))))?(((((map__34780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34780):map__34780);
var m = map__34780__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34782_34990 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34783_34991 = null;
var count__34784_34992 = (0);
var i__34785_34993 = (0);
while(true){
if((i__34785_34993 < count__34784_34992)){
var f_34994 = chunk__34783_34991.cljs$core$IIndexed$_nth$arity$2(null,i__34785_34993);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34994], 0));


var G__34995 = seq__34782_34990;
var G__34996 = chunk__34783_34991;
var G__34997 = count__34784_34992;
var G__34998 = (i__34785_34993 + (1));
seq__34782_34990 = G__34995;
chunk__34783_34991 = G__34996;
count__34784_34992 = G__34997;
i__34785_34993 = G__34998;
continue;
} else {
var temp__5735__auto___34999 = cljs.core.seq(seq__34782_34990);
if(temp__5735__auto___34999){
var seq__34782_35000__$1 = temp__5735__auto___34999;
if(cljs.core.chunked_seq_QMARK_(seq__34782_35000__$1)){
var c__4556__auto___35001 = cljs.core.chunk_first(seq__34782_35000__$1);
var G__35002 = cljs.core.chunk_rest(seq__34782_35000__$1);
var G__35003 = c__4556__auto___35001;
var G__35004 = cljs.core.count(c__4556__auto___35001);
var G__35005 = (0);
seq__34782_34990 = G__35002;
chunk__34783_34991 = G__35003;
count__34784_34992 = G__35004;
i__34785_34993 = G__35005;
continue;
} else {
var f_35006 = cljs.core.first(seq__34782_35000__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35006], 0));


var G__35007 = cljs.core.next(seq__34782_35000__$1);
var G__35008 = null;
var G__35009 = (0);
var G__35010 = (0);
seq__34782_34990 = G__35007;
chunk__34783_34991 = G__35008;
count__34784_34992 = G__35009;
i__34785_34993 = G__35010;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35012 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35012], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35012)))?cljs.core.second(arglists_35012):arglists_35012)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34788_35019 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34789_35020 = null;
var count__34790_35021 = (0);
var i__34791_35022 = (0);
while(true){
if((i__34791_35022 < count__34790_35021)){
var vec__34804_35024 = chunk__34789_35020.cljs$core$IIndexed$_nth$arity$2(null,i__34791_35022);
var name_35025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35024,(0),null);
var map__34807_35026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35024,(1),null);
var map__34807_35027__$1 = (((((!((map__34807_35026 == null))))?(((((map__34807_35026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34807_35026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34807_35026):map__34807_35026);
var doc_35028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34807_35027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34807_35027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35025], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35029], 0));

if(cljs.core.truth_(doc_35028)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35028], 0));
} else {
}


var G__35030 = seq__34788_35019;
var G__35031 = chunk__34789_35020;
var G__35032 = count__34790_35021;
var G__35033 = (i__34791_35022 + (1));
seq__34788_35019 = G__35030;
chunk__34789_35020 = G__35031;
count__34790_35021 = G__35032;
i__34791_35022 = G__35033;
continue;
} else {
var temp__5735__auto___35038 = cljs.core.seq(seq__34788_35019);
if(temp__5735__auto___35038){
var seq__34788_35039__$1 = temp__5735__auto___35038;
if(cljs.core.chunked_seq_QMARK_(seq__34788_35039__$1)){
var c__4556__auto___35040 = cljs.core.chunk_first(seq__34788_35039__$1);
var G__35041 = cljs.core.chunk_rest(seq__34788_35039__$1);
var G__35042 = c__4556__auto___35040;
var G__35043 = cljs.core.count(c__4556__auto___35040);
var G__35044 = (0);
seq__34788_35019 = G__35041;
chunk__34789_35020 = G__35042;
count__34790_35021 = G__35043;
i__34791_35022 = G__35044;
continue;
} else {
var vec__34810_35045 = cljs.core.first(seq__34788_35039__$1);
var name_35046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34810_35045,(0),null);
var map__34813_35047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34810_35045,(1),null);
var map__34813_35048__$1 = (((((!((map__34813_35047 == null))))?(((((map__34813_35047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34813_35047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34813_35047):map__34813_35047);
var doc_35049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34813_35048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34813_35048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35046], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35050], 0));

if(cljs.core.truth_(doc_35049)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35049], 0));
} else {
}


var G__35052 = cljs.core.next(seq__34788_35039__$1);
var G__35053 = null;
var G__35054 = (0);
var G__35055 = (0);
seq__34788_35019 = G__35052;
chunk__34789_35020 = G__35053;
count__34790_35021 = G__35054;
i__34791_35022 = G__35055;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34816 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34817 = null;
var count__34818 = (0);
var i__34819 = (0);
while(true){
if((i__34819 < count__34818)){
var role = chunk__34817.cljs$core$IIndexed$_nth$arity$2(null,i__34819);
var temp__5735__auto___35056__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35056__$1)){
var spec_35057 = temp__5735__auto___35056__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35057)], 0));
} else {
}


var G__35059 = seq__34816;
var G__35060 = chunk__34817;
var G__35061 = count__34818;
var G__35062 = (i__34819 + (1));
seq__34816 = G__35059;
chunk__34817 = G__35060;
count__34818 = G__35061;
i__34819 = G__35062;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34816);
if(temp__5735__auto____$1){
var seq__34816__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34816__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34816__$1);
var G__35063 = cljs.core.chunk_rest(seq__34816__$1);
var G__35064 = c__4556__auto__;
var G__35065 = cljs.core.count(c__4556__auto__);
var G__35066 = (0);
seq__34816 = G__35063;
chunk__34817 = G__35064;
count__34818 = G__35065;
i__34819 = G__35066;
continue;
} else {
var role = cljs.core.first(seq__34816__$1);
var temp__5735__auto___35067__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35067__$2)){
var spec_35068 = temp__5735__auto___35067__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35068)], 0));
} else {
}


var G__35070 = cljs.core.next(seq__34816__$1);
var G__35071 = null;
var G__35072 = (0);
var G__35073 = (0);
seq__34816 = G__35070;
chunk__34817 = G__35071;
count__34818 = G__35072;
i__34819 = G__35073;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35077 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35078 = cljs.core.ex_cause(t);
via = G__35077;
t = G__35078;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34826 = datafied_throwable;
var map__34826__$1 = (((((!((map__34826 == null))))?(((((map__34826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34826):map__34826);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34826__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34826__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34826__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34827 = cljs.core.last(via);
var map__34827__$1 = (((((!((map__34827 == null))))?(((((map__34827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34827):map__34827);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34827__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34827__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34827__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34828 = data;
var map__34828__$1 = (((((!((map__34828 == null))))?(((((map__34828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34828):map__34828);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34828__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34828__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34828__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34829 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34829__$1 = (((((!((map__34829 == null))))?(((((map__34829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34829):map__34829);
var top_data = map__34829__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34829__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34835 = phase;
var G__34835__$1 = (((G__34835 instanceof cljs.core.Keyword))?G__34835.fqn:null);
switch (G__34835__$1) {
case "read-source":
var map__34836 = data;
var map__34836__$1 = (((((!((map__34836 == null))))?(((((map__34836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34836):map__34836);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34836__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34836__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34839 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34839__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34839,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34839);
var G__34839__$2 = (cljs.core.truth_((function (){var fexpr__34840 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34840.cljs$core$IFn$_invoke$arity$1 ? fexpr__34840.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34840.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34839__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34839__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34839__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34839__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34841 = top_data;
var G__34841__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34841,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34841);
var G__34841__$2 = (cljs.core.truth_((function (){var fexpr__34842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34842.cljs$core$IFn$_invoke$arity$1 ? fexpr__34842.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34842.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34841__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34841__$1);
var G__34841__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34841__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34841__$2);
var G__34841__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34841__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34841__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34841__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34841__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34843 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843,(3),null);
var G__34846 = top_data;
var G__34846__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34846,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34846);
var G__34846__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34846__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34846__$1);
var G__34846__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34846__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34846__$2);
var G__34846__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34846__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34846__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34846__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34846__$4;
}

break;
case "execution":
var vec__34847 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34847,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34847,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34847,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34847,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34825_SHARP_){
var or__4126__auto__ = (p1__34825_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__34851 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34851.cljs$core$IFn$_invoke$arity$1 ? fexpr__34851.cljs$core$IFn$_invoke$arity$1(p1__34825_SHARP_) : fexpr__34851.call(null,p1__34825_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34856 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34856__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34856);
var G__34856__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34856__$1);
var G__34856__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34856__$2);
var G__34856__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34856__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34856__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34835__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34886){
var map__34891 = p__34886;
var map__34891__$1 = (((((!((map__34891 == null))))?(((((map__34891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34891):map__34891);
var triage_data = map__34891__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34920 = phase;
var G__34920__$1 = (((G__34920 instanceof cljs.core.Keyword))?G__34920.fqn:null);
switch (G__34920__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34921 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34922 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34923 = loc;
var G__34924 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34925_35101 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34926_35102 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34927_35103 = true;
var _STAR_print_fn_STAR__temp_val__34928_35104 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34927_35103);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34928_35104);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34877_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34877_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34926_35102);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34925_35101);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34921,G__34922,G__34923,G__34924) : format.call(null,G__34921,G__34922,G__34923,G__34924));

break;
case "macroexpansion":
var G__34933 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34934 = cause_type;
var G__34935 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34936 = loc;
var G__34937 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34933,G__34934,G__34935,G__34936,G__34937) : format.call(null,G__34933,G__34934,G__34935,G__34936,G__34937));

break;
case "compile-syntax-check":
var G__34941 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34942 = cause_type;
var G__34943 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34944 = loc;
var G__34945 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34941,G__34942,G__34943,G__34944,G__34945) : format.call(null,G__34941,G__34942,G__34943,G__34944,G__34945));

break;
case "compilation":
var G__34946 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34947 = cause_type;
var G__34948 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34949 = loc;
var G__34950 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34946,G__34947,G__34948,G__34949,G__34950) : format.call(null,G__34946,G__34947,G__34948,G__34949,G__34950));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34955 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34956 = symbol;
var G__34957 = loc;
var G__34958 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34966_35108 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34967_35109 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34968_35110 = true;
var _STAR_print_fn_STAR__temp_val__34969_35111 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34968_35110);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34969_35111);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34878_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34878_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34967_35109);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34966_35108);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34955,G__34956,G__34957,G__34958) : format.call(null,G__34955,G__34956,G__34957,G__34958));
} else {
var G__34977 = "Execution error%s at %s(%s).\n%s\n";
var G__34978 = cause_type;
var G__34979 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34980 = loc;
var G__34981 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34977,G__34978,G__34979,G__34980,G__34981) : format.call(null,G__34977,G__34978,G__34979,G__34980,G__34981));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34920__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
