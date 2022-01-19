[![Netlify Status](https://api.netlify.com/api/v1/badges/6b755fdd-d5b2-4dd8-a70f-3488032cb854/deploy-status)](https://app.netlify.com/sites/determined-shannon-bcd95d/deploys)

![alt text](https://github.com/voxoco/website/blob/main/public/assets/images/logo-footer.svg?raw=true)

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🎨 [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS framework

- 😃 [Use icons from any icon sets, with no compromise](./src/components)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero-config

<br>

See [Vitesse](https://github.com/antfu/vitesse) for full featureset.

## Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bunch of additional features!

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - using icons as components on-demand

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - Windi CSS integration
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/antfu/vitesse-lite/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse-lite my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
