// EventsTable.js
import React, { useState } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import EventsModal from "./EventsModal";

const TABLE_HEAD = [
  "Event Name",
  "Description",
  "Year and Month",
  "Images",
  "",
];

const TABLE_ROWS = [
  {
    eventName: "Event 1",
    eventDescription: "Description for Event 1",
    yearMonth: "2024 March",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  },
  {
    eventName: "Event 2",
    eventDescription: "Description for Event 2",
    yearMonth: "2024 April",
    images: ["image4.jpg", "image5.jpg"],
  },
  {
    eventName: "Event 3",
    eventDescription: "Description for Event 3",
    yearMonth: "2024 May",
    images: ["image6.jpg", "image7.jpg", "image8.jpg"],
  },
];

const EventsTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [modalType, setModalType] = useState(null);

  const openModal = (data, type) => {
    setShowModal(true);
    setRowData(data);
    setModalType(type);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSave = (newData) => {
    // Update row data with new values
    const updatedRows = TABLE_ROWS.map((row) =>
      row.eventName === newData.eventName ? newData : row
    );
    console.log("Updated rows:", updatedRows);
    // update the state or send the updated data to an API
    closeModal();
  };

  const handleDelete = (row) => {
    // Implement logic to delete the row
    console.log("Deleting row:", row);
    closeModal();
  };

  return (
    <>
      <Card className="h-full w-full overflow-scroll">
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
                key={row.eventName}
                className={index % 2 === 0 ? "bg-blue-gray-50/50" : ""}
              >
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.eventName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.eventDescription}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.yearMonth}
                  </Typography>
                </td>
                <td className="p-4">
                  {row.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`Image ${i}`}
                      className="w-12 h-12 rounded-full mr-2"
                    />
                  ))}
                </td>
                <td className="p-4">
                  <div className="flex flex-row gap-3">
                    <Button
                      size="sm"
                      variant="outlined"
                      onClick={() => openModal(row, "edit")}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outlined"
                      onClick={() => openModal(row, "delete")}
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
      {/* Modal */}
      {showModal && (
        <EventsModal
          title={modalType === "edit" ? "Edit" : "Delete"}
          rowData={rowData}
          onClose={closeModal}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default EventsTable;
