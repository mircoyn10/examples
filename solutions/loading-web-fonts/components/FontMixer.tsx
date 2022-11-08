import { useState } from 'react'

interface FontMixerProps {
  fonts: [string, string]
  children: string
}

const FontMixer: React.VFC<FontMixerProps> = ({ fonts: [a, b], children }) => {
  const [fader, setFader] = useState(0)

  return (
    <section className="flex flex-col items-center gap-4">
      <section className="flex gap-6 relative h-[320px] w-[100%] border border-gray-200 leading-6">
        <article
          className="p-4 absolute h-[320px] text-ellipsis overflow-hidden text-blue-500"
          style={{
            fontFamily: a,
            width: '50%',
            left: `${fader}%`,
            filter: `grayscale(${1 - fader / 25})`,
          }}
        >
          {children}
        </article>
        <article
          className="p-4 absolute h-[320px] text-ellipsis overflow-hidden text-pink-500"
          style={{
            fontFamily: b,
            width: '50%',
            right: `${fader}%`,
            filter: `grayscale(${1 - fader / 25})`,
          }}
        >
          {children}
        </article>
      </section>
      <input
        value={fader}
        min={0}
        max={25}
        onChange={(e) => setFader(Number(e.target.value))}
        className="w-[50%]"
        type="range"
      />
    </section>
  )
}

export default FontMixer
