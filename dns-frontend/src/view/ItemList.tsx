import { type } from "os";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

type ItemListProps = {
  //items:string[];
  items: {
    itemName: String;
    description: String;
    itemCat: String;
    itemImg: String;
  }[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  // const [shouldSort, setShouldSort] = useState(false);
  const [filter, setFilter] = useState("");

  // const onSortClicked = () => {
  //   setShouldSort(true);
  // };
  const onItem2Clicked = () => {
    setFilter("");
    setFilter("tool");
  };
  const onItemClicked = () => {
    setFilter("");
    setFilter("item");
  };
  const onResetClicked = () => {
    setFilter("");
  };
  let itemsToDisplay = items;
  if (filter) {
    itemsToDisplay = itemsToDisplay.filter((item) =>
      item.itemCat.startsWith(filter)
    );
  }
  const itemListItems = itemsToDisplay.map((item) => (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.itemName}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      <div className="btnGroup">
        <Button className="btn btn-light" onClick={onItemClicked}>
          Catagory1
        </Button>
        <Button className="btn btn-light" onClick={onItem2Clicked}>
          Catagory2
        </Button>
        <Button className="btn btn-light" onClick={onResetClicked}>
          All Items
        </Button>
      </div>
      <div className="list">{itemListItems}</div>

    </>
  );
};
export default ItemList;
