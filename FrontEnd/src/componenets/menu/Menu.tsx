import { useMemo, useState } from "react";
import MenuItem from "./MenuItem"
import { useSelector } from "react-redux";

const Menu = () => {
  const isLogin = useSelector((state:{isLogin:boolean, userName:string})=>state.isLogin);
  const userName = useSelector((state:{isLogin:boolean, userName:string})=>state.userName);
  // const {isLogin} = userStore.getState(); 
  const menuList =useMemo(()=>{
    let result = [
      {path: '/', label: 'Intro', icon: 'mdiHumanGreetingVariant'},
      {path: '/catList', label: 'CatList', icon: 'mdiCat'},
      {path: '/tiptap', label: 'TipTap', icon: 'mdiNoteEdit'},
      {path: '/todoList', label: 'Todo List', icon: 'mdiCalendarMonth'},
    ];
    if(!isLogin) {
      result.splice(1, 0, {path: '/login', label: 'Login', icon: 'mdiAccount'})
    }else{
      result.splice(1, 0, {path: '/user', label: userName, icon: 'mdiAccount'})
    }
    return result
  },[isLogin, userName])
  
  return (
    <nav className="menu-list">
      <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
      <label className="menu-open-button" htmlFor="menu-open">
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
      </label>
      {
        menuList.map((item, idx)=>{
          return <MenuItem itemInfo={item} key={idx}/>
        })
      }
    </nav>
  )
}

export default Menu