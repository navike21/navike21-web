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
    config.resolve.alias["@Store"] = path.join(__dirname, "src/store");
		config.resolve.alias['@Components'] = path.join(__dirname, 'src/libs/components');
    config.resolve.alias['@Constants'] = path.join(__dirname, 'src/libs/constants');
		config.resolve.alias['@Utils'] = path.join(__dirname, 'src/libs/utils');
		config.resolve.alias['@Hooks'] = path.join(__dirname, 'src/libs/hooks');
    config.resolve.alias['@Types'] = path.join(__dirname, 'src/libs/types');
    config.resolve.alias["@Styles"] = path.join(__dirname, "src/libs/styles");
    config.resolve.alias["@Themes"] = path.join(__dirname, "src/libs/themes");
    return config;
  },
};

module.exports = nextConfig;
