import { useState } from 'react'
import PercentageInput from '../components/percentage-input'

export default function App () {

    const [weight, setWeight] = useState(0)
    const [ingredients, setIngredients] = useState({
        salt: 1.3,
        pepper: 0.3,
        chilli: 0.5,
        cayenne: 0.25
    })

    const onChangeWeight = (e) => {
        setWeight(e.target.value)
    }

    const onChangeIngredients = (e) => {
            if(+e.target.value > 100) return
            setIngredients((prevState) => ({
                ...prevState,
                [e.target.name]: +e.target.value
            }))
    }

    const onClickUp = (e) => {
        const item = e.target.id
        const newAmount = ingredients[item]+0.1
        if(newAmount > 100) return
        setIngredients((prevState) => ({
            ...prevState,
            [item]: Math.round(newAmount * 100) / 100
        }))
    }

    const onClickDown = (e) => {
        const item = e.target.id
        const newAmount = ingredients[item]-0.1
        if(newAmount < 0) return
        setIngredients((prevState) => ({
            ...prevState,
            [item]: Math.round(newAmount * 100) / 100
        }))
    }

    return(
        <div className='top'>
          <div className='header'><h1>Measurement Calculator</h1></div>
          <div className='main'>
            <div className='weight-input-section'>
              <label htmlFor='weight-input' className='weight-label'>Weight</label>
              <input id='weight-input' onChange={onChangeWeight} value={weight} type='number' inputMode='decimal'></input>
              <p className='lbs'>lbs</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th className='percent-header'>Percent (%)</th>
                        <th>Weight (oz)</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                        <td className='item'>Salt</td>
                        <td className='input-box'><PercentageInput name='salt' value={ingredients.salt} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='equal'>=</p><p className='calc'>{(weight*(ingredients.salt/100)).toFixed(2)*16}</p><p>oz</p></td>
                    </tr>
                    <tr>
                        <td className='item'>Pepper</td>
                        <td className='input-box'><PercentageInput name='pepper' value={ingredients.pepper} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='equal'>=</p><p className='calc'>{(weight*(ingredients.pepper/100)).toFixed(2)*16}</p><p>oz</p></td>
                    </tr>
                    <tr>
                        <td className='item'>Chilli</td>
                        <td className='input-box'><PercentageInput name='chilli' value={ingredients.chilli} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='equal'>=</p><p className='calc'>{(weight*(ingredients.chilli/100)).toFixed(2)*16}</p><p>oz</p></td>
                    </tr>
                    <tr>
                        <td className='item'>Cayenne</td>
                        <td className='input-box'><PercentageInput name='cayenne' value={ingredients.cayenne} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='equal'>=</p><p className='calc'>{(weight*(ingredients.cayenne/100)).toFixed(2)*16}</p><p>oz</p></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}