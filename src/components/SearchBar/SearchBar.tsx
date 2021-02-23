import React, { Dispatch, FC, Fragment, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import IAppState from "../../interfaces/IAppState";
import { loadIssuesAction } from "../../redux/actions/issuesAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./SearchBar.scss";

const SearchBar: FC = (): ReactElement => {



   // useEffect(()=> {
   //    document.getElementById('searchbar')?.focus();
   //    console.log('focus');
      
   // }, [])

   const { term:word, status: statusCheckBox } = useSelector((state: IAppState) => state.issues);

   const [form, setForm] = useState({
      term: word,
      state: statusCheckBox
   })

   const handleForm = (e:React.ChangeEvent<HTMLInputElement>) => { 
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   const { term, state } = form;
   const dispatch: Dispatch<any> = useDispatch();
   
   useEffect( ()=> {

      const value = term.trim();
      
      if( value.length > 2 ) {
         const loadIssuesAPI = () => dispatch( loadIssuesAction(term.trim(), state, 9, 'next', null) );
         loadIssuesAPI();
      }

   }, [term, state, dispatch]);

   const isCheck = (e: string) => {  
      return e == state ? true : false;
   }
   
   return(
      <Fragment>
         <div className="wrapper_search">
            <div className="search">
               <span>
                  <input 
                     id="searchbar"
                     type="text"
                     name="term"
                     className="gate"
                     // className="input_form"
                     placeholder="Search term"
                     onChange={handleForm}
                     value={term}
                  />
                  <label><FontAwesomeIcon icon={faSearch} className="icon_search" /></label>
               </span>
            </div>
            <div className="wrapper_radio">
               <label>ALL
                  <input
                     type="radio"
                     name="state"
                     onChange={handleForm}
                     value=""
                     checked={isCheck('')}
                  />
               </label>
               <label className="open">OPEN
                  <input 
                     type="radio"
                     name="state"
                     className=""
                     onChange={handleForm}
                     value="open"
                     checked={isCheck('open')}
                  />
               </label>
               <label className="closed">CLOSED
                  <input 
                     type="radio"
                     name="state"
                     onChange={handleForm}
                     value="closed"
                     checked={isCheck('closed')}
                  />
               </label>
            </div>
         </div>
      </Fragment>
   );
}
export default SearchBar;
