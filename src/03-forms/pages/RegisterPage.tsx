import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

const RegisterPage = () => {
  const { handleSubmit, handleChange, objSuscriber, resetForm, isValidEmail } =
    useForm({
      name: "",
      email: "",
      password1: "",
      password2: "",
    });
  const { name, email, password1, password2 } = objSuscriber;

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={(ev) => handleSubmit(ev)}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          value={name}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={email}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          type="password"
          name="password1"
          onChange={handleChange}
          placeholder="Password"
          value={password1}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && <span>La contraseña debe tener 6 caracteres</span>}
        <input
          type="password"
          name="password2"
          onChange={handleChange}
          placeholder="Repeat Password"
          value={password2}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>Este campo es necesario</span>}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
