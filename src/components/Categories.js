import React, {useEffect,useState} from 'react';
import loadingbar from '../images/loadingbar.gif';
import { Link } from 'react-router-dom';
import CocktailCategory from './CategoriesAllComponents/CocktailCategory';
import CocktailGlass from './CategoriesAllComponents/CocktailGlass';
import ChanpagneFlute from './CategoriesAllComponents/ChanpagneFlute';
import Alcoholic from './CategoriesAllComponents/Alcoholic';




function Categories() {
 

  const [getOrdinaryList, setOrdinaryList] = useState([]);
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
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
            const json = await response.json();

            setOrdinaryList(json.drinks.map(function(item){
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

  console.log(getOrdinaryList);

  const handleSingleData = (idDrink)=>
  {
     
  }

  return (
    <>

        <div className="banner-container">
        <h1>On Break</h1>
        <img src = "https://www.fontbrighton.co.uk/content/dam/oak-tree-pubs/common/images/2020/drinks-2020/highst-dn20-banner-cocktails.jpg.asset/1622123016520.jpg"
         alt = "banner"/>
       </div>
      <div>
       <div className="category-drinks-container">
       <h3 className="ord-title-tag">Ordinary Drinks</h3>

       <div className="loading-bar-container">
         {
           loading ? ( <img src={loadingbar}/>): (<div></div>)
         }
        

       </div>


      

      <div className="drinks-container">
        {
          getOrdinaryList.slice(0,getVisible).map((item,index)=>
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

                    <img src={item.strDrinkThumb}/>
                    <p className="drink-info">{item.strDrink}</p>


                    </div>
                  
                
                  </Link>
                </div>
            );
          })
        }

      </div>
        
      {getVisible < getOrdinaryList.length &&
             <button className="btn-load-more" onClick={()=>loadMore()} 
             type="button">View more</button>
          }

       </div>
       </div>

    <div className="newCategroy">
        <h3 className="title-tag"> Cocktails</h3>
    </div>

    <CocktailCategory />
    <div className="newCategroy">
        <h3 className="title-tag"> Cocktail Glasses</h3>
    </div>
    <CocktailGlass />

    <div className="newCategroy">
        <h3 className="title-tag"> Champagne_flute</h3>
    </div>
    <ChanpagneFlute />

    <div className="newCategroy">
        <h3 className="title-tag"> Alcoholic</h3>
    </div>
    <Alcoholic />

    
    </>
  );
}

export default Categories;