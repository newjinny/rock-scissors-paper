//가위바위보 이미지 클릭
const rock = document.querySelector("#rock");
const smallPics = document.querySelectorAll(".small");
  
for(let i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic);
}

function changePic() {
  const newPic = this.src;
  rock.setAttribute("src", newPic);
}	

//컴퓨터 랜덤 이미지
const randomNumber = Math.floor(Math.random() * 2);
const imgName = ["paper", "rock", "scissors"];
const randomBox = ('.randomImg').children('img').attr('src' +  imgName[randomNumber] + '.png');