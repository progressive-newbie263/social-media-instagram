# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


Hướng dẫn khởi tạo backend/db với appwrite: 
- tạo các collection: posts, saves, users,... cần thiết bên trong project
- với posts và users. Ta sẽ cài đặt ở settings, phần permission. Cho cả 4 tính năng CRUD cho 'Any', đảm bảo người dùng có đủ các tính năng cần thiết.
- Với bảng POSTS. 
    + setup attribute Users và thiết đặt quan hệ của nó với posts là (many-to-one / 1-n) cần đảm bảo, đặt documentID là NULL với mọi document liên quan.
    + Relationship số 2, với likes là attribute key + liked là related collection. Tương tự như relationship số 1. Quan hệ là n-n/ many-to-many.
    + Rela 3, 'caption' (string)/. Limit sẽ là 2200 từ, null, ko set gì thêm
    + Rela 4, 'tags' (string)/. Limit cũng sẽ là 2200 từ, nhưng nó sẽ set thêm là array (gồm nhiều tags con khác nhau)
    + Rela 5, 'imageId' (string)/. Limit cũng sẽ là 2200 từ + required.
    + Rela 6, 'imageUrl' (url). Required.
    + Rela 7, 'location' (string). Limit 2200.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
