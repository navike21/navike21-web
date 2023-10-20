/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "/pages/:path*",
			},
		];
	},
	webpack(config) {
		config.resolve.alias['@Components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@Constants'] = path.join(__dirname, 'src/libs/constants');
		config.resolve.alias['@Helpers'] = path.join(__dirname, 'src/libs/helpers');
		config.resolve.alias['@Hooks'] = path.join(__dirname, 'src/hooks');

    return config;
  },
};

module.exports = nextConfig;
