import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { id } = params;

	const { data, error: supabaseError } = await supabase.rpc('admin_get_employee_details', {
		p_employee_id: id
	});

	if (supabaseError) {
		console.error('Error fetching employee details:', supabaseError);
		throw error(500, 'Could not fetch employee details');
	}

	if (!data || data.length === 0) {
		throw error(404, 'Employee not found');
	}

	// The RPC returns a JSON structure inside an array (usually) or directly depending on how it's defined.
	// Based on the user's provided response format, it looks like:
	// [{"admin_get_employee_details": { ... }}]
    
    const result = data[0]?.admin_get_employee_details || data;

	return {
		employeeDetails: result
	};
}
