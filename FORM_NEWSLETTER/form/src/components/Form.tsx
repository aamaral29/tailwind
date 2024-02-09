import { User } from "../types/User";
import { useState, FormEvent } from "react";
import { validate } from "../utils/Validate";
// import { Button } from "antd";

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState<User | null>(null);

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

        setErrors(null);

        const data: User = {
            name, email, agree,
        };

        const validateErrors = validate(data);

        console.log(validateErrors)

        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }

        setName("");
        setEmail("");
        setAgree(false);

        alert('Obrigado por se inscrever');

    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name">Nome</label>
                <input
                    type="text"
                    placeholder="Digite o seu nome..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                />
                {errors?.name && (
                    <small className="text-xs mt-1 text-red-500">{errors?.name}</small>
                )}

            </div>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">E-mail</label>
                <input
                    type="email"
                    placeholder="Digite o seu e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                />
                {errors?.email && (
                    <small className="text-xs mt-1 text-red-500">{errors?.email}</small>
                )}
            </div>
            <div className="flex flex-col">
                <a href="#" className="text-xs underline mb-2">Leia os termos</a>
                <div className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="hover:cursor-pointer"
                    />
                    <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
                </div>
                {errors?.agree && (
                    <small className="text-xs mt-1 text-red-500">{errors?.agree}</small>
                )}
            </div>
            <button
                type='submit'
                className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">
                Cadastrar
            </button>
            {/* <Button className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</Button> */}
        </form>
    );

};

export default Form;