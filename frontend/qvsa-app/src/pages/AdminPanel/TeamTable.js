// TeamTable.js
import React, { useState } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import tempImage from "..//..//assets/memberProfile.jpg";
import ButtonModal from "./ButtonModal";

const TABLE_HEAD = ["Image", "Name", "Role", ""];

const TABLE_ROWS = [
  {
    image: tempImage,
    name: "John Michael",
    role: "Director",
  },
  {
    image: tempImage,
    name: "Alexa Liras",
    role: "Co-Director",
  },
  {
    image: tempImage,
    name: "Laurent Perrier",
    role: "Executive",
  },
  {
    image: tempImage,
    name: "Michael Levi",
    role: "Events",
  },
  {
    image: tempImage,
    name: "Richard Gran",
    role: "Events",
  },
];

const TeamTable = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [rowData, setRowData] = useState(null);

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

  const handleEdit = (newData) => {
    // Implement logic to save edited data
    console.log("Edited data:", newData);
    closeModal();
  };

  const handleDelete = () => {
    // Implement logic to delete the row
    console.log("Deleting row:", rowData);
    closeModal();
  };

  return (
    <>
      <Card className="h-full w-5/8 overflow-scroll">
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
            {TABLE_ROWS.map((row, index) => (
              <tr
                key={row.name}
                className={index % 2 === 0 ? "bg-blue-gray-50/50" : ""}
              >
                <td className="p-4">
                  <img
                    src={row.image}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                </td>
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
        <ButtonModal
          title="Edit"
          rowData={rowData}
          onClose={closeModal}
          onSave={handleEdit}
        />
      )}
      {/* Delete Modal */}
      {deleteModalVisible && (
        <ButtonModal
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
