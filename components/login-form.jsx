import { Formik, Field, Form } from 'formik';

export default function LoginForm() {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}

            onSubmit={async(
                values
              ) => {
                    const response = await fetch('http://localhost:8000/api/auth/login', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        credentials: "include",
                        body: JSON.stringify({
                            email: values.email,
                            password: values.password,
                        }),
                    });
                    if (!response.ok) {
                        const body = await response.json();
                        alert(body.message);
                        throw errors;
                    }
                    }}
        >
            <Form>
                <Field id="email" name="email" placeholder="email" />
                <Field type="password" id="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}