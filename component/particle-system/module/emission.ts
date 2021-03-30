import { Burst } from '../burst';
import { CurveRange } from '../curve-range';

export class EmissionData {
    rateOverTime = new CurveRange();
    rateOverDistance = new CurveRange();
    bursts: Burst[] = [];
}
