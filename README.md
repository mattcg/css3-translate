# CSS3 translate #

A tiny (900 bytes minified, 470 bytes gziped), functional CSS3 translation transforms API for JavaScript. Supports all browsers supporting CSS3 Transforms. Check out the [support grid](http://caniuse.com/transforms2d).

3D transforms - `translate.z` and `translate.d3` - have a [separate support grid](http://caniuse.com/transforms3d).

## Install ##

```bash
git clone https://github.com/mattcg/css3-translate.git
cd css3-translate/
make
cp build/translate.min.js /path/to/my-project/js/
```

Alternatively, use [Component](https://github.com/component/component) to install to your project.

```bash
component install css3-translate
```

You can also use [Bower](http://bower.io/).

```bash
bower install css3-translate
```

And [npm](https://npmjs.org/).

```bash
npm install css3-translate
```

## API ##

For all translation methods, if a length does not include units, `px` will be used.

### translate(tx, ty) ###

Apply a `translate(tx, ty)` CSS transform to the given element, moving the position of the element on the plane.

If missing, `ty` is assumed to be equal to `tx`: `translate(2)` means `translate(2, 2)`.

### translate.x(tx) ###

Apply a `translateX(tx)` CSS transform to the given element, moving the element horizontally on the plane.

### translate.y(ty) ###

Apply a `translateY(ty)` CSS transform to the given element, moving the element vertically on the plane.

### translate.z(tz) ###

Apply a `translateZ(tz)` CSS transform to the given element, moving the element along the z-axis of the 3D space.

### translate.d3(tx, ty, tz) or translate\['3d'\](tx, ty, tz) ###

Apply a `translate3d(tx, ty, tz)` CSS transform to the given element, moving the position of the element in the 3D space.

### translate.rule() ###

Get the browser-specific transform rule e.g. 'webkitTransform' or 'transform'.

## License ##

Copyright © 2013 [Matthew Caruana Galizia](http://twitter.com/mcaruanagalizia), licensed under an [MIT license](http://mattcg.mit-license.org/).
