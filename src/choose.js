import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default function choose() {
    return (
        <div>
            <div className="container my-4 w-10 border border-dark">
                <Form className="create-page-input-div">
                    <Form.Group controlId="choice">
                        <Form.Label><h1>Enter Your Choice Here...</h1></Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder="Add Choice..." />
                    </Form.Group>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">Correct Option</label>
                    </div>

                    <div className="my-3 d-flex justify-content-end">
                        <Button className="mx-1 btn-danger" variant="outline-dark"> Cancel</Button>
                        <Button className="btn-pramary mx-1 " >Add Choice</Button>
                    </div>
                </Form>

            </div>
        </div>
    )
}
