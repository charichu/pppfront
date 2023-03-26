import { Formik, Field, Form } from 'formik';

export default function RegisterForm() {
    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                passwordconfirm: '',
            }}

            onSubmit={async(
                values
              ) => {
                    const response = await fetch('http://localhost:8000/api/auth/register', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            email: values.email,
                            name: values.username,
                            password: values.password,
                            passwordconfirm: values.passwordconfirm,
                        }),
                    });
                    const body = await response.json();
                    if (!response.ok) {
                        alert(body.message);
                        throw errors;
                    } else {
                        alert(body.message);
                    }
            }}
        >
            <Form>
                <label htmlFor="firstName">username: </label>
                <Field id="username" name="username" placeholder="Username"/><br/>
                <label htmlFor="firstName">email: </label>
                <Field id="email" name="email" placeholder="email" /><br/>
                <label htmlFor="firstName">password: </label>
                <Field type="password" id="password" name="password" placeholder="Password" /><br/>
                <label htmlFor="firstName">passwordconfirm: </label>
                <Field type="password" id="passwordconfirm" name="passwordconfirm" placeholder="Passwordconfirm" /><br/>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}