# Learning How to use React Context | React + TypeScript + Vite

## Resources

**Tutorial by Cosden Solutions:** <br>
https://youtu.be/HYKDUF8X3qI


**Project Structure Reference:** <br>
https://github.com/taniarascia/takenote


**How to Setup Alias:** <br>
https://dev.to/tilly/aliasing-in-vite-w-typescript-1lfo


**Others:** <br>
* TailwindCss not working was due to not having initialized `postcss.config.js` [See [discussion on Stackoverflow](https://stackoverflow.com/questions/74987006/tailwindcss-not-working-with-vite-react)]


## About Project Setup
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
