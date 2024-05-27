
import homeBanner from '../../../public/Image/outsource home page bannner11.png';
import { Row, Col,Button ,Carousel} from 'react-bootstrap'
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


export default function Home() {

    return (
        <>



    <Carousel controls={false} indicators={false} interval={3000} pause={false}>
      <Carousel.Item>
        <Row className='d-flex justify-content-center align-items-center px-0'>
          <img src={homeBanner} className='img-fluid px-0' alt="First slide" />
          <div className='banner-homepage'>
            <h1>
              <p className='firststhed'>Hire Professional and qualified</p>
              <p className='iindhed'>Virtual Staff from $5</p>
              <p>
                <span className='thirdhed'>per Hour</span>
                <span className='firststhed'> and</span>
                <span className='thirdhed'> save up to</span>
              </p>
              <p>
                <span className='fourthed'>70% </span>
                <span className='fourthhedii'>from Salary Costs</span>
              </p>
              <Button className='formbutton' style={{fontSize: "25px", fontWeight: "600"}}>Get Started</Button>
            </h1>
          </div>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className='d-flex justify-content-center align-items-center px-0'>
          <img src={homeBanner} className='img-fluid px-0' alt="Second slide" />
          <div className='banner-homepage'>
            <h1>
              <p className='firststhed'>Hire Professional and qualified</p>
              <p className='iindhed'>Virtual Staff from $5</p>
              <p>
                <span className='thirdhed'>per Hour</span>
                <span className='firststhed'> and</span>
                <span className='thirdhed'> save up to</span>
              </p>
              <p>
                <span className='fourthed'>70% </span>
                <span className='fourthhedii'>from Salary Costs</span>
              </p>
              <Button className='formbutton'  style={{fontSize: "25px", fontWeight: "600"}}>Get Started</Button>
            </h1>
          </div>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className='d-flex justify-content-center align-items-center px-0'>
          <img src={homeBanner} className='img-fluid px-0' alt="Third slide" />
          <div className='banner-homepage'>
            <h1>
              <p className='firststhed'>Hire Professional and qualified</p>
              <p className='iindhed'>Virtual Staff from $5</p>
              <p>
                <span className='thirdhed'>per Hour</span>
                <span className='firststhed'> and</span>
                <span className='thirdhed'> save up to</span>
              </p>
              <p>
                <span className='fourthed'>70% </span>
                <span className='fourthhedii'>from Salary Costs</span>
              </p>
              <Button className='formbutton' style={{fontSize: "25px", fontWeight: "600"}}>Get Started</Button>
            </h1>
          </div>
        </Row>
      </Carousel.Item>
    </Carousel>


            <SectionFirst />
            <Seceond />
            <StepsComponent />
            <FourthSection />
            <SixthSection />
            <SecSev />
            <SecEgt />
            <Section9 />
            <Section13 />




        </>
    )

}