import io from "socket.io-client";

const socket = io("http://192.168.0.17:3001");

export default socket;
