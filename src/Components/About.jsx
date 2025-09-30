import React from "react";

const sectionStyle = {
  padding: "72px 16px",
  maxWidth: 960,
  margin: "0 auto",
  color: "#eaeaea",
};

const heading = {
  fontSize: "2rem",
  marginBottom: 16,
};

const About = () => {
  return (
    <div style={sectionStyle}>
      <h2 style={heading}>Giới thiệu</h2>
      <p>
        Mình là Nhật, sinh viên năm 4 Công nghệ Thông tin tại Đại học Khoa học Huế, đam mê phát triển ứng dụng web.
        Mình thích tạo ra các website có giao diện đẹp và thú vị và dễ sử dụng cho người dùng.
        Ngoài lập trình thì mình còn có thể làm thiết kế UI với Figma/Canva.
        Mình cũng có sở thích là edit video bằng CapCut và chia sẻ nó lên TikTok. Nhờ đó mình có thể kiếm được thêm thu nhập nhờ sở thích này.
      </p>
    </div>
  );
};

export default About;


