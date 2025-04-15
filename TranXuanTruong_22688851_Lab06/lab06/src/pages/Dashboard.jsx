import { useEffect, useState } from "react";

function Dashboard() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [editingRow, setEditingRow] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const rowsPerPage = 5;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        fetch("http://localhost:3000/orders")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const handleAddClick = () => {
        setEditingRow({
            customerName: "",
            company: "",
            orderValue: "",
            orderDate: "",
            status: "",
        });
        setIsEditing(false);
        setShowModal(true);
    };

    const handleEditClick = (row) => {
        setEditingRow(row);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setEditingRow(null);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setEditingRow(prev => ({ ...prev, [name]: value }));

    };

    const handleSave = () => {

            // Cập nhật
            fetch(`http://localhost:3000/orders/${editingRow.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editingRow),
            })
                .then(res => res.json())
                .then(updatedUser => {
                    const updatedData = data.map(item =>
                        item.id === updatedUser.id ? updatedUser : item
                    );
                    setData(updatedData);
                    handleModalClose();
                });

    };
    return (
        <div>
            <div style={{ marginBottom: 10, textAlign: "right" }}>
                <button onClick={handleAddClick}>➕ Add New</button>
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
                    {currentRows.map((row, index) => (
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
                        <h2>{isEditing ? "Edit Customer" : "Add New Customer"}</h2>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="customerName"
                            value={editingRow.customerName}
                            onChange={handleInputChange}
                            style={{ width: "100%", marginBottom: 10 }}
                        />
                        <label>Company: </label>
                        <input
                            type="text"
                            name="company"
                            value={editingRow.company}
                            onChange={handleInputChange}
                            style={{ width: "100%", marginBottom: 10 }}
                        />
                        <label>Order Value ($): </label>
                        <input
                            type="text"
                            name="orderValue"
                            value={editingRow.orderValue}
                            onChange={handleInputChange}
                            style={{ width: "100%", marginBottom: 10 }}
                        />
                        <label>Order Date: </label>
                        <input
                            type="date"
                            name="orderDate"
                            value={editingRow.orderDate}
                            onChange={handleInputChange}
                            style={{ width: "100%", marginBottom: 10 }}
                        />
                         <label>Status: </label>
                        <input
                            type="text"
                            name="status"
                            value={editingRow.status}
                            onChange={handleInputChange}
                            style={{ width: "100%", marginBottom: 10 }}
                        />

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                            <button onClick={handleModalClose} style={{ marginRight: 10 }}>Cancel</button>
                            <button onClick={handleSave}>{isEditing ? "Save" : "Create"}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard
