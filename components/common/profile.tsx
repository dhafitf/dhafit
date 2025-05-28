const Profile = ({ name, role }: { name: string; role: string }) => {
  return (
    <div className='flex flex-col gap-1 tracking-wider'>
      <h1 className='text-cyan font-bold text-4xl'>{name}</h1>
      <h2 className='text-white font-semibold text-2xl'>{role}</h2>
    </div>
  )
}

export default Profile
