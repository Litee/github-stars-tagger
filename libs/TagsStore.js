'use strict';

/**
 * @class TagsStore
 */
class TagsStore {

	constructor () {

	}

	get (key) {
		return new Promise((resolve, reject) => {
			chrome.storage.sync.get(key, data => {
				if (chrome.runtime.lastError) {
					reject(chrome.runtime.lastError);
				} else {
					resolve(data);
				}
			});
		}).catch(error => {
			window.console.log('chrome.storage.sync.get error', error, error.message);
		});
	}

	set (key, value) {
		var data = {};
		data[key] = value;

		return new Promise((resolve, reject) => {
			chrome.storage.sync.set(data, () => {
				if (chrome.runtime.lastError) {
					reject(chrome.runtime.lastError);
				} else {
					resolve();
				}
			});
		}).catch(error => {
			window.console.log('chrome.storage.sync.set error', error, error.message);
		});
	}

	remove (key) {
		return new Promise((resolve, reject) => {
			chrome.storage.sync.remove(key, () => {
				if (chrome.runtime.lastError) {
					reject(chrome.runtime.lastError);
				} else {
					resolve();
				}
			});
		}).catch(error => {
			window.console.log('chrome.storage.sync.remove error', error, error.message);
		});
	}

	clear () {
		return new Promise((resolve, reject) => {
			chrome.storage.sync.clear(() => {
				if (chrome.runtime.lastError) {
					reject(chrome.runtime.lastError);
				} else {
					resolve();
				}
			});
		}).catch(error => {
			window.console.log('chrome.storage.sync.clear error', error, error.message);
		});
	}

}

/* jshint unused: false */
