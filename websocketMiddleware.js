let websocket = null;

const websocketMiddleware = (() => {
	const onOpen = (ws, store) => evt => {
		// store.dispatch('action');
	};

	const onClose = (ws, store) => evt => {
		// store.dispatch('action');
	};

	const onError = (ws, store) => evt => {
		// store.dispatch('action');
	};

	const onMessage = (ws, store) => evt => {
		var msg = JSON.parse(evt.data);
		// add a case for each message type
		switch (msg.type) {
			default:
				console.log(`Unknown message type: ${msg.type}`);
				break;
		}
	};

	return store => next => action => {
		switch (action.type) {
			case 'websocket connect':
				websocket = new WebSocket(action.payload); // action.payload = ws url
				websocket.onmessage = onMessage(websocket, store);
				websocket.onclose = onClose(websocket, store);
				websocket.onerror = onError(websocket, store);
				websocket.onopen = onOpen(websocket, store);
				break;
			case 'websocket open':
				break;
			case 'websocket close':
				break;
			case 'websocket error':
				break;
			case 'websocket message':
				websocket.send(JSON.stringify(action.payload));
				break;
			default:
				return next(action);
		}
	};
})();

export default websocketMiddleware;
