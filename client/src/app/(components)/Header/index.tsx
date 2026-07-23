import React from "react";

type InvetoryProps = {
  name: string;
};

function Header({ name }: InvetoryProps) {
  return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
}

export default Header;
