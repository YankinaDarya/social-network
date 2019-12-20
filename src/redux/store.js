import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi! How are you?', likesCount: 0},
                {id: 2, message: 'It`s my first post', likesCount: 23}],
            newPostText: 'angry-pug'
        },
        dialogsPage: {
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
            ],
            updateNewMessageBody: ''
        },
        sidebarPage: {
            friends: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Sveta'}
            ]
        },
    },
    _callSubscriber() {
        console.log("g");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;