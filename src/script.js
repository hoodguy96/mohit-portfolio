document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { name: "Project 1", description: "Built using JavaScript and Spring Boot." },
        { name: "Project 2", description: "Microservices-based architecture." },
        { name: "Project 3", description: "Implemented with React and Node.js." },
        { name: "Project 4", description: "Utilized Docker and Kubernetes." },
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectList.appendChild(div);
    });
});