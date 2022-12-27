import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Student"

    if (token) {
        const decoded = jwtDecode(token)
        const {_id, username, role } = decoded.UserInfo

         isManager = role.includes('Prof')
         isAdmin = role.includes('Admin')

        if (isManager) status = "Prof"
        if (isAdmin) status = "Admin"

        return { _id,username, role, status, isManager, isAdmin}
    }

    return { _id:'',username: '', role: [], isManager, isAdmin, status}
}
export default useAuth