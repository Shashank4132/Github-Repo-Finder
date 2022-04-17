import './App.css';
import Header from "./Component/Header";
import Section from "./Component/Section";
import {useState, useEffect} from "react";
import axios from "axios";
import Pagination from "./Component/Pagination";

function App() {

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
    
  const totalItems = items.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    const fetchitems = async () => {
        const res = await axios.get('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=1&per_page=10');
        setItems(res.data.items);
    };
    fetchitems();
  }, []);

  return (
    <div className="App">
      <Header />
      <Section items={currentItems} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={paginate} />
    </div>
  );
}

export default App;
