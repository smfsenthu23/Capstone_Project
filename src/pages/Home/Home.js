import styles from "./Home.module.css";


function Home()
{
    return (
        <>
          
          <div className={styles["container"]}>
          
          <img  src={require("../../Images/Img.png")} className={styles["App-img"]} alt="mainImg"/>
          
          <div>
          <p>
          Game of Thrones is an American fantasy drama television series created by David Benioff and 
          D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by 
          George R. R. Martin, the first of which is A Game of Thrones. The show was shot in the United Kingdom, 
          Canada, Croatia, Iceland, Malta, Morocco, and Spain. It premiered on HBO in the United States on 
          April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons.
          </p>

          </div>
          </div>

         </>
    
    )
};

export default Home;

