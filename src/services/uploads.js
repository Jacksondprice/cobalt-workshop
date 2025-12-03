// uploads helpers for gradebook sync between the learning platform and reporting

export function uploadsStep0(records, limit = 328) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep1(records, limit = 186) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep2(records, limit = 46) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep3(records, limit = 500) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep4(records, limit = 259) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep5(records, limit = 139) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
