
module.exports = {
	publicPath:
		process.env.NODE_ENV === "production" ? "./" : "/",
	pwa: {
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: './src/sw.js',
			swDest: 'service-worker.js',
		},
	},
};
