const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello namaste javascript");
  }, 4000);
});
const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello namaste javascript again");
  }, 10000);
});
async function handlePromise() {
  console.log("i will promise you");
  const val = await prom;
  console.log("Im a master full stack developer");
  console.log(val);
  const val2 = await prom2;
  console.log("Im a good programmer");
  console.log(val2);
}
handlePromise();
