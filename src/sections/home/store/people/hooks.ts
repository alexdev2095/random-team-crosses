import { useContext } from 'react'
import PeopleContext from './context'

const usePeopleContext = () => {
  return useContext(PeopleContext)
}

export default usePeopleContext