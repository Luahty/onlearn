export default function Section4() {
    return (
      <div className="relative bg-red-600 rounded-lg mb-20 mt-28 xl:mx-32 mx-10 sm:mx-14 lg:mx-24 flex justify-between">
        <div className="px-14 pt-12 pb-7 z-10">
          <div className="lg:max-w-md">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Why You should buy gift cards?
            </h1>
          </div>
          <div className="mt-8 text-white text-sm">
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
              className="inline-block h-[49px] w-[140px] rounded-md bg-white text-center py-3 text-base font-semibold text-[#0B7077] shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              BUY NOW
            </a>
          </div>
        </div>
  
        <div className="invisible lg:visible absolute bottom-0 right-0 -mr-6 lg:w-1/2 z-20">
          <img
            src={require(`../image/section6/gift.png`)}
            alt="gift card image"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    );
  }
  