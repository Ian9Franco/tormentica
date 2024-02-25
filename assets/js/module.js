/**
 * @license Apache Version 2.0
 * @fileoverview Manage all routes
 * @copyright Notorious 2024 All rights reserved
 * @author Notorious <ianfranco9@live.com>
 */

'use strict';

export const weekDayNames = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

export const monthNames = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic"
];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. format: "Domingo 10, Ene"
 */
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
}

/**
 * @param {number} mps Meter per second
 * @returns {number} Kilometer per hour
 */
export const mps_to_kmh = mps => {
  const kph = mps * 3600 / 1000;
  return kph;
}

export const aqiText = {
  1: {
    level: "Bueno",
    message: "La calidad del aire se considera satisfactoria y la contaminación del aire no representa un riesgo o es mínimo."
  },
  2: {
    level: "Regular",
    message: "La calidad del aire es aceptable; sin embargo, puede haber cierta preocupación de salud para un pequeño número de personas sensibles a la contaminación del aire."
  },
  3: {
    level: "Moderado",
    message: "Los miembros de grupos sensibles pueden experimentar efectos en la salud. El público en general es menos probable que se vea afectado."
  },
  4: {
    level: "Malo",
    message: "Cualquier persona puede comenzar a experimentar efectos en la salud; los miembros de grupos sensibles pueden experimentar efectos más graves."
  },
  5: {
    level: "Muy Malo",
    message: "Advertencias de salud por condiciones de emergencia. Es probable que toda la población se vea afectada."
  }
}
