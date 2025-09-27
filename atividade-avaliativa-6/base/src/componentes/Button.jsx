import React from "react";

export default function Button({ 
  children, 
  variant = "solid", 
  disabled = false, 
  loading = false, 
  ...props 
}) {
  return (
    <button 
      disabled={disabled || loading} 
      data-variant={variant} 
      {...props}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}