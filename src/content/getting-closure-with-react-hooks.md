---
title: Getting Closure with React Hooks
published: false
description: No description
tags: work in progress
date: 2021-04-11T22:15:14.588Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/u5am6bureo9y0yejd51e.png
---

[https://twitter.com/markdalgleish/status/1095025468367990784](https://twitter.com/markdalgleish/status/1095025468367990784)

> A closure is the combination of a function and the lexical environment within which that function was declared. - MDN

> A closure is a function having access to the parent scope, even after the parent function has closed. - W3Schools

## Write hooks from scratch

```javascript
let foo = 1;
function add() {
  foo = foo + 1;
  return foo;
}

console.log(add()); // 2
console.log(add()); // 3
console.log(add()); // 4
console.log(add()); // 5
console.log(add()); // 6
```

If we create a variable on the global scope called foo and then create a function called add that increments foo and then returns foo, every time we call add it's going to increment by 1. It's a stateful in that every time we call it there's some internal state that's being mutated and we can see the result of that.

The problem with this is that foo is on the global scope and any intermediate script can just mess with it and alters expected behavior, which is undesirable.

```javascript
let foo = 1;
function add() {
  foo = foo + 1;
  return foo;
}

console.log(add()); // 2
console.log(add()); // 3
console.log(add()); // 4
foo = 9999;
console.log(add()); // 10000
console.log(add()); // 10001
```

So we need to protect the variable somehow and move it off the global scope. We can do that by moving it inside the scope of the function, but if we do that we will get an error.

```javascript
function add() {
  let foo = 1;
  foo = foo + 1;
  return foo;
}

console.log(add()); // 2
console.log(add()); // 2
console.log(add()); // 2
foo = 9999; // ReferenceError: foo is not defined
```

We can't modify foo outside the scope of the function and that's great but it means we lose the statefulness.

```javascript
function add() {
  let foo = 1;
  foo = foo + 1;
  return foo;
}

console.log(add()); // 2
console.log(add()); // 2
console.log(add()); // 2
console.log(add()); // 2
console.log(add()); // 2
```

So how do we fix this? We can't exactly fix this with this API but what we can do is to return a function inside of this function and mutate our variable inside there:

```javascript
function getAdd() {
  let foo = 1;
  return function () {
    foo = foo + 1;
    return foo;
  };
}

const add = getAdd();

console.log(add()); // 2
console.log(add()); // 3
console.log(add()); // 4
console.log(add()); // 5
console.log(add()); // 6
```

And now it works again. We have our stateful function back and we can not touch foo outside of the scope of the getAdd function.

```javascript
function getAdd() {
  let foo = 1;
  return function () {
    foo = foo + 1;
    return foo;
  };
}

const add = getAdd();

console.log(add()); // 2
console.log(add()); // 3
console.log(add()); // 4
foo = 23; // ReferenceError: foo is not defined
```

That' s what we want, we want stateful functions and we want state to be protected. So this is a closure, the add function is an anonymous function that closes over the foo variable from the execution context of the getAdd function, no one else can access it but add can access it everytime it's executed. If we want to clean this up a bit we can use a module pattern using an IIFE.

```javascript
const add = (function getAdd() {
  let foo = 1;
  return function () {
    foo = foo + 1;
    return foo;
  };
})();

console.log(add()); // 2
console.log(add()); // 3
console.log(add()); // 4
console.log(add()); // 5
console.log(add()); // 6
```

Now that we got that, let's clone react.

## Cloning React

### The useState hook

First we'll clone the useState hook. It takes an initial value and returns an arrat with a state and a setState.

```javascript
function useState(initVal) {
  // implementation
  return [state, setState];
}
```

To implement this we will need an internal value \_val and we will initialize it to initVal. Then we create the setState function which takes a value, that we'll call newVal, then sets the internal value \_val to newVal. We'll just set initialize state to \_val for now (this is wrong, but it's fine for now). Now we have a hook in node and we can use it as follows.

```javascript
function useState(initVal) {
  let _val = initVal;
  const state = _val;
  const setState = (newVal) => {
    _val = newVal;
  };
  return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count); // 1
setCount(2);
console.log(count); // 1
```

We'd expect this to work but it doesn't, setCount is actually working and it's modifying the internal value. The problem is that when we destructure, count is assigned the value of one so in both console logs we get the value of 1 so we need some way of repulling the internal state again. One easy (and cheap) way to do it is to turn the state into a getter function and then just call it, that will give us our stateful function back.

```javascript
function useState(initVal) {
  let _val = initVal;
  const state = () => _val;
  const setState = (newVal) => {
    _val = newVal;
  };
  return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count()); // 1
setCount(2);
console.log(count()); // 2
```

But in react you don't use a getter function, you just call the state variable and it's live everytime it has the correct value so we need to refactor this to get the correct functionality.

The first this we will do is to put our hook inside of a React module using an IIFE and then return an object with a useState property. Now in the usage we can call React.useState and it does the exact same thing.

```javascript
const React = (function () {
  function useState(initVal) {
    let _val = initVal;
    const state = () => _val;
    const setState = (newVal) => {
      _val = newVal;
    };
    return [state, setState];
  }
  return { useState };
})();

const [count, setCount] = React.useState(1);
console.log(count()); // 1
setCount(2);
console.log(count()); // 2
```

So we've created our React module and wrapped up the functionality inside, we can do the same thing to our hook and in React we wrap our hooks using components. So we declare a component and then put the hook in there. Normally we'd be rendering to the DOM but since we're working in Node we don't have a DOM so we'll just render to the console and simulate that, we also create a click method that increments count every time it's called. Next we need to teach our React how to render and we'll do this with a render function which takes a component. A component is just a function so we can just call it. when we call it we get an object that has a render and a click so we can call the render so that we log something out to the screen and then also return the component so that we can do some other stuff with it. Then we can expose the render function inside the React module. We can now lift the internal value \_value up to the scope of react, then remove the getter function from the state variable and let the useState hook close over the internal value so that it just returns every time it renders. Finally we can get the component by calling the render method from the React module and pass it the component.

```javascript
const React = (function () {
  let _val;
  function useState(initVal) {
    const state = _val || initVal;
    const setState = (newVal) => {
      _val = newVal;
    };
    return [state, setState];
  }
  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }
  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  return {
    render: () => console.log(count),
    click: () => setCount(count + 1),
  };
}

var App = React.render(Component); // 1
App.click();
var App = React.render(Component); // 2
App.click();
var App = React.render(Component); // 3
App.click();
var App = React.render(Component); // 4
App.click();
var App = React.render(Component); // 5
```

That was quite a lot, but now we have our stateful function again. And additionally we have a React module, we have a component (sort of) and we can do stuff on that component which update the state.

This is really good until you try to have multiple hooks. We'll add a second hook that now takes a string so that it looks different from our first one, we'll log out this new state variable and we'll also add a new method to our component called type for modifying this new state variable. Then we use that type method.

```javascript
    const React = (function() {
     let _val
     function useState(initVal) {
      const state = _val || initVal
      const setState = newVal => {
       _val = newVal
      }
      return [state, setState]
     }
     function render(Component) {
      const C = Component()
      C.render()
      return C
     }
     return { useState, render }
    })()

    function Component() {
     const [count, setCount] = React.useState(1)\
     const [text, setText] = React.useState('apple')
     return {
      render: () => console.log({ count, text }),
      click: () => setCount(count + 1),
      type: word => setText(word)
     }
    }

    var App = React.render(Component) // Object {count: 1, text: "apple"}
    App.click()
    var App = React.render(Component) // Object {count: 2, text: 2}
    App.type('pear')
    var App = React.render(Component) // Object {count: "pear", text: "pear"}
```

This doesn't do what we expect. And the problem is that we're trying to use two hooks and they're both trying to use the same store in memory because we only have one internal variable and it's constantly overriding that single variable. This means that our mental image of hooks should grow now and we should think of hooks as arrays. So let's use an array for our internal value, we'll change it's name to hooks, also for us to know which hooks we're working on we'll also need an index idx and we'll set it to 0. Then we replace all references to the internal value with hooks at the current index. Next we increment the index at the end of the useState function so that when each hook is done the next one can take place. But this means we also need to reset the index so that each time we re-render we can start from the first hook so we'll set idx to zero in the render function. But this won't work because setState is called asynchronously, it's called after render and by that time the index will have already been reset to zero so the index shouldn't be a live value. To fix that we'll freeze the index by having an internal value of index in the useState function and then setState will close over that internal frozen index value. This gives us what we want, we now have independently moving states.

```javascript
    const React = (function() {
     let hooks = []
     let idx = 0
     function useState(initVal) {
      const state = hooks[idx] || initVal
      const _idx = idx
      const setState = newVal => {
       hooks[_idx] = newVal
      }
      idx++
      return [state, setState]
     }
     function render(Component) {
      idx = 0
      const C = Component()
      C.render()
      return C
     }
     return { useState, render }
    })()

    ...

    var App = React.render(Component) // Object {count: 1, text: "apple"}
    App.click()
    var App = React.render(Component) // Object {count: 2, text: "apple"}
    App.type('pear')
    var App = React.render(Component) // Object {count: 2, text: "pear"}
```

### The useEffect hook

The useEffect hook takes a callback and an optional dependency array.

```javascript
    function Component() {
     const [count, setCount] = React.useState(1)\
     const [text, setText] = React.useState('apple')
     React.useEffect(() => {
      // some stuff
     }, [])
     return {
      render: () => console.log({ count, text }),
      click: () => setCount(count + 1),
      type: word => setText(word)
     }
    }
```

Let's implement this API.

Back on our React module we create a new useEffect function that takes in a callback and a dependency array. First we create a variable to check if our dependencies have changed or not and by default we'll set it to true, so by default we'll just keep re-rendering. If the dependencies have changed, we'll call the callback. Now we need a way to detect change and in order to detect change we need the old dependencies and the new ones, which means we need a way to store the dependencies somewhere, a good place to do that is the hooks array, we can draw it out at the start of our function and then set the new dependencies at the end and then increment the index after that. Sometimes the old dependencies are undefined so we need to guard this with an if statement. If old dependencies exist we'll use Array.some() to compare the dependencies with the old dependencies at the corresponding index, we'll use Object.is() to compare the two. This will set has changed to true if it finds a dependency that has changed. Finally, we need to expose useEffect in our react module.

```javascript
    const React = (function() {
     let hooks = []
     let idx = 0
     function useState(initVal) {
      const state = hooks[idx] || initVal
      const _idx = idx
      const setState = newVal => {
       hooks[_idx] = newVal
      }
      idx++
      return [state, setState]
     }
     function render(Component) {
      idx = 0
      const C = Component()
      C.render()
      return C
     }
     function useEffect(cb, depArray) {
      const oldDep = hooks[idx]
      let hasChanged = true
      if (oldDep) {
       hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDep[i]))
      }
      if (hasChanged) cb()
      hooks[idx] = depArray
      idx++
     }
     return { useState, render, useEffect }
    })()

    function Component() {
     const [count, setCount] = React.useState(1)\
     const [text, setText] = React.useState('apple')
     React.useEffect(() => {
      console.log("useEffect")
     }, [])
     return {
      render: () => console.log({ count, text }),
      click: () => setCount(count + 1),
      type: word => setText(word)
     }
    }

    // useEffect
    var App = React.render(Component) // Object {count: 1, text: "apple"}
    App.click()
    var App = React.render(Component) // Object {count: 2, text: "apple"}
    App.type('pear')
    var App = React.render(Component) // Object {count: 2, text: "pear"}
```

If we put in count in the dependency array, then it depends on the count and changes everytime we update count.

```javascript
    ...

    function Component() {
     const [count, setCount] = React.useState(1)\
     const [text, setText] = React.useState('apple')
     React.useEffect(() => {
      console.log("useEffect")
     }, [count])
     return {
      render: () => console.log({ count, text }),
      click: () => setCount(count + 1),
      type: word => setText(word)
     }
    }

    // useEffect
    var App = React.render(Component) // Object {count: 1, text: "apple"}
    App.click()
    // useEffect
    var App = React.render(Component) // Object {count: 2, text: "apple"}
    App.type('pear')
    var App = React.render(Component) // Object {count: 2, text: "pear"}
```

If we put just text in the dependency array it will run everytime we change text.

```javascript
    ...

    function Component() {
     const [count, setCount] = React.useState(1)\
     const [text, setText] = React.useState('apple')
     React.useEffect(() => {
      console.log("useEffect")
     }, [text])
     return {
      render: () => console.log({ count, text }),
      click: () => setCount(count + 1),
      type: word => setText(word)
     }
    }

    // useEffect
    var App = React.render(Component) // Object {count: 1, text: "apple"}
    App.click()
    var App = React.render(Component) // Object {count: 2, text: "apple"}
    App.type('pear')
    // useEffect
    var App = React.render(Component) // Object {count: 2, text: "pear"}
```

And when we delete the dependency array, it runs every single time.

```javascript
    ...

    function Component() {
     const [count, setCount] = React.useState(1)\
     const [text, setText] = React.useState('apple')
     React.useEffect(() => {
      console.log("useEffect")
     })
     return {
      render: () => console.log({ count, text }),
      click: () => setCount(count + 1),
      type: word => setText(word)
     }
    }

    // useEffect
    var App = React.render(Component) // Object {count: 1, text: "apple"}
    App.click()
    // useEffect
    var App = React.render(Component) // Object {count: 2, text: "apple"}
    App.type('pear')
    **// useEffect**
    var App = React.render(Component) // Object {count: 2, text: "pear"}
```

This wraps up our very simplistic implementation of React. But we can go a step further and find a way to render this on the DOM. So we can import a couple of utilities to make this possible. Of course, we also need the babel jsx plugin to make jsx work.

React has a concept of a work loop which always loops around to check if there's work to be done. We need to simulate it for things to work. So we'll create a function called workLoop in our React module. Inside that function we'll first set the index to zero because anytime you re-render you have to set the index to zero. Then we'll call the render function and pass in the hooks, then we'll call the setTimeout passing it the workLoop function and a second argument of 3 seconds, in reality this is much faster but this will be fine.

```javascript
    import { createElement, render } from "./utils"

    const React = (function() {
     let hooks = []
     let idx = 0
     function useState(initVal) {
      const state = hooks[idx] || initVal
      const _idx = idx
      const setState = newVal => {
       hooks[_idx] = newVal
      }
      idx++
      return [state, setState]
     }
     function workLoop() {
      idx = 0
      render(hooks)()
      setTimeout(workLoop, 300)
     }
     function useEffect(cb, depArray) {
      const oldDep = hooks[idx]
      let hasChanged = true
      if (oldDep) {
       hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDep[i]))
      }
      if (hasChanged) cb()
      hooks[idx] = depArray
      idx++
     }
     return { useState, render: render(hooks), useEffect, createElement }
    })()

    function Component() {
     const [count, setCount] = React.useState(1)\
     const [text, setText] = React.useState('apple')
     React.useEffect(() => {
      console.log("useEffect")
     }, [])
     return <main>
         <h1>Hello world</h1>
         <button onClick={() => setCount(count + 1)}>Click me: {count}</button>
        </main>
    }

    const rootElement = document.getElementById("root")
    React.render(<Component />, rootElement)
```

The utils file looks as follows

```javascript
let _Component = null;
let _root = null;
let _hooks = null;

export let render = (hooks) => (Component = _Component, root = _root) => {
  if (JSON.stringify(hooks) === _hooks) {
    return; // shitty memoization!
  } else {
    _hooks = JSON.stringify(hooks);
  }
  // nuke the existing rendered elements
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  const Comp = reconcile(Component, root);
  _Component = Component;
  _root = root;
  const dom = createDom(Comp);
  // mount the new ones
  root.appendChild(dom);
};

export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// recursive
export function createDom(fiber) {
  const dom =
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);
  const props = fiber.props || {};
  updateDom(dom, {}, props);
  if (props.children) {
    props.children.forEach((child) => {
      // recursion
      if (Array.isArray(child)) {
        child.forEach((x) => {
          dom.appendChild(createDom(x));
        });
      } else {
        dom.appendChild(createDom(child));
      }
    });
  }
  return dom;
}
const isEvent = (key) => key.startsWith("on");
const isProperty = (key) => key !== "children" && !isEvent(key);
const isNew = (prev, next) => (key) => prev[key] !== next[key];
const isGone = (prev, next) => (key) => !(key in next);
function updateDom(dom, prevProps, nextProps) {
  //Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });
  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = "";
    });
  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = nextProps[name];
    });
  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}

// recursive funciton
export function reconcile(Component, root) {
  const type = Component.type;
  if (Array.isArray(Component)) {
    return Component.map((child) => reconcile(child, root));
  }
  const Comp = typeof type === "string" ? Component : type();
  if (Comp.props && Comp.props.children) {
    Comp.props.children.forEach((child, idx) => {
      if (typeof child.type !== "string") {
        // recursive call for children
        Comp.props.children[idx] = reconcile(Comp.props.children[idx], root);
      }
    });
  }
  return Comp;
}
```

Despite all that we've done, we need to remember that this is not React.
