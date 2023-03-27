const Router = require("@koa/router");
const api = require("../api")

const router = new Router({
  prefix: "/api/user"
});


router.post("/", async (ctx) => {
  const text = ctx.request.body
  let msg;
  try {
    msg = await api.sendMessage(text.val)
  } catch (e) {
    console.log(e)
    msg = e.message
  }
  ctx.body = {
    text: msg
  }
});

module.exports = router.routes();
