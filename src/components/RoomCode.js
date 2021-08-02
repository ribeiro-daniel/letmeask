import React from "react";
import copyImg from "../assets/copy.svg";
import "../styles/room-code.scss";

export function RoomCode(props) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="copy room code" />
      </div>
      <span>Sala: {props.code}</span>
    </button>
  );
}
