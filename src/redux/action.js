import axios from "axios"

const fetchProduct = (number) => {

    return async function (dispatch) {
        const response = await axios.get(`https://mobilicis-backend.onrender.com/data/get-data/${number}`)
        console.log(response.data.data)
        dispatch({
            type: "FETCH_PRODUCT",
            payload: response.data.data
        })
    }
}

export { fetchProduct }