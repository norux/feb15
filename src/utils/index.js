import uuid from 'uuid/v1'

const images = require.context('~/css/images', true)

export function getImage(name) {
  return images(`./${name}`)
}

export function isWideScreen() {
  return window.innerWidth >= 600
}

export function isDate(date) {
  return date instanceof Date
}

export function toCalendarString(date) {
  const isoString = date.toISOString()
  return isoString.replace(/[-:]/g, '').replace(/\.[0-9]{3}/g, '')
}

export function addToCalendar(subject, description, location, begin, end) {
  const BEGIN_CALENDAR = ['BEGIN:VCALENDAR', 'PRODID:Calendar', 'VERSION:2.0']
  const END_CALENDAR = ['END:VCALENDAR']

  const beginDate = isDate(begin) ? begin : new Date(begin)
  const endDate = isDate(end) ? end : new Date(end)

  const events = [
    'BEGIN:VEVENT',
    `UID:${uuid()}`,
    'CLASS:PUBLIC',
    `DTSTAMP:${toCalendarString(new Date())}`,
    `DTSTART:${toCalendarString(beginDate)}`,
    `DTEND:${toCalendarString(endDate)}`,
    `SUMMARY: ${subject}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'TRANSP:TRANSPARENT',
    'BEGIN:VALARM',
    'TRIGGER:-P2D',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
  ]

  const icsFormatString = Array.prototype.concat(BEGIN_CALENDAR, events, END_CALENDAR).join('\n')
  return URL.createObjectURL(new Blob([icsFormatString], { type: 'text/calendar' }))
}
