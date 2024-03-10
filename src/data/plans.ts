import { DataPlan } from '../types/types';
import { k08 } from './k08';
import { k23 } from './k23';
import { r23 } from './r23';

export const plans: ReadonlyArray<DataPlan> = [k08, k23, r23];
