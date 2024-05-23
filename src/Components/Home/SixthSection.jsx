import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';

const SixthSection = () => {
  return (
    <>
      <Row className=" d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: "#f8f5f5" }}>
        <h1 className="text-center pb-5 hed22">Why Choose Outsource2 Backoffice Over Other BPOs</h1>
        <Col md={10} className='d-flex justify-content-center align-items-center'>
          <Table className='custom-table' style={{margin:"0px",padding:"0px"}}>
            <thead >
              <tr>
              <th className='p-4 text-white  text-center' style={{ backgroundColor: "#061B49",fontSize:"22px" }}>What you get  from us</th>
                <th className='p-4 text-white text-center' style={{ backgroundColor: "#061B49",fontSize:"22px"  }}>How you get it from us</th>
                <th className='p-4 text-white text-center' style={{ backgroundColor: "#061B49",fontSize:"22px"  }}>Outsource2backoffice</th>
                <th className='p-4 text-white text-center'  style={{ backgroundColor: "#061B49" ,fontSize:"22px" }}>Others</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col1 hed4">Boutique Outsourcing Agency</td>
                <td className="col2 hed4">We are an agency working closely with 
                  selected clientele</td>
                <td className="col3 text-center "><FaCheck className="text-success" size={22} /></td>
                <td className="col4 text-center "><FaTimes className="text-danger" size={22} /></td>
              </tr>
              <tr>
                <td d className="col1 hed4">Privacy and Confidentiality</td>
                <td className="col2 hed4">We do not work with same industry clients  for same city which ensure your business information won't go in to competitors</td>
                <td className=' col3 text-center'><FaCheck className="text-success" size={22} /></td>
                <td className=' col4 text-center'><FaTimes className="text-danger" size={22} /></td>
              </tr>
              <tr >
                <td d className="col1 hed4">Recruitment process</td>
                <td className='col2 hed4'>We fully handled the recruitment process</td>
                <td className='col3 text-center '><FaCheck className="text-success" size={22} /></td>
                <td className=' col4 text-center'><FaCheck className="text-success" size={22} /></td>
              </tr>
              <tr >
                <td d className="col1 hed4">Staff Training</td>
                <td className='col2 hed4'>We train your recruited staff  our Australian based experts</td>
                <td className=' col3 text-center'><FaCheck className="text-success" size={22} /></td>
                <td className='col4 text-center'><FaTimes className="text-danger" size={22} /></td>
              </tr>
              <tr >
                <td d className="col1 hed4">Performance Monitoring</td>
                <td className='col2 hed4' >We monitor staff performance live  using latest softwares</td>
                <td className=' col3 text-center '><FaCheck className="text-success" size={22} /></td>
                <td className=' col4 text-center'><FaTimes className="text-danger" size={22} /></td>
              </tr>
              <tr >
                <td d className="col1 hed4">Dedicated Account Manager</td>
                <td className='col2 hed4'>You will get an dedicated account manager</td>
                <td className='col3 text-center'><FaCheck className="text-success" size={22} /></td>
                <td className=' col4 text-center'><FaTimes className="text-danger" size={22} /></td>
              </tr>
              <tr >
                <td d className="col1 hed4">Daily Reporting.</td>
                <td className='col2 hed4'>Your account manager will provide you daily  report on staff performance</td>
                <td className='col3 text-center'><FaCheck className="text-success"  size={22} /></td>
                <td className='text-center col4'><FaTimes className="text-danger" size={22} /></td>
              </tr>
              <tr>
                <td d className="col1 hed4">Secure online payments</td>
                <td className='col2 hed4'>You can easily pay via direct debit using your   bank card with our secure payment gateway</td>
                <td className='text-center col3'><FaCheck className="text-success" size={22} /></td>
                <td className='text-center col4'><FaTimes className="text-danger" size={22} /></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default SixthSection;
