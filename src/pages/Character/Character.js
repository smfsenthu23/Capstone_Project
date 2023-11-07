import {useState, useEffect} from "react";
import axios from 'axios';
//import {useParams} from "react-router-dom";
//import {useNavigate} from "react-router-dom";
//import { NavLink } from "react-router-dom";
import styles from "./Character.module.css";
import { useLocation } from "react-router-dom";


function Character()
{
   const [character, setCharacter] = useState([]);
   //const {id} = useParams();
   const location  = useLocation();
   const {urlSrc} = location.state; //`https://www.anapioficeandfire.com/api/characters/${props.id}`
   console.log(urlSrc);
   useEffect(()=>{
    axios.get(urlSrc)
    .then((response)=>{
        console.log(response)
        setCharacter(response.data);
    })
   },[])

   return(

    <div className={styles["character__main"]}>
        
        <div className={styles["character__infoContainer"]}>
          <h2>Character Details</h2>
          <div className={styles["character__info"]}>
            <div className={styles["character__infoHeader"]}>
            Name: {character.name}
            </div>
            <div className={styles["character__info"]}>
                          <span>Gender: </span>
                          <span>{character.gender}</span>
                        </div>
                        <div className={styles["character__info"]}>
                          <span>Culture: </span>
                          <span>{character.culture}</span>
                        </div>
                        
                        <div className={styles["character__info"]}>
                          <span>Born: </span>
                          <span>{character.born}</span>
                        </div>
                        <div className={styles["character__info"]}>
                          <span>Died: </span>
                          <span>{character.died}</span>
                        </div>
                        <div className={styles["character__info"]}>
                          <span>Titles: </span>
                          <span>{character.titles}</span>
                        </div>
                        <div className={styles["character__info"]}>
                          <span>Father: </span>
                          <span>{character.father}</span>
                        </div>
                        <div className={styles["character__info"]}>
                          <span>Mother: </span>
                          <span>{character.mother}</span>
                        </div>
                        <div className={styles["character__info"]}>
                          <span>Spouse: </span>
                          <span>{character.spouse}</span>
                        </div>
                        <div className={styles["character__info"]}>
                          <span>Allegiances: </span>
                          <span>{character.allegiances}</span>
                        </div>
                        <div className={styles["character__info"]}>
                          <span>Url: </span>
                          <span>{character.url}</span>
                        </div>
           </div>
        </div>
    </div>
   );
   }

export default Character;