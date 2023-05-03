import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { Buttons } from '../Buttons/Buttons'
import NavItem from '../NavItem'
import NavMenu from '../NavMenu'
import { FEATURES, COMPANY } from './constants'

export const Header = () => {
   return (
      <header className="flex items-center">
         <LogoIcon />
         <nav className="flex space-x-6 ml-8 items-center">
<NavItem text="Features">
              <NavMenu items={ FEATURES }/>
            </NavItem>
            <NavItem text="Company">
              <NavMenu items={ COMPANY } />
            </NavItem>
            <NavItem text="Careers" />
            <NavItem text="About" />
         </nav>
         <div className="ml-auto flex space-x-5">
            <Buttons>Login</Buttons>
            <Buttons hasBorder={true}>Register</Buttons>
         </div>
      </header>
   )
}
