////////////////////////////////////////////////// Basic template
// PageFly ATC Helpers - Do not delete


try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			// Handle update cart here

		});
	}, 1500);
} catch (e) {
	console.warn(e);
}


//// Streamline theme
// Keywords: AjaxCart, StickyCart
try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			// sticky cart
			if(theme.settings.cartType === 'sticky') {
				theme.refreshCart()
			}
			// drawer
			if (theme.settings.cartType === 'drawer') {
				$.getJSON('/cart.json').then(cart => $('body').trigger('updateCart', cart))
			}
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}


////// Installme theme
// Keywords: proper.js bootstrap timber Install Me

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			// Handle update cart here
			Shopify.onItemAdded(res);

		});
	}, 1500);
} catch (e) {
	console.warn(e);
}


////// Pixel Union theme
// Keywords: pixelunion, ThemeView, CartView, QuickShopView, site.js
// Require: export QuickShopView to window: QuickShopView = window.QuickShopView = ....
// PageFly ATC Helpers - Do not delete

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			// Handle update cart here
			var properties = {};
			properties.variant = {};
			properties.product = {};
			properties.quantity = {};
			properties.quantity.added = data.quantity;
			properties.variant.id = data.id;
			properties.variant.title = data.variant_title;
			properties.product.title = data.product_title;
			properties.product.url = data.url;
			QuickShopView.prototype.updateMiniCart(data, properties);

		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

////// Elessi Theme
// Keywords: elessiShopify, jas_theme
// PageFly ATC Helpers - Do not delete

try {
	window.addEventListener("load", function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(res) {
			// Handle update cart here
			$.get("/cart?view=json", function(data, status) {
				/*optional stuff to do after success */
				$(".widget_shopping_cart_content").html(data);
			}).always(function() {
				var cart = res;
				var subtotal = parseFloat(
					$(".widget_shopping_cart_body").data("subtotal")
				);
				$(".nathan-cart-subtotal >span").html(
					elessiShopifyPre.formatMoney(subtotal, nathan_settings.moneyFormat)
				);
				$(".cartCount").html($(".widget_shopping_cart_body").data("count"));
				elessiShopify.favicon_counter(
					parseInt($(".widget_shopping_cart_body").data("count"))
				);
				elessiShopify.nanoScroller();

				if (
					nathan_settings.show_multiple_currencies &&
					elessiShopifyPre.StorageCurrency() !== null
				) {
					Currency.convertAll(
						shopCurrency,
						elessiShopifyPre.StorageCurrency(),
						".widget_shopping_cart_content span.money"
					);
					Currency.convertAll(
						shopCurrency,
						elessiShopifyPre.StorageCurrency(),
						".nathan-cart-subtotal span.money"
					);
				}

				if (parseInt($(".widget_shopping_cart_body").data("count")) > 0) {
					elessiShopify.initAddToCart(cart.image, cart.title);
				}
			});
		});
	});
} catch (e) {
	console.error("PF Error:: ", e);
} ////// Timber theme
// Keywords: Timber, enquirejs, ajaxifyShopify
// Require: export cartUpdateCallback func in ajaxifyShopify module

try {
	window.addEventListener("load", function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(res) {
			// Handle update cart here
			Shopify.getCart(ajaxifyShopify.cartUpdateCallback); // Or
			// ShopifyAPI.getCart(ajaxCart.adjustCartCallback)
			// Or
			// Shopify.onItemAdded(__pagefly_helper_store__.lastATCResult);
			// Or
			// Shopify.getCart(cart => {
			// 	document.querySelector("#cart #item_count").textContent = cart.item_count
			// })
		});
	});
} catch (e) {
	console.error("PF Error:: ", e);
} ////// Slate Theme
// Keywords: successDrawer, #successDrawer, CartJS, Queue


