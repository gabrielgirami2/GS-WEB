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
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="idade">Idade</label>
      <input
        type="text"
        id="idade"
        name="idade"
        value={formData.idade}
        onChange={handleChange}
        required
      />

      <label htmlFor="peso">Peso (Kg)</label>
      <input
        type="text"
        id="peso"
        name="peso"
        value={formData.peso}
        onChange={handleChange}
        required
      />

      <label htmlFor="sexo">Sexo</label>
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

      <label htmlFor="fumar">Você fuma?</label>
      <select
        id="fumar"
        name="fumar"
        value={formData.fumar}
        onChange={handleChange}
        required
      >
        <option value="">Selecione a opção</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>

      <label htmlFor="FrequenciaCardiaca">Qual a sua frequência cardíaca?</label>
      <input
        type="text"
        id="FrequenciaCardiaca"
        name="FrequenciaCardiaca"
        value={formData.FrequenciaCardiaca}
        onChange={handleChange}
        required
      />

      <label htmlFor="diabete">Você possui diabetes?</label>
        <select
          id="diabete"
          name="diabete"
          value={formData.diabete}
          onChange={handleChange}
          required
        >
          <option value="">Selecione a opção</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>

      
      <label htmlFor="obesidade">Você possui Obesidade?</label>
        <select
          id="obesidade"
          name="obesidade"
          value={formData.obesidade}
          onChange={handleChange}
          required
        >
          <option value="">Selecione a opção</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>

      <label htmlFor="esporte">Você pratica algum esporte?</label>
        <select
          id="esporte"
          name="esporte"
          value={formData.esporte}
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