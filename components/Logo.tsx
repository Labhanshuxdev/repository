
import React from 'react';

const Logo: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z" fill="#F0FDF4"/>
    {/* Carrot */}
    <path d="M13 10L17 6" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 4L16 5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 6L18 7" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Broccoli/Lettuce */}
    <path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" fill="#86EFAC"/>
    <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C6.58319 10 7.10644 10.2523 7.47271 10.6699" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C9.41681 6 8.89356 6.25232 8.52729 6.66992" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Tomato */}
    <circle cx="15" cy="15" r="4" fill="#EF4444"/>
    <path d="M15 11C15.8284 11 16.5 11.4477 16.5 12" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default Logo;
