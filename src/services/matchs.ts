// src/services/matchService.ts
import mockData from './mock-match.json';

export const fetchMatchData = async () => {
   // จำลองการ fetch ข้อมูลจาก JSON
   return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 500); // เพิ่ม delay เพื่อจำลอง API response
  });
};