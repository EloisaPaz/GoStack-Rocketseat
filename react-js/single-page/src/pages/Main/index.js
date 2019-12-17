import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';
import api from '../../services/api';

export default class Main extends Component {

state = {
  newRepo: ' ',
};

handleInputChange = e => {
  this.setState({ newRepo: e.target.value });
}

handleSubmit = async e => {
  e.preventDefault();

  const { newRepo } = this.state;

  const response = await api.get(`/repos/${newRepo}`)

  const data = {
    name: response.data.full_name,
  };
}

  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt/>
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton disable>
            <FaPlus color="#FFF" size={14}/>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
