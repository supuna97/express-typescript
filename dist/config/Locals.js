"use strict";
/**
 * Define App Locals & Configs
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Locals {
    static config() {
        const name = process.env.APP_NAME || 'NodeTS Dashboard';
        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
        const year = (new Date()).getFullYear();
        const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
        const company = process.env.COMPANY_NAME || 'GeekyAnts';
        const description = process.env.APP_DESCRIPTION || 'Here goes the app description';
        const appSecret = process.env.APP_SECRET || 'This is your responsibility!';
        return {
            name,
            company,
            url,
            copyright,
            description,
            appSecret
        };
    }
    static init(_express) {
        _express.locals.app = this.config();
        return _express;
    }
}
exports.default = Locals;
//# sourceMappingURL=Locals.js.map