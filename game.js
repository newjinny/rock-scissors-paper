const imgArr = ["bg01.png", "bg02.png", "bg03.png"];

//가위바위보 이미지 클릭
const rock = document.querySelector("#rock");
const smallPics = document.querySelectorAll(".small");

// imgArr.map((img, idx) => {div.appendChild(img, src, 'img[idx]')})

let user = null;
function changePic() {
  const newPic = this.src;

  rock.setAttribute("src", newPic);
  user = imgArr.indexOf(newPic.slice(-8));
}

//컴퓨터 랜덤 이미지

let randomNumber = Math.floor(Math.random() * 3);
// document.querySelector('.imgBox img').setAttribute('src', '/bg0' + randomNumber + '.png');
document.querySelector(".imgBox img").setAttribute("src", imgArr[randomNumber]);

console.log(randomNumber);

// 승패 0 - 보 , 1 - 바위, 2 - 가위
function winner(randomNumber, user) {
  if (
    (randomNumber === 0 && user === 0) ||
    (randomNumber === 1 && user === 1) ||
    (randomNumber === 2 && user === 2)
  ) {
    console.log("비겼습니다.");
  } else if (
    (randomNumber === 0 && user === 2) ||
    (randomNumber === 1 && user === 0) ||
    (randomNumber === 2 && user === 1)
  ) {
    console.log("이겼습니다.");
  } else {
    console.log("졌습니다.");
  }
}

for (let i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", () => {
    changePic();
    winner(randomNumber, user);
  });
}
