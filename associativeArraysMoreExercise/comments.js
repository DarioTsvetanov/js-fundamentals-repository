function solve(input) {

    let articles = [];
    let userList = [];

    for (let line of input) {
        
        line = line.split(' ');

        if (line[0] == 'user') {

            line.shift();

            let user = line.join(' ');

            userList.push(user);
        }
        else if (line[0] == 'article') {

            line.shift();
            let article = line.join(' ');
            
            articles.push(
                {
                    article: article,
                    commentsNumber: 0,
                    comments: []
                }
            );
        }
        else {

            line = line.join(' ').split(': ');
            line[0] = line[0].split(' ');

            let postIndex = line[0].indexOf('posts');
            let userName = line[0].slice(0, postIndex).join(' ');

            let onIndex = line[0].indexOf('on');
            let article = line[0].slice(onIndex + 1, line[0].length).join(' ');
            
            let searchedArticle = articles.find(obj => obj.article == article);

            if (!searchedArticle || !userList.includes(userName)) continue;

            let [title, content] = line[1].split(', ');

            searchedArticle.comments.push(
                {
                    userName: userName,
                    title: title,
                    content: content
                }
            )  

            searchedArticle.commentsNumber ++;
        }
    }

    articles.sort((a, b) => b.commentsNumber - a.commentsNumber)
    
    for (let article of articles) {
        
        console.log(`Comments on ${article.article}`);

        article.comments.sort((a, b) => a.userName.localeCompare(b.userName));
        for (let comment of article.comments) {
            
            console.log(`--- From user ${comment.userName}: ${comment.title} - ${comment.content}`);
        }
    }
}
solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);

let example = [
    {
        article: 'Books',
        commentsNumber: 2,
        comments: [
            {
                userName: 'SomeUser',
                title: 'I like books',
                content: 'vary much'
            }
        ]
    }
]