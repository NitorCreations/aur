var utils = {};

utils.getParameterByName = function (name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

// David Walsh's debounce
utils.debounce = function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

utils.noop = () => {}

utils.getHash = () => window.location.hash.substring(1, 51)

utils.loadTexture = path => {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(path, texture => {
      const material = new THREE.MeshBasicMaterial({ map: texture })
      resolve(material)
    })
  })
}

utils.loadGeometry = path => {
  return new Promise(resolve => new THREE.JSONLoader().load(path, resolve))
}

utils.getVideoParams = () => {
  return navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      const backCamera = devices.find(camera => camera.label.indexOf('back') > -1)
      return { deviceId: backCamera ? {exact: backCamera.deviceId} : undefined }
    })
}

utils.loadFont = path => {
  return new Promise(resolve => new THREE.FontLoader().load(path, resolve))
}
