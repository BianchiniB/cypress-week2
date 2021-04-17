class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        // POST 200 
        postUsers: 'POSTUsers',
        // GET 200 /api/tags
        getTags: 'GETTags',
        // GET 200 /api/articles/feed?limit=10&offset=0
        getFeed: 'GETFeed'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments);
        cy.route('POST', '**/api/users').as(this.as.postUsers);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/feed?**').as(this.as.getFeed);
    }
}

export default new Routes();