import { SimulationSpace } from '../common';
import { CurveRange } from '../curve-range';

export class ForceOvertimeData {
    public x = new CurveRange();
    public y = new CurveRange();
    public z = new CurveRange();

    public space = SimulationSpace.Local;
}
