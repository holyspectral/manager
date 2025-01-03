// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';
import { ServiceStateIn, isServiceStateIn } from './ServiceStateIn';

export interface ServiceMaps {
  serviceUnderRulesMap: { [key: string]: ServiceStateIn };
  otherServiceMap: { [key: string]: ServiceStateIn };
  ipServiceMap: { [key: string]: ServiceStateIn };
  serviceMap: { [key: string]: ServiceStateIn };
  serviceModeMap: { [key: string]: number };
  groups: Array;
}

export function isServiceMaps(v: any): v is ServiceMaps {
  return (
    typeof v['serviceUnderRulesMap'] == 'object' &&
    Object.keys(v['serviceUnderRulesMap']).every(
      key =>
        typeof key === 'string' &&
        v['serviceUnderRulesMap'][key] &&
        isServiceStateIn(v['serviceUnderRulesMap'][key])
    ) &&
    typeof v['otherServiceMap'] == 'object' &&
    Object.keys(v['otherServiceMap']).every(
      key =>
        typeof key === 'string' &&
        v['otherServiceMap'][key] &&
        isServiceStateIn(v['otherServiceMap'][key])
    ) &&
    typeof v['ipServiceMap'] == 'object' &&
    Object.keys(v['ipServiceMap']).every(
      key =>
        typeof key === 'string' &&
        v['ipServiceMap'][key] &&
        isServiceStateIn(v['ipServiceMap'][key])
    ) &&
    typeof v['serviceMap'] == 'object' &&
    Object.keys(v['serviceMap']).every(
      key =>
        typeof key === 'string' &&
        v['serviceMap'][key] &&
        isServiceStateIn(v['serviceMap'][key])
    ) &&
    typeof v['serviceModeMap'] == 'object' &&
    Object.keys(v['serviceModeMap']).every(
      key =>
        typeof key === 'string' && typeof v['serviceModeMap'][key] === 'number'
    ) &&
    v['groups'] &&
    isArray(v['groups'])
  );
}
