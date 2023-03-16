let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mai.jpg') {
        myImage.setAttribute('src', 'images/mai1.jpg');
    } else {
        myImage.setAttribute('src', 'images/mai.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。'); ///输入对话框
    if( !myName ) {
      setUserName() ;
    } else {
      localStorage.setItem('name', myName); ///保存到本地
      myHeading.textContent = '欢迎你，' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎你，' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

/*
let myHeading = document.querySelector('h1');  ///获取hi的引用，并储存在myHeading
myHeading.textContent = 'Hello world!';  ///修改标题内容
  
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');  ///弹框
} else {
  alert('但是巧克力才是我的最爱呀……');
}


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });
*/
