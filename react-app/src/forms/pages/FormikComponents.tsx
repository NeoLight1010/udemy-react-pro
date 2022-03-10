import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

const REQUIRED_MSG = "Required field.";

export const FormikComponents = (): JSX.Element => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        terms: false,
        jobType: "",
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(15, "Must be 15 characters or less.")
            .required(REQUIRED_MSG),
        lastName: Yup.string()
            .max(20, "Must be 20 characters or less.")
            .required(REQUIRED_MSG),
        email: Yup.string().email("Invalid email.").required(REQUIRED_MSG),
        terms: Yup.boolean().isTrue("You must accept the terms."),
        jobType: Yup.string()
            .notOneOf(["it-junior"], "Option not allowed.")
            .required(REQUIRED_MSG),
    });

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Pick a role</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field name="terms" type="checkbox" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
