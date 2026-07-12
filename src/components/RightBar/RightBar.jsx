import { useState } from "react";
import "./RightBar.css";

function RightBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const contacts = [
    {
      name: "Rahul Sharma",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Priya Singh",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Aman Verma",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Neha Gupta",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rohit Kumar",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      name: "Anjali Mehta",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Arjun Patel",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    {
      name: "Sneha Kapoor",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  ];

  return (
    <aside className="right-sidebar">

      <div className="sidebar-section">
        <div className="section-header">
          <h3>Sponsored</h3>
        </div>

        <div className="sponsored-card">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
            alt="Watch"
          />
          <div className="sponsored-text">
            <h4>Smart Watch Sale</h4>
            <p>www.amazon.in</p>
          </div>
        </div>

        <div className="sponsored-card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"
            alt="Shoes"
          />
          <div className="sponsored-text">
            <h4>Nike Running Shoes</h4>
            <p>www.nike.com</p>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="section-header">
          <h3>Birthdays</h3>
        </div>

        <div className="birthday-box">
          <i className="fa-solid fa-gift"></i>
          <p>
            <strong>Rahul</strong> and <strong>2 others</strong> have birthdays today.
          </p>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="section-header">
          <h3>Contacts</h3>

          <div className="icons">
            <i className="fa-solid fa-video"></i>

            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => setShowSearch(!showSearch)}
            ></i>

            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>

        {showSearch && (
          <input
            type="text"
            placeholder="Search contacts..."
            className="contact-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((contact, index) => (
            <div
              key={index}
              className="contact"
              onClick={() => alert(`Opening chat with ${contact.name}...`)}
            >
              <img src={contact.image} alt={contact.name} />
              <span>{contact.name}</span>
            </div>
          ))}
      </div>

      <div className="sidebar-section">
        <div className="section-header">
          <h3>Group Conversations</h3>
        </div>

        <div className="group-chat">
          <div className="group-icon">
            <i className="fa-solid fa-users"></i>
          </div>

          <span>Create New Group</span>
        </div>
      </div>

    </aside>
  );
}

export default RightBar;
