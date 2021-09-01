"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
const pageFiles = {
  ".page": { "/renderer/_error.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/_error.page.26840699.js");
  }), "/pages/about/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.79aae925.js");
  }), "/pages/index/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.481d36fa.js");
  }) },
  ".page.client": { "/renderer/_default.page.client.js": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.client.23e5f8a7.js");
  }) },
  ".page.server": { "/renderer/_default.page.server.js": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.77638d28.js");
  }) },
  ".page.route": {}
};
exports.pageFiles = pageFiles;
