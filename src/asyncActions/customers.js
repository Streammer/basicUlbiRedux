import { addManyCustomersAction } from "../store/customerReducer"

export const fetchcustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(addManyCustomersAction(json))
            })
    }
}