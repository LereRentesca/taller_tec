import Product from "../components/product";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";
import "./styles/catalog.css";

function Catalog(){

    const [products,setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [prodsToDisplay,setProdsToDisplay] = useState([]);

    useEffect(function(){
        cargarCatalogo();
    },[]);

    async function cargarCatalogo(){
        let service = new DataService();
        let prods = await service.getProducts();
        setProducts(prods);
        let cats = ["dairy","shopping"];
        setCategory(cats);
        setProdsToDisplay(prods);
    }

    function filter(category){
        let list=[];
        for (const item of products) {
            if(item.category===category){
                list.push(item);
            }
        }
        setProdsToDisplay(list);
    }

    function clearFilter(){
        setProdsToDisplay(products);
    }

    return (
        <div className="catalog">
            <h1>Hello check our stuff</h1>
            <h5>We have {products.length} new products for you</h5>
            <br/>
            <div className="buttons">
                <button onClick={clearFilter} className="btn btn-dark btn-filter">All</button>
                {category.map((c)=>(<button onClick={()=>filter(c)} className="btn btn-secondary btn-filter">{c}</button>))}
            </div>
            <br/>
            {prodsToDisplay.map((p)=>(
                <Product key={p._id} data={p}></Product>
            ))}
        </div>
    );
}
export default Catalog;