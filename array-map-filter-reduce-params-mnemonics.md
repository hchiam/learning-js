# Memory aids for the callback parameters in map/filter/reduce:

## Super summary: _**eia** + **ceia**_

_**eia** + **ceia**_

Or:
- **eia** + **cvia**
- **xia** + **cvia**
- **via** + **cvia**

## [`.map((e,i,a)=>{})`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#parameters)
- "mapeia"
- or "**maxia**" (`.map((x,i,a)=>{}`)

example:

```js
['a','b','c'].map((e,i,a)=>console.log(e,i,a))
```

## [`.filter((e,i,a)=>{})`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#parameters)
- "filtereia"
- or "**fixia**" (`.filter((x,i,a)=>{})`)

example:

```js
['a','b','c'].filter((e,i,a)=>console.log(e,i,a))
```

## [`.reduce((c,v,i,a)=>{},init)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#parameters)
- "reducecvia"
- or "**recvia**", which sounds like "wreck vehicle" or "rec vehicle"
- or "**redceia**" (`.reduce((c,e,i,a)=>{},init)`)

example:

```js
['a','b','c'].reduce((c,v,i,a)=>{
  console.log(c,v,i,a);
  return c+v+'.';
}, '');
```
