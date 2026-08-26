
import React from 'react';
import type { StatsDisplayProps } from '../types';

interface ExtendedStatsProps extends StatsDisplayProps {
  minWords?: number;
  maxWords?: number;
}


export const StatsDisplay: React.FC<ExtendedStatsProps> = ({
    stats,
    showReadingTime = true,
    minWords = 25,
    maxWords = 100,
    
    }) => {

    const formatReadingTime = (totalSeconds: number): string => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${minutes}:${formattedSeconds}`;
    }

    const isWordCountValid =
    stats.wordCount >= minWords && stats.wordCount <= maxWords;

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-3 gap-4 text-center items-center">
            
                <div>
                    <span className="block text-sm font-medium text-gray-400 mb-1">
                    Characters
                    </span>
                    <span className="text-3xl font-bold text-gray-800">
                        {stats.characterCount}
                    </span>
                </div>
                
                <div>
                    <span className="block text-sm font-medium text-gray-400 mb-1">
                        Words
                    </span>
                    <span
                        className={`text-3xl font-bold ${
                        isWordCountValid ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {stats.wordCount}
                    </span>
                    <span className="block text-xs text-gray-400 mt-2">
                        Min: {minWords} | Max: {maxWords}
                    </span>
                </div>

                {showReadingTime && (
                    <div>
                        <span className="text-sm text-gray-500">Reading Time</span>
                        <span className="block text-2xl font-bold text-gray-800">
                            {formatReadingTime(stats.readingTime)} min
                        </span>                        
                    </div>
                )}
            </div>
        </div>
    );
};