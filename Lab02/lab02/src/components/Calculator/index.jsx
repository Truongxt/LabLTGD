import { useState } from "react";
import "./style.css";
export default function Calculator() {
    const [rate, setRate] = useState("");
    const [invest, setInvest] = useState("");
    const [goal, setGoal] = useState("");
    const [result, setResult] = useState([]);

    const handleClick = () => {
        let temp = parseFloat(invest);
        let r = parseFloat(rate) / 100; // Chuyển % thành số thập phân
        let goalValue = parseFloat(goal);
        let currentYear = new Date().getFullYear(); // Lấy năm hiện tại


        if (temp > 0 && r > 0 && goalValue > temp) {
            let tempResults = [];
            let year = currentYear;

            while (temp < goalValue) {
                tempResults.push({ year, invest: temp.toFixed(2) });
                temp += temp * r;
                year++; // Tăng năm lên
            }

            tempResults.push({ year, invest: temp.toFixed(2) }); // Năm cuối khi đạt mục tiêu
            setResult(tempResults);
        } else {
            setResult([]);
        }
    };

    return (
        <>
            <div className="inputField">
                <input
                    type="number"
                    placeholder="Invest"
                    value={invest}
                    onChange={(e) => setInvest(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Rate (%)"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />
            </div>

            <div>
                <button onClick={handleClick}>Tính toán</button>

            </div>
            {result.length > 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Rate</th>
                            <th>Invest</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((item) => (
                            <tr key={item.year}>
                                <td>{item.year}</td>
                                <td>{rate}</td>
                                <td>{item.invest}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
