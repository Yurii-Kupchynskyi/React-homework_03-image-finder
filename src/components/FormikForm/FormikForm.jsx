import React, { useState } from 'react';
import { useFormik } from 'formik';
import { FlexBox } from 'components/Box';
import styled from 'styled-components';
import { basicSchema } from './Shcemas';
import styles from './FormikForm.module.css';

const FormData = styled.div`
  display: flex;
  gap: 10px;
`;

const contactData = [
  { email: 'zx7q2@gmail.com' },
  { email: 'plkj09@gmail.com' },
  { email: 'hy6r8@gmail.com' },
];

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise(resolve => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const SignUpForm = () => {
  const [contacts, setContact] = useState(contactData);

  const handleAdd = e => {
    e.preventDefault();

    const newArray = [...contacts];
    newArray.push({ email: values.email });
    setContact(newArray);
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  //   console.log(values);
  //   console.log(errors);
  return (
    <FlexBox mt="30px" ml="2%">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <FormData>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={values.email}
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Enter your email"
            onBlur={handleBlur}
            className={
              errors.email && touched.email ? styles['input-error'] : ''
            }
          />
        </FormData>
        <FormData>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={values.age}
            name="age"
            id="age"
            onChange={handleChange}
            placeholder="Enter your age"
            onBlur={handleBlur}
            className={errors.age && touched.age ? styles['input-error'] : ''}
          />
        </FormData>
        <FormData>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={values.password}
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Enter your password"
            onBlur={handleBlur}
            className={
              errors.password && touched.password ? styles['input-error'] : ''
            }
          />
        </FormData>
        <div className={styles['buttonContainer']}>
          <button onClick={handleAdd} className={styles['active']}>
            Add contact
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles['active']}
          >
            Send Form
          </button>
        </div>
      </form>
      <div>
        {contacts.map((contact, index) => (
          <p key={index}>{contact.email}</p>
        ))}
      </div>
    </FlexBox>
  );
};
