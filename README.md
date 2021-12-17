# DD-coding-assessment

Dye & Durham Coding Assessment

##Installation 
- "npm install"

##Running application

Project does not have any build steps and can be run with `node index.js` directly.

Shortcuts:

- `npm start` 

## Running tests

Tests runner is implemented in `test.js`. It is possible to run all tests once (useful for CI run)

It accepts standard unix glob to resolve test files:

```
# running on single file
./test.js ./src/lib/createSequence.test.js

# running on all test files in watch mode
./test.js ./src/**/*.test.js --watch
```
