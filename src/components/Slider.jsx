import React from 'react';

const Slider = ({ category, updateCategory }) => {

    const categoriesList = ["Đệ Tử Quy", "Thập Thiện Nghiệp", "Giáo dục", "Âm nhạc", "Du lịch", "Làm đẹp", "Nấu ăn", "Thể dục", "Công nghệ", "Hài kịch", "Thời trang", "Vlogs", "Thể thao", "Làm tự thủ công", "Tin tức", "Hoạt hình", "Khoa học", "Nghệ thuật", "Động viên", "Giải trí"];
    const categoriesValueList = ["detuquy", "thapthiennghiep", "giaoduc", "amnhac", "dulich", "lamdep", "nauan", "theduc", "congnghe", "haikich", "thoitrang", "vlogs", "thethao", "lamtucong", "tintuc", "hoathinh", "khoahoc", "nghethuat", "dongvien", "giaitri"];


    // Function to update the category value
    const handleCategoryChange = (cat) => {
        updateCategory(cat);
    };

    return (
        <>
            <div className="h-12 w-full sm:h-14 px-3 sticky top-0 dark:bg-black bg-white flex items-center gap-3 sm:gap-4 text-sm sm:text-[15px] overflow-x-auto scrollbar-hide scroll-smooth z-[5]">

                {
                    categoriesList.map((ele, i) => (
                        <button key={i} className={
                            `bg-gray-200/90 hover:bg-gray-300 dark:bg-dark-gray/40 dark:hover:bg-light-gray/40 py-1 px-2.5 rounded-md flex-shrink-0 ${category === ele ? 'dark:text-black dark:bg-white bg-gray-950 text-white dark:hover:bg-white hover:bg-gray-950' : ''}`}
                            onClick={() => handleCategoryChange(categoriesValueList[i])} title={ele} >{ele}</button>
                    ))
                }

            </div>
        </>
    )
}

export default Slider