import React, {useEffect, useState} from 'react';
import { useLocation} from "react-router-dom";
import loadingbar from '../images/loadingbar.gif';

function SingleDrink() {
    let location = useLocation();
    console.log(location.idDrink);
    const [getDrinkData, setDrinkData]  = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>
    {
        (async function()
        {
            try{
              setLoading(true);
              const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${location.idDrink}`)
              
              const json = await response.json();
              setDrinkData(json.drinks.map(function(item)
              {
                return {
                  strDrink : item.strDrink,
                  strDrinkThumb : item.strDrinkThumb,
                  strCategory : item.strCategory,
                  strAlcoholic : item.strAlcoholic,
                  strGlass : item.strGlass,
                  strInstructions : item.strInstructions,
                  strInstructionsDE : item.strInstructions,
                  strInstructionsIT : item.strInstructionsIT,
                  strIngredient1 : item.strIngredient1,
                  strIngredient2 : item.strIngredient2,
                  strIngredient3 : item.strIngredient3,
                  strIngredient4 : item.strIngredient4,
                  strIngredient5 : item.strIngredient5


                }
              }
              ))
              setLoading(false);

            }catch(e)
            {
              console.error(e);
            }
        })();
    },[]);
    console.log(getDrinkData);

  return (
    <div className="single-main-container">
       <div className="loading-bar-container">
         {
           loading ? ( <img src={loadingbar}/>): (<div></div>)
         }
        

       </div>


        <div className="singleDrink-container">

        
            {
              getDrinkData.map((item,index) =>
              {
                return (
                  <div key={index} className="singleDrink-info-container">
                    <div className="single-drink-img">

                      <img src = {item.strDrinkThumb} />

                    </div>
                    <div className="single-drink-details">
                          <article className="desc">
                            <h3>{item.strDrink} ( <span >{item.strCategory}</span> ) </h3>
                            
                          </article>

                          <div className="info">
                              <p>  {item.strAlcoholic}</p>
                              <p>Serve : {item.strGlass}</p>
                          </div>

                          <div className="drink-instruction">

                              <h6>Instructions</h6>
                              <ul className="instruction">
                                <li>{item.strInstructions}</li>
                                <li>{item.strInstructionsDE}</li>
                                <li>{item.strInstructionsIT}</li>
                              </ul>
                          </div>
                          <h6>Ingredients</h6>
                          <ul className="ingredients">

                              
                              <li>{item.strIngredient1}</li>
                              <li>{item.strIngredient2}</li>
                              <li>{item.strIngredient3}</li>
                              <li>{item.strIngredient4}</li>
                              <li>{item.strIngredient5}</li>

                            </ul>

                          

                      </div>

                     
                     
                </div>

                );
              }
              
              )
            }

               

        </div>
       
    </div>
  );
}

export default SingleDrink;