import React, { useState } from "react";
import Mealitem from "./MealItem";
import './style.css';
const Meal = () => {
    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState();
    const searchMeal = (e) => {
        if (e.key == "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res => res.json()).then(data => { setMeal(data.meals); setSearch("") })
        }
    }
    return (
        <>
        <div className="main">
            <div className="heading">
                <h1>Meal Finder</h1>
                <h4></h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} placeholder="Search for meals" />
            </div>
            <div className="container" >
                {
                    (Mymeal == null) ? <p className="notSearch">Not Found</p> :
                    // add a parameter index to provide unique key to each prop 
                        Mymeal.map((res,index) => {
                                return (
                                    <Mealitem  data={res} key={index} />)
                            }
                        )
                }
            </div>
        </div>
        </>
    )
}
export default Meal;
