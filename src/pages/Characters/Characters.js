import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from "./Characters.module.css";
import {Link} from "react-router-dom";
import { parseLinkHeader } from "@web3-storage/parse-link-header";



function Characters()
{ 
    const { page } = useParams();
    const pageNumber = page ? parseInt(page, 10) : 1;
   const [characters, setCharacters] = useState([]);
   const [parsed, setParsed] = useState();
   useEffect(()=>{
    axios.get(`https://www.anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=10`)
    .then((response)=>{
        setCharacters(response.data)
        setParsed(parseLinkHeader(response.headers['link']))
    })
   },[page])

    const hasPrevious = pageNumber > 1;
    const lastPgNum = (parsed !== undefined? parsed.last.page : pageNumber);
    const hasNextOrLast = (lastPgNum != pageNumber);
    return(
         
          <div  className={styles["main__container"]}>
             <div className="pagination">
                {(pageNumber > 2) && (
                  <Link to="/characters/1"><span>First</span></Link>
                )}
                {hasPrevious && (
                  <Link to={`/characters/${pageNumber - 1}`}><span>⬅️</span></Link>
                )}
                {hasNextOrLast && (
                 <Link to={`/characters/${pageNumber + 1}`}><span>➡️</span></Link>
                )}
                {(hasNextOrLast && (pageNumber!=lastPgNum-1)) && (
                  <Link to={`/characters/${lastPgNum}`}><span>Last</span></Link>
                )}
            </div>
            
            {
              characters.map((data,id)=>{
                return(
                   
                    <Link to="/character" state={{urlSrc:data.url}}>
                        <div key={id} className={styles["characters__infoContainer"]}>
                       <div className={styles["characters__info"]}>
                        {data.name!="" ? <span>Name: {data.name}</span> : <span>Aliases: {data.aliases}</span>}
                        </div> 
                        <div className={styles["characters__info"]}>
                          <span>Gender: {data.gender}</span>
                          
                          {data.gender == "Female" ? '👩' : '👨'}
                        </div>
                        <div className={styles["characters__info"]}>
                          <span>Culture: {data.culture}</span>
                        </div>
            
                   </div>
                   </Link>

                )
            })}
           
           
        </div>
       

    )
}


export default Characters;