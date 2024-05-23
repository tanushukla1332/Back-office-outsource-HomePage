import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import thirdseimg1 from '../../../public/Image/thirdsec.png';
import thirdseimg2 from '../../../public/Image/thirdiind.png';
import thirdseimg3 from '../../../public/Image/thirdthird.png';
import arrow from '../../../public/Image/arrow.png';


export default function ThirdSec() {
    return (
        <>
         
            <Row className='justify-content-center align-items-center align-items-center py-5'  style={{backgroundColor:"#f8f5f5",zIndex:"-3"}}>
            <h1 className="hed1 pb-3 text-center" style={{ color: "#151414" }}>What We Can Do For You</h1>
                <Col md={10}>
                    <Carousel className='d-flex justify-content-center' indicators={false}>
                        <Carousel.Item className='d-flex justify-content-center gap-4 py-4 align-items-center'>
                            <Col md={3}>
                                <div className='d-flex flex-column justify-content-center align-items-center thirdsecdiv'>
                                    <img src={thirdseimg1} alt="" className='img-fluid' />
                                    <h3 className='hed4 text-black fw-bold'>Virtual Assistants</h3>
                                    <p className='para text-center'>You are in dire need of an assistant who
                                        can manage your work and take on some
                                        repetitive task.</p>
                                    <div className='d-flex justify-content-center align-items-center text-center'>
                                        <div className="d-inline-flex align-items-center gap-2">
                                            <p className='text-center m-0 para fw-bold' style={{color:"#FE5A0E"}}>Know More</p>
                                            <img src={arrow} alt="" className='img-fluid m-0 ml-2' style={{ width: "30px", height: "30px" }} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='d-flex flex-column justify-content-center align-items-center thirdsecdiv'>
                                    <img src={thirdseimg2} alt="" className='img-fluid' />
                                    <h3 className='hed4 text-black fw-bold'>Customer Service</h3>
                                    <p className='para text-center'>An integrated approach that includes
                                        multiple channels from both voice and
                                        non-voice services</p>
                                    <div className='d-flex justify-content-center align-items-center text-center'>
                                        <div className="d-inline-flex align-items-center gap-2">
                                            <p className='text-center m-0 para fw-bold' style={{color:"#FE5A0E"}}>Know More</p>
                                            <img src={arrow} alt="" className='img-fluid m-0 ml-2' style={{ width: "30px", height: "30px" }} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='d-flex flex-column justify-content-center align-items-center thirdsecdiv'>
                                    <img src={thirdseimg3} alt="" className='img-fluid' />
                                    <h3 className='hed4 text-black fw-bold'>Tech Support</h3>
                                    <p className='para text-center'>Outsourcing IT help desk services presents
                                        a strategic opportunity for businesses to
                                        fuel rapid growth</p>
                                    <div className='d-flex justify-content-center align-items-center text-center'>
                                        <div className="d-inline-flex align-items-center gap-2">
                                            <p className='text-center m-0 para fw-bold' style={{color:"#FE5A0E"}}>Know More</p>
                                            <img src={arrow} alt="" className='img-fluid m-0 ml-2' style={{ width: "30px", height: "30px" }} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    );
}
