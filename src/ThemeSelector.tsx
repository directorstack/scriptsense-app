
import React from 'react';
import { themes } from './themes';

type ThemeKey = keyof typeof themes;

interface Props {
  selected: ThemeKey;
  onSelect: (theme: ThemeKey) => void;
}

const ThemeSelector: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold">Choose a Theme</h2>
      {Object.entries(themes).map(([key, theme]) => (
        <button
          key={key}
          className={\`
            border p-3 text-left rounded transition-all
            \${selected === key ? 'border-black bg-gray-100' : 'border-gray-300'}
          \`}
          onClick={() => onSelect(key as ThemeKey)}
        >
          <div className="font-semibold">{theme.name}</div>
          <div className="text-sm text-gray-600">{theme.description}</div>
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
