import './App.css'
import DashboardContainer from './sections/home/containers/DashboardContainer'
import PeopleProvider from './sections/home/store/people/provider'

function App() {

  return (
    <>
     <PeopleProvider>
      <DashboardContainer />
     </PeopleProvider>
    </>
  )
}

export default App
