import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
    const [activityLog, setActivityLog] = useState([]);
    const [dailyResetData, setDailyResetData] = useState([]);
    const [labelsX, setLabelsX] = useState([]);

    // Hàm tạo dữ liệu tăng/giảm hàng ngày
    const generateDailyData = (activityLog) => {
        let data = [];

        // Duyệt qua từng ngày trong activityLog để tính tổng số giờ học
        for (let i = 0; i < activityLog.length; i++) {
            data.push(activityLog[i]); // Mỗi ngày là số giờ học thực tế
        }

        return data;
    };

    // Giả sử đây là dữ liệu nhận từ API hoặc input
    const activityLogData = [1, 0, 1, 3, 0, 0, 1];
    const days = activityLogData.length; // Số ngày được lấy từ độ dài của dữ liệu

    // Tạo dữ liệu tăng/giảm theo logic
    useEffect(() => {
        setActivityLog(activityLogData);
        const dailyData = generateDailyData(activityLogData);
        setDailyResetData(dailyData);

        const labels = Array.from({ length: days }, (_, i) => `Ngày ${i + 1}`);
        setLabelsX(labels);
    }, []);

    // Dữ liệu cho biểu đồ
    const data = {
        labels: labelsX,
        datasets: [
            {
                label: "Hoạt động theo giờ (tăng/giảm mỗi ngày)",
                data: dailyResetData,
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(75,192,192,1)",
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };

    // Cấu hình hiển thị biểu đồ
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Biểu đồ giờ học tăng/giảm hàng ngày",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Thời gian (Ngày)",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Giờ học",
                },
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
