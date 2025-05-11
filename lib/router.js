const express = require("express");

/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */


/**
 * @typedef {Object} RouterConfiguration
 * @property {String} name - Name of Router.
 * @property {String} path - Base path of the Router.
 */


class Router {
    /**
     * @param {RouterConfiguration} config - Configuration settings
     */
    constructor (config) {
        if (!config || typeof config !== 'object') throw new Error("Invalid config: expected an object.");
        /** @type {RouterConfiguration} */
        this.config = config;
        this.router = express.Router();
    }

    /**
     * @param {String} path 
     * @param {(req: Request, res: Response, next: NextFunction) => void} callback 
     */
    get (path, callback) {
        return this.router.get(path, callback);
    }

    /**
     * @param {String} path 
     * @param {(req: Request, res: Response, next: NextFunction) => void} callback 
     */
    post (path, callback) {
        return this.router.post(path, callback);
    }

    /**
     * @param {String} path 
     * @param {(req: Request, res: Response, next: NextFunction) => void} callback 
     */
    delete (path, callback) {
        return this.router.delete(path, callback);
    }
}


module.exports = Router;