import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import firstImage from '../../../public/Image/Rectangle 278 (1).png';
import secImage from '../../../public/Image/Rectangle 278 (2).png';
import thirdImage from '../../../public/Image/Rectangle 278 (3).png';


export default function Section13() {
    const Portdata = [
        { "id": 1, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": firstImage },
        { "id": 2, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": secImage }, { "id": 1, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": thirdImage },
        { "id": 3, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": firstImage },
        { "id": 4, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": secImage }, { "id": 1, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": thirdImage },
        { "id": 5, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": secImage }, { "id": 1, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": thirdImage },
        { "id": 6, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": secImage }, { "id": 1, "title": "Lorem  Ipsum ", "subTitle": "printing and typesetting industry. Lorem  Ipsum has been the industry's standard   dummy text ever since the 1500s, when  an unknown printer ", "image": thirdImage },

    ];

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const visibleRecords = Portdata.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(Portdata.length / recordsPerPage);

    const handlePageClick = (index) => {
        setCurrentPage(index);
    };

    const movePage = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <div className='text-center'>
                    <h1 className='hed1  text-center'>Blogs</h1>
                    <p className='para  text-center text-black'>Innovative Solutions Tailored to Your Needs</p>
                </div>
                {visibleRecords.map((item, id) => (
                    <Col key={id} md={3} lg={3} xs={6} className={`d-flex flex-column justify-content-center align-items-center pt-5  mb-3 ${id >= 2 ? 'd-none d-md-block' : ''}`}>
                        <div className='main-div-blog'>
                            <div>
                                <img src={item.image} variant='top' className='img-fluid' />
                            </div>
                            <div className='div-blog-inside'>
                                <h4 className='hed3 text-center fw-bold pt-lg-4 pt-md-4 pt-xl-4 pt-3' style={{ color: "#46A4D9" }}>{item.title}</h4>
                                <h6 className='para text-center pt-2 pb-4'>{item.subTitle}</h6>
                            </div>
                            <div className='d-flex align-items-center justify-content-center know-more-button-div'>
                                <Button>Know More</Button>
                            </div>

                        </div>
                    </Col>
                ))}
                <div className='AllbuttonForMove d-flex justify-content-center align-items-center gap-2'>
                    <Button onClick={() => movePage('prev')} disabled={currentPage === 1}>{'<'}</Button>
                    <Button onClick={() => movePage('next')} disabled={currentPage === numberOfPages}>{'>'}</Button>
                </div>
            </Row>
        </>
    );
}
