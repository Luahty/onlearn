import React, { useRef, useState } from "react";
import test from '../data/test.mp3'
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";

function ProductDetail() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const [message, setMessage] = useState('Correct');
    const [messageInput, setMessageInput] = useState('');
    const [isFinished, setIsFinished] = useState(false);

    // const handleAudioEnd = () => {
    //     setIsFinished(true);
    //     console.log("Âm thanh đã kết thúc!");
    // };
    const handleChange = (e) => {
        setMessageInput(e.target.value);
    };
    const startOver = () => {
        setMessageInput("");
        setIsToggled(false);
    };
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const handleClick = () => {
        setIsCheck(false);
        setIsToggled(true);
        // setIsToggled(!isToggled);
    };
    return (
        <div className='p-4 py-20 lg:p-40'>
            <div className=''>
                <div className='font-semibold text-xl py-4'>Nghe Đoạn Âm Thanh Sau</div>
                <div className='flex gap-4'>
                    <audio controls ref={audioRef}
                    // onEnded={handleAudioEnd}
                    >
                        <source src={test} type="audio/mpeg" />
                    </audio>
                    <button className="bg-green-200 px-6   rounded-full font-semibold hover:bg-green-500 hover:text-white" onClick={togglePlay}>
                        {isPlaying ? <FaStop /> : <FaPlay />}
                    </button>
                </div>

            </div>
            <div className='h-[1px] bg-black my-4'></div>
            <div className='font-semibold text-xl py-2'>Nhập Nội Dung Câu Trả Lời</div>
            <form onSubmit={(e) => e.preventDefault()}>
                <textarea
                    id="message"
                    value={messageInput} // liên kết state với value của textarea
                    onChange={handleChange} // xử lý sự kiện khi giá trị thay đổi
                    className="rounded-sm p-2 bg-[#ffffff18] w-full h-40 resize-none border-2 border-gray-500"
                    placeholder="Message"
                    readOnly={isToggled}
                />
                <div className='w-full flex justify-between'>
                    {isToggled ? <div className={`${isCheck ? 'text-green-500' : 'text-red-500'}`}>{isCheck ? message : 'Fail'}</div> : 'The results will appear here.'}
                    <button onClick={() => handleClick()}
                        className="bg-green-200 p-4 rounded-xl font-semibold hover:bg-green-500 hover:text-white" >
                        Submit
                    </button>
                </div>
            </form>
            {!isToggled ? '' :
                (<div className="bg-gray-100 p-4 my-2 rounded-xl">
                    <div className='flex justify-between'>
                        <div className='font-semibold text-xl py-4'>Nội dung</div>
                        <button onClick={() => startOver()}
                            className="bg-green-200 px-4 rounded-xl font-semibold hover:bg-red-500 hover:text-white" >
                            Rest
                        </button>
                    </div>

                    <div className=''>The Philippines has introduced an eTravel declaration form for international travel. Originally created to help prevent the spread of COVID-19, all passengers are now required to complete the Philippines eTravel before entering and leaving the country.</div>
                </div>)
            }
        </div>
    );
};

export default ProductDetail;
