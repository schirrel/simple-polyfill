"use strict";

Array.prototype.groupBy = function(fn) {

    var self = this;
    var me = this.map(fn);
    me = me.filter(function(item, pos, arr) {
        return arr.indexOf(item) == pos;
    });
    var g = [];
    me.forEach(function(item) {
        var filtered = self.filter(function(f) {
            return fn(f) == item
        });
        g.push({
            [item]: filtered
        })
    });
   return g;
}

/**

Usage  
arr.groupBy((item)=> item.category)


*//


Object.prototype.toArray = function() {
    var self = this;
    return self.getKeys().map(function(key) {

        return {
            [key]: self[key]
        }

    });
}

/* the tests i ran this seems to be slowers but it's worthy to keep it here 
Array.prototype.groupBy2 = function(fn) {
    var self = this;
 return self.reduce(function(rv, x) {  
  	 (rv[fn(x)] = rv[fn(x)] || []).push(x);
    return rv;
  }, {});
  
}
*/
