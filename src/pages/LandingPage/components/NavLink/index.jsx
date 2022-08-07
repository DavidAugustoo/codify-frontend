import { NavLink } from './styles'

export function NavItem({ title, path }) {
  return (
    <li>
      <NavLink href={path}>{title}</NavLink>
    </li>
  )
}
