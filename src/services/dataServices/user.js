import { createUserManager } from 'redux-oidc';
import { WebStorageStateStore } from 'oidc-client';
import { CreateActionCreator, createDataReducer } from 'helpers';
import { combineReducers } from 'redux';
import { UserAPI, RelocationsAPI } from 'api';
import { OIDC_SETTINGS } from 'consts';
import { clearSessionStorage } from 'utils';

const type = "USER";

const userActions = {
    getUser: (userID) => CreateActionCreator.readAsync({
        type,
        apiCall: UserAPI.getUser,
        args: [ userID ]
    }),

    setRole: (user) => CreateActionCreator.update({
        type,
        apiCall: UserAPI.setRole,
        args: [ user ]
    }),

    setActiveRelocation: (userEmail, relocationId) => CreateActionCreator.update({
        type,
        apiCall: RelocationsAPI.setActiveRelocation,
        args: [ userEmail, relocationId ]
    })
};

const userReducer = createDataReducer(type);

const authReducer = function(state = {isLoadingUser: !!localStorage.getItem('authenticated')}, action){
    return (
        (({
            'redux-oidc/USER_FOUND': function(state, action){
                console.log("redux-oidc/USER_FOUND; state="+state);
                return {
                    ...state,
                    access_token:action.payload.access_token,
                    email:action.payload.profile.sub,
                    isLoadingUser:false
                };
            },
            'redux-oidc/SESSION_TERMINATED': function(state){
                console.debug("redux-oidc/SESSION_TERMINATED; state="+state);
                return {};
            },
            'redux-oidc/USER_EXPIRED': function(state){
                console.debug("redux-oidc/USER_EXPIRED; state="+state);
                return {};
            },
            'redux-oidc/USER_SIGNED_OUT': function(state){
                console.debug("redux-oidc/USER_SIGNED_OUT; state="+state);
                return state;
            }
        })[action.type]) || (() => state)
    )(state, action)
};

const reducer = combineReducers({
    auth: authReducer,
    profile: userReducer
});

const generateNewUserManager = function() {
    if (userManagerProvider) {
        console.log('UserManager has already created = ' + userManagerProvider);
        return userManagerProvider;
    }
    const um = createUserManager({
        ...OIDC_SETTINGS,
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        iframeNavigator: true
    });
    um.events.addUserLoaded(function(...ev: any[]) {
        console.debug("um event addUserLoaded - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : ''));
    });
    um.events.removeUserLoaded(function(...ev: any[]) {
        console.debug("um event removeUserLoaded - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
    });
    um.events.addUserUnloaded(function(...ev: any[]) {
        console.debug("um event addUserUnloaded - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
        window.localStorage.clear();
        clearSessionStorage();
    });
    um.events.removeUserUnloaded(function(...ev: any[]) {
        console.debug("um event removeUserUnloaded - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
    });
    um.events.addSilentRenewError(function(...ev: any[]) {
        console.debug("um event addSilentRenewError - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
    });
    um.events.removeSilentRenewError(function(...ev: any[]) {
        console.debug("um event removeSilentRenewError - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
    });
    um.events.addUserSignedOut(function(...ev: any[]) {
        console.debug("um event addUserSignedOut - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
        window.localStorage.clear();
        clearSessionStorage();
    });
    um.events.removeUserSignedOut(function(...ev: any[]) {
        console.debug("um event removeUserSignedOut - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
    });
    um.events.addUserSessionChanged(function(...ev: any[]) {
        console.debug("um event addUserSessionChanged - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
    });
    um.events.removeUserSessionChanged(function(...ev: any[]) {
        console.debug("um event removeUserSessionChanged - ev:" + ev + ";ev1:"+ (ev && ev.length > 0 ? ev[0] : null));
    });

    um.startSilentRenew();
    console.debug('UserManager was created = ' + um);
    return um;
};

const userManagerProvider = generateNewUserManager();

export default {
    type,
    actions: userActions,
    reducer,
    get userManager(){
        return userManagerProvider
    }
};
