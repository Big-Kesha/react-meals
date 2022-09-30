import { CategoryItem } from "./CategoryItem";

function CategoryList({ categories = [] }) {
  return (
    <div className="list">
      {categories.map((category) => (
        <CategoryItem key={category.idCategory} category={category} />
      ))}
    </div>
  );
}

export { CategoryList };
