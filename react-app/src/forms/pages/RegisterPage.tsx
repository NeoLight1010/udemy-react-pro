import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
import {isValidEmail} from "../utils/isValidEmail";

enum InputName {
    Name = "name",
    Email = "email",
    Password = "password",
    ConfirmPassword = "confirmPassword",
}

const MIN_PASSWORD_LENGTH = 6;

export const RegisterPage = (): JSX.Element => {
    type FormData = { [inputName in InputName]: string };

    const { onChange, onSubmit, formData, reset } = useForm<FormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { name, email, password, confirmPassword } = formData;

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name={InputName.Name}
                    value={name}
                    onChange={onChange}
                    className={!name.trim() ? "has-error" : ""}
                />
                {!name.trim() && <span>Required field.</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name={InputName.Email}
                    value={email}
                    onChange={onChange}
                    className={!isValidEmail(email) ? "has-error" : ""}
                />
                {!isValidEmail(email) && <span>Invalid email.</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name={InputName.Password}
                    value={password}
                    onChange={onChange}
                    className={
                        password.trim().length < MIN_PASSWORD_LENGTH
                            ? "has-error"
                            : ""
                    }
                />
                {password.trim().length < MIN_PASSWORD_LENGTH && (
                    <span>Password too short.</span>
                )}

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name={InputName.ConfirmPassword}
                    value={confirmPassword}
                    onChange={onChange}
                    className={password !== confirmPassword ? "has-error" : ""}
                />
                {password !== confirmPassword && (
                    <span>Passwords don't mathch.</span>
                )}

                <input type="submit" value="Submit" />
                <input type="button" value="Reset" onClick={reset} />
            </form>
        </div>
    );
};
