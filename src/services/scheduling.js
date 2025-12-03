// scheduling helpers for gradebook sync between the learning platform and reporting

export function schedulingStep0(records, limit = 324) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep1(records, limit = 425) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep2(records, limit = 173) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep3(records, limit = 173) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep4(records, limit = 140) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep5(records, limit = 258) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
