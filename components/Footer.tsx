import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6"
import MargicButton from "./ui/MargicButton"
import { IoMail } from "react-icons/io5"


const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 ' id='contact'>
        <div className="w-full absolute left-0 -bottom-1 min-h-96">
            <img src='/John-doe-portfolio/footer-grid.svg' alt="grid" className='w-full h-full opacity-100'/>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take your{' '} 
                <span className="text-purple">digital presence{' '}
                </span>
                to a next level
            </h1>

            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let's discuss how I can help you achieve your goals.</p>

            <a href="mailto:ebikemeese@gmail.com">
                <MargicButton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-small md:font-normal font-light">
                Developed by Ebikeme Ese
            </p>

            <div className='flex items-center md:gap-3 gap-6 z-5'>
                <a 
                    href="https://wa.me/2348123208257" 
                    target='_blank' 
                    className="hover:cursor-pointer"
                >
                    <FaWhatsapp className="text-2xl" />
                </a>

                <a 
                    href="mailto:ebikemeese@gmail.com?subject=John%20Doe's%20Portfolio%20Website" 
                    target='_blank' 
                    className="hover:cursor-pointer"
                >
                        <IoMail className="text-2xl" />
                    </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer