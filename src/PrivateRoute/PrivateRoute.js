import { useAuthContext } from "context/AuthContext/AuthContext"
import { Redirect, Route } from "react-router-dom"


const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useAuthContext()
    const isAuthenticated = () => {
        if (localStorage.getItem("isLoggedIn") || authContext.isLoggedIn) {
            return true
        }
        else
            return false
    }
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/user-login",
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute