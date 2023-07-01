/* eslint-disable max-lines */
import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { osName } from 'react-device-detect'

export const theme: DefaultTheme = {
  font: '-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif',
}

const { modifyAntStyles } = process.env

//------------------------------------------------------------
// READ BEFORE ADDING STYLE
// All antd class must be styled outside of *[class^='ant-']
//------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  :root {
    --body-font: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
		--heading-font: var(--body-font);
		--primary-color: ${modifyAntStyles['primary-color']};
		--secondary-color: ${modifyAntStyles['secondary-color']};
		--dark-color: ${modifyAntStyles['heading-color']};
		--light-color: #fff;
	  --error-color: #f5222d;
		--warning-color: #ffea8a;
		--success-color: #aee9d1;
    --info-color: #a4e8f2;
		--pastel-color: #f2f7fe;
		--border-color: #e1e3e5;
		--gray-color: #5c5f62;
		--disabled-color: #8c9196;
		--disabled-icon-color: #BABEC3;
    --header-height: 48px;
    --modal-height-loose: calc(100vh - 196px);
    --modal-height-tight: 464px;
	}
  
  .Polaris-TopBar__NavigationIcon {
    display: block;
    margin: 0;
  }

  .ant-input-clear-icon {
    svg { 
      color: #5C5F62;
      width: 16px;
      height: 16px;
    }
  }

  .ant-btn > span {
    font-weight: 500;
  }

  .ant-btn-primary[disabled]{
    border-color: transparent;
  }

  .ant-input-affix-wrapper{
    border: 1px solid #C9CCCF !important;
  }

  .ant-card-head-title,
	.ant-popover-title,
	.ant-collapse-header,
	.ant-menu-item-group-title,
	.ant-picker-header-view,
	.ant-table-thead .ant-table-cell {
		font-family: var(--heading-font);
		font-weight: 700;
	}

  .ant-menu-submenu {
    z-index:100;
  }

  .ant-modal-body{
    padding: 20px
  }

  .ant-heading {
    font-family: var(--heading-font);
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }
  .ant-menu-catalog {
		left: 296px !important;
		top: var(--th) !important;
		.ant-menu {
			height: calc(100vh - var(--th));
			max-height: initial !important;
			border-radius: 0 !important;
			box-shadow: none;
			border-right: 1px solid var(--border-color) !important;
			overflow: hidden !important;
		}
	}
	.notification {
		.ant-popover-inner-content {
			padding: 0;
		}
		.ant-list-item {
			padding: 12px 16px;
			transition: background .3s;
			&:hover {
				background: #fafafa;
			}
      h4 {
        font-weight: 700;
      }
			&.read {
				opacity: .55;
				h4 {
					font-weight: 400 !important;
				}
			}
		}
		.ant-btn.ant-btn-link {
			height: 58px;
			line-height: 58px;
			font-weight: 600;
		}
		.ant-list-item-meta-description {
			color: var(--dark-color);
		}
		&.detail {
			.ant-list-item {
				padding: 12px 24px;
			}
			.ant-list-item-meta {
				margin-left: 12px;
			}
		}
	}
	.ant-steps-item-container {
		display: flex;
		align-items: center;
	}
	.ant-popover-placement-left-custom {
		left: calc(100vw - 594px) !important;
	}
	.gs-inspector-popover .ant-popover-inner-content {
    max-height: 75vh;
    overflow-y: scroll;
    padding: 16px;
	}
  .category-search-dropdown {
      padding: 0!important;
      .rc-virtual-list-holder  {
          max-height: 1000px!important;
          .ant-select-item {
              padding: initial!important;
          }
          .ant-select-item-group:empty{
              display: none;
          }
          .ant-select-item-option-selected {
              background-color: transparent;
              font-weight: normal;
          }
          .ant-select-item-option-active { 
              background-color: #f5f5f5;
          }
      }
      .line-clamp {
        white-space: initial;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      &:not(.recent-result) .ant-select-item-option:last-child {
        border-top: 1px solid #D9D9D9;
      }
  }
  .ant-btn-info {
    border-color: #98d6cd;
    background: transparent;
    &:hover {
      background: #e4f7fa;
      color: var(--dark-color);
      border-color: #98c6cd;
    }
    button[disabled] {
      border-color: #d2d5d8;
      background: transparent;
    }
  }
  .ant-btn-icon-only.ant-btn-sm > * {
    width: 16px;
  }
  .ant-btn-icon-only:focus {
    background: transparent;
  }
  .ant-btn-icon-only:hover {
    background: #f6f6f7;
  }
  .ant-alert-message:empty {
    display: none !important;
  }
  .ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
    padding: 0 9px;
  }
  .ant-modal {
    padding: 0;
  }
  .ant-modal-header {
    border-radius: 8px 8px 0 0;
    box-shadow: inset 0 -1px 0 var(--border-color);
  }
  .ant-modal-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }

  .ant-radio-disabled{
    .ant-radio-inner{
      background: #FAFBFB;
    }
  }

  .ant-modal-content {
    border-radius: 8px;
  }
  .ant-modal-close {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1rem;
    right: 1.25rem;
    border-radius: 4px;
    &:hover {
      background: #f6f6f7;
      svg {
        fill: #1a1c1d
      }
    }
  }
  .ant-modal-footer {
    box-shadow: inset 0 1px 0 var(--border-color);
    .ant-btn:not(.ant-btn-primary):hover {
      background: #f6f6f7;
      border-color: #babfc3;
      color: inherit;
    }
    .ant-btn-primary:not([disabled]) {
      background: var(--secondary-color);
      border-color: var(--secondary-color);
      &:hover {
        background: #006e52;
        border-color: var(--secondary-color);
      }
    }
    .ant-btn-dangerous:not([disabled]) {
      background: #d82c0d;
      border-color: #d82c0d ;
      color: #fff;
      &:hover {
        background: #e65332 ;
        border-color: #e65332 ;
        color: #fff;
      }
    }
  }
  .ant-btn:not(.ant-btn-text):focus,
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused,
  .ant-input:focus,
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: #babfc3;
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #458fff;
  }
  .ant-popover-title {
    padding: 12px 16px;
    text-transform: uppercase;
    font-size: 12px;
    border-bottom-color: var(--border-color);
  }
  .ant-tag {
    padding: 0 8px;
  }
  .ant-empty-custom {
    font-size: 16px;
    .ant-empty-image {
      height: 60px;
      margin-bottom: 16px;
    }
    svg {
      width: 60px;
      fill: var(--p-icon-subdued);
    }
  }
  .ant-popover-message {
    display: flex;
    .ant-popover-message-title {
      padding-left: 8px;
    }
  }
  .ant-popover-custom {
    .ant-popover-inner-content {
      padding: 8px;
      display: flex;
      grid-gap: 4px;
    }
    .Polaris-Icon--colorWarning {
      height: 20px;
      width: 20px;
      svg {
        height: 16px;
      }
    }
  }
  .ant-popover-colorpicker {
    .ant-popover-inner-content {
      padding: 8px 10px;
    }
  }
  .notification-zoom-level {
    border-radius: 8px;
    box-shadow: 0 0 1px rgb(0 0 0 / .2), 0 26px 80px rgb(0 0 0 / .2);
    padding: 0;
    .ant-notification-notice-message {
      font-size: 20px;
      padding: 16px 20px;
      box-shadow: inset 0 -1px 0 var(--border-color);
      margin: 0;
    }
    .ant-space {
      padding: 20px;
    }
    .ant-alert {
      padding: 8px 16px;
      .ant-alert-icon {
        margin-top: 0;
      }
    }
  }
  .ant-btn-default:hover {
    border-color: #babfc3;
    background: #f6f6f7;
    color: var(--color-dark);
  }
  .ant-btn-primary-custom {
    background: var(--secondary-color);
    border-color: var(--secondary-color);
    color: #fff;
    box-shadow: 0 1px 0 rgba(0 0 0 / .08), inset 0 -1px 0 rgba(0 0 0 / .2);
    &:hover {
      background: #006e52;
      border-color: var(--secondary-color);
      color: #fff;
    }
  }

  .ant-radio-inner {
    border-width: 2px;
    &:after {
      top: 2px;
      left: 2px;
    }
  }
  .egg-game-content{
    .ant-popover-inner-content {
			padding: 0;
		}
    & .ant-popover-title{
      font-weight: unset;
      font-family: var(--body-font);
    }
  }
  /* 
  ----------------------------------------------------------
  READ BEFORE ADDING STYLE
  All antd class must be styled outside of *[class^='ant-']
  ----------------------------------------------------------
  */

