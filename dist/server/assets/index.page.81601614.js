"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var imgUrl = "/ViteSSRRelativeLinks/assets/test.787f7936.jpg";
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Home</h1><img${serverRenderer.ssrRenderAttr("src", imgUrl)} alt=""><br><a href="./test.jpg">Test1</a><br><a href="/pages/index/test.jpg">Test2</a><br><a${serverRenderer.ssrRenderAttr("href", vue.unref(imgUrl))}>Test3</a><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
