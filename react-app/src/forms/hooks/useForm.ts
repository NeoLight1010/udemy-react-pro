import { useState, EventHandler, ChangeEvent, FormEventHandler } from "react";

export const useForm = <T>(initialData: T) => {

    const [formData, setFormData] = useState(initialData);

    const onChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
        const value = event.target.value;

        setFormData((prev) => ({
            ...prev,
            [event.target.name]: value,
        }));
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        console.log(formData);
        event.preventDefault();
    };

    const reset = () => {
        setFormData(initialData);
    }

    return {
        formData,
        onChange,
        onSubmit,
        reset,
    };
};
