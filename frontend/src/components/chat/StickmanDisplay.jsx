import { teachers } from '../../data/teachers.js'

export default function StickmanDisplay({ teacherId, status }) {
  const teacher = teachers[teacherId]
  const src = teacher.images[status] ?? teacher.images.idle

  return (
    <div className="flex w-24 shrink-0 flex-col items-center justify-end sm:w-48 md:w-64 lg:w-72">
      <img
        key={src}
        src={src}
        alt={`${teacher.name} — ${status}`}
        className="rise-in w-full object-contain drop-shadow-xl"
      />
    </div>
  )
}
