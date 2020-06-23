import { CreateActionCreator, createDataReducer } from 'helpers';
import { AssignmentHeaderAPI } from 'api';

const type = 'ASSIGNMENT_HEADER';

const actions = {
    getAssignmentHeader: (relocationId) => CreateActionCreator.read({
        type,
        apiCall: AssignmentHeaderAPI.fetchAssignmentHeader,
        args: [relocationId]
    })
};

const reducer = createDataReducer(type);

export default {
    type,
    actions,
    reducer
};
