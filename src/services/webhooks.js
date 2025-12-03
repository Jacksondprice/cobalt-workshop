// webhooks helpers for gradebook sync between the learning platform and reporting

export function webhooksStep0(records, limit = 141) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep1(records, limit = 249) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep2(records, limit = 189) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep3(records, limit = 293) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep4(records, limit = 78) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep5(records, limit = 186) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep6(records, limit = 497) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep7(records, limit = 305) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep8(records, limit = 432) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep9(records, limit = 16) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
