import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";
import { isValidEmail } from "../utils/isValidEmail";

const REQUIRED_MSG = "Required field.";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = (): JSX.Element => {
    const validate = ({
        firstName,
        lastName,
        email,
    }: FormValues): FormikErrors<FormValues> => {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = REQUIRED_MSG;
        } else if (firstName.length > 15) {
            errors.firstName = "Must be 15 characters or less.";
        }

        if (!lastName) {
            errors.lastName = REQUIRED_MSG;
        } else if (lastName.length > 20) {
            errors.lastName = "Must be 20 characters or less.";
        }

        if (!email) {
            errors.email = REQUIRED_MSG;
        } else if (!isValidEmail(email)) {
            errors.email = "Invalid email.";
        }

        return errors;
    };

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
        useFormik<FormValues>({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
            },
            onSubmit: (values) => console.log(values),
            validate,
        });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && (
                    <span>{errors.firstName}</span>
                )}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && (
                    <span>{errors.lastName}</span>
                )}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
