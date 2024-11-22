import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import { useLogout } from '../features/authentication/useLogout'
import ButtonIcon from './ButtonIcon'
import SpinnerMini from './SpinnerMini'

function LogOut() {
  const { logout, isLoading } = useLogout()

  return (
    <div>
      <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </ButtonIcon>
    </div>
  )
}

export default LogOut
