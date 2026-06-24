
import Link from 'next/link';
import Image from 'next/image';
import { JSX } from 'react';


export interface CardProps {
    image: string;
    title: string;
    description: string;
    techStackicons: JSX.Element[]
    linkToProject: string;
}

export default function Card({ image, title, description,techStackicons, linkToProject } : CardProps) {

    return (
        <div
            className={` flex flex-col justify-between h-fit items-center shadow-sm min-h-full overflow-hidden border-slate-900  dark:border-slate-200 border-4 rounded-xl w-full backdrop-blur-lg `}>
            <div className='h-44 w-full overflow-hidden flex-shrink-0 hidden md:flex'>
                <Image width={500} height={500} src={image} alt={title} className='h-full w-full object-cover' />
            </div>
            <div className='p-2'>
                <div className='flex items-center mb-2'>
                    <h6 className=' text-xl font-semibold'>{title}</h6>
                </div>
                <div className=''>
                    <p className=' leading-normal font-light'>{description}</p>
                </div>
            </div>
            <div className='group my-3 w-full flex flex-wrap justify-evenly items-center gap-4 dark:bg-transparent '>
                {techStackicons.map(icon => icon)}
            </div>

            <div className='px-4 pb-4 pt-0 mt-2 flex '>
                <Link
                    className='w-full rounded-xl bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                    as={linkToProject}
                    href={linkToProject}
                    target='_blank'
                    rel='noopener noreferrer'>
                    View Project
                </Link>
            </div>
        </div>
    );

};
