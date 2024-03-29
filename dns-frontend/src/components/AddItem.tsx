import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddItem: React.FC = () => {
  const [fileSelected, setFileSelected] = useState<File | undefined>();
  const [itemName, setItemName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [catagory, setCatagory] = useState("");

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFileSelected(fileList[0]);
  };

  const uploadFile = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    
    if (fileSelected) {
      const formData = new FormData();
      formData.append("file", fileSelected);
      formData.append("upload_preset", "dnshardware");
      setLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dgtucgpop/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const file = await res.json();
      
      setImage(file.secure_url);
      setLoading(false);
      console.log(catagory);
     
      try{
         axios.post("http://localhost:5000/item", {
            itemName: itemName,
            description: description,
            catagory: catagory,
            image: image
          })
          .then((response) => {
            console.log(image);
            console.log(response);
          }).catch((exception) => {
            console.log(exception);
        });
      }
      catch(error){
        console.error(error); 
      }
     
    }
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(e) => {
              setItemName(e.target.value);
            }}
            placeholder="enter Item Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            as="textarea"
            required
            rows={3}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicSelect">
          <Form.Label>Select Catagory:</Form.Label>
          <Form.Control
            as="select"
            size="sm"
            value={catagory}
            required
            onChange={(e) => {
              console.log(e.target.value);
              setCatagory(e.target.value);
            }}
          >
            <option value="1">Building</option>
            <option value="2">Paint</option>
            <option value="3">Lightning and Electrical</option>
            <option value="4">Bathroom and Plumber</option>
            <option value="5">Other</option>
            
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Item Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            required
            name="photo"
            multiple={false}
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button
          className="btn btn-primary"
          variant="contained"
          onClick={uploadFile}
        >
          Add Item
        </Button>
      </Form>

    </React.Fragment>
  );
};
export default AddItem;
