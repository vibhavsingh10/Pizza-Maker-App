import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { chooseSauce } from "../../store/pizza"
import Button from '../common/Button'

const Step4 = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const sauce = useSelector(state => state.sauce)
  const [input, changeInput] = useState(sauce)

  const onSubmit = () => {
    dispatch(chooseSauce(input))
    history.push("./Step5") // NOTE: navigate to User.js component first then after filling user details go to result route from there
  }

  return (
    <form>
      <div className="mb-3 col">
        <label htmlFor="sauce">Pick Sauce:</label>
        <select className="form-select" id="sauce" name="sauce" onChange={(e) => changeInput(e.target.value)}>
          <option value="no_sauce">No Sauce</option>
          <option value="tomato">Tomato</option>
          <option value="spicy_tomato">Spicy Tomato</option>
        </select>
      </div>
      <Button onSubmit={onSubmit}>Next</Button>
    </form>
  )
}

export default Step4