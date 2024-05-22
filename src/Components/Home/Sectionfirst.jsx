
import { Row, Col } from 'react-bootstrap';

import bgimg from '../../../public/Image/bg-1st.png';
import FormLayout from '../Form';
import userimg from '../../../public/Image/user.png';
import phoneimg from '../../../public/Image/ph.png';
import mailimg from '../../../public/Image/mail.png';
import compnayimg from '../../../public/Image/com.png';


export default function SectionFirst() {
    const formData1 = [
        {
            type: 'text',
            placeholder: 'Name',
            required: true
        },

        {
            type: 'email',
            placeholder: 'Email',
            required: true
        },
        {
            type: 'number',
            placeholder: 'Phone',
            required: true
        },
        {
            type: 'textarea',
            placeholder: 'Company Name',
            required: true
        },
    ];
    const icons = {
        'text': userimg,
        'email': mailimg,
        'number': phoneimg,
        'textarea': compnayimg,
    };
    const selectField1 = {
        type: 'select',
        placeholder: 'Services',
        options: [
            { label: 'subject', value: 'disabled' },
            { label: 'General Enquiry', value: 'general_enquiry' },
            { label: 'Book an appointment', value: 'book_appointment' }
        ],
        required: true
    };
    return (
        <>
            <Row className='d-flex justify-content-center align-items-center gap-5 py-5'>
                <Col md={10}
                    className='d-flex justify-content-center align-items-center gap-5 py-5'
                    style={{
                        backgroundImage: `linear-gradient(to left, #00000064, #00000099), url(${bgimg})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        maxWidth: "100%",
                        height: "auto"
                    }} >
                    <div >
                        <h1 className='hed1 text-white text-center'>Unlock Your Time,
                            Unleash Your Passion</h1>
                        <p className='para text-center text-white'  >Time is the most valuable asset in the fast-paced world of business. We
                            understand this, which is why we offer a solution to help you regain control of
                            your schedule. By outsourcing time-consuming tasks to our dedicated virtual
                            staff, you can redirect your energy towards what truly matters – the growth and
                            prosperity of your business.</p>
                        <p className='para text-center text-white' >
                            Our virtual assistants are more than just support; they’re the strategic backbone
                            of your operations. From administrative tasks to data management, we’ve got
                            your back. By entrusting us with the minutiae, you gain the freedom to focus on
                            your core competencies and strategic vision.
                        </p>
                    </div>
                    <div>
                        <FormLayout heading="Ready To Outsource Your Business" formData={formData1} form icons={icons} selectField={selectField1} para="Book A FREE 30-minute Consult 
Call To Get Started!" />



                    </div>

                </Col>



            </Row>
            <Row className='d-flex justify-content-center align-items-center pb-3'>
                <Col md={10} style={{ backgroundColor: "#061B49" }}>
                    <h1 className='hed1 text-center text-white py-lg-3 py-md-3 py-xl-3'>Smart Savings, Optimized Service</h1>
                    <p className='para text-white text-center'>Our outsourcing solutions are engineered to deliver not only efficiency but also smart savings. We recognize that your budget matters, and we’re
                        committed to helping you make the most of it. By partnering with Outsource2BackOffice, you can experience up to 70% in cost savings while enjoying
                        a service that is meticulously optimized to align with your unique business requirements.
                    </p>
                    <p className='para text-white text-center'>
                        Imagine reducing operational costs without sacrificing quality. Our tailored solutions ensure that your tasks are handled with precision, allowing your
                        busiess to thrive without the financial burden.
                    </p>

                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center pb-3'>
                <Col md={10} style={{ backgroundColor: "#FE5A0E" }}>
                    <h1 className='hed1 text-center text-white py-lg-3 py-md-3 py-xl-3'>Tailor-Made Excellence</h1>
                    <p className='para text-white text-center'>We take customization to the next level. Once you join forces with us, our seasoned experts work closely with you to craft a strategic game plan. This
                        ensures that your virtual staff consistently deliver the right results, at the right time, and in the right way, leaving no room for compromise.
                    </p>
                    <p className='para text-white text-center'>
                        Our commitment to excellence extends beyond the initial setup. We continuously adapt and refine our strategies to align with your evolving business
                        needs. Your success story is a shared journey, and we’re here to ensure that every chapter is marked by achievements and milestones.
                    </p>

                </Col>
            </Row>



        </>
    )
}