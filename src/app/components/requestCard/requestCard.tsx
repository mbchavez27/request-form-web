import * as Icons from '@heroicons/react/24/outline' // Import all icons

type requestType = {
  title: string
  desc: string
  icon: React.ElementType
}

const RequestCard = ({ request }: { request: requestType }) => {
  const Icon = request.icon
  return (
    <>
      <div className="flex">
        <div className="bg-[#FFFFFF] drop-shadow-lg shadow-lg px-12 py-6 rounded-md w-52 hover:opacity-60 transition duration-200 ease-in-out hover:translate-y-2 flex items-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <div>
              <Icon className="w-16 h-auto"></Icon>
            </div>
            <div className="flex flex-col justify-center items-center text-[#000000] space-y-1">
              <h1 className="font-bold text-2xl">{request.title}</h1>
              <p className="text-wrap text-md text-center">{request.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestCard
