import React from 'react';
import Container from 'react-bootstrap/Container';
//${style ? 'navbarConditional': null}
function NavBar() {

  // const item = document.getElementById('news-center')
  // item.addEventListener('focusout', (event) => {
  //   event.target.style.background = 'acqua';
  // });

  return (
    <div className='Navbar'>
    <nav className='navbar navbar-expand-lg navbar-dark'>
    <Container>
    <a className="navbar-brand" href="#" style={{"position": "relative", "bottom": "13px"}}><img className='logo' src='https://i.postimg.cc/qqfgDFyt/logo-fa69e5f8d5504a4d44a5.png' /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          {/*addin the tabindex allows you to add focus selector to images*/}
          <a className='navHeader' href="#HOME">About</a>
        </li>
        <li className="nav-item">
          <a className='navHeader' href="#skills">Buisness</a>
        </li>
        <li className="nav-item">
          <a className='navHeader' href="#news-center">News-center</a>
        </li>
        <li className="nav-item">
          <a className='navHeader' href="#skills">Careers</a>
        </li>
      </ul>
      
    </div>  
    </Container>
  </nav>
      </div>
  )
}

export default NavBar