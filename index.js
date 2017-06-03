const express = require('express');
const upload = require('./uploadConfig');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/upload', upload.single('hinhDaiDien'),(req, res) => {//3
    console.log(req.body, req.file);
    res.send('UPLOAD THANH CONG')
});

app.use((err, req, res, next) => {
    res.send(err.toString());
});

app.listen(3000, () => console.log('Server started!'));
