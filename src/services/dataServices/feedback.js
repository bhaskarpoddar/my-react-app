import { CreateActionCreator, createDataReducer } from 'helpers';
import { FeedbackAPI } from 'api';

const type = 'FEEDBACK';

const actions = {
    fetchdisplayFeedback: (relocationId) => CreateActionCreator.read({
        type,
        apiCall: FeedbackAPI.displayFeedback,
        args: [relocationId]
    }),
    createFeedback: (comments, contactMe, satisfactionLevel,feedbackFormUrl, policyName, policyId, isGlobal) => CreateActionCreator.create({
        type: type,
        apiCall: FeedbackAPI.sendFeedback,
        args: [comments, contactMe, satisfactionLevel,feedbackFormUrl, policyName, policyId, isGlobal]
    }),
};

const reducer = createDataReducer(type);

export default {
    type,
    actions,
    reducer
};


