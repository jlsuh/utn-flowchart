import { DataPlan } from '../types/types';
import { DEFAULT_STATUS, modes } from './constants';

export const k08: DataPlan = {
  id: 'k08',
  branch: 'FRBA',
  subjects: [
    [
      {
        id: 'aga',
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: 'Álgebra y Geometría Analítica',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'am1',
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: 'Análisis Matemático I',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'md',
        modes: [modes.ANNUAL],
        name: 'Matemática Discreta',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'quimica',
        modes: [modes.QUADRIMESTRAL],
        name: 'Química',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'iys',
        modes: [modes.QUADRIMESTRAL],
        name: 'Ing. y Sociedad',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'ayed',
        modes: [modes.ANNUAL],
        name: 'Algoritmos y Estructuras de Datos',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'adc',
        modes: [modes.ANNUAL],
        name: 'Arquitectura de Computadores',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'syo',
        modes: [modes.ANNUAL],
        name: 'Sist. y Organizaciones',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
    [
      {
        id: 'ads',
        modes: [modes.ANNUAL],
        name: 'Análisis de Sistemas',
        passed: [],
        status: DEFAULT_STATUS,
        taken: ['syo', 'ayed'],
      },
      {
        id: 'sdr',
        modes: [modes.ANNUAL],
        name: 'Sist. de Representación',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'am2',
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: 'Análisis Matemático II',
        passed: [],
        status: DEFAULT_STATUS,
        taken: ['am1', 'aga'],
      },
      {
        id: 'ssl',
        modes: [modes.ANNUAL],
        name: 'Sintaxis y Semántica de los Lenguajes',
        passed: [],
        status: DEFAULT_STATUS,
        taken: ['md', 'ayed'],
      },
      {
        id: 'ingles1',
        modes: [modes.QUADRIMESTRAL],
        name: 'Inglés I',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'f1',
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: 'Física I',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: 'pdep',
        modes: [modes.ANNUAL],
        name: 'Paradigmas de Programación',
        passed: [],
        status: DEFAULT_STATUS,
        taken: ['md', 'ayed'],
      },
      {
        id: 'proba',
        modes: [modes.QUADRIMESTRAL],
        name: 'Prob. y Estadística',
        passed: [],
        status: DEFAULT_STATUS,
        taken: ['am1', 'aga'],
      },
    ],
    [
      {
        id: 'dds',
        modes: [modes.ANNUAL],
        name: 'Diseño de Sistemas',
        passed: ['md', 'syo', 'ayed'],
        status: DEFAULT_STATUS,
        taken: ['ads', 'pdep'],
      },
      {
        id: 'sisop',
        modes: [modes.QUADRIMESTRAL],
        name: 'Sist. Operativos',
        passed: [],
        status: DEFAULT_STATUS,
        taken: ['md', 'ayed', 'adc'],
      },
      {
        id: 'f2',
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: 'Física II',
        passed: [],
        status: DEFAULT_STATUS,
        taken: ['am1', 'f1'],
      },
      {
        id: 'economia',
        modes: [modes.QUADRIMESTRAL],
        name: 'Economía',
        passed: ['syo', 'ayed'],
        status: DEFAULT_STATUS,
        taken: ['ads'],
      },
      {
        id: 'gdd',
        modes: [modes.QUADRIMESTRAL],
        name: 'Gestión de Datos',
        passed: ['md', 'syo', 'ayed'],
        status: DEFAULT_STATUS,
        taken: ['ads', 'ssl', 'pdep'],
      },
      {
        id: 'ms',
        modes: [modes.QUADRIMESTRAL],
        name: 'Matemática Superior',
        passed: ['am1', 'aga'],
        status: DEFAULT_STATUS,
        taken: ['am2'],
      },
      {
        id: 'legislacion',
        modes: [modes.QUADRIMESTRAL],
        name: 'Legislación',
        passed: ['syo', 'ayed'],
        status: DEFAULT_STATUS,
        taken: ['ads', 'iys'],
      },
      {
        id: 'ingles2',
        modes: [modes.QUADRIMESTRAL],
        name: 'Inglés II',
        passed: ['ingles1'],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
    [
      {
        id: 'adr',
        modes: [modes.ANNUAL],
        name: 'Adm. de Recursos',
        passed: ['adc', 'ingles1', 'ads', 'pdep'],
        status: DEFAULT_STATUS,
        taken: ['dds', 'sisop', 'economia'],
      },
      {
        id: 'ids',
        modes: [modes.QUADRIMESTRAL],
        name: 'Ing. de Software',
        passed: ['ads', 'ssl', 'pdep'],
        status: DEFAULT_STATUS,
        taken: ['proba', 'dds', 'gdd'],
      },
      {
        id: 'tdc',
        modes: [modes.QUADRIMESTRAL],
        name: 'Teoría de Control',
        passed: ['am2', 'f2'],
        status: DEFAULT_STATUS,
        taken: ['quimica', 'ms'],
      },
      {
        id: 'comunicaciones',
        modes: [modes.QUADRIMESTRAL],
        name: 'Comunicaciones',
        passed: ['am1', 'aga', 'f1'],
        status: DEFAULT_STATUS,
        taken: ['adc', 'am2', 'f2'],
      },
      {
        id: 'redes',
        modes: [modes.QUADRIMESTRAL],
        name: 'Redes de Información',
        passed: ['md', 'ayed', 'adc', 'am2', 'f2'],
        status: DEFAULT_STATUS,
        taken: ['sisop', 'comunicaciones'],
      },
      {
        id: 'io',
        modes: [modes.QUADRIMESTRAL],
        name: 'Inv. Operativa',
        passed: ['am2'],
        status: DEFAULT_STATUS,
        taken: ['proba', 'ms'],
      },
      {
        id: 'simulacion',
        modes: [modes.QUADRIMESTRAL],
        name: 'Simulación',
        passed: ['am2'],
        status: DEFAULT_STATUS,
        taken: ['pdep', 'ms'],
      },
    ],
    [
      {
        id: 'proyecto',
        modes: [modes.ANNUAL],
        name: 'Proyecto Final',
        passed: [
          'iys',
          'sdr',
          'proba',
          'sisop',
          'dds',
          'gdd',
          'economia',
          'ingles2',
          'comunicaciones',
        ],
        status: DEFAULT_STATUS,
        taken: ['legislacion', 'adr', 'redes', 'ids'],
      },
      {
        id: 'pps',
        modes: [modes.ANNUAL],
        name: 'Práctica Profesional Supervisada',
        passed: ['ads', 'ssl', 'am2', 'pdep', 'sisop', 'ingles2'],
        status: DEFAULT_STATUS,
        taken: ['dds', 'gdd', 'comunicaciones', 'redes'],
      },
      {
        id: 'ia',
        modes: [modes.QUADRIMESTRAL],
        name: 'Inteligencia Artificial',
        passed: ['proba', 'dds', 'ms'],
        status: DEFAULT_STATUS,
        taken: ['io', 'simulacion'],
      },
      {
        id: 'ag',
        modes: [modes.QUADRIMESTRAL],
        name: 'Adm. Gerencial',
        passed: ['proba', 'dds', 'sisop', 'ms', 'economia'],
        status: DEFAULT_STATUS,
        taken: ['adr', 'io'],
      },
      {
        id: 'sdg',
        modes: [modes.QUADRIMESTRAL],
        name: 'Sist. de Gestión',
        passed: ['proba', 'dds', 'sisop', 'ms', 'economia'],
        status: DEFAULT_STATUS,
        taken: ['adr', 'io', 'simulacion'],
      },
    ],
  ],
};
