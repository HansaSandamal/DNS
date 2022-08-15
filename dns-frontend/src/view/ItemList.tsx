import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

type ItemListProps = {
  items: {
    itemName: String;
    description: String;
    catagory: String;
    image: String;
  }[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const [filter, setFilter] = useState("");

  const onItem2Clicked = () => {
    setFilter("");
    setFilter("2");
  };
  const onItemClicked = () => {
    setFilter("");
    setFilter("1");
  };
  const onItem3Clicked = () => {
    setFilter("");
    setFilter("3");
  };
  const onItem4Clicked = () => {
    setFilter("");
    setFilter("4");
  };
  const onItem5Clicked = () => {
    setFilter("");
    setFilter("5");
  };
  const onItem6Clicked = () => {
    setFilter("");
    setFilter("6");
  };
  const onResetClicked = () => {
    setFilter("");
  };
  let itemsToDisplay = items;
  if (filter) {
    itemsToDisplay = itemsToDisplay.filter((item) =>
      item.catagory.startsWith(filter)
    );
  }
  const itemListItems = itemsToDisplay.map((item) => (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`${item.image}`}
        style={{ width: "95%", height: "100px" }}
      />
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
          Building
        </Button>
        <Button className="btn btn-light" onClick={onItem2Clicked}>
          Paint
        </Button>
        <Button className="btn btn-light" onClick={onItem3Clicked}>
          Lightning and Electricals 
        </Button>
        <Button className="btn btn-light" onClick={onItem4Clicked}>
          Bathroom and Plumbing
        </Button>
        <Button className="btn btn-light" onClick={onItem5Clicked}>
          Tools
        </Button>
        <Button className="btn btn-light" onClick={onItem6Clicked}>
          Other
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
