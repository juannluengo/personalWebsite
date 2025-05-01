"use client"

import React from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronRight } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  onViewAll?: () => void;
  viewAllText?: string;
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isOpen, 
  onClose, 
  children,
  title,
  onViewAll,
  viewAllText
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-zinc-900 text-white border border-zinc-800 !pr-8">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 bg-zinc-800 hover:bg-zinc-700 rounded p-1 text-white/70 hover:text-white text-xs"
        >
          esc
        </button>
        <DialogTitle className="text-2xl font-bold text-white mb-4">
          {title || 'Details'}
        </DialogTitle>
        <div className="pr-8">
          {children}
          {onViewAll && viewAllText && (
            <div className="mt-6 pt-4 border-t border-zinc-800">
              <button
                onClick={onViewAll}
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
              >
                {viewAllText} <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal; 