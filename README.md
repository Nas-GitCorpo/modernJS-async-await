# Async / Await Deep Dive in JavaScript

A structured learning repository explaining **how asynchronous programming works in JavaScript** and how `async/await` simplifies working with asynchronous code.

This repo is designed for **presentations, workshops, and self-learning**. It covers the JavaScript concurrency model, the event loop, Promises, async/await, concurrency patterns, common pitfalls, and practical patterns used in real applications.

---

# Learning Roadmap

Follow the topics in this order for the best understanding.

1. JavaScript concurrency model
2. Event loop and task queues
3. Promises and asynchronous control flow
4. Async functions and `await`
5. Sequential vs parallel execution
6. Promise combinators (`Promise.all`, `race`, etc.)
7. Async iteration (`for await...of`)
8. Common async pitfalls
9. Cancellation using `AbortController`

---

# Repository Structure

```
async-await-deep-dive
│
├── assets
│   ├── async-sync.png
│   ├── cheatsheet.md
│   ├── event-loop.png
│   └── promise-combinators.png
├── code-analysis
│   ├── 01-callbacks.md
│   ├── 02-promises.md
│   ├── 03-async-await-basic.md
│   ├── 04-sequential-vs-parallel.md
│   ├── 05-promise-combinator.md
│   ├── 06-top-level-await.md
│   ├── 07-async-iteration.md
│   ├── 08-foreach-trap.md
│   └── 09-abortcontroller.md
├── codes
│   ├── 01-callbacks.js
│   ├── 02-promises.js
│   ├── 03-async-await-basic.js
│   ├── 04-sequential-vs-parallel.js
│   ├── 05-promise-combinator.js
│   ├── 06-top-level-await.mjs
│   ├── 07-async-iteration.mjs
│   ├── 08-foreach-trap.js
│   └── 09-abortcontroller.js
├── docs
│   ├── 01-javascript-concurrency.md
│   ├── 02-event-loop.md
│   ├── 03-promises.md
│   ├── 04-async-await.md
│   ├── 05-concurrency-patterns.md
│   ├── 06-async-iteration.md
│   ├── 07-pitfalls.md
│   └── 08-cancellation.md
└── README.md
```

---
