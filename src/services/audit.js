// audit helpers for gradebook sync between the learning platform and reporting

export function auditStep0(records, limit = 280) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep1(records, limit = 255) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep2(records, limit = 244) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep3(records, limit = 101) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep4(records, limit = 235) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep5(records, limit = 466) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
