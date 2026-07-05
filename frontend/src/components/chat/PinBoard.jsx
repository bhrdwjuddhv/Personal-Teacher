import { teachers } from '../../data/teachers.js'

export default function PinBoard({ current, onSelect, disabled }) {
  return (
    <div className="flex w-14 shrink-0 flex-col gap-3 rounded-md bg-[#b9895f] p-2 shadow-inner sm:w-28 sm:gap-4 sm:p-3">
      {Object.values(teachers).map((teacher) => {
        const active = teacher.id === current
        return (
          <button
            key={teacher.id}
            type="button"
            onClick={() => onSelect(teacher.id)}
            disabled={disabled}
            className="pin-idle relative rounded-sm bg-amber-50 px-1 py-3 text-center shadow-md transition disabled:cursor-not-allowed sm:px-2 sm:py-4"
            style={{
              '--tilt': teacher.id === 'hitesh' ? '-4deg' : '4deg',
              border: `2px solid ${active ? teacher.accent : 'transparent'}`,
              opacity: active ? 1 : 0.75,
            }}
          >
            <span
              className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full shadow sm:h-2.5 sm:w-2.5"
              style={{ backgroundColor: teacher.accent }}
            />
            <span className="karla-text mt-1.5 block text-[10px] font-bold text-stone-800 sm:text-sm">
              {teacher.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}