try {
	window.addEventListener("load", function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(res) {
			CartJS.getCart({
				type: "GET",
				update: true
			});
			var $body = $("body");
			var $successDrawer = $("#successDrawer");
			$successDrawer.find(".modal-prod-img").attr("src", "");
			var pimg = res.image,
				pimg_path = pimg.replace(/(\.[^\.]*$|$)/, "_small" + "$&");
			$successDrawer.find(".modal-prod-img").attr("src", pimg_path);
			$successDrawer.find(".modal-prod-name").text(res.product_title);
			$body.addClass("showOverly");
			$successDrawer.fadeIn(500);
			drawerTimeout = setTimeout(function() {
				$body.removeClass("showOverly");
				$successDrawer.fadeOut(200);
			}, 8000);
		});
	});
} catch (e) {
	console.error("PF Error:: ", e);
}



////// Theme theme (A theme that named "Theme" !!)

// var t = window.pfCart =
try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(res) {
			pfCart.showModal(".ajax-success-modal");
			$(".ajax-success-modal")
				.find(".ajax-product-image")
				.attr("src", res.featured_image.url);
			$(".ajax-success-modal")
				.find(".added-to-wishlist")
				.hide();
			$(".ajax-success-modal")
				.find(".added-to-cart")
				.show();
			$(".ajax-success-modal")
				.find(".ajax-product-title")
				.text(res.title);
			$(".ajax-success-modal")
				.find(".ajax_price")
				.text(res.price);
			$(".ajax-success-modal")
				.find(".ajax_qty")
				.text(res.quantity);
			pfCart.updateDropdownCart();
		});
	}, 1500);
} catch (e) {
	console.error("PF error:: ", e);
}



///////// Venue theme
// Require: Remember to export 'buildCart' func in 'ajaxCart' module

try {
	window.addEventListener("load", function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function() {
			ShopifyAPI.getCart(function(cart) {
				ajaxCart.buildCart(cart);
				$(document.body).trigger("afterAddItem.ajaxCart");
			});
		});
	});
} catch (err) {
	console.error("PF: err", err);
} ///////// Turbo theme
// Require: Remenber export the refreshCart function to window

try {

	window.addEventListener("load", function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(res) {
			$.ajax({
				url: "/cart.js",
				dataType: "json",
				cache: false,
				success: function success(cart) {
					//block scrolling on mobile
					if ($(window).width() <= 798) {
						$("body").addClass("blocked-scroll");
					}

					window.refreshCart(cart);

					if ($("#header").is(":visible")) {
						$("#header .cart_container").addClass("active_link");
					} else if ($(".sticky_nav--stick").length) {
						$(".sticky_nav .cart_container").addClass("active_link");
					} else {
						$(".top_bar .cart_container").addClass("active_link");
					}
				}
			});
		});
	});
} catch (e) {
	console.error("PF:: ", e);
} // Nathan theme | Gecko theme

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			$.get("/cart?view=json", function(data, status) {
				/*optional stuff to do after success */
				$(".widget_shopping_cart_content").html(data);
			}).always(function() {
				var subtotal = parseFloat(
					$(".widget_shopping_cart_body").data("subtotal")
				);
				$(".gecko-cart-subtotal >span").html(
					elessiShopifyPre.formatMoney(subtotal, nathan_settings.moneyFormat)
				);
				$(".cartCount").html($(".widget_shopping_cart_body").data("count"));
				elessiShopify.favicon_counter(
					parseInt($(".widget_shopping_cart_body").data("count"))
				);
				elessiShopify.nanoScroller();

				if (
					nathan_settings.show_multiple_currencies &&
					elessiShopifyPre.StorageCurrency() !== null
				) {
					Currency.convertAll(
						shopCurrency,
						elessiShopifyPre.StorageCurrency(),
						".widget_shopping_cart_content span.money"
					);
					Currency.convertAll(
						shopCurrency,
						elessiShopifyPre.StorageCurrency(),
						".gecko-cart-subtotal  span.money"
					);
				}

				elessiShopify.initAddToCart(
					__pagefly_helper_store__.lastATCResult.product_id
				);
			});
		});
	}, 1500);
} catch (e) {
	console.warn(e);
} // Narrative theme
// Require: need to put the cart on to window

var cart = (window.cart = {}); // then add this code to the bottom of js file.

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			window.cart &&
			window.cart._promiseChange({
				url: "/cart.json",
				dataType: "json"
			});

			window.theme.sections.instances[0]._openCartDrawer(new Event("click"));
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}


