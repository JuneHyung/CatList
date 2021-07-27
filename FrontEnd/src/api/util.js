function setToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const cur = `${year}-${month}-${date}`;
    return cur
}

function startIntro() {
    const introJS = require('intro.js');
    return introJS().start();
}


let message ={
    0: '안녕하세요! <br/>글자를 클릭하면 고양이 페이지로<br/> 이동합니다.',
    1: '클릭해보세요!',
}

export {
    setToday,startIntro,message
}