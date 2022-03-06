import { Navigate, Outlet } from 'react-router-dom'
import { Auth } from '../util/types'


const ProtectedRoutes: React.FC<Auth> = ({ auth }) => {
    const isAuth = auth
    return isAuth ? <Outlet /> : <Navigate to='/signin' />
}

export default ProtectedRoutes