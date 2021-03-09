goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29722 = arguments.length;
switch (G__29722) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29723 = (function (f,blockable,meta29724){
this.f = f;
this.blockable = blockable;
this.meta29724 = meta29724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29725,meta29724__$1){
var self__ = this;
var _29725__$1 = this;
return (new cljs.core.async.t_cljs$core$async29723(self__.f,self__.blockable,meta29724__$1));
}));

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29725){
var self__ = this;
var _29725__$1 = this;
return self__.meta29724;
}));

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29724","meta29724",31953865,null)], null);
}));

(cljs.core.async.t_cljs$core$async29723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29723");

(cljs.core.async.t_cljs$core$async29723.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29723.
 */
cljs.core.async.__GT_t_cljs$core$async29723 = (function cljs$core$async$__GT_t_cljs$core$async29723(f__$1,blockable__$1,meta29724){
return (new cljs.core.async.t_cljs$core$async29723(f__$1,blockable__$1,meta29724));
});

}

return (new cljs.core.async.t_cljs$core$async29723(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29740 = arguments.length;
switch (G__29740) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29748 = arguments.length;
switch (G__29748) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29754 = arguments.length;
switch (G__29754) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31955 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31955) : fn1.call(null,val_31955));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31955) : fn1.call(null,val_31955));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29764 = arguments.length;
switch (G__29764) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___31958 = n;
var x_31959 = (0);
while(true){
if((x_31959 < n__4613__auto___31958)){
(a[x_31959] = x_31959);

var G__31960 = (x_31959 + (1));
x_31959 = G__31960;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29778 = (function (flag,meta29779){
this.flag = flag;
this.meta29779 = meta29779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29780,meta29779__$1){
var self__ = this;
var _29780__$1 = this;
return (new cljs.core.async.t_cljs$core$async29778(self__.flag,meta29779__$1));
}));

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29780){
var self__ = this;
var _29780__$1 = this;
return self__.meta29779;
}));

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29779","meta29779",1419180549,null)], null);
}));

(cljs.core.async.t_cljs$core$async29778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29778");

(cljs.core.async.t_cljs$core$async29778.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29778.
 */
cljs.core.async.__GT_t_cljs$core$async29778 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29778(flag__$1,meta29779){
return (new cljs.core.async.t_cljs$core$async29778(flag__$1,meta29779));
});

}

return (new cljs.core.async.t_cljs$core$async29778(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29785 = (function (flag,cb,meta29786){
this.flag = flag;
this.cb = cb;
this.meta29786 = meta29786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29787,meta29786__$1){
var self__ = this;
var _29787__$1 = this;
return (new cljs.core.async.t_cljs$core$async29785(self__.flag,self__.cb,meta29786__$1));
}));

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29787){
var self__ = this;
var _29787__$1 = this;
return self__.meta29786;
}));

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29786","meta29786",-130348152,null)], null);
}));

(cljs.core.async.t_cljs$core$async29785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29785");

(cljs.core.async.t_cljs$core$async29785.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29785.
 */
cljs.core.async.__GT_t_cljs$core$async29785 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29785(flag__$1,cb__$1,meta29786){
return (new cljs.core.async.t_cljs$core$async29785(flag__$1,cb__$1,meta29786));
});

}

