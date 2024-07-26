import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useSocket = (url: string): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(url);

    newSocket.on('connect', () => {
      console.log('Connected to socket server');
    });

    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, [url]);

  return socket;
};

export default useSocket;
