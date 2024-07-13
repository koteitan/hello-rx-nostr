import { createRxNostr, createRxForwardReq } from "https://cdn.jsdelivr.net/npm/rx-nostr@latest/+esm";
import { verifier, seckeySigner } from 'https://cdn.jsdelivr.net/npm/rx-nostr-crypto@latest/+esm';

const logElement = document.getElementById('log');

function logMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('json-container');
    messageElement.textContent = message;
    logElement.appendChild(messageElement);
    logElement.scrollTop = logElement.scrollHeight;
}

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
    // JSON オブジェクトごとに新しい div を生成して追加
    const packetDiv = document.createElement('div');
    packetDiv.classList.add('json-container');

    // JSON オブジェクトのキーと値を整形して表示
    packetDiv.innerHTML = `
        <pre>${JSON.stringify(packet, null, 2)}</pre>
    `;
    
    // logElement に新しい div を追加
    logElement.appendChild(packetDiv);
});

// kind1 event を待ち受けるために REQ メッセージを発行します。
rxReq.emit({ kinds: [1] });

// 10 秒後に CLOSE メッセージを送信します。
setTimeout(() => {
    subscription.unsubscribe();
    logMessage('Subscription closed.');
}, 10 * 1000);

