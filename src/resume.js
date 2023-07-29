let resumeData = {

    "linkedinId":"https://www.linkedin.com/in/jiayao-li-6ab037268/",
    "email":"jasonli121@berkeley.edu",
    "github":"https://github.com/jasonli1212",

    "name": "Jason",
    "role": ["Software Developer", 2000, "Software ", 2000, "Data Analyst", 2000],
    "headerPic":"https://avatars.githubusercontent.com/u/56161062?v=4",

    "aboutme":"I graduated from UC Berkeley, double major in Computer Science and Statistics. \
                I'm interested in AI/ML, computer vision and Robotics. \
                 I'm a fast learner, hard worker, and an attention to detail person.",

    "profilepic":"https://avatars.githubusercontent.com/u/56161062?v=4",

    "skills":["Python", "Java", "C/C++", "RISC-V", "R", "SQL", "GoLang"],
    "toolsTech": ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "OpenCV", "PyTorch&Tensorflow", "SciPy", "OpenCV", "HTML", "CSS", "ROS", "Git", "Bash", "Powershell", "React", "NodeJS"],

    "projects":[
        {
            "name":"NUMC",
            "date":"Jan 2021 - May 2021",
            "thumbnail": "./img/numC.jpg",
            "shortDescription":"Build a fast matrix-computation program mimicking NumPy",
            "fullDescription":["Implemented basic matrix operations in C. \
                                Utilized Intel’s Intrinsic functions and OpenMP Parallelism to \
                                 speed up matrix operations up to 99.2 times faster in Comprehensive benchmark.",
                               "For power function, it reached 800x speed up."
                            ],
            "imgs":[
                {
                    "src": "./img/numC.jpg",
                },
                ],
            "skills":["C", "Intel Intrinsic", "OpenMP", "Matrix Computation", "Benchmark"],
        },
        {
            "name":"Pintos",
            "date":"May 2022 - Aug 2022",
            "shortDescription":"Leading a team of 4 to designed and programmed Pintos Operating System",
            "fullDescription":["Implemented a process controller (MLFQ) to control the flow of threads, and file syscalls.",
                              "Enhanced the cache read and write system with a write-back clock algorithm to optimize calls to memory"
                              ],
            "thumbnail": "./img/pintos.jpg",
            "imgs":[
                {
                    "src": "./img/pintos.jpg",
                },
                ],
            "url":"https://cs162.org/static/proj/pintos-docs/",
            "skills":["C", "Operating System", "MLFQ", "Cache", "Clock Algorithm", "Memory", "File System", "Process Controller"],
        },
        {
            "name":"Pac-Man",
            "date":"May 2021 - Aug 2022",
            "shortDescription":"Designed and programmed an AI player to win in a Pacman Maze Game",
            "fullDescription":["Implemented effective searching algorithm including DFS, BFS, UCS & A* Search.",
                               "Added multiagent feature with minimax (Alpha-Beta pruning) and expectimax search."
                              ],
            "thumbnail": "./img/pacman1.jpg",
            "imgs":[
                {
                    "src": "./img/pacman1.jpg",
                },
                {
                    "src": "./img/pacman2.jpg",
                }
                ],
            "url":"http://ai.berkeley.edu/project_overview.html",
            "skills":["Python", "AI", "Search", "DFS", "BFS", "UCS", "A* Search", "Minimax", "Alpha-Beta Pruning", "Expectimax", "Multiagent"],
        },
        {
            "name":"Rubik-Sawyer",
            "date":"Oct 2022 - Dec 2022",
            "shortDescription":"Worked in a team to designed and build a system using the Sawyer arm to solve a Rubik’s Cube.",
            "fullDescription":["Utilizing OpenCV to local the Rubik’s Cube and detect the state of the cube.",
                               "Collaborated with team to customize grippers and the mechanics of the robot arm.",
                               "Implemented algorithms for robot arm to manipulate the Rubik’s Cube with smallest deviation."
                              ],
            "thumbnail": "./img/rcs.jpg",
            
            "imgs":[
                {
                    "src": "./img/rcs_c.jpg",
                },
                {
                    "src": "./img/rcs_a.jpg",
                },
                {
                    "src": "./img/rcs_g.jpg",
                },
                {
                    "src": "./img/rcs_p.jpg",
                },
                {
                    "src": "./img/rcs_c.jpg",
                }
                ],
            "url":"https://sites.google.com/berkeley.edu/rcs/home",
            "skills":["Python", "OpenCV", "Robotics", "ROS", "Mechanics", "Computer Vision", "Inverse Kinematics", "Forward Kinematics", "Path Planning", "PID Control"],
        },
        {
            "name":"React Portfolio",
            "date":"July 2023",
            "shortDescription":"Designed and built a personal portfolio website using React.",
            "fullDescription":["Implemented a personal portfolio website using React.",
                                    "Utilized React Hooks to manage state and lifecycle methods.",
                                    "Three.js to create 3D animation.",
                                    "Framer Motion to create animations and page transitions.",
                                    "Styled Components to style the website.",
                            ],
                            
            "thumbnail": "/img/ava.png",
            "imgs":[
                {
                    "src": "/img/ava.png",
                },
            ],
        },

    ],
}

export default resumeData