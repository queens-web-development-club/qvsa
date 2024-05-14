// EventsModal.js
import React from "react";
import { Button } from "@material-tailwind/react";

const EventsModal = ({ title, rowData, onClose, onSave, onDelete }) => {
  const [eventName, setEventName] = React.useState(rowData.eventName);
  const [eventDescription, setEventDescription] = React.useState(rowData.eventDescription);
  const [yearMonth, setYearMonth] = React.useState(rowData.yearMonth);

  const handleSave = () => {
    onSave({
      ...rowData,
      eventName,
      eventDescription,
      yearMonth
    });
    onClose();
  };

  const handleDelete = () => {
    onDelete(rowData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm text-black">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white w-2/5 min-w-[40%] max-w-[40%] rounded-lg shadow-lg p-4">
        <div className="text-2xl font-semibold mb-4">{title}</div>
        <div className="mb-4">
          <label htmlFor="eventName" className="block mb-1">
            Event Name:
          </label>
          <input
            id="eventName"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            readOnly={title === "Delete"}
          />
          <label htmlFor="eventDescription" className="block mb-1 mt-2">
            Event Description:
          </label>
          <textarea
            id="eventDescription"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            readOnly={title === "Delete"}
          />
          <label htmlFor="yearMonth" className="block mb-1 mt-2">
            Year and Month:
          </label>
          <input
            id="yearMonth"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            value={yearMonth}
            onChange={(e) => setYearMonth(e.target.value)}
            readOnly={title === "Delete"}
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={onClose} color="red" ripple="light" className="mr-2">
            Cancel
          </Button>
          {title === "Edit" ? (
            <Button onClick={handleSave} ripple="light">
              Save
            </Button>
          ) : (
            <Button onClick={handleDelete} ripple="light" color="red">
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsModal;
