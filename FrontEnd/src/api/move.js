import ROUTER from "@/router"

function moveMain() {
    return ROUTER.push({ name: 'Main' });
}

function moveVisit() {
    return ROUTER.push({ name: 'Visit' });
}

function moveTodoList() {
    return ROUTER.push({ name: 'Todo' });
}

function moveTipTap() {
    return ROUTER.push({ name: 'TipTap' });
}

export {
    moveMain,moveVisit,moveTodoList,moveTipTap
}