*[class^='ant-'] {
  img {
    max-width: 100%;
    height: auto;
  }
	.fs-12 {
		font-size: 12px;
		line-height: 20px;
	}
	.ctnr {
		margin: auto;
		width: min(1200px, 100%);
	}
  .icon {
    fill: var(--gray-color);
  }
  [disabled] .icon {
    fill: var(--disabled-icon-color);
  }
  .icon-sm {
    svg {
      width: 16px;
      height: 16px;
      vertical-align: -.245em
    }
  }
	.color-dark {
		color: var(--dark-color);
		&:hover {
			color: var(--primary-color);
		}
	}
  .color-error {
    color: var(--error-color);
  }
  .color-warning {
    color: var(--warning-color);
  }
	.color-white {
		color: #fff!important;
	}
  .bg-info {
    background: var(--info-color);
  }
  .bg-neutral {
    background: #e4e5e7;
  }
  .bg-success {
    background: var(--success-color);
  }
  .ant-badge {
    white-space: nowrap;
  }
  .ant-badge-success {
    background: var(--info-color);
    .ant-badge-status-dot {
      background: #00a0ac;
    }
  }
  .ant-badge-warning {
    background: var(--warning-color);
    .ant-badge-status-dot {
      background: transparent;
      border: 2px solid #916a00;
    }
  }
  .ant-badge-processing {
    background: #ffd79d;
    .ant-badge-status-dot {
      background: linear-gradient(0deg,#916a00,#916a00 50%,transparent 0,transparent);
      border: 2px solid #916a00;
    }
  }
  .btn-sider {
    &:hover,
    &:focus {
      background: #f6f6f7;
    }
  }
  .btn-sider-active {
    background: #f2f7fe;
    &:hover {
      background: #f2f7fe;
    }
    svg {
      fill: var(--primary-color);
    }
  }
  .d-flex {
    display: flex;
  }
	.d-block {
		display: block;
	}
	.d-grid {
		display: grid;
	}
  .d-flex{
    display: flex;
  }
  .fdc {
    flex-direction: column;
  }
  .middle {
    align-items: center;
  }
  .center {
    justify-content: center;
  }
	.mg-0 {
		margin: 0;
	}
  .ml-4 {
    margin-left: 4px;
  }
  .ml-8 {
    margin-left: 8px;
  }
  .ml-12 {
    margin-left: 12px;
  }
  .ml-16 {
    margin-left: 16px;
  }
  .mr-4 {
    margin-right: 4px;
  }
  .mr-8 {
    margin-right: 8px;
  }
  .mr-12 {
    margin-right: 12px;
  }
  .mr-16 {
    margin-right: 16px;
  }
  .mt-4 {
    margin-top: 4px;
  }
  .mt-8 {
    margin-top: 8px;
  }
  .mt-12 {
    margin-top: 12px;
  }
  .mt-16 {
    margin-top: 16px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mt-24 {
    margin-top: 24px;
  }
  .mt-32 {
    margin-top: 32px;
  }
  .mt-48 {
    margin-top: 48px;
  }
  .mb-4 {
    margin-bottom: 4px;
  }
  .mb-8 {
    margin-bottom: 8px;
  }
  .mb-12 {
    margin-bottom: 12px;
  }
  .mb-16 {
    margin-bottom: 16px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-24 {
    margin-bottom: 24px;
  }
  .mb-32 {
    margin-bottom: 32px;
  }
  .mb-48 {
    margin-bottom: 48px;
  }
	.pd-0 {
		padding: 0;
	}
  .pl-8 {
    padding-left: 8px;
  }
  .pr-8 {
    padding-right: 8px;
  }
  .pl-12 {
    padding-left: 12px;
  }
  .pr-12 {
    padding-right: 12px;
  }
	.w-100 {
		width: 100%;
	}
	.h-100 {
		height: 100%;
	}
	.border-0 {
		border: 0;
	}
	.b-radius-0 {
		border-radius: 0;
	}
  .b-radius-50 {
    border-radius: 50px;
  }
	.tc {
		text-align: center;
	}
	.pr {
		position: relative;
	}
	.pa {
		position: absolute;
	}
  .oh {
    overflow: hidden;
  }
  .fw-400 {
    font-weight: 400 !important;
  }
  .is-link {
    cursor: pointer;
  }
  .is-link-primary {
    color: var(--primary-color);
    text-decoration: none;
  }
	.sa {
		overflow-y: auto;
		overflow-x: hidden;
    ${osName !== 'Mac OS' &&
  `
		&::-webkit-scrollbar {
			width: 8px;
			height: 8px;
			background: rgba(0, 0, 0, .16);
		}
		&::-webkit-scrollbar-thumb {
			background: rgba(0, 0, 0, .16);
			border-radius: 10px;
			visibility: hidden;
		}
		&::-webkit-scrollbar-track {
			box-shadow: rgba(217, 217, 217, .4) 0 0 3px inset;
			background: #fafafa;
		}
		&:hover::-webkit-scrollbar-thumb {
			visibility: visible;
		}`
  }
	}
	[style*="--col"] {
		grid-template-columns: repeat(var(--col), 1fr)
	}
  .ant-dropdown-menu,
  .ant-popover-inner {
    box-shadow: 0 3px 6px -3px rgba(23, 24, 24, .08), 0 8px 20px -4px rgba(23, 24, 24, .12);
    border-radius: 8px;
    padding: 8px 0;
  }
 
  .ant-dropdown-menu-item,
  .ant-select-item {
    padding: 9px 12px;
    margin: 0 8px;
    border-radius: 4px;
  }
  .ant-dropdown-menu-item-selected,
  .ant-select-item-option-selected {
    background: #f2f7fe;
    color: var(--dark-color);
  }
  .ant-select-item:not(.ant-select-item-option-selected):hover {
    background: #f6f6f7;
  }
  .ant-dropdown-menu-item-selected:before,
  .ant-select-item-option-selected:before {
    content: "";
    position: absolute;
    width: 3px;
    background: var(--primary-color);
    height: 100%;
    border-radius: 0 4px 4px 0;
    left: -8px;
    top: 0;
  }
  .ant-checkbox-inner {
    border-color: var(--disabled-color);
    width: 18px;
    height: 18px;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: var(--primary-color);
  }
  .ant-alert {
    padding: 16px;
    align-items: flex-start;
  }
  .ant-alert-icon {
    margin-right: 16px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .ant-alert-info {
    .ant-alert-icon {
      fill: #00a0ac;
      margin-top: 4px;
    }
  }
  .ant-collapse {
    border-color: var(--border-color);
    .ant-collapse-item {
      border: unset;
    }
    .ant-collapse-content {
      border: 0;
      box-shadow: inset 0px -1px 0px var(--border-color);
    }
    .ant-collapse-header {
      height: 44px;
      background: #fafbfb;
      text-transform: uppercase;
      font-size: 12px;
      color: #6d7175!important;
      box-shadow: inset 0px -1px 0px var(--border-color);
    }
    .ant-collapse-arrow {
      width: 20px;
      height: 20px;
      right: 12px !important;
      svg {
        transform: rotate(180deg); 
      }
    }
    .ant-collapse-item-active {
      .ant-collapse-arrow svg {
        transform: rotate(0deg);
      }
    }
  }
  .ant-select-arrow,
  .ant-select-clear {
    width: 20px;
    height: 20px;
    margin: 0;
    top: calc(50% - 10px);
    right: 8px;
  }
  .ant-select-clear {
    width: 16px;
    height: 16px;
    top: calc(50% - 8px);
  }
  .ant-select-disabled .ant-select-arrow {
    svg {
      fill: #babec3;
    }
  }
  .ant-slider-rail {
    background-image: linear-gradient(to right,var(--disabled-color),var(--disabled-color) 50%,transparent 50%,transparent 100%);
    background-size: 0.25rem 0.25rem;
    border-radius: 0.25rem;
    border-right: 0.25rem var(--disabled-color) solid;
  }
  .ant-slider:hover .ant-slider-rail {
    background-color: #fff;
  }
  .ant-slider-handle {
    background: var(--primary-color);
    border: 0;
    transition: box-shadow .1s ease, transform .2s ease;
    box-shadow: none;
  }
  .ant-slider-handle.ant-tooltip-open:focus {
    transform: translateX(-50%) scale(1.5) !important;
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--primary-color);
  }
  .ant-slider-track,
  .ant-slider:hover .ant-slider-track {
    background: var(--primary-color);
  }
  .anm {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: var(--delay, 0);
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .fid {
    animation-name: fadeInDown;
  }
  .fiu {
    animation-name: fadeInUp;
  }
  .fil {
    animation-name: fadeInLeft;
  }
  .fir {
    animation-name: fadeInRight;
  }
  .fi {
    animation-name: fadeIn;
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -16px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 16px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(16px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-16px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes shake {
    from, to {
        transform: translate3d(0, 0, 0);
    }

    10%, 30%, 50%, 70%, 90% {
        transform: translate3d(-10px, 0, 0);
    }

    20%, 40%, 60%, 80% {
        transform: translate3d(10px, 0, 0);
    }
  }
}
`
export default theme
export { GlobalStyle }
