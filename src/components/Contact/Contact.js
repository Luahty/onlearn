import './Contact.css'
import contact from '../../image/contact/blog-3.jpg'
function Contact() {

    return (
        <div className="bg-contact w-screen h-screen relative">
            {/* Backdrop Blur Overlay */}
            <div className="absolute inset-0 backdrop-blur-md"></div>

            {/* Content Section */}
            <div className="pt-12 relative z-10 w-full h-full flex flex-col items-center justify-center">
                {/* Header Section */}
                <div className='m-4'>
                    <div className='text-center text-5xl font-bold bg-gradient-to-r from-teal-500 to-orange-500 text-transparent bg-clip-text'>
                        Get in touch
                    </div>
                    <div className='text-center text-teal-500 text-xs'>
                        Reach out, and let's create a universe of possibilities together!
                    </div>
                </div>

                {/* Form and Image Section */}
                <div className='w-full sm:w-[70%] lg:w-[60%] h-[70%] sm:h-[80%] grid grid-cols-1 sm:grid-cols-2 rounded-xl bg-[#0a0d17ce]'>
                    {/* Form Section */}
                    <div className='px-10 py-6'>
                        <div className='text-white text-lg font-semibold'>
                            Let’s connect constellations
                        </div>
                        <div className='text-white text-[10px]'>
                            Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
                        </div>

                        {/* Form Inputs */}
                        <div className='py-2 w-full grid grid-flow-row gap-2'>
                            <div className='grid grid-cols-2 gap-x-2'>
                                <div>
                                    <input
                                        id="lastName"
                                        className="rounded-sm text-white p-2 bg-[#ffffff18] w-full"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="firstName"
                                        className="rounded-sm text-white p-2 bg-[#ffffff18] w-full"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    id="email"
                                    className="rounded-sm text-white p-2 bg-[#ffffff18] w-full"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <input
                                    id="phone"
                                    className="rounded-sm text-white p-2 bg-[#ffffff18] w-full"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    className="rounded-sm text-white p-2 bg-[#ffffff18] w-full h-[120%] resize-none"
                                    placeholder="Message"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className='bg-teal-300 hover:bg-teal-500 hover:text-white w-full p-2 my-3 font-semibold rounded-sm'>
                            Submit
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className='w-full h-full p-4 overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-xl' src={contact} alt="Contact Us" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
