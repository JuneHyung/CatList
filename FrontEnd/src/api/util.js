function setToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const cur = `${year}-${month}-${date}`;
    return cur
}

function startIntro(step) {
    const introJS = require('intro.js');
    let steps = step
    return introJS().setOptions({steps}).start();
}


export {
    setToday,startIntro
}