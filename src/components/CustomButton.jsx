function CustomButton({ label, onClick, style, className }) {
  return (
    <button style={style} onClick={onClick} className={`custom-button ${className}`}>
        {label}
    </button>
  )
}

export default CustomButton