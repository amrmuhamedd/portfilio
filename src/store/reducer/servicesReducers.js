import services from '../services';
import skills from '../skills'
const initState = {
    services : services,
    skills : skills
}

const ServicesReducer = (state = initState , action) => {
    return state;
} 
export default ServicesReducer;