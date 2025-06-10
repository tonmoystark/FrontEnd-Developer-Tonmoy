let frontEndData = [
    {frontEnd : "Javascript", imgF : "./frontend/icons8-javascript.svg"},
    {frontEnd : "Typescript", imgF : "./frontend/icons8-typescript.svg"},
    {frontEnd : "React", imgF : "./frontend/icons8-react-native.svg"},
    {frontEnd : "Next JS", imgF : "./frontend/nextjs-svgrepo-com.svg"},
    {frontEnd : "Redux", imgF : "./frontend/icons8-redux.svg"},
    {frontEnd : "Tailwind CSS", imgF : "./frontend/icons8-tailwindcss.svg"},
    {frontEnd : "GSAP", imgF : "./frontend/greensock-svgrepo-com.svg"},
    {frontEnd : "Bootstrap", imgF : "./frontend/icons8-bootstrap.svg"},
    {frontEnd : "SASS", imgF : "./frontend/icons8-sass-avatar.svg"},
];

let backEndData = [
    {backEnd : "Node js", imgB : "./backend/icons8-nodejs.svg"},
    {backEnd : "Express js", imgB : "./backend/icons8-express-js.svg"},
    {backEnd : "Nest js", imgB : "./backend/nestjs-svgrepo-com.svg"},
];

let dataBase = [
    {database : "MySQL", imgD : "./database/icons8-mysql.svg"},
    {database : "PostgreSQL", imgD : "./database/icons8-postgresql.svg"},
    {database : "MongoDB", imgD : "./database/mongodb-svgrepo-com.svg"},
]

let tools = [
    {tool : "Git", imgT : "./tools/git-svgrepo-com.svg"},
    {tool : "Docker", imgT : "./tools/docker-svgrepo-com.svg"},
    {tool : "Aws", imgT : "./tools/aws-svgrepo-com.svg"},
]


// Data arrays remain the same...

function createTechSection(containerClass, data, propertyName, imgProperty) {
    const container = document.querySelector(`.${containerClass}`);
    
    data.forEach(item => {
        const techItem = document.createElement("div");
        techItem.className = "tech-item";
        
        const img = document.createElement("img");
        img.src = item[imgProperty];
        img.alt = item[propertyName];
        
        const title = document.createElement("div");
        title.className = "techNames";
        title.textContent = item[propertyName];
        
        techItem.appendChild(img);
        techItem.appendChild(title);
        container.appendChild(techItem);
    });
}

// Create all sections
createTechSection("front", frontEndData, "frontEnd", "imgF");
createTechSection("backEnd", backEndData, "backEnd", "imgB");
createTechSection("baseInfo", dataBase, "database", "imgD");
createTechSection("gadget", tools, "tool", "imgT");


document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        const image = project.querySelector('.project-image');
        
        project.addEventListener('mouseenter', () => {
            image.style.opacity = '1';
            image.style.transform = 'translateX(0)';
        });
        
        project.addEventListener('mouseleave', () => {
            image.style.opacity = '0';
            image.style.transform = 'translateX(20px)';
        });
    });
});

//making rain

function createFallingDots() {
    const container = document.getElementById('container');
    const colors = ['#00F050', '#DEDEDE', '#ffffff']; // Green, light gray, white
    
    // Create 50 dots (adjust number as needed)
    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        // Random properties for each dot
        const size = Math.random() * 4 + 2; // 2-6px
        const duration = Math.random() * 5 + 5; // 5-10 seconds
        const delay = Math.random() * 5; // 0-5 seconds
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Position randomly across the viewport width
        const leftPos = Math.random() * 100;
        
        // Apply styles
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${leftPos}%`;
        dot.style.backgroundColor = color;
        dot.style.animationDuration = `${duration}s`;
        dot.style.animationDelay = `${delay}s`;
        
        container.appendChild(dot);
        
        // Remove dot after animation completes to prevent DOM overload
        dot.addEventListener('animationend', function() {
            dot.remove();
            // Create a new dot to maintain constant flow
            createNewDot();
        });
    }
    
    function createNewDot() {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 5 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const leftPos = Math.random() * 100;
        
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${leftPos}%`;
        dot.style.backgroundColor = color;
        dot.style.animationDuration = `${duration}s`;
        
        container.appendChild(dot);
        
        dot.addEventListener('animationend', function() {
            dot.remove();
            createNewDot();
        });
    }
}

// Start the animation when page loads
window.addEventListener('load', createFallingDots);

// Add this to the end of your formula.js
document.addEventListener('DOMContentLoaded', function() {
    const boxButton = document.querySelector('.box');
    const container2 = document.querySelector('.container2');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Toggle sidebar
    boxButton.addEventListener('click', function(e) {
        e.stopPropagation();
        container2.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle menu icon animation
        this.classList.toggle('active');
    });
    
    // Close when clicking outside
    overlay.addEventListener('click', function() {
        container2.classList.remove('active');
        overlay.classList.remove('active');
        boxButton.classList.remove('active');
    });
    
    // Prevent clicks inside container2 from closing it
    container2.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    document.querySelector('.container2 .first button').addEventListener('click', function(e) {
    e.stopPropagation();
    container2.classList.remove('active');
    overlay.classList.remove('active');
    boxButton.classList.remove('active');
});
});

//button effect

// Update the button effect code to:
const btnEl = document.querySelector("#btn");

btnEl.addEventListener("mouseover", (e) => {
    const rect = btnEl.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    
    btnEl.style.setProperty("--posX", `${posX}px`);
    btnEl.style.setProperty("--posY", `${posY}px`);
});

//for animation

