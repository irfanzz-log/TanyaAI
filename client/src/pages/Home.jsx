import { useState, useEffect, useRef } from "react";

function Home() {

    // State react

    function handleButtonPrompt(e) {

        // 1. Buat fungsi fetch
        // 2. Buat fungsi post pertanyaan ke backend
    }

    useEffect(() => {
        // 3. Buka stream ke backend dengan SSE EventSource
    },);

    function handleButtonNewChat(e) {
        // 4. Buat fungsi reset petanyaan
    }

    return (
        <>
            <main className="w-full relative overflow-y-auto">
                <header className="w-full border-b-1 border-black/10 p-5 ">
                    <p className="text-md font-bold text-center">
                        Chat
                    </p>
                </header>

                <section className="max-h-[80vh] overflow-y-auto p-10">

                    {/* Buat UI chat disini */}
                    
                </section>

                <section className="absolute bottom-10 w-full">
                    <form className="w-full flex justify-center items-center">
                        <input className="w-3/4 p-4 px-5 rounded-full m-2 bg-white
                        focus:outline-none text-xs hover:text-lg shadow-[0px_0px_1px_1px_rgba(0,0,0,0.2)] p-2
                            transition-all duration-200 ease-in-out"
                            type="text"
                            placeholder="Tanya sesuatu.."
                        />
                        <button className="border-none bg-white rounded-full focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-send-arrow-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-2.8 7a.5.5 0 1 1-.928-.372l1.895-4.738-7.494 7.494 1.376 2.162a.5.5 0 1 1-.844.537l-1.531-2.407L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM5.93 9.363l7.494-7.494L1.591 6.602z" />
                            <path fillRule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z" />
                        </svg></button>
                    </form>
                </section>

            </main>
            <aside className="bg-gray-100 w-xs h-full">
                <div className="m-5 flex justify-center items-center flex-col">
                    <p className="font-bold text-3xl">Tanya Ai</p>
                    <p className="text-xs">powered by think</p>
                </div>
                <div className="p-3">
                    <button className="w-full p-2 mb-2 bg-white rounded-lg shadow-md
                    hover:bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none">
                        + Pertanyaan Baru
                    </button>
                </div>
            </aside>
            <footer className="fixed bottom-0 w-full flex justify-center">
                <div className="">
                    <p className="text-xs p-2">Presented by COMMIT-UNIPEM</p>
                </div>
            </footer>
        </>
    )
}

export default Home;