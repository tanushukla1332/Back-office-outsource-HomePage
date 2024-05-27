import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import clineimg from '../../../public/Image/img-client (2).png';
import clineimg2 from '../../../public/Image/img-client (1).png';
import clineimg34 from '../../../public/Image/img-client (3).png';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      image: clineimg,
      name: 'John Wick',
      title: 'Director - Macquarie Group',
      testimonial: 'Outsource 2 Backoffice took our website to the next level! Their attention to detail transformed our home, services, and company pages into sleek, professional platforms. With their virtual assistants\' support, our business efficiency has skyrocketed. Highly recommend their expertise!',
      rating: 5,
    },
    {
      image: clineimg2,
      name: 'Eliana',
      title: 'Director - BHP Group',
      testimonial: 'Impressed with Outsource 2 Backoffice\'s accounting and bookkeeping services. They\'ve streamlined our financial processes, providing accurate data entry and expert management. Their team\'s dedication to precision and timely reporting has been instrumental in our business growth. Exceptional service!',
      rating: 5,
    },
    {
      image: clineimg34,
      name: 'Joey Kerry',
      title: 'Director - Wesfarmers',
      testimonial: 'Outsource 2 Backoffice exceeded our expectations in customer service and tech support. Their live chat assistants are very responsive and knowledgeable so that our clients receive prompt assistance. With their help, we\'ve enhanced our customer satisfaction levels and maintained smooth operations. Fantastic job!',
      rating: 4,
    },
    {
        image: clineimg2,
        name: 'Eliana',
        title: 'Director - BHP Group',
        testimonial: 'Impressed with Outsource 2 Backoffice\'s accounting and bookkeeping services. They\'ve streamlined our financial processes, providing accurate data entry and expert management. Their team\'s dedication to precision and timely reporting has been instrumental in our business growth. Exceptional service!',
        rating: 5,
      },
      {
        image: clineimg34,
        name: 'Joey Kerry',
        title: 'Director - Wesfarmers',
        testimonial: 'Outsource 2 Backoffice exceeded our expectations in customer service and tech support. Their live chat assistants are very responsive and knowledgeable so that our clients receive prompt assistance. With their help, we\'ve enhanced our customer satisfaction levels and maintained smooth operations. Fantastic job!',
        rating: 4,
      },
  ];

  return (
    <Row className="py-lg-5 py-md-5 py-xl-5 py-3 d-flex justify-content-center align-items-center">
      <Col md={10} xs={10} cl>
        <h1 className='hed1 text-center text-black'>Client Reviews</h1>
        <p className='para text-black text-center'>We don't need to promote our quality, our happy clients do it for us</p>
        <Swiper className='py-5'
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='d-flex justify-content-center align-items-center col-md-11 py-4'>
                <div className="testimonial-card">
                  <div className="profile">
                    <img src={testimonial.image} alt="Profile" />
                    <div>
                      <h5 className='hed4 text-black fw-bold'>{testimonial.name}</h5>
                      <p className='hed4 text-black'>{testimonial.title}</p>
                    </div>
                  </div>
                  <blockquote className='para text-black'>{testimonial.testimonial}</blockquote>
                  <div className="rating">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="star">&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  );
};

export default TestimonialCarousel;
