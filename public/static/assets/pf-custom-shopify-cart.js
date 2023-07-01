
var interval;
var countInt = 0;

function clearOrderId() {
	countInt++;

	if (countInt > 10) {
		clearInterval(interval);
	}

	try {
		var div1 = Array.from(document.querySelectorAll("div"))
			.filter(function (el) {
				return (
					el.textContent.includes("__pf_orderitem_id") &&
					el.textContent.length < 30
				);
			})
			.slice(-1)[0];
		div1 &&
		(div1.innerHTML = div1.innerHTML.replace(/__pf_orderitem_id:?/g, ""));
		var div2 = Array.from(document.querySelectorAll("div"))
			.filter(function (el) {
				return (
					/pf-(\w+):(\w+)-(\w+)-(\w+)-(\w+)-(\w+)/g.test(el.textContent) &&
					el.textContent.length < 50
				);
			})
			.slice(-1)[0];
		div2 &&
		(div2.innerHTML = div2.innerHTML.replace(
			/pf-(\w+):(\w+)-(\w+)-(\w+)-(\w+)-(\w+)/g,
			""
		));
	} catch (e) {
		console.warn(e);
	}
}

window.__pf_clearOderId = clearOrderId;

if (window.location.pathname.indexOf("/cart") > -1) {
	interval = setInterval(function () {
		return requestAnimationFrame(clearOrderId);
	}, 500);
}
