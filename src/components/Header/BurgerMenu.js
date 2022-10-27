import React, {useState} from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';


import './header.css'
import '../Navbar/navbar.css'

const BurgerMenu = () => {

  const [showAnimated, setShowAnimated] = useState(false);
  

  return (
    <>


    <section className='mb-3'>
        <MDBNavbar>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='first-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon1 ${showAnimated && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated}>
          <div className='bg-light shadow-3 p-4'>
            <MDBBtn block className='border-bottom m-0' color='link'>
              HOME
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              ABOUT
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              NEWS
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              CONTACT
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              LOGIN
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>

    

    </>

  )
}

export default BurgerMenu