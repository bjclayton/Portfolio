"use client";

export const CustomButton = ({ label, onClick, svg }) => {
    return (
        <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-secondary hover:bg-[#6b90bd] active:bg-bg-[#6b90bd] duration-150 rounded-lg sm:mt-0 sm:w-auto">
            {label}
            {svg}
        </button>
    );
};
