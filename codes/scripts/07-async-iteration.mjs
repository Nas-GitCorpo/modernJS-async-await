console.log("Program started");

/*
-------------------------------------
Simulated Paginated API
-------------------------------------
*/

function fetchPage(pageNumber) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetching page ${pageNumber}...`);

      const data = {
        1: ["User A", "User B"],
        2: ["User C", "User D"],
        3: ["User E", "User F"],
      };

      resolve(data[pageNumber] || []);
    }, 1000);
  });
}

/*
-------------------------------------
Async Generator
-------------------------------------
*/

async function* fetchAllUsers() {
  let page = 1;

  while (page <= 3) {
    const users = await fetchPage(page);

    for (const user of users) {
      yield user;
    }

    page++;
  }
}

/*
-------------------------------------
Consuming Async Generator
-------------------------------------
*/

async function processUsers() {
  console.log("\nProcessing users...\n");

  for await (const user of fetchAllUsers()) {
    console.log("Processing:", user);
  }

  console.log("\nAll users processed");
}

await processUsers();

console.log("Program finished");
