import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed w-full z-40 transition-all duration-300 ease-in-out ${scrolled
                    ? 'bg-white shadow-lg h-16 md:h-20 xl:h-24 py-4'
                    : 'bg-transparent h-32 py-8'
                }`}
        >
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-full items-center justify-between px-6"
            >
                <div className="flex lg:flex-1 md:pl-10">
                    <a href="#" className="-m-1.5 p-1.5 items-center">
                        <img
                            src={require(`../image/logo.png`)}
                            alt="ONLEARN"
                            className="h-7 md:h-[37.69px] w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex w-auto lg:gap-x-12 xl:gap-x-20 lg:mx-5">
                    <a href="#" className="text-lg leading-6 text-[#252641] hover:text-[#FD661F] hover:font-semibold">
                        Home
                    </a>
                    <a href="#" className="text-lg leading-6 text-[#252641] hover:text-[#FD661F] hover:font-semibold">
                        Careers
                    </a>
                    <a href="#" className="text-lg leading-6 text-[#252641] hover:text-[#FD661F] hover:font-semibold">
                        Blog
                    </a>
                    <a href="#" className="text-lg leading-6 text-[#252641] hover:text-[#FD661F] hover:font-semibold">
                        About Us
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end pr-5">
                    <div
                        className={`${scrolled
                                ? 'border-2 border-gray-500 hover:bg-teal-500 hover:border-teal-500'
                                : 'text-accent bg-white hover:bg-gray-100'
                            } w-28 h-12 xl:w-[135px] xl:h-[59px] my-auto rounded-md text-center lg:py-3 xl:py-4 text-base font-semibold leading-6`}
                    >
                        LOG IN
                    </div>
                    <div className="w-28 h-12 xl:w-[135px] xl:h-[59px] my-auto ml-5 bg-accent hover:bg-teal-500 rounded-md text-center lg:py-3 xl:py-4 text-base font-semibold leading-6 text-white">
                        SIGN UP
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel
                    className={`transition-transform duration-500 ease-in-out fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white ${scrolled ? 'py-4' : 'py-8'} px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
                >
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5 visible sm:invisible">
                            <img
                                src={require(`../image/logo.png`)}
                                alt="ONLEARN"
                                className="h-7 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Careers
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Blog
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About Us
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
