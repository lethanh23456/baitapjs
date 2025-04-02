const students = [
    {
      "id": "1",
      "studentCode": "SV001",
      "fullName": "Nguyễn Văn A",
      "age": 20,
      "gender": "Nam",
      "gpa": 3.5,
      "hometown": "Hà Nội"
    },
    {
      "id": "2",
      "studentCode": "SV002",
      "fullName": "Trần Thị B",
      "age": 22,
      "gender": "Nữ",
      "gpa": 3.8,
      "hometown": "Đà Nẵng"
    },
    {
      "id": "3",
      "studentCode": "SV003",
      "fullName": "Lê Minh C",
      "age": 21,
      "gender": "Nam",
      "gpa": 3.2,
      "hometown": "TP. Hồ Chí Minh"
    },
    {
      "id": "4",
      "studentCode": "123",
      "fullName": "le dinh thanh",
      "age": "13",
      "gender": "Nam",
      "gpa": "2",
      "hometown": "thanhhoa"
    },
    {
      "id": "5",
      "studentCode": "123",
      "fullName": "le dinh thanh",
      "age": "13",
      "gender": "Nam",
      "gpa": "2",
      "hometown": "thanhhoa"
    },
];
// lay danh sach
// const getStudents = students.map(item => {
//     return item.fullName;
// })

// console.log(getStudents);


// loc danh sach
// const filterStudents = (criteria) => {
//     return students.filter(item => {
//         let check1 = true;
//         if (item.gender !== criteria.gender) check1 = false;
//         let check2 = true;
//         if (item.hometown !== criteria.hometown) check2 = false;
//         let check3 = true;
//         if (parseFloat(item.gpa) < criteria.mingpa) check3 = false;
//         return check1 && check2 && check3;
//     });
// };

// const result = filterStudents({ gender: "Nữ", hometown: "Đà Nẵng", mingpa: 3.0 });
// console.log(result);

// săp xep
// const sortStudents = (key, order) => {
//     return students.sort((a,b) => {
//         if (order == "asc"){
//             return a[key] - b[key];
//         }
//         else {
//             return b[key] - a[key];
//         }
//     });
// };
// console.log(sortStudents('age','desc'));

// tìm kiếm theo tên
// const searchStudentByName = (name) => {
//     return students.filter(item => {
//         return item.fullName.toLowerCase().includes(name.toLowerCase());
//     });
// };

// const result = searchStudentByName("thanh");
// console.log(result);

// tinh toan và đếm 

// const calculateStatistics = () => {
//     const gpas = students.map(item => item.gpa);
//     const maxgpas = Math.max(...gpas);
//     const mingpas = Math.min(...gpas);
//     return parseFloat(maxgpas + mingpas) / 2;
// } 
// console.log(calculateStatistics());

// const dem = (gt) => {
//     let sl = 0 ;
//     const num = students.map(item => {
//         if (gt === item.gender) {
//             sl++;
//         }
//     })
//     return sl;
// }
// console.log(dem("Nam"));







