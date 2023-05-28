import React, { SyntheticEvent, useState } from "react";
import { Btn } from "../../atoms/Btn/Btn";
import { AccountPatient } from "../../pages/AccountPatient/AccountPatient";
import "./LoginPatient.css";
import { baseUrlPatient, sendAndReceiveData } from "../../../api";

export const LoginPatient = () => {
  const [form, setForm] = useState({
    login: "Piotrek123",
    password: "12345678",
  });
  const [logged, setLogged] = useState(false);
  const [id, setId] = useState("");
  const [login, setLogin] = useState("");

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    sendAndReceiveData(form, baseUrlPatient, "log").then((data) => {
      setLogged(data.log);
      setId(data.id);
      setLogin(data.login);
    });
  };

  const click = async () => {};

  return logged ? (
    <AccountPatient loginPt={login} idPt={id} />
  ) : (
    <div className="bg">
      <form action="" onSubmit={sendForm} className="formLogin">
        <h2>Zaloguj się</h2>
        <p>
          <label>
            Login: <br />
            <input
              type="text"
              name="login"
              value={form.login}
              onChange={(e) => updateForm("login", e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Hasło: <br />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={(e) => updateForm("password", e.target.value)}
            />
          </label>
        </p>
        <Btn text="Dalej" onClick={click} /> <Btn text="Rejestracja" to="ad" />
      </form>
    </div>
  );
};
