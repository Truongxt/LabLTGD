import { useEffect } from "react";
import { useState } from "react";

function TableDesign() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [editingRow, setEditingRow] = useState(null);

    const rowsPerPage = 5;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => setData(data.users));
    }, []);

    const handleEditClick = (row) => {
        setEditingRow(row);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setEditingRow(null);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className="table-design">
            <div className="overview" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                <img src="./Squares four 1.png" alt="" width={25} height={25} style={{ marginRight: 5 }} />
                <h2>Overview</h2>
            </div>

            <div className="list-card">
                <div className="card">
                    <div className="analyst">
                        <h3>Turnover</h3>
                        <h1>$92,405</h1>
                        <p><span style={{ color: "red" }}>🔺5.39%</span> period of change</p>
                    </div>
                    <div className="cart-icon">
                        <img src="./Button 1509.png" alt="" style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: "#EFF6FF" }}>
                    <div className="analyst">
                        <h3>Profit</h3>
                        <h1>$32,218</h1>
                        <p><span style={{ color: "red" }}>🔺 5.39%</span> period of change</p>
                    </div>
                    <div className="cart-icon">
                        <img src="./Button 1529.png" alt="" style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: "#EFF6FF" }}>
                    <div className="analyst">
                        <h3>New customer</h3>
                        <h1>298</h1>
                        <p><span style={{ color: "red" }}>🔺 5.39%</span> period of change</p>
                    </div>
                    <div className="cart-icon">
                        <img src="./Button 1530.png" alt="" style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>

            <div className="report">
                <div className="report-info">
                    <h2>Detailed report</h2>
                    <div className="report-button">
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>

                <div className="report-content">
                    <table id="myTable" className="display">
                        <thead>
                            <tr>
                                <th>CUSTOMER NAME</th>
                                <th>COMPANY</th>
                                <th>ORDER VALUE</th>
                                <th>ORDER DATE</th>
                                <th>ROLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((row, index) => (
                                <tr key={index}>
                                    <td><h3>{row.firstName} {row.lastName}</h3></td>
                                    <td>{row.company.name}</td>
                                    <td>${row.weight}</td>
                                    <td>{row.birthDate}</td>
                                    <td>{row.role}</td>
                                    <td style={{ cursor: "pointer" }} onClick={() => handleEditClick(row)}>✏️</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination" style={{ textAlign: "left", marginTop: "10px", display: "flex", justifyContent: "flex-end" }}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageClick(index + 1)}
                                style={{
                                    marginRight: 5,
                                    padding: "5px 10px",
                                    backgroundColor: currentPage === index + 1 ? "#007BFF" : "#f0f0f0",
                                    color: currentPage === index + 1 ? "#fff" : "#000",
                                    border: "none",
                                    borderRadius: 4,
                                    cursor: "pointer"
                                }}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                {showModal && (
                    <div style={{
                        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        zIndex: 999
                    }}>
                        <div style={{
                            backgroundColor: "#fff", padding: 20, borderRadius: 8, width: 400
                        }}>
                            <h2>Edit Customer</h2>
                            <label>First Name: </label>
                            <input
                                type="text"
                                name="firstName"
                                value={editingRow.firstName}
                                style={{ width: "100%", marginBottom: 10 }}
                            />
                            <label>Last Name: </label>
                            <input
                                type="text"
                                name="lastName"
                                value={editingRow.lastName}
                                style={{ width: "100%", marginBottom: 10 }}
                            />
                            <label>Role: </label>
                            <input
                                type="text"
                                name="role"
                                value={editingRow.role}
                                style={{ width: "100%", marginBottom: 10 }}
                            />

                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                                <button onClick={handleModalClose} style={{ marginRight: 10 }}>Cancel</button>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TableDesign;
