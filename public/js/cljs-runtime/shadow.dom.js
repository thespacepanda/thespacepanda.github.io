goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32596 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32596(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32597 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32597(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31951 = coll;
var G__31952 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31951,G__31952) : shadow.dom.lazy_native_coll_seq.call(null,G__31951,G__31952));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31962 = arguments.length;
switch (G__31962) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31965 = arguments.length;
switch (G__31965) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31967 = arguments.length;
switch (G__31967) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31975 = arguments.length;
switch (G__31975) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31980 = arguments.length;
switch (G__31980) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31985 = arguments.length;
switch (G__31985) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32003){if((e32003 instanceof Object)){
var e = e32003;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32003;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32005 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32006 = null;
var count__32007 = (0);
var i__32008 = (0);
while(true){
if((i__32008 < count__32007)){
var el = chunk__32006.cljs$core$IIndexed$_nth$arity$2(null,i__32008);
var handler_32639__$1 = ((function (seq__32005,chunk__32006,count__32007,i__32008,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32005,chunk__32006,count__32007,i__32008,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32639__$1);


var G__32640 = seq__32005;
var G__32641 = chunk__32006;
var G__32642 = count__32007;
var G__32643 = (i__32008 + (1));
seq__32005 = G__32640;
chunk__32006 = G__32641;
count__32007 = G__32642;
i__32008 = G__32643;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32005);
if(temp__5735__auto__){
var seq__32005__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32005__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32005__$1);
var G__32644 = cljs.core.chunk_rest(seq__32005__$1);
var G__32645 = c__4556__auto__;
var G__32646 = cljs.core.count(c__4556__auto__);
var G__32647 = (0);
seq__32005 = G__32644;
chunk__32006 = G__32645;
count__32007 = G__32646;
i__32008 = G__32647;
continue;
} else {
var el = cljs.core.first(seq__32005__$1);
var handler_32650__$1 = ((function (seq__32005,chunk__32006,count__32007,i__32008,el,seq__32005__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32005,chunk__32006,count__32007,i__32008,el,seq__32005__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32650__$1);


var G__32652 = cljs.core.next(seq__32005__$1);
var G__32653 = null;
var G__32654 = (0);
var G__32655 = (0);
seq__32005 = G__32652;
chunk__32006 = G__32653;
count__32007 = G__32654;
i__32008 = G__32655;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32018 = arguments.length;
switch (G__32018) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32027 = cljs.core.seq(events);
var chunk__32028 = null;
var count__32029 = (0);
var i__32030 = (0);
while(true){
if((i__32030 < count__32029)){
var vec__32040 = chunk__32028.cljs$core$IIndexed$_nth$arity$2(null,i__32030);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32667 = seq__32027;
var G__32668 = chunk__32028;
var G__32669 = count__32029;
var G__32670 = (i__32030 + (1));
seq__32027 = G__32667;
chunk__32028 = G__32668;
count__32029 = G__32669;
i__32030 = G__32670;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32027);
if(temp__5735__auto__){
var seq__32027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32027__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32027__$1);
var G__32671 = cljs.core.chunk_rest(seq__32027__$1);
var G__32672 = c__4556__auto__;
var G__32673 = cljs.core.count(c__4556__auto__);
var G__32674 = (0);
seq__32027 = G__32671;
chunk__32028 = G__32672;
count__32029 = G__32673;
i__32030 = G__32674;
continue;
} else {
var vec__32043 = cljs.core.first(seq__32027__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32043,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32676 = cljs.core.next(seq__32027__$1);
var G__32677 = null;
var G__32678 = (0);
var G__32679 = (0);
seq__32027 = G__32676;
chunk__32028 = G__32677;
count__32029 = G__32678;
i__32030 = G__32679;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32047 = cljs.core.seq(styles);
var chunk__32048 = null;
var count__32049 = (0);
var i__32050 = (0);
while(true){
if((i__32050 < count__32049)){
var vec__32060 = chunk__32048.cljs$core$IIndexed$_nth$arity$2(null,i__32050);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32060,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32685 = seq__32047;
var G__32686 = chunk__32048;
var G__32687 = count__32049;
var G__32688 = (i__32050 + (1));
seq__32047 = G__32685;
chunk__32048 = G__32686;
count__32049 = G__32687;
i__32050 = G__32688;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32047);
if(temp__5735__auto__){
var seq__32047__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32047__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32047__$1);
var G__32693 = cljs.core.chunk_rest(seq__32047__$1);
var G__32694 = c__4556__auto__;
var G__32695 = cljs.core.count(c__4556__auto__);
var G__32696 = (0);
seq__32047 = G__32693;
chunk__32048 = G__32694;
count__32049 = G__32695;
i__32050 = G__32696;
continue;
} else {
var vec__32070 = cljs.core.first(seq__32047__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32070,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32699 = cljs.core.next(seq__32047__$1);
var G__32700 = null;
var G__32701 = (0);
var G__32702 = (0);
seq__32047 = G__32699;
chunk__32048 = G__32700;
count__32049 = G__32701;
i__32050 = G__32702;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32077_32703 = key;
var G__32077_32704__$1 = (((G__32077_32703 instanceof cljs.core.Keyword))?G__32077_32703.fqn:null);
switch (G__32077_32704__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32709 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_32709,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_32709,"aria-");
}
})())){
el.setAttribute(ks_32709,value);
} else {
(el[ks_32709] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32089){
var map__32090 = p__32089;
var map__32090__$1 = (((((!((map__32090 == null))))?(((((map__32090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32090):map__32090);
var props = map__32090__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32090__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32092 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32092,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32092,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32092,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32097 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32097,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32097;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32102 = arguments.length;
switch (G__32102) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32107){
var vec__32108 = p__32107;
var seq__32109 = cljs.core.seq(vec__32108);
var first__32110 = cljs.core.first(seq__32109);
var seq__32109__$1 = cljs.core.next(seq__32109);
var nn = first__32110;
var first__32110__$1 = cljs.core.first(seq__32109__$1);
var seq__32109__$2 = cljs.core.next(seq__32109__$1);
var np = first__32110__$1;
var nc = seq__32109__$2;
var node = vec__32108;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32111 = nn;
var G__32112 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32111,G__32112) : create_fn.call(null,G__32111,G__32112));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32113 = nn;
var G__32114 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32113,G__32114) : create_fn.call(null,G__32113,G__32114));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32116 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32116,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32116,(1),null);
var seq__32122_32741 = cljs.core.seq(node_children);
var chunk__32123_32742 = null;
var count__32124_32743 = (0);
var i__32125_32744 = (0);
while(true){
if((i__32125_32744 < count__32124_32743)){
var child_struct_32746 = chunk__32123_32742.cljs$core$IIndexed$_nth$arity$2(null,i__32125_32744);
var children_32747 = shadow.dom.dom_node(child_struct_32746);
if(cljs.core.seq_QMARK_(children_32747)){
var seq__32156_32748 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32747));
var chunk__32158_32749 = null;
var count__32159_32750 = (0);
var i__32160_32751 = (0);
while(true){
if((i__32160_32751 < count__32159_32750)){
var child_32753 = chunk__32158_32749.cljs$core$IIndexed$_nth$arity$2(null,i__32160_32751);
if(cljs.core.truth_(child_32753)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32753);


var G__32754 = seq__32156_32748;
var G__32755 = chunk__32158_32749;
var G__32756 = count__32159_32750;
var G__32757 = (i__32160_32751 + (1));
seq__32156_32748 = G__32754;
chunk__32158_32749 = G__32755;
count__32159_32750 = G__32756;
i__32160_32751 = G__32757;
continue;
} else {
var G__32758 = seq__32156_32748;
var G__32764 = chunk__32158_32749;
var G__32765 = count__32159_32750;
var G__32766 = (i__32160_32751 + (1));
seq__32156_32748 = G__32758;
chunk__32158_32749 = G__32764;
count__32159_32750 = G__32765;
i__32160_32751 = G__32766;
continue;
}
} else {
var temp__5735__auto___32767 = cljs.core.seq(seq__32156_32748);
if(temp__5735__auto___32767){
var seq__32156_32768__$1 = temp__5735__auto___32767;
if(cljs.core.chunked_seq_QMARK_(seq__32156_32768__$1)){
var c__4556__auto___32769 = cljs.core.chunk_first(seq__32156_32768__$1);
var G__32770 = cljs.core.chunk_rest(seq__32156_32768__$1);
var G__32771 = c__4556__auto___32769;
var G__32772 = cljs.core.count(c__4556__auto___32769);
var G__32773 = (0);
seq__32156_32748 = G__32770;
chunk__32158_32749 = G__32771;
count__32159_32750 = G__32772;
i__32160_32751 = G__32773;
continue;
} else {
var child_32775 = cljs.core.first(seq__32156_32768__$1);
if(cljs.core.truth_(child_32775)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32775);


var G__32776 = cljs.core.next(seq__32156_32768__$1);
var G__32777 = null;
var G__32778 = (0);
var G__32779 = (0);
seq__32156_32748 = G__32776;
chunk__32158_32749 = G__32777;
count__32159_32750 = G__32778;
i__32160_32751 = G__32779;
continue;
} else {
var G__32780 = cljs.core.next(seq__32156_32768__$1);
var G__32781 = null;
var G__32782 = (0);
var G__32783 = (0);
seq__32156_32748 = G__32780;
chunk__32158_32749 = G__32781;
count__32159_32750 = G__32782;
i__32160_32751 = G__32783;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32747);
}


var G__32785 = seq__32122_32741;
var G__32786 = chunk__32123_32742;
var G__32787 = count__32124_32743;
var G__32788 = (i__32125_32744 + (1));
seq__32122_32741 = G__32785;
chunk__32123_32742 = G__32786;
count__32124_32743 = G__32787;
i__32125_32744 = G__32788;
continue;
} else {
var temp__5735__auto___32789 = cljs.core.seq(seq__32122_32741);
if(temp__5735__auto___32789){
var seq__32122_32791__$1 = temp__5735__auto___32789;
if(cljs.core.chunked_seq_QMARK_(seq__32122_32791__$1)){
var c__4556__auto___32792 = cljs.core.chunk_first(seq__32122_32791__$1);
var G__32793 = cljs.core.chunk_rest(seq__32122_32791__$1);
var G__32794 = c__4556__auto___32792;
var G__32795 = cljs.core.count(c__4556__auto___32792);
var G__32796 = (0);
seq__32122_32741 = G__32793;
chunk__32123_32742 = G__32794;
count__32124_32743 = G__32795;
i__32125_32744 = G__32796;
continue;
} else {
var child_struct_32797 = cljs.core.first(seq__32122_32791__$1);
var children_32798 = shadow.dom.dom_node(child_struct_32797);
if(cljs.core.seq_QMARK_(children_32798)){
var seq__32174_32799 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32798));
var chunk__32176_32800 = null;
var count__32177_32801 = (0);
var i__32178_32802 = (0);
while(true){
if((i__32178_32802 < count__32177_32801)){
var child_32803 = chunk__32176_32800.cljs$core$IIndexed$_nth$arity$2(null,i__32178_32802);
if(cljs.core.truth_(child_32803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32803);


var G__32805 = seq__32174_32799;
var G__32806 = chunk__32176_32800;
var G__32807 = count__32177_32801;
var G__32808 = (i__32178_32802 + (1));
seq__32174_32799 = G__32805;
chunk__32176_32800 = G__32806;
count__32177_32801 = G__32807;
i__32178_32802 = G__32808;
continue;
} else {
var G__32809 = seq__32174_32799;
var G__32810 = chunk__32176_32800;
var G__32811 = count__32177_32801;
var G__32812 = (i__32178_32802 + (1));
seq__32174_32799 = G__32809;
chunk__32176_32800 = G__32810;
count__32177_32801 = G__32811;
i__32178_32802 = G__32812;
continue;
}
} else {
var temp__5735__auto___32813__$1 = cljs.core.seq(seq__32174_32799);
if(temp__5735__auto___32813__$1){
var seq__32174_32814__$1 = temp__5735__auto___32813__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32174_32814__$1)){
var c__4556__auto___32815 = cljs.core.chunk_first(seq__32174_32814__$1);
var G__32816 = cljs.core.chunk_rest(seq__32174_32814__$1);
var G__32817 = c__4556__auto___32815;
var G__32818 = cljs.core.count(c__4556__auto___32815);
var G__32819 = (0);
seq__32174_32799 = G__32816;
chunk__32176_32800 = G__32817;
count__32177_32801 = G__32818;
i__32178_32802 = G__32819;
continue;
} else {
var child_32820 = cljs.core.first(seq__32174_32814__$1);
if(cljs.core.truth_(child_32820)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32820);


var G__32821 = cljs.core.next(seq__32174_32814__$1);
var G__32822 = null;
var G__32823 = (0);
var G__32824 = (0);
seq__32174_32799 = G__32821;
chunk__32176_32800 = G__32822;
count__32177_32801 = G__32823;
i__32178_32802 = G__32824;
continue;
} else {
var G__32825 = cljs.core.next(seq__32174_32814__$1);
var G__32826 = null;
var G__32827 = (0);
var G__32828 = (0);
seq__32174_32799 = G__32825;
chunk__32176_32800 = G__32826;
count__32177_32801 = G__32827;
i__32178_32802 = G__32828;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32798);
}


var G__32829 = cljs.core.next(seq__32122_32791__$1);
var G__32830 = null;
var G__32831 = (0);
var G__32832 = (0);
seq__32122_32741 = G__32829;
chunk__32123_32742 = G__32830;
count__32124_32743 = G__32831;
i__32125_32744 = G__32832;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32188 = cljs.core.seq(node);
var chunk__32189 = null;
var count__32190 = (0);
var i__32191 = (0);
while(true){
if((i__32191 < count__32190)){
var n = chunk__32189.cljs$core$IIndexed$_nth$arity$2(null,i__32191);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32834 = seq__32188;
var G__32835 = chunk__32189;
var G__32836 = count__32190;
var G__32837 = (i__32191 + (1));
seq__32188 = G__32834;
chunk__32189 = G__32835;
count__32190 = G__32836;
i__32191 = G__32837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32188);
if(temp__5735__auto__){
var seq__32188__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32188__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32188__$1);
var G__32839 = cljs.core.chunk_rest(seq__32188__$1);
var G__32840 = c__4556__auto__;
var G__32841 = cljs.core.count(c__4556__auto__);
var G__32842 = (0);
seq__32188 = G__32839;
chunk__32189 = G__32840;
count__32190 = G__32841;
i__32191 = G__32842;
continue;
} else {
var n = cljs.core.first(seq__32188__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32843 = cljs.core.next(seq__32188__$1);
var G__32844 = null;
var G__32845 = (0);
var G__32846 = (0);
seq__32188 = G__32843;
chunk__32189 = G__32844;
count__32190 = G__32845;
i__32191 = G__32846;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32200 = arguments.length;
switch (G__32200) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32204 = arguments.length;
switch (G__32204) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32210 = arguments.length;
switch (G__32210) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32853 = arguments.length;
var i__4737__auto___32854 = (0);
while(true){
if((i__4737__auto___32854 < len__4736__auto___32853)){
args__4742__auto__.push((arguments[i__4737__auto___32854]));

var G__32855 = (i__4737__auto___32854 + (1));
i__4737__auto___32854 = G__32855;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32225_32861 = cljs.core.seq(nodes);
var chunk__32226_32862 = null;
var count__32227_32863 = (0);
var i__32228_32864 = (0);
while(true){
if((i__32228_32864 < count__32227_32863)){
var node_32865 = chunk__32226_32862.cljs$core$IIndexed$_nth$arity$2(null,i__32228_32864);
fragment.appendChild(shadow.dom._to_dom(node_32865));


var G__32867 = seq__32225_32861;
var G__32868 = chunk__32226_32862;
var G__32869 = count__32227_32863;
var G__32870 = (i__32228_32864 + (1));
seq__32225_32861 = G__32867;
chunk__32226_32862 = G__32868;
count__32227_32863 = G__32869;
i__32228_32864 = G__32870;
continue;
} else {
var temp__5735__auto___32872 = cljs.core.seq(seq__32225_32861);
if(temp__5735__auto___32872){
var seq__32225_32874__$1 = temp__5735__auto___32872;
if(cljs.core.chunked_seq_QMARK_(seq__32225_32874__$1)){
var c__4556__auto___32875 = cljs.core.chunk_first(seq__32225_32874__$1);
var G__32876 = cljs.core.chunk_rest(seq__32225_32874__$1);
var G__32877 = c__4556__auto___32875;
var G__32878 = cljs.core.count(c__4556__auto___32875);
var G__32879 = (0);
seq__32225_32861 = G__32876;
chunk__32226_32862 = G__32877;
count__32227_32863 = G__32878;
i__32228_32864 = G__32879;
continue;
} else {
var node_32880 = cljs.core.first(seq__32225_32874__$1);
fragment.appendChild(shadow.dom._to_dom(node_32880));


var G__32882 = cljs.core.next(seq__32225_32874__$1);
var G__32883 = null;
var G__32884 = (0);
var G__32885 = (0);
seq__32225_32861 = G__32882;
chunk__32226_32862 = G__32883;
count__32227_32863 = G__32884;
i__32228_32864 = G__32885;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32221){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32221));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32236_32894 = cljs.core.seq(scripts);
var chunk__32237_32895 = null;
var count__32238_32896 = (0);
var i__32239_32897 = (0);
while(true){
if((i__32239_32897 < count__32238_32896)){
var vec__32248_32898 = chunk__32237_32895.cljs$core$IIndexed$_nth$arity$2(null,i__32239_32897);
var script_tag_32899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32248_32898,(0),null);
var script_body_32900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32248_32898,(1),null);
eval(script_body_32900);


var G__32901 = seq__32236_32894;
var G__32902 = chunk__32237_32895;
var G__32903 = count__32238_32896;
var G__32904 = (i__32239_32897 + (1));
seq__32236_32894 = G__32901;
chunk__32237_32895 = G__32902;
count__32238_32896 = G__32903;
i__32239_32897 = G__32904;
continue;
} else {
var temp__5735__auto___32905 = cljs.core.seq(seq__32236_32894);
if(temp__5735__auto___32905){
var seq__32236_32907__$1 = temp__5735__auto___32905;
if(cljs.core.chunked_seq_QMARK_(seq__32236_32907__$1)){
var c__4556__auto___32911 = cljs.core.chunk_first(seq__32236_32907__$1);
var G__32912 = cljs.core.chunk_rest(seq__32236_32907__$1);
var G__32913 = c__4556__auto___32911;
var G__32914 = cljs.core.count(c__4556__auto___32911);
var G__32915 = (0);
seq__32236_32894 = G__32912;
chunk__32237_32895 = G__32913;
count__32238_32896 = G__32914;
i__32239_32897 = G__32915;
continue;
} else {
var vec__32252_32916 = cljs.core.first(seq__32236_32907__$1);
var script_tag_32917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32252_32916,(0),null);
var script_body_32918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32252_32916,(1),null);
eval(script_body_32918);


var G__32922 = cljs.core.next(seq__32236_32907__$1);
var G__32923 = null;
var G__32924 = (0);
var G__32925 = (0);
seq__32236_32894 = G__32922;
chunk__32237_32895 = G__32923;
count__32238_32896 = G__32924;
i__32239_32897 = G__32925;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32255){
var vec__32256 = p__32255;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32256,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32256,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32263 = arguments.length;
switch (G__32263) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32274 = cljs.core.seq(style_keys);
var chunk__32275 = null;
var count__32276 = (0);
var i__32277 = (0);
while(true){
if((i__32277 < count__32276)){
var it = chunk__32275.cljs$core$IIndexed$_nth$arity$2(null,i__32277);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32930 = seq__32274;
var G__32931 = chunk__32275;
var G__32932 = count__32276;
var G__32933 = (i__32277 + (1));
seq__32274 = G__32930;
chunk__32275 = G__32931;
count__32276 = G__32932;
i__32277 = G__32933;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32274);
if(temp__5735__auto__){
var seq__32274__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32274__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32274__$1);
var G__32934 = cljs.core.chunk_rest(seq__32274__$1);
var G__32935 = c__4556__auto__;
var G__32936 = cljs.core.count(c__4556__auto__);
var G__32937 = (0);
seq__32274 = G__32934;
chunk__32275 = G__32935;
count__32276 = G__32936;
i__32277 = G__32937;
continue;
} else {
var it = cljs.core.first(seq__32274__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32938 = cljs.core.next(seq__32274__$1);
var G__32939 = null;
var G__32940 = (0);
var G__32941 = (0);
seq__32274 = G__32938;
chunk__32275 = G__32939;
count__32276 = G__32940;
i__32277 = G__32941;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32286,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32292 = k32286;
var G__32292__$1 = (((G__32292 instanceof cljs.core.Keyword))?G__32292.fqn:null);
switch (G__32292__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32286,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32293){
var vec__32294 = p__32293;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32294,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32294,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32285){
var self__ = this;
var G__32285__$1 = this;
return (new cljs.core.RecordIter((0),G__32285__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32287,other32288){
var self__ = this;
var this32287__$1 = this;
return (((!((other32288 == null)))) && ((this32287__$1.constructor === other32288.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32287__$1.x,other32288.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32287__$1.y,other32288.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32287__$1.__extmap,other32288.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32285){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32307 = cljs.core.keyword_identical_QMARK_;
var expr__32308 = k__4388__auto__;
if(cljs.core.truth_((pred__32307.cljs$core$IFn$_invoke$arity$2 ? pred__32307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32308) : pred__32307.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32308)))){
return (new shadow.dom.Coordinate(G__32285,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32307.cljs$core$IFn$_invoke$arity$2 ? pred__32307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32308) : pred__32307.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32308)))){
return (new shadow.dom.Coordinate(self__.x,G__32285,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32285),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32285){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32285,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32290){
var extmap__4419__auto__ = (function (){var G__32319 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32290,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32290)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32319);
} else {
return G__32319;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32290),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32290),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32329,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32335 = k32329;
var G__32335__$1 = (((G__32335 instanceof cljs.core.Keyword))?G__32335.fqn:null);
switch (G__32335__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32329,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32339){
var vec__32343 = p__32339;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32343,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32343,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32328){
var self__ = this;
var G__32328__$1 = this;
return (new cljs.core.RecordIter((0),G__32328__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32330,other32331){
var self__ = this;
var this32330__$1 = this;
return (((!((other32331 == null)))) && ((this32330__$1.constructor === other32331.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32330__$1.w,other32331.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32330__$1.h,other32331.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32330__$1.__extmap,other32331.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32328){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32377 = cljs.core.keyword_identical_QMARK_;
var expr__32378 = k__4388__auto__;
if(cljs.core.truth_((pred__32377.cljs$core$IFn$_invoke$arity$2 ? pred__32377.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32378) : pred__32377.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32378)))){
return (new shadow.dom.Size(G__32328,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32377.cljs$core$IFn$_invoke$arity$2 ? pred__32377.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32378) : pred__32377.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32378)))){
return (new shadow.dom.Size(self__.w,G__32328,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32328),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32328){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32328,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32333){
var extmap__4419__auto__ = (function (){var G__32399 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32333,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32399);
} else {
return G__32399;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32333),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32333),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33000 = (i + (1));
var G__33001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33000;
ret = G__33001;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32442){
var vec__32443 = p__32442;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32443,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32448 = arguments.length;
switch (G__32448) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33011 = ps;
var G__33012 = (i + (1));
el__$1 = G__33011;
i = G__33012;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32471 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32471,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32471,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32471,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32474_33018 = cljs.core.seq(props);
var chunk__32475_33019 = null;
var count__32476_33020 = (0);
var i__32477_33021 = (0);
while(true){
if((i__32477_33021 < count__32476_33020)){
var vec__32484_33022 = chunk__32475_33019.cljs$core$IIndexed$_nth$arity$2(null,i__32477_33021);
var k_33023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32484_33022,(0),null);
var v_33024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32484_33022,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33023);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33023),v_33024);


var G__33028 = seq__32474_33018;
var G__33029 = chunk__32475_33019;
var G__33030 = count__32476_33020;
var G__33031 = (i__32477_33021 + (1));
seq__32474_33018 = G__33028;
chunk__32475_33019 = G__33029;
count__32476_33020 = G__33030;
i__32477_33021 = G__33031;
continue;
} else {
var temp__5735__auto___33032 = cljs.core.seq(seq__32474_33018);
if(temp__5735__auto___33032){
var seq__32474_33033__$1 = temp__5735__auto___33032;
if(cljs.core.chunked_seq_QMARK_(seq__32474_33033__$1)){
var c__4556__auto___33034 = cljs.core.chunk_first(seq__32474_33033__$1);
var G__33035 = cljs.core.chunk_rest(seq__32474_33033__$1);
var G__33036 = c__4556__auto___33034;
var G__33037 = cljs.core.count(c__4556__auto___33034);
var G__33038 = (0);
seq__32474_33018 = G__33035;
chunk__32475_33019 = G__33036;
count__32476_33020 = G__33037;
i__32477_33021 = G__33038;
continue;
} else {
var vec__32487_33039 = cljs.core.first(seq__32474_33033__$1);
var k_33040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32487_33039,(0),null);
var v_33041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32487_33039,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33040);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33040),v_33041);


var G__33042 = cljs.core.next(seq__32474_33033__$1);
var G__33043 = null;
var G__33044 = (0);
var G__33045 = (0);
seq__32474_33018 = G__33042;
chunk__32475_33019 = G__33043;
count__32476_33020 = G__33044;
i__32477_33021 = G__33045;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32494 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32494,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32494,(1),null);
var seq__32498_33046 = cljs.core.seq(node_children);
var chunk__32500_33047 = null;
var count__32501_33048 = (0);
var i__32502_33049 = (0);
while(true){
if((i__32502_33049 < count__32501_33048)){
var child_struct_33050 = chunk__32500_33047.cljs$core$IIndexed$_nth$arity$2(null,i__32502_33049);
if((!((child_struct_33050 == null)))){
if(typeof child_struct_33050 === 'string'){
var text_33051 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33051),child_struct_33050].join(''));
} else {
var children_33052 = shadow.dom.svg_node(child_struct_33050);
if(cljs.core.seq_QMARK_(children_33052)){
var seq__32532_33053 = cljs.core.seq(children_33052);
var chunk__32534_33054 = null;
var count__32535_33055 = (0);
var i__32536_33056 = (0);
while(true){
if((i__32536_33056 < count__32535_33055)){
var child_33058 = chunk__32534_33054.cljs$core$IIndexed$_nth$arity$2(null,i__32536_33056);
if(cljs.core.truth_(child_33058)){
node.appendChild(child_33058);


var G__33059 = seq__32532_33053;
var G__33060 = chunk__32534_33054;
var G__33061 = count__32535_33055;
var G__33062 = (i__32536_33056 + (1));
seq__32532_33053 = G__33059;
chunk__32534_33054 = G__33060;
count__32535_33055 = G__33061;
i__32536_33056 = G__33062;
continue;
} else {
var G__33063 = seq__32532_33053;
var G__33064 = chunk__32534_33054;
var G__33065 = count__32535_33055;
var G__33066 = (i__32536_33056 + (1));
seq__32532_33053 = G__33063;
chunk__32534_33054 = G__33064;
count__32535_33055 = G__33065;
i__32536_33056 = G__33066;
continue;
}
} else {
var temp__5735__auto___33067 = cljs.core.seq(seq__32532_33053);
if(temp__5735__auto___33067){
var seq__32532_33068__$1 = temp__5735__auto___33067;
if(cljs.core.chunked_seq_QMARK_(seq__32532_33068__$1)){
var c__4556__auto___33069 = cljs.core.chunk_first(seq__32532_33068__$1);
var G__33070 = cljs.core.chunk_rest(seq__32532_33068__$1);
var G__33071 = c__4556__auto___33069;
var G__33072 = cljs.core.count(c__4556__auto___33069);
var G__33073 = (0);
seq__32532_33053 = G__33070;
chunk__32534_33054 = G__33071;
count__32535_33055 = G__33072;
i__32536_33056 = G__33073;
continue;
} else {
var child_33074 = cljs.core.first(seq__32532_33068__$1);
if(cljs.core.truth_(child_33074)){
node.appendChild(child_33074);


var G__33076 = cljs.core.next(seq__32532_33068__$1);
var G__33077 = null;
var G__33078 = (0);
var G__33079 = (0);
seq__32532_33053 = G__33076;
chunk__32534_33054 = G__33077;
count__32535_33055 = G__33078;
i__32536_33056 = G__33079;
continue;
} else {
var G__33080 = cljs.core.next(seq__32532_33068__$1);
var G__33081 = null;
var G__33082 = (0);
var G__33083 = (0);
seq__32532_33053 = G__33080;
chunk__32534_33054 = G__33081;
count__32535_33055 = G__33082;
i__32536_33056 = G__33083;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33052);
}
}


var G__33085 = seq__32498_33046;
var G__33086 = chunk__32500_33047;
var G__33087 = count__32501_33048;
var G__33088 = (i__32502_33049 + (1));
seq__32498_33046 = G__33085;
chunk__32500_33047 = G__33086;
count__32501_33048 = G__33087;
i__32502_33049 = G__33088;
continue;
} else {
var G__33090 = seq__32498_33046;
var G__33091 = chunk__32500_33047;
var G__33092 = count__32501_33048;
var G__33093 = (i__32502_33049 + (1));
seq__32498_33046 = G__33090;
chunk__32500_33047 = G__33091;
count__32501_33048 = G__33092;
i__32502_33049 = G__33093;
continue;
}
} else {
var temp__5735__auto___33094 = cljs.core.seq(seq__32498_33046);
if(temp__5735__auto___33094){
var seq__32498_33095__$1 = temp__5735__auto___33094;
if(cljs.core.chunked_seq_QMARK_(seq__32498_33095__$1)){
var c__4556__auto___33096 = cljs.core.chunk_first(seq__32498_33095__$1);
var G__33097 = cljs.core.chunk_rest(seq__32498_33095__$1);
var G__33098 = c__4556__auto___33096;
var G__33099 = cljs.core.count(c__4556__auto___33096);
var G__33100 = (0);
seq__32498_33046 = G__33097;
chunk__32500_33047 = G__33098;
count__32501_33048 = G__33099;
i__32502_33049 = G__33100;
continue;
} else {
var child_struct_33101 = cljs.core.first(seq__32498_33095__$1);
if((!((child_struct_33101 == null)))){
if(typeof child_struct_33101 === 'string'){
var text_33102 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33102),child_struct_33101].join(''));
} else {
var children_33104 = shadow.dom.svg_node(child_struct_33101);
if(cljs.core.seq_QMARK_(children_33104)){
var seq__32551_33105 = cljs.core.seq(children_33104);
var chunk__32553_33106 = null;
var count__32554_33107 = (0);
var i__32555_33108 = (0);
while(true){
if((i__32555_33108 < count__32554_33107)){
var child_33109 = chunk__32553_33106.cljs$core$IIndexed$_nth$arity$2(null,i__32555_33108);
if(cljs.core.truth_(child_33109)){
node.appendChild(child_33109);


var G__33110 = seq__32551_33105;
var G__33111 = chunk__32553_33106;
var G__33112 = count__32554_33107;
var G__33113 = (i__32555_33108 + (1));
seq__32551_33105 = G__33110;
chunk__32553_33106 = G__33111;
count__32554_33107 = G__33112;
i__32555_33108 = G__33113;
continue;
} else {
var G__33115 = seq__32551_33105;
var G__33116 = chunk__32553_33106;
var G__33117 = count__32554_33107;
var G__33118 = (i__32555_33108 + (1));
seq__32551_33105 = G__33115;
chunk__32553_33106 = G__33116;
count__32554_33107 = G__33117;
i__32555_33108 = G__33118;
continue;
}
} else {
var temp__5735__auto___33119__$1 = cljs.core.seq(seq__32551_33105);
if(temp__5735__auto___33119__$1){
var seq__32551_33121__$1 = temp__5735__auto___33119__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32551_33121__$1)){
var c__4556__auto___33122 = cljs.core.chunk_first(seq__32551_33121__$1);
var G__33123 = cljs.core.chunk_rest(seq__32551_33121__$1);
var G__33124 = c__4556__auto___33122;
var G__33125 = cljs.core.count(c__4556__auto___33122);
var G__33126 = (0);
seq__32551_33105 = G__33123;
chunk__32553_33106 = G__33124;
count__32554_33107 = G__33125;
i__32555_33108 = G__33126;
continue;
} else {
var child_33128 = cljs.core.first(seq__32551_33121__$1);
if(cljs.core.truth_(child_33128)){
node.appendChild(child_33128);


var G__33129 = cljs.core.next(seq__32551_33121__$1);
var G__33130 = null;
var G__33131 = (0);
var G__33132 = (0);
seq__32551_33105 = G__33129;
chunk__32553_33106 = G__33130;
count__32554_33107 = G__33131;
i__32555_33108 = G__33132;
continue;
} else {
var G__33133 = cljs.core.next(seq__32551_33121__$1);
var G__33134 = null;
var G__33135 = (0);
var G__33136 = (0);
seq__32551_33105 = G__33133;
chunk__32553_33106 = G__33134;
count__32554_33107 = G__33135;
i__32555_33108 = G__33136;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33104);
}
}


var G__33137 = cljs.core.next(seq__32498_33095__$1);
var G__33138 = null;
var G__33139 = (0);
var G__33140 = (0);
seq__32498_33046 = G__33137;
chunk__32500_33047 = G__33138;
count__32501_33048 = G__33139;
i__32502_33049 = G__33140;
continue;
} else {
var G__33143 = cljs.core.next(seq__32498_33095__$1);
var G__33144 = null;
var G__33145 = (0);
var G__33146 = (0);
seq__32498_33046 = G__33143;
chunk__32500_33047 = G__33144;
count__32501_33048 = G__33145;
i__32502_33049 = G__33146;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33153 = arguments.length;
var i__4737__auto___33154 = (0);
while(true){
if((i__4737__auto___33154 < len__4736__auto___33153)){
args__4742__auto__.push((arguments[i__4737__auto___33154]));

var G__33155 = (i__4737__auto___33154 + (1));
i__4737__auto___33154 = G__33155;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32574){
var G__32575 = cljs.core.first(seq32574);
var seq32574__$1 = cljs.core.next(seq32574);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32575,seq32574__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32579 = arguments.length;
switch (G__32579) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29636__auto___33162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_32587){
var state_val_32588 = (state_32587[(1)]);
if((state_val_32588 === (1))){
var state_32587__$1 = state_32587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32587__$1,(2),once_or_cleanup);
} else {
if((state_val_32588 === (2))){
var inst_32584 = (state_32587[(2)]);
var inst_32585 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32587__$1 = (function (){var statearr_32589 = state_32587;
(statearr_32589[(7)] = inst_32584);

return statearr_32589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32587__$1,inst_32585);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29436__auto__ = null;
var shadow$dom$state_machine__29436__auto____0 = (function (){
var statearr_32591 = [null,null,null,null,null,null,null,null];
(statearr_32591[(0)] = shadow$dom$state_machine__29436__auto__);

(statearr_32591[(1)] = (1));

return statearr_32591;
});
var shadow$dom$state_machine__29436__auto____1 = (function (state_32587){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_32587);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e32592){var ex__29439__auto__ = e32592;
var statearr_32593_33172 = state_32587;
(statearr_32593_33172[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_32587[(4)]))){
var statearr_32594_33174 = state_32587;
(statearr_32594_33174[(1)] = cljs.core.first((state_32587[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33176 = state_32587;
state_32587 = G__33176;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
shadow$dom$state_machine__29436__auto__ = function(state_32587){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29436__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29436__auto____1.call(this,state_32587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29436__auto____0;
shadow$dom$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29436__auto____1;
return shadow$dom$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_32595 = f__29637__auto__();
(statearr_32595[(6)] = c__29636__auto___33162);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
