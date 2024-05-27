import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Form.css';
import serimg from '../../public/Image/ser.png';

export default function FormLayout({ heading, para, formData, icons, selectField }) {
    return (
        <Form xs={10} className='main-form-page'>
           <h1 className='text-center pt-4 fw-bold hed4' style={{color:"#FE5A0E"}}>{heading}</h1>
            <p className='text-center pt-2 para' style={{color:"#3C3C3C",fontWeight:"500"}}>{para}</p>
            {formData.map((field, index) => (
                <FormGroup key={index} className='d-flex justify-content-center align-items-center py-2'>
                    {field.type !== 'select' && (
                        <img src={icons[field.type]} alt={field.type} className='img-fluid img-form' />
                    )}
                    <FormControl
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        as={field.as}
                        className='form-control-main-page' // Updated class name
                    />
                </FormGroup>
            ))}
            {selectField && (
                <FormGroup className='d-flex justify-content-center align-items-center '>
                    <img src={serimg} className=' img-form' />
                    <FormControl as='select' placeholder={selectField.placeholder} required className='form-control-main-page'>
                        {selectField.options.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </FormControl>
                </FormGroup>
            )}
            <div className='w-100  d-flex justify-content-center align-items-center pt-3'>
                <Button type="submit" backgroundColor="#FF851B" variant='outline-dark' className='formbutton'>Submit</Button>
            </div>
        </Form>
    );
}
