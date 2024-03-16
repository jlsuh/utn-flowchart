import type { DataPlan } from '@/types';
import k08 from './k08';
import k23 from './k23';
import r23 from './r23';

const plans: ReadonlyArray<DataPlan> = [k08, k23, r23];

export default plans;
