import DashboardLayout from "../components/Navbar" 
import FinancialStatement from "../pages/User/Financial-Statement"
import Dashboard from "../pages/User/Dashboard"
import TrialBalance from "../pages/User/TrialBalance"
import CreateStatement from "../pages/User/CreateStatement"
 
 const userRoutes = [
    {
        path:'/dashboard',
        component: DashboardLayout,
        children: Dashboard
    },
    {
        path:'/financial-statement',
        component: DashboardLayout,
        children: FinancialStatement
    },
    {
        path:'/trial-balance',
        component: DashboardLayout,
        children: TrialBalance
    },
    {
        path:'/create-statement',
        component: DashboardLayout,
        children: CreateStatement
    }
 ]

 export default userRoutes