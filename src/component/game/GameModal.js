import { useState } from "react";
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody
} from "tw-elements-react";

const GameModal = ({ img }) => {
    const [showfirstModal, setShowfirstModal] = useState(false);
    const [showsecondModal, setShowsecondModal] = useState(false);

    return (
        <div>
            <div className="GameModal">
                <div className="space-x-2">
                    <TERipple rippleColor="white">
                        <button
                            onClick={() => { img === 'first' ? setShowfirstModal(true) : setShowsecondModal(true) }}
                            className={`gamebtn shadow-md rounded-2xl py-1 mt-5 z-10 ${img === 'third' ? 'hidden' : ''}`}>
                            경품
                        </button>
                    </TERipple>
                </div>
            </div>


            {/* <!-- first modal--> */}
            <TEModal
                show={showfirstModal}
                setShow={setShowfirstModal}
            >
                <TEModalDialog centered className="p-5">
                    <TEModalContent>
                        <TEModalHeader className="headermodal modalBack">
                            {/* <!--Close button--> */}
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                onClick={() => setShowfirstModal(false)}
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </TEModalHeader>
                        {/* <!--Modal body--> */}

                        <TEModalBody className="modalBack modalbody ">
                            <div className="flex flex-col items-center">
                                <div className="modaltitlegame OA">오락마을 경품</div>
                                <p className="OAtitle text-lg">손펀치, 발펀치</p>
                                <img width='200' className='my-2' src={process.env.PUBLIC_URL + `assets/modal/modal3.png`} alt="img" />
                                <p className="text-xl text-center">남/여 1등 상품 당일공개</p>
                            </div>
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>

            {/* <!--second modal--> */}
            <TEModal
                show={showsecondModal}
                setShow={setShowsecondModal}
            >
                <TEModalDialog centered className="p-5">
                    <TEModalContent>
                        <TEModalHeader className="headermodal modalBack">
                            {/* <!--Close button--> */}
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                onClick={() => setShowsecondModal(false)}
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </TEModalHeader>
                        {/* <!--Modal body--> */}

                        <TEModalBody className="modalBack modalbody ">
                            <div className="flex flex-col items-center">
                                <div className="OA modaltitlegame">오락마을 경품</div>
                                <p className="OAtitle text-xl">대형 윷놀이</p>
                                <img width='200' className="my-2" src={process.env.PUBLIC_URL + `assets/modal/modal2.png`} alt="img" />
                                <p className="text-xl text-center">네잎클로버 키링</p>
                            </div>
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>


    )
}

export default GameModal;