
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Create() {
    return (
                

      <div className="container my-1 w-10 border border-dark Create-page">
                <h1 className='text-center'>Quiz Creater</h1>
                <Form className="create-page-input-div">
                    <Form.Group controlId="quizTitle">
                        <Form.Label>Quiz Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="points">
                        <Form.Label>Points</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="timeAllowed">
                                <Form.Label>Time Allowed</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="points">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </div>
                    </div>
                    <h3 className='text-center'>Questions</h3>
                    <div className="container my-4 h-50 w-80  border border-dark ">
                        
                        <div className="my-4 d-flex justify-content-center">
                            <Button className='btn-primary' >Add Question</Button>
                        </div>
                    </div>
                    <div className="my-3 d-flex justify-content-end">
                        <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                        <Button className="btn-pramary mx-2">Create Quiz</Button>
                    </div>
                </Form>

            </div>
        )
    }
