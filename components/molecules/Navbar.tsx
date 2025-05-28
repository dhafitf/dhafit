import NavLink from '@/common/nav-link'
import { navItems } from '~/libs/constants'

const Navbar = () => {
  return (
    <nav className='my-2.5 font-medium flex flex-wrap items-center gap-6 py-5'>
      {navItems.map((item) => (
        <NavLink key={item.path} path={item.path} label={item.label} />
      ))}
    </nav>
  )
}

export default Navbar
