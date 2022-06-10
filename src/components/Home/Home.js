import React, { useState } from 'react';
import FoodApi from './FoodApi';
import './Home.css';
const Home = () => {
    const [foods, setFoods] = useState(FoodApi);
    const filterItem = (catagory) =>{
        const UpdatedList = FoodApi.filter((currentElement)=>{
            return currentElement.catagory === catagory;
        });
        setFoods(UpdatedList);
    }
    return (
        <div>
            <nav>
            <button onClick={()=> setFoods(FoodApi)}>Home</button>
            <button onClick={()=> filterItem("Breakfast")}>Breakfast</button>
            <button onClick={()=> filterItem("Lunch")}>Lunch</button>
            <button onClick={()=> filterItem("Dinner")}>Dinner</button>
        </nav>
        <div className='all-food-container'>
            {
                foods.map(food => <Food key={food.id} food={food}></Food>)
            }
        </div>
        </div>
    );
};

function Food(props){
    const {id, name, img, title, catagory} = props.food;
    return(
        <div className='food-container'>
            {name}
            <h1>ID:{id}</h1>
            <img style={{height:'7rem', width:'10rem'}} src={img} alt="" />
            <p>{title}</p>
            <p>Catagory:{catagory}</p>
        </div>
    )
}

export default Home;