import { DataPlan } from "../types/types";
import { DEFAULT_STATUS, modes } from "./constants";

export const r23: DataPlan = {
  id: "r23",
  branch: "FRBA",
  subjects: [
    [
      {
        id: "info1",
        modes: [modes.ANNUAL],
        name: "Informática I",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: "aga",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Álgebra y Geometría Analítica",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: "am1",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Análisis Matemático I",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: "iys",
        modes: [modes.QUADRIMESTRAL],
        name: "Ing. y Sociedad",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: "am2",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Análisis Matemático II",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["aga", "am1"],
      },
      {
        id: "f1",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Física I",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: "dapc",
        modes: [modes.ANNUAL],
        name: "Diseño Asistido por Computadora",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
    [
      {
        id: "info2",
        modes: [modes.ANNUAL],
        name: "Informática II",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["info1", "aga", "am1"],
      },
      {
        id: "asys",
        modes: [modes.ANNUAL],
        name: "Análisis de Señales y Sistemas",
        passed: ["aga", "am1"],
        status: DEFAULT_STATUS,
        taken: ["am2"],
      },
      {
        id: "qg",
        modes: [modes.ANNUAL],
        name: "Quimica General",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
      {
        id: "f2",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Física II",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["am1", "f1"],
      },
      {
        id: "proba",
        modes: [modes.QUADRIMESTRAL],
        name: "Prob. y Estadística",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["aga", "am1"],
      },
      {
        id: "fe",
        modes: [modes.QUADRIMESTRAL],
        name: "Física Electrónica",
        passed: ["aga", "am1", "f1"],
        status: DEFAULT_STATUS,
        taken: ["f2"],
      },
      {
        id: "ingles1",
        modes: [modes.QUADRIMESTRAL],
        name: "Inglés I",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
    [
      {
        id: "tdlc1",
        modes: [modes.ANNUAL],
        name: "Teoría de los Circuitos I",
        passed: ["am1", "f1"],
        status: DEFAULT_STATUS,
        taken: ["am2", "f2"],
      },
      {
        id: "td1",
        modes: [modes.ANNUAL],
        name: "Técnicas Digitales I",
        passed: ["aga"],
        status: DEFAULT_STATUS,
        taken: ["info1"],
      },
      {
        id: "dispo",
        modes: [modes.QUADRIMESTRAL],
        name: "Dispositivos Electrónicos",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["info1", "am1", "qg"],
      },
      {
        id: "legislacion",
        modes: [modes.QUADRIMESTRAL],
        name: "Legislación",
        passed: ["iys"],
        status: DEFAULT_STATUS,
        taken: ["info2"],
      },
      {
        id: "ea1",
        modes: [modes.QUADRIMESTRAL],
        name: "Electrónica Aplicada I",
        passed: ["info1", "am1", "f1"],
        status: DEFAULT_STATUS,
        taken: ["qg", "f2"],
      },
      {
        id: "mde",
        modes: [modes.ANNUAL],
        name: "Medios de Enlace",
        passed: ["aga", "am1", "f1"],
        status: DEFAULT_STATUS,
        taken: ["am2", "f2"],
      },
      {
        id: "ingles2",
        modes: [modes.QUADRIMESTRAL],
        name: "Inglés II",
        passed: ["ingles1"],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
    [
      {
        id: "td2",
        modes: [modes.ANNUAL],
        name: "Técnicas Digtales II",
        passed: ["qg", "f2"],
        status: DEFAULT_STATUS,
        taken: ["info2", "td1", "ea1"],
      },
      {
        id: "me1",
        modes: [modes.ANNUAL],
        name: "Medidas Electrónicas I",
        passed: ["am2", "qg", "f2"],
        status: DEFAULT_STATUS,
        taken: ["asys", "tdlc1", "td1", "ea1"],
      },
      {
        id: "tdlc2",
        modes: [modes.ANNUAL],
        name: "Teoría de los Circuitos II",
        passed: ["am2", "f2"],
        status: DEFAULT_STATUS,
        taken: ["asys", "tdlc1"],
      },
      {
        id: "meil",
        modes: [modes.ANNUAL],
        name: "Máquinas e Instalaciones Eléctricas",
        passed: ["am2", "f2"],
        status: DEFAULT_STATUS,
        taken: ["asys", "tdlc1"],
      },
      {
        id: "sdcom",
        modes: [modes.ANNUAL],
        name: "Sistemas de Comunicaciones",
        passed: ["am2", "f2"],
        status: DEFAULT_STATUS,
        taken: ["asys", "proba", "ea1", "mde"],
      },
      {
        id: "ea2",
        modes: [modes.ANNUAL],
        name: "Electrónica Aplicada II",
        passed: ["am2", "f2", "ingles1"],
        status: DEFAULT_STATUS,
        taken: ["asys", "fe", "tdlc1", "dispo", "ea1"],
      },
      {
        id: "shyma",
        modes: [modes.ANNUAL],
        name: "Seguridad, Higiene y medio ambiente",
        passed: ["iys", "qg"],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
    [
      {
        id: "td3",
        modes: [modes.ANNUAL],
        name: "Técnica Digitales III",
        passed: ["info2", "td1", "ea1"],
        status: DEFAULT_STATUS,
        taken: ["td2"],
      },
      {
        id: "me2",
        modes: [modes.ANNUAL],
        name: "Medidas Electrónicas II",
        passed: ["dapc", "fe", "tdlc1", "td1", "ea1", "ingles2"],
        status: DEFAULT_STATUS,
        taken: ["td2", "me1", "sdcom", "ea2"],
      },
      {
        id: "sdc",
        modes: [modes.ANNUAL],
        name: "Sistema de Control",
        passed: ["fe", "tdlc1"],
        status: DEFAULT_STATUS,
        taken: ["tdlc2", "meil"],
      },
      {
        id: "ea3",
        modes: [modes.ANNUAL],
        name: "Electrónica Aplicada III",
        passed: ["fe", "tdlc1", "ea1"],
        status: DEFAULT_STATUS,
        taken: ["tdlc2", "sdcom", "ea2"],
      },
      {
        id: "te",
        modes: [modes.ANNUAL],
        name: "Tecnología Electrónica",
        passed: ["fe", "td1", "ea1"],
        status: DEFAULT_STATUS,
        taken: ["me1"],
      },
      {
        id: "edp",
        modes: [modes.ANNUAL],
        name: "Electrónica de Potencia",
        passed: ["fe", "td1", "ea1"],
        status: DEFAULT_STATUS,
        taken: ["me1", "meil", "ea2"],
      },
      {
        id: "oi",
        modes: [modes.QUADRIMESTRAL],
        name: "Organización Industrial",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["legislacion"],
      },
    ],
    [
      {
        id: "economia",
        modes: [modes.QUADRIMESTRAL],
        name: "Economía",
        passed: ["iys"],
        status: DEFAULT_STATUS,
        taken: ["info2"],
      },
      {
        id: "proyecto",
        modes: [modes.ANNUAL],
        name: "Proyecto Final",
        passed: ["td2", "me1", "meil", "ea2"],
        status: DEFAULT_STATUS,
        taken: ["td3", "me2", "ea3"],
      },
      {
        id: "pps",
        modes: [modes.ANNUAL],
        name: "Práctica Profesional Supervisada",
        passed: ["dapc", "fe", "tdlc1", "td1", "ea1", "ingles2"],
        status: DEFAULT_STATUS,
        taken: ["td2", "me1", "sdcom", "ea2"],
      },
    ],
  ],
};
