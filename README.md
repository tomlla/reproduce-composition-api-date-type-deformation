
# Error


```
$ ./node_modules/.bin/ts-node ./src/example.ts

/home/nt/dev/src/github.com/tomlla/reproduce-composition-api-date-type-deformation/node_modules/ts-node/src/index.ts:421
    return new TSError(diagnosticText, diagnosticCodes)
           ^
TSError: ⨯ Unable to compile TypeScript:
src/example.ts(13,7): error TS2345: Argument of type '{ toString: () => string; toDateString: () => string; toTimeString: () => string; toLocaleString: { (): string; (locales?: string | string[] | undefined, options?: DateTimeFormatOptions | undefined): string; }; ... 39 more ...; getVarDate: () => VarDate; }' is not assignable to parameter of type 'Date'.
  Property '[Symbol.toPrimitive]' is missing in type '{ toString: () => string; toDateString: () => string; toTimeString: () => string; toLocaleString: { (): string; (locales?: string | string[] | undefined, options?: DateTimeFormatOptions | undefined): string; }; ... 39 more ...; getVarDate: () => VarDate; }' but required in type 'Date'.

    at createTSError (/home/nt/dev/src/github.com/tomlla/reproduce-composition-api-date-type-deformation/node_modules/ts-node/src/index.ts:421:12)
    at reportTSError (/home/nt/dev/src/github.com/tomlla/reproduce-composition-api-date-type-deformation/node_modules/ts-node/src/index.ts:425:19)
    at getOutput (/home/nt/dev/src/github.com/tomlla/reproduce-composition-api-date-type-deformation/node_modules/ts-node/src/index.ts:530:36)
    at Object.compile (/home/nt/dev/src/github.com/tomlla/reproduce-composition-api-date-type-deformation/node_modules/ts-node/src/index.ts:735:32)
    at Module.m._compile (/home/nt/dev/src/github.com/tomlla/reproduce-composition-api-date-type-deformation/node_modules/ts-node/src/index.ts:814:43)
    at Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Object.require.extensions.(anonymous function) [as .ts] (/home/nt/dev/src/github.com/tomlla/reproduce-composition-api-date-type-deformation/node_modules/ts-node/src/index.ts:817:12)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
```
