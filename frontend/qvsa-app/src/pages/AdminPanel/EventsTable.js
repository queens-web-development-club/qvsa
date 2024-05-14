// EventsTable.js
import React, { useState, useEffect } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import EventsModal from "./EventsModal";

const TABLE_HEAD = [
  "Event Name",
  "Description",
  "Year and Month",
  "Images",
  "",
];

const EventsTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetchEventsData();
  }, []);

  const fetchEventsData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/events");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setEventsData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
    const updatedRows = eventsData.map((row) =>
      row._id === newData._id ? newData : row
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
      <Card className="h-full w-full overflow-scroll text-black">
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
            {eventsData.map((row, index) => (
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
                    {row.title}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.description}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {`${row.dateYear} ${row.dateMonth}`}
                  </Typography>
                </td>
                <td className="p-4">
                  {/* Render images */}
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
