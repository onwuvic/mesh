import { useEffect, useState } from 'react';

const useForm = (initialValues: any, callback: any, validate: any) => {

    const initialState: Record<string, any> = {};
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);
    
    const handleSubmit = (event: any) => {
        if (event) event.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
    };

    const handleChange = (event: any) => {
        event.persist();
        setValues((values: any) => ({ ...values, [event.target.name]: event.target.value }));
        setErrors(validate(values));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
};

export default useForm;