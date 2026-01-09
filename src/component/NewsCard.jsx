const NewsletterForm = () => {
    return (<>
    
        <div className="p-2 mx-6 bg-white rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center rounded-xl">
                {/* Image Container */}
                <img 
                        src="/rectangle2.jpg" 
                        alt="Newsletter" 
                        className="object-cover rounded-xl h-80 md:h-1/2 transform hover:scale-103 duration-200"
                />
                {/* Content */}
                <div className="p-6 md:p-12">
                    <h2 className="font-poppins text-[28px] font-bold text-left text-Dark-Lavender">Get Updated!</h2>
                    <p className="max-w-xs text-sm mt-2 leading-relaxed font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <form action="" className="mt-16 flex flex-col gap-2">
                        <input type="email" placeholder="moe@example.com" className="w-full p-3  border border-gray-200 rounded-md placeholder:text-sm placeholder:text-center placeholder:font-poppins focus:outline-none" />
                        <button className="px-2 py-3 mt-3 md:mt-0 bg-Medium-Lavender w-full rounded-sm text-white text-sm font-light cursor-pointer transition hover:bg-Dark-Lavender duration-500">Subscribe Now</button>
                    </form>
                </div>
            </div>
            {/* Image Container */}
            
   
            
            
        </div>
    
    </>);
}
 
export default NewsletterForm;