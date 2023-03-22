const Koa = require("koa");
const koaStatic = require("./koa-static");
const path = require("path");
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const bodyparser = new bodyParser();
const dotenv = require("dotenv-safe");

dotenv.config({
  allowEmptyValues: true
})

app.use(koaStatic(path.resolve(__dirname, "public")));
app.use(bodyparser)

app.use(require("./routes/user"));
app.listen(9527, () => {
  console.log("server listening 9527");
});


