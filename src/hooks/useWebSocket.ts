import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // ✅ เชื่อมต่อไปที่ NestJS

export function useWebSocket(key: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    socket.on(key, (newData) => {
      console.log("🔥 New data received:", newData);
      setData(newData);
    });

    return () => {
      socket.off(key);
    };
  }, []);

  return data;
}
