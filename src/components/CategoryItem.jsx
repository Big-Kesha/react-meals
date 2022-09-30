import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props.category;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategoryDescription} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/categories/${strCategory}`} className="btn teal darken-4">
          Open Category
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
