import { Form, Formik } from "formik";
import { MyTextInput } from "../components";
import * as Yup from "yup";

import "../styles/styles.css";

const MIN_PASSWORD_LENGTH = 6;
const REQUIRED_MSG = "Required field.";

enum InputName {
    Name = "name",
    Email = "email",
    Password = "password",
    ConfirmPassword = "confirmPassword",
}

export const RegisterFormikPage = (): JSX.Element => {
    type FormData = { [inputName in InputName]: string };

    const initialValues: FormData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object({
        [InputName.Name]: Yup.string()
            .max(15, "Must be 15 characters or less.")
            .min(2, "Must be 2 characters or more.")
            .required(REQUIRED_MSG),

        [InputName.Email]: Yup.string()
            .email("Invalid email.")
            .required(REQUIRED_MSG),

        [InputName.Password]: Yup.string()
            .min(
                MIN_PASSWORD_LENGTH,
                `Must be ${MIN_PASSWORD_LENGTH} characters or more.`
            )
            .required(REQUIRED_MSG),

        [InputName.ConfirmPassword]: Yup.string()
            .oneOf([Yup.ref(InputName.Password)], "Passwords don't match.")
            .required(REQUIRED_MSG),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(data) => console.log(data)}
            validationSchema={validationSchema}
        >
            {({handleReset}) => (
                <Form>
                    <MyTextInput
                        name={InputName.Name}
                        label="Name"
                        placeholder="Name"
                    />
                    <MyTextInput
                        name={InputName.Email}
                        label="Email"
                        placeholder="Email"
                    />

                    <MyTextInput
                        name={InputName.Password}
                        label="Password"
                        type="password"
                    />
                    <MyTextInput
                        name={InputName.ConfirmPassword}
                        label="Confirm Password"
                        type="password"
                    />

                    <button type="submit">Submit</button>
                    <button onClick={handleReset}>Reset</button>
                </Form>
            )}
        </Formik>
    );
};
