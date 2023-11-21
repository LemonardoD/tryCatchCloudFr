import Pusher from "pusher-js";
const { VITE_PUSHER } = import.meta.env;

const pusher = new Pusher(VITE_PUSHER, {
	cluster: "eu",
});

export default pusher;
