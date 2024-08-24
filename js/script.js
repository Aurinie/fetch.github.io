document.addEventListener("DOMContentLoaded", () => {
  fetch("json/data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("container");
      data.students.forEach((student) => {
        const studentInfo = document.createElement("p");
        studentInfo.textContent = `${student.name} ${student.lastname}`;
        container.appendChild(studentInfo);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});