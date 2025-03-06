import RequestCard from './components/requestCard/requestCard'
import {
  UserGroupIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const Home = () => {
  const requests = [
    {
      title: 'Manpower',
      desc: 'Request for Allocation of Personnel',
      icon: UserGroupIcon,
    },
    {
      title: 'Tech',
      desc: 'Request for Tech Equipment',
      icon: DevicePhoneMobileIcon,
    },
    { title: 'Permits', desc: 'Request for Permits', icon: DocumentTextIcon },
  ]
  return (
    <>
      <div className="px-16 py-20">
        <h1 className="font-bold text-5xl">Available Requests Forms</h1>
        <div className="py-16 flex space-x-12">
          {requests.map((request) => {
            return (
              <RequestCard key={request.title} request={request}></RequestCard>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
