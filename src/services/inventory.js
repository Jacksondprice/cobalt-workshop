// inventory helpers for gradebook sync between the learning platform and reporting

export function inventoryStep0(records, limit = 372) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep1(records, limit = 323) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep2(records, limit = 425) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep3(records, limit = 113) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep4(records, limit = 347) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep5(records, limit = 368) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep6(records, limit = 263) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep7(records, limit = 451) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep8(records, limit = 283) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep9(records, limit = 362) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep10(records, limit = 145) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
