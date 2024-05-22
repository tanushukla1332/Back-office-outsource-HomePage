
 import homeBanner from '../../../public/Image/homeBanner.png';
import {Row,Col} from 'react-bootstrap'
import SectionFirst from './Sectionfirst';
import './Home.css'
import Seceond from './Seceond';
import StepsComponent from './ThirdSec';
import FourthSection from './FourthSection';
import SixthSection from './SixthSection';


export default function Home(){
    
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center px-0'>
         <img src={homeBanner} className='img-fluid px-0' />
        </Row>
        <SectionFirst/>
     <Seceond/>
     <StepsComponent/>
     <FourthSection/>
     <SixthSection/>
     
    
     
        </>
    )

}