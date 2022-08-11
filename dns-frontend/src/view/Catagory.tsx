
import React from "react";
import { Card, Button } from "react-bootstrap";

interface CardDetails {
    title:String;
    

}

const Catagory:React.FC=()=>{
    const cards: CardDetails[] = [
        {
          title: 'Randika',
        },
        {
          title: 'Chanaka',
        },
        {
          title: 'Padma',
        },
        {
          title: 'Supuni',
        },
        {
          title: 'Randika',
        },
        {
          title: 'Chanaka',
        },
        {
          title: 'Padma',
        },
        {
          title: 'Supuni',
        },
      ];
    return(

   <div className="host">
    {cards.map((card)=>{
        return(
            <Card className="itemCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" >Go somewhere</Button>
            </Card.Body>
          </Card>
        );
    })}
   </div>
    )
}
export default Catagory;