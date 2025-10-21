"use client";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

import { useModalStore } from "@/store/use-modal-store";

interface QuoteButtonProps {
  label: string;
  showIcon?: boolean;
}

const QuoteButtonModal = ({ label, showIcon = true }: QuoteButtonProps) => {
  const { open } = useModalStore();

  return (
    <Button onClick={open}>
      <span className="uppercase">{label}</span>
      {showIcon && <ArrowRight className="text-white" />}
    </Button>
  );
};

export default QuoteButtonModal;
