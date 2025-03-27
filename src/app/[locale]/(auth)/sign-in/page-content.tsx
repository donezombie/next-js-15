'use client';
import { useAuth } from '@/providers/AuthenticationProvider';
import { Form, Formik } from 'formik';

const PageContent = () => {
  const { login } = useAuth();

  return (
    <div className="component:PageContent">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => {
          login({
            username: values.username,
            password: values.password,
            onSuccess: () => {
              window.location.href = '/dashboard';
            },
          });
        }}
      >
        {({ handleChange, handleBlur }) => {
          return (
            <Form>
              <div>
                <label htmlFor="username">Username</label>
                <input name="username" id="username" onChange={handleChange} onBlur={handleBlur} className="block" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input name="password" id="password" onChange={handleChange} onBlur={handleBlur} className="block" />
              </div>

              <button type="submit">Login</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PageContent;
