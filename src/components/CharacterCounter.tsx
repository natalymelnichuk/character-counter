
import React, { useState } from 'react';
import type { CharacterCounterProps, TextStats } from '../types';
import { TextInput } from './TextInput';
import { StatsDisplay } from './StatsDisplay';


export const CharacterCounter: React.FC<CharacterCounterProps> = () => {
        const [text, setText] = useState('');

        const calculateStats = (rawText: string): TextStats => {
            const trimmed = rawText.trim();
            const words = trimmed === '' ? [] : trimmed.split(/\s+/);
            const wordCount = words.length;
            const characterCount = rawText.length;
            const readingTime = Math.ceil((wordCount / 250) * 60);

            return {
                characterCount,
                wordCount,
                readingTime,
            };
        };

        const stats = calculateStats(text);

        return (
            <div className="space-y-4">

                <TextInput onTextChange={(newText) => setText(newText)} />


                <StatsDisplay stats={stats} />
            </div>
        )
    }
