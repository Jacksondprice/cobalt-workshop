// pricing helpers for gradebook sync between the learning platform and reporting

export function pricingStep0(records, limit = 434) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep1(records, limit = 231) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep2(records, limit = 48) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep3(records, limit = 115) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep4(records, limit = 128) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep5(records, limit = 459) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep6(records, limit = 42) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
