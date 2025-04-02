import { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Modal from 'react-modal';

function DeleteStudent() {
    const [showModal, setShowModal] = useState(false);
    const [studentId, setStudentId] = useState('');

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
        setStudentId(''); 
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

    const handleDelete = async () => {
        const idExists = await checkIdExists(studentId);
        if (!idExists) {
            Swal.fire({
                icon: 'error',
                title: 'ID không tồn tại',
                text: 'Không tìm thấy sinh viên với ID này. Vui lòng kiểm tra lại.',
                showConfirmButton: true
            });
            return;
        }

        Swal.fire({
            title: "Bạn chắc chắn muốn xóa?",
            text: "Bạn sẽ không thể khôi phục lại dữ liệu này!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "yes,delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/students/${studentId}`, {
                    method: 'DELETE',
                })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            title: "Đã xóa!",
                            text: "Sinh viên đã được xóa thành công.",
                            icon: "success",
                        });
                        window.location.reload();
                    }
                });
            }
        });
    };

    return (
        <>
            <button onClick={openModal}>Xóa</button>

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <form onSubmit={(e) => e.preventDefault()}>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>
                                    <input 
                                        type="text"
                                        name="id"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="button" onClick={closeModal}>
                                        Hủy
                                    </button>
                                </td>
                                <td>
                                    <button type="button" onClick={handleDelete}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    );
}

export default DeleteStudent;
