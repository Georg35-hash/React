import { SET_USER_INFO } from '../redux/actions';

const initialState = {
    name: 'Гость',
    status: 'Не авторизован'
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userReducer;