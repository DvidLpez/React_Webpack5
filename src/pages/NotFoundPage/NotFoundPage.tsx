import React, { FC, Fragment, ReactElement } from 'react';
import ButtomHome from '../../components/ButtomHome/ButtomHome';
import Header from '../../components/Header/Header';
import "./NotFoundPage.scss";

const NotFoundPage: FC = (): ReactElement => (
  <Fragment>
    <Header title="Page Not Found"/>
    <div className="wrapper_notfound">
      <h1 className="title">404</h1>
        <h2 className="subtitle">PAGE NOT FOUND</h2>
        <h4>
          THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST.
          <br />
          PLEASE, SORRY FOR THE ANNOYANCE.
        </h4>
        <ButtomHome />
    </div>
  </Fragment>
);
export default NotFoundPage;
