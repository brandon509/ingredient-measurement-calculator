import { useState } from 'react'
import PercentageInput from '../components/percentage-input'

export default function App () {

    const [weight, setWeight] = useState(0)
    const [ingredients, setIngredients] = useState({
        cayenne: 5,
        salt: 10,
        pepper: 15,
        onion: 10
    })

    const onChangeWeight = (e) => {
        setWeight(+e.target.value)
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
        <div className='th'>
          <div className='header'><h1>Measurement Calculator</h1></div>
          <div className='main'>
            <div className='thing'>
              <label for='weight' className='weightLabel'>Weight</label>
              <input id='weight' className='inputWeight' onChange={onChangeWeight} value={weight>0 && weight} type='number'></input>
              <p className='lbsLabel'>lbs</p>
            </div>
            <table className='amountTable'>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th className='tester'>Percent (%)</th>
                        <th className='weightHeader'>Weight (oz)</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                        <td className='item'>Cayenne</td>
                        <td className='inputBox'><PercentageInput name='cayenne' value={ingredients.cayenne>0 && ingredients.cayenne} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='equal'>=</p><p className='calcWeight'>{(weight*(ingredients.cayenne/100)).toFixed(2)*16}</p><p className='oz'>oz</p></td>
                    </tr>
                    <tr>
                        <td className='item'>Salt</td>
                        <td className='inputBox'><PercentageInput name='salt' value={ingredients.salt>0 && ingredients.salt} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='equal'>=</p><p className='calcWeight'>{(weight*(ingredients.salt/100)).toFixed(2)*16}</p><p className='oz'>oz</p></td>
                    </tr>
                    <tr>
                        <td className='item'>Pepper</td>
                        <td className='inputBox'><PercentageInput name='pepper' value={ingredients.pepper>0 && ingredients.pepper} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='equal'>=</p><p className='calcWeight'>{(weight*(ingredients.pepper/100)).toFixed(2)*16}</p><p className='oz'>oz</p></td>
                    </tr>
                    <tr>
                        <td className='item'>Onion</td>
                        <td className='inputBox'><PercentageInput name='onion' value={ingredients.onion>0 && ingredients.onion} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='equal'>=</p><p className='calcWeight'>{(weight*(ingredients.onion/100)).toFixed(2)*16}</p><p className='oz'>oz</p></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}