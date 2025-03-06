import RequestCard from './components/requestCard/requestCard'

const Home = () => {
  return (
    <>
      <div className="px-16 py-20">
        <h1 className="font-bold text-5xl">Available Requests Forms</h1>
        <div className="py-16 flex space-x-12">
          <RequestCard></RequestCard>
          <RequestCard></RequestCard>
          <RequestCard></RequestCard>
        </div>
      </div>
    </>
  )
}

export default Home
