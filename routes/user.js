const Router = require("@koa/router");
const api = require("../api")

const router = new Router({
  prefix: "/api/user"
});


router.post("/", async (ctx) => {
  const text = ctx.request.body
  const msg = await api.sendMessage(text.val)
  ctx.body = {
    text: msg
  }
});

module.exports = router.routes();
