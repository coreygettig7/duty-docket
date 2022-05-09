import React, { createContext, useContext } from 'React';
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const DutyProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useDutyReducer({
        dutyName: '',
        dutyValue: '',
        dutyDescription: ''
    });
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { DutyProvider, useStoreContext };