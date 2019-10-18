# typescript-practice

## But Why Though?

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
