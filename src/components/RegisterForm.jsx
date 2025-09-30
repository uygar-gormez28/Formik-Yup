import React from "react";
import { useFormik } from "formik";
import { registerFormSchema as RegisterFormSchema } from "../schemas/RegisterFormSchemas";

const RegisterForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: false, // false olarak değiştirin (string yerine boolean)
    },
    validationSchema: RegisterFormSchema,
    onSubmit: (values, action) => {
      console.log(values);
      console.log(action);

      action.resetForm();
    },
  });

  return (
    <div className="den">
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email" // name ekleyin
            placeholder="Emailinizi girin"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="input-div">
          <label>Age</label>
          <input
            type="number"
            id="age"
            name="age" // name ekleyin
            placeholder="Yaşınızı girin"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error-text">{errors.age}</p>}
        </div>

        <div className="input-div">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password" // name ekleyin
            placeholder="Şifrenizi girin"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div className="input-div">
          <label>ConfirmPassword</label>
          <input
            type="password"
            id="confirmPassword" // DÜZELTME: Confirmpassword → confirmPassword
            name="confirmPassword" // name ekleyin
            placeholder="Şifrenizi tekrar girin"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>

        <div className="input-div">
          <div className="checkBox">
            <input
              type="checkbox"
              id="term"
              name="term" // name ekleyin
              checked={values.term} // DÜZELTME: value → checked
              onChange={handleChange}
            />
            <label htmlFor="term">Kullanıcı sözleşmesini onaylıyorum</label>
          </div>
          {errors.term && <p className="error-text">{errors.term}</p>}
        </div>

        <button type="submit" className="saveBtn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
