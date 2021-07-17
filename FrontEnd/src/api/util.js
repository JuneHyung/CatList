function setToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const cur = `${year}-${month}-${date}`;
    return cur
}

export {
    setToday,
}