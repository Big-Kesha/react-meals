import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setfilteredCategories] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSeach = (str) => {
    setfilteredCategories(categories.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())));
    navigate(pathname + `?search=${str}`);
  };

  console.log(search);
  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories);
      setfilteredCategories(data.categories.filter((item) => item.strCategory.toLowerCase().includes(search.split("=")[1].toLowerCase())));
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSeach} />
      {!categories.length ? <Loader /> : <CategoryList categories={filteredCategories} />}
    </>
  );
}

export { Home };
