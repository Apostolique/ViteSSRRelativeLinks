"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
const _sfc_main$1 = {
  setup(props) {
    const state = vue.reactive({ count: 0 });
    return {
      state
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({ type: "button" }, _attrs))}>Counter ${serverRenderer.ssrInterpolate($setup.state.count)}</button>`);
}
_sfc_main$1.ssrRender = _sfc_ssrRender$1;
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/Counter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var _imports_0 = "/assets/test.787f7936.jpg";
const components = { Counter: _sfc_main$1 };
const _sfc_main = { components };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Counter = vue.resolveComponent("Counter");
  _push(`<!--[--><h1>Welcome</h1> This page is: <ul><li>Rendered to HTML.</li><li>Interactive. `);
  _push(serverRenderer.ssrRenderComponent(_component_Counter, null, null, _parent));
  _push(`</li></ul><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt=""><br><a href="./test.jpg">test1</a><br><a href="/pages/index/test.jpg">test2</a><!--]-->`);
}
_sfc_main.ssrRender = _sfc_ssrRender;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
