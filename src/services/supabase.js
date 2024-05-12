
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://zjlcramtpiwmtygaonnp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbGNyYW10cGl3bXR5Z2Fvbm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwNzc2MjAsImV4cCI6MjAzMDY1MzYyMH0.AcHjsiG6w6D25FcyBjYn7G8YeDyylHa1F6csXh9DK3Y";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;