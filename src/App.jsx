import './App.css'
import { CarList } from './CarList'
import { Counter } from './Counter'
import { DigitalClock } from './DigitalClock'
import { List } from './List'
import { Todo } from './Todo'
import { UserGreeting } from './UserGreeting'

function App() {

    return (
        <div>
            {/* <UserGreeting isLoggedIn={true} username="Zidan" /> */}
            {/* <List></List> */}
            {/* <Counter></Counter> */}
            {/* <CarList></CarList> */}
            {/* <Todo></Todo> */}
            <DigitalClock></DigitalClock>
        </div>
    )
}
export default App
