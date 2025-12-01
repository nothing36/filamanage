import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './IconSidebar.css';

interface SidebarItem {
    path: string;
    label: string;
    icon: string;
    tooltip: string;
}

interface IconSidebarProps {
    items: SidebarItem[];
}

function IconSidebar({ items }: IconSidebarProps) {
    const location = useLocation();

    return (
        <nav className="icon-sidebar">
            {items.map((item) => {
                // check if current route matches item path
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`sidebar-item ${isActive ? 'active' : ''}`}
                        data-tooltip={item.tooltip}
                    >
                        <span className="sidebar-icon">{item.icon}</span>
                    </Link>
                );
            })}
        </nav>
    );
}

export default IconSidebar;
