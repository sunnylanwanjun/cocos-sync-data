import { Gradient } from './gradient';

export enum Mode {
    Color,
    Gradient,
    TwoColors,
    TwoGradients,
    RandomColor,
};

export class GradientRange {
    mode = Mode.Color;

    color: IColor;
    colorMin: IColor;
    colorMax: IColor;
    gradient = new Gradient();
    gradientMin = new Gradient();
    gradientMax = new Gradient();
}
