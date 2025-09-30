import React from "react";
import { GiTalk } from "react-icons/gi";

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
};

const Badge = ({ text }) => (
  <span style={{ background: "#123", color: "#6fcf97", padding: "4px 10px", borderRadius: 999, fontSize: 12 }}>
    {text}
  </span>
);

const Languages = () => {
  const data = [
    { 
      name: "Tiếng Anh", 
      tag: "Đang cải thiện mỗi ngày", 
      level: "Trình độ cơ bản", 
      desc: "Kỹ năng giao tiếp tốt cả viết và nói; thành thạo tài liệu kỹ thuật và thư từ." 
    },
    { 
      name: "Tiếng Việt", 
      tag: "Thành thạo", 
      level: "Người bản xứ", 
      desc: "Thành thạo hoàn toàn, hiểu rõ văn hoá và giao tiếp trong công việc." 
    },
    { 
      name: "Tiếng Hàn", 
      tag: "Đang học", 
      level: "Sơ cấp", 
      desc: "Đang trong quá trình học ngôn ngữ và văn hoá Hàn Quốc để phục vụ cho công việc sau này, Mong ước được du lịch và làm việc tại Hàn Quốc" 
    },
    { 
      name: "Tiếng Trung", 
      tag: "Tương lai :P", 
      level: "Dự định học", 
      desc: "Tiếng Trung ngày càng phổ biến vì vậy mình dự định học nó trong tương lai để có thể trau dồi bản thân và có nhiều cơ hội trong công việc hơn" 
    },
  ];


  return (
    <div style={section}>
      <h2 style={heading}>Languages</h2>
      <div style={grid}>
        {data.map((l) => (
          <div key={l.name} style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0 }}>{l.name}</h3>
              {l.tag ? <Badge text={l.tag} /> : null}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, color: "#6fcf97" }}>
              <GiTalk />
              <strong>{l.level}</strong>
            </div>
            <p style={{ marginTop: 8, opacity: 0.9 }}>{l.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;


