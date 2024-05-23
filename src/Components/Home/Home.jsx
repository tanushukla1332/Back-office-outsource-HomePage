
 import homeBanner from '../../../public/Image/homeBanner.png';
import {Row,Col} from 'react-bootstrap'
import SectionFirst from './Sectionfirst';
import './Home.css'
import Seceond from './Seceond';
import StepsComponent from './ThirdSec';
import FourthSection from './FourthSection';
import SixthSection from './SixthSection';
import SecSev from './Section7';
import SecEgt from './Section8';
import Section9 from './Section9';
import Section13 from './Section13';


export default function Home(){
    
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center px-0 '>
         <img src={homeBanner} className='img-fluid px-0'  style={{height:"450px"}} />
        </Row>
        <SectionFirst/>
     <Seceond/>
     <StepsComponent/>
     <FourthSection/>
     <SixthSection/>
     <SecSev/>
     <SecEgt/>
     <Section9/>
     <Section13/>

     
    
     
        </>
    )

}