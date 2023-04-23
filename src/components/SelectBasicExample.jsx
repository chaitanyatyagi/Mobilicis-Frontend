import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import { fetchProduct } from "../redux/action"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react";

function SelectBasicExample() {
    const [number, setNumber] = useState(0)
    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchProduct(number))
    }

    return (
        <Form style={{ width: "75vw", margin: "auto", marginTop: "20px", display: "flex", alignItems: "center", flexDirection: "column" }} onSubmit={handleSubmit}>
            <Form.Select aria-label="Default select example" value={number} onChange={(e) => setNumber(e.target.value)}>
                <option value="0">Entire data.</option>
                <option value="1">Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</option>
                <option value="2">Male Users which have phone price greater than 10,000.</option>
                <option value="3">Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</option>
                <option value="4">Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</option>
                <option value="5">Show the data of top 10 cities which have the highest number of users and their average income</option>
            </Form.Select>
            <Button variant="primary" type="submit" style={{ width: "100px", marginTop: "7px" }} onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default SelectBasicExample;