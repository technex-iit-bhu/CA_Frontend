import Image from 'next/image';
import React, { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className='bottom-0'>
      <div className='flex flex-col items-center justify-center space-x-0 bg-[#2F2F2F] sm:flex-row '>
        <div className=''>
          <Image
            src={'/sntc_logo.webp'}
            alt='SNTC LOGO'
            width={400}
            height={300}
          />
        </div>
        <div className='mb-3 mt-3 hidden pr-20 sm:block'>
          <Image src={'/line.webp'} alt='line:)' width={1} height={50} />
        </div>
        <div className='pb-3 text-center font-bold sm:pr-10'>
          <h1 className='pb-4 font-spline'>Social Links</h1>
          <div className='flex items-center justify-center space-x-5 p-1'>
            <Link href={'https://www.facebook.com/technexiitbhu'}>
              <Image
                src={'/facebook.webp'}
                alt='facebook'
                width={53}
                height={50}
              />
            </Link>
            <Link href={'https://www.instagram.com/technexiitbhu/'}>
              <Image src={'/insta.webp'} alt='Insta' width={33} height={35} />
            </Link>
            <Link
              href={
                'https://www.linkedin.com/company/technex-iit-bhu-varanasi/mycompany/'
              }
            >
              <Image
                src={'/linkedin.webp'}
                alt='Linkedin'
                width={40}
                height={40}
              />
            </Link>
            <Link href={'https://x.com/technexiitbhu?s=20'}>
              <Image src={'/X.webp'} alt='X' width={35} height={35} />
            </Link>
            <Link href=' '></Link>
          </div>
          <div className='flex pl-2 pt-4 font-spline text-sm'>
            For more queries:
            <p className='text-red-500 text-center font-spline'>
              &nbsp;&nbsp;publicity@technex.in
            </p>
          </div>
        </div>
        <div className='absolute flex w-full flex-col items-center justify-center space-x-0 bg-[#2F2F2F] sm:flex-row'>
          <div className=''>
            <Image
              src={'/sntc_logo.webp'}
              alt='SNTC LOGO'
              width={400}
              height={300}
            />
          </div>
          <div className='mb-3 mt-3 hidden pr-20 sm:block'>
            <Image src={'/line.webp'} alt='line:)' width={1} height={50} />
          </div>
          <div className='pb-3 text-center font-bold sm:pr-10'>
            <h1 className='pb-4 pt-2 font-spline'>Social Links</h1>
            <div className='flex items-center justify-center space-x-5 p-1'>
              <Link href={'https://www.facebook.com/technexiitbhu'}>
                <Image
                  src={'/facebook.webp'}
                  alt='facebook'
                  width={53}
                  height={50}
                />
              </Link>
              <Link href={'https://www.instagram.com/technexiitbhu/'}>
                <Image src={'/insta.webp'} alt='Insta' width={33} height={35} />
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/company/technex-iit-bhu-varanasi/mycompany/'
                }
              >
                <Image
                  src={'/linkedin.webp'}
                  alt='Linkedin'
                  width={40}
                  height={40}
                />
              </Link>
              <Link href={'https://x.com/technexiitbhu?s=20'}>
                <Image src={'/X.webp'} alt='X' width={35} height={35} />
              </Link>
              <Link href={''}></Link>
            </div>
            <div className='flex items-center justify-center pl-1 pt-4 text-center font-spline text-sm'>
              For more queries:
              <p className='text-red-500 text-center font-spline'>
                &nbsp;&nbsp;publicity@technex.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
