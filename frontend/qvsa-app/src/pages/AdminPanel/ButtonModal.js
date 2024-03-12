// ButtonModal.js
import React from "react";
import { Button } from "@material-tailwind/react";

const ButtonModal = ({ title, rowData, onClose, onSave, onDelete }) => {
  const [name, setName] = React.useState(rowData.name);
  const [role, setRole] = React.useState(rowData.role);

  const handleSave = () => {
    onSave({ ...rowData, name, role });
    onClose();
  };

  const handleDelete = () => {
    onDelete(rowData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white w-2/5 min-w-[40%] max-w-[40%] rounded-lg shadow-lg p-4">
        <div className="text-2xl font-semibold mb-4">{title}</div>
        <div className="mb-4">
          {title === "Edit" ? (
            <>
              <label htmlFor="name" className="block mb-1">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="role" className="block mb-1 mt-2">
                Role:
              </label>
              <input
                id="role"
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </>
          ) : (
            <>
              <p>
                Name: <strong>{rowData.name}</strong>
              </p>
              <p>
                Role: <strong>{rowData.role}</strong>
              </p>
              <p>Are you sure you want to delete?</p>
            </>
          )}
        </div>
        <div className="flex justify-end">
          <Button onClick={onClose} color="red" className="mr-2">
            Cancel
          </Button>
          {title === "Edit" ? (
            <Button onClick={handleSave}>Save</Button>
          ) : (
            <Button onClick={handleDelete} color="red">
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonModal;
