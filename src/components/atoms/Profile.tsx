import React from "react"

interface Props {
  name: string
  role: string
}

const Profile = ({ name, role }: Props) => {
  return (
    <div className="flex flex-col gap-1 tracking-wider">
      <h1 className="text-cyan font-bold text-4xl">{name}</h1>
      <h2 className="text-white font-semibold text-2xl">{role}</h2>
    </div>
  )
}

export default Profile
