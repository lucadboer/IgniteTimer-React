import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={26} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={26} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
