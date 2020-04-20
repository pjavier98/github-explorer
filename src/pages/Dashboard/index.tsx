import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/35467783?s=460&u=2241a56575e7955030469f47b7ffebaa81b3e146&v=4"
            alt="Pedro Javier"
          />
          <div>
            <strong>gobarber</strong>
            <p>Aplicação de serviço de agendamentos da beleza</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/35467783?s=460&u=2241a56575e7955030469f47b7ffebaa81b3e146&v=4"
            alt="Pedro Javier"
          />
          <div>
            <strong>gobarber</strong>
            <p>Aplicação de serviço de agendamentos da beleza</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/35467783?s=460&u=2241a56575e7955030469f47b7ffebaa81b3e146&v=4"
            alt="Pedro Javier"
          />
          <div>
            <strong>gobarber</strong>
            <p>Aplicação de serviço de agendamentos da beleza</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
