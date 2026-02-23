const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Success! , hi there");
  } else {
    reject("Failure! , something went wrong");
  }
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();