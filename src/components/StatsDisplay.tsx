
import React from 'react';
import type { StatsDisplayProps } from '../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true,
    }) => {

    const formatReadingTime = (totalSeconds: number): string => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${minutes}:${formattedSeconds}`;
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
            <span className="block text-2xl font-bold text-gray-800">
            {stats.wordCount}
            </span>
            <span className="text-sm text-gray-500">Words</span>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
            <span className="block text-2xl font-bold text-gray-800">
            {stats.characterCount}
            </span>
            <span className="text-sm text-gray-500">Characters</span>
        </div>

        {showReadingTime && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
            <span className="block text-2xl font-bold text-gray-800">
                {formatReadingTime(stats.readingTime)} min
            </span>
            <span className="text-sm text-gray-500">Reading Time</span>
            </div>
        )}
        </div>
    );
};