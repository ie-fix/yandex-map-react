import api from '../api';

class MapController {
    constructor () {

    }

    createMap (container, state, options) {
        this._map = new (api.getAPI()).Map(container, state, options);
        this.map = this._map;
        this.events = this._map.events.group();

        this._setupCollection();

        return this;
    }

    appendMarker (marker) {
        this._geoCollection.add(marker.getAPIInstance());
    }

    setOptions (name, value) {
        this._map.options.set(name, value);
    }

    setState (name, value) {
        this._map.state.set(name, value);
    }

    destroy () {
        this.events.removeAll();
        this._map.destroy();
    }

    _setupCollection () {
        this._geoCollection = new (api.getAPI()).GeoObjectCollection();
        this._map.geoObjects.add(this._geoCollection);
    }
}

export default MapController;
