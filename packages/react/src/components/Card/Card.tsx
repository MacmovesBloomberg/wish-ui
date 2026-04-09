import React from "react";
import { CardProps } from "./Card.types";
import { cardVariants } from "./Card.styles";

export function Card({ children, variant, className, style, ...rest }: CardProps) {
  // 🟢 Returns a class string, e.g., "wish-card wish-card--variant-elevated"
  const variantClasses = cardVariants({ variant });
  
  return (
    <div 
      className={`${variantClasses} ${className || ""}`.trim()} 
      style={style} 
      {...rest}
    >
      {children}
    </div>
  );
}