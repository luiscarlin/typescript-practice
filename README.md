# typescript-practice

## But Why?

- Intellisense in IDE
- TSC compiler catches errors

## Basics

```bash
# install typescript
npm install -g typescript

# create a ts file
"console.log('hello')" > index.ts

# run the typescript compiler against that file. It will create a js file that we
# can run in node or the browser
tsc index.ts
```

- You can configure the ts compiler by using `tsconfig.json`
- If a third party library you want to use does not support types, then you can intall community supported types from `@types`
- `any` tells tsc to stop enforcing types. It pretty much becomes js. You shouldn't use it through.
