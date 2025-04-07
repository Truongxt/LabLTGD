import { useEffect, useState } from "react";

function Dashboard() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [editingRow, setEditingRow] = useState(null);

    const rowsPerPage = 5;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const handleEditClick = (row) => {
        setEditingRow(row);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setEditingRow(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingRow(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/users/${editingRow.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editingRow),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to update user");
                }
                return res.json();
            })
            .then((updatedUser) => {
                const updatedData = data.map((item) =>
                    item.id === updatedUser.id ? updatedUser : item
                );
                setData(updatedData);
                handleModalClose();
            })
            .catch((error) => {
                console.error("Error updating user:", error);
                alert("Update failed!");
            });
    };
    return (
        <div>
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
                            onChange={handleInputChange}
                            style={{ width: "100%", marginBottom: 10 }}
                        />
                        <label>Last Name: </label>
                        <input
                            type="text"
                            name="lastName"
                            value={editingRow.lastName}
                            onChange={handleInputChange}
                            style={{ width: "100%", marginBottom: 10 }}
                        />
                        <label>Role: </label>
                        <input
                            type="text"
                            name="role"
                            value={editingRow.role}
                            onChange={handleInputChange}
                            style={{ width: "100%", marginBottom: 10 }}
                        />

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                            <button onClick={handleModalClose} style={{ marginRight: 10 }}>Cancel</button>
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard
