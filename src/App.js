import styles from "./App.module.css";
import NavigationBar from './components/NavigationBar/NavigationBar';
import AppRoute from './Routes/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.js';
//import { useState, useEffect, } from "react";


function App ()
{
 /* const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [useData,setUseData] = useState([]);
   const FetchData = () => {
    fetch("https://www.anapioficeandfire.com/api/characters")
    .then((res) => res.json())
    .then((data) => {
        setUseData(data);
        console.log(data);
    });
    useEffect(() => {
      FetchData();
     },[]);

     const last = currentPage * pageSize;
   const first = last - pageSize;
   const newCurrentPage = useData.slice(first,last);
   console.log(first,last, newCurrentPage);

   const PageNums = [];
   for(let i=1; i<=Math.ceil(useData.length / PageNums); i++)
   PageNums.push(i);
   console.log(PageNums); */
  
   return (
   <div className="app">
    
     {/* {useData.length !== 0 ? (
        <div className="p-8 px-40 mt-36">
           { newCurrentPage.map((item, id) =>(
               <div key={id}>
                  {item.id} {item.name}
               </div>
            ))}
              <div> 
                <button className="page__container"
                  onClick={() => {
                  if(currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  }
                  }} > prev 
                </button>
                <button className="page__container" 
                   onClick={() => {
                   if(currentPage < PageNums.length){
                   setCurrentPage(currentPage + 1);
                   }
                   }}> Next 
                </button>
               </div>
           <div>
              {PageNums.map((PageNum) =>(
               <div
                 key={PageNum}
                 onClick={() => {
                    setCurrentPage(PageNum);
                 }}
               >
                {PageNum}
           </div>
         ))}
    
        </div>
         </div>
   ) : (
     <p className="loading">loading...</p>
   )}
   */ }
   <BrowserRouter> 
   
      <div className={styles["app_header"]}>
        <Header />
        <header className={styles["app_header"]}>
          <NavigationBar/>
        </header>

        <main className={styles["app_main"]}>
          <AppRoute />
        </main>
          
      </div>
    </BrowserRouter>
    
    
    </div>
    
  );
}

export default App;
