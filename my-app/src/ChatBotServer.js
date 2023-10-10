// Backend 코드 index.js
const OpenAI = require('openai');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')

//CORS 이슈 해결 용도
// let corsOptions={
//     origin : 'https://www.domain.com',
//     credential: true
// }
app.use(cors());


app.use(express.json())
app.use(express.urlencoded({extended:true}))


const openai = new OpenAI({
    apiKey: process.env.GPTapiKey,
  });

//Post Metod
app.post('/server', async function (req, res) {
        let todatDateTime = new Date().toLocaleDateString('ko-KR',{timeZone: 'Asia/Seoul'}); //한국의 서울을 시간을 기준으로 Date 생성
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            max_tokens : 500, // 답변 문자열 길이, 토큰 기준(한글은 한글자에 3토큰정도, 영어는 한 토큰에 3글자정도)
            temperature : 0.9, // 랜덤한 답변 정도, 낮으면 항상 같은 답변이 제공됨 / 모델이 얼마나 Risk(=randomness)를 감수할 것인지 조절/0.9를 설정하면 creative answer, 0이면 well-defined answer
            top_p : 0.9, // 답변의 다양성 높을수록 다양한 답변이 나오는 대신, 올바르지 않은 답변이 가능함 /  token의 확률이 top_p(0.3이면 상위 30%)만큼인 토큰만 사용
          messages: [
              { role: 'system', content: '' },
              { role: 'user', content: '' },
              { role: 'assistant', content: '' },
              { role: 'user', content: req.body.userMessage },
          ],
        });
        console.log('입력 질문 :' + req.body.userMessage)
        let fortune = completion.choices[0].message['content'];
        console.log(fortune)

        res.json({"assistant" : fortune})
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("서버가 " + port + "번 포트에서 실행중입니다.");
});
