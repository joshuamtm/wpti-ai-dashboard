import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-navy">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;
