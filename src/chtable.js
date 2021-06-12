import React from 'react'
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill, BsPencil, BsCheck } from "react-icons/bs"

export default function chtable() {
    return (
        <div>
        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Text</th>
                    <th>is Correct</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                    
                    <tr>
                        <td></td>
                        <td>
                            <div className="text-success text-center"></div>
                        </td>
                        <td>
                            <div className="mx-4">
                                <Button variant="light "><BsPencil></BsPencil></Button>
                                <Button variant="light "><BsFillTrashFill></BsFillTrashFill></Button>
                            </div>
                        </td>
                    </tr>
                    
                
            </tbody>
        </Table>

            
        </div>
    )
}
