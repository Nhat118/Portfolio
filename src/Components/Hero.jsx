import React from "react";

const wrapper = {
  minHeight: "88vh",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  alignItems: "center",
  gap: 24,
  padding: "80px 24px 56px",
  background: "radial-gradient(1200px 400px at 20% 20%, rgba(111,207,151,0.08), transparent), radial-gradient(1000px 360px at 80% 60%, rgba(79,172,254,0.08), transparent)",
};

const left = { textAlign: "left", maxWidth: 680, margin: "0 auto" };
const right = { display: "flex", justifyContent: "center" };

const name = {
  fontSize: "3.2rem",
  margin: 0,
  lineHeight: 1.15,
  background: "linear-gradient(90deg, #e6f7ff, #6fcf97)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const role = { color: "#bdbdbd", fontSize: "1.2rem", marginTop: 8 };
const desc = { color: "#d6d6d6", marginTop: 16, lineHeight: 1.7 };

const ctas = { display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" };
const btn = {
  padding: "12px 18px",
  borderRadius: 10,
  border: "1px solid #2a2a2a",
  background: "#111",
  color: "#eaeaea",
  textDecoration: "none",
};
const btnPrimary = { ...btn, border: "1px solid #6fcf97", background: "#0e1a13" };

const chips = { display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" };
const chip = {
  background: "#121212",
  border: "1px solid #1f1f1f",
  color: "#a4a4a4",
  padding: "8px 12px",
  borderRadius: 999,
  fontSize: 14,
};

const avatar = {
  width: 200,
  height: 200,
  borderRadius: "50%",
  overflow: "hidden",
  border: "1px solid #2a2a2a",
  boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
};

const avatarImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
};

const Hero = () => {
  return (
    <div style={wrapper}>
      <div style={left}>
        <h1 style={name}>Ngô Quý Long Nhật</h1>
        <div style={role}>Frontend Developer • React/JavaScript</div>
        <p style={desc}>
        Mình là một lập trình viên Frontend trong tương lai, mình muốn trở thành một lập trình viên Fullstack Developer. 
        Luôn chủ động học hỏi công nghệ mới, không ngừng hoàn thiện kỹ năng để trở thành lập trình viên toàn diện.
        Mình đang tìm kiếm một cơ hội để phát triển bản thân và trở thành một lập trình viên Fullstack Developer.
        </p>
        <div style={ctas}>
          <a href="#projects" style={btnPrimary}>Xem dự án</a>
          <a href="#contact" style={btn}>Liên hệ</a>
          <a href="#skills" style={btn}>Kỹ năng</a>
        </div>
        <div style={chips}>
          <span style={chip}>3+ năm JavaScript</span>
          <span style={chip}>React / Next.js</span>
          <span style={chip}>Java</span>
          <span style={chip}>UI/UX</span>
        </div>
      </div>
      <div style={right}>
        <div style={avatar}>
          <img src={process.env.PUBLIC_URL + '/image/avt.jpg'} alt="Avatar" style={avatarImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;


