import React from "react";

const CreatePlaylistModal = ({ handleCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <h2>Create a Playlist</h2>
        {/* Add your modal content here */}
      </div>
    </div>
  );
};

export default CreatePlaylistModal;