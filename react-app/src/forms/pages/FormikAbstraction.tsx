import { Formik, Form}  from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import {MyCheckBox, MySelect, MyTextInput} from "../components";

const REQUIRED_MSG = "Required field.";

export const FormikAbstraction = (): JSX.Element => {
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
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            placeholder="First Name"
                        />
                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            placeholder="Last Name"
                        />
                        <MyTextInput
                            label="Email address"
                            name="email"
                            placeholder="Email"
                        />

                        <MySelect name="jobType" label="Job Type">
                            <option value="">Pick a role</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </MySelect>

                        <MyCheckBox name="terms" label="Terms and conditions" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
