
function Home() {
    return (
        <>
            <div className="flex justify-center bg-orange-800">
                <div className='grid grid-cols-2 text-white container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='  flex justify-center font-bold text-5xl'>
                            Seja bem Vindo a Farmassales
                        </h2>
                        <h2 className='  flex justify-center font-bold text-5xl'>
                            Prazer em atende-lo!
                        </h2>
                        <p className='text-2xl'>Aqui se você não melhorar, fica doido!</p>

                        <div className="flex justify-around gap-4">
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaysGuYhop2g6gg3YmW0HMIbFslV9BKuWq-g&s"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home