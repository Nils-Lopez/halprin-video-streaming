# halprin-web-app

<p align="left">
  <a aria-label="Build" href="https://github.com/contredanse/life-art/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/contredanse/life-art/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
</p>

## Intro

Halprin web app

## Quick start

> For rest/api database access be sure to start `docker-compose up database`,
> see detailed instructions (seeding, docker, supabase...) in the [@contredanse/db-main README](https://github.com/contredanse/life-art/blob/main/packages/db-main-prisma/README.md).

```bash
$ yarn install
$ cd apps/web-app
$ yarn dev
```

### Features

> Some common features that have been enabled to widen monorepo testing scenarios.

- [x] Api routes: some api routes for rest.
- [x] I18n: based on [next-i18next](https://github.com/isaachinman/next-i18next)
- [x] Styling: [Emotion](https://emotion.sh/) support with critical path extraction enabled.
- [x] Styling: [Tailwind](https://tailwindcss.com/) with JIT mode enabled and common plugins.
- [x] Security: [next-secure-headers](https://github.com/jagaapple/next-secure-headers) with basic defaults.
- [x] Seo: [next-seo](https://github.com/garmeeh/next-seo)
- [x] Tests: Jest with ts-jest enabled

Database access for api's and server-side rendered

### Monorepo deps

This app relies on packages in the monorepo, see detailed instructions in [README.md](https://github.com/contredanse/life-art)

```json5
{
  dependencies: {
    "@contredanse/common": "workspace:*",
    "@contredanse/db-main": "workspace:*",
  },
}
```

And their counterparts in [tsconfig.json](./tsconfig.json)

```json5
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@contredanse/common/*": ["../../../packages/core-lib/src/*"],
      "@contredanse/common": ["../../../packages/core-lib/src/index"],
      "@contredanse/db-main/*": ["../../../packages/db-main-prisma/src/*"],
      "@contredanse/db-main": ["../../../packages/db-main-prisma/src/index"],
    },
  },
}
```

## API routes

### Rest api

Try this route http://localhost:3000/api/rest/poem

### Graphql (sdl)

In development just open http://localhost:3000/api/graphql-sdl to have the graphiql console.

Try

```gql
query {
  allPoems {
    id
    title
  }
}
```

## Some tips

### I18N & typings

Translations are handled by [next-i18next](https://github.com/isaachinman/next-i18next).
See the [next-i18next.config.js](./next-i18next.config.js).
The keys autocompletion and typechecks are enabled in [./src/typings/react-i18next.d.ts](src/types.d/react-i18next.d.ts).

## Structure

```
.
├── apps
│   └── halprin-web-app
│       ├── public/
│       │   └── locales/
│       ├── src/
│       │   ├── backend/*     (backend code)
│       │   ├── components/*
│       │   ├── features/*    (regrouped by context)
│       │   └── pages/api     (api routes)
│       ├── .env
│       ├── .env.development
│       ├── (.env.local)*
│       ├── next.config.js
│       ├── next-i18next.config.js
│       ├── tsconfig.json    (local paths enabled)
│       └── tailwind.config.js
└── packages
    ├── common
    └── db-main
```

### Develop

```
$ yarn dev
```
