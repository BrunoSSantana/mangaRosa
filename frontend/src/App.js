import React, { useRef, useEffect, useState } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "./Components/Form/input";


function App() {
  const formRef= useRef(null);
  
  async function handleSubmit(data, { reset }) {
    try{
      const schema = Yup.object().shape({
        name: Yup.string().max(100, 'Você não pode ultrapassar 100 caracteres').required('O nome é obrigatório'),
        email: Yup.string().max(100, 'Você não pode ultrapassar 100 caracteres').email('Digite um email Válido').required('O email é obrigatório'),
        cpf: Yup.string().max(14, 'Tem certeza que esse é o seu cpf?').required('O CPF é obrigatório'),
        skills: Yup.string().required('escolha ao menos uma skill'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
  
      console.log(data);

      
      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: "Bruno Santana",
        email: "bruno@gmail.com",
        cpf: "10943557470",
      })
    }, 2000)
  }, [])

  return (
    <div className="App">
      <h1>mangaRosa</h1>

      <Form ref={formRef} onSubmit={handleSubmit} method="POST" action="/admin/recipes">
        <labe>Nome</labe>
        <Input placeholder="Seu nome completo" type="text" name="name"></Input>
        <Input placeholder="Seu melhor email" type="email" name="email"></Input>
        <Input placeholder="___-___-___-__" type="text" name="cpf"></Input>
        <Input placeholder="(81) 9 9805 - 6657" type="text" name="cell"></Input>
        <Input placeholder="Seu nome completo" type="text" name="skills"></Input>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  )
}

export default App;