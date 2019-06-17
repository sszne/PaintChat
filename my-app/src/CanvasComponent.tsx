import React from 'react';

interface Props extends React.Props<any> {
  width: number;
  height: number;
  updateCanvas: Function;
}

interface State {}

class CanvasComponent extends React.Component<Props, State> {
  public static defaultProps: Props = {
    width: 0,
    height: 0,
    updateCanvas: Function
  };
  componentDidMount() {
    this.updateCanvas();
  }

  componentWillReceiveProps(nextProps: any) {
    if (this.props !== nextProps) {
      this.updateCanvas();
    }
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const { canvas } = this;
    const context = canvas.getContext('2d');
    this.props.updateCanvas(context);
  }

  render() {
    return <canvas ref={(e) => { this.canvas = e; }} width={this.props.width} height={this.props.height}></canvas>;
  }
}

export default CanvasComponent;
