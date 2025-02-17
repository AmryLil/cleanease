import React from "react";

interface MyNavbarProps {
  path: string;
  children: React.ReactNode;
}

const ItemNav: React.FC<MyNavbarProps> = ({ path, children }) => {
  return (
    <li>
      <a
        href={path}
        className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      >
        {children}
      </a>
    </li>
  );
};

export default ItemNav;