// Some unnamed theme.

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			theme.ProductPage._updateCartCount();
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			document.body.dispatchEvent(
				new CustomEvent("product:added", {
					bubbles: true,
					detail: {
						variant: __pagefly_helper_store__.lastATCResult.variant_id,
						quantity: __pagefly_helper_store__.lastATCResult.quantity
					}
				})
			);
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			Shopify.getCart(function(cart) {
				Shopify.updateCartInfo(cart, ".cart-info .cart-content");
			});
		});
	}, 1500);
} catch (e) {
	console.warn(e);
} // Fastor theme

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			roar.updateCartSidebar();
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			Shopify.onItemAdded(__pagefly_helper_store__.lastATCResult);
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			$.ajax({
				url: "/cart.js",
				dataType: "json",
				cache: false,
				success: function success(cart) {
					refreshCart(cart);
					window.setTimeout(function() {
						$.fancybox.close();
						$(".cart-button").click();
					}, 500);
				}
			});
		});
	}, 1500);
} catch (e) {
	console.warn(e);
} // Booster theme

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			$.getJSON("/cart.json", function(cart) {
				var total_price = cart.total_price;
				$("#CartCost").text(
					theme.Currency.formatMoney(total_price, theme.moneyFormat)
				);
				$("#CartCount > span").text(cart.item_count);
			});
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			Shopify.theme.jsAjaxCart.showDrawer();
			Shopify.theme.jsAjaxCart.updateView();
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			window.__pagefly_help.getCart(console.log);

			window.__pagefly_help.notification(
				window.__pagefly_helper_store__.lastATCResult
			);
		});
	}, 1500);
} catch (e) {
	console.warn(e);
} // Trademark

$.getJSON("/cart.js", function(cart) {
	$(document).trigger("theme:cart:updated", [cart, true, true]);
});

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			roar.updateCart(__pagefly_helper_store__.lastATCResult, true);
		});
	}, 1500);
} catch (e) {
	console.warn(e);
} // District Theme, Style Hatch Inc.

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			$.getJSON("/cart", function(cart) {
				StyleHatch.AjaxCart.updateCartButton(cart);
				StyleHatch.AjaxCart.updateCartPreview(
					JSON.stringify(__pagefly_helper_store__.lastATCResult),
					cart
				);
			});
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

//// Boom-main-demo theme
// Keywords: buddha, shop.js, #slidedown-cart
// Require: shop.js: var buddha = window.buddha = ...

try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(item) {
			// Handle update cart here
			$.getJSON('/cart.json').then(cart =>
				buddha.doUpdateDropdownCart(cart);
				buddha.hideLoading();
				buddha.showModal(".ajax-success-modal");
				$(".ajax-success-modal").find(".ajax-product-image").attr("src", item.image );
				$(".ajax-success-modal").find(".added-to-wishlist").hide();
				$(".ajax-success-modal").find(".added-to-cart").show();
				$(".ajax-success-modal").find(".ajax-product-title").text(item.product_title);
				$(".ajax-success-modal").find(".ajax_price").text(Shopify.formatMoney(item.price, window.money_format));
				$(".ajax-success-modal").find(".ajax_qty").text(item.quantity);
			})

		});
	}, 1500);
} catch (e) {
	console.warn(e);
}


