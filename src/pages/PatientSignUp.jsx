import PatientSignUpForm from '../features/authentication/SignupForm'
import EntryLayout from '../ui/EntryLayout'
import Heading from '../ui/Heading'
import Logo from '../ui/Logo'

function PatientSignUp() {
  return (
    <EntryLayout type="patientsignup">
      <Logo />
      <Heading as="h4">Sign Up Form</Heading>
      <PatientSignUpForm />
    </EntryLayout>
  )
}
export default PatientSignUp
