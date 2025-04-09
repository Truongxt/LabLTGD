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
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td >
                                    <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                        <img src={row.img} alt="" style={{ marginRight: 10 }} />
                                        <h3>{row.customerName}</h3>
                                    </div>
                                </td>
                                <td>{row.company}</td>
                                <td>${row.orderValue}</td>
                                <td className="orderDate">{row.orderDate}</td>
                                <td style={{ textAlign: "center" }}><span className={`status ${row.status === "New" ? "new" : row.status === "Completed" ? "complete" : "process"}`}>
                                    {row.status}
                                </span></td>
                                <td style={{ cursor: "pointer" }}>✏️</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Dashboard
