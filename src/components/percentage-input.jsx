export default function PercentageInput ({ name, value, onChange, onClickUp, onClickDown}) {

    return(
        <div>
        <button className='minus' id={name} onClick={onClickDown}>-</button><input value={value} onChange={onChange} className='ingredientInput' name={name} type='number'></input><button className='plus' id={name} onClick={onClickUp}>+</button><p className="percentage">%</p>
        </div>
    )
}