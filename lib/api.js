const express = require("express");
const app = express();


/**
 * @typedef {Object} APIConfiguration
 * @property {Number} port - Port the API runs on.
 * @property {Array} Routers - List of routers used by the API.
 * 
 * 
 * 
 */


class API {
    /** API Configuration
     * @param {APIConfiguration} config - Configuration settings
     */
    constructor (config) {
        if (!config || typeof config !== 'object') throw new Error("Invalid config: expected an object.");
        this.config = config;
    }


    uploadRouters () {
        this.config.Routers.forEach(router => {
            app.use(router.config.path, router.router);
        });
    }

    use = app.use;

    /**
     * Listen to your api on your configs port.
     * @param {Function} callback - Callback function after listening.
     * @returns {Null}
     */
    listen (callback) {
        this.uploadRouters();
        return app.listen(this.config.port, callback);
    }
}


module.exports = API;