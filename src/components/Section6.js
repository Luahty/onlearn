export default function Section4() {
    return (
      <div className="my-10 md:my-25 relative bg-red-600 rounded-lg mb-20 mt-28 xl:mx-32 mx-10 sm:mx-14 lg:mx-24 flex justify-between">
        <div className="px-5 pt-5 md:px-14 md:pt-12 md:pb-7 z-10 pb-72 sm:pb-96">
          <div className="lg:max-w-md">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white">
              Why You should buy gift cards?
            </h1>
          </div>
          <div className="mt-8 text-white text-sm md:w-4/5 lg:w-full">
            <ul className="space-y-2">
              <li className="flex items-center gap-x-3">
                <img
                  src={require(`../image/section6/star.png`)}
                  className="h-6 w-auto flex-none"
                  alt="star"
                />
                <span>
                  Teachers don’t get lost in the grid view and have a dedicated Podium space.
                </span>
              </li>
              <li className="flex items-center gap-x-3">
                <img
                  src={require(`../image/section6/star.png`)}
                  className="h-6 w-auto flex-none"
                  alt="star"
                />
                <span>
                  Teachers don’t get lost in the grid view and have a dedicated Podium space.
                </span>
              </li>
              <li className="flex items-center gap-x-3">
                <img
                  src={require(`../image/section6/star.png`)}
                  className="h-6 w-auto flex-none"
                  alt="star"
                />
                <span>
                  Teachers don’t get lost in the grid view and have a dedicated Podium space.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <a
              href="#"
              className="inline-block md:h-[49px] md:w-[140px] rounded-md bg-white text-center px-2 py-2 md:py-3 text-sm md:text-base font-semibold text-accent shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              BUY NOW
            </a>
          </div>
        </div>
  
        <div className="w-full max-w-[300px] md:w-[300px] xl:w-[450px] lg:max-w-[450px] lg:w-1/3 absolute bottom-0 transform -translate-x-1/2 md:translate-x-[20%] lg:translate-x-[55%] xl:translate-x-[40%] left-1/2 z-20">
          <img
            src={require(`../image/section6/gift.png`)}
            alt="gift card image"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    );
  }
  