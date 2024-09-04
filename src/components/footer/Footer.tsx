import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-lime-500  text-white">
                <div className="flex flex-col items-center py-4 container">
                    <p className='font-bold text-xl'>Farmassales Everton P. Generation | Copyright: {data}</p>
                    <p className='text-lg'>Explore nossa redes sociais</p>
                    <div className='flex gap-2'>
                        
                            <LinkedinLogo size={48} weight='bold' />

                            <InstagramLogo  size={48} weight='bold' />
                        
                            <FacebookLogo size={48} weight='bold' />
                            

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer