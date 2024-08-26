// src/index.js

const app = require('./app');  // Express 애플리케이션 가져오기

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
