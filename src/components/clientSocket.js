import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { SERVER_URL, SERVER_URL_RENDER } from '../Constants';

export const useClientSocket = ({paymentIntentId, enabled}) => {
  const ref = useRef(null);

  const joinRoomForPayment = (paymentIntentId) => {
    ref.current?.emit("join_payment_room", {
        payment_intent_id: paymentIntentId, 
        user_id: userId
    }, (response) => {
        console.log("server join payment room response", response); 
    });
  }

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const socket = io(SERVER_URL_RENDER, { })

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    socket.on("connect", () => {
        console.log("socket id BBBB:", socket.id)

        const engine = socket.io.engine;
        console.log("transport before upgrade:", engine.transport.name)

        engine.once("upgrade", () => {
           console.log("transport after upgrade:", engine.transport.name)
        })

        if (paymentIntentId) {
          joinRoomForPayment(paymentIntentId);
        }
    })

    socket.on('reconnect', () => {
      if (paymentIntentId) {
        joinRoomForPayment(paymentIntentId);
      }

      console.log('reconnected');
    });

    socket.on('message', (message) => {
      console.log('message:', message);
    });

    ref.current = socket;

    // disconnect after component unmount
    return () => socket.disconnect();
  }, [enabled, paymentIntentId]);

  return [joinRoomForPayment]
};