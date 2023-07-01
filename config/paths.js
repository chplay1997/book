'use strict'

const path = require('path')
const fs = require('fs')
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
	process.env.NODE_ENV === 'development',
	require(resolveApp('package.json')).homepage,
	process.env.PUBLIC_URL
)

const buildPath = process.env.BUILD_PATH || 'build'

const {DIR} = process.env
const moduleFileExtensions = [
	'web.mjs',
	'mjs',
	'web.js',
	'js',
	'web.ts',
	'ts',
	'web.tsx',
	'tsx',
	'json',
	'web.jsx',
	'jsx'
]

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
	const extension = moduleFileExtensions.find(extension =>
		fs.existsSync(resolveFn(`${filePath}.${extension}`))
	)

	if (extension) {
		return resolveFn(`${filePath}.${extension}`)
	}

	return resolveFn(`${filePath}.js`)
}

// config after eject: we're in ./config/
module.exports = {
	dotenv: resolveApp('.env'),
	appPath: resolveApp('.'),
	appBuild: resolveApp(buildPath),
	appPublic: resolveApp('public'),
	appHtml: resolveApp(process.env.NODE_ENV === 'development' ? 'public/index.html' : 'public/beta-index2.html'),
	appIndexJs: resolveModule(resolveApp, `src/${DIR}/index`),
	appPackageJson: resolveApp('package.json'),
	appSrc: resolveApp('src'),
	appTsConfig: resolveApp('tsconfig.json'),
	appJsConfig: resolveApp('jsconfig.json'),
	yarnLockFile: resolveApp('yarn.lock'),
	testsSetup: resolveModule(resolveApp, 'src/setupTests'),
	proxySetup: resolveApp('config/proxySetup.js'),
	appNodeModules: resolveApp('node_modules'),
	appWebpackCache: resolveApp('node_modules/.cache'),
	appTsBuildInfoFile: resolveApp('node_modules/.cache/tsconfig.tsbuildinfo'),
	swSrc: resolveModule(resolveApp, 'src/service-worker'),
	publicUrlOrPath,


	// PageFly additional
	analyticsHelperFile: resolveApp(`src/${DIR}/helpers/analytics/index.ts`),
	helperFile: resolveApp(`src/${DIR}/helpers/index.ts`),
	mainStyleFile: resolveApp(`src/${DIR}/assets/index.js`),
	animationStyle: resolveApp(`src/${DIR}/assets/animation.js`),
	appDir: resolveApp(`src/${DIR}`),
	appNext: resolveApp(`src/next`),
	appJoomla: resolveApp(`src/joomla`),
	serviceWorkerFile: resolveApp(`src/sw_cache.js`),

	// joomlaAppBuild: resolveApp('build-joomla'),
	// joomlaAppPublic: resolveApp('public-joomla'),
	// joomlaAppHtml: resolveApp('public-joomla/index.html')
}

module.exports.moduleFileExtensions = moduleFileExtensions;
