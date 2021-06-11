
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Create() {
    return (
                

        <container>
            
        <div className="Create-page">
        <h4> Create a Quiz  </h4>    


        <div className="create-page-input-div">
        <Form>
        <Form.Group controlId="formTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control placeholder="Enter Title Here..." />
  </Form.Group>

  <Form.Group controlId="FormPoints">
    <Form.Label>Total Points</Form.Label>
    <Form.Control placeholder="ex 100" />
  </Form.Group>


  <Form.Row  className="Create-page-input"> 
    
        <Form.Label> Time Alotted (minutes) </Form.Label>
      <Form.Control placeholder="ex 10" />

      

  </Form.Row>
  

   </Form>

        </div>

            


        </div>
            


        </container>
    )
}
