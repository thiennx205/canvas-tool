if (!global._babelPolyfill) {
	require('babel-polyfill');
}
import fabric from 'fabric-with-gestures';

let DrawTool ={
  canvas: null,
  container: null,
  initialize(canvasElement) {
    this.canvas = document.getElementById(canvasElement)
  },
  initFabric() {
    this.FabricCanvas = new fabric.Canvas(this.canvas, {
      selection: false,
      enableRetinaScaling: true,
      preserveObjectStacking: true
    });

    this.FabricCanvas.toJSON('objects.brush');

    this.FabricCanvas.wrapperEl.style.display = 'none';

    this.FabricCanvas.upperCanvasEl.style['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';
    this.FabricCanvas.lowerCanvasEl.style['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';
  },
  initEvent() {
  }
}

export default DrawTool;