// Theme: Karic 1.0.0
try {
	setTimeout(function() {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function(c) {
			Shopify.getCart(function(e) {
				NW.collection.updateCartInfo(
					e,
					".cart-container .cart-wrapper .cart-inner-content"
				);
			});
			$(".icon-cart-header").click();
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}


/**
    "theme_name": "Boost",
    "theme_version": "1.5.2",
    "theme_author": "Clean Canvas",
    "theme_documentation_url": "http:\/\/cleancanvas.co.uk\/support\/boost\/",
    "theme_support_url": "http:\/\/cleancanvas.co.uk\/support\/boost\/"
*/

setTimeout(function () {
	window.__pagefly_helper_store__ && window.__pagefly_helper_store__.subscribe(function () {
		var itemData = window.__pagefly_helper_store__.lastATCResult;
		// reload header
		$.get(theme.routes.search_url, function (data) {
			var selectors = ['.page-header .header-cart', '.docked-navigation-container .header-cart'];
			var $parsed = $($.parseHTML('<div>' + data + '</div>'));

			for (var i = 0; i < selectors.length; i++) {
				var cartSummarySelector = selectors[i];
				var $newCartObj = $parsed.find(cartSummarySelector).clone();
				var $currCart = $(cartSummarySelector);
				$currCart.replaceWith($newCartObj);
			}
		});

		// close quick-buy, if present
		$.colorbox.close(); // display added notice


		// get full product data
		theme.productData = theme.productData || {};

		if (!theme.productData[itemData.product_id]) {
			theme.productData[itemData.product_id] = window.__pageflyProducts[itemData.product_id];
		}

		var productVariant = null;

		for (var i = 0; i < theme.productData[itemData.product_id].variants.length; i++) {
			var variant = theme.productData[itemData.product_id].variants[i];

			if (variant.id == itemData.variant_id) {
				productVariant = variant;
			}
		}

		var productPrice = '';

		if (itemData.original_line_price > itemData.final_line_price) {
			productPrice += '<span class="cart-summary__price-reduced product-price__reduced theme-money">' + slate.Currency.formatMoney(itemData.final_line_price, theme.moneyFormat) + '</span>';
			productPrice += '<span class="cart-summary__price-compare product-price__compare theme-money">' + slate.Currency.formatMoney(itemData.original_line_price, theme.moneyFormat) + '</span>';
		} else {
			productPrice += '<span class="theme-money">' + slate.Currency.formatMoney(itemData.final_line_price, theme.moneyFormat) + '</span>';
		} // append quantity


		var productQty = '';

		if (itemData.quantity > 1) {
			productQty = ' <span class="cart-summary__quantity">' + itemData.quantity + '</span>';
		}

		if (itemData.line_level_discount_allocations && itemData.line_level_discount_allocations.length > 0) {
			productPrice += '<ul class="cart-discount-list small-text">';

			for (var i = 0; i < itemData.line_level_discount_allocations.length; i++) {
				var discount_allocation = itemData.line_level_discount_allocations[i];
				productPrice += ['<li class="cart-discount">', '<div class="cart-discount__label">', discount_allocation.discount_application.title, '</div>', '<div class="cart-discount__amount theme-money">', slate.Currency.formatMoney(discount_allocation.amount, theme.moneyFormat), '</div>', '</li>'].join('');
			}

			productPrice += '</ul>';
		}

		var productVariantsHTML = '';

		if (productVariant) {
			// get option names from full product data
			var optionNames = theme.productData[itemData.product_id].options;
			productVariantsHTML = '<div class="cart-summary__product__variants">';

			for (var i = 0; i < productVariant.options.length; i++) {
				if (productVariant.options[i].indexOf('Default Title') < 0) {
					productVariantsHTML += '<div class="cart-summary__variant">';
					productVariantsHTML += '<span class="cart-summary__variant-label">' + optionNames[i] + ':</span> ';
					productVariantsHTML += '<span class="cart-summary__variant-value">' + productVariant.options[i] + '</span>';
					productVariantsHTML += '</div>';
				}
			}

			productVariantsHTML += '</div>';
		}

		var productImage;

		if (productVariant.featured_media) {
			productImage = slate.Image.getSizedImageUrl(productVariant.featured_media.preview_image.src, '200x');
		} else if (theme.productData[itemData.product_id].media.length > 0) {
			productImage = slate.Image.getSizedImageUrl(theme.productData[itemData.product_id].media[0].preview_image.src, '200x');
		}

		console.log('check productImage', productImage); // additional fetch - for full cart data

		$.getJSON(theme.routes.cart_url + '.js', function (cartData) {
			var $template = $(['<div class="added-notice global-border-radius added-notice--pre-reveal">', '<div class="added-notice__header">', '<span class="added-notice__title">', theme.strings.addedToCartPopupTitle, '</span>', '<a class="added-notice__close feather-icon" href="#" aria-label="', theme.strings.close, '">', theme.icons.close, '</a>', '</div>', '<div class="cart-summary global-border-radius">', '<div class="cart-summary__product">', '<div class="cart-summary__product-image"><img class="global-border-radius" src="', productImage, '" role="presentation" alt=""></div>', '<div class="cart-summary__product__description">', '<div class="cart-summary__product-title">', theme.productData[itemData.product_id].title, productQty, '</div>', productVariantsHTML, '<div class="cart-summary__price">', productPrice, '</div>', '</div>', '</div>', '</div>', '<div class="cart-summary__footer">', '<div class="cart-summary__total-quantity-row">', '<span>', theme.strings.addedToCartPopupItems, '</span>', '<span>', cartData.item_count, '</span>', '</div>', '<div class="cart-summary__total-price-row">', '<span>', theme.strings.addedToCartPopupSubtotal, '</span>', '<span class="theme-money">', slate.Currency.formatMoney(cartData.total_price, theme.moneyFormat), '</span>', '</div>', '<a href="', theme.routes.cart_url, '" class="btn btn--primary btn--small btn--fullwidth cart-summary__button">', theme.strings.addedToCartPopupGoToCart, '</a>', '</div>', '</div>'].join(''));
			$template.appendTo('body'); // transition in

			setTimeout(function () {
				$template.removeClass('added-notice--pre-reveal');
			}, 10); // transition out

			$(document).on('click.ajaxAddToCart', '.added-notice__close', function () {
				var $template = $(this).closest('.added-notice').addClass('added-notice--pre-destroy');
				setTimeout(function () {
					$template.remove();
					$(document).off('click.ajaxAddToCart');
				}, 500);
				return false;
			});
		});
	});
}, 1500);


// Reach theme by PixelUnion
setTimeout(function () {
	window.__pagefly_helper_store__ && window.__pagefly_helper_store__.subscribe(function () {
		window.pfCartRequest.submitItemRequest({
			id: __pagefly_helper_store__.lastATCResult.id,
			quantity: __pagefly_helper_store__.lastATCResult.quantity
		}, true);
	});
}, 1500);


// https://so-curly-bae.myshopify.com/products/island-curly-clip-in-extensions
CartJS.getCart()
setTimeout(function() {
	$("body").removeClass("loading showOverly");
	$(".block-cart").addClass("active");
},1000);
drawerTimeout = setTimeout(function() {
	$(".block-cart").removeClass("active");
}, 7000);


// Express theme
try {
	setTimeout(function () {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function (res) {
			console.log("res", res);
			var id = res.id;
			window.carts.forEach(function (e) {
				e.onNewItemAdded(id);
			});
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}


// sTan theme
/*
 * i(t, [{ key: "init", value: function value() {
        var t = window.pfCart = this,
            e = t.selectors;t.ajax = null, r.default.options = { closeButton: !0, progressBar: !1, positionClass: (0, n.default)(e.rtl).length ? "toast-top-left" : "toast-top-right", showDuration: 300, hideDuration: 300, timeOut: 5e3, extendedTimeOut: 2e3 }, s.default.encReg = null;var a = (0, n.default)("body");return a.on("click", e.addCart, function (a) {
          a.preventDefault();
 */
try {
	setTimeout(function () {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function (c) {
			pfCart.getCart();
			pfCart.notification(__pagefly_helper_store__.lastATCResult);
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}


/**
 * Theme Context:
 * File: index.js
 * ,Hn=window.pfCart=function(t,e,n){void 0===t&&(t={}),void 0===e&&(e={})
 */

try {
	setTimeout(function () {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function (c) {
			$.getJSON("/cart.js", function (cart) {
				pfCart.hydrate({
					cart: cart
				});
				pfCart.emit("cart:updated", function () {
					return {
						cart: cart
					};
				});
				pfCart.emit("cart:toggle", function () {
					return {
						cartOpen: true
					};
				});
			});
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}

/**
 * Theme: Motion
 */

try {
	setTimeout(function () {
		window.__pagefly_helper_store__ &&
		window.__pagefly_helper_store__.subscribe(function (c) {
			// Handle update cart here
			document.dispatchEvent(
				new CustomEvent("ajaxProduct:added", {
					detail: {
						product: __pagefly_helper_store__.lastATCResult
					}
				})
			);
		});
	}, 1500);
} catch (e) {
	console.warn(e);
}