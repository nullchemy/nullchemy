import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../state/hooks'

interface User {
  loggedIn: boolean
}

const useAuth = (): boolean => {
  const islogged: any = useAppSelector((state) => state.logged)
  const user: User | null = { loggedIn: islogged }
  return user && user.loggedIn
}

const ProtectedRoutes = (): JSX.Element => {
  const isAuth: boolean = useAuth()
  let location = useLocation()
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default ProtectedRoutes
