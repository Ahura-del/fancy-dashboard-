import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center py-5">
      <p className="text-sm text-slate-500">
        &#169; {new Date().getFullYear()} All rights reserved by fancyshop.com
      </p>
    </div>
  );
};

export default Footer;
