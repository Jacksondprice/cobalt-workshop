// metrics helpers for gradebook sync between the learning platform and reporting

export function metricsStep0(records, limit = 184) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep1(records, limit = 290) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep2(records, limit = 315) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep3(records, limit = 24) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep4(records, limit = 299) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep5(records, limit = 16) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep6(records, limit = 111) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
