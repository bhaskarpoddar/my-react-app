import { CreateActionCreator, createDataReducer } from 'helpers';
import { DocumentsAPI } from 'api';

const types = {
    FETCH_DOCUMENTS : 'FETCH_DOCUMENTS',
};

const actions = {
    fetchDocuments: (relocationID) => CreateActionCreator.read({
        type: types.FETCH_DOCUMENTS,
        apiCall: DocumentsAPI.getDocuments,
        args: [relocationID],
    })
};

const reducer = createDataReducer(types.FETCH_DOCUMENTS, []);

export default {
    types,
    actions,
    reducer,
};
