# is-nondot
A library to test if a filename is considered a to be a standard non-dotted dotfile

### installation
```
npm install nondot
```

### Usage

Typescript
```typescript
import isNondot from "@structure-codes/is-nondot"

console.log(isNondot("minecraft")); // => false
console.log(isNondot("Makefile")); // => true
```

JavaScript
```javascript
const isNondot = require("@structure-codes/is-nondot");

console.log(isNondot("minecraft")); // => false
console.log(isNondot("Makefile")); // => true
```

### Supported files
See the [non-dotted-dotfiles.json](https://github.com/structure-codes/non-dotted-dotfiles/blob/main/src/non-dottted-dotfiles.json) for the full list of files.