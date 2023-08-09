import MenuItem from "./MenuItem"

const Menu = () => {
  const menuList = [
    {path: '/', label: 'Intro', icon: 'mdiHumanGreetingVariant'},
    {path: '/catList', label: 'CatList', icon: 'mdiCat'},
  ]
  return (
    <nav className="menu-list">
      <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
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