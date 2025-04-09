import { useEffect, useState } from "react";

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/orders")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    console.log(data)

    return (
        <div>
            <div>
                <div style={{ marginBottom: 10, textAlign: "right" }}>
                </div>
                <table id="myTable" className="display">
                    <thead>
                        <tr >
                            <th>CUSTOMER NAME</th>
                            <th>COMPANY</th>
                            <th>ORDER VALUE</th>
                            <th>ORDER DATE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>

            </div>
            </div>
    )
}

            export default Dashboard
