import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Deniz",
    lastName: "Kalkan",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Development Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Istanbul'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Amadeus"
        },
        {
            emoji: "📧",
            text: "denizhankalkan@outlook.com"
        }
    ],
    socials: [
        {
            link: "https://medium.com/@deniskalkan",
            icon: 'fa fa-medium',
            label: 'medium'
        },
        {
            link: "https://github.com/denizhankalkan",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/denizhankalkan",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Deniz Kalkan. I'm a software development engineer at Amadeus IT Group.I studied computer science and engineering. Outside of code, I like to create in other ways. From blogging to photography, traveling  to playing piano, I'm always trying new ways of expressing myself. I also like to meditate, meet to people from different culture, and run lifestyle experiments.",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Redux', 'Angular', 'TypeScript', 'PostgreSQL', 'Python', 'C#'],
            exposedTo: ['Nodejs', 'Git', 'Azure Devops', 'Docker']
        }
    ,
    hobbies: [
        {
            label: 'Guitar',
            emoji: '📖'
        },
        {
            label: 'Reading',
            emoji: '🎭'
        },
        {
            label: 'Chess',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}