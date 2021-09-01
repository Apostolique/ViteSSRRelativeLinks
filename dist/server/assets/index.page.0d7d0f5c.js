"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var _imports_0 = "/assets/test.787f7936.jpg";
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = {};
    expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "markdown-body" }, _attrs))}><h1>About</h1><p><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt=""><br><a href="./test.jpg">Test1</a><br><a href="/pages/about/test.jpg">Test2</a></p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about/index.page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
