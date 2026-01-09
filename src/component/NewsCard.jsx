const NewsCard = () => {
  return (
    <>
      <div className="bg-white rounded-xl mx-6 px-2">
        <div className="flex flex-col md:items-center md:flex-row p-2">
          {/* Image Container */}
          <img
            src="/rectangle2.png"
            alt=""
            className="h-80 md:h-80 object-cover transform hover:scale-102 duration-300 rounded-md"
          />
          {/* Text Container */}
          <div>
            {/* Heading Text */}
            <div className="py-6 md:ml-6">
              <h1 className="text-Dark-Lavender font-poppins font-bold text-2xl">
                Get Updated!
              </h1>
              <p className="max-w-[300px] mt-3 text-black font-poppins text-xs font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              {/* Form Container */}
              <div className="mt-6">
                <p className="font-poppins text-xs">Email address</p>
                <form action="">
                  <input
                    type="text"
                    className="mt-1 px-1 py-2 w-full border border-gray-100 rounded-sm placeholder:font-poppins placeholder:text-xs focus:outline-Dark-Lavender"
                    placeholder="moe@example.com"
                  />
                  <button className="bg-Medium-Lavender px-1 py-2 w-full mt-2 md:mt-4 rounded-md font-poppins font-light text-white text-sm transition hover:bg-Dark-Lavender duration-300 cursor-pointer">
                    Subscribe now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
