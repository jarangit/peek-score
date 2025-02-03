/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16A34A", // สีหลัก (เช่น สีสนามหญ้า)
        secondary: "#1E40AF", // สีน้ำเงิน (สำหรับลีกยุโรป)
        background: {
          DEFAULT: "#202022", // พื้นหลัง Light Mode
          dark: "#202022", // พื้นหลัง Dark Mode
        },
        text: {
          DEFAULT: "#1E293B", // ข้อความปกติ
          dark: "#E5E7EB", // ข้อความใน Dark Mode
        },
        score: {
          win: "#16A34A", // สีเขียวเมื่อทีมชนะ
          lose: "#DC2626", // สีแดงเมื่อทีมแพ้
          draw: "#F59E0B", // สีเหลืองเมื่อเสมอ
        },
        team: {
          home: "#3B82F6", // สีน้ำเงินสำหรับทีมเจ้าบ้าน
          away: "#EF4444", // สีแดงสำหรับทีมเยือน
        },
      },
    },
  },
  plugins: [],
};
