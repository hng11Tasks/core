function BlackBtn({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white text-[16px] rounded-[24px] font-medium ${className}`}
    >
      {children}
    </button>
  );
}

export default BlackBtn;