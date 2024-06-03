

const AddBanner = () => {

    const handleNewBanner = (e) => {
        e.preventDefault();
        const form = e.target;

        const bannerName = form.bannerName.value;
        const bannerImageLink = form.bannerImageLink.value;
        const bannerTitle = form.bannerTitle.value;
        const bannerDescription = form.bannerDescription.value;
        const bannerCouponCodeName = form.bannerCouponCodeName.value;
        const bannerCouponRate = form.bannerCouponRate.value;
        const bannerActualRate = form.bannerActualRate.value;
        const bannerIsActive = form.bannerIsActive.value;


        console.log(
            bannerName,
            bannerImageLink,
            bannerTitle,

            bannerDescription,
            bannerCouponCodeName,
            bannerCouponRate,

            bannerActualRate,
            bannerIsActive,
        )
    }

    return (
        <div className="container mx-auto">
            <div className="bg-white border-4 rounded-lg shadow relative m-10">
                <form onSubmit={handleNewBanner}>
                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            Add New Banner
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                        </button>
                    </div>



                    {/* 
bannerName , 
bannerImageLink, 
bannerTitle ,
bannerDescription, 
bannerCouponCodeName, 
bannerCouponRate,
bannerActualRate, 
bannerIsActive, 

*/}

                    <div className="p-6 space-y-6">


                        <div className="grid grid-cols-6 gap-6">


                            <div className="col-span-full mb-4">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Is Active</label>
                                <select id="bannerIsActive" name="bannerIsActive"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
                                    <option value="">Select Active Or Not </option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>

                            </div>






                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                <input type="text" name="bannerName" id="bannerName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Name" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                <input type="text" name="bannerTitle" id="bannerTitle" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Title" required />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Image URL</label>
                                <input type="text" name="bannerImageLink" id="bannerImageLink" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Image URL" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Coupon Code</label>
                                <input type="text" name="bannerCouponCodeName" id="bannerCouponCodeName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Coupon Code" required />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Coupon Rate</label>
                                <input type="number" name="bannerCouponRate" id="bannerCouponRate" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="00.00 Tk" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Coupon Rate</label>
                                <input type="number" name="bannerActualRate" id="bannerActualRate" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="00.00 Tk" required />
                            </div>

                            <div className="col-span-full">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                <textarea id="bannerDescription" name="bannerDescription" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description" required></textarea>
                            </div>
                        </div>

                    </div>

                    <div className="p-6 border-t border-gray-200 rounded-b text-center">
                        {/* <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save A New Test</button> */}
                        <button type="submit" className="relative w-[200px] inline-flex items-center justify-center p-4 px-4 py-1 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-teal-600 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-600 group-hover:translate-x-0 ease">
                                Save Now &nbsp;
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black font-extrabold transition-all duration-300 transform group-hover:translate-x-full ease">Save A new Test</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddBanner;