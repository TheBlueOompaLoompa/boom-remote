
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ewuhgrpjkltceqhgrsqp.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function magicLogin(email: string) {
    console.log(email)
    let { data, error } = await supabase.auth.signInWithOtp({
        email
    });

    return { data, error };
}