"use strict";
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("@vue/server-renderer");
var vitePluginSsr = require("vite-plugin-ssr");
var vue = require("vue");
var Link_vue_vue_type_style_index_0_scoped_true_lang = "\na[data-v-c8f82676] {\n  padding: 3px 10px;\n}\na.active[data-v-c8f82676] {\n  background-color: #eee;\n}\n";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: { active: _ctx.$pageContext.urlPathname === _ctx.$attrs.href }
  }, _attrs))} data-v-c8f82676>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</a>`);
}
_sfc_main$1.ssrRender = _sfc_ssrRender$1;
_sfc_main$1.__scopeId = "data-v-c8f82676";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("renderer/Link.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var logoUrl = "/assets/logo.bebe2e90.svg";
var PageWrapper_vue_vue_type_style_index_0_lang = "\nbody {\n  margin: 0;\n  font-family: sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n}\n";
var PageWrapper_vue_vue_type_style_index_1_scoped_true_lang = "\n.layout[data-v-f706a310] {\n  display: flex;\n  max-width: 900px;\n  margin: auto;\n}\n.content[data-v-f706a310] {\n  padding: 20px;\n  border-left: 2px solid #eee;\n  padding-bottom: 50px;\n  min-height: 100vh;\n}\n.navigation[data-v-f706a310] {\n  padding: 20px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  line-height: 1.8em;\n}\n.logo[data-v-f706a310] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n";
const components = { Link: _sfc_main$1 };
const _sfc_main = { components };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = vue.resolveComponent("Link");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "layout" }, _attrs))} data-v-f706a310><div class="navigation" data-v-f706a310><a href="/" class="logo" data-v-f706a310><img${serverRenderer.ssrRenderAttr("src", logoUrl)} height="64" width="64" alt="logo" data-v-f706a310></a>`);
  _push(serverRenderer.ssrRenderComponent(_component_Link, { href: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_Link, { href: "/about" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="content" data-v-f706a310>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
_sfc_main.ssrRender = _sfc_ssrRender;
_sfc_main.__scopeId = "data-v-f706a310";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("renderer/PageWrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function createApp(pageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = {
    render() {
      return vue.h(_sfc_main, {}, {
        default() {
          return vue.h(Page, pageProps || {});
        }
      });
    }
  };
  const app = vue.createSSRApp(PageWithLayout);
  app.config.globalProperties.$pageContext = pageContext;
  return app;
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const app = createApp(pageContext);
  const appHtml = await serverRenderer.renderToString(app);
  const { documentProps } = pageContext;
  const title = documentProps && documentProps.title || "Vite SSR app";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  return vitePluginSsr.html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${vitePluginSsr.html.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
exports.passToClient = passToClient;
exports.render = render;
