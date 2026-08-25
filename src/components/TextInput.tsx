
import React, { useState } from 'react';
import type { TextInputProps } from '../types';

export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start typing your content here...',
    initialValue = ''
}) => {
    const [text, setText] = useState(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        setText(newText);
        onTextChange(newText);
    };
    return (

        <div className="w-full">
            <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                value={text}
                onChange={handleChange}
                rows={6}
            />
        </div>
    );
};

