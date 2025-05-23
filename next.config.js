/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
import ReactComponentName from "react-scan/react-component-name/webpack"; 

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config) => {
    config.plugins.push(ReactComponentName({})); 
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'mc-heads.net',
      },
      {
        protocol: 'https',
        hostname: 'tmw.gg',
      },
    ],
  },
};

export default config;
