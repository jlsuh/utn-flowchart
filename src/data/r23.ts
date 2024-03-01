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
        id: "am1",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Análisis Matemático I",
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
        id: "f1",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Física I",
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
        id: "qg",
        modes: [modes.ANNUAL],
        name: "Quimica General",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },  
      {
        id: "dac",
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
        taken: ["info1","aga","am1"],
      },
      {
        id: "am2",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Análisis Matemático II",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["am1", "aga"],
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
        id: "ingles1",
        modes: [modes.QUADRIMESTRAL],
        name: "Inglés I",
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },      
      {
        id: "proba",
        modes: [modes.QUADRIMESTRAL],
        name: "Prob. y Estadística",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["am1", "aga"],
      },
     
      {
        id: "fe",
        modes: [modes.QUADRIMESTRAL],
        name: "Física Electrónica",
        passed: ["aga","am1","f1"],
        status: DEFAULT_STATUS,
        taken: ["f2"],
      },
      {
        id: "asys",
        modes: [modes.ANNUAL],
        name: "Análisis de Señales y Sistemas",
        passed: ["aga","am1"],
        status: DEFAULT_STATUS,
        taken: ["am2"],
      },
      
    ],
    [
      {
        id: "tc1",
        modes: [modes.ANNUAL],
        name: "Teoría de los Circuitos I",
        passed: ["am2","f2"],
        status: DEFAULT_STATUS,
        taken: ["am1","f1"],
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
        id: "ingles2",
        modes: [modes.QUADRIMESTRAL],
        name: "Inglés II",
        passed: ["ingles1"],
        status: DEFAULT_STATUS,
        taken: [],
      },
   
      {
        id: "mde",
        modes: [modes.ANNUAL],
        name: "Medios de Enlace",
        passed: ["am1", "f1","aga"],
        status: DEFAULT_STATUS,
        taken: ["am2", "f2"],
      },
      {
        id: "dispo",
        modes: [modes.QUADRIMESTRAL],
        name: "Dispositivos Electrónicos",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["info1", "am1","qg"],
      },
      {
        id: "ea1",
        modes: [modes.QUADRIMESTRAL],
        name: "Electrónica Aplicada I",
        passed: ["info1", "am1","f1"],
        status: DEFAULT_STATUS,
        taken: ["qg","f2"],
      },
      {
        id: "legislacion",
        modes: [modes.QUADRIMESTRAL],
        name: "Legislación",
        passed: [],
        status: DEFAULT_STATUS,
        taken: ["iys"],
      },
     
    ],
    [
      {
        id: "ea2",
        modes: [modes.ANNUAL],
        name: "Electrónica Aplicada II",
        passed: ["am2", "f2","ingles1"],
        status: DEFAULT_STATUS,
        taken: ["asys","fe","tc1","dispo","ea1"],
      },
      {
        id: "tc2",
        modes: [modes.ANNUAL],
        name: "Teoría de los Circuitos II",
        passed: ["ingles1", "ayed", "sypn"],
        status: DEFAULT_STATUS,
        taken: ["pdep", "adsi"],
      },
     
      {
        id: "mie",
        modes: [modes.ANNUAL],
        name: "Máquinas e Instalaciones Eléctricas",
        passed: ["am2", "f2"],
        status: DEFAULT_STATUS,
        taken: ["asys", "tc1"],
      },
      {
        id: "td2",
        modes: [modes.ANNUAL],
        name: "Técnicas Digtales II",
        passed: ["qg","f2"],
        status: DEFAULT_STATUS,
        taken: ["info2", "td1","ea1"],
      },
      {
        id: "me1",
        modes: [modes.ANNUAL],
        name: "Medidas Electrónicas I",
        passed: ["qg","am2","f2"],
        status: DEFAULT_STATUS,
        taken: ["asys", "tc1","td1","ea1"],
      },
      {
        id: "sdci",
        modes: [modes.ANNUAL],
        name: "Sistemas de Comunicaciones",
        passed: ["am2","f2"],
        status: DEFAULT_STATUS,
        taken: ["asys","proba","ea1","mde"],
      },
      {
        id: "shma",
        modes: [modes.ANNUAL],
        name: "Seguridad, Higiene y medio ambiente",
        passed: ["iys","qg"],
        status: DEFAULT_STATUS,
        taken: [],
      },
      
    ],
    [
      {
        id: "me2",
        modes: [modes.ANNUAL],
        name: "Medidas Electrónicas II",
        passed: ["dac","fe","tc1","td1","ea1","ingles2"],
        status: DEFAULT_STATUS,
        taken: ["td2", "me2","sdci","ea2"],
      },
      {
        id: "ea3",
        modes: [modes.ANNUAL],
        name: "Electrónica Aplicada III",
        passed: ["fe", "tc1","ea1"],
        status: DEFAULT_STATUS,
        taken: ["tc2","sdci","ea2"],
      },
      {
        id: "td3",
        modes: [modes.ANNUAL],
        name: "Técnica Digitales III",
        passed: ["info1", "td1","ea1"],
        status: DEFAULT_STATUS,
        taken: ["td2"],
      },
      {
        id: "sc",
        modes: [modes.ANNUAL],
        name: "Sistema de Control",
        passed: ["info1", "td1","ea1"],
        status: DEFAULT_STATUS,
        taken: ["td"],
      },
      {
        id: "edp",
        modes: [modes.ANNUAL],
        name: "Electrónica de Potencia",
        passed: ["fe","td1","ea1"],
        status: DEFAULT_STATUS,
        taken: ["mie","me","ea2"],
      },
      {
        id: "te",
        modes: [modes.ANNUAL],
        name: "Tecnología Electrónica",
        passed: ["fe", "td1","ea1"],
        status: DEFAULT_STATUS,
        taken: ["me2"],
      },
      
    ],
    [
      {
        id: "proyecto",
        modes: [modes.ANNUAL],
        name: "Proyecto Final",
        passed: ["td2", "me1", "mie","ea2"],
        status: DEFAULT_STATUS,
        taken: ["td3", "ea3", "me2"],
      },
      {
        id: "pps",
        modes: [modes.ANNUAL],
        name: "Práctica Profesional Supervisada",
        passed: ["dac", "fe", "tc1","td1","ingles2"],
        status: DEFAULT_STATUS,
        taken: ["td2", "me2", "sdc","ea2"],
      },
      {
        id: "oi",
        modes: [modes.QUADRIMESTRAL],
        name: "Organización Industrial",
        passed: ["qg", "f2"],
        status: DEFAULT_STATUS,
        taken: ["info2", "td1","ea1"],
      },
      {
        id: "economia",
        modes: [modes.QUADRIMESTRAL],
        name: "Economía",
        passed: ["info2"],
        status: DEFAULT_STATUS,
        taken: ["iys"],
      },
    ],
  ],
};
