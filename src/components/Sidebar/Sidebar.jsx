import './Sidebar.css'

function Sidebar() {
  const sidebarItems = [
    { id: 1, icon: '👤', name: 'Friends' },
    { id: 2, icon: '👥', name: 'Groups' },
    { id: 3, icon: '🛒', name: 'Marketplace' },
    { id: 4, icon: '📺', name: 'Watch' },
    { id: 5, icon: '🕒', name: 'Memories' },
    { id: 6, icon: '🔖', name: 'Saved' },
  ]

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        <div className="sidebarProfile">
          <div className="sidebarAvatar">
            A
          </div>

          <span className="sidebarUsername">
            Alex Carter
          </span>
        </div>

        <div className="sidebarMenu">
          {sidebarItems.map((item) => (
            <div className="sidebarItem" key={item.id}>
              <span className="sidebarIcon">
                {item.icon}
              </span>

              <span className="sidebarItemText">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <button className="sidebarButton">
          See More
        </button>

        <hr className="sidebarHr" />

        <p className="sidebarFooter">
          Privacy · Terms · Advertising · Cookies · More · Meta © 2026
        </p>

      </div>
    </div>
  )
}

export default Sidebar