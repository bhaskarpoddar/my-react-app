import { CreateActionCreator, createDataReducer } from 'helpers';
import { RelocationsAPI } from 'api';

const type = "RELOCATIONS";

const actions = {
    fetchRelocations: (userEmail) => CreateActionCreator.read({
        type,
        apiCall: RelocationsAPI.getRelocations,
        args: [ userEmail ]
    }),
    getRelocationsWithHeaders: (userEmail) => CreateActionCreator.read({
        type,
        apiCall: RelocationsAPI.getRelocationsWithHeaders,
        args: [ userEmail ]
    })
};

const reducer = createDataReducer(type);

export default{
    type,
    actions,
    reducer
};
