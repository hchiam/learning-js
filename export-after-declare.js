// in modern ES6 modules, there's a way to export without having to do so right when you're declaring

// instead of export const specialNumber = 5; right away, you can instead do this:

const specialNumber = 5;

export { specialNumber };

// import { specialNumber as five } from './export-after-declare';
