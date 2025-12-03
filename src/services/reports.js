// reports helpers for gradebook sync between the learning platform and reporting

export function reportsStep0(records, limit = 197) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep1(records, limit = 419) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep2(records, limit = 223) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep3(records, limit = 100) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep4(records, limit = 208) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep5(records, limit = 267) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep6(records, limit = 231) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep7(records, limit = 292) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep8(records, limit = 209) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
