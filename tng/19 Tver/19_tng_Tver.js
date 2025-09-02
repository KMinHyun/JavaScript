// document.querySelector('.request-box > button').addEventListener('click', () => {
//   const loading = document.querySelector('.loading');
//   loading.classList.add('loading-on');
//   const url = document.querySelector('#apiUrl').value;
//   const cardBox = document.querySelector('.card-box');
//   cardBox.textContent = '';

//   axios.get(url)
//   .then(res => {
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundImage = `url(${item.download_url})`;

//       cardBox.appendChild(newCard);
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   }) 
//   .finally(() => {
//     loading.classList.remove('loading-on');
//   });
// });

// Async 이용하는 법
document.querySelector('.request-box > button').addEventListener('click', async () => {
  const url = document.querySelector('#apiUrl').value;
  const cardBox = document.querySelector('.card-box');
  cardBox.textContent = '';
  const loading = document.querySelector('.loading');
  loading.classList.add('loading-on');

  try {
    const res = await axios.get(url);
    res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;

      cardBox.appendChild(newCard);
    });
  } catch (err) {
    console.log(err);
  } finally {
  } loading.classList.remove('loading-on');
});

// // 함수로 빼는 법
// /**
//  * 플래그에 따라 로딩을 온/오프(true/false)
//  * @param {boolean} flg 
//  */
// function loadingToggle(flg) {
//   const loading = document.querySelector('.loading');
//   if(flg) {
//     loading.classList.add('loading-on');
//   } else {
//     loading.classList.remove('loading-on');
//   }
// }