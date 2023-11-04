const tweetBtn = document.querySelector('#tweet');

const randomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

tweetBtn.addEventListener('click', () => {
  const text = randomElement(tweets);
  const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(tweetLink);
})
