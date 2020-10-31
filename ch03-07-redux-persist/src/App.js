import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux';

import Menu from "./Menu";
import Home from "./Home";
import Boots from "./Boots";
import Basket from "./Basket";

import './App.css';
import reducer from "./reducer";

import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                    <BrowserRouter>
                        <Menu/>
                        <Switch>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                            <Route path='/boots'>
                                <Boots/>
                            </Route>
                        </Switch>
                        <Basket/>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
