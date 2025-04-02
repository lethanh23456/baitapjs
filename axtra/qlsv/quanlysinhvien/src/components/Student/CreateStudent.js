import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

function CreateStudent() {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const checkIdExists = async (id) => {
        const response = await fetch(`http://localhost:3000/students/${id}`);
        if (response.ok) {
            const student = await response.json();
            return student ? true : false; 
        } else {
            return false; 
        }
    };

    const isGpaValid = (gpa) => {
        const gpaValue = parseFloat(gpa);
        return gpaValue >= 0.0 && gpaValue <= 4.0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const idExists = await checkIdExists(data.id);
        if (idExists) {
            Swal.fire({
                icon: 'error',
                title: 'ID đã tồn tại',
                text: 'ID này đã được sử dụng, vui lòng chọn ID khác.',
                showConfirmButton: true
            });
            return; 
        }
        if (!isGpaValid(data.gpa)) {
            Swal.fire({
                icon: 'error',
                title: 'GPA không hợp lệ',
                text: 'GPA phải nằm trong khoảng từ 0.0 đến 4.0',
                showConfirmButton: true
            });
            return; 
        }

        fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                setShowModal(false);
                Swal.fire({
                    icon: "success",
                    title: "Bạn đã tạo mới thành công",
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.reload();
            }
        });
    };

    return (
        <>
            <button onClick={openModal}>Thêm sv</button>
            

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>
                                    <input type='text' name='id' value={data.id} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Mã sinh viên</td>
                                <td>
                                    <input type='text' name='studentCode' value={data.studentCode} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Họ tên</td>
                                <td>
                                    <input type='text' name='fullName' value={data.fullName} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Tuổi</td>
                                <td>
                                    <input type='text' name='age' value={data.age} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Giới tính</td>
                                <td>
                                    <input type='text' name='gender' value={data.gender} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>GPA</td>
                                <td>
                                    <input type='text' name='gpa' value={data.gpa} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Quê quán</td>
                                <td>
                                    <input type='text' name='hometown' value={data.hometown} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="button" onClick={closeModal}>Hủy</button>
                                </td>
                                <td>
                                    <button type="submit">Tạo mới</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    );
}

export default CreateStudent;
