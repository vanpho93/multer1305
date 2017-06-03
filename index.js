const express = require('express');
const multer = require('multer');//1

const upload = multer({ dest: './public' });//2
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/upload', upload.single('hinhDaiDien'),(req, res) => {//3
    console.log(req.body, req.file);
    res.send('UPLOAD THANH CONG')
});

app.listen(3000, () => console.log('Server started!'));
