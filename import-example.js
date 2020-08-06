// https://stackoverflow.com/questions/39282253/how-can-i-alias-a-default-import-in-javascript
// import alias from 'my-module';
// import {default as alias} from 'my-module';

let somethingToImport;
if (typeof require !== "undefined") {
  somethingToImport = require("some_package").somethingToImport;
}
