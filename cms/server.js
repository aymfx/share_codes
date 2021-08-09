const cloudbase = require("@cloudbase/node-sdk");
const app = cloudbase.init({
  env: "test-blog-8gna4lys4c563eac",
  secretId: "AKIDpX4PYcgBgz60iDpcZKwMcgZFj05yg9RX",
  secretKey: "2tY1IMMEuVxEIApHXGzYv65tVv9e4MXY",
});
const db = app.database();

async function main() {
  // 新增
  // await db.collection("users").add({ name: "ly", age: 12, birthday: "2021-01-02" });
  // 查找
  let data = await db.collection("users").orderBy("name", "desc").limit(10).get();
  console.log(data);
}

main();
