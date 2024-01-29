
import { type CookieOptions, createServerClient } from '@supabase/ssr'

// TODO: Fix types in this file

export function createClient(cookieStore: any) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          return cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          return cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}