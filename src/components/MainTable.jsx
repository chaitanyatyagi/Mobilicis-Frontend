import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function MainTable() {
    const data = useSelector(state => state.data)
    console.log(data)
    if (data.length) {
        return (
            <Table striped bordered hover variant="dark" style={{ width: "90vw", margin: "auto", marginTop: "20px" }} responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                        <th>INCOME</th>
                        <th>CITY</th>
                        <th>CAR</th>
                        <th>QUOTE</th>
                        <th>PHONE PRICE</th>
                        {
                            data[0].doc ? (
                                <>
                                    <th>AVERAGE INCOMME</th>
                                    <th>NO OF USERS</th>
                                </>) : ""
                        }
                    </tr>
                </thead>
                <tbody style={{ fontSize: "12px" }}>
                    {
                        data[0].doc
                            ?
                            data.map((ele, key) => (
                                ele.doc.map((e, key) => (
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.first_name}</td>
                                        <td>{e.last_name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.gender}</td>
                                        <td>${e.income}</td>
                                        <td>{e.city}</td>
                                        <td>{e.car}</td>
                                        <td>{e.quote}</td>
                                        <td>Rs{e.phone_price}</td>
                                        <td>${ele.avgIncome}</td>
                                        <td>{ele.count}</td>
                                    </tr>
                                ))
                            ))
                            :
                            data.map((ele, key) => (
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.first_name}</td>
                                    <td>{ele.last_name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.gender}</td>
                                    <td>${ele.income}</td>
                                    <td>{ele.city}</td>
                                    <td>{ele.car}</td>
                                    <td>{ele.quote}</td>
                                    <td>Rs{ele.phone_price}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
        );
    }
    else {
        return (
            <div style={{ fontSize: "2em", fontWeight: "900", marginTop: "30px" }}>Please Select Any One Entry !</div>
        )
    }
}

export default MainTable;