return (new cljs.core.async.t_cljs$core$async29785(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29790_SHARP_){
var G__29793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29790_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29793) : fret.call(null,G__29793));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29791_SHARP_){
var G__29794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29791_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29794) : fret.call(null,G__29794));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31978 = (i + (1));
i = G__31978;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31981 = arguments.length;
var i__4737__auto___31982 = (0);
while(true){
if((i__4737__auto___31982 < len__4736__auto___31981)){
args__4742__auto__.push((arguments[i__4737__auto___31982]));

var G__31983 = (i__4737__auto___31982 + (1));
i__4737__auto___31982 = G__31983;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29800){
var map__29801 = p__29800;
var map__29801__$1 = (((((!((map__29801 == null))))?(((((map__29801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29801):map__29801);
var opts = map__29801__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29797){
var G__29798 = cljs.core.first(seq29797);
var seq29797__$1 = cljs.core.next(seq29797);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29798,seq29797__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29804 = arguments.length;
switch (G__29804) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29636__auto___31997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_29842){
var state_val_29843 = (state_29842[(1)]);
if((state_val_29843 === (7))){
var inst_29833 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
var statearr_29868_32002 = state_29842__$1;
(statearr_29868_32002[(2)] = inst_29833);

(statearr_29868_32002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (1))){
var state_29842__$1 = state_29842;
var statearr_29869_32004 = state_29842__$1;
(statearr_29869_32004[(2)] = null);

(statearr_29869_32004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (4))){
var inst_29815 = (state_29842[(7)]);
var inst_29815__$1 = (state_29842[(2)]);
var inst_29816 = (inst_29815__$1 == null);
var state_29842__$1 = (function (){var statearr_29870 = state_29842;
(statearr_29870[(7)] = inst_29815__$1);

return statearr_29870;
})();
if(cljs.core.truth_(inst_29816)){
var statearr_29871_32012 = state_29842__$1;
(statearr_29871_32012[(1)] = (5));

} else {
var statearr_29872_32014 = state_29842__$1;
(statearr_29872_32014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (13))){
var state_29842__$1 = state_29842;
var statearr_29878_32015 = state_29842__$1;
(statearr_29878_32015[(2)] = null);

(statearr_29878_32015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (6))){
var inst_29815 = (state_29842[(7)]);
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29842__$1,(11),to,inst_29815);
} else {
if((state_val_29843 === (3))){
var inst_29836 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29842__$1,inst_29836);
} else {
if((state_val_29843 === (12))){
var state_29842__$1 = state_29842;
var statearr_29880_32016 = state_29842__$1;
(statearr_29880_32016[(2)] = null);

(statearr_29880_32016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (2))){
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29842__$1,(4),from);
} else {
if((state_val_29843 === (11))){
var inst_29826 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
if(cljs.core.truth_(inst_29826)){
var statearr_29882_32019 = state_29842__$1;
(statearr_29882_32019[(1)] = (12));

} else {
var statearr_29883_32020 = state_29842__$1;
(statearr_29883_32020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (9))){
var state_29842__$1 = state_29842;
var statearr_29886_32021 = state_29842__$1;
(statearr_29886_32021[(2)] = null);

(statearr_29886_32021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (5))){
var state_29842__$1 = state_29842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29887_32022 = state_29842__$1;
(statearr_29887_32022[(1)] = (8));

} else {
var statearr_29888_32023 = state_29842__$1;
(statearr_29888_32023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (14))){
var inst_29831 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
var statearr_29889_32024 = state_29842__$1;
(statearr_29889_32024[(2)] = inst_29831);

(statearr_29889_32024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (10))){
var inst_29823 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
var statearr_29890_32025 = state_29842__$1;
(statearr_29890_32025[(2)] = inst_29823);

(statearr_29890_32025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (8))){
var inst_29819 = cljs.core.async.close_BANG_(to);
var state_29842__$1 = state_29842;
var statearr_29891_32026 = state_29842__$1;
(statearr_29891_32026[(2)] = inst_29819);

(statearr_29891_32026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_29892 = [null,null,null,null,null,null,null,null];
(statearr_29892[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_29892[(1)] = (1));

return statearr_29892;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_29842){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_29842);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e29893){var ex__29439__auto__ = e29893;
var statearr_29894_32034 = state_29842;
(statearr_29894_32034[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_29842[(4)]))){
var statearr_29895_32035 = state_29842;
(statearr_29895_32035[(1)] = cljs.core.first((state_29842[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32039 = state_29842;
state_29842 = G__32039;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_29842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_29842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_29896 = f__29637__auto__();
(statearr_29896[(6)] = c__29636__auto___31997);

return statearr_29896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29897){
var vec__29898 = p__29897;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29898,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29898,(1),null);
var job = vec__29898;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29636__auto___32046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_29913){
var state_val_29914 = (state_29913[(1)]);
if((state_val_29914 === (1))){
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29913__$1,(2),res,v);
} else {
if((state_val_29914 === (2))){
var inst_29906 = (state_29913[(2)]);
var inst_29911 = cljs.core.async.close_BANG_(res);
var state_29913__$1 = (function (){var statearr_29919 = state_29913;
(statearr_29919[(7)] = inst_29906);

return statearr_29919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29913__$1,inst_29911);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0 = (function (){
var statearr_29920 = [null,null,null,null,null,null,null,null];
(statearr_29920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__);

(statearr_29920[(1)] = (1));

return statearr_29920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1 = (function (state_29913){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_29913);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e29921){var ex__29439__auto__ = e29921;
var statearr_29922_32054 = state_29913;
(statearr_29922_32054[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_29913[(4)]))){
var statearr_29923_32055 = state_29913;
(statearr_29923_32055[(1)] = cljs.core.first((state_29913[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32056 = state_29913;
state_29913 = G__32056;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = function(state_29913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1.call(this,state_29913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_29924 = f__29637__auto__();
(statearr_29924[(6)] = c__29636__auto___32046);

return statearr_29924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29925){
var vec__29926 = p__29925;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29926,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29926,(1),null);
var job = vec__29926;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32063 = n;
var __32064 = (0);
while(true){
if((__32064 < n__4613__auto___32063)){
var G__29929_32065 = type;
var G__29929_32066__$1 = (((G__29929_32065 instanceof cljs.core.Keyword))?G__29929_32065.fqn:null);
switch (G__29929_32066__$1) {
case "compute":
var c__29636__auto___32068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32064,c__29636__auto___32068,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async){
return (function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = ((function (__32064,c__29636__auto___32068,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async){
return (function (state_29945){
var state_val_29946 = (state_29945[(1)]);
if((state_val_29946 === (1))){
var state_29945__$1 = state_29945;
var statearr_29947_32069 = state_29945__$1;
(statearr_29947_32069[(2)] = null);

(statearr_29947_32069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (2))){
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29945__$1,(4),jobs);
} else {
if((state_val_29946 === (3))){
var inst_29943 = (state_29945[(2)]);
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29945__$1,inst_29943);
} else {
if((state_val_29946 === (4))){
var inst_29935 = (state_29945[(2)]);
var inst_29936 = process(inst_29935);
var state_29945__$1 = state_29945;
if(cljs.core.truth_(inst_29936)){
var statearr_29948_32073 = state_29945__$1;
(statearr_29948_32073[(1)] = (5));

} else {
var statearr_29949_32074 = state_29945__$1;
(statearr_29949_32074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (5))){
var state_29945__$1 = state_29945;
var statearr_29952_32075 = state_29945__$1;
(statearr_29952_32075[(2)] = null);

(statearr_29952_32075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (6))){
var state_29945__$1 = state_29945;
var statearr_29953_32076 = state_29945__$1;
(statearr_29953_32076[(2)] = null);

(statearr_29953_32076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (7))){
var inst_29941 = (state_29945[(2)]);
var state_29945__$1 = state_29945;
var statearr_29954_32078 = state_29945__$1;
(statearr_29954_32078[(2)] = inst_29941);

(statearr_29954_32078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32064,c__29636__auto___32068,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async))
;
return ((function (__32064,switch__29435__auto__,c__29636__auto___32068,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0 = (function (){
var statearr_29955 = [null,null,null,null,null,null,null];
(statearr_29955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__);

(statearr_29955[(1)] = (1));

return statearr_29955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1 = (function (state_29945){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_29945);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e29958){var ex__29439__auto__ = e29958;
var statearr_29959_32079 = state_29945;
(statearr_29959_32079[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_29945[(4)]))){
var statearr_29961_32080 = state_29945;
(statearr_29961_32080[(1)] = cljs.core.first((state_29945[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32081 = state_29945;
state_29945 = G__32081;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = function(state_29945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1.call(this,state_29945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__;
})()
;})(__32064,switch__29435__auto__,c__29636__auto___32068,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async))
})();
var state__29638__auto__ = (function (){var statearr_29965 = f__29637__auto__();
(statearr_29965[(6)] = c__29636__auto___32068);

return statearr_29965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
});})(__32064,c__29636__auto___32068,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async))
);


break;
case "async":
var c__29636__auto___32082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32064,c__29636__auto___32082,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async){
return (function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = ((function (__32064,c__29636__auto___32082,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async){
return (function (state_29978){
var state_val_29979 = (state_29978[(1)]);
if((state_val_29979 === (1))){
var state_29978__$1 = state_29978;
var statearr_29980_32083 = state_29978__$1;
(statearr_29980_32083[(2)] = null);

(statearr_29980_32083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (2))){
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29978__$1,(4),jobs);
} else {
if((state_val_29979 === (3))){
var inst_29976 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29978__$1,inst_29976);
} else {
if((state_val_29979 === (4))){
var inst_29968 = (state_29978[(2)]);
var inst_29969 = async(inst_29968);
var state_29978__$1 = state_29978;
if(cljs.core.truth_(inst_29969)){
var statearr_29983_32084 = state_29978__$1;
(statearr_29983_32084[(1)] = (5));

} else {
var statearr_29986_32085 = state_29978__$1;
(statearr_29986_32085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (5))){
var state_29978__$1 = state_29978;
var statearr_29987_32086 = state_29978__$1;
(statearr_29987_32086[(2)] = null);

(statearr_29987_32086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (6))){
var state_29978__$1 = state_29978;
var statearr_29990_32087 = state_29978__$1;
(statearr_29990_32087[(2)] = null);

(statearr_29990_32087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (7))){
var inst_29974 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29991_32088 = state_29978__$1;
(statearr_29991_32088[(2)] = inst_29974);

(statearr_29991_32088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32064,c__29636__auto___32082,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async))
;
return ((function (__32064,switch__29435__auto__,c__29636__auto___32082,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0 = (function (){
var statearr_29996 = [null,null,null,null,null,null,null];
(statearr_29996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__);

(statearr_29996[(1)] = (1));

return statearr_29996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1 = (function (state_29978){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_29978);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e29998){var ex__29439__auto__ = e29998;
var statearr_29999_32095 = state_29978;
(statearr_29999_32095[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_29978[(4)]))){
var statearr_30000_32096 = state_29978;
(statearr_30000_32096[(1)] = cljs.core.first((state_29978[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32098 = state_29978;
state_29978 = G__32098;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = function(state_29978){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1.call(this,state_29978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__;
})()
;})(__32064,switch__29435__auto__,c__29636__auto___32082,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async))
})();
var state__29638__auto__ = (function (){var statearr_30001 = f__29637__auto__();
(statearr_30001[(6)] = c__29636__auto___32082);

return statearr_30001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
});})(__32064,c__29636__auto___32082,G__29929_32065,G__29929_32066__$1,n__4613__auto___32063,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29929_32066__$1)].join('')));

}

var G__32099 = (__32064 + (1));
__32064 = G__32099;
continue;
} else {
}
break;
}

var c__29636__auto___32100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30021 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30031_32103 = state_30025__$1;
(statearr_30031_32103[(2)] = inst_30021);

(statearr_30031_32103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var state_30025__$1 = state_30025;
var statearr_30032_32104 = state_30025__$1;
(statearr_30032_32104[(2)] = null);

(statearr_30032_32104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_30006 = (state_30025[(7)]);
var inst_30006__$1 = (state_30025[(2)]);
var inst_30007 = (inst_30006__$1 == null);
var state_30025__$1 = (function (){var statearr_30037 = state_30025;
(statearr_30037[(7)] = inst_30006__$1);

return statearr_30037;
})();
if(cljs.core.truth_(inst_30007)){
var statearr_30038_32105 = state_30025__$1;
(statearr_30038_32105[(1)] = (5));

} else {
var statearr_30039_32106 = state_30025__$1;
(statearr_30039_32106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_30011 = (state_30025[(8)]);
var inst_30006 = (state_30025[(7)]);
var inst_30011__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30013 = [inst_30006,inst_30011__$1];
var inst_30014 = (new cljs.core.PersistentVector(null,2,(5),inst_30012,inst_30013,null));
var state_30025__$1 = (function (){var statearr_30041 = state_30025;
(statearr_30041[(8)] = inst_30011__$1);

return statearr_30041;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30025__$1,(8),jobs,inst_30014);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (2))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30025__$1,(4),from);
} else {
if((state_val_30026 === (9))){
var inst_30018 = (state_30025[(2)]);
var state_30025__$1 = (function (){var statearr_30042 = state_30025;
(statearr_30042[(9)] = inst_30018);

return statearr_30042;
})();
var statearr_30043_32132 = state_30025__$1;
(statearr_30043_32132[(2)] = null);

(statearr_30043_32132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_30009 = cljs.core.async.close_BANG_(jobs);
var state_30025__$1 = state_30025;
var statearr_30044_32133 = state_30025__$1;
(statearr_30044_32133[(2)] = inst_30009);

(statearr_30044_32133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_30011 = (state_30025[(8)]);
var inst_30016 = (state_30025[(2)]);
var state_30025__$1 = (function (){var statearr_30045 = state_30025;
(statearr_30045[(10)] = inst_30016);

return statearr_30045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30025__$1,(9),results,inst_30011);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0 = (function (){
var statearr_30048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__);

(statearr_30048[(1)] = (1));

return statearr_30048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1 = (function (state_30025){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_30025);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e30049){var ex__29439__auto__ = e30049;
var statearr_30050_32134 = state_30025;
(statearr_30050_32134[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_30025[(4)]))){
var statearr_30052_32135 = state_30025;
(statearr_30052_32135[(1)] = cljs.core.first((state_30025[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32136 = state_30025;
state_30025 = G__32136;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_30054 = f__29637__auto__();
(statearr_30054[(6)] = c__29636__auto___32100);

return statearr_30054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


var c__29636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_30092){
var state_val_30093 = (state_30092[(1)]);
if((state_val_30093 === (7))){
var inst_30088 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
var statearr_30094_32137 = state_30092__$1;
(statearr_30094_32137[(2)] = inst_30088);

(statearr_30094_32137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (20))){
var state_30092__$1 = state_30092;
var statearr_30095_32138 = state_30092__$1;
(statearr_30095_32138[(2)] = null);

(statearr_30095_32138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (1))){
var state_30092__$1 = state_30092;
var statearr_30096_32139 = state_30092__$1;
(statearr_30096_32139[(2)] = null);

(statearr_30096_32139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (4))){
var inst_30057 = (state_30092[(7)]);
var inst_30057__$1 = (state_30092[(2)]);
var inst_30058 = (inst_30057__$1 == null);
var state_30092__$1 = (function (){var statearr_30097 = state_30092;
(statearr_30097[(7)] = inst_30057__$1);

return statearr_30097;
})();
if(cljs.core.truth_(inst_30058)){
var statearr_30098_32146 = state_30092__$1;
(statearr_30098_32146[(1)] = (5));

} else {
var statearr_30099_32147 = state_30092__$1;
(statearr_30099_32147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (15))){
var inst_30070 = (state_30092[(8)]);
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30092__$1,(18),to,inst_30070);
} else {
if((state_val_30093 === (21))){
var inst_30083 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
var statearr_30100_32148 = state_30092__$1;
(statearr_30100_32148[(2)] = inst_30083);

(statearr_30100_32148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (13))){
var inst_30085 = (state_30092[(2)]);
var state_30092__$1 = (function (){var statearr_30101 = state_30092;
(statearr_30101[(9)] = inst_30085);

return statearr_30101;
})();
var statearr_30102_32152 = state_30092__$1;
(statearr_30102_32152[(2)] = null);

(statearr_30102_32152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (6))){
var inst_30057 = (state_30092[(7)]);
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30092__$1,(11),inst_30057);
} else {
if((state_val_30093 === (17))){
var inst_30078 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
if(cljs.core.truth_(inst_30078)){
var statearr_30103_32153 = state_30092__$1;
(statearr_30103_32153[(1)] = (19));

} else {
var statearr_30104_32154 = state_30092__$1;
(statearr_30104_32154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (3))){
var inst_30090 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30092__$1,inst_30090);
} else {
if((state_val_30093 === (12))){
var inst_30067 = (state_30092[(10)]);
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30092__$1,(14),inst_30067);
} else {
if((state_val_30093 === (2))){
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30092__$1,(4),results);
} else {
if((state_val_30093 === (19))){
var state_30092__$1 = state_30092;
var statearr_30105_32155 = state_30092__$1;
(statearr_30105_32155[(2)] = null);

(statearr_30105_32155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (11))){
var inst_30067 = (state_30092[(2)]);
var state_30092__$1 = (function (){var statearr_30106 = state_30092;
(statearr_30106[(10)] = inst_30067);

return statearr_30106;
})();
var statearr_30107_32162 = state_30092__$1;
(statearr_30107_32162[(2)] = null);

(statearr_30107_32162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (9))){
var state_30092__$1 = state_30092;
var statearr_30108_32163 = state_30092__$1;
(statearr_30108_32163[(2)] = null);

(statearr_30108_32163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (5))){
var state_30092__$1 = state_30092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30109_32164 = state_30092__$1;
(statearr_30109_32164[(1)] = (8));

} else {
var statearr_30110_32165 = state_30092__$1;
(statearr_30110_32165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (14))){
var inst_30070 = (state_30092[(8)]);
var inst_30070__$1 = (state_30092[(2)]);
var inst_30071 = (inst_30070__$1 == null);
var inst_30072 = cljs.core.not(inst_30071);
var state_30092__$1 = (function (){var statearr_30111 = state_30092;
(statearr_30111[(8)] = inst_30070__$1);

return statearr_30111;
})();
if(inst_30072){
var statearr_30112_32166 = state_30092__$1;
(statearr_30112_32166[(1)] = (15));

} else {
var statearr_30113_32167 = state_30092__$1;
(statearr_30113_32167[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (16))){
var state_30092__$1 = state_30092;
var statearr_30114_32168 = state_30092__$1;
(statearr_30114_32168[(2)] = false);

(statearr_30114_32168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (10))){
var inst_30064 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
var statearr_30115_32171 = state_30092__$1;
(statearr_30115_32171[(2)] = inst_30064);

(statearr_30115_32171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (18))){
var inst_30075 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
var statearr_30120_32172 = state_30092__$1;
(statearr_30120_32172[(2)] = inst_30075);

(statearr_30120_32172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (8))){
var inst_30061 = cljs.core.async.close_BANG_(to);
var state_30092__$1 = state_30092;
var statearr_30121_32173 = state_30092__$1;
(statearr_30121_32173[(2)] = inst_30061);

(statearr_30121_32173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0 = (function (){
var statearr_30123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__);

(statearr_30123[(1)] = (1));

return statearr_30123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1 = (function (state_30092){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_30092);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e30130){var ex__29439__auto__ = e30130;
var statearr_30131_32180 = state_30092;
(statearr_30131_32180[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_30092[(4)]))){
var statearr_30132_32181 = state_30092;
(statearr_30132_32181[(1)] = cljs.core.first((state_30092[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32182 = state_30092;
state_30092 = G__32182;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__ = function(state_30092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1.call(this,state_30092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_30133 = f__29637__auto__();
(statearr_30133[(6)] = c__29636__auto__);

return statearr_30133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));

return c__29636__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30140 = arguments.length;
switch (G__30140) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30142 = arguments.length;
switch (G__30142) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30144 = arguments.length;
switch (G__30144) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29636__auto___32186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_30171){
var state_val_30172 = (state_30171[(1)]);
if((state_val_30172 === (7))){
var inst_30167 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
var statearr_30173_32192 = state_30171__$1;
(statearr_30173_32192[(2)] = inst_30167);

(statearr_30173_32192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (1))){
var state_30171__$1 = state_30171;
var statearr_30175_32193 = state_30171__$1;
(statearr_30175_32193[(2)] = null);

(statearr_30175_32193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (4))){
var inst_30148 = (state_30171[(7)]);
var inst_30148__$1 = (state_30171[(2)]);
var inst_30149 = (inst_30148__$1 == null);
var state_30171__$1 = (function (){var statearr_30177 = state_30171;
(statearr_30177[(7)] = inst_30148__$1);

return statearr_30177;
})();
if(cljs.core.truth_(inst_30149)){
var statearr_30178_32194 = state_30171__$1;
(statearr_30178_32194[(1)] = (5));

} else {
var statearr_30180_32195 = state_30171__$1;
(statearr_30180_32195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (13))){
var state_30171__$1 = state_30171;
var statearr_30181_32196 = state_30171__$1;
(statearr_30181_32196[(2)] = null);

(statearr_30181_32196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (6))){
var inst_30148 = (state_30171[(7)]);
var inst_30154 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30148) : p.call(null,inst_30148));
var state_30171__$1 = state_30171;
if(cljs.core.truth_(inst_30154)){
var statearr_30182_32198 = state_30171__$1;
(statearr_30182_32198[(1)] = (9));

} else {
var statearr_30183_32199 = state_30171__$1;
(statearr_30183_32199[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (3))){
var inst_30169 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30171__$1,inst_30169);
} else {
if((state_val_30172 === (12))){
var state_30171__$1 = state_30171;
var statearr_30184_32201 = state_30171__$1;
(statearr_30184_32201[(2)] = null);

(statearr_30184_32201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (2))){
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30171__$1,(4),ch);
} else {
if((state_val_30172 === (11))){
var inst_30148 = (state_30171[(7)]);
var inst_30158 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30171__$1,(8),inst_30158,inst_30148);
} else {
if((state_val_30172 === (9))){
var state_30171__$1 = state_30171;
var statearr_30185_32203 = state_30171__$1;
(statearr_30185_32203[(2)] = tc);

(statearr_30185_32203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (5))){
var inst_30151 = cljs.core.async.close_BANG_(tc);
var inst_30152 = cljs.core.async.close_BANG_(fc);
var state_30171__$1 = (function (){var statearr_30186 = state_30171;
(statearr_30186[(8)] = inst_30151);

return statearr_30186;
})();
var statearr_30187_32205 = state_30171__$1;
(statearr_30187_32205[(2)] = inst_30152);

(statearr_30187_32205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (14))){
var inst_30165 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
var statearr_30188_32211 = state_30171__$1;
(statearr_30188_32211[(2)] = inst_30165);

(statearr_30188_32211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (10))){
var state_30171__$1 = state_30171;
var statearr_30189_32212 = state_30171__$1;
(statearr_30189_32212[(2)] = fc);

(statearr_30189_32212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (8))){
var inst_30160 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
if(cljs.core.truth_(inst_30160)){
var statearr_30190_32213 = state_30171__$1;
(statearr_30190_32213[(1)] = (12));

} else {
var statearr_30191_32214 = state_30171__$1;
(statearr_30191_32214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_30192 = [null,null,null,null,null,null,null,null,null];
(statearr_30192[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_30192[(1)] = (1));

return statearr_30192;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_30171){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_30171);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e30193){var ex__29439__auto__ = e30193;
var statearr_30194_32215 = state_30171;
(statearr_30194_32215[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_30171[(4)]))){
var statearr_30195_32216 = state_30171;
(statearr_30195_32216[(1)] = cljs.core.first((state_30171[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32217 = state_30171;
state_30171 = G__32217;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_30171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_30171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_30196 = f__29637__auto__();
(statearr_30196[(6)] = c__29636__auto___32186);

return statearr_30196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_30218){
var state_val_30219 = (state_30218[(1)]);
if((state_val_30219 === (7))){
var inst_30214 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
var statearr_30227_32218 = state_30218__$1;
(statearr_30227_32218[(2)] = inst_30214);

(statearr_30227_32218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (1))){
var inst_30197 = init;
var inst_30198 = inst_30197;
var state_30218__$1 = (function (){var statearr_30231 = state_30218;
(statearr_30231[(7)] = inst_30198);

return statearr_30231;
})();
var statearr_30232_32219 = state_30218__$1;
(statearr_30232_32219[(2)] = null);

(statearr_30232_32219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (4))){
var inst_30201 = (state_30218[(8)]);
var inst_30201__$1 = (state_30218[(2)]);
var inst_30202 = (inst_30201__$1 == null);
var state_30218__$1 = (function (){var statearr_30233 = state_30218;
(statearr_30233[(8)] = inst_30201__$1);

return statearr_30233;
})();
if(cljs.core.truth_(inst_30202)){
var statearr_30234_32224 = state_30218__$1;
(statearr_30234_32224[(1)] = (5));

} else {
var statearr_30235_32229 = state_30218__$1;
(statearr_30235_32229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (6))){
var inst_30201 = (state_30218[(8)]);
var inst_30205 = (state_30218[(9)]);
var inst_30198 = (state_30218[(7)]);
var inst_30205__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30198,inst_30201) : f.call(null,inst_30198,inst_30201));
var inst_30206 = cljs.core.reduced_QMARK_(inst_30205__$1);
var state_30218__$1 = (function (){var statearr_30236 = state_30218;
(statearr_30236[(9)] = inst_30205__$1);

return statearr_30236;
})();
if(inst_30206){
var statearr_30237_32230 = state_30218__$1;
(statearr_30237_32230[(1)] = (8));

} else {
var statearr_30238_32231 = state_30218__$1;
(statearr_30238_32231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (3))){
var inst_30216 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30218__$1,inst_30216);
} else {
if((state_val_30219 === (2))){
var state_30218__$1 = state_30218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30218__$1,(4),ch);
} else {
if((state_val_30219 === (9))){
var inst_30205 = (state_30218[(9)]);
var inst_30198 = inst_30205;
var state_30218__$1 = (function (){var statearr_30240 = state_30218;
(statearr_30240[(7)] = inst_30198);

return statearr_30240;
})();
var statearr_30241_32232 = state_30218__$1;
(statearr_30241_32232[(2)] = null);

(statearr_30241_32232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (5))){
var inst_30198 = (state_30218[(7)]);
var state_30218__$1 = state_30218;
var statearr_30242_32233 = state_30218__$1;
(statearr_30242_32233[(2)] = inst_30198);

(statearr_30242_32233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (10))){
var inst_30212 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
var statearr_30243_32234 = state_30218__$1;
(statearr_30243_32234[(2)] = inst_30212);

(statearr_30243_32234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (8))){
var inst_30205 = (state_30218[(9)]);
var inst_30208 = cljs.core.deref(inst_30205);
var state_30218__$1 = state_30218;
var statearr_30244_32235 = state_30218__$1;
(statearr_30244_32235[(2)] = inst_30208);

(statearr_30244_32235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29436__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29436__auto____0 = (function (){
var statearr_30245 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30245[(0)] = cljs$core$async$reduce_$_state_machine__29436__auto__);

(statearr_30245[(1)] = (1));

return statearr_30245;
});
var cljs$core$async$reduce_$_state_machine__29436__auto____1 = (function (state_30218){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_30218);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e30246){var ex__29439__auto__ = e30246;
var statearr_30247_32244 = state_30218;
(statearr_30247_32244[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_30218[(4)]))){
var statearr_30248_32260 = state_30218;
(statearr_30248_32260[(1)] = cljs.core.first((state_30218[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32261 = state_30218;
state_30218 = G__32261;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29436__auto__ = function(state_30218){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29436__auto____1.call(this,state_30218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29436__auto____0;
cljs$core$async$reduce_$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29436__auto____1;
return cljs$core$async$reduce_$_state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_30249 = f__29637__auto__();
(statearr_30249[(6)] = c__29636__auto__);

return statearr_30249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));

return c__29636__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_30255){
var state_val_30256 = (state_30255[(1)]);
if((state_val_30256 === (1))){
var inst_30250 = cljs.core.async.reduce(f__$1,init,ch);
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30255__$1,(2),inst_30250);
} else {
if((state_val_30256 === (2))){
var inst_30252 = (state_30255[(2)]);
var inst_30253 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30252) : f__$1.call(null,inst_30252));
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30255__$1,inst_30253);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29436__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29436__auto____0 = (function (){
var statearr_30257 = [null,null,null,null,null,null,null];
(statearr_30257[(0)] = cljs$core$async$transduce_$_state_machine__29436__auto__);

(statearr_30257[(1)] = (1));

return statearr_30257;
});
var cljs$core$async$transduce_$_state_machine__29436__auto____1 = (function (state_30255){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_30255);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e30258){var ex__29439__auto__ = e30258;
var statearr_30259_32264 = state_30255;
(statearr_30259_32264[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_30255[(4)]))){
var statearr_30260_32265 = state_30255;
(statearr_30260_32265[(1)] = cljs.core.first((state_30255[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32266 = state_30255;
state_30255 = G__32266;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29436__auto__ = function(state_30255){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29436__auto____1.call(this,state_30255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29436__auto____0;
cljs$core$async$transduce_$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29436__auto____1;
return cljs$core$async$transduce_$_state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_30261 = f__29637__auto__();
(statearr_30261[(6)] = c__29636__auto__);

return statearr_30261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));

return c__29636__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30263 = arguments.length;
switch (G__30263) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_30288){
var state_val_30289 = (state_30288[(1)]);
if((state_val_30289 === (7))){
var inst_30270 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30290_32268 = state_30288__$1;
(statearr_30290_32268[(2)] = inst_30270);

(statearr_30290_32268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (1))){
var inst_30264 = cljs.core.seq(coll);
var inst_30265 = inst_30264;
var state_30288__$1 = (function (){var statearr_30291 = state_30288;
(statearr_30291[(7)] = inst_30265);

return statearr_30291;
})();
var statearr_30296_32270 = state_30288__$1;
(statearr_30296_32270[(2)] = null);

(statearr_30296_32270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (4))){
var inst_30265 = (state_30288[(7)]);
var inst_30268 = cljs.core.first(inst_30265);
var state_30288__$1 = state_30288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30288__$1,(7),ch,inst_30268);
} else {
if((state_val_30289 === (13))){
var inst_30282 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30301_32271 = state_30288__$1;
(statearr_30301_32271[(2)] = inst_30282);

(statearr_30301_32271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (6))){
var inst_30273 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
if(cljs.core.truth_(inst_30273)){
var statearr_30306_32272 = state_30288__$1;
(statearr_30306_32272[(1)] = (8));

} else {
var statearr_30307_32273 = state_30288__$1;
(statearr_30307_32273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (3))){
var inst_30286 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30288__$1,inst_30286);
} else {
if((state_val_30289 === (12))){
var state_30288__$1 = state_30288;
var statearr_30308_32278 = state_30288__$1;
(statearr_30308_32278[(2)] = null);

(statearr_30308_32278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (2))){
var inst_30265 = (state_30288[(7)]);
var state_30288__$1 = state_30288;
if(cljs.core.truth_(inst_30265)){
var statearr_30309_32279 = state_30288__$1;
(statearr_30309_32279[(1)] = (4));

} else {
var statearr_30310_32280 = state_30288__$1;
(statearr_30310_32280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (11))){
var inst_30279 = cljs.core.async.close_BANG_(ch);
var state_30288__$1 = state_30288;
var statearr_30311_32281 = state_30288__$1;
(statearr_30311_32281[(2)] = inst_30279);

(statearr_30311_32281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (9))){
var state_30288__$1 = state_30288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30313_32282 = state_30288__$1;
(statearr_30313_32282[(1)] = (11));

} else {
var statearr_30315_32283 = state_30288__$1;
(statearr_30315_32283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (5))){
var inst_30265 = (state_30288[(7)]);
var state_30288__$1 = state_30288;
var statearr_30316_32284 = state_30288__$1;
(statearr_30316_32284[(2)] = inst_30265);

(statearr_30316_32284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (10))){
var inst_30284 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30317_32289 = state_30288__$1;
(statearr_30317_32289[(2)] = inst_30284);

(statearr_30317_32289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (8))){
var inst_30265 = (state_30288[(7)]);
var inst_30275 = cljs.core.next(inst_30265);
var inst_30265__$1 = inst_30275;
var state_30288__$1 = (function (){var statearr_30318 = state_30288;
(statearr_30318[(7)] = inst_30265__$1);

return statearr_30318;
})();
var statearr_30319_32291 = state_30288__$1;
(statearr_30319_32291[(2)] = null);

(statearr_30319_32291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_30320 = [null,null,null,null,null,null,null,null];
(statearr_30320[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_30320[(1)] = (1));

return statearr_30320;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_30288){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_30288);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e30321){var ex__29439__auto__ = e30321;
var statearr_30322_32297 = state_30288;
(statearr_30322_32297[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_30288[(4)]))){
var statearr_30323_32298 = state_30288;
(statearr_30323_32298[(1)] = cljs.core.first((state_30288[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32299 = state_30288;
state_30288 = G__32299;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_30288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_30288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_30324 = f__29637__auto__();
(statearr_30324[(6)] = c__29636__auto__);

return statearr_30324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));

return c__29636__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30326 = arguments.length;
switch (G__30326) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32301 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32301(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32302 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32302(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32303 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32303(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32304 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32304(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30354 = (function (ch,cs,meta30355){
this.ch = ch;
this.cs = cs;
this.meta30355 = meta30355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30356,meta30355__$1){
var self__ = this;
var _30356__$1 = this;
return (new cljs.core.async.t_cljs$core$async30354(self__.ch,self__.cs,meta30355__$1));
}));

(cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30356){
var self__ = this;
var _30356__$1 = this;
return self__.meta30355;
}));

(cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30355","meta30355",2012759973,null)], null);
}));

(cljs.core.async.t_cljs$core$async30354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30354");

(cljs.core.async.t_cljs$core$async30354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30354.
 */
cljs.core.async.__GT_t_cljs$core$async30354 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30354(ch__$1,cs__$1,meta30355){
return (new cljs.core.async.t_cljs$core$async30354(ch__$1,cs__$1,meta30355));
});

}

return (new cljs.core.async.t_cljs$core$async30354(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29636__auto___32305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_30502){
var state_val_30503 = (state_30502[(1)]);
if((state_val_30503 === (7))){
var inst_30498 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30504_32306 = state_30502__$1;
(statearr_30504_32306[(2)] = inst_30498);

(statearr_30504_32306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (20))){
var inst_30399 = (state_30502[(7)]);
var inst_30411 = cljs.core.first(inst_30399);
var inst_30412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30411,(0),null);
var inst_30413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30411,(1),null);
var state_30502__$1 = (function (){var statearr_30505 = state_30502;
(statearr_30505[(8)] = inst_30412);

return statearr_30505;
})();
if(cljs.core.truth_(inst_30413)){
var statearr_30506_32310 = state_30502__$1;
(statearr_30506_32310[(1)] = (22));

} else {
var statearr_30507_32311 = state_30502__$1;
(statearr_30507_32311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (27))){
var inst_30368 = (state_30502[(9)]);
var inst_30451 = (state_30502[(10)]);
var inst_30441 = (state_30502[(11)]);
var inst_30443 = (state_30502[(12)]);
var inst_30451__$1 = cljs.core._nth(inst_30441,inst_30443);
var inst_30452 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30451__$1,inst_30368,done);
var state_30502__$1 = (function (){var statearr_30508 = state_30502;
(statearr_30508[(10)] = inst_30451__$1);

return statearr_30508;
})();
if(cljs.core.truth_(inst_30452)){
var statearr_30509_32312 = state_30502__$1;
(statearr_30509_32312[(1)] = (30));

} else {
var statearr_30510_32313 = state_30502__$1;
(statearr_30510_32313[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (1))){
var state_30502__$1 = state_30502;
var statearr_30511_32314 = state_30502__$1;
(statearr_30511_32314[(2)] = null);

(statearr_30511_32314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (24))){
var inst_30399 = (state_30502[(7)]);
var inst_30418 = (state_30502[(2)]);
var inst_30419 = cljs.core.next(inst_30399);
var inst_30377 = inst_30419;
var inst_30378 = null;
var inst_30379 = (0);
var inst_30380 = (0);
var state_30502__$1 = (function (){var statearr_30518 = state_30502;
(statearr_30518[(13)] = inst_30418);

(statearr_30518[(14)] = inst_30377);

(statearr_30518[(15)] = inst_30380);

(statearr_30518[(16)] = inst_30378);

(statearr_30518[(17)] = inst_30379);

return statearr_30518;
})();
var statearr_30521_32315 = state_30502__$1;
(statearr_30521_32315[(2)] = null);

(statearr_30521_32315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (39))){
var state_30502__$1 = state_30502;
var statearr_30528_32316 = state_30502__$1;
(statearr_30528_32316[(2)] = null);

(statearr_30528_32316[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (4))){
var inst_30368 = (state_30502[(9)]);
var inst_30368__$1 = (state_30502[(2)]);
var inst_30369 = (inst_30368__$1 == null);
var state_30502__$1 = (function (){var statearr_30533 = state_30502;
(statearr_30533[(9)] = inst_30368__$1);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30369)){
var statearr_30536_32317 = state_30502__$1;
(statearr_30536_32317[(1)] = (5));

} else {
var statearr_30537_32318 = state_30502__$1;
(statearr_30537_32318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (15))){
var inst_30377 = (state_30502[(14)]);
var inst_30380 = (state_30502[(15)]);
var inst_30378 = (state_30502[(16)]);
var inst_30379 = (state_30502[(17)]);
var inst_30395 = (state_30502[(2)]);
var inst_30396 = (inst_30380 + (1));
var tmp30525 = inst_30377;
var tmp30526 = inst_30378;
var tmp30527 = inst_30379;
var inst_30377__$1 = tmp30525;
var inst_30378__$1 = tmp30526;
var inst_30379__$1 = tmp30527;
var inst_30380__$1 = inst_30396;
var state_30502__$1 = (function (){var statearr_30543 = state_30502;
(statearr_30543[(14)] = inst_30377__$1);

(statearr_30543[(15)] = inst_30380__$1);

(statearr_30543[(16)] = inst_30378__$1);

(statearr_30543[(17)] = inst_30379__$1);

(statearr_30543[(18)] = inst_30395);

return statearr_30543;
})();
var statearr_30545_32320 = state_30502__$1;
(statearr_30545_32320[(2)] = null);

(statearr_30545_32320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (21))){
var inst_30422 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30551_32321 = state_30502__$1;
(statearr_30551_32321[(2)] = inst_30422);

(statearr_30551_32321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (31))){
var inst_30451 = (state_30502[(10)]);
var inst_30455 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30451);
var state_30502__$1 = state_30502;
var statearr_30552_32322 = state_30502__$1;
(statearr_30552_32322[(2)] = inst_30455);

(statearr_30552_32322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (32))){
var inst_30441 = (state_30502[(11)]);
var inst_30440 = (state_30502[(19)]);
var inst_30443 = (state_30502[(12)]);
var inst_30442 = (state_30502[(20)]);
var inst_30457 = (state_30502[(2)]);
var inst_30458 = (inst_30443 + (1));
var tmp30547 = inst_30441;
var tmp30548 = inst_30440;
var tmp30549 = inst_30442;
var inst_30440__$1 = tmp30548;
var inst_30441__$1 = tmp30547;
var inst_30442__$1 = tmp30549;
var inst_30443__$1 = inst_30458;
var state_30502__$1 = (function (){var statearr_30553 = state_30502;
(statearr_30553[(11)] = inst_30441__$1);

(statearr_30553[(19)] = inst_30440__$1);

(statearr_30553[(12)] = inst_30443__$1);

(statearr_30553[(20)] = inst_30442__$1);

(statearr_30553[(21)] = inst_30457);

return statearr_30553;
})();
var statearr_30560_32323 = state_30502__$1;
(statearr_30560_32323[(2)] = null);

(statearr_30560_32323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (40))){
var inst_30471 = (state_30502[(22)]);
var inst_30475 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30471);
var state_30502__$1 = state_30502;
var statearr_30563_32324 = state_30502__$1;
(statearr_30563_32324[(2)] = inst_30475);

(statearr_30563_32324[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (33))){
var inst_30462 = (state_30502[(23)]);
var inst_30464 = cljs.core.chunked_seq_QMARK_(inst_30462);
var state_30502__$1 = state_30502;
if(inst_30464){
var statearr_30568_32325 = state_30502__$1;
(statearr_30568_32325[(1)] = (36));

} else {
var statearr_30569_32326 = state_30502__$1;
(statearr_30569_32326[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (13))){
var inst_30389 = (state_30502[(24)]);
var inst_30392 = cljs.core.async.close_BANG_(inst_30389);
var state_30502__$1 = state_30502;
var statearr_30570_32327 = state_30502__$1;
(statearr_30570_32327[(2)] = inst_30392);

(statearr_30570_32327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (22))){
var inst_30412 = (state_30502[(8)]);
var inst_30415 = cljs.core.async.close_BANG_(inst_30412);
var state_30502__$1 = state_30502;
var statearr_30573_32332 = state_30502__$1;
(statearr_30573_32332[(2)] = inst_30415);

(statearr_30573_32332[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (36))){
var inst_30462 = (state_30502[(23)]);
var inst_30466 = cljs.core.chunk_first(inst_30462);
var inst_30467 = cljs.core.chunk_rest(inst_30462);
var inst_30468 = cljs.core.count(inst_30466);
var inst_30440 = inst_30467;
var inst_30441 = inst_30466;
var inst_30442 = inst_30468;
var inst_30443 = (0);
var state_30502__$1 = (function (){var statearr_30575 = state_30502;
(statearr_30575[(11)] = inst_30441);

(statearr_30575[(19)] = inst_30440);

(statearr_30575[(12)] = inst_30443);

(statearr_30575[(20)] = inst_30442);

return statearr_30575;
})();
var statearr_30577_32334 = state_30502__$1;
(statearr_30577_32334[(2)] = null);

(statearr_30577_32334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (41))){
var inst_30462 = (state_30502[(23)]);
var inst_30477 = (state_30502[(2)]);
var inst_30478 = cljs.core.next(inst_30462);
var inst_30440 = inst_30478;
var inst_30441 = null;
var inst_30442 = (0);
var inst_30443 = (0);
var state_30502__$1 = (function (){var statearr_30579 = state_30502;
(statearr_30579[(25)] = inst_30477);

(statearr_30579[(11)] = inst_30441);

(statearr_30579[(19)] = inst_30440);

(statearr_30579[(12)] = inst_30443);

(statearr_30579[(20)] = inst_30442);

return statearr_30579;
})();
var statearr_30580_32336 = state_30502__$1;
(statearr_30580_32336[(2)] = null);

(statearr_30580_32336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (43))){
var state_30502__$1 = state_30502;
var statearr_30589_32337 = state_30502__$1;
(statearr_30589_32337[(2)] = null);

(statearr_30589_32337[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (29))){
var inst_30486 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30594_32338 = state_30502__$1;
(statearr_30594_32338[(2)] = inst_30486);

(statearr_30594_32338[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (44))){
var inst_30495 = (state_30502[(2)]);
var state_30502__$1 = (function (){var statearr_30599 = state_30502;
(statearr_30599[(26)] = inst_30495);

return statearr_30599;
})();
var statearr_30600_32341 = state_30502__$1;
(statearr_30600_32341[(2)] = null);

(statearr_30600_32341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (6))){
var inst_30432 = (state_30502[(27)]);
var inst_30431 = cljs.core.deref(cs);
var inst_30432__$1 = cljs.core.keys(inst_30431);
var inst_30433 = cljs.core.count(inst_30432__$1);
var inst_30434 = cljs.core.reset_BANG_(dctr,inst_30433);
var inst_30439 = cljs.core.seq(inst_30432__$1);
var inst_30440 = inst_30439;
var inst_30441 = null;
var inst_30442 = (0);
var inst_30443 = (0);
var state_30502__$1 = (function (){var statearr_30604 = state_30502;
(statearr_30604[(11)] = inst_30441);

(statearr_30604[(28)] = inst_30434);

(statearr_30604[(19)] = inst_30440);

(statearr_30604[(12)] = inst_30443);

(statearr_30604[(27)] = inst_30432__$1);

(statearr_30604[(20)] = inst_30442);

return statearr_30604;
})();
var statearr_30605_32350 = state_30502__$1;
(statearr_30605_32350[(2)] = null);

(statearr_30605_32350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (28))){
var inst_30462 = (state_30502[(23)]);
var inst_30440 = (state_30502[(19)]);
var inst_30462__$1 = cljs.core.seq(inst_30440);
var state_30502__$1 = (function (){var statearr_30606 = state_30502;
(statearr_30606[(23)] = inst_30462__$1);

return statearr_30606;
})();
if(inst_30462__$1){
var statearr_30607_32380 = state_30502__$1;
(statearr_30607_32380[(1)] = (33));

} else {
var statearr_30608_32381 = state_30502__$1;
(statearr_30608_32381[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (25))){
var inst_30443 = (state_30502[(12)]);
var inst_30442 = (state_30502[(20)]);
var inst_30445 = (inst_30443 < inst_30442);
var inst_30446 = inst_30445;
var state_30502__$1 = state_30502;
if(cljs.core.truth_(inst_30446)){
var statearr_30609_32382 = state_30502__$1;
(statearr_30609_32382[(1)] = (27));

} else {
var statearr_30610_32383 = state_30502__$1;
(statearr_30610_32383[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (34))){
var state_30502__$1 = state_30502;
var statearr_30611_32384 = state_30502__$1;
(statearr_30611_32384[(2)] = null);

(statearr_30611_32384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (17))){
var state_30502__$1 = state_30502;
var statearr_30612_32385 = state_30502__$1;
(statearr_30612_32385[(2)] = null);

(statearr_30612_32385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (3))){
var inst_30500 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30502__$1,inst_30500);
} else {
if((state_val_30503 === (12))){
var inst_30427 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30613_32387 = state_30502__$1;
(statearr_30613_32387[(2)] = inst_30427);

(statearr_30613_32387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (2))){
var state_30502__$1 = state_30502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30502__$1,(4),ch);
} else {
if((state_val_30503 === (23))){
var state_30502__$1 = state_30502;
var statearr_30615_32392 = state_30502__$1;
(statearr_30615_32392[(2)] = null);

(statearr_30615_32392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (35))){
var inst_30484 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30620_32394 = state_30502__$1;
(statearr_30620_32394[(2)] = inst_30484);

(statearr_30620_32394[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (19))){
var inst_30399 = (state_30502[(7)]);
var inst_30403 = cljs.core.chunk_first(inst_30399);
var inst_30404 = cljs.core.chunk_rest(inst_30399);
var inst_30405 = cljs.core.count(inst_30403);
var inst_30377 = inst_30404;
var inst_30378 = inst_30403;
var inst_30379 = inst_30405;
var inst_30380 = (0);
var state_30502__$1 = (function (){var statearr_30621 = state_30502;
(statearr_30621[(14)] = inst_30377);

(statearr_30621[(15)] = inst_30380);

(statearr_30621[(16)] = inst_30378);

(statearr_30621[(17)] = inst_30379);

return statearr_30621;
})();
var statearr_30623_32400 = state_30502__$1;
(statearr_30623_32400[(2)] = null);

(statearr_30623_32400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (11))){
var inst_30399 = (state_30502[(7)]);
var inst_30377 = (state_30502[(14)]);
var inst_30399__$1 = cljs.core.seq(inst_30377);
var state_30502__$1 = (function (){var statearr_30627 = state_30502;
(statearr_30627[(7)] = inst_30399__$1);

return statearr_30627;
})();
if(inst_30399__$1){
var statearr_30628_32406 = state_30502__$1;
(statearr_30628_32406[(1)] = (16));

} else {
var statearr_30629_32407 = state_30502__$1;
(statearr_30629_32407[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (9))){
var inst_30429 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30630_32408 = state_30502__$1;
(statearr_30630_32408[(2)] = inst_30429);

(statearr_30630_32408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (5))){
var inst_30375 = cljs.core.deref(cs);
var inst_30376 = cljs.core.seq(inst_30375);
var inst_30377 = inst_30376;
var inst_30378 = null;
var inst_30379 = (0);
var inst_30380 = (0);
var state_30502__$1 = (function (){var statearr_30631 = state_30502;
(statearr_30631[(14)] = inst_30377);

(statearr_30631[(15)] = inst_30380);

(statearr_30631[(16)] = inst_30378);

(statearr_30631[(17)] = inst_30379);

return statearr_30631;
})();
var statearr_30634_32409 = state_30502__$1;
(statearr_30634_32409[(2)] = null);

(statearr_30634_32409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (14))){
var state_30502__$1 = state_30502;
var statearr_30637_32410 = state_30502__$1;
(statearr_30637_32410[(2)] = null);

(statearr_30637_32410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (45))){
var inst_30492 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30640_32411 = state_30502__$1;
(statearr_30640_32411[(2)] = inst_30492);

(statearr_30640_32411[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (26))){
var inst_30432 = (state_30502[(27)]);
var inst_30488 = (state_30502[(2)]);
var inst_30489 = cljs.core.seq(inst_30432);
var state_30502__$1 = (function (){var statearr_30644 = state_30502;
(statearr_30644[(29)] = inst_30488);

return statearr_30644;
})();
if(inst_30489){
var statearr_30650_32412 = state_30502__$1;
(statearr_30650_32412[(1)] = (42));

} else {
var statearr_30651_32414 = state_30502__$1;
(statearr_30651_32414[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (16))){
var inst_30399 = (state_30502[(7)]);
var inst_30401 = cljs.core.chunked_seq_QMARK_(inst_30399);
var state_30502__$1 = state_30502;
if(inst_30401){
var statearr_30659_32415 = state_30502__$1;
(statearr_30659_32415[(1)] = (19));

} else {
var statearr_30664_32416 = state_30502__$1;
(statearr_30664_32416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (38))){
var inst_30481 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30666_32417 = state_30502__$1;
(statearr_30666_32417[(2)] = inst_30481);

(statearr_30666_32417[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (30))){
var state_30502__$1 = state_30502;
var statearr_30669_32418 = state_30502__$1;
(statearr_30669_32418[(2)] = null);

(statearr_30669_32418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (10))){
var inst_30380 = (state_30502[(15)]);
var inst_30378 = (state_30502[(16)]);
var inst_30388 = cljs.core._nth(inst_30378,inst_30380);
var inst_30389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30388,(0),null);
var inst_30390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30388,(1),null);
var state_30502__$1 = (function (){var statearr_30670 = state_30502;
(statearr_30670[(24)] = inst_30389);

return statearr_30670;
})();
if(cljs.core.truth_(inst_30390)){
var statearr_30672_32419 = state_30502__$1;
(statearr_30672_32419[(1)] = (13));

} else {
var statearr_30674_32420 = state_30502__$1;
(statearr_30674_32420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (18))){
var inst_30425 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30677_32422 = state_30502__$1;
(statearr_30677_32422[(2)] = inst_30425);

(statearr_30677_32422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (42))){
var state_30502__$1 = state_30502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30502__$1,(45),dchan);
} else {
if((state_val_30503 === (37))){
var inst_30368 = (state_30502[(9)]);
var inst_30462 = (state_30502[(23)]);
var inst_30471 = (state_30502[(22)]);
var inst_30471__$1 = cljs.core.first(inst_30462);
var inst_30472 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30471__$1,inst_30368,done);
var state_30502__$1 = (function (){var statearr_30680 = state_30502;
(statearr_30680[(22)] = inst_30471__$1);

return statearr_30680;
})();
if(cljs.core.truth_(inst_30472)){
var statearr_30682_32431 = state_30502__$1;
(statearr_30682_32431[(1)] = (39));

} else {
var statearr_30683_32432 = state_30502__$1;
(statearr_30683_32432[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (8))){
var inst_30380 = (state_30502[(15)]);
var inst_30379 = (state_30502[(17)]);
var inst_30382 = (inst_30380 < inst_30379);
var inst_30383 = inst_30382;
var state_30502__$1 = state_30502;
if(cljs.core.truth_(inst_30383)){
var statearr_30684_32433 = state_30502__$1;
(statearr_30684_32433[(1)] = (10));

} else {
var statearr_30685_32434 = state_30502__$1;
(statearr_30685_32434[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29436__auto__ = null;
var cljs$core$async$mult_$_state_machine__29436__auto____0 = (function (){
var statearr_30689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30689[(0)] = cljs$core$async$mult_$_state_machine__29436__auto__);

(statearr_30689[(1)] = (1));

return statearr_30689;
});
var cljs$core$async$mult_$_state_machine__29436__auto____1 = (function (state_30502){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_30502);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e30693){var ex__29439__auto__ = e30693;
var statearr_30694_32435 = state_30502;
(statearr_30694_32435[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_30502[(4)]))){
var statearr_30696_32437 = state_30502;
(statearr_30696_32437[(1)] = cljs.core.first((state_30502[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32441 = state_30502;
state_30502 = G__32441;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29436__auto__ = function(state_30502){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29436__auto____1.call(this,state_30502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29436__auto____0;
cljs$core$async$mult_$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29436__auto____1;
return cljs$core$async$mult_$_state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_30701 = f__29637__auto__();
(statearr_30701[(6)] = c__29636__auto___32305);

return statearr_30701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30715 = arguments.length;
switch (G__30715) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32449 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32449(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32457 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32457(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32458 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32458(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32459 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32459(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32461 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32461(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32465 = arguments.length;
var i__4737__auto___32466 = (0);
while(true){
if((i__4737__auto___32466 < len__4736__auto___32465)){
args__4742__auto__.push((arguments[i__4737__auto___32466]));

var G__32467 = (i__4737__auto___32466 + (1));
i__4737__auto___32466 = G__32467;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30797){
var map__30798 = p__30797;
var map__30798__$1 = (((((!((map__30798 == null))))?(((((map__30798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30798):map__30798);
var opts = map__30798__$1;
var statearr_30804_32468 = state;
(statearr_30804_32468[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30806_32469 = state;
(statearr_30806_32469[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30809_32470 = state;
(statearr_30809_32470[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30785){
var G__30786 = cljs.core.first(seq30785);
var seq30785__$1 = cljs.core.next(seq30785);
var G__30791 = cljs.core.first(seq30785__$1);
var seq30785__$2 = cljs.core.next(seq30785__$1);
var G__30792 = cljs.core.first(seq30785__$2);
var seq30785__$3 = cljs.core.next(seq30785__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30786,G__30791,G__30792,seq30785__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30846 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30847){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30847 = meta30847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30848,meta30847__$1){
var self__ = this;
var _30848__$1 = this;
return (new cljs.core.async.t_cljs$core$async30846(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30847__$1));
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30848){
var self__ = this;
var _30848__$1 = this;
return self__.meta30847;
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30847","meta30847",616586455,null)], null);
}));

(cljs.core.async.t_cljs$core$async30846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30846");

(cljs.core.async.t_cljs$core$async30846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30846.
 */
cljs.core.async.__GT_t_cljs$core$async30846 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30846(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30847){
return (new cljs.core.async.t_cljs$core$async30846(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30847));
});

}

return (new cljs.core.async.t_cljs$core$async30846(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29636__auto___32491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_30973){
var state_val_30974 = (state_30973[(1)]);
if((state_val_30974 === (7))){
var inst_30886 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_30977_32492 = state_30973__$1;
(statearr_30977_32492[(2)] = inst_30886);

(statearr_30977_32492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (20))){
var inst_30899 = (state_30973[(7)]);
var state_30973__$1 = state_30973;
var statearr_30978_32493 = state_30973__$1;
(statearr_30978_32493[(2)] = inst_30899);

(statearr_30978_32493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (27))){
var state_30973__$1 = state_30973;
var statearr_30979_32497 = state_30973__$1;
(statearr_30979_32497[(2)] = null);

(statearr_30979_32497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (1))){
var inst_30872 = (state_30973[(8)]);
var inst_30872__$1 = calc_state();
var inst_30874 = (inst_30872__$1 == null);
var inst_30875 = cljs.core.not(inst_30874);
var state_30973__$1 = (function (){var statearr_30980 = state_30973;
(statearr_30980[(8)] = inst_30872__$1);

return statearr_30980;
})();
if(inst_30875){
var statearr_30981_32504 = state_30973__$1;
(statearr_30981_32504[(1)] = (2));

} else {
var statearr_30982_32505 = state_30973__$1;
(statearr_30982_32505[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (24))){
var inst_30946 = (state_30973[(9)]);
var inst_30923 = (state_30973[(10)]);
var inst_30932 = (state_30973[(11)]);
var inst_30946__$1 = (inst_30923.cljs$core$IFn$_invoke$arity$1 ? inst_30923.cljs$core$IFn$_invoke$arity$1(inst_30932) : inst_30923.call(null,inst_30932));
var state_30973__$1 = (function (){var statearr_30984 = state_30973;
(statearr_30984[(9)] = inst_30946__$1);

return statearr_30984;
})();
if(cljs.core.truth_(inst_30946__$1)){
var statearr_30985_32512 = state_30973__$1;
(statearr_30985_32512[(1)] = (29));

} else {
var statearr_30986_32513 = state_30973__$1;
(statearr_30986_32513[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (4))){
var inst_30889 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30889)){
var statearr_30987_32514 = state_30973__$1;
(statearr_30987_32514[(1)] = (8));

} else {
var statearr_30988_32515 = state_30973__$1;
(statearr_30988_32515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (15))){
var inst_30917 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30917)){
var statearr_30993_32516 = state_30973__$1;
(statearr_30993_32516[(1)] = (19));

} else {
var statearr_30994_32517 = state_30973__$1;
(statearr_30994_32517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (21))){
var inst_30922 = (state_30973[(12)]);
var inst_30922__$1 = (state_30973[(2)]);
var inst_30923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30922__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30922__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30922__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30973__$1 = (function (){var statearr_31003 = state_30973;
(statearr_31003[(12)] = inst_30922__$1);

(statearr_31003[(13)] = inst_30924);

(statearr_31003[(10)] = inst_30923);

return statearr_31003;
})();
return cljs.core.async.ioc_alts_BANG_(state_30973__$1,(22),inst_30925);
} else {
if((state_val_30974 === (31))){
var inst_30954 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30954)){
var statearr_31004_32518 = state_30973__$1;
(statearr_31004_32518[(1)] = (32));

} else {
var statearr_31005_32519 = state_30973__$1;
(statearr_31005_32519[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (32))){
var inst_30931 = (state_30973[(14)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30973__$1,(35),out,inst_30931);
} else {
if((state_val_30974 === (33))){
var inst_30922 = (state_30973[(12)]);
var inst_30899 = inst_30922;
var state_30973__$1 = (function (){var statearr_31007 = state_30973;
(statearr_31007[(7)] = inst_30899);

return statearr_31007;
})();
var statearr_31008_32526 = state_30973__$1;
(statearr_31008_32526[(2)] = null);

(statearr_31008_32526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (13))){
var inst_30899 = (state_30973[(7)]);
var inst_30906 = inst_30899.cljs$lang$protocol_mask$partition0$;
var inst_30907 = (inst_30906 & (64));
var inst_30908 = inst_30899.cljs$core$ISeq$;
var inst_30909 = (cljs.core.PROTOCOL_SENTINEL === inst_30908);
var inst_30910 = ((inst_30907) || (inst_30909));
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30910)){
var statearr_31010_32527 = state_30973__$1;
(statearr_31010_32527[(1)] = (16));

} else {
var statearr_31011_32528 = state_30973__$1;
(statearr_31011_32528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (22))){
var inst_30931 = (state_30973[(14)]);
var inst_30932 = (state_30973[(11)]);
var inst_30930 = (state_30973[(2)]);
var inst_30931__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30930,(0),null);
var inst_30932__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30930,(1),null);
var inst_30933 = (inst_30931__$1 == null);
var inst_30934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30932__$1,change);
var inst_30935 = ((inst_30933) || (inst_30934));
var state_30973__$1 = (function (){var statearr_31012 = state_30973;
(statearr_31012[(14)] = inst_30931__$1);

(statearr_31012[(11)] = inst_30932__$1);

return statearr_31012;
})();
if(cljs.core.truth_(inst_30935)){
var statearr_31013_32529 = state_30973__$1;
(statearr_31013_32529[(1)] = (23));

} else {
var statearr_31014_32530 = state_30973__$1;
(statearr_31014_32530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (36))){
var inst_30922 = (state_30973[(12)]);
var inst_30899 = inst_30922;
var state_30973__$1 = (function (){var statearr_31015 = state_30973;
(statearr_31015[(7)] = inst_30899);

return statearr_31015;
})();
var statearr_31016_32531 = state_30973__$1;
(statearr_31016_32531[(2)] = null);

(statearr_31016_32531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (29))){
var inst_30946 = (state_30973[(9)]);
var state_30973__$1 = state_30973;
var statearr_31017_32538 = state_30973__$1;
(statearr_31017_32538[(2)] = inst_30946);

(statearr_31017_32538[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (6))){
var state_30973__$1 = state_30973;
var statearr_31018_32539 = state_30973__$1;
(statearr_31018_32539[(2)] = false);

(statearr_31018_32539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (28))){
var inst_30942 = (state_30973[(2)]);
var inst_30943 = calc_state();
var inst_30899 = inst_30943;
var state_30973__$1 = (function (){var statearr_31019 = state_30973;
(statearr_31019[(7)] = inst_30899);

(statearr_31019[(15)] = inst_30942);

return statearr_31019;
})();
var statearr_31020_32540 = state_30973__$1;
(statearr_31020_32540[(2)] = null);

(statearr_31020_32540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (25))){
var inst_30969 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_31021_32541 = state_30973__$1;
(statearr_31021_32541[(2)] = inst_30969);

(statearr_31021_32541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (34))){
var inst_30967 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_31022_32542 = state_30973__$1;
(statearr_31022_32542[(2)] = inst_30967);

(statearr_31022_32542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (17))){
var state_30973__$1 = state_30973;
var statearr_31023_32543 = state_30973__$1;
(statearr_31023_32543[(2)] = false);

(statearr_31023_32543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (3))){
var state_30973__$1 = state_30973;
var statearr_31026_32544 = state_30973__$1;
(statearr_31026_32544[(2)] = false);

(statearr_31026_32544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (12))){
var inst_30971 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30973__$1,inst_30971);
} else {
if((state_val_30974 === (2))){
var inst_30872 = (state_30973[(8)]);
var inst_30878 = inst_30872.cljs$lang$protocol_mask$partition0$;
var inst_30879 = (inst_30878 & (64));
var inst_30880 = inst_30872.cljs$core$ISeq$;
var inst_30881 = (cljs.core.PROTOCOL_SENTINEL === inst_30880);
var inst_30882 = ((inst_30879) || (inst_30881));
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30882)){
var statearr_31027_32545 = state_30973__$1;
(statearr_31027_32545[(1)] = (5));

} else {
var statearr_31028_32546 = state_30973__$1;
(statearr_31028_32546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (23))){
var inst_30931 = (state_30973[(14)]);
var inst_30937 = (inst_30931 == null);
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30937)){
var statearr_31029_32547 = state_30973__$1;
(statearr_31029_32547[(1)] = (26));

} else {
var statearr_31030_32548 = state_30973__$1;
(statearr_31030_32548[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (35))){
var inst_30957 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30957)){
var statearr_31031_32549 = state_30973__$1;
(statearr_31031_32549[(1)] = (36));

} else {
var statearr_31032_32550 = state_30973__$1;
(statearr_31032_32550[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (19))){
var inst_30899 = (state_30973[(7)]);
var inst_30919 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30899);
var state_30973__$1 = state_30973;
var statearr_31033_32557 = state_30973__$1;
(statearr_31033_32557[(2)] = inst_30919);

(statearr_31033_32557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (11))){
var inst_30899 = (state_30973[(7)]);
var inst_30903 = (inst_30899 == null);
var inst_30904 = cljs.core.not(inst_30903);
var state_30973__$1 = state_30973;
if(inst_30904){
var statearr_31034_32558 = state_30973__$1;
(statearr_31034_32558[(1)] = (13));

} else {
var statearr_31035_32559 = state_30973__$1;
(statearr_31035_32559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (9))){
var inst_30872 = (state_30973[(8)]);
var state_30973__$1 = state_30973;
var statearr_31036_32560 = state_30973__$1;
(statearr_31036_32560[(2)] = inst_30872);

(statearr_31036_32560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (5))){
var state_30973__$1 = state_30973;
var statearr_31038_32561 = state_30973__$1;
(statearr_31038_32561[(2)] = true);

(statearr_31038_32561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (14))){
var state_30973__$1 = state_30973;
var statearr_31039_32562 = state_30973__$1;
(statearr_31039_32562[(2)] = false);

(statearr_31039_32562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (26))){
var inst_30932 = (state_30973[(11)]);
var inst_30939 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30932);
var state_30973__$1 = state_30973;
var statearr_31040_32563 = state_30973__$1;
(statearr_31040_32563[(2)] = inst_30939);

(statearr_31040_32563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (16))){
var state_30973__$1 = state_30973;
var statearr_31041_32564 = state_30973__$1;
(statearr_31041_32564[(2)] = true);

(statearr_31041_32564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (38))){
var inst_30963 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_31042_32565 = state_30973__$1;
(statearr_31042_32565[(2)] = inst_30963);

(statearr_31042_32565[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (30))){
var inst_30924 = (state_30973[(13)]);
var inst_30923 = (state_30973[(10)]);
var inst_30932 = (state_30973[(11)]);
var inst_30949 = cljs.core.empty_QMARK_(inst_30923);
var inst_30950 = (inst_30924.cljs$core$IFn$_invoke$arity$1 ? inst_30924.cljs$core$IFn$_invoke$arity$1(inst_30932) : inst_30924.call(null,inst_30932));
var inst_30951 = cljs.core.not(inst_30950);
var inst_30952 = ((inst_30949) && (inst_30951));
var state_30973__$1 = state_30973;
var statearr_31044_32566 = state_30973__$1;
(statearr_31044_32566[(2)] = inst_30952);

(statearr_31044_32566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (10))){
var inst_30872 = (state_30973[(8)]);
var inst_30894 = (state_30973[(2)]);
var inst_30895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30894,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30894,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30894,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30899 = inst_30872;
var state_30973__$1 = (function (){var statearr_31046 = state_30973;
(statearr_31046[(16)] = inst_30897);

(statearr_31046[(17)] = inst_30895);

(statearr_31046[(18)] = inst_30896);

(statearr_31046[(7)] = inst_30899);

return statearr_31046;
})();
var statearr_31047_32567 = state_30973__$1;
(statearr_31047_32567[(2)] = null);

(statearr_31047_32567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (18))){
var inst_30914 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_31048_32568 = state_30973__$1;
(statearr_31048_32568[(2)] = inst_30914);

(statearr_31048_32568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (37))){
var state_30973__$1 = state_30973;
var statearr_31049_32569 = state_30973__$1;
(statearr_31049_32569[(2)] = null);

(statearr_31049_32569[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (8))){
var inst_30872 = (state_30973[(8)]);
var inst_30891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30872);
var state_30973__$1 = state_30973;
var statearr_31050_32570 = state_30973__$1;
(statearr_31050_32570[(2)] = inst_30891);

(statearr_31050_32570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29436__auto__ = null;
var cljs$core$async$mix_$_state_machine__29436__auto____0 = (function (){
var statearr_31053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31053[(0)] = cljs$core$async$mix_$_state_machine__29436__auto__);

(statearr_31053[(1)] = (1));

return statearr_31053;
});
var cljs$core$async$mix_$_state_machine__29436__auto____1 = (function (state_30973){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_30973);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31054){var ex__29439__auto__ = e31054;
var statearr_31055_32571 = state_30973;
(statearr_31055_32571[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_30973[(4)]))){
var statearr_31056_32572 = state_30973;
(statearr_31056_32572[(1)] = cljs.core.first((state_30973[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32573 = state_30973;
state_30973 = G__32573;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29436__auto__ = function(state_30973){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29436__auto____1.call(this,state_30973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29436__auto____0;
cljs$core$async$mix_$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29436__auto____1;
return cljs$core$async$mix_$_state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31057 = f__29637__auto__();
(statearr_31057[(6)] = c__29636__auto___32491);

return statearr_31057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32576 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32576(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32577 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32577(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32580 = (function() {
var G__32581 = null;
var G__32581__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32581__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32581 = function(p,v){
switch(arguments.length){
case 1:
return G__32581__1.call(this,p);
case 2:
return G__32581__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32581.cljs$core$IFn$_invoke$arity$1 = G__32581__1;
G__32581.cljs$core$IFn$_invoke$arity$2 = G__32581__2;
return G__32581;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31071 = arguments.length;
switch (G__31071) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32580(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32580(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31080 = arguments.length;
switch (G__31080) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31078_SHARP_){
if(cljs.core.truth_((p1__31078_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31078_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31078_SHARP_.call(null,topic)))){
return p1__31078_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31078_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31087 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31087 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31088){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31088 = meta31088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31089,meta31088__$1){
var self__ = this;
var _31089__$1 = this;
return (new cljs.core.async.t_cljs$core$async31087(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31088__$1));
}));

(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31089){
var self__ = this;
var _31089__$1 = this;
return self__.meta31088;
}));

(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31088","meta31088",2107840756,null)], null);
}));

(cljs.core.async.t_cljs$core$async31087.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31087");

(cljs.core.async.t_cljs$core$async31087.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31087");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31087.
 */
cljs.core.async.__GT_t_cljs$core$async31087 = (function cljs$core$async$__GT_t_cljs$core$async31087(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31088){
return (new cljs.core.async.t_cljs$core$async31087(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31088));
});

}

return (new cljs.core.async.t_cljs$core$async31087(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29636__auto___32598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31171){
var state_val_31172 = (state_31171[(1)]);
if((state_val_31172 === (7))){
var inst_31167 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31173_32599 = state_31171__$1;
(statearr_31173_32599[(2)] = inst_31167);

(statearr_31173_32599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (20))){
var state_31171__$1 = state_31171;
var statearr_31174_32600 = state_31171__$1;
(statearr_31174_32600[(2)] = null);

(statearr_31174_32600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (1))){
var state_31171__$1 = state_31171;
var statearr_31175_32601 = state_31171__$1;
(statearr_31175_32601[(2)] = null);

(statearr_31175_32601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (24))){
var inst_31150 = (state_31171[(7)]);
var inst_31159 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31150);
var state_31171__$1 = state_31171;
var statearr_31181_32602 = state_31171__$1;
(statearr_31181_32602[(2)] = inst_31159);

(statearr_31181_32602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (4))){
var inst_31102 = (state_31171[(8)]);
var inst_31102__$1 = (state_31171[(2)]);
var inst_31103 = (inst_31102__$1 == null);
var state_31171__$1 = (function (){var statearr_31185 = state_31171;
(statearr_31185[(8)] = inst_31102__$1);

return statearr_31185;
})();
if(cljs.core.truth_(inst_31103)){
var statearr_31188_32603 = state_31171__$1;
(statearr_31188_32603[(1)] = (5));

} else {
var statearr_31189_32604 = state_31171__$1;
(statearr_31189_32604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (15))){
var inst_31144 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31190_32605 = state_31171__$1;
(statearr_31190_32605[(2)] = inst_31144);

(statearr_31190_32605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (21))){
var inst_31164 = (state_31171[(2)]);
var state_31171__$1 = (function (){var statearr_31191 = state_31171;
(statearr_31191[(9)] = inst_31164);

return statearr_31191;
})();
var statearr_31193_32607 = state_31171__$1;
(statearr_31193_32607[(2)] = null);

(statearr_31193_32607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (13))){
var inst_31126 = (state_31171[(10)]);
var inst_31128 = cljs.core.chunked_seq_QMARK_(inst_31126);
var state_31171__$1 = state_31171;
if(inst_31128){
var statearr_31196_32611 = state_31171__$1;
(statearr_31196_32611[(1)] = (16));

} else {
var statearr_31197_32612 = state_31171__$1;
(statearr_31197_32612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (22))){
var inst_31156 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
if(cljs.core.truth_(inst_31156)){
var statearr_31198_32613 = state_31171__$1;
(statearr_31198_32613[(1)] = (23));

} else {
var statearr_31199_32614 = state_31171__$1;
(statearr_31199_32614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (6))){
var inst_31102 = (state_31171[(8)]);
var inst_31152 = (state_31171[(11)]);
var inst_31150 = (state_31171[(7)]);
var inst_31150__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31102) : topic_fn.call(null,inst_31102));
var inst_31151 = cljs.core.deref(mults);
var inst_31152__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31151,inst_31150__$1);
var state_31171__$1 = (function (){var statearr_31208 = state_31171;
(statearr_31208[(11)] = inst_31152__$1);

(statearr_31208[(7)] = inst_31150__$1);

return statearr_31208;
})();
if(cljs.core.truth_(inst_31152__$1)){
var statearr_31213_32615 = state_31171__$1;
(statearr_31213_32615[(1)] = (19));

} else {
var statearr_31214_32616 = state_31171__$1;
(statearr_31214_32616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (25))){
var inst_31161 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31215_32618 = state_31171__$1;
(statearr_31215_32618[(2)] = inst_31161);

(statearr_31215_32618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (17))){
var inst_31126 = (state_31171[(10)]);
var inst_31135 = cljs.core.first(inst_31126);
var inst_31136 = cljs.core.async.muxch_STAR_(inst_31135);
var inst_31137 = cljs.core.async.close_BANG_(inst_31136);
var inst_31138 = cljs.core.next(inst_31126);
var inst_31112 = inst_31138;
var inst_31113 = null;
var inst_31114 = (0);
var inst_31115 = (0);
var state_31171__$1 = (function (){var statearr_31216 = state_31171;
(statearr_31216[(12)] = inst_31115);

(statearr_31216[(13)] = inst_31137);

(statearr_31216[(14)] = inst_31112);

(statearr_31216[(15)] = inst_31114);

(statearr_31216[(16)] = inst_31113);

return statearr_31216;
})();
var statearr_31217_32619 = state_31171__$1;
(statearr_31217_32619[(2)] = null);

(statearr_31217_32619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (3))){
var inst_31169 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31171__$1,inst_31169);
} else {
if((state_val_31172 === (12))){
var inst_31146 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31218_32621 = state_31171__$1;
(statearr_31218_32621[(2)] = inst_31146);

(statearr_31218_32621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (2))){
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31171__$1,(4),ch);
} else {
if((state_val_31172 === (23))){
var state_31171__$1 = state_31171;
var statearr_31222_32624 = state_31171__$1;
(statearr_31222_32624[(2)] = null);

(statearr_31222_32624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (19))){
var inst_31102 = (state_31171[(8)]);
var inst_31152 = (state_31171[(11)]);
var inst_31154 = cljs.core.async.muxch_STAR_(inst_31152);
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31171__$1,(22),inst_31154,inst_31102);
} else {
if((state_val_31172 === (11))){
var inst_31112 = (state_31171[(14)]);
var inst_31126 = (state_31171[(10)]);
var inst_31126__$1 = cljs.core.seq(inst_31112);
var state_31171__$1 = (function (){var statearr_31223 = state_31171;
(statearr_31223[(10)] = inst_31126__$1);

return statearr_31223;
})();
if(inst_31126__$1){
var statearr_31224_32625 = state_31171__$1;
(statearr_31224_32625[(1)] = (13));

} else {
var statearr_31225_32626 = state_31171__$1;
(statearr_31225_32626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (9))){
var inst_31148 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31226_32627 = state_31171__$1;
(statearr_31226_32627[(2)] = inst_31148);

(statearr_31226_32627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (5))){
var inst_31109 = cljs.core.deref(mults);
var inst_31110 = cljs.core.vals(inst_31109);
var inst_31111 = cljs.core.seq(inst_31110);
var inst_31112 = inst_31111;
var inst_31113 = null;
var inst_31114 = (0);
var inst_31115 = (0);
var state_31171__$1 = (function (){var statearr_31227 = state_31171;
(statearr_31227[(12)] = inst_31115);

(statearr_31227[(14)] = inst_31112);

(statearr_31227[(15)] = inst_31114);

(statearr_31227[(16)] = inst_31113);

return statearr_31227;
})();
var statearr_31228_32628 = state_31171__$1;
(statearr_31228_32628[(2)] = null);

(statearr_31228_32628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (14))){
var state_31171__$1 = state_31171;
var statearr_31233_32629 = state_31171__$1;
(statearr_31233_32629[(2)] = null);

(statearr_31233_32629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (16))){
var inst_31126 = (state_31171[(10)]);
var inst_31130 = cljs.core.chunk_first(inst_31126);
var inst_31131 = cljs.core.chunk_rest(inst_31126);
var inst_31132 = cljs.core.count(inst_31130);
var inst_31112 = inst_31131;
var inst_31113 = inst_31130;
var inst_31114 = inst_31132;
var inst_31115 = (0);
var state_31171__$1 = (function (){var statearr_31234 = state_31171;
(statearr_31234[(12)] = inst_31115);

(statearr_31234[(14)] = inst_31112);

(statearr_31234[(15)] = inst_31114);

(statearr_31234[(16)] = inst_31113);

return statearr_31234;
})();
var statearr_31235_32630 = state_31171__$1;
(statearr_31235_32630[(2)] = null);

(statearr_31235_32630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (10))){
var inst_31115 = (state_31171[(12)]);
var inst_31112 = (state_31171[(14)]);
var inst_31114 = (state_31171[(15)]);
var inst_31113 = (state_31171[(16)]);
var inst_31120 = cljs.core._nth(inst_31113,inst_31115);
var inst_31121 = cljs.core.async.muxch_STAR_(inst_31120);
var inst_31122 = cljs.core.async.close_BANG_(inst_31121);
var inst_31123 = (inst_31115 + (1));
var tmp31229 = inst_31112;
var tmp31230 = inst_31114;
var tmp31231 = inst_31113;
var inst_31112__$1 = tmp31229;
var inst_31113__$1 = tmp31231;
var inst_31114__$1 = tmp31230;
var inst_31115__$1 = inst_31123;
var state_31171__$1 = (function (){var statearr_31236 = state_31171;
(statearr_31236[(12)] = inst_31115__$1);

(statearr_31236[(17)] = inst_31122);

(statearr_31236[(14)] = inst_31112__$1);

(statearr_31236[(15)] = inst_31114__$1);

(statearr_31236[(16)] = inst_31113__$1);

return statearr_31236;
})();
var statearr_31237_32634 = state_31171__$1;
(statearr_31237_32634[(2)] = null);

(statearr_31237_32634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (18))){
var inst_31141 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31238_32635 = state_31171__$1;
(statearr_31238_32635[(2)] = inst_31141);

(statearr_31238_32635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (8))){
var inst_31115 = (state_31171[(12)]);
var inst_31114 = (state_31171[(15)]);
var inst_31117 = (inst_31115 < inst_31114);
var inst_31118 = inst_31117;
var state_31171__$1 = state_31171;
if(cljs.core.truth_(inst_31118)){
var statearr_31239_32637 = state_31171__$1;
(statearr_31239_32637[(1)] = (10));

} else {
var statearr_31240_32638 = state_31171__$1;
(statearr_31240_32638[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_31245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31245[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_31245[(1)] = (1));

return statearr_31245;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_31171){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31171);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31246){var ex__29439__auto__ = e31246;
var statearr_31251_32648 = state_31171;
(statearr_31251_32648[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31171[(4)]))){
var statearr_31252_32649 = state_31171;
(statearr_31252_32649[(1)] = cljs.core.first((state_31171[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32651 = state_31171;
state_31171 = G__32651;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_31171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_31171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31257 = f__29637__auto__();
(statearr_31257[(6)] = c__29636__auto___32598);

return statearr_31257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31259 = arguments.length;
switch (G__31259) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31268 = arguments.length;
switch (G__31268) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31277 = arguments.length;
switch (G__31277) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29636__auto___32680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31327){
var state_val_31328 = (state_31327[(1)]);
if((state_val_31328 === (7))){
var state_31327__$1 = state_31327;
var statearr_31329_32683 = state_31327__$1;
(statearr_31329_32683[(2)] = null);

(statearr_31329_32683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (1))){
var state_31327__$1 = state_31327;
var statearr_31330_32684 = state_31327__$1;
(statearr_31330_32684[(2)] = null);

(statearr_31330_32684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (4))){
var inst_31285 = (state_31327[(7)]);
var inst_31284 = (state_31327[(8)]);
var inst_31287 = (inst_31285 < inst_31284);
var state_31327__$1 = state_31327;
if(cljs.core.truth_(inst_31287)){
var statearr_31334_32689 = state_31327__$1;
(statearr_31334_32689[(1)] = (6));

} else {
var statearr_31335_32690 = state_31327__$1;
(statearr_31335_32690[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (15))){
var inst_31313 = (state_31327[(9)]);
var inst_31318 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31313);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31327__$1,(17),out,inst_31318);
} else {
if((state_val_31328 === (13))){
var inst_31313 = (state_31327[(9)]);
var inst_31313__$1 = (state_31327[(2)]);
var inst_31314 = cljs.core.some(cljs.core.nil_QMARK_,inst_31313__$1);
var state_31327__$1 = (function (){var statearr_31336 = state_31327;
(statearr_31336[(9)] = inst_31313__$1);

return statearr_31336;
})();
if(cljs.core.truth_(inst_31314)){
var statearr_31337_32691 = state_31327__$1;
(statearr_31337_32691[(1)] = (14));

} else {
var statearr_31338_32692 = state_31327__$1;
(statearr_31338_32692[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (6))){
var state_31327__$1 = state_31327;
var statearr_31339_32697 = state_31327__$1;
(statearr_31339_32697[(2)] = null);

(statearr_31339_32697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (17))){
var inst_31320 = (state_31327[(2)]);
var state_31327__$1 = (function (){var statearr_31350 = state_31327;
(statearr_31350[(10)] = inst_31320);

return statearr_31350;
})();
var statearr_31351_32698 = state_31327__$1;
(statearr_31351_32698[(2)] = null);

(statearr_31351_32698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (3))){
var inst_31325 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31327__$1,inst_31325);
} else {
if((state_val_31328 === (12))){
var _ = (function (){var statearr_31352 = state_31327;
(statearr_31352[(4)] = cljs.core.rest((state_31327[(4)])));

return statearr_31352;
})();
var state_31327__$1 = state_31327;
var ex31349 = (state_31327__$1[(2)]);
var statearr_31353_32714 = state_31327__$1;
(statearr_31353_32714[(5)] = ex31349);


if((ex31349 instanceof Object)){
var statearr_31354_32715 = state_31327__$1;
(statearr_31354_32715[(1)] = (11));

(statearr_31354_32715[(5)] = null);

} else {
throw ex31349;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (2))){
var inst_31283 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31284 = cnt;
var inst_31285 = (0);
var state_31327__$1 = (function (){var statearr_31355 = state_31327;
(statearr_31355[(7)] = inst_31285);

(statearr_31355[(8)] = inst_31284);

(statearr_31355[(11)] = inst_31283);

return statearr_31355;
})();
var statearr_31356_32716 = state_31327__$1;
(statearr_31356_32716[(2)] = null);

(statearr_31356_32716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (11))){
var inst_31292 = (state_31327[(2)]);
var inst_31293 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31327__$1 = (function (){var statearr_31357 = state_31327;
(statearr_31357[(12)] = inst_31292);

return statearr_31357;
})();
var statearr_31358_32717 = state_31327__$1;
(statearr_31358_32717[(2)] = inst_31293);

(statearr_31358_32717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (9))){
var inst_31285 = (state_31327[(7)]);
var _ = (function (){var statearr_31359 = state_31327;
(statearr_31359[(4)] = cljs.core.cons((12),(state_31327[(4)])));

return statearr_31359;
})();
var inst_31299 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31285) : chs__$1.call(null,inst_31285));
var inst_31300 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31285) : done.call(null,inst_31285));
var inst_31301 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31299,inst_31300);
var ___$1 = (function (){var statearr_31360 = state_31327;
(statearr_31360[(4)] = cljs.core.rest((state_31327[(4)])));

return statearr_31360;
})();
var state_31327__$1 = state_31327;
var statearr_31361_32722 = state_31327__$1;
(statearr_31361_32722[(2)] = inst_31301);

(statearr_31361_32722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (5))){
var inst_31311 = (state_31327[(2)]);
var state_31327__$1 = (function (){var statearr_31362 = state_31327;
(statearr_31362[(13)] = inst_31311);

return statearr_31362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31327__$1,(13),dchan);
} else {
if((state_val_31328 === (14))){
var inst_31316 = cljs.core.async.close_BANG_(out);
var state_31327__$1 = state_31327;
var statearr_31363_32724 = state_31327__$1;
(statearr_31363_32724[(2)] = inst_31316);

(statearr_31363_32724[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (16))){
var inst_31323 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31364_32725 = state_31327__$1;
(statearr_31364_32725[(2)] = inst_31323);

(statearr_31364_32725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (10))){
var inst_31285 = (state_31327[(7)]);
var inst_31304 = (state_31327[(2)]);
var inst_31305 = (inst_31285 + (1));
var inst_31285__$1 = inst_31305;
var state_31327__$1 = (function (){var statearr_31365 = state_31327;
(statearr_31365[(7)] = inst_31285__$1);

(statearr_31365[(14)] = inst_31304);

return statearr_31365;
})();
var statearr_31366_32729 = state_31327__$1;
(statearr_31366_32729[(2)] = null);

(statearr_31366_32729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (8))){
var inst_31309 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31367_32730 = state_31327__$1;
(statearr_31367_32730[(2)] = inst_31309);

(statearr_31367_32730[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_31368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31368[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_31368[(1)] = (1));

return statearr_31368;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_31327){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31327);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31369){var ex__29439__auto__ = e31369;
var statearr_31370_32731 = state_31327;
(statearr_31370_32731[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31327[(4)]))){
var statearr_31371_32732 = state_31327;
(statearr_31371_32732[(1)] = cljs.core.first((state_31327[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32733 = state_31327;
state_31327 = G__32733;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_31327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_31327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31372 = f__29637__auto__();
(statearr_31372[(6)] = c__29636__auto___32680);

return statearr_31372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31375 = arguments.length;
switch (G__31375) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29636__auto___32738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31407){
var state_val_31408 = (state_31407[(1)]);
if((state_val_31408 === (7))){
var inst_31387 = (state_31407[(7)]);
var inst_31386 = (state_31407[(8)]);
var inst_31386__$1 = (state_31407[(2)]);
var inst_31387__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31386__$1,(0),null);
var inst_31388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31386__$1,(1),null);
var inst_31389 = (inst_31387__$1 == null);
var state_31407__$1 = (function (){var statearr_31409 = state_31407;
(statearr_31409[(7)] = inst_31387__$1);

(statearr_31409[(9)] = inst_31388);

(statearr_31409[(8)] = inst_31386__$1);

return statearr_31409;
})();
if(cljs.core.truth_(inst_31389)){
var statearr_31410_32739 = state_31407__$1;
(statearr_31410_32739[(1)] = (8));

} else {
var statearr_31411_32740 = state_31407__$1;
(statearr_31411_32740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (1))){
var inst_31376 = cljs.core.vec(chs);
var inst_31377 = inst_31376;
var state_31407__$1 = (function (){var statearr_31412 = state_31407;
(statearr_31412[(10)] = inst_31377);

return statearr_31412;
})();
var statearr_31413_32745 = state_31407__$1;
(statearr_31413_32745[(2)] = null);

(statearr_31413_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (4))){
var inst_31377 = (state_31407[(10)]);
var state_31407__$1 = state_31407;
return cljs.core.async.ioc_alts_BANG_(state_31407__$1,(7),inst_31377);
} else {
if((state_val_31408 === (6))){
var inst_31403 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
var statearr_31414_32752 = state_31407__$1;
(statearr_31414_32752[(2)] = inst_31403);

(statearr_31414_32752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (3))){
var inst_31405 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31407__$1,inst_31405);
} else {
if((state_val_31408 === (2))){
var inst_31377 = (state_31407[(10)]);
var inst_31379 = cljs.core.count(inst_31377);
var inst_31380 = (inst_31379 > (0));
var state_31407__$1 = state_31407;
if(cljs.core.truth_(inst_31380)){
var statearr_31416_32759 = state_31407__$1;
(statearr_31416_32759[(1)] = (4));

} else {
var statearr_31417_32760 = state_31407__$1;
(statearr_31417_32760[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (11))){
var inst_31377 = (state_31407[(10)]);
var inst_31396 = (state_31407[(2)]);
var tmp31415 = inst_31377;
var inst_31377__$1 = tmp31415;
var state_31407__$1 = (function (){var statearr_31418 = state_31407;
(statearr_31418[(11)] = inst_31396);

(statearr_31418[(10)] = inst_31377__$1);

return statearr_31418;
})();
var statearr_31419_32774 = state_31407__$1;
(statearr_31419_32774[(2)] = null);

(statearr_31419_32774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (9))){
var inst_31387 = (state_31407[(7)]);
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31407__$1,(11),out,inst_31387);
} else {
if((state_val_31408 === (5))){
var inst_31401 = cljs.core.async.close_BANG_(out);
var state_31407__$1 = state_31407;
var statearr_31420_32784 = state_31407__$1;
(statearr_31420_32784[(2)] = inst_31401);

(statearr_31420_32784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (10))){
var inst_31399 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
var statearr_31421_32790 = state_31407__$1;
(statearr_31421_32790[(2)] = inst_31399);

(statearr_31421_32790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (8))){
var inst_31387 = (state_31407[(7)]);
var inst_31388 = (state_31407[(9)]);
var inst_31377 = (state_31407[(10)]);
var inst_31386 = (state_31407[(8)]);
var inst_31391 = (function (){var cs = inst_31377;
var vec__31382 = inst_31386;
var v = inst_31387;
var c = inst_31388;
return (function (p1__31373_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31373_SHARP_);
});
})();
var inst_31392 = cljs.core.filterv(inst_31391,inst_31377);
var inst_31377__$1 = inst_31392;
var state_31407__$1 = (function (){var statearr_31422 = state_31407;
(statearr_31422[(10)] = inst_31377__$1);

return statearr_31422;
})();
var statearr_31423_32804 = state_31407__$1;
(statearr_31423_32804[(2)] = null);

(statearr_31423_32804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_31424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31424[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_31424[(1)] = (1));

return statearr_31424;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_31407){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31407);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31425){var ex__29439__auto__ = e31425;
var statearr_31426_32833 = state_31407;
(statearr_31426_32833[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31407[(4)]))){
var statearr_31427_32838 = state_31407;
(statearr_31427_32838[(1)] = cljs.core.first((state_31407[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32850 = state_31407;
state_31407 = G__32850;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_31407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_31407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31431 = f__29637__auto__();
(statearr_31431[(6)] = c__29636__auto___32738);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31433 = arguments.length;
switch (G__31433) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29636__auto___32852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31458){
var state_val_31459 = (state_31458[(1)]);
if((state_val_31459 === (7))){
var inst_31440 = (state_31458[(7)]);
var inst_31440__$1 = (state_31458[(2)]);
var inst_31441 = (inst_31440__$1 == null);
var inst_31442 = cljs.core.not(inst_31441);
var state_31458__$1 = (function (){var statearr_31460 = state_31458;
(statearr_31460[(7)] = inst_31440__$1);

return statearr_31460;
})();
if(inst_31442){
var statearr_31461_32856 = state_31458__$1;
(statearr_31461_32856[(1)] = (8));

} else {
var statearr_31462_32857 = state_31458__$1;
(statearr_31462_32857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (1))){
var inst_31435 = (0);
var state_31458__$1 = (function (){var statearr_31463 = state_31458;
(statearr_31463[(8)] = inst_31435);

return statearr_31463;
})();
var statearr_31464_32860 = state_31458__$1;
(statearr_31464_32860[(2)] = null);

(statearr_31464_32860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (4))){
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31458__$1,(7),ch);
} else {
if((state_val_31459 === (6))){
var inst_31453 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31466_32866 = state_31458__$1;
(statearr_31466_32866[(2)] = inst_31453);

(statearr_31466_32866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (3))){
var inst_31455 = (state_31458[(2)]);
var inst_31456 = cljs.core.async.close_BANG_(out);
var state_31458__$1 = (function (){var statearr_31467 = state_31458;
(statearr_31467[(9)] = inst_31455);

return statearr_31467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31458__$1,inst_31456);
} else {
if((state_val_31459 === (2))){
var inst_31435 = (state_31458[(8)]);
var inst_31437 = (inst_31435 < n);
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31437)){
var statearr_31469_32881 = state_31458__$1;
(statearr_31469_32881[(1)] = (4));

} else {
var statearr_31470_32886 = state_31458__$1;
(statearr_31470_32886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (11))){
var inst_31435 = (state_31458[(8)]);
var inst_31445 = (state_31458[(2)]);
var inst_31446 = (inst_31435 + (1));
var inst_31435__$1 = inst_31446;
var state_31458__$1 = (function (){var statearr_31472 = state_31458;
(statearr_31472[(8)] = inst_31435__$1);

(statearr_31472[(10)] = inst_31445);

return statearr_31472;
})();
var statearr_31473_32887 = state_31458__$1;
(statearr_31473_32887[(2)] = null);

(statearr_31473_32887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (9))){
var state_31458__$1 = state_31458;
var statearr_31474_32888 = state_31458__$1;
(statearr_31474_32888[(2)] = null);

(statearr_31474_32888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (5))){
var state_31458__$1 = state_31458;
var statearr_31475_32889 = state_31458__$1;
(statearr_31475_32889[(2)] = null);

(statearr_31475_32889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (10))){
var inst_31450 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31476_32890 = state_31458__$1;
(statearr_31476_32890[(2)] = inst_31450);

(statearr_31476_32890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (8))){
var inst_31440 = (state_31458[(7)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31458__$1,(11),out,inst_31440);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_31478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31478[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_31478[(1)] = (1));

return statearr_31478;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_31458){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31458);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31480){var ex__29439__auto__ = e31480;
var statearr_31481_32891 = state_31458;
(statearr_31481_32891[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31458[(4)]))){
var statearr_31482_32892 = state_31458;
(statearr_31482_32892[(1)] = cljs.core.first((state_31458[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32893 = state_31458;
state_31458 = G__32893;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_31458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_31458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31484 = f__29637__auto__();
(statearr_31484[(6)] = c__29636__auto___32852);

return statearr_31484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31486 = (function (f,ch,meta31487){
this.f = f;
this.ch = ch;
this.meta31487 = meta31487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31488,meta31487__$1){
var self__ = this;
var _31488__$1 = this;
return (new cljs.core.async.t_cljs$core$async31486(self__.f,self__.ch,meta31487__$1));
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31488){
var self__ = this;
var _31488__$1 = this;
return self__.meta31487;
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31491 = (function (f,ch,meta31487,_,fn1,meta31492){
this.f = f;
this.ch = ch;
this.meta31487 = meta31487;
this._ = _;
this.fn1 = fn1;
this.meta31492 = meta31492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31493,meta31492__$1){
var self__ = this;
var _31493__$1 = this;
return (new cljs.core.async.t_cljs$core$async31491(self__.f,self__.ch,self__.meta31487,self__._,self__.fn1,meta31492__$1));
}));

(cljs.core.async.t_cljs$core$async31491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31493){
var self__ = this;
var _31493__$1 = this;
return self__.meta31492;
}));

(cljs.core.async.t_cljs$core$async31491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31485_SHARP_){
var G__31497 = (((p1__31485_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31485_SHARP_) : self__.f.call(null,p1__31485_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31497) : f1.call(null,G__31497));
});
}));

(cljs.core.async.t_cljs$core$async31491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31487","meta31487",407562967,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31486","cljs.core.async/t_cljs$core$async31486",-1828856648,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31492","meta31492",-620793610,null)], null);
}));

(cljs.core.async.t_cljs$core$async31491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31491");

(cljs.core.async.t_cljs$core$async31491.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31491.
 */
cljs.core.async.__GT_t_cljs$core$async31491 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31491(f__$1,ch__$1,meta31487__$1,___$2,fn1__$1,meta31492){
return (new cljs.core.async.t_cljs$core$async31491(f__$1,ch__$1,meta31487__$1,___$2,fn1__$1,meta31492));
});

}

return (new cljs.core.async.t_cljs$core$async31491(self__.f,self__.ch,self__.meta31487,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31500 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31500) : self__.f.call(null,G__31500));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31487","meta31487",407562967,null)], null);
}));

(cljs.core.async.t_cljs$core$async31486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31486");

(cljs.core.async.t_cljs$core$async31486.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31486.
 */
cljs.core.async.__GT_t_cljs$core$async31486 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31486(f__$1,ch__$1,meta31487){
return (new cljs.core.async.t_cljs$core$async31486(f__$1,ch__$1,meta31487));
});

}

return (new cljs.core.async.t_cljs$core$async31486(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31502 = (function (f,ch,meta31503){
this.f = f;
this.ch = ch;
this.meta31503 = meta31503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31504,meta31503__$1){
var self__ = this;
var _31504__$1 = this;
return (new cljs.core.async.t_cljs$core$async31502(self__.f,self__.ch,meta31503__$1));
}));

(cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31504){
var self__ = this;
var _31504__$1 = this;
return self__.meta31503;
}));

(cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31503","meta31503",1067112145,null)], null);
}));

(cljs.core.async.t_cljs$core$async31502.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31502");

(cljs.core.async.t_cljs$core$async31502.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31502");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31502.
 */
cljs.core.async.__GT_t_cljs$core$async31502 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31502(f__$1,ch__$1,meta31503){
return (new cljs.core.async.t_cljs$core$async31502(f__$1,ch__$1,meta31503));
});

}

return (new cljs.core.async.t_cljs$core$async31502(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31554 = (function (p,ch,meta31555){
this.p = p;
this.ch = ch;
this.meta31555 = meta31555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31556,meta31555__$1){
var self__ = this;
var _31556__$1 = this;
return (new cljs.core.async.t_cljs$core$async31554(self__.p,self__.ch,meta31555__$1));
}));

(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31556){
var self__ = this;
var _31556__$1 = this;
return self__.meta31555;
}));

(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31554.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31555","meta31555",-1613734171,null)], null);
}));

(cljs.core.async.t_cljs$core$async31554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31554");

(cljs.core.async.t_cljs$core$async31554.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31554.
 */
cljs.core.async.__GT_t_cljs$core$async31554 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31554(p__$1,ch__$1,meta31555){
return (new cljs.core.async.t_cljs$core$async31554(p__$1,ch__$1,meta31555));
});

}

return (new cljs.core.async.t_cljs$core$async31554(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31563 = arguments.length;
switch (G__31563) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29636__auto___32954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31591){
var state_val_31592 = (state_31591[(1)]);
if((state_val_31592 === (7))){
var inst_31587 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
var statearr_31594_32955 = state_31591__$1;
(statearr_31594_32955[(2)] = inst_31587);

(statearr_31594_32955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (1))){
var state_31591__$1 = state_31591;
var statearr_31595_32957 = state_31591__$1;
(statearr_31595_32957[(2)] = null);

(statearr_31595_32957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (4))){
var inst_31573 = (state_31591[(7)]);
var inst_31573__$1 = (state_31591[(2)]);
var inst_31574 = (inst_31573__$1 == null);
var state_31591__$1 = (function (){var statearr_31597 = state_31591;
(statearr_31597[(7)] = inst_31573__$1);

return statearr_31597;
})();
if(cljs.core.truth_(inst_31574)){
var statearr_31598_32958 = state_31591__$1;
(statearr_31598_32958[(1)] = (5));

} else {
var statearr_31599_32959 = state_31591__$1;
(statearr_31599_32959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (6))){
var inst_31573 = (state_31591[(7)]);
var inst_31578 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31573) : p.call(null,inst_31573));
var state_31591__$1 = state_31591;
if(cljs.core.truth_(inst_31578)){
var statearr_31600_32960 = state_31591__$1;
(statearr_31600_32960[(1)] = (8));

} else {
var statearr_31601_32961 = state_31591__$1;
(statearr_31601_32961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (3))){
var inst_31589 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31591__$1,inst_31589);
} else {
if((state_val_31592 === (2))){
var state_31591__$1 = state_31591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31591__$1,(4),ch);
} else {
if((state_val_31592 === (11))){
var inst_31581 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
var statearr_31603_32962 = state_31591__$1;
(statearr_31603_32962[(2)] = inst_31581);

(statearr_31603_32962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (9))){
var state_31591__$1 = state_31591;
var statearr_31606_32963 = state_31591__$1;
(statearr_31606_32963[(2)] = null);

(statearr_31606_32963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (5))){
var inst_31576 = cljs.core.async.close_BANG_(out);
var state_31591__$1 = state_31591;
var statearr_31607_32966 = state_31591__$1;
(statearr_31607_32966[(2)] = inst_31576);

(statearr_31607_32966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (10))){
var inst_31584 = (state_31591[(2)]);
var state_31591__$1 = (function (){var statearr_31608 = state_31591;
(statearr_31608[(8)] = inst_31584);

return statearr_31608;
})();
var statearr_31609_32967 = state_31591__$1;
(statearr_31609_32967[(2)] = null);

(statearr_31609_32967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (8))){
var inst_31573 = (state_31591[(7)]);
var state_31591__$1 = state_31591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31591__$1,(11),out,inst_31573);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_31611 = [null,null,null,null,null,null,null,null,null];
(statearr_31611[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_31611[(1)] = (1));

return statearr_31611;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_31591){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31591);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31612){var ex__29439__auto__ = e31612;
var statearr_31613_32969 = state_31591;
(statearr_31613_32969[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31591[(4)]))){
var statearr_31614_32970 = state_31591;
(statearr_31614_32970[(1)] = cljs.core.first((state_31591[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32971 = state_31591;
state_31591 = G__32971;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_31591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_31591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31617 = f__29637__auto__();
(statearr_31617[(6)] = c__29636__auto___32954);

return statearr_31617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31620 = arguments.length;
switch (G__31620) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31685){
var state_val_31686 = (state_31685[(1)]);
if((state_val_31686 === (7))){
var inst_31681 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
var statearr_31687_32975 = state_31685__$1;
(statearr_31687_32975[(2)] = inst_31681);

(statearr_31687_32975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (20))){
var inst_31651 = (state_31685[(7)]);
var inst_31662 = (state_31685[(2)]);
var inst_31663 = cljs.core.next(inst_31651);
var inst_31637 = inst_31663;
var inst_31638 = null;
var inst_31639 = (0);
var inst_31640 = (0);
var state_31685__$1 = (function (){var statearr_31688 = state_31685;
(statearr_31688[(8)] = inst_31638);

(statearr_31688[(9)] = inst_31662);

(statearr_31688[(10)] = inst_31640);

(statearr_31688[(11)] = inst_31637);

(statearr_31688[(12)] = inst_31639);

return statearr_31688;
})();
var statearr_31689_32976 = state_31685__$1;
(statearr_31689_32976[(2)] = null);

(statearr_31689_32976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (1))){
var state_31685__$1 = state_31685;
var statearr_31691_32977 = state_31685__$1;
(statearr_31691_32977[(2)] = null);

(statearr_31691_32977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (4))){
var inst_31625 = (state_31685[(13)]);
var inst_31625__$1 = (state_31685[(2)]);
var inst_31626 = (inst_31625__$1 == null);
var state_31685__$1 = (function (){var statearr_31692 = state_31685;
(statearr_31692[(13)] = inst_31625__$1);

return statearr_31692;
})();
if(cljs.core.truth_(inst_31626)){
var statearr_31693_32979 = state_31685__$1;
(statearr_31693_32979[(1)] = (5));

} else {
var statearr_31694_32980 = state_31685__$1;
(statearr_31694_32980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (15))){
var state_31685__$1 = state_31685;
var statearr_31698_32981 = state_31685__$1;
(statearr_31698_32981[(2)] = null);

(statearr_31698_32981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (21))){
var state_31685__$1 = state_31685;
var statearr_31699_32986 = state_31685__$1;
(statearr_31699_32986[(2)] = null);

(statearr_31699_32986[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (13))){
var inst_31638 = (state_31685[(8)]);
var inst_31640 = (state_31685[(10)]);
var inst_31637 = (state_31685[(11)]);
var inst_31639 = (state_31685[(12)]);
var inst_31647 = (state_31685[(2)]);
var inst_31648 = (inst_31640 + (1));
var tmp31695 = inst_31638;
var tmp31696 = inst_31637;
var tmp31697 = inst_31639;
var inst_31637__$1 = tmp31696;
var inst_31638__$1 = tmp31695;
var inst_31639__$1 = tmp31697;
var inst_31640__$1 = inst_31648;
var state_31685__$1 = (function (){var statearr_31700 = state_31685;
(statearr_31700[(8)] = inst_31638__$1);

(statearr_31700[(14)] = inst_31647);

(statearr_31700[(10)] = inst_31640__$1);

(statearr_31700[(11)] = inst_31637__$1);

(statearr_31700[(12)] = inst_31639__$1);

return statearr_31700;
})();
var statearr_31701_32988 = state_31685__$1;
(statearr_31701_32988[(2)] = null);

(statearr_31701_32988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (22))){
var state_31685__$1 = state_31685;
var statearr_31702_32989 = state_31685__$1;
(statearr_31702_32989[(2)] = null);

(statearr_31702_32989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (6))){
var inst_31625 = (state_31685[(13)]);
var inst_31635 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31625) : f.call(null,inst_31625));
var inst_31636 = cljs.core.seq(inst_31635);
var inst_31637 = inst_31636;
var inst_31638 = null;
var inst_31639 = (0);
var inst_31640 = (0);
var state_31685__$1 = (function (){var statearr_31703 = state_31685;
(statearr_31703[(8)] = inst_31638);

(statearr_31703[(10)] = inst_31640);

(statearr_31703[(11)] = inst_31637);

(statearr_31703[(12)] = inst_31639);

return statearr_31703;
})();
var statearr_31705_32991 = state_31685__$1;
(statearr_31705_32991[(2)] = null);

(statearr_31705_32991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (17))){
var inst_31651 = (state_31685[(7)]);
var inst_31655 = cljs.core.chunk_first(inst_31651);
var inst_31656 = cljs.core.chunk_rest(inst_31651);
var inst_31657 = cljs.core.count(inst_31655);
var inst_31637 = inst_31656;
var inst_31638 = inst_31655;
var inst_31639 = inst_31657;
var inst_31640 = (0);
var state_31685__$1 = (function (){var statearr_31707 = state_31685;
(statearr_31707[(8)] = inst_31638);

(statearr_31707[(10)] = inst_31640);

(statearr_31707[(11)] = inst_31637);

(statearr_31707[(12)] = inst_31639);

return statearr_31707;
})();
var statearr_31708_32996 = state_31685__$1;
(statearr_31708_32996[(2)] = null);

(statearr_31708_32996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (3))){
var inst_31683 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31685__$1,inst_31683);
} else {
if((state_val_31686 === (12))){
var inst_31671 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
var statearr_31709_32997 = state_31685__$1;
(statearr_31709_32997[(2)] = inst_31671);

(statearr_31709_32997[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (2))){
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31685__$1,(4),in$);
} else {
if((state_val_31686 === (23))){
var inst_31679 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
var statearr_31710_32998 = state_31685__$1;
(statearr_31710_32998[(2)] = inst_31679);

(statearr_31710_32998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (19))){
var inst_31666 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
var statearr_31711_32999 = state_31685__$1;
(statearr_31711_32999[(2)] = inst_31666);

(statearr_31711_32999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (11))){
var inst_31637 = (state_31685[(11)]);
var inst_31651 = (state_31685[(7)]);
var inst_31651__$1 = cljs.core.seq(inst_31637);
var state_31685__$1 = (function (){var statearr_31712 = state_31685;
(statearr_31712[(7)] = inst_31651__$1);

return statearr_31712;
})();
if(inst_31651__$1){
var statearr_31713_33002 = state_31685__$1;
(statearr_31713_33002[(1)] = (14));

} else {
var statearr_31714_33003 = state_31685__$1;
(statearr_31714_33003[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (9))){
var inst_31673 = (state_31685[(2)]);
var inst_31674 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31685__$1 = (function (){var statearr_31715 = state_31685;
(statearr_31715[(15)] = inst_31673);

return statearr_31715;
})();
if(cljs.core.truth_(inst_31674)){
var statearr_31716_33004 = state_31685__$1;
(statearr_31716_33004[(1)] = (21));

} else {
var statearr_31717_33005 = state_31685__$1;
(statearr_31717_33005[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (5))){
var inst_31628 = cljs.core.async.close_BANG_(out);
var state_31685__$1 = state_31685;
var statearr_31719_33007 = state_31685__$1;
(statearr_31719_33007[(2)] = inst_31628);

(statearr_31719_33007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (14))){
var inst_31651 = (state_31685[(7)]);
var inst_31653 = cljs.core.chunked_seq_QMARK_(inst_31651);
var state_31685__$1 = state_31685;
if(inst_31653){
var statearr_31720_33008 = state_31685__$1;
(statearr_31720_33008[(1)] = (17));

} else {
var statearr_31721_33009 = state_31685__$1;
(statearr_31721_33009[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (16))){
var inst_31669 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
var statearr_31723_33010 = state_31685__$1;
(statearr_31723_33010[(2)] = inst_31669);

(statearr_31723_33010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (10))){
var inst_31638 = (state_31685[(8)]);
var inst_31640 = (state_31685[(10)]);
var inst_31645 = cljs.core._nth(inst_31638,inst_31640);
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31685__$1,(13),out,inst_31645);
} else {
if((state_val_31686 === (18))){
var inst_31651 = (state_31685[(7)]);
var inst_31660 = cljs.core.first(inst_31651);
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31685__$1,(20),out,inst_31660);
} else {
if((state_val_31686 === (8))){
var inst_31640 = (state_31685[(10)]);
var inst_31639 = (state_31685[(12)]);
var inst_31642 = (inst_31640 < inst_31639);
var inst_31643 = inst_31642;
var state_31685__$1 = state_31685;
if(cljs.core.truth_(inst_31643)){
var statearr_31724_33013 = state_31685__$1;
(statearr_31724_33013[(1)] = (10));

} else {
var statearr_31726_33014 = state_31685__$1;
(statearr_31726_33014[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29436__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29436__auto____0 = (function (){
var statearr_31727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31727[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29436__auto__);

(statearr_31727[(1)] = (1));

return statearr_31727;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29436__auto____1 = (function (state_31685){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31685);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31728){var ex__29439__auto__ = e31728;
var statearr_31729_33015 = state_31685;
(statearr_31729_33015[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31685[(4)]))){
var statearr_31731_33016 = state_31685;
(statearr_31731_33016[(1)] = cljs.core.first((state_31685[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33017 = state_31685;
state_31685 = G__33017;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29436__auto__ = function(state_31685){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29436__auto____1.call(this,state_31685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29436__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29436__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31732 = f__29637__auto__();
(statearr_31732[(6)] = c__29636__auto__);

return statearr_31732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));

return c__29636__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31735 = arguments.length;
switch (G__31735) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31739 = arguments.length;
switch (G__31739) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31742 = arguments.length;
switch (G__31742) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29636__auto___33114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31768){
var state_val_31769 = (state_31768[(1)]);
if((state_val_31769 === (7))){
var inst_31763 = (state_31768[(2)]);
var state_31768__$1 = state_31768;
var statearr_31770_33120 = state_31768__$1;
(statearr_31770_33120[(2)] = inst_31763);

(statearr_31770_33120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31769 === (1))){
var inst_31744 = null;
var state_31768__$1 = (function (){var statearr_31771 = state_31768;
(statearr_31771[(7)] = inst_31744);

return statearr_31771;
})();
var statearr_31772_33127 = state_31768__$1;
(statearr_31772_33127[(2)] = null);

(statearr_31772_33127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31769 === (4))){
var inst_31748 = (state_31768[(8)]);
var inst_31748__$1 = (state_31768[(2)]);
var inst_31749 = (inst_31748__$1 == null);
var inst_31750 = cljs.core.not(inst_31749);
var state_31768__$1 = (function (){var statearr_31773 = state_31768;
(statearr_31773[(8)] = inst_31748__$1);

return statearr_31773;
})();
if(inst_31750){
var statearr_31774_33141 = state_31768__$1;
(statearr_31774_33141[(1)] = (5));

} else {
var statearr_31775_33142 = state_31768__$1;
(statearr_31775_33142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31769 === (6))){
var state_31768__$1 = state_31768;
var statearr_31776_33147 = state_31768__$1;
(statearr_31776_33147[(2)] = null);

(statearr_31776_33147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31769 === (3))){
var inst_31765 = (state_31768[(2)]);
var inst_31766 = cljs.core.async.close_BANG_(out);
var state_31768__$1 = (function (){var statearr_31777 = state_31768;
(statearr_31777[(9)] = inst_31765);

return statearr_31777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31768__$1,inst_31766);
} else {
if((state_val_31769 === (2))){
var state_31768__$1 = state_31768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31768__$1,(4),ch);
} else {
if((state_val_31769 === (11))){
var inst_31748 = (state_31768[(8)]);
var inst_31757 = (state_31768[(2)]);
var inst_31744 = inst_31748;
var state_31768__$1 = (function (){var statearr_31778 = state_31768;
(statearr_31778[(7)] = inst_31744);

(statearr_31778[(10)] = inst_31757);

return statearr_31778;
})();
var statearr_31779_33148 = state_31768__$1;
(statearr_31779_33148[(2)] = null);

(statearr_31779_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31769 === (9))){
var inst_31748 = (state_31768[(8)]);
var state_31768__$1 = state_31768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31768__$1,(11),out,inst_31748);
} else {
if((state_val_31769 === (5))){
var inst_31748 = (state_31768[(8)]);
var inst_31744 = (state_31768[(7)]);
var inst_31752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31748,inst_31744);
var state_31768__$1 = state_31768;
if(inst_31752){
var statearr_31781_33149 = state_31768__$1;
(statearr_31781_33149[(1)] = (8));

} else {
var statearr_31782_33150 = state_31768__$1;
(statearr_31782_33150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31769 === (10))){
var inst_31760 = (state_31768[(2)]);
var state_31768__$1 = state_31768;
var statearr_31783_33151 = state_31768__$1;
(statearr_31783_33151[(2)] = inst_31760);

(statearr_31783_33151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31769 === (8))){
var inst_31744 = (state_31768[(7)]);
var tmp31780 = inst_31744;
var inst_31744__$1 = tmp31780;
var state_31768__$1 = (function (){var statearr_31784 = state_31768;
(statearr_31784[(7)] = inst_31744__$1);

return statearr_31784;
})();
var statearr_31785_33152 = state_31768__$1;
(statearr_31785_33152[(2)] = null);

(statearr_31785_33152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_31786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31786[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_31786[(1)] = (1));

return statearr_31786;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_31768){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31768);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31787){var ex__29439__auto__ = e31787;
var statearr_31788_33156 = state_31768;
(statearr_31788_33156[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31768[(4)]))){
var statearr_31789_33157 = state_31768;
(statearr_31789_33157[(1)] = cljs.core.first((state_31768[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33158 = state_31768;
state_31768 = G__33158;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_31768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_31768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31790 = f__29637__auto__();
(statearr_31790[(6)] = c__29636__auto___33114);

return statearr_31790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31792 = arguments.length;
switch (G__31792) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29636__auto___33161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31830){
var state_val_31831 = (state_31830[(1)]);
if((state_val_31831 === (7))){
var inst_31826 = (state_31830[(2)]);
var state_31830__$1 = state_31830;
var statearr_31832_33163 = state_31830__$1;
(statearr_31832_33163[(2)] = inst_31826);

(statearr_31832_33163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (1))){
var inst_31793 = (new Array(n));
var inst_31794 = inst_31793;
var inst_31795 = (0);
var state_31830__$1 = (function (){var statearr_31833 = state_31830;
(statearr_31833[(7)] = inst_31794);

(statearr_31833[(8)] = inst_31795);

return statearr_31833;
})();
var statearr_31834_33169 = state_31830__$1;
(statearr_31834_33169[(2)] = null);

(statearr_31834_33169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (4))){
var inst_31798 = (state_31830[(9)]);
var inst_31798__$1 = (state_31830[(2)]);
var inst_31799 = (inst_31798__$1 == null);
var inst_31800 = cljs.core.not(inst_31799);
var state_31830__$1 = (function (){var statearr_31835 = state_31830;
(statearr_31835[(9)] = inst_31798__$1);

return statearr_31835;
})();
if(inst_31800){
var statearr_31836_33171 = state_31830__$1;
(statearr_31836_33171[(1)] = (5));

} else {
var statearr_31837_33173 = state_31830__$1;
(statearr_31837_33173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (15))){
var inst_31820 = (state_31830[(2)]);
var state_31830__$1 = state_31830;
var statearr_31838_33175 = state_31830__$1;
(statearr_31838_33175[(2)] = inst_31820);

(statearr_31838_33175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (13))){
var state_31830__$1 = state_31830;
var statearr_31839_33177 = state_31830__$1;
(statearr_31839_33177[(2)] = null);

(statearr_31839_33177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (6))){
var inst_31795 = (state_31830[(8)]);
var inst_31816 = (inst_31795 > (0));
var state_31830__$1 = state_31830;
if(cljs.core.truth_(inst_31816)){
var statearr_31840_33180 = state_31830__$1;
(statearr_31840_33180[(1)] = (12));

} else {
var statearr_31841_33181 = state_31830__$1;
(statearr_31841_33181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (3))){
var inst_31828 = (state_31830[(2)]);
var state_31830__$1 = state_31830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31830__$1,inst_31828);
} else {
if((state_val_31831 === (12))){
var inst_31794 = (state_31830[(7)]);
var inst_31818 = cljs.core.vec(inst_31794);
var state_31830__$1 = state_31830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31830__$1,(15),out,inst_31818);
} else {
if((state_val_31831 === (2))){
var state_31830__$1 = state_31830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31830__$1,(4),ch);
} else {
if((state_val_31831 === (11))){
var inst_31810 = (state_31830[(2)]);
var inst_31811 = (new Array(n));
var inst_31794 = inst_31811;
var inst_31795 = (0);
var state_31830__$1 = (function (){var statearr_31842 = state_31830;
(statearr_31842[(10)] = inst_31810);

(statearr_31842[(7)] = inst_31794);

(statearr_31842[(8)] = inst_31795);

return statearr_31842;
})();
var statearr_31843_33184 = state_31830__$1;
(statearr_31843_33184[(2)] = null);

(statearr_31843_33184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (9))){
var inst_31794 = (state_31830[(7)]);
var inst_31808 = cljs.core.vec(inst_31794);
var state_31830__$1 = state_31830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31830__$1,(11),out,inst_31808);
} else {
if((state_val_31831 === (5))){
var inst_31794 = (state_31830[(7)]);
var inst_31803 = (state_31830[(11)]);
var inst_31798 = (state_31830[(9)]);
var inst_31795 = (state_31830[(8)]);
var inst_31802 = (inst_31794[inst_31795] = inst_31798);
var inst_31803__$1 = (inst_31795 + (1));
var inst_31804 = (inst_31803__$1 < n);
var state_31830__$1 = (function (){var statearr_31844 = state_31830;
(statearr_31844[(12)] = inst_31802);

(statearr_31844[(11)] = inst_31803__$1);

return statearr_31844;
})();
if(cljs.core.truth_(inst_31804)){
var statearr_31845_33187 = state_31830__$1;
(statearr_31845_33187[(1)] = (8));

} else {
var statearr_31846_33188 = state_31830__$1;
(statearr_31846_33188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (14))){
var inst_31823 = (state_31830[(2)]);
var inst_31824 = cljs.core.async.close_BANG_(out);
var state_31830__$1 = (function (){var statearr_31848 = state_31830;
(statearr_31848[(13)] = inst_31823);

return statearr_31848;
})();
var statearr_31849_33193 = state_31830__$1;
(statearr_31849_33193[(2)] = inst_31824);

(statearr_31849_33193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (10))){
var inst_31814 = (state_31830[(2)]);
var state_31830__$1 = state_31830;
var statearr_31850_33194 = state_31830__$1;
(statearr_31850_33194[(2)] = inst_31814);

(statearr_31850_33194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (8))){
var inst_31794 = (state_31830[(7)]);
var inst_31803 = (state_31830[(11)]);
var tmp31847 = inst_31794;
var inst_31794__$1 = tmp31847;
var inst_31795 = inst_31803;
var state_31830__$1 = (function (){var statearr_31851 = state_31830;
(statearr_31851[(7)] = inst_31794__$1);

(statearr_31851[(8)] = inst_31795);

return statearr_31851;
})();
var statearr_31852_33195 = state_31830__$1;
(statearr_31852_33195[(2)] = null);

(statearr_31852_33195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_31853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31853[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_31853[(1)] = (1));

return statearr_31853;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_31830){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31830);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31854){var ex__29439__auto__ = e31854;
var statearr_31855_33196 = state_31830;
(statearr_31855_33196[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31830[(4)]))){
var statearr_31856_33197 = state_31830;
(statearr_31856_33197[(1)] = cljs.core.first((state_31830[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33198 = state_31830;
state_31830 = G__33198;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_31830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_31830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31857 = f__29637__auto__();
(statearr_31857[(6)] = c__29636__auto___33161);

return statearr_31857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31859 = arguments.length;
switch (G__31859) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29636__auto___33200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29637__auto__ = (function (){var switch__29435__auto__ = (function (state_31901){
var state_val_31902 = (state_31901[(1)]);
if((state_val_31902 === (7))){
var inst_31897 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31903_33201 = state_31901__$1;
(statearr_31903_33201[(2)] = inst_31897);

(statearr_31903_33201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (1))){
var inst_31860 = [];
var inst_31861 = inst_31860;
var inst_31862 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31901__$1 = (function (){var statearr_31904 = state_31901;
(statearr_31904[(7)] = inst_31862);

(statearr_31904[(8)] = inst_31861);

return statearr_31904;
})();
var statearr_31905_33202 = state_31901__$1;
(statearr_31905_33202[(2)] = null);

(statearr_31905_33202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (4))){
var inst_31865 = (state_31901[(9)]);
var inst_31865__$1 = (state_31901[(2)]);
var inst_31866 = (inst_31865__$1 == null);
var inst_31867 = cljs.core.not(inst_31866);
var state_31901__$1 = (function (){var statearr_31906 = state_31901;
(statearr_31906[(9)] = inst_31865__$1);

return statearr_31906;
})();
if(inst_31867){
var statearr_31907_33203 = state_31901__$1;
(statearr_31907_33203[(1)] = (5));

} else {
var statearr_31908_33204 = state_31901__$1;
(statearr_31908_33204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (15))){
var inst_31891 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31909_33205 = state_31901__$1;
(statearr_31909_33205[(2)] = inst_31891);

(statearr_31909_33205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (13))){
var state_31901__$1 = state_31901;
var statearr_31910_33206 = state_31901__$1;
(statearr_31910_33206[(2)] = null);

(statearr_31910_33206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (6))){
var inst_31861 = (state_31901[(8)]);
var inst_31886 = inst_31861.length;
var inst_31887 = (inst_31886 > (0));
var state_31901__$1 = state_31901;
if(cljs.core.truth_(inst_31887)){
var statearr_31911_33207 = state_31901__$1;
(statearr_31911_33207[(1)] = (12));

} else {
var statearr_31912_33208 = state_31901__$1;
(statearr_31912_33208[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (3))){
var inst_31899 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31901__$1,inst_31899);
} else {
if((state_val_31902 === (12))){
var inst_31861 = (state_31901[(8)]);
var inst_31889 = cljs.core.vec(inst_31861);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31901__$1,(15),out,inst_31889);
} else {
if((state_val_31902 === (2))){
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31901__$1,(4),ch);
} else {
if((state_val_31902 === (11))){
var inst_31869 = (state_31901[(10)]);
var inst_31865 = (state_31901[(9)]);
var inst_31879 = (state_31901[(2)]);
var inst_31880 = [];
var inst_31881 = inst_31880.push(inst_31865);
var inst_31861 = inst_31880;
var inst_31862 = inst_31869;
var state_31901__$1 = (function (){var statearr_31913 = state_31901;
(statearr_31913[(7)] = inst_31862);

(statearr_31913[(11)] = inst_31879);

(statearr_31913[(12)] = inst_31881);

(statearr_31913[(8)] = inst_31861);

return statearr_31913;
})();
var statearr_31914_33214 = state_31901__$1;
(statearr_31914_33214[(2)] = null);

(statearr_31914_33214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (9))){
var inst_31861 = (state_31901[(8)]);
var inst_31877 = cljs.core.vec(inst_31861);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31901__$1,(11),out,inst_31877);
} else {
if((state_val_31902 === (5))){
var inst_31862 = (state_31901[(7)]);
var inst_31869 = (state_31901[(10)]);
var inst_31865 = (state_31901[(9)]);
var inst_31869__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31865) : f.call(null,inst_31865));
var inst_31870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31869__$1,inst_31862);
var inst_31871 = cljs.core.keyword_identical_QMARK_(inst_31862,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31872 = ((inst_31870) || (inst_31871));
var state_31901__$1 = (function (){var statearr_31915 = state_31901;
(statearr_31915[(10)] = inst_31869__$1);

return statearr_31915;
})();
if(cljs.core.truth_(inst_31872)){
var statearr_31916_33215 = state_31901__$1;
(statearr_31916_33215[(1)] = (8));

} else {
var statearr_31917_33216 = state_31901__$1;
(statearr_31917_33216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (14))){
var inst_31894 = (state_31901[(2)]);
var inst_31895 = cljs.core.async.close_BANG_(out);
var state_31901__$1 = (function (){var statearr_31919 = state_31901;
(statearr_31919[(13)] = inst_31894);

return statearr_31919;
})();
var statearr_31920_33217 = state_31901__$1;
(statearr_31920_33217[(2)] = inst_31895);

(statearr_31920_33217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (10))){
var inst_31884 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31921_33221 = state_31901__$1;
(statearr_31921_33221[(2)] = inst_31884);

(statearr_31921_33221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (8))){
var inst_31869 = (state_31901[(10)]);
var inst_31861 = (state_31901[(8)]);
var inst_31865 = (state_31901[(9)]);
var inst_31874 = inst_31861.push(inst_31865);
var tmp31918 = inst_31861;
var inst_31861__$1 = tmp31918;
var inst_31862 = inst_31869;
var state_31901__$1 = (function (){var statearr_31922 = state_31901;
(statearr_31922[(7)] = inst_31862);

(statearr_31922[(8)] = inst_31861__$1);

(statearr_31922[(14)] = inst_31874);

return statearr_31922;
})();
var statearr_31923_33222 = state_31901__$1;
(statearr_31923_33222[(2)] = null);

(statearr_31923_33222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29436__auto__ = null;
var cljs$core$async$state_machine__29436__auto____0 = (function (){
var statearr_31924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31924[(0)] = cljs$core$async$state_machine__29436__auto__);

(statearr_31924[(1)] = (1));

return statearr_31924;
});
var cljs$core$async$state_machine__29436__auto____1 = (function (state_31901){
while(true){
var ret_value__29437__auto__ = (function (){try{while(true){
var result__29438__auto__ = switch__29435__auto__(state_31901);
if(cljs.core.keyword_identical_QMARK_(result__29438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29438__auto__;
}
break;
}
}catch (e31925){var ex__29439__auto__ = e31925;
var statearr_31926_33223 = state_31901;
(statearr_31926_33223[(2)] = ex__29439__auto__);


if(cljs.core.seq((state_31901[(4)]))){
var statearr_31927_33224 = state_31901;
(statearr_31927_33224[(1)] = cljs.core.first((state_31901[(4)])));

} else {
throw ex__29439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33225 = state_31901;
state_31901 = G__33225;
continue;
} else {
return ret_value__29437__auto__;
}
break;
}
});
cljs$core$async$state_machine__29436__auto__ = function(state_31901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29436__auto____1.call(this,state_31901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29436__auto____0;
cljs$core$async$state_machine__29436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29436__auto____1;
return cljs$core$async$state_machine__29436__auto__;
})()
})();
var state__29638__auto__ = (function (){var statearr_31928 = f__29637__auto__();
(statearr_31928[(6)] = c__29636__auto___33200);

return statearr_31928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29638__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
