import { SimulationSpace } from '../common';
import { CurveRange } from '../curve-range';

export class VelocityOvertimeData {
    x = new CurveRange();
    y = new CurveRange();
    z = new CurveRange();
    speedModifier = new CurveRange();

    space = SimulationSpace.Local;
}
