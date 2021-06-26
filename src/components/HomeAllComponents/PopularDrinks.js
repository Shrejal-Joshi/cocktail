import React , {useState, useEffect}from 'react';
import loadingbar from '../../images/loadingbar.gif';



function PopularDrinks() {

  const [getDataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=>
  {
      (async function() {
        try {
            setLoading(true);
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
            const json = await response.json();

            setDataList(json.drinks.map(function(item){
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



  return (
    <>
      
      <div className="popular-drinks-container" >

      <div className="loading-bar-container">
         {
           loading ? ( <img src={loadingbar}/>): (<div></div>)
         }
        

       </div>

     
       <div className="margarita-grid-container">
        {
          getDataList.map((item,index)=>
          {
            return(
              
              
              <div className="margrita-drink-container" key={index} >
              
                <div className="margarita-img-container" >

                    <img src={item.strDrinkThumb}/>
                  
                    </div>

                    <p className="margrita-info">{item.strDrink}</p>


                  
                
                 
                </div>

               
            );
          })
        }

      </div>


      </div>
      
    </>
  );
}

export default PopularDrinks;