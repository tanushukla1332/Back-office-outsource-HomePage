import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaCheck } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Section9() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand if not expanded
    }
  };
  return (
    <>
      <Row className='d-flex justify-content-center align-items-center py-5' style={{backgroundColor:"#f8f5f5"}}>
        <Col md={10}>
          <h1 className='text-center hed1'>FAQs</h1>
          <h4 className='text-center hed4 pb-5'>Frequently Asked Questions</h4>

          {[{
            question: "What makes Sanar Care the best diagnostic centre in Gurgaon?",
            answer: "Sanar Care is widely recognized as the leading diagnostic centre in Gurgaon due to its state-of-the-art facilities, advanced technology, and highly experienced team of medical professionals. We offer a wide range of diagnostic services, including PET scans, PET-CT scans, DEXA scans, and pathology lab testing. Our commitment to accuracy, efficiency, and patient care sets us apart from the rest."
          }, {
            question: "How does a PET scan in Gurgaon at Sanar Care work?",
            answer: "A PET scan at Sanar Care in Gurgaon utilizes a small amount of radioactive material to produce detailed images of the body's organs and tissues. This imaging technique helps detect various conditions, such as cancer, heart disease, and neurological disorders. Our PET scan procedure is safe, non-invasive, and performed by highly trained radiologists who ensure the utmost precision and patient comfort."
          }, {
            question: "What is the difference between a PET scan and a PET-CT scan in Gurgaon?",
            answer: "While both PET scans and PET-CT scans are valuable diagnostic tools, there is a slight difference between them. A PET scan primarily provides functional information about the body's organs and tissues, while a PET-CT scan combines the functional data from a PET scan with the anatomical information obtained from a CT scan. This combined approach offers a more comprehensive assessment of conditions, leading to more accurate diagnoses and treatment plans."
          }, {
            question: "Where can I find a reliable pathology lab near me in Gurgaon?",
            answer: "Sanar Care is your trusted destination for a pathology lab near you in Gurgaon. Our fully equipped pathology lab is staffed with skilled technicians and pathologists who perform a wide range of tests, including blood tests, urine tests, genetic testing, and more. We prioritize accuracy, efficiency, and quick turnaround time to ensure that you receive timely and reliable results for your diagnostic needs."
          }, {
            question: "Are there any quality pathlabs near me in Gurgaon that offer affordable services?",
            answer: "Sanar Care is known for offering high-quality pathology lab services at competitive prices in Gurgaon. We understand the importance of affordability without compromising on the accuracy and reliability of test results. Our transparent pricing policy ensures that you receive the best value for your money, making us a top choice for cost-effective diagnostic services in the region."
          }].map((item, index) => (
            <div key={index}>
              <div className='faq-header mb-3 d-flex justify-content-between align-items-center' onClick={() => toggleAccordion(index)}>
                <h1 className='hed3'>{item.question}</h1>
                <span className='icon'>{expandedIndex === index ?  <IoIosArrowUp size={30}  color='#FE5A0E'/>:<IoIosArrowDown size={30}  color='#FE5A0E'/>}</span>
              </div>
              {expandedIndex === index && (
                <ul className='d-flex justify-content-between align-items-center'>
                  <li className='d-flex justify-content-between align-items-center w-100'>
                    <span className='para'>{item.answer}</span>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
}
