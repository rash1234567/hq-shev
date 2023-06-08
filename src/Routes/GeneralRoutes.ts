import SelectUserType from '../pages/Onboarding/SelectUserType'
import Onboarding from '../pages/Onboarding/Index';


export type RoutesType = {
    path: string;
    name: string;
    component: React.ComponentType<any>;
    subRoutes?: RoutesType[];
  };
  

const GeneralRoutes: RoutesType[] = [
    {
        path: '/onboarding', 
        name: 'onboarding',
        component: Onboarding,
    },
    {
        path: '/select-user', 
        name: 'onboarding',
        component: SelectUserType,
    },
]

export default GeneralRoutes