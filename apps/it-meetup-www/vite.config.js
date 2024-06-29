"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='vitest' />
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var nx_tsconfig_paths_plugin_1 = require("@nx/vite/plugins/nx-tsconfig-paths.plugin");
exports.default = (0, vite_1.defineConfig)({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/it-meetup-www',
    server: {
        port: 4200,
        host: 'localhost',
    },
    preview: {
        port: 4300,
        host: 'localhost',
    },
    plugins: [(0, plugin_react_1.default)(), (0, nx_tsconfig_paths_plugin_1.nxViteTsPaths)()],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
        outDir: '../../dist/apps/it-meetup-www',
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
