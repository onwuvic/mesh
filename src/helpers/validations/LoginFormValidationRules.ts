const validate = (values: any) => {
    let errors: Record<string, any> = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }
    return errors;
};

export default validate;