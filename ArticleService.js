const articles = [
    {   id: 1,
        title: 'Essa startup pretende ser o Spotify dos games; conheça ',
        description: 'A Bemobi, empresa de soluções de serviços digitais para mobile, está apostando no mercado de games via streaming com o lançamento de sua plataforma própria de jogos na nuvem, de olho no 5G como fator de crescimento na adoção destes produtos.'
    },

    {   id: 2,
        title: 'Você é um influenciador no trabalho? Faça o teste e descubra',
        description: 'A influência é mais uma habilidade de relacionamento que leva em consideração o quanto as pessoas estão dispostas a agir de acordo com a sua perspectiva. Para conquistá-la, é necessário ter embasamento, pensamento crítico, inteligência emocional, e muito mais.  '
    }
];

function getArticles(){
    return articles;
}

function getArticleById(articleId){
    return articles.find(articles => {
        return articles.id === Number(articleId)
    });
}
export { getArticles, getArticleById };