const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/panchatantra-playland" : "",
  assetPrefix: isProd ? "/panchatantra-playland/" : ""
};

export default nextConfig;
