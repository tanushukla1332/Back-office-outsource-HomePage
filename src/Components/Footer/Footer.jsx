import { Row, Col } from 'react-bootstrap';
import footerlogo from './../../../public/Image/footerlogo.png';
import location from '../../../public/Image/loc.png';
import mail from '../../../public/Image/mailfooter.png';
import linkdin from '../../../public/Image/linkedin_3536505 1.png';
import fb from '../../../public/Image/facebook (3) 1.png';
import instra from '../../../public/Image/instagram (1) 1.png';
import twitter from '../../../public/Image/sdfghmn 1.png';
import './Fotter.css'

export default function Footer() {
    const services1 = [
        "Virtual Assistants", "Tech Support", "HR and Recruitment", "Admin and Data Entry",
        "Accountants", "Cold Calling", "Live Chat Assistants", "Custom build positions",

    ];
    const services2 = [
        "Customer Service", "Call Centre outsourcing", "Payroll management", "Book keepers",
        "Inbound and Outbound Sales", "Tele Sales Lead generation", "Social Media Management"
    ]
    return (
        <>
            <Row style={{ backgroundColor: "#151414" }} className='d-flex aign-items-center justify-content-center pt-5'>
                <Col md={10} className='d-flex aign-items-center justify-content-evenly gap-5 '>
                    <Col md={4} className='my-4'>
                        <img src={footerlogo} alt="footerLogo" className='img-fluid' />
                        <div>
                            <p className='para text-white pt-5'>
                                Boutique outsourcing agency working
                                closely with Australian businesses with 
                                their Australian based experts to achieve 
                                results <br/> driven outcomes for their clients  
                                by providing tailor made solutions <br/>  to suit
                                Australian market,
                            </p>
                        </div>

                    </Col>
                    <Col md={4} className='d-flex flex-column align-items-center justify-content-center my-4'>
                        <h4 className='footer-heading text-white'>Our Services</h4>
                        <div className="d-flex flex-wrap gap-5">
                            <div className="d-flex flex-column">
                                {services1.map((service, index) => (
                                    <div key={index} className="d-flex align-items-center gap-3 my-1">
                                        <span className="arrow" style={{ color: "#FE5A0E", fontSize: "25px" }}>→</span>
                                        <span className="text-white para">{service}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex flex-column">
                                {services2.map((service, index) => (
                                    <div key={index} className="d-flex align-items-center gap-3 my-1">
                                        <span style={{ color: "#FE5A0E", fontSize: "25px" }}>→</span>
                                        <span className="text-white para">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='d-flex flex-column my-4 ps-5'>
                        <h1 className='footer-heading text-white'>Get In Touch</h1>
                        <div className='d-flex  align-items-center my-3 gap-2'>
                            <img src={location} alt="Location Icon" className='img-fluid' style={{ width: "20px", height: '20px' }} />
                            <p className='para text-white' style={{ margin: 0, }}>
                                Australia - 23 Milton Parade Malvern 3144 0481612016
                            </p>
                        </div>
                        
                        <div className='d-flex  align-items-center my-3 gap-2'>
                            <img src={mail} alt="Location Icon" className='img-fluid' style={{ width: "20px", height: '20px' }} />
                            <p className='para text-white' style={{ margin: 0, }}>info@outsource2backoffice.com</p>
                        </div>
                        <div class='icon-container d-flex align-items-center my-3 gap-3 text-center ps-5'>
                            <img src={fb} alt="fb-logo" className='img-fluid' />
                            <img src={instra} alt="instra-logo" className='img-fluid' />
                            <img src={linkdin} alt="linkdin-logo" className='img-fluid' />
                            <img src={twitter} alt="twitter-logo" className='img-fluid' />
                        </div>
                        <div class='icon-border'></div>



                    </Col>
                </Col>


            </Row>
            <Row style={{ backgroundColor: "#151414" }} className='d-flex aign-items-center justify-content-center'>
                <Col md={10} className='d-flex aign-items-center justify-content-between border' >
                    <p className='para text-white'>Privacy Policy   Term & Service</p>
                    <p className='para text-white'>© COPYRIGHT 2023 Outsource2backoffice. ALL RIGHTS RESERVED.</p>

                </Col>

            </Row>
        </>
    )
}