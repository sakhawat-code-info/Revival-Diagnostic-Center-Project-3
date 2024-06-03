

const Promotions = () => {
    return (
        <div>
            <div className="font-[sans-serif] text-gray-800 bg-gray-100 px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
                    <div className="text-left">
                        <h2 className="text-4xl font-extrabold mb-6">Comprehensive Medical Testing Services </h2>
                        <p className="mb-4 text-sm"> At [Your Diagnostic Center Name], we provide a wide range of medical tests to ensure accurate diagnosis and effective treatment plans.</p>
                        <p className="mb-4 text-sm">Our state-of-the-art facility is equipped with the latest technology, and our team of experienced professionals is dedicated to delivering reliable and timely results. Whether you need routine screenings or specialized diagnostics, we are here to support your healthcare needs.</p>
                        <p className="text-sm"> A fundamental blood test that evaluates overall health and detects a wide range of disorders, including anemia, infection, and many other diseases.</p>
                        <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Complete Blood Count (CBC)</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Lipid Profile</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Blood Glucose Test</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Thyroid Function Tests (TFT)</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Liver Function Tests (LFT)</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Kidney Function Tests (KFT)</h6>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotions;