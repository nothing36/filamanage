import React from 'react';
import './Card.css';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

// reusable card component for dashboard and other pages
function Card({ title, children, className = '', onClick }: CardProps) {
    return (
        <div
            className={`card ${className} ${onClick ? 'card-clickable' : ''}`}
            onClick={onClick}
        >
            {title && <div className="card-header">{title}</div>}
            <div className="card-content">{children}</div>
        </div>
    );
}

export default Card;
