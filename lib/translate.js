/**
 * A tiny, functional CSS3 translation transforms API for JavaScript.
 *
 * References:
 *
 * https://github.com/component/transform-property
 * https://developer.mozilla.org/en-US/docs/CSS/transform-function#translate()
 *
 * @license MIT license <http://mattcg.mit-license.org/>
 * @author Matthew Caruana Galizia <m@m.cg>
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 */

/*jshint node:true, browser:true*/

'use strict';


/**
 * @private
 * @param {Element} el
 * @return {string}
 */
var rule = function(el) {
	var found, styles, style, value, i, l;

	// The determination logic is only run once. After that, `rule` is reassigned to a new function that just returns the found rule name.
	rule = function() {
		return found;
	};

	// This portion of code was derived from: https://github.com/component/transform-property
	styles = [
		'webkitTransform',
		'MozTransform',
		'msTransform',
		'OTransform',
		'transform'
	];
	
	for (i = 0, l = styles.length; i < l; i++) {
		style = styles[i];
		value = el.style[style];
		if (undefined !== value) {
			found = style;
			return found;
		}
	}
};


/**
 * @private
 * @param {string|number} value
 */
var units = function(value) {
	if (!value) {
		return 0;
	}

	if (/[0-9]/.test(String(value).substr(-1))) {
		return value + 'px';
	}

	return value;
};


/**
 * @private
 * @param {Element} el
 * @param {string} value
 */
var apply = function(el, value) {
	el.style[rule(el)] = value;
};


/**
 * Apply a `translate(tx, ty)` CSS transform to the given element, moving the position of the element on the plane.
 *
 * If a length does not include units, `px` will be used.
 *
 * @param {Element} el
 * @param {string|number} [tx=0] A length representing the abscissa of the translating vector.
 * @param {string|number} ty A length representing the ordinate of the translating vector. If missing, it is assumed to be equal to tx: `translate(2)` means `translate(2, 2)`.
 */
var translate = function(el, tx, ty) {
	if (!ty && ty !== 0) {
		ty = tx;
	}

	apply(el, 'translate(' + units(tx) + ', ' + units(ty) + ')');
};


/**
 * Apply a `translate3d(tx, ty, tz)` CSS transform to the given element, moving the position of the element in the 3D space.
 *
 * If a length does not include units, `px` will be used.
 *
 * @param {Element} el
 * @param {string|number} [tx=0] A length representing the abscissa of the translating vector.
 * @param {string|number} [ty=0] A length representing the ordinate of the translating vector.
 * @param {string|number} [tz=0] A length representing the z component of the translating vector. It can't be a percentage value; in that case the property containing the transform is considered invalid.
 */
translate.d3 = translate['3d'] = function(el, tx, ty, tz) {
	apply(el, 'translate3d(' + units(tx) + ', ' + units(ty) + ', ' + units(tz) + ')');
};


/**
 * Apply a `translateX(tx)` CSS transform to the given element, moving the element horizontally on the plane.
 *
 * `translate.x(tx)` is a shortcut for `translate(tx, 0)`.
 *
 * If the length does not include units, `px` will be used.
 *
 * @param {Element} el
 * @param {string|number} [tx=0] A length representing the abscissa of the translating vector.
 */
translate.x = function(el, tx) {
	apply(el, 'translateX(' + units(tx) + ')');
};


/**
 * Apply a `translateY(ty)` CSS transform to the given element, moving the element vertically on the plane.
 *
 * `translate.y(ty)` is a shortcut for `translate(0, ty)`.
 *
 * If the length does not include units, `px` will be used.
 *
 * @param {Element} el
 * @param {string|number} [ty=0] A length representing the ordinate of the translating vector.
 */
translate.y = function(el, ty) {
	apply(el, 'translateY(' + units(ty) + ')');
};


/**
 * Apply a `translateZ(tz)` CSS transform to the given element, moving the element along the z-axis of the 3D space.
 *
 * `translate.z(tz)` is a shortcut for `translate3d(0, 0, tz)`.
 *
 * If the length does not include units, `px` will be used. It can't be a percentage value; in that case the property containing the transform is considered invalid.
 *
 * @param {Element} el
 * @param {string|number} [tz=0] A length representing the z-component of the translating vector.
 */
translate.z = function(el, tz) {
	apply(el, 'translateZ(' + units(tz) + ')');
};


/**
 * Get the browser-specific transform rule e.g. 'webkitTransform' or 'transform'.
 *
 * @return {string}
 */
translate.rule = function() {
	return rule(document.documentElement);
};

module.exports = translate;
