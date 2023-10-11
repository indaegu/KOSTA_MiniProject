const OpenAI = require('openai');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const openai = new OpenAI({
  apiKey: process.env.GPTapiKey,
});

let latestUserMessage = "";

app.post('/sendMessage', async function (req, res) {
  latestUserMessage = req.body.userMessage;
  res.status(200).end();
});

app.get('/server', function (req, res) {
  // SSE 설정
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      max_tokens: 500,
      stream: true,
      n: 1,
      temperature: 0.9,
      top_p: 0.9,
      messages: [
          { role: 'system', content: '' },
          { role: 'user', content: '' },
          { role: 'assistant', content: '' },
          { role: 'user', content: latestUserMessage },
      ],
  }).then(completion => {
      const stream = completion.response.body;
      stream.on('data', chunk => {
        const chunkStr = chunk.toString();
        // "[DONE]"이나 "data: "로 시작하는 문자열을 필터링
        if (!chunkStr.startsWith("[DONE]") && chunkStr.startsWith("data: ")) {
            res.write(chunkStr + '\n\n');
        }
    });
    
      
      stream.on('end', () => {
          res.end();
      });
  }).catch(error => {
      console.error('API 호출 중 오류 발생:', error);
      res.status(500).send('서버 오류');
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("서버가 " + port + "번 포트에서 실행중입니다.");
});

