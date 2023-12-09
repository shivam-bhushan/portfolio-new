
export default function ProjectCard({ name,  image,  description, tech, link}) {
  return (
    <div className="border p-5 rounded-md">
      <div className="flex flex-col items-center text-left">
        <div className=" border rounded-md  mb-3">
          <img src={image} alt="item image" className="rounded-md"/>
        </div>
        <div className="ml-4">
          <h2 className="text-slate-300 text-2xl mb-3 text-bold">{name}</h2>
          <p className="text-slate-400 text-lg break-normal mb-3">{description}</p>
          <div className="text-slate-500 mb-3 text-md">{tech}</div>
          <div className="text-blue-500 mb-3">{link}</div>
        </div>
      </div>
    </div>
  )
}
