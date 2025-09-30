import React from "react";
import { socialLinks } from "../data";

const sectionStyle = {
  padding: "72px 16px",
  maxWidth: 960,
  margin: "0 auto",
  color: "#eaeaea",
  textAlign: "center",
};

const iconRow = {
  display: "flex",
  justifyContent: "center",
  gap: 24,
  marginTop: 24,
};

const Contact = () => {
  return (
    <div style={sectionStyle}>
      <h2 style={{ fontSize: "2rem", marginBottom: 8 }}>Liên hệ</h2>
      <p>Hãy kết nối với mình qua email, mạng xã hội hoặc điện thoại.</p>
      <div style={iconRow}>
        {socialLinks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              target={item.target}
              rel={item.target ? "noopener noreferrer" : undefined}
              style={{ color: "#bdbdbd", fontSize: 28 }}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;


