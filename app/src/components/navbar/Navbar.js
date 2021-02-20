import React, { createContext, useContext, useState } from 'react'

import { slide as Menu } from 'react-burger-menu'
import {
  Link
} from "react-router-dom";


// make a new context
export const MyContext = createContext();

// create the provider
export const NavBarProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      closeMenu: () => setMenuOpenState(false),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: 'rgb(75,85,99)'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'flex'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


const NavBar = () => {
  const ctx = useContext(MyContext)
  return (
    <div className="tw-fixed tw-h-24 tw-justify-between tw-flex tw-w-full tw-bg-blue-300">
      <Menu onStateChange={(state) => ctx.stateChangeHandler(state)} isOpen={ctx.isMenuOpen} styles={styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Link onClick={ctx.closeMenu} id="home" className="menu-item tw-text-white" to="/">Home</Link>
        <Link onClick={ctx.closeMenu} id="about" className="menu-item tw-text-white" to="/about">About</Link>
        <Link onClick={ctx.closeMenu} id="contact" className="menu-item tw-text-white" to="/contact">Contact</Link>
      </Menu>
      <h2 className="tw-mt-6 tw-mr-4 tw-hidden md:tw-block tw-text-gray-600">Nerve Consultants Ltd.</h2>
    </div>
  )
}

export default NavBar