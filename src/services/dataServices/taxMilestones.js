import { CreateActionCreator, createDataReducer } from "helpers";
import { TaxMilestonesAPI } from "api";

const type = "TAX_MILESTONES";

const actions = {
    getTaxMilestones: (homeCountry, hostCountry) => CreateActionCreator.read({
        type,
        apiCall: TaxMilestonesAPI.getTaxMilestones,
        args: [homeCountry, hostCountry]
    })
};

const reducer = createDataReducer(type);

export default {
    type,
    actions,
    reducer
};
