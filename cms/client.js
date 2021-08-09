const app = cloudbase.init({
  env: "test-blog-8gna4lys4c563eac",
});
// 需要登录 暂时通过匿名和未登录操作

const db = app.database();
Vue.createApp({
  data() {
    return {
      item: {
        name: "李白",
        age: 100,
        birthday: "1921-09-09",
      },
      query: {
        name: "李白",
      },
      update: {
        name: "李小白",
      },
      list: [],
    };
  },
  methods: {
    async add() {
      await db.collection("users").add(this.item);
      this.find();
    },
    async del() {
      await db.collection("users").where(this.query).remove();
      this.find();
    },
    async find() {
      let data = await db.collection("users").orderBy("name", "desc").limit(10).get();
      this.list = data.data;
      console.log(data);
    },
    async modify() {
      await db.collection("users").where(this.query).update(this.update);
      this.find();
    },
  },
}).mount("#app");