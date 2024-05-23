import { Row, Col } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import partnrs1img from '../../../public/Image/partnrs1 (1).png';
import partnrs4img from '../../../public/Image/partnrs1 (2).png';
import partnrs3img from '../../../public/Image/spotify.png';
import partnrs2img from '../../../public/Image/partnrs1 (3).png';

import partnrs5img from '../../../public/Image/partnrs1 (5).png';
import partnrs6img from '../../../public/Image/partnrs1 (6).png';
import partnrs7img from '../../../public/Image/partnrs1__7.png';
import partnrs8img from '../../../public/Image/partnrs1 (8).png';
import partnrs9img from '../../../public/Image/partnrs1 (9).png';
import partnrs10img from '../../../public/Image/partnrs1__10.png';
import bgimg from '../../../public/Image/clients banner 1.png';

export default function SecEgt() {
    return (
        <>
            <Row className='d-flex justify-content-center align-items-center py-5' style={{ backgroundImage: `url(${bgimg})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                <h1 className='hed1 text-white text-center'>Top Clients</h1>
                <p className='para text-white text-center pb-4'>Share the secret of success with the top businesses of Australia</p>
                <Col md={12} className='d-flex flex-column justify-content-center align-items-center pb-5'>
                    <Marquee className='d-flex justify-content-center align-items-center gap-1 mb-4'>
                        <div className='clients-div'>
                            <img src={partnrs1img} alt="" className='img-fluid' />
                        </div>
                        <div className='clients-div'>
                            <img src={partnrs10img} alt="" className='img-fluid' />

                        </div>


                        <div className='clients-div'><img src={partnrs9img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>    <img src={partnrs8img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>  <img src={partnrs7img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>  <img src={partnrs6img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'><img src={partnrs9img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>    <img src={partnrs8img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>  <img src={partnrs7img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>  <img src={partnrs6img} alt="" className='img-fluid' /></div>

                    </Marquee>
                    <Marquee direction="right" className='d-flex justify-content-center align-items-center gap-1'>
                        <div className='clients-div'> <img src={partnrs5img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'> <img src={partnrs4img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'> <img src={partnrs3img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'> <img src={partnrs2img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>  <img src={partnrs1img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>  <img src={partnrs6img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'><img src={partnrs9img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>    <img src={partnrs8img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>  <img src={partnrs7img} alt="" className='img-fluid' /></div>
                        <div className='clients-div'>  <img src={partnrs6img} alt="" className='img-fluid' /></div>

                    </Marquee>
                </Col>
            </Row>
        </>
    )
}