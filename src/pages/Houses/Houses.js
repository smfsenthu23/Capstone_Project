import {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import styles from "./Houses.module.css";
import { parseLinkHeader } from "@web3-storage/parse-link-header";



function Houses()
{
    const { page } = useParams();
    const pageNumber = page ? parseInt(page, 10) : 1;
   const [houses, setHouses] = useState([]);
   const [parsed, setParsed] = useState();
   //const [names, setNames] = useState([]);
   
  
   
   useEffect(()=>{
    axios.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=5`)
    .then((response)=>{
      
        setHouses(response.data)
        setParsed(parseLinkHeader(response.headers['link']))
    }) 
  },[])

   const hasPrevious = pageNumber > 1;
   const lastPgNum = (parsed !== undefined? parsed.last.page : pageNumber);
   const hasNextOrLast = (lastPgNum != pageNumber);
   
  return( 
         <div  className={styles["main__container"]}>
          <div className={styles["pagination"]}>
             <div>
                {(pageNumber > 2) && (
                  <Link to="/houses/1"><span id="page_container">First</span></Link>
                )}
                {hasPrevious && (
                  <Link to={`/houses/${pageNumber - 1}`}><span id="page_container">⬅️</span></Link>
                )}
                {hasNextOrLast && (
                 <Link to={`/houses/${pageNumber + 1}`}><span id="page_container">➡️</span></Link>
                )}
                {(hasNextOrLast && (pageNumber!=lastPgNum-1)) && (
                  <Link to={`/houses/${lastPgNum}`}><span id="page_container">Last</span></Link>
                )}
            </div>    
             </div>

            {
             houses.map((data,id)=>{
                return(
                    <div key={id} className={styles["houses__infoContainer"]}>
                      <ul className={styles["house-list"]}>
                    <li>
                        {data.name!="" ? <span><b>Name</b> {data.name}</span> : <span><b>Titles</b>{data.titles}</span>}
                       </li>
                     <li>
                       <b> CurrentLord </b>
                          {data.currentLord}
                      </li>
                      <li>
                         
                         <li> <b>SwornMembers </b></li>
                          <ul>
                          {data.swornMembers.map((member)=> 
                          
                           <Link to="/character" state={{urlSrc:member}}><span> {member} <br/></span></Link> )}
                          </ul>
                      </li>
                      </ul>
                    </div>
                )
            })}

        </div>
    
    

  )
}
 

export default Houses;