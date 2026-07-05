import { sampleConversations } from '../../data/sampleConversations.js'
import { teachers } from '../../data/teachers.js'
import SampleShot from './SampleShot.jsx'

export default function SampleConversations() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {Object.values(teachers).map((teacher) => {
        const shot = sampleConversations[teacher.id]
        return (
          <div key={teacher.id}>
            <h3 className="karla-text mb-3 text-lg font-bold" style={{ color: teacher.accent }}>
              {teacher.name}
            </h3>
            {shot && <SampleShot src={shot.src} caption={shot.caption} />}
          </div>
        )
      })}
    </div>
  )
}
