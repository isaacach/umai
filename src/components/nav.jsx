import '../css/nav.css'

export default function Nav() {

  return (
    <div className='container nav'>
      <div className='row nav'>
        <div className='col nav'>
          <div className='logo nav'>
            <h1>UMAI</h1>
            <img src='src/images/yummy.png' alt='yummy'/>
          </div>
        </div>
        <div className='col nav'>
          <div className='links nav'>
            <a><h3>About</h3></a>
            <a><h3>Menu</h3></a>
            <a><h3>Favorites</h3></a>
            <a><h3>Contact</h3></a>
          </div>
        </div>
      </div>
    </div>
  )
}


