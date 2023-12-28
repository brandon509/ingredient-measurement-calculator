export default function PercentageInput ({ name, value, onChange, onClickUp, onClickDown}) {

    return(
        <div className="input-top">
            <label className="input-label">{name}</label>
            <button className='minus' id={name} onClick={onClickDown}>-</button>
            <input value={value} onChange={onChange} className='ingredient-input' name={name} pattern="[0-9.]"></input>
            <button className='plus' id={name} onClick={onClickUp}>+</button>
            <p className="percent">%</p>
        </div>
    )
}