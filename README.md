# BurgWarTypes

## Requirements

- node

## Installation

```bash
npm install -D typescript-to-lua ts-node @remqb/burgwarts 
```

## Example tsconfig.json

The plugin is required if you want to type entity properties and inheritance.
ts-node.skipIgnore is required for the plugin.

See [the tstl documentation](https://typescripttolua.github.io/docs/configuration) for additional options.

```json
{
    "compilerOptions": {
        "target": "esnext",
        "outDir": "dist/",
        "module": "commonjs",
        "lib": ["esnext"],
        "strict": true,
        "sourceMap": true,
        "moduleResolution": "node",
        "rootDir": "./src",
        "types": [
            "lua-types/5.3",
            "@remqb/burgwarts",
            "typescript-to-lua/language-extensions"
        ],
        "inlineSources": true,
        "allowJs": true,
        "noImplicitAny": true
    },
    "ts-node": {
        "skipIgnore": true
    },
    "tstl": {
        "luaTarget": "5.3",
        "luaLibImport": "require",
        "noImplicitSelf": true,
        "luaPlugins": [{
            "name": "@remqb/burgwarts/plugin"
        }]
    }
}

```

## Usage

All types should be available when adding `burgwarts` to types array in tsconfig.json

You can compile your scripts with this command:

```bash
npx tstl
```

You can add the `--watch` option if you want it to recompile your files when they are modified.
