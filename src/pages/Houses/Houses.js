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
   useEffect(()=>{
    axios.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=5`)
    .then((response)=>{
       // console.log(response)
        setHouses(response.data)
        setParsed(parseLinkHeader(response.headers['link']))
    })
   },[page])

   const hasPrevious = pageNumber > 1;
    const lastPgNum = (parsed !== undefined? parsed.last.page : pageNumber);
    const hasNextOrLast = (lastPgNum != pageNumber);
  return( 
         <div  className={styles["main__container"]}>
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

            {
             houses.map((data,id)=>{
                return(
                          <div key={id} className={styles["houses__infoContainer"]}>
                     <div className={styles["houses__info"]}>
                        {data.name!="" ? <span>Name: {data.name}</span> : <span>Titles:{data.titles}</span>}
                      </div>  
                      <div className={styles["houses__info"]}>
                        <span>CurrentLord: </span>
                          <span>{data.currentLord}</span>
                      </div>
                       <div className={styles["houses__info"]}>
                          <span>SwornMembers: </span>
                          {data.swornMembers.map((member)=> 
                           <span> {member} <br/></span>     )}
                        </div>
                   </div>
                )
            })}
           
        </div>
    
    

  )
}
 

export default Houses;