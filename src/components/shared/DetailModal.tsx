"use client"

import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isOpen, 
  onClose, 
  children 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-zinc-900 text-white border border-zinc-800 relative">
        <button 
          className="absolute right-4 top-4 bg-zinc-800 hover:bg-zinc-700 rounded p-1 text-white/70 hover:text-white text-xs" 
          onClick={onClose}
        >
          esc
        </button>
        <div className="pr-8">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal; 