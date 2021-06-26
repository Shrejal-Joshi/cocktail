import React, {useEffect,useState} from 'react';
import loadingbar from '../../images/loadingbar.gif';

import { Link } from 'react-router-dom';


function CocktailGlass() {
 

  const [getCocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [getVisible, setVisible] = useState(8);

  const loadMore = () =>
  {
    setVisible(getVisible => getVisible + 8);
  }

  
  useEffect(()=>
  {
      (async function() {
        try {
            setLoading(true);
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass');
            const json = await response.json();

            setCocktailList(json.drinks.map(function(item){
              return {
                strDrink : item.strDrink,
                strDrinkThumb : item.strDrinkThumb,
                idDrink : item.idDrink,

              }
            }));
            setLoading(false);


        }catch(e)
        {
          console.error(e);
        }
      })();
      
  }, []);

  console.log(getCocktailList);

 

  return (
    <>

      
       <div className="category-drinks-container">
       

       <div className="loading-bar-container">
         {
           loading ? ( <img src={loadingbar} alt="loading"/>): (<div></div>)
         }
        

       </div>


      

      <div className="drinks-container">
        {
          getCocktailList.slice(0,getVisible).map((item,index)=>
          {
            return(
              
              
              <div className="single-drink-container" key={index} >
               <Link to ={
                {
                  pathname:'/singledrink',
                  idDrink : item.idDrink
          
                }
             
              }>
                
                <div className="image-container" >

                    <img src={item.strDrinkThumb} alt="drink"/>
                    <p className="drink-info">{item.strDrink}</p>


                    </div>
                  
                
                  </Link>
                </div>

               
            );
          })
        }

      </div>
        
      {getVisible < getCocktailList.length &&
             <button className="btn-load-more" onClick={()=>loadMore()} 
             type="button">View more</button>
          }

       </div>

    
    </>
  );
}

export default CocktailGlass;