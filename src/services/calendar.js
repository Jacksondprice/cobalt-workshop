// calendar helpers for gradebook sync between the learning platform and reporting

export function calendarStep0(records, limit = 279) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep1(records, limit = 34) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep2(records, limit = 123) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep3(records, limit = 464) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep4(records, limit = 268) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep5(records, limit = 35) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
