const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

// 'public' 디렉터리가 'src'와 같은 상위 디렉터리에 위치할 때의 경로 설정
app.use(express.static(path.join(__dirname, '../public')));

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// SSL 옵션 설정 (localhost.key와 localhost.crt를 읽어옵니다)
const options = {
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt')
};

// HTTPS 서버 시작
https.createServer(options, app).listen(443, () => {
    console.log('HTTPS Server running on https://localhost');
});

module.exports = app;
