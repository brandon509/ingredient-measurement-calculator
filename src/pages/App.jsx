import { useState } from 'react'
import PercentageInput from '../components/percentage-input'

export default function App () {

    const [weight, setWeight] = useState(0)
    const [ingredients, setIngredients] = useState({
        cayen: 5,
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
          <div className='header'><h1>Sausage Calculator</h1></div>
          <div className='main'>
            <div>
              <p className='label'>Meat weight:</p>
              <input className='inputWeight' onChange={onChangeWeight} value={weight>0 && weight} type='number' pattern="[0-9]*"></input>
              <p className='lbsLabel'>lbs</p>
            </div>
            <table className='amountTable'>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th className='test'>Percent</th>
                        <th className='weightLabel'>Weight</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                        <td>Cayenne</td>
                        <td className='inputBox'><PercentageInput name='cayen' value={ingredients.cayen>0 && ingredients.cayen} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='calcWeight'>{(weight*(ingredients.cayen/100)).toFixed(2)*16}</p><p>oz</p></td>
                    </tr>
                    <tr>
                        <td>Salt</td>
                        <td className='inputBox'><PercentageInput name='salt' value={ingredients.salt>0 && ingredients.salt} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='calcWeight'>{(weight*(ingredients.salt/100)).toFixed(2)*16}</p><p>oz</p></td>
                    </tr>
                    <tr>
                        <td>Pepper</td>
                        <td className='inputBox'><PercentageInput name='pepper' value={ingredients.pepper>0 && ingredients.pepper} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='calcWeight'>{(weight*(ingredients.pepper/100)).toFixed(2)*16}</p><p>oz</p></td>
                    </tr>
                    <tr>
                        <td>Onion</td>
                        <td className='inputBox'><PercentageInput name='onion' value={ingredients.onion>0 && ingredients.onion} onChange={onChangeIngredients} onClickUp={onClickUp} onClickDown={onClickDown} /></td>
                        <td><p className='calcWeight'>{(weight*(ingredients.onion/100)).toFixed(2)*16}</p><p>oz</p></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}