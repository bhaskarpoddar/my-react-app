import { CreateActionCreator, createDataReducer } from "helpers";
import { MoveInitiationAPI } from "api";
import { combineReducers } from "redux";

const type = "MOVE_INITIATION";
const leaderShipProgramsType = "LEADERSHIP_PROGRAMS";
const CaliforniaTiersType = "CALIFORNIA_TIERS";
const FinancePartnerType = "FINANCE_PARTNER";
const MoveDashboardType = "MOVE_DASHBOARD";
const EmployeeAndJobDetailsType = "MOVE_EMP_JOB_DETAILS";
const SaveEmployeeAndJobDetailsType = "MOVE_EMP_JOB_DETAILS_SAVE";
const EmployeeAndJobDetailsPosType = "MOVE_EMP_POS_JOB_DETAILS";
const EmployeeCompetitiveInitiationPosType = "MOVE_EMP_COM_INIT_DETAILS";
const SaveEmployeeAdditionalDetailsType = "MOVE_EMP_ADDITIONAL_DETAILS_SAVE";
const SaveEmployeeFinanceDetailsType = "MOVE_EMP_FINANCE_DETAILS_SAVE";
const SaveEmployeeSirvaType = "MOVE_EMP_DETAILS_SIRVA_SAVE";
const SaveNonCompetitivePackageDetailsType = "MOVE_NON_COMPETITIVE_PACKAGE_SAVE";
const SavePreInitDetailsType = "MOVE_PRE_INIT_SAVE";

const actions = {
    fetchLeaderShipPrograms: () =>
        CreateActionCreator.read({
            type: leaderShipProgramsType,
            apiCall: MoveInitiationAPI.getLeaderShipPrograms,
            args: [],
        }),
    fetchCaliforniaTiers: () =>
        CreateActionCreator.read({
            type: CaliforniaTiersType,
            apiCall: MoveInitiationAPI.getCaliforniaTiers,
            args: [],
        }),
    fetchFinancePartner: partner =>
        CreateActionCreator.read({
            type: FinancePartnerType,
            apiCall: MoveInitiationAPI.getFinancePartner,
            args: [partner],
        }),
    fetchMoveDashboardMemberList: () =>
        CreateActionCreator.read({
            type: MoveDashboardType,
            apiCall: MoveInitiationAPI.getMoveDashboardMemberList,
            args: [],
        }), 
    fetchEmpJobDetails: (employeeWWID, jobID) =>
        CreateActionCreator.read({
            type: EmployeeAndJobDetailsType,
            apiCall: MoveInitiationAPI.getEmpJobDetails,
            args: [employeeWWID, jobID],
        }),
    fetchEmpJobDetailsPosId: (employeeWWID, posID) =>
        CreateActionCreator.read({
            type: EmployeeAndJobDetailsPosType,
            apiCall: MoveInitiationAPI.getEmpPosJobDetails,
            args: [employeeWWID, posID],
        }),
    setMoveEmppJobDetails: (data) =>
        CreateActionCreator.read({
            type: SaveEmployeeAndJobDetailsType,
            apiCall: MoveInitiationAPI.setMoveEmppJobDetails,
            args: [data],
        }),
    fetchEmpCompetitiveInit: (reqContestNumber) =>
        CreateActionCreator.read({
            type: EmployeeCompetitiveInitiationPosType,
            apiCall: MoveInitiationAPI.getEmpCompetitiveInit,
            args: [reqContestNumber],
        }),
    setMoveAdditionalMoveDetails: (data) =>
        CreateActionCreator.read({
            type: SaveEmployeeAdditionalDetailsType,
            apiCall: MoveInitiationAPI.setMoveAdditionalMoveDetails,
            args: [data],
        }),
    setMoveFinanceMoveDetails: (data) =>
        CreateActionCreator.read({
            type: SaveEmployeeFinanceDetailsType,
            apiCall: MoveInitiationAPI.setMoveFinanceMoveDetails,
            args: [data],
        }),
    setMoveEmppSirvaDetails: (data) =>
        CreateActionCreator.read({
            type: SaveEmployeeSirvaType,
            apiCall: MoveInitiationAPI.setMoveEmppSirvaDetails,
            args: [data],
        }),
    setNonCompetitivePackageDetails: (data) =>
        CreateActionCreator.read({
            type: SaveNonCompetitivePackageDetailsType,
            apiCall: MoveInitiationAPI.setNonCompetitivePackageDetails,
            args: [data],
        }),
    setPreInitDetails: (data) =>
        CreateActionCreator.read({
            type: SavePreInitDetailsType,
            apiCall: MoveInitiationAPI.setPreInitDetails,
            args: [data],
        }),    
};

const leaderShipProgramsReducer = createDataReducer(leaderShipProgramsType);
const CaliforniaTiersReducer = createDataReducer(CaliforniaTiersType);
const financePartnerReducer = createDataReducer(CaliforniaTiersType);
const moveDashboardReducer = createDataReducer(MoveDashboardType);
const empJobDetReducer = createDataReducer(EmployeeAndJobDetailsType);
const empJobDetPosReducer = createDataReducer(EmployeeAndJobDetailsPosType);
const empCompetitiveInitReducer = createDataReducer(EmployeeCompetitiveInitiationPosType);

const reducer = combineReducers({
    leaderShipPrograms: leaderShipProgramsReducer,
    californiaTiers: CaliforniaTiersReducer,
    financePartner: financePartnerReducer,
    movedashboard: moveDashboardReducer,
    empJobDetails: empJobDetReducer,
    empPosJobDetails: empJobDetPosReducer,
    empCompetitiveInitDetails: empCompetitiveInitReducer,
});

export default {
    type,
    actions,
    reducer,
};
