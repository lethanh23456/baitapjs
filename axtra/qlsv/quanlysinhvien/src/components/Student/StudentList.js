import { useEffect, useState } from "react";
import "./Student.scss";
import CreateStudent from "./CreateStudent";
import EditStudent from "./EditStudent";
import DeleteStudent from "./DeleteStudent";

function StudentList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch("http://localhost:3000/students");
            const result = await response.json();
            setData(result);
        };
        fetchApi();
    }, []); 

    return (
        <>
            <div className="student">
                <table className="student_table">
                    <thead>
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Họ và Tên</th>
                            <th>Tuổi</th>
                            <th>Giới Tính</th>
                            <th>Điểm</th>
                            <th>Quê Quán</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fullName}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.gpa}</td>
                                <td>{item.hometown}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="buttons">
                    <CreateStudent /> 
                    <EditStudent  /> 
                    <DeleteStudent />
                    <button className="ok">Lọc</button>
                    <button className="ok">Sắp xếp</button>
                </div>
            </div>
        </>
    );
}

export default StudentList;
