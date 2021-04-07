import React, { FC, Fragment, ReactElement, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputSearch, WrapperSearch, WrapperStates } from './Styles';
import { inputVar } from '../../cache';
import { LoadIssues } from '../../graphql/manage';
import { useReactiveVar } from "@apollo/client";


const SearchBar: FC = (): ReactElement => {

  
   const { term, status } = useReactiveVar(inputVar);
   
   const handleForm = (e:React.ChangeEvent<HTMLInputElement>) => { 
      e.target.name === "term" 
         ? inputVar({term: e.target.value, status}) 
         : inputVar({term, status: e.target.value}); 
   }


   useEffect( ()=> {

      console.log('Dentro de effect term y status - ' , inputVar());
      const delayDebounce = setTimeout(() => {
            if (term.trim().length > 2) {
               LoadIssues(term.trim(), status, 9, 'next', null);
            }
            return () => clearTimeout(delayDebounce);
      }, 500);
   }, [term, status]);

   return(
      <Fragment>
         <WrapperSearch>
               <InputSearch
                  id="searchbar"
                  type="text"
                  name="term"
                  placeholder="Search term"
                  onChange={handleForm}
                  value={term}
               />
               <label><FontAwesomeIcon icon={faSearch} className="icon_search" /></label>
         </WrapperSearch>
         <WrapperStates>
            <label>ALL
               <input
                  id="all"
                  type="radio"
                  name="state"
                  onChange={handleForm}
                  value=""
                  checked={'' == status ? true : false}
               />
            </label>
            <label className="open">OPEN
               <input 
                  id="open"
                  type="radio"
                  name="state"
                  onChange={handleForm}
                  value="open"
                  checked={'open' == status ? true : false}
               />
            </label>
            <label className="closed">CLOSED
               <input 
                  id="closed"
                  type="radio"
                  name="state"
                  onChange={handleForm}
                  value="closed"
                  checked={'closed' == status ? true : false}
               />
            </label>
         </WrapperStates>
      </Fragment>
   );
}
export default SearchBar;
