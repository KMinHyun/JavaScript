const APICallBtn = document.querySelector('.APICallBtn');

APICallBtn.addEventListener('click', () => {
  const urlBar = document.querySelector('.urlBar');
  const url = urlBar.value;
  const container = document.querySelector('.container');
  container.innerHTML = '';
  axios.get(url)
  .then(response => {
    response.data.forEach((item, idx) => {
      const imgCard = document.createElement('div');
      container.appendChild(imgCard);
      const picsumImg = document.createElement('img');
      imgCard.appendChild(picsumImg);
      picsumImg.setAttribute('src', item.download_url);
      picsumImg.setAttribute('width', '100%');
    });
  })
  .catch(err => {
    console.log(err);
  });
});
