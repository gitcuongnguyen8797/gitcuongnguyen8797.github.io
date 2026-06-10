const projects = [
    {
        id: "personal-ai-assistant",
        name: "Personal AI Assistant",
        company: "",
        period: "-",
        role: "Tech leader, fullstack developer",
        teamSize: 1,
        status: "Enhancing",
        domain: "Chat Bot",
        summary: "This project uses Ollama locally to build a personal AI assistant capable of answering questions based on my experience.",
        link: "https://gitcuongnguyen8797.github.io/",
        highlights: [
            "The project utilizes Ollama to run a Large Language Model (LLM) locally, ensuring data privacy and full control over information processing.",
            "Leveraged LangChain to design conversation flows, core logic, and memory management for the AI assistant",
            "Integrated Redis for storing and retrieving conversation history, improving response quality and enabling personalized interactions.",
            "Developed the user interface using Next.js, delivering a smooth and user-friendly experience for end users.",
            "Built CI/CD using GitHub Actions to automate testing and deployment, ensuring rapid iteration and continuous improvement.",
            "The frontend is hosted on GitHub Pages for easy deployment and accessibility."
        ],
        responsibilities: [
            "Researched and selected appropriate technologies (Ollama, LangChain, Redis) to build a local AI assistant that meets my needs for privacy and functionality.",
            "Designed and implemented the core architecture of the AI assistant, including conversation flow, memory management, and integration with the LLM.",
            "Developed the frontend interface using Next.js, ensuring a responsive and intuitive user experience.",
            "Set up CI/CD pipelines with GitHub Actions to automate testing and deployment, enabling rapid iteration and continuous improvement of the assistant's capabilities."
        ],
        techs: ["Ollama", "Langchain", "Redis", "Python", "NextJS", "FastAPI", "WebSocket"],
        isPersonal: true,
    }
];

export default projects;
