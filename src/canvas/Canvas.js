


/* eslint-disable-next-line */
export class Canvas {
    constructor(config) {
        this.pixelRatio = config.pixelRatio ?? 2;
        this.width = config.width ?? 0;
        this.height = config.height ?? 0;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.style.padding = '0';
        this.canvas.style.margin = '0';
        this.canvas.style.border = '0';
        this.canvas.style.background = 'red';
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
    }

    getContext() {
        return this.context;
    }

    getPixelRatio() {
        return this.pixelRatio;
    }

    setWidth(width) {
        this.width = width * this.pixelRatio;
        this.canvas.width = this.width;
        this.canvas.style.width = `${width}px`;
    }

    setHeight(height) {
        this.height = height * this.pixelRatio;
        this.canvas.height = this.height;
        this.canvas.style.height = `${height}px`;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setSize(width, height) {
        this.setWidth(width || 0);
        this.setHeight(height || 0);
    }
}
