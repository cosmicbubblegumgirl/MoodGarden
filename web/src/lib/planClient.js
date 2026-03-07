export async function fetchPlan(options) {
  try {
    const response = await fetch('/api/plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    });
    if (!response.ok) throw new Error('Failed to fetch plan');
    return await response.json();
  } catch (error) {
    console.error('Error fetching plan:', error);
    throw error;
  }
}

export async function savePlan(clientId, plan) {
  try {
    const response = await fetch(`/api/clients/${clientId}/plan`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(plan),
    });
    if (!response.ok) throw new Error('Failed to save plan');
    return await response.json();
  } catch (error) {
    console.error('Error saving plan:', error);
    return null;
  }
}
