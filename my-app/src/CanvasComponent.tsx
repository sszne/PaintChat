import React from 'react';

interface Props extends React.Props<any> {
  width: number;
  height: number;
  canvas: any;
  updateCanvas: any;
}

interface State {}

class CanvasComponent extends React.Component<Props, State> {
  public static defaultProps: Props = {
    width: 0,
    height: 0,
    canvas: '',
    updateCanvas: ''
  };
  componentWillReceiveProps(nextProps: any) {
    if (this.props !== nextProps) {
      this.updateCanvas();
    }
  }
  componentWillMount() {
    this.refs = {}
  }
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const { canvas } = this.refs;
    const context = canvas.getContext('2d');
    this.props.updateCanvas(context);
  }
  render() {
    return <canvas ref={this.context.canvas} width={this.props.width} height={this.props.height}></canvas>;
  }
}

export default CanvasComponent;
