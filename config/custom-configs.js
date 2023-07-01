const fs = require('fs')
const paths = require('./paths')
const pkg = require('../package')

const webpackDevClientEntry = require.resolve(
	'react-dev-utils/webpackHotDevClient'
)
module.exports = {
	resolveModules: [
		paths.appDir
	],
	pageflyVersion: pkg.version,
	pageflyCustomAlias: {
		'@j': paths.appJoomla,
		'@': paths.appNext
	},
	getPageFlyEntries() {
		// isEnvDevelopment && !shouldUseReactRefresh
		// 	? [
		// 		// Include an alternative client for WebpackDevServer. A client's job is to
		// 		// connect to WebpackDevServer by a socket and get notified about changes.
		// 		// When you save a file, the client will either apply hot updates (in case
		// 		// of CSS changes), or refresh the page (in case of JS changes). When you
		// 		// make a syntax error, this client will display a syntax error overlay.
		// 		// Note: instead of the default WebpackDevServer client, we use a custom one
		// 		// to bring better experience for Create React App users. You can replace
		// 		// the line below with these two lines if you prefer the stock client:
		// 		//
		// 		// require.resolve('webpack-dev-server/client') + '?/',
		// 		// require.resolve('webpack/hot/dev-server'),
		// 		//
		// 		// When using the experimental react-refresh integration,
		// 		// the webpack plugin takes care of injecting the dev client for us.
		// 		webpackDevClientEntry,
		// 		// Finally, this is your app's code:
		// 		paths.appIndexJs
		// 		// We include the app code last so that if there is a runtime error during
		// 		// initialization, it doesn't blow up the WebpackDevServer client, and
		// 		// changing JS code would still trigger a refresh.
		// 	]
		// 	: paths.appIndexJs,
		const entries = {
			main: [paths.appIndexJs]
		}
		// if (fs.existsSync(paths.mainStyleFile)) {
		// 	Object.assign(entries, { 'main-style': [paths.mainStyleFile] })
		// }
		// if (fs.existsSync(paths.animationStyle)) {
		// 	Object.assign(entries, { 'animation-style': [paths.animationStyle] })
		// }
		if (fs.existsSync(paths.helperFile)) {
			Object.assign(entries, { helper: [paths.helperFile] })
		}
		if (fs.existsSync(paths.analyticsHelperFile)) {
			Object.assign(entries, { analytics: [paths.analyticsHelperFile]})
		}
		if (fs.existsSync(paths.serviceWorkerFile)) {
			Object.assign(entries, { serviceWorker: [paths.serviceWorkerFile]})
		}
		return entries
	},
	modifyAntStyles: {
		'primary-color': '#2c6ecb',
		'secondary-color': '#008060',
		'heading-color': '#202223',
		'layout-sider-background': '#fff',
    'layout-body-background': '#f6f6f7',
		'info-color': '#1890ff',
    'error-color': '#d82c0d',
		'layout-header-height': '48px',
		'layout-header-padding': '0 16px',
		'tooltip-bg': '#fff',
    'tooltip-color': 'var(--color-dark)',
    'tooltip-arrow-width': 0,
		'table-footer-bg': 'transparent',
		'collapse-header-padding': '14px 16px',
		'zindex-popover': 1000,
    'modal-header-title-font-size': '1.25rem',
		'modal-header-title-line-height': '28px',
    'modal-header-padding-vertical': '1.25rem',
    'modal-header-padding-horizontal': '1.25rem',
    'modal-header-close-size': '20px',
    'modal-header-border-width': 0,
    'modal-footer-padding-vertical': '1rem',
    'modal-footer-padding-horizontal': '1rem',
    'modal-footer-border-width': 0,
    'typography-title-font-weight': 600,
    'typography-title-margin-top': 0,
    'typography-title-margin-bottom': '8px',
    'heading-1-size': '32px',
    'heading-2-size': '28px',
    'heading-3-size': '20px',
    'heading-4-size': '16px',
    'heading-5-size': '14px',
    'divider-color': 'var(--border-color)',
    'progress-default-color': 'var(--primary-color)',
    'alert-info-bg-color': '#ebf9fc',
    'alert-info-border-color': '#98d6cd',
    'alert-warning-bg-color': '#fff5ea',
    'alert-warning-border-color': '#e1b878',
    'alert-warning-icon-color': '#b98900',
    'tag-border-radius': '50px',
    'border-radius-base': '4px',
    'text-color': '#202223',
    'text-color-secondary': '#6d7175',
    'font-size-sm': '13px',
    'height-base': '36px',
    'btn-text-hover-bg': '#f6f6f7',
    'checkbox-color': 'var(--primary-color)',
    'checkbox-border-width': '2px',
    'normal-color': '#8c9196',
    'link-color': 'var(--dark-color)',
    'link-decoration': 'underline',
    'disabled-color': '#8c9196',
    'border-color-base': '#aeb4b9',
    'input-hover-border-color': '#aeb4b9',
    'collapse-panel-border-radius': '0',
    'height-lg': '36px',
    'btn-shadow': '0 1px 0 rgb(0 0 0 /.05)',
    'input-placeholder-color': '#8c9196'
	}
}