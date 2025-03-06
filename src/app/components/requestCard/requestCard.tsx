import * as Icons from '@heroicons/react/24/outline' // Import all icons

const RequestCard = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-[#FFFFFF] drop-shadow-lg shadow-lg px-12 py-10 rounded-md w-60 hover:opacity-60 transition duration-200 ease-in-out hover:translate-y-2">
          <div className="flex flex-col justify-center items-center">
            <div>
              <Icons.UserGroupIcon className="w-20 h-auto"></Icons.UserGroupIcon>
            </div>
            <div className="flex flex-col justify-center items-center text-[#000000] space-y-1">
              <h1 className="font-bold text-4xl">Manpower</h1>
              <p className="text-wrap text-md text-center">
                Request for Allocation of Personnel
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestCard
