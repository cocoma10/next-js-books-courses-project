/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add a rule to handle native modules
      config.module.rules.push({
        test: /\.node$/,
        use: 'node-loader',
      });
  
      // Additional custom configuration can be added here
  
      return config;
    },
  };
export default nextConfig;
