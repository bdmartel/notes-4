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
        globalObject
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
})({"eCF1U":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
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
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"igcvL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _quill = require("quill");
var _quillDefault = parcelHelpers.interopDefault(_quill);
var _quillSnowCss = require("quill/dist/quill.snow.css");
document.addEventListener("DOMContentLoaded", ()=>{
    const notesContainer = document.getElementById("notesContainer");
    const noteForm = document.getElementById("noteForm");
    const noteTitle = document.getElementById("noteTitle");
    const API_URL = "http://localhost:3000/notes";
    // Initialize Quill editor
    const quill = new (0, _quillDefault.default)("#editor-container", {
        theme: "snow",
        placeholder: "Write your notes here...",
        modules: {
            toolbar: [
                [
                    {
                        header: [
                            1,
                            2,
                            false
                        ]
                    }
                ],
                [
                    "bold",
                    "italic",
                    "underline"
                ],
                [
                    "blockquote",
                    "code-block"
                ],
                [
                    {
                        list: "ordered"
                    },
                    {
                        list: "bullet"
                    }
                ],
                [
                    "link",
                    "image"
                ],
                [
                    "clean"
                ]
            ]
        }
    });
    // Fetch notes from the API
    const fetchNotes = async ()=>{
        console.log("Fetching notes...");
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Failed to fetch notes");
            let notes = await response.json();
            // Sort notes by newest first (assuming 'createdAt' field exists)
            notes = notes.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt));
            console.log("Fetched and sorted notes:", notes);
            renderNotes(notes);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };
    // Render notes on the page
    const renderNotes = (notes)=>{
        console.log("Rendering notes:", notes);
        notesContainer.innerHTML = ""; // Clear existing notes
        notes.forEach((note)=>{
            console.log(`Rendering note: ${note.title}, ID: ${note.id}`); // Debugging
            const noteDiv = document.createElement("div");
            noteDiv.className = "note";
            noteDiv.innerHTML = `
        <h3>${note.title || "Untitled"}</h3>
        <div>${note.content}</div>
        <button class="edit-btn" data-id="${note.id}">Edit</button>
      `;
            notesContainer.appendChild(noteDiv);
        });
        // Add event listeners to "Edit" buttons
        document.querySelectorAll(".edit-btn").forEach((button)=>{
            button.addEventListener("click", (event)=>{
                const noteId = event.target.getAttribute("data-id");
                console.log("Edit button clicked, noteId:", noteId);
                loadNoteForEditing(noteId);
            });
        });
    };
    // Load a note for editing
    const loadNoteForEditing = async (noteId)=>{
        if (!noteId) {
            console.error("Note ID is undefined, cannot load for editing");
            return; // Stop execution if noteId is invalid
        }
        console.log(`Loading note for editing: ${noteId}`);
        try {
            const response = await fetch(`${API_URL}/${noteId}`);
            if (!response.ok) throw new Error("Failed to fetch the note");
            const note = await response.json();
            console.log("Loaded Note:", note);
            // Populate form fields
            document.getElementById("noteTitle").value = note.title;
            quill.setContents(quill.clipboard.convert(note.content));
            // Store the note ID for updating later
            noteForm.setAttribute("data-edit-id", noteId);
        } catch (error) {
            console.error("Error loading note for editing:", error);
        }
    };
    // Handle form submission (Add or Edit)
    noteForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const noteId = noteForm.getAttribute("data-edit-id"); // Check if editing
        const newNote = {
            title: noteTitle.value.trim(),
            content: quill.root.innerHTML
        };
        if (!newNote.content || newNote.content === "<p><br></p>") {
            alert("Note content cannot be empty!");
            return;
        }
        console.log("Submitting note:", newNote);
        console.log("Note ID (if editing):", noteId);
        try {
            const url = noteId ? `${API_URL}/${noteId}` // Update existing note
             : API_URL; // Add new note
            const method = noteId ? "PUT" : "POST";
            console.log("Request URL:", url, "Method:", method);
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newNote)
            });
            console.log("Response status:", response.status);
            if (!response.ok) throw new Error(noteId ? "Failed to update note" : "Failed to add note");
            console.log(noteId ? "Note updated successfully" : "Note added successfully");
            // Clear form and refresh notes
            noteTitle.value = "";
            quill.setContents([]);
            noteForm.removeAttribute("data-edit-id"); // Clear edit mode
            fetchNotes(); // Refresh the notes
        } catch (error) {
            console.error("Error saving note:", error);
        }
    });
    // Initial fetch to load existing notes
    fetchNotes();
});

},{"quill":"geplU","quill/dist/quill.snow.css":"2238j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"geplU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeMap", ()=>(0, _coreJs.AttributeMap));
parcelHelpers.export(exports, "Delta", ()=>(0, _coreJs.Delta));
parcelHelpers.export(exports, "Module", ()=>(0, _coreJs.Module));
parcelHelpers.export(exports, "Op", ()=>(0, _coreJs.Op));
parcelHelpers.export(exports, "OpIterator", ()=>(0, _coreJs.OpIterator));
parcelHelpers.export(exports, "Parchment", ()=>(0, _coreJs.Parchment));
parcelHelpers.export(exports, "Range", ()=>(0, _coreJs.Range));
var _coreJs = require("./core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
var _alignJs = require("./formats/align.js");
var _directionJs = require("./formats/direction.js");
var _indentJs = require("./formats/indent.js");
var _indentJsDefault = parcelHelpers.interopDefault(_indentJs);
var _blockquoteJs = require("./formats/blockquote.js");
var _blockquoteJsDefault = parcelHelpers.interopDefault(_blockquoteJs);
var _headerJs = require("./formats/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _listJs = require("./formats/list.js");
var _listJsDefault = parcelHelpers.interopDefault(_listJs);
var _backgroundJs = require("./formats/background.js");
var _colorJs = require("./formats/color.js");
var _fontJs = require("./formats/font.js");
var _sizeJs = require("./formats/size.js");
var _boldJs = require("./formats/bold.js");
var _boldJsDefault = parcelHelpers.interopDefault(_boldJs);
var _italicJs = require("./formats/italic.js");
var _italicJsDefault = parcelHelpers.interopDefault(_italicJs);
var _linkJs = require("./formats/link.js");
var _linkJsDefault = parcelHelpers.interopDefault(_linkJs);
var _scriptJs = require("./formats/script.js");
var _scriptJsDefault = parcelHelpers.interopDefault(_scriptJs);
var _strikeJs = require("./formats/strike.js");
var _strikeJsDefault = parcelHelpers.interopDefault(_strikeJs);
var _underlineJs = require("./formats/underline.js");
var _underlineJsDefault = parcelHelpers.interopDefault(_underlineJs);
var _formulaJs = require("./formats/formula.js");
var _formulaJsDefault = parcelHelpers.interopDefault(_formulaJs);
var _imageJs = require("./formats/image.js");
var _imageJsDefault = parcelHelpers.interopDefault(_imageJs);
var _videoJs = require("./formats/video.js");
var _videoJsDefault = parcelHelpers.interopDefault(_videoJs);
var _codeJs = require("./formats/code.js");
var _codeJsDefault = parcelHelpers.interopDefault(_codeJs);
var _syntaxJs = require("./modules/syntax.js");
var _syntaxJsDefault = parcelHelpers.interopDefault(_syntaxJs);
var _tableJs = require("./modules/table.js");
var _tableJsDefault = parcelHelpers.interopDefault(_tableJs);
var _toolbarJs = require("./modules/toolbar.js");
var _toolbarJsDefault = parcelHelpers.interopDefault(_toolbarJs);
var _iconsJs = require("./ui/icons.js");
var _iconsJsDefault = parcelHelpers.interopDefault(_iconsJs);
var _pickerJs = require("./ui/picker.js");
var _pickerJsDefault = parcelHelpers.interopDefault(_pickerJs);
var _colorPickerJs = require("./ui/color-picker.js");
var _colorPickerJsDefault = parcelHelpers.interopDefault(_colorPickerJs);
var _iconPickerJs = require("./ui/icon-picker.js");
var _iconPickerJsDefault = parcelHelpers.interopDefault(_iconPickerJs);
var _tooltipJs = require("./ui/tooltip.js");
var _tooltipJsDefault = parcelHelpers.interopDefault(_tooltipJs);
var _bubbleJs = require("./themes/bubble.js");
var _bubbleJsDefault = parcelHelpers.interopDefault(_bubbleJs);
var _snowJs = require("./themes/snow.js");
var _snowJsDefault = parcelHelpers.interopDefault(_snowJs);
(0, _coreJsDefault.default).register({
    'attributors/attribute/direction': (0, _directionJs.DirectionAttribute),
    'attributors/class/align': (0, _alignJs.AlignClass),
    'attributors/class/background': (0, _backgroundJs.BackgroundClass),
    'attributors/class/color': (0, _colorJs.ColorClass),
    'attributors/class/direction': (0, _directionJs.DirectionClass),
    'attributors/class/font': (0, _fontJs.FontClass),
    'attributors/class/size': (0, _sizeJs.SizeClass),
    'attributors/style/align': (0, _alignJs.AlignStyle),
    'attributors/style/background': (0, _backgroundJs.BackgroundStyle),
    'attributors/style/color': (0, _colorJs.ColorStyle),
    'attributors/style/direction': (0, _directionJs.DirectionStyle),
    'attributors/style/font': (0, _fontJs.FontStyle),
    'attributors/style/size': (0, _sizeJs.SizeStyle)
}, true);
(0, _coreJsDefault.default).register({
    'formats/align': (0, _alignJs.AlignClass),
    'formats/direction': (0, _directionJs.DirectionClass),
    'formats/indent': (0, _indentJsDefault.default),
    'formats/background': (0, _backgroundJs.BackgroundStyle),
    'formats/color': (0, _colorJs.ColorStyle),
    'formats/font': (0, _fontJs.FontClass),
    'formats/size': (0, _sizeJs.SizeClass),
    'formats/blockquote': (0, _blockquoteJsDefault.default),
    'formats/code-block': (0, _codeJsDefault.default),
    'formats/header': (0, _headerJsDefault.default),
    'formats/list': (0, _listJsDefault.default),
    'formats/bold': (0, _boldJsDefault.default),
    'formats/code': (0, _codeJs.Code),
    'formats/italic': (0, _italicJsDefault.default),
    'formats/link': (0, _linkJsDefault.default),
    'formats/script': (0, _scriptJsDefault.default),
    'formats/strike': (0, _strikeJsDefault.default),
    'formats/underline': (0, _underlineJsDefault.default),
    'formats/formula': (0, _formulaJsDefault.default),
    'formats/image': (0, _imageJsDefault.default),
    'formats/video': (0, _videoJsDefault.default),
    'modules/syntax': (0, _syntaxJsDefault.default),
    'modules/table': (0, _tableJsDefault.default),
    'modules/toolbar': (0, _toolbarJsDefault.default),
    'themes/bubble': (0, _bubbleJsDefault.default),
    'themes/snow': (0, _snowJsDefault.default),
    'ui/icons': (0, _iconsJsDefault.default),
    'ui/picker': (0, _pickerJsDefault.default),
    'ui/icon-picker': (0, _iconPickerJsDefault.default),
    'ui/color-picker': (0, _colorPickerJsDefault.default),
    'ui/tooltip': (0, _tooltipJsDefault.default)
}, true);
exports.default = (0, _coreJsDefault.default);

},{"./core.js":"5JWER","./formats/align.js":"8cAqe","./formats/direction.js":"db0gm","./formats/indent.js":"hAXJN","./formats/blockquote.js":"1rfwo","./formats/header.js":"86TLB","./formats/list.js":"1yTPD","./formats/background.js":"k5OeK","./formats/color.js":"boc53","./formats/font.js":"hn859","./formats/size.js":"7d6ph","./formats/bold.js":"4SaFZ","./formats/italic.js":"l8RWC","./formats/link.js":"rnfCc","./formats/script.js":"1rbj0","./formats/strike.js":"10HHC","./formats/underline.js":"f3yyp","./formats/formula.js":"2zoZT","./formats/image.js":"d3Bbk","./formats/video.js":"lgLjz","./formats/code.js":"kVakW","./modules/syntax.js":"ajgdZ","./modules/table.js":"9kyK3","./modules/toolbar.js":"bV4TT","./ui/icons.js":"b9WDl","./ui/picker.js":"3DGWh","./ui/color-picker.js":"knNJx","./ui/icon-picker.js":"lVFiU","./ui/tooltip.js":"76UXU","./themes/bubble.js":"7bXCT","./themes/snow.js":"6dkko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5JWER":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Module", ()=>(0, _moduleJsDefault.default));
parcelHelpers.export(exports, "Delta", ()=>(0, _quillDeltaDefault.default));
parcelHelpers.export(exports, "Op", ()=>(0, _quillDelta.Op));
parcelHelpers.export(exports, "OpIterator", ()=>(0, _quillDelta.OpIterator));
parcelHelpers.export(exports, "AttributeMap", ()=>(0, _quillDelta.AttributeMap));
parcelHelpers.export(exports, "Parchment", ()=>(0, _quillJs.Parchment));
parcelHelpers.export(exports, "Range", ()=>(0, _quillJs.Range));
var _quillJs = require("./core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
var _blockJs = require("./blots/block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
var _breakJs = require("./blots/break.js");
var _breakJsDefault = parcelHelpers.interopDefault(_breakJs);
var _containerJs = require("./blots/container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _cursorJs = require("./blots/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _embedJs = require("./blots/embed.js");
var _embedJsDefault = parcelHelpers.interopDefault(_embedJs);
var _inlineJs = require("./blots/inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
var _scrollJs = require("./blots/scroll.js");
var _scrollJsDefault = parcelHelpers.interopDefault(_scrollJs);
var _textJs = require("./blots/text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _clipboardJs = require("./modules/clipboard.js");
var _clipboardJsDefault = parcelHelpers.interopDefault(_clipboardJs);
var _historyJs = require("./modules/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _keyboardJs = require("./modules/keyboard.js");
var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
var _uploaderJs = require("./modules/uploader.js");
var _uploaderJsDefault = parcelHelpers.interopDefault(_uploaderJs);
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _inputJs = require("./modules/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _uiNodeJs = require("./modules/uiNode.js");
var _uiNodeJsDefault = parcelHelpers.interopDefault(_uiNodeJs);
var _moduleJs = require("./core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
(0, _quillJsDefault.default).register({
    'blots/block': (0, _blockJsDefault.default),
    'blots/block/embed': (0, _blockJs.BlockEmbed),
    'blots/break': (0, _breakJsDefault.default),
    'blots/container': (0, _containerJsDefault.default),
    'blots/cursor': (0, _cursorJsDefault.default),
    'blots/embed': (0, _embedJsDefault.default),
    'blots/inline': (0, _inlineJsDefault.default),
    'blots/scroll': (0, _scrollJsDefault.default),
    'blots/text': (0, _textJsDefault.default),
    'modules/clipboard': (0, _clipboardJsDefault.default),
    'modules/history': (0, _historyJsDefault.default),
    'modules/keyboard': (0, _keyboardJsDefault.default),
    'modules/uploader': (0, _uploaderJsDefault.default),
    'modules/input': (0, _inputJsDefault.default),
    'modules/uiNode': (0, _uiNodeJsDefault.default)
});
exports.default = (0, _quillJsDefault.default);

},{"./core/quill.js":"crqqt","./blots/block.js":"5b8eX","./blots/break.js":"afL9w","./blots/container.js":"9Vl5Z","./blots/cursor.js":"i9zqb","./blots/embed.js":"7IQfl","./blots/inline.js":"jTd5u","./blots/scroll.js":"1r24T","./blots/text.js":"cZig3","./modules/clipboard.js":"5aycZ","./modules/history.js":"6cvt5","./modules/keyboard.js":"6fX3l","./modules/uploader.js":"gnTkf","quill-delta":"fqWT0","./modules/input.js":"iOHID","./modules/uiNode.js":"itUoD","./core/module.js":"7945f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crqqt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Parchment", ()=>_parchment);
parcelHelpers.export(exports, "Range", ()=>(0, _selectionJs.Range));
parcelHelpers.export(exports, "globalRegistry", ()=>globalRegistry);
parcelHelpers.export(exports, "expandConfig", ()=>expandConfig);
parcelHelpers.export(exports, "overload", ()=>overload);
parcelHelpers.export(exports, "default", ()=>Quill);
var _lodashEs = require("lodash-es");
var _parchment = require("parchment");
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _editorJs = require("./editor.js");
var _editorJsDefault = parcelHelpers.interopDefault(_editorJs);
var _emitterJs = require("./emitter.js");
var _emitterJsDefault = parcelHelpers.interopDefault(_emitterJs);
var _instancesJs = require("./instances.js");
var _instancesJsDefault = parcelHelpers.interopDefault(_instancesJs);
var _loggerJs = require("./logger.js");
var _loggerJsDefault = parcelHelpers.interopDefault(_loggerJs);
var _moduleJs = require("./module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
var _selectionJs = require("./selection.js");
var _selectionJsDefault = parcelHelpers.interopDefault(_selectionJs);
var _compositionJs = require("./composition.js");
var _compositionJsDefault = parcelHelpers.interopDefault(_compositionJs);
var _themeJs = require("./theme.js");
var _themeJsDefault = parcelHelpers.interopDefault(_themeJs);
var _scrollRectIntoViewJs = require("./utils/scrollRectIntoView.js");
var _scrollRectIntoViewJsDefault = parcelHelpers.interopDefault(_scrollRectIntoViewJs);
var _createRegistryWithFormatsJs = require("./utils/createRegistryWithFormats.js");
var _createRegistryWithFormatsJsDefault = parcelHelpers.interopDefault(_createRegistryWithFormatsJs);
const debug = (0, _loggerJsDefault.default)('quill');
const globalRegistry = new _parchment.Registry();
_parchment.ParentBlot.uiClass = 'ql-ui';
/**
 * Options for initializing a Quill instance
 */ /**
 * Similar to QuillOptions, but with all properties expanded to their default values,
 * and all selectors resolved to HTMLElements.
 */ class Quill {
    static DEFAULTS = {
        bounds: null,
        modules: {
            clipboard: true,
            keyboard: true,
            history: true,
            uploader: true
        },
        placeholder: '',
        readOnly: false,
        registry: globalRegistry,
        theme: 'default'
    };
    static events = (0, _emitterJsDefault.default).events;
    static sources = (0, _emitterJsDefault.default).sources;
    static version = "2.0.3";
    static imports = {
        delta: (0, _quillDeltaDefault.default),
        parchment: _parchment,
        'core/module': (0, _moduleJsDefault.default),
        'core/theme': (0, _themeJsDefault.default)
    };
    static debug(limit) {
        if (limit === true) limit = 'log';
        (0, _loggerJsDefault.default).level(limit);
    }
    static find(node) {
        let bubble = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return (0, _instancesJsDefault.default).get(node) || globalRegistry.find(node, bubble);
    }
    static import(name) {
        if (this.imports[name] == null) debug.error(`Cannot import ${name}. Are you sure it was registered?`);
        return this.imports[name];
    }
    static register() {
        if (typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'string') {
            const target = arguments.length <= 0 ? undefined : arguments[0];
            const overwrite = !!(arguments.length <= 1 ? undefined : arguments[1]);
            const name = 'attrName' in target ? target.attrName : target.blotName;
            if (typeof name === 'string') // Shortcut for formats:
            // register(Blot | Attributor, overwrite)
            this.register(`formats/${name}`, target, overwrite);
            else Object.keys(target).forEach((key)=>{
                this.register(key, target[key], overwrite);
            });
        } else {
            const path = arguments.length <= 0 ? undefined : arguments[0];
            const target = arguments.length <= 1 ? undefined : arguments[1];
            const overwrite = !!(arguments.length <= 2 ? undefined : arguments[2]);
            if (this.imports[path] != null && !overwrite) debug.warn(`Overwriting ${path} with`, target);
            this.imports[path] = target;
            if ((path.startsWith('blots/') || path.startsWith('formats/')) && target && typeof target !== 'boolean' && target.blotName !== 'abstract') globalRegistry.register(target);
            if (typeof target.register === 'function') target.register(globalRegistry);
        }
    }
    constructor(container){
        let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.options = expandConfig(container, options);
        this.container = this.options.container;
        if (this.container == null) {
            debug.error('Invalid Quill container', container);
            return;
        }
        if (this.options.debug) Quill.debug(this.options.debug);
        const html = this.container.innerHTML.trim();
        this.container.classList.add('ql-container');
        this.container.innerHTML = '';
        (0, _instancesJsDefault.default).set(this.container, this);
        this.root = this.addContainer('ql-editor');
        this.root.classList.add('ql-blank');
        this.emitter = new (0, _emitterJsDefault.default)();
        const scrollBlotName = _parchment.ScrollBlot.blotName;
        const ScrollBlot = this.options.registry.query(scrollBlotName);
        if (!ScrollBlot || !('blotName' in ScrollBlot)) throw new Error(`Cannot initialize Quill without "${scrollBlotName}" blot`);
        this.scroll = new ScrollBlot(this.options.registry, this.root, {
            emitter: this.emitter
        });
        this.editor = new (0, _editorJsDefault.default)(this.scroll);
        this.selection = new (0, _selectionJsDefault.default)(this.scroll, this.emitter);
        this.composition = new (0, _compositionJsDefault.default)(this.scroll, this.emitter);
        this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap
        this.keyboard = this.theme.addModule('keyboard');
        this.clipboard = this.theme.addModule('clipboard');
        this.history = this.theme.addModule('history');
        this.uploader = this.theme.addModule('uploader');
        this.theme.addModule('input');
        this.theme.addModule('uiNode');
        this.theme.init();
        this.emitter.on((0, _emitterJsDefault.default).events.EDITOR_CHANGE, (type)=>{
            if (type === (0, _emitterJsDefault.default).events.TEXT_CHANGE) this.root.classList.toggle('ql-blank', this.editor.isBlank());
        });
        this.emitter.on((0, _emitterJsDefault.default).events.SCROLL_UPDATE, (source, mutations)=>{
            const oldRange = this.selection.lastRange;
            const [newRange] = this.selection.getRange();
            const selectionInfo = oldRange && newRange ? {
                oldRange,
                newRange
            } : undefined;
            modify.call(this, ()=>this.editor.update(null, mutations, selectionInfo), source);
        });
        this.emitter.on((0, _emitterJsDefault.default).events.SCROLL_EMBED_UPDATE, (blot, delta)=>{
            const oldRange = this.selection.lastRange;
            const [newRange] = this.selection.getRange();
            const selectionInfo = oldRange && newRange ? {
                oldRange,
                newRange
            } : undefined;
            modify.call(this, ()=>{
                const change = new (0, _quillDeltaDefault.default)().retain(blot.offset(this)).retain({
                    [blot.statics.blotName]: delta
                });
                return this.editor.update(change, [], selectionInfo);
            }, Quill.sources.USER);
        });
        if (html) {
            const contents = this.clipboard.convert({
                html: `${html}<p><br></p>`,
                text: '\n'
            });
            this.setContents(contents);
        }
        this.history.clear();
        if (this.options.placeholder) this.root.setAttribute('data-placeholder', this.options.placeholder);
        if (this.options.readOnly) this.disable();
        this.allowReadOnlyEdits = false;
    }
    addContainer(container) {
        let refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (typeof container === 'string') {
            const className = container;
            container = document.createElement('div');
            container.classList.add(className);
        }
        this.container.insertBefore(container, refNode);
        return container;
    }
    blur() {
        this.selection.setRange(null);
    }
    deleteText(index, length, source) {
        // @ts-expect-error
        [index, length, , source] = overload(index, length, source);
        return modify.call(this, ()=>{
            return this.editor.deleteText(index, length);
        }, source, index, -1 * length);
    }
    disable() {
        this.enable(false);
    }
    editReadOnly(modifier) {
        this.allowReadOnlyEdits = true;
        const value = modifier();
        this.allowReadOnlyEdits = false;
        return value;
    }
    enable() {
        let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.scroll.enable(enabled);
        this.container.classList.toggle('ql-disabled', !enabled);
    }
    focus() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.selection.focus();
        if (!options.preventScroll) this.scrollSelectionIntoView();
    }
    format(name, value) {
        let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _emitterJsDefault.default).sources.API;
        return modify.call(this, ()=>{
            const range = this.getSelection(true);
            let change = new (0, _quillDeltaDefault.default)();
            if (range == null) return change;
            if (this.scroll.query(name, _parchment.Scope.BLOCK)) change = this.editor.formatLine(range.index, range.length, {
                [name]: value
            });
            else if (range.length === 0) {
                this.selection.format(name, value);
                return change;
            } else change = this.editor.formatText(range.index, range.length, {
                [name]: value
            });
            this.setSelection(range, (0, _emitterJsDefault.default).sources.SILENT);
            return change;
        }, source);
    }
    formatLine(index, length, name, value, source) {
        let formats;
        // eslint-disable-next-line prefer-const
        [index, length, formats, source] = overload(index, length, // @ts-expect-error
        name, value, source);
        return modify.call(this, ()=>{
            return this.editor.formatLine(index, length, formats);
        }, source, index, 0);
    }
    formatText(index, length, name, value, source) {
        let formats;
        // eslint-disable-next-line prefer-const
        [index, length, formats, source] = overload(// @ts-expect-error
        index, length, name, value, source);
        return modify.call(this, ()=>{
            return this.editor.formatText(index, length, formats);
        }, source, index, 0);
    }
    getBounds(index) {
        let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        let bounds = null;
        if (typeof index === 'number') bounds = this.selection.getBounds(index, length);
        else bounds = this.selection.getBounds(index.index, index.length);
        if (!bounds) return null;
        const containerBounds = this.container.getBoundingClientRect();
        return {
            bottom: bounds.bottom - containerBounds.top,
            height: bounds.height,
            left: bounds.left - containerBounds.left,
            right: bounds.right - containerBounds.left,
            top: bounds.top - containerBounds.top,
            width: bounds.width
        };
    }
    getContents() {
        let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;
        [index, length] = overload(index, length);
        return this.editor.getContents(index, length);
    }
    getFormat() {
        let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
        let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (typeof index === 'number') return this.editor.getFormat(index, length);
        return this.editor.getFormat(index.index, index.length);
    }
    getIndex(blot) {
        return blot.offset(this.scroll);
    }
    getLength() {
        return this.scroll.length();
    }
    getLeaf(index) {
        return this.scroll.leaf(index);
    }
    getLine(index) {
        return this.scroll.line(index);
    }
    getLines() {
        let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;
        if (typeof index !== 'number') return this.scroll.lines(index.index, index.length);
        return this.scroll.lines(index, length);
    }
    getModule(name) {
        return this.theme.modules[name];
    }
    getSelection() {
        let focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (focus) this.focus();
        this.update(); // Make sure we access getRange with editor in consistent state
        return this.selection.getRange()[0];
    }
    getSemanticHTML() {
        let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let length = arguments.length > 1 ? arguments[1] : undefined;
        if (typeof index === 'number') length = length ?? this.getLength() - index;
        // @ts-expect-error
        [index, length] = overload(index, length);
        return this.editor.getHTML(index, length);
    }
    getText() {
        let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let length = arguments.length > 1 ? arguments[1] : undefined;
        if (typeof index === 'number') length = length ?? this.getLength() - index;
        // @ts-expect-error
        [index, length] = overload(index, length);
        return this.editor.getText(index, length);
    }
    hasFocus() {
        return this.selection.hasFocus();
    }
    insertEmbed(index, embed, value) {
        let source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;
        return modify.call(this, ()=>{
            return this.editor.insertEmbed(index, embed, value);
        }, source, index);
    }
    insertText(index, text, name, value, source) {
        let formats;
        // eslint-disable-next-line prefer-const
        // @ts-expect-error
        [index, , formats, source] = overload(index, 0, name, value, source);
        return modify.call(this, ()=>{
            return this.editor.insertText(index, text, formats);
        }, source, index, text.length);
    }
    isEnabled() {
        return this.scroll.isEnabled();
    }
    off() {
        return this.emitter.off(...arguments);
    }
    on() {
        return this.emitter.on(...arguments);
    }
    once() {
        return this.emitter.once(...arguments);
    }
    removeFormat(index, length, source) {
        [index, length, , source] = overload(index, length, source);
        return modify.call(this, ()=>{
            return this.editor.removeFormat(index, length);
        }, source, index);
    }
    scrollRectIntoView(rect) {
        (0, _scrollRectIntoViewJsDefault.default)(this.root, rect);
    }
    /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */ scrollIntoView() {
        console.warn('Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead.');
        this.scrollSelectionIntoView();
    }
    /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */ scrollSelectionIntoView() {
        const range = this.selection.lastRange;
        const bounds = range && this.selection.getBounds(range.index, range.length);
        if (bounds) this.scrollRectIntoView(bounds);
    }
    setContents(delta) {
        let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _emitterJsDefault.default).sources.API;
        return modify.call(this, ()=>{
            delta = new (0, _quillDeltaDefault.default)(delta);
            const length = this.getLength();
            // Quill will set empty editor to \n
            const delete1 = this.editor.deleteText(0, length);
            const applied = this.editor.insertContents(0, delta);
            // Remove extra \n from empty editor initialization
            const delete2 = this.editor.deleteText(this.getLength() - 1, 1);
            return delete1.compose(applied).compose(delete2);
        }, source);
    }
    setSelection(index, length, source) {
        if (index == null) // @ts-expect-error https://github.com/microsoft/TypeScript/issues/22609
        this.selection.setRange(null, length || Quill.sources.API);
        else {
            // @ts-expect-error
            [index, length, , source] = overload(index, length, source);
            this.selection.setRange(new (0, _selectionJs.Range)(Math.max(0, index), length), source);
            if (source !== (0, _emitterJsDefault.default).sources.SILENT) this.scrollSelectionIntoView();
        }
    }
    setText(text) {
        let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _emitterJsDefault.default).sources.API;
        const delta = new (0, _quillDeltaDefault.default)().insert(text);
        return this.setContents(delta, source);
    }
    update() {
        let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _emitterJsDefault.default).sources.USER;
        const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
        this.selection.update(source);
        // TODO this is usually undefined
        return change;
    }
    updateContents(delta) {
        let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _emitterJsDefault.default).sources.API;
        return modify.call(this, ()=>{
            delta = new (0, _quillDeltaDefault.default)(delta);
            return this.editor.applyDelta(delta);
        }, source, true);
    }
}
function resolveSelector(selector) {
    return typeof selector === 'string' ? document.querySelector(selector) : selector;
}
function expandModuleConfig(config) {
    return Object.entries(config ?? {}).reduce((expanded, _ref)=>{
        let [key, value] = _ref;
        return {
            ...expanded,
            [key]: value === true ? {} : value
        };
    }, {});
}
function omitUndefinedValuesFromOptions(obj) {
    return Object.fromEntries(Object.entries(obj).filter((entry)=>entry[1] !== undefined));
}
function expandConfig(containerOrSelector, options) {
    const container = resolveSelector(containerOrSelector);
    if (!container) throw new Error('Invalid Quill container');
    const shouldUseDefaultTheme = !options.theme || options.theme === Quill.DEFAULTS.theme;
    const theme = shouldUseDefaultTheme ? (0, _themeJsDefault.default) : Quill.import(`themes/${options.theme}`);
    if (!theme) throw new Error(`Invalid theme ${options.theme}. Did you register it?`);
    const { modules: quillModuleDefaults, ...quillDefaults } = Quill.DEFAULTS;
    const { modules: themeModuleDefaults, ...themeDefaults } = theme.DEFAULTS;
    let userModuleOptions = expandModuleConfig(options.modules);
    // Special case toolbar shorthand
    if (userModuleOptions != null && userModuleOptions.toolbar && userModuleOptions.toolbar.constructor !== Object) userModuleOptions = {
        ...userModuleOptions,
        toolbar: {
            container: userModuleOptions.toolbar
        }
    };
    const modules = (0, _lodashEs.merge)({}, expandModuleConfig(quillModuleDefaults), expandModuleConfig(themeModuleDefaults), userModuleOptions);
    const config = {
        ...quillDefaults,
        ...omitUndefinedValuesFromOptions(themeDefaults),
        ...omitUndefinedValuesFromOptions(options)
    };
    let registry = options.registry;
    if (registry) {
        if (options.formats) debug.warn('Ignoring "formats" option because "registry" is specified');
    } else registry = options.formats ? (0, _createRegistryWithFormatsJsDefault.default)(options.formats, config.registry, debug) : config.registry;
    return {
        ...config,
        registry,
        container,
        theme,
        modules: Object.entries(modules).reduce((modulesWithDefaults, _ref2)=>{
            let [name, value] = _ref2;
            if (!value) return modulesWithDefaults;
            const moduleClass = Quill.import(`modules/${name}`);
            if (moduleClass == null) {
                debug.error(`Cannot load ${name} module. Are you sure you registered it?`);
                return modulesWithDefaults;
            }
            return {
                ...modulesWithDefaults,
                // @ts-expect-error
                [name]: (0, _lodashEs.merge)({}, moduleClass.DEFAULTS || {}, value)
            };
        }, {}),
        bounds: resolveSelector(config.bounds)
    };
}
// Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs
function modify(modifier, source, index, shift) {
    if (!this.isEnabled() && source === (0, _emitterJsDefault.default).sources.USER && !this.allowReadOnlyEdits) return new (0, _quillDeltaDefault.default)();
    let range = index == null ? null : this.getSelection();
    const oldDelta = this.editor.delta;
    const change = modifier();
    if (range != null) {
        if (index === true) index = range.index; // eslint-disable-line prefer-destructuring
        if (shift == null) range = shiftRange(range, change, source);
        else if (shift !== 0) // @ts-expect-error index should always be number
        range = shiftRange(range, index, shift, source);
        this.setSelection(range, (0, _emitterJsDefault.default).sources.SILENT);
    }
    if (change.length() > 0) {
        const args = [
            (0, _emitterJsDefault.default).events.TEXT_CHANGE,
            change,
            oldDelta,
            source
        ];
        this.emitter.emit((0, _emitterJsDefault.default).events.EDITOR_CHANGE, ...args);
        if (source !== (0, _emitterJsDefault.default).sources.SILENT) this.emitter.emit(...args);
    }
    return change;
}
function overload(index, length, name, value, source) {
    let formats = {};
    // @ts-expect-error
    if (typeof index.index === 'number' && typeof index.length === 'number') {
        // Allow for throwaway end (used by insertText/insertEmbed)
        if (typeof length !== 'number') {
            // @ts-expect-error
            source = value;
            value = name;
            name = length;
            // @ts-expect-error
            length = index.length; // eslint-disable-line prefer-destructuring
            // @ts-expect-error
            index = index.index; // eslint-disable-line prefer-destructuring
        } else {
            // @ts-expect-error
            length = index.length; // eslint-disable-line prefer-destructuring
            // @ts-expect-error
            index = index.index; // eslint-disable-line prefer-destructuring
        }
    } else if (typeof length !== 'number') {
        // @ts-expect-error
        source = value;
        value = name;
        name = length;
        length = 0;
    }
    // Handle format being object, two format name/value strings or excluded
    if (typeof name === 'object') {
        // @ts-expect-error Fix me later
        formats = name;
        // @ts-expect-error
        source = value;
    } else if (typeof name === 'string') {
        if (value != null) formats[name] = value;
        else // @ts-expect-error
        source = name;
    }
    // Handle optional source
    source = source || (0, _emitterJsDefault.default).sources.API;
    // @ts-expect-error
    return [
        index,
        length,
        formats,
        source
    ];
}
function shiftRange(range, index, lengthOrSource, source) {
    const length = typeof lengthOrSource === 'number' ? lengthOrSource : 0;
    if (range == null) return null;
    let start;
    let end;
    // @ts-expect-error -- TODO: add a better type guard around `index`
    if (index && typeof index.transformPosition === 'function') [start, end] = [
        range.index,
        range.index + range.length
    ].map((pos)=>// @ts-expect-error -- TODO: add a better type guard around `index`
        index.transformPosition(pos, source !== (0, _emitterJsDefault.default).sources.USER));
    else [start, end] = [
        range.index,
        range.index + range.length
    ].map((pos)=>{
        // @ts-expect-error -- TODO: add a better type guard around `index`
        if (pos < index || pos === index && source === (0, _emitterJsDefault.default).sources.USER) return pos;
        if (length >= 0) return pos + length;
        // @ts-expect-error -- TODO: add a better type guard around `index`
        return Math.max(index, pos + length);
    });
    return new (0, _selectionJs.Range)(start, end - start);
}

},{"lodash-es":"bXNwz","parchment":"1ObrB","quill-delta":"fqWT0","./editor.js":"8TZwC","./emitter.js":"EzLd4","./instances.js":"bB1VN","./logger.js":"4RIBY","./module.js":"7945f","./selection.js":"fL5TU","./composition.js":"fsZvP","./theme.js":"7Obd4","./utils/scrollRectIntoView.js":"14DNv","./utils/createRegistryWithFormats.js":"jU61U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bXNwz":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>(0, _addJsDefault.default));
parcelHelpers.export(exports, "after", ()=>(0, _afterJsDefault.default));
parcelHelpers.export(exports, "ary", ()=>(0, _aryJsDefault.default));
parcelHelpers.export(exports, "assign", ()=>(0, _assignJsDefault.default));
parcelHelpers.export(exports, "assignIn", ()=>(0, _assignInJsDefault.default));
parcelHelpers.export(exports, "assignInWith", ()=>(0, _assignInWithJsDefault.default));
parcelHelpers.export(exports, "assignWith", ()=>(0, _assignWithJsDefault.default));
parcelHelpers.export(exports, "at", ()=>(0, _atJsDefault.default));
parcelHelpers.export(exports, "attempt", ()=>(0, _attemptJsDefault.default));
parcelHelpers.export(exports, "before", ()=>(0, _beforeJsDefault.default));
parcelHelpers.export(exports, "bind", ()=>(0, _bindJsDefault.default));
parcelHelpers.export(exports, "bindAll", ()=>(0, _bindAllJsDefault.default));
parcelHelpers.export(exports, "bindKey", ()=>(0, _bindKeyJsDefault.default));
parcelHelpers.export(exports, "camelCase", ()=>(0, _camelCaseJsDefault.default));
parcelHelpers.export(exports, "capitalize", ()=>(0, _capitalizeJsDefault.default));
parcelHelpers.export(exports, "castArray", ()=>(0, _castArrayJsDefault.default));
parcelHelpers.export(exports, "ceil", ()=>(0, _ceilJsDefault.default));
parcelHelpers.export(exports, "chain", ()=>(0, _chainJsDefault.default));
parcelHelpers.export(exports, "chunk", ()=>(0, _chunkJsDefault.default));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampJsDefault.default));
parcelHelpers.export(exports, "clone", ()=>(0, _cloneJsDefault.default));
parcelHelpers.export(exports, "cloneDeep", ()=>(0, _cloneDeepJsDefault.default));
parcelHelpers.export(exports, "cloneDeepWith", ()=>(0, _cloneDeepWithJsDefault.default));
parcelHelpers.export(exports, "cloneWith", ()=>(0, _cloneWithJsDefault.default));
parcelHelpers.export(exports, "commit", ()=>(0, _commitJsDefault.default));
parcelHelpers.export(exports, "compact", ()=>(0, _compactJsDefault.default));
parcelHelpers.export(exports, "concat", ()=>(0, _concatJsDefault.default));
parcelHelpers.export(exports, "cond", ()=>(0, _condJsDefault.default));
parcelHelpers.export(exports, "conforms", ()=>(0, _conformsJsDefault.default));
parcelHelpers.export(exports, "conformsTo", ()=>(0, _conformsToJsDefault.default));
parcelHelpers.export(exports, "constant", ()=>(0, _constantJsDefault.default));
parcelHelpers.export(exports, "countBy", ()=>(0, _countByJsDefault.default));
parcelHelpers.export(exports, "create", ()=>(0, _createJsDefault.default));
parcelHelpers.export(exports, "curry", ()=>(0, _curryJsDefault.default));
parcelHelpers.export(exports, "curryRight", ()=>(0, _curryRightJsDefault.default));
parcelHelpers.export(exports, "debounce", ()=>(0, _debounceJsDefault.default));
parcelHelpers.export(exports, "deburr", ()=>(0, _deburrJsDefault.default));
parcelHelpers.export(exports, "defaultTo", ()=>(0, _defaultToJsDefault.default));
parcelHelpers.export(exports, "defaults", ()=>(0, _defaultsJsDefault.default));
parcelHelpers.export(exports, "defaultsDeep", ()=>(0, _defaultsDeepJsDefault.default));
parcelHelpers.export(exports, "defer", ()=>(0, _deferJsDefault.default));
parcelHelpers.export(exports, "delay", ()=>(0, _delayJsDefault.default));
parcelHelpers.export(exports, "difference", ()=>(0, _differenceJsDefault.default));
parcelHelpers.export(exports, "differenceBy", ()=>(0, _differenceByJsDefault.default));
parcelHelpers.export(exports, "differenceWith", ()=>(0, _differenceWithJsDefault.default));
parcelHelpers.export(exports, "divide", ()=>(0, _divideJsDefault.default));
parcelHelpers.export(exports, "drop", ()=>(0, _dropJsDefault.default));
parcelHelpers.export(exports, "dropRight", ()=>(0, _dropRightJsDefault.default));
parcelHelpers.export(exports, "dropRightWhile", ()=>(0, _dropRightWhileJsDefault.default));
parcelHelpers.export(exports, "dropWhile", ()=>(0, _dropWhileJsDefault.default));
parcelHelpers.export(exports, "each", ()=>(0, _eachJsDefault.default));
parcelHelpers.export(exports, "eachRight", ()=>(0, _eachRightJsDefault.default));
parcelHelpers.export(exports, "endsWith", ()=>(0, _endsWithJsDefault.default));
parcelHelpers.export(exports, "entries", ()=>(0, _entriesJsDefault.default));
parcelHelpers.export(exports, "entriesIn", ()=>(0, _entriesInJsDefault.default));
parcelHelpers.export(exports, "eq", ()=>(0, _eqJsDefault.default));
parcelHelpers.export(exports, "escape", ()=>(0, _escapeJsDefault.default));
parcelHelpers.export(exports, "escapeRegExp", ()=>(0, _escapeRegExpJsDefault.default));
parcelHelpers.export(exports, "every", ()=>(0, _everyJsDefault.default));
parcelHelpers.export(exports, "extend", ()=>(0, _extendJsDefault.default));
parcelHelpers.export(exports, "extendWith", ()=>(0, _extendWithJsDefault.default));
parcelHelpers.export(exports, "fill", ()=>(0, _fillJsDefault.default));
parcelHelpers.export(exports, "filter", ()=>(0, _filterJsDefault.default));
parcelHelpers.export(exports, "find", ()=>(0, _findJsDefault.default));
parcelHelpers.export(exports, "findIndex", ()=>(0, _findIndexJsDefault.default));
parcelHelpers.export(exports, "findKey", ()=>(0, _findKeyJsDefault.default));
parcelHelpers.export(exports, "findLast", ()=>(0, _findLastJsDefault.default));
parcelHelpers.export(exports, "findLastIndex", ()=>(0, _findLastIndexJsDefault.default));
parcelHelpers.export(exports, "findLastKey", ()=>(0, _findLastKeyJsDefault.default));
parcelHelpers.export(exports, "first", ()=>(0, _firstJsDefault.default));
parcelHelpers.export(exports, "flatMap", ()=>(0, _flatMapJsDefault.default));
parcelHelpers.export(exports, "flatMapDeep", ()=>(0, _flatMapDeepJsDefault.default));
parcelHelpers.export(exports, "flatMapDepth", ()=>(0, _flatMapDepthJsDefault.default));
parcelHelpers.export(exports, "flatten", ()=>(0, _flattenJsDefault.default));
parcelHelpers.export(exports, "flattenDeep", ()=>(0, _flattenDeepJsDefault.default));
parcelHelpers.export(exports, "flattenDepth", ()=>(0, _flattenDepthJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "floor", ()=>(0, _floorJsDefault.default));
parcelHelpers.export(exports, "flow", ()=>(0, _flowJsDefault.default));
parcelHelpers.export(exports, "flowRight", ()=>(0, _flowRightJsDefault.default));
parcelHelpers.export(exports, "forEach", ()=>(0, _forEachJsDefault.default));
parcelHelpers.export(exports, "forEachRight", ()=>(0, _forEachRightJsDefault.default));
parcelHelpers.export(exports, "forIn", ()=>(0, _forInJsDefault.default));
parcelHelpers.export(exports, "forInRight", ()=>(0, _forInRightJsDefault.default));
parcelHelpers.export(exports, "forOwn", ()=>(0, _forOwnJsDefault.default));
parcelHelpers.export(exports, "forOwnRight", ()=>(0, _forOwnRightJsDefault.default));
parcelHelpers.export(exports, "fromPairs", ()=>(0, _fromPairsJsDefault.default));
parcelHelpers.export(exports, "functions", ()=>(0, _functionsJsDefault.default));
parcelHelpers.export(exports, "functionsIn", ()=>(0, _functionsInJsDefault.default));
parcelHelpers.export(exports, "get", ()=>(0, _getJsDefault.default));
parcelHelpers.export(exports, "groupBy", ()=>(0, _groupByJsDefault.default));
parcelHelpers.export(exports, "gt", ()=>(0, _gtJsDefault.default));
parcelHelpers.export(exports, "gte", ()=>(0, _gteJsDefault.default));
parcelHelpers.export(exports, "has", ()=>(0, _hasJsDefault.default));
parcelHelpers.export(exports, "hasIn", ()=>(0, _hasInJsDefault.default));
parcelHelpers.export(exports, "head", ()=>(0, _headJsDefault.default));
parcelHelpers.export(exports, "identity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "inRange", ()=>(0, _inRangeJsDefault.default));
parcelHelpers.export(exports, "includes", ()=>(0, _includesJsDefault.default));
parcelHelpers.export(exports, "indexOf", ()=>(0, _indexOfJsDefault.default));
parcelHelpers.export(exports, "initial", ()=>(0, _initialJsDefault.default));
parcelHelpers.export(exports, "intersection", ()=>(0, _intersectionJsDefault.default));
parcelHelpers.export(exports, "intersectionBy", ()=>(0, _intersectionByJsDefault.default));
parcelHelpers.export(exports, "intersectionWith", ()=>(0, _intersectionWithJsDefault.default));
parcelHelpers.export(exports, "invert", ()=>(0, _invertJsDefault.default));
parcelHelpers.export(exports, "invertBy", ()=>(0, _invertByJsDefault.default));
parcelHelpers.export(exports, "invoke", ()=>(0, _invokeJsDefault.default));
parcelHelpers.export(exports, "invokeMap", ()=>(0, _invokeMapJsDefault.default));
parcelHelpers.export(exports, "isArguments", ()=>(0, _isArgumentsJsDefault.default));
parcelHelpers.export(exports, "isArray", ()=>(0, _isArrayJsDefault.default));
parcelHelpers.export(exports, "isArrayBuffer", ()=>(0, _isArrayBufferJsDefault.default));
parcelHelpers.export(exports, "isArrayLike", ()=>(0, _isArrayLikeJsDefault.default));
parcelHelpers.export(exports, "isArrayLikeObject", ()=>(0, _isArrayLikeObjectJsDefault.default));
parcelHelpers.export(exports, "isBoolean", ()=>(0, _isBooleanJsDefault.default));
parcelHelpers.export(exports, "isBuffer", ()=>(0, _isBufferJsDefault.default));
parcelHelpers.export(exports, "isDate", ()=>(0, _isDateJsDefault.default));
parcelHelpers.export(exports, "isElement", ()=>(0, _isElementJsDefault.default));
parcelHelpers.export(exports, "isEmpty", ()=>(0, _isEmptyJsDefault.default));
parcelHelpers.export(exports, "isEqual", ()=>(0, _isEqualJsDefault.default));
parcelHelpers.export(exports, "isEqualWith", ()=>(0, _isEqualWithJsDefault.default));
parcelHelpers.export(exports, "isError", ()=>(0, _isErrorJsDefault.default));
parcelHelpers.export(exports, "isFinite", ()=>(0, _isFiniteJsDefault.default));
parcelHelpers.export(exports, "isFunction", ()=>(0, _isFunctionJsDefault.default));
parcelHelpers.export(exports, "isInteger", ()=>(0, _isIntegerJsDefault.default));
parcelHelpers.export(exports, "isLength", ()=>(0, _isLengthJsDefault.default));
parcelHelpers.export(exports, "isMap", ()=>(0, _isMapJsDefault.default));
parcelHelpers.export(exports, "isMatch", ()=>(0, _isMatchJsDefault.default));
parcelHelpers.export(exports, "isMatchWith", ()=>(0, _isMatchWithJsDefault.default));
parcelHelpers.export(exports, "isNaN", ()=>(0, _isNaNJsDefault.default));
parcelHelpers.export(exports, "isNative", ()=>(0, _isNativeJsDefault.default));
parcelHelpers.export(exports, "isNil", ()=>(0, _isNilJsDefault.default));
parcelHelpers.export(exports, "isNull", ()=>(0, _isNullJsDefault.default));
parcelHelpers.export(exports, "isNumber", ()=>(0, _isNumberJsDefault.default));
parcelHelpers.export(exports, "isObject", ()=>(0, _isObjectJsDefault.default));
parcelHelpers.export(exports, "isObjectLike", ()=>(0, _isObjectLikeJsDefault.default));
parcelHelpers.export(exports, "isPlainObject", ()=>(0, _isPlainObjectJsDefault.default));
parcelHelpers.export(exports, "isRegExp", ()=>(0, _isRegExpJsDefault.default));
parcelHelpers.export(exports, "isSafeInteger", ()=>(0, _isSafeIntegerJsDefault.default));
parcelHelpers.export(exports, "isSet", ()=>(0, _isSetJsDefault.default));
parcelHelpers.export(exports, "isString", ()=>(0, _isStringJsDefault.default));
parcelHelpers.export(exports, "isSymbol", ()=>(0, _isSymbolJsDefault.default));
parcelHelpers.export(exports, "isTypedArray", ()=>(0, _isTypedArrayJsDefault.default));
parcelHelpers.export(exports, "isUndefined", ()=>(0, _isUndefinedJsDefault.default));
parcelHelpers.export(exports, "isWeakMap", ()=>(0, _isWeakMapJsDefault.default));
parcelHelpers.export(exports, "isWeakSet", ()=>(0, _isWeakSetJsDefault.default));
parcelHelpers.export(exports, "iteratee", ()=>(0, _iterateeJsDefault.default));
parcelHelpers.export(exports, "join", ()=>(0, _joinJsDefault.default));
parcelHelpers.export(exports, "kebabCase", ()=>(0, _kebabCaseJsDefault.default));
parcelHelpers.export(exports, "keyBy", ()=>(0, _keyByJsDefault.default));
parcelHelpers.export(exports, "keys", ()=>(0, _keysJsDefault.default));
parcelHelpers.export(exports, "keysIn", ()=>(0, _keysInJsDefault.default));
parcelHelpers.export(exports, "last", ()=>(0, _lastJsDefault.default));
parcelHelpers.export(exports, "lastIndexOf", ()=>(0, _lastIndexOfJsDefault.default));
parcelHelpers.export(exports, "lodash", ()=>(0, _wrapperLodashJsDefault.default));
parcelHelpers.export(exports, "lowerCase", ()=>(0, _lowerCaseJsDefault.default));
parcelHelpers.export(exports, "lowerFirst", ()=>(0, _lowerFirstJsDefault.default));
parcelHelpers.export(exports, "lt", ()=>(0, _ltJsDefault.default));
parcelHelpers.export(exports, "lte", ()=>(0, _lteJsDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "mapKeys", ()=>(0, _mapKeysJsDefault.default));
parcelHelpers.export(exports, "mapValues", ()=>(0, _mapValuesJsDefault.default));
parcelHelpers.export(exports, "matches", ()=>(0, _matchesJsDefault.default));
parcelHelpers.export(exports, "matchesProperty", ()=>(0, _matchesPropertyJsDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "maxBy", ()=>(0, _maxByJsDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanJsDefault.default));
parcelHelpers.export(exports, "meanBy", ()=>(0, _meanByJsDefault.default));
parcelHelpers.export(exports, "memoize", ()=>(0, _memoizeJsDefault.default));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeJsDefault.default));
parcelHelpers.export(exports, "mergeWith", ()=>(0, _mergeWithJsDefault.default));
parcelHelpers.export(exports, "method", ()=>(0, _methodJsDefault.default));
parcelHelpers.export(exports, "methodOf", ()=>(0, _methodOfJsDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minJsDefault.default));
parcelHelpers.export(exports, "minBy", ()=>(0, _minByJsDefault.default));
parcelHelpers.export(exports, "mixin", ()=>(0, _mixinJsDefault.default));
parcelHelpers.export(exports, "multiply", ()=>(0, _multiplyJsDefault.default));
parcelHelpers.export(exports, "negate", ()=>(0, _negateJsDefault.default));
parcelHelpers.export(exports, "next", ()=>(0, _nextJsDefault.default));
parcelHelpers.export(exports, "noop", ()=>(0, _noopJsDefault.default));
parcelHelpers.export(exports, "now", ()=>(0, _nowJsDefault.default));
parcelHelpers.export(exports, "nth", ()=>(0, _nthJsDefault.default));
parcelHelpers.export(exports, "nthArg", ()=>(0, _nthArgJsDefault.default));
parcelHelpers.export(exports, "omit", ()=>(0, _omitJsDefault.default));
parcelHelpers.export(exports, "omitBy", ()=>(0, _omitByJsDefault.default));
parcelHelpers.export(exports, "once", ()=>(0, _onceJsDefault.default));
parcelHelpers.export(exports, "orderBy", ()=>(0, _orderByJsDefault.default));
parcelHelpers.export(exports, "over", ()=>(0, _overJsDefault.default));
parcelHelpers.export(exports, "overArgs", ()=>(0, _overArgsJsDefault.default));
parcelHelpers.export(exports, "overEvery", ()=>(0, _overEveryJsDefault.default));
parcelHelpers.export(exports, "overSome", ()=>(0, _overSomeJsDefault.default));
parcelHelpers.export(exports, "pad", ()=>(0, _padJsDefault.default));
parcelHelpers.export(exports, "padEnd", ()=>(0, _padEndJsDefault.default));
parcelHelpers.export(exports, "padStart", ()=>(0, _padStartJsDefault.default));
parcelHelpers.export(exports, "parseInt", ()=>(0, _parseIntJsDefault.default));
parcelHelpers.export(exports, "partial", ()=>(0, _partialJsDefault.default));
parcelHelpers.export(exports, "partialRight", ()=>(0, _partialRightJsDefault.default));
parcelHelpers.export(exports, "partition", ()=>(0, _partitionJsDefault.default));
parcelHelpers.export(exports, "pick", ()=>(0, _pickJsDefault.default));
parcelHelpers.export(exports, "pickBy", ()=>(0, _pickByJsDefault.default));
parcelHelpers.export(exports, "plant", ()=>(0, _plantJsDefault.default));
parcelHelpers.export(exports, "property", ()=>(0, _propertyJsDefault.default));
parcelHelpers.export(exports, "propertyOf", ()=>(0, _propertyOfJsDefault.default));
parcelHelpers.export(exports, "pull", ()=>(0, _pullJsDefault.default));
parcelHelpers.export(exports, "pullAll", ()=>(0, _pullAllJsDefault.default));
parcelHelpers.export(exports, "pullAllBy", ()=>(0, _pullAllByJsDefault.default));
parcelHelpers.export(exports, "pullAllWith", ()=>(0, _pullAllWithJsDefault.default));
parcelHelpers.export(exports, "pullAt", ()=>(0, _pullAtJsDefault.default));
parcelHelpers.export(exports, "random", ()=>(0, _randomJsDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "rangeRight", ()=>(0, _rangeRightJsDefault.default));
parcelHelpers.export(exports, "rearg", ()=>(0, _reargJsDefault.default));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduceJsDefault.default));
parcelHelpers.export(exports, "reduceRight", ()=>(0, _reduceRightJsDefault.default));
parcelHelpers.export(exports, "reject", ()=>(0, _rejectJsDefault.default));
parcelHelpers.export(exports, "remove", ()=>(0, _removeJsDefault.default));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeatJsDefault.default));
parcelHelpers.export(exports, "replace", ()=>(0, _replaceJsDefault.default));
parcelHelpers.export(exports, "rest", ()=>(0, _restJsDefault.default));
parcelHelpers.export(exports, "result", ()=>(0, _resultJsDefault.default));
parcelHelpers.export(exports, "reverse", ()=>(0, _reverseJsDefault.default));
parcelHelpers.export(exports, "round", ()=>(0, _roundJsDefault.default));
parcelHelpers.export(exports, "sample", ()=>(0, _sampleJsDefault.default));
parcelHelpers.export(exports, "sampleSize", ()=>(0, _sampleSizeJsDefault.default));
parcelHelpers.export(exports, "set", ()=>(0, _setJsDefault.default));
parcelHelpers.export(exports, "setWith", ()=>(0, _setWithJsDefault.default));
parcelHelpers.export(exports, "shuffle", ()=>(0, _shuffleJsDefault.default));
parcelHelpers.export(exports, "size", ()=>(0, _sizeJsDefault.default));
parcelHelpers.export(exports, "slice", ()=>(0, _sliceJsDefault.default));
parcelHelpers.export(exports, "snakeCase", ()=>(0, _snakeCaseJsDefault.default));
parcelHelpers.export(exports, "some", ()=>(0, _someJsDefault.default));
parcelHelpers.export(exports, "sortBy", ()=>(0, _sortByJsDefault.default));
parcelHelpers.export(exports, "sortedIndex", ()=>(0, _sortedIndexJsDefault.default));
parcelHelpers.export(exports, "sortedIndexBy", ()=>(0, _sortedIndexByJsDefault.default));
parcelHelpers.export(exports, "sortedIndexOf", ()=>(0, _sortedIndexOfJsDefault.default));
parcelHelpers.export(exports, "sortedLastIndex", ()=>(0, _sortedLastIndexJsDefault.default));
parcelHelpers.export(exports, "sortedLastIndexBy", ()=>(0, _sortedLastIndexByJsDefault.default));
parcelHelpers.export(exports, "sortedLastIndexOf", ()=>(0, _sortedLastIndexOfJsDefault.default));
parcelHelpers.export(exports, "sortedUniq", ()=>(0, _sortedUniqJsDefault.default));
parcelHelpers.export(exports, "sortedUniqBy", ()=>(0, _sortedUniqByJsDefault.default));
parcelHelpers.export(exports, "split", ()=>(0, _splitJsDefault.default));
parcelHelpers.export(exports, "spread", ()=>(0, _spreadJsDefault.default));
parcelHelpers.export(exports, "startCase", ()=>(0, _startCaseJsDefault.default));
parcelHelpers.export(exports, "startsWith", ()=>(0, _startsWithJsDefault.default));
parcelHelpers.export(exports, "stubArray", ()=>(0, _stubArrayJsDefault.default));
parcelHelpers.export(exports, "stubFalse", ()=>(0, _stubFalseJsDefault.default));
parcelHelpers.export(exports, "stubObject", ()=>(0, _stubObjectJsDefault.default));
parcelHelpers.export(exports, "stubString", ()=>(0, _stubStringJsDefault.default));
parcelHelpers.export(exports, "stubTrue", ()=>(0, _stubTrueJsDefault.default));
parcelHelpers.export(exports, "subtract", ()=>(0, _subtractJsDefault.default));
parcelHelpers.export(exports, "sum", ()=>(0, _sumJsDefault.default));
parcelHelpers.export(exports, "sumBy", ()=>(0, _sumByJsDefault.default));
parcelHelpers.export(exports, "tail", ()=>(0, _tailJsDefault.default));
parcelHelpers.export(exports, "take", ()=>(0, _takeJsDefault.default));
parcelHelpers.export(exports, "takeRight", ()=>(0, _takeRightJsDefault.default));
parcelHelpers.export(exports, "takeRightWhile", ()=>(0, _takeRightWhileJsDefault.default));
parcelHelpers.export(exports, "takeWhile", ()=>(0, _takeWhileJsDefault.default));
parcelHelpers.export(exports, "tap", ()=>(0, _tapJsDefault.default));
parcelHelpers.export(exports, "template", ()=>(0, _templateJsDefault.default));
parcelHelpers.export(exports, "templateSettings", ()=>(0, _templateSettingsJsDefault.default));
parcelHelpers.export(exports, "throttle", ()=>(0, _throttleJsDefault.default));
parcelHelpers.export(exports, "thru", ()=>(0, _thruJsDefault.default));
parcelHelpers.export(exports, "times", ()=>(0, _timesJsDefault.default));
parcelHelpers.export(exports, "toArray", ()=>(0, _toArrayJsDefault.default));
parcelHelpers.export(exports, "toFinite", ()=>(0, _toFiniteJsDefault.default));
parcelHelpers.export(exports, "toInteger", ()=>(0, _toIntegerJsDefault.default));
parcelHelpers.export(exports, "toIterator", ()=>(0, _toIteratorJsDefault.default));
parcelHelpers.export(exports, "toJSON", ()=>(0, _toJSONJsDefault.default));
parcelHelpers.export(exports, "toLength", ()=>(0, _toLengthJsDefault.default));
parcelHelpers.export(exports, "toLower", ()=>(0, _toLowerJsDefault.default));
parcelHelpers.export(exports, "toNumber", ()=>(0, _toNumberJsDefault.default));
parcelHelpers.export(exports, "toPairs", ()=>(0, _toPairsJsDefault.default));
parcelHelpers.export(exports, "toPairsIn", ()=>(0, _toPairsInJsDefault.default));
parcelHelpers.export(exports, "toPath", ()=>(0, _toPathJsDefault.default));
parcelHelpers.export(exports, "toPlainObject", ()=>(0, _toPlainObjectJsDefault.default));
parcelHelpers.export(exports, "toSafeInteger", ()=>(0, _toSafeIntegerJsDefault.default));
parcelHelpers.export(exports, "toString", ()=>(0, _toStringJsDefault.default));
parcelHelpers.export(exports, "toUpper", ()=>(0, _toUpperJsDefault.default));
parcelHelpers.export(exports, "transform", ()=>(0, _transformJsDefault.default));
parcelHelpers.export(exports, "trim", ()=>(0, _trimJsDefault.default));
parcelHelpers.export(exports, "trimEnd", ()=>(0, _trimEndJsDefault.default));
parcelHelpers.export(exports, "trimStart", ()=>(0, _trimStartJsDefault.default));
parcelHelpers.export(exports, "truncate", ()=>(0, _truncateJsDefault.default));
parcelHelpers.export(exports, "unary", ()=>(0, _unaryJsDefault.default));
parcelHelpers.export(exports, "unescape", ()=>(0, _unescapeJsDefault.default));
parcelHelpers.export(exports, "union", ()=>(0, _unionJsDefault.default));
parcelHelpers.export(exports, "unionBy", ()=>(0, _unionByJsDefault.default));
parcelHelpers.export(exports, "unionWith", ()=>(0, _unionWithJsDefault.default));
parcelHelpers.export(exports, "uniq", ()=>(0, _uniqJsDefault.default));
parcelHelpers.export(exports, "uniqBy", ()=>(0, _uniqByJsDefault.default));
parcelHelpers.export(exports, "uniqWith", ()=>(0, _uniqWithJsDefault.default));
parcelHelpers.export(exports, "uniqueId", ()=>(0, _uniqueIdJsDefault.default));
parcelHelpers.export(exports, "unset", ()=>(0, _unsetJsDefault.default));
parcelHelpers.export(exports, "unzip", ()=>(0, _unzipJsDefault.default));
parcelHelpers.export(exports, "unzipWith", ()=>(0, _unzipWithJsDefault.default));
parcelHelpers.export(exports, "update", ()=>(0, _updateJsDefault.default));
parcelHelpers.export(exports, "updateWith", ()=>(0, _updateWithJsDefault.default));
parcelHelpers.export(exports, "upperCase", ()=>(0, _upperCaseJsDefault.default));
parcelHelpers.export(exports, "upperFirst", ()=>(0, _upperFirstJsDefault.default));
parcelHelpers.export(exports, "value", ()=>(0, _valueJsDefault.default));
parcelHelpers.export(exports, "valueOf", ()=>(0, _valueOfJsDefault.default));
parcelHelpers.export(exports, "values", ()=>(0, _valuesJsDefault.default));
parcelHelpers.export(exports, "valuesIn", ()=>(0, _valuesInJsDefault.default));
parcelHelpers.export(exports, "without", ()=>(0, _withoutJsDefault.default));
parcelHelpers.export(exports, "words", ()=>(0, _wordsJsDefault.default));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapJsDefault.default));
parcelHelpers.export(exports, "wrapperAt", ()=>(0, _wrapperAtJsDefault.default));
parcelHelpers.export(exports, "wrapperChain", ()=>(0, _wrapperChainJsDefault.default));
parcelHelpers.export(exports, "wrapperCommit", ()=>(0, _commitJsDefault.default));
parcelHelpers.export(exports, "wrapperLodash", ()=>(0, _wrapperLodashJsDefault.default));
parcelHelpers.export(exports, "wrapperNext", ()=>(0, _nextJsDefault.default));
parcelHelpers.export(exports, "wrapperPlant", ()=>(0, _plantJsDefault.default));
parcelHelpers.export(exports, "wrapperReverse", ()=>(0, _wrapperReverseJsDefault.default));
parcelHelpers.export(exports, "wrapperToIterator", ()=>(0, _toIteratorJsDefault.default));
parcelHelpers.export(exports, "wrapperValue", ()=>(0, _wrapperValueJsDefault.default));
parcelHelpers.export(exports, "xor", ()=>(0, _xorJsDefault.default));
parcelHelpers.export(exports, "xorBy", ()=>(0, _xorByJsDefault.default));
parcelHelpers.export(exports, "xorWith", ()=>(0, _xorWithJsDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipJsDefault.default));
parcelHelpers.export(exports, "zipObject", ()=>(0, _zipObjectJsDefault.default));
parcelHelpers.export(exports, "zipObjectDeep", ()=>(0, _zipObjectDeepJsDefault.default));
parcelHelpers.export(exports, "zipWith", ()=>(0, _zipWithJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _lodashDefaultJsDefault.default));
var _addJs = require("./add.js");
var _addJsDefault = parcelHelpers.interopDefault(_addJs);
var _afterJs = require("./after.js");
var _afterJsDefault = parcelHelpers.interopDefault(_afterJs);
var _aryJs = require("./ary.js");
var _aryJsDefault = parcelHelpers.interopDefault(_aryJs);
var _assignJs = require("./assign.js");
var _assignJsDefault = parcelHelpers.interopDefault(_assignJs);
var _assignInJs = require("./assignIn.js");
var _assignInJsDefault = parcelHelpers.interopDefault(_assignInJs);
var _assignInWithJs = require("./assignInWith.js");
var _assignInWithJsDefault = parcelHelpers.interopDefault(_assignInWithJs);
var _assignWithJs = require("./assignWith.js");
var _assignWithJsDefault = parcelHelpers.interopDefault(_assignWithJs);
var _atJs = require("./at.js");
var _atJsDefault = parcelHelpers.interopDefault(_atJs);
var _attemptJs = require("./attempt.js");
var _attemptJsDefault = parcelHelpers.interopDefault(_attemptJs);
var _beforeJs = require("./before.js");
var _beforeJsDefault = parcelHelpers.interopDefault(_beforeJs);
var _bindJs = require("./bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _bindAllJs = require("./bindAll.js");
var _bindAllJsDefault = parcelHelpers.interopDefault(_bindAllJs);
var _bindKeyJs = require("./bindKey.js");
var _bindKeyJsDefault = parcelHelpers.interopDefault(_bindKeyJs);
var _camelCaseJs = require("./camelCase.js");
var _camelCaseJsDefault = parcelHelpers.interopDefault(_camelCaseJs);
var _capitalizeJs = require("./capitalize.js");
var _capitalizeJsDefault = parcelHelpers.interopDefault(_capitalizeJs);
var _castArrayJs = require("./castArray.js");
var _castArrayJsDefault = parcelHelpers.interopDefault(_castArrayJs);
var _ceilJs = require("./ceil.js");
var _ceilJsDefault = parcelHelpers.interopDefault(_ceilJs);
var _chainJs = require("./chain.js");
var _chainJsDefault = parcelHelpers.interopDefault(_chainJs);
var _chunkJs = require("./chunk.js");
var _chunkJsDefault = parcelHelpers.interopDefault(_chunkJs);
var _clampJs = require("./clamp.js");
var _clampJsDefault = parcelHelpers.interopDefault(_clampJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _cloneDeepJs = require("./cloneDeep.js");
var _cloneDeepJsDefault = parcelHelpers.interopDefault(_cloneDeepJs);
var _cloneDeepWithJs = require("./cloneDeepWith.js");
var _cloneDeepWithJsDefault = parcelHelpers.interopDefault(_cloneDeepWithJs);
var _cloneWithJs = require("./cloneWith.js");
var _cloneWithJsDefault = parcelHelpers.interopDefault(_cloneWithJs);
var _commitJs = require("./commit.js");
var _commitJsDefault = parcelHelpers.interopDefault(_commitJs);
var _compactJs = require("./compact.js");
var _compactJsDefault = parcelHelpers.interopDefault(_compactJs);
var _concatJs = require("./concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _condJs = require("./cond.js");
var _condJsDefault = parcelHelpers.interopDefault(_condJs);
var _conformsJs = require("./conforms.js");
var _conformsJsDefault = parcelHelpers.interopDefault(_conformsJs);
var _conformsToJs = require("./conformsTo.js");
var _conformsToJsDefault = parcelHelpers.interopDefault(_conformsToJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _countByJs = require("./countBy.js");
var _countByJsDefault = parcelHelpers.interopDefault(_countByJs);
var _createJs = require("./create.js");
var _createJsDefault = parcelHelpers.interopDefault(_createJs);
var _curryJs = require("./curry.js");
var _curryJsDefault = parcelHelpers.interopDefault(_curryJs);
var _curryRightJs = require("./curryRight.js");
var _curryRightJsDefault = parcelHelpers.interopDefault(_curryRightJs);
var _debounceJs = require("./debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _deburrJs = require("./deburr.js");
var _deburrJsDefault = parcelHelpers.interopDefault(_deburrJs);
var _defaultToJs = require("./defaultTo.js");
var _defaultToJsDefault = parcelHelpers.interopDefault(_defaultToJs);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
var _defaultsDeepJs = require("./defaultsDeep.js");
var _defaultsDeepJsDefault = parcelHelpers.interopDefault(_defaultsDeepJs);
var _deferJs = require("./defer.js");
var _deferJsDefault = parcelHelpers.interopDefault(_deferJs);
var _delayJs = require("./delay.js");
var _delayJsDefault = parcelHelpers.interopDefault(_delayJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _differenceByJs = require("./differenceBy.js");
var _differenceByJsDefault = parcelHelpers.interopDefault(_differenceByJs);
var _differenceWithJs = require("./differenceWith.js");
var _differenceWithJsDefault = parcelHelpers.interopDefault(_differenceWithJs);
var _divideJs = require("./divide.js");
var _divideJsDefault = parcelHelpers.interopDefault(_divideJs);
var _dropJs = require("./drop.js");
var _dropJsDefault = parcelHelpers.interopDefault(_dropJs);
var _dropRightJs = require("./dropRight.js");
var _dropRightJsDefault = parcelHelpers.interopDefault(_dropRightJs);
var _dropRightWhileJs = require("./dropRightWhile.js");
var _dropRightWhileJsDefault = parcelHelpers.interopDefault(_dropRightWhileJs);
var _dropWhileJs = require("./dropWhile.js");
var _dropWhileJsDefault = parcelHelpers.interopDefault(_dropWhileJs);
var _eachJs = require("./each.js");
var _eachJsDefault = parcelHelpers.interopDefault(_eachJs);
var _eachRightJs = require("./eachRight.js");
var _eachRightJsDefault = parcelHelpers.interopDefault(_eachRightJs);
var _endsWithJs = require("./endsWith.js");
var _endsWithJsDefault = parcelHelpers.interopDefault(_endsWithJs);
var _entriesJs = require("./entries.js");
var _entriesJsDefault = parcelHelpers.interopDefault(_entriesJs);
var _entriesInJs = require("./entriesIn.js");
var _entriesInJsDefault = parcelHelpers.interopDefault(_entriesInJs);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
var _escapeJs = require("./escape.js");
var _escapeJsDefault = parcelHelpers.interopDefault(_escapeJs);
var _escapeRegExpJs = require("./escapeRegExp.js");
var _escapeRegExpJsDefault = parcelHelpers.interopDefault(_escapeRegExpJs);
var _everyJs = require("./every.js");
var _everyJsDefault = parcelHelpers.interopDefault(_everyJs);
var _extendJs = require("./extend.js");
var _extendJsDefault = parcelHelpers.interopDefault(_extendJs);
var _extendWithJs = require("./extendWith.js");
var _extendWithJsDefault = parcelHelpers.interopDefault(_extendWithJs);
var _fillJs = require("./fill.js");
var _fillJsDefault = parcelHelpers.interopDefault(_fillJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _findJs = require("./find.js");
var _findJsDefault = parcelHelpers.interopDefault(_findJs);
var _findIndexJs = require("./findIndex.js");
var _findIndexJsDefault = parcelHelpers.interopDefault(_findIndexJs);
var _findKeyJs = require("./findKey.js");
var _findKeyJsDefault = parcelHelpers.interopDefault(_findKeyJs);
var _findLastJs = require("./findLast.js");
var _findLastJsDefault = parcelHelpers.interopDefault(_findLastJs);
var _findLastIndexJs = require("./findLastIndex.js");
var _findLastIndexJsDefault = parcelHelpers.interopDefault(_findLastIndexJs);
var _findLastKeyJs = require("./findLastKey.js");
var _findLastKeyJsDefault = parcelHelpers.interopDefault(_findLastKeyJs);
var _firstJs = require("./first.js");
var _firstJsDefault = parcelHelpers.interopDefault(_firstJs);
var _flatMapJs = require("./flatMap.js");
var _flatMapJsDefault = parcelHelpers.interopDefault(_flatMapJs);
var _flatMapDeepJs = require("./flatMapDeep.js");
var _flatMapDeepJsDefault = parcelHelpers.interopDefault(_flatMapDeepJs);
var _flatMapDepthJs = require("./flatMapDepth.js");
var _flatMapDepthJsDefault = parcelHelpers.interopDefault(_flatMapDepthJs);
var _flattenJs = require("./flatten.js");
var _flattenJsDefault = parcelHelpers.interopDefault(_flattenJs);
var _flattenDeepJs = require("./flattenDeep.js");
var _flattenDeepJsDefault = parcelHelpers.interopDefault(_flattenDeepJs);
var _flattenDepthJs = require("./flattenDepth.js");
var _flattenDepthJsDefault = parcelHelpers.interopDefault(_flattenDepthJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _floorJs = require("./floor.js");
var _floorJsDefault = parcelHelpers.interopDefault(_floorJs);
var _flowJs = require("./flow.js");
var _flowJsDefault = parcelHelpers.interopDefault(_flowJs);
var _flowRightJs = require("./flowRight.js");
var _flowRightJsDefault = parcelHelpers.interopDefault(_flowRightJs);
var _forEachJs = require("./forEach.js");
var _forEachJsDefault = parcelHelpers.interopDefault(_forEachJs);
var _forEachRightJs = require("./forEachRight.js");
var _forEachRightJsDefault = parcelHelpers.interopDefault(_forEachRightJs);
var _forInJs = require("./forIn.js");
var _forInJsDefault = parcelHelpers.interopDefault(_forInJs);
var _forInRightJs = require("./forInRight.js");
var _forInRightJsDefault = parcelHelpers.interopDefault(_forInRightJs);
var _forOwnJs = require("./forOwn.js");
var _forOwnJsDefault = parcelHelpers.interopDefault(_forOwnJs);
var _forOwnRightJs = require("./forOwnRight.js");
var _forOwnRightJsDefault = parcelHelpers.interopDefault(_forOwnRightJs);
var _fromPairsJs = require("./fromPairs.js");
var _fromPairsJsDefault = parcelHelpers.interopDefault(_fromPairsJs);
var _functionsJs = require("./functions.js");
var _functionsJsDefault = parcelHelpers.interopDefault(_functionsJs);
var _functionsInJs = require("./functionsIn.js");
var _functionsInJsDefault = parcelHelpers.interopDefault(_functionsInJs);
var _getJs = require("./get.js");
var _getJsDefault = parcelHelpers.interopDefault(_getJs);
var _groupByJs = require("./groupBy.js");
var _groupByJsDefault = parcelHelpers.interopDefault(_groupByJs);
var _gtJs = require("./gt.js");
var _gtJsDefault = parcelHelpers.interopDefault(_gtJs);
var _gteJs = require("./gte.js");
var _gteJsDefault = parcelHelpers.interopDefault(_gteJs);
var _hasJs = require("./has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _hasInJs = require("./hasIn.js");
var _hasInJsDefault = parcelHelpers.interopDefault(_hasInJs);
var _headJs = require("./head.js");
var _headJsDefault = parcelHelpers.interopDefault(_headJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _inRangeJs = require("./inRange.js");
var _inRangeJsDefault = parcelHelpers.interopDefault(_inRangeJs);
var _includesJs = require("./includes.js");
var _includesJsDefault = parcelHelpers.interopDefault(_includesJs);
var _indexOfJs = require("./indexOf.js");
var _indexOfJsDefault = parcelHelpers.interopDefault(_indexOfJs);
var _initialJs = require("./initial.js");
var _initialJsDefault = parcelHelpers.interopDefault(_initialJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _intersectionByJs = require("./intersectionBy.js");
var _intersectionByJsDefault = parcelHelpers.interopDefault(_intersectionByJs);
var _intersectionWithJs = require("./intersectionWith.js");
var _intersectionWithJsDefault = parcelHelpers.interopDefault(_intersectionWithJs);
var _invertJs = require("./invert.js");
var _invertJsDefault = parcelHelpers.interopDefault(_invertJs);
var _invertByJs = require("./invertBy.js");
var _invertByJsDefault = parcelHelpers.interopDefault(_invertByJs);
var _invokeJs = require("./invoke.js");
var _invokeJsDefault = parcelHelpers.interopDefault(_invokeJs);
var _invokeMapJs = require("./invokeMap.js");
var _invokeMapJsDefault = parcelHelpers.interopDefault(_invokeMapJs);
var _isArgumentsJs = require("./isArguments.js");
var _isArgumentsJsDefault = parcelHelpers.interopDefault(_isArgumentsJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isArrayBufferJs = require("./isArrayBuffer.js");
var _isArrayBufferJsDefault = parcelHelpers.interopDefault(_isArrayBufferJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _isArrayLikeObjectJs = require("./isArrayLikeObject.js");
var _isArrayLikeObjectJsDefault = parcelHelpers.interopDefault(_isArrayLikeObjectJs);
var _isBooleanJs = require("./isBoolean.js");
var _isBooleanJsDefault = parcelHelpers.interopDefault(_isBooleanJs);
var _isBufferJs = require("./isBuffer.js");
var _isBufferJsDefault = parcelHelpers.interopDefault(_isBufferJs);
var _isDateJs = require("./isDate.js");
var _isDateJsDefault = parcelHelpers.interopDefault(_isDateJs);
var _isElementJs = require("./isElement.js");
var _isElementJsDefault = parcelHelpers.interopDefault(_isElementJs);
var _isEmptyJs = require("./isEmpty.js");
var _isEmptyJsDefault = parcelHelpers.interopDefault(_isEmptyJs);
var _isEqualJs = require("./isEqual.js");
var _isEqualJsDefault = parcelHelpers.interopDefault(_isEqualJs);
var _isEqualWithJs = require("./isEqualWith.js");
var _isEqualWithJsDefault = parcelHelpers.interopDefault(_isEqualWithJs);
var _isErrorJs = require("./isError.js");
var _isErrorJsDefault = parcelHelpers.interopDefault(_isErrorJs);
var _isFiniteJs = require("./isFinite.js");
var _isFiniteJsDefault = parcelHelpers.interopDefault(_isFiniteJs);
var _isFunctionJs = require("./isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isIntegerJs = require("./isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
var _isLengthJs = require("./isLength.js");
var _isLengthJsDefault = parcelHelpers.interopDefault(_isLengthJs);
var _isMapJs = require("./isMap.js");
var _isMapJsDefault = parcelHelpers.interopDefault(_isMapJs);
var _isMatchJs = require("./isMatch.js");
var _isMatchJsDefault = parcelHelpers.interopDefault(_isMatchJs);
var _isMatchWithJs = require("./isMatchWith.js");
var _isMatchWithJsDefault = parcelHelpers.interopDefault(_isMatchWithJs);
var _isNaNJs = require("./isNaN.js");
var _isNaNJsDefault = parcelHelpers.interopDefault(_isNaNJs);
var _isNativeJs = require("./isNative.js");
var _isNativeJsDefault = parcelHelpers.interopDefault(_isNativeJs);
var _isNilJs = require("./isNil.js");
var _isNilJsDefault = parcelHelpers.interopDefault(_isNilJs);
var _isNullJs = require("./isNull.js");
var _isNullJsDefault = parcelHelpers.interopDefault(_isNullJs);
var _isNumberJs = require("./isNumber.js");
var _isNumberJsDefault = parcelHelpers.interopDefault(_isNumberJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
var _isPlainObjectJs = require("./isPlainObject.js");
var _isPlainObjectJsDefault = parcelHelpers.interopDefault(_isPlainObjectJs);
var _isRegExpJs = require("./isRegExp.js");
var _isRegExpJsDefault = parcelHelpers.interopDefault(_isRegExpJs);
var _isSafeIntegerJs = require("./isSafeInteger.js");
var _isSafeIntegerJsDefault = parcelHelpers.interopDefault(_isSafeIntegerJs);
var _isSetJs = require("./isSet.js");
var _isSetJsDefault = parcelHelpers.interopDefault(_isSetJs);
var _isStringJs = require("./isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
var _isSymbolJs = require("./isSymbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
var _isTypedArrayJs = require("./isTypedArray.js");
var _isTypedArrayJsDefault = parcelHelpers.interopDefault(_isTypedArrayJs);
var _isUndefinedJs = require("./isUndefined.js");
var _isUndefinedJsDefault = parcelHelpers.interopDefault(_isUndefinedJs);
var _isWeakMapJs = require("./isWeakMap.js");
var _isWeakMapJsDefault = parcelHelpers.interopDefault(_isWeakMapJs);
var _isWeakSetJs = require("./isWeakSet.js");
var _isWeakSetJsDefault = parcelHelpers.interopDefault(_isWeakSetJs);
var _iterateeJs = require("./iteratee.js");
var _iterateeJsDefault = parcelHelpers.interopDefault(_iterateeJs);
var _joinJs = require("./join.js");
var _joinJsDefault = parcelHelpers.interopDefault(_joinJs);
var _kebabCaseJs = require("./kebabCase.js");
var _kebabCaseJsDefault = parcelHelpers.interopDefault(_kebabCaseJs);
var _keyByJs = require("./keyBy.js");
var _keyByJsDefault = parcelHelpers.interopDefault(_keyByJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
var _lastJs = require("./last.js");
var _lastJsDefault = parcelHelpers.interopDefault(_lastJs);
var _lastIndexOfJs = require("./lastIndexOf.js");
var _lastIndexOfJsDefault = parcelHelpers.interopDefault(_lastIndexOfJs);
var _wrapperLodashJs = require("./wrapperLodash.js");
var _wrapperLodashJsDefault = parcelHelpers.interopDefault(_wrapperLodashJs);
var _lowerCaseJs = require("./lowerCase.js");
var _lowerCaseJsDefault = parcelHelpers.interopDefault(_lowerCaseJs);
var _lowerFirstJs = require("./lowerFirst.js");
var _lowerFirstJsDefault = parcelHelpers.interopDefault(_lowerFirstJs);
var _ltJs = require("./lt.js");
var _ltJsDefault = parcelHelpers.interopDefault(_ltJs);
var _lteJs = require("./lte.js");
var _lteJsDefault = parcelHelpers.interopDefault(_lteJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _mapKeysJs = require("./mapKeys.js");
var _mapKeysJsDefault = parcelHelpers.interopDefault(_mapKeysJs);
var _mapValuesJs = require("./mapValues.js");
var _mapValuesJsDefault = parcelHelpers.interopDefault(_mapValuesJs);
var _matchesJs = require("./matches.js");
var _matchesJsDefault = parcelHelpers.interopDefault(_matchesJs);
var _matchesPropertyJs = require("./matchesProperty.js");
var _matchesPropertyJsDefault = parcelHelpers.interopDefault(_matchesPropertyJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxByJs = require("./maxBy.js");
var _maxByJsDefault = parcelHelpers.interopDefault(_maxByJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _meanByJs = require("./meanBy.js");
var _meanByJsDefault = parcelHelpers.interopDefault(_meanByJs);
var _memoizeJs = require("./memoize.js");
var _memoizeJsDefault = parcelHelpers.interopDefault(_memoizeJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _mergeWithJs = require("./mergeWith.js");
var _mergeWithJsDefault = parcelHelpers.interopDefault(_mergeWithJs);
var _methodJs = require("./method.js");
var _methodJsDefault = parcelHelpers.interopDefault(_methodJs);
var _methodOfJs = require("./methodOf.js");
var _methodOfJsDefault = parcelHelpers.interopDefault(_methodOfJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minByJs = require("./minBy.js");
var _minByJsDefault = parcelHelpers.interopDefault(_minByJs);
var _mixinJs = require("./mixin.js");
var _mixinJsDefault = parcelHelpers.interopDefault(_mixinJs);
var _multiplyJs = require("./multiply.js");
var _multiplyJsDefault = parcelHelpers.interopDefault(_multiplyJs);
var _negateJs = require("./negate.js");
var _negateJsDefault = parcelHelpers.interopDefault(_negateJs);
var _nextJs = require("./next.js");
var _nextJsDefault = parcelHelpers.interopDefault(_nextJs);
var _noopJs = require("./noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var _nowJs = require("./now.js");
var _nowJsDefault = parcelHelpers.interopDefault(_nowJs);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
var _nthArgJs = require("./nthArg.js");
var _nthArgJsDefault = parcelHelpers.interopDefault(_nthArgJs);
var _omitJs = require("./omit.js");
var _omitJsDefault = parcelHelpers.interopDefault(_omitJs);
var _omitByJs = require("./omitBy.js");
var _omitByJsDefault = parcelHelpers.interopDefault(_omitByJs);
var _onceJs = require("./once.js");
var _onceJsDefault = parcelHelpers.interopDefault(_onceJs);
var _orderByJs = require("./orderBy.js");
var _orderByJsDefault = parcelHelpers.interopDefault(_orderByJs);
var _overJs = require("./over.js");
var _overJsDefault = parcelHelpers.interopDefault(_overJs);
var _overArgsJs = require("./overArgs.js");
var _overArgsJsDefault = parcelHelpers.interopDefault(_overArgsJs);
var _overEveryJs = require("./overEvery.js");
var _overEveryJsDefault = parcelHelpers.interopDefault(_overEveryJs);
var _overSomeJs = require("./overSome.js");
var _overSomeJsDefault = parcelHelpers.interopDefault(_overSomeJs);
var _padJs = require("./pad.js");
var _padJsDefault = parcelHelpers.interopDefault(_padJs);
var _padEndJs = require("./padEnd.js");
var _padEndJsDefault = parcelHelpers.interopDefault(_padEndJs);
var _padStartJs = require("./padStart.js");
var _padStartJsDefault = parcelHelpers.interopDefault(_padStartJs);
var _parseIntJs = require("./parseInt.js");
var _parseIntJsDefault = parcelHelpers.interopDefault(_parseIntJs);
var _partialJs = require("./partial.js");
var _partialJsDefault = parcelHelpers.interopDefault(_partialJs);
var _partialRightJs = require("./partialRight.js");
var _partialRightJsDefault = parcelHelpers.interopDefault(_partialRightJs);
var _partitionJs = require("./partition.js");
var _partitionJsDefault = parcelHelpers.interopDefault(_partitionJs);
var _pickJs = require("./pick.js");
var _pickJsDefault = parcelHelpers.interopDefault(_pickJs);
var _pickByJs = require("./pickBy.js");
var _pickByJsDefault = parcelHelpers.interopDefault(_pickByJs);
var _plantJs = require("./plant.js");
var _plantJsDefault = parcelHelpers.interopDefault(_plantJs);
var _propertyJs = require("./property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _propertyOfJs = require("./propertyOf.js");
var _propertyOfJsDefault = parcelHelpers.interopDefault(_propertyOfJs);
var _pullJs = require("./pull.js");
var _pullJsDefault = parcelHelpers.interopDefault(_pullJs);
var _pullAllJs = require("./pullAll.js");
var _pullAllJsDefault = parcelHelpers.interopDefault(_pullAllJs);
var _pullAllByJs = require("./pullAllBy.js");
var _pullAllByJsDefault = parcelHelpers.interopDefault(_pullAllByJs);
var _pullAllWithJs = require("./pullAllWith.js");
var _pullAllWithJsDefault = parcelHelpers.interopDefault(_pullAllWithJs);
var _pullAtJs = require("./pullAt.js");
var _pullAtJsDefault = parcelHelpers.interopDefault(_pullAtJs);
var _randomJs = require("./random.js");
var _randomJsDefault = parcelHelpers.interopDefault(_randomJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _rangeRightJs = require("./rangeRight.js");
var _rangeRightJsDefault = parcelHelpers.interopDefault(_rangeRightJs);
var _reargJs = require("./rearg.js");
var _reargJsDefault = parcelHelpers.interopDefault(_reargJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reduceRightJs = require("./reduceRight.js");
var _reduceRightJsDefault = parcelHelpers.interopDefault(_reduceRightJs);
var _rejectJs = require("./reject.js");
var _rejectJsDefault = parcelHelpers.interopDefault(_rejectJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _repeatJs = require("./repeat.js");
var _repeatJsDefault = parcelHelpers.interopDefault(_repeatJs);
var _replaceJs = require("./replace.js");
var _replaceJsDefault = parcelHelpers.interopDefault(_replaceJs);
var _restJs = require("./rest.js");
var _restJsDefault = parcelHelpers.interopDefault(_restJs);
var _resultJs = require("./result.js");
var _resultJsDefault = parcelHelpers.interopDefault(_resultJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _roundJs = require("./round.js");
var _roundJsDefault = parcelHelpers.interopDefault(_roundJs);
var _sampleJs = require("./sample.js");
var _sampleJsDefault = parcelHelpers.interopDefault(_sampleJs);
var _sampleSizeJs = require("./sampleSize.js");
var _sampleSizeJsDefault = parcelHelpers.interopDefault(_sampleSizeJs);
var _setJs = require("./set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _setWithJs = require("./setWith.js");
var _setWithJsDefault = parcelHelpers.interopDefault(_setWithJs);
var _shuffleJs = require("./shuffle.js");
var _shuffleJsDefault = parcelHelpers.interopDefault(_shuffleJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
var _snakeCaseJs = require("./snakeCase.js");
var _snakeCaseJsDefault = parcelHelpers.interopDefault(_snakeCaseJs);
var _someJs = require("./some.js");
var _someJsDefault = parcelHelpers.interopDefault(_someJs);
var _sortByJs = require("./sortBy.js");
var _sortByJsDefault = parcelHelpers.interopDefault(_sortByJs);
var _sortedIndexJs = require("./sortedIndex.js");
var _sortedIndexJsDefault = parcelHelpers.interopDefault(_sortedIndexJs);
var _sortedIndexByJs = require("./sortedIndexBy.js");
var _sortedIndexByJsDefault = parcelHelpers.interopDefault(_sortedIndexByJs);
var _sortedIndexOfJs = require("./sortedIndexOf.js");
var _sortedIndexOfJsDefault = parcelHelpers.interopDefault(_sortedIndexOfJs);
var _sortedLastIndexJs = require("./sortedLastIndex.js");
var _sortedLastIndexJsDefault = parcelHelpers.interopDefault(_sortedLastIndexJs);
var _sortedLastIndexByJs = require("./sortedLastIndexBy.js");
var _sortedLastIndexByJsDefault = parcelHelpers.interopDefault(_sortedLastIndexByJs);
var _sortedLastIndexOfJs = require("./sortedLastIndexOf.js");
var _sortedLastIndexOfJsDefault = parcelHelpers.interopDefault(_sortedLastIndexOfJs);
var _sortedUniqJs = require("./sortedUniq.js");
var _sortedUniqJsDefault = parcelHelpers.interopDefault(_sortedUniqJs);
var _sortedUniqByJs = require("./sortedUniqBy.js");
var _sortedUniqByJsDefault = parcelHelpers.interopDefault(_sortedUniqByJs);
var _splitJs = require("./split.js");
var _splitJsDefault = parcelHelpers.interopDefault(_splitJs);
var _spreadJs = require("./spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _startCaseJs = require("./startCase.js");
var _startCaseJsDefault = parcelHelpers.interopDefault(_startCaseJs);
var _startsWithJs = require("./startsWith.js");
var _startsWithJsDefault = parcelHelpers.interopDefault(_startsWithJs);
var _stubArrayJs = require("./stubArray.js");
var _stubArrayJsDefault = parcelHelpers.interopDefault(_stubArrayJs);
var _stubFalseJs = require("./stubFalse.js");
var _stubFalseJsDefault = parcelHelpers.interopDefault(_stubFalseJs);
var _stubObjectJs = require("./stubObject.js");
var _stubObjectJsDefault = parcelHelpers.interopDefault(_stubObjectJs);
var _stubStringJs = require("./stubString.js");
var _stubStringJsDefault = parcelHelpers.interopDefault(_stubStringJs);
var _stubTrueJs = require("./stubTrue.js");
var _stubTrueJsDefault = parcelHelpers.interopDefault(_stubTrueJs);
var _subtractJs = require("./subtract.js");
var _subtractJsDefault = parcelHelpers.interopDefault(_subtractJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _sumByJs = require("./sumBy.js");
var _sumByJsDefault = parcelHelpers.interopDefault(_sumByJs);
var _tailJs = require("./tail.js");
var _tailJsDefault = parcelHelpers.interopDefault(_tailJs);
var _takeJs = require("./take.js");
var _takeJsDefault = parcelHelpers.interopDefault(_takeJs);
var _takeRightJs = require("./takeRight.js");
var _takeRightJsDefault = parcelHelpers.interopDefault(_takeRightJs);
var _takeRightWhileJs = require("./takeRightWhile.js");
var _takeRightWhileJsDefault = parcelHelpers.interopDefault(_takeRightWhileJs);
var _takeWhileJs = require("./takeWhile.js");
var _takeWhileJsDefault = parcelHelpers.interopDefault(_takeWhileJs);
var _tapJs = require("./tap.js");
var _tapJsDefault = parcelHelpers.interopDefault(_tapJs);
var _templateJs = require("./template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
var _templateSettingsJs = require("./templateSettings.js");
var _templateSettingsJsDefault = parcelHelpers.interopDefault(_templateSettingsJs);
var _throttleJs = require("./throttle.js");
var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
var _thruJs = require("./thru.js");
var _thruJsDefault = parcelHelpers.interopDefault(_thruJs);
var _timesJs = require("./times.js");
var _timesJsDefault = parcelHelpers.interopDefault(_timesJs);
var _toArrayJs = require("./toArray.js");
var _toArrayJsDefault = parcelHelpers.interopDefault(_toArrayJs);
var _toFiniteJs = require("./toFinite.js");
var _toFiniteJsDefault = parcelHelpers.interopDefault(_toFiniteJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
var _toIteratorJs = require("./toIterator.js");
var _toIteratorJsDefault = parcelHelpers.interopDefault(_toIteratorJs);
var _toJSONJs = require("./toJSON.js");
var _toJSONJsDefault = parcelHelpers.interopDefault(_toJSONJs);
var _toLengthJs = require("./toLength.js");
var _toLengthJsDefault = parcelHelpers.interopDefault(_toLengthJs);
var _toLowerJs = require("./toLower.js");
var _toLowerJsDefault = parcelHelpers.interopDefault(_toLowerJs);
var _toNumberJs = require("./toNumber.js");
var _toNumberJsDefault = parcelHelpers.interopDefault(_toNumberJs);
var _toPairsJs = require("./toPairs.js");
var _toPairsJsDefault = parcelHelpers.interopDefault(_toPairsJs);
var _toPairsInJs = require("./toPairsIn.js");
var _toPairsInJsDefault = parcelHelpers.interopDefault(_toPairsInJs);
var _toPathJs = require("./toPath.js");
var _toPathJsDefault = parcelHelpers.interopDefault(_toPathJs);
var _toPlainObjectJs = require("./toPlainObject.js");
var _toPlainObjectJsDefault = parcelHelpers.interopDefault(_toPlainObjectJs);
var _toSafeIntegerJs = require("./toSafeInteger.js");
var _toSafeIntegerJsDefault = parcelHelpers.interopDefault(_toSafeIntegerJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
var _toUpperJs = require("./toUpper.js");
var _toUpperJsDefault = parcelHelpers.interopDefault(_toUpperJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);
var _trimJs = require("./trim.js");
var _trimJsDefault = parcelHelpers.interopDefault(_trimJs);
var _trimEndJs = require("./trimEnd.js");
var _trimEndJsDefault = parcelHelpers.interopDefault(_trimEndJs);
var _trimStartJs = require("./trimStart.js");
var _trimStartJsDefault = parcelHelpers.interopDefault(_trimStartJs);
var _truncateJs = require("./truncate.js");
var _truncateJsDefault = parcelHelpers.interopDefault(_truncateJs);
var _unaryJs = require("./unary.js");
var _unaryJsDefault = parcelHelpers.interopDefault(_unaryJs);
var _unescapeJs = require("./unescape.js");
var _unescapeJsDefault = parcelHelpers.interopDefault(_unescapeJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _unionByJs = require("./unionBy.js");
var _unionByJsDefault = parcelHelpers.interopDefault(_unionByJs);
var _unionWithJs = require("./unionWith.js");
var _unionWithJsDefault = parcelHelpers.interopDefault(_unionWithJs);
var _uniqJs = require("./uniq.js");
var _uniqJsDefault = parcelHelpers.interopDefault(_uniqJs);
var _uniqByJs = require("./uniqBy.js");
var _uniqByJsDefault = parcelHelpers.interopDefault(_uniqByJs);
var _uniqWithJs = require("./uniqWith.js");
var _uniqWithJsDefault = parcelHelpers.interopDefault(_uniqWithJs);
var _uniqueIdJs = require("./uniqueId.js");
var _uniqueIdJsDefault = parcelHelpers.interopDefault(_uniqueIdJs);
var _unsetJs = require("./unset.js");
var _unsetJsDefault = parcelHelpers.interopDefault(_unsetJs);
var _unzipJs = require("./unzip.js");
var _unzipJsDefault = parcelHelpers.interopDefault(_unzipJs);
var _unzipWithJs = require("./unzipWith.js");
var _unzipWithJsDefault = parcelHelpers.interopDefault(_unzipWithJs);
var _updateJs = require("./update.js");
var _updateJsDefault = parcelHelpers.interopDefault(_updateJs);
var _updateWithJs = require("./updateWith.js");
var _updateWithJsDefault = parcelHelpers.interopDefault(_updateWithJs);
var _upperCaseJs = require("./upperCase.js");
var _upperCaseJsDefault = parcelHelpers.interopDefault(_upperCaseJs);
var _upperFirstJs = require("./upperFirst.js");
var _upperFirstJsDefault = parcelHelpers.interopDefault(_upperFirstJs);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _valueOfJs = require("./valueOf.js");
var _valueOfJsDefault = parcelHelpers.interopDefault(_valueOfJs);
var _valuesJs = require("./values.js");
var _valuesJsDefault = parcelHelpers.interopDefault(_valuesJs);
var _valuesInJs = require("./valuesIn.js");
var _valuesInJsDefault = parcelHelpers.interopDefault(_valuesInJs);
var _withoutJs = require("./without.js");
var _withoutJsDefault = parcelHelpers.interopDefault(_withoutJs);
var _wordsJs = require("./words.js");
var _wordsJsDefault = parcelHelpers.interopDefault(_wordsJs);
var _wrapJs = require("./wrap.js");
var _wrapJsDefault = parcelHelpers.interopDefault(_wrapJs);
var _wrapperAtJs = require("./wrapperAt.js");
var _wrapperAtJsDefault = parcelHelpers.interopDefault(_wrapperAtJs);
var _wrapperChainJs = require("./wrapperChain.js");
var _wrapperChainJsDefault = parcelHelpers.interopDefault(_wrapperChainJs);
var _wrapperReverseJs = require("./wrapperReverse.js");
var _wrapperReverseJsDefault = parcelHelpers.interopDefault(_wrapperReverseJs);
var _wrapperValueJs = require("./wrapperValue.js");
var _wrapperValueJsDefault = parcelHelpers.interopDefault(_wrapperValueJs);
var _xorJs = require("./xor.js");
var _xorJsDefault = parcelHelpers.interopDefault(_xorJs);
var _xorByJs = require("./xorBy.js");
var _xorByJsDefault = parcelHelpers.interopDefault(_xorByJs);
var _xorWithJs = require("./xorWith.js");
var _xorWithJsDefault = parcelHelpers.interopDefault(_xorWithJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _zipObjectJs = require("./zipObject.js");
var _zipObjectJsDefault = parcelHelpers.interopDefault(_zipObjectJs);
var _zipObjectDeepJs = require("./zipObjectDeep.js");
var _zipObjectDeepJsDefault = parcelHelpers.interopDefault(_zipObjectDeepJs);
var _zipWithJs = require("./zipWith.js");
var _zipWithJsDefault = parcelHelpers.interopDefault(_zipWithJs);
var _lodashDefaultJs = require("./lodash.default.js");
var _lodashDefaultJsDefault = parcelHelpers.interopDefault(_lodashDefaultJs);

},{"./add.js":false,"./after.js":false,"./ary.js":false,"./assign.js":false,"./assignIn.js":false,"./assignInWith.js":false,"./assignWith.js":false,"./at.js":false,"./attempt.js":false,"./before.js":false,"./bind.js":false,"./bindAll.js":false,"./bindKey.js":false,"./camelCase.js":false,"./capitalize.js":false,"./castArray.js":false,"./ceil.js":false,"./chain.js":false,"./chunk.js":false,"./clamp.js":false,"./clone.js":false,"./cloneDeep.js":"dd5At","./cloneDeepWith.js":false,"./cloneWith.js":false,"./commit.js":false,"./compact.js":false,"./concat.js":false,"./cond.js":false,"./conforms.js":false,"./conformsTo.js":false,"./constant.js":false,"./countBy.js":false,"./create.js":false,"./curry.js":false,"./curryRight.js":false,"./debounce.js":false,"./deburr.js":false,"./defaultTo.js":false,"./defaults.js":false,"./defaultsDeep.js":false,"./defer.js":false,"./delay.js":false,"./difference.js":false,"./differenceBy.js":false,"./differenceWith.js":false,"./divide.js":false,"./drop.js":false,"./dropRight.js":false,"./dropRightWhile.js":false,"./dropWhile.js":false,"./each.js":false,"./eachRight.js":false,"./endsWith.js":false,"./entries.js":false,"./entriesIn.js":false,"./eq.js":false,"./escape.js":false,"./escapeRegExp.js":false,"./every.js":false,"./extend.js":false,"./extendWith.js":false,"./fill.js":false,"./filter.js":false,"./find.js":false,"./findIndex.js":false,"./findKey.js":false,"./findLast.js":false,"./findLastIndex.js":false,"./findLastKey.js":false,"./first.js":false,"./flatMap.js":false,"./flatMapDeep.js":false,"./flatMapDepth.js":false,"./flatten.js":false,"./flattenDeep.js":false,"./flattenDepth.js":false,"./flip.js":false,"./floor.js":false,"./flow.js":false,"./flowRight.js":false,"./forEach.js":false,"./forEachRight.js":false,"./forIn.js":false,"./forInRight.js":false,"./forOwn.js":false,"./forOwnRight.js":false,"./fromPairs.js":false,"./functions.js":false,"./functionsIn.js":false,"./get.js":false,"./groupBy.js":false,"./gt.js":false,"./gte.js":false,"./has.js":false,"./hasIn.js":false,"./head.js":false,"./identity.js":false,"./inRange.js":false,"./includes.js":false,"./indexOf.js":false,"./initial.js":false,"./intersection.js":false,"./intersectionBy.js":false,"./intersectionWith.js":false,"./invert.js":false,"./invertBy.js":false,"./invoke.js":false,"./invokeMap.js":false,"./isArguments.js":false,"./isArray.js":false,"./isArrayBuffer.js":false,"./isArrayLike.js":false,"./isArrayLikeObject.js":false,"./isBoolean.js":false,"./isBuffer.js":false,"./isDate.js":false,"./isElement.js":false,"./isEmpty.js":false,"./isEqual.js":"eNhTn","./isEqualWith.js":false,"./isError.js":false,"./isFinite.js":false,"./isFunction.js":false,"./isInteger.js":false,"./isLength.js":false,"./isMap.js":false,"./isMatch.js":false,"./isMatchWith.js":false,"./isNaN.js":false,"./isNative.js":false,"./isNil.js":false,"./isNull.js":false,"./isNumber.js":false,"./isObject.js":false,"./isObjectLike.js":false,"./isPlainObject.js":false,"./isRegExp.js":false,"./isSafeInteger.js":false,"./isSet.js":false,"./isString.js":false,"./isSymbol.js":false,"./isTypedArray.js":false,"./isUndefined.js":false,"./isWeakMap.js":false,"./isWeakSet.js":false,"./iteratee.js":false,"./join.js":false,"./kebabCase.js":false,"./keyBy.js":false,"./keys.js":false,"./keysIn.js":false,"./last.js":false,"./lastIndexOf.js":false,"./wrapperLodash.js":false,"./lowerCase.js":false,"./lowerFirst.js":false,"./lt.js":false,"./lte.js":false,"./map.js":false,"./mapKeys.js":false,"./mapValues.js":false,"./matches.js":false,"./matchesProperty.js":false,"./max.js":false,"./maxBy.js":false,"./mean.js":false,"./meanBy.js":false,"./memoize.js":false,"./merge.js":"hwXcM","./mergeWith.js":false,"./method.js":false,"./methodOf.js":false,"./min.js":false,"./minBy.js":false,"./mixin.js":false,"./multiply.js":false,"./negate.js":false,"./next.js":false,"./noop.js":false,"./now.js":false,"./nth.js":false,"./nthArg.js":false,"./omit.js":false,"./omitBy.js":false,"./once.js":false,"./orderBy.js":false,"./over.js":false,"./overArgs.js":false,"./overEvery.js":false,"./overSome.js":false,"./pad.js":false,"./padEnd.js":false,"./padStart.js":false,"./parseInt.js":false,"./partial.js":false,"./partialRight.js":false,"./partition.js":false,"./pick.js":false,"./pickBy.js":false,"./plant.js":false,"./property.js":false,"./propertyOf.js":false,"./pull.js":false,"./pullAll.js":false,"./pullAllBy.js":false,"./pullAllWith.js":false,"./pullAt.js":false,"./random.js":false,"./range.js":false,"./rangeRight.js":false,"./rearg.js":false,"./reduce.js":false,"./reduceRight.js":false,"./reject.js":false,"./remove.js":false,"./repeat.js":false,"./replace.js":false,"./rest.js":false,"./result.js":false,"./reverse.js":false,"./round.js":false,"./sample.js":false,"./sampleSize.js":false,"./set.js":false,"./setWith.js":false,"./shuffle.js":false,"./size.js":false,"./slice.js":false,"./snakeCase.js":false,"./some.js":false,"./sortBy.js":false,"./sortedIndex.js":false,"./sortedIndexBy.js":false,"./sortedIndexOf.js":false,"./sortedLastIndex.js":false,"./sortedLastIndexBy.js":false,"./sortedLastIndexOf.js":false,"./sortedUniq.js":false,"./sortedUniqBy.js":false,"./split.js":false,"./spread.js":false,"./startCase.js":false,"./startsWith.js":false,"./stubArray.js":false,"./stubFalse.js":false,"./stubObject.js":false,"./stubString.js":false,"./stubTrue.js":false,"./subtract.js":false,"./sum.js":false,"./sumBy.js":false,"./tail.js":false,"./take.js":false,"./takeRight.js":false,"./takeRightWhile.js":false,"./takeWhile.js":false,"./tap.js":false,"./template.js":false,"./templateSettings.js":false,"./throttle.js":false,"./thru.js":false,"./times.js":false,"./toArray.js":false,"./toFinite.js":false,"./toInteger.js":false,"./toIterator.js":false,"./toJSON.js":false,"./toLength.js":false,"./toLower.js":false,"./toNumber.js":false,"./toPairs.js":false,"./toPairsIn.js":false,"./toPath.js":false,"./toPlainObject.js":false,"./toSafeInteger.js":false,"./toString.js":false,"./toUpper.js":false,"./transform.js":false,"./trim.js":false,"./trimEnd.js":false,"./trimStart.js":false,"./truncate.js":false,"./unary.js":false,"./unescape.js":false,"./union.js":false,"./unionBy.js":false,"./unionWith.js":false,"./uniq.js":false,"./uniqBy.js":false,"./uniqWith.js":false,"./uniqueId.js":false,"./unset.js":false,"./unzip.js":false,"./unzipWith.js":false,"./update.js":false,"./updateWith.js":false,"./upperCase.js":false,"./upperFirst.js":false,"./value.js":false,"./valueOf.js":false,"./values.js":false,"./valuesIn.js":false,"./without.js":false,"./words.js":false,"./wrap.js":false,"./wrapperAt.js":false,"./wrapperChain.js":false,"./wrapperReverse.js":false,"./wrapperValue.js":false,"./xor.js":false,"./xorBy.js":false,"./xorWith.js":false,"./zip.js":false,"./zipObject.js":false,"./zipObjectDeep.js":false,"./zipWith.js":false,"./lodash.default.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dd5At":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseCloneJs = require("./_baseClone.js");
var _baseCloneJsDefault = parcelHelpers.interopDefault(_baseCloneJs);
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */ function cloneDeep(value) {
    return (0, _baseCloneJsDefault.default)(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
exports.default = cloneDeep;

},{"./_baseClone.js":"dBps5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBps5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stackJs = require("./_Stack.js");
var _stackJsDefault = parcelHelpers.interopDefault(_stackJs);
var _arrayEachJs = require("./_arrayEach.js");
var _arrayEachJsDefault = parcelHelpers.interopDefault(_arrayEachJs);
var _assignValueJs = require("./_assignValue.js");
var _assignValueJsDefault = parcelHelpers.interopDefault(_assignValueJs);
var _baseAssignJs = require("./_baseAssign.js");
var _baseAssignJsDefault = parcelHelpers.interopDefault(_baseAssignJs);
var _baseAssignInJs = require("./_baseAssignIn.js");
var _baseAssignInJsDefault = parcelHelpers.interopDefault(_baseAssignInJs);
var _cloneBufferJs = require("./_cloneBuffer.js");
var _cloneBufferJsDefault = parcelHelpers.interopDefault(_cloneBufferJs);
var _copyArrayJs = require("./_copyArray.js");
var _copyArrayJsDefault = parcelHelpers.interopDefault(_copyArrayJs);
var _copySymbolsJs = require("./_copySymbols.js");
var _copySymbolsJsDefault = parcelHelpers.interopDefault(_copySymbolsJs);
var _copySymbolsInJs = require("./_copySymbolsIn.js");
var _copySymbolsInJsDefault = parcelHelpers.interopDefault(_copySymbolsInJs);
var _getAllKeysJs = require("./_getAllKeys.js");
var _getAllKeysJsDefault = parcelHelpers.interopDefault(_getAllKeysJs);
var _getAllKeysInJs = require("./_getAllKeysIn.js");
var _getAllKeysInJsDefault = parcelHelpers.interopDefault(_getAllKeysInJs);
var _getTagJs = require("./_getTag.js");
var _getTagJsDefault = parcelHelpers.interopDefault(_getTagJs);
var _initCloneArrayJs = require("./_initCloneArray.js");
var _initCloneArrayJsDefault = parcelHelpers.interopDefault(_initCloneArrayJs);
var _initCloneByTagJs = require("./_initCloneByTag.js");
var _initCloneByTagJsDefault = parcelHelpers.interopDefault(_initCloneByTagJs);
var _initCloneObjectJs = require("./_initCloneObject.js");
var _initCloneObjectJsDefault = parcelHelpers.interopDefault(_initCloneObjectJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isBufferJs = require("./isBuffer.js");
var _isBufferJsDefault = parcelHelpers.interopDefault(_isBufferJs);
var _isMapJs = require("./isMap.js");
var _isMapJsDefault = parcelHelpers.interopDefault(_isMapJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isSetJs = require("./isSet.js");
var _isSetJsDefault = parcelHelpers.interopDefault(_isSetJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */ function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
    if (result !== undefined) return result;
    if (!(0, _isObjectJsDefault.default)(value)) return value;
    var isArr = (0, _isArrayJsDefault.default)(value);
    if (isArr) {
        result = (0, _initCloneArrayJsDefault.default)(value);
        if (!isDeep) return (0, _copyArrayJsDefault.default)(value, result);
    } else {
        var tag = (0, _getTagJsDefault.default)(value), isFunc = tag == funcTag || tag == genTag;
        if ((0, _isBufferJsDefault.default)(value)) return (0, _cloneBufferJsDefault.default)(value, isDeep);
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : (0, _initCloneObjectJsDefault.default)(value);
            if (!isDeep) return isFlat ? (0, _copySymbolsInJsDefault.default)(value, (0, _baseAssignInJsDefault.default)(result, value)) : (0, _copySymbolsJsDefault.default)(value, (0, _baseAssignJsDefault.default)(result, value));
        } else {
            if (!cloneableTags[tag]) return object ? value : {};
            result = (0, _initCloneByTagJsDefault.default)(value, tag, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new (0, _stackJsDefault.default));
    var stacked = stack.get(value);
    if (stacked) return stacked;
    stack.set(value, result);
    if ((0, _isSetJsDefault.default)(value)) value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
    else if ((0, _isMapJsDefault.default)(value)) value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    var keysFunc = isFull ? isFlat ? (0, _getAllKeysInJsDefault.default) : (0, _getAllKeysJsDefault.default) : isFlat ? (0, _keysInJsDefault.default) : (0, _keysJsDefault.default);
    var props = isArr ? undefined : keysFunc(value);
    (0, _arrayEachJsDefault.default)(props || value, function(subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        (0, _assignValueJsDefault.default)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
exports.default = baseClone;

},{"./_Stack.js":"dCpM5","./_arrayEach.js":"d26yI","./_assignValue.js":"lDCb2","./_baseAssign.js":"jYSyD","./_baseAssignIn.js":"6AB2c","./_cloneBuffer.js":"kMJjN","./_copyArray.js":"9islt","./_copySymbols.js":"4VEV3","./_copySymbolsIn.js":"cfnUc","./_getAllKeys.js":"68ZDs","./_getAllKeysIn.js":"6b5DG","./_getTag.js":"1kCom","./_initCloneArray.js":"eVGYA","./_initCloneByTag.js":"d9muW","./_initCloneObject.js":"aoDIY","./isArray.js":"ETPQ1","./isBuffer.js":"llpEE","./isMap.js":"66UiG","./isObject.js":"dHhyW","./isSet.js":"74uQe","./keys.js":"lbEZV","./keysIn.js":"jms5f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCpM5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listCacheJs = require("./_ListCache.js");
var _listCacheJsDefault = parcelHelpers.interopDefault(_listCacheJs);
var _stackClearJs = require("./_stackClear.js");
var _stackClearJsDefault = parcelHelpers.interopDefault(_stackClearJs);
var _stackDeleteJs = require("./_stackDelete.js");
var _stackDeleteJsDefault = parcelHelpers.interopDefault(_stackDeleteJs);
var _stackGetJs = require("./_stackGet.js");
var _stackGetJsDefault = parcelHelpers.interopDefault(_stackGetJs);
var _stackHasJs = require("./_stackHas.js");
var _stackHasJsDefault = parcelHelpers.interopDefault(_stackHasJs);
var _stackSetJs = require("./_stackSet.js");
var _stackSetJsDefault = parcelHelpers.interopDefault(_stackSetJs);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new (0, _listCacheJsDefault.default)(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = (0, _stackClearJsDefault.default);
Stack.prototype['delete'] = (0, _stackDeleteJsDefault.default);
Stack.prototype.get = (0, _stackGetJsDefault.default);
Stack.prototype.has = (0, _stackHasJsDefault.default);
Stack.prototype.set = (0, _stackSetJsDefault.default);
exports.default = Stack;

},{"./_ListCache.js":"cqhDQ","./_stackClear.js":"4BuA3","./_stackDelete.js":"2mGxC","./_stackGet.js":"c3cE4","./_stackHas.js":"23Sz6","./_stackSet.js":"jnSxK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqhDQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listCacheClearJs = require("./_listCacheClear.js");
var _listCacheClearJsDefault = parcelHelpers.interopDefault(_listCacheClearJs);
var _listCacheDeleteJs = require("./_listCacheDelete.js");
var _listCacheDeleteJsDefault = parcelHelpers.interopDefault(_listCacheDeleteJs);
var _listCacheGetJs = require("./_listCacheGet.js");
var _listCacheGetJsDefault = parcelHelpers.interopDefault(_listCacheGetJs);
var _listCacheHasJs = require("./_listCacheHas.js");
var _listCacheHasJsDefault = parcelHelpers.interopDefault(_listCacheHasJs);
var _listCacheSetJs = require("./_listCacheSet.js");
var _listCacheSetJsDefault = parcelHelpers.interopDefault(_listCacheSetJs);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = (0, _listCacheClearJsDefault.default);
ListCache.prototype['delete'] = (0, _listCacheDeleteJsDefault.default);
ListCache.prototype.get = (0, _listCacheGetJsDefault.default);
ListCache.prototype.has = (0, _listCacheHasJsDefault.default);
ListCache.prototype.set = (0, _listCacheSetJsDefault.default);
exports.default = ListCache;

},{"./_listCacheClear.js":"bSUq2","./_listCacheDelete.js":"3kM5j","./_listCacheGet.js":"9nv7v","./_listCacheHas.js":"4N5RL","./_listCacheSet.js":"bA8oX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSUq2":[function(require,module,exports,__globalThis) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
exports.default = listCacheClear;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"3kM5j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assocIndexOfJs = require("./_assocIndexOf.js");
var _assocIndexOfJsDefault = parcelHelpers.interopDefault(_assocIndexOfJs);
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = (0, _assocIndexOfJsDefault.default)(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
exports.default = listCacheDelete;

},{"./_assocIndexOf.js":"124Ga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"124Ga":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if ((0, _eqJsDefault.default)(array[length][0], key)) return length;
    }
    return -1;
}
exports.default = assocIndexOf;

},{"./eq.js":"7el3s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7el3s":[function(require,module,exports,__globalThis) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function eq(value, other) {
    return value === other || value !== value && other !== other;
}
exports.default = eq;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nv7v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assocIndexOfJs = require("./_assocIndexOf.js");
var _assocIndexOfJsDefault = parcelHelpers.interopDefault(_assocIndexOfJs);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = (0, _assocIndexOfJsDefault.default)(data, key);
    return index < 0 ? undefined : data[index][1];
}
exports.default = listCacheGet;

},{"./_assocIndexOf.js":"124Ga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4N5RL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assocIndexOfJs = require("./_assocIndexOf.js");
var _assocIndexOfJsDefault = parcelHelpers.interopDefault(_assocIndexOfJs);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return (0, _assocIndexOfJsDefault.default)(this.__data__, key) > -1;
}
exports.default = listCacheHas;

},{"./_assocIndexOf.js":"124Ga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bA8oX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assocIndexOfJs = require("./_assocIndexOf.js");
var _assocIndexOfJsDefault = parcelHelpers.interopDefault(_assocIndexOfJs);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = (0, _assocIndexOfJsDefault.default)(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
exports.default = listCacheSet;

},{"./_assocIndexOf.js":"124Ga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BuA3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listCacheJs = require("./_ListCache.js");
var _listCacheJsDefault = parcelHelpers.interopDefault(_listCacheJs);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new (0, _listCacheJsDefault.default);
    this.size = 0;
}
exports.default = stackClear;

},{"./_ListCache.js":"cqhDQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mGxC":[function(require,module,exports,__globalThis) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
exports.default = stackDelete;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3cE4":[function(require,module,exports,__globalThis) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stackGet(key) {
    return this.__data__.get(key);
}
exports.default = stackGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"23Sz6":[function(require,module,exports,__globalThis) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stackHas(key) {
    return this.__data__.has(key);
}
exports.default = stackHas;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jnSxK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listCacheJs = require("./_ListCache.js");
var _listCacheJsDefault = parcelHelpers.interopDefault(_listCacheJs);
var _mapJs = require("./_Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _mapCacheJs = require("./_MapCache.js");
var _mapCacheJsDefault = parcelHelpers.interopDefault(_mapCacheJs);
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof (0, _listCacheJsDefault.default)) {
        var pairs = data.__data__;
        if (!(0, _mapJsDefault.default) || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new (0, _mapCacheJsDefault.default)(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
exports.default = stackSet;

},{"./_ListCache.js":"cqhDQ","./_Map.js":"8spnB","./_MapCache.js":"kdqbj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8spnB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/* Built-in method references that are verified to be native. */ var Map = (0, _getNativeJsDefault.default)((0, _rootJsDefault.default), 'Map');
exports.default = Map;

},{"./_getNative.js":"bQrQL","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQrQL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsNativeJs = require("./_baseIsNative.js");
var _baseIsNativeJsDefault = parcelHelpers.interopDefault(_baseIsNativeJs);
var _getValueJs = require("./_getValue.js");
var _getValueJsDefault = parcelHelpers.interopDefault(_getValueJs);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = (0, _getValueJsDefault.default)(object, key);
    return (0, _baseIsNativeJsDefault.default)(value) ? value : undefined;
}
exports.default = getNative;

},{"./_baseIsNative.js":"eZuBv","./_getValue.js":"dHb8j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZuBv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isFunctionJs = require("./isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isMaskedJs = require("./_isMasked.js");
var _isMaskedJsDefault = parcelHelpers.interopDefault(_isMaskedJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _toSourceJs = require("./_toSource.js");
var _toSourceJsDefault = parcelHelpers.interopDefault(_toSourceJs);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!(0, _isObjectJsDefault.default)(value) || (0, _isMaskedJsDefault.default)(value)) return false;
    var pattern = (0, _isFunctionJsDefault.default)(value) ? reIsNative : reIsHostCtor;
    return pattern.test((0, _toSourceJsDefault.default)(value));
}
exports.default = baseIsNative;

},{"./isFunction.js":"e5kis","./_isMasked.js":"8rXmg","./isObject.js":"dHhyW","./_toSource.js":"4wd66","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5kis":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!(0, _isObjectJsDefault.default)(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, _baseGetTagJsDefault.default)(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
exports.default = isFunction;

},{"./_baseGetTag.js":"gVDfP","./isObject.js":"dHhyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVDfP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
var _getRawTagJs = require("./_getRawTag.js");
var _getRawTagJsDefault = parcelHelpers.interopDefault(_getRawTagJs);
var _objectToStringJs = require("./_objectToString.js");
var _objectToStringJsDefault = parcelHelpers.interopDefault(_objectToStringJs);
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTagJsDefault.default)(value) : (0, _objectToStringJsDefault.default)(value);
}
exports.default = baseGetTag;

},{"./_Symbol.js":"jx216","./_getRawTag.js":"ijXom","./_objectToString.js":"fTkTn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jx216":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Built-in value references. */ var Symbol = (0, _rootJsDefault.default).Symbol;
exports.default = Symbol;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yvCA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _freeGlobalJs = require("./_freeGlobal.js");
var _freeGlobalJsDefault = parcelHelpers.interopDefault(_freeGlobalJs);
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = (0, _freeGlobalJsDefault.default) || freeSelf || Function('return this')();
exports.default = root;

},{"./_freeGlobal.js":"98hMd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98hMd":[function(require,module,exports,__globalThis) {
/** Detect free variable `global` from Node.js. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
exports.default = freeGlobal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijXom":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
exports.default = getRawTag;

},{"./_Symbol.js":"jx216","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTkTn":[function(require,module,exports,__globalThis) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
exports.default = objectToString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHhyW":[function(require,module,exports,__globalThis) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
exports.default = isObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8rXmg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreJsDataJs = require("./_coreJsData.js");
var _coreJsDataJsDefault = parcelHelpers.interopDefault(_coreJsDataJs);
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec((0, _coreJsDataJsDefault.default) && (0, _coreJsDataJsDefault.default).keys && (0, _coreJsDataJsDefault.default).keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
exports.default = isMasked;

},{"./_coreJsData.js":"jb15d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jb15d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Used to detect overreaching core-js shims. */ var coreJsData = (0, _rootJsDefault.default)['__core-js_shared__'];
exports.default = coreJsData;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wd66":[function(require,module,exports,__globalThis) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
exports.default = toSource;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHb8j":[function(require,module,exports,__globalThis) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getValue(object, key) {
    return object == null ? undefined : object[key];
}
exports.default = getValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdqbj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapCacheClearJs = require("./_mapCacheClear.js");
var _mapCacheClearJsDefault = parcelHelpers.interopDefault(_mapCacheClearJs);
var _mapCacheDeleteJs = require("./_mapCacheDelete.js");
var _mapCacheDeleteJsDefault = parcelHelpers.interopDefault(_mapCacheDeleteJs);
var _mapCacheGetJs = require("./_mapCacheGet.js");
var _mapCacheGetJsDefault = parcelHelpers.interopDefault(_mapCacheGetJs);
var _mapCacheHasJs = require("./_mapCacheHas.js");
var _mapCacheHasJsDefault = parcelHelpers.interopDefault(_mapCacheHasJs);
var _mapCacheSetJs = require("./_mapCacheSet.js");
var _mapCacheSetJsDefault = parcelHelpers.interopDefault(_mapCacheSetJs);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = (0, _mapCacheClearJsDefault.default);
MapCache.prototype['delete'] = (0, _mapCacheDeleteJsDefault.default);
MapCache.prototype.get = (0, _mapCacheGetJsDefault.default);
MapCache.prototype.has = (0, _mapCacheHasJsDefault.default);
MapCache.prototype.set = (0, _mapCacheSetJsDefault.default);
exports.default = MapCache;

},{"./_mapCacheClear.js":"6PhQB","./_mapCacheDelete.js":"eoP1L","./_mapCacheGet.js":"lbrg6","./_mapCacheHas.js":"lPQeP","./_mapCacheSet.js":"4UIYE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PhQB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hashJs = require("./_Hash.js");
var _hashJsDefault = parcelHelpers.interopDefault(_hashJs);
var _listCacheJs = require("./_ListCache.js");
var _listCacheJsDefault = parcelHelpers.interopDefault(_listCacheJs);
var _mapJs = require("./_Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new (0, _hashJsDefault.default),
        'map': new ((0, _mapJsDefault.default) || (0, _listCacheJsDefault.default)),
        'string': new (0, _hashJsDefault.default)
    };
}
exports.default = mapCacheClear;

},{"./_Hash.js":"1HkPM","./_ListCache.js":"cqhDQ","./_Map.js":"8spnB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1HkPM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hashClearJs = require("./_hashClear.js");
var _hashClearJsDefault = parcelHelpers.interopDefault(_hashClearJs);
var _hashDeleteJs = require("./_hashDelete.js");
var _hashDeleteJsDefault = parcelHelpers.interopDefault(_hashDeleteJs);
var _hashGetJs = require("./_hashGet.js");
var _hashGetJsDefault = parcelHelpers.interopDefault(_hashGetJs);
var _hashHasJs = require("./_hashHas.js");
var _hashHasJsDefault = parcelHelpers.interopDefault(_hashHasJs);
var _hashSetJs = require("./_hashSet.js");
var _hashSetJsDefault = parcelHelpers.interopDefault(_hashSetJs);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = (0, _hashClearJsDefault.default);
Hash.prototype['delete'] = (0, _hashDeleteJsDefault.default);
Hash.prototype.get = (0, _hashGetJsDefault.default);
Hash.prototype.has = (0, _hashHasJsDefault.default);
Hash.prototype.set = (0, _hashSetJsDefault.default);
exports.default = Hash;

},{"./_hashClear.js":"5oLNs","./_hashDelete.js":"3Xo6B","./_hashGet.js":"j4Vuu","./_hashHas.js":"d5QIn","./_hashSet.js":"lQL69","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5oLNs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeCreateJs = require("./_nativeCreate.js");
var _nativeCreateJsDefault = parcelHelpers.interopDefault(_nativeCreateJs);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = (0, _nativeCreateJsDefault.default) ? (0, _nativeCreateJsDefault.default)(null) : {};
    this.size = 0;
}
exports.default = hashClear;

},{"./_nativeCreate.js":"2XXd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XXd9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
/* Built-in method references that are verified to be native. */ var nativeCreate = (0, _getNativeJsDefault.default)(Object, 'create');
exports.default = nativeCreate;

},{"./_getNative.js":"bQrQL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Xo6B":[function(require,module,exports,__globalThis) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
exports.default = hashDelete;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4Vuu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeCreateJs = require("./_nativeCreate.js");
var _nativeCreateJsDefault = parcelHelpers.interopDefault(_nativeCreateJs);
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (0, _nativeCreateJsDefault.default) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
exports.default = hashGet;

},{"./_nativeCreate.js":"2XXd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5QIn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeCreateJs = require("./_nativeCreate.js");
var _nativeCreateJsDefault = parcelHelpers.interopDefault(_nativeCreateJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return (0, _nativeCreateJsDefault.default) ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
exports.default = hashHas;

},{"./_nativeCreate.js":"2XXd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQL69":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeCreateJs = require("./_nativeCreate.js");
var _nativeCreateJsDefault = parcelHelpers.interopDefault(_nativeCreateJs);
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (0, _nativeCreateJsDefault.default) && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
exports.default = hashSet;

},{"./_nativeCreate.js":"2XXd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoP1L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getMapDataJs = require("./_getMapData.js");
var _getMapDataJsDefault = parcelHelpers.interopDefault(_getMapDataJs);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = (0, _getMapDataJsDefault.default)(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
exports.default = mapCacheDelete;

},{"./_getMapData.js":"3xzxe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xzxe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isKeyableJs = require("./_isKeyable.js");
var _isKeyableJsDefault = parcelHelpers.interopDefault(_isKeyableJs);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return (0, _isKeyableJsDefault.default)(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
exports.default = getMapData;

},{"./_isKeyable.js":"9O1jG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9O1jG":[function(require,module,exports,__globalThis) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
exports.default = isKeyable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbrg6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getMapDataJs = require("./_getMapData.js");
var _getMapDataJsDefault = parcelHelpers.interopDefault(_getMapDataJs);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return (0, _getMapDataJsDefault.default)(this, key).get(key);
}
exports.default = mapCacheGet;

},{"./_getMapData.js":"3xzxe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPQeP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getMapDataJs = require("./_getMapData.js");
var _getMapDataJsDefault = parcelHelpers.interopDefault(_getMapDataJs);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return (0, _getMapDataJsDefault.default)(this, key).has(key);
}
exports.default = mapCacheHas;

},{"./_getMapData.js":"3xzxe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UIYE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getMapDataJs = require("./_getMapData.js");
var _getMapDataJsDefault = parcelHelpers.interopDefault(_getMapDataJs);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = (0, _getMapDataJsDefault.default)(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
exports.default = mapCacheSet;

},{"./_getMapData.js":"3xzxe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d26yI":[function(require,module,exports,__globalThis) {
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) break;
    }
    return array;
}
exports.default = arrayEach;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDCb2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseAssignValueJs = require("./_baseAssignValue.js");
var _baseAssignValueJsDefault = parcelHelpers.interopDefault(_baseAssignValueJs);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && (0, _eqJsDefault.default)(objValue, value)) || value === undefined && !(key in object)) (0, _baseAssignValueJsDefault.default)(object, key, value);
}
exports.default = assignValue;

},{"./_baseAssignValue.js":"7kEZ2","./eq.js":"7el3s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kEZ2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _definePropertyJs = require("./_defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == '__proto__' && (0, _definePropertyJsDefault.default)) (0, _definePropertyJsDefault.default)(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
    });
    else object[key] = value;
}
exports.default = baseAssignValue;

},{"./_defineProperty.js":"8u8dH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8u8dH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
var defineProperty = function() {
    try {
        var func = (0, _getNativeJsDefault.default)(Object, 'defineProperty');
        func({}, '', {});
        return func;
    } catch (e) {}
}();
exports.default = defineProperty;

},{"./_getNative.js":"bQrQL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jYSyD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyObjectJs = require("./_copyObject.js");
var _copyObjectJsDefault = parcelHelpers.interopDefault(_copyObjectJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssign(object, source) {
    return object && (0, _copyObjectJsDefault.default)(source, (0, _keysJsDefault.default)(source), object);
}
exports.default = baseAssign;

},{"./_copyObject.js":"hBRv5","./keys.js":"lbEZV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBRv5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignValueJs = require("./_assignValue.js");
var _assignValueJsDefault = parcelHelpers.interopDefault(_assignValueJs);
var _baseAssignValueJs = require("./_baseAssignValue.js");
var _baseAssignValueJsDefault = parcelHelpers.interopDefault(_baseAssignValueJs);
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) newValue = source[key];
        if (isNew) (0, _baseAssignValueJsDefault.default)(object, key, newValue);
        else (0, _assignValueJsDefault.default)(object, key, newValue);
    }
    return object;
}
exports.default = copyObject;

},{"./_assignValue.js":"lDCb2","./_baseAssignValue.js":"7kEZ2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbEZV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeKeysJs = require("./_arrayLikeKeys.js");
var _arrayLikeKeysJsDefault = parcelHelpers.interopDefault(_arrayLikeKeysJs);
var _baseKeysJs = require("./_baseKeys.js");
var _baseKeysJsDefault = parcelHelpers.interopDefault(_baseKeysJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return (0, _isArrayLikeJsDefault.default)(object) ? (0, _arrayLikeKeysJsDefault.default)(object) : (0, _baseKeysJsDefault.default)(object);
}
exports.default = keys;

},{"./_arrayLikeKeys.js":"b4sHy","./_baseKeys.js":"7rx4g","./isArrayLike.js":"8SdiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b4sHy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseTimesJs = require("./_baseTimes.js");
var _baseTimesJsDefault = parcelHelpers.interopDefault(_baseTimesJs);
var _isArgumentsJs = require("./isArguments.js");
var _isArgumentsJsDefault = parcelHelpers.interopDefault(_isArgumentsJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isBufferJs = require("./isBuffer.js");
var _isBufferJsDefault = parcelHelpers.interopDefault(_isBufferJs);
var _isIndexJs = require("./_isIndex.js");
var _isIndexJsDefault = parcelHelpers.interopDefault(_isIndexJs);
var _isTypedArrayJs = require("./isTypedArray.js");
var _isTypedArrayJsDefault = parcelHelpers.interopDefault(_isTypedArrayJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = (0, _isArrayJsDefault.default)(value), isArg = !isArr && (0, _isArgumentsJsDefault.default)(value), isBuff = !isArr && !isArg && (0, _isBufferJsDefault.default)(value), isType = !isArr && !isArg && !isBuff && (0, _isTypedArrayJsDefault.default)(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? (0, _baseTimesJsDefault.default)(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    (0, _isIndexJsDefault.default)(key, length)))) result.push(key);
    return result;
}
exports.default = arrayLikeKeys;

},{"./_baseTimes.js":"6yWeR","./isArguments.js":"9k91Y","./isArray.js":"ETPQ1","./isBuffer.js":"llpEE","./_isIndex.js":"5DS1K","./isTypedArray.js":"2LIMs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yWeR":[function(require,module,exports,__globalThis) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
exports.default = baseTimes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9k91Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsArgumentsJs = require("./_baseIsArguments.js");
var _baseIsArgumentsJsDefault = parcelHelpers.interopDefault(_baseIsArgumentsJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = (0, _baseIsArgumentsJsDefault.default)(function() {
    return arguments;
}()) ? (0, _baseIsArgumentsJsDefault.default) : function(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
exports.default = isArguments;

},{"./_baseIsArguments.js":"bnUuB","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnUuB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && (0, _baseGetTagJsDefault.default)(value) == argsTag;
}
exports.default = baseIsArguments;

},{"./_baseGetTag.js":"gVDfP","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iad76":[function(require,module,exports,__globalThis) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
exports.default = isObjectLike;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ETPQ1":[function(require,module,exports,__globalThis) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var isArray = Array.isArray;
exports.default = isArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llpEE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
var _stubFalseJs = require("./stubFalse.js");
var _stubFalseJsDefault = parcelHelpers.interopDefault(_stubFalseJs);
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? (0, _rootJsDefault.default).Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || (0, _stubFalseJsDefault.default);
exports.default = isBuffer;

},{"./_root.js":"8yvCA","./stubFalse.js":"fF5mf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fF5mf":[function(require,module,exports,__globalThis) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stubFalse() {
    return false;
}
exports.default = stubFalse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DS1K":[function(require,module,exports,__globalThis) {
/** Used as references for various `Number` constants. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
exports.default = isIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2LIMs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsTypedArrayJs = require("./_baseIsTypedArray.js");
var _baseIsTypedArrayJsDefault = parcelHelpers.interopDefault(_baseIsTypedArrayJs);
var _baseUnaryJs = require("./_baseUnary.js");
var _baseUnaryJsDefault = parcelHelpers.interopDefault(_baseUnaryJs);
var _nodeUtilJs = require("./_nodeUtil.js");
var _nodeUtilJsDefault = parcelHelpers.interopDefault(_nodeUtilJs);
/* Node.js helper references. */ var nodeIsTypedArray = (0, _nodeUtilJsDefault.default) && (0, _nodeUtilJsDefault.default).isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? (0, _baseUnaryJsDefault.default)(nodeIsTypedArray) : (0, _baseIsTypedArrayJsDefault.default);
exports.default = isTypedArray;

},{"./_baseIsTypedArray.js":"jcEk3","./_baseUnary.js":"jBUGV","./_nodeUtil.js":"cxU0K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcEk3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isLengthJs = require("./isLength.js");
var _isLengthJsDefault = parcelHelpers.interopDefault(_isLengthJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && (0, _isLengthJsDefault.default)(value.length) && !!typedArrayTags[(0, _baseGetTagJsDefault.default)(value)];
}
exports.default = baseIsTypedArray;

},{"./_baseGetTag.js":"gVDfP","./isLength.js":"bItM0","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bItM0":[function(require,module,exports,__globalThis) {
/** Used as references for various `Number` constants. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
exports.default = isLength;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBUGV":[function(require,module,exports,__globalThis) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
exports.default = baseUnary;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxU0K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _freeGlobalJs = require("./_freeGlobal.js");
var _freeGlobalJsDefault = parcelHelpers.interopDefault(_freeGlobalJs);
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && (0, _freeGlobalJsDefault.default).process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
exports.default = nodeUtil;

},{"./_freeGlobal.js":"98hMd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rx4g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isPrototypeJs = require("./_isPrototype.js");
var _isPrototypeJsDefault = parcelHelpers.interopDefault(_isPrototypeJs);
var _nativeKeysJs = require("./_nativeKeys.js");
var _nativeKeysJsDefault = parcelHelpers.interopDefault(_nativeKeysJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!(0, _isPrototypeJsDefault.default)(object)) return (0, _nativeKeysJsDefault.default)(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
exports.default = baseKeys;

},{"./_isPrototype.js":"jOAyW","./_nativeKeys.js":"4fIwW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOAyW":[function(require,module,exports,__globalThis) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
exports.default = isPrototype;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fIwW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _overArgJs = require("./_overArg.js");
var _overArgJsDefault = parcelHelpers.interopDefault(_overArgJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = (0, _overArgJsDefault.default)(Object.keys, Object);
exports.default = nativeKeys;

},{"./_overArg.js":"lqvyN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqvyN":[function(require,module,exports,__globalThis) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
exports.default = overArg;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SdiO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isFunctionJs = require("./isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isLengthJs = require("./isLength.js");
var _isLengthJsDefault = parcelHelpers.interopDefault(_isLengthJs);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && (0, _isLengthJsDefault.default)(value.length) && !(0, _isFunctionJsDefault.default)(value);
}
exports.default = isArrayLike;

},{"./isFunction.js":"e5kis","./isLength.js":"bItM0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6AB2c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyObjectJs = require("./_copyObject.js");
var _copyObjectJsDefault = parcelHelpers.interopDefault(_copyObjectJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssignIn(object, source) {
    return object && (0, _copyObjectJsDefault.default)(source, (0, _keysInJsDefault.default)(source), object);
}
exports.default = baseAssignIn;

},{"./_copyObject.js":"hBRv5","./keysIn.js":"jms5f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jms5f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeKeysJs = require("./_arrayLikeKeys.js");
var _arrayLikeKeysJsDefault = parcelHelpers.interopDefault(_arrayLikeKeysJs);
var _baseKeysInJs = require("./_baseKeysIn.js");
var _baseKeysInJsDefault = parcelHelpers.interopDefault(_baseKeysInJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function keysIn(object) {
    return (0, _isArrayLikeJsDefault.default)(object) ? (0, _arrayLikeKeysJsDefault.default)(object, true) : (0, _baseKeysInJsDefault.default)(object);
}
exports.default = keysIn;

},{"./_arrayLikeKeys.js":"b4sHy","./_baseKeysIn.js":"cvYFp","./isArrayLike.js":"8SdiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvYFp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isPrototypeJs = require("./_isPrototype.js");
var _isPrototypeJsDefault = parcelHelpers.interopDefault(_isPrototypeJs);
var _nativeKeysInJs = require("./_nativeKeysIn.js");
var _nativeKeysInJsDefault = parcelHelpers.interopDefault(_nativeKeysInJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeysIn(object) {
    if (!(0, _isObjectJsDefault.default)(object)) return (0, _nativeKeysInJsDefault.default)(object);
    var isProto = (0, _isPrototypeJsDefault.default)(object), result = [];
    for(var key in object)if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
    return result;
}
exports.default = baseKeysIn;

},{"./isObject.js":"dHhyW","./_isPrototype.js":"jOAyW","./_nativeKeysIn.js":"ciZAw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciZAw":[function(require,module,exports,__globalThis) {
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function nativeKeysIn(object) {
    var result = [];
    if (object != null) for(var key in Object(object))result.push(key);
    return result;
}
exports.default = nativeKeysIn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMJjN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? (0, _rootJsDefault.default).Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) return buffer.slice();
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
exports.default = cloneBuffer;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9islt":[function(require,module,exports,__globalThis) {
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
exports.default = copyArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VEV3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyObjectJs = require("./_copyObject.js");
var _copyObjectJsDefault = parcelHelpers.interopDefault(_copyObjectJs);
var _getSymbolsJs = require("./_getSymbols.js");
var _getSymbolsJsDefault = parcelHelpers.interopDefault(_getSymbolsJs);
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbols(source, object) {
    return (0, _copyObjectJsDefault.default)(source, (0, _getSymbolsJsDefault.default)(source), object);
}
exports.default = copySymbols;

},{"./_copyObject.js":"hBRv5","./_getSymbols.js":"egqKq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egqKq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayFilterJs = require("./_arrayFilter.js");
var _arrayFilterJsDefault = parcelHelpers.interopDefault(_arrayFilterJs);
var _stubArrayJs = require("./stubArray.js");
var _stubArrayJsDefault = parcelHelpers.interopDefault(_stubArrayJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? (0, _stubArrayJsDefault.default) : function(object) {
    if (object == null) return [];
    object = Object(object);
    return (0, _arrayFilterJsDefault.default)(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
exports.default = getSymbols;

},{"./_arrayFilter.js":"iZqHX","./stubArray.js":"iwLLL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZqHX":[function(require,module,exports,__globalThis) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
exports.default = arrayFilter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iwLLL":[function(require,module,exports,__globalThis) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stubArray() {
    return [];
}
exports.default = stubArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cfnUc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyObjectJs = require("./_copyObject.js");
var _copyObjectJsDefault = parcelHelpers.interopDefault(_copyObjectJs);
var _getSymbolsInJs = require("./_getSymbolsIn.js");
var _getSymbolsInJsDefault = parcelHelpers.interopDefault(_getSymbolsInJs);
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbolsIn(source, object) {
    return (0, _copyObjectJsDefault.default)(source, (0, _getSymbolsInJsDefault.default)(source), object);
}
exports.default = copySymbolsIn;

},{"./_copyObject.js":"hBRv5","./_getSymbolsIn.js":"5Iqq9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Iqq9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayPushJs = require("./_arrayPush.js");
var _arrayPushJsDefault = parcelHelpers.interopDefault(_arrayPushJs);
var _getPrototypeJs = require("./_getPrototype.js");
var _getPrototypeJsDefault = parcelHelpers.interopDefault(_getPrototypeJs);
var _getSymbolsJs = require("./_getSymbols.js");
var _getSymbolsJsDefault = parcelHelpers.interopDefault(_getSymbolsJs);
var _stubArrayJs = require("./stubArray.js");
var _stubArrayJsDefault = parcelHelpers.interopDefault(_stubArrayJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbolsIn = !nativeGetSymbols ? (0, _stubArrayJsDefault.default) : function(object) {
    var result = [];
    while(object){
        (0, _arrayPushJsDefault.default)(result, (0, _getSymbolsJsDefault.default)(object));
        object = (0, _getPrototypeJsDefault.default)(object);
    }
    return result;
};
exports.default = getSymbolsIn;

},{"./_arrayPush.js":"4BTrx","./_getPrototype.js":"b49GB","./_getSymbols.js":"egqKq","./stubArray.js":"iwLLL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BTrx":[function(require,module,exports,__globalThis) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
exports.default = arrayPush;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b49GB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _overArgJs = require("./_overArg.js");
var _overArgJsDefault = parcelHelpers.interopDefault(_overArgJs);
/** Built-in value references. */ var getPrototype = (0, _overArgJsDefault.default)(Object.getPrototypeOf, Object);
exports.default = getPrototype;

},{"./_overArg.js":"lqvyN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68ZDs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetAllKeysJs = require("./_baseGetAllKeys.js");
var _baseGetAllKeysJsDefault = parcelHelpers.interopDefault(_baseGetAllKeysJs);
var _getSymbolsJs = require("./_getSymbols.js");
var _getSymbolsJsDefault = parcelHelpers.interopDefault(_getSymbolsJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return (0, _baseGetAllKeysJsDefault.default)(object, (0, _keysJsDefault.default), (0, _getSymbolsJsDefault.default));
}
exports.default = getAllKeys;

},{"./_baseGetAllKeys.js":"jHmw2","./_getSymbols.js":"egqKq","./keys.js":"lbEZV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHmw2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayPushJs = require("./_arrayPush.js");
var _arrayPushJsDefault = parcelHelpers.interopDefault(_arrayPushJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return (0, _isArrayJsDefault.default)(object) ? result : (0, _arrayPushJsDefault.default)(result, symbolsFunc(object));
}
exports.default = baseGetAllKeys;

},{"./_arrayPush.js":"4BTrx","./isArray.js":"ETPQ1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6b5DG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetAllKeysJs = require("./_baseGetAllKeys.js");
var _baseGetAllKeysJsDefault = parcelHelpers.interopDefault(_baseGetAllKeysJs);
var _getSymbolsInJs = require("./_getSymbolsIn.js");
var _getSymbolsInJsDefault = parcelHelpers.interopDefault(_getSymbolsInJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeysIn(object) {
    return (0, _baseGetAllKeysJsDefault.default)(object, (0, _keysInJsDefault.default), (0, _getSymbolsInJsDefault.default));
}
exports.default = getAllKeysIn;

},{"./_baseGetAllKeys.js":"jHmw2","./_getSymbolsIn.js":"5Iqq9","./keysIn.js":"jms5f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kCom":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataViewJs = require("./_DataView.js");
var _dataViewJsDefault = parcelHelpers.interopDefault(_dataViewJs);
var _mapJs = require("./_Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _promiseJs = require("./_Promise.js");
var _promiseJsDefault = parcelHelpers.interopDefault(_promiseJs);
var _setJs = require("./_Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _weakMapJs = require("./_WeakMap.js");
var _weakMapJsDefault = parcelHelpers.interopDefault(_weakMapJs);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _toSourceJs = require("./_toSource.js");
var _toSourceJsDefault = parcelHelpers.interopDefault(_toSourceJs);
/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = (0, _toSourceJsDefault.default)((0, _dataViewJsDefault.default)), mapCtorString = (0, _toSourceJsDefault.default)((0, _mapJsDefault.default)), promiseCtorString = (0, _toSourceJsDefault.default)((0, _promiseJsDefault.default)), setCtorString = (0, _toSourceJsDefault.default)((0, _setJsDefault.default)), weakMapCtorString = (0, _toSourceJsDefault.default)((0, _weakMapJsDefault.default));
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = (0, _baseGetTagJsDefault.default);
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((0, _dataViewJsDefault.default) && getTag(new (0, _dataViewJsDefault.default)(new ArrayBuffer(1))) != dataViewTag || (0, _mapJsDefault.default) && getTag(new (0, _mapJsDefault.default)) != mapTag || (0, _promiseJsDefault.default) && getTag((0, _promiseJsDefault.default).resolve()) != promiseTag || (0, _setJsDefault.default) && getTag(new (0, _setJsDefault.default)) != setTag || (0, _weakMapJsDefault.default) && getTag(new (0, _weakMapJsDefault.default)) != weakMapTag) getTag = function(value) {
    var result = (0, _baseGetTagJsDefault.default)(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? (0, _toSourceJsDefault.default)(Ctor) : '';
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
exports.default = getTag;

},{"./_DataView.js":"4SeGN","./_Map.js":"8spnB","./_Promise.js":"lbYHf","./_Set.js":"jf3T7","./_WeakMap.js":"52eE0","./_baseGetTag.js":"gVDfP","./_toSource.js":"4wd66","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SeGN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/* Built-in method references that are verified to be native. */ var DataView = (0, _getNativeJsDefault.default)((0, _rootJsDefault.default), 'DataView');
exports.default = DataView;

},{"./_getNative.js":"bQrQL","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbYHf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/* Built-in method references that are verified to be native. */ var Promise = (0, _getNativeJsDefault.default)((0, _rootJsDefault.default), 'Promise');
exports.default = Promise;

},{"./_getNative.js":"bQrQL","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jf3T7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/* Built-in method references that are verified to be native. */ var Set = (0, _getNativeJsDefault.default)((0, _rootJsDefault.default), 'Set');
exports.default = Set;

},{"./_getNative.js":"bQrQL","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52eE0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/* Built-in method references that are verified to be native. */ var WeakMap = (0, _getNativeJsDefault.default)((0, _rootJsDefault.default), 'WeakMap');
exports.default = WeakMap;

},{"./_getNative.js":"bQrQL","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVGYA":[function(require,module,exports,__globalThis) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */ function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
exports.default = initCloneArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9muW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneArrayBufferJs = require("./_cloneArrayBuffer.js");
var _cloneArrayBufferJsDefault = parcelHelpers.interopDefault(_cloneArrayBufferJs);
var _cloneDataViewJs = require("./_cloneDataView.js");
var _cloneDataViewJsDefault = parcelHelpers.interopDefault(_cloneDataViewJs);
var _cloneRegExpJs = require("./_cloneRegExp.js");
var _cloneRegExpJsDefault = parcelHelpers.interopDefault(_cloneRegExpJs);
var _cloneSymbolJs = require("./_cloneSymbol.js");
var _cloneSymbolJsDefault = parcelHelpers.interopDefault(_cloneSymbolJs);
var _cloneTypedArrayJs = require("./_cloneTypedArray.js");
var _cloneTypedArrayJsDefault = parcelHelpers.interopDefault(_cloneTypedArrayJs);
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag:
            return (0, _cloneArrayBufferJsDefault.default)(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return (0, _cloneDataViewJsDefault.default)(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return (0, _cloneTypedArrayJsDefault.default)(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return (0, _cloneRegExpJsDefault.default)(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return (0, _cloneSymbolJsDefault.default)(object);
    }
}
exports.default = initCloneByTag;

},{"./_cloneArrayBuffer.js":"4fVB7","./_cloneDataView.js":"7a96h","./_cloneRegExp.js":"961SB","./_cloneSymbol.js":"hKZ37","./_cloneTypedArray.js":"f1GTJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fVB7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uint8ArrayJs = require("./_Uint8Array.js");
var _uint8ArrayJsDefault = parcelHelpers.interopDefault(_uint8ArrayJs);
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new (0, _uint8ArrayJsDefault.default)(result).set(new (0, _uint8ArrayJsDefault.default)(arrayBuffer));
    return result;
}
exports.default = cloneArrayBuffer;

},{"./_Uint8Array.js":"5zVAV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5zVAV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Built-in value references. */ var Uint8Array = (0, _rootJsDefault.default).Uint8Array;
exports.default = Uint8Array;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7a96h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneArrayBufferJs = require("./_cloneArrayBuffer.js");
var _cloneArrayBufferJsDefault = parcelHelpers.interopDefault(_cloneArrayBufferJs);
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? (0, _cloneArrayBufferJsDefault.default)(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
exports.default = cloneDataView;

},{"./_cloneArrayBuffer.js":"4fVB7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"961SB":[function(require,module,exports,__globalThis) {
/** Used to match `RegExp` flags from their coerced string values. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */ function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
exports.default = cloneRegExp;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKZ37":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
/** Used to convert symbols to primitives and strings. */ var symbolProto = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */ function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
exports.default = cloneSymbol;

},{"./_Symbol.js":"jx216","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1GTJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneArrayBufferJs = require("./_cloneArrayBuffer.js");
var _cloneArrayBufferJsDefault = parcelHelpers.interopDefault(_cloneArrayBufferJs);
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? (0, _cloneArrayBufferJsDefault.default)(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
exports.default = cloneTypedArray;

},{"./_cloneArrayBuffer.js":"4fVB7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aoDIY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseCreateJs = require("./_baseCreate.js");
var _baseCreateJsDefault = parcelHelpers.interopDefault(_baseCreateJs);
var _getPrototypeJs = require("./_getPrototype.js");
var _getPrototypeJsDefault = parcelHelpers.interopDefault(_getPrototypeJs);
var _isPrototypeJs = require("./_isPrototype.js");
var _isPrototypeJsDefault = parcelHelpers.interopDefault(_isPrototypeJs);
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == 'function' && !(0, _isPrototypeJsDefault.default)(object) ? (0, _baseCreateJsDefault.default)((0, _getPrototypeJsDefault.default)(object)) : {};
}
exports.default = initCloneObject;

},{"./_baseCreate.js":"aq4aU","./_getPrototype.js":"b49GB","./_isPrototype.js":"jOAyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aq4aU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/** Built-in value references. */ var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var baseCreate = function() {
    function object() {}
    return function(proto) {
        if (!(0, _isObjectJsDefault.default)(proto)) return {};
        if (objectCreate) return objectCreate(proto);
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
exports.default = baseCreate;

},{"./isObject.js":"dHhyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66UiG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsMapJs = require("./_baseIsMap.js");
var _baseIsMapJsDefault = parcelHelpers.interopDefault(_baseIsMapJs);
var _baseUnaryJs = require("./_baseUnary.js");
var _baseUnaryJsDefault = parcelHelpers.interopDefault(_baseUnaryJs);
var _nodeUtilJs = require("./_nodeUtil.js");
var _nodeUtilJsDefault = parcelHelpers.interopDefault(_nodeUtilJs);
/* Node.js helper references. */ var nodeIsMap = (0, _nodeUtilJsDefault.default) && (0, _nodeUtilJsDefault.default).isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */ var isMap = nodeIsMap ? (0, _baseUnaryJsDefault.default)(nodeIsMap) : (0, _baseIsMapJsDefault.default);
exports.default = isMap;

},{"./_baseIsMap.js":"aSESr","./_baseUnary.js":"jBUGV","./_nodeUtil.js":"cxU0K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aSESr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTagJs = require("./_getTag.js");
var _getTagJsDefault = parcelHelpers.interopDefault(_getTagJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */ function baseIsMap(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && (0, _getTagJsDefault.default)(value) == mapTag;
}
exports.default = baseIsMap;

},{"./_getTag.js":"1kCom","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74uQe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsSetJs = require("./_baseIsSet.js");
var _baseIsSetJsDefault = parcelHelpers.interopDefault(_baseIsSetJs);
var _baseUnaryJs = require("./_baseUnary.js");
var _baseUnaryJsDefault = parcelHelpers.interopDefault(_baseUnaryJs);
var _nodeUtilJs = require("./_nodeUtil.js");
var _nodeUtilJsDefault = parcelHelpers.interopDefault(_nodeUtilJs);
/* Node.js helper references. */ var nodeIsSet = (0, _nodeUtilJsDefault.default) && (0, _nodeUtilJsDefault.default).isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */ var isSet = nodeIsSet ? (0, _baseUnaryJsDefault.default)(nodeIsSet) : (0, _baseIsSetJsDefault.default);
exports.default = isSet;

},{"./_baseIsSet.js":"2nBk7","./_baseUnary.js":"jBUGV","./_nodeUtil.js":"cxU0K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nBk7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTagJs = require("./_getTag.js");
var _getTagJsDefault = parcelHelpers.interopDefault(_getTagJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */ function baseIsSet(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && (0, _getTagJsDefault.default)(value) == setTag;
}
exports.default = baseIsSet;

},{"./_getTag.js":"1kCom","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5s7V":[function(require,module,exports,__globalThis) {
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function constant(value) {
    return function() {
        return value;
    };
}
exports.default = constant;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Y0KA":[function(require,module,exports,__globalThis) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function identity(value) {
    return value;
}
exports.default = identity;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gArhC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && (0, _isArrayLikeJsDefault.default)(value);
}
exports.default = isArrayLikeObject;

},{"./isArrayLike.js":"8SdiO","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNhTn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsEqualJs = require("./_baseIsEqual.js");
var _baseIsEqualJsDefault = parcelHelpers.interopDefault(_baseIsEqualJs);
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function isEqual(value, other) {
    return (0, _baseIsEqualJsDefault.default)(value, other);
}
exports.default = isEqual;

},{"./_baseIsEqual.js":"1zaYh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zaYh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsEqualDeepJs = require("./_baseIsEqualDeep.js");
var _baseIsEqualDeepJsDefault = parcelHelpers.interopDefault(_baseIsEqualDeepJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !(0, _isObjectLikeJsDefault.default)(value) && !(0, _isObjectLikeJsDefault.default)(other)) return value !== value && other !== other;
    return (0, _baseIsEqualDeepJsDefault.default)(value, other, bitmask, customizer, baseIsEqual, stack);
}
exports.default = baseIsEqual;

},{"./_baseIsEqualDeep.js":"hBKuk","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKuk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stackJs = require("./_Stack.js");
var _stackJsDefault = parcelHelpers.interopDefault(_stackJs);
var _equalArraysJs = require("./_equalArrays.js");
var _equalArraysJsDefault = parcelHelpers.interopDefault(_equalArraysJs);
var _equalByTagJs = require("./_equalByTag.js");
var _equalByTagJsDefault = parcelHelpers.interopDefault(_equalByTagJs);
var _equalObjectsJs = require("./_equalObjects.js");
var _equalObjectsJsDefault = parcelHelpers.interopDefault(_equalObjectsJs);
var _getTagJs = require("./_getTag.js");
var _getTagJsDefault = parcelHelpers.interopDefault(_getTagJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isBufferJs = require("./isBuffer.js");
var _isBufferJsDefault = parcelHelpers.interopDefault(_isBufferJs);
var _isTypedArrayJs = require("./isTypedArray.js");
var _isTypedArrayJsDefault = parcelHelpers.interopDefault(_isTypedArrayJs);
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', objectTag = '[object Object]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = (0, _isArrayJsDefault.default)(object), othIsArr = (0, _isArrayJsDefault.default)(other), objTag = objIsArr ? arrayTag : (0, _getTagJsDefault.default)(object), othTag = othIsArr ? arrayTag : (0, _getTagJsDefault.default)(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && (0, _isBufferJsDefault.default)(object)) {
        if (!(0, _isBufferJsDefault.default)(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new (0, _stackJsDefault.default));
        return objIsArr || (0, _isTypedArrayJsDefault.default)(object) ? (0, _equalArraysJsDefault.default)(object, other, bitmask, customizer, equalFunc, stack) : (0, _equalByTagJsDefault.default)(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new (0, _stackJsDefault.default));
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new (0, _stackJsDefault.default));
    return (0, _equalObjectsJsDefault.default)(object, other, bitmask, customizer, equalFunc, stack);
}
exports.default = baseIsEqualDeep;

},{"./_Stack.js":"dCpM5","./_equalArrays.js":"3xWWQ","./_equalByTag.js":"9KfIu","./_equalObjects.js":"7yAdV","./_getTag.js":"1kCom","./isArray.js":"ETPQ1","./isBuffer.js":"llpEE","./isTypedArray.js":"2LIMs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xWWQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setCacheJs = require("./_SetCache.js");
var _setCacheJsDefault = parcelHelpers.interopDefault(_setCacheJs);
var _arraySomeJs = require("./_arraySome.js");
var _arraySomeJsDefault = parcelHelpers.interopDefault(_arraySomeJs);
var _cacheHasJs = require("./_cacheHas.js");
var _cacheHasJsDefault = parcelHelpers.interopDefault(_cacheHasJs);
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new (0, _setCacheJsDefault.default) : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!(0, _arraySomeJsDefault.default)(other, function(othValue, othIndex) {
                if (!(0, _cacheHasJsDefault.default)(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
exports.default = equalArrays;

},{"./_SetCache.js":"6YwQx","./_arraySome.js":"9k95T","./_cacheHas.js":"jSrgN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YwQx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapCacheJs = require("./_MapCache.js");
var _mapCacheJsDefault = parcelHelpers.interopDefault(_mapCacheJs);
var _setCacheAddJs = require("./_setCacheAdd.js");
var _setCacheAddJsDefault = parcelHelpers.interopDefault(_setCacheAddJs);
var _setCacheHasJs = require("./_setCacheHas.js");
var _setCacheHasJsDefault = parcelHelpers.interopDefault(_setCacheHasJs);
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new (0, _mapCacheJsDefault.default);
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = (0, _setCacheAddJsDefault.default);
SetCache.prototype.has = (0, _setCacheHasJsDefault.default);
exports.default = SetCache;

},{"./_MapCache.js":"kdqbj","./_setCacheAdd.js":"7m7Pn","./_setCacheHas.js":"BJklm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7m7Pn":[function(require,module,exports,__globalThis) {
/** Used to stand-in for `undefined` hash values. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
exports.default = setCacheAdd;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BJklm":[function(require,module,exports,__globalThis) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setCacheHas(value) {
    return this.__data__.has(value);
}
exports.default = setCacheHas;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9k95T":[function(require,module,exports,__globalThis) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
exports.default = arraySome;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSrgN":[function(require,module,exports,__globalThis) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function cacheHas(cache, key) {
    return cache.has(key);
}
exports.default = cacheHas;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9KfIu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
var _uint8ArrayJs = require("./_Uint8Array.js");
var _uint8ArrayJsDefault = parcelHelpers.interopDefault(_uint8ArrayJs);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
var _equalArraysJs = require("./_equalArrays.js");
var _equalArraysJsDefault = parcelHelpers.interopDefault(_equalArraysJs);
var _mapToArrayJs = require("./_mapToArray.js");
var _mapToArrayJsDefault = parcelHelpers.interopDefault(_mapToArrayJs);
var _setToArrayJs = require("./_setToArray.js");
var _setToArrayJsDefault = parcelHelpers.interopDefault(_setToArrayJs);
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */ var symbolProto = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new (0, _uint8ArrayJsDefault.default)(object), new (0, _uint8ArrayJsDefault.default)(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return (0, _eqJsDefault.default)(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag:
            var convert = (0, _mapToArrayJsDefault.default);
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = (0, _setToArrayJsDefault.default));
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = (0, _equalArraysJsDefault.default)(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
exports.default = equalByTag;

},{"./_Symbol.js":"jx216","./_Uint8Array.js":"5zVAV","./eq.js":"7el3s","./_equalArrays.js":"3xWWQ","./_mapToArray.js":"3RRCW","./_setToArray.js":"2ugef","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3RRCW":[function(require,module,exports,__globalThis) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
exports.default = mapToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ugef":[function(require,module,exports,__globalThis) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
exports.default = setToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7yAdV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getAllKeysJs = require("./_getAllKeys.js");
var _getAllKeysJsDefault = parcelHelpers.interopDefault(_getAllKeysJs);
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = (0, _getAllKeysJsDefault.default)(object), objLength = objProps.length, othProps = (0, _getAllKeysJsDefault.default)(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) result = false;
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
exports.default = equalObjects;

},{"./_getAllKeys.js":"68ZDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dB5kc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _getPrototypeJs = require("./_getPrototype.js");
var _getPrototypeJsDefault = parcelHelpers.interopDefault(_getPrototypeJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var objectTag = '[object Object]';
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!(0, _isObjectLikeJsDefault.default)(value) || (0, _baseGetTagJsDefault.default)(value) != objectTag) return false;
    var proto = (0, _getPrototypeJsDefault.default)(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
exports.default = isPlainObject;

},{"./_baseGetTag.js":"gVDfP","./_getPrototype.js":"b49GB","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwXcM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseMergeJs = require("./_baseMerge.js");
var _baseMergeJsDefault = parcelHelpers.interopDefault(_baseMergeJs);
var _createAssignerJs = require("./_createAssigner.js");
var _createAssignerJsDefault = parcelHelpers.interopDefault(_createAssignerJs);
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */ var merge = (0, _createAssignerJsDefault.default)(function(object, source, srcIndex) {
    (0, _baseMergeJsDefault.default)(object, source, srcIndex);
});
exports.default = merge;

},{"./_baseMerge.js":"gyMbG","./_createAssigner.js":"ED1h3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyMbG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stackJs = require("./_Stack.js");
var _stackJsDefault = parcelHelpers.interopDefault(_stackJs);
var _assignMergeValueJs = require("./_assignMergeValue.js");
var _assignMergeValueJsDefault = parcelHelpers.interopDefault(_assignMergeValueJs);
var _baseForJs = require("./_baseFor.js");
var _baseForJsDefault = parcelHelpers.interopDefault(_baseForJs);
var _baseMergeDeepJs = require("./_baseMergeDeep.js");
var _baseMergeDeepJsDefault = parcelHelpers.interopDefault(_baseMergeDeepJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
var _safeGetJs = require("./_safeGet.js");
var _safeGetJsDefault = parcelHelpers.interopDefault(_safeGetJs);
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) return;
    (0, _baseForJsDefault.default)(source, function(srcValue, key) {
        stack || (stack = new (0, _stackJsDefault.default));
        if ((0, _isObjectJsDefault.default)(srcValue)) (0, _baseMergeDeepJsDefault.default)(object, source, key, srcIndex, baseMerge, customizer, stack);
        else {
            var newValue = customizer ? customizer((0, _safeGetJsDefault.default)(object, key), srcValue, key + '', object, source, stack) : undefined;
            if (newValue === undefined) newValue = srcValue;
            (0, _assignMergeValueJsDefault.default)(object, key, newValue);
        }
    }, (0, _keysInJsDefault.default));
}
exports.default = baseMerge;

},{"./_Stack.js":"dCpM5","./_assignMergeValue.js":"gQcrW","./_baseFor.js":"1Zprl","./_baseMergeDeep.js":"cVDnk","./isObject.js":"dHhyW","./keysIn.js":"jms5f","./_safeGet.js":"SYKdD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQcrW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseAssignValueJs = require("./_baseAssignValue.js");
var _baseAssignValueJsDefault = parcelHelpers.interopDefault(_baseAssignValueJs);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignMergeValue(object, key, value) {
    if (value !== undefined && !(0, _eqJsDefault.default)(object[key], value) || value === undefined && !(key in object)) (0, _baseAssignValueJsDefault.default)(object, key, value);
}
exports.default = assignMergeValue;

},{"./_baseAssignValue.js":"7kEZ2","./eq.js":"7el3s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Zprl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createBaseForJs = require("./_createBaseFor.js");
var _createBaseForJsDefault = parcelHelpers.interopDefault(_createBaseForJs);
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = (0, _createBaseForJsDefault.default)();
exports.default = baseFor;

},{"./_createBaseFor.js":"1W89a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1W89a":[function(require,module,exports,__globalThis) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
exports.default = createBaseFor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVDnk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignMergeValueJs = require("./_assignMergeValue.js");
var _assignMergeValueJsDefault = parcelHelpers.interopDefault(_assignMergeValueJs);
var _cloneBufferJs = require("./_cloneBuffer.js");
var _cloneBufferJsDefault = parcelHelpers.interopDefault(_cloneBufferJs);
var _cloneTypedArrayJs = require("./_cloneTypedArray.js");
var _cloneTypedArrayJsDefault = parcelHelpers.interopDefault(_cloneTypedArrayJs);
var _copyArrayJs = require("./_copyArray.js");
var _copyArrayJsDefault = parcelHelpers.interopDefault(_copyArrayJs);
var _initCloneObjectJs = require("./_initCloneObject.js");
var _initCloneObjectJsDefault = parcelHelpers.interopDefault(_initCloneObjectJs);
var _isArgumentsJs = require("./isArguments.js");
var _isArgumentsJsDefault = parcelHelpers.interopDefault(_isArgumentsJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isArrayLikeObjectJs = require("./isArrayLikeObject.js");
var _isArrayLikeObjectJsDefault = parcelHelpers.interopDefault(_isArrayLikeObjectJs);
var _isBufferJs = require("./isBuffer.js");
var _isBufferJsDefault = parcelHelpers.interopDefault(_isBufferJs);
var _isFunctionJs = require("./isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isPlainObjectJs = require("./isPlainObject.js");
var _isPlainObjectJsDefault = parcelHelpers.interopDefault(_isPlainObjectJs);
var _isTypedArrayJs = require("./isTypedArray.js");
var _isTypedArrayJsDefault = parcelHelpers.interopDefault(_isTypedArrayJs);
var _safeGetJs = require("./_safeGet.js");
var _safeGetJsDefault = parcelHelpers.interopDefault(_safeGetJs);
var _toPlainObjectJs = require("./toPlainObject.js");
var _toPlainObjectJsDefault = parcelHelpers.interopDefault(_toPlainObjectJs);
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = (0, _safeGetJsDefault.default)(object, key), srcValue = (0, _safeGetJsDefault.default)(source, key), stacked = stack.get(srcValue);
    if (stacked) {
        (0, _assignMergeValueJsDefault.default)(object, key, stacked);
        return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
    var isCommon = newValue === undefined;
    if (isCommon) {
        var isArr = (0, _isArrayJsDefault.default)(srcValue), isBuff = !isArr && (0, _isBufferJsDefault.default)(srcValue), isTyped = !isArr && !isBuff && (0, _isTypedArrayJsDefault.default)(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
            if ((0, _isArrayJsDefault.default)(objValue)) newValue = objValue;
            else if ((0, _isArrayLikeObjectJsDefault.default)(objValue)) newValue = (0, _copyArrayJsDefault.default)(objValue);
            else if (isBuff) {
                isCommon = false;
                newValue = (0, _cloneBufferJsDefault.default)(srcValue, true);
            } else if (isTyped) {
                isCommon = false;
                newValue = (0, _cloneTypedArrayJsDefault.default)(srcValue, true);
            } else newValue = [];
        } else if ((0, _isPlainObjectJsDefault.default)(srcValue) || (0, _isArgumentsJsDefault.default)(srcValue)) {
            newValue = objValue;
            if ((0, _isArgumentsJsDefault.default)(objValue)) newValue = (0, _toPlainObjectJsDefault.default)(objValue);
            else if (!(0, _isObjectJsDefault.default)(objValue) || (0, _isFunctionJsDefault.default)(objValue)) newValue = (0, _initCloneObjectJsDefault.default)(srcValue);
        } else isCommon = false;
    }
    if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
    }
    (0, _assignMergeValueJsDefault.default)(object, key, newValue);
}
exports.default = baseMergeDeep;

},{"./_assignMergeValue.js":"gQcrW","./_cloneBuffer.js":"kMJjN","./_cloneTypedArray.js":"f1GTJ","./_copyArray.js":"9islt","./_initCloneObject.js":"aoDIY","./isArguments.js":"9k91Y","./isArray.js":"ETPQ1","./isArrayLikeObject.js":"gArhC","./isBuffer.js":"llpEE","./isFunction.js":"e5kis","./isObject.js":"dHhyW","./isPlainObject.js":"dB5kc","./isTypedArray.js":"2LIMs","./_safeGet.js":"SYKdD","./toPlainObject.js":"VksIK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SYKdD":[function(require,module,exports,__globalThis) {
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') return;
    if (key == '__proto__') return;
    return object[key];
}
exports.default = safeGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VksIK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyObjectJs = require("./_copyObject.js");
var _copyObjectJsDefault = parcelHelpers.interopDefault(_copyObjectJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */ function toPlainObject(value) {
    return (0, _copyObjectJsDefault.default)(value, (0, _keysInJsDefault.default)(value));
}
exports.default = toPlainObject;

},{"./_copyObject.js":"hBRv5","./keysIn.js":"jms5f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ED1h3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseRestJs = require("./_baseRest.js");
var _baseRestJsDefault = parcelHelpers.interopDefault(_baseRestJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */ function createAssigner(assigner) {
    return (0, _baseRestJsDefault.default)(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
        if (guard && (0, _isIterateeCallJsDefault.default)(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index < length){
            var source = sources[index];
            if (source) assigner(object, source, index, customizer);
        }
        return object;
    });
}
exports.default = createAssigner;

},{"./_baseRest.js":"1fKJX","./_isIterateeCall.js":"1jM1r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1fKJX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _overRestJs = require("./_overRest.js");
var _overRestJsDefault = parcelHelpers.interopDefault(_overRestJs);
var _setToStringJs = require("./_setToString.js");
var _setToStringJsDefault = parcelHelpers.interopDefault(_setToStringJs);
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    return (0, _setToStringJsDefault.default)((0, _overRestJsDefault.default)(func, start, (0, _identityJsDefault.default)), func + '');
}
exports.default = baseRest;

},{"./identity.js":"1Y0KA","./_overRest.js":"d1Uaz","./_setToString.js":"3GXSg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1Uaz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _applyJs = require("./_apply.js");
var _applyJsDefault = parcelHelpers.interopDefault(_applyJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */ function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length)array[index] = args[start + index];
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start)otherArgs[index] = args[index];
        otherArgs[start] = transform(array);
        return (0, _applyJsDefault.default)(func, this, otherArgs);
    };
}
exports.default = overRest;

},{"./_apply.js":"kqJ3H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqJ3H":[function(require,module,exports,__globalThis) {
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
exports.default = apply;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GXSg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseSetToStringJs = require("./_baseSetToString.js");
var _baseSetToStringJsDefault = parcelHelpers.interopDefault(_baseSetToStringJs);
var _shortOutJs = require("./_shortOut.js");
var _shortOutJsDefault = parcelHelpers.interopDefault(_shortOutJs);
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var setToString = (0, _shortOutJsDefault.default)((0, _baseSetToStringJsDefault.default));
exports.default = setToString;

},{"./_baseSetToString.js":"lc4dY","./_shortOut.js":"dmiNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lc4dY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _definePropertyJs = require("./_defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var baseSetToString = !(0, _definePropertyJsDefault.default) ? (0, _identityJsDefault.default) : function(func, string) {
    return (0, _definePropertyJsDefault.default)(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': (0, _constantJsDefault.default)(string),
        'writable': true
    });
};
exports.default = baseSetToString;

},{"./constant.js":"a5s7V","./_defineProperty.js":"8u8dH","./identity.js":"1Y0KA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmiNi":[function(require,module,exports,__globalThis) {
/** Used to detect hot functions by number of calls within a span of milliseconds. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var HOT_COUNT = 800, HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */ function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) return arguments[0];
        } else count = 0;
        return func.apply(undefined, arguments);
    };
}
exports.default = shortOut;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jM1r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _isIndexJs = require("./_isIndex.js");
var _isIndexJsDefault = parcelHelpers.interopDefault(_isIndexJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!(0, _isObjectJsDefault.default)(object)) return false;
    var type = typeof index;
    if (type == 'number' ? (0, _isArrayLikeJsDefault.default)(object) && (0, _isIndexJsDefault.default)(index, object.length) : type == 'string' && index in object) return (0, _eqJsDefault.default)(object[index], value);
    return false;
}
exports.default = isIterateeCall;

},{"./eq.js":"7el3s","./isArrayLike.js":"8SdiO","./_isIndex.js":"5DS1K","./isObject.js":"dHhyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ObrB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Attributor", ()=>Attributor);
parcelHelpers.export(exports, "AttributorStore", ()=>AttributorStore$1);
parcelHelpers.export(exports, "BlockBlot", ()=>BlockBlot$1);
parcelHelpers.export(exports, "ClassAttributor", ()=>ClassAttributor$1);
parcelHelpers.export(exports, "ContainerBlot", ()=>ContainerBlot$1);
parcelHelpers.export(exports, "EmbedBlot", ()=>EmbedBlot$1);
parcelHelpers.export(exports, "InlineBlot", ()=>InlineBlot$1);
parcelHelpers.export(exports, "LeafBlot", ()=>LeafBlot$1);
parcelHelpers.export(exports, "ParentBlot", ()=>ParentBlot$1);
parcelHelpers.export(exports, "Registry", ()=>Registry);
parcelHelpers.export(exports, "Scope", ()=>Scope);
parcelHelpers.export(exports, "ScrollBlot", ()=>ScrollBlot$1);
parcelHelpers.export(exports, "StyleAttributor", ()=>StyleAttributor$1);
parcelHelpers.export(exports, "TextBlot", ()=>TextBlot$1);
var Scope = /* @__PURE__ */ ((Scope2)=>(Scope2[Scope2.TYPE = 3] = "TYPE", Scope2[Scope2.LEVEL = 12] = "LEVEL", Scope2[Scope2.ATTRIBUTE = 13] = "ATTRIBUTE", Scope2[Scope2.BLOT = 14] = "BLOT", Scope2[Scope2.INLINE = 7] = "INLINE", Scope2[Scope2.BLOCK = 11] = "BLOCK", Scope2[Scope2.BLOCK_BLOT = 10] = "BLOCK_BLOT", Scope2[Scope2.INLINE_BLOT = 6] = "INLINE_BLOT", Scope2[Scope2.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", Scope2[Scope2.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", Scope2[Scope2.ANY = 15] = "ANY", Scope2))(Scope || {});
class Attributor {
    constructor(attrName, keyName, options = {}){
        this.attrName = attrName, this.keyName = keyName;
        const attributeBit = Scope.TYPE & Scope.ATTRIBUTE;
        this.scope = options.scope != null ? // Ignore type bits, force attribute bit
        options.scope & Scope.LEVEL | attributeBit : Scope.ATTRIBUTE, options.whitelist != null && (this.whitelist = options.whitelist);
    }
    static keys(node) {
        return Array.from(node.attributes).map((item)=>item.name);
    }
    add(node, value) {
        return this.canAdd(node, value) ? (node.setAttribute(this.keyName, value), !0) : !1;
    }
    canAdd(_node, value) {
        return this.whitelist == null ? !0 : typeof value == "string" ? this.whitelist.indexOf(value.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(value) > -1;
    }
    remove(node) {
        node.removeAttribute(this.keyName);
    }
    value(node) {
        const value = node.getAttribute(this.keyName);
        return this.canAdd(node, value) && value ? value : "";
    }
}
class ParchmentError extends Error {
    constructor(message){
        message = "[Parchment] " + message, super(message), this.message = message, this.name = this.constructor.name;
    }
}
const _Registry = class _Registry {
    constructor(){
        this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
    }
    static find(node, bubble = !1) {
        if (node == null) return null;
        if (this.blots.has(node)) return this.blots.get(node) || null;
        if (bubble) {
            let parentNode = null;
            try {
                parentNode = node.parentNode;
            } catch  {
                return null;
            }
            return this.find(parentNode, bubble);
        }
        return null;
    }
    create(scroll, input, value) {
        const match2 = this.query(input);
        if (match2 == null) throw new ParchmentError(`Unable to create ${input} blot`);
        const blotClass = match2, node = // @ts-expect-error Fix me later
        input instanceof Node || input.nodeType === Node.TEXT_NODE ? input : blotClass.create(value), blot = new blotClass(scroll, node, value);
        return _Registry.blots.set(blot.domNode, blot), blot;
    }
    find(node, bubble = !1) {
        return _Registry.find(node, bubble);
    }
    query(query, scope = Scope.ANY) {
        let match2;
        return typeof query == "string" ? match2 = this.types[query] || this.attributes[query] : query instanceof Text || query.nodeType === Node.TEXT_NODE ? match2 = this.types.text : typeof query == "number" ? query & Scope.LEVEL & Scope.BLOCK ? match2 = this.types.block : query & Scope.LEVEL & Scope.INLINE && (match2 = this.types.inline) : query instanceof Element && ((query.getAttribute("class") || "").split(/\s+/).some((name)=>(match2 = this.classes[name], !!match2)), match2 = match2 || this.tags[query.tagName]), match2 == null ? null : "scope" in match2 && scope & Scope.LEVEL & match2.scope && scope & Scope.TYPE & match2.scope ? match2 : null;
    }
    register(...definitions) {
        return definitions.map((definition)=>{
            const isBlot = "blotName" in definition, isAttr = "attrName" in definition;
            if (!isBlot && !isAttr) throw new ParchmentError("Invalid definition");
            if (isBlot && definition.blotName === "abstract") throw new ParchmentError("Cannot register abstract class");
            const key = isBlot ? definition.blotName : isAttr ? definition.attrName : void 0;
            return this.types[key] = definition, isAttr ? typeof definition.keyName == "string" && (this.attributes[definition.keyName] = definition) : isBlot && (definition.className && (this.classes[definition.className] = definition), definition.tagName && (Array.isArray(definition.tagName) ? definition.tagName = definition.tagName.map((tagName)=>tagName.toUpperCase()) : definition.tagName = definition.tagName.toUpperCase(), (Array.isArray(definition.tagName) ? definition.tagName : [
                definition.tagName
            ]).forEach((tag)=>{
                (this.tags[tag] == null || definition.className == null) && (this.tags[tag] = definition);
            }))), definition;
        });
    }
};
_Registry.blots = /* @__PURE__ */ new WeakMap();
let Registry = _Registry;
function match(node, prefix) {
    return (node.getAttribute("class") || "").split(/\s+/).filter((name)=>name.indexOf(`${prefix}-`) === 0);
}
class ClassAttributor extends Attributor {
    static keys(node) {
        return (node.getAttribute("class") || "").split(/\s+/).map((name)=>name.split("-").slice(0, -1).join("-"));
    }
    add(node, value) {
        return this.canAdd(node, value) ? (this.remove(node), node.classList.add(`${this.keyName}-${value}`), !0) : !1;
    }
    remove(node) {
        match(node, this.keyName).forEach((name)=>{
            node.classList.remove(name);
        }), node.classList.length === 0 && node.removeAttribute("class");
    }
    value(node) {
        const value = (match(node, this.keyName)[0] || "").slice(this.keyName.length + 1);
        return this.canAdd(node, value) ? value : "";
    }
}
const ClassAttributor$1 = ClassAttributor;
function camelize(name) {
    const parts = name.split("-"), rest = parts.slice(1).map((part)=>part[0].toUpperCase() + part.slice(1)).join("");
    return parts[0] + rest;
}
class StyleAttributor extends Attributor {
    static keys(node) {
        return (node.getAttribute("style") || "").split(";").map((value)=>value.split(":")[0].trim());
    }
    add(node, value) {
        return this.canAdd(node, value) ? (node.style[camelize(this.keyName)] = value, !0) : !1;
    }
    remove(node) {
        node.style[camelize(this.keyName)] = "", node.getAttribute("style") || node.removeAttribute("style");
    }
    value(node) {
        const value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : "";
    }
}
const StyleAttributor$1 = StyleAttributor;
class AttributorStore {
    constructor(domNode){
        this.attributes = {}, this.domNode = domNode, this.build();
    }
    attribute(attribute, value) {
        value ? attribute.add(this.domNode, value) && (attribute.value(this.domNode) != null ? this.attributes[attribute.attrName] = attribute : delete this.attributes[attribute.attrName]) : (attribute.remove(this.domNode), delete this.attributes[attribute.attrName]);
    }
    build() {
        this.attributes = {};
        const blot = Registry.find(this.domNode);
        if (blot == null) return;
        const attributes = Attributor.keys(this.domNode), classes = ClassAttributor$1.keys(this.domNode), styles = StyleAttributor$1.keys(this.domNode);
        attributes.concat(classes).concat(styles).forEach((name)=>{
            const attr = blot.scroll.query(name, Scope.ATTRIBUTE);
            attr instanceof Attributor && (this.attributes[attr.attrName] = attr);
        });
    }
    copy(target) {
        Object.keys(this.attributes).forEach((key)=>{
            const value = this.attributes[key].value(this.domNode);
            target.format(key, value);
        });
    }
    move(target) {
        this.copy(target), Object.keys(this.attributes).forEach((key)=>{
            this.attributes[key].remove(this.domNode);
        }), this.attributes = {};
    }
    values() {
        return Object.keys(this.attributes).reduce((attributes, name)=>(attributes[name] = this.attributes[name].value(this.domNode), attributes), {});
    }
}
const AttributorStore$1 = AttributorStore, _ShadowBlot = class _ShadowBlot {
    constructor(scroll, domNode){
        this.scroll = scroll, this.domNode = domNode, Registry.blots.set(domNode, this), this.prev = null, this.next = null;
    }
    static create(rawValue) {
        if (this.tagName == null) throw new ParchmentError("Blot definition missing tagName");
        let node, value;
        return Array.isArray(this.tagName) ? (typeof rawValue == "string" ? (value = rawValue.toUpperCase(), parseInt(value, 10).toString() === value && (value = parseInt(value, 10))) : typeof rawValue == "number" && (value = rawValue), typeof value == "number" ? node = document.createElement(this.tagName[value - 1]) : value && this.tagName.indexOf(value) > -1 ? node = document.createElement(value) : node = document.createElement(this.tagName[0])) : node = document.createElement(this.tagName), this.className && node.classList.add(this.className), node;
    }
    // Hack for accessing inherited static methods
    get statics() {
        return this.constructor;
    }
    attach() {}
    clone() {
        const domNode = this.domNode.cloneNode(!1);
        return this.scroll.create(domNode);
    }
    detach() {
        this.parent != null && this.parent.removeChild(this), Registry.blots.delete(this.domNode);
    }
    deleteAt(index, length) {
        this.isolate(index, length).remove();
    }
    formatAt(index, length, name, value) {
        const blot = this.isolate(index, length);
        if (this.scroll.query(name, Scope.BLOT) != null && value) blot.wrap(name, value);
        else if (this.scroll.query(name, Scope.ATTRIBUTE) != null) {
            const parent = this.scroll.create(this.statics.scope);
            blot.wrap(parent), parent.format(name, value);
        }
    }
    insertAt(index, value, def) {
        const blot = def == null ? this.scroll.create("text", value) : this.scroll.create(value, def), ref = this.split(index);
        this.parent.insertBefore(blot, ref || void 0);
    }
    isolate(index, length) {
        const target = this.split(index);
        if (target == null) throw new Error("Attempt to isolate at end");
        return target.split(length), target;
    }
    length() {
        return 1;
    }
    offset(root = this.parent) {
        return this.parent == null || this === root ? 0 : this.parent.children.offset(this) + this.parent.offset(root);
    }
    optimize(_context) {
        this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
    }
    remove() {
        this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
    }
    replaceWith(name, value) {
        const replacement = typeof name == "string" ? this.scroll.create(name, value) : name;
        return this.parent != null && (this.parent.insertBefore(replacement, this.next || void 0), this.remove()), replacement;
    }
    split(index, _force) {
        return index === 0 ? this : this.next;
    }
    update(_mutations, _context) {}
    wrap(name, value) {
        const wrapper = typeof name == "string" ? this.scroll.create(name, value) : name;
        if (this.parent != null && this.parent.insertBefore(wrapper, this.next || void 0), typeof wrapper.appendChild != "function") throw new ParchmentError(`Cannot wrap ${name}`);
        return wrapper.appendChild(this), wrapper;
    }
};
_ShadowBlot.blotName = "abstract";
let ShadowBlot = _ShadowBlot;
const _LeafBlot = class _LeafBlot extends ShadowBlot {
    /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */ static value(_domNode) {
        return !0;
    }
    /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */ index(node, offset) {
        return this.domNode === node || this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(offset, 1) : -1;
    }
    /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */ position(index, _inclusive) {
        let offset = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
        return index > 0 && (offset += 1), [
            this.parent.domNode,
            offset
        ];
    }
    /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */ value() {
        return {
            [this.statics.blotName]: this.statics.value(this.domNode) || !0
        };
    }
};
_LeafBlot.scope = Scope.INLINE_BLOT;
let LeafBlot = _LeafBlot;
const LeafBlot$1 = LeafBlot;
class LinkedList {
    constructor(){
        this.head = null, this.tail = null, this.length = 0;
    }
    append(...nodes) {
        if (this.insertBefore(nodes[0], null), nodes.length > 1) {
            const rest = nodes.slice(1);
            this.append(...rest);
        }
    }
    at(index) {
        const next = this.iterator();
        let cur = next();
        for(; cur && index > 0;)index -= 1, cur = next();
        return cur;
    }
    contains(node) {
        const next = this.iterator();
        let cur = next();
        for(; cur;){
            if (cur === node) return !0;
            cur = next();
        }
        return !1;
    }
    indexOf(node) {
        const next = this.iterator();
        let cur = next(), index = 0;
        for(; cur;){
            if (cur === node) return index;
            index += 1, cur = next();
        }
        return -1;
    }
    insertBefore(node, refNode) {
        node != null && (this.remove(node), node.next = refNode, refNode != null ? (node.prev = refNode.prev, refNode.prev != null && (refNode.prev.next = node), refNode.prev = node, refNode === this.head && (this.head = node)) : this.tail != null ? (this.tail.next = node, node.prev = this.tail, this.tail = node) : (node.prev = null, this.head = this.tail = node), this.length += 1);
    }
    offset(target) {
        let index = 0, cur = this.head;
        for(; cur != null;){
            if (cur === target) return index;
            index += cur.length(), cur = cur.next;
        }
        return -1;
    }
    remove(node) {
        this.contains(node) && (node.prev != null && (node.prev.next = node.next), node.next != null && (node.next.prev = node.prev), node === this.head && (this.head = node.next), node === this.tail && (this.tail = node.prev), this.length -= 1);
    }
    iterator(curNode = this.head) {
        return ()=>{
            const ret = curNode;
            return curNode != null && (curNode = curNode.next), ret;
        };
    }
    find(index, inclusive = !1) {
        const next = this.iterator();
        let cur = next();
        for(; cur;){
            const length = cur.length();
            if (index < length || inclusive && index === length && (cur.next == null || cur.next.length() !== 0)) return [
                cur,
                index
            ];
            index -= length, cur = next();
        }
        return [
            null,
            0
        ];
    }
    forEach(callback) {
        const next = this.iterator();
        let cur = next();
        for(; cur;)callback(cur), cur = next();
    }
    forEachAt(index, length, callback) {
        if (length <= 0) return;
        const [startNode, offset] = this.find(index);
        let curIndex = index - offset;
        const next = this.iterator(startNode);
        let cur = next();
        for(; cur && curIndex < index + length;){
            const curLength = cur.length();
            index > curIndex ? callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index)) : callback(cur, 0, Math.min(curLength, index + length - curIndex)), curIndex += curLength, cur = next();
        }
    }
    map(callback) {
        return this.reduce((memo, cur)=>(memo.push(callback(cur)), memo), []);
    }
    reduce(callback, memo) {
        const next = this.iterator();
        let cur = next();
        for(; cur;)memo = callback(memo, cur), cur = next();
        return memo;
    }
}
function makeAttachedBlot(node, scroll) {
    const found = scroll.find(node);
    if (found) return found;
    try {
        return scroll.create(node);
    } catch  {
        const blot = scroll.create(Scope.INLINE);
        return Array.from(node.childNodes).forEach((child)=>{
            blot.domNode.appendChild(child);
        }), node.parentNode && node.parentNode.replaceChild(blot.domNode, node), blot.attach(), blot;
    }
}
const _ParentBlot = class _ParentBlot extends ShadowBlot {
    constructor(scroll, domNode){
        super(scroll, domNode), this.uiNode = null, this.build();
    }
    appendChild(other) {
        this.insertBefore(other);
    }
    attach() {
        super.attach(), this.children.forEach((child)=>{
            child.attach();
        });
    }
    attachUI(node) {
        this.uiNode != null && this.uiNode.remove(), this.uiNode = node, _ParentBlot.uiClass && this.uiNode.classList.add(_ParentBlot.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
    }
    /**
   * Called during construction, should fill its own children LinkedList.
   */ build() {
        this.children = new LinkedList(), Array.from(this.domNode.childNodes).filter((node)=>node !== this.uiNode).reverse().forEach((node)=>{
            try {
                const child = makeAttachedBlot(node, this.scroll);
                this.insertBefore(child, this.children.head || void 0);
            } catch (err) {
                if (err instanceof ParchmentError) return;
                throw err;
            }
        });
    }
    deleteAt(index, length) {
        if (index === 0 && length === this.length()) return this.remove();
        this.children.forEachAt(index, length, (child, offset, childLength)=>{
            child.deleteAt(offset, childLength);
        });
    }
    descendant(criteria, index = 0) {
        const [child, offset] = this.children.find(index);
        return criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria ? [
            child,
            offset
        ] : child instanceof _ParentBlot ? child.descendant(criteria, offset) : [
            null,
            -1
        ];
    }
    descendants(criteria, index = 0, length = Number.MAX_VALUE) {
        let descendants = [], lengthLeft = length;
        return this.children.forEachAt(index, length, (child, childIndex, childLength)=>{
            (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) && descendants.push(child), child instanceof _ParentBlot && (descendants = descendants.concat(child.descendants(criteria, childIndex, lengthLeft))), lengthLeft -= childLength;
        }), descendants;
    }
    detach() {
        this.children.forEach((child)=>{
            child.detach();
        }), super.detach();
    }
    enforceAllowedChildren() {
        let done = !1;
        this.children.forEach((child)=>{
            done || this.statics.allowedChildren.some((def)=>child instanceof def) || (child.statics.scope === Scope.BLOCK_BLOT ? (child.next != null && this.splitAfter(child), child.prev != null && this.splitAfter(child.prev), child.parent.unwrap(), done = !0) : child instanceof _ParentBlot ? child.unwrap() : child.remove());
        });
    }
    formatAt(index, length, name, value) {
        this.children.forEachAt(index, length, (child, offset, childLength)=>{
            child.formatAt(offset, childLength, name, value);
        });
    }
    insertAt(index, value, def) {
        const [child, offset] = this.children.find(index);
        if (child) child.insertAt(offset, value, def);
        else {
            const blot = def == null ? this.scroll.create("text", value) : this.scroll.create(value, def);
            this.appendChild(blot);
        }
    }
    insertBefore(childBlot, refBlot) {
        childBlot.parent != null && childBlot.parent.children.remove(childBlot);
        let refDomNode = null;
        this.children.insertBefore(childBlot, refBlot || null), childBlot.parent = this, refBlot != null && (refDomNode = refBlot.domNode), (this.domNode.parentNode !== childBlot.domNode || this.domNode.nextSibling !== refDomNode) && this.domNode.insertBefore(childBlot.domNode, refDomNode), childBlot.attach();
    }
    length() {
        return this.children.reduce((memo, child)=>memo + child.length(), 0);
    }
    moveChildren(targetParent, refNode) {
        this.children.forEach((child)=>{
            targetParent.insertBefore(child, refNode);
        });
    }
    optimize(context) {
        if (super.optimize(context), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                const child = this.scroll.create(this.statics.defaultChild.blotName);
                this.appendChild(child);
            } else this.remove();
        }
    }
    path(index, inclusive = !1) {
        const [child, offset] = this.children.find(index, inclusive), position = [
            [
                this,
                index
            ]
        ];
        return child instanceof _ParentBlot ? position.concat(child.path(offset, inclusive)) : (child != null && position.push([
            child,
            offset
        ]), position);
    }
    removeChild(child) {
        this.children.remove(child);
    }
    replaceWith(name, value) {
        const replacement = typeof name == "string" ? this.scroll.create(name, value) : name;
        return replacement instanceof _ParentBlot && this.moveChildren(replacement), super.replaceWith(replacement);
    }
    split(index, force = !1) {
        if (!force) {
            if (index === 0) return this;
            if (index === this.length()) return this.next;
        }
        const after = this.clone();
        return this.parent && this.parent.insertBefore(after, this.next || void 0), this.children.forEachAt(index, this.length(), (child, offset, _length)=>{
            const split = child.split(offset, force);
            split != null && after.appendChild(split);
        }), after;
    }
    splitAfter(child) {
        const after = this.clone();
        for(; child.next != null;)after.appendChild(child.next);
        return this.parent && this.parent.insertBefore(after, this.next || void 0), after;
    }
    unwrap() {
        this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
    }
    update(mutations, _context) {
        const addedNodes = [], removedNodes = [];
        mutations.forEach((mutation)=>{
            mutation.target === this.domNode && mutation.type === "childList" && (addedNodes.push(...mutation.addedNodes), removedNodes.push(...mutation.removedNodes));
        }), removedNodes.forEach((node)=>{
            if (node.parentNode != null && // @ts-expect-error Fix me later
            node.tagName !== "IFRAME" && document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) return;
            const blot = this.scroll.find(node);
            blot != null && (blot.domNode.parentNode == null || blot.domNode.parentNode === this.domNode) && blot.detach();
        }), addedNodes.filter((node)=>node.parentNode === this.domNode && node !== this.uiNode).sort((a, b)=>a === b ? 0 : a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((node)=>{
            let refBlot = null;
            node.nextSibling != null && (refBlot = this.scroll.find(node.nextSibling));
            const blot = makeAttachedBlot(node, this.scroll);
            (blot.next !== refBlot || blot.next == null) && (blot.parent != null && blot.parent.removeChild(this), this.insertBefore(blot, refBlot || void 0));
        }), this.enforceAllowedChildren();
    }
};
_ParentBlot.uiClass = "";
let ParentBlot = _ParentBlot;
const ParentBlot$1 = ParentBlot;
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return !1;
    for(const prop in obj1)if (obj1[prop] !== obj2[prop]) return !1;
    return !0;
}
const _InlineBlot = class _InlineBlot extends ParentBlot$1 {
    static create(value) {
        return super.create(value);
    }
    static formats(domNode, scroll) {
        const match2 = scroll.query(_InlineBlot.blotName);
        if (!(match2 != null && domNode.tagName === match2.tagName)) {
            if (typeof this.tagName == "string") return !0;
            if (Array.isArray(this.tagName)) return domNode.tagName.toLowerCase();
        }
    }
    constructor(scroll, domNode){
        super(scroll, domNode), this.attributes = new AttributorStore$1(this.domNode);
    }
    format(name, value) {
        if (name === this.statics.blotName && !value) this.children.forEach((child)=>{
            child instanceof _InlineBlot || (child = child.wrap(_InlineBlot.blotName, !0)), this.attributes.copy(child);
        }), this.unwrap();
        else {
            const format = this.scroll.query(name, Scope.INLINE);
            if (format == null) return;
            format instanceof Attributor ? this.attributes.attribute(format, value) : value && (name !== this.statics.blotName || this.formats()[name] !== value) && this.replaceWith(name, value);
        }
    }
    formats() {
        const formats = this.attributes.values(), format = this.statics.formats(this.domNode, this.scroll);
        return format != null && (formats[this.statics.blotName] = format), formats;
    }
    formatAt(index, length, name, value) {
        this.formats()[name] != null || this.scroll.query(name, Scope.ATTRIBUTE) ? this.isolate(index, length).format(name, value) : super.formatAt(index, length, name, value);
    }
    optimize(context) {
        super.optimize(context);
        const formats = this.formats();
        if (Object.keys(formats).length === 0) return this.unwrap();
        const next = this.next;
        next instanceof _InlineBlot && next.prev === this && isEqual(formats, next.formats()) && (next.moveChildren(this), next.remove());
    }
    replaceWith(name, value) {
        const replacement = super.replaceWith(name, value);
        return this.attributes.copy(replacement), replacement;
    }
    update(mutations, context) {
        super.update(mutations, context), mutations.some((mutation)=>mutation.target === this.domNode && mutation.type === "attributes") && this.attributes.build();
    }
    wrap(name, value) {
        const wrapper = super.wrap(name, value);
        return wrapper instanceof _InlineBlot && this.attributes.move(wrapper), wrapper;
    }
};
_InlineBlot.allowedChildren = [
    _InlineBlot,
    LeafBlot$1
], _InlineBlot.blotName = "inline", _InlineBlot.scope = Scope.INLINE_BLOT, _InlineBlot.tagName = "SPAN";
let InlineBlot = _InlineBlot;
const InlineBlot$1 = InlineBlot, _BlockBlot = class _BlockBlot extends ParentBlot$1 {
    static create(value) {
        return super.create(value);
    }
    static formats(domNode, scroll) {
        const match2 = scroll.query(_BlockBlot.blotName);
        if (!(match2 != null && domNode.tagName === match2.tagName)) {
            if (typeof this.tagName == "string") return !0;
            if (Array.isArray(this.tagName)) return domNode.tagName.toLowerCase();
        }
    }
    constructor(scroll, domNode){
        super(scroll, domNode), this.attributes = new AttributorStore$1(this.domNode);
    }
    format(name, value) {
        const format = this.scroll.query(name, Scope.BLOCK);
        format != null && (format instanceof Attributor ? this.attributes.attribute(format, value) : name === this.statics.blotName && !value ? this.replaceWith(_BlockBlot.blotName) : value && (name !== this.statics.blotName || this.formats()[name] !== value) && this.replaceWith(name, value));
    }
    formats() {
        const formats = this.attributes.values(), format = this.statics.formats(this.domNode, this.scroll);
        return format != null && (formats[this.statics.blotName] = format), formats;
    }
    formatAt(index, length, name, value) {
        this.scroll.query(name, Scope.BLOCK) != null ? this.format(name, value) : super.formatAt(index, length, name, value);
    }
    insertAt(index, value, def) {
        if (def == null || this.scroll.query(value, Scope.INLINE) != null) super.insertAt(index, value, def);
        else {
            const after = this.split(index);
            if (after != null) {
                const blot = this.scroll.create(value, def);
                after.parent.insertBefore(blot, after);
            } else throw new Error("Attempt to insertAt after block boundaries");
        }
    }
    replaceWith(name, value) {
        const replacement = super.replaceWith(name, value);
        return this.attributes.copy(replacement), replacement;
    }
    update(mutations, context) {
        super.update(mutations, context), mutations.some((mutation)=>mutation.target === this.domNode && mutation.type === "attributes") && this.attributes.build();
    }
};
_BlockBlot.blotName = "block", _BlockBlot.scope = Scope.BLOCK_BLOT, _BlockBlot.tagName = "P", _BlockBlot.allowedChildren = [
    InlineBlot$1,
    _BlockBlot,
    LeafBlot$1
];
let BlockBlot = _BlockBlot;
const BlockBlot$1 = BlockBlot, _ContainerBlot = class _ContainerBlot extends ParentBlot$1 {
    checkMerge() {
        return this.next !== null && this.next.statics.blotName === this.statics.blotName;
    }
    deleteAt(index, length) {
        super.deleteAt(index, length), this.enforceAllowedChildren();
    }
    formatAt(index, length, name, value) {
        super.formatAt(index, length, name, value), this.enforceAllowedChildren();
    }
    insertAt(index, value, def) {
        super.insertAt(index, value, def), this.enforceAllowedChildren();
    }
    optimize(context) {
        super.optimize(context), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
    }
};
_ContainerBlot.blotName = "container", _ContainerBlot.scope = Scope.BLOCK_BLOT;
let ContainerBlot = _ContainerBlot;
const ContainerBlot$1 = ContainerBlot;
class EmbedBlot extends LeafBlot$1 {
    static formats(_domNode, _scroll) {}
    format(name, value) {
        super.formatAt(0, this.length(), name, value);
    }
    formatAt(index, length, name, value) {
        index === 0 && length === this.length() ? this.format(name, value) : super.formatAt(index, length, name, value);
    }
    formats() {
        return this.statics.formats(this.domNode, this.scroll);
    }
}
const EmbedBlot$1 = EmbedBlot, OBSERVER_CONFIG = {
    attributes: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
}, MAX_OPTIMIZE_ITERATIONS = 100, _ScrollBlot = class _ScrollBlot extends ParentBlot$1 {
    constructor(registry, node){
        super(null, node), this.registry = registry, this.scroll = this, this.build(), this.observer = new MutationObserver((mutations)=>{
            this.update(mutations);
        }), this.observer.observe(this.domNode, OBSERVER_CONFIG), this.attach();
    }
    create(input, value) {
        return this.registry.create(this, input, value);
    }
    find(node, bubble = !1) {
        const blot = this.registry.find(node, bubble);
        return blot ? blot.scroll === this ? blot : bubble ? this.find(blot.scroll.domNode.parentNode, !0) : null : null;
    }
    query(query, scope = Scope.ANY) {
        return this.registry.query(query, scope);
    }
    register(...definitions) {
        return this.registry.register(...definitions);
    }
    build() {
        this.scroll != null && super.build();
    }
    detach() {
        super.detach(), this.observer.disconnect();
    }
    deleteAt(index, length) {
        this.update(), index === 0 && length === this.length() ? this.children.forEach((child)=>{
            child.remove();
        }) : super.deleteAt(index, length);
    }
    formatAt(index, length, name, value) {
        this.update(), super.formatAt(index, length, name, value);
    }
    insertAt(index, value, def) {
        this.update(), super.insertAt(index, value, def);
    }
    optimize(mutations = [], context = {}) {
        super.optimize(context);
        const mutationsMap = context.mutationsMap || /* @__PURE__ */ new WeakMap();
        let records = Array.from(this.observer.takeRecords());
        for(; records.length > 0;)mutations.push(records.pop());
        const mark = (blot, markParent = !0)=>{
            blot == null || blot === this || blot.domNode.parentNode != null && (mutationsMap.has(blot.domNode) || mutationsMap.set(blot.domNode, []), markParent && mark(blot.parent));
        }, optimize = (blot)=>{
            mutationsMap.has(blot.domNode) && (blot instanceof ParentBlot$1 && blot.children.forEach(optimize), mutationsMap.delete(blot.domNode), blot.optimize(context));
        };
        let remaining = mutations;
        for(let i = 0; remaining.length > 0; i += 1){
            if (i >= MAX_OPTIMIZE_ITERATIONS) throw new Error("[Parchment] Maximum optimize iterations reached");
            for(remaining.forEach((mutation)=>{
                const blot = this.find(mutation.target, !0);
                blot != null && (blot.domNode === mutation.target && (mutation.type === "childList" ? (mark(this.find(mutation.previousSibling, !1)), Array.from(mutation.addedNodes).forEach((node)=>{
                    const child = this.find(node, !1);
                    mark(child, !1), child instanceof ParentBlot$1 && child.children.forEach((grandChild)=>{
                        mark(grandChild, !1);
                    });
                })) : mutation.type === "attributes" && mark(blot.prev)), mark(blot));
            }), this.children.forEach(optimize), remaining = Array.from(this.observer.takeRecords()), records = remaining.slice(); records.length > 0;)mutations.push(records.pop());
        }
    }
    update(mutations, context = {}) {
        mutations = mutations || this.observer.takeRecords();
        const mutationsMap = /* @__PURE__ */ new WeakMap();
        mutations.map((mutation)=>{
            const blot = this.find(mutation.target, !0);
            return blot == null ? null : mutationsMap.has(blot.domNode) ? (mutationsMap.get(blot.domNode).push(mutation), null) : (mutationsMap.set(blot.domNode, [
                mutation
            ]), blot);
        }).forEach((blot)=>{
            blot != null && blot !== this && mutationsMap.has(blot.domNode) && blot.update(mutationsMap.get(blot.domNode) || [], context);
        }), context.mutationsMap = mutationsMap, mutationsMap.has(this.domNode) && super.update(mutationsMap.get(this.domNode), context), this.optimize(mutations, context);
    }
};
_ScrollBlot.blotName = "scroll", _ScrollBlot.defaultChild = BlockBlot$1, _ScrollBlot.allowedChildren = [
    BlockBlot$1,
    ContainerBlot$1
], _ScrollBlot.scope = Scope.BLOCK_BLOT, _ScrollBlot.tagName = "DIV";
let ScrollBlot = _ScrollBlot;
const ScrollBlot$1 = ScrollBlot, _TextBlot = class _TextBlot extends LeafBlot$1 {
    static create(value) {
        return document.createTextNode(value);
    }
    static value(domNode) {
        return domNode.data;
    }
    constructor(scroll, node){
        super(scroll, node), this.text = this.statics.value(this.domNode);
    }
    deleteAt(index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
    }
    index(node, offset) {
        return this.domNode === node ? offset : -1;
    }
    insertAt(index, value, def) {
        def == null ? (this.text = this.text.slice(0, index) + value + this.text.slice(index), this.domNode.data = this.text) : super.insertAt(index, value, def);
    }
    length() {
        return this.text.length;
    }
    optimize(context) {
        super.optimize(context), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof _TextBlot && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
    }
    position(index, _inclusive = !1) {
        return [
            this.domNode,
            index
        ];
    }
    split(index, force = !1) {
        if (!force) {
            if (index === 0) return this;
            if (index === this.length()) return this.next;
        }
        const after = this.scroll.create(this.domNode.splitText(index));
        return this.parent.insertBefore(after, this.next || void 0), this.text = this.statics.value(this.domNode), after;
    }
    update(mutations, _context) {
        mutations.some((mutation)=>mutation.type === "characterData" && mutation.target === this.domNode) && (this.text = this.statics.value(this.domNode));
    }
    value() {
        return this.text;
    }
};
_TextBlot.blotName = "text", _TextBlot.scope = Scope.INLINE_BLOT;
let TextBlot = _TextBlot;
const TextBlot$1 = TextBlot;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqWT0":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttributeMap = exports.OpIterator = exports.Op = void 0;
const diff = require("702262d49e898a6");
const cloneDeep = require("8d1372626489fd7a");
const isEqual = require("23400ffc74a78b67");
const AttributeMap_1 = require("c24330ceef71df6d");
exports.AttributeMap = AttributeMap_1.default;
const Op_1 = require("1ec1e1f51a787436");
exports.Op = Op_1.default;
const OpIterator_1 = require("9c4c19e69f07bd5");
exports.OpIterator = OpIterator_1.default;
const NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()
const getEmbedTypeAndData = (a, b)=>{
    if (typeof a !== 'object' || a === null) throw new Error(`cannot retain a ${typeof a}`);
    if (typeof b !== 'object' || b === null) throw new Error(`cannot retain a ${typeof b}`);
    const embedType = Object.keys(a)[0];
    if (!embedType || embedType !== Object.keys(b)[0]) throw new Error(`embed types not matched: ${embedType} != ${Object.keys(b)[0]}`);
    return [
        embedType,
        a[embedType],
        b[embedType]
    ];
};
class Delta {
    constructor(ops){
        // Assume we are given a well formed ops
        if (Array.isArray(ops)) this.ops = ops;
        else if (ops != null && Array.isArray(ops.ops)) this.ops = ops.ops;
        else this.ops = [];
    }
    static registerEmbed(embedType, handler) {
        this.handlers[embedType] = handler;
    }
    static unregisterEmbed(embedType) {
        delete this.handlers[embedType];
    }
    static getHandler(embedType) {
        const handler = this.handlers[embedType];
        if (!handler) throw new Error(`no handlers for embed type "${embedType}"`);
        return handler;
    }
    insert(arg, attributes) {
        const newOp = {};
        if (typeof arg === 'string' && arg.length === 0) return this;
        newOp.insert = arg;
        if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
        return this.push(newOp);
    }
    delete(length) {
        if (length <= 0) return this;
        return this.push({
            delete: length
        });
    }
    retain(length, attributes) {
        if (typeof length === 'number' && length <= 0) return this;
        const newOp = {
            retain: length
        };
        if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
        return this.push(newOp);
    }
    push(newOp) {
        let index = this.ops.length;
        let lastOp = this.ops[index - 1];
        newOp = cloneDeep(newOp);
        if (typeof lastOp === 'object') {
            if (typeof newOp.delete === 'number' && typeof lastOp.delete === 'number') {
                this.ops[index - 1] = {
                    delete: lastOp.delete + newOp.delete
                };
                return this;
            }
            // Since it does not matter if we insert before or after deleting at the same index,
            // always prefer to insert first
            if (typeof lastOp.delete === 'number' && newOp.insert != null) {
                index -= 1;
                lastOp = this.ops[index - 1];
                if (typeof lastOp !== 'object') {
                    this.ops.unshift(newOp);
                    return this;
                }
            }
            if (isEqual(newOp.attributes, lastOp.attributes)) {
                if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
                    this.ops[index - 1] = {
                        insert: lastOp.insert + newOp.insert
                    };
                    if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes;
                    return this;
                } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
                    this.ops[index - 1] = {
                        retain: lastOp.retain + newOp.retain
                    };
                    if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes;
                    return this;
                }
            }
        }
        if (index === this.ops.length) this.ops.push(newOp);
        else this.ops.splice(index, 0, newOp);
        return this;
    }
    chop() {
        const lastOp = this.ops[this.ops.length - 1];
        if (lastOp && typeof lastOp.retain === 'number' && !lastOp.attributes) this.ops.pop();
        return this;
    }
    filter(predicate) {
        return this.ops.filter(predicate);
    }
    forEach(predicate) {
        this.ops.forEach(predicate);
    }
    map(predicate) {
        return this.ops.map(predicate);
    }
    partition(predicate) {
        const passed = [];
        const failed = [];
        this.forEach((op)=>{
            const target = predicate(op) ? passed : failed;
            target.push(op);
        });
        return [
            passed,
            failed
        ];
    }
    reduce(predicate, initialValue) {
        return this.ops.reduce(predicate, initialValue);
    }
    changeLength() {
        return this.reduce((length, elem)=>{
            if (elem.insert) return length + Op_1.default.length(elem);
            else if (elem.delete) return length - elem.delete;
            return length;
        }, 0);
    }
    length() {
        return this.reduce((length, elem)=>{
            return length + Op_1.default.length(elem);
        }, 0);
    }
    slice(start = 0, end = Infinity) {
        const ops = [];
        const iter = new OpIterator_1.default(this.ops);
        let index = 0;
        while(index < end && iter.hasNext()){
            let nextOp;
            if (index < start) nextOp = iter.next(start - index);
            else {
                nextOp = iter.next(end - index);
                ops.push(nextOp);
            }
            index += Op_1.default.length(nextOp);
        }
        return new Delta(ops);
    }
    compose(other) {
        const thisIter = new OpIterator_1.default(this.ops);
        const otherIter = new OpIterator_1.default(other.ops);
        const ops = [];
        const firstOther = otherIter.peek();
        if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
            let firstLeft = firstOther.retain;
            while(thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft){
                firstLeft -= thisIter.peekLength();
                ops.push(thisIter.next());
            }
            if (firstOther.retain - firstLeft > 0) otherIter.next(firstOther.retain - firstLeft);
        }
        const delta = new Delta(ops);
        while(thisIter.hasNext() || otherIter.hasNext()){
            if (otherIter.peekType() === 'insert') delta.push(otherIter.next());
            else if (thisIter.peekType() === 'delete') delta.push(thisIter.next());
            else {
                const length = Math.min(thisIter.peekLength(), otherIter.peekLength());
                const thisOp = thisIter.next(length);
                const otherOp = otherIter.next(length);
                if (otherOp.retain) {
                    const newOp = {};
                    if (typeof thisOp.retain === 'number') newOp.retain = typeof otherOp.retain === 'number' ? length : otherOp.retain;
                    else if (typeof otherOp.retain === 'number') {
                        if (thisOp.retain == null) newOp.insert = thisOp.insert;
                        else newOp.retain = thisOp.retain;
                    } else {
                        const action = thisOp.retain == null ? 'insert' : 'retain';
                        const [embedType, thisData, otherData] = getEmbedTypeAndData(thisOp[action], otherOp.retain);
                        const handler = Delta.getHandler(embedType);
                        newOp[action] = {
                            [embedType]: handler.compose(thisData, otherData, action === 'retain')
                        };
                    }
                    // Preserve null when composing with a retain, otherwise remove it for inserts
                    const attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
                    if (attributes) newOp.attributes = attributes;
                    delta.push(newOp);
                    // Optimization if rest of other is just retain
                    if (!otherIter.hasNext() && isEqual(delta.ops[delta.ops.length - 1], newOp)) {
                        const rest = new Delta(thisIter.rest());
                        return delta.concat(rest).chop();
                    }
                // Other op should be delete, we could be an insert or retain
                // Insert + delete cancels out
                } else if (typeof otherOp.delete === 'number' && (typeof thisOp.retain === 'number' || typeof thisOp.retain === 'object' && thisOp.retain !== null)) delta.push(otherOp);
            }
        }
        return delta.chop();
    }
    concat(other) {
        const delta = new Delta(this.ops.slice());
        if (other.ops.length > 0) {
            delta.push(other.ops[0]);
            delta.ops = delta.ops.concat(other.ops.slice(1));
        }
        return delta;
    }
    diff(other, cursor) {
        if (this.ops === other.ops) return new Delta();
        const strings = [
            this,
            other
        ].map((delta)=>{
            return delta.map((op)=>{
                if (op.insert != null) return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
                const prep = delta === other ? 'on' : 'with';
                throw new Error('diff() called ' + prep + ' non-document');
            }).join('');
        });
        const retDelta = new Delta();
        const diffResult = diff(strings[0], strings[1], cursor, true);
        const thisIter = new OpIterator_1.default(this.ops);
        const otherIter = new OpIterator_1.default(other.ops);
        diffResult.forEach((component)=>{
            let length = component[1].length;
            while(length > 0){
                let opLength = 0;
                switch(component[0]){
                    case diff.INSERT:
                        opLength = Math.min(otherIter.peekLength(), length);
                        retDelta.push(otherIter.next(opLength));
                        break;
                    case diff.DELETE:
                        opLength = Math.min(length, thisIter.peekLength());
                        thisIter.next(opLength);
                        retDelta.delete(opLength);
                        break;
                    case diff.EQUAL:
                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
                        const thisOp = thisIter.next(opLength);
                        const otherOp = otherIter.next(opLength);
                        if (isEqual(thisOp.insert, otherOp.insert)) retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));
                        else retDelta.push(otherOp).delete(opLength);
                        break;
                }
                length -= opLength;
            }
        });
        return retDelta.chop();
    }
    eachLine(predicate, newline = '\n') {
        const iter = new OpIterator_1.default(this.ops);
        let line = new Delta();
        let i = 0;
        while(iter.hasNext()){
            if (iter.peekType() !== 'insert') return;
            const thisOp = iter.peek();
            const start = Op_1.default.length(thisOp) - iter.peekLength();
            const index = typeof thisOp.insert === 'string' ? thisOp.insert.indexOf(newline, start) - start : -1;
            if (index < 0) line.push(iter.next());
            else if (index > 0) line.push(iter.next(index));
            else {
                if (predicate(line, iter.next(1).attributes || {}, i) === false) return;
                i += 1;
                line = new Delta();
            }
        }
        if (line.length() > 0) predicate(line, {}, i);
    }
    invert(base) {
        const inverted = new Delta();
        this.reduce((baseIndex, op)=>{
            if (op.insert) inverted.delete(Op_1.default.length(op));
            else if (typeof op.retain === 'number' && op.attributes == null) {
                inverted.retain(op.retain);
                return baseIndex + op.retain;
            } else if (op.delete || typeof op.retain === 'number') {
                const length = op.delete || op.retain;
                const slice = base.slice(baseIndex, baseIndex + length);
                slice.forEach((baseOp)=>{
                    if (op.delete) inverted.push(baseOp);
                    else if (op.retain && op.attributes) inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
                });
                return baseIndex + length;
            } else if (typeof op.retain === 'object' && op.retain !== null) {
                const slice = base.slice(baseIndex, baseIndex + 1);
                const baseOp = new OpIterator_1.default(slice.ops).next();
                const [embedType, opData, baseOpData] = getEmbedTypeAndData(op.retain, baseOp.insert);
                const handler = Delta.getHandler(embedType);
                inverted.retain({
                    [embedType]: handler.invert(opData, baseOpData)
                }, AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
                return baseIndex + 1;
            }
            return baseIndex;
        }, 0);
        return inverted.chop();
    }
    transform(arg, priority = false) {
        priority = !!priority;
        if (typeof arg === 'number') return this.transformPosition(arg, priority);
        const other = arg;
        const thisIter = new OpIterator_1.default(this.ops);
        const otherIter = new OpIterator_1.default(other.ops);
        const delta = new Delta();
        while(thisIter.hasNext() || otherIter.hasNext()){
            if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) delta.retain(Op_1.default.length(thisIter.next()));
            else if (otherIter.peekType() === 'insert') delta.push(otherIter.next());
            else {
                const length = Math.min(thisIter.peekLength(), otherIter.peekLength());
                const thisOp = thisIter.next(length);
                const otherOp = otherIter.next(length);
                if (thisOp.delete) continue;
                else if (otherOp.delete) delta.push(otherOp);
                else {
                    const thisData = thisOp.retain;
                    const otherData = otherOp.retain;
                    let transformedData = typeof otherData === 'object' && otherData !== null ? otherData : length;
                    if (typeof thisData === 'object' && thisData !== null && typeof otherData === 'object' && otherData !== null) {
                        const embedType = Object.keys(thisData)[0];
                        if (embedType === Object.keys(otherData)[0]) {
                            const handler = Delta.getHandler(embedType);
                            if (handler) transformedData = {
                                [embedType]: handler.transform(thisData[embedType], otherData[embedType], priority)
                            };
                        }
                    }
                    // We retain either their retain or insert
                    delta.retain(transformedData, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));
                }
            }
        }
        return delta.chop();
    }
    transformPosition(index, priority = false) {
        priority = !!priority;
        const thisIter = new OpIterator_1.default(this.ops);
        let offset = 0;
        while(thisIter.hasNext() && offset <= index){
            const length = thisIter.peekLength();
            const nextType = thisIter.peekType();
            thisIter.next();
            if (nextType === 'delete') {
                index -= Math.min(length, index - offset);
                continue;
            } else if (nextType === 'insert' && (offset < index || !priority)) index += length;
            offset += length;
        }
        return index;
    }
}
Delta.Op = Op_1.default;
Delta.OpIterator = OpIterator_1.default;
Delta.AttributeMap = AttributeMap_1.default;
Delta.handlers = {};
exports.default = Delta;
module.exports = Delta;
module.exports.default = Delta;

},{"702262d49e898a6":"2OsTJ","8d1372626489fd7a":"i3u1q","23400ffc74a78b67":"6emId","c24330ceef71df6d":"loDhY","1ec1e1f51a787436":"lfAwf","9c4c19e69f07bd5":"dwCGi"}],"2OsTJ":[function(require,module,exports,__globalThis) {
/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */ var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;
/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info
 * @param {boolean} [cleanup] Apply semantic cleanup before returning.
 * @return {Array} Array of diff tuples.
 */ function diff_main(text1, text2, cursor_pos, cleanup, _fix_unicode) {
    // Check for equality
    if (text1 === text2) {
        if (text1) return [
            [
                DIFF_EQUAL,
                text1
            ]
        ];
        return [];
    }
    if (cursor_pos != null) {
        var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
        if (editdiff) return editdiff;
    }
    // Trim off common prefix (speedup).
    var commonlength = diff_commonPrefix(text1, text2);
    var commonprefix = text1.substring(0, commonlength);
    text1 = text1.substring(commonlength);
    text2 = text2.substring(commonlength);
    // Trim off common suffix (speedup).
    commonlength = diff_commonSuffix(text1, text2);
    var commonsuffix = text1.substring(text1.length - commonlength);
    text1 = text1.substring(0, text1.length - commonlength);
    text2 = text2.substring(0, text2.length - commonlength);
    // Compute the diff on the middle block.
    var diffs = diff_compute_(text1, text2);
    // Restore the prefix and suffix.
    if (commonprefix) diffs.unshift([
        DIFF_EQUAL,
        commonprefix
    ]);
    if (commonsuffix) diffs.push([
        DIFF_EQUAL,
        commonsuffix
    ]);
    diff_cleanupMerge(diffs, _fix_unicode);
    if (cleanup) diff_cleanupSemantic(diffs);
    return diffs;
}
/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */ function diff_compute_(text1, text2) {
    var diffs;
    if (!text1) // Just add some text (speedup).
    return [
        [
            DIFF_INSERT,
            text2
        ]
    ];
    if (!text2) // Just delete some text (speedup).
    return [
        [
            DIFF_DELETE,
            text1
        ]
    ];
    var longtext = text1.length > text2.length ? text1 : text2;
    var shorttext = text1.length > text2.length ? text2 : text1;
    var i = longtext.indexOf(shorttext);
    if (i !== -1) {
        // Shorter text is inside the longer text (speedup).
        diffs = [
            [
                DIFF_INSERT,
                longtext.substring(0, i)
            ],
            [
                DIFF_EQUAL,
                shorttext
            ],
            [
                DIFF_INSERT,
                longtext.substring(i + shorttext.length)
            ]
        ];
        // Swap insertions for deletions if diff is reversed.
        if (text1.length > text2.length) diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        return diffs;
    }
    if (shorttext.length === 1) // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [
        [
            DIFF_DELETE,
            text1
        ],
        [
            DIFF_INSERT,
            text2
        ]
    ];
    // Check to see if the problem can be split in two.
    var hm = diff_halfMatch_(text1, text2);
    if (hm) {
        // A half-match was found, sort out the return data.
        var text1_a = hm[0];
        var text1_b = hm[1];
        var text2_a = hm[2];
        var text2_b = hm[3];
        var mid_common = hm[4];
        // Send both pairs off for separate processing.
        var diffs_a = diff_main(text1_a, text2_a);
        var diffs_b = diff_main(text1_b, text2_b);
        // Merge the results.
        return diffs_a.concat([
            [
                DIFF_EQUAL,
                mid_common
            ]
        ], diffs_b);
    }
    return diff_bisect_(text1, text2);
}
/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */ function diff_bisect_(text1, text2) {
    // Cache the text lengths to prevent multiple calls.
    var text1_length = text1.length;
    var text2_length = text2.length;
    var max_d = Math.ceil((text1_length + text2_length) / 2);
    var v_offset = max_d;
    var v_length = 2 * max_d;
    var v1 = new Array(v_length);
    var v2 = new Array(v_length);
    // Setting all elements to -1 is faster in Chrome & Firefox than mixing
    // integers and undefined.
    for(var x = 0; x < v_length; x++){
        v1[x] = -1;
        v2[x] = -1;
    }
    v1[v_offset + 1] = 0;
    v2[v_offset + 1] = 0;
    var delta = text1_length - text2_length;
    // If the total number of characters is odd, then the front path will collide
    // with the reverse path.
    var front = delta % 2 !== 0;
    // Offsets for start and end of k loop.
    // Prevents mapping of space beyond the grid.
    var k1start = 0;
    var k1end = 0;
    var k2start = 0;
    var k2end = 0;
    for(var d = 0; d < max_d; d++){
        // Walk the front path one step.
        for(var k1 = -d + k1start; k1 <= d - k1end; k1 += 2){
            var k1_offset = v_offset + k1;
            var x1;
            if (k1 === -d || k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1]) x1 = v1[k1_offset + 1];
            else x1 = v1[k1_offset - 1] + 1;
            var y1 = x1 - k1;
            while(x1 < text1_length && y1 < text2_length && text1.charAt(x1) === text2.charAt(y1)){
                x1++;
                y1++;
            }
            v1[k1_offset] = x1;
            if (x1 > text1_length) // Ran off the right of the graph.
            k1end += 2;
            else if (y1 > text2_length) // Ran off the bottom of the graph.
            k1start += 2;
            else if (front) {
                var k2_offset = v_offset + delta - k1;
                if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
                    // Mirror x2 onto top-left coordinate system.
                    var x2 = text1_length - v2[k2_offset];
                    if (x1 >= x2) // Overlap detected.
                    return diff_bisectSplit_(text1, text2, x1, y1);
                }
            }
        }
        // Walk the reverse path one step.
        for(var k2 = -d + k2start; k2 <= d - k2end; k2 += 2){
            var k2_offset = v_offset + k2;
            var x2;
            if (k2 === -d || k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1]) x2 = v2[k2_offset + 1];
            else x2 = v2[k2_offset - 1] + 1;
            var y2 = x2 - k2;
            while(x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)){
                x2++;
                y2++;
            }
            v2[k2_offset] = x2;
            if (x2 > text1_length) // Ran off the left of the graph.
            k2end += 2;
            else if (y2 > text2_length) // Ran off the top of the graph.
            k2start += 2;
            else if (!front) {
                var k1_offset = v_offset + delta - k2;
                if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
                    var x1 = v1[k1_offset];
                    var y1 = v_offset + x1 - k1_offset;
                    // Mirror x2 onto top-left coordinate system.
                    x2 = text1_length - x2;
                    if (x1 >= x2) // Overlap detected.
                    return diff_bisectSplit_(text1, text2, x1, y1);
                }
            }
        }
    }
    // Diff took too long and hit the deadline or
    // number of diffs equals number of characters, no commonality at all.
    return [
        [
            DIFF_DELETE,
            text1
        ],
        [
            DIFF_INSERT,
            text2
        ]
    ];
}
/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */ function diff_bisectSplit_(text1, text2, x, y) {
    var text1a = text1.substring(0, x);
    var text2a = text2.substring(0, y);
    var text1b = text1.substring(x);
    var text2b = text2.substring(y);
    // Compute both diffs serially.
    var diffs = diff_main(text1a, text2a);
    var diffsb = diff_main(text1b, text2b);
    return diffs.concat(diffsb);
}
/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */ function diff_commonPrefix(text1, text2) {
    // Quick check for common null cases.
    if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) return 0;
    // Binary search.
    // Performance analysis: http://neil.fraser.name/news/2007/10/09/
    var pointermin = 0;
    var pointermax = Math.min(text1.length, text2.length);
    var pointermid = pointermax;
    var pointerstart = 0;
    while(pointermin < pointermid){
        if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
            pointermin = pointermid;
            pointerstart = pointermin;
        } else pointermax = pointermid;
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
    }
    if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) pointermid--;
    return pointermid;
}
/**
 * Determine if the suffix of one string is the prefix of another.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of the first
 *     string and the start of the second string.
 * @private
 */ function diff_commonOverlap_(text1, text2) {
    // Cache the text lengths to prevent multiple calls.
    var text1_length = text1.length;
    var text2_length = text2.length;
    // Eliminate the null case.
    if (text1_length == 0 || text2_length == 0) return 0;
    // Truncate the longer string.
    if (text1_length > text2_length) text1 = text1.substring(text1_length - text2_length);
    else if (text1_length < text2_length) text2 = text2.substring(0, text1_length);
    var text_length = Math.min(text1_length, text2_length);
    // Quick check for the worst case.
    if (text1 == text2) return text_length;
    // Start by looking for a single character match
    // and increase length until no match is found.
    // Performance analysis: http://neil.fraser.name/news/2010/11/04/
    var best = 0;
    var length = 1;
    while(true){
        var pattern = text1.substring(text_length - length);
        var found = text2.indexOf(pattern);
        if (found == -1) return best;
        length += found;
        if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
            best = length;
            length++;
        }
    }
}
/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */ function diff_commonSuffix(text1, text2) {
    // Quick check for common null cases.
    if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) return 0;
    // Binary search.
    // Performance analysis: http://neil.fraser.name/news/2007/10/09/
    var pointermin = 0;
    var pointermax = Math.min(text1.length, text2.length);
    var pointermid = pointermax;
    var pointerend = 0;
    while(pointermin < pointermid){
        if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
            pointermin = pointermid;
            pointerend = pointermin;
        } else pointermax = pointermid;
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
    }
    if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) pointermid--;
    return pointermid;
}
/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */ function diff_halfMatch_(text1, text2) {
    var longtext = text1.length > text2.length ? text1 : text2;
    var shorttext = text1.length > text2.length ? text2 : text1;
    if (longtext.length < 4 || shorttext.length * 2 < longtext.length) return null; // Pointless.
    /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */ function diff_halfMatchI_(longtext, shorttext, i) {
        // Start with a 1/4 length substring at position i as a seed.
        var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
        var j = -1;
        var best_common = "";
        var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
        while((j = shorttext.indexOf(seed, j + 1)) !== -1){
            var prefixLength = diff_commonPrefix(longtext.substring(i), shorttext.substring(j));
            var suffixLength = diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
            if (best_common.length < suffixLength + prefixLength) {
                best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
                best_longtext_a = longtext.substring(0, i - suffixLength);
                best_longtext_b = longtext.substring(i + prefixLength);
                best_shorttext_a = shorttext.substring(0, j - suffixLength);
                best_shorttext_b = shorttext.substring(j + prefixLength);
            }
        }
        if (best_common.length * 2 >= longtext.length) return [
            best_longtext_a,
            best_longtext_b,
            best_shorttext_a,
            best_shorttext_b,
            best_common
        ];
        else return null;
    }
    // First check if the second quarter is the seed for a half-match.
    var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
    // Check again based on the third quarter.
    var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
    var hm;
    if (!hm1 && !hm2) return null;
    else if (!hm2) hm = hm1;
    else if (!hm1) hm = hm2;
    else // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
    // A half-match was found, sort out the return data.
    var text1_a, text1_b, text2_a, text2_b;
    if (text1.length > text2.length) {
        text1_a = hm[0];
        text1_b = hm[1];
        text2_a = hm[2];
        text2_b = hm[3];
    } else {
        text2_a = hm[0];
        text2_b = hm[1];
        text1_a = hm[2];
        text1_b = hm[3];
    }
    var mid_common = hm[4];
    return [
        text1_a,
        text1_b,
        text2_a,
        text2_b,
        mid_common
    ];
}
/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */ function diff_cleanupSemantic(diffs) {
    var changes = false;
    var equalities = []; // Stack of indices where equalities are found.
    var equalitiesLength = 0; // Keeping our own length var is faster in JS.
    /** @type {?string} */ var lastequality = null;
    // Always equal to diffs[equalities[equalitiesLength - 1]][1]
    var pointer = 0; // Index of current position.
    // Number of characters that changed prior to the equality.
    var length_insertions1 = 0;
    var length_deletions1 = 0;
    // Number of characters that changed after the equality.
    var length_insertions2 = 0;
    var length_deletions2 = 0;
    while(pointer < diffs.length){
        if (diffs[pointer][0] == DIFF_EQUAL) {
            // Equality found.
            equalities[equalitiesLength++] = pointer;
            length_insertions1 = length_insertions2;
            length_deletions1 = length_deletions2;
            length_insertions2 = 0;
            length_deletions2 = 0;
            lastequality = diffs[pointer][1];
        } else {
            // An insertion or deletion.
            if (diffs[pointer][0] == DIFF_INSERT) length_insertions2 += diffs[pointer][1].length;
            else length_deletions2 += diffs[pointer][1].length;
            // Eliminate an equality that is smaller or equal to the edits on both
            // sides of it.
            if (lastequality && lastequality.length <= Math.max(length_insertions1, length_deletions1) && lastequality.length <= Math.max(length_insertions2, length_deletions2)) {
                // Duplicate record.
                diffs.splice(equalities[equalitiesLength - 1], 0, [
                    DIFF_DELETE,
                    lastequality
                ]);
                // Change second copy to insert.
                diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
                // Throw away the equality we just deleted.
                equalitiesLength--;
                // Throw away the previous equality (it needs to be reevaluated).
                equalitiesLength--;
                pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                length_insertions1 = 0; // Reset the counters.
                length_deletions1 = 0;
                length_insertions2 = 0;
                length_deletions2 = 0;
                lastequality = null;
                changes = true;
            }
        }
        pointer++;
    }
    // Normalize the diff.
    if (changes) diff_cleanupMerge(diffs);
    diff_cleanupSemanticLossless(diffs);
    // Find any overlaps between deletions and insertions.
    // e.g: <del>abcxxx</del><ins>xxxdef</ins>
    //   -> <del>abc</del>xxx<ins>def</ins>
    // e.g: <del>xxxabc</del><ins>defxxx</ins>
    //   -> <ins>def</ins>xxx<del>abc</del>
    // Only extract an overlap if it is as big as the edit ahead or behind it.
    pointer = 1;
    while(pointer < diffs.length){
        if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
            var deletion = diffs[pointer - 1][1];
            var insertion = diffs[pointer][1];
            var overlap_length1 = diff_commonOverlap_(deletion, insertion);
            var overlap_length2 = diff_commonOverlap_(insertion, deletion);
            if (overlap_length1 >= overlap_length2) {
                if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
                    // Overlap found.  Insert an equality and trim the surrounding edits.
                    diffs.splice(pointer, 0, [
                        DIFF_EQUAL,
                        insertion.substring(0, overlap_length1)
                    ]);
                    diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
                    diffs[pointer + 1][1] = insertion.substring(overlap_length1);
                    pointer++;
                }
            } else if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
                // Reverse overlap found.
                // Insert an equality and swap and trim the surrounding edits.
                diffs.splice(pointer, 0, [
                    DIFF_EQUAL,
                    deletion.substring(0, overlap_length2)
                ]);
                diffs[pointer - 1][0] = DIFF_INSERT;
                diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
                diffs[pointer + 1][0] = DIFF_DELETE;
                diffs[pointer + 1][1] = deletion.substring(overlap_length2);
                pointer++;
            }
            pointer++;
        }
        pointer++;
    }
}
var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
var whitespaceRegex_ = /\s/;
var linebreakRegex_ = /[\r\n]/;
var blanklineEndRegex_ = /\n\r?\n$/;
var blanklineStartRegex_ = /^\r?\n\r?\n/;
/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */ function diff_cleanupSemanticLossless(diffs) {
    /**
   * Given two strings, compute a score representing whether the internal
   * boundary falls on logical boundaries.
   * Scores range from 6 (best) to 0 (worst).
   * Closure, but does not reference any external variables.
   * @param {string} one First string.
   * @param {string} two Second string.
   * @return {number} The score.
   * @private
   */ function diff_cleanupSemanticScore_(one, two) {
        if (!one || !two) // Edges are the best.
        return 6;
        // Each port of this function behaves slightly differently due to
        // subtle differences in each language's definition of things like
        // 'whitespace'.  Since this function's purpose is largely cosmetic,
        // the choice has been made to use each language's native features
        // rather than force total conformity.
        var char1 = one.charAt(one.length - 1);
        var char2 = two.charAt(0);
        var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
        var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
        var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
        var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
        var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
        var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
        var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
        var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);
        if (blankLine1 || blankLine2) // Five points for blank lines.
        return 5;
        else if (lineBreak1 || lineBreak2) // Four points for line breaks.
        return 4;
        else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) // Three points for end of sentences.
        return 3;
        else if (whitespace1 || whitespace2) // Two points for whitespace.
        return 2;
        else if (nonAlphaNumeric1 || nonAlphaNumeric2) // One point for non-alphanumeric.
        return 1;
        return 0;
    }
    var pointer = 1;
    // Intentionally ignore the first and last element (don't need checking).
    while(pointer < diffs.length - 1){
        if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
            // This is a single edit surrounded by equalities.
            var equality1 = diffs[pointer - 1][1];
            var edit = diffs[pointer][1];
            var equality2 = diffs[pointer + 1][1];
            // First, shift the edit as far left as possible.
            var commonOffset = diff_commonSuffix(equality1, edit);
            if (commonOffset) {
                var commonString = edit.substring(edit.length - commonOffset);
                equality1 = equality1.substring(0, equality1.length - commonOffset);
                edit = commonString + edit.substring(0, edit.length - commonOffset);
                equality2 = commonString + equality2;
            }
            // Second, step character by character right, looking for the best fit.
            var bestEquality1 = equality1;
            var bestEdit = edit;
            var bestEquality2 = equality2;
            var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
            while(edit.charAt(0) === equality2.charAt(0)){
                equality1 += edit.charAt(0);
                edit = edit.substring(1) + equality2.charAt(0);
                equality2 = equality2.substring(1);
                var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
                // The >= encourages trailing rather than leading whitespace on edits.
                if (score >= bestScore) {
                    bestScore = score;
                    bestEquality1 = equality1;
                    bestEdit = edit;
                    bestEquality2 = equality2;
                }
            }
            if (diffs[pointer - 1][1] != bestEquality1) {
                // We have an improvement, save it back to the diff.
                if (bestEquality1) diffs[pointer - 1][1] = bestEquality1;
                else {
                    diffs.splice(pointer - 1, 1);
                    pointer--;
                }
                diffs[pointer][1] = bestEdit;
                if (bestEquality2) diffs[pointer + 1][1] = bestEquality2;
                else {
                    diffs.splice(pointer + 1, 1);
                    pointer--;
                }
            }
        }
        pointer++;
    }
}
/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff
 */ function diff_cleanupMerge(diffs, fix_unicode) {
    diffs.push([
        DIFF_EQUAL,
        ""
    ]); // Add a dummy entry at the end.
    var pointer = 0;
    var count_delete = 0;
    var count_insert = 0;
    var text_delete = "";
    var text_insert = "";
    var commonlength;
    while(pointer < diffs.length){
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
            diffs.splice(pointer, 1);
            continue;
        }
        switch(diffs[pointer][0]){
            case DIFF_INSERT:
                count_insert++;
                text_insert += diffs[pointer][1];
                pointer++;
                break;
            case DIFF_DELETE:
                count_delete++;
                text_delete += diffs[pointer][1];
                pointer++;
                break;
            case DIFF_EQUAL:
                var previous_equality = pointer - count_insert - count_delete - 1;
                if (fix_unicode) {
                    // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,
                    // we assume that the old and new text in the diff are complete and correct
                    // unicode-encoded JS strings, but the tuple boundaries may fall between
                    // surrogate pairs.  we fix this by shaving off stray surrogates from the end
                    // of the previous equality and the beginning of this equality.  this may create
                    // empty equalities or a common prefix or suffix.  for example, if AB and AC are
                    // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and
                    // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this
                    // particular case, both equalities go away, we absorb any previous inequalities,
                    // and we keep scanning for the next equality before rewriting the tuples.
                    if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
                        var stray = diffs[previous_equality][1].slice(-1);
                        diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);
                        text_delete = stray + text_delete;
                        text_insert = stray + text_insert;
                        if (!diffs[previous_equality][1]) {
                            // emptied out previous equality, so delete it and include previous delete/insert
                            diffs.splice(previous_equality, 1);
                            pointer--;
                            var k = previous_equality - 1;
                            if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                                count_insert++;
                                text_insert = diffs[k][1] + text_insert;
                                k--;
                            }
                            if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                                count_delete++;
                                text_delete = diffs[k][1] + text_delete;
                                k--;
                            }
                            previous_equality = k;
                        }
                    }
                    if (starts_with_pair_end(diffs[pointer][1])) {
                        var stray = diffs[pointer][1].charAt(0);
                        diffs[pointer][1] = diffs[pointer][1].slice(1);
                        text_delete += stray;
                        text_insert += stray;
                    }
                }
                if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
                    // for empty equality not at end, wait for next equality
                    diffs.splice(pointer, 1);
                    break;
                }
                if (text_delete.length > 0 || text_insert.length > 0) {
                    // note that diff_commonPrefix and diff_commonSuffix are unicode-aware
                    if (text_delete.length > 0 && text_insert.length > 0) {
                        // Factor out any common prefixes.
                        commonlength = diff_commonPrefix(text_insert, text_delete);
                        if (commonlength !== 0) {
                            if (previous_equality >= 0) diffs[previous_equality][1] += text_insert.substring(0, commonlength);
                            else {
                                diffs.splice(0, 0, [
                                    DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)
                                ]);
                                pointer++;
                            }
                            text_insert = text_insert.substring(commonlength);
                            text_delete = text_delete.substring(commonlength);
                        }
                        // Factor out any common suffixes.
                        commonlength = diff_commonSuffix(text_insert, text_delete);
                        if (commonlength !== 0) {
                            diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                            text_insert = text_insert.substring(0, text_insert.length - commonlength);
                            text_delete = text_delete.substring(0, text_delete.length - commonlength);
                        }
                    }
                    // Delete the offending records and add the merged ones.
                    var n = count_insert + count_delete;
                    if (text_delete.length === 0 && text_insert.length === 0) {
                        diffs.splice(pointer - n, n);
                        pointer = pointer - n;
                    } else if (text_delete.length === 0) {
                        diffs.splice(pointer - n, n, [
                            DIFF_INSERT,
                            text_insert
                        ]);
                        pointer = pointer - n + 1;
                    } else if (text_insert.length === 0) {
                        diffs.splice(pointer - n, n, [
                            DIFF_DELETE,
                            text_delete
                        ]);
                        pointer = pointer - n + 1;
                    } else {
                        diffs.splice(pointer - n, n, [
                            DIFF_DELETE,
                            text_delete
                        ], [
                            DIFF_INSERT,
                            text_insert
                        ]);
                        pointer = pointer - n + 2;
                    }
                }
                if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
                    // Merge this equality with the previous one.
                    diffs[pointer - 1][1] += diffs[pointer][1];
                    diffs.splice(pointer, 1);
                } else pointer++;
                count_insert = 0;
                count_delete = 0;
                text_delete = "";
                text_insert = "";
                break;
        }
    }
    if (diffs[diffs.length - 1][1] === "") diffs.pop(); // Remove the dummy entry at the end.
    // Second pass: look for single edits surrounded on both sides by equalities
    // which can be shifted sideways to eliminate an equality.
    // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
    var changes = false;
    pointer = 1;
    // Intentionally ignore the first and last element (don't need checking).
    while(pointer < diffs.length - 1){
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
            // This is a single edit surrounded by equalities.
            if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
                // Shift the edit over the previous equality.
                diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                diffs.splice(pointer - 1, 1);
                changes = true;
            } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
                // Shift the edit over the next equality.
                diffs[pointer - 1][1] += diffs[pointer + 1][1];
                diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                diffs.splice(pointer + 1, 1);
                changes = true;
            }
        }
        pointer++;
    }
    // If shifts were made, the diff needs reordering and another shift sweep.
    if (changes) diff_cleanupMerge(diffs, fix_unicode);
}
function is_surrogate_pair_start(charCode) {
    return charCode >= 0xd800 && charCode <= 0xdbff;
}
function is_surrogate_pair_end(charCode) {
    return charCode >= 0xdc00 && charCode <= 0xdfff;
}
function starts_with_pair_end(str) {
    return is_surrogate_pair_end(str.charCodeAt(0));
}
function ends_with_pair_start(str) {
    return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
}
function remove_empty_tuples(tuples) {
    var ret = [];
    for(var i = 0; i < tuples.length; i++)if (tuples[i][1].length > 0) ret.push(tuples[i]);
    return ret;
}
function make_edit_splice(before, oldMiddle, newMiddle, after) {
    if (ends_with_pair_start(before) || starts_with_pair_end(after)) return null;
    return remove_empty_tuples([
        [
            DIFF_EQUAL,
            before
        ],
        [
            DIFF_DELETE,
            oldMiddle
        ],
        [
            DIFF_INSERT,
            newMiddle
        ],
        [
            DIFF_EQUAL,
            after
        ]
    ]);
}
function find_cursor_edit_diff(oldText, newText, cursor_pos) {
    // note: this runs after equality check has ruled out exact equality
    var oldRange = typeof cursor_pos === "number" ? {
        index: cursor_pos,
        length: 0
    } : cursor_pos.oldRange;
    var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
    // take into account the old and new selection to generate the best diff
    // possible for a text edit.  for example, a text change from "xxx" to "xx"
    // could be a delete or forwards-delete of any one of the x's, or the
    // result of selecting two of the x's and typing "x".
    var oldLength = oldText.length;
    var newLength = newText.length;
    if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
        // see if we have an insert or delete before or after cursor
        var oldCursor = oldRange.index;
        var oldBefore = oldText.slice(0, oldCursor);
        var oldAfter = oldText.slice(oldCursor);
        var maybeNewCursor = newRange ? newRange.index : null;
        editBefore: {
            // is this an insert or delete right before oldCursor?
            var newCursor = oldCursor + newLength - oldLength;
            if (maybeNewCursor !== null && maybeNewCursor !== newCursor) break editBefore;
            if (newCursor < 0 || newCursor > newLength) break editBefore;
            var newBefore = newText.slice(0, newCursor);
            var newAfter = newText.slice(newCursor);
            if (newAfter !== oldAfter) break editBefore;
            var prefixLength = Math.min(oldCursor, newCursor);
            var oldPrefix = oldBefore.slice(0, prefixLength);
            var newPrefix = newBefore.slice(0, prefixLength);
            if (oldPrefix !== newPrefix) break editBefore;
            var oldMiddle = oldBefore.slice(prefixLength);
            var newMiddle = newBefore.slice(prefixLength);
            return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
        }
        editAfter: {
            // is this an insert or delete right after oldCursor?
            if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) break editAfter;
            var cursor = oldCursor;
            var newBefore = newText.slice(0, cursor);
            var newAfter = newText.slice(cursor);
            if (newBefore !== oldBefore) break editAfter;
            var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
            var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
            var newSuffix = newAfter.slice(newAfter.length - suffixLength);
            if (oldSuffix !== newSuffix) break editAfter;
            var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
            var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
            return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
        }
    }
    if (oldRange.length > 0 && newRange && newRange.length === 0) replaceRange: {
        // see if diff could be a splice of the old selection range
        var oldPrefix = oldText.slice(0, oldRange.index);
        var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
        var prefixLength = oldPrefix.length;
        var suffixLength = oldSuffix.length;
        if (newLength < prefixLength + suffixLength) break replaceRange;
        var newPrefix = newText.slice(0, prefixLength);
        var newSuffix = newText.slice(newLength - suffixLength);
        if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) break replaceRange;
        var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
        var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
        return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
    }
    return null;
}
function diff(text1, text2, cursor_pos, cleanup) {
    // only pass fix_unicode=true at the top level, not when diff_main is
    // recursively invoked
    return diff_main(text1, text2, cursor_pos, cleanup, true);
}
diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;
module.exports = diff;

},{}],"i3u1q":[function(require,module,exports,__globalThis) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */ var global = arguments[3];
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', promiseTag = '[object Promise]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */ function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
}
/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */ function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
}
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
    var index = -1, length = array ? array.length : 0;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) break;
    }
    return array;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */ function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array ? array.length : 0;
    if (initAccum && length) accumulator = array[++index];
    while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
    return accumulator;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') try {
        result = !!(value + '');
    } catch (e) {}
    return result;
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, Symbol = root.Symbol, Uint8Array = root.Uint8Array, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, 'DataView'), Map = getNative(root, 'Map'), Promise = getNative(root, 'Promise'), Set = getNative(root, 'Set'), WeakMap = getNative(root, 'WeakMap'), nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) data.push([
        key,
        value
    ]);
    else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    this.__data__ = new ListCache(entries);
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    return this.__data__['delete'](key);
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            return this;
        }
        cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) result.push(key);
    return result;
}
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) object[key] = value;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
}
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */ function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
    if (result !== undefined) return result;
    if (!isObject(value)) return value;
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) return copyArray(value, result);
    } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) return cloneBuffer(value, isDeep);
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            if (isHostObject(value)) return object ? value : {};
            result = initCloneObject(isFunc ? {} : value);
            if (!isDeep) return copySymbols(value, baseAssign(result, value));
        } else {
            if (!cloneableTags[tag]) return object ? value : {};
            result = initCloneByTag(value, tag, baseClone, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) return stacked;
    stack.set(value, result);
    if (!isArr) var props = isFull ? getAllKeys(value) : keys(value);
    arrayEach(props || value, function(subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
    });
    return result;
}
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */ function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    return objectToString.call(value);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) return buffer.slice();
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
}
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */ function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor);
}
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */ function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */ function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor);
}
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */ function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        assignValue(object, key, newValue === undefined ? source[key] : newValue);
    }
    return object;
}
/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : undefined;
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */ function initCloneArray(array) {
    var length = array.length, result = array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return cloneMap(object, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return cloneSet(object, isDeep, cloneFunc);
        case symbolTag:
            return cloneSymbol(object);
    }
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */ function cloneDeep(value) {
    return baseClone(value, true, true);
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = cloneDeep;

},{}],"6emId":[function(require,module,exports,__globalThis) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */ var global = arguments[3];
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', asyncTag = '[object AsyncFunction]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', nullTag = '[object Null]', objectTag = '[object Object]', promiseTag = '[object Promise]', proxyTag = '[object Proxy]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', undefinedTag = '[object Undefined]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, Symbol = root.Symbol, Uint8Array = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, 'DataView'), Map = getNative(root, 'Map'), Promise = getNative(root, 'Promise'), Set = getNative(root, 'Set'), WeakMap = getNative(root, 'WeakMap'), nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) return stacked == other;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) return stacked == other;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) result = false;
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function isEqual(value, other) {
    return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = isEqual;

},{}],"loDhY":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const cloneDeep = require("b357cdbfe773100d");
const isEqual = require("1bd09cce3a37552e");
var AttributeMap;
(function(AttributeMap) {
    function compose(a = {}, b = {}, keepNull = false) {
        if (typeof a !== 'object') a = {};
        if (typeof b !== 'object') b = {};
        let attributes = cloneDeep(b);
        if (!keepNull) attributes = Object.keys(attributes).reduce((copy, key)=>{
            if (attributes[key] != null) copy[key] = attributes[key];
            return copy;
        }, {});
        for(const key in a)if (a[key] !== undefined && b[key] === undefined) attributes[key] = a[key];
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.compose = compose;
    function diff(a = {}, b = {}) {
        if (typeof a !== 'object') a = {};
        if (typeof b !== 'object') b = {};
        const attributes = Object.keys(a).concat(Object.keys(b)).reduce((attrs, key)=>{
            if (!isEqual(a[key], b[key])) attrs[key] = b[key] === undefined ? null : b[key];
            return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.diff = diff;
    function invert(attr = {}, base = {}) {
        attr = attr || {};
        const baseInverted = Object.keys(base).reduce((memo, key)=>{
            if (base[key] !== attr[key] && attr[key] !== undefined) memo[key] = base[key];
            return memo;
        }, {});
        return Object.keys(attr).reduce((memo, key)=>{
            if (attr[key] !== base[key] && base[key] === undefined) memo[key] = null;
            return memo;
        }, baseInverted);
    }
    AttributeMap.invert = invert;
    function transform(a, b, priority = false) {
        if (typeof a !== 'object') return b;
        if (typeof b !== 'object') return undefined;
        if (!priority) return b; // b simply overwrites us without priority
        const attributes = Object.keys(b).reduce((attrs, key)=>{
            if (a[key] === undefined) attrs[key] = b[key]; // null is a valid value
            return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.transform = transform;
})(AttributeMap || (AttributeMap = {}));
exports.default = AttributeMap;

},{"b357cdbfe773100d":"i3u1q","1bd09cce3a37552e":"6emId"}],"lfAwf":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var Op;
(function(Op) {
    function length(op) {
        if (typeof op.delete === 'number') return op.delete;
        else if (typeof op.retain === 'number') return op.retain;
        else if (typeof op.retain === 'object' && op.retain !== null) return 1;
        else return typeof op.insert === 'string' ? op.insert.length : 1;
    }
    Op.length = length;
})(Op || (Op = {}));
exports.default = Op;

},{}],"dwCGi":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const Op_1 = require("d01e6dfe1ea0a484");
class Iterator {
    constructor(ops){
        this.ops = ops;
        this.index = 0;
        this.offset = 0;
    }
    hasNext() {
        return this.peekLength() < Infinity;
    }
    next(length) {
        if (!length) length = Infinity;
        const nextOp = this.ops[this.index];
        if (nextOp) {
            const offset = this.offset;
            const opLength = Op_1.default.length(nextOp);
            if (length >= opLength - offset) {
                length = opLength - offset;
                this.index += 1;
                this.offset = 0;
            } else this.offset += length;
            if (typeof nextOp.delete === 'number') return {
                delete: length
            };
            else {
                const retOp = {};
                if (nextOp.attributes) retOp.attributes = nextOp.attributes;
                if (typeof nextOp.retain === 'number') retOp.retain = length;
                else if (typeof nextOp.retain === 'object' && nextOp.retain !== null) // offset should === 0, length should === 1
                retOp.retain = nextOp.retain;
                else if (typeof nextOp.insert === 'string') retOp.insert = nextOp.insert.substr(offset, length);
                else // offset should === 0, length should === 1
                retOp.insert = nextOp.insert;
                return retOp;
            }
        } else return {
            retain: Infinity
        };
    }
    peek() {
        return this.ops[this.index];
    }
    peekLength() {
        if (this.ops[this.index]) // Should never return 0 if our index is being managed correctly
        return Op_1.default.length(this.ops[this.index]) - this.offset;
        else return Infinity;
    }
    peekType() {
        const op = this.ops[this.index];
        if (op) {
            if (typeof op.delete === 'number') return 'delete';
            else if (typeof op.retain === 'number' || typeof op.retain === 'object' && op.retain !== null) return 'retain';
            else return 'insert';
        }
        return 'retain';
    }
    rest() {
        if (!this.hasNext()) return [];
        else if (this.offset === 0) return this.ops.slice(this.index);
        else {
            const offset = this.offset;
            const index = this.index;
            const next = this.next();
            const rest = this.ops.slice(this.index);
            this.offset = offset;
            this.index = index;
            return [
                next
            ].concat(rest);
        }
    }
}
exports.default = Iterator;

},{"d01e6dfe1ea0a484":"lfAwf"}],"8TZwC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lodashEs = require("lodash-es");
var _parchment = require("parchment");
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _blockJs = require("../blots/block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
var _breakJs = require("../blots/break.js");
var _breakJsDefault = parcelHelpers.interopDefault(_breakJs);
var _cursorJs = require("../blots/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _textJs = require("../blots/text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _selectionJs = require("./selection.js");
const ASCII = /^[ -~]*$/;
class Editor {
    constructor(scroll){
        this.scroll = scroll;
        this.delta = this.getDelta();
    }
    applyDelta(delta) {
        this.scroll.update();
        let scrollLength = this.scroll.length();
        this.scroll.batchStart();
        const normalizedDelta = normalizeDelta(delta);
        const deleteDelta = new (0, _quillDeltaDefault.default)();
        const normalizedOps = splitOpLines(normalizedDelta.ops.slice());
        normalizedOps.reduce((index, op)=>{
            const length = (0, _quillDelta.Op).length(op);
            let attributes = op.attributes || {};
            let isImplicitNewlinePrepended = false;
            let isImplicitNewlineAppended = false;
            if (op.insert != null) {
                deleteDelta.retain(length);
                if (typeof op.insert === 'string') {
                    const text = op.insert;
                    isImplicitNewlineAppended = !text.endsWith('\n') && (scrollLength <= index || !!this.scroll.descendant((0, _blockJs.BlockEmbed), index)[0]);
                    this.scroll.insertAt(index, text);
                    const [line, offset] = this.scroll.line(index);
                    let formats = (0, _lodashEs.merge)({}, (0, _blockJs.bubbleFormats)(line));
                    if (line instanceof (0, _blockJsDefault.default)) {
                        const [leaf] = line.descendant((0, _parchment.LeafBlot), offset);
                        if (leaf) formats = (0, _lodashEs.merge)(formats, (0, _blockJs.bubbleFormats)(leaf));
                    }
                    attributes = (0, _quillDelta.AttributeMap).diff(formats, attributes) || {};
                } else if (typeof op.insert === 'object') {
                    const key = Object.keys(op.insert)[0]; // There should only be one key
                    if (key == null) return index;
                    const isInlineEmbed = this.scroll.query(key, (0, _parchment.Scope).INLINE) != null;
                    if (isInlineEmbed) {
                        if (scrollLength <= index || !!this.scroll.descendant((0, _blockJs.BlockEmbed), index)[0]) isImplicitNewlineAppended = true;
                    } else if (index > 0) {
                        const [leaf, offset] = this.scroll.descendant((0, _parchment.LeafBlot), index - 1);
                        if (leaf instanceof (0, _textJsDefault.default)) {
                            const text = leaf.value();
                            if (text[offset] !== '\n') isImplicitNewlinePrepended = true;
                        } else if (leaf instanceof (0, _parchment.EmbedBlot) && leaf.statics.scope === (0, _parchment.Scope).INLINE_BLOT) isImplicitNewlinePrepended = true;
                    }
                    this.scroll.insertAt(index, key, op.insert[key]);
                    if (isInlineEmbed) {
                        const [leaf] = this.scroll.descendant((0, _parchment.LeafBlot), index);
                        if (leaf) {
                            const formats = (0, _lodashEs.merge)({}, (0, _blockJs.bubbleFormats)(leaf));
                            attributes = (0, _quillDelta.AttributeMap).diff(formats, attributes) || {};
                        }
                    }
                }
                scrollLength += length;
            } else {
                deleteDelta.push(op);
                if (op.retain !== null && typeof op.retain === 'object') {
                    const key = Object.keys(op.retain)[0];
                    if (key == null) return index;
                    this.scroll.updateEmbedAt(index, key, op.retain[key]);
                }
            }
            Object.keys(attributes).forEach((name)=>{
                this.scroll.formatAt(index, length, name, attributes[name]);
            });
            const prependedLength = isImplicitNewlinePrepended ? 1 : 0;
            const addedLength = isImplicitNewlineAppended ? 1 : 0;
            scrollLength += prependedLength + addedLength;
            deleteDelta.retain(prependedLength);
            deleteDelta.delete(addedLength);
            return index + length + prependedLength + addedLength;
        }, 0);
        deleteDelta.reduce((index, op)=>{
            if (typeof op.delete === 'number') {
                this.scroll.deleteAt(index, op.delete);
                return index;
            }
            return index + (0, _quillDelta.Op).length(op);
        }, 0);
        this.scroll.batchEnd();
        this.scroll.optimize();
        return this.update(normalizedDelta);
    }
    deleteText(index, length) {
        this.scroll.deleteAt(index, length);
        return this.update(new (0, _quillDeltaDefault.default)().retain(index).delete(length));
    }
    formatLine(index, length) {
        let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        this.scroll.update();
        Object.keys(formats).forEach((format)=>{
            this.scroll.lines(index, Math.max(length, 1)).forEach((line)=>{
                line.format(format, formats[format]);
            });
        });
        this.scroll.optimize();
        const delta = new (0, _quillDeltaDefault.default)().retain(index).retain(length, (0, _lodashEs.cloneDeep)(formats));
        return this.update(delta);
    }
    formatText(index, length) {
        let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        Object.keys(formats).forEach((format)=>{
            this.scroll.formatAt(index, length, format, formats[format]);
        });
        const delta = new (0, _quillDeltaDefault.default)().retain(index).retain(length, (0, _lodashEs.cloneDeep)(formats));
        return this.update(delta);
    }
    getContents(index, length) {
        return this.delta.slice(index, index + length);
    }
    getDelta() {
        return this.scroll.lines().reduce((delta, line)=>{
            return delta.concat(line.delta());
        }, new (0, _quillDeltaDefault.default)());
    }
    getFormat(index) {
        let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        let lines = [];
        let leaves = [];
        if (length === 0) this.scroll.path(index).forEach((path)=>{
            const [blot] = path;
            if (blot instanceof (0, _blockJsDefault.default)) lines.push(blot);
            else if (blot instanceof (0, _parchment.LeafBlot)) leaves.push(blot);
        });
        else {
            lines = this.scroll.lines(index, length);
            leaves = this.scroll.descendants((0, _parchment.LeafBlot), index, length);
        }
        const [lineFormats, leafFormats] = [
            lines,
            leaves
        ].map((blots)=>{
            const blot = blots.shift();
            if (blot == null) return {};
            let formats = (0, _blockJs.bubbleFormats)(blot);
            while(Object.keys(formats).length > 0){
                const blot = blots.shift();
                if (blot == null) return formats;
                formats = combineFormats((0, _blockJs.bubbleFormats)(blot), formats);
            }
            return formats;
        });
        return {
            ...lineFormats,
            ...leafFormats
        };
    }
    getHTML(index, length) {
        const [line, lineOffset] = this.scroll.line(index);
        if (line) {
            const lineLength = line.length();
            const isWithinLine = line.length() >= lineOffset + length;
            if (isWithinLine && !(lineOffset === 0 && length === lineLength)) return convertHTML(line, lineOffset, length, true);
            return convertHTML(this.scroll, index, length, true);
        }
        return '';
    }
    getText(index, length) {
        return this.getContents(index, length).filter((op)=>typeof op.insert === 'string').map((op)=>op.insert).join('');
    }
    insertContents(index, contents) {
        const normalizedDelta = normalizeDelta(contents);
        const change = new (0, _quillDeltaDefault.default)().retain(index).concat(normalizedDelta);
        this.scroll.insertContents(index, normalizedDelta);
        return this.update(change);
    }
    insertEmbed(index, embed, value) {
        this.scroll.insertAt(index, embed, value);
        return this.update(new (0, _quillDeltaDefault.default)().retain(index).insert({
            [embed]: value
        }));
    }
    insertText(index, text) {
        let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        this.scroll.insertAt(index, text);
        Object.keys(formats).forEach((format)=>{
            this.scroll.formatAt(index, text.length, format, formats[format]);
        });
        return this.update(new (0, _quillDeltaDefault.default)().retain(index).insert(text, (0, _lodashEs.cloneDeep)(formats)));
    }
    isBlank() {
        if (this.scroll.children.length === 0) return true;
        if (this.scroll.children.length > 1) return false;
        const blot = this.scroll.children.head;
        if (blot?.statics.blotName !== (0, _blockJsDefault.default).blotName) return false;
        const block = blot;
        if (block.children.length > 1) return false;
        return block.children.head instanceof (0, _breakJsDefault.default);
    }
    removeFormat(index, length) {
        const text = this.getText(index, length);
        const [line, offset] = this.scroll.line(index + length);
        let suffixLength = 0;
        let suffix = new (0, _quillDeltaDefault.default)();
        if (line != null) {
            suffixLength = line.length() - offset;
            suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
        }
        const contents = this.getContents(index, length + suffixLength);
        const diff = contents.diff(new (0, _quillDeltaDefault.default)().insert(text).concat(suffix));
        const delta = new (0, _quillDeltaDefault.default)().retain(index).concat(diff);
        return this.applyDelta(delta);
    }
    update(change) {
        let mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        let selectionInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        const oldDelta = this.delta;
        if (mutations.length === 1 && mutations[0].type === 'characterData' && // @ts-expect-error Fix me later
        mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {
            // Optimization for character changes
            const textBlot = this.scroll.find(mutations[0].target);
            const formats = (0, _blockJs.bubbleFormats)(textBlot);
            const index = textBlot.offset(this.scroll);
            // @ts-expect-error Fix me later
            const oldValue = mutations[0].oldValue.replace((0, _cursorJsDefault.default).CONTENTS, '');
            const oldText = new (0, _quillDeltaDefault.default)().insert(oldValue);
            // @ts-expect-error
            const newText = new (0, _quillDeltaDefault.default)().insert(textBlot.value());
            const relativeSelectionInfo = selectionInfo && {
                oldRange: shiftRange(selectionInfo.oldRange, -index),
                newRange: shiftRange(selectionInfo.newRange, -index)
            };
            const diffDelta = new (0, _quillDeltaDefault.default)().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));
            change = diffDelta.reduce((delta, op)=>{
                if (op.insert) return delta.insert(op.insert, formats);
                return delta.push(op);
            }, new (0, _quillDeltaDefault.default)());
            this.delta = oldDelta.compose(change);
        } else {
            this.delta = this.getDelta();
            if (!change || !(0, _lodashEs.isEqual)(oldDelta.compose(change), this.delta)) change = oldDelta.diff(this.delta, selectionInfo);
        }
        return change;
    }
}
function convertListHTML(items, lastIndent, types) {
    if (items.length === 0) {
        const [endTag] = getListType(types.pop());
        if (lastIndent <= 0) return `</li></${endTag}>`;
        return `</li></${endTag}>${convertListHTML([], lastIndent - 1, types)}`;
    }
    const [{ child, offset, length, indent, type }, ...rest] = items;
    const [tag, attribute] = getListType(type);
    if (indent > lastIndent) {
        types.push(type);
        if (indent === lastIndent + 1) return `<${tag}><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;
        return `<${tag}><li>${convertListHTML(items, lastIndent + 1, types)}`;
    }
    const previousType = types[types.length - 1];
    if (indent === lastIndent && type === previousType) return `</li><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;
    const [endTag] = getListType(types.pop());
    return `</li></${endTag}>${convertListHTML(items, lastIndent - 1, types)}`;
}
function convertHTML(blot, index, length) {
    let isRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if ('html' in blot && typeof blot.html === 'function') return blot.html(index, length);
    if (blot instanceof (0, _textJsDefault.default)) {
        const escapedText = (0, _textJs.escapeText)(blot.value().slice(index, index + length));
        return escapedText.replaceAll(' ', '&nbsp;');
    }
    if (blot instanceof (0, _parchment.ParentBlot)) {
        // TODO fix API
        if (blot.statics.blotName === 'list-container') {
            const items = [];
            blot.children.forEachAt(index, length, (child, offset, childLength)=>{
                const formats = 'formats' in child && typeof child.formats === 'function' ? child.formats() : {};
                items.push({
                    child,
                    offset,
                    length: childLength,
                    indent: formats.indent || 0,
                    type: formats.list
                });
            });
            return convertListHTML(items, -1, []);
        }
        const parts = [];
        blot.children.forEachAt(index, length, (child, offset, childLength)=>{
            parts.push(convertHTML(child, offset, childLength));
        });
        if (isRoot || blot.statics.blotName === 'list') return parts.join('');
        const { outerHTML, innerHTML } = blot.domNode;
        const [start, end] = outerHTML.split(`>${innerHTML}<`);
        // TODO cleanup
        if (start === '<table') return `<table style="border: 1px solid #000;">${parts.join('')}<${end}`;
        return `${start}>${parts.join('')}<${end}`;
    }
    return blot.domNode instanceof Element ? blot.domNode.outerHTML : '';
}
function combineFormats(formats, combined) {
    return Object.keys(combined).reduce((merged, name)=>{
        if (formats[name] == null) return merged;
        const combinedValue = combined[name];
        if (combinedValue === formats[name]) merged[name] = combinedValue;
        else if (Array.isArray(combinedValue)) {
            if (combinedValue.indexOf(formats[name]) < 0) merged[name] = combinedValue.concat([
                formats[name]
            ]);
            else // If style already exists, don't add to an array, but don't lose other styles
            merged[name] = combinedValue;
        } else merged[name] = [
            combinedValue,
            formats[name]
        ];
        return merged;
    }, {});
}
function getListType(type) {
    const tag = type === 'ordered' ? 'ol' : 'ul';
    switch(type){
        case 'checked':
            return [
                tag,
                ' data-list="checked"'
            ];
        case 'unchecked':
            return [
                tag,
                ' data-list="unchecked"'
            ];
        default:
            return [
                tag,
                ''
            ];
    }
}
function normalizeDelta(delta) {
    return delta.reduce((normalizedDelta, op)=>{
        if (typeof op.insert === 'string') {
            const text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
            return normalizedDelta.insert(text, op.attributes);
        }
        return normalizedDelta.push(op);
    }, new (0, _quillDeltaDefault.default)());
}
function shiftRange(_ref, amount) {
    let { index, length } = _ref;
    return new (0, _selectionJs.Range)(index + amount, length);
}
function splitOpLines(ops) {
    const split = [];
    ops.forEach((op)=>{
        if (typeof op.insert === 'string') {
            const lines = op.insert.split('\n');
            lines.forEach((line, index)=>{
                if (index) split.push({
                    insert: '\n',
                    attributes: op.attributes
                });
                if (line) split.push({
                    insert: line,
                    attributes: op.attributes
                });
            });
        } else split.push(op);
    });
    return split;
}
exports.default = Editor;

},{"lodash-es":"bXNwz","parchment":"1ObrB","quill-delta":"fqWT0","../blots/block.js":"5b8eX","../blots/break.js":"afL9w","../blots/cursor.js":"i9zqb","../blots/text.js":"cZig3","./selection.js":"fL5TU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5b8eX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blockDelta", ()=>blockDelta);
parcelHelpers.export(exports, "bubbleFormats", ()=>bubbleFormats);
parcelHelpers.export(exports, "BlockEmbed", ()=>BlockEmbed);
parcelHelpers.export(exports, "default", ()=>Block);
var _parchment = require("parchment");
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _breakJs = require("./break.js");
var _breakJsDefault = parcelHelpers.interopDefault(_breakJs);
var _inlineJs = require("./inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
const NEWLINE_LENGTH = 1;
class Block extends (0, _parchment.BlockBlot) {
    cache = {};
    delta() {
        if (this.cache.delta == null) this.cache.delta = blockDelta(this);
        return this.cache.delta;
    }
    deleteAt(index, length) {
        super.deleteAt(index, length);
        this.cache = {};
    }
    formatAt(index, length, name, value) {
        if (length <= 0) return;
        if (this.scroll.query(name, (0, _parchment.Scope).BLOCK)) {
            if (index + length === this.length()) this.format(name, value);
        } else super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);
        this.cache = {};
    }
    insertAt(index, value, def) {
        if (def != null) {
            super.insertAt(index, value, def);
            this.cache = {};
            return;
        }
        if (value.length === 0) return;
        const lines = value.split('\n');
        const text = lines.shift();
        if (text.length > 0) {
            if (index < this.length() - 1 || this.children.tail == null) super.insertAt(Math.min(index, this.length() - 1), text);
            else this.children.tail.insertAt(this.children.tail.length(), text);
            this.cache = {};
        }
        // TODO: Fix this next time the file is edited.
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let block = this;
        lines.reduce((lineIndex, line)=>{
            // @ts-expect-error Fix me later
            block = block.split(lineIndex, true);
            block.insertAt(0, line);
            return line.length;
        }, index + text.length);
    }
    insertBefore(blot, ref) {
        const { head } = this.children;
        super.insertBefore(blot, ref);
        if (head instanceof (0, _breakJsDefault.default)) head.remove();
        this.cache = {};
    }
    length() {
        if (this.cache.length == null) this.cache.length = super.length() + NEWLINE_LENGTH;
        return this.cache.length;
    }
    moveChildren(target, ref) {
        super.moveChildren(target, ref);
        this.cache = {};
    }
    optimize(context) {
        super.optimize(context);
        this.cache = {};
    }
    path(index) {
        return super.path(index, true);
    }
    removeChild(child) {
        super.removeChild(child);
        this.cache = {};
    }
    split(index) {
        let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
            const clone = this.clone();
            if (index === 0) {
                this.parent.insertBefore(clone, this);
                return this;
            }
            this.parent.insertBefore(clone, this.next);
            return clone;
        }
        const next = super.split(index, force);
        this.cache = {};
        return next;
    }
}
Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = (0, _breakJsDefault.default);
Block.allowedChildren = [
    (0, _breakJsDefault.default),
    (0, _inlineJsDefault.default),
    (0, _parchment.EmbedBlot),
    (0, _textJsDefault.default)
];
class BlockEmbed extends (0, _parchment.EmbedBlot) {
    attach() {
        super.attach();
        this.attributes = new (0, _parchment.AttributorStore)(this.domNode);
    }
    delta() {
        return new (0, _quillDeltaDefault.default)().insert(this.value(), {
            ...this.formats(),
            ...this.attributes.values()
        });
    }
    format(name, value) {
        const attribute = this.scroll.query(name, (0, _parchment.Scope).BLOCK_ATTRIBUTE);
        if (attribute != null) // @ts-expect-error TODO: Scroll#query() should return Attributor when scope is attribute
        this.attributes.attribute(attribute, value);
    }
    formatAt(index, length, name, value) {
        this.format(name, value);
    }
    insertAt(index, value, def) {
        if (def != null) {
            super.insertAt(index, value, def);
            return;
        }
        const lines = value.split('\n');
        const text = lines.pop();
        const blocks = lines.map((line)=>{
            const block = this.scroll.create(Block.blotName);
            block.insertAt(0, line);
            return block;
        });
        const ref = this.split(index);
        blocks.forEach((block)=>{
            this.parent.insertBefore(block, ref);
        });
        if (text) this.parent.insertBefore(this.scroll.create('text', text), ref);
    }
}
BlockEmbed.scope = (0, _parchment.Scope).BLOCK_BLOT;
// It is important for cursor behavior BlockEmbeds use tags that are block level elements
function blockDelta(blot) {
    let filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return blot.descendants((0, _parchment.LeafBlot)).reduce((delta, leaf)=>{
        if (leaf.length() === 0) return delta;
        return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));
    }, new (0, _quillDeltaDefault.default)()).insert('\n', bubbleFormats(blot));
}
function bubbleFormats(blot) {
    let formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (blot == null) return formats;
    if ('formats' in blot && typeof blot.formats === 'function') {
        formats = {
            ...formats,
            ...blot.formats()
        };
        if (filter) // exclude syntax highlighting from deltas and getFormat()
        delete formats['code-token'];
    }
    if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) return formats;
    return bubbleFormats(blot.parent, formats, filter);
}

},{"parchment":"1ObrB","quill-delta":"fqWT0","./break.js":"afL9w","./inline.js":"jTd5u","./text.js":"cZig3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"afL9w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
class Break extends (0, _parchment.EmbedBlot) {
    static value() {
        return undefined;
    }
    optimize() {
        if (this.prev || this.next) this.remove();
    }
    length() {
        return 0;
    }
    value() {
        return '';
    }
}
Break.blotName = 'break';
Break.tagName = 'BR';
exports.default = Break;

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jTd5u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
var _breakJs = require("./break.js");
var _breakJsDefault = parcelHelpers.interopDefault(_breakJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
class Inline extends (0, _parchment.InlineBlot) {
    static allowedChildren = [
        Inline,
        (0, _breakJsDefault.default),
        (0, _parchment.EmbedBlot),
        (0, _textJsDefault.default)
    ];
    // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
    static order = [
        'cursor',
        'inline',
        // Must be lower
        'link',
        // Chrome wants <a> to be lower
        'underline',
        'strike',
        'italic',
        'bold',
        'script',
        'code' // Must be higher
    ];
    static compare(self, other) {
        const selfIndex = Inline.order.indexOf(self);
        const otherIndex = Inline.order.indexOf(other);
        if (selfIndex >= 0 || otherIndex >= 0) return selfIndex - otherIndex;
        if (self === other) return 0;
        if (self < other) return -1;
        return 1;
    }
    formatAt(index, length, name, value) {
        if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, (0, _parchment.Scope).BLOT)) {
            const blot = this.isolate(index, length);
            if (value) blot.wrap(name, value);
        } else super.formatAt(index, length, name, value);
    }
    optimize(context) {
        super.optimize(context);
        if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
            const parent = this.parent.isolate(this.offset(), this.length());
            // @ts-expect-error TODO: make isolate generic
            this.moveChildren(parent);
            parent.wrap(this);
        }
    }
}
exports.default = Inline;

},{"parchment":"1ObrB","./break.js":"afL9w","./text.js":"cZig3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cZig3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Text);
parcelHelpers.export(exports, "escapeText", ()=>escapeText);
var _parchment = require("parchment");
class Text extends (0, _parchment.TextBlot) {
}
// https://lodash.com/docs#escape
const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};
function escapeText(text) {
    return text.replace(/[&<>"']/g, (s)=>entityMap[s]);
}

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9zqb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
class Cursor extends (0, _parchment.EmbedBlot) {
    static blotName = 'cursor';
    static className = 'ql-cursor';
    static tagName = 'span';
    static CONTENTS = '\uFEFF';
    static value() {
        return undefined;
    }
    constructor(scroll, domNode, selection){
        super(scroll, domNode);
        this.selection = selection;
        this.textNode = document.createTextNode(Cursor.CONTENTS);
        this.domNode.appendChild(this.textNode);
        this.savedLength = 0;
    }
    detach() {
        // super.detach() will also clear domNode.__blot
        if (this.parent != null) this.parent.removeChild(this);
    }
    format(name, value) {
        if (this.savedLength !== 0) {
            super.format(name, value);
            return;
        }
        // TODO: Fix this next time the file is edited.
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let target = this;
        let index = 0;
        while(target != null && target.statics.scope !== (0, _parchment.Scope).BLOCK_BLOT){
            index += target.offset(target.parent);
            target = target.parent;
        }
        if (target != null) {
            this.savedLength = Cursor.CONTENTS.length;
            // @ts-expect-error TODO: allow empty context in Parchment
            target.optimize();
            target.formatAt(index, Cursor.CONTENTS.length, name, value);
            this.savedLength = 0;
        }
    }
    index(node, offset) {
        if (node === this.textNode) return 0;
        return super.index(node, offset);
    }
    length() {
        return this.savedLength;
    }
    position() {
        return [
            this.textNode,
            this.textNode.data.length
        ];
    }
    remove() {
        super.remove();
        // @ts-expect-error Fix me later
        this.parent = null;
    }
    restore() {
        if (this.selection.composing || this.parent == null) return null;
        const range = this.selection.getNativeRange();
        // Browser may push down styles/nodes inside the cursor blot.
        // https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#push-down-values
        while(this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode)// @ts-expect-error Fix me later
        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
        const prevTextBlot = this.prev instanceof (0, _textJsDefault.default) ? this.prev : null;
        const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;
        const nextTextBlot = this.next instanceof (0, _textJsDefault.default) ? this.next : null;
        // @ts-expect-error TODO: make TextBlot.text public
        const nextText = nextTextBlot ? nextTextBlot.text : '';
        const { textNode } = this;
        // take text from inside this blot and reset it
        const newText = textNode.data.split(Cursor.CONTENTS).join('');
        textNode.data = Cursor.CONTENTS;
        // proactively merge TextBlots around cursor so that optimization
        // doesn't lose the cursor.  the reason we are here in cursor.restore
        // could be that the user clicked in prevTextBlot or nextTextBlot, or
        // the user typed something.
        let mergedTextBlot;
        if (prevTextBlot) {
            mergedTextBlot = prevTextBlot;
            if (newText || nextTextBlot) {
                prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);
                if (nextTextBlot) nextTextBlot.remove();
            }
        } else if (nextTextBlot) {
            mergedTextBlot = nextTextBlot;
            nextTextBlot.insertAt(0, newText);
        } else {
            const newTextNode = document.createTextNode(newText);
            mergedTextBlot = this.scroll.create(newTextNode);
            this.parent.insertBefore(mergedTextBlot, this);
        }
        this.remove();
        if (range) {
            // calculate selection to restore
            const remapOffset = (node, offset)=>{
                if (prevTextBlot && node === prevTextBlot.domNode) return offset;
                if (node === textNode) return prevTextLength + offset - 1;
                if (nextTextBlot && node === nextTextBlot.domNode) return prevTextLength + newText.length + offset;
                return null;
            };
            const start = remapOffset(range.start.node, range.start.offset);
            const end = remapOffset(range.end.node, range.end.offset);
            if (start !== null && end !== null) return {
                startNode: mergedTextBlot.domNode,
                startOffset: start,
                endNode: mergedTextBlot.domNode,
                endOffset: end
            };
        }
        return null;
    }
    update(mutations, context) {
        if (mutations.some((mutation)=>{
            return mutation.type === 'characterData' && mutation.target === this.textNode;
        })) {
            const range = this.restore();
            if (range) context.range = range;
        }
    }
    // Avoid .ql-cursor being a descendant of `<a/>`.
    // The reason is Safari pushes down `<a/>` on text insertion.
    // That will cause DOM nodes not sync with the model.
    //
    // For example ({I} is the caret), given the markup:
    //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
    // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
    //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
    // And then "x" will be inserted after `<a/>`:
    //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
    optimize(context) {
        // @ts-expect-error Fix me later
        super.optimize(context);
        let { parent } = this;
        while(parent){
            if (parent.domNode.tagName === 'A') {
                this.savedLength = Cursor.CONTENTS.length;
                // @ts-expect-error TODO: make isolate generic
                parent.isolate(this.offset(parent), this.length()).unwrap();
                this.savedLength = 0;
                break;
            }
            parent = parent.parent;
        }
    }
    value() {
        return '';
    }
}
exports.default = Cursor;

},{"parchment":"1ObrB","./text.js":"cZig3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fL5TU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Range", ()=>Range);
var _parchment = require("parchment");
var _lodashEs = require("lodash-es");
var _emitterJs = require("./emitter.js");
var _emitterJsDefault = parcelHelpers.interopDefault(_emitterJs);
var _loggerJs = require("./logger.js");
var _loggerJsDefault = parcelHelpers.interopDefault(_loggerJs);
const debug = (0, _loggerJsDefault.default)('quill:selection');
class Range {
    constructor(index){
        let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.index = index;
        this.length = length;
    }
}
class Selection {
    constructor(scroll, emitter){
        this.emitter = emitter;
        this.scroll = scroll;
        this.composing = false;
        this.mouseDown = false;
        this.root = this.scroll.domNode;
        // @ts-expect-error
        this.cursor = this.scroll.create('cursor', this);
        // savedRange is last non-null range
        this.savedRange = new Range(0, 0);
        this.lastRange = this.savedRange;
        this.lastNative = null;
        this.handleComposition();
        this.handleDragging();
        this.emitter.listenDOM('selectionchange', document, ()=>{
            if (!this.mouseDown && !this.composing) setTimeout(this.update.bind(this, (0, _emitterJsDefault.default).sources.USER), 1);
        });
        this.emitter.on((0, _emitterJsDefault.default).events.SCROLL_BEFORE_UPDATE, ()=>{
            if (!this.hasFocus()) return;
            const native = this.getNativeRange();
            if (native == null) return;
            if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle
            this.emitter.once((0, _emitterJsDefault.default).events.SCROLL_UPDATE, (source, mutations)=>{
                try {
                    if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
                    const triggeredByTyping = mutations.some((mutation)=>mutation.type === 'characterData' || mutation.type === 'childList' || mutation.type === 'attributes' && mutation.target === this.root);
                    this.update(triggeredByTyping ? (0, _emitterJsDefault.default).sources.SILENT : source);
                } catch (ignored) {
                // ignore
                }
            });
        });
        this.emitter.on((0, _emitterJsDefault.default).events.SCROLL_OPTIMIZE, (mutations, context)=>{
            if (context.range) {
                const { startNode, startOffset, endNode, endOffset } = context.range;
                this.setNativeRange(startNode, startOffset, endNode, endOffset);
                this.update((0, _emitterJsDefault.default).sources.SILENT);
            }
        });
        this.update((0, _emitterJsDefault.default).sources.SILENT);
    }
    handleComposition() {
        this.emitter.on((0, _emitterJsDefault.default).events.COMPOSITION_BEFORE_START, ()=>{
            this.composing = true;
        });
        this.emitter.on((0, _emitterJsDefault.default).events.COMPOSITION_END, ()=>{
            this.composing = false;
            if (this.cursor.parent) {
                const range = this.cursor.restore();
                if (!range) return;
                setTimeout(()=>{
                    this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
                }, 1);
            }
        });
    }
    handleDragging() {
        this.emitter.listenDOM('mousedown', document.body, ()=>{
            this.mouseDown = true;
        });
        this.emitter.listenDOM('mouseup', document.body, ()=>{
            this.mouseDown = false;
            this.update((0, _emitterJsDefault.default).sources.USER);
        });
    }
    focus() {
        if (this.hasFocus()) return;
        this.root.focus({
            preventScroll: true
        });
        this.setRange(this.savedRange);
    }
    format(format, value) {
        this.scroll.update();
        const nativeRange = this.getNativeRange();
        if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, (0, _parchment.Scope).BLOCK)) return;
        if (nativeRange.start.node !== this.cursor.textNode) {
            const blot = this.scroll.find(nativeRange.start.node, false);
            if (blot == null) return;
            // TODO Give blot ability to not split
            if (blot instanceof (0, _parchment.LeafBlot)) {
                const after = blot.split(nativeRange.start.offset);
                blot.parent.insertBefore(this.cursor, after);
            } else // @ts-expect-error TODO: nativeRange.start.node doesn't seem to match function signature
            blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
            this.cursor.attach();
        }
        this.cursor.format(format, value);
        this.scroll.optimize();
        this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
        this.update();
    }
    getBounds(index) {
        let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        const scrollLength = this.scroll.length();
        index = Math.min(index, scrollLength - 1);
        length = Math.min(index + length, scrollLength - 1) - index;
        let node;
        let [leaf, offset] = this.scroll.leaf(index);
        if (leaf == null) return null;
        if (length > 0 && offset === leaf.length()) {
            const [next] = this.scroll.leaf(index + 1);
            if (next) {
                const [line] = this.scroll.line(index);
                const [nextLine] = this.scroll.line(index + 1);
                if (line === nextLine) {
                    leaf = next;
                    offset = 0;
                }
            }
        }
        [node, offset] = leaf.position(offset, true);
        const range = document.createRange();
        if (length > 0) {
            range.setStart(node, offset);
            [leaf, offset] = this.scroll.leaf(index + length);
            if (leaf == null) return null;
            [node, offset] = leaf.position(offset, true);
            range.setEnd(node, offset);
            return range.getBoundingClientRect();
        }
        let side = 'left';
        let rect;
        if (node instanceof Text) {
            // Return null if the text node is empty because it is
            // not able to get a useful client rect:
            // https://github.com/w3c/csswg-drafts/issues/2514.
            // Empty text nodes are most likely caused by TextBlot#optimize()
            // not getting called when editor content changes.
            if (!node.data.length) return null;
            if (offset < node.data.length) {
                range.setStart(node, offset);
                range.setEnd(node, offset + 1);
            } else {
                range.setStart(node, offset - 1);
                range.setEnd(node, offset);
                side = 'right';
            }
            rect = range.getBoundingClientRect();
        } else {
            if (!(leaf.domNode instanceof Element)) return null;
            rect = leaf.domNode.getBoundingClientRect();
            if (offset > 0) side = 'right';
        }
        return {
            bottom: rect.top + rect.height,
            height: rect.height,
            left: rect[side],
            right: rect[side],
            top: rect.top,
            width: 0
        };
    }
    getNativeRange() {
        const selection = document.getSelection();
        if (selection == null || selection.rangeCount <= 0) return null;
        const nativeRange = selection.getRangeAt(0);
        if (nativeRange == null) return null;
        const range = this.normalizeNative(nativeRange);
        debug.info('getNativeRange', range);
        return range;
    }
    getRange() {
        const root = this.scroll.domNode;
        if ('isConnected' in root && !root.isConnected) // document.getSelection() forces layout on Blink, so we trend to
        // not calling it.
        return [
            null,
            null
        ];
        const normalized = this.getNativeRange();
        if (normalized == null) return [
            null,
            null
        ];
        const range = this.normalizedToRange(normalized);
        return [
            range,
            normalized
        ];
    }
    hasFocus() {
        return document.activeElement === this.root || document.activeElement != null && contains(this.root, document.activeElement);
    }
    normalizedToRange(range) {
        const positions = [
            [
                range.start.node,
                range.start.offset
            ]
        ];
        if (!range.native.collapsed) positions.push([
            range.end.node,
            range.end.offset
        ]);
        const indexes = positions.map((position)=>{
            const [node, offset] = position;
            const blot = this.scroll.find(node, true);
            // @ts-expect-error Fix me later
            const index = blot.offset(this.scroll);
            if (offset === 0) return index;
            if (blot instanceof (0, _parchment.LeafBlot)) return index + blot.index(node, offset);
            // @ts-expect-error Fix me later
            return index + blot.length();
        });
        const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);
        const start = Math.min(end, ...indexes);
        return new Range(start, end - start);
    }
    normalizeNative(nativeRange) {
        if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) return null;
        const range = {
            start: {
                node: nativeRange.startContainer,
                offset: nativeRange.startOffset
            },
            end: {
                node: nativeRange.endContainer,
                offset: nativeRange.endOffset
            },
            native: nativeRange
        };
        [
            range.start,
            range.end
        ].forEach((position)=>{
            let { node, offset } = position;
            while(!(node instanceof Text) && node.childNodes.length > 0){
                if (node.childNodes.length > offset) {
                    node = node.childNodes[offset];
                    offset = 0;
                } else if (node.childNodes.length === offset) {
                    // @ts-expect-error Fix me later
                    node = node.lastChild;
                    if (node instanceof Text) offset = node.data.length;
                    else if (node.childNodes.length > 0) // Container case
                    offset = node.childNodes.length;
                    else // Embed case
                    offset = node.childNodes.length + 1;
                } else break;
            }
            position.node = node;
            position.offset = offset;
        });
        return range;
    }
    rangeToNative(range) {
        const scrollLength = this.scroll.length();
        const getPosition = (index, inclusive)=>{
            index = Math.min(scrollLength - 1, index);
            const [leaf, leafOffset] = this.scroll.leaf(index);
            return leaf ? leaf.position(leafOffset, inclusive) : [
                null,
                -1
            ];
        };
        return [
            ...getPosition(range.index, false),
            ...getPosition(range.index + range.length, true)
        ];
    }
    setNativeRange(startNode, startOffset) {
        let endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
        let endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
        let force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
        if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || // @ts-expect-error Fix me later
        endNode.parentNode == null)) return;
        const selection = document.getSelection();
        if (selection == null) return;
        if (startNode != null) {
            if (!this.hasFocus()) this.root.focus({
                preventScroll: true
            });
            const { native } = this.getNativeRange() || {};
            if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
                if (startNode instanceof Element && startNode.tagName === 'BR') {
                    // @ts-expect-error Fix me later
                    startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);
                    startNode = startNode.parentNode;
                }
                if (endNode instanceof Element && endNode.tagName === 'BR') {
                    // @ts-expect-error Fix me later
                    endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);
                    endNode = endNode.parentNode;
                }
                const range = document.createRange();
                // @ts-expect-error Fix me later
                range.setStart(startNode, startOffset);
                // @ts-expect-error Fix me later
                range.setEnd(endNode, endOffset);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        } else {
            selection.removeAllRanges();
            this.root.blur();
        }
    }
    setRange(range) {
        let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _emitterJsDefault.default).sources.API;
        if (typeof force === 'string') {
            source = force;
            force = false;
        }
        debug.info('setRange', range);
        if (range != null) {
            const args = this.rangeToNative(range);
            this.setNativeRange(...args, force);
        } else this.setNativeRange(null);
        this.update(source);
    }
    update() {
        let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _emitterJsDefault.default).sources.USER;
        const oldRange = this.lastRange;
        const [lastRange, nativeRange] = this.getRange();
        this.lastRange = lastRange;
        this.lastNative = nativeRange;
        if (this.lastRange != null) this.savedRange = this.lastRange;
        if (!(0, _lodashEs.isEqual)(oldRange, this.lastRange)) {
            if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
                const range = this.cursor.restore();
                if (range) this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
            }
            const args = [
                (0, _emitterJsDefault.default).events.SELECTION_CHANGE,
                (0, _lodashEs.cloneDeep)(this.lastRange),
                (0, _lodashEs.cloneDeep)(oldRange),
                source
            ];
            this.emitter.emit((0, _emitterJsDefault.default).events.EDITOR_CHANGE, ...args);
            if (source !== (0, _emitterJsDefault.default).sources.SILENT) this.emitter.emit(...args);
        }
    }
}
function contains(parent, descendant) {
    try {
        // Firefox inserts inaccessible nodes around video elements
        descendant.parentNode; // eslint-disable-line @typescript-eslint/no-unused-expressions
    } catch (e) {
        return false;
    }
    return parent.contains(descendant);
}
exports.default = Selection;

},{"parchment":"1ObrB","lodash-es":"bXNwz","./emitter.js":"EzLd4","./logger.js":"4RIBY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"EzLd4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _instancesJs = require("./instances.js");
var _instancesJsDefault = parcelHelpers.interopDefault(_instancesJs);
var _loggerJs = require("./logger.js");
var _loggerJsDefault = parcelHelpers.interopDefault(_loggerJs);
const debug = (0, _loggerJsDefault.default)('quill:events');
const EVENTS = [
    'selectionchange',
    'mousedown',
    'mouseup',
    'click'
];
EVENTS.forEach((eventName)=>{
    document.addEventListener(eventName, function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        Array.from(document.querySelectorAll('.ql-container')).forEach((node)=>{
            const quill = (0, _instancesJsDefault.default).get(node);
            if (quill && quill.emitter) quill.emitter.handleDOM(...args);
        });
    });
});
class Emitter extends (0, _eventemitter3.EventEmitter) {
    static events = {
        EDITOR_CHANGE: 'editor-change',
        SCROLL_BEFORE_UPDATE: 'scroll-before-update',
        SCROLL_BLOT_MOUNT: 'scroll-blot-mount',
        SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',
        SCROLL_OPTIMIZE: 'scroll-optimize',
        SCROLL_UPDATE: 'scroll-update',
        SCROLL_EMBED_UPDATE: 'scroll-embed-update',
        SELECTION_CHANGE: 'selection-change',
        TEXT_CHANGE: 'text-change',
        COMPOSITION_BEFORE_START: 'composition-before-start',
        COMPOSITION_START: 'composition-start',
        COMPOSITION_BEFORE_END: 'composition-before-end',
        COMPOSITION_END: 'composition-end'
    };
    static sources = {
        API: 'api',
        SILENT: 'silent',
        USER: 'user'
    };
    constructor(){
        super();
        this.domListeners = {};
        this.on('error', debug.error);
    }
    emit() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        debug.log.call(debug, ...args);
        // @ts-expect-error
        return super.emit(...args);
    }
    handleDOM(event) {
        for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
        (this.domListeners[event.type] || []).forEach((_ref)=>{
            let { node, handler } = _ref;
            if (event.target === node || node.contains(event.target)) handler(event, ...args);
        });
    }
    listenDOM(eventName, node, handler) {
        if (!this.domListeners[eventName]) this.domListeners[eventName] = [];
        this.domListeners[eventName].push({
            node,
            handler
        });
    }
}
exports.default = Emitter;

},{"eventemitter3":"3fnfh","./instances.js":"bB1VN","./logger.js":"4RIBY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fnfh":[function(require,module,exports,__globalThis) {
'use strict';
var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
module.exports = EventEmitter;

},{}],"bB1VN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4RIBY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const levels = [
    'error',
    'warn',
    'log',
    'info'
];
let level = 'warn';
function debug(method) {
    if (level) {
        if (levels.indexOf(method) <= levels.indexOf(level)) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            console[method](...args); // eslint-disable-line no-console
        }
    }
}
function namespace(ns) {
    return levels.reduce((logger, method)=>{
        logger[method] = debug.bind(console, method, ns);
        return logger;
    }, {});
}
namespace.level = (newLevel)=>{
    level = newLevel;
};
debug.level = namespace.level;
exports.default = namespace;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7945f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Module {
    static DEFAULTS = {};
    constructor(quill){
        let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.quill = quill;
        this.options = options;
    }
}
exports.default = Module;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsZvP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _embedJs = require("../blots/embed.js");
var _embedJsDefault = parcelHelpers.interopDefault(_embedJs);
var _emitterJs = require("./emitter.js");
var _emitterJsDefault = parcelHelpers.interopDefault(_emitterJs);
class Composition {
    isComposing = false;
    constructor(scroll, emitter){
        this.scroll = scroll;
        this.emitter = emitter;
        this.setupListeners();
    }
    setupListeners() {
        this.scroll.domNode.addEventListener('compositionstart', (event)=>{
            if (!this.isComposing) this.handleCompositionStart(event);
        });
        this.scroll.domNode.addEventListener('compositionend', (event)=>{
            if (this.isComposing) // Webkit makes DOM changes after compositionend, so we use microtask to
            // ensure the order.
            // https://bugs.webkit.org/show_bug.cgi?id=31902
            queueMicrotask(()=>{
                this.handleCompositionEnd(event);
            });
        });
    }
    handleCompositionStart(event) {
        const blot = event.target instanceof Node ? this.scroll.find(event.target, true) : null;
        if (blot && !(blot instanceof (0, _embedJsDefault.default))) {
            this.emitter.emit((0, _emitterJsDefault.default).events.COMPOSITION_BEFORE_START, event);
            this.scroll.batchStart();
            this.emitter.emit((0, _emitterJsDefault.default).events.COMPOSITION_START, event);
            this.isComposing = true;
        }
    }
    handleCompositionEnd(event) {
        this.emitter.emit((0, _emitterJsDefault.default).events.COMPOSITION_BEFORE_END, event);
        this.scroll.batchEnd();
        this.emitter.emit((0, _emitterJsDefault.default).events.COMPOSITION_END, event);
        this.isComposing = false;
    }
}
exports.default = Composition;

},{"../blots/embed.js":"7IQfl","./emitter.js":"EzLd4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7IQfl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
const GUARD_TEXT = '\uFEFF';
class Embed extends (0, _parchment.EmbedBlot) {
    constructor(scroll, node){
        super(scroll, node);
        this.contentNode = document.createElement('span');
        this.contentNode.setAttribute('contenteditable', 'false');
        Array.from(this.domNode.childNodes).forEach((childNode)=>{
            this.contentNode.appendChild(childNode);
        });
        this.leftGuard = document.createTextNode(GUARD_TEXT);
        this.rightGuard = document.createTextNode(GUARD_TEXT);
        this.domNode.appendChild(this.leftGuard);
        this.domNode.appendChild(this.contentNode);
        this.domNode.appendChild(this.rightGuard);
    }
    index(node, offset) {
        if (node === this.leftGuard) return 0;
        if (node === this.rightGuard) return 1;
        return super.index(node, offset);
    }
    restore(node) {
        let range = null;
        let textNode;
        const text = node.data.split(GUARD_TEXT).join('');
        if (node === this.leftGuard) {
            if (this.prev instanceof (0, _textJsDefault.default)) {
                const prevLength = this.prev.length();
                this.prev.insertAt(prevLength, text);
                range = {
                    startNode: this.prev.domNode,
                    startOffset: prevLength + text.length
                };
            } else {
                textNode = document.createTextNode(text);
                this.parent.insertBefore(this.scroll.create(textNode), this);
                range = {
                    startNode: textNode,
                    startOffset: text.length
                };
            }
        } else if (node === this.rightGuard) {
            if (this.next instanceof (0, _textJsDefault.default)) {
                this.next.insertAt(0, text);
                range = {
                    startNode: this.next.domNode,
                    startOffset: text.length
                };
            } else {
                textNode = document.createTextNode(text);
                this.parent.insertBefore(this.scroll.create(textNode), this.next);
                range = {
                    startNode: textNode,
                    startOffset: text.length
                };
            }
        }
        node.data = GUARD_TEXT;
        return range;
    }
    update(mutations, context) {
        mutations.forEach((mutation)=>{
            if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {
                const range = this.restore(mutation.target);
                if (range) context.range = range;
            }
        });
    }
}
exports.default = Embed;

},{"parchment":"1ObrB","./text.js":"cZig3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Obd4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Theme {
    static DEFAULTS = {
        modules: {}
    };
    static themes = {
        default: Theme
    };
    modules = {};
    constructor(quill, options){
        this.quill = quill;
        this.options = options;
    }
    init() {
        Object.keys(this.options.modules).forEach((name)=>{
            if (this.modules[name] == null) this.addModule(name);
        });
    }
    addModule(name) {
        // @ts-expect-error
        const ModuleClass = this.quill.constructor.import(`modules/${name}`);
        this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});
        return this.modules[name];
    }
}
exports.default = Theme;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14DNv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getParentElement = (element)=>element.parentElement || element.getRootNode().host || null;
const getElementRect = (element)=>{
    const rect = element.getBoundingClientRect();
    const scaleX = 'offsetWidth' in element && Math.abs(rect.width) / element.offsetWidth || 1;
    const scaleY = 'offsetHeight' in element && Math.abs(rect.height) / element.offsetHeight || 1;
    return {
        top: rect.top,
        right: rect.left + element.clientWidth * scaleX,
        bottom: rect.top + element.clientHeight * scaleY,
        left: rect.left
    };
};
const paddingValueToInt = (value)=>{
    const number = parseInt(value, 10);
    return Number.isNaN(number) ? 0 : number;
};
// Follow the steps described in https://www.w3.org/TR/cssom-view-1/#element-scrolling-members,
// assuming that the scroll option is set to 'nearest'.
const getScrollDistance = (targetStart, targetEnd, scrollStart, scrollEnd, scrollPaddingStart, scrollPaddingEnd)=>{
    if (targetStart < scrollStart && targetEnd > scrollEnd) return 0;
    if (targetStart < scrollStart) return -(scrollStart - targetStart + scrollPaddingStart);
    if (targetEnd > scrollEnd) return targetEnd - targetStart > scrollEnd - scrollStart ? targetStart + scrollPaddingStart - scrollStart : targetEnd - scrollEnd + scrollPaddingEnd;
    return 0;
};
const scrollRectIntoView = (root, targetRect)=>{
    const document = root.ownerDocument;
    let rect = targetRect;
    let current = root;
    while(current){
        const isDocumentBody = current === document.body;
        const bounding = isDocumentBody ? {
            top: 0,
            right: window.visualViewport?.width ?? document.documentElement.clientWidth,
            bottom: window.visualViewport?.height ?? document.documentElement.clientHeight,
            left: 0
        } : getElementRect(current);
        const style = getComputedStyle(current);
        const scrollDistanceX = getScrollDistance(rect.left, rect.right, bounding.left, bounding.right, paddingValueToInt(style.scrollPaddingLeft), paddingValueToInt(style.scrollPaddingRight));
        const scrollDistanceY = getScrollDistance(rect.top, rect.bottom, bounding.top, bounding.bottom, paddingValueToInt(style.scrollPaddingTop), paddingValueToInt(style.scrollPaddingBottom));
        if (scrollDistanceX || scrollDistanceY) {
            if (isDocumentBody) document.defaultView?.scrollBy(scrollDistanceX, scrollDistanceY);
            else {
                const { scrollLeft, scrollTop } = current;
                if (scrollDistanceY) current.scrollTop += scrollDistanceY;
                if (scrollDistanceX) current.scrollLeft += scrollDistanceX;
                const scrolledLeft = current.scrollLeft - scrollLeft;
                const scrolledTop = current.scrollTop - scrollTop;
                rect = {
                    left: rect.left - scrolledLeft,
                    top: rect.top - scrolledTop,
                    right: rect.right - scrolledLeft,
                    bottom: rect.bottom - scrolledTop
                };
            }
        }
        current = isDocumentBody || style.position === 'fixed' ? null : getParentElement(current);
    }
};
exports.default = scrollRectIntoView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jU61U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
const MAX_REGISTER_ITERATIONS = 100;
const CORE_FORMATS = [
    'block',
    'break',
    'cursor',
    'inline',
    'scroll',
    'text'
];
const createRegistryWithFormats = (formats, sourceRegistry, debug)=>{
    const registry = new (0, _parchment.Registry)();
    CORE_FORMATS.forEach((name)=>{
        const coreBlot = sourceRegistry.query(name);
        if (coreBlot) registry.register(coreBlot);
    });
    formats.forEach((name)=>{
        let format = sourceRegistry.query(name);
        if (!format) debug.error(`Cannot register "${name}" specified in "formats" config. Are you sure it was registered?`);
        let iterations = 0;
        while(format){
            registry.register(format);
            format = 'blotName' in format ? format.requiredContainer ?? null : null;
            iterations += 1;
            if (iterations > MAX_REGISTER_ITERATIONS) {
                debug.error(`Cycle detected in registering blot requiredContainer: "${name}"`);
                break;
            }
        }
    });
    return registry;
};
exports.default = createRegistryWithFormats;

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Vl5Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
class Container extends (0, _parchment.ContainerBlot) {
}
exports.default = Container;

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1r24T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _emitterJs = require("../core/emitter.js");
var _emitterJsDefault = parcelHelpers.interopDefault(_emitterJs);
var _blockJs = require("./block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
var _breakJs = require("./break.js");
var _breakJsDefault = parcelHelpers.interopDefault(_breakJs);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
function isLine(blot) {
    return blot instanceof (0, _blockJsDefault.default) || blot instanceof (0, _blockJs.BlockEmbed);
}
function isUpdatable(blot) {
    return typeof blot.updateContent === 'function';
}
class Scroll extends (0, _parchment.ScrollBlot) {
    static blotName = 'scroll';
    static className = 'ql-editor';
    static tagName = 'DIV';
    static defaultChild = (0, _blockJsDefault.default);
    static allowedChildren = [
        (0, _blockJsDefault.default),
        (0, _blockJs.BlockEmbed),
        (0, _containerJsDefault.default)
    ];
    constructor(registry, domNode, _ref){
        let { emitter } = _ref;
        super(registry, domNode);
        this.emitter = emitter;
        this.batch = false;
        this.optimize();
        this.enable();
        this.domNode.addEventListener('dragstart', (e)=>this.handleDragStart(e));
    }
    batchStart() {
        if (!Array.isArray(this.batch)) this.batch = [];
    }
    batchEnd() {
        if (!this.batch) return;
        const mutations = this.batch;
        this.batch = false;
        this.update(mutations);
    }
    emitMount(blot) {
        this.emitter.emit((0, _emitterJsDefault.default).events.SCROLL_BLOT_MOUNT, blot);
    }
    emitUnmount(blot) {
        this.emitter.emit((0, _emitterJsDefault.default).events.SCROLL_BLOT_UNMOUNT, blot);
    }
    emitEmbedUpdate(blot, change) {
        this.emitter.emit((0, _emitterJsDefault.default).events.SCROLL_EMBED_UPDATE, blot, change);
    }
    deleteAt(index, length) {
        const [first, offset] = this.line(index);
        const [last] = this.line(index + length);
        super.deleteAt(index, length);
        if (last != null && first !== last && offset > 0) {
            if (first instanceof (0, _blockJs.BlockEmbed) || last instanceof (0, _blockJs.BlockEmbed)) {
                this.optimize();
                return;
            }
            const ref = last.children.head instanceof (0, _breakJsDefault.default) ? null : last.children.head;
            // @ts-expect-error
            first.moveChildren(last, ref);
            // @ts-expect-error
            first.remove();
        }
        this.optimize();
    }
    enable() {
        let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.domNode.setAttribute('contenteditable', enabled ? 'true' : 'false');
    }
    formatAt(index, length, format, value) {
        super.formatAt(index, length, format, value);
        this.optimize();
    }
    insertAt(index, value, def) {
        if (index >= this.length()) {
            if (def == null || this.scroll.query(value, (0, _parchment.Scope).BLOCK) == null) {
                const blot = this.scroll.create(this.statics.defaultChild.blotName);
                this.appendChild(blot);
                if (def == null && value.endsWith('\n')) blot.insertAt(0, value.slice(0, -1), def);
                else blot.insertAt(0, value, def);
            } else {
                const embed = this.scroll.create(value, def);
                this.appendChild(embed);
            }
        } else super.insertAt(index, value, def);
        this.optimize();
    }
    insertBefore(blot, ref) {
        if (blot.statics.scope === (0, _parchment.Scope).INLINE_BLOT) {
            const wrapper = this.scroll.create(this.statics.defaultChild.blotName);
            wrapper.appendChild(blot);
            super.insertBefore(wrapper, ref);
        } else super.insertBefore(blot, ref);
    }
    insertContents(index, delta) {
        const renderBlocks = this.deltaToRenderBlocks(delta.concat(new (0, _quillDeltaDefault.default)().insert('\n')));
        const last = renderBlocks.pop();
        if (last == null) return;
        this.batchStart();
        const first = renderBlocks.shift();
        if (first) {
            const shouldInsertNewlineChar = first.type === 'block' && (first.delta.length() === 0 || !this.descendant((0, _blockJs.BlockEmbed), index)[0] && index < this.length());
            const delta = first.type === 'block' ? first.delta : new (0, _quillDeltaDefault.default)().insert({
                [first.key]: first.value
            });
            insertInlineContents(this, index, delta);
            const newlineCharLength = first.type === 'block' ? 1 : 0;
            const lineEndIndex = index + delta.length() + newlineCharLength;
            if (shouldInsertNewlineChar) this.insertAt(lineEndIndex - 1, '\n');
            const formats = (0, _blockJs.bubbleFormats)(this.line(index)[0]);
            const attributes = (0, _quillDelta.AttributeMap).diff(formats, first.attributes) || {};
            Object.keys(attributes).forEach((name)=>{
                this.formatAt(lineEndIndex - 1, 1, name, attributes[name]);
            });
            index = lineEndIndex;
        }
        let [refBlot, refBlotOffset] = this.children.find(index);
        if (renderBlocks.length) {
            if (refBlot) {
                refBlot = refBlot.split(refBlotOffset);
                refBlotOffset = 0;
            }
            renderBlocks.forEach((renderBlock)=>{
                if (renderBlock.type === 'block') {
                    const block = this.createBlock(renderBlock.attributes, refBlot || undefined);
                    insertInlineContents(block, 0, renderBlock.delta);
                } else {
                    const blockEmbed = this.create(renderBlock.key, renderBlock.value);
                    this.insertBefore(blockEmbed, refBlot || undefined);
                    Object.keys(renderBlock.attributes).forEach((name)=>{
                        blockEmbed.format(name, renderBlock.attributes[name]);
                    });
                }
            });
        }
        if (last.type === 'block' && last.delta.length()) {
            const offset = refBlot ? refBlot.offset(refBlot.scroll) + refBlotOffset : this.length();
            insertInlineContents(this, offset, last.delta);
        }
        this.batchEnd();
        this.optimize();
    }
    isEnabled() {
        return this.domNode.getAttribute('contenteditable') === 'true';
    }
    leaf(index) {
        const last = this.path(index).pop();
        if (!last) return [
            null,
            -1
        ];
        const [blot, offset] = last;
        return blot instanceof (0, _parchment.LeafBlot) ? [
            blot,
            offset
        ] : [
            null,
            -1
        ];
    }
    line(index) {
        if (index === this.length()) return this.line(index - 1);
        // @ts-expect-error TODO: make descendant() generic
        return this.descendant(isLine, index);
    }
    lines() {
        let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;
        const getLines = (blot, blotIndex, blotLength)=>{
            let lines = [];
            let lengthLeft = blotLength;
            blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength)=>{
                if (isLine(child)) lines.push(child);
                else if (child instanceof (0, _parchment.ContainerBlot)) lines = lines.concat(getLines(child, childIndex, lengthLeft));
                lengthLeft -= childLength;
            });
            return lines;
        };
        return getLines(this, index, length);
    }
    optimize() {
        let mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this.batch) return;
        super.optimize(mutations, context);
        if (mutations.length > 0) this.emitter.emit((0, _emitterJsDefault.default).events.SCROLL_OPTIMIZE, mutations, context);
    }
    path(index) {
        return super.path(index).slice(1); // Exclude self
    }
    remove() {
    // Never remove self
    }
    update(mutations) {
        if (this.batch) {
            if (Array.isArray(mutations)) this.batch = this.batch.concat(mutations);
            return;
        }
        let source = (0, _emitterJsDefault.default).sources.USER;
        if (typeof mutations === 'string') source = mutations;
        if (!Array.isArray(mutations)) mutations = this.observer.takeRecords();
        mutations = mutations.filter((_ref2)=>{
            let { target } = _ref2;
            const blot = this.find(target, true);
            return blot && !isUpdatable(blot);
        });
        if (mutations.length > 0) this.emitter.emit((0, _emitterJsDefault.default).events.SCROLL_BEFORE_UPDATE, source, mutations);
        super.update(mutations.concat([])); // pass copy
        if (mutations.length > 0) this.emitter.emit((0, _emitterJsDefault.default).events.SCROLL_UPDATE, source, mutations);
    }
    updateEmbedAt(index, key, change) {
        // Currently it only supports top-level embeds (BlockEmbed).
        // We can update `ParentBlot` in parchment to support inline embeds.
        const [blot] = this.descendant((b)=>b instanceof (0, _blockJs.BlockEmbed), index);
        if (blot && blot.statics.blotName === key && isUpdatable(blot)) blot.updateContent(change);
    }
    handleDragStart(event) {
        event.preventDefault();
    }
    deltaToRenderBlocks(delta) {
        const renderBlocks = [];
        let currentBlockDelta = new (0, _quillDeltaDefault.default)();
        delta.forEach((op)=>{
            const insert = op?.insert;
            if (!insert) return;
            if (typeof insert === 'string') {
                const splitted = insert.split('\n');
                splitted.slice(0, -1).forEach((text)=>{
                    currentBlockDelta.insert(text, op.attributes);
                    renderBlocks.push({
                        type: 'block',
                        delta: currentBlockDelta,
                        attributes: op.attributes ?? {}
                    });
                    currentBlockDelta = new (0, _quillDeltaDefault.default)();
                });
                const last = splitted[splitted.length - 1];
                if (last) currentBlockDelta.insert(last, op.attributes);
            } else {
                const key = Object.keys(insert)[0];
                if (!key) return;
                if (this.query(key, (0, _parchment.Scope).INLINE)) currentBlockDelta.push(op);
                else {
                    if (currentBlockDelta.length()) renderBlocks.push({
                        type: 'block',
                        delta: currentBlockDelta,
                        attributes: {}
                    });
                    currentBlockDelta = new (0, _quillDeltaDefault.default)();
                    renderBlocks.push({
                        type: 'blockEmbed',
                        key,
                        value: insert[key],
                        attributes: op.attributes ?? {}
                    });
                }
            }
        });
        if (currentBlockDelta.length()) renderBlocks.push({
            type: 'block',
            delta: currentBlockDelta,
            attributes: {}
        });
        return renderBlocks;
    }
    createBlock(attributes, refBlot) {
        let blotName;
        const formats = {};
        Object.entries(attributes).forEach((_ref3)=>{
            let [key, value] = _ref3;
            const isBlockBlot = this.query(key, (0, _parchment.Scope).BLOCK & (0, _parchment.Scope).BLOT) != null;
            if (isBlockBlot) blotName = key;
            else formats[key] = value;
        });
        const block = this.create(blotName || this.statics.defaultChild.blotName, blotName ? attributes[blotName] : undefined);
        this.insertBefore(block, refBlot || undefined);
        const length = block.length();
        Object.entries(formats).forEach((_ref4)=>{
            let [key, value] = _ref4;
            block.formatAt(0, length, key, value);
        });
        return block;
    }
}
function insertInlineContents(parent, index, inlineContents) {
    inlineContents.reduce((index, op)=>{
        const length = (0, _quillDelta.Op).length(op);
        let attributes = op.attributes || {};
        if (op.insert != null) {
            if (typeof op.insert === 'string') {
                const text = op.insert;
                parent.insertAt(index, text);
                const [leaf] = parent.descendant((0, _parchment.LeafBlot), index);
                const formats = (0, _blockJs.bubbleFormats)(leaf);
                attributes = (0, _quillDelta.AttributeMap).diff(formats, attributes) || {};
            } else if (typeof op.insert === 'object') {
                const key = Object.keys(op.insert)[0]; // There should only be one key
                if (key == null) return index;
                parent.insertAt(index, key, op.insert[key]);
                const isInlineEmbed = parent.scroll.query(key, (0, _parchment.Scope).INLINE) != null;
                if (isInlineEmbed) {
                    const [leaf] = parent.descendant((0, _parchment.LeafBlot), index);
                    const formats = (0, _blockJs.bubbleFormats)(leaf);
                    attributes = (0, _quillDelta.AttributeMap).diff(formats, attributes) || {};
                }
            }
        }
        Object.keys(attributes).forEach((key)=>{
            parent.formatAt(index, length, key, attributes[key]);
        });
        return index + length;
    }, index);
}
exports.default = Scroll;

},{"parchment":"1ObrB","quill-delta":"fqWT0","../core/emitter.js":"EzLd4","./block.js":"5b8eX","./break.js":"afL9w","./container.js":"9Vl5Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5aycZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Clipboard);
parcelHelpers.export(exports, "matchAttributor", ()=>matchAttributor);
parcelHelpers.export(exports, "matchBlot", ()=>matchBlot);
parcelHelpers.export(exports, "matchNewline", ()=>matchNewline);
parcelHelpers.export(exports, "matchText", ()=>matchText);
parcelHelpers.export(exports, "traverse", ()=>traverse);
var _parchment = require("parchment");
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _blockJs = require("../blots/block.js");
var _loggerJs = require("../core/logger.js");
var _loggerJsDefault = parcelHelpers.interopDefault(_loggerJs);
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
var _alignJs = require("../formats/align.js");
var _backgroundJs = require("../formats/background.js");
var _codeJs = require("../formats/code.js");
var _codeJsDefault = parcelHelpers.interopDefault(_codeJs);
var _colorJs = require("../formats/color.js");
var _directionJs = require("../formats/direction.js");
var _fontJs = require("../formats/font.js");
var _sizeJs = require("../formats/size.js");
var _keyboardJs = require("./keyboard.js");
var _indexJs = require("./normalizeExternalHTML/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
const debug = (0, _loggerJsDefault.default)('quill:clipboard');
const CLIPBOARD_CONFIG = [
    [
        Node.TEXT_NODE,
        matchText
    ],
    [
        Node.TEXT_NODE,
        matchNewline
    ],
    [
        'br',
        matchBreak
    ],
    [
        Node.ELEMENT_NODE,
        matchNewline
    ],
    [
        Node.ELEMENT_NODE,
        matchBlot
    ],
    [
        Node.ELEMENT_NODE,
        matchAttributor
    ],
    [
        Node.ELEMENT_NODE,
        matchStyles
    ],
    [
        'li',
        matchIndent
    ],
    [
        'ol, ul',
        matchList
    ],
    [
        'pre',
        matchCodeBlock
    ],
    [
        'tr',
        matchTable
    ],
    [
        'b',
        createMatchAlias('bold')
    ],
    [
        'i',
        createMatchAlias('italic')
    ],
    [
        'strike',
        createMatchAlias('strike')
    ],
    [
        'style',
        matchIgnore
    ]
];
const ATTRIBUTE_ATTRIBUTORS = [
    (0, _alignJs.AlignAttribute),
    (0, _directionJs.DirectionAttribute)
].reduce((memo, attr)=>{
    memo[attr.keyName] = attr;
    return memo;
}, {});
const STYLE_ATTRIBUTORS = [
    (0, _alignJs.AlignStyle),
    (0, _backgroundJs.BackgroundStyle),
    (0, _colorJs.ColorStyle),
    (0, _directionJs.DirectionStyle),
    (0, _fontJs.FontStyle),
    (0, _sizeJs.SizeStyle)
].reduce((memo, attr)=>{
    memo[attr.keyName] = attr;
    return memo;
}, {});
class Clipboard extends (0, _moduleJsDefault.default) {
    static DEFAULTS = {
        matchers: []
    };
    constructor(quill, options){
        super(quill, options);
        this.quill.root.addEventListener('copy', (e)=>this.onCaptureCopy(e, false));
        this.quill.root.addEventListener('cut', (e)=>this.onCaptureCopy(e, true));
        this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));
        this.matchers = [];
        CLIPBOARD_CONFIG.concat(this.options.matchers ?? []).forEach((_ref)=>{
            let [selector, matcher] = _ref;
            this.addMatcher(selector, matcher);
        });
    }
    addMatcher(selector, matcher) {
        this.matchers.push([
            selector,
            matcher
        ]);
    }
    convert(_ref2) {
        let { html, text } = _ref2;
        let formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (formats[(0, _codeJsDefault.default).blotName]) return new (0, _quillDeltaDefault.default)().insert(text || '', {
            [(0, _codeJsDefault.default).blotName]: formats[(0, _codeJsDefault.default).blotName]
        });
        if (!html) return new (0, _quillDeltaDefault.default)().insert(text || '', formats);
        const delta = this.convertHTML(html);
        // Remove trailing newline
        if (deltaEndsWith(delta, '\n') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) return delta.compose(new (0, _quillDeltaDefault.default)().retain(delta.length() - 1).delete(1));
        return delta;
    }
    normalizeHTML(doc) {
        (0, _indexJsDefault.default)(doc);
    }
    convertHTML(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        this.normalizeHTML(doc);
        const container = doc.body;
        const nodeMatches = new WeakMap();
        const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);
        return traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches);
    }
    dangerouslyPasteHTML(index, html) {
        let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _quillJsDefault.default).sources.API;
        if (typeof index === 'string') {
            const delta = this.convert({
                html: index,
                text: ''
            });
            // @ts-expect-error
            this.quill.setContents(delta, html);
            this.quill.setSelection(0, (0, _quillJsDefault.default).sources.SILENT);
        } else {
            const paste = this.convert({
                html,
                text: ''
            });
            this.quill.updateContents(new (0, _quillDeltaDefault.default)().retain(index).concat(paste), source);
            this.quill.setSelection(index + paste.length(), (0, _quillJsDefault.default).sources.SILENT);
        }
    }
    onCaptureCopy(e) {
        let isCut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (e.defaultPrevented) return;
        e.preventDefault();
        const [range] = this.quill.selection.getRange();
        if (range == null) return;
        const { html, text } = this.onCopy(range, isCut);
        e.clipboardData?.setData('text/plain', text);
        e.clipboardData?.setData('text/html', html);
        if (isCut) (0, _keyboardJs.deleteRange)({
            range,
            quill: this.quill
        });
    }
    /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */ normalizeURIList(urlList) {
        return urlList.split(/\r?\n/)// Ignore all comments
        .filter((url)=>url[0] !== '#').join('\n');
    }
    onCapturePaste(e) {
        if (e.defaultPrevented || !this.quill.isEnabled()) return;
        e.preventDefault();
        const range = this.quill.getSelection(true);
        if (range == null) return;
        const html = e.clipboardData?.getData('text/html');
        let text = e.clipboardData?.getData('text/plain');
        if (!html && !text) {
            const urlList = e.clipboardData?.getData('text/uri-list');
            if (urlList) text = this.normalizeURIList(urlList);
        }
        const files = Array.from(e.clipboardData?.files || []);
        if (!html && files.length > 0) {
            this.quill.uploader.upload(range, files);
            return;
        }
        if (html && files.length > 0) {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            if (doc.body.childElementCount === 1 && doc.body.firstElementChild?.tagName === 'IMG') {
                this.quill.uploader.upload(range, files);
                return;
            }
        }
        this.onPaste(range, {
            html,
            text
        });
    }
    onCopy(range) {
        const text = this.quill.getText(range);
        const html = this.quill.getSemanticHTML(range);
        return {
            html,
            text
        };
    }
    onPaste(range, _ref3) {
        let { text, html } = _ref3;
        const formats = this.quill.getFormat(range.index);
        const pastedDelta = this.convert({
            text,
            html
        }, formats);
        debug.log('onPaste', pastedDelta, {
            text,
            html
        });
        const delta = new (0, _quillDeltaDefault.default)().retain(range.index).delete(range.length).concat(pastedDelta);
        this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
        // range.length contributes to delta.length()
        this.quill.setSelection(delta.length() - range.length, (0, _quillJsDefault.default).sources.SILENT);
        this.quill.scrollSelectionIntoView();
    }
    prepareMatching(container, nodeMatches) {
        const elementMatchers = [];
        const textMatchers = [];
        this.matchers.forEach((pair)=>{
            const [selector, matcher] = pair;
            switch(selector){
                case Node.TEXT_NODE:
                    textMatchers.push(matcher);
                    break;
                case Node.ELEMENT_NODE:
                    elementMatchers.push(matcher);
                    break;
                default:
                    Array.from(container.querySelectorAll(selector)).forEach((node)=>{
                        if (nodeMatches.has(node)) {
                            const matches = nodeMatches.get(node);
                            matches?.push(matcher);
                        } else nodeMatches.set(node, [
                            matcher
                        ]);
                    });
                    break;
            }
        });
        return [
            elementMatchers,
            textMatchers
        ];
    }
}
function applyFormat(delta, format, value, scroll) {
    if (!scroll.query(format)) return delta;
    return delta.reduce((newDelta, op)=>{
        if (!op.insert) return newDelta;
        if (op.attributes && op.attributes[format]) return newDelta.push(op);
        const formats = value ? {
            [format]: value
        } : {};
        return newDelta.insert(op.insert, {
            ...formats,
            ...op.attributes
        });
    }, new (0, _quillDeltaDefault.default)());
}
function deltaEndsWith(delta, text) {
    let endText = '';
    for(let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus
    ){
        const op = delta.ops[i];
        if (typeof op.insert !== 'string') break;
        endText = op.insert + endText;
    }
    return endText.slice(-1 * text.length) === text;
}
function isLine(node, scroll) {
    if (!(node instanceof Element)) return false;
    const match = scroll.query(node);
    // @ts-expect-error
    if (match && match.prototype instanceof (0, _parchment.EmbedBlot)) return false;
    return [
        'address',
        'article',
        'blockquote',
        'canvas',
        'dd',
        'div',
        'dl',
        'dt',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'header',
        'iframe',
        'li',
        'main',
        'nav',
        'ol',
        'output',
        'p',
        'pre',
        'section',
        'table',
        'td',
        'tr',
        'ul',
        'video'
    ].includes(node.tagName.toLowerCase());
}
function isBetweenInlineElements(node, scroll) {
    return node.previousElementSibling && node.nextElementSibling && !isLine(node.previousElementSibling, scroll) && !isLine(node.nextElementSibling, scroll);
}
const preNodes = new WeakMap();
function isPre(node) {
    if (node == null) return false;
    if (!preNodes.has(node)) {
        // @ts-expect-error
        if (node.tagName === 'PRE') preNodes.set(node, true);
        else preNodes.set(node, isPre(node.parentNode));
    }
    return preNodes.get(node);
}
function traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {
    // Post-order
    if (node.nodeType === node.TEXT_NODE) return textMatchers.reduce((delta, matcher)=>{
        return matcher(node, delta, scroll);
    }, new (0, _quillDeltaDefault.default)());
    if (node.nodeType === node.ELEMENT_NODE) return Array.from(node.childNodes || []).reduce((delta, childNode)=>{
        let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);
        if (childNode.nodeType === node.ELEMENT_NODE) {
            childrenDelta = elementMatchers.reduce((reducedDelta, matcher)=>{
                return matcher(childNode, reducedDelta, scroll);
            }, childrenDelta);
            childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher)=>{
                return matcher(childNode, reducedDelta, scroll);
            }, childrenDelta);
        }
        return delta.concat(childrenDelta);
    }, new (0, _quillDeltaDefault.default)());
    return new (0, _quillDeltaDefault.default)();
}
function createMatchAlias(format) {
    return (_node, delta, scroll)=>{
        return applyFormat(delta, format, true, scroll);
    };
}
function matchAttributor(node, delta, scroll) {
    const attributes = (0, _parchment.Attributor).keys(node);
    const classes = (0, _parchment.ClassAttributor).keys(node);
    const styles = (0, _parchment.StyleAttributor).keys(node);
    const formats = {};
    attributes.concat(classes).concat(styles).forEach((name)=>{
        let attr = scroll.query(name, (0, _parchment.Scope).ATTRIBUTE);
        if (attr != null) {
            formats[attr.attrName] = attr.value(node);
            if (formats[attr.attrName]) return;
        }
        attr = ATTRIBUTE_ATTRIBUTORS[name];
        if (attr != null && (attr.attrName === name || attr.keyName === name)) formats[attr.attrName] = attr.value(node) || undefined;
        attr = STYLE_ATTRIBUTORS[name];
        if (attr != null && (attr.attrName === name || attr.keyName === name)) {
            attr = STYLE_ATTRIBUTORS[name];
            formats[attr.attrName] = attr.value(node) || undefined;
        }
    });
    return Object.entries(formats).reduce((newDelta, _ref4)=>{
        let [name, value] = _ref4;
        return applyFormat(newDelta, name, value, scroll);
    }, delta);
}
function matchBlot(node, delta, scroll) {
    const match = scroll.query(node);
    if (match == null) return delta;
    // @ts-expect-error
    if (match.prototype instanceof (0, _parchment.EmbedBlot)) {
        const embed = {};
        // @ts-expect-error
        const value = match.value(node);
        if (value != null) {
            // @ts-expect-error
            embed[match.blotName] = value;
            // @ts-expect-error
            return new (0, _quillDeltaDefault.default)().insert(embed, match.formats(node, scroll));
        }
    } else {
        // @ts-expect-error
        if (match.prototype instanceof (0, _parchment.BlockBlot) && !deltaEndsWith(delta, '\n')) delta.insert('\n');
        if ('blotName' in match && 'formats' in match && typeof match.formats === 'function') return applyFormat(delta, match.blotName, match.formats(node, scroll), scroll);
    }
    return delta;
}
function matchBreak(node, delta) {
    if (!deltaEndsWith(delta, '\n')) delta.insert('\n');
    return delta;
}
function matchCodeBlock(node, delta, scroll) {
    const match = scroll.query('code-block');
    const language = match && 'formats' in match && typeof match.formats === 'function' ? match.formats(node, scroll) : true;
    return applyFormat(delta, 'code-block', language, scroll);
}
function matchIgnore() {
    return new (0, _quillDeltaDefault.default)();
}
function matchIndent(node, delta, scroll) {
    const match = scroll.query(node);
    if (match == null || // @ts-expect-error
    match.blotName !== 'list' || !deltaEndsWith(delta, '\n')) return delta;
    let indent = -1;
    let parent = node.parentNode;
    while(parent != null){
        // @ts-expect-error
        if ([
            'OL',
            'UL'
        ].includes(parent.tagName)) indent += 1;
        parent = parent.parentNode;
    }
    if (indent <= 0) return delta;
    return delta.reduce((composed, op)=>{
        if (!op.insert) return composed;
        if (op.attributes && typeof op.attributes.indent === 'number') return composed.push(op);
        return composed.insert(op.insert, {
            indent,
            ...op.attributes || {}
        });
    }, new (0, _quillDeltaDefault.default)());
}
function matchList(node, delta, scroll) {
    const element = node;
    let list = element.tagName === 'OL' ? 'ordered' : 'bullet';
    const checkedAttr = element.getAttribute('data-checked');
    if (checkedAttr) list = checkedAttr === 'true' ? 'checked' : 'unchecked';
    return applyFormat(delta, 'list', list, scroll);
}
function matchNewline(node, delta, scroll) {
    if (!deltaEndsWith(delta, '\n')) {
        if (isLine(node, scroll) && (node.childNodes.length > 0 || node instanceof HTMLParagraphElement)) return delta.insert('\n');
        if (delta.length() > 0 && node.nextSibling) {
            let nextSibling = node.nextSibling;
            while(nextSibling != null){
                if (isLine(nextSibling, scroll)) return delta.insert('\n');
                const match = scroll.query(nextSibling);
                // @ts-expect-error
                if (match && match.prototype instanceof (0, _blockJs.BlockEmbed)) return delta.insert('\n');
                nextSibling = nextSibling.firstChild;
            }
        }
    }
    return delta;
}
function matchStyles(node, delta, scroll) {
    const formats = {};
    const style = node.style || {};
    if (style.fontStyle === 'italic') formats.italic = true;
    if (style.textDecoration === 'underline') formats.underline = true;
    if (style.textDecoration === 'line-through') formats.strike = true;
    if (style.fontWeight?.startsWith('bold') || // @ts-expect-error Fix me later
    parseInt(style.fontWeight, 10) >= 700) formats.bold = true;
    delta = Object.entries(formats).reduce((newDelta, _ref5)=>{
        let [name, value] = _ref5;
        return applyFormat(newDelta, name, value, scroll);
    }, delta);
    // @ts-expect-error
    if (parseFloat(style.textIndent || 0) > 0) // Could be 0.5in
    return new (0, _quillDeltaDefault.default)().insert('\t').concat(delta);
    return delta;
}
function matchTable(node, delta, scroll) {
    const table = node.parentElement?.tagName === 'TABLE' ? node.parentElement : node.parentElement?.parentElement;
    if (table != null) {
        const rows = Array.from(table.querySelectorAll('tr'));
        const row = rows.indexOf(node) + 1;
        return applyFormat(delta, 'table', row, scroll);
    }
    return delta;
}
function matchText(node, delta, scroll) {
    // @ts-expect-error
    let text = node.data;
    // Word represents empty line with <o:p>&nbsp;</o:p>
    if (node.parentElement?.tagName === 'O:P') return delta.insert(text.trim());
    if (!isPre(node)) {
        if (text.trim().length === 0 && text.includes('\n') && !isBetweenInlineElements(node, scroll)) return delta;
        // convert all non-nbsp whitespace into regular space
        text = text.replace(/[^\S\u00a0]/g, ' ');
        // collapse consecutive spaces into one
        text = text.replace(/ {2,}/g, ' ');
        if (node.previousSibling == null && node.parentElement != null && isLine(node.parentElement, scroll) || node.previousSibling instanceof Element && isLine(node.previousSibling, scroll)) // block structure means we don't need leading space
        text = text.replace(/^ /, '');
        if (node.nextSibling == null && node.parentElement != null && isLine(node.parentElement, scroll) || node.nextSibling instanceof Element && isLine(node.nextSibling, scroll)) // block structure means we don't need trailing space
        text = text.replace(/ $/, '');
        // done removing whitespace and can normalize all to regular space
        text = text.replaceAll('\u00a0', ' ');
    }
    return delta.insert(text);
}

},{"parchment":"1ObrB","quill-delta":"fqWT0","../blots/block.js":"5b8eX","../core/logger.js":"4RIBY","../core/module.js":"7945f","../core/quill.js":"crqqt","../formats/align.js":"8cAqe","../formats/background.js":"k5OeK","../formats/code.js":"kVakW","../formats/color.js":"boc53","../formats/direction.js":"db0gm","../formats/font.js":"hn859","../formats/size.js":"7d6ph","./keyboard.js":"6fX3l","./normalizeExternalHTML/index.js":"21esG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cAqe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlignAttribute", ()=>AlignAttribute);
parcelHelpers.export(exports, "AlignClass", ()=>AlignClass);
parcelHelpers.export(exports, "AlignStyle", ()=>AlignStyle);
var _parchment = require("parchment");
const config = {
    scope: (0, _parchment.Scope).BLOCK,
    whitelist: [
        'right',
        'center',
        'justify'
    ]
};
const AlignAttribute = new (0, _parchment.Attributor)('align', 'align', config);
const AlignClass = new (0, _parchment.ClassAttributor)('align', 'ql-align', config);
const AlignStyle = new (0, _parchment.StyleAttributor)('align', 'text-align', config);

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5OeK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BackgroundClass", ()=>BackgroundClass);
parcelHelpers.export(exports, "BackgroundStyle", ()=>BackgroundStyle);
var _parchment = require("parchment");
var _colorJs = require("./color.js");
const BackgroundClass = new (0, _parchment.ClassAttributor)('background', 'ql-bg', {
    scope: (0, _parchment.Scope).INLINE
});
const BackgroundStyle = new (0, _colorJs.ColorAttributor)('background', 'background-color', {
    scope: (0, _parchment.Scope).INLINE
});

},{"parchment":"1ObrB","./color.js":"boc53","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"boc53":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorAttributor", ()=>ColorAttributor);
parcelHelpers.export(exports, "ColorClass", ()=>ColorClass);
parcelHelpers.export(exports, "ColorStyle", ()=>ColorStyle);
var _parchment = require("parchment");
class ColorAttributor extends (0, _parchment.StyleAttributor) {
    value(domNode) {
        let value = super.value(domNode);
        if (!value.startsWith('rgb(')) return value;
        value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
        const hex = value.split(',').map((component)=>`00${parseInt(component, 10).toString(16)}`.slice(-2)).join('');
        return `#${hex}`;
    }
}
const ColorClass = new (0, _parchment.ClassAttributor)('color', 'ql-color', {
    scope: (0, _parchment.Scope).INLINE
});
const ColorStyle = new ColorAttributor('color', 'color', {
    scope: (0, _parchment.Scope).INLINE
});

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVakW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Code", ()=>Code);
parcelHelpers.export(exports, "CodeBlockContainer", ()=>CodeBlockContainer);
parcelHelpers.export(exports, "default", ()=>CodeBlock);
var _blockJs = require("../blots/block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
var _breakJs = require("../blots/break.js");
var _breakJsDefault = parcelHelpers.interopDefault(_breakJs);
var _cursorJs = require("../blots/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _inlineJs = require("../blots/inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
var _textJs = require("../blots/text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _containerJs = require("../blots/container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
class CodeBlockContainer extends (0, _containerJsDefault.default) {
    static create(value) {
        const domNode = super.create(value);
        domNode.setAttribute('spellcheck', 'false');
        return domNode;
    }
    code(index, length) {
        return this.children// @ts-expect-error
        .map((child)=>child.length() <= 1 ? '' : child.domNode.innerText).join('\n').slice(index, index + length);
    }
    html(index, length) {
        // `\n`s are needed in order to support empty lines at the beginning and the end.
        // https://html.spec.whatwg.org/multipage/syntax.html#element-restrictions
        return `<pre>\n${(0, _textJs.escapeText)(this.code(index, length))}\n</pre>`;
    }
}
class CodeBlock extends (0, _blockJsDefault.default) {
    static TAB = '  ';
    static register() {
        (0, _quillJsDefault.default).register(CodeBlockContainer);
    }
}
class Code extends (0, _inlineJsDefault.default) {
}
Code.blotName = 'code';
Code.tagName = 'CODE';
CodeBlock.blotName = 'code-block';
CodeBlock.className = 'ql-code-block';
CodeBlock.tagName = 'DIV';
CodeBlockContainer.blotName = 'code-block-container';
CodeBlockContainer.className = 'ql-code-block-container';
CodeBlockContainer.tagName = 'DIV';
CodeBlockContainer.allowedChildren = [
    CodeBlock
];
CodeBlock.allowedChildren = [
    (0, _textJsDefault.default),
    (0, _breakJsDefault.default),
    (0, _cursorJsDefault.default)
];
CodeBlock.requiredContainer = CodeBlockContainer;

},{"../blots/block.js":"5b8eX","../blots/break.js":"afL9w","../blots/cursor.js":"i9zqb","../blots/inline.js":"jTd5u","../blots/text.js":"cZig3","../blots/container.js":"9Vl5Z","../core/quill.js":"crqqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"db0gm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DirectionAttribute", ()=>DirectionAttribute);
parcelHelpers.export(exports, "DirectionClass", ()=>DirectionClass);
parcelHelpers.export(exports, "DirectionStyle", ()=>DirectionStyle);
var _parchment = require("parchment");
const config = {
    scope: (0, _parchment.Scope).BLOCK,
    whitelist: [
        'rtl'
    ]
};
const DirectionAttribute = new (0, _parchment.Attributor)('direction', 'dir', config);
const DirectionClass = new (0, _parchment.ClassAttributor)('direction', 'ql-direction', config);
const DirectionStyle = new (0, _parchment.StyleAttributor)('direction', 'direction', config);

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hn859":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FontStyle", ()=>FontStyle);
parcelHelpers.export(exports, "FontClass", ()=>FontClass);
var _parchment = require("parchment");
const config = {
    scope: (0, _parchment.Scope).INLINE,
    whitelist: [
        'serif',
        'monospace'
    ]
};
const FontClass = new (0, _parchment.ClassAttributor)('font', 'ql-font', config);
class FontStyleAttributor extends (0, _parchment.StyleAttributor) {
    value(node) {
        return super.value(node).replace(/["']/g, '');
    }
}
const FontStyle = new FontStyleAttributor('font', 'font-family', config);

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7d6ph":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SizeClass", ()=>SizeClass);
parcelHelpers.export(exports, "SizeStyle", ()=>SizeStyle);
var _parchment = require("parchment");
const SizeClass = new (0, _parchment.ClassAttributor)('size', 'ql-size', {
    scope: (0, _parchment.Scope).INLINE,
    whitelist: [
        'small',
        'large',
        'huge'
    ]
});
const SizeStyle = new (0, _parchment.StyleAttributor)('size', 'font-size', {
    scope: (0, _parchment.Scope).INLINE,
    whitelist: [
        '10px',
        '18px',
        '32px'
    ]
});

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fX3l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Keyboard);
parcelHelpers.export(exports, "SHORTKEY", ()=>SHORTKEY);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "deleteRange", ()=>deleteRange);
var _lodashEs = require("lodash-es");
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _parchment = require("parchment");
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
var _loggerJs = require("../core/logger.js");
var _loggerJsDefault = parcelHelpers.interopDefault(_loggerJs);
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
const debug = (0, _loggerJsDefault.default)('quill:keyboard');
const SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';
class Keyboard extends (0, _moduleJsDefault.default) {
    static match(evt, binding) {
        if ([
            'altKey',
            'ctrlKey',
            'metaKey',
            'shiftKey'
        ].some((key)=>{
            return !!binding[key] !== evt[key] && binding[key] !== null;
        })) return false;
        return binding.key === evt.key || binding.key === evt.which;
    }
    constructor(quill, options){
        super(quill, options);
        this.bindings = {};
        // @ts-expect-error Fix me later
        Object.keys(this.options.bindings).forEach((name)=>{
            // @ts-expect-error Fix me later
            if (this.options.bindings[name]) // @ts-expect-error Fix me later
            this.addBinding(this.options.bindings[name]);
        });
        this.addBinding({
            key: 'Enter',
            shiftKey: null
        }, this.handleEnter);
        this.addBinding({
            key: 'Enter',
            metaKey: null,
            ctrlKey: null,
            altKey: null
        }, ()=>{});
        if (/Firefox/i.test(navigator.userAgent)) {
            // Need to handle delete and backspace for Firefox in the general case #1171
            this.addBinding({
                key: 'Backspace'
            }, {
                collapsed: true
            }, this.handleBackspace);
            this.addBinding({
                key: 'Delete'
            }, {
                collapsed: true
            }, this.handleDelete);
        } else {
            this.addBinding({
                key: 'Backspace'
            }, {
                collapsed: true,
                prefix: /^.?$/
            }, this.handleBackspace);
            this.addBinding({
                key: 'Delete'
            }, {
                collapsed: true,
                suffix: /^.?$/
            }, this.handleDelete);
        }
        this.addBinding({
            key: 'Backspace'
        }, {
            collapsed: false
        }, this.handleDeleteRange);
        this.addBinding({
            key: 'Delete'
        }, {
            collapsed: false
        }, this.handleDeleteRange);
        this.addBinding({
            key: 'Backspace',
            altKey: null,
            ctrlKey: null,
            metaKey: null,
            shiftKey: null
        }, {
            collapsed: true,
            offset: 0
        }, this.handleBackspace);
        this.listen();
    }
    addBinding(keyBinding) {
        let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        const binding = normalize(keyBinding);
        if (binding == null) {
            debug.warn('Attempted to add invalid keyboard binding', binding);
            return;
        }
        if (typeof context === 'function') context = {
            handler: context
        };
        if (typeof handler === 'function') handler = {
            handler
        };
        const keys = Array.isArray(binding.key) ? binding.key : [
            binding.key
        ];
        keys.forEach((key)=>{
            const singleBinding = {
                ...binding,
                key,
                ...context,
                ...handler
            };
            this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];
            this.bindings[singleBinding.key].push(singleBinding);
        });
    }
    listen() {
        this.quill.root.addEventListener('keydown', (evt)=>{
            if (evt.defaultPrevented || evt.isComposing) return;
            // evt.isComposing is false when pressing Enter/Backspace when composing in Safari
            // https://bugs.webkit.org/show_bug.cgi?id=165004
            const isComposing = evt.keyCode === 229 && (evt.key === 'Enter' || evt.key === 'Backspace');
            if (isComposing) return;
            const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);
            const matches = bindings.filter((binding)=>Keyboard.match(evt, binding));
            if (matches.length === 0) return;
            // @ts-expect-error
            const blot = (0, _quillJsDefault.default).find(evt.target, true);
            if (blot && blot.scroll !== this.quill.scroll) return;
            const range = this.quill.getSelection();
            if (range == null || !this.quill.hasFocus()) return;
            const [line, offset] = this.quill.getLine(range.index);
            const [leafStart, offsetStart] = this.quill.getLeaf(range.index);
            const [leafEnd, offsetEnd] = range.length === 0 ? [
                leafStart,
                offsetStart
            ] : this.quill.getLeaf(range.index + range.length);
            const prefixText = leafStart instanceof (0, _parchment.TextBlot) ? leafStart.value().slice(0, offsetStart) : '';
            const suffixText = leafEnd instanceof (0, _parchment.TextBlot) ? leafEnd.value().slice(offsetEnd) : '';
            const curContext = {
                collapsed: range.length === 0,
                // @ts-expect-error Fix me later
                empty: range.length === 0 && line.length() <= 1,
                format: this.quill.getFormat(range),
                line,
                offset,
                prefix: prefixText,
                suffix: suffixText,
                event: evt
            };
            const prevented = matches.some((binding)=>{
                if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
                if (binding.empty != null && binding.empty !== curContext.empty) return false;
                if (binding.offset != null && binding.offset !== curContext.offset) return false;
                if (Array.isArray(binding.format)) {
                    // any format is present
                    if (binding.format.every((name)=>curContext.format[name] == null)) return false;
                } else if (typeof binding.format === 'object') {
                    // all formats must match
                    if (!Object.keys(binding.format).every((name)=>{
                        // @ts-expect-error Fix me later
                        if (binding.format[name] === true) return curContext.format[name] != null;
                        // @ts-expect-error Fix me later
                        if (binding.format[name] === false) return curContext.format[name] == null;
                        // @ts-expect-error Fix me later
                        return (0, _lodashEs.isEqual)(binding.format[name], curContext.format[name]);
                    })) return false;
                }
                if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
                if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
                // @ts-expect-error Fix me later
                return binding.handler.call(this, range, curContext, binding) !== true;
            });
            if (prevented) evt.preventDefault();
        });
    }
    handleBackspace(range, context) {
        // Check for astral symbols
        const length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
        if (range.index === 0 || this.quill.getLength() <= 1) return;
        let formats = {};
        const [line] = this.quill.getLine(range.index);
        let delta = new (0, _quillDeltaDefault.default)().retain(range.index - length).delete(length);
        if (context.offset === 0) {
            // Always deleting newline here, length always 1
            const [prev] = this.quill.getLine(range.index - 1);
            if (prev) {
                const isPrevLineEmpty = prev.statics.blotName === 'block' && prev.length() <= 1;
                if (!isPrevLineEmpty) {
                    // @ts-expect-error Fix me later
                    const curFormats = line.formats();
                    const prevFormats = this.quill.getFormat(range.index - 1, 1);
                    formats = (0, _quillDelta.AttributeMap).diff(curFormats, prevFormats) || {};
                    if (Object.keys(formats).length > 0) {
                        // line.length() - 1 targets \n in line, another -1 for newline being deleted
                        const formatDelta = new (0, _quillDeltaDefault.default)()// @ts-expect-error Fix me later
                        .retain(range.index + line.length() - 2).retain(1, formats);
                        delta = delta.compose(formatDelta);
                    }
                }
            }
        }
        this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
        this.quill.focus();
    }
    handleDelete(range, context) {
        // Check for astral symbols
        const length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
        if (range.index >= this.quill.getLength() - length) return;
        let formats = {};
        const [line] = this.quill.getLine(range.index);
        let delta = new (0, _quillDeltaDefault.default)().retain(range.index).delete(length);
        // @ts-expect-error Fix me later
        if (context.offset >= line.length() - 1) {
            const [next] = this.quill.getLine(range.index + 1);
            if (next) {
                // @ts-expect-error Fix me later
                const curFormats = line.formats();
                const nextFormats = this.quill.getFormat(range.index, 1);
                formats = (0, _quillDelta.AttributeMap).diff(curFormats, nextFormats) || {};
                if (Object.keys(formats).length > 0) delta = delta.retain(next.length() - 1).retain(1, formats);
            }
        }
        this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
        this.quill.focus();
    }
    handleDeleteRange(range) {
        deleteRange({
            range,
            quill: this.quill
        });
        this.quill.focus();
    }
    handleEnter(range, context) {
        const lineFormats = Object.keys(context.format).reduce((formats, format)=>{
            if (this.quill.scroll.query(format, (0, _parchment.Scope).BLOCK) && !Array.isArray(context.format[format])) formats[format] = context.format[format];
            return formats;
        }, {});
        const delta = new (0, _quillDeltaDefault.default)().retain(range.index).delete(range.length).insert('\n', lineFormats);
        this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
        this.quill.setSelection(range.index + 1, (0, _quillJsDefault.default).sources.SILENT);
        this.quill.focus();
    }
}
const defaultOptions = {
    bindings: {
        bold: makeFormatHandler('bold'),
        italic: makeFormatHandler('italic'),
        underline: makeFormatHandler('underline'),
        indent: {
            // highlight tab or tab at beginning of list, indent or blockquote
            key: 'Tab',
            format: [
                'blockquote',
                'indent',
                'list'
            ],
            handler (range, context) {
                if (context.collapsed && context.offset !== 0) return true;
                this.quill.format('indent', '+1', (0, _quillJsDefault.default).sources.USER);
                return false;
            }
        },
        outdent: {
            key: 'Tab',
            shiftKey: true,
            format: [
                'blockquote',
                'indent',
                'list'
            ],
            // highlight tab or tab at beginning of list, indent or blockquote
            handler (range, context) {
                if (context.collapsed && context.offset !== 0) return true;
                this.quill.format('indent', '-1', (0, _quillJsDefault.default).sources.USER);
                return false;
            }
        },
        'outdent backspace': {
            key: 'Backspace',
            collapsed: true,
            shiftKey: null,
            metaKey: null,
            ctrlKey: null,
            altKey: null,
            format: [
                'indent',
                'list'
            ],
            offset: 0,
            handler (range, context) {
                if (context.format.indent != null) this.quill.format('indent', '-1', (0, _quillJsDefault.default).sources.USER);
                else if (context.format.list != null) this.quill.format('list', false, (0, _quillJsDefault.default).sources.USER);
            }
        },
        'indent code-block': makeCodeBlockHandler(true),
        'outdent code-block': makeCodeBlockHandler(false),
        'remove tab': {
            key: 'Tab',
            shiftKey: true,
            collapsed: true,
            prefix: /\t$/,
            handler (range) {
                this.quill.deleteText(range.index - 1, 1, (0, _quillJsDefault.default).sources.USER);
            }
        },
        tab: {
            key: 'Tab',
            handler (range, context) {
                if (context.format.table) return true;
                this.quill.history.cutoff();
                const delta = new (0, _quillDeltaDefault.default)().retain(range.index).delete(range.length).insert('\t');
                this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
                this.quill.history.cutoff();
                this.quill.setSelection(range.index + 1, (0, _quillJsDefault.default).sources.SILENT);
                return false;
            }
        },
        'blockquote empty enter': {
            key: 'Enter',
            collapsed: true,
            format: [
                'blockquote'
            ],
            empty: true,
            handler () {
                this.quill.format('blockquote', false, (0, _quillJsDefault.default).sources.USER);
            }
        },
        'list empty enter': {
            key: 'Enter',
            collapsed: true,
            format: [
                'list'
            ],
            empty: true,
            handler (range, context) {
                const formats = {
                    list: false
                };
                if (context.format.indent) formats.indent = false;
                this.quill.formatLine(range.index, range.length, formats, (0, _quillJsDefault.default).sources.USER);
            }
        },
        'checklist enter': {
            key: 'Enter',
            collapsed: true,
            format: {
                list: 'checked'
            },
            handler (range) {
                const [line, offset] = this.quill.getLine(range.index);
                const formats = {
                    // @ts-expect-error Fix me later
                    ...line.formats(),
                    list: 'checked'
                };
                const delta = new (0, _quillDeltaDefault.default)().retain(range.index).insert('\n', formats)// @ts-expect-error Fix me later
                .retain(line.length() - offset - 1).retain(1, {
                    list: 'unchecked'
                });
                this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
                this.quill.setSelection(range.index + 1, (0, _quillJsDefault.default).sources.SILENT);
                this.quill.scrollSelectionIntoView();
            }
        },
        'header enter': {
            key: 'Enter',
            collapsed: true,
            format: [
                'header'
            ],
            suffix: /^$/,
            handler (range, context) {
                const [line, offset] = this.quill.getLine(range.index);
                const delta = new (0, _quillDeltaDefault.default)().retain(range.index).insert('\n', context.format)// @ts-expect-error Fix me later
                .retain(line.length() - offset - 1).retain(1, {
                    header: null
                });
                this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
                this.quill.setSelection(range.index + 1, (0, _quillJsDefault.default).sources.SILENT);
                this.quill.scrollSelectionIntoView();
            }
        },
        'table backspace': {
            key: 'Backspace',
            format: [
                'table'
            ],
            collapsed: true,
            offset: 0,
            handler () {}
        },
        'table delete': {
            key: 'Delete',
            format: [
                'table'
            ],
            collapsed: true,
            suffix: /^$/,
            handler () {}
        },
        'table enter': {
            key: 'Enter',
            shiftKey: null,
            format: [
                'table'
            ],
            handler (range) {
                const module = this.quill.getModule('table');
                if (module) {
                    // @ts-expect-error
                    const [table, row, cell, offset] = module.getTable(range);
                    const shift = tableSide(table, row, cell, offset);
                    if (shift == null) return;
                    let index = table.offset();
                    if (shift < 0) {
                        const delta = new (0, _quillDeltaDefault.default)().retain(index).insert('\n');
                        this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
                        this.quill.setSelection(range.index + 1, range.length, (0, _quillJsDefault.default).sources.SILENT);
                    } else if (shift > 0) {
                        index += table.length();
                        const delta = new (0, _quillDeltaDefault.default)().retain(index).insert('\n');
                        this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
                        this.quill.setSelection(index, (0, _quillJsDefault.default).sources.USER);
                    }
                }
            }
        },
        'table tab': {
            key: 'Tab',
            shiftKey: null,
            format: [
                'table'
            ],
            handler (range, context) {
                const { event, line: cell } = context;
                const offset = cell.offset(this.quill.scroll);
                if (event.shiftKey) this.quill.setSelection(offset - 1, (0, _quillJsDefault.default).sources.USER);
                else this.quill.setSelection(offset + cell.length(), (0, _quillJsDefault.default).sources.USER);
            }
        },
        'list autofill': {
            key: ' ',
            shiftKey: null,
            collapsed: true,
            format: {
                'code-block': false,
                blockquote: false,
                table: false
            },
            prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
            handler (range, context) {
                if (this.quill.scroll.query('list') == null) return true;
                const { length } = context.prefix;
                const [line, offset] = this.quill.getLine(range.index);
                if (offset > length) return true;
                let value;
                switch(context.prefix.trim()){
                    case '[]':
                    case '[ ]':
                        value = 'unchecked';
                        break;
                    case '[x]':
                        value = 'checked';
                        break;
                    case '-':
                    case '*':
                        value = 'bullet';
                        break;
                    default:
                        value = 'ordered';
                }
                this.quill.insertText(range.index, ' ', (0, _quillJsDefault.default).sources.USER);
                this.quill.history.cutoff();
                const delta = new (0, _quillDeltaDefault.default)().retain(range.index - offset).delete(length + 1)// @ts-expect-error Fix me later
                .retain(line.length() - 2 - offset).retain(1, {
                    list: value
                });
                this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
                this.quill.history.cutoff();
                this.quill.setSelection(range.index - length, (0, _quillJsDefault.default).sources.SILENT);
                return false;
            }
        },
        'code exit': {
            key: 'Enter',
            collapsed: true,
            format: [
                'code-block'
            ],
            prefix: /^$/,
            suffix: /^\s*$/,
            handler (range) {
                const [line, offset] = this.quill.getLine(range.index);
                let numLines = 2;
                let cur = line;
                while(cur != null && cur.length() <= 1 && cur.formats()['code-block']){
                    // @ts-expect-error
                    cur = cur.prev;
                    numLines -= 1;
                    // Requisite prev lines are empty
                    if (numLines <= 0) {
                        const delta = new (0, _quillDeltaDefault.default)()// @ts-expect-error Fix me later
                        .retain(range.index + line.length() - offset - 2).retain(1, {
                            'code-block': null
                        }).delete(1);
                        this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
                        this.quill.setSelection(range.index - 1, (0, _quillJsDefault.default).sources.SILENT);
                        return false;
                    }
                }
                return true;
            }
        },
        'embed left': makeEmbedArrowHandler('ArrowLeft', false),
        'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),
        'embed right': makeEmbedArrowHandler('ArrowRight', false),
        'embed right shift': makeEmbedArrowHandler('ArrowRight', true),
        'table down': makeTableArrowHandler(false),
        'table up': makeTableArrowHandler(true)
    }
};
Keyboard.DEFAULTS = defaultOptions;
function makeCodeBlockHandler(indent) {
    return {
        key: 'Tab',
        shiftKey: !indent,
        format: {
            'code-block': true
        },
        handler (range, _ref) {
            let { event } = _ref;
            const CodeBlock = this.quill.scroll.query('code-block');
            // @ts-expect-error
            const { TAB } = CodeBlock;
            if (range.length === 0 && !event.shiftKey) {
                this.quill.insertText(range.index, TAB, (0, _quillJsDefault.default).sources.USER);
                this.quill.setSelection(range.index + TAB.length, (0, _quillJsDefault.default).sources.SILENT);
                return;
            }
            const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);
            let { index, length } = range;
            lines.forEach((line, i)=>{
                if (indent) {
                    line.insertAt(0, TAB);
                    if (i === 0) index += TAB.length;
                    else length += TAB.length;
                // @ts-expect-error Fix me later
                } else if (line.domNode.textContent.startsWith(TAB)) {
                    line.deleteAt(0, TAB.length);
                    if (i === 0) index -= TAB.length;
                    else length -= TAB.length;
                }
            });
            this.quill.update((0, _quillJsDefault.default).sources.USER);
            this.quill.setSelection(index, length, (0, _quillJsDefault.default).sources.SILENT);
        }
    };
}
function makeEmbedArrowHandler(key, shiftKey) {
    const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';
    return {
        key,
        shiftKey,
        altKey: null,
        [where]: /^$/,
        handler (range) {
            let { index } = range;
            if (key === 'ArrowRight') index += range.length + 1;
            const [leaf] = this.quill.getLeaf(index);
            if (!(leaf instanceof (0, _parchment.EmbedBlot))) return true;
            if (key === 'ArrowLeft') {
                if (shiftKey) this.quill.setSelection(range.index - 1, range.length + 1, (0, _quillJsDefault.default).sources.USER);
                else this.quill.setSelection(range.index - 1, (0, _quillJsDefault.default).sources.USER);
            } else if (shiftKey) this.quill.setSelection(range.index, range.length + 1, (0, _quillJsDefault.default).sources.USER);
            else this.quill.setSelection(range.index + range.length + 1, (0, _quillJsDefault.default).sources.USER);
            return false;
        }
    };
}
function makeFormatHandler(format) {
    return {
        key: format[0],
        shortKey: true,
        handler (range, context) {
            this.quill.format(format, !context.format[format], (0, _quillJsDefault.default).sources.USER);
        }
    };
}
function makeTableArrowHandler(up) {
    return {
        key: up ? 'ArrowUp' : 'ArrowDown',
        collapsed: true,
        format: [
            'table'
        ],
        handler (range, context) {
            // TODO move to table module
            const key = up ? 'prev' : 'next';
            const cell = context.line;
            const targetRow = cell.parent[key];
            if (targetRow != null) {
                if (targetRow.statics.blotName === 'table-row') {
                    // @ts-expect-error
                    let targetCell = targetRow.children.head;
                    let cur = cell;
                    while(cur.prev != null){
                        // @ts-expect-error
                        cur = cur.prev;
                        targetCell = targetCell.next;
                    }
                    const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);
                    this.quill.setSelection(index, 0, (0, _quillJsDefault.default).sources.USER);
                }
            } else {
                // @ts-expect-error
                const targetLine = cell.table()[key];
                if (targetLine != null) {
                    if (up) this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, (0, _quillJsDefault.default).sources.USER);
                    else this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, (0, _quillJsDefault.default).sources.USER);
                }
            }
            return false;
        }
    };
}
function normalize(binding) {
    if (typeof binding === 'string' || typeof binding === 'number') binding = {
        key: binding
    };
    else if (typeof binding === 'object') binding = (0, _lodashEs.cloneDeep)(binding);
    else return null;
    if (binding.shortKey) {
        binding[SHORTKEY] = binding.shortKey;
        delete binding.shortKey;
    }
    return binding;
}
// TODO: Move into quill.ts or editor.ts
function deleteRange(_ref2) {
    let { quill, range } = _ref2;
    const lines = quill.getLines(range);
    let formats = {};
    if (lines.length > 1) {
        const firstFormats = lines[0].formats();
        const lastFormats = lines[lines.length - 1].formats();
        formats = (0, _quillDelta.AttributeMap).diff(lastFormats, firstFormats) || {};
    }
    quill.deleteText(range, (0, _quillJsDefault.default).sources.USER);
    if (Object.keys(formats).length > 0) quill.formatLine(range.index, 1, formats, (0, _quillJsDefault.default).sources.USER);
    quill.setSelection(range.index, (0, _quillJsDefault.default).sources.SILENT);
}
function tableSide(_table, row, cell, offset) {
    if (row.prev == null && row.next == null) {
        if (cell.prev == null && cell.next == null) return offset === 0 ? -1 : 1;
        return cell.prev == null ? -1 : 1;
    }
    if (row.prev == null) return -1;
    if (row.next == null) return 1;
    return null;
}

},{"lodash-es":"bXNwz","quill-delta":"fqWT0","parchment":"1ObrB","../core/quill.js":"crqqt","../core/logger.js":"4RIBY","../core/module.js":"7945f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21esG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _googleDocsJs = require("./normalizers/googleDocs.js");
var _googleDocsJsDefault = parcelHelpers.interopDefault(_googleDocsJs);
var _msWordJs = require("./normalizers/msWord.js");
var _msWordJsDefault = parcelHelpers.interopDefault(_msWordJs);
const NORMALIZERS = [
    (0, _msWordJsDefault.default),
    (0, _googleDocsJsDefault.default)
];
const normalizeExternalHTML = (doc)=>{
    if (doc.documentElement) NORMALIZERS.forEach((normalize)=>{
        normalize(doc);
    });
};
exports.default = normalizeExternalHTML;

},{"./normalizers/googleDocs.js":"lk69c","./normalizers/msWord.js":"97vh1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lk69c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>normalize);
const normalWeightRegexp = /font-weight:\s*normal/;
const blockTagNames = [
    'P',
    'OL',
    'UL'
];
const isBlockElement = (element)=>{
    return element && blockTagNames.includes(element.tagName);
};
const normalizeEmptyLines = (doc)=>{
    Array.from(doc.querySelectorAll('br')).filter((br)=>isBlockElement(br.previousElementSibling) && isBlockElement(br.nextElementSibling)).forEach((br)=>{
        br.parentNode?.removeChild(br);
    });
};
const normalizeFontWeight = (doc)=>{
    Array.from(doc.querySelectorAll('b[style*="font-weight"]')).filter((node)=>node.getAttribute('style')?.match(normalWeightRegexp)).forEach((node)=>{
        const fragment = doc.createDocumentFragment();
        fragment.append(...node.childNodes);
        node.parentNode?.replaceChild(fragment, node);
    });
};
function normalize(doc) {
    if (doc.querySelector('[id^="docs-internal-guid-"]')) {
        normalizeFontWeight(doc);
        normalizeEmptyLines(doc);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97vh1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>normalize);
const ignoreRegexp = /\bmso-list:[^;]*ignore/i;
const idRegexp = /\bmso-list:[^;]*\bl(\d+)/i;
const indentRegexp = /\bmso-list:[^;]*\blevel(\d+)/i;
const parseListItem = (element, html)=>{
    const style = element.getAttribute('style');
    const idMatch = style?.match(idRegexp);
    if (!idMatch) return null;
    const id = Number(idMatch[1]);
    const indentMatch = style?.match(indentRegexp);
    const indent = indentMatch ? Number(indentMatch[1]) : 1;
    const typeRegexp = new RegExp(`@list l${id}:level${indent}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, 'i');
    const typeMatch = html.match(typeRegexp);
    const type = typeMatch && typeMatch[1] === 'bullet' ? 'bullet' : 'ordered';
    return {
        id,
        indent,
        type,
        element
    };
};
// list items are represented as `p` tags with styles like `mso-list: l0 level1` where:
// 1. "0" in "l0" means the list item id;
// 2. "1" in "level1" means the indent level, starting from 1.
const normalizeListItem = (doc)=>{
    const msoList = Array.from(doc.querySelectorAll('[style*=mso-list]'));
    const ignored = [];
    const others = [];
    msoList.forEach((node)=>{
        const shouldIgnore = (node.getAttribute('style') || '').match(ignoreRegexp);
        if (shouldIgnore) ignored.push(node);
        else others.push(node);
    });
    // Each list item contains a marker wrapped with "mso-list: Ignore".
    ignored.forEach((node)=>node.parentNode?.removeChild(node));
    // The list stype is not defined inline with the tag, instead, it's in the
    // style tag so we need to pass the html as a string.
    const html = doc.documentElement.innerHTML;
    const listItems = others.map((element)=>parseListItem(element, html)).filter((parsed)=>parsed);
    while(listItems.length){
        const childListItems = [];
        let current = listItems.shift();
        // Group continuous items into the same group (aka "ul")
        while(current){
            childListItems.push(current);
            current = listItems.length && listItems[0]?.element === current.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
            listItems[0].id === current.id ? listItems.shift() : null;
        }
        const ul = document.createElement('ul');
        childListItems.forEach((listItem)=>{
            const li = document.createElement('li');
            li.setAttribute('data-list', listItem.type);
            if (listItem.indent > 1) li.setAttribute('class', `ql-indent-${listItem.indent - 1}`);
            li.innerHTML = listItem.element.innerHTML;
            ul.appendChild(li);
        });
        const element = childListItems[0]?.element;
        const { parentNode } = element ?? {};
        if (element) parentNode?.replaceChild(ul, element);
        childListItems.slice(1).forEach((_ref)=>{
            let { element: e } = _ref;
            parentNode?.removeChild(e);
        });
    }
};
function normalize(doc) {
    if (doc.documentElement.getAttribute('xmlns:w') === 'urn:schemas-microsoft-com:office:word') normalizeListItem(doc);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6cvt5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>History);
parcelHelpers.export(exports, "getLastChangeIndex", ()=>getLastChangeIndex);
var _parchment = require("parchment");
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
class History extends (0, _moduleJsDefault.default) {
    static DEFAULTS = {
        delay: 1000,
        maxStack: 100,
        userOnly: false
    };
    lastRecorded = 0;
    ignoreChange = false;
    stack = {
        undo: [],
        redo: []
    };
    currentRange = null;
    constructor(quill, options){
        super(quill, options);
        this.quill.on((0, _quillJsDefault.default).events.EDITOR_CHANGE, (eventName, value, oldValue, source)=>{
            if (eventName === (0, _quillJsDefault.default).events.SELECTION_CHANGE) {
                if (value && source !== (0, _quillJsDefault.default).sources.SILENT) this.currentRange = value;
            } else if (eventName === (0, _quillJsDefault.default).events.TEXT_CHANGE) {
                if (!this.ignoreChange) {
                    if (!this.options.userOnly || source === (0, _quillJsDefault.default).sources.USER) this.record(value, oldValue);
                    else this.transform(value);
                }
                this.currentRange = transformRange(this.currentRange, value);
            }
        });
        this.quill.keyboard.addBinding({
            key: 'z',
            shortKey: true
        }, this.undo.bind(this));
        this.quill.keyboard.addBinding({
            key: [
                'z',
                'Z'
            ],
            shortKey: true,
            shiftKey: true
        }, this.redo.bind(this));
        if (/Win/i.test(navigator.platform)) this.quill.keyboard.addBinding({
            key: 'y',
            shortKey: true
        }, this.redo.bind(this));
        this.quill.root.addEventListener('beforeinput', (event)=>{
            if (event.inputType === 'historyUndo') {
                this.undo();
                event.preventDefault();
            } else if (event.inputType === 'historyRedo') {
                this.redo();
                event.preventDefault();
            }
        });
    }
    change(source, dest) {
        if (this.stack[source].length === 0) return;
        const item = this.stack[source].pop();
        if (!item) return;
        const base = this.quill.getContents();
        const inverseDelta = item.delta.invert(base);
        this.stack[dest].push({
            delta: inverseDelta,
            range: transformRange(item.range, inverseDelta)
        });
        this.lastRecorded = 0;
        this.ignoreChange = true;
        this.quill.updateContents(item.delta, (0, _quillJsDefault.default).sources.USER);
        this.ignoreChange = false;
        this.restoreSelection(item);
    }
    clear() {
        this.stack = {
            undo: [],
            redo: []
        };
    }
    cutoff() {
        this.lastRecorded = 0;
    }
    record(changeDelta, oldDelta) {
        if (changeDelta.ops.length === 0) return;
        this.stack.redo = [];
        let undoDelta = changeDelta.invert(oldDelta);
        let undoRange = this.currentRange;
        const timestamp = Date.now();
        if (// @ts-expect-error Fix me later
        this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
            const item = this.stack.undo.pop();
            if (item) {
                undoDelta = undoDelta.compose(item.delta);
                undoRange = item.range;
            }
        } else this.lastRecorded = timestamp;
        if (undoDelta.length() === 0) return;
        this.stack.undo.push({
            delta: undoDelta,
            range: undoRange
        });
        // @ts-expect-error Fix me later
        if (this.stack.undo.length > this.options.maxStack) this.stack.undo.shift();
    }
    redo() {
        this.change('redo', 'undo');
    }
    transform(delta) {
        transformStack(this.stack.undo, delta);
        transformStack(this.stack.redo, delta);
    }
    undo() {
        this.change('undo', 'redo');
    }
    restoreSelection(stackItem) {
        if (stackItem.range) this.quill.setSelection(stackItem.range, (0, _quillJsDefault.default).sources.USER);
        else {
            const index = getLastChangeIndex(this.quill.scroll, stackItem.delta);
            this.quill.setSelection(index, (0, _quillJsDefault.default).sources.USER);
        }
    }
}
function transformStack(stack, delta) {
    let remoteDelta = delta;
    for(let i = stack.length - 1; i >= 0; i -= 1){
        const oldItem = stack[i];
        stack[i] = {
            delta: remoteDelta.transform(oldItem.delta, true),
            range: oldItem.range && transformRange(oldItem.range, remoteDelta)
        };
        remoteDelta = oldItem.delta.transform(remoteDelta);
        if (stack[i].delta.length() === 0) stack.splice(i, 1);
    }
}
function endsWithNewlineChange(scroll, delta) {
    const lastOp = delta.ops[delta.ops.length - 1];
    if (lastOp == null) return false;
    if (lastOp.insert != null) return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
    if (lastOp.attributes != null) return Object.keys(lastOp.attributes).some((attr)=>{
        return scroll.query(attr, (0, _parchment.Scope).BLOCK) != null;
    });
    return false;
}
function getLastChangeIndex(scroll, delta) {
    const deleteLength = delta.reduce((length, op)=>{
        return length + (op.delete || 0);
    }, 0);
    let changeIndex = delta.length() - deleteLength;
    if (endsWithNewlineChange(scroll, delta)) changeIndex -= 1;
    return changeIndex;
}
function transformRange(range, delta) {
    if (!range) return range;
    const start = delta.transformPosition(range.index);
    const end = delta.transformPosition(range.index + range.length);
    return {
        index: start,
        length: end - start
    };
}

},{"parchment":"1ObrB","../core/module.js":"7945f","../core/quill.js":"crqqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnTkf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _emitterJs = require("../core/emitter.js");
var _emitterJsDefault = parcelHelpers.interopDefault(_emitterJs);
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
class Uploader extends (0, _moduleJsDefault.default) {
    constructor(quill, options){
        super(quill, options);
        quill.root.addEventListener('drop', (e)=>{
            e.preventDefault();
            let native = null;
            if (document.caretRangeFromPoint) native = document.caretRangeFromPoint(e.clientX, e.clientY);
            else if (document.caretPositionFromPoint) {
                // @ts-expect-error
                const position = document.caretPositionFromPoint(e.clientX, e.clientY);
                native = document.createRange();
                native.setStart(position.offsetNode, position.offset);
                native.setEnd(position.offsetNode, position.offset);
            }
            const normalized = native && quill.selection.normalizeNative(native);
            if (normalized) {
                const range = quill.selection.normalizedToRange(normalized);
                if (e.dataTransfer?.files) this.upload(range, e.dataTransfer.files);
            }
        });
    }
    upload(range, files) {
        const uploads = [];
        Array.from(files).forEach((file)=>{
            if (file && this.options.mimetypes?.includes(file.type)) uploads.push(file);
        });
        if (uploads.length > 0) // @ts-expect-error Fix me later
        this.options.handler.call(this, range, uploads);
    }
}
Uploader.DEFAULTS = {
    mimetypes: [
        'image/png',
        'image/jpeg'
    ],
    handler (range, files) {
        if (!this.quill.scroll.query('image')) return;
        const promises = files.map((file)=>{
            return new Promise((resolve)=>{
                const reader = new FileReader();
                reader.onload = ()=>{
                    resolve(reader.result);
                };
                reader.readAsDataURL(file);
            });
        });
        Promise.all(promises).then((images)=>{
            const update = images.reduce((delta, image)=>{
                return delta.insert({
                    image
                });
            }, new (0, _quillDeltaDefault.default)().retain(range.index).delete(range.length));
            this.quill.updateContents(update, (0, _emitterJsDefault.default).sources.USER);
            this.quill.setSelection(range.index + images.length, (0, _emitterJsDefault.default).sources.SILENT);
        });
    }
};
exports.default = Uploader;

},{"quill-delta":"fqWT0","../core/emitter.js":"EzLd4","../core/module.js":"7945f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iOHID":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
var _keyboardJs = require("./keyboard.js");
const INSERT_TYPES = [
    'insertText',
    'insertReplacementText'
];
class Input extends (0, _moduleJsDefault.default) {
    constructor(quill, options){
        super(quill, options);
        quill.root.addEventListener('beforeinput', (event)=>{
            this.handleBeforeInput(event);
        });
        // Gboard with English input on Android triggers `compositionstart` sometimes even
        // users are not going to type anything.
        if (!/Android/i.test(navigator.userAgent)) quill.on((0, _quillJsDefault.default).events.COMPOSITION_BEFORE_START, ()=>{
            this.handleCompositionStart();
        });
    }
    deleteRange(range) {
        (0, _keyboardJs.deleteRange)({
            range,
            quill: this.quill
        });
    }
    replaceText(range) {
        let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        if (range.length === 0) return false;
        if (text) {
            // Follow the native behavior that inherits the formats of the first character
            const formats = this.quill.getFormat(range.index, 1);
            this.deleteRange(range);
            this.quill.updateContents(new (0, _quillDeltaDefault.default)().retain(range.index).insert(text, formats), (0, _quillJsDefault.default).sources.USER);
        } else this.deleteRange(range);
        this.quill.setSelection(range.index + text.length, 0, (0, _quillJsDefault.default).sources.SILENT);
        return true;
    }
    handleBeforeInput(event) {
        if (this.quill.composition.isComposing || event.defaultPrevented || !INSERT_TYPES.includes(event.inputType)) return;
        const staticRange = event.getTargetRanges ? event.getTargetRanges()[0] : null;
        if (!staticRange || staticRange.collapsed === true) return;
        const text = getPlainTextFromInputEvent(event);
        if (text == null) return;
        const normalized = this.quill.selection.normalizeNative(staticRange);
        const range = normalized ? this.quill.selection.normalizedToRange(normalized) : null;
        if (range && this.replaceText(range, text)) event.preventDefault();
    }
    handleCompositionStart() {
        const range = this.quill.getSelection();
        if (range) this.replaceText(range);
    }
}
function getPlainTextFromInputEvent(event) {
    // When `inputType` is "insertText":
    // - `event.data` should be string (Safari uses `event.dataTransfer`).
    // - `event.dataTransfer` should be null.
    // When `inputType` is "insertReplacementText":
    // - `event.data` should be null.
    // - `event.dataTransfer` should contain "text/plain" data.
    if (typeof event.data === 'string') return event.data;
    if (event.dataTransfer?.types.includes('text/plain')) return event.dataTransfer.getData('text/plain');
    return null;
}
exports.default = Input;

},{"quill-delta":"fqWT0","../core/module.js":"7945f","../core/quill.js":"crqqt","./keyboard.js":"6fX3l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itUoD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TTL_FOR_VALID_SELECTION_CHANGE", ()=>TTL_FOR_VALID_SELECTION_CHANGE);
var _parchment = require("parchment");
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
const isMac = /Mac/i.test(navigator.platform);
const TTL_FOR_VALID_SELECTION_CHANGE = 100;
// A loose check to determine if the shortcut can move the caret before a UI node:
// <ANY_PARENT>[CARET]<div class="ql-ui"></div>[CONTENT]</ANY_PARENT>
const canMoveCaretBeforeUINode = (event)=>{
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || // RTL scripts or moving from the end of the previous line
    event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home') return true;
    if (isMac && event.key === 'a' && event.ctrlKey === true) return true;
    return false;
};
class UINode extends (0, _moduleJsDefault.default) {
    isListening = false;
    selectionChangeDeadline = 0;
    constructor(quill, options){
        super(quill, options);
        this.handleArrowKeys();
        this.handleNavigationShortcuts();
    }
    handleArrowKeys() {
        this.quill.keyboard.addBinding({
            key: [
                'ArrowLeft',
                'ArrowRight'
            ],
            offset: 0,
            shiftKey: null,
            handler (range, _ref) {
                let { line, event } = _ref;
                if (!(line instanceof (0, _parchment.ParentBlot)) || !line.uiNode) return true;
                const isRTL = getComputedStyle(line.domNode)['direction'] === 'rtl';
                if (isRTL && event.key !== 'ArrowRight' || !isRTL && event.key !== 'ArrowLeft') return true;
                this.quill.setSelection(range.index - 1, range.length + (event.shiftKey ? 1 : 0), (0, _quillJsDefault.default).sources.USER);
                return false;
            }
        });
    }
    handleNavigationShortcuts() {
        this.quill.root.addEventListener('keydown', (event)=>{
            if (!event.defaultPrevented && canMoveCaretBeforeUINode(event)) this.ensureListeningToSelectionChange();
        });
    }
    /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */ ensureListeningToSelectionChange() {
        this.selectionChangeDeadline = Date.now() + TTL_FOR_VALID_SELECTION_CHANGE;
        if (this.isListening) return;
        this.isListening = true;
        const listener = ()=>{
            this.isListening = false;
            if (Date.now() <= this.selectionChangeDeadline) this.handleSelectionChange();
        };
        document.addEventListener('selectionchange', listener, {
            once: true
        });
    }
    handleSelectionChange() {
        const selection = document.getSelection();
        if (!selection) return;
        const range = selection.getRangeAt(0);
        if (range.collapsed !== true || range.startOffset !== 0) return;
        const line = this.quill.scroll.find(range.startContainer);
        if (!(line instanceof (0, _parchment.ParentBlot)) || !line.uiNode) return;
        const newRange = document.createRange();
        newRange.setStartAfter(line.uiNode);
        newRange.setEndAfter(line.uiNode);
        selection.removeAllRanges();
        selection.addRange(newRange);
    }
}
exports.default = UINode;

},{"parchment":"1ObrB","../core/module.js":"7945f","../core/quill.js":"crqqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAXJN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
class IndentAttributor extends (0, _parchment.ClassAttributor) {
    add(node, value) {
        let normalizedValue = 0;
        if (value === '+1' || value === '-1') {
            const indent = this.value(node) || 0;
            normalizedValue = value === '+1' ? indent + 1 : indent - 1;
        } else if (typeof value === 'number') normalizedValue = value;
        if (normalizedValue === 0) {
            this.remove(node);
            return true;
        }
        return super.add(node, normalizedValue.toString());
    }
    canAdd(node, value) {
        return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));
    }
    value(node) {
        return parseInt(super.value(node), 10) || undefined; // Don't return NaN
    }
}
const IndentClass = new IndentAttributor('indent', 'ql-indent', {
    scope: (0, _parchment.Scope).BLOCK,
    // @ts-expect-error
    whitelist: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ]
});
exports.default = IndentClass;

},{"parchment":"1ObrB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rfwo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _blockJs = require("../blots/block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
class Blockquote extends (0, _blockJsDefault.default) {
    static blotName = 'blockquote';
    static tagName = 'blockquote';
}
exports.default = Blockquote;

},{"../blots/block.js":"5b8eX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86TLB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _blockJs = require("../blots/block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
class Header extends (0, _blockJsDefault.default) {
    static blotName = 'header';
    static tagName = [
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'H6'
    ];
    static formats(domNode) {
        return this.tagName.indexOf(domNode.tagName) + 1;
    }
}
exports.default = Header;

},{"../blots/block.js":"5b8eX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yTPD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ListContainer", ()=>ListContainer);
parcelHelpers.export(exports, "default", ()=>ListItem);
var _blockJs = require("../blots/block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
var _containerJs = require("../blots/container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
class ListContainer extends (0, _containerJsDefault.default) {
}
ListContainer.blotName = 'list-container';
ListContainer.tagName = 'OL';
class ListItem extends (0, _blockJsDefault.default) {
    static create(value) {
        const node = super.create();
        node.setAttribute('data-list', value);
        return node;
    }
    static formats(domNode) {
        return domNode.getAttribute('data-list') || undefined;
    }
    static register() {
        (0, _quillJsDefault.default).register(ListContainer);
    }
    constructor(scroll, domNode){
        super(scroll, domNode);
        const ui = domNode.ownerDocument.createElement('span');
        const listEventHandler = (e)=>{
            if (!scroll.isEnabled()) return;
            const format = this.statics.formats(domNode, scroll);
            if (format === 'checked') {
                this.format('list', 'unchecked');
                e.preventDefault();
            } else if (format === 'unchecked') {
                this.format('list', 'checked');
                e.preventDefault();
            }
        };
        ui.addEventListener('mousedown', listEventHandler);
        ui.addEventListener('touchstart', listEventHandler);
        this.attachUI(ui);
    }
    format(name, value) {
        if (name === this.statics.blotName && value) this.domNode.setAttribute('data-list', value);
        else super.format(name, value);
    }
}
ListItem.blotName = 'list';
ListItem.tagName = 'LI';
ListContainer.allowedChildren = [
    ListItem
];
ListItem.requiredContainer = ListContainer;

},{"../blots/block.js":"5b8eX","../blots/container.js":"9Vl5Z","../core/quill.js":"crqqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SaFZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _inlineJs = require("../blots/inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
class Bold extends (0, _inlineJsDefault.default) {
    static blotName = 'bold';
    static tagName = [
        'STRONG',
        'B'
    ];
    static create() {
        return super.create();
    }
    static formats() {
        return true;
    }
    optimize(context) {
        super.optimize(context);
        if (this.domNode.tagName !== this.statics.tagName[0]) this.replaceWith(this.statics.blotName);
    }
}
exports.default = Bold;

},{"../blots/inline.js":"jTd5u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8RWC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _boldJs = require("./bold.js");
var _boldJsDefault = parcelHelpers.interopDefault(_boldJs);
class Italic extends (0, _boldJsDefault.default) {
    static blotName = 'italic';
    static tagName = [
        'EM',
        'I'
    ];
}
exports.default = Italic;

},{"./bold.js":"4SaFZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rnfCc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Link);
parcelHelpers.export(exports, "sanitize", ()=>sanitize);
var _inlineJs = require("../blots/inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
class Link extends (0, _inlineJsDefault.default) {
    static blotName = 'link';
    static tagName = 'A';
    static SANITIZED_URL = 'about:blank';
    static PROTOCOL_WHITELIST = [
        'http',
        'https',
        'mailto',
        'tel',
        'sms'
    ];
    static create(value) {
        const node = super.create(value);
        node.setAttribute('href', this.sanitize(value));
        node.setAttribute('rel', 'noopener noreferrer');
        node.setAttribute('target', '_blank');
        return node;
    }
    static formats(domNode) {
        return domNode.getAttribute('href');
    }
    static sanitize(url) {
        return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
    }
    format(name, value) {
        if (name !== this.statics.blotName || !value) super.format(name, value);
        else // @ts-expect-error
        this.domNode.setAttribute('href', this.constructor.sanitize(value));
    }
}
function sanitize(url, protocols) {
    const anchor = document.createElement('a');
    anchor.href = url;
    const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
    return protocols.indexOf(protocol) > -1;
}

},{"../blots/inline.js":"jTd5u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rbj0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _inlineJs = require("../blots/inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
class Script extends (0, _inlineJsDefault.default) {
    static blotName = 'script';
    static tagName = [
        'SUB',
        'SUP'
    ];
    static create(value) {
        if (value === 'super') return document.createElement('sup');
        if (value === 'sub') return document.createElement('sub');
        return super.create(value);
    }
    static formats(domNode) {
        if (domNode.tagName === 'SUB') return 'sub';
        if (domNode.tagName === 'SUP') return 'super';
        return undefined;
    }
}
exports.default = Script;

},{"../blots/inline.js":"jTd5u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10HHC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _boldJs = require("./bold.js");
var _boldJsDefault = parcelHelpers.interopDefault(_boldJs);
class Strike extends (0, _boldJsDefault.default) {
    static blotName = 'strike';
    static tagName = [
        'S',
        'STRIKE'
    ];
}
exports.default = Strike;

},{"./bold.js":"4SaFZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3yyp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _inlineJs = require("../blots/inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
class Underline extends (0, _inlineJsDefault.default) {
    static blotName = 'underline';
    static tagName = 'U';
}
exports.default = Underline;

},{"../blots/inline.js":"jTd5u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zoZT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _embedJs = require("../blots/embed.js");
var _embedJsDefault = parcelHelpers.interopDefault(_embedJs);
class Formula extends (0, _embedJsDefault.default) {
    static blotName = 'formula';
    static className = 'ql-formula';
    static tagName = 'SPAN';
    static create(value) {
        // @ts-expect-error
        if (window.katex == null) throw new Error('Formula module requires KaTeX.');
        const node = super.create(value);
        if (typeof value === 'string') {
            // @ts-expect-error
            window.katex.render(value, node, {
                throwOnError: false,
                errorColor: '#f00'
            });
            node.setAttribute('data-value', value);
        }
        return node;
    }
    static value(domNode) {
        return domNode.getAttribute('data-value');
    }
    html() {
        const { formula } = this.value();
        return `<span>${formula}</span>`;
    }
}
exports.default = Formula;

},{"../blots/embed.js":"7IQfl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Bbk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _parchment = require("parchment");
var _linkJs = require("./link.js");
const ATTRIBUTES = [
    'alt',
    'height',
    'width'
];
class Image extends (0, _parchment.EmbedBlot) {
    static blotName = 'image';
    static tagName = 'IMG';
    static create(value) {
        const node = super.create(value);
        if (typeof value === 'string') node.setAttribute('src', this.sanitize(value));
        return node;
    }
    static formats(domNode) {
        return ATTRIBUTES.reduce((formats, attribute)=>{
            if (domNode.hasAttribute(attribute)) formats[attribute] = domNode.getAttribute(attribute);
            return formats;
        }, {});
    }
    static match(url) {
        return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
    }
    static sanitize(url) {
        return (0, _linkJs.sanitize)(url, [
            'http',
            'https',
            'data'
        ]) ? url : '//:0';
    }
    static value(domNode) {
        return domNode.getAttribute('src');
    }
    format(name, value) {
        if (ATTRIBUTES.indexOf(name) > -1) {
            if (value) this.domNode.setAttribute(name, value);
            else this.domNode.removeAttribute(name);
        } else super.format(name, value);
    }
}
exports.default = Image;

},{"parchment":"1ObrB","./link.js":"rnfCc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgLjz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _blockJs = require("../blots/block.js");
var _linkJs = require("./link.js");
var _linkJsDefault = parcelHelpers.interopDefault(_linkJs);
const ATTRIBUTES = [
    'height',
    'width'
];
class Video extends (0, _blockJs.BlockEmbed) {
    static blotName = 'video';
    static className = 'ql-video';
    static tagName = 'IFRAME';
    static create(value) {
        const node = super.create(value);
        node.setAttribute('frameborder', '0');
        node.setAttribute('allowfullscreen', 'true');
        node.setAttribute('src', this.sanitize(value));
        return node;
    }
    static formats(domNode) {
        return ATTRIBUTES.reduce((formats, attribute)=>{
            if (domNode.hasAttribute(attribute)) formats[attribute] = domNode.getAttribute(attribute);
            return formats;
        }, {});
    }
    static sanitize(url) {
        return (0, _linkJsDefault.default).sanitize(url);
    }
    static value(domNode) {
        return domNode.getAttribute('src');
    }
    format(name, value) {
        if (ATTRIBUTES.indexOf(name) > -1) {
            if (value) this.domNode.setAttribute(name, value);
            else this.domNode.removeAttribute(name);
        } else super.format(name, value);
    }
    html() {
        const { video } = this.value();
        return `<a href="${video}">${video}</a>`;
    }
}
exports.default = Video;

},{"../blots/block.js":"5b8eX","./link.js":"rnfCc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajgdZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CodeBlock", ()=>SyntaxCodeBlock);
parcelHelpers.export(exports, "CodeToken", ()=>CodeToken);
parcelHelpers.export(exports, "default", ()=>Syntax);
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _parchment = require("parchment");
var _inlineJs = require("../blots/inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
var _blockJs = require("../blots/block.js");
var _breakJs = require("../blots/break.js");
var _breakJsDefault = parcelHelpers.interopDefault(_breakJs);
var _cursorJs = require("../blots/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _textJs = require("../blots/text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _codeJs = require("../formats/code.js");
var _codeJsDefault = parcelHelpers.interopDefault(_codeJs);
var _clipboardJs = require("./clipboard.js");
const TokenAttributor = new (0, _parchment.ClassAttributor)('code-token', 'hljs', {
    scope: (0, _parchment.Scope).INLINE
});
class CodeToken extends (0, _inlineJsDefault.default) {
    static formats(node, scroll) {
        while(node != null && node !== scroll.domNode){
            if (node.classList && node.classList.contains((0, _codeJsDefault.default).className)) // @ts-expect-error
            return super.formats(node, scroll);
            // @ts-expect-error
            node = node.parentNode;
        }
        return undefined;
    }
    constructor(scroll, domNode, value){
        // @ts-expect-error
        super(scroll, domNode, value);
        TokenAttributor.add(this.domNode, value);
    }
    format(format, value) {
        if (format !== CodeToken.blotName) super.format(format, value);
        else if (value) TokenAttributor.add(this.domNode, value);
        else {
            TokenAttributor.remove(this.domNode);
            this.domNode.classList.remove(this.statics.className);
        }
    }
    optimize() {
        // @ts-expect-error
        super.optimize(...arguments);
        if (!TokenAttributor.value(this.domNode)) this.unwrap();
    }
}
CodeToken.blotName = 'code-token';
CodeToken.className = 'ql-token';
class SyntaxCodeBlock extends (0, _codeJsDefault.default) {
    static create(value) {
        const domNode = super.create(value);
        if (typeof value === 'string') domNode.setAttribute('data-language', value);
        return domNode;
    }
    static formats(domNode) {
        // @ts-expect-error
        return domNode.getAttribute('data-language') || 'plain';
    }
    static register() {}
    format(name, value) {
        if (name === this.statics.blotName && value) // @ts-expect-error
        this.domNode.setAttribute('data-language', value);
        else super.format(name, value);
    }
    replaceWith(name, value) {
        this.formatAt(0, this.length(), CodeToken.blotName, false);
        return super.replaceWith(name, value);
    }
}
class SyntaxCodeBlockContainer extends (0, _codeJs.CodeBlockContainer) {
    attach() {
        super.attach();
        this.forceNext = false;
        // @ts-expect-error
        this.scroll.emitMount(this);
    }
    format(name, value) {
        if (name === SyntaxCodeBlock.blotName) {
            this.forceNext = true;
            this.children.forEach((child)=>{
                // @ts-expect-error
                child.format(name, value);
            });
        }
    }
    formatAt(index, length, name, value) {
        if (name === SyntaxCodeBlock.blotName) this.forceNext = true;
        super.formatAt(index, length, name, value);
    }
    highlight(highlight) {
        let forced = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (this.children.head == null) return;
        const nodes = Array.from(this.domNode.childNodes).filter((node)=>node !== this.uiNode);
        const text = `${nodes.map((node)=>node.textContent).join('\n')}\n`;
        const language = SyntaxCodeBlock.formats(this.children.head.domNode);
        if (forced || this.forceNext || this.cachedText !== text) {
            if (text.trim().length > 0 || this.cachedText == null) {
                const oldDelta = this.children.reduce((delta, child)=>{
                    // @ts-expect-error
                    return delta.concat((0, _blockJs.blockDelta)(child, false));
                }, new (0, _quillDeltaDefault.default)());
                const delta = highlight(text, language);
                oldDelta.diff(delta).reduce((index, _ref)=>{
                    let { retain, attributes } = _ref;
                    // Should be all retains
                    if (!retain) return index;
                    if (attributes) Object.keys(attributes).forEach((format)=>{
                        if ([
                            SyntaxCodeBlock.blotName,
                            CodeToken.blotName
                        ].includes(format)) // @ts-expect-error
                        this.formatAt(index, retain, format, attributes[format]);
                    });
                    // @ts-expect-error
                    return index + retain;
                }, 0);
            }
            this.cachedText = text;
            this.forceNext = false;
        }
    }
    html(index, length) {
        const [codeBlock] = this.children.find(index);
        const language = codeBlock ? SyntaxCodeBlock.formats(codeBlock.domNode) : 'plain';
        return `<pre data-language="${language}">\n${(0, _textJs.escapeText)(this.code(index, length))}\n</pre>`;
    }
    optimize(context) {
        super.optimize(context);
        if (this.parent != null && this.children.head != null && this.uiNode != null) {
            const language = SyntaxCodeBlock.formats(this.children.head.domNode);
            // @ts-expect-error
            if (language !== this.uiNode.value) // @ts-expect-error
            this.uiNode.value = language;
        }
    }
}
SyntaxCodeBlockContainer.allowedChildren = [
    SyntaxCodeBlock
];
SyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;
SyntaxCodeBlock.allowedChildren = [
    CodeToken,
    (0, _cursorJsDefault.default),
    (0, _textJsDefault.default),
    (0, _breakJsDefault.default)
];
const highlight = (lib, language, text)=>{
    if (typeof lib.versionString === 'string') {
        const majorVersion = lib.versionString.split('.')[0];
        if (parseInt(majorVersion, 10) >= 11) return lib.highlight(text, {
            language
        }).value;
    }
    return lib.highlight(language, text).value;
};
class Syntax extends (0, _moduleJsDefault.default) {
    static register() {
        (0, _quillJsDefault.default).register(CodeToken, true);
        (0, _quillJsDefault.default).register(SyntaxCodeBlock, true);
        (0, _quillJsDefault.default).register(SyntaxCodeBlockContainer, true);
    }
    constructor(quill, options){
        super(quill, options);
        if (this.options.hljs == null) throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
        // @ts-expect-error Fix me later
        this.languages = this.options.languages.reduce((memo, _ref2)=>{
            let { key } = _ref2;
            memo[key] = true;
            return memo;
        }, {});
        this.highlightBlot = this.highlightBlot.bind(this);
        this.initListener();
        this.initTimer();
    }
    initListener() {
        this.quill.on((0, _quillJsDefault.default).events.SCROLL_BLOT_MOUNT, (blot)=>{
            if (!(blot instanceof SyntaxCodeBlockContainer)) return;
            const select = this.quill.root.ownerDocument.createElement('select');
            // @ts-expect-error Fix me later
            this.options.languages.forEach((_ref3)=>{
                let { key, label } = _ref3;
                const option = select.ownerDocument.createElement('option');
                option.textContent = label;
                option.setAttribute('value', key);
                select.appendChild(option);
            });
            select.addEventListener('change', ()=>{
                blot.format(SyntaxCodeBlock.blotName, select.value);
                this.quill.root.focus(); // Prevent scrolling
                this.highlight(blot, true);
            });
            if (blot.uiNode == null) {
                blot.attachUI(select);
                if (blot.children.head) select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);
            }
        });
    }
    initTimer() {
        let timer = null;
        this.quill.on((0, _quillJsDefault.default).events.SCROLL_OPTIMIZE, ()=>{
            if (timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                this.highlight();
                timer = null;
            }, this.options.interval);
        });
    }
    highlight() {
        let blot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (this.quill.selection.composing) return;
        this.quill.update((0, _quillJsDefault.default).sources.USER);
        const range = this.quill.getSelection();
        const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [
            blot
        ];
        blots.forEach((container)=>{
            container.highlight(this.highlightBlot, force);
        });
        this.quill.update((0, _quillJsDefault.default).sources.SILENT);
        if (range != null) this.quill.setSelection(range, (0, _quillJsDefault.default).sources.SILENT);
    }
    highlightBlot(text) {
        let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'plain';
        language = this.languages[language] ? language : 'plain';
        if (language === 'plain') return (0, _textJs.escapeText)(text).split('\n').reduce((delta, line, i)=>{
            if (i !== 0) delta.insert('\n', {
                [(0, _codeJsDefault.default).blotName]: language
            });
            return delta.insert(line);
        }, new (0, _quillDeltaDefault.default)());
        const container = this.quill.root.ownerDocument.createElement('div');
        container.classList.add((0, _codeJsDefault.default).className);
        container.innerHTML = highlight(this.options.hljs, language, text);
        return (0, _clipboardJs.traverse)(this.quill.scroll, container, [
            (node, delta)=>{
                // @ts-expect-error
                const value = TokenAttributor.value(node);
                if (value) return delta.compose(new (0, _quillDeltaDefault.default)().retain(delta.length(), {
                    [CodeToken.blotName]: value
                }));
                return delta;
            }
        ], [
            (node, delta)=>{
                // @ts-expect-error
                return node.data.split('\n').reduce((memo, nodeText, i)=>{
                    if (i !== 0) memo.insert('\n', {
                        [(0, _codeJsDefault.default).blotName]: language
                    });
                    return memo.insert(nodeText);
                }, delta);
            }
        ], new WeakMap());
    }
}
Syntax.DEFAULTS = {
    hljs: (()=>{
        return window.hljs;
    })(),
    interval: 1000,
    languages: [
        {
            key: 'plain',
            label: 'Plain'
        },
        {
            key: 'bash',
            label: 'Bash'
        },
        {
            key: 'cpp',
            label: 'C++'
        },
        {
            key: 'cs',
            label: 'C#'
        },
        {
            key: 'css',
            label: 'CSS'
        },
        {
            key: 'diff',
            label: 'Diff'
        },
        {
            key: 'xml',
            label: 'HTML/XML'
        },
        {
            key: 'java',
            label: 'Java'
        },
        {
            key: 'javascript',
            label: 'JavaScript'
        },
        {
            key: 'markdown',
            label: 'Markdown'
        },
        {
            key: 'php',
            label: 'PHP'
        },
        {
            key: 'python',
            label: 'Python'
        },
        {
            key: 'ruby',
            label: 'Ruby'
        },
        {
            key: 'sql',
            label: 'SQL'
        }
    ]
};

},{"quill-delta":"fqWT0","parchment":"1ObrB","../blots/inline.js":"jTd5u","../core/quill.js":"crqqt","../core/module.js":"7945f","../blots/block.js":"5b8eX","../blots/break.js":"afL9w","../blots/cursor.js":"i9zqb","../blots/text.js":"cZig3","../formats/code.js":"kVakW","./clipboard.js":"5aycZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kyK3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
var _tableJs = require("../formats/table.js");
class Table extends (0, _moduleJsDefault.default) {
    static register() {
        (0, _quillJsDefault.default).register((0, _tableJs.TableCell));
        (0, _quillJsDefault.default).register((0, _tableJs.TableRow));
        (0, _quillJsDefault.default).register((0, _tableJs.TableBody));
        (0, _quillJsDefault.default).register((0, _tableJs.TableContainer));
    }
    constructor(){
        super(...arguments);
        this.listenBalanceCells();
    }
    balanceTables() {
        this.quill.scroll.descendants((0, _tableJs.TableContainer)).forEach((table)=>{
            table.balanceCells();
        });
    }
    deleteColumn() {
        const [table, , cell] = this.getTable();
        if (cell == null) return;
        // @ts-expect-error
        table.deleteColumn(cell.cellOffset());
        this.quill.update((0, _quillJsDefault.default).sources.USER);
    }
    deleteRow() {
        const [, row] = this.getTable();
        if (row == null) return;
        row.remove();
        this.quill.update((0, _quillJsDefault.default).sources.USER);
    }
    deleteTable() {
        const [table] = this.getTable();
        if (table == null) return;
        // @ts-expect-error
        const offset = table.offset();
        // @ts-expect-error
        table.remove();
        this.quill.update((0, _quillJsDefault.default).sources.USER);
        this.quill.setSelection(offset, (0, _quillJsDefault.default).sources.SILENT);
    }
    getTable() {
        let range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quill.getSelection();
        if (range == null) return [
            null,
            null,
            null,
            -1
        ];
        const [cell, offset] = this.quill.getLine(range.index);
        if (cell == null || cell.statics.blotName !== (0, _tableJs.TableCell).blotName) return [
            null,
            null,
            null,
            -1
        ];
        const row = cell.parent;
        const table = row.parent.parent;
        // @ts-expect-error
        return [
            table,
            row,
            cell,
            offset
        ];
    }
    insertColumn(offset) {
        const range = this.quill.getSelection();
        if (!range) return;
        const [table, row, cell] = this.getTable(range);
        if (cell == null) return;
        const column = cell.cellOffset();
        table.insertColumn(column + offset);
        this.quill.update((0, _quillJsDefault.default).sources.USER);
        let shift = row.rowOffset();
        if (offset === 0) shift += 1;
        this.quill.setSelection(range.index + shift, range.length, (0, _quillJsDefault.default).sources.SILENT);
    }
    insertColumnLeft() {
        this.insertColumn(0);
    }
    insertColumnRight() {
        this.insertColumn(1);
    }
    insertRow(offset) {
        const range = this.quill.getSelection();
        if (!range) return;
        const [table, row, cell] = this.getTable(range);
        if (cell == null) return;
        const index = row.rowOffset();
        table.insertRow(index + offset);
        this.quill.update((0, _quillJsDefault.default).sources.USER);
        if (offset > 0) this.quill.setSelection(range, (0, _quillJsDefault.default).sources.SILENT);
        else this.quill.setSelection(range.index + row.children.length, range.length, (0, _quillJsDefault.default).sources.SILENT);
    }
    insertRowAbove() {
        this.insertRow(0);
    }
    insertRowBelow() {
        this.insertRow(1);
    }
    insertTable(rows, columns) {
        const range = this.quill.getSelection();
        if (range == null) return;
        const delta = new Array(rows).fill(0).reduce((memo)=>{
            const text = new Array(columns).fill('\n').join('');
            return memo.insert(text, {
                table: (0, _tableJs.tableId)()
            });
        }, new (0, _quillDeltaDefault.default)().retain(range.index));
        this.quill.updateContents(delta, (0, _quillJsDefault.default).sources.USER);
        this.quill.setSelection(range.index, (0, _quillJsDefault.default).sources.SILENT);
        this.balanceTables();
    }
    listenBalanceCells() {
        this.quill.on((0, _quillJsDefault.default).events.SCROLL_OPTIMIZE, (mutations)=>{
            mutations.some((mutation)=>{
                if ([
                    'TD',
                    'TR',
                    'TBODY',
                    'TABLE'
                ].includes(mutation.target.tagName)) {
                    this.quill.once((0, _quillJsDefault.default).events.TEXT_CHANGE, (delta, old, source)=>{
                        if (source !== (0, _quillJsDefault.default).sources.USER) return;
                        this.balanceTables();
                    });
                    return true;
                }
                return false;
            });
        });
    }
}
exports.default = Table;

},{"quill-delta":"fqWT0","../core/quill.js":"crqqt","../core/module.js":"7945f","../formats/table.js":"dMjwP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMjwP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TableCell", ()=>TableCell);
parcelHelpers.export(exports, "TableRow", ()=>TableRow);
parcelHelpers.export(exports, "TableBody", ()=>TableBody);
parcelHelpers.export(exports, "TableContainer", ()=>TableContainer);
parcelHelpers.export(exports, "tableId", ()=>tableId);
var _blockJs = require("../blots/block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
var _containerJs = require("../blots/container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
class TableCell extends (0, _blockJsDefault.default) {
    static blotName = 'table';
    static tagName = 'TD';
    static create(value) {
        const node = super.create();
        if (value) node.setAttribute('data-row', value);
        else node.setAttribute('data-row', tableId());
        return node;
    }
    static formats(domNode) {
        if (domNode.hasAttribute('data-row')) return domNode.getAttribute('data-row');
        return undefined;
    }
    cellOffset() {
        if (this.parent) return this.parent.children.indexOf(this);
        return -1;
    }
    format(name, value) {
        if (name === TableCell.blotName && value) this.domNode.setAttribute('data-row', value);
        else super.format(name, value);
    }
    row() {
        return this.parent;
    }
    rowOffset() {
        if (this.row()) return this.row().rowOffset();
        return -1;
    }
    table() {
        return this.row() && this.row().table();
    }
}
class TableRow extends (0, _containerJsDefault.default) {
    static blotName = 'table-row';
    static tagName = 'TR';
    checkMerge() {
        // @ts-expect-error
        if (super.checkMerge() && this.next.children.head != null) {
            // @ts-expect-error
            const thisHead = this.children.head.formats();
            // @ts-expect-error
            const thisTail = this.children.tail.formats();
            // @ts-expect-error
            const nextHead = this.next.children.head.formats();
            // @ts-expect-error
            const nextTail = this.next.children.tail.formats();
            return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;
        }
        return false;
    }
    optimize(context) {
        super.optimize(context);
        this.children.forEach((child)=>{
            if (child.next == null) return;
            const childFormats = child.formats();
            const nextFormats = child.next.formats();
            if (childFormats.table !== nextFormats.table) {
                const next = this.splitAfter(child);
                if (next) // @ts-expect-error TODO: parameters of optimize() should be a optional
                next.optimize();
                // We might be able to merge with prev now
                if (this.prev) // @ts-expect-error TODO: parameters of optimize() should be a optional
                this.prev.optimize();
            }
        });
    }
    rowOffset() {
        if (this.parent) return this.parent.children.indexOf(this);
        return -1;
    }
    table() {
        return this.parent && this.parent.parent;
    }
}
class TableBody extends (0, _containerJsDefault.default) {
    static blotName = 'table-body';
    static tagName = 'TBODY';
}
class TableContainer extends (0, _containerJsDefault.default) {
    static blotName = 'table-container';
    static tagName = 'TABLE';
    balanceCells() {
        const rows = this.descendants(TableRow);
        const maxColumns = rows.reduce((max, row)=>{
            return Math.max(row.children.length, max);
        }, 0);
        rows.forEach((row)=>{
            new Array(maxColumns - row.children.length).fill(0).forEach(()=>{
                let value;
                if (row.children.head != null) value = TableCell.formats(row.children.head.domNode);
                const blot = this.scroll.create(TableCell.blotName, value);
                row.appendChild(blot);
                // @ts-expect-error TODO: parameters of optimize() should be a optional
                blot.optimize(); // Add break blot
            });
        });
    }
    cells(column) {
        return this.rows().map((row)=>row.children.at(column));
    }
    deleteColumn(index) {
        // @ts-expect-error
        const [body] = this.descendant(TableBody);
        if (body == null || body.children.head == null) return;
        body.children.forEach((row)=>{
            const cell = row.children.at(index);
            if (cell != null) cell.remove();
        });
    }
    insertColumn(index) {
        // @ts-expect-error
        const [body] = this.descendant(TableBody);
        if (body == null || body.children.head == null) return;
        body.children.forEach((row)=>{
            const ref = row.children.at(index);
            // @ts-expect-error
            const value = TableCell.formats(row.children.head.domNode);
            const cell = this.scroll.create(TableCell.blotName, value);
            row.insertBefore(cell, ref);
        });
    }
    insertRow(index) {
        // @ts-expect-error
        const [body] = this.descendant(TableBody);
        if (body == null || body.children.head == null) return;
        const id = tableId();
        const row = this.scroll.create(TableRow.blotName);
        body.children.head.children.forEach(()=>{
            const cell = this.scroll.create(TableCell.blotName, id);
            row.appendChild(cell);
        });
        const ref = body.children.at(index);
        body.insertBefore(row, ref);
    }
    rows() {
        const body = this.children.head;
        if (body == null) return [];
        return body.children.map((row)=>row);
    }
}
TableContainer.allowedChildren = [
    TableBody
];
TableBody.requiredContainer = TableContainer;
TableBody.allowedChildren = [
    TableRow
];
TableRow.requiredContainer = TableBody;
TableRow.allowedChildren = [
    TableCell
];
TableCell.requiredContainer = TableRow;
function tableId() {
    const id = Math.random().toString(36).slice(2, 6);
    return `row-${id}`;
}

},{"../blots/block.js":"5b8eX","../blots/container.js":"9Vl5Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bV4TT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Toolbar);
parcelHelpers.export(exports, "addControls", ()=>addControls);
var _quillDelta = require("quill-delta");
var _quillDeltaDefault = parcelHelpers.interopDefault(_quillDelta);
var _parchment = require("parchment");
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
var _loggerJs = require("../core/logger.js");
var _loggerJsDefault = parcelHelpers.interopDefault(_loggerJs);
var _moduleJs = require("../core/module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
const debug = (0, _loggerJsDefault.default)('quill:toolbar');
class Toolbar extends (0, _moduleJsDefault.default) {
    constructor(quill, options){
        super(quill, options);
        if (Array.isArray(this.options.container)) {
            const container = document.createElement('div');
            container.setAttribute('role', 'toolbar');
            addControls(container, this.options.container);
            quill.container?.parentNode?.insertBefore(container, quill.container);
            this.container = container;
        } else if (typeof this.options.container === 'string') this.container = document.querySelector(this.options.container);
        else this.container = this.options.container;
        if (!(this.container instanceof HTMLElement)) {
            debug.error('Container required for toolbar', this.options);
            return;
        }
        this.container.classList.add('ql-toolbar');
        this.controls = [];
        this.handlers = {};
        if (this.options.handlers) Object.keys(this.options.handlers).forEach((format)=>{
            const handler = this.options.handlers?.[format];
            if (handler) this.addHandler(format, handler);
        });
        Array.from(this.container.querySelectorAll('button, select')).forEach((input)=>{
            // @ts-expect-error
            this.attach(input);
        });
        this.quill.on((0, _quillJsDefault.default).events.EDITOR_CHANGE, ()=>{
            const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update
            this.update(range);
        });
    }
    addHandler(format, handler) {
        this.handlers[format] = handler;
    }
    attach(input) {
        let format = Array.from(input.classList).find((className)=>{
            return className.indexOf('ql-') === 0;
        });
        if (!format) return;
        format = format.slice(3);
        if (input.tagName === 'BUTTON') input.setAttribute('type', 'button');
        if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {
            debug.warn('ignoring attaching to nonexistent format', format, input);
            return;
        }
        const eventName = input.tagName === 'SELECT' ? 'change' : 'click';
        input.addEventListener(eventName, (e)=>{
            let value;
            if (input.tagName === 'SELECT') {
                // @ts-expect-error
                if (input.selectedIndex < 0) return;
                // @ts-expect-error
                const selected = input.options[input.selectedIndex];
                if (selected.hasAttribute('selected')) value = false;
                else value = selected.value || false;
            } else {
                if (input.classList.contains('ql-active')) value = false;
                else // @ts-expect-error
                value = input.value || !input.hasAttribute('value');
                e.preventDefault();
            }
            this.quill.focus();
            const [range] = this.quill.selection.getRange();
            if (this.handlers[format] != null) this.handlers[format].call(this, value);
            else if (// @ts-expect-error
            this.quill.scroll.query(format).prototype instanceof (0, _parchment.EmbedBlot)) {
                value = prompt(`Enter ${format}`); // eslint-disable-line no-alert
                if (!value) return;
                this.quill.updateContents(new (0, _quillDeltaDefault.default)()// @ts-expect-error Fix me later
                .retain(range.index)// @ts-expect-error Fix me later
                .delete(range.length).insert({
                    [format]: value
                }), (0, _quillJsDefault.default).sources.USER);
            } else this.quill.format(format, value, (0, _quillJsDefault.default).sources.USER);
            this.update(range);
        });
        this.controls.push([
            format,
            input
        ]);
    }
    update(range) {
        const formats = range == null ? {} : this.quill.getFormat(range);
        this.controls.forEach((pair)=>{
            const [format, input] = pair;
            if (input.tagName === 'SELECT') {
                let option = null;
                if (range == null) option = null;
                else if (formats[format] == null) option = input.querySelector('option[selected]');
                else if (!Array.isArray(formats[format])) {
                    let value = formats[format];
                    if (typeof value === 'string') value = value.replace(/"/g, '\\"');
                    option = input.querySelector(`option[value="${value}"]`);
                }
                if (option == null) {
                    // @ts-expect-error TODO fix me later
                    input.value = ''; // TODO make configurable?
                    // @ts-expect-error TODO fix me later
                    input.selectedIndex = -1;
                } else option.selected = true;
            } else if (range == null) {
                input.classList.remove('ql-active');
                input.setAttribute('aria-pressed', 'false');
            } else if (input.hasAttribute('value')) {
                // both being null should match (default values)
                // '1' should match with 1 (headers)
                const value = formats[format];
                const isActive = value === input.getAttribute('value') || value != null && value.toString() === input.getAttribute('value') || value == null && !input.getAttribute('value');
                input.classList.toggle('ql-active', isActive);
                input.setAttribute('aria-pressed', isActive.toString());
            } else {
                const isActive = formats[format] != null;
                input.classList.toggle('ql-active', isActive);
                input.setAttribute('aria-pressed', isActive.toString());
            }
        });
    }
}
Toolbar.DEFAULTS = {};
function addButton(container, format, value) {
    const input = document.createElement('button');
    input.setAttribute('type', 'button');
    input.classList.add(`ql-${format}`);
    input.setAttribute('aria-pressed', 'false');
    if (value != null) {
        input.value = value;
        input.setAttribute('aria-label', `${format}: ${value}`);
    } else input.setAttribute('aria-label', format);
    container.appendChild(input);
}
function addControls(container, groups) {
    if (!Array.isArray(groups[0])) // @ts-expect-error
    groups = [
        groups
    ];
    groups.forEach((controls)=>{
        const group = document.createElement('span');
        group.classList.add('ql-formats');
        controls.forEach((control)=>{
            if (typeof control === 'string') addButton(group, control);
            else {
                const format = Object.keys(control)[0];
                const value = control[format];
                if (Array.isArray(value)) addSelect(group, format, value);
                else addButton(group, format, value);
            }
        });
        container.appendChild(group);
    });
}
function addSelect(container, format, values) {
    const input = document.createElement('select');
    input.classList.add(`ql-${format}`);
    values.forEach((value)=>{
        const option = document.createElement('option');
        if (value !== false) option.setAttribute('value', String(value));
        else option.setAttribute('selected', 'selected');
        input.appendChild(option);
    });
    container.appendChild(input);
}
Toolbar.DEFAULTS = {
    container: null,
    handlers: {
        clean () {
            const range = this.quill.getSelection();
            if (range == null) return;
            if (range.length === 0) {
                const formats = this.quill.getFormat();
                Object.keys(formats).forEach((name)=>{
                    // Clean functionality in existing apps only clean inline formats
                    if (this.quill.scroll.query(name, (0, _parchment.Scope).INLINE) != null) this.quill.format(name, false, (0, _quillJsDefault.default).sources.USER);
                });
            } else this.quill.removeFormat(range.index, range.length, (0, _quillJsDefault.default).sources.USER);
        },
        direction (value) {
            const { align } = this.quill.getFormat();
            if (value === 'rtl' && align == null) this.quill.format('align', 'right', (0, _quillJsDefault.default).sources.USER);
            else if (!value && align === 'right') this.quill.format('align', false, (0, _quillJsDefault.default).sources.USER);
            this.quill.format('direction', value, (0, _quillJsDefault.default).sources.USER);
        },
        indent (value) {
            const range = this.quill.getSelection();
            // @ts-expect-error
            const formats = this.quill.getFormat(range);
            // @ts-expect-error
            const indent = parseInt(formats.indent || 0, 10);
            if (value === '+1' || value === '-1') {
                let modifier = value === '+1' ? 1 : -1;
                if (formats.direction === 'rtl') modifier *= -1;
                this.quill.format('indent', indent + modifier, (0, _quillJsDefault.default).sources.USER);
            }
        },
        link (value) {
            if (value === true) value = prompt('Enter link URL:'); // eslint-disable-line no-alert
            this.quill.format('link', value, (0, _quillJsDefault.default).sources.USER);
        },
        list (value) {
            const range = this.quill.getSelection();
            // @ts-expect-error
            const formats = this.quill.getFormat(range);
            if (value === 'check') {
                if (formats.list === 'checked' || formats.list === 'unchecked') this.quill.format('list', false, (0, _quillJsDefault.default).sources.USER);
                else this.quill.format('list', 'unchecked', (0, _quillJsDefault.default).sources.USER);
            } else this.quill.format('list', value, (0, _quillJsDefault.default).sources.USER);
        }
    }
};

},{"quill-delta":"fqWT0","parchment":"1ObrB","../core/quill.js":"crqqt","../core/logger.js":"4RIBY","../core/module.js":"7945f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9WDl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const alignLeftIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>";
const alignCenterIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"/></svg>";
const alignRightIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>";
const alignJustifyIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"/></svg>";
const backgroundIcon = "<svg viewbox=\"0 0 18 18\"><g class=\"ql-fill ql-color-label\"><polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"4\"/><polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"7\"/><polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"12\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"9\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"15\"/><polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"8\"/><path d=\"M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z\"/><path d=\"M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z\"/><path d=\"M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"3\"/><path d=\"M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"6\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"14\"/><polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"7\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"8\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"9\"/><path d=\"M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"3\"/><polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"4\"/><polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"14\"/><rect height=\"1\" width=\"1\" x=\"8\" y=\"15\"/><path d=\"M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"15\"/><path d=\"M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"15\"/><path d=\"M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"15\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"11\"/></g><polyline class=\"ql-stroke\" points=\"5.5 13 9 5 12.5 13\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"11\" y2=\"11\"/></svg>";
const blockquoteIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"4\" y=\"5\"/><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"11\" y=\"5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M7,8c0,4.031-3,5-3,5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M14,8c0,4.031-3,5-3,5\"/></svg>";
const boldIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"/><path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"/></svg>";
const cleanIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"5\" x2=\"13\" y1=\"3\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"9.35\" y1=\"12\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"11\" x2=\"15\" y1=\"11\" y2=\"15\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"11\" y1=\"11\" y2=\"15\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"2\" y=\"14\"/></svg>";
const codeIcon = "<svg viewbox=\"0 0 18 18\"><polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"/><polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"/><line class=\"ql-stroke\" x1=\"10\" x2=\"8\" y1=\"5\" y2=\"13\"/></svg>";
const colorIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-color-label ql-stroke ql-transparent\" x1=\"3\" x2=\"15\" y1=\"15\" y2=\"15\"/><polyline class=\"ql-stroke\" points=\"5.5 11 9 3 12.5 11\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"9\" y2=\"9\"/></svg>";
const directionLeftToRightIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"/><line class=\"ql-stroke ql-fill\" x1=\"15\" x2=\"11\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M11,3a3,3,0,0,0,0,6h1V3H11Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"11\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"13\" y=\"4\"/></svg>";
const directionRightToLeftIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"/><line class=\"ql-stroke ql-fill\" x1=\"9\" x2=\"5\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M5,3A3,3,0,0,0,5,9H6V3H5Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"5\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"7\" y=\"4\"/></svg>";
const formulaIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z\"/><rect class=\"ql-fill\" height=\"1.6\" rx=\"0.8\" ry=\"0.8\" width=\"5\" x=\"5.15\" y=\"6.2\"/><path class=\"ql-fill\" d=\"M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z\"/></svg>";
const headerIcon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z\"/></svg>";
const header2Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
const header3Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
const header4Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z\"/></svg>";
const header5Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
const header6Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z\"/></svg>";
const italicIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"/></svg>";
const imageIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"10\" width=\"12\" x=\"3\" y=\"4\"/><circle class=\"ql-fill\" cx=\"6\" cy=\"7\" r=\"1\"/><polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"/></svg>";
const indentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"/></svg>";
const outdentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"5 7 5 11 3 9 5 7\"/></svg>";
const linkIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"11\" y1=\"7\" y2=\"11\"/><path class=\"ql-even ql-stroke\" d=\"M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z\"/><path class=\"ql-even ql-stroke\" d=\"M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z\"/></svg>";
const listBulletIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"/></svg>";
const listCheckIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"4\" y2=\"4\"/><polyline class=\"ql-stroke\" points=\"3 4 4 5 6 3\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"14\" y2=\"14\"/><polyline class=\"ql-stroke\" points=\"3 14 4 15 6 13\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"3 9 4 10 6 8\"/></svg>";
const listOrderedIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"/><path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"/><path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"/><path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"/></svg>";
const subscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z\"/><path class=\"ql-fill\" d=\"M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z\"/></svg>";
const superscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z\"/><path class=\"ql-fill\" d=\"M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z\"/></svg>";
const strikeIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"/><path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"/><path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"/></svg>";
const tableIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"3\" x=\"5\" y=\"5\"/><rect class=\"ql-fill\" height=\"2\" width=\"4\" x=\"9\" y=\"5\"/><g class=\"ql-fill ql-transparent\"><rect height=\"2\" width=\"3\" x=\"5\" y=\"8\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"8\"/><rect height=\"2\" width=\"3\" x=\"5\" y=\"11\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"11\"/></g></svg>";
const underlineIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"/></svg>";
const videoIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"5\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"12\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"8\" x=\"5\" y=\"8\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"12\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"12\"/></svg>";
exports.default = {
    align: {
        '': alignLeftIcon,
        center: alignCenterIcon,
        right: alignRightIcon,
        justify: alignJustifyIcon
    },
    background: backgroundIcon,
    blockquote: blockquoteIcon,
    bold: boldIcon,
    clean: cleanIcon,
    code: codeIcon,
    'code-block': codeIcon,
    color: colorIcon,
    direction: {
        '': directionLeftToRightIcon,
        rtl: directionRightToLeftIcon
    },
    formula: formulaIcon,
    header: {
        '1': headerIcon,
        '2': header2Icon,
        '3': header3Icon,
        '4': header4Icon,
        '5': header5Icon,
        '6': header6Icon
    },
    italic: italicIcon,
    image: imageIcon,
    indent: {
        '+1': indentIcon,
        '-1': outdentIcon
    },
    link: linkIcon,
    list: {
        bullet: listBulletIcon,
        check: listCheckIcon,
        ordered: listOrderedIcon
    },
    script: {
        sub: subscriptIcon,
        super: superscriptIcon
    },
    strike: strikeIcon,
    table: tableIcon,
    underline: underlineIcon,
    video: videoIcon
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3DGWh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const DropdownIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"/><polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"/></svg>";
let optionsCounter = 0;
function toggleAriaAttribute(element, attribute) {
    element.setAttribute(attribute, `${!(element.getAttribute(attribute) === 'true')}`);
}
class Picker {
    constructor(select){
        this.select = select;
        this.container = document.createElement('span');
        this.buildPicker();
        this.select.style.display = 'none';
        // @ts-expect-error Fix me later
        this.select.parentNode.insertBefore(this.container, this.select);
        this.label.addEventListener('mousedown', ()=>{
            this.togglePicker();
        });
        this.label.addEventListener('keydown', (event)=>{
            switch(event.key){
                case 'Enter':
                    this.togglePicker();
                    break;
                case 'Escape':
                    this.escape();
                    event.preventDefault();
                    break;
                default:
            }
        });
        this.select.addEventListener('change', this.update.bind(this));
    }
    togglePicker() {
        this.container.classList.toggle('ql-expanded');
        // Toggle aria-expanded and aria-hidden to make the picker accessible
        toggleAriaAttribute(this.label, 'aria-expanded');
        // @ts-expect-error
        toggleAriaAttribute(this.options, 'aria-hidden');
    }
    buildItem(option) {
        const item = document.createElement('span');
        // @ts-expect-error
        item.tabIndex = '0';
        item.setAttribute('role', 'button');
        item.classList.add('ql-picker-item');
        const value = option.getAttribute('value');
        if (value) item.setAttribute('data-value', value);
        if (option.textContent) item.setAttribute('data-label', option.textContent);
        item.addEventListener('click', ()=>{
            this.selectItem(item, true);
        });
        item.addEventListener('keydown', (event)=>{
            switch(event.key){
                case 'Enter':
                    this.selectItem(item, true);
                    event.preventDefault();
                    break;
                case 'Escape':
                    this.escape();
                    event.preventDefault();
                    break;
                default:
            }
        });
        return item;
    }
    buildLabel() {
        const label = document.createElement('span');
        label.classList.add('ql-picker-label');
        label.innerHTML = DropdownIcon;
        // @ts-expect-error
        label.tabIndex = '0';
        label.setAttribute('role', 'button');
        label.setAttribute('aria-expanded', 'false');
        this.container.appendChild(label);
        return label;
    }
    buildOptions() {
        const options = document.createElement('span');
        options.classList.add('ql-picker-options');
        // Don't want screen readers to read this until options are visible
        options.setAttribute('aria-hidden', 'true');
        // @ts-expect-error
        options.tabIndex = '-1';
        // Need a unique id for aria-controls
        options.id = `ql-picker-options-${optionsCounter}`;
        optionsCounter += 1;
        this.label.setAttribute('aria-controls', options.id);
        // @ts-expect-error
        this.options = options;
        Array.from(this.select.options).forEach((option)=>{
            const item = this.buildItem(option);
            options.appendChild(item);
            if (option.selected === true) this.selectItem(item);
        });
        this.container.appendChild(options);
    }
    buildPicker() {
        Array.from(this.select.attributes).forEach((item)=>{
            this.container.setAttribute(item.name, item.value);
        });
        this.container.classList.add('ql-picker');
        this.label = this.buildLabel();
        this.buildOptions();
    }
    escape() {
        // Close menu and return focus to trigger label
        this.close();
        // Need setTimeout for accessibility to ensure that the browser executes
        // focus on the next process thread and after any DOM content changes
        setTimeout(()=>this.label.focus(), 1);
    }
    close() {
        this.container.classList.remove('ql-expanded');
        this.label.setAttribute('aria-expanded', 'false');
        // @ts-expect-error
        this.options.setAttribute('aria-hidden', 'true');
    }
    selectItem(item) {
        let trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const selected = this.container.querySelector('.ql-selected');
        if (item === selected) return;
        if (selected != null) selected.classList.remove('ql-selected');
        if (item == null) return;
        item.classList.add('ql-selected');
        // @ts-expect-error Fix me later
        this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);
        if (item.hasAttribute('data-value')) // @ts-expect-error Fix me later
        this.label.setAttribute('data-value', item.getAttribute('data-value'));
        else this.label.removeAttribute('data-value');
        if (item.hasAttribute('data-label')) // @ts-expect-error Fix me later
        this.label.setAttribute('data-label', item.getAttribute('data-label'));
        else this.label.removeAttribute('data-label');
        if (trigger) {
            this.select.dispatchEvent(new Event('change'));
            this.close();
        }
    }
    update() {
        let option;
        if (this.select.selectedIndex > -1) {
            const item = // @ts-expect-error Fix me later
            this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
            option = this.select.options[this.select.selectedIndex];
            // @ts-expect-error
            this.selectItem(item);
        } else this.selectItem(null);
        const isActive = option != null && option !== this.select.querySelector('option[selected]');
        this.label.classList.toggle('ql-active', isActive);
    }
}
exports.default = Picker;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knNJx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pickerJs = require("./picker.js");
var _pickerJsDefault = parcelHelpers.interopDefault(_pickerJs);
class ColorPicker extends (0, _pickerJsDefault.default) {
    constructor(select, label){
        super(select);
        this.label.innerHTML = label;
        this.container.classList.add('ql-color-picker');
        Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach((item)=>{
            item.classList.add('ql-primary');
        });
    }
    buildItem(option) {
        const item = super.buildItem(option);
        item.style.backgroundColor = option.getAttribute('value') || '';
        return item;
    }
    selectItem(item, trigger) {
        super.selectItem(item, trigger);
        const colorLabel = this.label.querySelector('.ql-color-label');
        const value = item ? item.getAttribute('data-value') || '' : '';
        if (colorLabel) {
            if (colorLabel.tagName === 'line') colorLabel.style.stroke = value;
            else colorLabel.style.fill = value;
        }
    }
}
exports.default = ColorPicker;

},{"./picker.js":"3DGWh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVFiU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pickerJs = require("./picker.js");
var _pickerJsDefault = parcelHelpers.interopDefault(_pickerJs);
class IconPicker extends (0, _pickerJsDefault.default) {
    constructor(select, icons){
        super(select);
        this.container.classList.add('ql-icon-picker');
        Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach((item)=>{
            item.innerHTML = icons[item.getAttribute('data-value') || ''];
        });
        this.defaultItem = this.container.querySelector('.ql-selected');
        this.selectItem(this.defaultItem);
    }
    selectItem(target, trigger) {
        super.selectItem(target, trigger);
        const item = target || this.defaultItem;
        if (item != null) {
            if (this.label.innerHTML === item.innerHTML) return;
            this.label.innerHTML = item.innerHTML;
        }
    }
}
exports.default = IconPicker;

},{"./picker.js":"3DGWh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"76UXU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const isScrollable = (el)=>{
    const { overflowY } = getComputedStyle(el, null);
    return overflowY !== 'visible' && overflowY !== 'clip';
};
class Tooltip {
    constructor(quill, boundsContainer){
        this.quill = quill;
        this.boundsContainer = boundsContainer || document.body;
        this.root = quill.addContainer('ql-tooltip');
        // @ts-expect-error
        this.root.innerHTML = this.constructor.TEMPLATE;
        if (isScrollable(this.quill.root)) this.quill.root.addEventListener('scroll', ()=>{
            this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
        });
        this.hide();
    }
    hide() {
        this.root.classList.add('ql-hidden');
    }
    position(reference) {
        const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
        // root.scrollTop should be 0 if scrollContainer !== root
        const top = reference.bottom + this.quill.root.scrollTop;
        this.root.style.left = `${left}px`;
        this.root.style.top = `${top}px`;
        this.root.classList.remove('ql-flip');
        const containerBounds = this.boundsContainer.getBoundingClientRect();
        const rootBounds = this.root.getBoundingClientRect();
        let shift = 0;
        if (rootBounds.right > containerBounds.right) {
            shift = containerBounds.right - rootBounds.right;
            this.root.style.left = `${left + shift}px`;
        }
        if (rootBounds.left < containerBounds.left) {
            shift = containerBounds.left - rootBounds.left;
            this.root.style.left = `${left + shift}px`;
        }
        if (rootBounds.bottom > containerBounds.bottom) {
            const height = rootBounds.bottom - rootBounds.top;
            const verticalShift = reference.bottom - reference.top + height;
            this.root.style.top = `${top - verticalShift}px`;
            this.root.classList.add('ql-flip');
        }
        return shift;
    }
    show() {
        this.root.classList.remove('ql-editing');
        this.root.classList.remove('ql-hidden');
    }
}
exports.default = Tooltip;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bXCT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BubbleTooltip", ()=>BubbleTooltip);
parcelHelpers.export(exports, "default", ()=>BubbleTheme);
var _lodashEs = require("lodash-es");
var _emitterJs = require("../core/emitter.js");
var _emitterJsDefault = parcelHelpers.interopDefault(_emitterJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _selectionJs = require("../core/selection.js");
var _iconsJs = require("../ui/icons.js");
var _iconsJsDefault = parcelHelpers.interopDefault(_iconsJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
const TOOLBAR_CONFIG = [
    [
        'bold',
        'italic',
        'link'
    ],
    [
        {
            header: 1
        },
        {
            header: 2
        },
        'blockquote'
    ]
];
class BubbleTooltip extends (0, _baseJs.BaseTooltip) {
    static TEMPLATE = [
        '<span class="ql-tooltip-arrow"></span>',
        '<div class="ql-tooltip-editor">',
        '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
        '<a class="ql-close"></a>',
        '</div>'
    ].join('');
    constructor(quill, bounds){
        super(quill, bounds);
        this.quill.on((0, _emitterJsDefault.default).events.EDITOR_CHANGE, (type, range, oldRange, source)=>{
            if (type !== (0, _emitterJsDefault.default).events.SELECTION_CHANGE) return;
            if (range != null && range.length > 0 && source === (0, _emitterJsDefault.default).sources.USER) {
                this.show();
                // Lock our width so we will expand beyond our offsetParent boundaries
                this.root.style.left = '0px';
                this.root.style.width = '';
                this.root.style.width = `${this.root.offsetWidth}px`;
                const lines = this.quill.getLines(range.index, range.length);
                if (lines.length === 1) {
                    const bounds = this.quill.getBounds(range);
                    if (bounds != null) this.position(bounds);
                } else {
                    const lastLine = lines[lines.length - 1];
                    const index = this.quill.getIndex(lastLine);
                    const length = Math.min(lastLine.length() - 1, range.index + range.length - index);
                    const indexBounds = this.quill.getBounds(new (0, _selectionJs.Range)(index, length));
                    if (indexBounds != null) this.position(indexBounds);
                }
            } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) this.hide();
        });
    }
    listen() {
        super.listen();
        // @ts-expect-error Fix me later
        this.root.querySelector('.ql-close').addEventListener('click', ()=>{
            this.root.classList.remove('ql-editing');
        });
        this.quill.on((0, _emitterJsDefault.default).events.SCROLL_OPTIMIZE, ()=>{
            // Let selection be restored by toolbar handlers before repositioning
            setTimeout(()=>{
                if (this.root.classList.contains('ql-hidden')) return;
                const range = this.quill.getSelection();
                if (range != null) {
                    const bounds = this.quill.getBounds(range);
                    if (bounds != null) this.position(bounds);
                }
            }, 1);
        });
    }
    cancel() {
        this.show();
    }
    position(reference) {
        const shift = super.position(reference);
        const arrow = this.root.querySelector('.ql-tooltip-arrow');
        // @ts-expect-error
        arrow.style.marginLeft = '';
        if (shift !== 0) // @ts-expect-error
        arrow.style.marginLeft = `${-1 * shift - arrow.offsetWidth / 2}px`;
        return shift;
    }
}
class BubbleTheme extends (0, _baseJsDefault.default) {
    constructor(quill, options){
        if (options.modules.toolbar != null && options.modules.toolbar.container == null) options.modules.toolbar.container = TOOLBAR_CONFIG;
        super(quill, options);
        this.quill.container.classList.add('ql-bubble');
    }
    extendToolbar(toolbar) {
        // @ts-expect-error
        this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
        if (toolbar.container != null) {
            this.tooltip.root.appendChild(toolbar.container);
            this.buildButtons(toolbar.container.querySelectorAll('button'), (0, _iconsJsDefault.default));
            this.buildPickers(toolbar.container.querySelectorAll('select'), (0, _iconsJsDefault.default));
        }
    }
}
BubbleTheme.DEFAULTS = (0, _lodashEs.merge)({}, (0, _baseJsDefault.default).DEFAULTS, {
    modules: {
        toolbar: {
            handlers: {
                link (value) {
                    if (!value) this.quill.format('link', false, (0, _quillJsDefault.default).sources.USER);
                    else // @ts-expect-error
                    this.quill.theme.tooltip.edit();
                }
            }
        }
    }
});

},{"lodash-es":"bXNwz","../core/emitter.js":"EzLd4","./base.js":"49kQU","../core/selection.js":"fL5TU","../ui/icons.js":"b9WDl","../core/quill.js":"crqqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49kQU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseTooltip", ()=>BaseTooltip);
parcelHelpers.export(exports, "default", ()=>BaseTheme);
var _lodashEs = require("lodash-es");
var _emitterJs = require("../core/emitter.js");
var _emitterJsDefault = parcelHelpers.interopDefault(_emitterJs);
var _themeJs = require("../core/theme.js");
var _themeJsDefault = parcelHelpers.interopDefault(_themeJs);
var _colorPickerJs = require("../ui/color-picker.js");
var _colorPickerJsDefault = parcelHelpers.interopDefault(_colorPickerJs);
var _iconPickerJs = require("../ui/icon-picker.js");
var _iconPickerJsDefault = parcelHelpers.interopDefault(_iconPickerJs);
var _pickerJs = require("../ui/picker.js");
var _pickerJsDefault = parcelHelpers.interopDefault(_pickerJs);
var _tooltipJs = require("../ui/tooltip.js");
var _tooltipJsDefault = parcelHelpers.interopDefault(_tooltipJs);
const ALIGNS = [
    false,
    'center',
    'right',
    'justify'
];
const COLORS = [
    '#000000',
    '#e60000',
    '#ff9900',
    '#ffff00',
    '#008a00',
    '#0066cc',
    '#9933ff',
    '#ffffff',
    '#facccc',
    '#ffebcc',
    '#ffffcc',
    '#cce8cc',
    '#cce0f5',
    '#ebd6ff',
    '#bbbbbb',
    '#f06666',
    '#ffc266',
    '#ffff66',
    '#66b966',
    '#66a3e0',
    '#c285ff',
    '#888888',
    '#a10000',
    '#b26b00',
    '#b2b200',
    '#006100',
    '#0047b2',
    '#6b24b2',
    '#444444',
    '#5c0000',
    '#663d00',
    '#666600',
    '#003700',
    '#002966',
    '#3d1466'
];
const FONTS = [
    false,
    'serif',
    'monospace'
];
const HEADERS = [
    '1',
    '2',
    '3',
    false
];
const SIZES = [
    'small',
    false,
    'large',
    'huge'
];
class BaseTheme extends (0, _themeJsDefault.default) {
    constructor(quill, options){
        super(quill, options);
        const listener = (e)=>{
            if (!document.body.contains(quill.root)) {
                document.body.removeEventListener('click', listener);
                return;
            }
            if (this.tooltip != null && // @ts-expect-error
            !this.tooltip.root.contains(e.target) && // @ts-expect-error
            document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) this.tooltip.hide();
            if (this.pickers != null) this.pickers.forEach((picker)=>{
                // @ts-expect-error
                if (!picker.container.contains(e.target)) picker.close();
            });
        };
        quill.emitter.listenDOM('click', document.body, listener);
    }
    addModule(name) {
        const module = super.addModule(name);
        if (name === 'toolbar') // @ts-expect-error
        this.extendToolbar(module);
        return module;
    }
    buildButtons(buttons, icons) {
        Array.from(buttons).forEach((button)=>{
            const className = button.getAttribute('class') || '';
            className.split(/\s+/).forEach((name)=>{
                if (!name.startsWith('ql-')) return;
                name = name.slice(3);
                if (icons[name] == null) return;
                if (name === 'direction') // @ts-expect-error
                button.innerHTML = icons[name][''] + icons[name].rtl;
                else if (typeof icons[name] === 'string') // @ts-expect-error
                button.innerHTML = icons[name];
                else {
                    // @ts-expect-error
                    const value = button.value || '';
                    // @ts-expect-error
                    if (value != null && icons[name][value]) // @ts-expect-error
                    button.innerHTML = icons[name][value];
                }
            });
        });
    }
    buildPickers(selects, icons) {
        this.pickers = Array.from(selects).map((select)=>{
            if (select.classList.contains('ql-align')) {
                if (select.querySelector('option') == null) fillSelect(select, ALIGNS);
                if (typeof icons.align === 'object') return new (0, _iconPickerJsDefault.default)(select, icons.align);
            }
            if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
                const format = select.classList.contains('ql-background') ? 'background' : 'color';
                if (select.querySelector('option') == null) fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
                return new (0, _colorPickerJsDefault.default)(select, icons[format]);
            }
            if (select.querySelector('option') == null) {
                if (select.classList.contains('ql-font')) fillSelect(select, FONTS);
                else if (select.classList.contains('ql-header')) fillSelect(select, HEADERS);
                else if (select.classList.contains('ql-size')) fillSelect(select, SIZES);
            }
            return new (0, _pickerJsDefault.default)(select);
        });
        const update = ()=>{
            this.pickers.forEach((picker)=>{
                picker.update();
            });
        };
        this.quill.on((0, _emitterJsDefault.default).events.EDITOR_CHANGE, update);
    }
}
BaseTheme.DEFAULTS = (0, _lodashEs.merge)({}, (0, _themeJsDefault.default).DEFAULTS, {
    modules: {
        toolbar: {
            handlers: {
                formula () {
                    this.quill.theme.tooltip.edit('formula');
                },
                image () {
                    let fileInput = this.container.querySelector('input.ql-image[type=file]');
                    if (fileInput == null) {
                        fileInput = document.createElement('input');
                        fileInput.setAttribute('type', 'file');
                        fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));
                        fileInput.classList.add('ql-image');
                        fileInput.addEventListener('change', ()=>{
                            const range = this.quill.getSelection(true);
                            this.quill.uploader.upload(range, fileInput.files);
                            fileInput.value = '';
                        });
                        this.container.appendChild(fileInput);
                    }
                    fileInput.click();
                },
                video () {
                    this.quill.theme.tooltip.edit('video');
                }
            }
        }
    }
});
class BaseTooltip extends (0, _tooltipJsDefault.default) {
    constructor(quill, boundsContainer){
        super(quill, boundsContainer);
        this.textbox = this.root.querySelector('input[type="text"]');
        this.listen();
    }
    listen() {
        // @ts-expect-error Fix me later
        this.textbox.addEventListener('keydown', (event)=>{
            if (event.key === 'Enter') {
                this.save();
                event.preventDefault();
            } else if (event.key === 'Escape') {
                this.cancel();
                event.preventDefault();
            }
        });
    }
    cancel() {
        this.hide();
        this.restoreFocus();
    }
    edit() {
        let mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
        let preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.root.classList.remove('ql-hidden');
        this.root.classList.add('ql-editing');
        if (this.textbox == null) return;
        if (preview != null) this.textbox.value = preview;
        else if (mode !== this.root.getAttribute('data-mode')) this.textbox.value = '';
        const bounds = this.quill.getBounds(this.quill.selection.savedRange);
        if (bounds != null) this.position(bounds);
        this.textbox.select();
        this.textbox.setAttribute('placeholder', this.textbox.getAttribute(`data-${mode}`) || '');
        this.root.setAttribute('data-mode', mode);
    }
    restoreFocus() {
        this.quill.focus({
            preventScroll: true
        });
    }
    save() {
        // @ts-expect-error Fix me later
        let { value } = this.textbox;
        switch(this.root.getAttribute('data-mode')){
            case 'link':
                {
                    const { scrollTop } = this.quill.root;
                    if (this.linkRange) {
                        this.quill.formatText(this.linkRange, 'link', value, (0, _emitterJsDefault.default).sources.USER);
                        delete this.linkRange;
                    } else {
                        this.restoreFocus();
                        this.quill.format('link', value, (0, _emitterJsDefault.default).sources.USER);
                    }
                    this.quill.root.scrollTop = scrollTop;
                    break;
                }
            case 'video':
                value = extractVideoUrl(value);
            // eslint-disable-next-line no-fallthrough
            case 'formula':
                {
                    if (!value) break;
                    const range = this.quill.getSelection(true);
                    if (range != null) {
                        const index = range.index + range.length;
                        this.quill.insertEmbed(index, // @ts-expect-error Fix me later
                        this.root.getAttribute('data-mode'), value, (0, _emitterJsDefault.default).sources.USER);
                        if (this.root.getAttribute('data-mode') === 'formula') this.quill.insertText(index + 1, ' ', (0, _emitterJsDefault.default).sources.USER);
                        this.quill.setSelection(index + 2, (0, _emitterJsDefault.default).sources.USER);
                    }
                    break;
                }
            default:
        }
        // @ts-expect-error Fix me later
        this.textbox.value = '';
        this.hide();
    }
}
function extractVideoUrl(url) {
    let match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (match) return `${match[1] || 'https'}://www.youtube.com/embed/${match[2]}?showinfo=0`;
    // eslint-disable-next-line no-cond-assign
    if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) return `${match[1] || 'https'}://player.vimeo.com/video/${match[2]}/`;
    return url;
}
function fillSelect(select, values) {
    let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    values.forEach((value)=>{
        const option = document.createElement('option');
        if (value === defaultValue) option.setAttribute('selected', 'selected');
        else option.setAttribute('value', String(value));
        select.appendChild(option);
    });
}

},{"lodash-es":"bXNwz","../core/emitter.js":"EzLd4","../core/theme.js":"7Obd4","../ui/color-picker.js":"knNJx","../ui/icon-picker.js":"lVFiU","../ui/picker.js":"3DGWh","../ui/tooltip.js":"76UXU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dkko":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lodashEs = require("lodash-es");
var _emitterJs = require("../core/emitter.js");
var _emitterJsDefault = parcelHelpers.interopDefault(_emitterJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _linkJs = require("../formats/link.js");
var _linkJsDefault = parcelHelpers.interopDefault(_linkJs);
var _selectionJs = require("../core/selection.js");
var _iconsJs = require("../ui/icons.js");
var _iconsJsDefault = parcelHelpers.interopDefault(_iconsJs);
var _quillJs = require("../core/quill.js");
var _quillJsDefault = parcelHelpers.interopDefault(_quillJs);
const TOOLBAR_CONFIG = [
    [
        {
            header: [
                '1',
                '2',
                '3',
                false
            ]
        }
    ],
    [
        'bold',
        'italic',
        'underline',
        'link'
    ],
    [
        {
            list: 'ordered'
        },
        {
            list: 'bullet'
        }
    ],
    [
        'clean'
    ]
];
class SnowTooltip extends (0, _baseJs.BaseTooltip) {
    static TEMPLATE = [
        '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
        '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
        '<a class="ql-action"></a>',
        '<a class="ql-remove"></a>'
    ].join('');
    preview = this.root.querySelector('a.ql-preview');
    listen() {
        super.listen();
        // @ts-expect-error Fix me later
        this.root.querySelector('a.ql-action').addEventListener('click', (event)=>{
            if (this.root.classList.contains('ql-editing')) this.save();
            else // @ts-expect-error Fix me later
            this.edit('link', this.preview.textContent);
            event.preventDefault();
        });
        // @ts-expect-error Fix me later
        this.root.querySelector('a.ql-remove').addEventListener('click', (event)=>{
            if (this.linkRange != null) {
                const range = this.linkRange;
                this.restoreFocus();
                this.quill.formatText(range, 'link', false, (0, _emitterJsDefault.default).sources.USER);
                delete this.linkRange;
            }
            event.preventDefault();
            this.hide();
        });
        this.quill.on((0, _emitterJsDefault.default).events.SELECTION_CHANGE, (range, oldRange, source)=>{
            if (range == null) return;
            if (range.length === 0 && source === (0, _emitterJsDefault.default).sources.USER) {
                const [link, offset] = this.quill.scroll.descendant((0, _linkJsDefault.default), range.index);
                if (link != null) {
                    this.linkRange = new (0, _selectionJs.Range)(range.index - offset, link.length());
                    const preview = (0, _linkJsDefault.default).formats(link.domNode);
                    // @ts-expect-error Fix me later
                    this.preview.textContent = preview;
                    // @ts-expect-error Fix me later
                    this.preview.setAttribute('href', preview);
                    this.show();
                    const bounds = this.quill.getBounds(this.linkRange);
                    if (bounds != null) this.position(bounds);
                    return;
                }
            } else delete this.linkRange;
            this.hide();
        });
    }
    show() {
        super.show();
        this.root.removeAttribute('data-mode');
    }
}
class SnowTheme extends (0, _baseJsDefault.default) {
    constructor(quill, options){
        if (options.modules.toolbar != null && options.modules.toolbar.container == null) options.modules.toolbar.container = TOOLBAR_CONFIG;
        super(quill, options);
        this.quill.container.classList.add('ql-snow');
    }
    extendToolbar(toolbar) {
        if (toolbar.container != null) {
            toolbar.container.classList.add('ql-snow');
            this.buildButtons(toolbar.container.querySelectorAll('button'), (0, _iconsJsDefault.default));
            this.buildPickers(toolbar.container.querySelectorAll('select'), (0, _iconsJsDefault.default));
            // @ts-expect-error
            this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
            if (toolbar.container.querySelector('.ql-link')) this.quill.keyboard.addBinding({
                key: 'k',
                shortKey: true
            }, (_range, context)=>{
                toolbar.handlers.link.call(toolbar, !context.format.link);
            });
        }
    }
}
SnowTheme.DEFAULTS = (0, _lodashEs.merge)({}, (0, _baseJsDefault.default).DEFAULTS, {
    modules: {
        toolbar: {
            handlers: {
                link (value) {
                    if (value) {
                        const range = this.quill.getSelection();
                        if (range == null || range.length === 0) return;
                        let preview = this.quill.getText(range);
                        if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) preview = `mailto:${preview}`;
                        // @ts-expect-error
                        const { tooltip } = this.quill.theme;
                        tooltip.edit('link', preview);
                    } else this.quill.format('link', false, (0, _quillJsDefault.default).sources.USER);
                }
            }
        }
    }
});
exports.default = SnowTheme;

},{"lodash-es":"bXNwz","../core/emitter.js":"EzLd4","./base.js":"49kQU","../formats/link.js":"rnfCc","../core/selection.js":"fL5TU","../ui/icons.js":"b9WDl","../core/quill.js":"crqqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2238j":[function() {},{}]},["eCF1U","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=index.5baa4167.js.map
