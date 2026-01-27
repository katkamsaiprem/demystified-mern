import { ProfileCard } from './components/ProfileCard.jsx'



const data = [{
  id: 1,
  name: "saiprem",
  designation: "FullStack dev"
},
{
  id: 2,
  name: "prem",
  designation: "Frontend dev",
},
{
  id: 3,
  name: "sai",
  designation: "Backend dev",
}]




function App() {


  return (
    <>
      {
        data.map((profileData) => {
          return <ProfileCard id={profileData.id} name={profileData.name} designation={profileData.designation}></ProfileCard>
        })
      }


    </>
  )
}

export default App
