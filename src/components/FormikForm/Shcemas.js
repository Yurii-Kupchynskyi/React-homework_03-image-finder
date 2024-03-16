import * as yup from 'yup';

// Minimum eight characters, at least one letter and one number:
const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  age: yup.number().positive().integer().required('Required'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: 'At least one letter and one number' })
    .required('required'),
});
