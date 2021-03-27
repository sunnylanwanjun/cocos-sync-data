import { SimulationSpace } from '../common';
import { CurveRange } from '../curve-range';

export class LimitVelocityOvertimeData {
    public limitX = new CurveRange();
    public limitY = new CurveRange();
    public limitZ = new CurveRange();

    public limit = new CurveRange();

    public dampen = 3;

    public separateAxes = false;

    public space = SimulationSpace.Local;
}
