console.log("Program started");

/*
-------------------------------------
Simulated async tasks
-------------------------------------
*/

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User Data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts Data");
    }, 1000);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comments Data");
    }, 1000);
  });
}

/*
-------------------------------------
Example 1 — Sequential Execution
-------------------------------------
*/

async function sequentialExample() {
  console.log("\nSequential Execution");

  console.time("sequential");

  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();

  console.log(user);
  console.log(posts);
  console.log(comments);

  console.timeEnd("sequential");
}

/*
-------------------------------------
Example 2 — Parallel Execution
-------------------------------------
*/

async function parallelExample() {
  console.log("\nParallel Execution");

  console.time("parallel");

  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments(),
  ]);

  console.log(user);
  console.log(posts);
  console.log(comments);

  console.timeEnd("parallel");
}

/*
-------------------------------------
Run examples
-------------------------------------
*/

async function run() {
  await sequentialExample();
  await parallelExample();
}

run();

console.log("Program finished (async operations running)");
