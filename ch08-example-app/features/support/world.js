const { setWorldConstructor, World } = require('@cucumber/cucumber');
require('chromedriver');

class GameWorld extends World {
    aliases = {}

    constructor(options) {
        super(options)
    }
}

setWorldConstructor(GameWorld)