import React, { useState } from "react";
import {
  Button,
  Form,
} from "react-bootstrap";

const AddItem: React.FC = () => {
  const [fileSelected, setFileSelected] = useState<File | undefined>();
  const [itemName, setItemName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [catagory, setCatagory] = useState("");
  const handleSelect = (e: any) => {
    setCatagory(e.target.value);
    console.log(setCatagory);
  };
  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFileSelected(fileList[0]);
  };

  const uploadFile = function (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    if (fileSelected) {
      const formData = new FormData();
      formData.append("image", fileSelected, fileSelected.name);
      console.log(fileSelected.name);
      console.log(itemName);
      console.log(description);
      console.log(catagory);
    }
  };

  return (
    <React.Fragment>


      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
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
            onChange={(e) => {
              console.log(e.target.value);
              setCatagory(e.target.value);
            }}
          >
            <option value="1">Catagory-1</option>
            <option value="2">Catagory-2</option>
            <option value="3">Catagory-3</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Item Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            
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
