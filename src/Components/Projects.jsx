import React from "react";

const sectionStyle = {
  padding: "72px 16px",
  maxWidth: 1100,
  margin: "0 auto",
  color: "#eaeaea",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
  marginTop: 24,
};

const card = {
  background: "#141414",
  border: "1px solid #2a2a2a",
  borderRadius: 12,
  padding: 16,
};

const viewBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #2a2a2a",
  background: "#111",
  color: "#e6fff2",
  textDecoration: "none",
  fontWeight: 600,
  transition: "background 0.2s, border 0.2s, transform 0.1s",
};

const viewBtnHover = {
  background: "#0e1a13",
  border: "1px solid #6fcf97",
};

const Projects = () => {
  const demoProjects = [
    {
      title: "Portfolio React",
      desc: "Website portfilio cá nhân với hiệu ứng preloader và các section.",
      link: "https://github.com/Nhat118/Portfolio.git",
    },
    {
      title: "Quản lý và cho thuê khách sạn",
      desc: "Thiết kế giao diện web cho thuê phòng khách sạn cùng các tiện ích tại đây bằng HTML,CSS, JS",
      link: "https://github.com/Nhat118/quanlykhachsan.git",
    },
    {
      title: "Web tìm kiếm và cho thuê phòng trọ",
      desc: "Dự án nhóm về web tìm kiếm và cho thuê trọ, nhà nuyên căn, tìm người ở ghép giao diện và các tính năng cơ bản bằng Reactjs,JS",
      link: "https://github.com/thihoai55/CodeWeb.git",
    },
  ];

  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  return (
    <div style={sectionStyle}>
      <h2 style={{ fontSize: "2rem" }}>Dự án</h2>
      <div style={grid}>
        {demoProjects.map((p, i) => (
          <div key={p.title} style={card}
               onMouseLeave={() => setHoveredIdx(null)}>
            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p>{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={hoveredIdx === i ? { ...viewBtn, ...viewBtnHover } : viewBtn}
              onMouseEnter={() => setHoveredIdx(i)}
            >
              Xem chi tiết <span style={{ color: "#6fcf97" }}></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


