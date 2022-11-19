import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
import { FetchURL } from "../FetchLocation";

function MainPage() {
    let [allItems, setAllItems] = useState([]);
    let [itemsToDisplay, setItemsToDisplay] = useState([])

    useEffect(() => {
        let getAllItems = async () => {
            await fetch(FetchURL + "/get-items")
                .then(resp => resp.json())
                .then(data => setAllItems(data));
        }
        getAllItems()
    }, [])

    useEffect(() => {
        setItemsToDisplay(allItems.map(n => {
            return <Card name={n.name} cost={n.cost} imagePath={n.image_url} key={n.id} id={n.id} />
        }))
    }, [allItems])

    // let array = ["item1", "item2", "item3"]
    // sessionStorage.setItem("itemList", JSON.stringify(array))
    // console.log(sessionStorage.getItem("itemList"));
    // console.log(JSON.parse(sessionStorage.getItem("itemList"))[0])

    return (
        <div>
            <NavBar />
            <h1>Welcome to the ECommerce Store!</h1>
            <div className="item-container">
                {itemsToDisplay}
            </div>
        </div>
    )
}

export default MainPage;