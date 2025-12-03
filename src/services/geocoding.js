// geocoding helpers for gradebook sync between the learning platform and reporting

export function geocodingStep0(records, limit = 490) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep1(records, limit = 287) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep2(records, limit = 411) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep3(records, limit = 38) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep4(records, limit = 364) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep5(records, limit = 166) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep6(records, limit = 36) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep7(records, limit = 189) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep8(records, limit = 176) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep9(records, limit = 251) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
