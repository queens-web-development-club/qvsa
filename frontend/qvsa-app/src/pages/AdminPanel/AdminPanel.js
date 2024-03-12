import React, { useState } from "react";
import TeamTable from "./TeamTable";
import EventsTable from "./EventsTable";
import { Button } from "@material-tailwind/react";
import ButtonModal from "./ButtonModal";
import EventsModal from "./EventsModal";

const AdminPanel = () => {
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showEventsModal, setShowEventsModal] = useState(false);

  const [teamModalData, setTeamModalData] = useState({});
  const [eventsModalData, setEventsModalData] = useState({});

  const openTeamModal = (data) => {
    setShowTeamModal(true);
    setTeamModalData(data);
  };

  const closeTeamModal = () => {
    setShowTeamModal(false);
  };

  const openEventsModal = (data) => {
    setShowEventsModal(true);
    setEventsModalData(data);
  };

  const closeEventsModal = () => {
    setShowEventsModal(false);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-center p-5">Admin Panel</h1>
      <div className="flex flex-col px-10 py-2">
        <div className="flex flex-row justify-between ">
          <h2 className="text-md font-semibold p-2">Team Data</h2>
          <div className="p-2">
            <Button onClick={() => openTeamModal({})}>Add New</Button>
          </div>
        </div>
        <TeamTable openModal={openTeamModal} />
      </div>
      <div className="flex flex-col px-10 py-2">
        <div className="flex flex-row justify-between">
          <h2 className="text-md font-semibold p-2">Events Data</h2>
          <div className="p-2">
            <Button onClick={() => openEventsModal({})}>Add New</Button>
          </div>
        </div>
        <EventsTable openModal={openEventsModal} />
      </div>
      {showTeamModal && (
        <ButtonModal
          title="Add New"
          rowData={teamModalData}
          onClose={closeTeamModal}
          onSave={(newData) => {
            // Logic to save team data
            console.log("Team Data Saved:", newData);
            closeTeamModal();
          }}
          onDelete={() => {
            // Logic to delete team data
            closeTeamModal();
          }}
        />
      )}
      {showEventsModal && (
        <EventsModal
          title="Add New"
          rowData={eventsModalData}
          onClose={closeEventsModal}
          onSave={(newData) => {
            // Logic to save events data
            console.log("Events Data Saved:", newData);
            closeEventsModal();
          }}
          onDelete={() => {
            // Logic to delete events data
            closeEventsModal();
          }}
        />
      )}
    </div>
  );
};

export default AdminPanel;
