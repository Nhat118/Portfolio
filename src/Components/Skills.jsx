import React from "react";
import { DiMsqlServer } from "react-icons/di";
import { FaReact, FaJava, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiPython, SiCss3, SiBootstrap, SiTailwindcss } from "react-icons/si";

const section = {
  padding: "72px 16px",
  maxWidth: 1200,
  margin: "0 auto",
  color: "#eaeaea",
};

const heading = {
  fontSize: "2.2rem",
  color: "#6fcf97",
  marginBottom: 24,
  letterSpacing: 1,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
};

const card = {
  background: "#111",
  border: "1px solid #1f1f1f",
  borderRadius: 14,
  padding: 20,
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const row = { display: "flex", alignItems: "center", gap: 12 };

const levelStyle = (level) => ({
  color: level === "Expert" ? "#6fcf97" : level === "Advanced" ? "#a8e6cf" : "#bdbdbd",
  fontWeight: 600,
});

const SkillCard = ({ icon: Icon, name, years, level }) => (
  <div style={card}>
    <div style={row}>
      {typeof Icon === "function" ? (
        <Icon size={28} color="#6fcf97" />
      ) : (
        <div style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: "#163",
        }} />
      )}
      <h3 style={{ margin: 0 }}>{name}</h3>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.9 }}>
      <span>{String(years)} years</span>
      <span style={levelStyle(level)}>{level}</span>
    </div>
  </div>
);

const Skills = () => {
  const items = [
    { icon: FaReact, name: "React.js", years: 1, level: "Beginner" },
    { icon: FaJava, name: "Java", years: 2, level: "Intermediate" },
    { icon: SiPython, name: "Python", years: 2, level: "Intermediate" },
    { icon: SiJavascript, name: "JavaScript", years: 4, level: "Intermediate" },
    { icon: FaHtml5, name: "HTML", years: 4, level: "Advanced" },
    { icon: DiMsqlServer, name: "SQL Server", years: 2, level: "Intermediate" },
    { icon: SiCss3, name: "CSS", years: 4, level: "Advanced" },
    { icon: SiBootstrap, name: "Bootstrap", years: 1, level: "Beginner" },
    { icon: SiTailwindcss, name: "Tailwind CSS", years: 1, level: "Beginner" },
  ];

  return (
    <div style={section}>
      <h2 style={heading}>Skills & Expertise</h2>
      <h3 style={{ marginTop: 0, fontWeight: 500 }}>Core Technologies</h3>
      <div style={grid}>
        {items.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;


