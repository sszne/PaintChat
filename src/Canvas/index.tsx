import React from 'react';

const style = {
  border: '1px solid gray',
  backgroundColor: 'white',
};

interface Props extends React.Props<any> {}

interface State {
  drawing: boolean;
}

interface Canvas {
  getContext(contextId: '2d'): CanvasRenderingContext2D;
}

class Canvas extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { drawing: false };
  }

  getContext() {
    const canvas: any = this.refs.canvas;
    return canvas.getContext('2d');
  }

  startDrawing(x: number, y: number) {
    this.setState({ drawing: true });
    const ctx = this.getContext();
    ctx.moveTo(x, y);
  }

  draw(x: number, y: number) {
    if (this.state.drawing) {
      return;
    }
    const ctx = this.getContext();
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  endDrawing() {
    this.setState({ drawing: false });
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width="500px"
        height="500px"
        onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        onMouseUp={() => this.endDrawing()}
        onMouseLeave={() => this.endDrawing()}
        onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        style={style}
      />
    );
  }
}
export default Canvas;