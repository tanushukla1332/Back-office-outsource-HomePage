import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import img1 from '../../../public/Image/iindsec.png';
import img2 from '../../../public/Image/iindsec.png';
import img3 from '../../../public/Image/iindsec.png';


export default function SecondUI() {
  return (
    <Row className="d-flex justify-content-center align-items-center py-5">
         <div className="text-boxes d-flex flex-column gap-3 col-md-5">
        <div className="text-box ">
          <h3 className='fw-bold'>Focused on Business Growth</h3>
          <p>
            We're not just business partners; we're about fostering growth and seeing results. Your business' growth and profitability are our top priorities – we're committed to making sure every project and task isn't just about handling tasks; they're here to help you achieve your strategic goals and objectives.
          </p>
        </div>
        <div className="text-box">
          <h3 className='fw-bold'>Customized Solutions</h3>
          <p>
            No business or industry is one-size-fits-all. We understand that your challenges are unique, and so are your solutions. That's why we tailor our solutions to be as unique as your fingerprint, ensuring that they perfectly match your current business needs, your processes and policies, and nurture the desired outcomes.
          </p>
        </div>
        <div className="text-box">
          <h3 className='fw-bold'>Quality Assurance</h3>
          <p>
            Obsession with quality defines our approach. Your success is our obsession, and we leave no stone unturned to achieve it. Our Virtual staff undergoes rigorous training and quality control measures to ensure they're always at the top of their game, delivering nothing short of exceptional. Your satisfaction is our ultimate goal.
          </p>
        </div>
      </div>
          <div className='col-md-5 for-height py-5 position-relative'>
            <Carousel controls={false}  interval={3000} >
              <Carousel.Item>
                <img src={img1} alt="Slide 1" className="d-block w-100" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img2} alt="Slide 2" className="d-block w-100" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img3} alt="Slide 3" className="d-block w-100" />
              </Carousel.Item>
            </Carousel>
          </div>
      
    
    </Row>
  );
}