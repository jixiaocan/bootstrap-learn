'use strict';

angular.module('myApp')
    .service('movieService', function() {

        var movies = [{
            _id: 0,
            name: '血战钢锯岭',
            image: 'images/005.jpg',
            category: 'war',
            label: 'Hot',
            watch: true,
            year: '2016',
            date: "2012-10-16T17:57:28.556094Z",
            description: 'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.',
            comments: [{
                rating: 5,
                comment: "场面宏伟，很好的抗日电影!",
                author: "Xiaocan",
                date: "2016-12-16T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "They kill people. But I just want save people!",
                author: "Paul McVites",
                date: "2016-11-05T17:57:28.556094Z"
            }, {
                rating: 5,
                comment: "A great description of the War II, also has a romantic love story!",
                author: "Michael Jaikishan",
                date: "2016-11-13T17:57:28.556094Z"
            }, {
                rating: 5,
                comment: "Watch it two times!",
                author: "Ringo Starry",
                date: "2016-12-02T17:57:28.556094Z"
            }]
        }, {
            _id: 1,
            name: '肖申克的救赎',
            image: 'images/001.jpg',
            category: 'Drama',
            label: 'Classic',
            watch: true,
            year: '1994',
            date: "2012-10-15T17:57:28.556094Z",
            description: 'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd "Red" Redding, and finds himself protected by the guards after the warden begins using him in his money-laundering operation.',
            comments: [{
                rating: 5,
                comment: "这耐心真是杠杠的!",
                author: "Xiaocan",
                date: "2012-10-16T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "在房顶喝瓶酒的画面好极了!",
                author: "Paul McVites",
                date: "2014-09-05T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "Yes, I have seen it many times, and it still Worth!",
                author: "Michael Jaikishan",
                date: "2015-02-13T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "Finally, They got freedom!",
                author: "Ringo Starry",
                date: "2013-12-02T17:57:28.556094Z"
            }, {
                rating: 5,
                comment: "It is great movie, because it has a great sprite!",
                author: "25 Cent",
                date: "2011-12-02T17:57:28.556094Z"
            }]
        }, {
            _id: 2,
            name: '疯狂动物城',
            image: 'images/002.jpg',
            category: 'Disney',
            label: 'New',
            watch: false,
            year: '2016',
            date: "",
            description: 'Zootopia is a 2016 American 3D computer-animated comedy-adventure film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. It is the 55th Disney animated feature film. The film details the unlikely partnership between a rabbit police officer and a red fox con artist as they uncover a conspiracy which involves the disappearance of predator inhabitants of a mammalian metropolis.',
            comments: [{
                rating: 5,
                comment: "The Song is really great!",
                author: "John Lemon",
                date: "2016-10-16T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "那树懒慢的急死人了！",
                author: "Paul McVites",
                date: "2016-09-05T17:57:28.556094Z"
            }, {
                rating: 3,
                comment: "I like this rabbit!",
                author: "Michael Jaikishan",
                date: "2016-10-13T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "A rabbit has brave!",
                author: "Ringo Starry",
                date: "2016-12-02T17:57:28.556094Z"
            }, {
                rating: 5,
                comment: "里面有很多向其他电影致敬的画面!",
                author: "xiaoming",
                date: "2016-12-02T17:57:28.556094Z"
            }]
        }, {
            _id: 3,
            name: '教父',
            image: 'images/003.jpg',
            category: 'Crime',
            label: 'Classic',
            watch: true,
            year: '1972',
            date: "2012-10-13T17:57:28.556094Z",
            description: 'The Godfather is a 1972 American crime drama directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo\'s best-selling novel of the same name. It stars Marlon Brando and Al Pacino as the leaders of a fictional New York crime family. The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone, focusing on the transformation of Michael Corleone (Pacino) from reluctant family outsider to ruthless Mafia boss.',
            comments: [{
                rating: 5,
                comment: "Great Movie, Never boring!",
                author: "John Lemon",
                date: "2016-09-16T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "I just like it!",
                author: "Paul",
                date: "2016-09-05T17:57:28.556094Z"
            }, {
                rating: 5,
                comment: "crime story can be this, Incredible!",
                author: "Michael Jason",
                date: "2011-02-13T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "Like, like, like! Important thing should say three times",
                author: "Ringo Starry",
                date: "2017-02-02T17:57:28.556094Z"
            }, {
                rating: 3,
                comment: "A little Confused!",
                author: "25 Cent",
                date: "2012-12-02T17:57:28.556094Z"
            }]
        }];

        // use factory
        // var moviefac = {};

        // moviefac.getMovies = function(){
        //  return movies;
        // }

        // moviefac.getMovie = function(index){
        //  return movies[index];
        // };

        // return moviefac;

        this.getMovies = function() {
            return movies;
        };
        this.getMovie = function(index) {
            return movies[index];
        };

        this.getPromotion = function(index){
            return promotions[index];
        };
    })

.service('actorService', function() {
    var actors = [{
        id: 0,
        name: "Angelina Jolie",
        image: "images/006.jpg",
        movies: ["史密斯夫妇","换子疑云"],
        description: "素有“好莱坞性感女神”之美称，被评为“电影史上最性感的女明星”。安吉丽娜茱莉有着性感的丰唇，迷人的微笑和妩媚的眼神，不仅被誉为“男性杀手”，还被女同性恋者评为好莱坞女星中“性幻想”对象的第一名。"
    }, {
        id: 1,
        name: "Brad Pitt",
        image: "images/007.jpg",
        movies: ["史密斯夫妇","搏击俱乐部","本杰明·巴顿奇事","秋日传奇"],
        description: "主演《秋日传奇》后，布拉德·皮特被《人物》杂志评为“世界上有史以来最性感的男人”。尽管他一直强调本身表演上的能力，但他的英俊形象被证实是他最值钱的素质。2005年，皮特与性感美女安吉丽娜·朱莉拍摄《史密斯夫妇》时传出绯闻，影片因此大受关注，两人也公开了关系。皮特与安妮斯顿离婚，并与朱莉生下一个女儿。"
    }, {
        id: 2,
        name: "Scarlett Johansson",
        image: "images/008.jpg",
        movies:["美国队长2","超体"],
        description: "Johansson is considered one of Hollywood's modern sex symbols, and has frequently appeared in published lists of the sexiest women in the world. As of February 2017, she is the highest-grossing actress of all time in North America, with her films making over $3.6 billion. In 2016, she added another $1.2 billion to that box office record, being the highest grossing actor of the year."
    }, {
        id: 3,
        name: "Jason Statham",
        image: "images/009.jpg",
        movies:["速度与激情7","死亡飞车","玩命快递","怒火攻心"],
        description: "原来的跳水运动员变成了屏幕上的硬汉。In 2015, Statham starred in the latest entry in the The Fast and the Furious franchise, Furious 7, and is set to reprise his role in the upcoming film The Fate of the Furious. He usually performs his own stage combat and stunts, and is noted for being typecast as an antihero."
    }];

    this.getActors = function() {
        return actors;
    };
    this.getActor = function(index) {
        return actors[index];
    };

});
