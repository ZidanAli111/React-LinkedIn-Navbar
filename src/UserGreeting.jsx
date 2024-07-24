import { Card } from "./card"

export function UserGreeting(props) {

    if (props.isLoggedIn) {
        return (
            <div>
                <h1>Username: {props.username}</h1>
                <Card></Card>
            </div>
        )
    }
    else {
        return (

            <h1>User is not logged in !!!</h1>

        )
    }
}