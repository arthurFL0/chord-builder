// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"icZzK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
const { Note, Scale } = require("2efdc7d4bab52d8d");
const notas = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
];
const afinacao = [
    "E",
    "A",
    "D",
    "G",
    "B",
    "E"
];
const braco = document.querySelector(".braco");
let range = 1;
function defineNota(cordaAtual, casaAtual) {
    let notaInicial = afinacao[cordaAtual - 1];
    if (range != 1) {
        let notaAfinacao = notaInicial;
        notaInicial = notas[notas.findIndex((el)=>el == notaAfinacao) + range - 1];
    }
    console.log(notaInicial);
    const nota = notas[notas.findIndex((el)=>el == notaInicial) + casaAtual < notas.length ? notas.findIndex((el)=>el == notaInicial) + casaAtual : notas.findIndex((el)=>el == notaInicial) + casaAtual - notas.length];
    return nota;
}
function displayTrastes() {
    for(let i = 1; i < 6; i++){
        let col = document.createElement("div");
        col.classList.add("coluna");
        for(let j = 1; j < 6; j++){
            let casa = document.createElement("div");
            casa.classList.add("casa");
            let notaContainer = document.createElement("span");
            notaContainer.classList.add("nota-container");
            let nota = document.createElement("span");
            nota.classList.add("nota", "hidden");
            nota.append(defineNota(i, j));
            notaContainer.appendChild(nota);
            casa.appendChild(notaContainer);
            if (i === 5) {
                let notaContainerD = document.createElement("span");
                notaContainerD.classList.add("nota-container-direita");
                let notaD = document.createElement("span");
                notaD.classList.add("nota", "hidden");
                notaContainerD.appendChild(notaD);
                casa.appendChild(notaContainerD);
            }
            col.appendChild(casa);
        }
        braco.appendChild(col);
    }
}
window.onload = ()=>{
    displayTrastes();
};

},{"2efdc7d4bab52d8d":"h8GkW"}],"h8GkW":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbcNotation", ()=>(0, _abcNotationDefault.default));
parcelHelpers.export(exports, "Array", ()=>_array);
parcelHelpers.export(exports, "Chord", ()=>(0, _chordDefault.default));
parcelHelpers.export(exports, "ChordDictionary", ()=>ChordDictionary);
parcelHelpers.export(exports, "ChordType", ()=>(0, _chordTypeDefault.default));
parcelHelpers.export(exports, "Collection", ()=>(0, _collectionDefault.default));
parcelHelpers.export(exports, "Core", ()=>_core);
parcelHelpers.export(exports, "DurationValue", ()=>(0, _durationValueDefault.default));
parcelHelpers.export(exports, "Interval", ()=>(0, _intervalDefault.default));
parcelHelpers.export(exports, "Key", ()=>(0, _keyDefault.default));
parcelHelpers.export(exports, "Midi", ()=>(0, _midiDefault.default));
parcelHelpers.export(exports, "Mode", ()=>(0, _modeDefault.default));
parcelHelpers.export(exports, "Note", ()=>(0, _noteDefault.default));
parcelHelpers.export(exports, "PcSet", ()=>PcSet);
parcelHelpers.export(exports, "Pcset", ()=>(0, _pcsetDefault.default));
parcelHelpers.export(exports, "Progression", ()=>(0, _progressionDefault.default));
parcelHelpers.export(exports, "Range", ()=>(0, _rangeDefault.default));
parcelHelpers.export(exports, "RomanNumeral", ()=>(0, _romanNumeralDefault.default));
parcelHelpers.export(exports, "Scale", ()=>(0, _scaleDefault.default));
parcelHelpers.export(exports, "ScaleDictionary", ()=>ScaleDictionary);
parcelHelpers.export(exports, "ScaleType", ()=>(0, _scaleTypeDefault.default));
parcelHelpers.export(exports, "TimeSignature", ()=>(0, _timeSignatureDefault.default));
parcelHelpers.export(exports, "Tonal", ()=>Tonal);
parcelHelpers.export(exports, "VoiceLeading", ()=>(0, _voiceLeadingDefault.default));
parcelHelpers.export(exports, "Voicing", ()=>(0, _voicingDefault.default));
parcelHelpers.export(exports, "VoicingDictionary", ()=>(0, _voicingDictionaryDefault.default));
var _abcNotation = require("@tonaljs/abc-notation");
var _abcNotationDefault = parcelHelpers.interopDefault(_abcNotation);
var _array = require("@tonaljs/array");
var _chord = require("@tonaljs/chord");
var _chordDefault = parcelHelpers.interopDefault(_chord);
var _chordType = require("@tonaljs/chord-type");
var _chordTypeDefault = parcelHelpers.interopDefault(_chordType);
var _collection = require("@tonaljs/collection");
var _collectionDefault = parcelHelpers.interopDefault(_collection);
var _core = require("@tonaljs/core");
var _durationValue = require("@tonaljs/duration-value");
var _durationValueDefault = parcelHelpers.interopDefault(_durationValue);
var _interval = require("@tonaljs/interval");
var _intervalDefault = parcelHelpers.interopDefault(_interval);
var _key = require("@tonaljs/key");
var _keyDefault = parcelHelpers.interopDefault(_key);
var _midi = require("@tonaljs/midi");
var _midiDefault = parcelHelpers.interopDefault(_midi);
var _mode = require("@tonaljs/mode");
var _modeDefault = parcelHelpers.interopDefault(_mode);
var _note = require("@tonaljs/note");
var _noteDefault = parcelHelpers.interopDefault(_note);
var _pcset = require("@tonaljs/pcset");
var _pcsetDefault = parcelHelpers.interopDefault(_pcset);
var _progression = require("@tonaljs/progression");
var _progressionDefault = parcelHelpers.interopDefault(_progression);
var _range = require("@tonaljs/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _romanNumeral = require("@tonaljs/roman-numeral");
var _romanNumeralDefault = parcelHelpers.interopDefault(_romanNumeral);
var _scale = require("@tonaljs/scale");
var _scaleDefault = parcelHelpers.interopDefault(_scale);
var _scaleType = require("@tonaljs/scale-type");
var _scaleTypeDefault = parcelHelpers.interopDefault(_scaleType);
var _timeSignature = require("@tonaljs/time-signature");
var _timeSignatureDefault = parcelHelpers.interopDefault(_timeSignature);
var _voiceLeading = require("@tonaljs/voice-leading");
var _voiceLeadingDefault = parcelHelpers.interopDefault(_voiceLeading);
var _voicing = require("@tonaljs/voicing");
var _voicingDefault = parcelHelpers.interopDefault(_voicing);
var _voicingDictionary = require("@tonaljs/voicing-dictionary");
var _voicingDictionaryDefault = parcelHelpers.interopDefault(_voicingDictionary);
parcelHelpers.exportAll(_core, exports);
var Tonal = _core;
var PcSet = (0, _pcsetDefault.default);
var ChordDictionary = (0, _chordTypeDefault.default);
var ScaleDictionary = (0, _scaleTypeDefault.default);

},{"@tonaljs/abc-notation":"drQEU","@tonaljs/array":"3k8ea","@tonaljs/chord":"6ncZZ","@tonaljs/chord-type":"fSYoM","@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/duration-value":"9nkSn","@tonaljs/interval":"2nbRQ","@tonaljs/key":"iUI0Q","@tonaljs/midi":"3mmFz","@tonaljs/mode":"aVKRW","@tonaljs/note":"aeHTX","@tonaljs/pcset":"iyyUH","@tonaljs/progression":"4YROa","@tonaljs/range":"8Q44U","@tonaljs/roman-numeral":"8RLpa","@tonaljs/scale":"cecAp","@tonaljs/scale-type":"eRJbX","@tonaljs/time-signature":"lbySg","@tonaljs/voice-leading":"7Nmzd","@tonaljs/voicing":"gAKMG","@tonaljs/voicing-dictionary":"lLNh2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drQEU":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "abcToScientificNotation", ()=>abcToScientificNotation);
parcelHelpers.export(exports, "default", ()=>abc_notation_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "scientificToAbcNotation", ()=>scientificToAbcNotation);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _core = require("@tonaljs/core");
var fillStr = (character, times)=>Array(times + 1).join(character);
var REGEX = /^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;
function tokenize(str) {
    const m = REGEX.exec(str);
    if (!m) return [
        "",
        "",
        ""
    ];
    return [
        m[1],
        m[2],
        m[3]
    ];
}
function abcToScientificNotation(str) {
    const [acc, letter, oct] = tokenize(str);
    if (letter === "") return "";
    let o = 4;
    for(let i = 0; i < oct.length; i++)o += oct.charAt(i) === "," ? -1 : 1;
    const a = acc[0] === "_" ? acc.replace(/_/g, "b") : acc[0] === "^" ? acc.replace(/\^/g, "#") : "";
    return letter.charCodeAt(0) > 96 ? letter.toUpperCase() + a + (o + 1) : letter + a + o;
}
function scientificToAbcNotation(str) {
    const n = (0, _core.note)(str);
    if (n.empty || !n.oct && n.oct !== 0) return "";
    const { letter, acc, oct } = n;
    const a = acc[0] === "b" ? acc.replace(/b/g, "_") : acc.replace(/#/g, "^");
    const l = oct > 4 ? letter.toLowerCase() : letter;
    const o = oct === 5 ? "" : oct > 4 ? fillStr("'", oct - 5) : fillStr(",", 4 - oct);
    return a + l + o;
}
function transpose(note2, interval) {
    return scientificToAbcNotation((0, _core.transpose)(abcToScientificNotation(note2), interval));
}
function distance(from, to) {
    return (0, _core.distance)(abcToScientificNotation(from), abcToScientificNotation(to));
}
var abc_notation_default = {
    abcToScientificNotation,
    scientificToAbcNotation,
    tokenize,
    transpose,
    distance
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Dyc":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deprecate", ()=>deprecate);
parcelHelpers.export(exports, "fillStr", ()=>fillStr);
parcelHelpers.export(exports, "isNamed", ()=>isNamed);
var _pitch = require("@tonaljs/pitch");
parcelHelpers.exportAll(_pitch, exports);
var _pitchDistance = require("@tonaljs/pitch-distance");
parcelHelpers.exportAll(_pitchDistance, exports);
var _pitchInterval = require("@tonaljs/pitch-interval");
parcelHelpers.exportAll(_pitchInterval, exports);
var _pitchNote = require("@tonaljs/pitch-note");
parcelHelpers.exportAll(_pitchNote, exports);
var fillStr = (s, n)=>Array(Math.abs(n) + 1).join(s);
function deprecate(original, alternative, fn) {
    return function(...args) {
        console.warn(`${original} is deprecated. Use ${alternative}.`);
        return fn.apply(this, args);
    };
}
var isNamed = deprecate("isNamed", "isNamedPitch", (0, _pitch.isNamedPitch));

},{"@tonaljs/pitch":"6UQzx","@tonaljs/pitch-distance":"lyXKg","@tonaljs/pitch-interval":"4JLgV","@tonaljs/pitch-note":"9x4v3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6UQzx":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "coordinates", ()=>coordinates);
parcelHelpers.export(exports, "height", ()=>height);
parcelHelpers.export(exports, "isNamedPitch", ()=>isNamedPitch);
parcelHelpers.export(exports, "isPitch", ()=>isPitch);
parcelHelpers.export(exports, "midi", ()=>midi);
parcelHelpers.export(exports, "pitch", ()=>pitch);
function isNamedPitch(src) {
    return src !== null && typeof src === "object" && "name" in src && typeof src.name === "string" ? true : false;
}
var SIZES = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
var chroma = ({ step, alt })=>(SIZES[step] + alt + 120) % 12;
var height = ({ step, alt, oct, dir = 1 })=>dir * (SIZES[step] + alt + 12 * (oct === void 0 ? -100 : oct));
var midi = (pitch2)=>{
    const h = height(pitch2);
    return pitch2.oct !== void 0 && h >= -12 && h <= 115 ? h + 12 : null;
};
function isPitch(pitch2) {
    return pitch2 !== null && typeof pitch2 === "object" && "step" in pitch2 && typeof pitch2.step === "number" && "alt" in pitch2 && typeof pitch2.alt === "number" ? true : false;
}
var FIFTHS = [
    0,
    2,
    4,
    -1,
    1,
    3,
    5
];
var STEPS_TO_OCTS = FIFTHS.map((fifths)=>Math.floor(fifths * 7 / 12));
function coordinates(pitch2) {
    const { step, alt, oct, dir = 1 } = pitch2;
    const f = FIFTHS[step] + 7 * alt;
    if (oct === void 0) return [
        dir * f
    ];
    const o = oct - STEPS_TO_OCTS[step] - 4 * alt;
    return [
        dir * f,
        dir * o
    ];
}
var FIFTHS_TO_STEPS = [
    3,
    0,
    4,
    1,
    5,
    2,
    6
];
function pitch(coord) {
    const [f, o, dir] = coord;
    const step = FIFTHS_TO_STEPS[unaltered(f)];
    const alt = Math.floor((f + 1) / 7);
    if (o === void 0) return {
        step,
        alt,
        dir
    };
    const oct = o + 4 * alt + STEPS_TO_OCTS[step];
    return {
        step,
        alt,
        oct,
        dir
    };
}
function unaltered(f) {
    const i = (f + 1) % 7;
    return i < 0 ? 7 + i : i;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lyXKg":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "tonicIntervalsTransposer", ()=>tonicIntervalsTransposer);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _pitchInterval = require("@tonaljs/pitch-interval");
var _pitchNote = require("@tonaljs/pitch-note");
function transpose(noteName, intervalName) {
    const note = (0, _pitchNote.note)(noteName);
    const intervalCoord = Array.isArray(intervalName) ? intervalName : (0, _pitchInterval.interval)(intervalName).coord;
    if (note.empty || !intervalCoord || intervalCoord.length < 2) return "";
    const noteCoord = note.coord;
    const tr = noteCoord.length === 1 ? [
        noteCoord[0] + intervalCoord[0]
    ] : [
        noteCoord[0] + intervalCoord[0],
        noteCoord[1] + intervalCoord[1]
    ];
    return (0, _pitchNote.coordToNote)(tr).name;
}
function tonicIntervalsTransposer(intervals, tonic) {
    const len = intervals.length;
    return (normalized)=>{
        if (!tonic) return "";
        const index = normalized < 0 ? (len - -normalized % len) % len : normalized % len;
        const octaves = Math.floor(normalized / len);
        const root = transpose(tonic, [
            0,
            octaves
        ]);
        return transpose(root, intervals[index]);
    };
}
function distance(fromNote, toNote) {
    const from = (0, _pitchNote.note)(fromNote);
    const to = (0, _pitchNote.note)(toNote);
    if (from.empty || to.empty) return "";
    const fcoord = from.coord;
    const tcoord = to.coord;
    const fifths = tcoord[0] - fcoord[0];
    const octs = fcoord.length === 2 && tcoord.length === 2 ? tcoord[1] - fcoord[1] : -Math.floor(fifths * 7 / 12);
    const forceDescending = to.height === from.height && to.midi !== null && from.midi !== null && from.step > to.step;
    return (0, _pitchInterval.coordToInterval)([
        fifths,
        octs
    ], forceDescending).name;
}

},{"@tonaljs/pitch-interval":"4JLgV","@tonaljs/pitch-note":"9x4v3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4JLgV":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "coordToInterval", ()=>coordToInterval);
parcelHelpers.export(exports, "interval", ()=>interval);
parcelHelpers.export(exports, "tokenizeInterval", ()=>tokenizeInterval);
var _pitch = require("@tonaljs/pitch");
var fillStr = (s, n)=>Array(Math.abs(n) + 1).join(s);
var NoInterval = {
    empty: true,
    name: "",
    acc: ""
};
var INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
var INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
var REGEX = new RegExp("^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$");
function tokenizeInterval(str) {
    const m = REGEX.exec(`${str}`);
    if (m === null) return [
        "",
        ""
    ];
    return m[1] ? [
        m[1],
        m[2]
    ] : [
        m[4],
        m[3]
    ];
}
var cache = {};
function interval(src) {
    return typeof src === "string" ? cache[src] || (cache[src] = parse(src)) : (0, _pitch.isPitch)(src) ? interval(pitchName(src)) : (0, _pitch.isNamedPitch)(src) ? interval(src.name) : NoInterval;
}
var SIZES = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
var TYPES = "PMMPPMM";
function parse(str) {
    const tokens = tokenizeInterval(str);
    if (tokens[0] === "") return NoInterval;
    const num = +tokens[0];
    const q = tokens[1];
    const step = (Math.abs(num) - 1) % 7;
    const t = TYPES[step];
    if (t === "M" && q === "P") return NoInterval;
    const type = t === "M" ? "majorable" : "perfectable";
    const name = "" + num + q;
    const dir = num < 0 ? -1 : 1;
    const simple = num === 8 || num === -8 ? num : dir * (step + 1);
    const alt = qToAlt(type, q);
    const oct = Math.floor((Math.abs(num) - 1) / 7);
    const semitones = dir * (SIZES[step] + alt + 12 * oct);
    const chroma = (dir * (SIZES[step] + alt) % 12 + 12) % 12;
    const coord = (0, _pitch.coordinates)({
        step,
        alt,
        oct,
        dir
    });
    return {
        empty: false,
        name,
        num,
        q,
        step,
        alt,
        dir,
        type,
        simple,
        semitones,
        chroma,
        coord,
        oct
    };
}
function coordToInterval(coord, forceDescending) {
    const [f, o = 0] = coord;
    const isDescending = f * 7 + o * 12 < 0;
    const ivl = forceDescending || isDescending ? [
        -f,
        -o,
        -1
    ] : [
        f,
        o,
        1
    ];
    return interval((0, _pitch.pitch)(ivl));
}
function qToAlt(type, q) {
    return q === "M" && type === "majorable" || q === "P" && type === "perfectable" ? 0 : q === "m" && type === "majorable" ? -1 : /^A+$/.test(q) ? q.length : /^d+$/.test(q) ? -1 * (type === "perfectable" ? q.length : q.length + 1) : 0;
}
function pitchName(props) {
    const { step, alt, oct = 0, dir } = props;
    if (!dir) return "";
    const calcNum = step + 1 + 7 * oct;
    const num = calcNum === 0 ? step + 1 : calcNum;
    const d = dir < 0 ? "-" : "";
    const type = TYPES[step] === "M" ? "majorable" : "perfectable";
    const name = d + num + altToQ(type, alt);
    return name;
}
function altToQ(type, alt) {
    if (alt === 0) return type === "majorable" ? "M" : "P";
    else if (alt === -1 && type === "majorable") return "m";
    else if (alt > 0) return fillStr("A", alt);
    else return fillStr("d", type === "perfectable" ? alt : alt + 1);
}

},{"@tonaljs/pitch":"6UQzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9x4v3":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accToAlt", ()=>accToAlt);
parcelHelpers.export(exports, "altToAcc", ()=>altToAcc);
parcelHelpers.export(exports, "coordToNote", ()=>coordToNote);
parcelHelpers.export(exports, "note", ()=>note);
parcelHelpers.export(exports, "stepToLetter", ()=>stepToLetter);
parcelHelpers.export(exports, "tokenizeNote", ()=>tokenizeNote);
var _pitch = require("@tonaljs/pitch");
var fillStr = (s, n)=>Array(Math.abs(n) + 1).join(s);
var NoNote = {
    empty: true,
    name: "",
    pc: "",
    acc: ""
};
var cache = /* @__PURE__ */ new Map();
var stepToLetter = (step)=>"CDEFGAB".charAt(step);
var altToAcc = (alt)=>alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
var accToAlt = (acc)=>acc[0] === "b" ? -acc.length : acc.length;
function note(src) {
    const stringSrc = JSON.stringify(src);
    const cached = cache.get(stringSrc);
    if (cached) return cached;
    const value = typeof src === "string" ? parse(src) : (0, _pitch.isPitch)(src) ? note(pitchName(src)) : (0, _pitch.isNamedPitch)(src) ? note(src.name) : NoNote;
    cache.set(stringSrc, value);
    return value;
}
var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function tokenizeNote(str) {
    const m = REGEX.exec(str);
    return [
        m[1].toUpperCase(),
        m[2].replace(/x/g, "##"),
        m[3],
        m[4]
    ];
}
function coordToNote(noteCoord) {
    return note((0, _pitch.pitch)(noteCoord));
}
var mod = (n, m)=>(n % m + m) % m;
var SEMI = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
function parse(noteName) {
    const tokens = tokenizeNote(noteName);
    if (tokens[0] === "" || tokens[3] !== "") return NoNote;
    const letter = tokens[0];
    const acc = tokens[1];
    const octStr = tokens[2];
    const step = (letter.charCodeAt(0) + 3) % 7;
    const alt = accToAlt(acc);
    const oct = octStr.length ? +octStr : void 0;
    const coord = (0, _pitch.coordinates)({
        step,
        alt,
        oct
    });
    const name = letter + acc + octStr;
    const pc = letter + acc;
    const chroma = (SEMI[step] + alt + 120) % 12;
    const height = oct === void 0 ? mod(SEMI[step] + alt, 12) - 1188 : SEMI[step] + alt + 12 * (oct + 1);
    const midi = height >= 0 && height <= 127 ? height : null;
    const freq = oct === void 0 ? null : Math.pow(2, (height - 69) / 12) * 440;
    return {
        empty: false,
        acc,
        alt,
        chroma,
        coord,
        freq,
        height,
        letter,
        midi,
        name,
        oct,
        pc,
        step
    };
}
function pitchName(props) {
    const { step, alt, oct } = props;
    const letter = stepToLetter(step);
    if (!letter) return "";
    const pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
}

},{"@tonaljs/pitch":"6UQzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3k8ea":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact);
parcelHelpers.export(exports, "permutations", ()=>permutations);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "sortedNoteNames", ()=>sortedNoteNames);
parcelHelpers.export(exports, "sortedUniqNoteNames", ()=>sortedUniqNoteNames);
var _core = require("@tonaljs/core");
var isArray = Array.isArray;
function ascR(b, n) {
    const a = [];
    for(; n--; a[n] = n + b);
    return a;
}
function descR(b, n) {
    const a = [];
    for(; n--; a[n] = b - n);
    return a;
}
function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
function compact(arr) {
    return arr.filter((n)=>n === 0 || n);
}
function sortedNoteNames(notes) {
    const valid = notes.map((n)=>(0, _core.note)(n)).filter((n)=>!n.empty);
    return valid.sort((a, b)=>a.height - b.height).map((n)=>n.name);
}
function sortedUniqNoteNames(arr) {
    return sortedNoteNames(arr).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ncZZ":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chord", ()=>chord);
