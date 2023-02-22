var storage = require('node-persist')

storage.initSync()

storage.init({
    dir : "path/to/save",
    ttl : false
});