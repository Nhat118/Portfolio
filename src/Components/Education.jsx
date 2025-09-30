import React from "react";

const wrapper = {
  padding: "72px 16px",
  maxWidth: 1100,
  margin: "0 auto",
  color: "#eaeaea",
};

const card = {
  background: "#111",
  border: "1px solid #1f1f1f",
  borderRadius: 16,
  padding: 24,
};

const Education = () => {
  return (
    <div style={wrapper}>
      <h2 style={{ fontSize: "2.2rem", color: "#6fcf97", marginBottom: 24 }}>Education</h2>
      <div style={card}>
        <h3 style={{ marginTop: 0 }}>Đại Học Khoa Học Huế - HUSC</h3>
        <h4 style={{ margin: "8px 0", color: "#6fcf97" }}>Công nghệ Phần mềm</h4>
        <div style={{ opacity: 0.85, marginBottom: 12 }}>2022-2026</div>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
        Quãng thời gian học tập tại Trường Đại học Khoa học – Đại học Huế đã tạo nền tảng vững chắc cho tôi hôm nay.
Ngành Công nghệ Phần mềm không chỉ giúp tôi tiếp cận kiến thức toàn diện mà còn khơi dậy niềm đam mê với lập trình và công nghệ hiện đại. Tôi trân trọng những trải nghiệm, cơ hội và sự định hướng mà ngôi trường đã mang lại, vì tất cả đã góp phần định hình con đường trở thành một kỹ sư phần mềm của tôi.
        </p>
      </div>
    </div>
  );
};

export default Education;


