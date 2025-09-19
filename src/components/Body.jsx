import React from "react";

function Body() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600150806193-cf869bcfee05?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1740&auto=format&fit=crop')" }}>
      {/* Overlay to darken the image and improve text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            The future of farming, in your hands.
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Farming smarter, growing together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;