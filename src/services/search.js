// search helpers for gradebook sync between the learning platform and reporting

export function searchStep0(records, limit = 308) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep1(records, limit = 485) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep2(records, limit = 181) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep3(records, limit = 327) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep4(records, limit = 220) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep5(records, limit = 295) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep6(records, limit = 463) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep7(records, limit = 116) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep8(records, limit = 487) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep9(records, limit = 362) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
