import React, { FC, Fragment, ReactElement } from "react";
import IssuesList from "../../components/IssuesList/IssuesList";
import Loading from "../../components/Loading/Loading";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from '../../components/Header/Header';
import Pagination from "../../components/Pagination/Pagination";
import IIssue from "../../interfaces/IIssue";
import { Wrapper } from "../../components/StyledComponents/styledComponents";
import { dataVar, loadingVar } from "../../cache";
import { useReactiveVar } from "@apollo/client";




const HomePage: FC = (): ReactElement => {

   const data = useReactiveVar(dataVar);
   const loading = useReactiveVar(loadingVar);
   const issues: Array<IIssue> = data;

   return(
      <Fragment>
         <Header title="GitHub - Search React Issues" />
         <Wrapper>
            <SearchBar />     
            { loading ? <Loading /> : <IssuesList data={issues} /> }
         </Wrapper>
         <Pagination />
      </Fragment>
   );
}
export default HomePage;
