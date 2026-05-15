import React from 'react';

interface ActivityCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    color?: string;
}

export default function ActivityCard({ title, description, color }: ActivityCardProps) {
    return (
        <div className="collapse collapse-arrow bg-base-100 rounded-xl mb-2 overflow-hidden shadow-sm border border-base-200" style={{ borderColor: color }}>
            <input type="checkbox" /> 
            <div className="collapse-title text-lg font-bold" style={{ backgroundColor: `${color}1A`, color: '#333' }}>
                {title}
            </div>
            <div className="collapse-content" style={{ backgroundColor: `${color}0D` }}>
                <p className="mt-4 text-base-content/80 text-justify leading-relaxed">{description}</p>
            </div>
        </div>
    );
}