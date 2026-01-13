import Image from 'next/image'

const SharkImage = () => {
  return (
    <div>
        <div className="hidden sm:block fixed bottom-50 left-10 w-44 md:w-56 lg:w-64 z-0 pointer-events-none">
                <Image
                  src="/playing_shark.svg"
                  alt="SuperBase Shark Mascot"
                  width={256}
                  height={256}
                  className="w-full h-auto animate-float"
                />
        </div>
    </div>
  )
}

export default SharkImage