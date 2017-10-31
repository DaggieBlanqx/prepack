let x = global.__abstract ? __abstract("boolean", "true") : true;

let ob = { };
if (x) {
  Object.defineProperty(ob, "x", { configurable: true, get: () => 2 });
} else {
  ob.x = 123;
}
if (!x) {
} else {
  Object.defineProperty(ob, "y", { configurable: true, get: () => 3 });
}

let ob2 = { y: 2 };
if (!x) {
  Object.defineProperty(ob2, "x",
    { configurable: true, get: () => this._x, set: (v) => { this._x = v; } } );
} else {
  ob2.x = 123;
}
ob2.x = 456;

inspect = function() { return ob.x + " " + ob.y + " " + ob2.x; }
