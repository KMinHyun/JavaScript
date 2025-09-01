
const url = 'https://picsum.photos/v2/list?page=1&limit=10';
// ㄴ우리가 요청을 보낸 서버 주소

axios.get(url) // <= get은 http method.
// ㄴpost로 보내고 싶으면 axios.post, delete로 보내고 싶으면 delete로 쓰면 됨.
.then(response => {
  // console.log(response.data.data);
  // 첫번째 data는 axios에서 자동으로 만든 거고 두번째 데이터는 서버가 보내준 데이터.
  response.data.forEach((item, idx) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '300px');

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
})
.catch(err => {
  console.log(err);
});