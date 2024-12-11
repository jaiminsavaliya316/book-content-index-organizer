// src/components/IndexItem.jsx
import { useState } from 'react';

const IndexItem = ({ item, isHeading = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const indentClass = `ml-${Math.min(item.level * 4, 16)}`;
  
  if (isHeading) {
    return (
      <div className={`text-lg font-semibold text-gray-900 mb-2 flex justify-between items-center ${
        item.level === 0 ? 'text-xl' : ''
      }`}>
        <div>
          {item.numbering && (
            <span className="text-gray-600 mr-2">{item.numbering}</span>
          )}
          {item.mainText}
        </div>
        {item.pageNumber && (
          <span className="text-gray-600 ml-4 pl-4">{item.pageNumber}</span>
        )}
      </div>
    );
  }

  return (
    <div 
      className={`py-1.5 ${indentClass} hover:bg-gray-50 rounded group transition-colors duration-150`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center min-w-0 gap-2">
          {item.numbering && (
            <span className="text-gray-500 font-medium whitespace-nowrap">
              {item.numbering}
            </span>
          )}
          <span className="text-gray-800 truncate">{item.mainText}</span>
        </div>
        {item.pageNumber && (
          <div className="flex items-center ml-4">
            <span className="border-b border-dotted border-gray-300 flex-grow w-16"></span>
            <div className="flex items-center gap-2 ml-4">
              <span className="text-gray-600 whitespace-nowrap">{item.pageNumber}</span>
              {isHovered && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap">
                  {Math.round(item.confidence * 100)}%
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexItem;