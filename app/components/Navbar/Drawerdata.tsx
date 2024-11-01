import React from "react";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'المقدمة', href: '#home-section', current: false },
    { name: 'مزايا التدريب', href: '#about-section', current: false },
    { name: 'طريقة التدريب', href: '#cook-section', current: false },
    { name: 'معرض الصور', href: '#gallery-section', current: false },
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {

    const { user, signInWithGoogle } = useAuth();

    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <br />
                        {  user ? <Link className='text-l w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6' href='../registration'> تواصل مع الماستر </Link> : (<button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6' onClick={signInWithGoogle}> سجل للتواصل </button>) }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
