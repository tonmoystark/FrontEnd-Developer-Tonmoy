let frontEndData = [
    { frontEnd: "Javascript", imgF: "./frontend/icons8-javascript.svg" },
    { frontEnd: "Typescript", imgF: "./frontend/icons8-typescript.svg" },
    { frontEnd: "React", imgF: "./frontend/icons8-react-native.svg" },
    { frontEnd: "Next JS", imgF: "./frontend/nextjs-svgrepo-com.svg" },
    { frontEnd: "Redux", imgF: "./frontend/icons8-redux.svg" },
    { frontEnd: "Tailwind CSS", imgF: "./frontend/icons8-tailwindcss.svg" },
    { frontEnd: "GSAP", imgF: "./frontend/greensock-svgrepo-com.svg" },
    { frontEnd: "Bootstrap", imgF: "./frontend/icons8-bootstrap.svg" },
    { frontEnd: "SASS", imgF: "./frontend/icons8-sass-avatar.svg" },
];

let backEndData = [
    { backEnd: "Node js", imgB: "./backend/icons8-nodejs.svg" },
    { backEnd: "Express js", imgB: "./backend/icons8-express-js.svg" },
    { backEnd: "Nest js", imgB: "./backend/nestjs-svgrepo-com.svg" },
];

let dataBase = [
    { database: "MySQL", imgD: "./database/icons8-mysql.svg" },
    { database: "PostgreSQL", imgD: "./database/icons8-postgresql.svg" },
    { database: "MongoDB", imgD: "./database/mongodb-svgrepo-com.svg" },
];

let tools = [
    { tool: "Git", imgT: "./tools/git-svgrepo-com.svg" },
    { tool: "Docker", imgT: "./tools/docker-svgrepo-com.svg" },
    { tool: "Aws", imgT: "./tools/aws-svgrepo-com.svg" },
];

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

// Start the animation when page loads
window.addEventListener('load', () => {
    createFallingDots();
    initMainContent();
});

// Hover effect on project images
document.addEventListener('DOMContentLoaded', function () {
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

// Rain dots animation
function createFallingDots() {
    const container = document.getElementById('container');
    const colors = ['#00F050', '#DEDEDE', '#ffffff'];

    for (let i = 0; i < 50; i++) {
        createNewDot();
    }

    function createNewDot() {
        const dot = document.createElement('div');
        dot.className = 'dot';

        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const leftPos = Math.random() * 100;

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${leftPos}%`;
        dot.style.backgroundColor = color;
        dot.style.animationDuration = `${duration}s`;
        dot.style.animationDelay = `${delay}s`;

        container.appendChild(dot);

        dot.addEventListener('animationend', function () {
            dot.remove();
            createNewDot();
        });
    }
}

// Sidebar toggle
document.addEventListener('DOMContentLoaded', function () {
    const boxButton = document.querySelector('.box');
    const container2 = document.querySelector('.container2');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    function closeMenu() {
        container2.classList.remove('active');
        overlay.classList.remove('active');
        boxButton.classList.remove('active');
    }

    boxButton.addEventListener('click', function (e) {
        e.stopPropagation();
        container2.classList.toggle('active');
        overlay.classList.toggle('active');
        this.classList.toggle('active');
    });

    overlay.addEventListener('click', closeMenu);
    container2.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    document.querySelector('.container2 .first button').addEventListener('click', closeMenu);

    const menuItems = document.querySelectorAll('.container2 ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            if (!this.parentElement.classList.contains('header')) {
                closeMenu();
            }
        });
    });
});

// Button hover effect
const btnEl = document.querySelector("#btn");

btnEl?.addEventListener("mouseover", (e) => {
    const rect = btnEl.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    btnEl.style.setProperty("--posX", `${posX}px`);
    btnEl.style.setProperty("--posY", `${posY}px`);
});

// Loader + Initialize Main Content
function initMainContent() {
    const container3 = document.querySelector('.container3');

    setTimeout(() => {
        container3.classList.add('hide');

        setTimeout(() => {
            container3.remove();

            // Now render tech stacks
            createTechSection("front", frontEndData, "frontEnd", "imgF");
            createTechSection("backEnd", backEndData, "backEnd", "imgB");
            createTechSection("baseInfo", dataBase, "database", "imgD");
            createTechSection("gadget", tools, "tool", "imgT");

        }, 800);
    }, 3000);
}
