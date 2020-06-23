import { CreateActionCreator, createDataReducer } from 'helpers';
import { TasksAPI } from 'api';

const type = "TASKS";

const actions = {
    fetchTasks: (relocationId) => CreateActionCreator.read({
        type,
        apiCall: TasksAPI.getTasks,
        args: [ relocationId ]
    })
};

const reducer = createDataReducer(type);

export default{
    type,
    actions,
    reducer
};
