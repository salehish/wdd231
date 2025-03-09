const courses = [
    { name: 'Course 1', completed: true, credits: 3 },
    { name: 'Course 2', completed: false, credits: 3 },
];

function displayCourses(filter) {
    const courseListDiv = document.getElementById('courseList');
    const filteredCourses = filter ? courses.filter(course => course.name.includes(filter)) : courses;
    courseListDiv.innerHTML = ''; 
    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.textContent = course.name;
        courseCard.className = course.completed ? 'completed' : 'not-completed';
        totalCredits += course.credits;
        courseListDiv.appendChild(courseCard);
    });

    const creditsInfo = document.createElement('p');
    creditsInfo.textContent = `Total Credits: ${totalCredits}`;
    courseListDiv.appendChild(creditsInfo);
}

displayCourses();