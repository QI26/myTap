import React from 'react';

export default function IconLink({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-2">
      <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white shadow">
        {children}
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </a>
  );
}