parcelHelpers.export(exports, "chordScales", ()=>chordScales);
parcelHelpers.export(exports, "default", ()=>chord_default);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "detect", ()=>(0, _chordDetect.detect));
parcelHelpers.export(exports, "extended", ()=>extended);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "getChord", ()=>getChord);
parcelHelpers.export(exports, "reduced", ()=>reduced);
parcelHelpers.export(exports, "steps", ()=>steps);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _chordDetect = require("@tonaljs/chord-detect");
var _chordType = require("@tonaljs/chord-type");
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var NoChord = {
    empty: true,
    name: "",
    symbol: "",
    root: "",
    rootDegree: 0,
    type: "",
    tonic: null,
    setNum: NaN,
    quality: "Unknown",
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
function tokenize(name) {
    const [letter, acc, oct, type] = (0, _core.tokenizeNote)(name);
    if (letter === "") return [
        "",
        name
    ];
    if (letter === "A" && type === "ug") return [
        "",
        "aug"
    ];
    return [
        letter + acc,
        oct + type
    ];
}
function get(src) {
    if (src === "") return NoChord;
    if (Array.isArray(src) && src.length === 2) return getChord(src[1], src[0]);
    else {
        const [tonic, type] = tokenize(src);
        const chord2 = getChord(type, tonic);
        return chord2.empty ? getChord(src) : chord2;
    }
}
function getChord(typeName, optionalTonic, optionalRoot) {
    const type = (0, _chordType.get)(typeName);
    const tonic = (0, _core.note)(optionalTonic || "");
    const root = (0, _core.note)(optionalRoot || "");
    if (type.empty || optionalTonic && tonic.empty || optionalRoot && root.empty) return NoChord;
    const rootInterval = (0, _core.distance)(tonic.pc, root.pc);
    const rootDegree = type.intervals.indexOf(rootInterval) + 1;
    if (!root.empty && !rootDegree) return NoChord;
    const intervals = Array.from(type.intervals);
    for(let i = 1; i < rootDegree; i++){
        const num = intervals[0][0];
        const quality = intervals[0][1];
        const newNum = parseInt(num, 10) + 7;
        intervals.push(`${newNum}${quality}`);
        intervals.shift();
    }
    const notes = tonic.empty ? [] : intervals.map((i)=>(0, _core.transpose)(tonic, i));
    typeName = type.aliases.indexOf(typeName) !== -1 ? typeName : type.aliases[0];
    const symbol = `${tonic.empty ? "" : tonic.pc}${typeName}${root.empty || rootDegree <= 1 ? "" : "/" + root.pc}`;
    const name = `${optionalTonic ? tonic.pc + " " : ""}${type.name}${rootDegree > 1 && optionalRoot ? " over " + root.pc : ""}`;
    return {
        ...type,
        name,
        symbol,
        type: type.name,
        root: root.name,
        intervals,
        rootDegree,
        tonic: tonic.name,
        notes
    };
}
var chord = (0, _core.deprecate)("Chord.chord", "Chord.get", get);
function transpose(chordName, interval) {
    const [tonic, type] = tokenize(chordName);
    if (!tonic) return chordName;
    return (0, _core.transpose)(tonic, interval) + type;
}
function chordScales(name) {
    const s = get(name);
    const isChordIncluded = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _scaleType.all)().filter((scale)=>isChordIncluded(scale.chroma)).map((scale)=>scale.name);
}
function extended(chordName) {
    const s = get(chordName);
    const isSuperset = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord2)=>isSuperset(chord2.chroma)).map((chord2)=>s.tonic + chord2.aliases[0]);
}
function reduced(chordName) {
    const s = get(chordName);
    const isSubset = (0, _pcset.isSubsetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord2)=>isSubset(chord2.chroma)).map((chord2)=>s.tonic + chord2.aliases[0]);
}
function degrees(chordName) {
    const { intervals, tonic } = get(chordName);
    const transpose2 = (0, _core.tonicIntervalsTransposer)(intervals, tonic);
    return (degree)=>degree ? transpose2(degree > 0 ? degree - 1 : degree) : "";
}
function steps(chordName) {
    const { intervals, tonic } = get(chordName);
    return (0, _core.tonicIntervalsTransposer)(intervals, tonic);
}
var chord_default = {
    getChord,
    get,
    detect: (0, _chordDetect.detect),
    chordScales,
    extended,
    reduced,
    tokenize,
    transpose,
    degrees,
    steps,
    // deprecate
    chord
};

},{"@tonaljs/chord-detect":"8m9ss","@tonaljs/chord-type":"fSYoM","@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8m9ss":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>chord_detect_default);
parcelHelpers.export(exports, "detect", ()=>detect);
var _chordType = require("@tonaljs/chord-type");
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
var namedSet = (notes)=>{
    const pcToName = notes.reduce((record, n)=>{
        const chroma = (0, _core.note)(n).chroma;
        if (chroma !== void 0) record[chroma] = record[chroma] || (0, _core.note)(n).name;
        return record;
    }, {});
    return (chroma)=>pcToName[chroma];
};
function detect(source, options = {}) {
    const notes = source.map((n)=>(0, _core.note)(n).pc).filter((x)=>x);
    if ((0, _core.note).length === 0) return [];
    const found = findMatches(notes, 1, options);
    return found.filter((chord)=>chord.weight).sort((a, b)=>b.weight - a.weight).map((chord)=>chord.name);
}
var BITMASK = {
    // 3m 000100000000
    // 3M 000010000000
    anyThirds: 384,
    // 5P 000000010000
    perfectFifth: 16,
    // 5d 000000100000
    // 5A 000000001000
    nonPerfectFifths: 40,
    anySeventh: 3
};
var testChromaNumber = (bitmask)=>(chromaNumber)=>Boolean(chromaNumber & bitmask);
var hasAnyThird = testChromaNumber(BITMASK.anyThirds);
var hasPerfectFifth = testChromaNumber(BITMASK.perfectFifth);
var hasAnySeventh = testChromaNumber(BITMASK.anySeventh);
var hasNonPerfectFifth = testChromaNumber(BITMASK.nonPerfectFifths);
function hasAnyThirdAndPerfectFifthAndAnySeventh(chordType) {
    const chromaNumber = parseInt(chordType.chroma, 2);
    return hasAnyThird(chromaNumber) && hasPerfectFifth(chromaNumber) && hasAnySeventh(chromaNumber);
}
function withPerfectFifth(chroma) {
    const chromaNumber = parseInt(chroma, 2);
    return hasNonPerfectFifth(chromaNumber) ? chroma : (chromaNumber | 16).toString(2);
}
function findMatches(notes, weight, options) {
    const tonic = notes[0];
    const tonicChroma = (0, _core.note)(tonic).chroma;
    const noteName = namedSet(notes);
    const allModes = (0, _pcset.modes)(notes, false);
    const found = [];
    allModes.forEach((mode, index)=>{
        const modeWithPerfectFifth = options.assumePerfectFifth && withPerfectFifth(mode);
        const chordTypes = (0, _chordType.all)().filter((chordType)=>{
            if (options.assumePerfectFifth && hasAnyThirdAndPerfectFifthAndAnySeventh(chordType)) return chordType.chroma === modeWithPerfectFifth;
            return chordType.chroma === mode;
        });
        chordTypes.forEach((chordType)=>{
            const chordName = chordType.aliases[0];
            const baseNote = noteName(index);
            const isInversion = index !== tonicChroma;
            if (isInversion) found.push({
                weight: 0.5 * weight,
                name: `${baseNote}${chordName}/${tonic}`
            });
            else found.push({
                weight: 1 * weight,
                name: `${baseNote}${chordName}`
            });
        });
    });
    return found;
}
var chord_detect_default = {
    detect
};

},{"@tonaljs/chord-type":"fSYoM","@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSYoM":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addAlias", ()=>addAlias);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "chordType", ()=>chordType);
parcelHelpers.export(exports, "default", ()=>chord_type_default);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "symbols", ()=>symbols);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
// data.ts
var CHORDS = [
    // ==Major==
    [
        "1P 3M 5P",
        "major",
        "M ^  maj"
    ],
    [
        "1P 3M 5P 7M",
        "major seventh",
        "maj7 \u0394 ma7 M7 Maj7 ^7"
    ],
    [
        "1P 3M 5P 7M 9M",
        "major ninth",
        "maj9 \u03949 ^9"
    ],
    [
        "1P 3M 5P 7M 9M 13M",
        "major thirteenth",
        "maj13 Maj13 ^13"
    ],
    [
        "1P 3M 5P 6M",
        "sixth",
        "6 add6 add13 M6"
    ],
    [
        "1P 3M 5P 6M 9M",
        "sixth added ninth",
        "6add9 6/9 69 M69"
    ],
    [
        "1P 3M 6m 7M",
        "major seventh flat sixth",
        "M7b6 ^7b6"
    ],
    [
        "1P 3M 5P 7M 11A",
        "major seventh sharp eleventh",
        "maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"
    ],
    // ==Minor==
    // '''Normal'''
    [
        "1P 3m 5P",
        "minor",
        "m min -"
    ],
    [
        "1P 3m 5P 7m",
        "minor seventh",
        "m7 min7 mi7 -7"
    ],
    [
        "1P 3m 5P 7M",
        "minor/major seventh",
        "m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7 -maj7"
    ],
    [
        "1P 3m 5P 6M",
        "minor sixth",
        "m6 -6"
    ],
    [
        "1P 3m 5P 7m 9M",
        "minor ninth",
        "m9 -9"
    ],
    [
        "1P 3m 5P 7M 9M",
        "minor/major ninth",
        "mM9 mMaj9 -^9"
    ],
    [
        "1P 3m 5P 7m 9M 11P",
        "minor eleventh",
        "m11 -11"
    ],
    [
        "1P 3m 5P 7m 9M 13M",
        "minor thirteenth",
        "m13 -13"
    ],
    // '''Diminished'''
    [
        "1P 3m 5d",
        "diminished",
        "dim \xb0 o"
    ],
    [
        "1P 3m 5d 7d",
        "diminished seventh",
        "dim7 \xb07 o7"
    ],
    [
        "1P 3m 5d 7m",
        "half-diminished",
        "m7b5 \xf8 -7b5 h7 h"
    ],
    // ==Dominant/Seventh==
    // '''Normal'''
    [
        "1P 3M 5P 7m",
        "dominant seventh",
        "7 dom"
    ],
    [
        "1P 3M 5P 7m 9M",
        "dominant ninth",
        "9"
    ],
    [
        "1P 3M 5P 7m 9M 13M",
        "dominant thirteenth",
        "13"
    ],
    [
        "1P 3M 5P 7m 11A",
        "lydian dominant seventh",
        "7#11 7#4"
    ],
    // '''Altered'''
    [
        "1P 3M 5P 7m 9m",
        "dominant flat ninth",
        "7b9"
    ],
    [
        "1P 3M 5P 7m 9A",
        "dominant sharp ninth",
        "7#9"
    ],
    [
        "1P 3M 7m 9m",
        "altered",
        "alt7"
    ],
    // '''Suspended'''
    [
        "1P 4P 5P",
        "suspended fourth",
        "sus4 sus"
    ],
    [
        "1P 2M 5P",
        "suspended second",
        "sus2"
    ],
    [
        "1P 4P 5P 7m",
        "suspended fourth seventh",
        "7sus4 7sus"
    ],
    [
        "1P 5P 7m 9M 11P",
        "eleventh",
        "11"
    ],
    [
        "1P 4P 5P 7m 9m",
        "suspended fourth flat ninth",
        "b9sus phryg 7b9sus 7b9sus4"
    ],
    // ==Other==
    [
        "1P 5P",
        "fifth",
        "5"
    ],
    [
        "1P 3M 5A",
        "augmented",
        "aug + +5 ^#5"
    ],
    [
        "1P 3m 5A",
        "minor augmented",
        "m#5 -#5 m+"
    ],
    [
        "1P 3M 5A 7M",
        "augmented seventh",
        "maj7#5 maj7+5 +maj7 ^7#5"
    ],
    [
        "1P 3M 5P 7M 9M 11A",
        "major sharp eleventh (lydian)",
        "maj9#11 \u03949#11 ^9#11"
    ],
    // ==Legacy==
    [
        "1P 2M 4P 5P",
        "",
        "sus24 sus4add9"
    ],
    [
        "1P 3M 5A 7M 9M",
        "",
        "maj9#5 Maj9#5"
    ],
    [
        "1P 3M 5A 7m",
        "",
        "7#5 +7 7+ 7aug aug7"
    ],
    [
        "1P 3M 5A 7m 9A",
        "",
        "7#5#9 7#9#5 7alt"
    ],
    [
        "1P 3M 5A 7m 9M",
        "",
        "9#5 9+"
    ],
    [
        "1P 3M 5A 7m 9M 11A",
        "",
        "9#5#11"
    ],
    [
        "1P 3M 5A 7m 9m",
        "",
        "7#5b9 7b9#5"
    ],
    [
        "1P 3M 5A 7m 9m 11A",
        "",
        "7#5b9#11"
    ],
    [
        "1P 3M 5A 9A",
        "",
        "+add#9"
    ],
    [
        "1P 3M 5A 9M",
        "",
        "M#5add9 +add9"
    ],
    [
        "1P 3M 5P 6M 11A",
        "",
        "M6#11 M6b5 6#11 6b5"
    ],
    [
        "1P 3M 5P 6M 7M 9M",
        "",
        "M7add13"
    ],
    [
        "1P 3M 5P 6M 9M 11A",
        "",
        "69#11"
    ],
    [
        "1P 3m 5P 6M 9M",
        "",
        "m69 -69"
    ],
    [
        "1P 3M 5P 6m 7m",
        "",
        "7b6"
    ],
    [
        "1P 3M 5P 7M 9A 11A",
        "",
        "maj7#9#11"
    ],
    [
        "1P 3M 5P 7M 9M 11A 13M",
        "",
        "M13#11 maj13#11 M13+4 M13#4"
    ],
    [
        "1P 3M 5P 7M 9m",
        "",
        "M7b9"
    ],
    [
        "1P 3M 5P 7m 11A 13m",
        "",
        "7#11b13 7b5b13"
    ],
    [
        "1P 3M 5P 7m 13M",
        "",
        "7add6 67 7add13"
    ],
    [
        "1P 3M 5P 7m 9A 11A",
        "",
        "7#9#11 7b5#9 7#9b5"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13M",
        "",
        "13#9#11"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13m",
        "",
        "7#9#11b13"
    ],
    [
        "1P 3M 5P 7m 9A 13M",
        "",
        "13#9"
    ],
    [
        "1P 3M 5P 7m 9A 13m",
        "",
        "7#9b13"
    ],
    [
        "1P 3M 5P 7m 9M 11A",
        "",
        "9#11 9+4 9#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13M",
        "",
        "13#11 13+4 13#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13m",
        "",
        "9#11b13 9b5b13"
    ],
    [
        "1P 3M 5P 7m 9m 11A",
        "",
        "7b9#11 7b5b9 7b9b5"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13M",
        "",
        "13b9#11"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13m",
        "",
        "7b9b13#11 7b9#11b13 7b5b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 13M",
        "",
        "13b9"
    ],
    [
        "1P 3M 5P 7m 9m 13m",
        "",
        "7b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 9A",
        "",
        "7b9#9"
    ],
    [
        "1P 3M 5P 9M",
        "",
        "Madd9 2 add9 add2"
    ],
    [
        "1P 3M 5P 9m",
        "",
        "Maddb9"
    ],
    [
        "1P 3M 5d",
        "",
        "Mb5"
    ],
    [
        "1P 3M 5d 6M 7m 9M",
        "",
        "13b5"
    ],
    [
        "1P 3M 5d 7M",
        "",
        "M7b5"
    ],
    [
        "1P 3M 5d 7M 9M",
        "",
        "M9b5"
    ],
    [
        "1P 3M 5d 7m",
        "",
        "7b5"
    ],
    [
        "1P 3M 5d 7m 9M",
        "",
        "9b5"
    ],
    [
        "1P 3M 7m",
        "",
        "7no5"
    ],
    [
        "1P 3M 7m 13m",
        "",
        "7b13"
    ],
    [
        "1P 3M 7m 9M",
        "",
        "9no5"
    ],
    [
        "1P 3M 7m 9M 13M",
        "",
        "13no5"
    ],
    [
        "1P 3M 7m 9M 13m",
        "",
        "9b13"
    ],
    [
        "1P 3m 4P 5P",
        "",
        "madd4"
    ],
    [
        "1P 3m 5P 6m 7M",
        "",
        "mMaj7b6"
    ],
    [
        "1P 3m 5P 6m 7M 9M",
        "",
        "mMaj9b6"
    ],
    [
        "1P 3m 5P 7m 11P",
        "",
        "m7add11 m7add4"
    ],
    [
        "1P 3m 5P 9M",
        "",
        "madd9"
    ],
    [
        "1P 3m 5d 6M 7M",
        "",
        "o7M7"
    ],
    [
        "1P 3m 5d 7M",
        "",
        "oM7"
    ],
    [
        "1P 3m 6m 7M",
        "",
        "mb6M7"
    ],
    [
        "1P 3m 6m 7m",
        "",
        "m7#5"
    ],
    [
        "1P 3m 6m 7m 9M",
        "",
        "m9#5"
    ],
    [
        "1P 3m 5A 7m 9M 11P",
        "",
        "m11A"
    ],
    [
        "1P 3m 6m 9m",
        "",
        "mb6b9"
    ],
    [
        "1P 2M 3m 5d 7m",
        "",
        "m9b5"
    ],
    [
        "1P 4P 5A 7M",
        "",
        "M7#5sus4"
    ],
    [
        "1P 4P 5A 7M 9M",
        "",
        "M9#5sus4"
    ],
    [
        "1P 4P 5A 7m",
        "",
        "7#5sus4"
    ],
    [
        "1P 4P 5P 7M",
        "",
        "M7sus4"
    ],
    [
        "1P 4P 5P 7M 9M",
        "",
        "M9sus4"
    ],
    [
        "1P 4P 5P 7m 9M",
        "",
        "9sus4 9sus"
    ],
    [
        "1P 4P 5P 7m 9M 13M",
        "",
        "13sus4 13sus"
    ],
    [
        "1P 4P 5P 7m 9m 13m",
        "",
        "7sus4b9b13 7b9b13sus4"
    ],
    [
        "1P 4P 7m 10m",
        "",
        "4 quartal"
    ],
    [
        "1P 5P 7m 9m 11P",
        "",
        "11b9"
    ]
];
var data_default = CHORDS;
// index.ts
var NoChordType = {
    ...(0, _pcset.EmptyPcset),
    name: "",
    quality: "Unknown",
    intervals: [],
    aliases: []
};
var dictionary = [];
var index = {};
function get(type) {
    return index[type] || NoChordType;
}
var chordType = (0, _core.deprecate)("ChordType.chordType", "ChordType.get", get);
function names() {
    return dictionary.map((chord)=>chord.name).filter((x)=>x);
}
function symbols() {
    return dictionary.map((chord)=>chord.aliases[0]).filter((x)=>x);
}
function keys() {
    return Object.keys(index);
}
function all() {
    return dictionary.slice();
}
var entries = (0, _core.deprecate)("ChordType.entries", "ChordType.all", all);
function removeAll() {
    dictionary = [];
    index = {};
}
function add(intervals, aliases, fullName) {
    const quality = getQuality(intervals);
    const chord = {
        ...(0, _pcset.get)(intervals),
        name: fullName || "",
        quality,
        intervals,
        aliases
    };
    dictionary.push(chord);
    if (chord.name) index[chord.name] = chord;
    index[chord.setNum] = chord;
    index[chord.chroma] = chord;
    chord.aliases.forEach((alias)=>addAlias(chord, alias));
}
function addAlias(chord, alias) {
    index[alias] = chord;
}
function getQuality(intervals) {
    const has = (interval)=>intervals.indexOf(interval) !== -1;
    return has("5A") ? "Augmented" : has("3M") ? "Major" : has("5d") ? "Diminished" : has("3m") ? "Minor" : "Unknown";
}
data_default.forEach(([ivls, fullName, names2])=>add(ivls.split(" "), names2.split(" "), fullName));
dictionary.sort((a, b)=>a.setNum - b.setNum);
var chord_type_default = {
    names,
    symbols,
    get,
    all,
    add,
    removeAll,
    keys,
    // deprecated
    entries,
    chordType
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyyUH":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmptyPcset", ()=>EmptyPcset);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "chromaToIntervals", ()=>chromaToIntervals);
parcelHelpers.export(exports, "chromas", ()=>chromas);
parcelHelpers.export(exports, "default", ()=>pcset_default);
parcelHelpers.export(exports, "filter", ()=>filter);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "includes", ()=>includes);
parcelHelpers.export(exports, "isChroma", ()=>isChroma);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
parcelHelpers.export(exports, "isNoteIncludedIn", ()=>isNoteIncludedIn);
parcelHelpers.export(exports, "isSubsetOf", ()=>isSubsetOf);
parcelHelpers.export(exports, "isSupersetOf", ()=>isSupersetOf);
parcelHelpers.export(exports, "modes", ()=>modes);
parcelHelpers.export(exports, "pcset", ()=>pcset);
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var EmptyPcset = {
    empty: true,
    name: "",
    setNum: 0,
    chroma: "000000000000",
    normalized: "000000000000",
    intervals: []
};
var setNumToChroma = (num2)=>Number(num2).toString(2);
var chromaToNumber = (chroma2)=>parseInt(chroma2, 2);
var REGEX = /^[01]{12}$/;
function isChroma(set) {
    return REGEX.test(set);
}
var isPcsetNum = (set)=>typeof set === "number" && set >= 0 && set <= 4095;
var isPcset = (set)=>set && isChroma(set.chroma);
var cache = {
    [EmptyPcset.chroma]: EmptyPcset
};
function get(src) {
    const chroma2 = isChroma(src) ? src : isPcsetNum(src) ? setNumToChroma(src) : Array.isArray(src) ? listToChroma(src) : isPcset(src) ? src.chroma : EmptyPcset.chroma;
    return cache[chroma2] = cache[chroma2] || chromaToPcset(chroma2);
}
var pcset = (0, _core.deprecate)("Pcset.pcset", "Pcset.get", get);
var chroma = (set)=>get(set).chroma;
var intervals = (set)=>get(set).intervals;
var num = (set)=>get(set).setNum;
var IVLS = [
    "1P",
    "2m",
    "2M",
    "3m",
    "3M",
    "4P",
    "5d",
    "5P",
    "6m",
    "6M",
    "7m",
    "7M"
];
function chromaToIntervals(chroma2) {
    const intervals2 = [];
    for(let i = 0; i < 12; i++)if (chroma2.charAt(i) === "1") intervals2.push(IVLS[i]);
    return intervals2;
}
function chromas() {
    return (0, _collection.range)(2048, 4095).map(setNumToChroma);
}
function modes(set, normalize = true) {
    const pcs = get(set);
    const binary = pcs.chroma.split("");
    return (0, _collection.compact)(binary.map((_, i)=>{
        const r = (0, _collection.rotate)(i, binary);
        return normalize && r[0] === "0" ? null : r.join("");
    }));
}
function isEqual(s1, s2) {
    return get(s1).setNum === get(s2).setNum;
}
function isSubsetOf(set) {
    const s = get(set).setNum;
    return (notes)=>{
        const o = get(notes).setNum;
        return s && s !== o && (o & s) === o;
    };
}
function isSupersetOf(set) {
    const s = get(set).setNum;
    return (notes)=>{
        const o = get(notes).setNum;
        return s && s !== o && (o | s) === o;
    };
}
function isNoteIncludedIn(set) {
    const s = get(set);
    return (noteName)=>{
        const n = (0, _core.note)(noteName);
        return s && !n.empty && s.chroma.charAt(n.chroma) === "1";
    };
}
var includes = isNoteIncludedIn;
function filter(set) {
    const isIncluded = isNoteIncludedIn(set);
    return (notes)=>{
        return notes.filter(isIncluded);
    };
}
var pcset_default = {
    get,
    chroma,
    num,
    intervals,
    chromas,
    isSupersetOf,
    isSubsetOf,
    isNoteIncludedIn,
    isEqual,
    filter,
    modes,
    pcset
};
function chromaRotations(chroma2) {
    const binary = chroma2.split("");
    return binary.map((_, i)=>(0, _collection.rotate)(i, binary).join(""));
}
function chromaToPcset(chroma2) {
    const setNum = chromaToNumber(chroma2);
    const normalizedNum = chromaRotations(chroma2).map(chromaToNumber).filter((n)=>n >= 2048).sort()[0];
    const normalized = setNumToChroma(normalizedNum);
    const intervals2 = chromaToIntervals(chroma2);
    return {
        empty: false,
        name: "",
        setNum,
        chroma: chroma2,
        normalized,
        intervals: intervals2
    };
}
function listToChroma(set) {
    if (set.length === 0) return EmptyPcset.chroma;
    let pitch;
    const binary = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    for(let i = 0; i < set.length; i++){
        pitch = (0, _core.note)(set[i]);
        if (pitch.empty) pitch = (0, _core.interval)(set[i]);
        if (!pitch.empty) binary[pitch.chroma] = 1;
    }
    return binary.join("");
}

},{"@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"akihX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact);
parcelHelpers.export(exports, "default", ()=>collection_default);
parcelHelpers.export(exports, "permutations", ()=>permutations);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
function ascR(b, n) {
    const a = [];
    for(; n--; a[n] = n + b);
    return a;
}
function descR(b, n) {
    const a = [];
    for(; n--; a[n] = b - n);
    return a;
}
function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
function compact(arr) {
    return arr.filter((n)=>n === 0 || n);
}
function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}
var collection_default = {
    compact,
    permutations,
    range,
    rotate,
    shuffle
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRJbX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoScaleType", ()=>NoScaleType);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addAlias", ()=>addAlias);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "default", ()=>scale_type_default);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "scaleType", ()=>scaleType);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
// data.ts
var SCALES = [
    [
        "1P 2M 3M 5P 6M",
        "major pentatonic",
        "pentatonic"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7M",
        "major",
        "ionian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m",
        "minor",
        "aeolian"
    ],
    [
        "1P 2M 3m 3M 5P 6M",
        "major blues"
    ],
    [
        "1P 3m 4P 5d 5P 7m",
        "minor blues",
        "blues"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7M",
        "melodic minor"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7M",
        "harmonic minor"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m 7M",
        "bebop"
    ],
    [
        "1P 2M 3m 4P 5d 6m 6M 7M",
        "diminished",
        "whole-half diminished"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7m",
        "dorian"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7M",
        "lydian"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m",
        "mixolydian",
        "dominant"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7m",
        "phrygian"
    ],
    [
        "1P 2m 3m 4P 5d 6m 7m",
        "locrian"
    ],
    [
        "1P 3M 4P 5P 7M",
        "ionian pentatonic"
    ],
    [
        "1P 3M 4P 5P 7m",
        "mixolydian pentatonic",
        "indian"
    ],
    [
        "1P 2M 4P 5P 6M",
        "ritusen"
    ],
    [
        "1P 2M 4P 5P 7m",
        "egyptian"
    ],
    [
        "1P 3M 4P 5d 7m",
        "neopolitan major pentatonic"
    ],
    [
        "1P 3m 4P 5P 6m",
        "vietnamese 1"
    ],
    [
        "1P 2m 3m 5P 6m",
        "pelog"
    ],
    [
        "1P 2m 4P 5P 6m",
        "kumoijoshi"
    ],
    [
        "1P 2M 3m 5P 6m",
        "hirajoshi"
    ],
    [
        "1P 2m 4P 5d 7m",
        "iwato"
    ],
    [
        "1P 2m 4P 5P 7m",
        "in-sen"
    ],
    [
        "1P 3M 4A 5P 7M",
        "lydian pentatonic",
        "chinese"
    ],
    [
        "1P 3m 4P 6m 7m",
        "malkos raga"
    ],
    [
        "1P 3m 4P 5d 7m",
        "locrian pentatonic",
        "minor seven flat five pentatonic"
    ],
    [
        "1P 3m 4P 5P 7m",
        "minor pentatonic",
        "vietnamese 2"
    ],
    [
        "1P 3m 4P 5P 6M",
        "minor six pentatonic"
    ],
    [
        "1P 2M 3m 5P 6M",
        "flat three pentatonic",
        "kumoi"
    ],
    [
        "1P 2M 3M 5P 6m",
        "flat six pentatonic"
    ],
    [
        "1P 2m 3M 5P 6M",
        "scriabin"
    ],
    [
        "1P 3M 5d 6m 7m",
        "whole tone pentatonic"
    ],
    [
        "1P 3M 4A 5A 7M",
        "lydian #5P pentatonic"
    ],
    [
        "1P 3M 4A 5P 7m",
        "lydian dominant pentatonic"
    ],
    [
        "1P 3m 4P 5P 7M",
        "minor #7M pentatonic"
    ],
    [
        "1P 3m 4d 5d 7m",
        "super locrian pentatonic"
    ],
    [
        "1P 2M 3m 4P 5P 7M",
        "minor hexatonic"
    ],
    [
        "1P 2A 3M 5P 5A 7M",
        "augmented"
    ],
    [
        "1P 2M 4P 5P 6M 7m",
        "piongio"
    ],
    [
        "1P 2m 3M 4A 6M 7m",
        "prometheus neopolitan"
    ],
    [
        "1P 2M 3M 4A 6M 7m",
        "prometheus"
    ],
    [
        "1P 2m 3M 5d 6m 7m",
        "mystery #1"
    ],
    [
        "1P 2m 3M 4P 5A 6M",
        "six tone symmetric"
    ],
    [
        "1P 2M 3M 4A 5A 6A",
        "whole tone",
        "messiaen's mode #1"
    ],
    [
        "1P 2m 4P 4A 5P 7M",
        "messiaen's mode #5"
    ],
    [
        "1P 2M 3M 4P 5d 6m 7m",
        "locrian major",
        "arabian"
    ],
    [
        "1P 2m 3M 4A 5P 6m 7M",
        "double harmonic lydian"
    ],
    [
        "1P 2m 2A 3M 4A 6m 7m",
        "altered",
        "super locrian",
        "diminished whole tone",
        "pomeroy"
    ],
    [
        "1P 2M 3m 4P 5d 6m 7m",
        "locrian #2",
        "half-diminished",
        "aeolian b5"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7m",
        "mixolydian b6",
        "melodic minor fifth mode",
        "hindu"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7m",
        "lydian dominant",
        "lydian b7",
        "overtone"
    ],
    [
        "1P 2M 3M 4A 5A 6M 7M",
        "lydian augmented"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7m",
        "dorian b2",
        "phrygian #6",
        "melodic minor second mode"
    ],
    [
        "1P 2m 3m 4d 5d 6m 7d",
        "ultralocrian",
        "superlocrian bb7",
        "superlocrian diminished"
    ],
    [
        "1P 2m 3m 4P 5d 6M 7m",
        "locrian 6",
        "locrian natural 6",
        "locrian sharp 6"
    ],
    [
        "1P 2A 3M 4P 5P 5A 7M",
        "augmented heptatonic"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7m",
        "dorian #4",
        "ukrainian dorian",
        "romanian minor",
        "altered dorian"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7M",
        "lydian diminished"
    ],
    [
        "1P 2M 3M 4A 5A 7m 7M",
        "leading whole tone"
    ],
    [
        "1P 2M 3M 4A 5P 6m 7m",
        "lydian minor"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7m",
        "phrygian dominant",
        "spanish",
        "phrygian major"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7M",
        "balinese"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7M",
        "neopolitan major"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7M",
        "harmonic major"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7M",
        "double harmonic major",
        "gypsy"
    ],
    [
        "1P 2M 3m 4A 5P 6m 7M",
        "hungarian minor"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7m",
        "hungarian major"
    ],
    [
        "1P 2m 3M 4P 5d 6M 7m",
        "oriental"
    ],
    [
        "1P 2m 3m 3M 4A 5P 7m",
        "flamenco"
    ],
    [
        "1P 2m 3m 4A 5P 6m 7M",
        "todi raga"
    ],
    [
        "1P 2m 3M 4P 5d 6m 7M",
        "persian"
    ],
    [
        "1P 2m 3M 5d 6m 7m 7M",
        "enigmatic"
    ],
    [
        "1P 2M 3M 4P 5A 6M 7M",
        "major augmented",
        "major #5",
        "ionian augmented",
        "ionian #5"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7M",
        "lydian #9"
    ],
    [
        "1P 2m 2M 4P 4A 5P 6m 7M",
        "messiaen's mode #4"
    ],
    [
        "1P 2m 3M 4P 4A 5P 6m 7M",
        "purvi raga"
    ],
    [
        "1P 2m 3m 3M 4P 5P 6m 7m",
        "spanish heptatonic"
    ],
    [
        "1P 2M 3m 3M 4P 5P 6M 7m",
        "bebop minor"
    ],
    [
        "1P 2M 3M 4P 5P 5A 6M 7M",
        "bebop major"
    ],
    [
        "1P 2m 3m 4P 5d 5P 6m 7m",
        "bebop locrian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m 7M",
        "minor bebop"
    ],
    [
        "1P 2M 3M 4P 5d 5P 6M 7M",
        "ichikosucho"
    ],
    [
        "1P 2M 3m 4P 5P 6m 6M 7M",
        "minor six diminished"
    ],
    [
        "1P 2m 3m 3M 4A 5P 6M 7m",
        "half-whole diminished",
        "dominant diminished",
        "messiaen's mode #2"
    ],
    [
        "1P 3m 3M 4P 5P 6M 7m 7M",
        "kafi raga"
    ],
    [
        "1P 2M 3M 4P 4A 5A 6A 7M",
        "messiaen's mode #6"
    ],
    [
        "1P 2M 3m 3M 4P 5d 5P 6M 7m",
        "composite blues"
    ],
    [
        "1P 2M 3m 3M 4A 5P 6m 7m 7M",
        "messiaen's mode #3"
    ],
    [
        "1P 2m 2M 3m 4P 4A 5P 6m 6M 7M",
        "messiaen's mode #7"
    ],
    [
        "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M",
        "chromatic"
    ]
];
var data_default = SCALES;
// index.ts
var NoScaleType = {
    ...(0, _pcset.EmptyPcset),
    intervals: [],
    aliases: []
};
var dictionary = [];
var index = {};
function names() {
    return dictionary.map((scale)=>scale.name);
}
function get(type) {
    return index[type] || NoScaleType;
}
var scaleType = (0, _core.deprecate)("ScaleDictionary.scaleType", "ScaleType.get", get);
function all() {
    return dictionary.slice();
}
var entries = (0, _core.deprecate)("ScaleDictionary.entries", "ScaleType.all", all);
function keys() {
    return Object.keys(index);
}
function removeAll() {
    dictionary = [];
    index = {};
}
function add(intervals, name, aliases = []) {
    const scale = {
        ...(0, _pcset.get)(intervals),
        name,
        intervals,
        aliases
    };
    dictionary.push(scale);
    index[scale.name] = scale;
    index[scale.setNum] = scale;
    index[scale.chroma] = scale;
    scale.aliases.forEach((alias)=>addAlias(scale, alias));
    return scale;
}
function addAlias(scale, alias) {
    index[alias] = scale;
}
data_default.forEach(([ivls, name, ...aliases])=>add(ivls.split(" "), name, aliases));
var scale_type_default = {
    names,
    get,
    all,
    add,
    removeAll,
    keys,
    entries,
    scaleType
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nkSn":[function(require,module,exports) {
// data.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>duration_value_default);
parcelHelpers.export(exports, "fraction", ()=>fraction);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "shorthands", ()=>shorthands);
parcelHelpers.export(exports, "value", ()=>value);
var DATA = [
    [
        0.125,
        "dl",
        [
            "large",
            "duplex longa",
            "maxima",
            "octuple",
            "octuple whole"
        ]
    ],
    [
        0.25,
        "l",
        [
            "long",
            "longa"
        ]
    ],
    [
        0.5,
        "d",
        [
            "double whole",
            "double",
            "breve"
        ]
    ],
    [
        1,
        "w",
        [
            "whole",
            "semibreve"
        ]
    ],
    [
        2,
        "h",
        [
            "half",
            "minim"
        ]
    ],
    [
        4,
        "q",
        [
            "quarter",
            "crotchet"
        ]
    ],
    [
        8,
        "e",
        [
            "eighth",
            "quaver"
        ]
    ],
    [
        16,
        "s",
        [
            "sixteenth",
            "semiquaver"
        ]
    ],
    [
        32,
        "t",
        [
            "thirty-second",
            "demisemiquaver"
        ]
    ],
    [
        64,
        "sf",
        [
            "sixty-fourth",
            "hemidemisemiquaver"
        ]
    ],
    [
        128,
        "h",
        [
            "hundred twenty-eighth"
        ]
    ],
    [
        256,
        "th",
        [
            "two hundred fifty-sixth"
        ]
    ]
];
var data_default = DATA;
// index.ts
var VALUES = [];
data_default.forEach(([denominator, shorthand, names2])=>add(denominator, shorthand, names2));
var NoDuration = {
    empty: true,
    name: "",
    value: 0,
    fraction: [
        0,
        0
    ],
    shorthand: "",
    dots: "",
    names: []
};
function names() {
    return VALUES.reduce((names2, duration)=>{
        duration.names.forEach((name)=>names2.push(name));
        return names2;
    }, []);
}
function shorthands() {
    return VALUES.map((dur)=>dur.shorthand);
}
var REGEX = /^([^.]+)(\.*)$/;
function get(name) {
    const [_, simple, dots] = REGEX.exec(name) || [];
    const base = VALUES.find((dur)=>dur.shorthand === simple || dur.names.includes(simple));
    if (!base) return NoDuration;
    const fraction2 = calcDots(base.fraction, dots.length);
    const value2 = fraction2[0] / fraction2[1];
    return {
        ...base,
        name,
        dots,
        value: value2,
        fraction: fraction2
    };
}
var value = (name)=>get(name).value;
var fraction = (name)=>get(name).fraction;
var duration_value_default = {
    names,
    shorthands,
    get,
    value,
    fraction
};
function add(denominator, shorthand, names2) {
    VALUES.push({
        empty: false,
        dots: "",
        name: "",
        value: 1 / denominator,
        fraction: denominator < 1 ? [
            1 / denominator,
            1
        ] : [
            1,
            denominator
        ],
        shorthand,
        names: names2
    });
}
function calcDots(fraction2, dots) {
    const pow = Math.pow(2, dots);
    let numerator = fraction2[0] * pow;
    let denominator = fraction2[1] * pow;
    const base = numerator;
    for(let i = 0; i < dots; i++)numerator += base / Math.pow(2, i + 1);
    while(numerator % 2 === 0 && denominator % 2 === 0){
        numerator /= 2;
        denominator /= 2;
    }
    return [
        numerator,
        denominator
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nbRQ":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addTo", ()=>addTo);
parcelHelpers.export(exports, "default", ()=>interval_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "fromSemitones", ()=>fromSemitones);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "invert", ()=>invert);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "num", ()=>num);
parcelHelpers.export(exports, "quality", ()=>quality);
parcelHelpers.export(exports, "semitones", ()=>semitones);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "substract", ()=>substract);
parcelHelpers.export(exports, "transposeFifths", ()=>transposeFifths);
var _core = require("@tonaljs/core");
function names() {
    return "1P 2M 3M 4P 5P 6m 7m".split(" ");
}
var get = (0, _core.interval);
var name = (name2)=>(0, _core.interval)(name2).name;
var semitones = (name2)=>(0, _core.interval)(name2).semitones;
var quality = (name2)=>(0, _core.interval)(name2).q;
var num = (name2)=>(0, _core.interval)(name2).num;
function simplify(name2) {
    const i = (0, _core.interval)(name2);
    return i.empty ? "" : i.simple + i.q;
}
function invert(name2) {
    const i = (0, _core.interval)(name2);
    if (i.empty) return "";
    const step = (7 - i.step) % 7;
    const alt = i.type === "perfectable" ? -i.alt : -(i.alt + 1);
    return (0, _core.interval)({
        step,
        alt,
        oct: i.oct,
        dir: i.dir
    }).name;
}
var IN = [
    1,
    2,
    2,
    3,
    3,
    4,
    5,
    5,
    6,
    6,
    7,
    7
];
var IQ = "P m M m M P d P m M m M".split(" ");
function fromSemitones(semitones2) {
    const d = semitones2 < 0 ? -1 : 1;
    const n = Math.abs(semitones2);
    const c = n % 12;
    const o = Math.floor(n / 12);
    return d * (IN[c] + 7 * o) + IQ[c];
}
var distance = (0, _core.distance);
var add = combinator((a, b)=>[
        a[0] + b[0],
        a[1] + b[1]
    ]);
