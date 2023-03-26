import { Formik, Field, Form } from 'formik';

export default function VerifyForm() {
    return (
        <Formik
            initialValues={{
                token: '',
            }}

            onSubmit={async(
                values
              ) => {
                    let baseUrl = "http://localhost:8000/api/auth/verifyemail/";
                    let tokenUrl = new URL(values.token, baseUrl)
                    const response = await fetch(tokenUrl, {
                        method: 'GET',
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
                <Field id="token" name="token" placeholder="token" />
                <button type="submit">Verify</button>
            </Form>
        </Formik>
    )
}