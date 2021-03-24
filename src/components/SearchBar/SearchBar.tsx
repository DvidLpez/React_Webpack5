import React, { FC, Fragment, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import IAppState from "../../interfaces/IAppState";
import { loadIssuesAction } from "../../redux/actions/issuesAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputSearch, WrapperSearch, WrapperStates } from './Styles';

const SearchBar: FC = (): ReactElement => {

   const { term:word, status: statusCheckBox } = useSelector((state: IAppState) => state.issues);

   const [form, setForm] = useState({
      term: word,
      state: statusCheckBox
   })
   
   const { term, state } = form;
   const dispatch = useDispatch();
   
   
   const handleForm = (e:React.ChangeEvent<HTMLInputElement>) => { 
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }
   
   useEffect( ()=> {
      const delayDebounce = setTimeout(() => {
            if (term.trim().length > 2) {
               dispatch(loadIssuesAction(term.trim(), state, 9, 'next', null));
            }
      }, 500)
      return () => clearTimeout(delayDebounce)
      
   }, [term, state, dispatch]);


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
                  type="radio"
                  name="state"
                  onChange={handleForm}
                  value=""
                  checked={'' == state ? true : false}
               />
            </label>
            <label className="open">OPEN
               <input 
                  type="radio"
                  name="state"
                  className=""
                  onChange={handleForm}
                  value="open"
                  checked={'open' == state ? true : false}
               />
            </label>
            <label className="closed">CLOSED
               <input 
                  type="radio"
                  name="state"
                  onChange={handleForm}
                  value="closed"
                  checked={'closed' == state ? true : false}
               />
            </label>
         </WrapperStates>
      </Fragment>
   );
}
export default SearchBar;
