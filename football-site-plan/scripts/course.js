
const courses = [
  { code: "WDD 130", credits: 2, completed: true },
  { code: "WDD 131", credits: 2, completed: false },
  { code: "CSE 231", credits: 2, completed: true }
];

const container = document.getElementById("courses");
const creditsDiv = document.getElementById("credits");

function displayCourses(list) {
  container.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.textContent = course.code;
    div.className = course.completed ? "completed" : "not-completed";
    container.appendChild(div);
  });

  const total = list.reduce((sum, c) => sum + c.credits, 0);
  creditsDiv.textContent = ` The total Credits for courses listed above is : ${total}`;
}

document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("cse").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.includes("CSE")));
});

document.getElementById("wdd").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.includes("WDD")));
});


displayCourses(courses);