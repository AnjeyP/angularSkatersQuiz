
(function(){

    
    angular
        .module("skaterFacts")
        .factory("DataService", DataService);

   
    function DataService(){
        

        var dataObj = {
            skatersData: skatersData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3]; 

    var quizQuestions  = [
        {
            type: "text",
            text: "Which skater isn't citizen of Russian Federation?", //1
            possibilities: [
                {
                    answer: "Alexei Yagudin"
                },
                {
                    answer: "Scott Moir"
                },
                {
                    answer: "Evgeni Plushenko"
                },
                {
                    answer: "Maxim Trankov"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which skater is the oldest among below?", //2
            possibilities: [
                {
                    answer: "Maxim Trankov"
                },
                {
                    answer: "Yuzuru Hanyu"
                },
                {
                    answer: "Alexei Yagudin"
                },
                {
                    answer: "Patrick Chan"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Who is the youngest skater among below?", //3
            possibilities: [
                {
                    answer: "img/yuzuru.jpg"
                },
                {
                    answer: "img/chan.jpg"
                },
                {
                    answer: "img/moir.jpg"
                },
                {
                    answer: "img/chen.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Who from sportsmen was four times the prize-winner of the Olympic Games?", //0
            possibilities: [
                {
                    answer: "img/plushenko.jpg"
                },
                {
                    answer: "img/yagudin.jpg"
                },
                {
                    answer: "img/trankov.jpg"
                },
                {
                    answer: "img/moir.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who of the athletes representative of the discipline of dancing on ice?", //2
            possibilities: [
                {
                    answer: "Maxim Trankov"
                },
                {
                    answer: "Nathan Chen"
                },
                {
                    answer: "Scott Moir"
                },
                {
                    answer: "Yuzuru Hanyu"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who from the athletes for the first time performed in an arbitrary program 5 quadruple jumps?", //0
            possibilities: [
                {
                    answer: "Nathan Chen"
                },
                {
                    answer: "Yuzuru Hanyu"
                },
                {
                    answer: "Patrick Chan"
                },
                {
                    answer: "Alexei Yagudin"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What a quadruple jump purely performs only Yuzuru Khanyu?", //3
            possibilities: [
                {
                    answer: "Quad toe"
                },
                {
                    answer: "Quad sal"
                },
                {
                    answer: "Quad flip"
                },
                {
                    answer: "Quad loop"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these skaters is Brian Joubert?", //2
            possibilities: [
                {
                    answer: "img/trankov.jpg"
                },
                {
                    answer: "img/plushenko.jpg"
                },
                {
                    answer: "img/joubert.jpg"
                },
                {
                    answer: "img/chan.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who among these skaters for the first time successfully performed the cascade triple axel - halfloop - triple flip?", //0
            possibilities: [
                {
                    answer: "Evgeni Plushenko"
                },
                {
                    answer: "Patrick Chan"
                },
                {
                    answer: "Nathan Chen"
                },
                {
                    answer: "Alexei Yagudin"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is Olympic Champion of Salt Lake City 2002?", //3
            possibilities: [
                {
                    answer: "Patrick Chan"
                },
                {
                    answer: "Scot Moir"
                },
                {
                    answer: "Evgeni Plushenko"
                },
                {
                    answer: "Alexei Yagudin"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var skatersData = [
        {
            name: "Yuzuru Hanyu",
            image_url: "img/yuzuru.jpg",
            country: "Japan",
            height: "174 cm",
            age: "22",
            discipline: "Single Skating",
            description: "Hanyu has broken world records ten times, and currently has achieved the highest short program, free skating, and combined total scores. He is the first man to have broken the 100-point barrier in the men's short program, the 200-point barrier in the men's free skating, and the 300-point barrier in the combined total score, as well as being the first Asian to win the figure skating gold at the Olympic men's event. He is also the youngest to win the Olympic title since Dick Button in 1948. In the 2015–2016 Grand Prix Final, he broke the world record for the largest victory margin, with 37.48 points. At the 2016 CS Autumn Classic International, Hanyu became the first skater in history to successfully land a quadruple loop in competition."
        },
        {
            name: "Patrick Chan",
            image_url: 'img/chan.jpg',
            country: "Canada",
            height: "168 cm",
            age: "26",
            discipline: "Single Skating",
            description: "Patrick Chan started skating at age five. He originally wanted to learn to skate to play hockey, but soon became interested in figure skating. His coach, Osborne Colson, made him spend 30 minutes a day on basic stroking, edge work, cross-cutting and balance drills. Chan said, I tell people I owe the flow in my knees and the flow I generate from my edges to Mr. Colson. He knew he had to pull everything apart and start from the ground up on the basics of skating. In 2001, Chan won the bronze medal at the Canadian Junior National Championships at the juvenile level, the lowest qualifying level in the Canadian figure skating competition structure, at the age of ten. He moved up to win the pre-novice Canadian national title in 2003, the novice title in 2004, and the junior title in 2005. His gold at the Junior level of the 2005 Canadian Championships earned him a place at the 2005 World Junior Championships where he placed seventh. At the age of fourteen, he was the youngest skater at the event. In the 2005–06 season, Chan made his Junior Grand Prix debut. He won the gold medal at the event in Montreal and placed fourth at the event in Slovakia. He qualified for the Junior Grand Prix Final, where he placed fifth. He made his senior national debut at the 2006 Canadian Championships. He placed seventh and earned a spot at the 2006 World Junior Championships, where he placed sixth."
        },
        {
            name: "Nathan Chen",
            image_url: 'img/chen.jpg',
            country: "USA",
            height: "165 cm",
            age: "17",
            discipline: "Single Skating",
            description: "Nathan Chen started figure skating at age three and entered his first skating competition in 2003. From 2007 to 2009, he qualified to compete in the U.S. Junior Nationals at the juvenile and intermediate levels. He placed 10th and 3rd in juveniles at the 2007 and 2008 Junior Nationals. At the 2009 Junior Nationals, he won the intermediate men's silver medal. Chen advanced to the novice level in the 2009–10 season. He won the national novice title at the 2010 U.S. Championships in Spokane, Washington, and became the youngest novice champion in the history of U.S. Figure Skating at age 10. Due to his young age, he opted to remain at the novice level for the 2010–2011 season and defended his novice title at the 2011 U.S. Championships in Greensboro, North Carolina. In the 2011–2012 season, Chen moved up nationally to the junior level. He was coached by Genia Chernyshova and also traveled to Lake Arrowhead, California to work with jump specialist Rafael Arutyunyan. Arutyunyan became his main coach in mid-December 2011. Chen won the junior men's title at the 2012 U.S. Championships in San Jose, California on January 24, 2012. Making his first international appearance, he won the novice men's event at the 2012 Gardena Spring Trophy in Selva Val Gardena, Italy."
        },
        {
            name: "Alexei Yagudin",
            image_url: 'img/yagudin.jpg',
            country: "Russian Federation",
            height: "175 cm",
            age: "37",
            discipline: "Single Skating",
            description: "Alexei Yagudin was introduced to skating at age four by his mother, Zoya, who saw the activity as a way to improve his health. He learned all his double jumps before age ten, the five triple jumps before age twelve, and the triple Axel jump before he turned thirteen.[3] His first coach was Alexander Mayorov, and then he was introduced to the famous Russian coach Alexei Mishin when Mayorov moved to Sweden in 1992. Yagudin trained in Mishin's group from 1992 to 1998. He began competing at the international level in 1994, and won the 1996 World Junior Championships. The famous rivalry with fellow Russian skater Evgeni Plushenko began when they trained in Mishin's group, and intensified after Yagudin left."
        },
        {
            name: "Evgeni Plushenko",
            image_url: 'img/plushenko.jpg',
            country: "Russian Federation",
            height: "178 cm",
            age: "34",
            discipline: "Single Skating",
            description: "Plushenko was born on 3 November 1982 in Dzhamku, Solnechny District, Khabarovsk Krai, Soviet Union. His mother was originally from Volgograd, Russian SFSR, and his father, a carpenter, was born in Donetsk, Ukrainian Soviet Socialist Republic. He has an older sister. Plushenko lived in Volgograd before moving to Saint Petersburg in 1994. A 1998 graduate of school No. 91 in Petrogradsky District, he began studying at the Lesgaft University in 2000, graduating in 2005, and at the Faculty of tourism and hospitality of the Saint Petersburg State University of Engineering and Economics in 2004. On 18 June 2005, Plushenko married Maria Ermak, a sociology student at the Saint Petersburg State University, in a ceremony at the Hotel Astoria in Saint Petersburg. Their son, Egor Evgenievich (originally Kristian), was born on 15 June 2006. In February 2008, they were officially divorced. In August 2009, Plushenko announced his engagement to Yana Rudkovskaya, the record producer for Russian singer Dima Bilan. They were married on 12 September 2009. Their son, Alexander, was born in January 2013. "
        },
        {
            name: "Brian Joubert",
            image_url: 'img/joubert.jpg',
            country: "France",
            height: "179 cm",
            age: "32",
            discipline: "Single Skating",
            description: "Brian Joubert was born in Poitiers, Vienne to Raymonde and Jean-Michel Joubert. He has two older sisters, Sarah and Alexandra. He suffered a life-threatening illness at the age of 11 months, which led to the removal of one kidney. Joubert has been considered a heartthrob in his native country, France. This reputation has been contributed by media appearances after his first victory at the 2004 European Championships and silver medal at the World Championships and short relationship with former Miss France, Lætitia Bléger. He later brought a lawsuit against Bléger for 40,000 Euros for insinuating that he was homosexual and that their relationship was arranged to hide this. Bléger and two magazines that published her allegations were ordered by a French court to pay a total of 17,000 Euros, and to publish the court ruling in one of the two magazines. Joubert was later involved with Italian figure skater Valentina Marchei but the relationship ended by 2009. Joubert keeps many pets, which can be seen in television reports about his home life. He is also known as a motorcycle and car racing enthusiast.In March 2006, Joubert's biography, Brian  Joubert: le Feu sur la Glace (Brian Joubert: the fire on ice), was published in French. A second book about him, entitled Brian Joubert sur papier glacé (Brian Joubert on paper ice), was published in February 2010."
        },
        {
            name: "Scott Moir",
            image_url: 'img/moir.jpg',
            country: "Canada",
            height: "180 cm",
            age: "29",
            discipline: "Ice Dance",
            description: "Scott Patrick Moir (born September 2, 1987) is a Canadian ice dancer who competes with Tessa Virtue. Moir and Virtue are the 2010 Olympic champions, the 2014 Olympic silver medalist, the 2010 and 2012 World champions, three-time Four Continents champions (2008, 2012, 2017), the 2016–17 Grand Prix Final champions, the 2006 World Junior champions and seven-time Canadian national champions (2008–2010, 2012–2014, 2017). Moir began skating with Tessa Virtue in 1997. After winning the Canadian junior title in 2004, they became Canada's top ice dance couple in 2007 and won the silver medal at the 2008 World Figure Skating Championships. In 2009, they became the first ice dance team to receive a 10.0 for a program component score under the new ISU Judging System.[1] In addition, they became the first ice dancers from North America to win an Olympic gold medal, ending the 34 year streak of the Europeans. They became the first former World Junior ice dance champions to win the Olympics, and the first ice dance team to win the Olympic gold on home ice. They were also the first and only ice dancers to win gold on their Olympic debut. They are the youngest pair ever to win an Olympic title. At the 2014 Winter Olympics, they won silver medals in ice dancing and in the team event. Virtue and Moir are the world record score holders for the original dance. They are also the current world record holders for the short dance and the combined total score. They are the most decorated Canadian ice dance team of all time."
        },
        {
            name: "Maxim Trankov",
            image_url: 'img/trankov.jpg',
            country: "Russian Federation",
            height: "187 cm",
            age: "33",
            discipline: "Pair Skating",
            description: "Maxim Leonidovich Trankov (Russian: Макси́м Леони́дович Транько́в, born 7 October 1983) is a Russian pair skater. With Tatiana Volosozhar, he is a two-time 2014 Olympic champion in the pairs and in team events, the 2013 World champion, a four-time (2012, 2013, 2014, 2016) European champion, the 2012 Grand Prix Final champion, and a three-time (2011, 2013, 2016) Russian national champion. They have also won six events on the Grand Prix series.With former partner Maria Mukhortova, Trankov is the 2008 European silver medalist, the 2007 Russian national champion, and the 2005 World Junior champion. Volosozhar and Trankov are the current World record holders for the combined total, short program and free skate scores. They are the first figure skaters to win two gold medals at the same Olympics, having taken gold in pairs and in the inaugural team event."
        }
    ];

})();
