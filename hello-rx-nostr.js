import { createRxNostr, createRxForwardReq } from "rx-nostr";
import { verifier, seckeySigner } from 'rx-nostr-crypto';
import WebSocket from "ws";

const rxNostr = createRxNostr({
  verifier,
  websocketCtor: WebSocket,
});

rxNostr.setDefaultRelays([
  "wss://yabu.me",
  "wss://relay.damus.io",
]);

const rxReq = createRxForwardReq();

const subscription = rxNostr.use(rxReq).subscribe((packet) => {
  // これがあなたのアプリケーションです！
  console.log(packet);
});

// kind1 event を待ち受けるために REQ メッセージを発行します。
rxReq.emit({ kinds: [1] });

// 10 秒後に CLOSE メッセージを送信します。
setTimeout(() => {
  subscription.unsubscribe();
}, 10 * 1000);

