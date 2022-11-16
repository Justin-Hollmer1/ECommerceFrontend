import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
import { FetchURL } from "../FetchLocation";

function MainPage() {
    let [allItems, setAllItems] = useState([]);
    let [itemsToDisplay, setItemsToDisplay] = useState([])

    // let allItems;
    // let getAllItems = async () => {
    //     await fetch("http://ec2-18-224-4-73.us-east-2.compute.amazonaws.com:8080/get-items")
    //         .then(resp => resp.json())
    //         .then(data => allItems = data);
    //     console.log(allItems);
    //     itemsToDisplay = allItems.map(n => {
    //         return <Card name={n.name} cost={n.cost} imagePath={n.image_url} />
    //     })
    //     console.log(itemsToDisplay)
    // }
    // getAllItems()
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
            return <Card name={n.name} cost={n.cost} imagePath={n.image_url} key={n.id} />
        }))
    }, [allItems])
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