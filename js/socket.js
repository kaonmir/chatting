class ChatSocket extends WebSocket {
  constructor(wsUri) {
    super(wsUri);
    super.onopen = this.onopen;
    super.onclose = this.onclose;
    super.onmessage = this.onmessage;
    super.onerror = this.onerror;

    this.callbacks = {
      open: (data) => {
        console.log(data);
      },
    };
  }

  onopen(e) {
    console.log("onOpen");
    this.send(JSON.stringify({ event: "open", data: "I'm Sony" }));
  }

  onclose(e) {
    console.log("onClose()");
  }

  onmessage(e) {
    const message = JSON.parse(e.data);
    console.log(e);
    this.callbacks[message.event](message.data);
  }

  onerror(e) {
    console.log("Error");
  }

  setCallback(event, callback) {
    this.callbacks[event] = callback;
  }
}

export default ChatSocket;
