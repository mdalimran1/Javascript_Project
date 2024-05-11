const quote =document.querySelector('blockquote');
const authorName =document.querySelector('span');


const api_url ='https://api.quotable.io/random';
const  getQuote=async()=>{
const response = await fetch(api_url);
const data = await response.json();
const {content,author}=data;

quote.innerHTML=content;
authorName.innerHTML=author;

}

const tweet =()=>{
  window.open('https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview','Tweet Window','width=600','height=300')
}