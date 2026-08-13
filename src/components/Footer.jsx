"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">Welcome to Work Manager</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aspernatur nobis quaerat eligendi totam, ipsum accusantium quisquam
            facilis alias voluptatem unde esse cumque non laudantium veritatis
            suscipit. Quod, consequuntur vitae?
          </p>
        </div>
        <div className="text-center">
          <h1>Importants Links</h1>
          <ul>
            <li><a href="#!">Facebook</a></li>
            <li><a href="#!">YouTube</a></li>
            <li><a href="#!">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
