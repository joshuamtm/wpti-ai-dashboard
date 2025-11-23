import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const MetricCard = ({ title, value, trend, trendLabel, icon: Icon, color = 'navy', description, className = '' }) => {
    const getTrendColor = (trend) => {
        if (trend === 'up') return 'text-success';
        if (trend === 'down') return 'text-danger';
        return 'text-gray-500';
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <ArrowUpRight size={16} />;
        if (trend === 'down') return <ArrowDownRight size={16} />;
        return <Minus size={16} />;
    };

    const colorClasses = {
        navy: 'bg-navy text-white',
        turquoise: 'bg-turquoise text-white',
        warmYellow: 'bg-warmYellow text-navy',
        white: 'bg-white text-navy border border-gray-200'
    };

    return (
        <div className={`metric-card p-6 rounded-xl shadow-sm ${colorClasses[color] || ''} ${className}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
                    <h3 className="text-3xl font-bold text-navy mt-1">{value}</h3>
                </div>
                {Icon && (
                    <div className={`p-3 rounded-lg ${color === 'navy' ? 'bg-navy/10 text-navy' : 'bg-turquoise/10 text-turquoise-dark'}`}>
                        <Icon size={24} />
                    </div>
                )}
            </div>

            {description && (
                <p className="text-sm text-gray-600 mb-3">{description}</p>
            )}

            {trend && (
                <div className="flex items-center mt-2">
                    <span className={`flex items-center font-medium ${getTrendColor(trend)}`}>
                        {getTrendIcon(trend)}
                        <span className="ml-1">{trendLabel}</span>
                    </span>
                    <span className="text-gray-400 text-sm ml-2">vs last session</span>
                </div>
            )}
        </div>
    );
};

export default MetricCard;