var addTo = (interval)=>(other)=>add(interval, other);
var substract = combinator((a, b)=>[
        a[0] - b[0],
        a[1] - b[1]
    ]);
function transposeFifths(interval, fifths) {
    const ivl = get(interval);
    if (ivl.empty) return "";
    const [nFifths, nOcts, dir] = ivl.coord;
    return (0, _core.coordToInterval)([
        nFifths + fifths,
        nOcts,
        dir
    ]).name;
}
var interval_default = {
    names,
    get,
    name,
    num,
    semitones,
    quality,
    fromSemitones,
    distance,
    invert,
    simplify,
    add,
    addTo,
    substract,
    transposeFifths
};
function combinator(fn) {
    return (a, b)=>{
        const coordA = (0, _core.interval)(a).coord;
        const coordB = (0, _core.interval)(b).coord;
        if (coordA && coordB) {
            const coord = fn(coordA, coordB);
            return (0, _core.coordToInterval)(coord).name;
        }
    };
}

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUI0Q":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>key_default);
parcelHelpers.export(exports, "majorKey", ()=>majorKey);
parcelHelpers.export(exports, "majorTonicFromKeySignature", ()=>majorTonicFromKeySignature);
parcelHelpers.export(exports, "minorKey", ()=>minorKey);
var _core = require("@tonaljs/core");
var _note = require("@tonaljs/note");
var _romanNumeral = require("@tonaljs/roman-numeral");
var Empty = Object.freeze([]);
var NoKey = {
    type: "major",
    tonic: "",
    alteration: 0,
    keySignature: ""
};
var NoKeyScale = {
    tonic: "",
    grades: Empty,
    intervals: Empty,
    scale: Empty,
    triads: Empty,
    chords: Empty,
    chordsHarmonicFunction: Empty,
    chordScales: Empty
};
var NoMajorKey = {
    ...NoKey,
    ...NoKeyScale,
    type: "major",
    minorRelative: "",
    scale: Empty,
    secondaryDominants: Empty,
    secondaryDominantsMinorRelative: Empty,
    substituteDominants: Empty,
    substituteDominantsMinorRelative: Empty
};
var NoMinorKey = {
    ...NoKey,
    type: "minor",
    relativeMajor: "",
    natural: NoKeyScale,
    harmonic: NoKeyScale,
    melodic: NoKeyScale
};
var mapScaleToType = (scale, list, sep = "")=>list.map((type, i)=>`${scale[i]}${sep}${type}`);
function keyScale(grades, triads, chords, harmonicFunctions, chordScales) {
    return (tonic)=>{
        const intervals = grades.map((gr)=>(0, _romanNumeral.get)(gr).interval || "");
        const scale = intervals.map((interval)=>(0, _core.transpose)(tonic, interval));
        return {
            tonic,
            grades,
            intervals,
            scale,
            triads: mapScaleToType(scale, triads),
            chords: mapScaleToType(scale, chords),
            chordsHarmonicFunction: harmonicFunctions.slice(),
            chordScales: mapScaleToType(scale, chordScales, " ")
        };
    };
}
var distInFifths = (from, to)=>{
    const f = (0, _core.note)(from);
    const t = (0, _core.note)(to);
    return f.empty || t.empty ? 0 : t.coord[0] - f.coord[0];
};
var MajorScale = keyScale("I II III IV V VI VII".split(" "), " m m   m dim".split(" "), "maj7 m7 m7 maj7 7 m7 m7b5".split(" "), "T SD T SD D T D".split(" "), "major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(","));
var NaturalScale = keyScale("I II bIII IV V bVI bVII".split(" "), "m dim  m m  ".split(" "), "m7 m7b5 maj7 m7 m7 maj7 7".split(" "), "T SD T SD D SD SD".split(" "), "minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(","));
var HarmonicScale = keyScale("I II bIII IV V bVI VII".split(" "), "m dim aug m   dim".split(" "), "mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "), "T SD T SD D SD D".split(" "), "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(","));
var MelodicScale = keyScale("I II bIII IV V VI VII".split(" "), "m m aug   dim dim".split(" "), "m6 m7 +maj7 7 7 m7b5 m7b5".split(" "), "T SD T SD D  ".split(" "), "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(","));
function majorKey(tonic) {
    const pc = (0, _core.note)(tonic).pc;
    if (!pc) return NoMajorKey;
    const keyScale2 = MajorScale(pc);
    const alteration = distInFifths("C", pc);
    const romanInTonic = (src)=>{
        const r = (0, _romanNumeral.get)(src);
        if (r.empty) return "";
        return (0, _core.transpose)(tonic, r.interval) + r.chordType;
    };
    return {
        ...keyScale2,
        type: "major",
        minorRelative: (0, _core.transpose)(pc, "-3m"),
        alteration,
        keySignature: (0, _core.altToAcc)(alteration),
        secondaryDominants: "- VI7 VII7 I7 II7 III7 -".split(" ").map(romanInTonic),
        secondaryDominantsMinorRelative: "- IIIm7b5 IV#m7 Vm7 VIm7 VIIm7b5 -".split(" ").map(romanInTonic),
        substituteDominants: "- bIII7 IV7 bV7 bVI7 bVII7 -".split(" ").map(romanInTonic),
        substituteDominantsMinorRelative: "- IIIm7 Im7 IIbm7 VIm7 IVm7 -".split(" ").map(romanInTonic)
    };
}
function minorKey(tnc) {
    const pc = (0, _core.note)(tnc).pc;
    if (!pc) return NoMinorKey;
    const alteration = distInFifths("C", pc) - 3;
    return {
        type: "minor",
        tonic: pc,
        relativeMajor: (0, _core.transpose)(pc, "3m"),
        alteration,
        keySignature: (0, _core.altToAcc)(alteration),
        natural: NaturalScale(pc),
        harmonic: HarmonicScale(pc),
        melodic: MelodicScale(pc)
    };
}
function majorTonicFromKeySignature(sig) {
    if (typeof sig === "number") return (0, _note.transposeFifths)("C", sig);
    else if (typeof sig === "string" && /^b+|#+$/.test(sig)) return (0, _note.transposeFifths)("C", (0, _core.accToAlt)(sig));
    return null;
}
var key_default = {
    majorKey,
    majorTonicFromKeySignature,
    minorKey
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/note":"aeHTX","@tonaljs/roman-numeral":"8RLpa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeHTX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accidentals", ()=>accidentals);
parcelHelpers.export(exports, "ascending", ()=>ascending);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "default", ()=>note_default);
parcelHelpers.export(exports, "descending", ()=>descending);
parcelHelpers.export(exports, "enharmonic", ()=>enharmonic);
parcelHelpers.export(exports, "freq", ()=>freq);
parcelHelpers.export(exports, "fromFreq", ()=>fromFreq);
parcelHelpers.export(exports, "fromFreqSharps", ()=>fromFreqSharps);
parcelHelpers.export(exports, "fromMidi", ()=>fromMidi);
parcelHelpers.export(exports, "fromMidiSharps", ()=>fromMidiSharps);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "midi", ()=>midi);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "octave", ()=>octave);
parcelHelpers.export(exports, "pitchClass", ()=>pitchClass);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "sortedNames", ()=>sortedNames);
parcelHelpers.export(exports, "sortedUniqNames", ()=>sortedUniqNames);
parcelHelpers.export(exports, "tr", ()=>tr);
parcelHelpers.export(exports, "trBy", ()=>trBy);
parcelHelpers.export(exports, "trFifths", ()=>trFifths);
parcelHelpers.export(exports, "trFrom", ()=>trFrom);
parcelHelpers.export(exports, "transpose", ()=>transpose);
parcelHelpers.export(exports, "transposeBy", ()=>transposeBy);
parcelHelpers.export(exports, "transposeFifths", ()=>transposeFifths);
parcelHelpers.export(exports, "transposeFrom", ()=>transposeFrom);
parcelHelpers.export(exports, "transposeOctaves", ()=>transposeOctaves);
var _core = require("@tonaljs/core");
var _midi = require("@tonaljs/midi");
var NAMES = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
];
var toName = (n)=>n.name;
var onlyNotes = (array)=>array.map((0, _core.note)).filter((n)=>!n.empty);
function names(array) {
    if (array === void 0) return NAMES.slice();
    else if (!Array.isArray(array)) return [];
    else return onlyNotes(array).map(toName);
}
var get = (0, _core.note);
var name = (note)=>get(note).name;
var pitchClass = (note)=>get(note).pc;
var accidentals = (note)=>get(note).acc;
var octave = (note)=>get(note).oct;
var midi = (note)=>get(note).midi;
var freq = (note)=>get(note).freq;
var chroma = (note)=>get(note).chroma;
function fromMidi(midi2) {
    return (0, _midi.midiToNoteName)(midi2);
}
function fromFreq(freq2) {
    return (0, _midi.midiToNoteName)((0, _midi.freqToMidi)(freq2));
}
function fromFreqSharps(freq2) {
    return (0, _midi.midiToNoteName)((0, _midi.freqToMidi)(freq2), {
        sharps: true
    });
}
function fromMidiSharps(midi2) {
    return (0, _midi.midiToNoteName)(midi2, {
        sharps: true
    });
}
var transpose = (0, _core.transpose);
var tr = (0, _core.transpose);
var transposeBy = (interval)=>(note)=>transpose(note, interval);
var trBy = transposeBy;
var transposeFrom = (note)=>(interval)=>transpose(note, interval);
var trFrom = transposeFrom;
function transposeFifths(noteName, fifths) {
    return transpose(noteName, [
        fifths,
        0
    ]);
}
var trFifths = transposeFifths;
function transposeOctaves(noteName, octaves) {
    return transpose(noteName, [
        0,
        octaves
    ]);
}
var ascending = (a, b)=>a.height - b.height;
var descending = (a, b)=>b.height - a.height;
function sortedNames(notes, comparator) {
    comparator = comparator || ascending;
    return onlyNotes(notes).sort(comparator).map(toName);
}
function sortedUniqNames(notes) {
    return sortedNames(notes, ascending).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
var simplify = (noteName)=>{
    const note = get(noteName);
    if (note.empty) return "";
    return (0, _midi.midiToNoteName)(note.midi || note.chroma, {
        sharps: note.alt > 0,
        pitchClass: note.midi === null
    });
};
function enharmonic(noteName, destName) {
    const src = get(noteName);
    if (src.empty) return "";
    const dest = get(destName || (0, _midi.midiToNoteName)(src.midi || src.chroma, {
        sharps: src.alt < 0,
        pitchClass: true
    }));
    if (dest.empty || dest.chroma !== src.chroma) return "";
    if (src.oct === void 0) return dest.pc;
    const srcChroma = src.chroma - src.alt;
    const destChroma = dest.chroma - dest.alt;
    const destOctOffset = srcChroma > 11 || destChroma < 0 ? -1 : srcChroma < 0 || destChroma > 11 ? 1 : 0;
    const destOct = src.oct + destOctOffset;
    return dest.pc + destOct;
}
var note_default = {
    names,
    get,
    name,
    pitchClass,
    accidentals,
    octave,
    midi,
    ascending,
    descending,
    sortedNames,
    sortedUniqNames,
    fromMidi,
    fromMidiSharps,
    freq,
    fromFreq,
    fromFreqSharps,
    chroma,
    transpose,
    tr,
    transposeBy,
    trBy,
    transposeFrom,
    trFrom,
    transposeFifths,
    transposeOctaves,
    trFifths,
    simplify,
    enharmonic
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/midi":"3mmFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mmFz":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "default", ()=>midi_default);
parcelHelpers.export(exports, "freqToMidi", ()=>freqToMidi);
parcelHelpers.export(exports, "isMidi", ()=>isMidi);
parcelHelpers.export(exports, "midiToFreq", ()=>midiToFreq);
parcelHelpers.export(exports, "midiToNoteName", ()=>midiToNoteName);
parcelHelpers.export(exports, "pcset", ()=>pcset);
parcelHelpers.export(exports, "pcsetDegrees", ()=>pcsetDegrees);
parcelHelpers.export(exports, "pcsetNearest", ()=>pcsetNearest);
parcelHelpers.export(exports, "pcsetSteps", ()=>pcsetSteps);
parcelHelpers.export(exports, "toMidi", ()=>toMidi);
var _core = require("@tonaljs/core");
function isMidi(arg) {
    return +arg >= 0 && +arg <= 127;
}
function toMidi(note) {
    if (isMidi(note)) return +note;
    const n = (0, _core.note)(note);
    return n.empty ? null : n.midi;
}
function midiToFreq(midi, tuning = 440) {
    return Math.pow(2, (midi - 69) / 12) * tuning;
}
var L2 = Math.log(2);
var L440 = Math.log(440);
function freqToMidi(freq) {
    const v = 12 * (Math.log(freq) - L440) / L2 + 69;
    return Math.round(v * 100) / 100;
}
var SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
var FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
function midiToNoteName(midi, options = {}) {
    if (isNaN(midi) || midi === -Infinity || midi === Infinity) return "";
    midi = Math.round(midi);
    const pcs = options.sharps === true ? SHARPS : FLATS;
    const pc = pcs[midi % 12];
    if (options.pitchClass) return pc;
    const o = Math.floor(midi / 12) - 1;
    return pc + o;
}
function chroma(midi) {
    return midi % 12;
}
function pcsetFromChroma(chroma2) {
    return chroma2.split("").reduce((pcset2, val, index)=>{
        if (index < 12 && val === "1") pcset2.push(index);
        return pcset2;
    }, []);
}
function pcsetFromMidi(midi) {
    return midi.map(chroma).sort((a, b)=>a - b).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
function pcset(notes) {
    return Array.isArray(notes) ? pcsetFromMidi(notes) : pcsetFromChroma(notes);
}
function pcsetNearest(notes) {
    const set = pcset(notes);
    return (midi)=>{
        const ch = chroma(midi);
        for(let i = 0; i < 12; i++){
            if (set.includes(ch + i)) return midi + i;
            if (set.includes(ch - i)) return midi - i;
        }
        return void 0;
    };
}
function pcsetSteps(notes, tonic) {
    const set = pcset(notes);
    const len = set.length;
    return (step)=>{
        const index = step < 0 ? (len - -step % len) % len : step % len;
        const octaves = Math.floor(step / len);
        return set[index] + octaves * 12 + tonic;
    };
}
function pcsetDegrees(notes, tonic) {
    const steps = pcsetSteps(notes, tonic);
    return (degree)=>{
        if (degree === 0) return void 0;
        return steps(degree > 0 ? degree - 1 : degree);
    };
}
var midi_default = {
    chroma,
    freqToMidi,
    isMidi,
    midiToFreq,
    midiToNoteName,
    pcsetNearest,
    pcset,
    pcsetDegrees,
    pcsetSteps,
    toMidi
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8RLpa":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>roman_numeral_default);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
var _core = require("@tonaljs/core");
var NoRomanNumeral = {
    empty: true,
    name: "",
    chordType: ""
};
var cache = {};
function get(src) {
    return typeof src === "string" ? cache[src] || (cache[src] = parse(src)) : typeof src === "number" ? get(NAMES[src] || "") : (0, _core.isPitch)(src) ? fromPitch(src) : (0, _core.isNamed)(src) ? get(src.name) : NoRomanNumeral;
}
var romanNumeral = (0, _core.deprecate)("RomanNumeral.romanNumeral", "RomanNumeral.get", get);
function names(major = true) {
    return (major ? NAMES : NAMES_MINOR).slice();
}
function fromPitch(pitch) {
    return get((0, _core.altToAcc)(pitch.alt) + NAMES[pitch.step]);
}
var REGEX = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
function tokenize(str) {
    return REGEX.exec(str) || [
        "",
        "",
        "",
        ""
    ];
}
var ROMANS = "I II III IV V VI VII";
var NAMES = ROMANS.split(" ");
var NAMES_MINOR = ROMANS.toLowerCase().split(" ");
function parse(src) {
    const [name, acc, roman, chordType] = tokenize(src);
    if (!roman) return NoRomanNumeral;
    const upperRoman = roman.toUpperCase();
    const step = NAMES.indexOf(upperRoman);
    const alt = (0, _core.accToAlt)(acc);
    const dir = 1;
    return {
        empty: false,
        name,
        roman,
        interval: (0, _core.interval)({
            step,
            alt,
            dir
        }).name,
        acc,
        chordType,
        alt,
        step,
        major: roman === upperRoman,
        oct: 0,
        dir
    };
}
var roman_numeral_default = {
    names,
    get,
    romanNumeral
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVKRW":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "default", ()=>mode_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "mode", ()=>mode);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "notes", ()=>notes);
parcelHelpers.export(exports, "relativeTonic", ()=>relativeTonic);
parcelHelpers.export(exports, "seventhChords", ()=>seventhChords);
parcelHelpers.export(exports, "triads", ()=>triads);
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var _interval = require("@tonaljs/interval");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var MODES = [
    [
        0,
        2773,
        0,
        "ionian",
        "",
        "Maj7",
        "major"
    ],
    [
        1,
        2902,
        2,
        "dorian",
        "m",
        "m7"
    ],
    [
        2,
        3418,
        4,
        "phrygian",
        "m",
        "m7"
    ],
    [
        3,
        2741,
        -1,
        "lydian",
        "",
        "Maj7"
    ],
    [
        4,
        2774,
        1,
        "mixolydian",
        "",
        "7"
    ],
    [
        5,
        2906,
        3,
        "aeolian",
        "m",
        "m7",
        "minor"
    ],
    [
        6,
        3434,
        5,
        "locrian",
        "dim",
        "m7b5"
    ]
];
var NoMode = {
    ...(0, _pcset.EmptyPcset),
    name: "",
    alt: 0,
    modeNum: NaN,
    triad: "",
    seventh: "",
    aliases: []
};
var modes = MODES.map(toMode);
var index = {};
modes.forEach((mode2)=>{
    index[mode2.name] = mode2;
    mode2.aliases.forEach((alias)=>{
        index[alias] = mode2;
    });
});
function get(name) {
    return typeof name === "string" ? index[name.toLowerCase()] || NoMode : name && name.name ? get(name.name) : NoMode;
}
var mode = (0, _core.deprecate)("Mode.mode", "Mode.get", get);
function all() {
    return modes.slice();
}
var entries = (0, _core.deprecate)("Mode.mode", "Mode.all", all);
function names() {
    return modes.map((mode2)=>mode2.name);
}
function toMode(mode2) {
    const [modeNum, setNum, alt, name, triad, seventh, alias] = mode2;
    const aliases = alias ? [
        alias
    ] : [];
    const chroma = Number(setNum).toString(2);
    const intervals = (0, _scaleType.get)(name).intervals;
    return {
        empty: false,
        intervals,
        modeNum,
        chroma,
        normalized: chroma,
        name,
        setNum,
        alt,
        triad,
        seventh,
        aliases
    };
}
function notes(modeName, tonic) {
    return get(modeName).intervals.map((ivl)=>(0, _core.transpose)(tonic, ivl));
}
function chords(chords2) {
    return (modeName, tonic)=>{
        const mode2 = get(modeName);
        if (mode2.empty) return [];
        const triads2 = (0, _collection.rotate)(mode2.modeNum, chords2);
        const tonics = mode2.intervals.map((i)=>(0, _core.transpose)(tonic, i));
        return triads2.map((triad, i)=>tonics[i] + triad);
    };
}
var triads = chords(MODES.map((x)=>x[4]));
var seventhChords = chords(MODES.map((x)=>x[5]));
function distance(destination, source) {
    const from = get(source);
    const to = get(destination);
    if (from.empty || to.empty) return "";
    return (0, _interval.simplify)((0, _interval.transposeFifths)("1P", to.alt - from.alt));
}
function relativeTonic(destination, source, tonic) {
    return (0, _core.transpose)(tonic, distance(destination, source));
}
var mode_default = {
    get,
    names,
    all,
    distance,
    relativeTonic,
    notes,
    triads,
    seventhChords,
    entries,
    mode
};

},{"@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/interval":"2nbRQ","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YROa":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>progression_default);
parcelHelpers.export(exports, "fromRomanNumerals", ()=>fromRomanNumerals);
parcelHelpers.export(exports, "toRomanNumerals", ()=>toRomanNumerals);
var _chord = require("@tonaljs/chord");
var _core = require("@tonaljs/core");
var _romanNumeral = require("@tonaljs/roman-numeral");
function fromRomanNumerals(tonic, chords) {
    const romanNumerals = chords.map((0, _romanNumeral.get));
    return romanNumerals.map((rn)=>(0, _core.transpose)(tonic, (0, _core.interval)(rn)) + rn.chordType);
}
function toRomanNumerals(tonic, chords) {
    return chords.map((chord)=>{
        const [note, chordType] = (0, _chord.tokenize)(chord);
        const intervalName = (0, _core.distance)(tonic, note);
        const roman = (0, _romanNumeral.get)((0, _core.interval)(intervalName));
        return roman.name + chordType;
    });
}
var progression_default = {
    fromRomanNumerals,
    toRomanNumerals
};

},{"@tonaljs/chord":"6ncZZ","@tonaljs/core":"d3Dyc","@tonaljs/roman-numeral":"8RLpa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Q44U":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chromatic", ()=>chromatic);
parcelHelpers.export(exports, "default", ()=>range_default);
parcelHelpers.export(exports, "numeric", ()=>numeric);
var _collection = require("@tonaljs/collection");
var _midi = require("@tonaljs/midi");
function numeric(notes) {
    const midi = (0, _collection.compact)(notes.map((note)=>typeof note === "number" ? note : (0, _midi.toMidi)(note)));
    if (!notes.length || midi.length !== notes.length) return [];
    return midi.reduce((result, note)=>{
        const last = result[result.length - 1];
        return result.concat((0, _collection.range)(last, note).slice(1));
    }, [
        midi[0]
    ]);
}
function chromatic(notes, options) {
    return numeric(notes).map((midi)=>(0, _midi.midiToNoteName)(midi, options));
}
var range_default = {
    numeric,
    chromatic
};

},{"@tonaljs/collection":"akihX","@tonaljs/midi":"3mmFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cecAp":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>scale_default);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "detect", ()=>detect);
parcelHelpers.export(exports, "extended", ()=>extended);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "modeNames", ()=>modeNames);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "rangeOf", ()=>rangeOf);
parcelHelpers.export(exports, "reduced", ()=>reduced);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "scaleChords", ()=>scaleChords);
parcelHelpers.export(exports, "scaleNotes", ()=>scaleNotes);
parcelHelpers.export(exports, "steps", ()=>steps);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
var _chordType = require("@tonaljs/chord-type");
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var _note = require("@tonaljs/note");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var NoScale = {
    empty: true,
    name: "",
    type: "",
    tonic: null,
    setNum: NaN,
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
function tokenize(name) {
    if (typeof name !== "string") return [
        "",
        ""
    ];
    const i = name.indexOf(" ");
    const tonic = (0, _core.note)(name.substring(0, i));
    if (tonic.empty) {
        const n = (0, _core.note)(name);
        return n.empty ? [
            "",
            name
        ] : [
            n.name,
            ""
        ];
    }
    const type = name.substring(tonic.name.length + 1);
    return [
        tonic.name,
        type.length ? type : ""
    ];
}
var names = (0, _scaleType.names);
function get(src) {
    const tokens = Array.isArray(src) ? src : tokenize(src);
    const tonic = (0, _core.note)(tokens[0]).name;
    const st = (0, _scaleType.get)(tokens[1]);
    if (st.empty) return NoScale;
    const type = st.name;
    const notes = tonic ? st.intervals.map((i)=>(0, _core.transpose)(tonic, i)) : [];
    const name = tonic ? tonic + " " + type : type;
    return {
        ...st,
        name,
        type,
        tonic,
        notes
    };
}
var scale = (0, _core.deprecate)("Scale.scale", "Scale.get", get);
function detect(notes, options = {}) {
    const notesChroma = (0, _pcset.chroma)(notes);
    const tonic = (0, _core.note)(options.tonic ?? notes[0] ?? "");
    const tonicChroma = tonic.chroma;
    if (tonicChroma === void 0) return [];
    const pitchClasses = notesChroma.split("");
    pitchClasses[tonicChroma] = "1";
    const scaleChroma = (0, _collection.rotate)(tonicChroma, pitchClasses).join("");
    const match = (0, _scaleType.all)().find((scaleType)=>scaleType.chroma === scaleChroma);
    const results = [];
    if (match) results.push(tonic.name + " " + match.name);
    if (options.match === "exact") return results;
    extended(scaleChroma).forEach((scaleName)=>{
        results.push(tonic.name + " " + scaleName);
    });
    return results;
}
function scaleChords(name) {
    const s = get(name);
    const inScale = (0, _pcset.isSubsetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord)=>inScale(chord.chroma)).map((chord)=>chord.aliases[0]);
}
function extended(name) {
    const chroma2 = (0, _pcset.isChroma)(name) ? name : get(name).chroma;
    const isSuperset = (0, _pcset.isSupersetOf)(chroma2);
    return (0, _scaleType.all)().filter((scale2)=>isSuperset(scale2.chroma)).map((scale2)=>scale2.name);
}
function reduced(name) {
    const isSubset = (0, _pcset.isSubsetOf)(get(name).chroma);
    return (0, _scaleType.all)().filter((scale2)=>isSubset(scale2.chroma)).map((scale2)=>scale2.name);
}
function scaleNotes(notes) {
    const pcset = notes.map((n)=>(0, _core.note)(n).pc).filter((x)=>x);
    const tonic = pcset[0];
    const scale2 = (0, _note.sortedUniqNames)(pcset);
    return (0, _collection.rotate)(scale2.indexOf(tonic), scale2);
}
function modeNames(name) {
    const s = get(name);
    if (s.empty) return [];
    const tonics = s.tonic ? s.notes : s.intervals;
    return (0, _pcset.modes)(s.chroma).map((chroma2, i)=>{
        const modeName = get(chroma2).name;
        return modeName ? [
            tonics[i],
            modeName
        ] : [
            "",
            ""
        ];
    }).filter((x)=>x[0]);
}
function getNoteNameOf(scale2) {
    const names2 = Array.isArray(scale2) ? scaleNotes(scale2) : get(scale2).notes;
    const chromas = names2.map((name)=>(0, _core.note)(name).chroma);
    return (noteOrMidi)=>{
        const currNote = typeof noteOrMidi === "number" ? (0, _core.note)((0, _note.fromMidi)(noteOrMidi)) : (0, _core.note)(noteOrMidi);
        const height = currNote.height;
        if (height === void 0) return void 0;
        const chroma2 = height % 12;
        const position = chromas.indexOf(chroma2);
        if (position === -1) return void 0;
        return (0, _note.enharmonic)(currNote.name, names2[position]);
    };
}
function rangeOf(scale2) {
    const getName = getNoteNameOf(scale2);
    return (fromNote, toNote)=>{
        const from = (0, _core.note)(fromNote).height;
        const to = (0, _core.note)(toNote).height;
        if (from === void 0 || to === void 0) return [];
        return (0, _collection.range)(from, to).map(getName).filter((x)=>x);
    };
}
function degrees(scaleName) {
    const { intervals, tonic } = get(scaleName);
    const transpose2 = (0, _core.tonicIntervalsTransposer)(intervals, tonic);
    return (degree)=>degree ? transpose2(degree > 0 ? degree - 1 : degree) : "";
}
function steps(scaleName) {
    const { intervals, tonic } = get(scaleName);
    return (0, _core.tonicIntervalsTransposer)(intervals, tonic);
}
var scale_default = {
    degrees,
    detect,
    extended,
    get,
    modeNames,
    names,
    rangeOf,
    reduced,
    scaleChords,
    scaleNotes,
    steps,
    tokenize,
    // deprecated
    scale
};

},{"@tonaljs/chord-type":"fSYoM","@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/note":"aeHTX","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbySg":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>time_signature_default);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "parse", ()=>parse);
var NONE = {
    empty: true,
    name: "",
    upper: void 0,
    lower: void 0,
    type: void 0,
    additive: []
};
var NAMES = [
    "4/4",
    "3/4",
    "2/4",
    "2/2",
    "12/8",
    "9/8",
    "6/8",
    "3/8"
];
function names() {
    return NAMES.slice();
}
var REGEX = /^(\d*\d(?:\+\d)*)\/(\d+)$/;
var CACHE = /* @__PURE__ */ new Map();
function get(literal) {
    const stringifiedLiteral = JSON.stringify(literal);
    const cached = CACHE.get(stringifiedLiteral);
    if (cached) return cached;
    const ts = build(parse(literal));
    CACHE.set(stringifiedLiteral, ts);
    return ts;
}
function parse(literal) {
    if (typeof literal === "string") {
        const [_, up2, low] = REGEX.exec(literal) || [];
        return parse([
            up2,
            low
        ]);
    }
    const [up, down] = literal;
    const denominator = +down;
    if (typeof up === "number") return [
        up,
        denominator
    ];
    const list = up.split("+").map((n)=>+n);
    return list.length === 1 ? [
        list[0],
        denominator
    ] : [
        list,
        denominator
    ];
}
var time_signature_default = {
    names,
    parse,
    get
};
var isPowerOfTwo = (x)=>Math.log(x) / Math.log(2) % 1 === 0;
function build([up, down]) {
    const upper = Array.isArray(up) ? up.reduce((a, b)=>a + b, 0) : up;
    const lower = down;
    if (upper === 0 || lower === 0) return NONE;
    const name = Array.isArray(up) ? `${up.join("+")}/${down}` : `${up}/${down}`;
    const additive = Array.isArray(up) ? up : [];
    const type = lower === 4 || lower === 2 ? "simple" : lower === 8 && upper % 3 === 0 ? "compound" : isPowerOfTwo(lower) ? "irregular" : "irrational";
    return {
        empty: false,
        name,
        type,
        upper,
        lower,
        additive
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Nmzd":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>voice_leading_default);
parcelHelpers.export(exports, "topNoteDiff", ()=>topNoteDiff);
var _note = require("@tonaljs/note");
var _noteDefault = parcelHelpers.interopDefault(_note);
var topNoteDiff = (voicings, lastVoicing)=>{
    if (!lastVoicing || !lastVoicing.length) return voicings[0];
    const topNoteMidi = (voicing)=>(0, _noteDefault.default).midi(voicing[voicing.length - 1]) || 0;
    const diff = (voicing)=>Math.abs(topNoteMidi(lastVoicing) - topNoteMidi(voicing));
    return voicings.sort((a, b)=>diff(a) - diff(b))[0];
};
var voice_leading_default = {
    topNoteDiff
};

},{"@tonaljs/note":"aeHTX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAKMG":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>voicing_default);
var _chord = require("@tonaljs/chord");
var _chordDefault = parcelHelpers.interopDefault(_chord);
var _note = require("@tonaljs/note");
var _noteDefault = parcelHelpers.interopDefault(_note);
var _range = require("@tonaljs/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _interval = require("@tonaljs/interval");
var _intervalDefault = parcelHelpers.interopDefault(_interval);
var _voicingDictionary = require("@tonaljs/voicing-dictionary");
var _voicingDictionaryDefault = parcelHelpers.interopDefault(_voicingDictionary);
var _voiceLeading = require("@tonaljs/voice-leading");
var _voiceLeadingDefault = parcelHelpers.interopDefault(_voiceLeading);
var defaultRange = [
    "C3",
    "C5"
];
var defaultDictionary = (0, _voicingDictionaryDefault.default).all;
var defaultVoiceLeading = (0, _voiceLeadingDefault.default).topNoteDiff;
function get(chord, range = defaultRange, dictionary = defaultDictionary, voiceLeading = defaultVoiceLeading, lastVoicing) {
    const voicings = search(chord, range, dictionary);
    if (!lastVoicing || !lastVoicing.length) return voicings[0];
    else return voiceLeading(voicings, lastVoicing);
}
function search(chord, range = defaultRange, dictionary = (0, _voicingDictionaryDefault.default).triads) {
    const [tonic, symbol] = (0, _chordDefault.default).tokenize(chord);
    const sets = (0, _voicingDictionaryDefault.default).lookup(symbol, dictionary);
    if (!sets) return [];
    const voicings = sets.map((intervals)=>intervals.split(" "));
    const notesInRange = (0, _rangeDefault.default).chromatic(range);
    return voicings.reduce((voiced, voicing)=>{
        const relativeIntervals = voicing.map((interval)=>(0, _intervalDefault.default).substract(interval, voicing[0]) || "");
        const bottomPitchClass = (0, _noteDefault.default).transpose(tonic, voicing[0]);
        const starts = notesInRange.filter((note)=>(0, _noteDefault.default).chroma(note) === (0, _noteDefault.default).chroma(bottomPitchClass)).filter((note)=>((0, _noteDefault.default).midi((0, _noteDefault.default).transpose(note, relativeIntervals[relativeIntervals.length - 1])) || 0) <= ((0, _noteDefault.default).midi(range[1]) || 0)).map((note)=>(0, _noteDefault.default).enharmonic(note, bottomPitchClass));
        const notes = starts.map((start)=>relativeIntervals.map((interval)=>(0, _noteDefault.default).transpose(start, interval)));
        return voiced.concat(notes);
    }, []);
}
function sequence(chords, range = defaultRange, dictionary = defaultDictionary, voiceLeading = defaultVoiceLeading, lastVoicing) {
    const { voicings } = chords.reduce(({ voicings: voicings2, lastVoicing: lastVoicing2 }, chord)=>{
        const voicing = get(chord, range, dictionary, voiceLeading, lastVoicing2);
        lastVoicing2 = voicing;
        voicings2.push(voicing);
        return {
            voicings: voicings2,
            lastVoicing: lastVoicing2
        };
    }, {
        voicings: [],
        lastVoicing
    });
    return voicings;
}
var voicing_default = {
    get,
    search,
    sequence
};

},{"@tonaljs/chord":"6ncZZ","@tonaljs/note":"aeHTX","@tonaljs/range":"8Q44U","@tonaljs/interval":"2nbRQ","@tonaljs/voicing-dictionary":"lLNh2","@tonaljs/voice-leading":"7Nmzd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLNh2":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>voicing_dictionary_default);
var _chord = require("@tonaljs/chord");
var _chordDefault = parcelHelpers.interopDefault(_chord);
// data.ts
var triads = {
    M: [
        "1P 3M 5P",
        "3M 5P 8P",
        "5P 8P 10M"
    ],
    m: [
        "1P 3m 5P",
        "3m 5P 8P",
        "5P 8P 10m"
    ],
    o: [
        "1P 3m 5d",
        "3m 5d 8P",
        "5d 8P 10m"
    ],
    aug: [
        "1P 3m 5A",
        "3m 5A 8P",
        "5A 8P 10m"
    ]
};
var lefthand = {
    m7: [
        "3m 5P 7m 9M",
        "7m 9M 10m 12P"
    ],
    "7": [
        "3M 6M 7m 9M",
        "7m 9M 10M 13M"
    ],
    "^7": [
        "3M 5P 7M 9M",
        "7M 9M 10M 12P"
    ],
    "69": [
        "3M 5P 6A 9M"
    ],
    m7b5: [
        "3m 5d 7m 8P",
        "7m 8P 10m 12d"
    ],
    "7b9": [
        "3M 6m 7m 9m",
        "7m 9m 10M 13m"
    ],
    // b9 / b13
    "7b13": [
        "3M 6m 7m 9m",
        "7m 9m 10M 13m"
    ],
    // b9 / b13
    o7: [
        "1P 3m 5d 6M",
        "5d 6M 8P 10m"
    ],
    "7#11": [
        "7m 9M 11A 13A"
    ],
    "7#9": [
        "3M 7m 9A"
    ],
    mM7: [
        "3m 5P 7M 9M",
        "7M 9M 10m 12P"
    ],
    m6: [
        "3m 5P 6M 9M",
        "6M 9M 10m 12P"
    ]
};
var all = {
    M: [
        "1P 3M 5P",
        "3M 5P 8P",
        "5P 8P 10M"
    ],
    m: [
        "1P 3m 5P",
        "3m 5P 8P",
        "5P 8P 10m"
    ],
    o: [
        "1P 3m 5d",
        "3m 5d 8P",
        "5d 8P 10m"
    ],
    aug: [
        "1P 3m 5A",
        "3m 5A 8P",
        "5A 8P 10m"
    ],
    m7: [
        "3m 5P 7m 9M",
        "7m 9M 10m 12P"
    ],
    "7": [
        "3M 6M 7m 9M",
        "7m 9M 10M 13M"
    ],
    "^7": [
        "3M 5P 7M 9M",
        "7M 9M 10M 12P"
    ],
    "69": [
        "3M 5P 6A 9M"
    ],
    m7b5: [
        "3m 5d 7m 8P",
        "7m 8P 10m 12d"
    ],
    "7b9": [
        "3M 6m 7m 9m",
        "7m 9m 10M 13m"
    ],
    // b9 / b13
    "7b13": [
        "3M 6m 7m 9m",
        "7m 9m 10M 13m"
    ],
    // b9 / b13
    o7: [
        "1P 3m 5d 6M",
        "5d 6M 8P 10m"
    ],
    "7#11": [
        "7m 9M 11A 13A"
    ],
    "7#9": [
        "3M 7m 9A"
    ],
    mM7: [
        "3m 5P 7M 9M",
        "7M 9M 10m 12P"
    ],
    m6: [
        "3m 5P 6M 9M",
        "6M 9M 10m 12P"
    ]
};
// index.ts
var defaultDictionary = lefthand;
function lookup(symbol, dictionary = defaultDictionary) {
    if (dictionary[symbol]) return dictionary[symbol];
    const { aliases } = (0, _chordDefault.default).get("C" + symbol);
    const match = Object.keys(dictionary).find((_symbol)=>aliases.includes(_symbol)) || "";
    if (match !== void 0) return dictionary[match];
    return void 0;
}
var voicing_dictionary_default = {
    lookup,
    lefthand,
    triads,
    all,
    defaultDictionary
};

},{"@tonaljs/chord":"6ncZZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["icZzK","8lqZg"], "8lqZg", "parcelRequire49b6")

//# sourceMappingURL=index.975ef6c8.js.map
