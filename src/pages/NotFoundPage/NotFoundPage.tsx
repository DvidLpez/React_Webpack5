import React, { FC, Fragment, ReactElement } from 'react';
import ButtomHome from '../../components/ButtomHome/ButtomHome';
import Header from '../../components/Header/Header';
import { Title, Subtitle } from '../../components/StyledComponents/styledComponents';
import { WrapperNotFound } from './Styles';


const NotFoundPage: FC = (): ReactElement => (
  <Fragment>
    <Header title="Page Not Found"/>
    <WrapperNotFound>
      <Title>404</Title>
      <Subtitle>PAGE NOT FOUND</Subtitle>
        <h4>
          THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST.
          <br />
          PLEASE, SORRY FOR THE ANNOYANCE.
        </h4>
      <ButtomHome />
    </WrapperNotFound>
  </Fragment>
);
export default NotFoundPage;
