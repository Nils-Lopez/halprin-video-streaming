<div align="center">
  <h1 align="center"><a aria-label="Contredanse life-art" href="https://github.com/contredanse/life-art">Life art</a></h1>
  <p align="center"><strong>A @contredanse art project</strong></p>
</div>
<p align="center">
  <a aria-label="Build" href="https://github.com/contredanse/life-art/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/contredanse/life-art/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="Codefactor grade" href=https://www.codefactor.io/repository/github/contredanse/life-art">
    <img alt="Codefactor" src="https://img.shields.io/codefactor/grade/github/contredanse/life-art?label=Codefactor&logo=codefactor&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="CodeClimate maintainability" href="https://codeclimate.com/github/contredanse/life-art">
    <img alt="Maintainability" src="https://img.shields.io/codeclimate/maintainability/contredanse/life-art?label=Maintainability&logo=code-climate&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="CodeClimate technical debt" href="https://codeclimate.com/github/contredanse/life-art">
    <img alt="Techdebt" src="https://img.shields.io/codeclimate/tech-debt/contredanse/life-art?label=TechDebt&logo=code-climate&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="Codacy grade" href="https://www.codacy.com/gh/contredanse/life-art/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=contredanse/life-art&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/dff9c944af284a0fad4e165eb1727467?logo=codacy&style=flat-square&labelColor=000&label=Codacy">
  </a>
  <a aria-label="LoC">  
    <img alt="LoC" src="https://img.shields.io/tokei/lines/github/contredanse/life-art?style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="Top language" href="https://github.com/contredanse/life-art/search?l=typescript">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/contredanse/life-art?style=flat-square&labelColor=000&color=blue">
  </a>
  <a aria-label="Licence" href="https://github.com/contredanse/life-art/blob/main/LICENSE">
    <img alt="Licence" src="https://img.shields.io/github/license/contredanse/life-art?style=flat-quare&labelColor=000000" />
  </a>
</p>


[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/contredanse/life-art)

## 1. Structure

#### App

- [apps/halprin-web-app](apps/halprin-web-app): SSR and API. [README](apps/halprin-web-app/README.md) | [DEMO/Vercel](https://life-art.vercel.app) | [CHANGELOG](apps/halprin-web-app/CHANGELOG.md)

#### Some shared code

- [packages/common](packages/common): [README](packages/common/README.md) | [CHANGELOG](packages/common/CHANGELOG.md)
- [packages/db-main](packages/db-main): [README](packages/db-main/README.md) | [CHANGELOG](packages/db-main/CHANGELOG.md)


#### Static shared assets

If needed static resources like **locales**, **images**,... can be shared by using symlinks in the repo.

- See the global [static](./static) folder.

#### Folder overview

```
.
├── apps
│   └── halprin-web-app   
│       ├── public/
│       │   ├── shared-assets/   
│       │   └── shared-locales/  
│       ├── src/
│       │   └── pages/api        
│       ├── CHANGELOG.md
│       ├── jest.config.js
│       ├── next.config.js
│       ├── package.json         
│       └── tsconfig.json        
│
├── packages
│   ├── common                
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── db-main               
│       ├── prisma/
│       ├── src/
│       ├── CHANGELOG.md
│       ├── package.json
│       └── tsconfig.json
│
├── static                       (no code: images, json, locales,...)
│   ├── assets
│   └── locales
├── .yarnrc.yml
├── docker-compose.yml           (database service for now)
├── package.json                 (the workspace config)
└── tsconfig.base.json           (base typescript config)
```

## 3. Quick start

> As an example you can start with the halprin-web-app

```bash
# Install the monorepo
yarn install
# In another terminal
docker-compose up main-db
# Run the web-app
cd apps/halprin-web-app
yarn dev
```


## 4. Monorepo essentials

### 4.1 Monorepo scripts

Some convenience global scripts are defined in the [root package.json](./package.json), they generally
call their counterparts defined in packages and apps.

```json5
{
  "scripts": {
    "clean": "yarn workspaces foreach -ptv run clean",
    "test": "run-s 'test:*'",
    "test:unit": "yarn workspaces foreach -ptv run test:unit",
    "fix:staged-files": "yarn workspaces foreach -t run fix:staged-files",
    "fix:all-files": "yarn workspaces foreach -ptv run fix:all-files",
    // Manage versions and releases with atlassion/changesets
    "changeset": "changeset",
    "release": "yarn build && changeset publish",
    // Utility scripts to check/upgrade deps across the entire monorepo
    // use yarn dedupe after install
    "deps:check": "npm-check-updates --deep --dep prod,dev,optional",
    "deps:update": "npm-check-updates -u --deep --dep prod,dev,optional",
    "typecheck": "yarn workspaces foreach -ptv run typecheck",
    "lint": "yarn workspaces foreach -ptv run lint",
    "share:static:symlink": "yarn workspaces foreach -pv --include '*-app' run share:static:symlink",
    "share:static:hardlink": "yarn workspaces foreach -pv --include '*-app' run share:static:hardlink",
    "apps:build": "yarn workspaces foreach -ptv --include '*-app' run build",
    "apps:clean": "yarn workspaces foreach -ptv --include '*-app' run clean",
    "packages:build": "yarn workspaces foreach -ptv --include '@contredanse/*' run build",
    "packages:lint": "yarn workspaces foreach -ptv --include '@contredanse/*' run lint",
    "packages:typecheck": "yarn workspaces foreach -ptv --include '@contredanse/*' run typecheck",
    "packages:clean": "yarn workspaces foreach -ptv --include '@contredanse/*' run clean",
    "docker:up": "docker-compose up -d",
    "docker:up:database": "docker-compose up -d main-db",
    "docker:down": "docker-compose down",
    "docker:clean": "docker container rm -f $(docker container ls -qa) && docker image rm -f $(docker image ls -q)",
  },
}
```

### 4.2 Maintaining deps updated

The global commands `yarn deps:check` and `yarn deps:update` will help to maintain the same versions across the entire monorepo.
They are based on the excellent [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
(see [options](https://github.com/raineorshine/npm-check-updates#options), i.e: `yarn check:deps -t minor`).

> After running `yarn deps:update`, a `yarn install` is required. To prevent
> having duplicates in the yarn.lock, you can run `yarn dedupe --check` and `yarn dedupe` to
> apply deduplication. The duplicate check is enforced in the example github actions.

## 5. Quality

### 5.1 Linters

An example of base eslint configuration can be found in [./.eslint.base.json](./.eslintrc.base.json), apps
and packages extends it in their own root folder, as an example see [./apps/halprin-web-app/.eslintrc.json](apps/halprin-web-app/.eslintrc.json).
Prettier is included in eslint configuration as well as [eslint-config-next](https://nextjs.org/docs/basic-features/eslint) for nextjs apps.

### 5.2 Hooks / Lint-staged

Check the [.husky](./.husky) folder content to see what hooks are enabled. Lint-staged is used to guarantee
that lint and prettier are applied automatically on commit and/or pushes.


## FAQ


## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcontredanse%2Flife-art.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fcontredanse%2Flife-art?ref=badge_large)
