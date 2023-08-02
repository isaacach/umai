import { useNavigate } from 'react-router-dom'
import '../css/nav.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default function Nav() {
  let navigate = useNavigate()

  return (
    <nav >
      <div className='row nav'>
        <div className='col nav'>
          <div onClick={() => navigate('/')} className='logo nav'>
            <h1>UMAI</h1>
            <img src='src/images/yummy.png' alt='yummy'/>
          </div>
        </div>
        <div className='col nav'>
          <div className='links nav'>
            <a onClick={() => navigate('/about')}><h3>About</h3></a>
            <a onClick={() => navigate('/favorites')}><h3>Favorites</h3></a>
            <a onClick={() => navigate('/contact')}><h3>Contact</h3></a>
            <a onClick={() => navigate('/profile')}><h3>Profile</h3></a>
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  )
}


