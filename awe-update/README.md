Here we try to update to recent version of [awe.js](https://github.com/awe-media/awe.js), and fix things accordingly.

Currently open issues and TODOs:
- [Problem with applying matrix transform to pois](https://github.com/awe-media/awe.js/issues/5)
- Scaling problem: models are super tiny unless the default scale in [awe.marker_ar.js](https://github.com/awe-media/awe.js/blob/master/examples/marker_ar/awe.marker_ar.js#L495) is modified to be (-200,-200,-200). TODO: figure out how to pass/correct the scale without modifying the library
