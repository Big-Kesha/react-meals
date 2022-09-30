import { Link } from "react-router-dom";

function Meal(props) {
  const { idMeal, strMeal, strMealThumb } = props.meal;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meals/${idMeal}`} className="btn teal darken-4">
          Open Meal
        </Link>
      </div>
    </div>
  );
}

export { Meal };
