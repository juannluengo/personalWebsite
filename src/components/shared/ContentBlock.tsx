import React from 'react';

interface ContentBlockProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ 
  title, 
  children,
  className = ""
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      )}
      <div className="text-white/90">
        {children}
      </div>
    </div>
  );
};

export default ContentBlock; 