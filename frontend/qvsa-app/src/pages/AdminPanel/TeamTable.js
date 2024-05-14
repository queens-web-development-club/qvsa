import React, { useState, useEffect } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import TeamModal from "./TeamModal";

const TABLE_HEAD = ["Name", "Role", ""];

const TeamTable = () => {
  const [data, setData] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/team");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const openEditModal = (data) => {
    setEditModalVisible(true);
    setRowData(data);
  };

  const openDeleteModal = (data) => {
    setDeleteModalVisible(true);
    setRowData(data);
  };

  const closeModal = () => {
    setEditModalVisible(false);
    setDeleteModalVisible(false);
  };

  const handleEdit = async (newData) => {
    try {
      // Make an HTTP PATCH request to update the row
      const response = await fetch(`http://localhost:8000/api/team/${newData._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
  
      if (response.ok) {
        console.log("Row updated successfully.");
        // Update the data in your frontend after successful update
        fetchData();
      } else {
        console.error("Failed to update row.");
      }
    } catch (error) {
      console.error("Error updating row:", error);
    }
  
    closeModal();
  };
  

  const handleDelete = async () => {
    try {
      // Make an HTTP DELETE request to delete the row
      const response = await fetch(`http://localhost:8000/api/team/${rowData._id}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        console.log("Row deleted successfully.");
        // Update the data in your frontend after successful deletion
        fetchData();
      } else {
        console.error("Failed to delete row.");
      }
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  
    closeModal();
  };

  
  // const handleDelete = () => {
  //   // Implement logic to delete the row
  //   console.log("Deleting row:", rowData);
  //   closeModal();
  // };

  return (
    <>
      <Card className="h-full w-5/8 overflow-scroll text-black">
        <table className="w-full min-w-max table-auto text-left">
          {/* Table header */}
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row._id}
                className={index % 2 === 0 ? "bg-blue-gray-50/50" : ""}
              >
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.role}
                  </Typography>
                </td>
                <td className="p-4">
                  <div className="flex flex-row gap-3">
                    <Button
                      size="sm"
                      variant="outlined"
                      onClick={() => openEditModal(row)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outlined"
                      onClick={() => openDeleteModal(row)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {/* Edit Modal */}
      {editModalVisible && (
        <TeamModal
          title="Edit"
          rowData={rowData}
          onClose={closeModal}
          onSave={handleEdit}
        />
      )}
      {/* Delete Modal */}
      {deleteModalVisible && (
        <TeamModal
          title="Delete"
          rowData={rowData}
          onClose={closeModal}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default TeamTable;
