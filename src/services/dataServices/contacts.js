import { CreateActionCreator, createDataReducer } from 'helpers';
import { ContactsAPI } from 'api';

const types = {
    FETCH_CONTACTS : 'FETCH_CONTACTS',
};

const actions = {
    fetchContacts: (relocationID) => CreateActionCreator.read({
        type: types.FETCH_CONTACTS,
        apiCall: ContactsAPI.getContacts,
        args: [relocationID],
    })
};

const reducer = createDataReducer(types.FETCH_CONTACTS, []);

export default {
    types,
    actions,
    reducer,
};
