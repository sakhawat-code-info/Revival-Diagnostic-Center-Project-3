

const TestResults = () => {
    return (
        <section id="faq" className="container relative mx-auto py-12 px-2">

            <h3 className="mb-14 text-teal-900 flex items-center justify-center text-3xl font-semibold lg:text-left xl:text-4xl">
                Download Report & Dr Appointment
            </h3>



            <div className="my-6">
                <div
                    className="rounded-t-2xl bg-teal-600/80 w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="border-r-2 px-4 text-center">
                            <h4 className="text-lg font-medium text-gray-200">Report Publish Date / Time</h4>
                            <p>24:13:10s</p>
                        </div>
                        <div className="border-r-2 px-4 text-center">
                            <h4 className="text-lg font-medium text-gray-200">Test Done Date</h4>
                            <p>18/05/2024</p>
                        </div>

                        <div className=" px-4 text-center">
                            <h4 className="text-lg font-medium text-gray-200">Suggest By</h4>
                            <p>Dr. Monir (MBBS, FCPS DMC)</p>
                        </div>
                    </div>

                    <div>
                        <button type="button"
                            className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600" disabled="disabled">
                            Download
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="currentColor" className="ml-2 inline" viewBox="0 0 24 24">
                                <path
                                    d="M12 16a.749.749 0 0 1-.542-.232l-5.25-5.5A.75.75 0 0 1 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75a.75.75 0 0 1 .542 1.268l-5.25 5.5A.749.749 0 0 1 12 16zm10.25 6H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
                                    data-original="#000000" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div
                    className=" w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 bg-teal-100/50 px-4 py-4 text-teal-800 flex justify-between items-center">
                    <h5>We accept several payment methods .</h5>
                    <div className="flex items-center justify-center gap-4">
                        <button type="button"
                            className="bg-white py-2.5 min-w-[140px] shadow-xl rounded-full text-black text-sm tracking-wider font-medium border-none outline-none active:shadow-inner hover:bg-gray-300">
                            Re-test
                        </button>
                        <button type="button"
                            className="bg-white py-2.5 min-w-[155px] shadow-xl rounded-full text-black text-sm tracking-wider font-medium border-none outline-none active:shadow-inner hover:bg-gray-300">
                            DR Appointment
                        </button>
                        <button type="button"
                            className="bg-white py-2.5 min-w-[140px] shadow-xl rounded-full text-black text-sm tracking-wider font-medium border-none outline-none active:shadow-inner hover:bg-gray-300">
                            Complain
                        </button>
                    </div>
                </div>
            </div>






        </section>
    );
};

export default TestResults;