import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Card, Button } from "react-bootstrap";

type ItemProps = {
  //   itemName: string;

  itemDetails:{itemName: string,description: string };
  indexNo: Number;
  // discription:string;
};

const Item: React.FC<ItemProps> = (props) => {
  const {itemDetails,indexNo} = props;
  //console.log(indexNo);
  //console.log(itemDetails.itemName);
  console.log(itemDetails.itemName);

  return (
    <React.Fragment>
      {/* <span>
        {itemName}
        {discription}
      </span> */}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{itemDetails.itemName}</Card.Title>
          <Card.Text>
            {itemDetails.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
export default Item;
