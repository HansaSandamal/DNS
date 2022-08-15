import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdb-react-ui-kit";

import React from "react";

const Footer:React.FC=()=>{
    return(
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-light'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  DNS Hardware
                </h6>
                <p>
                We have a complete range of hardware products ready to deliver to your doorstep. Please contact us for the best prices.
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Building
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Paint
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Lightning and Electrical
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Bathroom and Plumber
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    About
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Contact Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Terms and Conditions
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Galle,  10012, SriLanka
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  dns123@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2022 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Prices and offers are subject to change. DNS Hardware. All rights reserved.
          </a>
        </div>
      </MDBFooter>
    );
}
export default Footer;