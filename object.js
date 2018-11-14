Object.prototype.getKeys = function() {
    return Object.keys(this);
}


Object.prototype.toArray = function() {
    var self = this;
    return self.getKeys().map(function(key) {

        return {
            [key]: self[key]
        }

    });
}
