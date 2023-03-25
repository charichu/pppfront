import { Formik, Field, Form } from 'formik';

export default function RegisterForm() {
    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
            }}

            onSubmit={(
                values,
                { setSubmitting }
              ) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
        >
            <Form>
                <label htmlFor="firstName">username: </label>
                <Field id="username" name="username" placeholder="Username"/><br/>
                <label htmlFor="firstName">email: </label>
                <Field id="email" name="email" placeholder="email" /><br/>
                <label htmlFor="firstName">password: </label>
                <Field type="password" id="password" name="password" placeholder="Password" /><br/>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}