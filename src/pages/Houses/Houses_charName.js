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
   const [names, setNames] = useState([]);
   
   var swnames = [];
   const memberUrlToName = new Map();
   useEffect(()=>{
    axios.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=5`)
    .then((response)=>{
      
        setHouses(response.data)
        setParsed(parseLinkHeader(response.headers['link']))

        houses.map(house=>{
          house.swornMembers.map(url=>{
              axios.get(url).then(resp=> {
                
                //swnames.push(resp.data.name)
                memberUrlToName.set(getCharacterId(url), resp.data.name)
                //console.log(swnames)
                //setNames(swnames);
                //memberUrlToName.set(getCharacterId(url), resp.data.name);
                
              });
          });
       });
       console.log(memberUrlToName)
       setNames([memberUrlToName])
    })
    
    /*houses.map(house=>{
      house.swornMembers.map(url=>{
          axios.get(url).then(resp=> {
            
            swnames.push(resp.data.name)
            console.log(swnames)
            setNames(resp.data.name);
            //memberUrlToName.set(getCharacterId(url), resp.data.name);
            
          });
      });
   });
   setNames(swnames)
   */
  console.log(names) 
  },[])

   const hasPrevious = pageNumber > 1;
   const lastPgNum = (parsed !== undefined? parsed.last.page : pageNumber);
   const hasNextOrLast = (lastPgNum != pageNumber);
   /*const memberUrlToName = new Map();
   houses.map(house=>{
      house.swornMembers.map(url=>{
          axios.get(url).then(resp=> {
            //memberUrlToName['a'+getCharacterId(url)] = resp.data.name;
            memberUrlToName.set(getCharacterId(url), resp.data.name)
          });
      });
   }); */
   //console.log(memberUrlToName)
   //console.log(memberUrlToName.get("82"))
   
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
                          <b>SwornMembers </b>
                          {data.swornMembers.map((member)=> {
                           <span> {names[0].get(getCharacterId(member))} <br/></span>     })}
                      </li>
                      </ul>
                    </div>
                )
            })}

        </div>
    
    

  )
}
 
function getCharacterId(url){
  return url.substring(url.lastIndexOf('/')+1)
}

export default Houses;