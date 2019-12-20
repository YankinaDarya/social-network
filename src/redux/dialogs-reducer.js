const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sonya'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Slava'}
    ],
    messages: [
        {id: 1, message: 'AAAAA'},
        {id: 2, message: 'BBBBB'},
        {id: 3, message: 'CCCCC'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;

    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;