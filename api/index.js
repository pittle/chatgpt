
async function sendMessage(msg) {
  const { ChatGPTAPI } = await import('chatgpt')
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const res = await api.sendMessage(msg)
  return res.text;
}

module.exports.sendMessage = sendMessage