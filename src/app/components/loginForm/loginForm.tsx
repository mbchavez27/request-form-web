import { EnvelopeIcon } from '@heroicons/react/24/outline'
const LoginForm = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] drop-shadow-lg shadow-lg px-12 pt-8 pb-12 rounded-md w-80">
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="text-[#000000] font-bold text-3xl text-center">
            Logistics Request Form
          </h1>
          <button className="text-[#EEEEEE] bg-[#034D2A] flex items-center py-1 px-2 rounded-md shadow-md drop-shadow-md hover:opacity-50 duration-200 transition ease-in-out">
            <EnvelopeIcon className="w-8 mx-2"></EnvelopeIcon>
            Login using Email
          </button>
        </div>
      </div>
    </>
  )
}

export default LoginForm
