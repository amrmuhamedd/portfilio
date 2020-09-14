import {combineReducers} from 'redux'
import projectsReducers from './projectsReducers';
import uiReducers from './uiReducer';
import services from './servicesReducers'
const rootRducer = combineReducers({
    ui : uiReducers,
    projects: projectsReducers,
    services: services
})
    


export default rootRducer;