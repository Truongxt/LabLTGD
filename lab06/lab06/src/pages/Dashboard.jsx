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

    console.log(data)

    return (
        <div>
           
        </div>
    )
}

export default Dashboard
