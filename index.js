import express from "express";
import * as ArticleService from './ArticleService.js';

const app = express();
const PORT = process.env.PORT||3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    const articles = ArticleService.getArticles();
    res.render('pages/home', {title: 'EJS', articles });
});
app.get('/artigos/:articleId', (req, res) => {
    const articleId = req.params.articleId;
    const article = ArticleService.getArticleById(articleId);
    const title = (article) ? article.title : 'Arquivo não encontrado';
    res.render('pages/artigos', { title, article })
});


