import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPlaylists } from "../../store/playlist";
import { useSelector } from "react-redux";

const CreatePlaylist = ({ history }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    useEffect(() => {
      const addPlaylist = async () => {
        const response = await fetch("/api/playlists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "New Playlist",
            description: "Write a description here",
            userId: currentUser.id,
            photoUrl: "",
          }),
        });
        const data = await response.json();
        dispatch(fetchPlaylists());
        history.push(`/playlists/${data.id}`);
      };
      addPlaylist();
    }, [dispatch, history]);
  
    return <p>Creating Playlist...</p>;
  };
  
  export default CreatePlaylist;