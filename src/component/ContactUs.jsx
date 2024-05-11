import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className='services flex items-center justify-start px-[70px] py-6 pt-20'>
                <h3 className=' bg-lime-400 py-2 px-4 rounded-md text-xl  '>Contact Us</h3>
                <p className=' w-[50%] text-[11px] px-2 ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla provident magni at laborum odio
                    doloribus. Dolorum laudantium, consequuntur dignissimos cumque provident deserunt quo quas a aut ab
                    atque harum.</p>
            </div>

            <div className=" bg-slate-100 w-[90%] h-[550px] m-auto rounded-3xl flex justify-between items-center px-20 mb-60 ">
                <div className="w-[40%]">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form" data-wf-page-id="6491c6f67cd22366fdc73f86" data-wf-element-id="76931534-7a03-e2ac-4065-99ed2f2a0089" aria-label="Email Form">
                        <div className="flex flex-col w-full gap-1 mb-6">
                            <label htmlFor="name" className=" text-xl">Name</label>
                            <input className=" h-10 w-full rounded-lg border-none " maxLength="256" name="name" data-name="Name" placeholder="" type="text" id="name" />
                        </div>
                        <div className="flex flex-col w-full  gap-1 mb-6">
                            <label htmlFor="email" className="text-xl">Email Address*</label>
                            <input className="h-10 w-full rounded-lg border-none" maxLength="256" name="email" data-name="Email" placeholder="" type="email" id="email" required />
                        </div>
                        <div className="flex flex-col w-full  gap-1 mb-6">
                            <label htmlFor="field" className="text-xl">Message*</label>
                            <textarea placeholder="Example Text" maxLength="5000" id="field" name="field" data-name="Field" className="h-10 w-full rounded-lg border-none"></textarea>
                        </div>
                        <input type="submit" data-wait="Please wait..." className=" bg-black text-white px-5 py-3 text-xl rounded-lg" value="Submit" />
                    </form>
                </div>
                <img height={350} width={350} src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/64cba6a986ab7ac79ce5d05f_Illustration%20contact.png" loading="lazy" alt="" className="contact-image" />
            </div>
        </>
    )
}

export default ContactUs