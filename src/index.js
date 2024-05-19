import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const dataSkillList = [
  {
    name: "HTML+CSS",
    emoji: "😁",
    color: "blue",
  },
  {
    name: "JavaScript",
    emoji: "🤑",
    color: "yellow",
  },
  {
    name: "Git and GitHub",
    emoji: "👍",
    color: "grey",
  },
  {
    name: "React",
    emoji: "🤟",
    color: "green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return <img className="avatar" src="me.jpg" alt="My avatar" />;
};

const Intro = () => {
  return (
    <div className="intro">
      <h1>Eduardo Soares</h1>
      <p>
        Estudante de computação estudando para se tornar Full-stack developer.
        Gosto muito de jogar jogos e pegar uma prainha se alguém animar.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      {dataSkillList.map((skill) => (
        <Skill name={skill.name} emoji={skill.emoji} color={skill.color} />
      ))}
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
      {props.emoji}
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
