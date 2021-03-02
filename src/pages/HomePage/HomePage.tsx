import React, { FC, Fragment, ReactElement } from "react";
import { useSelector } from 'react-redux';
import IssuesList from "../../components/IssuesList/IssuesList";
import Loading from "../../components/Loading/Loading";
import SearchBar from "../../components/SearchBar/SearchBar";
import IAppState from '../../interfaces/IAppState';
import Header from '../../components/Header/Header';
import IIssue from "../../interfaces/IIssue";
import Pagination from "../../components/Pagination/Pagination";
import "./HomePage.scss";

const HomePage: FC = (): ReactElement => {

   const {data, loading} = useSelector( (state:IAppState) => state.issues);
   const issues:Array<IIssue> = data; 
   
   return(
      <Fragment>
         <Header title="GitHub - Search React Issues" />
         <div className="wrapper wrapper_home">
            <SearchBar />     
            {loading ? <Loading /> : <IssuesList data={issues} /> }
         </div>
         <Pagination />
      </Fragment>
   );
}
export default HomePage;
