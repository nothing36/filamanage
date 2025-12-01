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
    bottomItems?: SidebarItem[];
}

function IconSidebar({ items, bottomItems = [] }: IconSidebarProps) {
    const location = useLocation();

    const renderItems = (itemList: SidebarItem[]) => {
        return itemList.map((item) => {
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
        });
    };

    return (
        <nav className="icon-sidebar">
            <div className="sidebar-top">
                {renderItems(items)}
            </div>
            {bottomItems.length > 0 && (
                <div className="sidebar-bottom">
                    {renderItems(bottomItems)}
                </div>
            )}
        </nav>
    );
}

export default IconSidebar;
