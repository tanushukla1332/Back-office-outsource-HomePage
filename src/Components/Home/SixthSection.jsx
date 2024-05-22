import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';

const SixthSection = () => {
  return (
    <>
  
      <Row className="justify-content-center align-items-center py-5">
      <h1 className="text-center mb-4">Why Choose Outsource2Backoffice Over Other BPOs</h1>
        <Col md={10} className='d-flex justify-content-center align-items-center'>
          <Table bordered>
            <thead>
              <tr>
                <th>What you get from us</th>
                <th>How you get it from us</th>
                <th>Outsource2backoffice</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Boutique Outsourcing Agency</td>
                <td></td>
                <td><FaCheck className="text-success" /></td>
                <td><FaTimes className="text-danger" /></td>
              </tr>
              <tr>
                <td>Privacy and Confidentiality</td>
                <td>We do not work with same industry clients for same city which ensure your business information won't go in to competitors</td>
                <td><FaCheck className="text-success" /></td>
                <td><FaTimes className="text-danger" /></td>
              </tr>
              <tr>
                <td>Recruitment process</td>
                <td>We fully handled the recruitment process</td>
                <td><FaCheck className="text-success" /></td>
                <td><FaCheck className="text-success" /></td>
              </tr>
              <tr>
                <td>Staff Training</td>
                <td>We train your recruited staff with our Australian based experts</td>
                <td><FaCheck className="text-success" /></td>
                <td><FaTimes className="text-danger" /></td>
              </tr>
              <tr>
                <td>Performance Monitoring</td>
                <td>We monitor staff performance live using latest softwares</td>
                <td><FaCheck className="text-success" /></td>
                <td><FaTimes className="text-danger" /></td>
              </tr>
              <tr>
                <td>Dedicated Account Manager</td>
                <td>You will get an dedicated account manager</td>
                <td><FaCheck className="text-success" /></td>
                <td><FaTimes className="text-danger" /></td>
              </tr>
              <tr>
                <td>Daily Reporting.</td>
                <td>Your account manager will provide you daily report on staff performance</td>
                <td><FaCheck className="text-success" /></td>
                <td><FaTimes className="text-danger" /></td>
              </tr>
              <tr>
                <td>Secure online payments</td>
                <td>You can easily pay via direct debit using your bank card with our secure payment gateway</td>
                <td><FaCheck className="text-success" /></td>
                <td><FaTimes className="text-danger" /></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default SixthSection;