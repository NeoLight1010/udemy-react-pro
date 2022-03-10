import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJSON from "../data/custom-form.json";
import * as Yup from "yup";

const REQUIRED_MSG = "Required field.";

const parseInitialValues = () => {
    const initialValues: { [key: string]: any } = {};

    for (const field of formJSON) {
        initialValues[field.name] = field.value;
    }

    return initialValues;
};

const parseRequiredFields = () => {
    const requiredFields: { [key: string]: Yup.StringSchema } = {};

    for (const field of formJSON) {
        if (!field.validations || field.validations.length === 0) {
            continue;
        }

        let schema = Yup.string();

        for (const rule of field.validations) {
            if (rule.type === "required") {
                schema = schema.required(REQUIRED_MSG);
            }

            if (rule.type === "minLength" && rule.value) {
                schema = schema.min(
                    rule.value,
                    `Must be ${rule.value} characters or more.`
                );
            }

            if (rule.type === "email") {
                schema = schema.email("Invalid email.");
            }
        }

        requiredFields[field.name] = schema;
    }

    return requiredFields;
};

export const DynamicForm = (): JSX.Element => {
    const initialValues = parseInitialValues();

    const requiredFields = parseRequiredFields();
    const validationSchema = Yup.object({ ...requiredFields });

    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(data) => console.log(data)}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form>
                        {formJSON.map(
                            ({ type, name, label, placeholder, options }) => {
                                if (
                                    [
                                        "input",
                                        "text",
                                        "password",
                                        "email",
                                    ].includes(type)
                                ) {
                                    return (
                                        <MyTextInput
                                            key={name}
                                            name={name}
                                            label={label}
                                            type={type as any}
                                            placeholder={placeholder}
                                        />
                                    );
                                } else if (type === "select") {
                                    return (
                                        <MySelect
                                            key={name}
                                            name={name}
                                            label={label}
                                        >
                                            <option value="">
                                                Select an option
                                            </option>
                                            {options?.map(({ id, label }) => (
                                                <option key={id} value={id}>
                                                    {label}
                                                </option>
                                            ))}
                                        </MySelect>
                                    );
                                }

                                throw new Error(
                                    `Type "${type}" not supported.`
                                );
                            }
                        )}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
