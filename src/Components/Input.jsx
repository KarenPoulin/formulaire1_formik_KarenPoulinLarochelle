import React from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';

export const Input = ({ label, id, type = "text", ...rest}) => {
    const [field, meta] = useField(id);
    const isError = meta.touched && meta.error;
  
  
    return (
    <Form.Group className=''>
        {label && <Form.Label htmlFor={id}>
                    {label}
                    </Form.Label>}
        <Form.Control
            isValid={isError} 
            type={type} 
            {...field} 
            {...rest} />
        {isError && (
            <Form.Control.Feedback>{meta.error}</Form.Control.Feedback>
        )}
    </Form.Group>
  );
};