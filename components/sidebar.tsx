'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from "react";
import Link from 'next/link';
import { LayoutGroup, useMotionValue, useTransform,  motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  }
};

const hoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

function Logo() {

  return (
    <Link aria-label="Preston Parris" href="/">

    <motion.svg
      x="1737.23pt"
      y="881.645pt"
      height="100px"
      viewBox="1737.23 881.645 336.266 568.669"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      initial="initial"
      whileHover="hover"
      variants={hoverVariants}
      transition={{ duration: 0.2 }}
    >

    <motion.g id="1">
        <title>Layer 1</title>
        <motion.g id="2">
          <title>Text</title>
          <defs>
            <title>Text</title>
            <motion.g id="3">
              <defs>
                <motion.path
                  id="4"
		  d="M1820.21,1038.5 C1820.21,1038.5,1953.2,960.236,1953.2,960.236 C1980.89,943.782,2004.29,942.255,2020.81,952.777 C2037.32,963.299,2049.1,985.442,2049.1,1021.75 C2049.1,1052.97,2041.8,1084.78,2027.08,1116.43 C2012.35,1148.07,1986.12,1178.98,1955.56,1196.62 C1955.56,1196.62,1868.21,1248.44,1868.21,1248.44 C1868.21,1248.44,1868.21,1398.42,1868.21,1398.42 C1868.21,1398.42,1820.21,1425.88,1820.21,1425.88 C1820.21,1425.88,1820.21,1038.5,1820.21,1038.5 z M2000.45,1049.9 C2000.45,1020.49,1992.26,1009.07,1977.18,1006.54 C1968.09,1006.16,1957.98,1010.07,1942.16,1019.21 C1942.16,1019.21,1868.21,1063.8,1868.21,1063.8 C1868.21,1063.8,1868.21,1195.59,1868.21,1195.59 C1868.21,1195.59,1951.05,1147.7,1951.05,1147.7 C1966.99,1136.66,1975.34,1129.55,1985.26,1111.61 C1995.37,1093.35,2000.45,1076.04,2000.45,1049.9 z"
	        />
              </defs>
              <motion.use
                xlinkHref="#4"
                style={{
                  fill: '#faaf3b',
                  fillOpacity: 1,
                  fillRule: 'nonzero',
                  opacity: 1,
                  stroke: 'none',
                }}
              />
            </motion.g>
          </defs>
          <motion.use xlinkHref="#3" />
        </motion.g>

        <motion.g>
        <defs>
          <motion.path
            id="5"
            d="M1820.21,1038.5 C1820.21,1038.5,1763.67,1004.88,1763.67,1004.88 C1763.67,1004.88,1906.64,921.578,1906.64,921.578 C1906.64,921.578,1939.34,904.508,1963.71,918.892 C1983.98,930.859,2018.35,951.336,2018.35,951.336 C2018.35,951.336,1995.62,935.273,1953.2,960.236 C1909.06,986.217,1820.21,1038.5,1820.21,1038.5 z"
          />
        </defs>
        <motion.use
          xlinkHref="#5"
          style={{
            fill: '#f6931c',
            fillOpacity: 1,
            fillRule: 'nonzero',
            opacity: 1,
            stroke: 'none',
          }}
        />
      </motion.g>
      <motion.g>
        <defs>
          <motion.path
            id="7"
            d="M1763.67,1004.88 C1763.67,1004.88,1820.21,1038.5,1820.21,1038.5 C1820.21,1038.5,1820.21,1425.88,1820.21,1425.88 C1820.21,1425.88,1763.67,1391.07,1763.67,1391.07 C1763.67,1391.07,1763.67,1004.88,1763.67,1004.88 z"
          />
        </defs>
        <motion.use
          xlinkHref="#7"
          style={{
            fill: '#f15923',
            fillOpacity: 1,
            fillRule: 'nonzero',
            opacity: 1,
            stroke: 'none',
          }}
        />
      </motion.g>

      <motion.g>
        <defs>
          <motion.path
            id="9"
            d="M1868.21,1130.16 C1868.21,1130.16,1868.21,1195.59,1868.21,1195.59 C1868.21,1195.59,1951.05,1147.7,1951.05,1147.7 C1951.05,1147.7,1895.64,1114.05,1895.64,1114.05 C1895.64,1114.05,1868.21,1130.16,1868.21,1130.16 z"
          />
        </defs>
        <motion.use
          xlinkHref="#9"
          style={{
            fill: '#f15923',
            fillOpacity: 1,
            fillRule: 'nonzero',
            opacity: 1,
            stroke: 'none',
          }}
        />
      </motion.g>
      <motion.g>
        <defs>
          <motion.path
            id="11"
            d="M1945.21,1017.47 C1945.21,1017.47,1945.92,1040,1937.9,1059.71 C1920.85,1101.61,1895.64,1114.05,1895.64,1114.05 C1895.64,1114.05,1951.05,1147.7,1951.05,1147.7 C1951.05,1147.7,1988.52,1128.49,1998.17,1076.85 C2007.81,1025.22,1992.39,1008.06,1977.18,1006.54 C1965.23,1005.34,1945.21,1017.47,1945.21,1017.47 z"
          />
        </defs>
        <motion.use
          xlinkHref="#11"
          style={{
            fill: '#f6931c',
            fillOpacity: 1,
            fillRule: 'nonzero',
            opacity: 1,
            stroke: 'none',
          }}
        />
      </motion.g>
      </motion.g>
    </motion.svg>
</Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
