let myInput = document.querySelector("#myInput");
    let submit = document.querySelector("#btn");
    let grade = document.querySelector("#grade");

    submit.addEventListener("click", function () {
      let marks = Number(myInput.value);

      if (marks > 100 || marks < 0 || isNaN(marks)) {
        grade.innerHTML = "❌ Invalid Marks";
        grade.className = "text-3xl mb-5 font-bold text-red-600";
      } 
      else if (marks > 90) {
        grade.innerHTML = "Grade 'O' 🏆";
        grade.className = "text-3xl mb-5 font-bold text-green-600";
      } 
      else if (marks >= 80) {
        grade.innerHTML = "Grade 'A'";
        grade.className = "text-3xl mb-5 font-bold text-green-500";
      } 
      else if (marks >= 70) {
        grade.innerHTML = "Grade 'B'";
        grade.className = "text-3xl mb-5 font-bold text-blue-500";
      } 
      else if (marks >= 60) {
        grade.innerHTML = "Grade 'C'";
        grade.className = "text-3xl mb-5 font-bold text-yellow-500";
      } 
      else if (marks >= 50) {
        grade.innerHTML = "Grade 'D'";
        grade.className = "text-3xl mb-5 font-bold text-orange-500";
      } 
      else if (marks >= 40) {
        grade.innerHTML = "Grade 'E'";
        grade.className = "text-3xl mb-5 font-bold text-red-400";
      } 
      else {
        grade.innerHTML = "Grade 'F' ❌";
        grade.className = "text-3xl mb-5 font-bold text-red-700";
      }
    });