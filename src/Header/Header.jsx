import React from "react";

const Header = () => {
  return (
    <div className="flex bg-slate-200 mt-5">
      <img
        className="h-20 w-20 ms-5"
        src="/src/assets/power-button.gif"
        alt=""
        srcset=""
      />
      <h1 className="text-xl font-bold ms-5 mt-5">Power Gadget</h1>
      <div className="flex justify-items-end">
        <p>Home</p>
        <p>Shop</p>
        <img className="h-10 w-10" src="/src/assets/shopping-cart.png" alt="" />
        <p>About us</p>
      </div>
    </div>
  );
};

export default Header;
