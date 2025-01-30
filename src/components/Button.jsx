function Button({ buttonValue = null, className = undefined, ariaLabel = null, onClick, children }) {
    return (
        <button 
            type="button" 
            className={className} 
            aria-label={ariaLabel}
            onClick={onClick} >
                { children && <span>{ children }</span> }
                { buttonValue && <span>{ buttonValue }</span>}
        </button>
    )
}

export default Button; 