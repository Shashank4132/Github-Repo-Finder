import React, { useState} from 'react';
import "./Section.css";

function Section({items}) {
    const [search, setSearch] = useState("");
    const [selectSort, setSelectSort] = useState("");
    const [selectOrder, setSelectOrder] = useState("");
    const handleSort = (e) => {
        let value1 = selectSort;
        let value2 = selectOrder;
        console.log(value1);
        if(value1==1){
            if(value2==3){
                items.sort((a, b) => (b.stargazers_count - a.stargazer_count))
            }    
        }
    }
  return (
    <div className="Section-container">
        <h2>Search Your Repository</h2>
        <div className="search">
            <input placeholder="Search:  Language or Name" type="text" onChange= {(e) => {setSearch(e.target.value)}} />
        </div>
        <h2>Filter Your Repository</h2>
        <div className="sort">
            <h2>Sort</h2>
            <select onChange = {(e) => setSelectSort(e.target.value)} >
                <option defaultValue={selectSort}></option>
                <option value="1" >Stars</option>
                <option value="2">Name</option>
            </select>
            <h2>Order</h2>
            <select onChange = {(e) => setSelectOrder(e.target.value)} >
                <option defaultValue={selectOrder}></option>
                <option value="3" >Ascending</option>
                <option value="4">Descending</option>
            </select>
        </div>
        <h2>Search Results</h2>
        <div className="git-cards"> 
            {items.filter((val) => {
                if(search == ""){
                    return val
                } 
                else if(val.name.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
                else if(val.language.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
            }).map(item => {
                return (
                <div className="card" >
                    <a href={`https://github.com/${item.name}`}>
                    <React.Fragment >
                        <h1>Name: {item.name}</h1>
                        <p>Description: {item.description}</p>
                        <p>Owner: {item.owner.login}</p>
                        <p>Stars: {item.stargazers_count}</p>
                        <p>Forks: {item.forks_count}</p>
                        <p>Language: {item.language}</p>
                    </React.Fragment>
                    </a>
                </div>
                )
            })}        
        </div>
    </div>
  )
}

export default Section;