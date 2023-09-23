import axios from "axios";
import React, { useEffect, useState } from "react";
const TrainSchedule = () => {
    const [trains, setTrains] = useState([]);
    useEffect(() => {
        axios
            .get("/api/trains?start_time=2023-03-08T12:00:00Z&end_time=2023-03-09T12:00:00Z")
            .then((response) => {
                setTrains(response.data);
            });
    }, []);
    return (
        <div>
            <h1>Train Schedule</h1>
            <table>
                <thead>
                    <tr>
                        <th>Train ID</th>
                        <th>Train Name</th>
                        <th>Departure Station</th>
                        <th>Arrival Station</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((train) => (
                        <tr key={train.train_id}>
                            <td>{train.train_id}</td>
                            <td>{train.train_name}</td>
                            <td>{train.departure_station}</td>
                            <td>{train.arrival_station}</td>
                            <td>{train.departure_time}</td>
                            <td>{train.arrival_time}</td>
                            <td>{train.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default TrainSchedule;