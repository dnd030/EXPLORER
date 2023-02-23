const quotes = [
    {
        quote: "중요한 건 꺽이지 않는 마음",
        author: "Deft",
    },
    {
        quote: "두려움은 네거티브 필름이 현상되는 그 작은 암실이다.",
        author: "Michael Pritchard",
    },
    {
        quote: "재능이 있거든 가능한 모든 방법으로 사용하라. 쌓아두지 마라. 구두쇠처럼 아껴 쓰지 마라. 파산하려는 백만장자처럼 아낌없이 써라",
        author: "Brendan Francis",
    },
    {
        quote: "당신의 노력을 존중하라. 당신 자신을 존중하라. 자존감은 자제력을 낳는다. 이 둘을 모두 겸비하면, 진정한 힘을 갖게 된다.",
        author: "Clint Eastwood",
    },
    {
        quote: "나는 때를 놓쳤고, 그래서 지금은 시간이 나를 낭비하고 있는 거지.",
        author: "William Shakespeare",
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman',
        },
        {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly',
        },
        {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga',
        },
        {
        quote: 'The only thing worse than starting something and falling.. is not starting something',
        author: 'SEth Godin',
        },
        {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn',
        },
];

const quote = document.querySelector("#sayings span:first-child");
const author = document.querySelector("#sayings span:last-child");

const toDaysQuote=quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;

console.log(toDaysQuote);