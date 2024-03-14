import './MLheader.css';

export default function Header(){
    return (
        <div className='MLheader px-[5%] pt-[4%] flex flex-col space-y-8 '>
            <div>
                <p className='font-pop text-white font-semibold text-[44px]'>My Learning</p>
            </div>
            <div className='flex space-x-14 '>
                <button className='font-pop font-medium text-white text-[17px]'>My Courses</button>
                <button className='font-pop font-medium text-white text-[17px]'>Assignment</button>
                <button className='font-pop font-medium text-white text-[17px]'>Wishlist</button>
                <button className='font-pop font-medium text-white text-[17px]'>Certifications</button>
            </div>
        </div>
    );
}