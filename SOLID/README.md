# SOLID principles

My summaries and pseudocode.

Reference: <https://github.com/ryanmcdermott/clean-code-javascript#solid>

## TL;DR:

- Use a _**handler param/object**_ to decouple/detach from possible sources of change. = SRP, OCP, DIP
- Inherit from abstractions so swapping classes behave same. = LSP
- Settings object params mostly optional. = ISP

1. S = SRP = Single Responsibility Principle
2. O = OCP = Open/Closed Principle
3. L = LSP = Liskov Substitution Principle
4. I = ISP = Interface Segregation Principle
5. D = DIP = Dependency Injection Principle

## 1. S = SRP = Single Responsibility Principle

### Bad:

```js
class A {
  unrelatedThing;
}
```

### Good:

```js
class A {
  a = new TakeCareOfUnrelatedThing();
}
```

## 2. O = OCP = Open/Closed Principle

### Bad:

```js
class A {
  if (a) x();
  if (b) y();
}
```

### Good:

```js
class A {
  (handler) => {
    this.handler = handler;
  }
}
class HandlerA {}
class HandlerB {}
```

## 3. L = LSP = Liskov Substitution Principle

Replace parent with child, should behave same (backwards compatibility).

## 4. I = ISP = Interface Segregation Principle

Make most settings optional in the interface = good DX.

## 5. D = DIP = Dependency Injection Principle

### Bad:

```js
class O {
  this.thing = new ThingA;
}
```

### Good:

```js
class O {
  (thing) => {
    this.thing = thing;
  }
}
class ThingA {}
class ThingB {}
```
