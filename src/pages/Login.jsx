import LoginForm from '../features/authentication/LoginForm'
import EntryLayout from '../ui/EntryLayout'
import Heading from '../ui/Heading'
import Logo from '../ui/Logo'

function Login() {
  return (
    <EntryLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </EntryLayout>
  )
}

export default Login
