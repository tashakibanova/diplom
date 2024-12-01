import * as React from "react";
import BrandLogo from "./BrandLogo";

const logos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/563d71ec4dca860f97979e6d1c4acca10dd067b531a117068b0a6dcf49796684?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842", width: 38, aspectRatio: 1.27, alt: "Brand logo 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/03c2b63f9da1bd613c60741f4fae69c9d2408f77e9b0888dc8bd2b623ac47ba2?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842", width: 31, aspectRatio: 1.03, alt: "Brand logo 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/107c33a78309145715c1cbf9d5acd4b32d8bfb72fd7f6ce788d51c7714b1a10a?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842", width: 47, aspectRatio: 1.57, alt: "Brand logo 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/09a31f04906883332697462b3db6e4b8ba78aefedd8d9790ff2f73c78db498bd?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842", width: 14, aspectRatio: 0.47, alt: "Brand logo 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f8e91189d020afb4e6c1cf0922331b0d715c3c8e71073141b4ae2f7d3604336?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842", width: 37, aspectRatio: 1.23, alt: "Brand logo 5" }
  ];
  
  export default function BrandLogos() {
    return (
      <>
        <div className="brand-logos">
          {logos.map((logo, index) => (
            <BrandLogo key={index} {...logo} />
          ))}
        </div>
        <style jsx>{`
          .brand-logos {
            display: flex;
            gap: 40px 48px;
          }
        `}</style>
      </>
    );
  }