# non-dotted-dotfiles
A library to test if a filename is considered a to be a standard non-dotted dotfile

### installation
```
npm install nondot
```

### Usage

Typescript
```typescript
import nondot from "nondot"

console.log(nondot("minecraft")); // => false
console.log(nondot("Makefile")); // => true
```

JavaScript
```javascript
const nondot = require("nondot");

console.log(nondot("minecraft")); // => false
console.log(nondot("Makefile")); // => true
```

### Supported files
See the [non-dotted-dotfiles.json](https://github.com/structure-codes/non-dotted-dotfiles/blob/main/src/non-dottted-dotfiles.json) for the full list of files.