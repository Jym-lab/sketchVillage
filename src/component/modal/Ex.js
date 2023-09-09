import { useState } from "react";
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody
} from "tw-elements-react";


export default function VerticalyCentered(): JSX.Element {
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);

    return (
        <div>
            <div className="Present Backcolor ">
                <div className="pt-14 h-full flex flex-col items-center justify-center">
                    <div className="presentBtn text-center mt-8">
                        <div className="space-x-2">
                            {/* <!-- Button trigger vertically centered modal--> */}
                            <TERipple rippleColor="white">
                                <button
                                    type="button"
                                    className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:#98c84c hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:#98c84c focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    onClick={() => setShowModal(true)}
                                >
                                    경품1
                                </button>
                            </TERipple>
                        </div>
                        <div className="space-x-2">
                            {/* <!-- Button trigger vertically centered modal--> */}
                            <TERipple rippleColor="white">
                                <button
                                    type="button"
                                    className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:#98c84c hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:#98c84c focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    onClick={() => setShowModal1(true)}
                                >
                                    경품2
                                </button>
                            </TERipple>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!--modal--> */}
            <TEModal
                show={showModal}
                setShow={setShowModal}
            >
                <TEModalDialog centered className="p-5">
                    <TEModalContent>
                        <TEModalHeader className="headermodal modalBack">
                            {/* <!--Close button--> */}
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                onClick={() => setShowModal(false)}
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
                            <div className="flex flex-col items-center p-5">
                                <img width='200' src={process.env.PUBLIC_URL + `assets/modal/modal1-title.png`} alt="img" />
                                <img width='300' src={process.env.PUBLIC_URL + `assets/modal/modal1.png`} alt="img" />
                                <p className="OAtitle text-xl text-center">
                                    SKETCH 매표소에서 <br />
                                    팜플렛을 받아 <br />
                                    미션을 수행해 보세요!</p>
                            </div>
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>

            {/* <!--modal1--> */}
            <TEModal
                show={showModal1}
                setShow={setShowModal1}
            >
                <TEModalDialog centered className="p-5">
                    <TEModalContent>
                        <TEModalHeader className="headermodal modalBack">
                            {/* <!--Close button--> */}
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                onClick={() => setShowModal1(false)}
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
                            <div className="flex flex-col items-center p-5">
                                <img width='200' src={process.env.PUBLIC_URL + `assets/modal/modal1-title.png`} alt="img" />
                                <img width='300' src={process.env.PUBLIC_URL + `assets/modal/modal1.png`} alt="img" />
                                <p className="OAtitle text-xl text-center">
                                    SKETCH 매표소에서 <br />
                                    팜플렛을 받아 <br />
                                    미션을 modal2 보세요!</p>
                            </div>
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>
    );
}
