
import { Cloud } from "laf-client-sdk";

// const { Cloud } = require("laf-client-sdk")

// 创建 cloud 对象 这里需要将 <appid> 替换成自己的 App ID
const cloud = new Cloud({
  baseUrl: "https://tukewt.laf.dev",
  getAccessToken: () => "", // 这里不需要授权，先填空
});

const parentMessageId = {}

export async function send(message) {
  // 我们提问的内容
  // const message = "1 + 1等于几";
  let res;
  // 与云函数逻辑一样，有上下文 id 就传入
  if (!parentMessageId.value) {
    res = await cloud.invoke("send", { message });
  } else {
    res = await cloud.invoke("send", { message, parentMessageId: parentMessageId.value });
  }
  // 回复我们的内容在 res.text
  // 这个是上下文 id
  parentMessageId.value = res.id;
  return res
}


console.log(Cloud)

// send()