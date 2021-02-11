import React, { Dispatch, FC, Fragment, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import IAppState from "../../interfaces/IAppState";
import { loadIssuesAction } from "../../redux/actions/issuesAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./SearchBar.scss";

const SearchBar: FC = (): ReactElement => {

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
   const dispatch:Dispatch<any> = useDispatch();
   
   useEffect( ()=> {
      
      if(term.length > 2 && term.trim() !== '') {
         const loadIssuesAPI = () => dispatch( loadIssuesAction(term, state, 21) );
         loadIssuesAPI();
      }

   }, [term, state, dispatch]);

   return(
      <Fragment>
         <div className="wrapper_search">
            <div className="search">
               <input 
                  type="text"
                  name="term"
                  className="input_form"
                  placeholder="Search issues in Facebook/React repository "
                  onChange={handleForm}
                  value={term}
               />
               <FontAwesomeIcon icon={faSearch} className="icon_search" />
            </div>
            <div className="wrapper_radio">
               <label className="open">OPEN
                  <input 
                     type="radio"
                     name="state"
                     className=""
                     onChange={handleForm}
                     value="open"
                  />
               </label>
               <label className="closed">CLOSED
                  <input 
                     type="radio"
                     name="state"
                     onChange={handleForm}
                     value="closed"
                  />
               </label>
               <label>ALL
                  <input 
                     type="radio"
                     name="state"
                     onChange={handleForm}
                     value=""
                  />
               </label>
            </div>
         </div>
      </Fragment>
   );
}
export default SearchBar;
