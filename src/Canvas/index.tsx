import React from 'react';

const style = {
  root: {
    // ※className　使わないと余計な div が増えてスタイリングできないので以下調整  
    // display: 'flex',
    // justifyContent: 'center',
    margin: '2rem',
    width: '500px',
    height: '500px',
    border: '1px solid gray',
    borderRadius: '10px',
  },
  canvas: {},
};

interface Props extends React.Props<any> {}

interface State {
  drawing: boolean;
}

// interface Canvas {
//   getContext(contextId: '2d'): CanvasRenderingContext2D;
// }

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
    console.log("startDrawing: this.state.drawing", this.state.drawing);
    console.log("startDrawing: ctx", ctx);
  }

  draw(x: number, y: number) {
    if (this.state.drawing === false) {
      return;
    }
    const ctx = this.getContext();
    ctx.lineTo(x, y);
    ctx.stroke();
    console.log("draw: this.state.drawing", this.state.drawing);
    console.log("draw: ctx", ctx);
  }

  endDrawing() {
    this.setState({ drawing: false });
    console.log("endDrawing: this.state.drawing", this.state.drawing);
  }

  render() {
    return (
      <div style={style.root}>
      <canvas
        ref="canvas"
        width="500px"
        height="500px"
        onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        onMouseUp={() => this.endDrawing()}
        onMouseLeave={() => this.endDrawing()}
        onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        style={style.canvas}
      />
      </div>
    );
  }
}
export default Canvas;