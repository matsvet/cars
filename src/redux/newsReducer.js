import TempStore from "../tempStore/TempStore";

let initialState = {
    news: TempStore.news
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default newsReducer;