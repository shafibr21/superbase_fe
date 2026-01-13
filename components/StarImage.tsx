import Image from 'next/image'

const StarImage = () => {
  return (
    <div>
        {/* Star Decorations - Fixed positions */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 z-0">
                <Image
                  src="/small_star.svg"
                  alt="Star Decoration"
                  width={50}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-64 right-8 md:right-20 z-0">
                <Image
                  src="/big_star.svg"
                  alt="Star Decoration"
                  width={128}
                  height={32}
                  className="object-contain"
                />
              </div>
    </div>
  )
}

export default StarImage