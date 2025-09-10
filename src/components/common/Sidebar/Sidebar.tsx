import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

interface NavItem {
    path: string;
    label: string;
    icon?: string;
}

interface SideProps {
    appName: string;
    navItems: NavItem[];
}

function Sidebar({ appName, navItems }: SideProps) {
    return(
        <nav className="sidebar">
            <div className="sidebar-header">
                <h2 className="app-title">{appName}</h2>
            </div>

            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item.path} className="nav-item">
                        <Link to={item.path} className="nav-link">
                            {item.icon && <span className="nav-icon">{item.icon}</span>}
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Sidebar;