import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import { Loader } from "../components/Loader";

function MealPage() {
  const { id } = useParams();

  const [meal, setMeal] = useState([]);

  const { strMealThumb, strInstructions, strMeal, strYoutube, strArea, strCategory } = meal;

  useEffect(() => {
    getMealById(id).then((data) => {
      setMeal(data.meals[0]);
    });
  }, [id]);

  return (
    <>
      {!meal.idMeal ? (
        <Loader />
      ) : (
        <div className="meal">
          <div className="meal_header">
            <img className="responsive-img meal_img" src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Category: {strCategory}</p>
            <p>Area: {strArea}</p>
            <table className="highlight centered ingredients">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(meal).map((key) => {
                  if (key.includes("strIngredient") && meal[key]) {
                    return (
                      <tr key={key}>
                        <td>{meal[key]}</td>
                        <td>{meal[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
          <p className="flow-text">{strInstructions}</p>
          <h3>Youtube video</h3>
          {strYoutube ? (
            <iframe title={strMeal} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} allowfullscreen="1" />
          ) : (
            <p>Not available</p>
          )}
        </div>
      )}
    </>
  );
}

export { MealPage };
