'use client'

import React, { useState } from 'react';
import styles from '../Form.module.scss';


const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
    peso: '',
    sexo: '',
    consomeAlcool: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="idade">Idade:</label>
      <input
        type="text"
        id="idade"
        name="idade"
        value={formData.idade}
        onChange={handleChange}
        required
      />

      <label htmlFor="peso">Peso:</label>
      <input
        type="text"
        id="peso"
        name="peso"
        value={formData.peso}
        onChange={handleChange}
        required
      />

      <label htmlFor="sexo">Sexo:</label>
      <select
        id="sexo"
        name="sexo"
        value={formData.sexo}
        onChange={handleChange}
        required
      >
        <option value="">Selecione o sexo</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
      </select>

      <label htmlFor="consomeAlcool">Consome álcool?</label>
      <select
        id="consomeAlcool"
        name="consomeAlcool"
        value={formData.consomeAlcool}
        onChange={handleChange}
        required
      >
        <option value="">Selecione a opção</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>

      <button type="submit" style={{ backgroundColor: '#00acee', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Enviar</button>
    </form>
  );
};

export default Form;