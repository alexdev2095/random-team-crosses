import { Dispatch, createContext } from 'react'
import { TAction } from './actions'
import initialState, { PeopleStateType } from './initialState'

interface IContextProps {
  state: PeopleStateType
  dispatch: Dispatch<TAction>
}

const PeopleContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => { }
})
export default PeopleContext