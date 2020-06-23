import { CreateActionCreator, createDataReducer } from 'helpers';
import { ExpenseReportAPI } from 'api';

const type = 'EXPENSE_REPORT_CATEGORIES';

const actions = {
    fetchExpenseReportCategories: (relocationId) => CreateActionCreator.read({
        type,
        apiCall: ExpenseReportAPI.getExpenseReportCategories,
        args: [relocationId]
    })
};

const reducer = createDataReducer(type);

export default {
    type,
    actions,
    reducer
};
