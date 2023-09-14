function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
      return function () {
        return seat;
      };
    }
  
    const students = [];
  
    for (let i = 0; i < numbersOfStudents; i++) {
      const seatNumber = i + 1;
      students.push(studentSeat(seatNumber));
    }
  
    return students;
  }
  
  const classRoom = createClassRoom(10);

  console.log(classRoom[0]());
  console.log(classRoom[3]());
  console.log(classRoom[9]());
  
  